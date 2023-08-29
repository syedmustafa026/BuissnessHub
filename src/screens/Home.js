import React, { useEffect, useState } from "react"
import { View, Image, Text, SafeAreaView, StatusBar, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import * as functions from "../utilities/functions"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { ActivityIndicator, Searchbar } from 'react-native-paper'
import AdCard from "../components/Cards/AdCard"
import Toast from "../components/Extras/Toast"
import VerifiedModal from "../components/Modals/VerifiedModal"
import SearchDropdown from "../components/Inputs/SearchDropdown"

const Home = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [verifiedModal, setVerifiedModal] = useState(false)
    const [category, setCategory] = useState(null)
    const [loading, setLoading] = useState(true)
    const [ads, setAds] = useState([])
    const [dropdownModal, setDropdownModal] = useState(true)
    const [showDropdown, setShowDropdown] = useState(false)

    const onChangeSearch = async (query) => {
        try {
            if (query === "") setShowDropdown(false)
            const response = await functions.searchListing({
                key_words: query,
                mode: "API"
            })
            if (response.status) {
                console.log(response?.data);
                setSearchResult(response.data)
                response.data.length > 0 ? setShowDropdown(true) : setShowDropdown(false)
            }
        } catch (error) {
            Toast(error)
        }
    }
    const getCategories = async () => {
        try {
            const response = await functions.getListing()
            if (!response.status) throw new Error(response.message)
            setCategory(response.data)
            if (response.status) setLoading(false)
        } catch (error) {
            Toast(error.message || "Server Error")
        }

    }
    const getAds = async () => {
        try {
            const response = await functions.getPostedAds(1)
            setAds(response)
        } catch (error) {
            Toast(error.message || "Server Error")
        }

    }
    const ItemCard = (item) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('ResultsSubCategory', item.data)}
                style={styles.card}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.cardImg} source={{ uri: item.image }} />
                    <Text style={styles.cardText}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        getCategories()
        getAds()
    }, [])
    if (loading) {
        return (
            <View style={styles.errorContainer}>
                <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
            </View>
        )
    }
    const ListingCategory = ({ name }) => {
        return (
            <>
                <View style={styles.row}>
                    <Text style={{ fontFamily: fonts.BOLD, fontSize: 16, color: colors.black, }}>Popular in {name}</Text>
                    <Icon
                        onPress={() => navigation.navigate('SearchedResults')}
                        name='arrow-right'
                        size={24}
                        color={colors.black} />
                </View>
                <FlatList showsHorizontalScrollIndicator={false}
                    horizontal
                    data={ads}
                    renderItem={({ item }) => (<AdCard item={item} />)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity activeOpacity={1} onPress={() => setShowDropdown(false)}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={colors.white}
                />
                <VerifiedModal visible={verifiedModal} setModalVisible={setVerifiedModal} />
                <View style={styles.searchBar}>
                    <View style={styles.InputBox}>
                        <SearchDropdown
                            showDropdown={showDropdown}
                            data={searchResult}
                            navigation={navigation}
                            value={searchQuery}
                            onChangeSearch={onChangeSearch}
                            setValue={setSearchQuery} />
                    </View>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Icon
                            onPress={() => navigation.navigate('Notifications')}
                            name='bell-outline'
                            size={28}
                            color={colors.gray500} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.cards}>
                        <FlatList
                            contentContainerStyle={styles.cards}
                            data={category}
                            renderItem={({ item }) => (<ItemCard name={item.name} image={item.image_url} data={item} />)}
                            keyExtractor={(item, index) => index.toString()}
                            ListFooterComponent={<View style={{
                                width: wp('28'),
                                height: hp('13'),
                                marginRight: 12,
                            }} />}
                        />
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
                    <View >
                    </View>
                    <FlatList
                        data={category}
                        renderItem={({ item }) => (<ListingCategory name={item.name} />)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </TouchableOpacity>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 17
    },
    search: {
        width: wp('85'),
        backgroundColor: colors.white,
        borderColor: colors.gray300,
        borderWidth: 1,
        marginHorizontal: wp('2')
    },
    cards: {
        alignSelf: 'center',
        alignItems: "center",
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
        borderRadius: 10,
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
        borderRadius: 10,
        elevation: 4,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default Home