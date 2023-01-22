import Dish from './Dish';
import {ICategory} from './Category';

export default interface IRestaurant {
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: Dish[];
    long: number;
    lat: number;
    type: ICategory;
}
