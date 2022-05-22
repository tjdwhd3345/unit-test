const check = require('../check');

describe('check', () => {
  let onSuccess;
  let onFail;
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('predicate가 true면 onSuccess가 한번은 호출되어야 함', () => {
    check(() => true, onSuccess, onFail);
    // 위 실행에 따라
    expect(onSuccess.mock.calls.length).toBe(1); // onSuccess 함수는 1번 호출될 것을 기대한다
    expect(onFail.mock.calls.length).toBe(0); // onFail 함수는 0번 호출될 것을 기대한다
    expect(onSuccess.mock.calls[0][0]).toBe('yes'); // calls의 첫째로 호출된 함수의 첫번째 인자는 'yes'를 기대한다

    // 동일함
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledTimes(0);
    expect(onSuccess).toHaveBeenCalledWith('yes');
  });

  it('predicate가 false면 onFail이 한번은 호출되어야 함', () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledWith('no');
  });
});
