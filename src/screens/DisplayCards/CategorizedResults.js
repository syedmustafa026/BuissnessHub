import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Searchbar, Badge } from 'react-native-paper';

import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import ChipComponent from "../../components/Chips/ChipComponent";
import PropertyDetailsCard from "../../components/Cards/PropertyDetailsCard";
import SearchDetailsCard from "../../components/Cards/SearchDetailsCard";
import NonImageCard from "../../components/Cards/NonImageCard";

const CategorizedResults = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('')
    const onChangeSearch = query => setSearchQuery(query)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBar}>
                <MaterialIcon
                onPress={()=>navigation.goBack()}
                    name='arrow-back-ios'
                    size={24}
                    color={colors.black} />
                <Searchbar
                    style={styles.search}
                    placeholder="Enter Neighborhood or building"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    icon={'map-marker'}
                    blurOnSubmit={true}
                />
            </View>
            <View style={styles.fiterRow}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity  onPress={()=> navigation.navigate("Filters")} activeOpacity={0.6} style={{ flexDirection: 'row' }}>
                        <Icon
                            style={{ marginHorizontal: 2, marginVertical: 10 }}
                            name='sliders-h'
                            size={20}
                            color={colors.primary} />
                        <Text style={{ fontSize: 16, margin: 10, color: colors.black,fontFamily:fonts.SEMIBOLD }}>Filters</Text>
                        <Badge size={24} style={{
                            alignSelf: 'center',
                            marginRight: 5,
                            backgroundColor: colors.black
                        }}>3</Badge>
                    </TouchableOpacity >
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={['Rent', 'All Residentials', 'Price Range', "Bathrooms", 'Rooms']}
                        renderItem={({ item }) => (<ChipComponent name={item} />)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </View>
            <ScrollView>
                <View style={styles.cards}>
                    <PropertyDetailsCard />
                    <PropertyDetailsCard />
                    <NonImageCard/>
                    <NonImageCard/>
                    <NonImageCard/>
                    <NonImageCard/>


                  
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: wp('3')
    },
    search: {
        width: wp('85'),
        height: hp('6.5'),
        backgroundColor: colors.white,
        borderColor: colors.gray300,
        borderWidth: 1,
        marginHorizontal: wp('2')
    },
    fiterRow: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        marginBottom: 8,
    }
})
export default CategorizedResults