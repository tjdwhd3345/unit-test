const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;
  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('available한 아이템만 필터링함', async () => {
    const filteredItems = await productService.fetchAvailableItems();
    expect(filteredItems).toEqual([
      { name: 'a', available: true },
      { name: 'b', available: true },
      { name: 'd', available: true },
    ]);
    expect(filteredItems.length).toBe(3);
  });
});
