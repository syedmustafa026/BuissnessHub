import React from 'react';
import { Modal, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from '../../components/Extras/Separator'

const Item = ({ name, handlePress }) => {
    return (
        <>
            <TouchableOpacity onPress={handlePress} activeOpacity={0.5} style={styles.row}>
                <Text style={styles.h2}>{name}</Text>
            </TouchableOpacity>
        </>
    )
}

const ReportAd = ({ navigation, route }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ justifyContent: 'center', marginVertical: 16 }}>
                        <Text style={styles.h1}>Report this listing</Text>
                        <Text style={[styles.h2, { fontFamily: fonts.BOLD }]}>Weight</Text>
                    </View>
                    <Separator />
                    <FlatList
                        data={['Spam', 'Fraud', 'Miscategorized', "Repetive Listing", 'Copyright Infringement', 'Not available', 'Incorrect Pricing',]}
                        renderItem={({ item }) => (<Item name={item} handlePress={() => navigation.navigate('ConfirmReportAd', { title: item, ad_id: route.params })} />)}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={<Separator />}
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
    row: {
        justifyContent: 'flex-start',
        marginTop: 16
    },
    h1: {
        color: colors.primary,
        fontSize: 24,
        zIndex: 2,
        marginHorizontal: 10,
        marginBottom: 4,
        fontFamily: fonts.SEMIBOLD,
    },
    h2: {
        fontSize: 18,
        color: colors.black,
        fontFamily: fonts.REGULAR,
        marginBottom: 26,
        marginHorizontal: 10,
    },
    h4: {
        fontSize: 14,
        color: colors.gray,
        fontFamily: fonts.REGULAR,
    },
});

export default ReportAd;