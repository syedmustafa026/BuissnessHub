import React from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import * as functions from "../../utilities/functions"

import { useNavigation } from "@react-navigation/native"
import Separator from "../Extras/Separator"
import Toast from "../Extras/Toast"


const SearchDetailsCard = (item) => {
  const navigation = useNavigation()
  const data = item.item

  const handleAddFavorites = async () => {
    try {
      const response = await functions.addFavorite(item.item.id)
      console.log(response);
      if (response.status) {
        Toast(response.message)
      }
      else {
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
        <TouchableOpacity onPress={handleAddFavorites} style={{ zIndex: 4 }}>
          <MaterialIcon
            style={styles.favIcon}
            name='favorite-outline'
            size={24}
            color={colors.white} />
        </TouchableOpacity>
        <Image style={styles.cardImg} source={{ uri: data.main_image_url || "https://img.freepik.com/free-photo/flat-lay-business-concept_53876-24738.jpg?w=1800&t=st=1692634541~exp=1692635141~hmac=2f344c4cded45934ccf853d9e57742feaf6d25761dd047252dbb97524eec9d86" }} />
        <View style={{ margin: 5, padding: 4 }}>
          <Text numberOfLines={1} style={{ color: colors.primary, fontFamily: fonts.SEMIBOLD, fontSize: 18, marginBottom: 4 }} >{data.price || "AED 175,000"}</Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 18, marginBottom: 4 }} >{data.title || "XYZ Business for sale"} </Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.REGULAR }} >{data.description || "description description description"}</Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.REGULAR, marginVertical: 4 }} >{data.created_at_time_diff || "description description description"}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
            <Icon
              name='map-marker-outline'
              size={24}
              color={colors.gray} />
            <Text style={styles.cardText}>{data.location_name || "Al mira square"}</Text>
          </View>
          <Separator />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 8, marginVertical: 4 }}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => Linking.openURL(`tel:${123456789}`)}
            style={styles.button}>
            <Icon
              name='phone'
              size={18}
              color={colors.red} />
            <Text style={{ color: colors.black, paddingHorizontal: 10, fontSize: 18, fontFamily: fonts.SEMIBOLD }}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat', { title: data.created_by_user?.name || "John Doe" })}
            activeOpacity={0.6}
            style={styles.button}>
            <Icon
              name='message-text-outline'
              size={18}
              color={colors.red} />
            <Text style={{ color: colors.black, paddingHorizontal: 10, fontSize: 18, fontFamily: fonts.SEMIBOLD }}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => Linking.openURL(`https://wa.me/${923330269568}`)}
            style={styles.button}>
            <Icon
              name='whatsapp'
              size={24}
              color={colors.success} />
          </TouchableOpacity>
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
    width: "95%",
    height: hp('52'),
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.gray100,
    marginBottom: 16,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 10,
    elevation: 4,
    marginVertical: 8
  },
  cardImg: {
    width: "100%",
    height: hp('23'),
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardText: {
    fontSize: 14,
    color: colors.black,
    marginHorizontal: 6,
    fontFamily: fonts.REGULAR
  },
  button: {
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: colors.white,
    width: wp('25'),
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 2,
    borderWidth: 0.4,
    borderColor: colors.gray
  },
})
export default SearchDetailsCard