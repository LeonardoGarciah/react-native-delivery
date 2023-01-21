import React, {useEffect, useState} from 'react';
import Home from "../pages/Home";
import Restaurant from "../pages/Restaurant";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Cart from "../pages/Cart";
import AwaitingRestaurant from "../pages/AwaitingRestaurant";
import Delivery from "../pages/Delivery";
import RestaurantsByCategory from "../pages/RestaurantsByCategory";
import Login from "../pages/Login";
import RegisterUser from "../pages/RegisterUser";
import {auth} from "../lib/firebase";
import firebase from "firebase/compat";
import User = firebase.User;
import Profile from "../pages/Profile";

const Stack = createNativeStackNavigator();

export enum Screens {
    HOME = "Home",
    RESTAURANT = "Restaurant",
    CART = "Cart",
    AWAITING_RESTAURANT = "AwaitingRestaurant",
    DELIVERY = "Delivery",
    RESTAURANT_BY_CATEGORY = "RestaurantByCategory",
    LOGIN = "Login",
    REGISTER_USER = "Register",
    PROFILE = "Profile",
}
const Routes = () => {
    const [ user, setUser ] = useState<User>();

    useEffect( () => {
        const subscribe = auth
            .onAuthStateChanged(response =>{
                setUser(response)
            });

        return subscribe;
    },[])

    const authorizedRoute = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="Cart" component={Cart}
                    options={{presentation: 'modal', headerShown: false}}
                />
                <Stack.Screen name="Profile" component={Profile}
                    options={{presentation: 'modal', headerShown: false}}
                />
                <Stack.Screen name="AwaitingRestaurant" component={AwaitingRestaurant}
                    options={{
                      presentation: 'fullScreenModal',
                      headerShown: false,
                    }}
                />
                <Stack.Screen name="Delivery" component={Delivery}
                    options={{
                    headerShown: false,
                    }}
                />
                <Stack.Screen name="RestaurantByCategory" component={RestaurantsByCategory}
                    options={{
                      headerShown: false,
                    }}
                />
            </Stack.Navigator>
        )
    }

    const unauthorizedRoutes = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}
                              options={{headerShown: false}}
                />
                <Stack.Screen name="Register" component={RegisterUser}
                              options={{headerShown: false}}
                />

            </Stack.Navigator>
        )
    }

    return user ? authorizedRoute() : unauthorizedRoutes();
}

export default Routes;