import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from "react-native-paper";
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


const PublicProfile = ({ navigation }) => {
  const Ratings = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/images/ratings.jpeg")} style={styles.img} />
      </SafeAreaView>
    )
  }
  const Ads = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/images/smallCactus.jpeg")} style={styles.img1} />
        <Text numberOfLines={1} style={styles.h1}>You don't have any ads that are live</Text>
        <Button
          onPress={() => { navigation.navigate('PlaceAdListing') }}
          mode="contained"
          style={styles.button}
          labelStyle={styles.ButtonLabel}
        >Post Ad now</Button>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', margin: 12, justifyContent: 'space-between' }}>
        <Icon
          onPress={() => navigation.goBack()}
          name='chevron-left'
          size={28}
          color={colors.gray} />
        <Icon
          onPress={() => navigation.goBack()}
          name='share-variant-outline'
          size={24}
          color={colors.gray} />
      </View>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../assets/images/Community.png")} />
        <View style={{ flexDirection: 'column' }}>
          <Text numberOfLines={1} style={styles.heading}>Mustafa Ahmed</Text>
          <Text style={styles.text}>Joined on July 2023</Text>
        </View>
      </View>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarAndroidRipple: true,
        tabBarStyle: { backgroundColor: colors.white },
        tabBarIndicatorStyle: { backgroundColor: colors.primary },

      }}>
        <Tab.Screen name="Ads" component={Ads} />
        <Tab.Screen name="Ratings" component={Ratings} />
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
    alignItems: 'center',
    marginHorizontal: 8
  },
  img: {
    marginTop:40,
    width: 400,
    height: 400,
    alignSelf: 'center'
  },
  image: {
    width: wp('16'),
    height: hp('16'),
    resizeMode: 'contain'
  },
  h1: {
    color: colors.black,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.BOLD,
  },
  heading: {
    color: colors.black,
    fontSize: 20,
    fontFamily: fonts.BOLD,
  },
  text: {
    color: colors.gray,
    fontSize: 14,
    marginHorizontal: wp('2')
  },
  img1: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 20
  },
  button: {
    marginTop: 25,
    width: '80%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1
  },
  ButtonLabel: {
    fontSize: hp("2.2"),
    color: colors.white,
    fontFamily: fonts.SEMIBOLD,
  },
})
export default PublicProfile