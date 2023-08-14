import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import { TextInput, Button } from 'react-native-paper'

const Signup = ({ navigation }) => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [togglePassword, setTogglePassword] = useState(true)
  return (
    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView style={{ justifyContent: 'center', marginVertical: 16 }}>
        <Text style={styles.h1}>Signup to BuisnessHub</Text>
        <TextInput
          theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
          label="First Name"
          mode='outlined'
          activeOutlineColor={colors.gray}
          style={styles.input}
        />
        <TextInput
          theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
          label="Email"
          mode='outlined'
          activeOutlineColor={colors.gray}
          style={styles.input}
        />
        <TextInput
          theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
          label="Password"
          mode='outlined'
          secureTextEntry={togglePassword}
          activeOutlineColor={colors.gray}
          style={styles.input}
          right={<TextInput.Icon
            icon={togglePassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            forceTextInputFocus={false}
            onPress={() => setTogglePassword(!togglePassword)}
          />}
        />
        <Button
          onPress={() => { navigation.goBack() }}
          mode="contained"
          color={colors.white}
          style={[styles.button, { marginTop: 16, backgroundColor: colors.primary }]}
          labelStyle={[styles.ButtonLabel, { color: colors.white }]}
        >SIGNUP</Button>
      </KeyboardAvoidingView>
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
    fontFamily: fonts.MEDIUM,
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

export default Signup