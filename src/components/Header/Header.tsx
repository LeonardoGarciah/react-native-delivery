import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CaretDown, UserCircle} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../Routes/Routes';
import Colors from '../../shared/Colors';

const Header = ( ) => {

	const navigation = useNavigation();

	const handleGoToProfile = () => {
		navigation.navigate(Screens.PROFILE);
	};

	return (
		<View className='flex-row pb-3 items-center mx-4 space-x-2 px-2'>
			<Image
				source={{
					uri: 'https://links.papareact.com/wru'
				}}
				className='h-6 w-6 bg-gray-300 p-4 rounded-full'
			/>

			<View className='flex-1'>
				<Text className='font-bold text-gray-400 text-xs'> Entrega agora!</Text>
				<Text className='font-bold text-xl'>
                    Localização atual
					<CaretDown size={20} color={Colors.primary}/>
				</Text>
			</View>
			<TouchableOpacity onPress={handleGoToProfile}>
				<UserCircle size={32} color={Colors.primary} />
			</TouchableOpacity>
		</View>
	);
};

export default Header;