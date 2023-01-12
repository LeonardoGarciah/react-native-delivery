import React, {useLayoutEffect} from 'react';
import {Text, View} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'TESTING'
        })
    }, [])

    return (
        <Text className='text-red-300'>Teste</Text>
    )
}

export default Home;