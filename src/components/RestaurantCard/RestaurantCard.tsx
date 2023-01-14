import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {MapPin, Star} from "phosphor-react-native";
import {urlFor} from "../../../sanity";

interface Props{
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: string[];
    long: number;
    lat: number;
}
const RestaurantCard = (props: Props) => {
    const { lat, dishes, address, id, title, long, imgUrl, short_description, rating, genre } = props;

    return (
        <TouchableOpacity className='bg-white mr-4 shadow'>
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