import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import { TextInput, Button, RadioButton } from 'react-native-paper'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import SelectValueModal from '../components/Modals/SelectValueModal';

const PlaceAdDetails = ({ navigation }) => {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState('first');
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SelectValueModal visible={modal} setVisible={setModal} value={value} onValueChange={setValue} />
        <View style={{ justifyContent: 'center', marginVertical: 16 }}>
          <Text style={styles.h2}>You're Almost There!</Text>
          <Text style={[styles.h4, { textAlign: 'center', marginBottom: 12 }]}>Include as much details and pictures as possible and set the right price!</Text>
          <Text onPress={() => navigation.goBack()} style={[styles.h4, { color: colors.primary }]}>Bikes &gt; Motors</Text>
        </View>
        <View>
          <TextInput
            label="Title"
            value={title}
            mode='outlined'
            activeOutlineColor={colors.gray}
            style={{
              backgroundColor: colors.white,
              borderBlockColor: colors.gray,
            }}
            onChangeText={text => setTitle(text)}
          />
          <Button
            onPress={() => { }}
            mode="contained"
            icon={'camera'}
            color={colors.white}
            style={[styles.button, { marginTop: 8, }]}
            labelStyle={styles.ButtonLabel}
          >Add pictures</Button>
          <TextInput
            label="Phone Number"
            value={title}
            mode='outlined'
            activeOutlineColor={colors.gray}
            keyboardType='number-pad'
            style={{
              backgroundColor: colors.white,
              borderBlockColor: colors.gray,
            }}
            onChangeText={text => setTitle(text)}
          />
          <TextInput
            label="Price"
            value={title}
            mode='outlined'
            activeOutlineColor={colors.gray}
            keyboardType='number-pad'
            style={{
              backgroundColor: colors.white,
              borderBlockColor: colors.gray,
            }}
            onChangeText={text => setTitle(text)}
          />
          <TextInput
            label="Description"
            value={title}
            mode='outlined'
            multiline={true}
            activeOutlineColor={colors.gray}
            style={{
              height: 180,
              backgroundColor: colors.white,
              borderBlockColor: colors.gray,
            }}
            onChangeText={text => setTitle(text)}
          />
          <TouchableOpacity activeOpacity={0.6}
            onPress={() => setModal(true)} style={styles.selectButton}>
            <Text style={styles.selectLabel}>Usage</Text>
            <Icon
              name='chevron-down'
              size={24}
              color={colors.black} />
          </TouchableOpacity>
          <TextInput
            label="Kilometers"
            value={title}
            mode='outlined'
            keyboardType='number-pad'
            activeOutlineColor={colors.gray}
            style={{
              backgroundColor: colors.white,
              borderBlockColor: colors.gray,
            }}
            onChangeText={text => setTitle(text)}
          />
          <TouchableOpacity activeOpacity={0.6}
            onPress={() => setModal(true)} style={styles.selectButton}>
            <Text style={styles.selectLabel}>Usage</Text>
            <Icon
              name='chevron-down'
              size={24}
              color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            onPress={() => setModal(true)} style={styles.selectButton}>
            <Text style={styles.selectLabel}>Usage</Text>
            <Icon
              name='chevron-down'
              size={24}
              color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            onPress={() => setModal(true)} style={styles.selectButton}>
            <Text style={styles.selectLabel}>Usage</Text>
            <Icon
              name='chevron-down'
              size={24}
              color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            onPress={() => setModal(true)} style={styles.selectButton}>
            <Text style={styles.selectLabel}>Usage</Text>
            <Icon
              name='chevron-down'
              size={24}
              color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            onPress={() => setModal(true)} style={styles.selectButton}>
            <Text style={styles.selectLabel}>Usage</Text>
            <Icon
              name='chevron-down'
              size={24}
              color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            onPress={() => setModal(true)} style={styles.selectButton}>
            <Text style={styles.selectLabel}>Usage</Text>
            <Icon
              name='chevron-down'
              size={24}
              color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            onPress={() => setModal(true)} style={styles.selectButton}>
            <Text style={styles.selectLabel}>Usage</Text>
            <Icon
              name='chevron-down'
              size={24}
              color={colors.black} />
          </TouchableOpacity>

        </View>
      </ScrollView>
      <Button
        onPress={() => { }}
        mode="contained"
        color={colors.white}
        style={[styles.button, { marginTop: 8,backgroundColor:colors.primary }]}
        labelStyle={[styles.ButtonLabel,{color:colors.white}]}
      >Next</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,

  },
  h1: {
    color: colors.black,
    fontSize: 24,
    zIndex: 2,
    fontFamily: fonts.BOLD,
    fontFamily: fonts.BOLD,
    textAlign: 'center',
  },
  h2: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.BOLD,
    marginBottom: 14,
    textAlign: 'center',
    marginHorizontal: 20
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.REGULAR,
    marginHorizontal: 12,
  },
  button: {
    width: '100%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1
  },
  ButtonLabel: {
    fontSize: hp("2.2"),
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
  },
  selectButton: {
    width: '100%',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    marginTop: 8
  },
  selectLabel: {
    fontSize: hp("2"),
    color: colors.gray,
    textAlign: 'justify',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: fonts.SEMIBOLD,
  },
});

export default PlaceAdDetails;