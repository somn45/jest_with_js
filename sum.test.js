// 매쳐(matcher)의 사용법
test('2 + 2의 결과는 4입니다.', () => {
  expect(2 + 2).toBe(4);
});

// toEquals의 사용법
test('객체의 값 비교', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
