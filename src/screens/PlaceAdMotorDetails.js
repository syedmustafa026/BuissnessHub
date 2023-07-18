import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import { TextInput, Button, RadioButton } from 'react-native-paper'
import Dropdown from '../components/Inputs/Dropdown'

const PlaceAdMotorDetails = ({ navigation }) => {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [Emirate, setEmirate] = useState('Emirate')
  const [Trim, setTrim] = useState('Trim')
  const [Spec, setSpec] = useState('Regional Spec')
  const [insured, setInsured] = useState('Is your car insured in UAE?')
  const [Make, setMake] = useState('')
  const [Year, setYear] = useState('')
  const [Kilometers, setKilometers] = useState('')
  const [Phone, setPhone] = useState('')
  const [Price, setPrice] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.h1}>Tell us about your car</Text>
        </View>
        <KeyboardAvoidingView style={{ justifyContent: 'center', marginVertical: 16 }}>

          <Dropdown
          data={['Dubai', 'Abu Dhabi', 'Ras al Lhaimah', 'Sharjah','Ajman']}
            style={styles.input}
            value={Emirate}
            toggleModal={() => setModal1(!modal1)}
            modal={modal1}
            setModal={setModal1}
            setValue={setEmirate} />
          <TextInput
          theme={{ colors: { text: colors.gray, placeholder: colors.gray500, } }}
            label="Make & Model"
            value={Make}
            mode='outlined'
            activeOutlineColor={colors.gray}
            keyboardType='default'
            style={styles.input}
            onChangeText={text => setMake(text)}
          />
          <Dropdown
            data={['Others']}
            style={styles.input}
            value={Trim}
            toggleModal={() => setModal2(!modal2)}
            modal={modal2}
            setModal={setModal2}
            setValue={setTrim} />
          <Dropdown
            data={['GCC Specs', 'American Specs', 'Canadian Specs', 'European Specs']}
            style={styles.input}
            value={Spec}
            toggleModal={() => setModal3(!modal3)}
            modal={modal3}
            setModal={setModal3}
            setValue={setSpec} />
          <TextInput
          theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
            label="Year"
            value={Year}
            mode='outlined'
            activeOutlineColor={colors.gray}
            keyboardType='number-pad'
            style={styles.input}
            onChangeText={text => setYear(text)}
          />
          <TextInput
          theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
            label="Kilometers"
            value={Kilometers}
            mode='outlined'
            keyboardType='number-pad'
            activeOutlineColor={colors.gray}
            style={styles.input}
            onChangeText={text => setKilometers(text)}
          />
          <Dropdown
            data={['Insured', 'Not Insured']}
            style={styles.input}
            value={insured}
            toggleModal={() => setModal4(!modal4)}
            modal={modal4}
            setModal={setModal4}
            setValue={setInsured} />
          <TextInput
          theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
            label="Price"
            value={Price}
            mode='outlined'
            keyboardType='number-pad'
            activeOutlineColor={colors.gray}
            style={styles.input}
            onChangeText={text => setPrice(text)}
          />
          <TextInput
          theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
            label="Phone Number"
            value={Phone}
            mode='outlined'
            keyboardType='number-pad'
            activeOutlineColor={colors.gray}
            style={styles.input}
            onChangeText={text => setPhone(text)}
          />
          <Button
            onPress={() => { navigation.navigate("PlaceAdDetails") }}
            mode="contained"
            color={colors.white}
            style={[styles.button, { marginTop: 16, backgroundColor: colors.primary }]}
            labelStyle={[styles.ButtonLabel, { color: colors.white }]}
          >Next</Button>
          <Text style={{ fontFamily: fonts.REGULAR, color: colors.blue, textAlign: 'center', marginVertical: 8 }}>Questions? Call 800 BuisnessHub</Text>
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
    marginHorizontal: 12,
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

export default PlaceAdMotorDetails