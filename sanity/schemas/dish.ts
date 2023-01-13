import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Prato',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Descrição pequena',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      title: 'Preço',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Imagem do prato',
      type: 'image',
    }),
  ],
})
