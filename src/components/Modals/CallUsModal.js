import React from "react"
import { Modal, StyleSheet, View, Text } from "react-native"
import { Button, TextInput, } from "react-native-paper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const CallusModal = (props) => {

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Icon
            onPress={() => props.setModalVisible(false)}
            style={{
              position: 'absolute',
              right: 10,
              top: 10
            }}
            name='close'
            size={24}
            color={colors.gray} />
          <View style={styles.modalBody}>
            <View>
              <Icon
                style={{alignSelf:'center',marginVertical:10}}
                name='phone'
                size={40}
                color={colors.gray} />
              <Text style={styles.h1}>Call us get in touch</Text>
              <Text style={styles.h2}>9:00 to 6:00PM, Monday to friday</Text>
            </View>
            <View style={styles.row}>
              <Button
                onPress={() => { props.setModalVisible(false) }}
                mode="contained"
                color={colors.white}
                style={[styles.button, { marginVertical: 18, }]}
                labelStyle={styles.ButtonLabel}
              >800-385363807</Button>
              <Text style={styles.h4}>Or email us at customersupport@buisnesshub.com</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#00000099",
  },
  modalView: {
    width: '92%',
    justifyContent: "center",
    backgroundColor: colors.light,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.light,
    borderTopLeftRadius: wp("4"),
    borderTopRightRadius: wp("4"),
    paddingHorizontal: wp("3"),
  },
  modalTitle: {
    fontFamily: fonts.SEMIBOLD,
    fontSize: hp("2.2"),
    color: colors.black,
  },
  modalBody: {
    padding: hp("2"),
  },
  text: {
    fontFamily: fonts.REGULAR,
    fontSize: hp("2"),
    textAlign: "justify",
    color: colors.black,
    marginVertical: hp("0.6"),
  },
  h1: {
    color: colors.black,
    fontSize: 22,
    zIndex: 2,
    fontFamily: fonts.BOLD,
    textAlign: 'center',
  },
  h2: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginHorizontal: 20
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
    marginHorizontal: 20,
    textAlign: 'center'
  },
  button: {
    width: '70%',
    borderRadius: 5,
    height: 45,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderWidth: 0.7,
  },
  ButtonLabel: {
    fontSize: hp("2.2"),
    fontFamily: fonts.SEMIBOLD,
  },
})

export default CallusModal