import React from "react";
import { Image, Text, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import {Colors} from "~/core/theme/colors";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Fonts} from "~/core/theme/fonts";
import {LikeButton} from "~/common/components/LikeButton";
import {navigation} from "~/services";
import {Pages} from "~/navigation/pages";

interface DrinkItemProps {
    children?: React.ReactNode;
    drinkItemData: {
        id: string;
        cofeId: string;
        name: string;
        price: number;
        favorite: boolean;
        imagesPath: string;
    };
}

export const DrinkItem: React.FC<DrinkItemProps> = (props) => {
    const {drinkItemData} = props;

    const onComponentPress = async () => {
        await navigation.navigateAsync(Pages.drink, {
            params: {id: props.drinkItemData.id},
            options: {
                bottomTabs: {visible: false},
                topBar: {
                    visible: true,
                    title: {
                        text: 'CoffeTime',
                        fontFamily: Fonts.lobster,
                        alignment: 'center'
                    },
                },
            },
        });
    };

    return (
        <TouchableWithoutFeedback onPress={onComponentPress}>
            <View  style={[styles.cafeDrinkContainer, CommonStyles.shadow]}>
                <Text style={styles.cafeDrinkTitle}>{drinkItemData.name}</Text>
                <Text style={[CommonStyles.text, {fontSize: 12}]}>кофейный напиток</Text>
                <Image source={{uri: drinkItemData.imagesPath}} style={styles.cafeDrinkImage}/>
                <View style={CommonStyles.rowSpaceBetween}>
                    <View style={CommonStyles.rowCenter}>
                        <Text style={styles.cafeDrinkPrice}>{drinkItemData.price}</Text>
                        <Image source={require('../../../resources/images/ruble.png')}/>
                    </View>
                    <LikeButton id={drinkItemData.id} favorite={drinkItemData.favorite} size={22}/>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    cafeDrinkContainer: {
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        width: '45%',
        height: 220,
        padding: 10,
        margin: 8,
    },
    cafeDrinkTitle: {
        fontSize: 16,
        color: Colors.gray,
    },
    cafeDrinkPrice: {
        fontFamily: Fonts.lobster,
        fontSize: 24,
        color: Colors.green,
        marginRight: 5,
        marginBottom: -5
    },
    cafeDrinkImage: {
        height: 100,
        width: '100%',
    }
});