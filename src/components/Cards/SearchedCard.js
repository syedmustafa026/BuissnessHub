import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";


const SearchedCard = () => {
    const navigation = useNavigation()
    return (
        <TouchableRipple
            rippleColor={colors.gray300}
            onPress={() => navigation.navigate('AdDetails')}
            style={styles.card}>
            <View>
                <MaterialIcon
                    style={styles.favIcon}
                    name='favorite-outline'
                    size={24}
                    color={colors.white} />
                <Image style={styles.cardImg} source={require('../../assets/images/ad.jpeg')} />
                <View style={{ margin: 5, padding: 10 }}>
                    <Text style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 20 }} >AED 175,000 </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
                        <Icon
                            name='bed-outline'
                            size={24}
                            color={colors.gray} />
                        <Text style={styles.cardText}>3 beds</Text>
                        <Icon
                            name='bathtub-outline'
                            size={24}
                            color={colors.gray} />
                        <Text style={styles.cardText}>3 baths</Text>
                        <Icon
                            name='arrow-down-thin'
                            size={24}
                            color={colors.gray} />
                        <Text style={styles.cardText}>3059 Sqft.</Text>
                    </View>
                    <Text style={{ color: colors.black, fontFamily: fonts.REGULAR }} >Type 3E | Single Row | Available End of July</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
                        <Icon
                            name='map-marker-outline'
                            size={24}
                            color={colors.gray} />
                        <Text style={styles.cardText}>AL-Mira Square</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={[styles.button, { backgroundColor: colors.redLight }]}>
                        <Icon
                            name='phone'
                            size={24}
                            color={colors.red} />
                        <Text style={{ color: colors.black, paddingHorizontal: 10, fontSize: 18, fontFamily: fonts.SEMIBOLD }}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={[styles.button, { backgroundColor: colors.successLight }]}>
                        <Icon
                            name='whatsapp'
                            size={24}
                            color={colors.success} />
                        <Text style={{ color: colors.black, paddingHorizontal: 10, fontSize: 18, fontFamily: fonts.SEMIBOLD }}>Whatsapp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableRipple>
    )
}
const styles = StyleSheet.create({
    favIcon: {
        position: 'absolute',
        zIndex: 2,
        top: 10,
        right: 10
    },
    card: {
        width: "95%",
        height: hp('54'),
        borderColor: colors.white,
        borderWidth: 1,
        backgroundColor: colors.gray100,
        marginBottom: 16,
        marginHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 10,
        elevation: 4,
        marginVertical: 8
    },
    cardImg: {
        width: "100%",
        height: hp('25'),
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    cardText: {
        fontSize: 18,
        color: colors.black,
        marginHorizontal: 6,
        fontFamily: fonts.REGULAR
    },
    button: {
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 4,
        backgroundColor: colors.successLight,
        width: wp('45'),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        zIndex: 2
    },
})
export default SearchedCard