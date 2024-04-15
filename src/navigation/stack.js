import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {stackNames} from './stackNames';
import WhatsApp from '../pages/whatsapp/WhatsApp';
import Splash from '../pages/splash/Splash';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={stackNames.splash}>
      <Stack.Screen name={stackNames.splash} component={Splash} />
      <Stack.Screen name={stackNames.home} component={WhatsApp} />
    </Stack.Navigator>
  );
};

export default AppStack;
