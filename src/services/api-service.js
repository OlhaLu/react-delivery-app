import axios from 'axios';

/* DEFAULTS SETTINGS */
axios.defaults.baseURL = 'http://6788c3e3d2a8.ngrok.io/v1';
axios.defaults.headers.get['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Authorization'] = 'kL9Q5CZfvuYcN3n0udZnuwjrdZ8YNmGxX4AWb78iQjt42Ap0sZkJ7sO2Q1CyO8G7';

const getCategory = () => {
  return axios
    .get(`/generic/category/`)
    .then(response => response.data.results)
    .catch(error => error);
};

const getCategoryById = id => {
  return axios
    .get(`/market/product_list?category=${id}`)
    .then(response => response.data.results)
    .catch(error => error);
}

const getCategoryByIdAndSearchName = (id, query) => {
  return axios
    .get(`/market/product_list?category=${id}&searchkey=${query}`)
    .then(response => {
      console.log(response.data.results)
      return response.data.results;
    })
    .catch(error => error);
}

export default {
  getCategory,
  getCategoryById,
  getCategoryByIdAndSearchName
};
