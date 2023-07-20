import React from 'react';
import { Modal, Image, StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const PlaceAdAutoFillDetails = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.h1, { color: colors.black, textAlign: 'center' }]}>Auto-fill your car details by</Text>
          <Text style={[styles.h1, { color: colors.black, textAlign: 'center', marginVertical: 12 }]}>entering your VIN / Chasis number</Text>
          <View style={styles.center}>
            <Image source={require("../../assets/images/chasisnum.jpeg")} style={styles.img} />
            <View style={{ marginVertical: 13 }}>
              <View style={styles.row}>
                <Icon name='check-bold' color={colors.green} size={20} />
                <Text style={styles.h2}>Place your ad faster with auto-fill.</Text>
              </View>
              <View style={styles.row}>
                <Icon name='check-bold' color={colors.green} size={20} />
                <Text style={styles.h2}>Attract more buyers with a free CarReport badge.</Text>
              </View>
            </View>

            <TextInput
              theme={{ colors: { text: colors.black, placeholder: colors.gray, } }}
              mode='outlined'
              placeholder='Enter VIN/ Chasis number'
              activeOutlineColor={colors.gray}
              keyboardType='number-pad'
              style={styles.input}
            />
            <Text style={styles.h4}>This number will not show on your ad</Text>
            <Button
              onPress={() => { }}
              mode="contained"
              style={styles.button}
              labelStyle={styles.ButtonLabel}
            >Auto-fill my car details</Button>
            <Text onPress={() => navigation.navigate('PlaceAdMotorDetails')} style={styles.h3}>No thanks, I'll do it manually</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    marginTop: 20
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
    alignItems: 'center',

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
    fontSize: 16,
    zIndex: 2,
    marginTop: 12,
    fontFamily: fonts.BOLD,

    textAlign: 'center',
  },
  h2: {
    fontSize: 13,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD,
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 4
  },
  h4: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    fontSize: 12,
    marginBottom: 20,
    color: colors.gray,
    fontFamily: fonts.REGULAR,
  },
  h3: {
    fontSize: 14,
    marginVertical: 20,
    color: colors.blue,
    fontFamily: fonts.SEMIBOLD,
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
    marginTop: 5,
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

export default PlaceAdAutoFillDetails;