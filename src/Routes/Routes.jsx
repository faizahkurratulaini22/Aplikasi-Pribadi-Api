import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from '../Screen/Opening';
import Home from '../Screen/Home';
import DetailDoa from '../Screen/DetailDoa';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Screen">
      <Stack.Screen name="Screen" component={Screen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailDoa" component={DetailDoa} />
    </Stack.Navigator>
  );
};

export default Routes;
