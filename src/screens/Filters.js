// import React, { useState } from "react";
// import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import * as colors from "../utilities/colors"
// import * as fonts from "../utilities/fonts"
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();
// import Rent from "../components/Filters/Rent"
// import Buy from "../components/Filters/Buy"

// const Filters = ({ navigation }) => {

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <View style={{ flexDirection: 'row', margin: 12 }}>
//           <Icon
//             onPress={() => navigation.goBack()}
//             name='close'
//             size={24}
//             color={colors.gray} />
//           <Text style={{ color: colors.black, fontSize: 18, marginHorizontal: 16, fontFamily: fonts.BOLD }}>Filters</Text>
//         </View>
//         <Text style={{ color: colors.primary, fontSize: 16, marginHorizontal: 16, marginTop: 12, fontFamily: fonts.BOLD }}>Reset</Text>
//       </View>
//       <Tab.Navigator screenOptions={{
//         swipeEnabled: false,
//         tabBarActiveTintColor: colors.primary,
//         tabBarAndroidRipple: true,
//         tabBarIndicatorStyle: { backgroundColor: colors.primary },
//         tabBarStyle: { backgroundColor: colors.white },
//       }}>
//         <Tab.Screen name="Rent" component={Rent} />
//         <Tab.Screen name="Buy" component={Buy} />
//       </Tab.Navigator>
//     </SafeAreaView>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.white,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: colors.white,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,
//     elevation: 2,
//   },
//   h1: {
//     color: colors.black,
//     fontSize: 20,
//     zIndex: 2,
//     fontFamily: fonts.BOLD,
//   },
//   h2: {
//     fontSize: 14,
//     color: colors.black,
//     fontFamily: fonts.BOLD,
//     marginBottom: 14,
//     marginHorizontal: 20
//   },
//   h4: {
//     fontSize: 12,
//     color: colors.gray,
//     fontFamily: fonts.REGULAR,
//     marginHorizontal: 12,
//   },
//   selectButton: {
//     width: '100%',
//     borderRadius: 10,
//     height: 55,
//     paddingHorizontal: 4,
//     alignItems: 'center',
//     flexDirection: 'row',
//     backgroundColor: colors.white,
//     borderColor: colors.gray300,
//     borderWidth: 1,
//     marginTop: 8,
//   },
//   selectLabel: {
//     fontSize: hp("2"),
//     color: colors.gray,
//     textAlign: 'justify',
//     alignSelf: 'center',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     fontFamily: fonts.MEDIUM,
//   },
// })
// export default Filters



