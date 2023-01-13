import React, {useLayoutEffect} from 'react';
import {ScrollView, Text, View} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";

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
                className='bg-gray-300'
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                <Categories />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;