import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
import { Appbar } from "react-native-paper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import moment from "moment";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as functions from "../../utilities/functions"
import Toast from "../Extras/Toast"

const SavedSearchComponent = (item) => {

  const data = item.item

  const deleteItem = async () => {
    try {
      const response = await functions.removeSearchedItem(data.id)
      console.log(response);
      if (response.status) {
        Toast(response.message)
      }
    } catch (error) {
      Toast(error)
    }
  }
  return (
    <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ paddingHorizontal: 15, }}>
        <Text style={styles.h1}>{data.key_words}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.h4}>{moment(data.createdAt).format("DD-MMMM-YYYY")}</Text>
        </View>
      </View>
      <Icon
        onPress={deleteItem}
        name='trash-can-outline'
        size={24}
        color={colors.primary} />
    </View>
  )
}
const styles = StyleSheet.create({
  cardImg: {
    width: 50,
    height: 60,
  },
  h1: {
    color: colors.black,
    fontSize: 14,
    fontFamily: fonts.BOLD,
  },
  h2: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD,
    marginVertical: 2,
    marginRight: 8
  },
  h4: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: fonts.MEDIUM,
    marginVertical: 5
  },
})
export default SavedSearchComponent