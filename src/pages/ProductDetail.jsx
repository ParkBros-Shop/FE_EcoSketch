import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
// import { fetchBestProductsById } from '/src/api/productAPI.js';

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchBestProductsById(id),
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price) + '원';
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="border border-gray-300 rounded-lg p-4 m-4">
        <img src={data.src} alt={data.description} className="w-full h-auto rounded-lg" />
        <h2 className="text-2xl font-semibold mt-4">{data.product_name}</h2>
        <p className="text-gray-700 mt-2">{data.description}</p>
        <p className="text-lg font-bold mt-2">{formatPrice(data.prices)}</p>
      </div>
    </div>
  );
};

export default ProductDetail;