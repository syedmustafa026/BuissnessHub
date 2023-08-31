import React, { useState, useEffect } from "react"
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../../utilities/colors"
import * as functions from "../../utilities/functions"

const Splash = ({ navigation }) => {
    let screen = "Splash"

    const controlStorage = async () => {
        const check = await functions.getItem("FIRST_LAUNCH")
        if (check === null) {
            screen = "OnBoard"
            functions.setItem('FIRST_LAUNCH', "yes")
            handleLoad()
        }
        if (check === 'yes') {
            screen = "BottomNavigator"
            handleLoad()
        }
    }
    const handleLoad = async () => {
        const timeout = setTimeout(() => {
            navigation.replace(screen)
        }, 2000)

        return () => {
            clearTimeout(timeout)
        }
    }
    useEffect(() => {
        controlStorage()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.primary}
            />
            <Image source={require("../../assets/images/plainlogo.png")} style={styles.brand} />
            {/* <View style={styles.section}>
                <Text style={styles.h1}>WHOLESALE APP</Text>
            </View> */}
            {/* <View style={styles.footer}>
                <Text style={styles.h3}>Version 1.0.0</Text>
            </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
    },

    brand: {
        width: wp("80"),
        height: wp("40"),
        resizeMode: 'contain'
    },
    h1: {

        fontSize: hp("4"),
        color: colors.black,
    },
    footer: {
        position: "absolute",
        bottom: hp("0"),
        width: wp("100"),
        alignItems: "center",
        paddingVertical: hp("2"),
        zIndex: 1,
    },
    h3: {

        fontSize: hp("2.4"),
        color: colors.white,
    },
})

export default Splash