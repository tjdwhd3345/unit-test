const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

// ProductClient의 의존성을 제외하고 ProductService만 테스트하기 위해 module mocking
jest.mock('../product_client');

describe('ProductService', () => {
  // mocking한 module의 기능도 mock function으로 구현
  const fetchItems = jest.fn(async () => [
    { name: 'a', available: true },
    { name: 'b', available: true },
    { name: 'c', available: false },
    { name: 'd', available: true },
  ]);
  // mocking module, mocking fn을 연결해줌
  ProductClient.mockImplementation(() => {
    return { fetchItems };
  });

  let productService;
  beforeEach(() => {
    productService = new ProductService();
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
