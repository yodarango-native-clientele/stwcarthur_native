import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigation components
import Event from './Screens/nested/Event';
import Events from './Screens/Events';
import Home from './Screens/Home';

const Stack = createNativeStackNavigator();

const EventsStackNavigator = ({route, options}) => {
  return (
    <Stack.Navigator
      initialRouteName="Events"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Index" component={Events} />
      <Stack.Screen name="Event" component={Event} />
    </Stack.Navigator>
  );
};

const HomeStackNavigator = ({route, options}) => {
  return (
    <Stack.Navigator
      initialRouteName="Events"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Index" component={Home} />
    </Stack.Navigator>
  );
};

export {EventsStackNavigator, HomeStackNavigator};
