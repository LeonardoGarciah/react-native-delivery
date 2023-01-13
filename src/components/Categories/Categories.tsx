import React from 'react';
import {ScrollView} from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {

    const categories = [
        {
            title: "Lanches",
            imgUrl: "https://links.papareact.com/wru",
        },
        {
            title: "Bebidas",
            imgUrl: "https://links.papareact.com/wru",
        },
    ]

    const renderCategories = () => {
        return categories.map((category) => {
            const { imgUrl, title } = category;

            return <CategoryCard imgUrl={imgUrl} title={title} />
        })
    }

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 14,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {renderCategories()}
        </ScrollView>
    )
}

export default Categories;