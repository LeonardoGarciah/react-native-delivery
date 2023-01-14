import React from 'react';
import Home from "../pages/Home";
import Restaurant from "../pages/Restaurant";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Cart from "../pages/Cart";
import AwaitingRestaurant from "../pages/AwaitingRestaurant";

const Stack = createNativeStackNavigator();

export enum Screens {
    HOME = "Home",
    RESTAURANT = "Restaurant",
    CART = "Cart",
    AWAITING_RESTAURANT = "AwaitingRestaurant",
}
const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Restaurant" component={Restaurant} />
            <Stack.Screen name="Cart" component={Cart}
                options={{presentation: 'modal', headerShown: false}}
            />
            <Stack.Screen name="AwaitingRestaurant" component={AwaitingRestaurant}
                options={{
                    presentation: 'fullScreenModal',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default Routes;