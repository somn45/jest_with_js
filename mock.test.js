import { forEach } from './mock';

const mockCallback = jest.fn((x) => 42 + x); // 모의 함수의 생성
const myMock = jest.fn();
console.log(myMock()); // undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock()); // 10, 'x', true, true

forEach([0, 1], mockCallback);

test('모의 함수가 두 번 호출 됩니다', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

test('함수에 대한 첫 번째 호출의 첫 번째 인자는 0 이었음', () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
});

test('함수에 대한 두 번째 호출의 첫 번째 인자는 1 이었음', () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test('함수에 대한 첫 번째 호출의 반환 된 값은 42 이었음', () => {
  expect(mockCallback.mock.results[0].value).toBe(42);
});
