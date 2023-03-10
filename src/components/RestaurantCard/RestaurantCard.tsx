import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MapPin, Star} from 'phosphor-react-native';
import {urlFor} from '../../http/sanity';
import {useNavigation} from '@react-navigation/native';
import IRestaurant from '../../interfaces/Restaurant';
import {Screens} from '../../Routes/Routes';
import DeliveryImage from '../DeliveryImage/DeliveryImage';
import Colors from '../../shared/Colors';

type Props = IRestaurant

const RestaurantCard = (props: Props) => {
	const {
		address,
		title,
		imgUrl,
		rating,
		genre
	} = props;

	const navigation = useNavigation();

	const navigateToRestaurant = () => {
		navigation.navigate(Screens.RESTAURANT, props);
	};

	return (
		<TouchableOpacity
			onPress={navigateToRestaurant}
			className='bg-white mr-4 shadow'
		>
			<DeliveryImage
				url={imgUrl}
				className='h-36 w-64 rounded-sm'
			/>
			<View className='px-2 pb-4'>
				<Text
					className='font-bold text-lg pt-2'
				>
					{title}
				</Text>
				<View className='flex-row items-center space-x-1'>
					<Star color={Colors.primary} size={22} />
					<Text className='text-xs text-gray-500'>
						<Text className='text-primary'>
							{rating}
						</Text> - {genre}
					</Text>
				</View>

				<View className='flex-row items-center space-x-1'>
					<MapPin color='gray' size={22} />
					<Text className='text-xs text-gray-500'>Endereço - {address}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default RestaurantCard;