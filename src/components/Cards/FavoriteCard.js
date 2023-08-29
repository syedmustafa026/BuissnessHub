import React from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import * as functions from "../../utilities/functions"

import { useNavigation } from "@react-navigation/native"
import Toast from "../Extras/Toast"

const FavoriteCard = (item) => {
  const data = item.item
  const navigation = useNavigation()

  const handleRemoveFavorites = async () => {
    try {
      const response = await functions.removeFavorite(data.id)
      // if (!response.status) throw new Error(response.message)
      console.log(response);
      if (response.status) {
        Toast(response.message)
      }
    } catch (error) {
      Toast(error)
    }
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('AdDetails', data)}
      style={styles.card}>
      <View>
        <Image style={styles.cardImg} source={{ uri: data.main_image_url || "https://img.freepik.com/free-photo/flat-lay-business-concept_53876-24738.jpg?w=1800&t=st=1692634541~exp=1692635141~hmac=2f344c4cded45934ccf853d9e57742feaf6d25761dd047252dbb97524eec9d86" }} />
        <View style={{ margin: 5, padding: 4 }}>
          <Text numberOfLines={1} style={{ color: colors.primary, fontFamily: fonts.SEMIBOLD, fontSize: 16, marginBottom: 4 }} >AED {data.price} </Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 16, marginBottom: 4 }} >{data.title} </Text>
          <Text numberOfLines={4} style={{ color: colors.black, fontFamily: fonts.REGULAR }} >{data.description} </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 12 }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name='map-marker-outline'
                size={20}
                color={colors.gray} />
              <Text style={styles.cardText}>{data.location_name}</Text>
            </View>
            <TouchableOpacity>
              <Icon
                onPress={handleRemoveFavorites}
                name='trash-can-outline'
                size={20}
                color={colors.gray} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  favIcon: {
    position: 'absolute',
    zIndex: 2,
    top: 10,
    right: 10
  },
  card: {

    width: "100%",
    height: hp('46'),
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.gray100,
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardImg: {
    width: "100%",
    height: hp('22'),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardText: {
    fontSize: 14,
    color: colors.black,
    marginHorizontal: 6,
    fontFamily: fonts.REGULAR
  }
})
export default FavoriteCard