import React from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"

import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Separator from '../components/Separator'

const AdDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
             {/* header start */}
            <View style={{ position: 'relative' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backIcon}
                    activeOpacity={0.5}>
                    <Icon
                        name="arrow-left"
                        size={36}
                        style={styles.backButton}
                        color={colors.black} />
                </TouchableOpacity>
                <Image style={styles.mainImg} source={require('../assets/images/ad.jpeg')} />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.shareIcon, { right: 90, bottom: -20 }]}
                    activeOpacity={0.5}>
                    <MaterialIcon
                        name="favorite-outline"
                        size={28}
                        style={{ alignSelf: 'center' }}
                        color={colors.black} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.shareIcon}
                    activeOpacity={0.5}>
                    <Icon
                        name="share-variant"
                        size={28}
                        style={{ alignSelf: 'center' }}
                        color={colors.gray} />
                </TouchableOpacity>
            </View>
            <View style={{
                padding: 15,
                paddingHorizontal: 20,
                backgroundColor: colors.white
            }}>
                <Text style={{ color: colors.primary, fontFamily: fonts.SEMIBOLD, fontSize: 20 }} >AED 175,000 / yr</Text>
                <Text style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 24, marginVertical: 8, marginBottom: 20 }} >Type B | With Study | Big Garder</Text>
                <Separator />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 18 }}>
                    <Icon
                        name='bed-outline'
                        size={22}
                        color={colors.black} />
                    <Text style={styles.h4}>3 beds</Text>
                    <Icon
                        name='bathtub-outline'
                        size={22}
                        color={colors.black} />
                    <Text style={styles.h4}>3 baths</Text>
                    <Icon
                        name='arrow-down-thin'
                        size={22}
                        color={colors.black} />
                    <Text style={styles.h4}>3059 Sqft.</Text>
                </View>
            </View>
            {/* header finished */}

            <View style={{
                padding: 15,
                paddingHorizontal: 20,
                marginTop: 10,
                backgroundColor: colors.white
            }}>
                <Text style={styles.h2}>Location</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
                        <Icon
                            name='map-marker-outline'
                            size={24}
                            style={{marginLeft: 15}}
                            color={colors.gray} />
                        <Text style={styles.h4}>AL-Mira Square</Text>
                    </View>
                <Image style={{width: "90%", height: 160,alignSelf:'center', marginVertical: 18}} source={require('../assets/images/map.png')} />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backIcon:
    {
        position: "absolute",
        padding: wp('1.1'),
        top: 15,
        left: 15,
        borderRadius: 100,
        zIndex: 3,
        backgroundColor: colors.white,
        height: hp('5.6'),
        width: wp('11.2'),
    },
    shareIcon: {
        position: "absolute",
        padding: wp('1.1'),
        bottom: -20,
        right: 40,
        borderRadius: 100,
        zIndex: 3,
        backgroundColor: colors.white,
        height: 40,
        width: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    mainImg: {
        width: "100%",
        height: hp('30'),
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    h4: {
        fontSize: 14,
        color: colors.black,
        marginHorizontal: 16,
        fontFamily: fonts.REGULAR,
    },
    h2: {
        fontSize: 18,
        color: colors.black,
        marginHorizontal: 16,
        fontFamily: fonts.SEMIBOLD,
    },
})

export default AdDetails