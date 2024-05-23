import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.aibeesworld.com',
});

export const fetchBestProducts = async () => {
  try {
    const response = await apiClient.get('/product/main/best');
    console.log(response);
    const result = response.data.result;
    if (result === 'success') {
      return response.data.data.map(item => ({
        ...item,
        src: 'https://static.aibeesworld.com' + item.src,
      }));
    } else {
      console.warn('Failed to fetch the data');
      return [];
    }
  } catch (error) {
    console.error('API 호출 중 오류:', error);
    return [];
  }
};

// export const fetchProductById = async (id) => {
//   try {
//     const response = await apiClient.get(`/product/${id}`);
//     const result = response.data.result;
//     if (result === 'success') {
//       return {
//         ...response.data.data,
//         src: 'https://static.aibeesworld.com' + response.data.data.src,
//       };
//     } else {
//       console.warn('Failed to fetch the data');
//       return null;
//     }
//   } catch (error) {
//     console.error('API 호출 중 오류:', error);
//     return null;
//   }
// };