import React from "react";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import {useAppSelector} from "~/core/store/store";
import {AppNavigationComponent} from "~/navigation/helpers/NavigationHOC";
import {useGetDrinkItemQuery} from "~/api/drink";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Colors} from "~/core/theme/colors";
import {Fonts} from "~/core/theme/fonts";
import {LikeButton} from "~/common/components/LikeButton";
import {TopSaleFlag} from "~/common/components/TopSaleFlag.";
import {DrinkIcons} from "~/common/components/DrinkIcons";

interface IProps {
    id: string;
}

export const Drink: AppNavigationComponent<IProps>= (props): JSX.Element | null => {
    const accessToken = useAppSelector((store) => store.login.accessToken);

    const drinkItem = {
        sessionId: accessToken,
        productId: props.id,
    };
    const {data} = useGetDrinkItemQuery(drinkItem);

    return (data ?
        <View style={CommonStyles.flex1}>
            <TopSaleFlag/>
            <View style={[CommonStyles.flexSpaceAround, styles.drinkPadding]}>
                <Image source={{uri: data.imagesPath}} style={styles.drinkImage}/>
                <View style={CommonStyles.rowCenter}>
                    <Text style={styles.drinkCardName}>{data?.productName}</Text>
                    <LikeButton id={data?.id} favorite={data.favarite} size={22}/>
                </View>
                <DrinkIcons/>
                <Text style={CommonStyles.text}>{data?.cofeName}</Text>
                <View style={CommonStyles.rowSpaceBetween}>
                    <View style={CommonStyles.rowCenter}>
                        <Text style={styles.drinkPrice}>{data?.price}</Text>
                        <Image source={require('../../../resources/images/rubleBig.png')}/>
                    </View>
                    <Pressable
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#B3C29C' : '#C8D9AF'}, styles.buyButton]}
                    >
                        <Text style={styles.buttonText}>заказать</Text>
                    </Pressable>
                </View>
            </View>
        </View> : null
    );
};

const styles = StyleSheet.create({
    drinkCardName: {
        fontFamily: Fonts.lobster,
        fontSize: 24,
        color: Colors.dark,
        marginRight: 10
    },
    drinkPrice: {
        fontSize: 28,
        color: Colors.gray,
        marginRight: 15,
    },
    buyButton: {
        height: 41,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: Colors.white,
        fontSize: 20,
    },
    drinkPadding: {
        paddingHorizontal: 20,
    },
    drinkImage: {
        width: '100%',
        height: '40%'
    },
});

