import React, {useEffect, useLayoutEffect} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeft, CaretRight, CircleWavyQuestion, MapPin, Star} from 'phosphor-react-native';
import Dish from '../interfaces/Dish';
import DishRow from '../components/DishRow/DishRow';
import CartIcon from '../components/CartIcon/CartIcon';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../redux/slices/restaurantSlice';
import DeliveryImage from '../components/DeliveryImage/DeliveryImage';
import Colors from '../shared/Colors';

const Restaurant = () => {
	const { params: {
		id,
		title,
		dishes,
		lat,
		long,
		imgUrl,
		rating,
		genre,
		short_description,
		address
	} } = useRoute();

	const navigation = useNavigation();

	const dispatch = useDispatch();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		});
	}, []);

	const goBack = () => {
		navigation.goBack();
	};

	const renderDishes = () => {
		return dishes.map((dish: Dish) => {
			const { _id, name, short_description, price, image } = dish;

			return (
				<DishRow
					key={_id}
					id={_id}
					name={name}
					description={short_description}
					price={price}
					image={image}
				/>
			);
		});
	};

	useEffect(() => {
		dispatch(setRestaurant({
			id,
			title,
			dishes,
			imgUrl,
			rating,
			genre,
			short_description,
			address,
			long,
			lat
		}));
	}, []);

	return (
		<SafeAreaView className='flex-1'>
			<CartIcon />
			<ScrollView>
				<View className='relative'>
					<DeliveryImage
						url={imgUrl}
						className='w-full h-56 bg-gray-300 p-4'
					/>
					<TouchableOpacity
						onPress={goBack}
						className='absolute top-4 left-4 p-2 bg-gray-100 rounded-full'
					>
						<ArrowLeft size={20} color={Colors.primary} />
					</TouchableOpacity>
				</View>

				<View className='bg-white'>
					<View className='p-4 '>
						<Text className='text-3xl font-bold'>{title}</Text>
						<View className='flex-row space-x-2 my-1'>
							<View className='flex-row items-center space-x-1'>
								<Star color={Colors.primary} size={22} />
								<Text className='text-xs text-gray-500'>
									<Text className='text-primary'>{rating}</Text>
                                    - {genre}
								</Text>
							</View>

							<View className='flex-row items-center space-x-1'>
								<MapPin color='gray' size={22} />
								<Text className='text-xs text-gray-500'>
                                    Endereço - {address}
								</Text>
							</View>

						</View>
						<Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
					</View>

					<TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300 '>
						<CircleWavyQuestion color='gray' size={20}/>
						<Text className='pl-2 flex-1 text-md font-bold'>
                            Tem alergia a algum alimento?
						</Text>
						<CaretRight color={Colors.primary} />
					</TouchableOpacity>
				</View>

				<View className='pb-36'>
					<Text className='px-4 pt-6 mb-3 font-bold text-xl'>
                        Menu
					</Text>
					{renderDishes()}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Restaurant;