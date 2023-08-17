import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const ThinNameRow = (props) => {
  return (
    
      <TouchableOpacity onPress={props.handlePress} activeOpacity={0.6} style={styles.row}>
        <Text onPress={props.handlePress} style={[styles.h2, props.style]}>{props.name}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'flex-start',
    marginVertical: 12
  },
  h2: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginHorizontal: 12
  },
})
export default ThinNameRow