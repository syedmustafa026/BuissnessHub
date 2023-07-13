import React from "react"
import { Image, Linking, Modal, StyleSheet, View, Text } from "react-native"
import { Button, IconButton } from "react-native-paper"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

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
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Location Permission</Text>
            <IconButton
              icon="help-circle-outline"
              size={24}
              color={colors.warning}
              style={styles.close}
              onPress={() => Linking.openURL("https://www.privacypolicies.com/live/cef8512a-96d9-4d1b-9696-67a24529a259")}
            />
          </View>

          <View style={styles.modalBody}>
            <Icon
              name="map-marker-outline"
              size={40}
              color={colors.success}
              style={styles.icon}
            />
            <Text style={styles.label}>Use your location</Text>
            <Text style={styles.text}>To track your location while you are logged in, allow MyCabify Driver to use your location all of the time.</Text>
            <Text style={styles.text}>MyCabify Driver collects location data to enable customer's safety, zone updates, nearby base and tracking report even when the app is closed or not in use.</Text>
            <View style={styles.row}>
              <Button
                mode="outlined"
                contentStyle={styles.buttonContent}
                labelStyle={styles.buttonLabel}
                style={[styles.button, styles.deny]}
                onPress={() => declinedPermission()}
                color={colors.danger}
              >DENY</Button>
              <Button
                mode="outlined"
                contentStyle={styles.buttonContent}
                labelStyle={styles.buttonLabel}
                style={[styles.button, styles.accept]}
                onPress={() => requestPermission()}
                color={colors.primary}
              >ACCEPT</Button>
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
    fontFamily: fonts.POPPINS_SEMIBOLD,
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
    fontFamily: fonts.POPPINS_SEMIBOLD,
    fontSize: hp("3.2"),
    color: colors.black,
    textAlign: "center",
    marginVertical: hp("0.6"),
  },
  text: {
    fontFamily: fonts.POPPINS_REGULAR,
    fontSize: hp("2"),
    textAlign: "justify",
    color: colors.black,
    marginVertical: hp("0.6"),
  },
  brand: {
    width: wp("100"),
    height: hp("12"),
    alignSelf: "center",
    marginVertical: hp("0.6"),
  },

  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: hp("2"),
  },
  buttonLabel: {
    fontFamily: fonts.POPPINS_MEDIUM,
  },
  accept: {
    marginLeft: hp("0.6"),
  },
  deny: {
    marginRight: hp("0.6"),
  },
})

export default VerifiedModal