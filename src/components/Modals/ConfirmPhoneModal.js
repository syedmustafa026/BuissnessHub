import React from 'react';
import { Modal, Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const ConfirmPhoneModal = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.row}>
                        <TouchableOpacity style={{}} onPress={() => props.setModalVisible(false)}>
                            <Icon
                                name='close'
                                size={26}
                                color={colors.gray} />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', marginVertical: 8,width:'87%' }}>
                            <Text style={[styles.h2, { color: colors.black,textAlign:'center' }]}>Confirm Phone Number</Text>
                        </View>
                    </View>
                    <View style={styles.center}>
                        <Image source={require("../../assets/images/sheild.jpeg")} style={styles.img} />
                        <Text style={styles.h1}>Safety First</Text>
                        <View style={{ marginVertical: 18 }}>
                            <Text style={styles.h2}>Only users with verified Phone number can avail all features on BuisnessHub.</Text>
                            <Text style={styles.h2}>Please enter your mobile number to start phone number verification.</Text>
                        </View>
                        <TextInput
                            theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
                            mode='outlined'
                            placeholder='+971  5X XXX XXXX'
                            activeOutlineColor={colors.gray}
                            keyboardType='number-pad'
                            style={styles.input}
                        />
                        <Button
                            onPress={() => { }}
                            mode="contained"
                            style={styles.button}
                            labelStyle={styles.ButtonLabel}
                        >Send Verification Code</Button>
                        <Text style={styles.h4}>Need help? Please contact our customer support</Text>
                    </View>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: wp("80"),
        height: wp("40"),
        resizeMode: 'contain',
        marginTop: 30
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

    row: {
        flexDirection: 'row',
        alignItems:'center',

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
    h1: {
        color: colors.black,
        fontSize: 24,
        zIndex: 2,
        fontFamily: fonts.BOLD,

        textAlign: 'center',
    },
    h2: {
        fontSize: 16,
        color: colors.gray,
        fontFamily: fonts.SEMIBOLD,
        textAlign: 'center',
        marginVertical: 8
    },
    h4: {
        fontSize: 14,
        marginVertical: 12,
        color: colors.blue,
        fontFamily: fonts.REGULAR,
    },
    input: {
        width: '92%',
        marginVertical: 8,
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderBlockColor: colors.gray,
        height: 45,
        color: colors.gray,
        fontFamily: fonts.SEMIBOLD
    },
    button: {
        marginTop: 20,
        width: '92%',
        borderRadius: 5,
        height: 45,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        borderWidth: 1
    },
    ButtonLabel: {
        fontSize: hp("2.2"),
        color: colors.white,
        fontFamily: fonts.SEMIBOLD,
    },
});

export default ConfirmPhoneModal;