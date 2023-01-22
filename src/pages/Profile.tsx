import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ArrowLeft} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import userServiceImpl from '../serviceImplementation/userServiceImpl/userServiceImpl';

const Profile = () => {

	const navigation = useNavigation();

	const goBack = () => {
		navigation.goBack();
	};

	const handleLogout = () => {
		userServiceImpl.logout();
	};

	return (
		<SafeAreaView className='bg-white'>
			<TouchableOpacity
				onPress={goBack}
				className='absolute top-10 left-4 p-2 bg-gray-100 rounded-full bg-primary'
			>
				<ArrowLeft size={20} color="white" />
			</TouchableOpacity>
			<View className='bg-white mt-16 flex-row space-x-5 h-28 items-center'>
				<Image
					source={{
						uri: 'https://links.papareact.com/wru'
					}}
					className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
				/>
				<View className='flex-1'>
					<Text className='text-lg'>
                    Leonardo Garcia
					</Text>
				</View>

				<TouchableOpacity onPress={handleLogout}>
					<Text className='text-primary text-lg mr-5 font-bold'>Sair</Text>
				</TouchableOpacity>
			</View>

		</SafeAreaView>
	);
};

export default Profile;