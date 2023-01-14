import React, {useEffect, useState} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {apiGetFeaturedCategoriesById, apiGetRestaurantsByCategory} from "../http/httpGet";
import RestaurantByCategoryCard from "../components/RestauratnsByCategory/RestaurantByCategoryCard";
import {ArrowLeft} from "phosphor-react-native";
import {Screens} from "../Routes/Routes";

const RestaurantsByCategory = () => {
    const { params: { category, featuredId, title } } = useRoute();
    const [restaurants, setRestaurants] = useState([]);

    const navigation = useNavigation();
    const renderRestaurantsByCategory = () => {

        console.log(!restaurants)
        if (!restaurants.length) {
            return (
                <Text className='text-gray-400 text-xl text-center p-12'>Nenhum restaurante encontrado para a categoria {category}</Text>
            )
        }

        return restaurants.map((restaurant) => {
            const { _id, image, address, name, dishes, rating, short_description, type, long, lat, price } = restaurant;
            console.log(restaurant);

            return (
                <RestaurantByCategoryCard
                    key={_id}
                    id={_id}
                    imgUrl={image}
                    title={name}
                    rating={rating}
                    genre={type.name}
                    address={address}
                    short_description={short_description}
                    dishes={dishes}
                    price={price}
                    long={long}
                    lat={lat}
                />
            )
        })
    }

    const handleNavigateToHome = () => {
        navigation.navigate(Screens.HOME);
    }

    useEffect(() => {
        if (featuredId) {
            apiGetFeaturedCategoriesById(featuredId).then((data) => {
                setRestaurants(data.restaurants)
            })
        } else {
            apiGetRestaurantsByCategory(category).then((data) => {
                setRestaurants(data);
            })
        }
    }, [])

    return (
        <SafeAreaView>
            <View className='flex-row justify-between items-center p-4 bg-white'>
                <TouchableOpacity
                    onPress={handleNavigateToHome}
                >
                    <ArrowLeft color='#00CCBB' size={30} />
                </TouchableOpacity>
                <Text className='font-light text-[#00CCBB] text-lg'>
                    {category || title}
                </Text>
            </View>
            <ScrollView>
                {renderRestaurantsByCategory()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default RestaurantsByCategory;