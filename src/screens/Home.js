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

const Home = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [verifiedModal, setVerifiedModal] = useState(false)
    const [category, setCategory] = useState(null)
    const [loading, setLoading] = useState(true)

    const onChangeSearch = query => setSearchQuery(query)
    const getCategories = async () => {
        try {
            const response = await functions.getListing()
            if (!response.status) throw new Error(response.message)
            setCategory(response.data)
            if (response.status) setLoading(false)
        } catch (error) {
            Toast(error.message)
        }
    }
    useEffect(() => {
        getCategories()
    }, [])
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
    if (loading) {
        return (
            <View style={styles.errorContainer}>
                <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.white}
            />
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
                {/*
                    <TouchableOpacity
                        activeOpacity={0.7}
                        // onPress={() => navigation.navigate('ResultsSubCategory', { data: category[0] })}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/propertySale.png')} />
                            <Text style={styles.cardText}>{category[0]?.name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        // onPress={() => navigation.navigate('ResultsSubCategory', {data: category[1]})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/shares.png')} />
                            <Text style={styles.cardText}>
                                Shares for Sale</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        // onPress={() => navigation.navigate('ResultsSubCategory', {data: category[1]})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={[styles.cardImg, { width: 48, height: 48 }]} source={require('../assets/images/buisnessidea.png')} />
                            <Text style={styles.cardText}>
                                Business Ideas</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        // onPress={() => navigation.navigate('ResultsSubCategory', {data: category[1]})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={[styles.cardImg, { width: 47, height: 47 }]} source={require('../assets/images/investors.png')} />
                            <Text style={styles.cardText}>
                                Investors</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        // onPress={() => navigation.navigate('ResultsSubCategory', {data: category[1]})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/investorsreq.png')} />
                            <Text style={styles.cardText}>
                                Investors Required</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        // onPress={() => navigation.navigate('ResultsSubCategory', {data: category[1]})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={[styles.cardImg, { width: 42, height: 42 }]} source={require('../assets/images/franchise.png')} />
                            <Text style={styles.cardText}>
                                Franchise Opportunities</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        // onPress={() => navigation.navigate('ResultsSubCategory', {data: category[1]})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/logistics.png')} />
                            <Text style={styles.cardText}>
                                Export & Import Trade</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        // onPress={() => navigation.navigate('ResultsSubCategory', {data: category[1]})}
                        style={styles.card}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.cardImg} source={require('../assets/images/machine.png')} />
                            <Text style={styles.cardText}>
                                Machinery & Supplies</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        width: wp('28'),
                        height: hp('13'),
                        marginRight: 12,
                    }} />
                </View> */}
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
                <View style={styles.row}>
                    <Text style={{ fontFamily: fonts.BOLD, fontSize: 16, color: colors.black, }}>Popular in Used Cars for Rent</Text>
                    <Icon
                        onPress={() => navigation.navigate('SearchedResults')}
                        name='arrow-right'
                        size={24}
                        color={colors.black} />
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                </ScrollView>
                <View style={styles.row}>
                    <Text style={{ fontFamily: fonts.BOLD, fontSize: 16, color: colors.black }}>Popular in Used Resdients for Sale</Text>
                    <Icon
                        onPress={() => navigation.navigate('SearchedResults')}
                        name='arrow-right'
                        size={24}
                        color={colors.black} />
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                    <AdCard />
                </ScrollView>
                <View style={styles.row}>
                    <Text style={{ fontFamily: fonts.BOLD, fontSize: 16, color: colors.black }}>Popular in Property  for Sale for Sale</Text>
                    <Icon
                        onPress={() => navigation.navigate('SearchedResults')}
                        name='arrow-right'
                        size={24}
                        color={colors.black} />
                </View>
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