import React from "react"
import { View, StyleSheet } from "react-native"

import * as colors from "../../utilities/colors"

const ThickSeparator = () => {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: colors.silver,
    borderBottomWidth: 2,
    borderRadius:20,
    marginVertical:20,
    width: "96%",
    alignSelf:'center'
  },
})

export default ThickSeparator