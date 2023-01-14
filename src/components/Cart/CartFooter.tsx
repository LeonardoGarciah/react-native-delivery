import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import {selectCartTotal} from "../../redux/slices/cartSlice";
import Currency from "../../utils/Currency";

const CartFooter = () => {
    const cartTotal = useSelector(selectCartTotal);

    return (
        <View className='p-5 bg-white mt-5 space-y-4'>
            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Subtotal</Text>
                <Text className='text-gray-400'>
                    {Currency.currencyFormat(cartTotal)}
                </Text>
            </View>

            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Valor de entrega</Text>
                <Text className='text-gray-400'>
                    {Currency.currencyFormat(5)}
                </Text>
            </View>

            <View className='flex-row justify-between'>
                <Text >Total do pedido</Text>
                <Text className='font-extrabold'>
                    {Currency.currencyFormat(cartTotal + 5)}
                </Text>
            </View>

            <TouchableOpacity
                className='rounded-lg bg-[#00CCBB] p-4'
            >
                <Text className='text-center text-white text-lg font-bold'>
                    Realizar pedido
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartFooter;