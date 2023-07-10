import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import BottomNavigator from './BottomNavigator'
import OnBoard from '../screens/OnBoard'
import AdDetails from '../screens/AdDetails'
import SearchResults from '../screens/SearchedResults'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='SearchResults' >
                <Stack.Screen options={{
                    headerShown: false
                }}
                    name="Splash"
                    component={Splash} />
                <Stack.Screen options={{
                    headerShown: false
                }}
                    name="OnBoard"
                    component={OnBoard} />
                <Stack.Screen options={{
                    headerShown: false
                }}
                    name="BottomNavigator"
                    component={BottomNavigator} />
                <Stack.Screen options={{
                    headerShown: false
                }}
                    name="AdDetails"
                    component={AdDetails} />
                    <Stack.Screen options={{
                    headerShown: false
                }}
                    name="SearchResults"
                    component={SearchResults} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
