import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../Routes/Routes';

const AwaitingRestaurant = () => {
	const navigation = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate(Screens.DELIVERY);
		}, 5000);
	}, []);

	return (
		<SafeAreaView className='bg-primary flex-1 justify-center items-center'>
			<Animatable.Image
				source={require('../../assets/loading.gif')}
				animation="slideInUp"
				iterationCount={1}
				className='h-96 w-full'
			/>
			<Animatable.Text
				animation='slideInUp'
				iterationCount={1}
				className='text-lg my-10 text-white font-bold text-center'
			>
                Aguardando restaurante aceitar seu pedido...
			</Animatable.Text>
			<Progress.Circle size={60} indeterminate={true} color='white' />
		</SafeAreaView>
	);
};

export default AwaitingRestaurant;