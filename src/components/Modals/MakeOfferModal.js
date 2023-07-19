import React from "react"
import { Modal, StyleSheet, View, Text } from "react-native"
import { Button, TextInput, } from "react-native-paper"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const MakeOfferModal = (props) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalBody}>
            <View>
              <Text style={styles.h1}>Make an Offer</Text>
              <Text style={styles.h2}>Selling asking price is "AED 200"</Text>
            </View>
              <TextInput
                theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
                value={props.value}
                mode='outlined'
                activeOutlineColor={colors.gray}
                keyboardType='number-pad'
                style={styles.input}
                onChangeText={text => props.setValue(text)}
              />
            <View style={styles.row}>
              <Button
                onPress={() => { props.setModalVisible(false) }}
                mode="contained"
                color={colors.white}
                style={[styles.button, { marginVertical: 18, width: '40%', borderColor: colors.gray500, backgroundColor: colors.white, }]}
                labelStyle={[styles.ButtonLabel, { color: colors.gray }]}
              >Cancel</Button>
              <Button
                onPress={() => { props.setModalVisible(false) }}
                mode="contained"
                color={colors.white}
                style={[styles.button, { marginVertical: 18, }]}
                labelStyle={styles.ButtonLabel}
              >Confirm</Button>
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
    justifyContent: "space-between",
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
    justifyContent: "flex-end",
  },

  icon: {
    textAlign: "center",
  },
  label: {
    fontFamily: fonts.BOLD,
    fontSize: hp("2.2"),
    color: colors.black,
    marginVertical: hp("1.3"),
    marginHorizontal: 20
  },
  text: {
    fontFamily: fonts.REGULAR,
    fontSize: hp("2"),
    textAlign: "justify",
    color: colors.black,
    marginVertical: hp("0.6"),
  },
  brand: {
    width: wp("100"),
    height: hp("32"),
    alignSelf: "center",
    resizeMode: 'contain',
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
    fontSize: 20,
    textAlign: 'center',
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginHorizontal: 20
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.REGULAR,
    marginHorizontal: 20

  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: hp("2"),
  },
  button: {
    width: '48%',
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
  input: {
    width: '95%',
    marginVertical: 8,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderBlockColor: colors.gray,
    height: 45,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD
  },
})

export default MakeOfferModal