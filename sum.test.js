import sum from './sum';

test('1 + 2의 결과값은 3입니다.', () => {
  expect(sum(1, 2)).toBe(3);
});
