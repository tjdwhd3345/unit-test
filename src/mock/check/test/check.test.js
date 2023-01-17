const { check } = require('../check.js');

describe('check', () => {
  let onSuccess, onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('predicate가 함수가 아니거나 없으면 throw Error', () => {
    expect(() => check()).toThrow();
  });

  it('predicate가 true를 반환하면 onSuccess가 실행됨', () => {
    const predicate = () => true;
    check(predicate, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledTimes(0);
    expect(onSuccess).toHaveBeenCalledWith('yes');
  });

  it('predicate가 false를 반환하면 onFail이 실행됨', () => {
    const predicate = () => false;
    check(predicate, onSuccess, onFail);

    // expect(onFail.mock.calls.length).toBe(1);
    // expect(onSuccess.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledWith('no');
  });
});
