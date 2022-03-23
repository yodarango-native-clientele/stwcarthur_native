import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getHeaderTitle} from '@react-navigation/elements';

// components
import Header from './organisms/Header';
import StandardVectorIcon from './atoms/images/StandardVectorIcon';

// navigation components
import {EventsStackNavigator, HomeStackNavigator} from './Navigation';
import Watch from './Screens/Watch';

//styles
import Styles from '../assets/styles/Globals.style';
import COLORS from '../assets/styles/colors';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        header: ({navigation, route, options}) => {
          const title = getHeaderTitle(options, route.name);

          return <Header title={'STWC'} />;
        },
        tabBarStyle: {
          ...Styles.tabBar,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <StandardVectorIcon
              iconSource={require('../assets/images/icons/home.png')}
              addStyles={{
                tintColor: focused
                  ? COLORS.thirdColor
                  : COLORS.primaryColorContrast,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <StandardVectorIcon
              iconSource={require('../assets/images/icons/events.png')}
              addStyles={{
                tintColor: focused
                  ? COLORS.thirdColor
                  : COLORS.primaryColorContrast,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={Watch}
        options={{
          tabBarIcon: ({focused}) => (
            <StandardVectorIcon
              iconSource={require('../assets/images/icons/watch.png')}
              addStyles={{
                tintColor: focused
                  ? COLORS.thirdColor
                  : COLORS.primaryColorContrast,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
