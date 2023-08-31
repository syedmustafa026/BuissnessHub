import React, { useState, useEffect } from 'react';
import { Image, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from '../../components/Extras/Separator'
import Toast from '../../components/Extras/Toast';
import * as functions from '../../utilities/functions'
import LoginModal from '../../components/Modals/LoginModal';


const PlaceAd = ({ navigation, route }) => {

    const [user, setUser] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const [loading, setLoading] = useState(true)

    const handlePressCity = (name) => {
        if (route.params === "filters") {
            navigation.navigate("Filters", { city: name })
        }
        else {

            navigation.navigate('PlaceAdListing', { city: name })
        }
    }
    const getUser = async () => {
        const response = await functions.getItem('user')
        setUser(response)
        setLoading(false)
    }
    const Item = ({ name, navigation }) => {
        return (
            <>
                <TouchableOpacity onPress={() => handlePressCity(name)} activeOpacity={0.5} style={styles.row}>
                    <Text style={styles.h2}>{name}</Text>
                </TouchableOpacity>
                <Separator />
            </>
        )
    }
    useEffect(() => {
        getUser()
    }, [])
    if (loading) {
        return (
            <View style={styles.errorContainer}>
                <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container} >
            {user != null ? <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ justifyContent: 'center', marginVertical: 16 }}>
                        <Text style={styles.h1}>{route.params === "filters" ? "Location" : "Select a City"}</Text>
                        <Text style={styles.h4}>{route.params === "filters" ? "Filter your ad by location addresses" : "Where should we place your ad?"}</Text>
                    </View>
                    <FlatList
                        data={['Abu Dhabi', 'Ajman', 'Al Ain', "Dubai", 'Fuljairah', 'Ras al Khaimah', 'Sharjah', 'Umm al Quwain']}
                        renderItem={({ item }) => (<Item name={item} navigation={navigation} />)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View> :
                <SafeAreaView style={styles.container2}>
                    <Image source={require("../../assets/images/cactus.jpeg")} style={styles.img} />
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
                </SafeAreaView>}
            <LoginModal navigation={navigation} modalVisible={loginModal} setModalVisible={setLoginModal} />
        </SafeAreaView >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
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
        color: colors.black,
        fontSize: 24,
        zIndex: 2,
        fontFamily: fonts.SEMIBOLD,
        textAlign: 'center',
    },
    h2: {
        fontSize: 18,
        color: colors.black,
        fontFamily: fonts.MEDIUM,
        marginBottom: 26,
        marginHorizontal: 20
    },
    h4: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.REGULAR,
        textAlign: 'center'
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
});

export default PlaceAd;