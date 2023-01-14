import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import Dish from "../../interfaces/Dish";
import CurrencyFormat from 'react-currency-format';
import {urlFor} from "../../http/sanity";
import Currency from "../../utils/Currency";
import {MinusCircle, PlusCircle} from "phosphor-react-native";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart, selectCartItems, selectCartItemsWithId} from "../../redux/slices/cartSlice";
import DeliveryImage from "../DeliveryImage/DeliveryImage";
interface Props extends Dish{
    id: string;
    description: string;
}
const DishRow = (props: Props) => {
    const { id, name, image, description, price} = props;

    const [isPressed, setIsPressed] = useState(false);

    const dispatch = useDispatch();

    const items = useSelector(state => selectCartItemsWithId(state,id));

    const togglePressed = () => {
        setIsPressed(!isPressed);
    }

    const addItemToCart = () => {
        dispatch(addToCart({ id, name, image, description, price  }))
    }

    const removeItemFromCart = () => {
        if (!items.length) {
            return;
        }

        dispatch(removeFromCart({ id }));
    }

    return (
        <>
            <TouchableOpacity
                onPress={togglePressed}
                className={`bg-white border p-4 border-gray-200 ${
                    isPressed && 'border-b-0'}`}
            >
                <View className='flex-row'>
                   <View className='flex-1 pr-2'>
                       <Text className='text-lg mb-1'>{name}</Text>
                       <Text className='text-gray-400'>{description}</Text>
                       <Text className='text-gray-400 mt-2'>
                           {Currency.currencyFormat(price)}
                       </Text>
                   </View>

                    <View>
                        <DeliveryImage
                            className='h-20 w-20 bg-gray-300 p-4'
                            url={image}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View className='bg-white px-4'>
                    <View className='flex-row items-center space-x-2 pb-2'>
                        <TouchableOpacity
                            disabled={!items.length}
                            onPress={removeItemFromCart}
                        >
                            <MinusCircle
                                color={items.length > 0 ? "#00CCBB" : 'gray'}
                                size={40}
                            />
                        </TouchableOpacity>

                        <Text>{items.length}</Text>

                        <TouchableOpacity
                            onPress={addItemToCart}
                        >
                            <PlusCircle
                                color="#00CCBB"
                                size={40}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )
            }
        </>
    )
}

export default DishRow;
