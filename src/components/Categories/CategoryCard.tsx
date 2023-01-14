import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Screens} from "../../Routes/Routes";
import {useNavigation} from "@react-navigation/native";

interface Props{
    imgUrl: string;
    title: string;
}
const CategoryCard = (props: Props) => {
    const { imgUrl, title } = props;

    const navigation = useNavigation();
    const navigateToRestaurantByCategories = () => {
        navigation.navigate(Screens.RESTAURANT_BY_CATEGORY, { category: title })
    }

    return (
        <TouchableOpacity
            onPress={navigateToRestaurantByCategories}
            className='relative mr-2'
        >
            <Image
                source={{
                uri: imgUrl
                }}
                className="h-20 w-20 rounded"
            />
            <Text
                className='absolute bottom-1 left-1 text-white font-bold'
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;