import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, ScrollView, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Searchbar, TextInput, TouchableRipple } from 'react-native-paper'
import SelectBoxChip from "../Chips/CheckBoxChip"
import SelectHorizontalChip from "../Chips/SelectHorizonatlChip"
import Slider from '../Extras/MultiSliders'
const Tab = createMaterialTopTabNavigator();


const Buy = () => {
    const [text, setText] = React.useState("");
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginHorizontal: 20, marginVertical: 15, marginTop: 30 }}>
                    <Text style={styles.h1}>Location</Text>
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.selectButton}>
                        <Icon
                            name='map-marker'
                            size={24}
                            color={colors.gray} />
                        <Text style={styles.selectLabel}>eg. Dubai Marina</Text>
                    </TouchableOpacity>
                    <Text style={styles.h4}>Select the cities neighbourhood or buildings that you want to search in</Text>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                    <Text style={styles.h1}> Type</Text>
                    <FlatList
                        style={{ marginTop: 12 }}
                        data={['Residential', 'Commercial', 'Room', "Bangladesh", 'Iran', 'kuwait', 'UAE']}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (<SelectBoxChip name={item} />)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                    <Text style={styles.h1}> Categories</Text>
                    <FlatList
                        data={['All Residential', 'office', 'industrial', "retail", 'Iran', 'kuwait', 'UAE']}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (<SelectHorizontalChip name={item} />)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                    <Text style={styles.h1}> Price Range (AED)</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            placeholder="0"
                            label=""
                            value={text}
                            mode='outlined'
                            activeOutlineColor={colors.gray}
                            style={styles.input}
                            onChangeText={text => setText(text)}
                        />
                        <Text style={styles.h2}> to</Text>
                        <TextInput
                            placeholder="Any"
                            label=""
                            value={text}
                            mode='outlined'
                            activeOutlineColor={colors.gray}
                            style={styles.input}
                            onChangeText={text => setText(text)}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Slider />
                    </View>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                    <Text style={styles.h1}> Area / Size</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            placeholder="0"
                            label=""
                            value={text}
                            mode='outlined'
                            activeOutlineColor={colors.gray}
                            style={styles.input}
                            onChangeText={text => setText(text)}
                        />
                        <Text style={styles.h2}> to</Text>
                        <TextInput
                            placeholder="Any"
                            label=""
                            value={text}
                            mode='outlined'
                            activeOutlineColor={colors.gray}
                            style={styles.input}
                            onChangeText={text => setText(text)}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Slider />
                    </View>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 15, marginTop: 30 }}>
                    <Text style={styles.h1}>Exclude Location</Text>
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.selectButton}>
                        <Icon
                            name='map-marker'
                            size={24}
                            color={colors.gray} />
                        <Text style={styles.selectLabel}>eg. Pool, Security</Text>
                    </TouchableOpacity>
                    <Text style={styles.h4}>Select the cities neighbourhood or buildings that exclude from the search in</Text>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                    <Text style={styles.h1}> Amenities</Text>
                    <FlatList
                        style={{ marginTop: 12 }}
                        data={['Residential', 'Commercial', 'Room', "Bangladesh", 'Iran', 'kuwait', 'UAE']}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (<SelectBoxChip name={item} checked={"Commercial"} />)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },
    h1: {
        color: colors.black,
        fontSize: 20,
        zIndex: 2,

        fontFamily: fonts.BOLD,
        fontFamily: fonts.BOLD,
    },
    h2: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.BOLD,
    },
    h4: {
        fontSize: 12,
        color: colors.gray,
        fontFamily: fonts.REGULAR,
        marginHorizontal: 12,
    },
    selectButton: {
        width: '100%',
        borderRadius: 10,
        height: 55,
        paddingHorizontal: 4,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderColor: colors.gray300,
        borderWidth: 1,
        marginTop: 8,
    },
    selectLabel: {
        fontSize: hp("2"),
        color: colors.gray,
        textAlign: 'justify',
        alignSelf: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontFamily: fonts.MEDIUM,
    },
    input: {
        backgroundColor: colors.white,
        width: "42%"
    }
})
export default Buy