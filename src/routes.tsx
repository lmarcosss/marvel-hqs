import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { DetailsScreen, HomeScreen } from '@screens';
import { NavigationItemsEnum } from '@enums';

const Stack = createNativeStackNavigator();

const commonOptions: NativeStackNavigationOptions = {
  headerTintColor: '#000',
  headerStyle: { backgroundColor: '#fff' },
  headerBackTitle: 'Voltar',
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={NavigationItemsEnum.HOME_SCREEN}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            ...commonOptions,
            title: 'Detalhes',
          }}
          name={NavigationItemsEnum.DETAILS_SCREEN}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
