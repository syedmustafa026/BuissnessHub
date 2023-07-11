import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"

const LoginModal = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image style={styles.image} source={require("../assets/images/logo.png")} />
                        <Icon
                            onPress={() => setModalVisible(false)}
                            style={{
                                position: 'absolute',
                                right: 10,
                                top: 40
                            }}
                            name='close'
                            size={30}
                            color={colors.gray} />

                        {/* <Image
                            style={styles.wallpaper}
                            source={require("../assets/images/chatIcon.png")}
                        />
                        <Text style={styles.h1}>Log in to use chat</Text> */}
                        {/* <Image
                            style={styles.wallpaper}
                            source={require("../assets/images/likeIcon.png")}
                        />
                        <Text style={styles.h1}>Log in to favorite an ad</Text> */}
                        <Image
                            style={styles.wallpaper}
                            source={require("../assets/images/ClipboardIcon.png")}
                        />
                        <Text style={styles.h1}>Log in to post an ad</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.button}>
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={require("../assets/images/facebook.png")}
                            />
                            <Text style={{ color: 'gray', paddingHorizontal: 15, fontSize: 18, fontFamily:fonts.REGULAR}}>Continue with Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.button}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require("../assets/images/google.png")}
                            />
                            <Text style={{ color: 'gray', paddingHorizontal: 15, fontSize: 18, fontFamily:fonts.REGULAR}}>Continue with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.button}>
                            <Icon
                                name='email'
                                size={25}
                                color={colors.primaryLight}
                            />
                            <Text style={{ color: colors.gray, paddingHorizontal: 15, fontSize: 18, fontFamily:fonts.REGULAR}}>Continue with Email</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <Text style={{ color: colors.primaryLight, marginTop: 30, paddingHorizontal: 15, fontSize: 14, fontFamily:fonts.REGULAR}}>Don't have an account? Create one</Text>
                            <Text style={{ color: 'grey', marginTop: 30, paddingHorizontal: 15, textAlign: 'center', fontSize: 12, fontFamily:fonts.REGULAR}}>By Signing in I agree to the <Text style={{ color: colors.blue, textDecorationLine: 'underline' }}>Terms and Conditions</Text> and  <Text style={{ color: colors.blue, textDecorationLine: 'underline' }}>Privacy Policy</Text></Text>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width: wp('100'),
        height: hp('105'),
        backgroundColor: 'white',
        padding: 35,
        alignItems: 'center',
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
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontFamily:fonts.BOLD,
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
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
        fontSize: hp('3'),
        fontFamily:fonts.BOLD,
        marginBottom: hp('4')
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

export default LoginModal;