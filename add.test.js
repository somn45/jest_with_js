import { add } from './add';

let num = 10;

beforeEach(() => {
  num = 0;
  console.log('before');
});

test('0 + 1 = 1', () => {
  console.log('test 0 + 1');
  num = add(num, 1);
  expect(num).toBe(1);
});

test('0 + 2 = 2', () => {
  console.log('test 0 + 2');
  num = add(num, 2);
  expect(num).toBe(2);
});

afterEach(() => {
  console.log('finish');
});
