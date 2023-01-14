import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ScrollView, Text, View} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import FeaturedRow from "../components/FeaturedRow/FeaturedRow";
import sanityClient from "../../sanity";

const Home = () => {
    const [featuredCategories, setFeaturedCategories] = useState([]);

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "featured"] {
              ...,
              restaurants[]->{
                dishes[]->,
                type->{
                  name
                }
              }
            }
        `).then((data) => {
            setFeaturedCategories(data);
        })
    }, [])

    const renderFeaturedRows = () => {
        return featuredCategories.map((featuredCategory) => {
            const { _id, name, short_description } = featuredCategory;

            return (
                <FeaturedRow
                    key={_id}
                    id={_id}
                    title={name}
                    description={short_description}
                    featuredCategory={"Featured"}
                />
            )
        })
    }

    return (
        <SafeAreaView className='bg-white pt-4'>
            <Header />
            <Search />

            <ScrollView
                className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                <Categories />

                {renderFeaturedRows()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;