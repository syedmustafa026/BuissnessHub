import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import { TextInput, Button, RadioButton } from 'react-native-paper'
import { launchImageLibrary } from 'react-native-image-picker'
import * as functions from "../../utilities/functions"
import Toast from "../../components/Extras/Toast"

const PlaceAdDetails = ({ navigation, route }) => {
  const titleRef = useRef()
  const mobileRef = useRef()
  const priceRef = useRef()
  const descriptionRef = useRef()
  const locationRef = useRef()


  const [title, setTitle] = useState("")
  const [mobile, setMobile] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [coordinates, setCoordinates] = useState({
    lat: 25.1972,
    lng: 55.2744
  })
  const [img, setImg] = useState([])
  const OpenGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      saveToPhotos: true,
    }
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log("user Cancelled ")
      }
      else {
        setImg([...img, response])
      }
    })
  }
  console.log(route.params.listing_id);
  const RemoveImage = val => {
    const imags = img.filter(image => image?.assets[0]?.uri !== val)
    setImg(imags)
  }
  const onSubmit = async () => {
    try {
      if (!title) throw new Error("Enter Title")
      if (!mobile) throw new Error("Enter Mobile number")
      if (!price) throw new Error("Enter Price")
      if (img.length === 0) throw new Error("Enter Price")
      if (!description) throw new Error("Enter Description")
      if (!location) throw new Error("Enter Location Address")
      else {
        const response = await functions.submitListingDetail({
          listing_id: route.params.listing_id,
          title: title,
          phone: parseInt(mobile),
          price: price,
          description: description,
          location_name: location,
          latitude: coordinates.lat,
          longitude: coordinates.lng,
          images: img
        })
        console.log(response);
        if (response.status) {
          navigation.navigate("PlaceAdTermsConditions",
            { listing_id: route.params.listing_id })
        }
      }
    } catch (error) {
      Toast(error.message || "Server Error");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'center', marginVertical: 16 }}>
          <Text style={styles.h2}>You're Almost There!</Text>
          <Text style={[styles.h4, { textAlign: 'center', marginBottom: 12 }]}>Include as much details and pictures as possible and set the right price!</Text>
          <Text onPress={() => navigation.goBack()} style={[styles.h4, { color: colors.primary }]}>{route?.params?.title} &gt; {route?.params?.category}</Text>
        </View>
        <TextInput
          label="Title"
          ref={titleRef}
          value={title}
          mode='outlined'
          activeOutlineColor={colors.gray}
          style={{
            backgroundColor: colors.white,
            borderBlockColor: colors.gray,
          }}
          onChangeText={text => setTitle(text)}
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderStyle: 'dashed',
            marginTop: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            {img?.length === 0 ? (
              <Button
                onPress={() => { OpenGallery() }}
                mode="contained"
                icon={'camera'}
                color={colors.white}
                style={[styles.button, { marginTop: 8, }]}
                labelStyle={styles.ButtonLabel}
              >Add pictures</Button>
            ) : (
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#000000' }}>
                  Upload upto 10 best describing pictures
                </Text>
                <Icon
                  name="chevron-right"
                  size={15}
                  color="black"
                  style={{ left: 10 }}
                />
              </TouchableOpacity>
            )}
          </View>
          {img?.length == 0 ? (
            <>

            </>
          ) : (
            <ScrollView horizontal>
              <View
                style={{
                  height: 65,
                  width: 90,
                  borderRadius: 20,
                  backgroundColor: 'lightgray',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                  marginTop: 18,
                }}>
                <TouchableOpacity onPress={() => OpenGallery()}>
                  <Icon color="gray" size={20} name="plus" />
                </TouchableOpacity>
              </View>
              {img.map((val, index) => {
                return (
                  <>
                    <View style={{ marginVertical: 10, bottom: 10 }}>
                      <TouchableOpacity
                        onPress={() => RemoveImage(val?.assets[0]?.uri)}
                        style={{
                          flexDirection: 'row-reverse',
                          elevation: 10,
                          zIndex: 1,
                        }}>
                        <Icon
                          name="close-circle-outline"
                          style={{ top: 10 }}
                          size={20}
                          color="black"
                        />
                      </TouchableOpacity>
                      <Image
                        style={{
                          height: 60,
                          width: 90,
                          borderRadius: 10,
                          marginHorizontal: 5,
                        }}
                        source={{
                          uri:
                            val?.assets[0]?.uri == undefined
                              ? null
                              : val?.assets[0]?.uri,
                        }}
                      />
                    </View>
                  </>
                )
              })}
            </ScrollView>
          )}
        </View>
        <TextInput
          label="Phone Number"
          ref={mobileRef}
          mode='outlined'
          activeOutlineColor={colors.gray}
          keyboardType='number-pad'
          maxLength={10}
          style={{
            backgroundColor: colors.white,
            borderBlockColor: colors.gray,
          }}
          onSubmitEditing={() => priceRef.current.focus()}
          onChangeText={text => setMobile(text)}
          left={<TextInput.Affix
            text='+971'
          />}
        />
        <TextInput
          label="Price"
          mode='outlined'
          ref={priceRef}
          activeOutlineColor={colors.gray}
          keyboardType='number-pad'
          style={{
            backgroundColor: colors.white,
            borderBlockColor: colors.gray,
          }}
          onChangeText={text => setPrice(text)}
          onSubmitEditing={() => descriptionRef.current.focus()}

        />
        <TextInput
          placeholder='Describe your item'
          mode='outlined'
          multiline={true}
          ref={descriptionRef}
          activeOutlineColor={colors.gray}
          style={{
            height: 180,
            backgroundColor: colors.white,
            borderBlockColor: colors.gray,
          }}
          onChangeText={text => setDescription(text)}
          onSubmitEditing={() => locationRef.current.focus()}
        />
        <TextInput
          label="Location"
          mode='outlined'
          ref={locationRef}
          keyboardType='default'
          activeOutlineColor={colors.gray}
          style={{
            backgroundColor: colors.white,
            borderBlockColor: colors.gray,
          }}
          onChangeText={text => setLocation(text)}
        />
        <Image style={{ width: "98%", height: 160, alignSelf: 'center', marginVertical: 14 }} source={require('../../assets/images/map.png')} />
      </ScrollView>
      <Button
        onPress={onSubmit}
        mode="contained"
        color={colors.white}
        style={[styles.button, { width: "90%", marginTop: 8, backgroundColor: colors.primary, marginVertical: 4 }]}
        labelStyle={[styles.ButtonLabel, { color: colors.white }]}
      >Next</Button>
    </SafeAreaView >
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
    fontSize: 24,
    zIndex: 2,
    fontFamily: fonts.BOLD,
    fontFamily: fonts.BOLD,
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
    marginHorizontal: 12,
  },
  button: {
    width: '100%',
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
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    marginTop: 8
  },
  selectLabel: {
    fontSize: hp("2"),
    color: colors.gray,
    textAlign: 'justify',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: fonts.SEMIBOLD,
  },
})

export default PlaceAdDetails