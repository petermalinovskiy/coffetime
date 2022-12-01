import {NavigationFunctionComponent} from "react-native-navigation";
import { Pressable, StyleSheet, ViewStyle} from "react-native";
import React from "react";
import {navigation} from "~/services";
import {CommonSizes} from "~/core/theme/commonSizes";
import {Pages} from "~/navigation/pages";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Colors} from "~/core/theme/colors";


export const TopBarFavoriteButton: NavigationFunctionComponent = () => {
    const onPress = async () => {
        await navigation.navigateAsync(Pages.favorite, {
            options: {
                bottomTabs: {visible: false},
                topBar: {visible: true},
            },
        });
    };

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Icon name={'favorite'} size={20} color={Colors.gray}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingLeft: CommonSizes.spacing.medium,
        minHeight: CommonSizes.lineHeight.smallPlus,
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: 10
    } as ViewStyle,
});
