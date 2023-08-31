import React, { useState, useEffect } from "react"
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Badge } from 'react-native-paper'

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import PropertyDetailsCard from "../../components/Cards/PropertyDetailsCard"
import SearchDetailsCard from "../../components/Cards/SearchDetailsCard"
import NonImageCard from "../../components/Cards/NonImageCard"
import SortModal from "../../components/Modals/SortModal"

const SearchedResults = ({ route, navigation }) => {
  const [sortModal, setSortModal] = useState(false)
  const [sortValue, setSortValue] = useState('Default')
  const [ads, setAds] = useState([])

  const sortByNewestToOldest = route.params.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  const sortByOldestToNewest = route.params.slice().sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
  const sortByHighPriceToLow = route.params.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
  const sortByLowPriceToHigh = route.params.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price))

  useEffect(() => {
    navigation.setOptions({
      title: `${route.params?.length || 0} Result found`
    })
    if (sortValue === "Default") {
      setAds(route.params)
      setSortModal(false)
    }
    if (sortValue === "Newest to Oldest") {
      setSortModal(false)
      setAds(sortByNewestToOldest)
    }
    if (sortValue === "Oldest to Newest") {
      setSortModal(false)
      setAds(sortByOldestToNewest)
    }
    if (sortValue === "Price Highest to Lowest") {
      setSortModal(false)
      setAds(sortByHighPriceToLow)
    }
    if (sortValue === "Price Lowest to highest") {
      setSortModal(false)
      setAds(sortByLowPriceToHigh)
    }
  }, [sortValue])
  console.log(sortValue);
  return (
    <SafeAreaView style={styles.container}>
      <SortModal visible={sortModal} setModalVisible={setSortModal} setSortValue={setSortValue} />
      <View style={styles.fiterRow}>
        <View style={styles.row}>
          <MaterialIcon
            style={{ marginVertical: 10 }}
            name='saved-search'
            size={20}
            color={colors.gray} />
          <Text style={{ fontSize: 16, margin: 10, color: colors.gray, fontFamily: fonts.SEMIBOLD }}>SEARCH ALERT</Text>

        </View>
        <View style={styles.row}>
          <Icon
            onPress={() => navigation.navigate("Filters")}
            style={{ marginVertical: 10 }}
            name='sliders-h'
            size={20}
            color={colors.primary} />
          <Text onPress={() => navigation.navigate("Filters")} style={{ fontSize: 16, margin: 10, color: colors.black, fontFamily: fonts.SEMIBOLD }}>Filters</Text>
          {/* <Badge size={24} style={{
            alignSelf: 'center',
            marginRight: 5,
            backgroundColor: colors.black
          }}>0</Badge> */}

        </View >
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSortModal(true)} style={styles.row}>
          <Icon
            style={{ marginHorizontal: 2, marginVertical: 10 }}
            name='sort'
            size={20}
            color={colors.gray} />
          <Text style={{ fontSize: 16, margin: 10, color: colors.black, fontFamily: fonts.SEMIBOLD }}>SORT</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={ads}
        renderItem={({ item }) => (<SearchDetailsCard item={item} />)}
        keyExtractor={(item, index) => index.toString()}
      />

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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default SearchedResults