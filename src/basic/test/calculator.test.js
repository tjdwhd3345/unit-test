const Calculator = require('../../calculator.js');

// 여러 테스트를 그룹으로 만들 수 있음
describe('Calculator', () => {
  // 각 테스트 전에 공통적으로 먼저 수행될 부분
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });

  it('inits with 0', () => {
    expect(calc.value).toBe(0);
  });

  it('sets', () => {
    calc.set(10);
    expect(calc.value).toBe(10);
  });

  it('clear', () => {
    calc.set(10);
    calc.clear();
    expect(calc.value).toBe(0);
  });

  it('adds', () => {
    calc.set(1);
    calc.add(3);
    expect(calc.value).toBe(4);
  });

  it('add는 value가 100이 넘으면 에러가 발생해야함.', () => {
    expect(() => {
      calc.add(1000);
    }).toThrow('Value can not be greater than 100');
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      calc.divide(0);
      expect(calc.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      calc.set(1);
      calc.divide(0);
      expect(calc.value).toBe(Infinity);
    });

    it('0 / 1 === 0', () => {
      calc.divide(1);
      expect(calc.value).toBe(0);
    });
  });
});
