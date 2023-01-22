import React from 'react';
import {TextInput, View} from 'react-native';
import {FadersHorizontal, MagnifyingGlass} from 'phosphor-react-native';

const Search = () => {
	return (
		<View className='flex-row items-center space-x-2 pb-2 mx-4'>
			<View className='flex-row flex-1 space-x-2 bg-gray-200 p-2'>
				<MagnifyingGlass color='gray' size={20} />
				<TextInput
					placeholder='Restaurantes e cozinhas'
					keyboardType='default'
				/>
			</View>

			<FadersHorizontal color='#00CCBB' />
		</View>
	);
};

export default Search;