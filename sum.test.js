test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe와 toEqual은 숫자에 대해 동등합니다
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           반올림 오류로 동작하지 않을 것입니다
  expect(value).toBeCloseTo(0.3); // 동작합니다
});

test('team이라는 문자열에는 I가 포함되어 있지 않다.', () => {
  expect('team').not.toMatch(/I/);
});

test('Christoph라는 문자열에는 문자열 stop이 포함되어 있다.', () => {
  expect('Christoph').toMatch(/stop/);
});
