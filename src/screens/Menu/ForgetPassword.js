import React, { useState } from 'react'
import { Alert, Text, StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import { TextInput, Button } from 'react-native-paper'

import Toast from "../../components/Extras/Toast"

import * as fonts from '../../utilities/fonts'
import * as colors from '../../utilities/colors'
import { validateEmail } from '../../utilities/validations'

const ForgetPassword = ({ navigation, route }) => {
  const [email, setEmail] = useState('')

  const onContinue = async () => {
    try {
      if (!validateEmail(email)) {
        Toast("Enter valid email address")
      }
      else if (validateEmail(email)) {
        Alert.alert("Wait", `Are you sure your email is ${email}`, [{
          text: "Yes",
          onPress: async () => {
            const response = await forgotPassword({ email: email })
            if (!response.status) Toast(response.message)
            if (response.status) {
              Toast(`Verification code sent to ${email}`)
              navigation.navigate("Verification", { email: email })
            }
          }
        }, {
          text: "Cancel",
        }], {
          cancelable: true
        })

      }
    } catch (error) {
      Toast(error.message)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.h1}>
          Forgot Password
        </Text>
        <Text style={styles.h4}>
          Enter your registered email address to recover your password! {'\n'}
        </Text>
      </View>
      <Text
        style={styles.h4}>
        Enter your registered Email
      </Text>
      <View>
        <View
          style={styles.InputBox}>
          <TextInput
            autoFocus={true}
            outlineColor={colors.primary}
            activeOutlineColor={colors.primary}
            style={styles.Input}
            placeholder='Enter valid email address'
            activeUnderlineColor={colors.primary}
            keyboardType="email-address"
            mode={'outlined'}
            onChangeText={(value) => { setEmail(value) }}
          />
        </View>
        <Button
          mode="contained"
          onPress={onContinue}
          style={styles.footerButton}
          contentStyle={styles.footerButtonContent}
          labelStyle={styles.ButtonLabel}
        >CONTINUE</Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: wp("5"),
    flex: 1,
    backgroundColor: colors.white
  },
  head: {
    justifyContent: 'flex-end',
    flex: 0.6,
    marginBottom: hp("3"),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: hp("4.5"),
    color: colors.primary,
    fontFamily: fonts.BOLD,
    marginHorizontal: wp("2.5"),
    marginVertical: hp(".5")
  },
  h4: {
    fontSize: hp("2"),
    marginHorizontal: wp("4"),
    marginVertical: hp(".6"),
    fontFamily: fonts.SEMIBOLD,
    color: colors.primary
  },
  img: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    marginLeft: 25,
  },
  code: {
    marginLeft: wp("3.5"),
    marginVertical: hp("1.3"),
    fontSize: hp("2.5"),
    color: colors.primary
  },

  InputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Input: {
    backgroundColor: colors.white,
    marginHorizontal: hp("3"),
    width: '90%',
    fontSize: hp("2")
  },
  btns: {
    marginTop: hp("2.5"),
  },
  footerButton: {
    width: '95%',
    alignSelf: 'center',
    marginTop: hp("5"),
    borderRadius: 10,
    backgroundColor: colors.primary
  },
  footerButtonContent: {
    paddingVertical: hp("1"),
  },
  ButtonLabel: {
    fontSize: hp("2.2"),
    color: colors.white,
    fontFamily: fonts.SEMIBOLD
  }
})

export default ForgetPassword