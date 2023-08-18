import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import Toast from "../../components/Extras/Toast"

import * as fonts from '../../utilities/fonts'
import * as colors from '../../utilities/colors'

// const { getVerificationCode, verification } = functions

const Verification = ({ route, navigation }) => {
  const [changePasswordModal, setChangePasswordModal] = useState(false)
  const [timer, setTimer] = useState('')
  const [code, setCode] = useState('15:00')

  const countDownTimer = () => {
    let countDownDate = new Date().getTime() + 15 * 60 * 1000;
    let x = setInterval(() => {

      let now = new Date().getTime();

      let distance = countDownDate - now;

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimer(`${minutes}:${seconds}`)

      if (distance < 0) {
        clearInterval(x);
        setTimer(null)
      }
    }, 1000);
  }
  const handleSendCodeAgain = async () => {
    const response = await forgotPassword({ email: route.params.email })
    if (!response.status) Toast(response.message)
    if (response.status) {
      Toast(`Code again sent to ${email}`)
    }
  }
  const handleContinue = async () => {
    try {
      if (code.length < 6) return Toast('Enter 6 digit verification code')
      const response = await verifyEmail({ email: route.params.email, password_code: code })
      if (!response.status) return Toast(response.message)
      if (response.status) {
        setChangePasswordModal(true)
      }
    } catch (error) {
      Toast(error.message)
    }
  }
  useEffect(() => {
    countDownTimer()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ChangePasswordModal
        visible={changePasswordModal}
        setVisible={setChangePasswordModal}
        email={route.params.email}
        code={code}
        navigation={navigation} />
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.h1}>Verification Code</Text>
          <Text style={styles.h4}>A 6 digits code has been sent to {route.params.email}</Text>
        </View>
        <View
          style={styles.InputBox}>
          <TextInput
            outlineColor={colors.primary}
            activeOutlineColor={colors.primary}
            style={styles.Input}
            mode="outlined"
            placeholder='Enter 6 digits code'
            autoFocus={true}
            activeUnderlineColor={colors.primary}
            keyboardType="phone-pad"
            maxLength={6}
            minLength={6}
            onChangeText={(value) => { setCode(value) }}
          />
        </View>
        {timer != null ?
          <Text style={styles.h4}>  Code will expire in {timer}</Text> :
          <Text onPress={handleSendCodeAgain} style={styles.h4}>{"  Send Code again!"}</Text>
        }
        <View
          style={styles.btns}>
          <Button
            mode="contained"
            onPress={handleContinue}
            style={styles.footerButton}
            contentStyle={styles.footerButtonContent}
            labelStyle={styles.ButtonLabel}
          >SUBMIT</Button>
        </View>
      </View>
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    justifyContent: 'flex-end',
    marginVertical: hp("1"),
  },
  section: {
    flex: 1,
    padding: wp("5"),
    justifyContent: 'center',
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
    fontSize: hp("4"),
    color: colors.primary,
    marginVertical: wp("1"),
    marginHorizontal: wp("3.5"),
    fontFamily: fonts.BOLD
  },
  h4: {
    fontSize: hp("1.8"),
    marginVertical: hp(.5),
    marginHorizontal: wp("3.5"),
    fontFamily: fonts.SEMIBOLD,
    color: colors.primary
  },
  img: {
    width: wp("8"),
    height: wp("8"),
    marginLeft: 25,
  },
  code: {
    marginLeft: wp("3.5"),
    marginVertical: hp("1.3"),
    fontSize: hp("2.5")
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp("78"),
    height: hp("8"),
    borderRadius: 40,
    backgroundColor: colors.primary,
    zIndex: 2,
    marginTop: hp("5")
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
    fontSize: hp("2.3")
  },
  btns: {
    marginTop: hp("2.5"),
    justifyContent: "center",
    alignItems: "center"
  },
  footerButton: {
    width: '95%',
    marginTop: hp("2"),
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


export default Verification