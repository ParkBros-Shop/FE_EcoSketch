import React, { useEffect, useState } from 'react';
import { fetchBestProducts } from '/src/api/productAPI.js';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Product500g = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['bestProducts'],
    queryFn: fetchBestProducts,
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price) + '원';
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-wrap justify-center">
      {data.map(data => (
      <Link to={`/product/${data.productId}`} key={data.productId}>
        <div key={data.id} className="border border-gray-300 mt-40 rounded-lg p-4 m-4 w-64 text-center">
          <img src={data.firstImage} alt={data.description} className="w-full h-auto rounded-lg" />
          <div className="flex justify-center items-center align-middle mt-4">
                      <h2 className="text-xl font-semibold">{data.productName}</h2><p className="font-bold text-xl ml-2">500g</p>
                  </div>
          <p className="text-gray-700 mt-2">{data.description}</p>
          <p className="text-lg font-bold mt-2">{formatPrice(data.prices)}</p>
        </div>
      </Link>
      ))}
      </div>
  );
};

export default Product500g;