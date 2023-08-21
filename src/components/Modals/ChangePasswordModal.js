import React, { useState, useRef } from 'react'
import { SafeAreaView, Modal, Text, StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import Toast from "../../components/Extras/Toast"

import * as fonts from '../../utilities/fonts'
import * as colors from '../../utilities/colors'
import { validatePassword } from '../../utilities/validations'


const ChangePasswordModal = (props) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPasssword] = useState('')
  const [togglePassword, setTogglePassword] = useState(true)
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(true)
  
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const handlePress = async () => {
    const payload = {
      email: props.email,
      password_code: props.code,
      new_password: password,
    }
    try {
      if (!validatePassword(password)) throw new Error('Enter minimum 6 digits password')
      if (!confirmPassword) throw new Error('Confirm your password')
      if (password != confirmPassword) throw new Error('Both Password not matched')
      if (password === confirmPassword) {
        let reply = await changePassword(payload)
        if (!reply.status) throw new Error(reply.message)
        if (reply.status) {
          Toast('Success, Password Changed!')
          props.setVisible(false)
          props.navigation.replace('Login')
        }
      }
    } catch (error) {
      if (error.message === "Invalid verification code") {
        props.setVisible(false)
        props.navigation.goBack()
      }
      Toast(error.message || "Server Error")
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onDismiss={() => null}
      onRequestClose={() => props.setVisible(false)}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.head}>
            <Text style={styles.h1}>Create New Password</Text>
            <Text style={styles.h4}>Change new password which will be memorable for you! </Text>
          </View>
          <View style={styles.InputBoxes}>
            <TextInput
              ref={passwordRef}
              theme={{ colors: { text: colors.primary, placeholder: colors.primary, } }}
              onChangeText={(txt) => setPassword(txt)}
              style={styles.Input}
              autoFocus={true}
              secureTextEntry={togglePassword}
              left={<TextInput.Icon
                icon="lock-outline"
                color={colors.black}
                size={20}
                forceTextInputFocus={false}
              />}
              right={<TextInput.Icon
                icon={togglePassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                forceTextInputFocus={false}
                onPress={() => setTogglePassword(!togglePassword)}
              />}
              outlineColor={colors.primary}
              activeOutlineColor={colors.primary}
              label="New Password"
              mode="outlined"
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}

            />
            <TextInput
              style={styles.Input}
              ref={confirmPasswordRef}
              secureTextEntry={toggleConfirmPassword}
              onChangeText={(txt) => setConfirmPasssword(txt)}
              label="Confirm Password"
              outlineColor={colors.primary}
              left={<TextInput.Icon
                icon="lock-outline"
                color={colors.black}
                size={20}
                forceTextInputFocus={false}
              />}
              right={<TextInput.Icon
                icon={toggleConfirmPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                forceTextInputFocus={false}
                onPress={() => setToggleConfirmPassword(!toggleConfirmPassword)}
              />}
              activeOutlineColor={colors.primary}
              mode="outlined"
            />
            <Text style={styles.msg}> Both Password Must be Matched </Text>
            <Button
              mode="contained"
              onPress={handlePress}
              style={styles.footerButton}
              contentStyle={styles.footerButtonContent}
              labelStyle={{ fontFamily: fonts.SEMIBOLD }}
            >Change Password</Button>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: colors.white,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%"
  },
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {

  },
  h1: {
    fontSize: hp("3"),
    color: colors.primary,
    marginHorizontal: wp("3"),
    marginVertical: 5,
    fontFamily: fonts.BOLD
  },
  h4: {
    fontSize: hp("2"),
    color: colors.primary,
    marginHorizontal: wp("3"),
    marginVertical: hp("0.6"),
    fontFamily: fonts.SEMIBOLD
  },
  msg: {
    marginLeft: wp("5"),
    fontSize: hp("1.7"),
    color: colors.primary,
    fontFamily: fonts.SEMIBOLD
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp("82.6"),
    height: hp("8"),
    borderRadius: 40,
    backgroundColor: colors.primary,
    zIndex: 1,
    marginTop: hp("4")
  },
  Input: {
    backgroundColor: colors.white,
    marginHorizontal: wp("1.5"),
    width: '90%',
    marginVertical: hp("1.6"),
    alignSelf: 'center'
  },
  footerButton: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: hp('4'),
    backgroundColor: colors.primary
  },
  footerButtonContent: {
    paddingVertical: hp('1'),
  },
})

export default ChangePasswordModal