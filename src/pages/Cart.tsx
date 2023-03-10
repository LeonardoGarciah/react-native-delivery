import React, {useEffect, useMemo, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurant} from '../redux/slices/restaurantSlice';
import {selectCartItems} from '../redux/slices/cartSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {XCircle} from 'phosphor-react-native';
import {urlFor} from '../http/sanity';
import GroupedItem from '../components/Cart/GroupedItem';
import CartFooter from '../components/Cart/CartFooter';
import {Screens} from '../Routes/Routes';
import Colors from '../shared/Colors';

const Cart = () => {
	const navigation = useNavigation();
	const restaurant = useSelector(selectRestaurant);
	const items = useSelector(selectCartItems);

	const groupedItemsInCart = useMemo(() => {
		const groupedItems = items.reduce((results, item) => {
			(results[item.id] = results[item.id] || []).push(item);
			return results;
		}, {});

		return groupedItems;
	}, [items]);

	const handleClose = () => {
		navigation.goBack();
	};

	const renderGroupedItems = () => {
		return Object.entries(groupedItemsInCart).map(([key, items]) => {
			const { name, image, price } = items[0];

			return (
				<GroupedItem
					key={key}
					id={key}
					length={items?.length}
					name={name}
					imgUrl={image}
					price={price}
				/>
			);
		});
	};

	useEffect(() => {
		if (!items.length) {
			navigation.navigate(Screens.HOME);
		}
	}, [items]);

	return (
		<SafeAreaView className='flex-1 bg-white'>
			<View className='flex-1 bg-gray-100'>
				<View className={`p-5 border-b border-[${Colors.primary}] bg-white shadow-xs`}>
					<View>
						<Text className='text-lg font-bold text-center'>Carrinho</Text>
						<Text className='text-center text-gray-400'>{restaurant.title}</Text>
					</View>

					<TouchableOpacity
						onPress={handleClose}
						className='rounded-full bg-gray-100 absolute top-2 right-4'
					>
						<XCircle color={Colors.primary} size={50} />
					</TouchableOpacity>
				</View>

				<View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
					<Image
						className='h-7 w-7 bg-gray-300 p-4 rounded-full'
						source={{
							uri: 'https://links.papareact.com/wru',
						}}
					/>
					<Text className='flex-1'>Entrega entre 10-20 min</Text>
					<TouchableOpacity>
						<Text className="text-primary">Trocar</Text>
					</TouchableOpacity>
				</View>

				<ScrollView className='divide-y divide-gray-200'>
					{renderGroupedItems()}
				</ScrollView>

				<CartFooter />
			</View>
		</SafeAreaView>
	);
};

export default Cart;