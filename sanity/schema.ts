import { type SchemaTypeDefinition } from 'sanity';
import { CategorySchema } from './lib/category-schema';
import { GalleryImageSchema } from './lib/gallery-image-schema';
import { ProductSchema } from './lib/product-schema';
import { FeaturedProductsAndCategories } from './lib/top-categories-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    CategorySchema,
    GalleryImageSchema,
    ProductSchema,
    FeaturedProductsAndCategories,
  ],
};
