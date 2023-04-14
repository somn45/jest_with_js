import { fetchData, fetchDataWithPromise } from './fetchData';

let user;
beforeAll(async () => {
  user = await fetchDataWithPromise(1);
});

test('user id is 1', () => {
  expect(user.id).toEqual(1);
});

test('user name is User1', () => {
  expect(user.name).toEqual('User1');
});

test('user email is 1@test.com', () => {
  expect(user.email).toEqual('1@test.com');
});
