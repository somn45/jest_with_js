import { fetchData, fetchDataWithPromise } from './fetchData';

test('fetch a user', (done) => {
  fetchData(1, (user) => {
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com',
    });
    done();
  });
});

test('fetch a user with Promise', () => {
  return fetchDataWithPromise(1).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com',
    });
  });
});
