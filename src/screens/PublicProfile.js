import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from "react-native-paper";
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import moment from "moment";
import Toast from "../components/Extras/Toast";
import * as functions from '../utilities/functions'
import Separator from "../components/Extras/Separator";

const Tab = createMaterialTopTabNavigator();


const PublicProfile = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true)
  const [ads, setAds] = useState([])

  const Ratings = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/images/ratings.jpeg")} style={styles.img} />
      </SafeAreaView>
    )
  }
  const getMyAds = async () => {
    try {
      const response = await functions.getUserAds()
      if (response) {
        const live = response.filter(value => value.status == 'pending')
        setAds(live)
      }
      setLoading(false)
    } catch (error) {
      Toast(error.message || "Server Error")
    }
  }

  const deleteMyAd = async (id) => {
    Alert.alert("Sure", "Are you sure you want to delete this ad?", [{
      text: "Yes",
      onPress: async () => {
        const response = await functions.deleteMyAd({
          ad_id: id
        })
        if (response.status) {
          Toast("Deleted successfully")
          navigation.goBack()
        }
        else {
          Toast(response.message)
        }
      }
    }, {
      text: "Cancel",
    }], {
      cancelable: true
    })
  }

  const Item = (item) => {
    const data = item.item
    return (
      <TouchableOpacity style={{marginVertical:5}} activeOpacity={0.8} onPress={() => navigation.navigate('AdDetails', data)} >
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, backgroundColor: colors.white }}>
          <Icon onPress={() => deleteMyAd(data.id)} name="trash-can-outline" style={{ margin: 10, alignSelf: 'center' }} size={24} color={colors.primaryLight} />
          <Image style={styles.cardImg} source={{ uri: data?.main_image_url }} />
          <View >
            <Text style={styles.h1}>{data.title || "Untitled Ad"}</Text>
            <View style={styles.badge}>
              <Text style={styles.h2}>{"Live"}</Text>
            </View>
            <Text style={styles.h4}>{data.created_at_time_diff}</Text>
          </View>
        </View>
        <Separator />
      </TouchableOpacity>
    )
  }
  useEffect(() => {
    getMyAds()
  }, [])
  const Ads = ({ route }) => {
    return (
      <>
        {
          loading ?
            <View style={styles.errorContainer}>
              <ActivityIndicator animating={true} size={"small"} color={colors.primary} />
            </View> :
            ads.length > 0 ?
              <SafeAreaView style={styles.container}>
                <FlatList
                  data={ads}
                  renderItem={({ item }) => (<Item item={item} />)}
                  keyExtractor={(item, index) => index.toString()}
                />
              </SafeAreaView>
              :
              <SafeAreaView style={styles.container}>
                <Image source={require("../assets/images/smallCactus.jpeg")} style={styles.img1} />
                <Text numberOfLines={1} style={styles.heading}>You don't have any ads that are live</Text>
                <Button
                  onPress={() => { navigation.navigate('PlaceAd') }}
                  mode="contained"
                  style={styles.button}
                  labelStyle={styles.ButtonLabel}
                >Post Ad now</Button>
              </SafeAreaView>
        }
      </>
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
        <Image style={styles.image} source={{ uri: route.params.image_url }} />
        <View style={{ flexDirection: 'column' }}>
          <Text numberOfLines={1} style={styles.heading}>{route.params.name}</Text>
          <Text style={styles.text}>Joined on {moment(route.params.createdAt).format("MMMM-YYYY")}</Text>
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
    marginHorizontal: 20
  },
  img: {
    marginTop: 40,
    width: 400,
    height: 400,
    alignSelf: 'center'
  },
  cardImg: {
    width: 60,
    height: 60,
  },
  image: {
    width: 60,
    height: 60,
    marginVertical: 5,
    marginRight: 12,
    borderRadius: 100,
    resizeMode: 'contain'
  },
  h1: {
    color: colors.blue,
    fontSize: 16,
    fontFamily: fonts.SEMIBOLD,
    marginHorizontal: 12,
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
  heading: {
    color: colors.black,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.BOLD,
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
  badge: {
    backgroundColor: colors.gray,
    borderRadius: 20,
    width: 80,
    padding: 2,
    marginHorizontal: 12,
    color: colors.white,
    marginVertical: 4,
  },
  h2: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.MEDIUM,
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
    marginHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  banner: {
    backgroundColor: '#cfe1fc',
    width: "88%",
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    height: 90,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 10,
    elevation: 4,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})
export default PublicProfile