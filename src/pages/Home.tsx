import React, {useLayoutEffect} from 'react';
import { Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../components/Header/Header";

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
        </SafeAreaView>
    )
}

export default Home;