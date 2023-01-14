import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import DeliveryImage from "../DeliveryImage/DeliveryImage";
import Currency from "../../utils/Currency";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../redux/slices/cartSlice";

interface Props{
    id: string;
    length: number;
    name: string;
    imgUrl: string;
    price: number;
}
const GroupedItem = (props: Props) => {
    const {length, id, imgUrl, name, price} = props;

    const dispatch = useDispatch();
    const removeItemFrontCart = () => {
        dispatch(removeFromCart({ id: id }))
    }

    return (
        <View key={id} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
            <Text className='text-[#00CCBB]'>{length} x</Text>
            <DeliveryImage
                url={imgUrl}
                className='h-12 w-12 rounded-full'
            />
            <Text className='flex-1'>{name}</Text>

            <Text className='text-gray-600'>
                {Currency.currencyFormat(price)}
            </Text>

            <TouchableOpacity>
                <Text
                    className='text-[#00CCBB] text-xs'
                    onPress={removeItemFrontCart}
                >
                    Remover
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default GroupedItem;