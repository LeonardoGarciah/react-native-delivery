import React from 'react';
import {Image} from 'react-native';
import {urlFor} from '../../http/sanity';

interface Props{
    url: string;
}
const DeliveryImage = (props: Props) => {
	const { url, ...rest } = props;

	return (
		<Image
			source={{
				uri: urlFor(url).url()
			}}
			{...rest}
		/>
	);
};

export default DeliveryImage;