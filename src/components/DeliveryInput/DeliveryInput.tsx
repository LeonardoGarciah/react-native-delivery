import React from 'react';
import {IInputProps, Input} from "native-base";

interface Props extends IInputProps {

}
const DeliveryInput = (props: Props) => {
    const { ...rest } = props;

    return (
        <Input borderColor='#00CCBB' className='w-full text-sm' {...rest} />
    )
}

export default DeliveryInput;