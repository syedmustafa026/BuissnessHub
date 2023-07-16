import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Badge } from 'react-native-paper';

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import PropertyDetailsCard from "../components/Cards/PropertyDetailsCard";
import SearchDetailsCard from "../components/Cards/SearchDetailsCard";
import NonImageCard from "../components/Cards/NonImageCard";

const SearchedResults = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.fiterRow}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcon
            style={{ marginVertical: 10 }}
            name='saved-search'
            size={20}
            color={colors.gray} />
          <Text style={{ fontSize: 16, margin: 10, color: colors.gray, fontFamily: fonts.SEMIBOLD }}>SEARCH ALERT</Text>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            onPress={() => navigation.navigate("Filters")}
            style={{ marginVertical: 10 }}
            name='sliders-h'
            size={20}
            color={colors.primary} />
          <Text onPress={() => navigation.navigate("Filters")} style={{ fontSize: 16, margin: 10, color: colors.black, fontFamily: fonts.SEMIBOLD }}>Filters</Text>
          <Badge size={24} style={{
            alignSelf: 'center',
            marginRight: 5,
            backgroundColor: colors.black
          }}>3</Badge>

        </View >
        <View style={{ flexDirection: 'row' }}>
          <Icon
            style={{ marginHorizontal: 2, marginVertical: 10 }}
            name='sort'
            size={20}
            color={colors.gray} />
          <Text style={{ fontSize: 16, margin: 10, color: colors.black, fontFamily: fonts.SEMIBOLD }}>SORT</Text>

        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cards}>
          <SearchDetailsCard />
          <SearchDetailsCard />
          <SearchDetailsCard />
          <SearchDetailsCard />
          <SearchDetailsCard />
          <SearchDetailsCard />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: wp('3')
  },
  search: {
    width: wp('85'),
    height: hp('6.5'),
    backgroundColor: colors.white,
    borderColor: colors.gray300,
    borderWidth: 1,
    marginHorizontal: wp('2')
  },
  fiterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 8,
  }
})
export default SearchedResults