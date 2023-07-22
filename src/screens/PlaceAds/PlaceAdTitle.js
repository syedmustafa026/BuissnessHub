import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { TextInput, Button } from 'react-native-paper';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const PlaceAdTitle = ({navigation}) => {

  return (
    <SafeAreaView style={styles.centeredView}>
      <View style={styles.modalView}>

        <View style={styles.center}>
          <View style={{ marginVertical: 18 }}>
            <Text style={styles.h1}>Enter a short title to describe your listing</Text>
            <Text style={styles.h2}>Make your title informative and attractive.</Text>
          </View>
          <TextInput
            theme={{ colors: { text: colors.gray, placeholder: colors.gray, } }}
            mode='outlined'
            placeholder='eg. 1 Bedroom available in Al Barsha'
            activeOutlineColor={colors.gray}
            keyboardType='number-pad'
            style={styles.input}
          />
          <Button
            onPress={() => {navigation.navigate('PlaceAdPreCategory')}}
            mode="contained"
            style={styles.button}
            labelStyle={styles.ButtonLabel}
          >Let's go!</Button>
        </View>
      </View>
    </SafeAreaView>

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
    fontFamily: fonts.BOLD,

    textAlign: 'center',
  },
  h2: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: fonts.MEDIUM,
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
    borderColor: colors.gray200,
    color: colors.black,
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

export default PlaceAdTitle;