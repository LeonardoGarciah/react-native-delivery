import React, {useLayoutEffect} from 'react';
import {ScrollView, Text, View} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import FeaturedRow from "../components/FeaturedRow/FeaturedRow";

const Home = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

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
                <FeaturedRow
                    id={123}
                    title={"Teste"}
                    dewscription={"Teste"}
                    featuredCategory={"Featured"}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;