import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput, Button, RadioButton } from 'react-native-paper'
import Dropdown from '../components/Inputs/Dropdown'
import { categories } from '../utilities/categories'
import Slider from '../components/Extras/MultiSliders'
const Filters = ({ navigation, route }) => {

  // const [modal1, setModal1] = useState(false)
  // const [modal2, setModal2] = useState(false)
  // const [modal4, setModal4] = useState(false)
  // const [Emirate, setEmirate] = useState('Emirate')
  // const [Trim, setTrim] = useState('Trim')
  // const [insured, setInsured] = useState('Is your car insured in UAE?')
  // const [Make, setMake] = useState('')
  // const [Kilometers, setKilometers] = useState('')
  // const [Phone, setPhone] = useState('')
  // const [Price, setPrice] = useState('')
  const [modal3, setModal3] = useState(false)
  const [Keywords, setKeywords] = useState('')
  const [category, setcategory] = useState('Buisness for sale')
  const [categoryId, setcategoryId] = useState('')
  const [subcategory, setsubcategory] = useState('Buisness services')
  const [subcategoryId, setsubcategoryId] = useState('')
  const [priceTo, setpriceTo] = useState(0)
  const [priceFrom, setpriceFrom] = useState(0)

  useEffect(() => {
    if (route.params?.category != undefined) {
      setcategory(route.params?.category.name)
      setcategoryId(route.params?.category.data?.id)
    }
    if (route.params?.sub != undefined)
      setsubcategory(route.params?.sub.name)
    setsubcategoryId(route.params?.sub.category_id)
  },)
  console.log("___________________", route.params);
  console.log("id______________", categoryId, subcategoryId);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', margin: 12 }}>
            <Icon
              onPress={() => navigation.goBack()}
              name='close'
              size={24}
              color={colors.gray} />
            <Text style={{ color: colors.black, fontSize: 18, marginHorizontal: 16, fontFamily: fonts.BOLD }}>Filters</Text>
          </View>
          <Text style={{ color: colors.primary, fontSize: 16, marginHorizontal: 16, marginTop: 12, fontFamily: fonts.BOLD }}>Reset</Text>
        </View>

        <KeyboardAvoidingView style={{ justifyContent: 'center', marginVertical: 16 }}>
          <View style={{ marginHorizontal: 10, marginVertical: 15, marginTop: 15 }}>
            <Text style={styles.h1}>Location</Text>
            <TouchableOpacity activeOpacity={0.6}
              style={styles.selectButton}>
              <Icon
                name='map-marker'
                size={24}
                color={colors.gray} />
              <Text style={styles.selectLabel}>eg. Dubai Marina</Text>
            </TouchableOpacity>
            <Text style={styles.h4}>Select the cities neighbourhood or buildings that you want to search in</Text>
          </View>
          <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
            <Text style={styles.h1}>Keyword</Text>
            <TextInput
              theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
              placeholder='Ex: XYZ Buisness for sale'
              value={Keywords}
              mode='outlined'
              activeOutlineColor={colors.gray}
              style={styles.input}
              onChangeText={text => setKeywords(text)}
            />
          </View>
          <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
            <Text style={styles.h1}> Price</Text>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                placeholder="0"
                label=""
                value={priceFrom}
                mode='outlined'
                activeOutlineColor={colors.gray}
                style={styles.smallinput}
                onChangeText={text => setpriceFrom(text)}
              />
              <Text style={styles.h2}> to</Text>
              <TextInput
                placeholder="Any"
                label=""
                value={priceTo}
                mode='outlined'
                activeOutlineColor={colors.gray}
                style={styles.smallinput}
                onChangeText={text => setpriceTo(text)}
              />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Slider />
            </View>
          </View>
          <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <Text style={styles.h1}>Categories</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("PlaceAdListing", "category")}
              activeOpacity={0.6}
              style={[styles.selectButton]}>
              <Text style={[styles.selectLabel]}>{category}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <Text style={styles.h1}>Sub categories</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("PlaceAdSubCategory", { data: { sub_categories: route.params?.category?.sub_categories === undefined ? categories[0] : route.params?.category?.sub_categories }, by: "filters" })}
              activeOpacity={0.6}
              style={[styles.selectButton]}>
              <Text style={[styles.selectLabel]}>{subcategory}</Text>
            </TouchableOpacity>
          </View>

          <Button
            onPress={() => { navigation.navigate("PlaceAdDetails") }}
            mode="contained"
            color={colors.white}
            style={[styles.button, { marginTop: 16, backgroundColor: colors.primary }]}
            labelStyle={[styles.ButtonLabel, { color: colors.white }]}
          >Filter</Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,

  },
  h1: {
    color: colors.black,
    fontSize: 20,
    zIndex: 2,
    marginHorizontal: 20,
    fontFamily: fonts.BOLD,
  },
  h2: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.BOLD,
    marginBottom: 14,
    textAlign: 'center',
    marginHorizontal: 20
  },
  selectLabel: {
    fontSize: hp("2"),
    color: colors.gray,
    textAlign: 'justify',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: fonts.MEDIUM,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.REGULAR,
    marginHorizontal: 12,
  },
  smallinput: {
    backgroundColor: colors.white,
    width: "42%"
  },
  button: {
    width: '95%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1
  },
  ButtonLabel: {
    fontSize: hp("2.2"),
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
  },
  selectButton: {
    width: '100%',
    borderRadius: 4,
    height: 45,
    paddingHorizontal: 4,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    marginTop: 8,
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

export default Filters