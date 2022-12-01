import React, {useState} from "react";
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialIcons";
import {Colors} from "~/core/theme/colors";
import {useAppSelector} from "~/core/store/store";
import {useSetFavoriteDrinkMutation, useUnsetFavoriteDrinkMutation} from "~/api/favorite";

interface LikeButtonProps {
    favorite: boolean;
    id: string,
    size: number
}

export const LikeButton: React.FC<LikeButtonProps> = ({favorite, id, size}) => {
    const accessToken = useAppSelector((store) => store.login.accessToken);
    const drinkItem = {
        sessionId: accessToken,
        productId: id,
    }
    const [favoriteStatus, setFavorite] = useState<boolean>(favorite)

    const [setFavoriteDrink, {isError: isSetError}] = useSetFavoriteDrinkMutation()
    const [unsetFavoriteDrink, {isError: isUnsetError}] = useUnsetFavoriteDrinkMutation()

    const iconColor = (favoriteStatus ? Colors.primary : Colors.gray)

    const favoriteToggle  =  async () => {
        console.log('pressed')
        if (favoriteStatus) {
            await unsetFavoriteDrink(drinkItem)
                .then(() => isUnsetError ? null : setFavorite(prev => !prev) )
        } else {
            await setFavoriteDrink(drinkItem)
                .then(() => isSetError ? null : setFavorite(prev => !prev) )
        }
    }

    return <Icon name={'favorite'} size={size} color={iconColor} onPress={favoriteToggle}/>
}