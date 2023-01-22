import IRestaurant from '../../interfaces/Restaurant';

export type MapServiceImplTypes = {
    getUserLocation: (() => Promise<{ success: boolean, response: any}>),

    getDeliveryRoute: ((restaurant: IRestaurant, location: { latitude: number, longitude: number}) => Promise<[[number, number]]>)
}