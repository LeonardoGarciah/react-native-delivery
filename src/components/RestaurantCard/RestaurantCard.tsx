import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {MapPin, Star} from "phosphor-react-native";
import {urlFor} from "../../../sanity";
import {useNavigation} from "@react-navigation/native";
import {Screens} from "../../../App";
import IRestaurant from "../../interfaces/Restaurant";

interface Props extends IRestaurant{
}

const RestaurantCard = (props: Props) => {
    const {
        address,
        title,
        imgUrl,
        rating,
        genre
    } = props;

    const navigation = useNavigation();

    const navigateToRestaurant = () => {
        navigation.navigate(Screens.RESTAURANT, props);
    }

    return (
        <TouchableOpacity
            onPress={navigateToRestaurant}
            className='bg-white mr-4 shadow'
        >
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                className='h-36 w-64 rounded-sm'
            />
            <View className='px-2 pb-4'>
                <Text
                    className='font-bold text-lg pt-2'
                >
                    {title}
                </Text>
                <View className='flex-row items-center space-x-1'>
                    <Star color='green' size={22} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-green-500'>
                            {rating}
                        </Text> - {genre}
                    </Text>
                </View>

                <View className='flex-row items-center space-x-1'>
                    <MapPin color='gray' size={22} />
                    <Text className='text-xs text-gray-500'>Endereço - {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard;