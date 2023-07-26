import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
import { Appbar } from "react-native-paper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const NotificationComponent = (props) => {
  return (
    <View style={[{ padding: 15, flexDirection: 'row'}, props.opened && { padding: 15, flexDirection: 'row',backgroundColor:colors.gray300}]}>
      <Image style={styles.cardImg} source={require('../../assets/images/ad.jpeg')} />
      <View style={{ paddingHorizontal: 15, }}>
        <Text style={styles.h1}>17397 new search results</Text>
        <Text style={styles.h2}>Have a look at these plots for sale ads!</Text>
        <Text style={styles.h4}>yesterday!</Text>
      </View>
      <Appbar.Action icon="dots-vertical" />
    </View>
  )
}
const styles = StyleSheet.create({
  cardImg: {
    width: 50,
    height: 60,
  },
  h1: {
    color: colors.black,
    fontSize: 14,
    zIndex: 2,
    fontFamily: fonts.BOLD,
  },
  h2: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginVertical:2
  },
  h4: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: fonts.BOLD,
    marginVertical:2
  },
})
export default NotificationComponent