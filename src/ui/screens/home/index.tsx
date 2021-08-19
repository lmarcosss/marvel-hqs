import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { NavigationProp } from '@react-navigation/core';
import { IComics, IMarvelComicsAPI } from '@types';
import { EmptyList, Loader, SearchInput } from '@components';
import { formatComics, removeDuplicateComics } from '@core';
import api from '@api';
import { NavigationItemsEnum } from '@enums';
import { useDebounce } from '@hooks';

import styles from './styles';

interface IProps {
  navigation: NavigationProp<any>;
}

interface IFooter {
  loadingList: boolean;
}

function Footer({ loadingList }: IFooter) {
  if (!loadingList) return null;

  return (
    <View style={styles.footer}>
      <Loader />
    </View>
  );
}

const END_POINT = 'comics';
const DEBOUNCE_TIME = 1000;

export function HomeScreen({ navigation }: IProps) {
  const [comics, setComics] = useState([] as IComics[]);
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, DEBOUNCE_TIME);

  const params = useMemo(() => {
    return debouncedSearch.length > 0
      ? { titleStartsWith: debouncedSearch }
      : {};
  }, [debouncedSearch]);

  async function fetchComics() {
    try {
      setLoadingScreen(true);
      const { data } = await api.get<IMarvelComicsAPI>(END_POINT, { params });

      const dataFormatted = formatComics(data.data.results);

      setComics([...dataFormatted]);
    } catch ({ message }) {
      console.log(message);
    } finally {
      setLoadingScreen(false);
    }
  }

  async function onEndReach() {
    try {
      setLoadingList(true);

      const { data } = await api.get<IMarvelComicsAPI>(END_POINT, {
        params: {
          offset: comics.length,
          ...params,
        },
      });

      const dataFormatted = formatComics(data.data.results);
      setComics(removeDuplicateComics([...comics, ...dataFormatted]));
    } catch ({ message }) {
      console.log(message);
    } finally {
      setLoadingList(false);
    }
  }

  useEffect(() => {
    async function getData() {
      await fetchComics();
    }

    getData();
  }, [debouncedSearch]);

  function handleNavigate(comicId: number) {
    navigation.navigate(NavigationItemsEnum.DETAILS_SCREEN, {
      comicId,
    });
  }

  function onBlurInput() {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }

  if (loadingScreen) {
    return (
      <View style={styles.loaderContainer}>
        <Loader size="large" />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={onBlurInput}>
      <SafeAreaView>
        <SearchInput
          placeholder="Encontre seus hq's preferidos"
          inputRef={inputRef}
          value={search}
          onChangeValue={setSearch}
        />
        <FlatList
          keyExtractor={item => String(item.id)}
          data={comics}
          contentContainerStyle={[
            styles.listContainer,
            comics.length === 0 && styles.emptyListContainer,
          ]}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => <Footer loadingList={loadingList} />}
          ListEmptyComponent={() => (
            <EmptyList
              emptyText={
                'Nenhuma hq encontrada!\nPor favor tente outra pesquisa.'
              }
            />
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleNavigate(item.id)}
              style={styles.comicContainer}
            >
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: item.image }}
              />
              <View style={styles.containerInformations}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
