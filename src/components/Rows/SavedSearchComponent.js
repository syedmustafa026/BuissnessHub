import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
import { Appbar } from "react-native-paper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const SavedSearchComponent = () => {
  return (
    <View style={{ padding: 15, flexDirection: 'row',justifyContent:'space-between' }}>
      <View style={{ paddingHorizontal: 15, }}>
        <Text style={styles.h1}>Buisness of Shares sale</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.h2}>Sale of Shares</Text>
        <Text style={styles.h4}>19 July 2023!</Text>
        </View>
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
    fontFamily: fonts.BOLD,
  },
  h2: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD,
    marginVertical: 2,
    marginRight:8
  },
  h4: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: fonts.MEDIUM,
    marginVertical: 5
  },
})
export default SavedSearchComponent