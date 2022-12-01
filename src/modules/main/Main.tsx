import {NavigationFunctionComponent} from "react-native-navigation";
import React, {useState} from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { useGetCafeListQuery} from "~/api/cafe";
import {FlatListWrapper} from "~/common/components/FlatListWrapper";
import {NoList} from "~/common/components/NoList";
import {CafeItem} from "~/modules/main/components/CafeItem";
import {useAppSelector} from "~/core/store/store";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Colors} from "~/core/theme/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Map} from "~/modules/main/components/Map";
import {isIos} from "~/core/theme/commonConsts";

export const Main: NavigationFunctionComponent = (): JSX.Element => {
  const accessToken = useAppSelector((store) => store.login.accessToken);
  const {data} = useGetCafeListQuery(accessToken);
  const [mapToggle, setMapToggle] = useState<boolean>(false);

  return (
      <View style={[CommonStyles.flex1, styles.bgWhite]}>
        {data ?
            <View style={styles.mapToggle}>
              <TouchableWithoutFeedback  onPress={() =>setMapToggle(prev => prev||!prev)}>
                <Icon
                    name="map"
                    size={25}
                    color={Colors.dark}
                    style={[styles.mapToggleButton, (mapToggle ? {backgroundColor: Colors.green} : null)]}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() =>setMapToggle(prev => prev&&!prev)}>
                <Icon
                    name="list" size={25}
                    color={Colors.dark}
                    style={[styles.mapToggleButton, (!mapToggle ? {backgroundColor: Colors.green} : null)]}
                />
              </TouchableWithoutFeedback>
            </View> : null }
        {!mapToggle ?
            <FlatListWrapper
                data={data}
                renderItem={({item}) => <CafeItem cafeData={item}/>}
                keyExtractor={item => item.id}
                ListEmptyComponent={<NoList />}
                style={styles.flatList}
                isLoading={false}
            /> : <Map cafeData={data}/>}
      </View>
  );
};

Main.options = {
  bottomTabs: {
    visible: false
  }
};

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: Colors.white
  },
  mapToggle: {
    position: 'absolute',
    zIndex: 2,
    marginTop: isIos ? 100 : 5,
    flexDirection: 'row',
    width: '35%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    minHeight: 35,
    padding: 3,
    borderRadius: 25,
    borderColor: Colors.green,
    borderWidth: 2
  },

  mapToggleButton: {
    minWidth: '15%',
    height: 35,
    borderRadius: isIos ? 20 : 25,
    alignSelf: 'center',
    paddingTop: 5,
    paddingHorizontal: 20,
    overflow: "hidden"
  },
  flatList: {
    marginTop: isIos ? 150 : 50
  }
});
