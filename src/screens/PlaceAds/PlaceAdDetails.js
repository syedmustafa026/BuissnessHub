import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import { TextInput, Button, RadioButton } from 'react-native-paper'
import SelectValueModal from '../../components/Modals/SelectValueModal'
import { launchImageLibrary } from 'react-native-image-picker'
import RadioButtonModal from '../../components/Modals/RadioButtonModal'

const PlaceAdDetails = ({ navigation, route }) => {
  const [title, setTitle] = useState("")
  const [imageUri, setImageUri] = useState(null)

  const OpenGallery = () => {
    const options = {
      selectionLimit: 10,
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
      saveToPhotos: true
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log("user Cancelled ")
      }
      else {
        setImageUri({ uri: 'data:image/jpg;base64,' + response.assets[0].base64 })
        console.log("Pic uploaded")
      }
    })
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
          value={title}
          mode='outlined'
          activeOutlineColor={colors.gray}
          style={{
            backgroundColor: colors.white,
            borderBlockColor: colors.gray,
          }}
          onChangeText={text => setTitle(text)}
        />
        <Button
          onPress={() => { OpenGallery() }}
          mode="contained"
          icon={'camera'}
          color={colors.white}
          style={[styles.button, { marginTop: 8, }]}
          labelStyle={styles.ButtonLabel}
        >Add pictures</Button>
        <TextInput
          label="Phone Number"
          value={title}
          mode='outlined'
          activeOutlineColor={colors.gray}
          keyboardType='number-pad'
          style={{
            backgroundColor: colors.white,
            borderBlockColor: colors.gray,
          }}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          label="Price"
          value={title}
          mode='outlined'
          activeOutlineColor={colors.gray}
          keyboardType='number-pad'
          style={{
            backgroundColor: colors.white,
            borderBlockColor: colors.gray,
          }}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          placeholder='Describe your item'
          value={title}
          mode='outlined'
          multiline={true}
          activeOutlineColor={colors.gray}
          style={{
            height: 180,
            backgroundColor: colors.white,
            borderBlockColor: colors.gray,
          }}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          label="Locate your item"
          value={title}
          mode='outlined'
          keyboardType='default'
          activeOutlineColor={colors.gray}
          style={{
            backgroundColor: colors.white,
            borderBlockColor: colors.gray,
          }}
          onChangeText={text => setTitle(text)}
        />
        <Image style={{ width: "98%", height: 160, alignSelf: 'center', marginVertical: 14 }} source={require('../../assets/images/map.png')} />
      </ScrollView>
      <Button
        onPress={() => { navigation.navigate("PlaceAdTermsConditions", { listing_id: route.params.listing_id }) }}
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