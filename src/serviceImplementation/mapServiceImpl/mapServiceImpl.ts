import {MapServiceImplTypes} from './mapServiceImplTypes';
import * as Location from 'expo-location';
import mapService from '../../services/mapService/mapService';
import IRestaurant from '../../interfaces/Restaurant';
import {apiMapsGetDeliveryRoute} from '../../http/mapsGet';

const mapServiceImpl: MapServiceImplTypes = {
	async getUserLocation() {
		const response = await mapService.getUserLocation(Location);
		return response;
	},

	async getDeliveryRoute(restaurant: IRestaurant, location: { longitude: number, latitude: number}) {
		const response = await mapService.getDeliveryRoute(restaurant, location, apiMapsGetDeliveryRoute);
		return response;
	}
};

export default mapServiceImpl;