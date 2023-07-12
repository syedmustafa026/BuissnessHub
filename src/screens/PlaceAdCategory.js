import React from 'react';
import { Modal, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import Separator from '../components/Extras/Separator'
import WideNameRow from '../components/Rows/WideNameRow'

const PlaceAdCategory = ({ navigation }) => {

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
                        size={24}
                        onPress={() => navigation.goBack()}
                        color={colors.black} />
                    <View style={{ justifyContent: 'center', marginVertical: 16 }}>
                        <Text style={styles.h1}>Motors</Text>
                        <Text style={styles.h4}>Choose the category that your fits into.</Text>
                    </View>
                    <FlatList
                        data={['Used Cars', 'Motorcycles', 'Auto Accessories', "Heavy Vehicles", 'Boats', 'Number Plated']}
                        renderItem={({ item }) => (<WideNameRow name={item} navigation={navigation} />)}
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

export default PlaceAdCategory;