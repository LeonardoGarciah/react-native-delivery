import sanityClient from './sanity';
import {IFeatured} from '../interfaces/Featured';
import IRestaurant from '../interfaces/Restaurant';
import {ICategory} from '../interfaces/Category';

export const apiGetFeaturedCategories = async (): Promise<IFeatured> => {
	const response = await sanityClient.fetch(`
            *[_type == "featured"] {
              ...,
              restaurants[]->{
                dishes[]->,
                type->{
                  name
                }
              }
            }
        `);

	return response;
};

export const apiGetFeaturedCategoriesById = async (id: string): Promise<IFeatured> => {
	const response = await sanityClient.fetch(`
            *[_type == "featured" && _id == $id] {
              ...,
              restaurants[]->{
                ...,
                dishes[]->,
                type-> {
                    name
                },
            }
            }[0]
        `, { id });

	return response;
};

export const apiGetCategories = async (): Promise<ICategory> => {
	const response = await sanityClient.fetch(`
            *[_type == "category"]
    `);

	return response;
};

export const apiGetRestaurantsByCategory = async (type: string): Promise<IRestaurant> => {
	const response = await sanityClient.fetch(`
            *[_type == "restaurant" && type->name == $type] {
              ...,
               type->,
               dishes[]->,
            }
    `, { type });

	return response;
};
