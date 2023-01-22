import {MapServiceTypes} from './mapServiceTypes';
import IRestaurant from '../../interfaces/Restaurant';

const mapService: MapServiceTypes = {
	async getUserLocation(
		location: Location
	) {
		const { status } = await location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			return {
				success: false,
				response: 'Permission to access location was denied'
			};
		}

		const locationResponse = await location.getCurrentPositionAsync({});
		return {
			success: false,
			response: locationResponse
		};
	},

	async getDeliveryRoute(restaurant: IRestaurant, location, apiMapsGetDeliveryRoute) {
		console.log(location);
		const response = await apiMapsGetDeliveryRoute([
			[location.longitude, location.latitude],
			[restaurant.long, restaurant.lat],
		]);

		const waypoints = response.data.routes[0].legs[0].steps.flatMap((step) => {
			return step.intersections.map((intersection) => {
				return intersection.location;
			});
		});

		return waypoints;
	}
};

export default mapService;