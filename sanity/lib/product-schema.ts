import { Rule } from '@sanity/types';

export const ProductSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of Product',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      validation: (Rule: Rule) => [
        Rule.required().min(40).error('Min 40 characters is required'),
        Rule.max(110).error('Max 110 characters'),
      ],
      type: 'text',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'galleryImage' }],
      options: {
        maxLength: 3,
      },
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'object',
      fields: [
        {
          name: 'rate',
          title: 'Rate',
          type: 'number',
        },
        {
          name: 'count',
          title: 'Count',
          type: 'number',
        },
      ],
    },
  ],
};
