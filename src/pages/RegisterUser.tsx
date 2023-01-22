import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TouchableOpacity, View} from 'react-native';
import DeliveryInput from '../components/DeliveryInput/DeliveryInput';
import DeliveryButton from '../components/DeliveryButton/DeliveryButton';
import userServiceImpl from '../serviceImplementation/userServiceImpl/userServiceImpl';
import {ArrowLeft, Lightning} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import feedbackServiceImpl from '../serviceImplementation/feedbackServiceImpl/feedbackServiceImpl';
import {useToast} from 'native-base';
import {Screens} from '../Routes/Routes';

const RegisterUser = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigation = useNavigation();
	const toast = useToast();

	const handleChangeEmail = (event) => {
		setEmail(event.nativeEvent.text);
	};

	const handleChangePassword = (event) => {
		setPassword(event.nativeEvent.text);
	};

	const handleNavigationToHome = () => {
		navigation.navigate(Screens.HOME);
	};

	const handleSignIn = () => {
		if (!email || !password) {
			return;
		}

		userServiceImpl.registerUser(email, password).then((resp) => {
			feedbackServiceImpl.showToast('Registrado com sucesso!', toast);
			handleNavigationToHome();
		}).catch((err) => {
			feedbackServiceImpl.showToast('Email ou senha incorreta!', toast);
		});
	};

	const goBack = () => {
		navigation.goBack();
	};

	return (
		<SafeAreaView className='flex-1'>
			<TouchableOpacity
				onPress={goBack}
				className='absolute top-10 left-4 p-2 bg-gray-100 rounded-full bg-primary'
			>
				<ArrowLeft size={20} color="white" />
			</TouchableOpacity>
			<View className='flex-1 items-center justify-center p-4 space-y-6'>
				<Lightning color='#00CCBB' size={100} />
				<Text className='text-2xl text-primary font-extrabold'>Cadastra-se no Ninja Delivery</Text>
				<View className='w-full'>
					<DeliveryInput
						placeholder="Email"
						onChange={handleChangeEmail}
					/>
				</View>
				<View className='w-full'>
					<DeliveryInput
						placeholder="Senha"
						onChange={handleChangePassword}
						type='password'
					/>
				</View>
				<DeliveryButton
					onPress={handleSignIn}
					className='w-1/2'
				>
                    Cadastrar
				</DeliveryButton>
			</View>
		</SafeAreaView>
	);
};

export default RegisterUser;