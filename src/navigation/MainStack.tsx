import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../constants/Colors';
import {HomeScreen} from '../screens/homeScreen/HomeScreen';

export type MainStackParamList = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack: React.VFC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: Colors.darkPrimary},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
