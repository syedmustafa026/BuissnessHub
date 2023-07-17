import React from 'react';
import { Image, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import Separator from '../components/Extras/Separator'
import { Searchbar, TouchableRipple } from 'react-native-paper';


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
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('PlaceAdCategory',{title: 'Property for Rent', data: 0})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/propertyRent.png')} />
                            <Text style={styles.cardText}>Property for Rent</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('PlaceAdCategory',{title: 'Property for Sale', data: 1})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/propertySale.png')} />
                            <Text style={styles.cardText}>
                                Property for Sale</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('PlaceAdCategory',{title: 'Rooms for Rent', data: 2})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/room.png')} />
                            <Text style={styles.cardText}>
                                Rooms for Rent</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('PlaceAdCategory',{title: 'Motors', data: 3})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/motor.png')} />
                            <Text style={styles.cardText}>
                                Motors</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('PlaceAdCategory',{title: 'Classified', data: 4})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/classified.png')} />
                            <Text style={styles.cardText}>
                                Home Appliances</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('PlaceAdCategory',{title: 'Furniture & Garden', data: 5})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/furniture.png')} />
                            <Text style={styles.cardText}>
                                Furniture & Garden</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('PlaceAdCategory',{title: 'Mobile & Tablets', data: 6})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/mobile.png')} />
                            <Text style={styles.cardText}>
                                Mobile & Tablets</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('PlaceAdCategory',{title: 'Community', data: 7})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/Community.png')} />
                            <Text style={styles.cardText}>
                                Community</Text>
                        </View>
                    </TouchableRipple>
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
        resizeMode: 'contain'
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