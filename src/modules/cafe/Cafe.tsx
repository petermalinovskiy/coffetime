import React from "react";
import {FlatListWrapper} from "~/common/components/FlatListWrapper";
import {IcafeData} from "~/common/components/CafeItem";
import {CafeDescription} from "~/common/components/CafeDescription";
import {useAppSelector} from "~/core/store/store";
import {NoList} from "~/common/components/NoList";
import {AppNavigationComponent} from "~/navigation/helpers/NavigationHOC";
import {useGetCafeDrinkListQuery} from "~/api/drink";
import {DrinkItem} from "~/common/components/DrinkItem";

interface IProps {
    cafeData: IcafeData;
}

export const Cafe: AppNavigationComponent<IProps>= (props): JSX.Element => {
    const {cafeData} = props;
    const token = useAppSelector((store) => store.login.accessToken);
    const ID = cafeData?.id;

    const requestData = {
        sessionId: token,
        cafeId: ID,
    };

    const {data} = useGetCafeDrinkListQuery(requestData);

    return (
        <FlatListWrapper
            data={data}
            renderItem={({item}) => <DrinkItem drinkItemData={item}/>}
            keyExtractor={item => item.id}
            ListEmptyComponent={<NoList/>}
            ListHeaderComponent={<CafeDescription cafeData={cafeData}/>}
            contentContainerStyle={{justifyContent: 'space-around'}}
            numColumns={2}
        />
    );
};

