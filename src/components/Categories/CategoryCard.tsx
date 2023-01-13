import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";

interface Props{
    imgUrl: string;
    title: string;
}
const CategoryCard = (props: Props) => {
    const { imgUrl, title } = props;

    return (
        <TouchableOpacity className='relative mr-2'>
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