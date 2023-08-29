import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import ThinNameRow from '../Rows/ThinNameRow';
import Separator from '../Extras/Separator';
import { Searchbar } from 'react-native-paper';

const SearchDropdown = (props) => {
  return (
    <View style={{ position: 'relative', width: "100%", zIndex: 3 }}>
      <Searchbar
        style={styles.search}
        placeholder="What are you looking for?"
        onChangeText={props.onChangeSearch}
        blurOnSubmit={true}
        onSubmitEditing={() => props.navigation.navigate("SearchedResults", props.data)}
      />
      {props.showDropdown &&
        <View style={styles.dropdown}>
          <FlatList
            data={props.data}
            renderItem={({ item }) => (<ThinNameRow handlePress={() => { props.navigation.navigate("SearchedResults", props.data) }} name={item.title} />)}
            keyExtractor={(item, index) => index.toString()}
            keyboardShouldPersistTaps="always"
            ItemSeparatorComponent={<Separator />}
          />
        </View>}
    </View>
  )
};
const styles = StyleSheet.create({
  selectButton: {
    width: '60%',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  selectLabel: {
    fontSize: hp("2"),
    color: colors.gray,
    textAlign: 'justify',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  dropdown: {
    width: '100%',
    padding: 8,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 3,
    backgroundColor: colors.white,
    top: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 10,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

  },
  search: {
    width: wp('85'),
    height: hp('6.5'),
    backgroundColor: colors.white,
    borderColor: colors.gray300,
    borderWidth: 1,
    marginHorizontal: wp('2')
  },
})
export default SearchDropdown