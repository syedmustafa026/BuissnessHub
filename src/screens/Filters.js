import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import Rent from "../components/Filters/Rent"
import Buy from "../components/Filters/Buy"

const Filters = ({ navigation }) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', margin: 12 }}>
          <Icon
            onPress={() => navigation.goBack()}
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
        tabBarAndroidRipple: true,
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
        tabBarStyle: { backgroundColor: colors.white },
      }}>
        <Tab.Screen name="Rent" component={Rent} />
        <Tab.Screen name="Buy" component={Buy} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  h1: {
    color: colors.black,
    fontSize: 20,
    zIndex: 2,
    fontFamily: fonts.BOLD,
  },
  h2: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.BOLD,
    marginBottom: 14,
    marginHorizontal: 20
  },
  h4: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: fonts.REGULAR,
    marginHorizontal: 12,
  },
  selectButton: {
    width: '100%',
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 4,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.gray300,
    borderWidth: 1,
    marginTop: 8,
  },
  selectLabel: {
    fontSize: hp("2"),
    color: colors.gray,
    textAlign: 'justify',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: fonts.MEDIUM,
  },
})
export default Filters