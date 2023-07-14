import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Searchbar, TouchableRipple } from 'react-native-paper'
const Tab = createMaterialTopTabNavigator();


const Filters = ({navigation}) => {
  const Rent = () => {
    return (
      <View style={styles.header}>

      </View>
    )
  }
  const Buy = () => {
    return (
      <View style={styles.header}>
          
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', margin: 12 }}>
          <Icon
          onPress={()=>navigation.goBack()}
            name='close'
            size={24}
            color={colors.gray} />
          <Text style={{ color: colors.black, fontSize: 18, marginHorizontal: 16, fontFamily: fonts.BOLD }}>Filters</Text>
        </View>
        <Text style={{ color: colors.primary, fontSize: 16, marginHorizontal: 16, marginTop: 12, fontFamily: fonts.BOLD }}>Reset</Text>
      </View>
      <Tab.Navigator screenOptions={{
        swipeEnabled: false,
        tabBarActiveTintColor: colors.primary,
        tabBarAndroidRipple : true,
        tabBarStyle: { backgroundColor: colors.white },
      }}>
      <Tab.Screen name="Buy" component={Buy} />
        <Tab.Screen name="Rent" component={Rent} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.gray100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },

})
export default Filters