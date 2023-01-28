import React, {useEffect, useLayoutEffect, useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Categories from '../components/Categories/Categories';
import FeaturedRow from '../components/FeaturedRow/FeaturedRow';
import sanityClient from '../http/sanity';
import {apiGetFeaturedCategories} from '../http/httpGet';
import {IFeatured} from '../interfaces/Featured';

const Home = () => {
	const [featuredCategories, setFeaturedCategories] = useState<IFeatured[]>([]);
	const [refreshing, setRefreshing] = React.useState(false);

	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const findFeaturedCategories = () => {
		apiGetFeaturedCategories().then((data) => {
			setFeaturedCategories(data);
		});
	};

	useEffect(() => {
		findFeaturedCategories();
	}, []);


	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		findFeaturedCategories();
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);

	const renderFeaturedRows = () => {
		return featuredCategories.map((featuredCategory) => {
			const { _id, name, short_description } = featuredCategory;

			return (
				<FeaturedRow
					key={_id}
					id={_id}
					title={name}
					description={short_description}
					featuredCategory={'Featured'}
				/>
			);
		});
	};

	return (
		<SafeAreaView className='bg-white pt-4'>
			<Header />
			<Search />

			<ScrollView
				className='bg-gray-100'
				contentContainerStyle={{
					paddingBottom: 100
				}}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<Categories />

				{renderFeaturedRows()}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;