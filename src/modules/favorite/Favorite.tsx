import React from "react";
import {FlatListWrapper} from "~/common/components/FlatListWrapper";
import {useAppSelector} from "~/core/store/store";
import {NoList} from "~/common/components/NoList";
import { useGetFavoriteDrinkListQuery} from "~/api/drink";
import {DrinkItem} from "~/common/components/DrinkItem";

export const Favorite = (): JSX.Element => {
    const token = useAppSelector((store) => store.login.accessToken);
    const {data} = useGetFavoriteDrinkListQuery(token);
    console.log(data)

    return (
        <FlatListWrapper
            data={data?.filter(i => i.favorite)}
            renderItem={({item}) => <DrinkItem drinkItemData={item}/>}
            keyExtractor={item => item.id}
            ListEmptyComponent={<NoList/>}
            contentContainerStyle={{justifyContent: 'space-around'}}
            numColumns={2}
        />
    );
};

