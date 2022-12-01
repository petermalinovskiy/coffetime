import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const NoList = () => {
    return (
        <View style={styles.noList}>
            <Image source={require('../../../resources/images/noList_bg.png')} />
            <Text style={styles.text}> Здесь нет ни одной чашки кофе. {'\n'} Попробуйте вернуться к нам позже.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    noList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 16,
        lineHeight: 40,
        textAlign: 'center'
    }
})