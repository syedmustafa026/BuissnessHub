import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, Linking, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Separator from '../../components/Extras/Separator'
import { ActivityIndicator, Button } from "react-native-paper";

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import * as functions from '../../utilities/functions'

import LoginModal from "../../components/Modals/LoginModal"
import CallusModal from "../../components/Modals/CallUsModal";
import VerifiedModal from "../../components/Modals/VerifiedModal";

const Menu = ({ navigation }) => {
    const [loginModal, setLoginModal] = useState(false)
    const [callUsModal, setCallUsModal] = useState(false)
    const [verifiedModal, setVerifiedModal] = useState(false)
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)

    const logoutUser = () => {
        Alert.alert("Sure", "Are you sure you want to Logout?", [{
            text: "Yes",
            onPress: async () => {
                const response = await functions.logout()
                console.log(response);
                if (response.status) {
                    navigation.replace("BottomNavigator")
                    await functions.removeItem('user')
                }
            }
        }, {
            text: "Cancel",
        }], {
            cancelable: true
        })
    }
    const getUser = async () => {
        const response = await functions.getItem('user')
        setUser(response)
    }
    useEffect(() => {
        getUser()
        setLoading(false)
    }, [])
    if (loading) {
        return (
            <View style={styles.errorContainer}>
                <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <VerifiedModal visible={verifiedModal} setModalVisible={setVerifiedModal} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {user ?
                    <View style={{ backgroundColor: colors.infoLight, marginVertical: 12, marginHorizontal: 15, paddingHorizontal: 5, paddingVertical: 15, borderRadius: 10 }}>
                        <View style={[styles.header]}>
                            <Image style={styles.image} source={user ? { uri: user.image_url } : require("../../assets/images/Community.png")} />
                            <View style={{ flexDirection: 'column',width:"70%" }}>
                                <Text numberOfLines={1} style={styles.heading}>Hi {user.name}</Text>
                                <Text style={styles.text}>{user.email}</Text>
                            </View>
                        </View>
                        <Button
                            onPress={() => functions.removeItem('user')}
                            mode="contained"
                            icon={'check-decagram'}
                            color={colors.white}
                            style={[styles.button]}
                            labelStyle={styles.ButtonLabel}
                        >Verify your account</Button>
                        <Separator />
                    </View> :
                    <View>
                        <View style={styles.header}>
                            <Image style={styles.image} source={require("../../assets/images/Community.png")} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.heading}>Hi there,</Text>
                                <Text style={styles.text}>Sign in for more personalized experienced</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setLoginModal(true)}>
                            <Button
                                mode="contained"
                                color={colors.white}
                                style={[styles.button]}
                                labelStyle={styles.ButtonLabel}
                            >Login</Button>
                        </TouchableOpacity>
                        <Text onPress={() => navigation.navigate("Signup")} style={styles.signup}>Don't have an account? Create one</Text>
                        <Separator />
                    </View>}
                {user && <View style={{ padding: 22 }}>
                    <Text style={styles.topicHeading}>My Account</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile", user)} style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='account-circle-outline'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>Profile</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcon
                                name='arrow-forward-ios'
                                size={16}
                                color={colors.black} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("PublicProfile", user)}
                        style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='account-circle-outline'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>My Public Profile</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcon
                                name='arrow-forward-ios'
                                size={16}
                                color={colors.black} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("MyAds")}
                        style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='notebook-minus-outline'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>My Ads</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcon
                                name='arrow-forward-ios'
                                size={16}
                                color={colors.black} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SavedSearches")}
                        style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='book-search-outline'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>My Saved Searches</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcon
                                name='arrow-forward-ios'
                                size={16}
                                color={colors.black} />
                        </View>
                    </TouchableOpacity>
                    <Separator />
                </View>}
                {/* <View style={{ padding: 22 }}>
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
                </View> */}
                <View style={{ padding: 22 }}>
                    <Text style={styles.topicHeading}>Others</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://businesshub.jdesigntechnologies.com/#')} style={styles.selectRow}>
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
                    <TouchableOpacity onPress={() => setCallUsModal(true)} style={styles.selectRow}>
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
                    <TouchableOpacity onPress={() => Linking.openURL('https://businesshub.jdesigntechnologies.com/#')} style={styles.selectRow}>
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

                    <TouchableOpacity onPress={() => Linking.openURL('https://businesshub.jdesigntechnologies.com/#')} style={styles.selectRow}>
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
                    {user != null && <TouchableOpacity
                        onPress={logoutUser}
                        style={styles.selectRow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='power'
                                size={24}
                                color={colors.black} />
                            <Text style={styles.selectText}>Logout</Text>
                        </View>
                    </TouchableOpacity>}
                </View>
                <LoginModal navigation={navigation} modalVisible={loginModal} setModalVisible={setLoginModal} />
                <CallusModal modalVisible={callUsModal} setModalVisible={setCallUsModal} />
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
        alignSelf: 'center',
        marginBottom: 8
    },
    image: {
        width: 60,
        height: 60,
        marginVertical: 5,
        borderRadius: 100,
        resizeMode: 'contain'

    },
    heading: {
        color: colors.black,
        fontSize: 26,
        marginLeft: 20,
        fontFamily: fonts.BOLD,

    },
    text: {
        color: colors.gray,
        fontSize: 14,
        marginLeft: 20,
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
        color: colors.black,
        marginHorizontal: 15,
        fontFamily: fonts.SEMIBOLD
    },
    button: {
        width: '82%',
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
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default Menu