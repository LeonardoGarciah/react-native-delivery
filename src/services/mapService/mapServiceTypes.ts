import IRestaurant from "../../interfaces/Restaurant";

export type MapServiceTypes = {
    getUserLocation: ((location: any) => Promise<{ success: boolean, response: any}>),

    getDeliveryRoute: ((
        restaurant: IRestaurant,
        location: { latitude: number, longitude: number},
        apiMapsGetDeliveryRoute: any
    ) => Promise<[[number, number]]>)
}