import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';
// @ts-ignore
const AwaitingRestaurant = () => {
    return (
        <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
            <Animatable.Image
                source={require("../../assets/loading.gif")}
                animation="slideInUp"
                iterationCount={1}
                className='h-96 w-full'
            />
            <Animatable.Text
                animation='slideInUp'
                iterationCount={1}
                className='text-lg my-10 text-white font-bold text-center'
            >
                Aguardando restaurante aceitar seu pedido...
            </Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color='white' />
        </SafeAreaView>
    )
}

export default AwaitingRestaurant;