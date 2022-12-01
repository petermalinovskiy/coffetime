import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, {Marker} from "react-native-maps";
import {CafeItemProps, IcafeData} from "~/common/components/CafeItem";

export const Map: React.FC<CafeItemProps> = (props) => {

    const coordinatesToObject = (arg: string) => {
        const coordinates = arg.split(', ');
        return {
            latitude: +coordinates[0],
            longitude: +coordinates[1]
        }
    }
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 46.836725,
                    longitude: 29.628238,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.05,
                }}>
                {props ?
                    props.cafeData.map((i: IcafeData) => (
                    <Marker
                        coordinate={coordinatesToObject(i.coordinates)}
                        key={i.id}
                    />
                )) : null}

            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});