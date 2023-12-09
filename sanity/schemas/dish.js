import {defineField, defineType} from 'sanity'

export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Pice of the dish in GBP',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imae',
      type: 'image',
      title: 'Image of the Dish',
    },
  ],
}
