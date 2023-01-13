import React from 'react';
import {Image, Text, View} from "react-native";
import {CaretDown, UserCircle} from "phosphor-react-native";

const Header = ( ) => {
    return (
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                className='h-6 w-6 bg-gray-300 p-4 rounded-full'
            />

            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'> Delivery now!</Text>
                <Text className='font-bold text-xl'>
                    Current Location!
                    <CaretDown size={20} color='#00CCBB'/>
                </Text>
            </View>
            <UserCircle size={32} color='#00CCBB' />
        </View>
    )
}

export default Header;