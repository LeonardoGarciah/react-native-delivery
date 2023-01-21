import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectRestaurant} from "../redux/slices/restaurantSlice";
import {SafeAreaView} from "react-native-safe-area-context";
import {Screens} from "../Routes/Routes";
import {XCircle} from "phosphor-react-native";
import * as Progress from 'react-native-progress';
import MapView, {Marker, Polyline} from "react-native-maps";
import * as Location from 'expo-location';
import {apiMapsGetDeliveryRoute} from "../http/mapsGet";

const Delivery = () => {
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [deliveryWaypoints, setDeliveryWaypoints] = useState([]);

    const handleNavigateToHome = () => {
        navigation.navigate(Screens.HOME);
    }

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let locationResponse = await Location.getCurrentPositionAsync({});
            console.log(locationResponse);
            setLocation(location.coords);
        })();
    }, []);
    console.log("location", location)

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const getDeliveryRoute = async () => {
        const response = await apiMapsGetDeliveryRoute([
            [location.longitude, location.latitude],
            [restaurant.long, restaurant.lat],
        ])
        const waypoints = response.data.routes[0].legs[0].steps.flatMap((step) => {
            return step.intersections.map((intersection) => {
                return intersection.location;
            })
        })
        setDeliveryWaypoints(waypoints);
    }

    const waypointMapFormatter = (waypoints: []) => {
        return waypoints.map((waypoint) => {
          return { latitude: waypoint[1], longitude: waypoint[0] }
        })
    }
    //
    useEffect(() => {
        if (location) {
            getDeliveryRoute();
        }
    }, [location])

    console.log(deliveryWaypoints.length)

    return (
        <View className='bg-primary flex-1'>
            <SafeAreaView>
                <View className='flex-row justify-between items-center p-4'>
                    <TouchableOpacity
                        onPress={handleNavigateToHome}
                    >
                        <XCircle color='white' size={30} />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg'>
                        Ajuda sobre o pedido
                    </Text>
                </View>

                <View className='bg-white mx-4 my-2 rounded-md p-6 z-50 shadow-md'>
                    <View className='flex-row justify-between'>
                        <View>
                            <Text className='text-lg text-gray-400'>Tempo estimado</Text>
                            <Text className='text-4xl font-bold'>10 - 20 min</Text>
                        </View>

                        <Image
                            source={{
                                uri: 'https://links.papareact.com/fls'
                            }}
                            className='h-20 w-20'
                        />
                    </View>

                    <Progress.Bar size={30} color='#00CCBB' indeterminate={true}/>

                    <Text className='mt-3 text-gray-500'>
                        Seu pedido no restaurante {restaurant.title} está sendo preparado!
                    </Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                className='flex-1 -mt-10 -z-30'
                mapType='mutedStandard'
            >

                {/*<Marker*/}
                {/*    key={restaurant.id}*/}
                {/*    coordinate={{*/}
                {/*        latitude: restaurant.lat,*/}
                {/*        longitude: restaurant.long,*/}
                {/*    }}*/}
                {/*    title={restaurant.title}*/}
                {/*    description={restaurant.short_description}*/}
                {/*/>*/}
                <Polyline
                    coordinates={waypointMapFormatter(deliveryWaypoints)}
                    strokeColor="#00CCBB" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={6}
                />
            </MapView>

            <SafeAreaView className='bg-white flex-row space-x-5 h-28'>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
                />
                <View className='flex-1'>
                    <Text className='text-lg'>
                        Leonardo Garcia
                    </Text>
                    <Text className='text-gray-400'>Seu entregador</Text>
                </View>

                <Text className='text-primary text-lg mr-5 font-bold'>Ligar</Text>
            </SafeAreaView>
        </View>
    )
}

export default Delivery;