import React, {useEffect, useState} from 'react';
import {ScrollView} from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient, {urlFor} from "../../../sanity";
import * as url from "url";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "category"]
        `).then((data) => {
            setCategories(data)
        })
    }, [])
    const renderCategories = () => {
        return categories.map((category) => {
            const { _id, image, title, name } = category;

            return (
                <CategoryCard
                    key={_id}
                    id={_id}
                    imgUrl={urlFor(image).width(200).url()}
                    title={name}
                />
            )
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