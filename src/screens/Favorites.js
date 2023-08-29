import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { useIsFocused } from '@react-navigation/native';
import FavoriteCard from "../components/Cards/FavoriteCard";
import Toast from "../components/Extras/Toast";
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import * as functions from '../utilities/functions'
import LoginModal from '../components/Modals/LoginModal';

const Favorites = ({ navigation, route }) => {
    const [user, setUser] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const [ads, setAds] = useState([])

    const isFocused = useIsFocused();

    const getFavoriteAds = async () => {
        try {
            const response = await functions.getFavorites()
            if (response) {
                setAds(response)
                setLoading(false)
            }
        } catch (error) {
            Toast(error.message || "Server Error")
        }
    }

    const getUser = async () => {
        try {
            const response = await functions.getItem('user')
            setUser(response)
            if (response) {
                await getFavoriteAds()
            }
            else {
                setLoading(false)
            }
        } catch (error) {
            Toast(error)
        }
    }
    useEffect(() => {
        if (isFocused) {
            getUser()
        }
    }, [isFocused])


    if (loading) {
        return (
            <View style={styles.errorContainer}>
                <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
            </View>
        )
    }
    return (
        <>
            {
                user != null ?

                    <SafeAreaView style={styles.container} >
                        {ads.length > 0 ? <FlatList
                            data={ads}
                            renderItem={({ item }) => (<FavoriteCard item={item} />)}
                            keyExtractor={(item, index) => index.toString()}
                        /> :

                            <>
                                <Text style={{
                                    fontFamily: fonts.SEMIBOLD,
                                    fontSize: 16, marginHorizontal: 12,
                                    textAlign: 'center',
                                    color: colors.primaryLight
                                }}>Its like a desert in here! You dont have any favorites :(</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}
                                    activeOpacity={0.8}
                                    style={styles.button}>
                                    <Text style={{
                                        color: colors.black,
                                        paddingHorizontal: 15,
                                        fontSize: 18,
                                        fontFamily: fonts.SEMIBOLD
                                    }}>Search For Something</Text>
                                </TouchableOpacity>
                            </>
                        }
                    </SafeAreaView > :
                    <SafeAreaView style={styles.container}>
                        <Image source={require("../assets/images/cactus.jpeg")} style={styles.img} />
                        <Text style={{
                            fontFamily: fonts.SEMIBOLD,
                            fontSize: 16,
                            marginHorizontal: 12,
                            textAlign: 'center', color: colors.primaryLight
                        }}>I think you're not login to Buisness Hub :( </Text>
                        <TouchableOpacity
                            onPress={() => setLoginModal(true)}
                            activeOpacity={0.8}
                            style={styles.button}>
                            <Text style={{
                                color: colors.black,
                                paddingHorizontal: 15,
                                fontSize: 18,
                                fontFamily: fonts.SEMIBOLD
                            }}>Login now</Text>
                        </TouchableOpacity>
                        <LoginModal navigation={navigation} modalVisible={loginModal} setModalVisible={setLoginModal} />
                    </SafeAreaView>
            }
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    img: {
        width: 500,
        height: 250,
        resizeMode: 'contain',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 8,
        alignSelf: 'center',
        paddingHorizontal: 14,
        width: wp('85'),
        height: 48,
        backgroundColor: colors.gray200,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginTop: 12
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default Favorites