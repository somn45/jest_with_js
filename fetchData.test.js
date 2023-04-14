import { add, fetchDataWithPromise } from './fetchData';

let user;
let num = 10;

beforeEach(() => (num = 0));

test('0 + 1 = 1', () => {
  num = add(num, 1);
  expect(num).toBe(1);
});

test('0 + 2 = 2', () => {
  num = add(num, 2);
  expect(num).toBe(2);
});

describe('match user data', () => {
  beforeEach(async () => {
    user = await fetchDataWithPromise(1);
  });

  test.only('user id is 1', () => {
    expect(user.id).toEqual(1);
  });

  test('user name is User1', () => {
    expect(user.name).toEqual('User1');
  });

  test('user email is 1@test.com', () => {
    expect(user.email).toEqual('1@test.com');
  });
});
