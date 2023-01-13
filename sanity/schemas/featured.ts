import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Novos menus',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Novos menu nome',
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
      name: 'restaurants',
      title: 'Restaurantes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'restaurant'}]}]
    }),
  ],
})
