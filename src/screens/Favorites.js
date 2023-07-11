import React from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import * as colors from "../utilities/colors"
import Separator from '../components/Extras/Separator'
import { REGULAR, SEMIBOLD } from "../utilities/fonts";

const Favorite = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontFamily: SEMIBOLD, fontSize: 16, marginHorizontal: 12, textAlign: 'center', color: colors.primaryLight }}>Its like a desert in here! You dont have any favorites :(</Text>
            <TouchableOpacity
                onPress={() =>navigation.goBack()}
                activeOpacity={0.8}
                style={styles.button}>
                <Text style={{
                    color: colors.black,
                    paddingHorizontal: 15,
                    fontSize: 18,
                    fontFamily: REGULAR
                }}>Search For Something</Text>
            </TouchableOpacity>
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
})
export default Favorite