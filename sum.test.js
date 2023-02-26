/*
- toBeNull은 null에만 일치한다.
- toBeUndefined는 undefined에만 일치한다.
- toBeDefined는 undefined 외의 모든 것에 일치한다.
- toBeTruthy는 true로 취급하는 모든 것에 일치한다.
- toBeFalsy는 false로 취급하는 모든 것에 일치한다.
*/

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).toBeNull(); // test failed
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
