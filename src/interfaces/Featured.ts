import IRestaurant from './Restaurant';
import {ICategory} from './Category';

export interface IFeatured {
    _id: string;
    name: string;
    short_description: string;
    restaurants: IRestaurant[];
    type: ICategory
}
