/**
 * mock 과 stub의 차이점은
 * stub은 실제 외부 모듈이 가지는 인터페이스 구조를 그대로 구현한 것
 * mock은 jest mocking 함수로 가짜로 구현한 것
 *
 * 상황에 따라 알맞은 것을 잘 사용하면 된다
 */

class StubProductClient {
  async fetchItems() {
    return [
      { name: 'a', available: true },
      { name: 'b', available: true },
      { name: 'c', available: false },
      { name: 'd', available: true },
    ];
  }
}

module.exports = StubProductClient;
