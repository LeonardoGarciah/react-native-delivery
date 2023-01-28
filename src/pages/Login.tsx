import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TouchableOpacity, View} from 'react-native';
import DeliveryInput from '../components/DeliveryInput/DeliveryInput';
import DeliveryButton from '../components/DeliveryButton/DeliveryButton';
import userServiceImpl from '../serviceImplementation/userServiceImpl/userServiceImpl';
import {Lightning} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../Routes/Routes';
import feedbackServiceImpl from '../serviceImplementation/feedbackServiceImpl/feedbackServiceImpl';
import {useToast} from 'native-base';
import Colors from "../shared/Colors";

const Login = () => {
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

	const handleSignIn = () => {
		if (!email || !password) {
			return;
		}

		userServiceImpl.signIn(email, password).then((resp) => {
			feedbackServiceImpl.showToast('Entrou com sucesso!', toast);
		}).catch((err) => {
			feedbackServiceImpl.showToast('Email ou senha inválida!', toast);
			console.log(err.code);
		});
	};

	const handleNavigateToRegisterScreen = () => {
		navigation.navigate(Screens.REGISTER_USER);
	};

	return (
		<SafeAreaView className='flex-1'>
			<View className='flex-1 items-center justify-center p-4 space-y-6'>
				<Lightning color={Colors.primary} size={100} />
				<Text className='text-2xl text-primary font-extrabold'>Bem-vindo ao Ninja Delivery</Text>
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
				<TouchableOpacity className='w-full text-primary'>
					<Text>Esqueci minha senha!</Text>
				</TouchableOpacity>
				<DeliveryButton
					onPress={handleSignIn}
					className='w-1/2'
				>
                    Entrar
				</DeliveryButton>
				<DeliveryButton
					onPress={handleNavigateToRegisterScreen}
					className='w-1/2 border-primary border-2 bg-white active:bg-blue-100'
				>
					<Text
						className='text-primary'
					>
                        Registrar-se
					</Text>
				</DeliveryButton>
			</View>
		</SafeAreaView>
	);
};

export default Login;