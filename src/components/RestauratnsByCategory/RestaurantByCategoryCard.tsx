import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DeliveryImage from '../DeliveryImage/DeliveryImage';
import Currency from '../../utils/Currency';
import {MapPin, Star} from 'phosphor-react-native';
import IRestaurant from '../../interfaces/Restaurant';
import {Screens} from '../../Routes/Routes';
import {useNavigation} from '@react-navigation/native';

type Props = IRestaurant
const RestaurantByCategoryCard = (props: Props) => {
	const {title, rating, genre, address, imgUrl} = props;

	const navigation = useNavigation();

	const navigateToRestaurant = () => {
		navigation.navigate(Screens.RESTAURANT, props);
	};

	return (
		<TouchableOpacity
			onPress={navigateToRestaurant}
			className={'bg-white border p-4 border-gray-200'}
		>
			<View className='flex-row'>
				<View className='flex-1 pr-2'>
					<Text className='text-lg mb-1'>{title}</Text>
					<View className='flex-row items-center space-x-1'>
						<Star color='green' size={22} />
						<Text className='text-xs text-gray-500'>
							<Text className='text-green-500'>
								{rating}
							</Text> - {genre}
						</Text>
					</View>
					<View className='flex-row items-center space-x-1'>
						<MapPin color='gray' size={22} />
						<Text className='text-xs text-gray-500'>Endereço - {address}</Text>
					</View>
				</View>

				<View>
					<DeliveryImage
						className='h-20 w-20 bg-gray-300 p-4'
						url={imgUrl}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default RestaurantByCategoryCard;