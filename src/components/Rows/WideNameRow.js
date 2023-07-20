import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from '../Extras/Separator'


const NameRow = ({ name, handlePress }) => {
  return (
    <>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.5} style={styles.row}>
        <Text style={styles.h2}>{name}</Text>
      </TouchableOpacity>
      <Separator />
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'flex-start',
    marginTop: 16
  },
  h2: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginBottom: 25,
    marginHorizontal: 10
  },
})
export default NameRow