import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Toast from "../../components/Extras/Toast"
import * as functions from "../../utilities/functions"

const PlaceAdListing = ({ navigation,route }) => {
    const [category, setCategory] = useState(null)
    const [loading, setLoading] = useState(true)

    const ItemCard = (item) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('PlaceAdTitle', { data: item.data, city: route.params.city })}
                style={styles.card}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.cardImg} source={{ uri: item.image }} />
                    <Text style={styles.cardText}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
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
    useEffect(() => {
        getCategories()
    }, [])
    if (loading) {
        return (
            <View style={styles.errorContainer}>
                <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Icon
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: 30
                        }}
                        name='arrow-left'
                        size={30}
                        onPress={() => navigation.goBack()}
                        color={colors.black} />
                    <View style={{ justifyContent: 'center', marginTop: 48 }}>
                        <Text style={styles.h1}>What are you listing</Text>
                        <Text style={styles.h4}>Choose the category that your ad fits into?</Text>
                    </View>
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
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cards: {
        paddingHorizontal: wp('4'),
        alignItems: 'center',
        paddingVertical: hp('3'),
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card: {
        width: wp('30'),
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
    h1: {
        color: colors.black,
        fontSize: 24,
        zIndex: 2,
        fontFamily: fonts.BOLD,
        fontFamily: fonts.BOLD,
        textAlign: 'center',
    },
    h2: {
        fontSize: 18,
        color: colors.black,
        fontFamily: fonts.SEMIBOLD,
        marginBottom: 30,
        marginHorizontal: 20
    },
    h4: {
        fontSize: 14,
        color: colors.black,
        fontFamily: fonts.REGULAR,
        textAlign: 'center'
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default PlaceAdListing;