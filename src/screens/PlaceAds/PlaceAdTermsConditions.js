import React from 'react';
import { Modal, Image, StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { Button } from 'react-native-paper';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import * as functions from "../../utilities/functions"
import Toast from "../../components/Extras/Toast"

const PlaceAdTermsConditions = ({ navigation, route }) => {

  const handleAgree = async () => {
    try {
      console.log(route.params.listing_id);
      const response = await functions.agreeTermsConditions(route.params.listing_id)
      console.log(response);
      if (!response.status) throw new Error(response.message)
      if (response.status) {
        navigation.navigate("Verification")
      }
    } catch (error) {
      Toast(error.message)
    }
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.h1, { color: colors.black, textAlign: 'center' }]}>Safety First!</Text>
          <Text style={[styles.h1, { color: colors.black, textAlign: 'center', marginVertical: 12, fontFamily: fonts.REGULAR }]}>We review all ads to keep everyone on BuisnessHub safe and happy</Text>
          <View style={styles.center}>
            <Text style={styles.h4}>Your ad will not fo live if it is:</Text>

            <View style={{ marginVertical: 13 }}>
              <View style={styles.row}>
                <Text style={[styles.h1, { fontFamily: fonts.BOLD }]}>1.</Text>
                <Text style={styles.h2}>For any prohibited item or activity that violates UAE law.</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.h1, { fontFamily: fonts.BOLD }]}>2.</Text>
                <Text style={styles.h2}>In the wrong category.</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.h1, { fontFamily: fonts.BOLD }]}>3.</Text>
                <Text style={styles.h2}>Places multiple times or multiple catogries.</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.h1, { fontFamily: fonts.BOLD }]}>4.</Text>
                <Text style={styles.h2}>With fraudulent or misleading information.</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.h1, { fontFamily: fonts.BOLD }]}>5.</Text>
                <Text style={styles.h2}>For an item that is located outside the UAE.</Text>
              </View>
            </View>

            <Text style={[styles.h4]}>For more information, read our</Text>
            <Text style={styles.h3}>terms and conditions</Text>
            <Button
              onPress={handleAgree}
              mode="contained"
              style={styles.button}
              labelStyle={styles.ButtonLabel}
            >Yes I agree!</Button>
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
    paddingHorizontal: 23
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
    marginVertical: 16,
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
    fontFamily: fonts.BOLD,
    textAlign: 'center',
  },
  h2: {
    fontSize: 13,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD,
    marginHorizontal: 8
  },
  h4: {
    fontSize: 14,
    marginTop: 12,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD,
  },
  h3: {
    fontSize: 14,
    marginTop: 12,
    color: colors.blue,
    fontFamily: fonts.SEMIBOLD,
    marginBottom: 20
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

export default PlaceAdTermsConditions;