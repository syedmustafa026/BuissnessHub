import React from 'react';
import { Modal, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from '../../components/Extras/Separator'

const Item = ({ name, navigation }) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('PlaceAdListing')} activeOpacity={0.5} style={styles.row}>
                <Text style={styles.h2}>{name}</Text>
            </TouchableOpacity>
            <Separator />
        </>
    )
}
const PlaceAd = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {/* <Icon
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: 30
                        }}
                        name='close'
                        size={24}
                        onPress={() => navigation.goBack()}
                        color={colors.gray} /> */}
                    <View style={{ justifyContent: 'center', marginVertical: 16 }}>
                        <Text style={styles.h1}>Select a City</Text>
                        <Text style={styles.h4}>Where should we place your ad?</Text>
                    </View>
                    <FlatList
                        data={['Abu Dhabi', 'Pakistan', 'India', "Bangladesh", 'Iran', 'kuwait', 'UAE']}
                        renderItem={({ item }) => (<Item name={item} navigation={navigation} />)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalView: {
        width: wp('100'),
        height: hp('105'),
        backgroundColor: 'white',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    row: { justifyContent: 'flex-start', marginTop: 16 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: wp('35'),
        height: hp('5'),
        resizeMode: 'contain'
    },
    wallpaper: {
        width: wp('30'),
        height: hp('15'),
        resizeMode: 'contain',
        margin: wp('8')
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
    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 8,
        paddingHorizontal: 14,
        width: wp('80'),
        marginTop: hp('2'),
        height: 54,
        borderColor: colors.black,
        borderWidth: .6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default PlaceAd;