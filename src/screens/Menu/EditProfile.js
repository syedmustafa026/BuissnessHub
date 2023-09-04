import React, { useState, useEffect } from "react"
import { SafeAreaView, StyleSheet, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { TextInput, Button, Switch } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Datetime from 'react-native-modal-datetime-picker'
import moment from "moment/moment"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { launchImageLibrary } from 'react-native-image-picker'

import * as colors from "../../utilities/colors"
import * as functions from '../../utilities/functions'
import * as fonts from "../../utilities/fonts"
import Dropdown from "../../components/Inputs/Dropdown"
import Toast from "../../components/Extras/Toast"

const EditProfile = ({ navigation, route }) => {
    const [email, setEmail] = useState(route.params.email)
    const [phone, setPhone] = useState(route.params.phone)
    const [name, setName] = useState(route.params.name)
    const [gender, setGender] = useState(route.params.gender == null ? 'Select Gender' : route.params.gender)
    const [dob, setDob] = useState(route.params.dob)
    const [genderModal, setGenderModal] = useState(false)
    const [editIcon, setEditIcon] = useState(true)
    const [offers, setOffers] = useState(route.params.offers_and_bargains == "1" ? true : false)
    const [newsletter, setNewsletter] = useState(route.params.weekly_newsletter == "1" ? true : false)
    const [datetimeModal, setDatetimeModal] = useState(false)
    const [img, setImg] = useState(null)
    const [image, setImage] = useState(null)


    const handleDatetime = (datetime) => {
        setDatetimeModal(false)
        setDob(moment(datetime).format('YYYY-MM-DD'))
    }
    const OpenGallery = () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
            },
            includeBase64: true,
            saveToPhotos: true,
        }
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log("user Cancelled ")
            }
            else {
                console.log(response.assets[0].uri);
                setImg({ uri: 'data:image/jpg;base64,' + response.assets[0].base64 })
                setImage(response.assets[0].uri)
            }
        })
    }
    const handlePress = async () => {
        try {
            const payload = {
                dob: dob,
                phone: phone,
                gender: gender,
                offers_and_bargains: offers,
                weekly_newsletter: newsletter,
                image: img?.uri,
                name: name
            }
            const response = await functions.updateProfile(payload)
            console.log(response);
            if (!response.status) throw new Error(response.message)
            if (response.status) {
                setEditIcon(!editIcon)
                await functions.setItem('user', response.data)
                Toast("Updated successfully")
                navigation.replace("BottomNavigator")
            }
        }
        catch (error) {
            Toast(error.message || "server error")
        }
    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Text onPress={() => { editIcon === true ? setEditIcon(!editIcon) : handlePress() }} style={styles.h2}>Edit</Text>
            ),
        })
    }, [])
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <View style={styles.head}>
                    <View style={styles.imgCon}>
                        <TouchableOpacity
                            disabled={editIcon ? true : false}
                            onPress={() => OpenGallery()}
                            activeOpacity={0.8}>
                            <Image style={styles.image} source={{ uri: image == null ? route.params.image_url : image }} />
                            <Icon style={{ position: 'absolute', bottom: 0, left: 70 }} name='pencil-circle' color={colors.gray} size={28} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => setGenderModal(false)} style={styles.center}>
                    <View style={styles.InputBox}>
                        <Dropdown
                            disabled={editIcon ? true : false}
                            data={['Male', 'Female', 'Others']}
                            value={gender}
                            toggleModal={() => setGenderModal(!genderModal)}
                            modal={genderModal}
                            setModal={setGenderModal}
                            setValue={setGender} />
                    </View>
                    <View style={styles.InputBoxes}>
                        <View style={styles.InputBox}>
                            <TextInput style={styles.Input}
                                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                                placeholder="Name"
                                value={name}
                                activeUnderlineColor={colors.primary}
                                disabled={editIcon ? true : false}
                                onChangeText={(value) => setName(value)}
                            />
                        </View>
                        <View style={styles.InputBox}>
                            <TextInput
                                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                                style={styles.Input}
                                placeholder="Email Address"
                                value={email}
                                activeUnderlineColor={colors.primary}
                                disabled={true}
                                onChangeText={(value) => setEmail(value)}
                            />
                        </View>

                        <View style={styles.InputBox}>
                            <TextInput
                                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                                style={styles.Input}
                                placeholder=" Phone Number"
                                activeUnderlineColor={colors.primary}
                                value={phone}
                                disabled={editIcon ? true : false}
                                maxLength={10}
                                keyboardType="number-pad"
                                onChangeText={(value) => setPhone(value)}
                            // left={<TextInput.Affix
                            //     text='+971'
                            // />}
                            />
                        </View>
                        <View
                            style={styles.InputBox}>
                            <TextInput
                                disabled={editIcon ? true : false}
                                theme={{ colors: { text: colors.white, placeholder: colors.primaryLight, } }}
                                style={styles.Input}
                                placeholder="Date of Birth"
                                activeUnderlineColor={colors.primary}
                                value={dob}
                                onPressIn={() => setDatetimeModal(true)}
                                maxLength={11}
                                keyboardType="number-pad"
                            />
                        </View>


                        <View style={styles.row}>
                            <View style={styles.row}>
                                <Icon
                                    name='offer'
                                    size={22}
                                    color={colors.gray} />
                                <Text style={styles.h4}>Offers and bargains  </Text>
                            </View>
                            <Switch
                                disabled={editIcon ? true : false}
                                value={offers}
                                color={colors.primary}
                                onValueChange={() => setOffers(!offers)} />
                        </View>
                        <View style={styles.row}>
                            <View style={styles.row}>
                                <Icon
                                    name='newspaper-variant-multiple-outline'
                                    size={22}
                                    color={colors.gray} />
                                <Text style={styles.h4}>Weekly newsletter  </Text>
                            </View>
                            <Switch
                                disabled={editIcon ? true : false}
                                value={newsletter}
                                color={colors.primary}
                                onValueChange={() => setNewsletter(!newsletter)} />
                        </View>
                        <Datetime
                            isVisible={datetimeModal}
                            display="compact"
                            mode='date'
                            onConfirm={handleDatetime}
                            maximumDate={new Date()}
                            onCancel={() => setDatetimeModal(false)}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.btn}>
                    <Button
                        disabled={editIcon ? true : false}
                        mode="contained"
                        onPress={handlePress}
                        style={styles.footerButton}
                        contentStyle={styles.footerButtonContent}
                        labelStyle={styles.ButtonLabel}
                    >SAVE CHANGES</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: wp("5"),
        flex: 1,
        backgroundColor: colors.white
    },
    head: {
        justifyContent: 'flex-end',
        flex: 0.2,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 4,
        marginHorizontal: 6,
    },
    imgCon: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 10,
        marginRight: 12,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    h1: {
        fontSize: hp("4.2"),
        color: colors.primary,
        marginHorizontal: wp("4"),
        marginVertical: hp("2"),
        fontFamily: fonts.BOLD
    },
    h4: {
        fontSize: hp("2"),
        marginHorizontal: wp("5"),
        fontFamily: fonts.SEMIBOLD,
        color: colors.primaryLight
    },
    h2: {
        fontSize: hp("2.1"),
        fontFamily: fonts.SEMIBOLD,
        color: colors.secondary
    },
    ImageBox: {
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 100
    },
    InputBoxes: {
        flex: 0.9,
    },
    icon: {
        position: 'absolute',
        right: 20
    },
    eye: {
        position: 'absolute',
        right: 30,
        zIndex: 2,
        alignItems: 'center'
    },
    InputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp("2"),
    },
    Input: {
        backgroundColor: colors.white,
        marginHorizontal: wp("3.5"),
        width: '90%',
    },
    dropdown: {
        width: "75%",
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderBlockColor: colors.gray,
        height: 45,
        color: colors.gray,
        fontFamily: fonts.SEMIBOLD
    },
    btn: {
        justifyContent: "center",
        alignItems: "center"
    },
    footerButton: {
        width: '90%',
        marginVertical: 16,
        backgroundColor: colors.primary
    },
    footerButtonContent: {
        paddingVertical: 8,
    },
    ButtonLabel: {
        fontSize: hp("2.2"),
        color: colors.white,
        fontFamily: fonts.SEMIBOLD
    }
})

export default EditProfile