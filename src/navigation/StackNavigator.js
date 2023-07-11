import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import BottomNavigator from './BottomNavigator'
import OnBoard from '../screens/OnBoard'
import AdDetails from '../screens/AdDetails'
import SearchResults from '../screens/SearchResults'
import Home from '../screens/Home'
import Favorite from '../screens/Favorites'
import Menu from '../screens/Menu'
import PlaceAd from '../screens/PlaceAd'
import PlaceAdListing from '../screens/PlaceAdListing'
import PlaceAdCategory from '../screens/PlaceAdCategory'
import PlaceAdSubCategory from '../screens/PlaceAdSubCategory'
import PlaceAdDetails from '../screens/PlaceAdDetails'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='PlaceAdDetails' >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="OnBoard" component={OnBoard} />

                <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Favorite" component={Favorite} />

                <Stack.Screen name="PlaceAd" component={PlaceAd} />
                <Stack.Screen name="PlaceAdListing" component={PlaceAdListing} />
                <Stack.Screen name="PlaceAdCategory" component={PlaceAdCategory} />
                <Stack.Screen options={{headerShown:true, title: 'Place an Ad',headerTitleAlign: 'center',headerTitleStyle:{fontSize:16}}} name="PlaceAdSubCategory" component={PlaceAdSubCategory} />
                <Stack.Screen options={{headerShown:true, title: 'Place an Ad',headerTitleAlign: 'center',headerTitleStyle:{fontSize:16}}} name="PlaceAdDetails" component={PlaceAdDetails} />
                <Stack.Screen name="SearchResults" component={SearchResults} />
                <Stack.Screen name="AdDetails" component={AdDetails} />

                <Stack.Screen name="Menu" component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
