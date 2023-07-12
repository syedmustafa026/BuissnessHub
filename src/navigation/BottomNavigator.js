import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Favorites from '../screens/Favorites'
import Messages from '../screens/Messages'
import PlaceAd from '../screens/PlaceAd'
import Menu from '../screens/Menu'

import * as colors from "../utilities/colors"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: colors.black,
        tabBarLabelStyle: { padding: 7, color: colors.gray },
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 70,
          paddingTop: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon name='home-outline'
              size={26}
              color={focused ? colors.black : colors.gray} />
          ),
        }}
        name="Home"
        component={Home} />
      <Tab.Screen options={{
        title: 'Favorites',
        headerTitle: 'My Favorites',
        headerTitleAlign: 'center',
        headerStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        },
        tabBarIcon: ({ focused }) => (
          <Icon name='heart-outline'
            size={26}
            color={focused ? colors.black : colors.gray} />
        ),
      }}
        name="Favorite"
        component={Favorites} />
      <Tab.Screen options={{
        title: 'Place an ad',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Icon name='plus-circle'
            size={32}
            color={colors.primary} />
        ),
      }}
        name="PlaceAd"
        component={PlaceAd} />
      <Tab.Screen options={{
        title: 'Messages',
        headerTitle: 'Messages',
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused }) => (
          <Icon name='message-reply-text-outline'
            size={26}
            color={focused ? colors.black : colors.gray} />
        ),
      }}
        name="Messages"
        component={Messages} />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon name='reorder-horizontal'
              size={26}
              color={focused ? colors.black : colors.gray} />
          ),
        }
        }
        name="Menu"
        component={Menu}
      />

    </Tab.Navigator>
  )
}

export default BottomNavigator