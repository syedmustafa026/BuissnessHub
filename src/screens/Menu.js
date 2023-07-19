import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Separator from '../components/Extras/Separator'

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import LoginModal from "../components/Modals/LoginModal"

const Menu = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image style={styles.image} source={require("../assets/images/Community.png")} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.heading}>Hi there,</Text>
                        <Text style={styles.text}>Sign in for more personalized experienced</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setModalVisible(true)}
                    style={styles.button}>
                    <Text style={{
                        color: colors.primaryLight,
                        paddingHorizontal: 15,
                        fontSize: 18,
                        fontFamily: fonts.SEMIBOLD
                    }}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.signup}>Don't have an account? Create one</Text>
                <Separator />
                <View style={{ padding: 22 }}>
                    <Text style={styles.topicHeading}>Settings</Text>
                    <TouchableOpacity style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='home-city-outline'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>City</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>All UAE</Text>
                            <MaterialIcon
                                name='arrow-forward-ios'
                                size={16}
                                color={colors.black} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcon
                                name='language'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>Language</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>English</Text>
                            <MaterialIcon
                                name='arrow-forward-ios'
                                size={16}
                                color={colors.black} />
                        </View>
                    </TouchableOpacity>
                    <Separator />
                </View>
                <View style={{ paddingHorizontal: 22 }}>
                    <Text style={styles.topicHeading}>Others</Text>
                    <TouchableOpacity style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='message-reply-text-outline'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>Support</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcon
                                name='arrow-forward-ios'
                                size={16}
                                color={colors.black} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='phone'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>Call us</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcon
                                name='arrow-forward-ios'
                                size={16}
                                color={colors.black} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='note-text-outline'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>Terms and Conditions</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcon
                                name='arrow-forward-ios'
                                size={16}
                                color={colors.black} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='post-outline'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>Advertising</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcon
                                name='arrow-forward-ios'
                                size={16}
                                color={colors.black} />
                        </View>
                    </TouchableOpacity>
                </View>
                <LoginModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </ScrollView>
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
        paddingHorizontal: wp('6'),
        marginVertical: -12
    },
    image: {
        width: wp('16'),
        height: hp('16'),
        resizeMode: 'contain'
    },
    heading: {
        color: colors.black,
        fontSize: 26,
        fontFamily: fonts.BOLD,
        marginHorizontal: wp('2')
    },
    text: {
        color: colors.gray,
        fontSize: 14,
        marginHorizontal: wp('2')
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 8,
        alignSelf: 'center',
        paddingHorizontal: 14,
        width: wp('85'),
        height: 48,
        borderColor: colors.black,
        borderWidth: .6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
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
        color: colors.black,
        marginHorizontal: 15,
        fontFamily: fonts.SEMIBOLD
    }
})
export default Menu