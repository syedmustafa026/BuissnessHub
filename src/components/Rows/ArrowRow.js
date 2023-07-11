import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const ArrowRow = ({ name, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("PlaceAdDetails")} style={styles.selectRow}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.selectText}>{name}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <MaterialIcon
          name='arrow-forward-ios'
          size={12}
          color={colors.black} />
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  selectRow: {
    marginHorizontal: 5,
    marginVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  selectText: {
    fontSize: 16,
    color: colors.black,
    marginHorizontal: 15,
    fontFamily: fonts.BOLD
  }
})

export default ArrowRow