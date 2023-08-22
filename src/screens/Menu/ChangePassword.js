import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import * as functions from "../../utilities/functions"
import { TextInput, Button, RadioButton } from 'react-native-paper'
import Dropdown from '../../components/Inputs/Dropdown'
import Toast from '../../components/Extras/Toast'
import { validatePassword } from '../../utilities/validations'

const ChangePassword = ({ navigation }) => {
    const [confirmPassword, setConfirmPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setnewPassword] = useState('')

    const handleChange = async () => {
        try {
            console.log(await functions.getHeader());
            if (!oldPassword || !newPassword || !confirmPassword) throw new Error("Enter required feilds")
            if (newPassword != confirmPassword) throw new Error("Password does not matched")
            if (!validatePassword(newPassword)) throw new Error("Set password of min 6 charachter")
            if (newPassword == confirmPassword) {
                const response = await functions.updatePassword({
                    old_password: oldPassword,
                    password: newPassword,
                    password_confirmation: confirmPassword
                })
                console.log(response);
                if (response.status) {
                    Toast("Password Updated")
                    navigation.replace('BottomNavigator')
                }
            }
        } catch (error) {
            Toast(error.message || "Server Error")
        }
    }
    return (
        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView style={{ justifyContent: 'center', marginVertical: 16 }}>
                <TextInput
                    theme={{ colors: { text: colors.gray, placeholder: colors.gray500, } }}
                    label="Old Password *"
                    mode='outlined'
                    activeOutlineColor={colors.gray}
                    keyboardType='default'
                    style={styles.input}
                    onChangeText={(txt) => setOldPassword(txt)}
                />
                <TextInput
                    theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
                    label="New password *"
                    mode='outlined'
                    activeOutlineColor={colors.gray}
                    onChangeText={(txt) => setnewPassword(txt)}
                    style={styles.input}
                />
                <TextInput
                    theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
                    label="Confirm new password *"
                    onChangeText={(txt) => setConfirmPassword(txt)}
                    mode='outlined'
                    activeOutlineColor={colors.gray}
                    style={styles.input}
                />
                <Text style={{ fontFamily: fonts.REGULAR, color: colors.blue, textAlign: 'center', marginVertical: 8 }}>Both password must me matched*</Text>
                <Button
                    onPress={handleChange}
                    mode="contained"
                    style={[styles.button, { marginTop: 16, backgroundColor: colors.primary }]}
                    labelStyle={[styles.ButtonLabel, { color: colors.white }]}
                >Save Changes</Button>
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
        color: colors.gray,
        fontFamily: fonts.SEMIBOLD
    },
})

export default ChangePassword