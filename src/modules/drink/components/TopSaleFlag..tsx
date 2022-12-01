import React from "react";
import { ImageBackground, Text, StyleSheet} from "react-native";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Colors} from "~/core/theme/colors";


export const TopSaleFlag: React.FC = () => {
    return (
        <ImageBackground source={require('../../../resources/images/drinkSaleIcon.png')} resizeMode="cover" style={styles.drinkFlag}>
            <Text style={[CommonStyles.text, {color: Colors.white, marginRight: 16 }]}>Хит</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    drinkFlag: {
        position: 'absolute',
        top: 20,
        left: 0,
        width: 72,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
});

