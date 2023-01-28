import React from 'react';
import {IInputProps, Input} from 'native-base';
import Colors from '../../shared/Colors';

type Props = IInputProps
const DeliveryInput = (props: Props) => {
	const { ...rest } = props;

	return (
		<Input borderColor={Colors.primary} className='w-full text-sm' {...rest} />
	);
};

export default DeliveryInput;