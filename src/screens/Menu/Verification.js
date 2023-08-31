import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import * as functions from '../../utilities/functions'
import * as fonts from '../../utilities/fonts'
import * as colors from '../../utilities/colors'
import ChangePasswordModal from '../../components/Modals/ChangePasswordModal'
import Toast from '../../components/Extras/Toast'

const Verification = ({ navigation, route }) => {
  const [changePasswordModal, setChangePasswordModal] = useState(false)
  const [code, setCode] = useState('')
  const [user, setUser] = useState(false)

  const getUser = async () => {
    const response = await functions.getItem('user')
    setUser(response)
  }
  useEffect(() => {
    getUser()
  }, [])
  console.log(user);
  const verifyCode = async () => {
    try {
      // if (code.length != 7) throw new Error("Enter 7 digit code")
      // if (route.params.by === 'placeAd') {
      //   const response = await functions.verifyPhone({
      //     verification_code: parseInt(code)
      //   })
      //   console.log(response);
      // }
      // if (route.params.by === 'foget') {
      //   const response = await functions.forgetVerificationCode({
      //     password_reset_code: parseInt(code)
      //   })
      //   console.log(response);
      // }
      Toast("Ad posted successfully")
      navigation.replace("BottomNavigator")
    }
    catch (error) {

    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ChangePasswordModal
        visible={changePasswordModal}
        setVisible={setChangePasswordModal}
        code={code}
        navigation={navigation} />
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.h1}>Verification Code</Text>
          <Text style={styles.h4}>A 5 digits code has been sent to {user?.email || "admin@buisnesshub.com"}</Text>
        </View>
        <View
          style={styles.InputBox}>
          <TextInput
            outlineColor={colors.primary}
            activeOutlineColor={colors.primary}
            style={styles.Input}
            mode="outlined"
            placeholder='Enter 5 digits code'
            autoFocus={true}
            activeUnderlineColor={colors.primary}
            keyboardType="phone-pad"
            maxLength={7}
            minLength={7}
            onChangeText={(value) => { setCode(value) }}
          />
        </View>
        <View
          style={styles.btns}>
          <Button
            onPress={verifyCode}
            mode="contained"
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
    color: colors.black
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