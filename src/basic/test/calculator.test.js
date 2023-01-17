const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });

  it('inits with 0', () => {
    expect(calc.value).toBe(0);
  });

  it('sets', () => {
    calc.set(1);
    expect(calc.value).toBe(1);
  });

  it('clears', () => {
    calc.set(1);
    calc.clear();
    expect(calc.value).toBe(0);
  });

  it('adds', () => {
    calc.add(3);
    expect(calc.value).toBe(3);
  });

  it('throw Error if add value is greater than 100', () => {
    expect(() => calc.add(101)).toThrow('Value can not be greater than 100');
  });

  it('subtracts', () => {
    calc.subtract(20);
    expect(calc.value).toBe(-20);
  });

  it('multiplies', () => {
    calc.set(10);
    calc.multiply(20);
    expect(calc.value).toBe(200);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      calc.divide(0);
      expect(calc.value).toBe(NaN);
    });
    it('0 / 1 === 0', () => {
      calc.divide(1);
      expect(calc.value).toBe(0);
    });
    it('1 / 0 === Infinity', () => {
      calc.set(1);
      calc.divide(0);
      expect(calc.value).toBe(Infinity);
    });
    it('10 / 1 === 10', () => {
      calc.set(10);
      calc.divide(1);
      expect(calc.value).toBe(10);
    });
  });
});
