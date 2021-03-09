import http from './base-api-service';

const list = () => {
  return http.get('/products')
    .then(response => response.data)
}

const remove = (id) => {
  return http.delete(`/products/${id}`)
    .then(response => Promise.resolve())
}

const service = {
  list,
  remove
}
export default service;
