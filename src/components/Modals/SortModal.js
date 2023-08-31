import React from "react"
import { Modal, StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native"
import { Button, IconButton, } from "react-native-paper"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Separator from '../Extras/Separator'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import ThinNameRow from "../Rows/ThinNameRow"

const SortModal = (props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
    >
      <TouchableOpacity activeOpacity={1} onPress={() => props.setModalVisible(false)} style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalBody}>
            <View>
              <Text style={styles.h1}>Sort</Text>
            </View>
            <FlatList
              data={["Default", "Newest to Oldest", 'Oldest to Newest', 'Price Highest to Lowest', 'Price Lowest to highest']}
              renderItem={({ item }) => (<ThinNameRow name={item} handlePress={() => { props.setSortValue(item) }} />)}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={<Separator />}
            />
          </View>
        </View>
      </TouchableOpacity>
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
  h1: {
    color: colors.black,
    fontSize: 24,
    zIndex: 2,
    margin: 10,
    fontFamily: fonts.BOLD,
  },
})

export default SortModal