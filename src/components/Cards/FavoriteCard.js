import React from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

import { useNavigation } from "@react-navigation/native"

const FavoriteCard = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('AdDetails')}
      style={styles.card}>
      <View>
        <Image style={styles.cardImg} source={require('../../assets/images/ad.jpeg')} />
        <View style={{ margin: 5, padding: 4 }}>
          <Text numberOfLines={1} style={{ color: colors.primary, fontFamily: fonts.SEMIBOLD, fontSize: 16, marginBottom: 4 }} >AED 175,000 </Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 16, marginBottom: 4 }} >BMW M3. Other </Text>
          <Text numberOfLines={4} style={{ color: colors.black, fontFamily: fonts.REGULAR }} >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between', marginVertical: 12 }}>
            <View style={{flexDirection:'row'}}>
              <Icon
                name='map-marker-outline'
                size={20}
                color={colors.gray} />
              <Text style={styles.cardText}>AL-Mira Square-UAE- Abu Dhabi</Text>
            </View>
            <TouchableOpacity>
            <Icon
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