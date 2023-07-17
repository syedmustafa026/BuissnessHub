import React from 'react'
import { useSelector } from 'react-redux'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { Button, RadioButton, TouchableRipple } from 'react-native-paper'
import Separator from '../../components/Extras/Separator'

import * as fonts from '../../utilities/fonts'
import * as colors from '../../utilities/colors'

const SelectValueModal = (props) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.heading}>Wheels</Text>
            <Separator />
          </View>
          <View style={styles.types}>
            <RadioButton.Group onValueChange={(value) => props.onValueChange(value)} value={props.value}>
              {
                ['4 wheels', '2 wheels', '6 wheels'].map((value, key) => {
                  return (
                    <TouchableRipple onPress={() => console.log('prdd')} rippleColor={colors.gray}>
                      <View style={styles.row} key={key}>
                        <Text style={styles.label}>{value}</Text>
                        <RadioButton value={key} color={colors.primaryLight} />
                      </View>
                    </TouchableRipple>
                  )
                })
              }
            </RadioButton.Group>
          </View>
          <Button
            onPress={() => props.setVisible(false)}
            mode="contained"
            color={colors.white}
            style={[styles.button, { marginTop: 8, }]}
            labelStyle={styles.ButtonLabel}
          >Select</Button>
        </View>
    </View>
    </Modal >
  )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00000099",
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',

  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "100%",
  },
  heading: {
    fontSize: 24,
    marginHorizontal: 12,
    color: colors.gray,
    marginBottom: 10,
    fontFamily: fonts.SEMIBOLD
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  types: {
    width: '100%',
    paddingVertical: 10,
  },
  label: {
    fontSize: 20,
    marginHorizontal: 12,
    fontFamily: fonts.MEDIUM,
    color: colors.black
  },
  button: {
    width: '100%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1
  },
  ButtonLabel: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
  },
})

export default SelectValueModal