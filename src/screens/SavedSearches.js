import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, FlatList, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import * as functions from "../utilities/functions"
import SavedSearchComponent from "../components/Rows/SavedSearchComponent";
import Toast from "../components/Extras/Toast";


const SavedSearches = ({ navigation }) => {
  const [ads, setAds] = useState(false)
  const [loading, setLoading] = useState(true)

  const deleteAll = async () => {
    try {
      const response = await functions.deleteSavedSearches()
      console.log(response);
      if (response.status) {
        Toast(response.message)
        navigation.goBack()
      }
    } catch (error) {
      Toast(error)
    }
  }
  const getSearches = async () => {
    try {
      const response = await functions.savedSearches()
      console.log(response);
      if (response.length > 0) {
        setAds(response)
      }
      else {
        setAds([])
      }
    } catch (error) {
      Toast(error)
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getSearches()
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={deleteAll} style={styles.h2}>Delete All</Text>
      ),
    })
  }, [])
  if (loading) {
    return (
      <View style={styles.errorContainer}>
        <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
      </View>
    )
  }
  return (
    <>
      {ads.length > 0 ?
        <SafeAreaView style={styles.container}>
          <FlatList
            data={ads}
            renderItem={({ item }) => (<SavedSearchComponent item={item} />)}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView> :
        <SafeAreaView style={styles.center}>
          <Text style={styles.text}>It's like a desert in here</Text>
          <Text style={styles.text}>You dont have any searched :(</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={styles.button}>
            <Text style={{
              color: colors.black,
              paddingHorizontal: 15,
              fontSize: 18,
              fontFamily: fonts.REGULAR
            }}>Search for Something</Text>
          </TouchableOpacity>
        </SafeAreaView>}
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,

  },
  center: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 500,
    height: 250,
    resizeMode: 'contain',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    alignSelf: 'center',
    paddingHorizontal: 14,
    width: wp('85'),
    height: 48,
    backgroundColor: colors.gray200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginTop: 18,
    marginBottom: 40
  },
  text: {
    fontFamily: fonts.REGULAR,
    fontSize: 14,
    marginHorizontal: 28,
    textAlign: 'center', color: colors.black
  },
  h2: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: fonts.SEMIBOLD,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})
export default SavedSearches