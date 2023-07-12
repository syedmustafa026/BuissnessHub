import React from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

import { TouchableRipple } from 'react-native-paper'
import { useNavigation } from "@react-navigation/native"
import Separator from "../Extras/Separator"

const NonImageCard = () => {
  const navigation = useNavigation()
  return (
    <TouchableRipple
      rippleColor={colors.gray300}
      onPress={() => navigation.navigate('AdDetails')}
      style={styles.card}>
      <View>
        <MaterialIcon
          style={styles.favIcon}
          name='favorite-outline'
          size={20}
          color={colors.gray} />
        <View style={{ margin: 5, padding: 4 }}>
          <View style={{ backgroundColor: '#1f76f0', width: 90, alignItems: 'center', borderRadius: 5, paddingHorizontal: 8, marginVertical: 10 }}><Text style={{ fontFamily: fonts.SEMIBOLD, color: colors.white, fontSize: 12 }}>FEATURED</Text></View>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 18, marginBottom: 4 }} >BMW M3. Other </Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.REGULAR }} >Type 3E | Single Row | Available End of July // JUly 2022</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
            <Icon
              name='map-marker-outline'
              size={24}
              color={colors.gray} />
            <Text style={styles.cardText}>AL-Mira Square</Text>
          </View>
          <Separator />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 8 }}>

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}>
            <Icon
              name='message-text-outline'
              size={18}
              color={colors.red} />
            <Text style={{ color: colors.black, paddingHorizontal: 10, fontSize: 18, fontFamily: fonts.SEMIBOLD }}>Chat</Text>
          </TouchableOpacity>

        </View>
      </View>
    </TouchableRipple>
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
    width: "98%",
    height: hp('26'),
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.gray100,
    marginBottom: 8,
    marginHorizontal: 4,
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
export default NonImageCard