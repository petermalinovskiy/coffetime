import React from "react";
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {Colors} from "~/core/theme/colors";
import {CommonStyles} from "~/core/theme/commonStyles";
import {navigation} from "~/services";
import {Pages} from "~/navigation/pages";
import {Fonts} from "~/core/theme/fonts";

export interface CafeItemProps {
    cafeData: IcafeData;
}

export interface IcafeData {
    map(arg0: (i: IcafeData) => JSX.Element): React.ReactNode;
    id: string;
    name: string;
    address: string;
    coordinates: string;
    description: string;
    images: string;
}

export const CafeItem: React.FC<CafeItemProps> = (props) => {

    const onComponentPress = async () => {
        await navigation.navigateAsync(Pages.cafe, {
            params: {cafeData: props.cafeData},
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
        <TouchableWithoutFeedback
            key={props.cafeData.id}
            onPress={onComponentPress}
        >
            <View style={[styles.cafeContainer, CommonStyles.shadow]} >
                <Image source={{uri: props.cafeData.images }}  style={styles.cafeItemImage}/>
                <View style={styles.cafeDescription}>
                    <Text style={CommonStyles.title}>{props.cafeData.name}</Text>
                    <Text style={CommonStyles.subtext}>Мы находимся:</Text>
                    <Text style={CommonStyles.text}>{props.cafeData.address}</Text>
                    <Text style={[CommonStyles.subtext, styles.cafeItemSubText]}>подробнее {">"}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    cafeContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        height: 126,
        backgroundColor: Colors.white,
    },
    cafeDescription: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 25,
        paddingRight: 10,
        justifyContent: 'center',
        shadowRadius: 4,
        shadowColor: Colors.dark
    },
    cafeItemImage: {
        height: '100%',
        width: '28%',
    },
    cafeItemSubText: {
        color: Colors.gray,
        textAlign: 'right'
    }
});