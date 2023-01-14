import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from "react-native";
import {ArrowRight} from "phosphor-react-native";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import sanityClient from "../../http/sanity";
import {apiGetFeaturedCategoriesById} from "../../http/httpGet";

interface Props{
    title: string;
    description: string;
    id: string;
}
const FeaturedRow = (props: Props) => {
    const { id, title, description } = props;

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        apiGetFeaturedCategoriesById(id).then((data) => {
            setRestaurants(data.restaurants);
        })
    }, [])

    const renderRestaurants = () => {
        return restaurants.map((restaurant) => {
            const { _id, image, address, name, dishes, rating, short_description, type, long, lat } = restaurant;

            return (
                <RestaurantCard
                    key={_id}
                    id={_id}
                    imgUrl={image}
                    title={name}
                    rating={rating}
                    genre={type.name}
                    address={address}
                    short_description={short_description}
                    dishes={dishes}
                    long={long}
                    lat={lat}
                />
            )
        })
    }

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
                {description}
            </Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 14,
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
                {renderRestaurants()}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow;