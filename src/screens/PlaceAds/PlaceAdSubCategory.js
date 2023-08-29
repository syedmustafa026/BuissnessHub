import React from 'react';
import { Modal, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from '../../components/Extras/Separator'
import ArrowRow from '../../components/Rows/ArrowRow'
import * as functions from "../../utilities/functions"
import Toast from "../../components/Extras/Toast"

const PlaceAdSubCategory = ({ navigation, route }) => {

  const saveTitle = async (item) => {
    try {
      const response = await functions.saveListingTitle({
        category_id: item.category_id,
        subcategory_id: item.id
      })
      if (!response.status) throw new Error(response.message)
      if (response.status) {
        navigation.navigate("PlaceAdDetails", { title: route.params.title, category: item.name, listing_id: response.listing_id })
      }
    } catch (error) {
      Toast(error.message || "Server Error")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'center', marginVertical: 16 }}>
        <Text style={styles.h2}>Now Choose the right category for your ad:</Text>
        <Text style={styles.h4}><Text onPress={() => navigation.navigate('PlaceAdListing')} style={{ color: colors.primary }}>...  </Text>
          &gt;<Text onPress={() => navigation.goBack()} style={{ color: colors.primary }}>  Ad title</Text>  &gt; {route.params.title}</Text>
      </View>
      <FlatList
        data={route.params.data.sub_categories}
        renderItem={({ item }) => (<ArrowRow name={item.name} handlePress={() => saveTitle(item)} />)}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={<Separator />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,

  },
  h1: {
    color: colors.black,
    fontSize: 24,
    zIndex: 2,
    fontFamily: fonts.SEMIBOLD,
    textAlign: 'center',
  },
  h2: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.BOLD,
    marginBottom: 14,
    textAlign: 'center',
    marginHorizontal: 20
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.REGULAR,
    marginHorizontal: 12
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    paddingHorizontal: 14,
    width: wp('80'),
    marginTop: hp('2'),
    height: 54,
    borderColor: colors.black,
    borderWidth: .6,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

export default PlaceAdSubCategory;