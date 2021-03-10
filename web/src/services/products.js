import http from './base-api-service';

const list = () => {
  return http.get('/products')
    .then(response => response.data)
}

const remove = (id) => {
  return http.delete(`/products/${id}`)
    .then(response => Promise.resolve())
}

const create = (product) => {
  return http.post(`/products`, product)
    .then(response => response.data);
}

const service = {
  list,
  remove,
  create
}
export default service;
