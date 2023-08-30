import React, { useState, useEffect } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import {  View,Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import Toast from "../components/Extras/Toast";
import * as functions from '../utilities/functions'
import LoginModal from '../components/Modals/LoginModal';


const Messages = ({ route,navigation }) => {
    const [user, setUser] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const [loading, setLoading] = useState(true)

    const getUser = async () => {
        const response = await functions.getItem('user')
        setUser(response)
        setLoading(false)
    }
    useEffect(() => {
        getUser()
    }, [])

    if (loading) {
        return (
            <View style={styles.errorContainer}>
                <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
            </View>
        )
    }
    return (
        <>
            {
                user != null ?
                    <SafeAreaView style={styles.container}>
                        <Image source={require("../assets/images/cactus.jpeg")} style={styles.img} />
                        <Text style={{
                            fontFamily: fonts.SEMIBOLD,
                            fontSize: 16,
                            marginHorizontal: 12,
                            textAlign: 'center', color: colors.primaryLight
                        }}>Its like a desert in here! You dont have any messages :( </Text>


                    </SafeAreaView> :
                    <SafeAreaView style={styles.container}>
                        <Image source={require("../assets/images/cactus.jpeg")} style={styles.img} />
                        <Text style={{
                            fontFamily: fonts.SEMIBOLD,
                            fontSize: 16,
                            marginHorizontal: 12,
                            textAlign: 'center', color: colors.primaryLight
                        }}>I think you're not login to Buisness Hub :( </Text>
                        <TouchableOpacity
                            onPress={() => setLoginModal(true)}
                            activeOpacity={0.8}
                            style={styles.button}>
                            <Text style={{
                                color: colors.black,
                                paddingHorizontal: 15,
                                fontSize: 18,
                                fontFamily: fonts.SEMIBOLD
                            }}>Login now</Text>
                        </TouchableOpacity>
                        <LoginModal navigation={navigation} modalVisible={loginModal} setModalVisible={setLoginModal} />
                    </SafeAreaView>
            }
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 500,
        height: 250,
        resizeMode: 'contain',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 8,
        alignSelf: 'center',
        paddingHorizontal: 14,
        width: wp('85'),
        height: 48,
        backgroundColor: colors.gray200,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginTop: 12
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default Messages