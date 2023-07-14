import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { Searchbar, TouchableRipple } from 'react-native-paper';
import AdCard from "../components/Cards/AdCard";
import VerifiedModal from "../components/Modals/VerifiedModal";

const Home = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [verifiedModal, setVerifiedModal] = useState(false)

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView style={styles.container}>
            <VerifiedModal visible={verifiedModal} setModalVisible={setVerifiedModal} />
            <View style={styles.searchBar}>
                <Searchbar
                    style={styles.search}
                    placeholder="What are you looking for?"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    blurOnSubmit={true}
                    onSubmitEditing={() => navigation.navigate("SearchedResults")}
                />
                <Icon
                    name='bell-outline'
                    size={28}
                    color={colors.gray500} />
            </View>
            <ScrollView>
                <View style={styles.cards}>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('ResultsSubCategory')}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/propertyRent.png')} />
                            <Text style={styles.cardText}>Property for Rent</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('ResultsSubCategory')}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/propertySale.png')} />
                            <Text style={styles.cardText}>
                                Property for Sale</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('ResultsSubCategory')}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/room.png')} />
                            <Text style={styles.cardText}>
                                Rooms for Rent</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('ResultsSubCategory')}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/motor.png')} />
                            <Text style={styles.cardText}>
                                Motors</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('ResultsSubCategory')}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/classified.png')} />
                            <Text style={styles.cardText}>
                                Classified</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('ResultsSubCategory')}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/furniture.png')} />
                            <Text style={styles.cardText}>
                                Furniture & Garden</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('ResultsSubCategory')}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/mobile.png')} />
                            <Text style={styles.cardText}>
                                Mobile & Tablets</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple
                        rippleColor={colors.gray300}
                        onPress={() => navigation.navigate('SearchedResults')}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/Community.png')} />
                            <Text style={styles.cardText}>
                                Community</Text>
                        </View>
                    </TouchableRipple>
                    <View style={{
                        width: wp('28'),
                        height: hp('13'),
                        marginRight: 12,
                    }}>

                    </View>
                </View>
                <TouchableOpacity onPress={() => setVerifiedModal(true)} activeOpacity={0.8} style={styles.banner} >
                    <View style={{
                        backgroundColor: '#cfe1fc',
                        width: '27%',
                        height: 140,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0
                    }}>
                        <MaterialIcon name="verified" size={45} color={colors.primary} />
                    </View >
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 16 }}>
                        <View>
                            <Text style={{ fontFamily: fonts.BOLD, fontSize: 16, color: colors.black }}>Become a verified user</Text>
                            <Text style={{ fontFamily: fonts.SEMIBOLD, fontSize: 14, color: colors.gray }}>Build Trust</Text>
                            <Text style={{ fontFamily: fonts.SEMIBOLD, fontSize: 14, color: colors.gray }}>Unlock exclusive rewards</Text>
                            <Text style={{ fontFamily: fonts.BOLD, fontSize: 14, marginTop: 10, color: colors.primary }}>Get Started</Text>
                        </View>
                        <MaterialIcon name="arrow-forward-ios" style={{ margin: 10, alignSelf: 'center' }} size={20} color={colors.primaryLight} />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontFamily: fonts.BOLD, fontSize: 16, color: colors.black, margin: 18 }}>Popular in Used Cars for Sale</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                </ScrollView>
                <Text style={{ fontFamily: fonts.BOLD, fontSize: 16, color: colors.black, margin: 18 }}>Popular in Used Resdients for Sale</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                </ScrollView>
                <Text style={{ fontFamily: fonts.BOLD, fontSize: 16, color: colors.black, margin: 18 }}>Popular in Property  for Sale for Sale</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                </ScrollView>
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
    cards: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 12,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card: {
        width: wp('28'),
        height: hp('13'),
        borderColor: colors.white,
        borderWidth: 1,
        backgroundColor: colors.gray100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        marginRight: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 15,
        elevation: 4,

    },
    cardText: {
        fontSize: 12,
        textAlign: 'center',
        color: colors.secondary,
        marginTop: 4
    },
    cardImg: {
        width: 38,
        height: 38,
        resizeMode: 'contain'
    },
    banner: {
        backgroundColor: colors.white,
        width: "88%",
        alignSelf: 'center',
        flexDirection: 'row',
        height: 140,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 15,
        elevation: 4,
    }
})
export default Home