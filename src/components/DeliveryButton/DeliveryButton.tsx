import React from 'react';
import {Button, IButtonProps} from "native-base";

interface Props extends  IButtonProps {

}
const DeliveryButton = (props: Props) => {
    const { children, ...rest } = props;

    return (
        <Button className='bg-primary active:bg-[#02b0a1]' {...rest} >{children}</Button>
    )
}

export default DeliveryButton;