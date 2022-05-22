const fetchProduct = require('../async.js');

describe('async test', () => {
  // then chaining
  it('the data is water product info', () => {
    return fetchProduct().then((data) => {
      expect(data).toEqual({ item: 'water', price: 2500 });
    });
  });
  it('async resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'water',
      price: 2500,
    });
  });
  // catch promise rejects
  it('the data error', () => {
    return fetchProduct('error').catch((data) => {
      expect(data).toBe('network error');
    });
  });
  it('async rejects', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });

  // async/await
  it('the data is water product info', async () => {
    const data = await fetchProduct();
    expect(data).toEqual({ item: 'water', price: 2500 });
  });
  // it('the data will be network error', async () => {
  //   const data = await fetchProduct('error');
  //   expect(data).rejects.toBe('network error');
  // });
});
