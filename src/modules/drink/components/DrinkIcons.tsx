import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import {iconData} from "~/common/iconData";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Colors} from "~/core/theme/colors";


export const DrinkIcons: React.FC = () => {
    return (
        <View style={CommonStyles.rowCenter}>
            {iconData.map(item => (
                <View key={item.id} style={styles.iconCard}>
                    <View style={[styles.iconContainer, {backgroundColor: item.BGColor}]}>
                        <Image source={item.image}/>
                    </View>
                    <Text style={styles.iconText}>{item.text}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    iconCard: {
        marginRight: 16,
    },
    iconContainer: {
        height: 35,
        width: 35,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    iconText: {
        fontSize: 10,
        color: Colors.gray,
        textAlign: 'center'
    },
});