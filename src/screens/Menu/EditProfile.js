import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Button } from "react-native-paper"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from "../../components/Extras/Separator";

const EditProfile = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgCon}>
                <TouchableOpacity activeOpacity={0.6}>
                <Image style={styles.image} source={{ uri: route.params.image_url }} />
                <Icon style={{ position: 'absolute', bottom: 0, left: 70 }} name='pencil-circle' color={colors.gray} size={28} />
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.h2}>Name</Text>
                <TouchableOpacity style={styles.selectRow}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.selectText}>{route.params.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='pencil' color={colors.gray} size={20} />
                    </View>
                </TouchableOpacity>
                <Separator />
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                <Text style={styles.h2}>Mobile Number</Text>
                <TouchableOpacity style={styles.selectRow}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.selectText}></Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='pencil' color={colors.gray} size={20} />
                    </View>
                </TouchableOpacity>
                <Separator />
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                <Text style={styles.h2}>Facebook</Text>
                <TouchableOpacity style={styles.selectRow}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.selectText}>Verified</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='check-circle' color={colors.green} size={20} />
                    </View>
                </TouchableOpacity>
                <Separator />
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: -18
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
    },
    imgCon: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 10,
        marginRight: 12,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    heading: {
        color: colors.black,
        fontSize: 26,
        fontFamily: fonts.BOLD,
    },
    h1: {
        color: colors.black,
        fontSize: 16,
        zIndex: 2,
        marginTop: 12,
        fontFamily: fonts.BOLD,

        textAlign: 'center',
    },
    h2: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.BOLD,
        marginHorizontal: 8,
    },
    text: {
        color: colors.gray,
        fontSize: 14,
        fontFamily: fonts.SEMIBOLD,
        marginHorizontal: wp('2')
    },
    signup: {
        color: colors.primaryLight,
        marginTop: 16,
        paddingHorizontal: 15,
        marginBottom: 14,
        fontSize: 14,
        fontFamily: fonts.SEMIBOLD,
        textAlign: 'center'
    },
    topicHeading: {
        color: colors.secondary,
        fontFamily: fonts.SEMIBOLD
    },
    selectRow: {
        marginHorizontal: 5,
        marginVertical: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    selectText: {
        fontSize: 16,
        marginLeft:8,
        color: colors.gray,
        fontFamily: fonts.SEMIBOLD
    },
    button: {
        width: '20%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 1
    },
    ButtonLabel: {
        color: colors.primaryLight,
        fontSize: 16,
        fontFamily: fonts.SEMIBOLD
    },
})
export default EditProfile