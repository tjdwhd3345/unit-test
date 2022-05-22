const ProductClient = require('../product_client');
const ProductService = require('../product_service_no_di');
/**
 * ProductService안에서 ProductClient 를 사용하는데 이는 모듈간에 의존성이 있는 것이다.
 * ProductService를 테스트하는 테스트코드에서 의존성을 배제하고 순수히 ProductService에 대해 테스트하기 위해 jest에게 mock을 알린다
 * 또, fetchItems라는 함수도 mock함수로 만들고 테스트를 한다.
 * 이렇게하면 ProductClient를 의존하지만 ProductClient가 네트워크통신을 성공/실패 여부와 관계없이 ProductService를 테스트할 수 있다
 */
jest.mock('../product_client');

describe('ProductService', () => {
  // mock함수
  const fetchMockItems = jest.fn(async () => [
    { items: 'water', available: true },
    { item: 'coke', available: false },
    { item: 'juice', available: true },
  ]);
  // ProductClient 객체의 fetchItems 함수를 테스트코드안의 mock함수인 fetchMockItems 연결시켜 줌
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchMockItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('가능한 아이템만 필터링 해야한다', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(2);
    expect(items).toEqual([
      { items: 'water', available: true },
      { item: 'juice', available: true },
    ]);
  });
});
