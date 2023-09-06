import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MapView, { Marker, PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import { Button } from "react-native-paper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Separator from '../../components/Extras/Separator'
import MakeOfferModal from "../../components/Modals/MakeOfferModal";
import ConfirmPhoneModal from "../../components/Modals/ConfirmPhoneModal";
import * as functions from "../../utilities/functions"
import Toast from "../../components/Extras/Toast"

const AdDetails = ({ navigation, route }) => {
    const [makeOfferModal, setMakeOfferModal] = useState(false)
    const [confirmPhoneModal, setConfirmPhoneModal] = useState(false)
    const [makeOfferValue, setMakeOfferValue] = useState('')
    const [state, setState] = useState(0)
    const data = route.params
    const isCarousel = React.useRef(null)
    const SLIDER_WIDTH = Dimensions.get('window').width + 80
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

    const imgData = [
        {
            imgUrl: "https://picsum.photos/id/11/200/300",
        },
        {
            imgUrl: "https://picsum.photos/id/10/200/300",
        },
        {
            imgUrl: "https://picsum.photos/id/12/200/300",
        },
    ];

    const handleAddFavorites = async () => {
        try {
            const response = await functions.addFavorite(data.id)
            if (response.status) {
                Toast(response.message)
            }
            else {
                Toast(response.message)
            }
        } catch (error) {
            Toast(error)
        }
    }
    const renderItem = ({ item, index }) => {
        return <Image style={styles.mainImg} source={{ uri: item.imgUrl }} />
    }
    console.log(data.attachments);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* header start */}
                <View style={{ position: 'relative' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backIcon}
                        activeOpacity={0.5}>
                        <Icon
                            name="arrow-left"
                            size={28}
                            color={colors.black} />
                    </TouchableOpacity>
                    <Carousel
                        layout="stack"
                        layoutCardOffset={9}
                        ref={isCarousel}
                        data={imgData}
                        renderItem={renderItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        inactiveSlideShift={0}
                        useScrollView={true}
                        onSnapToItem={(index) => setState(index)}
                    />
                    <Pagination
                        dotsLength={imgData.length}
                        activeDotIndex={state}
                        carouselRef={isCarousel}
                        containerStyle={{
                            position: 'absolute',
                            bottom: -47,
                            left: Dimensions.get('window').width / 2.66,
                        }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            backgroundColor: colors.primary
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        tappableDots={true}
                    />
                    <TouchableOpacity
                        onPress={handleAddFavorites}
                        style={[styles.shareIcon, { right: 90, bottom: -20 }]}
                        activeOpacity={0.5}>
                        <MaterialIcon
                            name="favorite-outline"
                            size={28}
                            style={{ alignSelf: 'center' }}
                            color={colors.gray} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleAddFavorites}
                        style={styles.shareIcon}
                        activeOpacity={0.5}>
                        <Icon
                            name="share-variant"
                            size={28}
                            style={{ alignSelf: 'center' }}
                            color={colors.gray} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    zIndex: -1,
                    padding: 15,
                    paddingHorizontal: 20,
                    backgroundColor: colors.white
                }}>
                    <Text style={{ color: colors.primary, fontFamily: fonts.SEMIBOLD, fontSize: 20 }} >AED {data.price || "AED 175,000"}</Text>
                    <Text style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 24, marginVertical: 8, marginBottom: 20 }} >{data.title || "XYZ Buisness For Sale"}</Text>
                    <Separator />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 18 }}>
                        <Icon
                            name='list-status'
                            size={22}
                            color={colors.black} />
                        <Text style={styles.h4}>Status: {data.status}</Text>
                        <Icon
                            name='calendar'
                            size={22}
                            color={colors.black} />
                        <Text style={styles.h4}>{data.created_at_time_diff}</Text>
                    </View>
                </View>
                {/* header finished */}

                {/* details start */}
                <View style={styles.box}>
                    <Text style={styles.h2}>Details</Text>
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.boldText}>Related</Text>
                            <Text style={[styles.regularText, { width: "56%", textAlign: 'right' }]}>{data.title || "No name"}</Text>
                        </View>
                        <Separator />
                        <View style={styles.row}>
                            <Text style={styles.boldText}>Verified</Text>
                            <Text style={styles.regularText}>{data.is_verified === "1" ? "Yes" : "No"}</Text>
                        </View>
                        <Separator />
                        <View style={styles.row}>
                            <Text style={styles.boldText}>Featured</Text>
                            <Text style={styles.regularText}>{data.is_featured === "1" ? "Yes" : "No"}</Text>
                        </View>
                        <Separator />
                        <View style={styles.row}>
                            <Text style={styles.boldText}>SubCategory</Text>
                            <Text numberOfLines={1} style={[styles.regularText, { width: "56%", textAlign: 'right' }]}>{data.subcategory_name}</Text>
                        </View>
                        <Separator />
                        <View style={styles.row}>
                            <Text style={styles.boldText}>Category</Text>
                            <Text style={styles.regularText}>{data.category_name}</Text>
                        </View>
                        <Separator />
                    </View>
                    <Button
                        onPress={() => { setMakeOfferModal(true) }}
                        mode="contained"
                        color={colors.white}
                        style={[styles.button, { marginVertical: 18, }]}
                        labelStyle={styles.ButtonLabel}
                    >Make an Offer</Button>
                </View>
                {/* details finished */}
                {/* description start */}
                <View style={styles.box}>
                    <Text style={styles.h2}>Description</Text>
                    <Text style={[styles.h4, { marginTop: 4 }]}>{data.description || "No description "}</Text>

                    {/* <Text style={styles.highlightedText}>Show More Details</Text> */}
                </View>
                {/* description finished */}
                {/* location start */}
                <View style={styles.box}>
                    <Text style={styles.h2}>Location</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
                        <Icon
                            name='map-marker-outline'
                            size={24}
                            style={{ marginLeft: 15 }}
                            color={colors.gray} />
                        <Text style={styles.h4}>{data.location_name || "Al mira Square"}</Text>
                    </View>
                    <MapView
                        provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
                        style={{ width: "90%", height: 160, alignSelf: 'center', marginVertical: 14 }}
                        region={{
                            latitude: parseFloat(data.latitude) || 37.78825,
                            longitude: parseFloat(data.longitude) || -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        <Marker coordinate={{
                            latitude: parseFloat(data.latitude) || 37.78825,
                            longitude: parseFloat(data.longitude) || -122.4324,
                        }} />
                    </MapView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.image} source={require("../../assets/images/Community.png")} />
                            <View >
                                <Text style={[styles.regularText, { marginHorizontal: 15 }]}>Seller:</Text>
                                <Text style={[styles.boldText, { marginHorizontal: 15 }]}>{data.created_by_user?.name}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.regularText, { marginHorizontal: 15 }]}>Phone Number</Text>
                            <Text style={[styles.boldText, { marginHorizontal: 30, color: colors.primary }]}>{data.created_by_user?.phone || "----"}</Text>
                        </View>
                    </View>
                    <Text onPress={() => navigation.navigate('ReportAd')} style={styles.highlightedText}>Report an Ad</Text>
                </View>
                {/* location finished */}
                {/* SimilarAds Start */}
                {/* <View style={styles.box}>
                    <Text style={styles.h2}>Similar Ads</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                        <AdCard />
                    </ScrollView>
                </View> */}
                {/* SimilarAds Finished */}
            </ScrollView>
            {/* Chat now start */}
            <View style={styles.box}>
                <Button
                    onPress={() => { setConfirmPhoneModal(true) }}
                    mode="contained"
                    color={colors.white}
                    style={styles.button}
                    labelStyle={styles.ButtonLabel}
                >Chat</Button>
            </View>
            {/* Chat now finish */}
            {/* Make offer Modal  */}
            <MakeOfferModal
                visible={makeOfferModal}
                setModalVisible={setMakeOfferModal}
                value={makeOfferValue}
                setValue={setMakeOfferValue}
                navigation={navigation}
                name={data.created_by_user?.name || "John `doe"}
            />
            <ConfirmPhoneModal
                visible={confirmPhoneModal}
                setModalVisible={setConfirmPhoneModal}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backIcon:
    {
        position: "absolute",
        padding: wp('1.1'),
        top: 15,
        left: 15,
        borderRadius: 100,
        zIndex: 3,
        backgroundColor: colors.white,
        height: 40,
        width: 40,
    },
    boldText: {
        color: colors.black,
        fontSize: 14,
        fontFamily: fonts.SEMIBOLD
    },
    regularText: {
        color: colors.gray,
        fontSize: 14,
        fontFamily: fonts.REGULAR,
    },
    shareIcon: {
        position: "absolute",
        padding: wp('1.1'),
        bottom: -20,
        right: 40,
        borderRadius: 100,
        zIndex: 3,
        backgroundColor: colors.white,
        height: 40,
        width: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    mainImg: {
        width: "100%",
        height: hp('30'),
    },
    box:
    {
        zIndex: -1,
        padding: 15,
        paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: colors.white
    }
    ,
    h4: {
        fontSize: 14,
        color: colors.black,
        marginHorizontal: 16,
        fontFamily: fonts.REGULAR,
    },
    h2: {
        fontSize: 18,
        color: colors.black,
        marginHorizontal: 16,
        fontFamily: fonts.SEMIBOLD,
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        overflow: 'hidden'
    },
    image: {
        width: wp('12'),
        height: hp('12'),
        resizeMode: 'contain'
    },
    button: {
        width: '90%',
        borderRadius: 5,
        height: 45,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 1
    },
    ButtonLabel: {
        fontSize: hp("2.2"),
        color: colors.primary,
        fontFamily: fonts.SEMIBOLD,
    },
    highlightedText: {
        fontFamily: fonts.SEMIBOLD,
        color: colors.primary,
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 16
    }
})

export default AdDetails