import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, StatusBar, View } from 'react-native'
import Onboarding from "react-native-onboarding-swiper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const OnBoard = ({ navigation }) => {
    
    const Done = () => (
        <TouchableOpacity
            onPress={() => navigation.navigate('BottomNavigator')}>
            <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.white}
            />
            <Onboarding
                containerStyles={{ marginBottom: hp('8') }}
                bottomBarColor="#f7f7f7"
                onSkip={() => navigation.navigate('BottomNavigator')}
                DoneButtonComponent={Done}
                titleStyles={{ color: colors.primary, fontFamily: fonts.BOLD }}
                subTitleStyles={{ marginHorizontal: 25, textAlign: 'center', fontFamily: fonts.SEMIBOLD }}
                pages={[
                    {
                        backgroundColor:
                            '#f7f7f7',
                        image:
                            <Image style={styles.img} source={require('../../assets/images/img2.png')} />,
                        title:
                            'Find you Home in UAE',
                        subtitle:
                            'Explore over 20,000 homes and find exactly what you are looking for with the help of 1000+ trusted agents',
                    },
                    {
                        backgroundColor:
                            '#f7f7f7',
                        image:
                            <Image style={styles.img} source={require('../../assets/images/img3.png')} />,
                        title:
                            'Upgrade your Lifestyle',
                        subtitle:
                            'Choose from over 200,000 used items and unleash your creativity while furnishing your home on a budget or cash out by giving a second life to your previously loved items',
                    },
                    {
                        backgroundColor:
                            '#f7f7f7',
                        image:
                            <Image style={styles.img} source={require('../../assets/images/img1.png')} />,
                        title:
                            'Get yourself a ride',
                        subtitle:
                            'Browsw over 25,000 cars for sale in the UAE or put yours up for the sale and the sale and be seen by 1.6 million buyers monthly',
                    },
                ]}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    img: {
        width: 500,
        height: 250,
        resizeMode: 'contain',
    },
    DoneIcon: {
        margin: 10
    },
    buttonText: {
        fontSize: 18,
        color: colors.primary,
        margin: 10,
        fontWeight: 'bold'
    }
})

export default OnBoard