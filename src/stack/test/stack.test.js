// stack test
const Stack = require('../stack');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('초기 데이터의 사이즈는 0', () => {
    expect(stack.size()).toBe(0);
  });

  it('아이템 하나 push', () => {
    stack.push('mo');
    expect(stack.getData()).toEqual(['mo']);
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('throw Error when 데이터 없을 때', () => {
      expect(() => stack.pop()).toThrow('stack is empty');
    });

    it('아이템 하나 pop', () => {
      stack.push('mo');
      stack.push('lee');
      expect(stack.size()).toBe(2);

      const popped = stack.pop();
      expect(stack.size()).toBe(1);
      expect(popped).toEqual('lee');
      stack.pop();
      expect(stack.size()).toBe(0);
    });
  });

  describe('peek', () => {
    it('throw Error when 데이터 없을 때', () => {
      expect(() => stack.peek()).toThrow('stack is empty');
    });

    it('shows last item, but pop 하진 않음', () => {
      stack.push('mo');
      stack.push('lee');
      const peeked = stack.peek();

      expect(peeked).toEqual('lee');
      expect(stack.getData()).toEqual(['mo', 'lee']);
      expect(stack.size()).toBe(2);
    });
  });
});
