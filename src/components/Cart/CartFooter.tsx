import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import {selectCartTotal} from "../../redux/slices/cartSlice";
import Currency from "../../utils/Currency";
import {useNavigation} from "@react-navigation/native";
import {Screens} from "../../Routes/Routes";

const CartFooter = () => {
    const cartTotal = useSelector(selectCartTotal);

    const navigation = useNavigation();
    const handleNavigateToAwaitingRestaurant = () => {
        navigation.navigate(Screens.AWAITING_RESTAURANT)
    }

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
                onPress={handleNavigateToAwaitingRestaurant}
                className='rounded-lg bg-primary p-4'
            >
                <Text className='text-center text-white text-lg font-bold'>
                    Realizar pedido
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartFooter;