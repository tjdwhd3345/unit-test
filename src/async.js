function fetchProduct(message) {
  if (message === 'error') {
    return Promise.reject('network error');
  }
  return Promise.resolve({ item: 'water', price: 2500 });
}

module.exports = fetchProduct;
