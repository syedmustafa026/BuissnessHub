import React from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";


const AdCard = () => {
    const navigation = useNavigation()
    return (
        <TouchableRipple
            rippleColor={colors.gray300}
            onPress={() => navigation.navigate('AdDetails')}
            style={styles.card}>
            <View >
                <Image style={styles.cardImg} source={require('../../assets/images/ad.jpeg')} />
                <View style={{ margin: 5 }}>
                    <Text style={{ color: colors.primary, fontFamily: fonts.BOLD }} >AED 175,000</Text>
                    <Text style={{ color: colors.black, fontFamily: fonts.BOLD }} >3 beds . 4 baths</Text>
                    <Text numberOfLines={1} style={{ color: colors.gray }} >Faya at Bloom Garison</Text>
                </View>

            </View>
        </TouchableRipple>
    )
}
const styles = StyleSheet.create({
    card: {
        width: wp('36'),
        height: hp('20'),
        borderColor: colors.white,
        borderWidth: 1,
        backgroundColor: colors.gray100,
        marginBottom: 16,
        marginLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 8,
        elevation: 4,
        marginVertical: 8
    },
    cardImg: {
        width: wp('36'),
        height: hp('10'),
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }
})
export default AdCard