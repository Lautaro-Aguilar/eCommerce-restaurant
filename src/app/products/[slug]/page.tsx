import React from 'react';

type ProductDetailProps = {
  params: {
    slug: string;
  };
};

function ProductDetail({ params: { slug } }: ProductDetailProps) {
  console.log(slug);
  return <div>{slug}</div>;
}

export default ProductDetail;
