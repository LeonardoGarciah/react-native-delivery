import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurante',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do restaurante',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Pequena descrição',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude do restaurante',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude do restaurante',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Endereço do restaurante',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Avaliação do restaurante (1-5)',
      type: 'number',
      validation: (Rule) => Rule.required()
          .min(1)
          .max(5)
          .error("Insira um valor entre 1 e 5")
    }),
    defineField({
      name: 'type',
      title: 'Categoria',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: "category"}]
    }),
    defineField({
      name: 'dishes',
      title: 'Pratos',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [{ type: "reference", to: [{ type: "dish"}]}]
    }),
  ],

})
