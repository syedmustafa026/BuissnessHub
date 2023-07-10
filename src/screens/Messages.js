import React from "react";
import {  Image, Text, SafeAreaView, StyleSheet } from 'react-native'
import * as colors from "../utilities/colors"
import { SEMIBOLD } from "../utilities/fonts";

const Messages = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/images/cactus.jpeg")} style={styles.img} />
            <Text style={{
                fontFamily: SEMIBOLD,
                fontSize: 16,
                marginHorizontal: 12,
                textAlign: 'center', color: colors.primaryLight
            }}>Its like a desert in here! You dont have any favorites :( </Text>


        </SafeAreaView>
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
})
export default Messages