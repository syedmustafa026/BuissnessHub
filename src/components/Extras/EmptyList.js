import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const EmptyList = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No {props.type} booking(s) found</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  text: {
    fontFamily: fonts.POPPINS_MEDIUM,
    fontSize: hp("2.4"),
    color: colors.black,
  },
})

export default EmptyList