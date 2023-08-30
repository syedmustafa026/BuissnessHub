import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Starters/Splash'
import BottomNavigator from './BottomNavigator'
import OnBoard from '../screens/Starters/OnBoard'
import AdDetails from '../screens/AdDetails/AdDetails'
import CategorizedResults from '../screens/DisplayCards/CategorizedResults'
import Home from '../screens/Home'
import Favorite from '../screens/Favorites'
import Menu from '../screens/Menu/Menu'
import PlaceAd from '../screens/PlaceAds/PlaceAd'
import PlaceAdListing from '../screens/PlaceAds/PlaceAdListing'
import PlaceAdCategory from '../screens/PlaceAds/PlaceAdCategory'
import PlaceAdSubCategory from '../screens/PlaceAds/PlaceAdSubCategory'
import PlaceAdDetails from '../screens/PlaceAds/PlaceAdDetails'
import SearchedResults from '../screens/DisplayCards/SearchedResults'
import ResultsSubCategory from '../screens/ResultsSubCategory'
import Notifications from '../screens/Notifications'
import Filters from '../screens/Filters'
import PaymentMethod from '../screens/PaymentMethod'
import Checkout from '../screens/Checkout'
import PlaceAdTitle from '../screens/PlaceAds/PlaceAdTitle'
import PlaceAdTermsConditions from '../screens/PlaceAds/PlaceAdTermsConditions'
import ReportAd from '../screens/AdDetails/ReportAd'
import ConfirmReportAd from '../screens/AdDetails/ConfirmReportAd'
import Profile from '../screens/Menu/Profile'
import EditProfile from '../screens/Menu/EditProfile'
import ChangePassword from '../screens/Menu/ChangePassword'
import MyAds from '../screens/Menu/MyAds'
import SavedSearches from '../screens/SavedSearches'
import PublicProfile from '../screens/PublicProfile'
import Login from '../screens/Menu/Login'
import Signup from '../screens/Menu/Signup'
import Verification from '../screens/Menu/Verification'
import ForgetPassword from '../screens/Menu/ForgetPassword'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Filters' >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="OnBoard" component={OnBoard} />
                <Stack.Screen options={{ headerShown: true, title: null }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: true, title: null }} name="Signup" component={Signup} />

                <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Filters" component={Filters} />
                <Stack.Screen name="Favorite" component={Favorite} />
                <Stack.Screen options={{ headerShown: true, headerTitleAlign: 'center', headerStyle: { shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, }, }} name="Notifications" component={Notifications} />

                <Stack.Screen name="PlaceAd" component={PlaceAd} />
                <Stack.Screen name="PlaceAdListing" component={PlaceAdListing} />
                <Stack.Screen name="PlaceAdCategory" component={PlaceAdCategory} />
                <Stack.Screen options={{ headerShown: true, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="PlaceAdSubCategory" component={PlaceAdSubCategory} />
                <Stack.Screen options={{ headerShown: true, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="PlaceAdDetails" component={PlaceAdDetails} />
                <Stack.Screen options={{ headerShown: true, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="PlaceAdTitle" component={PlaceAdTitle} />
                <Stack.Screen options={{ headerShown: true, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="PlaceAdTermsConditions" component={PlaceAdTermsConditions} />
                <Stack.Screen options={{ headerShown: false, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen options={{ headerShown: false, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="Verification" component={Verification} />
                {/* <Stack.Screen options={{ headerShown: true, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="PaymentMethod" component={PaymentMethod} />
                <Stack.Screen options={{ headerShown: true, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="Checkout" component={Checkout} />  */}
                {/* <Stack.Screen options={{ headerShown: true, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="PlaceAdPreCategory" component={PlaceAdPreCategory} /> */}
                {/* <Stack.Screen options={{ headerShown: true, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="PlaceAdAutoFillDetails" component={PlaceAdAutoFillDetails} /> */}
                {/* <Stack.Screen options={{ headerShown: true, title: 'Place an Ad', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="PlaceAdMotorDetails" component={PlaceAdMotorDetails} /> */}


                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 18 } }} name="ResultsSubCategory" component={ResultsSubCategory} />
                <Stack.Screen name="CategorizedResults" component={CategorizedResults} />
                <Stack.Screen name="AdDetails" component={AdDetails} />
                <Stack.Screen options={{ headerShown: true, title: 'Report an Ad', headerTitleStyle: { fontSize: 16 } }} name="ReportAd" component={ReportAd} />
                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 16 } }} name="ConfirmReportAd" component={ConfirmReportAd} />

                <Stack.Screen options={{ headerShown: true, title: '2049 Results', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="SearchedResults" component={SearchedResults} />

                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen options={{ headerShown: true, title: 'Profile', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="Profile" component={Profile} />
                <Stack.Screen options={{ headerShown: true, title: 'Edit Personal Details', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="EditProfile" component={EditProfile} />
                <Stack.Screen options={{ headerShown: true, title: 'Change your Password', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="ChangePassword" component={ChangePassword} />
                <Stack.Screen options={{ headerShown: true, title: 'My Ads', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16 } }} name="MyAds" component={MyAds} />
                <Stack.Screen options={{ headerShown: true, headerTitleAlign: 'center', title: 'Saved Searches', headerStyle: { shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, }, }} name="SavedSearches" component={SavedSearches} />
                <Stack.Screen name="PublicProfile" component={PublicProfile} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
