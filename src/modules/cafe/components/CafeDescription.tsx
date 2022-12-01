import React, { useState } from "react";
import { ImageBackground, Text, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "~/core/theme/colors";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Fonts} from "~/core/theme/fonts";
import {AppNavigationComponent} from "~/navigation/helpers/NavigationHOC";

interface IProps {
    id: string
    name: string;
    address: string;
    coordinates: string;
    description: string;
    images: string;
}

export const CafeDescription: AppNavigationComponent<IProps> = ({cafeData}) => {
    const [likeToggle, setLikeToggle] = useState<boolean>(true);


    return (
        <ImageBackground source={{uri: cafeData?.images}} resizeMode="cover" style={styles.mainCafeImage}>
            <LinearGradient colors={["rgba(255, 255, 255, 0.0319)", "rgba(247, 236, 218, 1)"]} locations={[0.5, 1]} style={styles.cafeImageGradient}>
                <View style={[CommonStyles.rowCenter, styles.cafeDescriptionContainer]}>
                    <View style={{width: '80%'}}>
                        <Text style={styles.drinkCardName}>{cafeData?.name}</Text>
                        <Text style={[CommonStyles.text, {fontSize: 18}]}>{cafeData?.address}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={()=>setLikeToggle(prev=>!prev)}>
                        <View style={styles.heartContainer} >
                            <Icon
                                name={'favorite'}
                                size={20}
                                color={likeToggle ? Colors.gray : Colors.primary}
                                style={[styles.heartButton, (likeToggle ? null : {alignSelf: 'flex-end'})]}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    mainCafeImage: {
        width: '100%',
        height: 300,
    },
    cafeDescriptionContainer : {
        flex: 1,
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10
    },
    drinkCardName: {
        fontFamily: Fonts.lobster,
        fontSize: 24,
        color: Colors.dark,
        marginRight: 10
    },
    heartContainer: {
        backgroundColor: Colors.white,
        width: 50,
        height: 32,
        borderRadius: 15.5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.gray,
    },
    heartButton: {
        backgroundColor: Colors.white,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: Colors.gray,
        padding: 5,
    },
    cafeImageGradient: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 15
    }
})