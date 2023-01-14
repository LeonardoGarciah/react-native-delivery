import sanityClient from "./sanity";

export const apiGetFeaturedCategories = async () => {
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
        `)

    return response;
}

export const apiGetFeaturedCategoriesById = async (id: string) => {
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
        `, { id })

    return response;
}

export const apiGetCategories = async () => {
    const response = await sanityClient.fetch(`
            *[_type == "category"]
    `)

    return response;
}

export const apiGetRestaurantsByCategory = async (type: string) => {
    const response = await sanityClient.fetch(`
            *[_type == "restaurant" && type->name == $type] {
              ...,
               type->,
               dishes[]->,
            }
    `, { type })

    return response;
}
