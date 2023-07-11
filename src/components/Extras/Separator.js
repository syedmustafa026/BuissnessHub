import React from "react"
import { View, StyleSheet } from "react-native"

import * as colors from "../../utilities/colors"

const Separator = () => {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: colors.silver,
    borderBottomWidth: 0.8,
    width: "94%",
    alignSelf:'center'
  },
})

export default Separator