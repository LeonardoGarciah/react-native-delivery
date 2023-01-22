import React from 'react';
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../redux/slices/cartSlice';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {ShoppingCart} from 'phosphor-react-native';
import Currency from '../../utils/Currency';
import {Screens} from '../../Routes/Routes';

const CartIcon = () => {
	const items = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	const navigation = useNavigation();

	if (!items.length) {
		return null;
	}
	const handleNavigationToCart = () => {
		navigation.navigate(Screens.CART);
	};

	return (
		<View className='absolute bottom-10 w-full z-50'>
			<TouchableOpacity
				onPress={handleNavigationToCart}
				className='mx-5 bg-primary p-4 rounded-lg flex-row items-center space-x-1'
			>
				<ShoppingCart color='#00CCBB' size={30} />
				<Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length}</Text>
				<Text className='flex-1 text-white font-extrabold text-lg text-center'>Ver carrinho</Text>
				<Text className='text-lg text-white font-extrabold'>
					{Currency.currencyFormat(cartTotal)}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CartIcon;