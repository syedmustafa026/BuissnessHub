import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { Button } from 'react-native-paper';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import * as functions from "../../utilities/functions"
import Toast from "../../components/Extras/Toast"

const ConfirmReportAd = ({ navigation, route }) => {

  useEffect(() => {
    navigation.setOptions({
      title: ` Report as ${route.params.title}`
    })
  }, [])

  const reportAnAd = async () => {
    try {
      const payload = {
        ad_id: route.params.ad_id,
        report_reason: route.params.title,
        description: `I have chosen to report this ad as ${route.params.title}`
      }
      const response = await functions.reportAd(payload)
      if (response.status) {
        Toast(response.message)
        navigation.navigate("BottomNavigator")
      }
      else {
        Toast(response.message)
      }
    } catch (error) {
      Toast(error)
    }
  }
  return (
    <SafeAreaView style={styles.centeredView}>
      <View style={styles.modalView}>

        <View style={{ marginVertical: 18, marginHorizontal: 12 }}>
          <Text style={styles.h2}>You have chosen to report this as {route.params.title}.</Text>
        </View>
        <View style={styles.center}>
          <Button
            onPress={reportAnAd}
            mode="contained"
            style={styles.button}
            labelStyle={styles.ButtonLabel}
          >Report as {route.params.title}</Button>
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
    fontFamily: fonts.SEMIBOLD,
    marginVertical: 8,
    textAlign: 'left',
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
    height: 45,
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

export default ConfirmReportAd;