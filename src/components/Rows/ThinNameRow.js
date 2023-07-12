import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from '../Extras/Separator'


const ThinNameRow = (props) => {
  return (
    <>
      <TouchableOpacity onPress={() => props.navigation.navigate(props.dir)} activeOpacity={0.5} style={styles.row}>
        <Text style={[styles.h2, props.style]}>{props.name}</Text>
      </TouchableOpacity>
      <Separator />
    </>
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
    fontFamily: fonts.REGULAR,
    marginHorizontal: 12
  },
})
export default ThinNameRow