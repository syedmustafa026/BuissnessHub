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


const VehicleDetailsCard = () => {
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
          size={24}
          color={colors.white} />
        <Image style={styles.cardImg} source={require('../../assets/images/ad.jpeg')} />
        <View style={{ margin: 5, padding: 4 }}>
          <Text numberOfLines={1} style={{ color: colors.primary, fontFamily: fonts.SEMIBOLD, fontSize: 18,marginBottom:4 }} >AED 175,000 </Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 18,marginBottom:4 }} >BMW M3. Other </Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.REGULAR }} >Type 3E | Single Row | Available End of July // JUly 2022</Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.REGULAR, marginTop: 4, marginRight: 8 }} ><Text style={{ fontFamily: fonts.BOLD }}>Kms: </Text> 43,000 <Text style={{ fontFamily: fonts.BOLD }}> Year: </Text>2022</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
            <Icon
              name='map-marker-outline'
              size={24}
              color={colors.gray} />
            <Text style={styles.cardText}>AL-Mira Square</Text>
          </View>
          <Separator />
        </View>
        <View style={{ flexDirection: 'row',justifyContent:'space-evenly',marginHorizontal:8 }}>
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}>
            <Icon
              name='phone'
              size={18}
              color={colors.red} />
            <Text style={{ color: colors.black, paddingHorizontal: 10, fontSize: 18, fontFamily: fonts.SEMIBOLD }}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
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
            style={styles.button}>
            <Icon
              name='whatsapp'
              size={24}
              color={colors.success} />
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
export default VehicleDetailsCard