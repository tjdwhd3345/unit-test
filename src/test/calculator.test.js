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

  it('adds', () => {
    calc.add(3);
    expect(calc.value).toBe(3);
  });
});
