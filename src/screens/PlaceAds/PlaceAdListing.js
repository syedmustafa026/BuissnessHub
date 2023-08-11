import React from 'react';
import { Image, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const PlaceAdListing = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Icon
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: 30
                        }}
                        name='arrow-left'
                        size={30}
                        onPress={() => navigation.goBack()}
                        color={colors.black} />
                    <View style={{ justifyContent: 'center', marginTop: 48 }}>
                        <Text style={styles.h1}>What are you listing</Text>
                        <Text style={styles.h4}>Choose the category that your ad fits into?</Text>
                    </View>
                    <View style={styles.cards}>
                    <TouchableOpacity
                       activeOpacity={0.7}
                        onPress={() => navigation.navigate('PlaceAdTitle', { title: 'Business for Sale', data: 0 })}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../../assets/images/propertySale.png')} />
                            <Text style={styles.cardText}>Business for Sale</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                       activeOpacity={0.7}
                        onPress={() => navigation.navigate('PlaceAdTitle', { title: 'Shares for Sale', data: 1 })}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../../assets/images/shares.png')} />
                            <Text style={styles.cardText}>
                                Shares for Sale</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                       activeOpacity={0.7}
                        onPress={() => navigation.navigate('PlaceAdTitle', { title: 'Business Ideas', data: 2 })}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={[styles.cardImg,{width:48,height:48}]} source={require('../../assets/images/buisnessidea.png')} />
                            <Text style={styles.cardText}>
                                Business Ideas</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                       activeOpacity={0.7}
                        onPress={() => navigation.navigate('PlaceAdTitle', { title: 'Investors', data: 3 })}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={[styles.cardImg,{width:47,height:47}]} source={require('../../assets/images/investors.png')} />
                            <Text style={styles.cardText}>
                                Investors</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                       activeOpacity={0.7}
                        onPress={() => navigation.navigate('PlaceAdTitle', { title: 'Investors Required', data: 4 })}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../../assets/images/investorsreq.png')} />
                            <Text style={styles.cardText}>
                                Investors Required</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                       activeOpacity={0.7}
                        onPress={() => navigation.navigate('PlaceAdTitle', { title: 'Franchise Opportunities', data: 5 })}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={[styles.cardImg,{width:42,height:42}]} source={require('../../assets/images/franchise.png')} />
                            <Text style={styles.cardText}>
                                Franchise Opportunities</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                       activeOpacity={0.7}
                        onPress={() => navigation.navigate('PlaceAdTitle', { title: 'Export & Import Trade', data: 6 })}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../../assets/images/logistics.png')} />
                            <Text style={styles.cardText}>
                                Export & Import Trade</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                       activeOpacity={0.7}
                        onPress={() => navigation.navigate('PlaceAdTitle', { title: 'Machinery & Supplies', data: 7 })}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../../assets/images/machine.png')} />
                            <Text style={styles.cardText}>
                             Machinery &  Supplies </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        width: wp('28'),
                        height: hp('13'),
                        marginRight: 12,
                    }} />
                </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cards: {
        paddingHorizontal: wp('4'),
        alignItems:'center',
        paddingVertical: hp('3'),
        justifyContent:'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card: {
        width: wp('30'),
        height: hp('13'),
        borderColor: colors.white,
        borderWidth: 1,
        backgroundColor: colors.gray100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        marginRight: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 10,
        elevation: 4,

    },
    cardText: {
        fontSize: 12,
        textAlign: 'center',
        color: colors.secondary,
        marginTop: 4
    },
    cardImg: {
        width: 38,
        height: 38,
    },
    h1: {
        color: colors.black,
        fontSize: 24,
        zIndex: 2,
        fontFamily: fonts.BOLD,
        fontFamily: fonts.BOLD,
        textAlign: 'center',
    },
    h2: {
        fontSize: 18,
        color: colors.black,
        fontFamily: fonts.SEMIBOLD,
        marginBottom: 30,
        marginHorizontal: 20
    },
    h4: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.REGULAR,
        textAlign: 'center'
    },
});

export default PlaceAdListing;