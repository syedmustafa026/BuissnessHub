import React from 'react'
import { Modal, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, RadioButton, TouchableRipple } from 'react-native-paper'
import Separator from '../../components/Extras/Separator'

import * as fonts from '../../utilities/fonts'
import * as colors from '../../utilities/colors'

const RadioButtonModal = (props) => {

  const Item = ({ item, key }) => {
    return (
      <RadioButton.Group onValueChange={(value) => props.onValueChange(value)} value={props.value}>
        <TouchableRipple key={key} onPress={() => props.onValueChange(props.value)} rippleColor={colors.gray200}>
          <View style={styles.row}>
            <Text style={styles.label}>{item}</Text>
            <RadioButton value={key} color={colors.primaryLight} />
          </View>
        </TouchableRipple>
      </RadioButton.Group>
    )
  }
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={props.visible}
    >
      <TouchableOpacity activeOpacity={1} onPress={() => props.setVisible(false)} style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.types}>
            <FlatList
              showsVerticalScrollIndicator={true}
              data={['4 wheels Perfect inside and out Almost ', '2 wheels Perfect inside and out wheels', '6 wheels inside and out'
              ]}
              renderItem={({ item, index }) => (<Item item={item} key={index} />)}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={<Separator />}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal >
  )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000099",
    paddingHorizontal: 20
  },
  modalView: {
    backgroundColor: colors.white,
    width: '100%',
    alignItems: 'center',
    maxHeight:600
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
    paddingLeft: 12,
    paddingVertical: 4,
    fontFamily: fonts.MEDIUM,
    color: colors.black
  },
})

export default RadioButtonModal