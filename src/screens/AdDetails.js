import React from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Button } from "react-native-paper";
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import AdCard from '../components/Cards/AdCard'
import Separator from '../components/Extras/Separator'

const AdDetails = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* header start */}
                <View style={{ position: 'relative' }}>
                <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backIcon}
                        activeOpacity={0.5}>
                       <Icon
                            name="arrow-left"
                            size={28}
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
                            color={colors.gray} />
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

                {/* details start */}
                <View style={styles.box}>
                    <Text style={styles.h2}>Details</Text>
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.boldText}>Color</Text>
                            <Text style={styles.regularText}>Purple</Text>
                        </View>
                        <Separator />
                        <View style={styles.row}>
                            <Text style={styles.boldText}>Age</Text>
                            <Text style={styles.regularText}>1 year</Text>
                        </View>
                        <Separator />
                        <View style={styles.row}>
                            <Text style={styles.boldText}>Condition</Text>
                            <Text style={styles.regularText}>Used</Text>
                        </View>
                        <Separator />
                        <View style={styles.row}>
                            <Text style={styles.boldText}>Memory</Text>
                            <Text style={styles.regularText}>64GB</Text>
                        </View>
                        <Separator />
                        <View style={styles.row}>
                            <Text style={styles.boldText}>warranty</Text>
                            <Text style={styles.regularText}>1 year</Text>
                        </View>
                        <Separator />
                        <Text style={styles.highlightedText}>Show More Details</Text>
                    </View>
                    <Button

                        onPress={() => { }}
                        mode="contained"
                        color={colors.white}
                        style={[styles.button, { marginVertical: 18, }]}
                        labelStyle={styles.ButtonLabel}
                    >Make an Offer</Button>
                </View>
                {/* details finished */}
                {/* description start */}
                <View style={styles.box}>
                    <Text style={styles.h2}>Description</Text>
                    <Text style={[styles.h4, { marginTop: 4 }]}>Iphone 11 pro max </Text>
                    <Text style={styles.h4}>Geniune color </Text>
                    <Text style={styles.h4}>1 year used </Text>
                    <Text style={styles.h4}>Iphone 11 pro max </Text>
                    <Text style={styles.highlightedText}>Show More Details</Text>
                </View>
                {/* description finished */}
                {/* location start */}
                <View style={styles.box}>
                    <Text style={styles.h2}>Location</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
                        <Icon
                            name='map-marker-outline'
                            size={24}
                            style={{ marginLeft: 15 }}
                            color={colors.gray} />
                        <Text style={styles.h4}>AL-Mira Square</Text>
                    </View>
                    <Image style={{ width: "90%", height: 160, alignSelf: 'center', marginVertical: 14 }} source={require('../assets/images/map.png')} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.image} source={require("../assets/images/Community.png")} />
                            <View >
                                <Text style={[styles.regularText, { marginHorizontal: 15 }]}>Seller:</Text>
                                <Text style={[styles.boldText, { marginHorizontal: 15 }]}>Ali Ali</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.regularText, { marginHorizontal: 15 }]}>4 items live:</Text>
                            <Text style={[styles.boldText, { marginHorizontal: 15, color: colors.primary }]}>See more</Text>
                        </View>
                    </View>
                </View>
                {/* location finished */}
                {/* SimilarAds Start */}
                <View style={styles.box}>
                    <Text style={styles.h2}>Similar Ads</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                    </ScrollView>
                    <Text style={styles.highlightedText}>Report an Ad</Text>
                </View>
                {/* SimilarAds Finished */}
            </ScrollView>
            {/* Chat now start */}
            <View style={styles.box}>
                <Button
                    onPress={() => { }}
                    mode="contained"
                    color={colors.white}
                    style={styles.button}
                    labelStyle={styles.ButtonLabel}
                >Chat</Button>
            </View>
            {/* Chat now finish */}

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
        height: 40,
        width: 40,
    },
    boldText: {
        color: colors.black,
        fontSize: 14,
        fontFamily: fonts.SEMIBOLD
    },
    regularText: {
        color: colors.gray,
        fontSize: 14,
        fontFamily: fonts.REGULAR
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
    box:
    {
        padding: 15,
        paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: colors.white
    }
    ,
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    image: {
        width: wp('12'),
        height: hp('12'),
        resizeMode: 'contain'
    },
    button: {
        width: '90%',
        borderRadius: 5,
        height: 45,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 1
    },
    ButtonLabel: {
        fontSize: hp("2.2"),
        color: colors.primary,
        fontFamily: fonts.SEMIBOLD,
    },
    highlightedText: {
        fontFamily: fonts.SEMIBOLD,
        color: colors.primary,
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 16
    }
})

export default AdDetails