import axios from 'axios';

/* DEFAULTS SETTINGS */
axios.defaults.baseURL = 'http://6788c3e3d2a8.ngrok.io/v1';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'kL9Q5CZfvuYcN3n0udZnuwjrdZ8YNmGxX4AWb78iQjt42Ap0sZkJ7sO2Q1CyO8G7';

const getCategory = () => {
  return axios
    .get(`/generic/category/`)
    .then(response => response.results)
    .catch(error => error);
};

const getCategoryById = id => {
  return axios
    .get(`/generic/category/${id}/`)
    .then(response => response.data)
    .catch(error => error);
};

const getMarket = () => {
  return axios
    .get(`/market/product_list`)
    .then(response => response.results)
    .catch(error => error);
}

// const getCategory = () =>
//   fetch(`/generic/category/`)
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//       throw new Error('not found');
//     })
//     .then(data => data.results)
//     .catch(err => {
//       throw err;
//     });


// const getCategoryById = (id) =>
//   fetch(`/generic/category/${id}/`)
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//       throw new Error('not found');
//     })
//     .then(data => data.data)
//     .catch(err => {
//       throw err;
//     });


export default {
  getCategory,
  getCategoryById,
  getMarket,
};
