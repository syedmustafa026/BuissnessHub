import React from "react"
import { Image, Linking, Modal, StyleSheet, View, Text } from "react-native"
import { Button, IconButton, } from "react-native-paper"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Separator from '../Extras/Separator'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const VerifiedModal = (props) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalBody}>

            <Image source={require("../../assets/images/verify.jpeg")} style={styles.brand} />

            <Text style={styles.label}>Get a Verified on Buissness Hub!</Text>
            <Separator />
            <Text style={[styles.h2, { marginTop: 12 }]}>Build Trust.</Text>
            <Text style={[styles.h4, { marginBottom: 12, marginTop: 4 }]}>Verify user and get upto 5x engagements.</Text>
            <Text style={[styles.h2, { marginTop: 12 }]}>Build Trust.</Text>
            <Text style={[styles.h4, { marginBottom: 12, marginTop: 4 }]}>Verify user and get upto 5x engagements.</Text>
            <Text style={[styles.h2, { marginTop: 12 }]}>Build Trust.</Text>
            <Text style={[styles.h4, { marginBottom: 12, marginTop: 4 }]}>Verify user and get upto 5x engagements.</Text>
            <Separator />
            <View style={styles.row}>
              <Button
                onPress={() => { props.setModalVisible(false) }}
                mode="contained"
                color={colors.white}
                style={[styles.button, { marginVertical: 18, width: '40%', borderColor: colors.gray500, backgroundColor: colors.white, }]}
                labelStyle={[styles.ButtonLabel, { color: colors.gray }]}
              >Skip</Button>
              <Button
                onPress={() => { props.setModalVisible(false) }}
                mode="contained"
                color={colors.white}
                style={[styles.button, { marginVertical: 18, }]}
                labelStyle={styles.ButtonLabel}
              >Get Verified</Button>
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
    justifyContent: "flex-end",
    backgroundColor: "#00000099",
  },
  modalView: {
    justifyContent: "space-between",
    backgroundColor: colors.light,
    borderTopLeftRadius: wp("4"),
    borderTopRightRadius: wp("4"),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
    fontSize: 24,
    zIndex: 2,
    fontFamily: fonts.BOLD,
    fontFamily: fonts.BOLD,
    textAlign: 'center',
  },
  h2: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.BOLD,
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
    backgroundColor: colors.red,
    borderWidth: 0.7,
  },
  ButtonLabel: {
    fontSize: hp("2.2"),
    fontFamily: fonts.SEMIBOLD,
  },
})

export default VerifiedModal