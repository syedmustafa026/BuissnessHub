import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from '../../components/Extras/Separator'

const PlaceAdPreCategory = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.center}>
          <View style={{ marginVertical: 18 }}>
            <Text style={styles.h1}>Next,pick a category for your ad</Text>
            <Text style={styles.h2}>Choosing the right category gets you more views and leads.</Text>
            <Text style={styles.h4}>"Bedroom".</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('PlaceAdSubCategory')}>
            <View style={styles.row}>
              <Text style={styles.lightText}>Residential for Sale &gt; </Text>
              <Text style={styles.boldText}>Appartments for Sale  </Text>
            </View>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity onPress={()=>navigation.navigate('PlaceAdSubCategory')}>
            <View style={styles.row}>
              <Text style={styles.lightText}>Residential for Sale &gt; </Text>
              <Text style={styles.boldText}>Villa for Sale  </Text>
            </View>
          </TouchableOpacity>

          <Separator />
          <TouchableOpacity onPress={()=>navigation.navigate('PlaceAdSubCategory')}>
            <View style={styles.row}>
              <Text style={styles.lightText}>Commercial for Sale &gt; </Text>
              <Text style={styles.boldText}>Staff Accomm for Sale  </Text>
            </View>
          </TouchableOpacity>

          <Separator />
        </View>
        <View style={{ marginVertical: 26, alignItems: 'center' }}>
          <Text >or <Text onPress={() => navigation.navigate("PlaceAdSubCategory")} style={{ color: colors.blue, fontSize: 16 }}>  Choose something else</Text></Text>
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
  lightText: {
    fontFamily: fonts.REGULAR,
    color: colors.black,
    fontSize: 12
  },
  boldText: {
    fontFamily: fonts.SEMIBOLD,
    color: colors.black,
    fontSize: 12
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
    marginBottom: 20,
    marginTop: 16,
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
    fontSize: 17,
    zIndex: 2,
    fontFamily: fonts.BOLD,

    textAlign: 'center',
  },
  h2: {
    fontSize: 15,
    color: colors.gray,
    fontFamily: fonts.MEDIUM,
    textAlign: 'center',
    marginVertical: 8
  },
  h4: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 12,
    color: colors.black,
    fontFamily: fonts.BOLD,
  },
});

export default PlaceAdPreCategory;