
export default interface IRestaurant {
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: string[];
    long: number;
    lat: number;
}