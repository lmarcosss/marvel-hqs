import React, { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/core';
import { Image, ScrollView, Text, View } from 'react-native';
import { NavigationItemsEnum } from '@enums';
import api from '@api';
import { formatComics } from '@core';
import { IComics, IMarvelComicsAPI } from '@types';
import { Loader } from '@components';
import styles from './styles';

type ParamList = {
  Details: {
    comicId: number;
  };
};

export function DetailsScreen() {
  const route =
    useRoute<RouteProp<ParamList, NavigationItemsEnum.DETAILS_SCREEN>>();
  const { comicId } = route.params;
  const [comic, setComic] = useState({} as IComics);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const { data } = await api.get<IMarvelComicsAPI>(`comics/${comicId}`);
        const [comicFormatted] = formatComics(data.data.results);

        setComic(comicFormatted);
      } catch ({ message }) {
        console.log(message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <Loader size="large" />
      </View>
    );
  }

  return (
    <View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: comic.image }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.informationsContainer}>
          <Text style={styles.title}>{comic.title}</Text>
          {!!comic.creators && (
            <Text style={styles.creators}>Autore(s): {comic.creators}</Text>
          )}
          {!!comic.pageCount && (
            <Text>Total de páginas: {comic.pageCount}</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
