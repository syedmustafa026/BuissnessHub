import React, { useState, useRef } from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { TextInput, Button } from 'react-native-paper'
import Toast from '../../components/Extras/Toast'
import { validateEmail, validatePassword } from "../../utilities/validations"
import { publicUrl } from "../../utilities/constants"
import Recaptcha from 'react-native-recaptcha-that-works';
import * as functions from '../../utilities/functions'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const Signup = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [password, setPasswordl] = useState('')
  const [token, setToken] = useState(null)

  const [togglePassword, setTogglePassword] = useState(true)

  const recaptchaRef = useRef();

  const send = () => {
    setLoading(true)
    recaptchaRef.current.open()
  }

  const onVerify = async token => {
    setToken(token)
    await handleSignup()
  }

  const onExpire = () => {
    console.warn('expired!');
  }
  const handleSignup = async () => {
    try {
      if (!email && !password) throw new Error('Enter the required feilds')
      if (!validateEmail(email)) throw new Error('Enter valid email')
      if (!password) throw new Error('Enter password')
      if (!name) throw new Error('Enter password')
      if (!validatePassword(password)) throw new Error('Enter minimum 6 digits password')
      else if (token == null) send()
      else if (name && validateEmail(email) && validatePassword(password)) {
        const payload = {
          name: name,
          email: email,
          password: password,
          password_confirmation: password,
          "g-recaptcha-response": token,
        }
        const response = await functions.register(payload)
        if (!response.status) throw new Error(response.message)
        Toast("Register Successfully")
        navigation.replace("Login")
      }

    } catch (error) {
      Toast(error.message || "Server Error")
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView style={{ justifyContent: 'center', marginVertical: 16 }}>
        <Text style={styles.h1}>Signup to BuisnessHub</Text>
        <TextInput
          theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
          label="Full Name"
          onChangeText={(txt) => setName(txt)}
          mode='outlined'
          activeOutlineColor={colors.gray}
          style={styles.input}
        />
        <TextInput
          theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
          label="Email"
          onChangeText={(txt) => setEmail(txt)}
          mode='outlined'
          activeOutlineColor={colors.gray}
          style={styles.input}
        />
        <TextInput
          theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
          label="Password"
          onChangeText={(txt) => setPasswordl(txt)}
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
        <Recaptcha
          ref={recaptchaRef}
          siteKey={"6LeyoQ4nAAAAALQ7qfYdJwmcV-ChoKw4pYjCO6MU"}
          baseUrl={publicUrl}
          onVerify={onVerify}
          onExpire={onExpire}
          size="invisible"
        />
        <Button
          loading={loading}
          onPress={handleSignup}
          mode="contained"
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
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD
  },
})

export default Signup