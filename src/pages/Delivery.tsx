import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectRestaurant} from "../redux/slices/restaurantSlice";
import {SafeAreaView} from "react-native-safe-area-context";
import {Screens} from "../Routes/Routes";
import {XCircle} from "phosphor-react-native";
import * as Progress from 'react-native-progress';
import MapView, {Marker} from "react-native-maps";

const Delivery = () => {
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();

    const handleNavigateToHome = () => {
        navigation.navigate(Screens.HOME);
    }

    return (
        <View className='bg-[#00CCBB] flex-1'>
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
                <Marker
                    key={restaurant.id}
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
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

                <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>Ligar</Text>
            </SafeAreaView>
        </View>
    )
}

export default Delivery;