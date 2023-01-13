import React from 'react';
import {ScrollView, Text, View} from "react-native";
import {ArrowRight} from "phosphor-react-native";

interface Props{
    title: string;
    dewscription: string;
    featuredCategory: string;
}
const FeaturedRow = (props: Props) => {
    const { featuredCategory, title, dewscription } = props;

    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text
                    className='font-bold text-lg'
                >
                    {title}
                </Text>
                <ArrowRight color='#00CCBB' />
            </View>

            <Text
                className='text-xs text-gray-500 px-4'
            >
                {dewscription}
            </Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 14,
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >

            </ScrollView>
        </View>
    )
}

export default FeaturedRow;