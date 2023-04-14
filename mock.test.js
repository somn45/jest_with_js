/*
// 모의 모듈 

import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  return Users.all().then(data => expect(data).toEqual(users));
});
*/

jest.mock('./sum');
import foo from './sum';

test('모의 함수 foo의 실행', () => {
  const num = foo(1, 2);
  expect(num).toBe(num);
});

foo.mockImplementation(() => 42);

test('mockImplementation으로 재 정의된 foo의 실행', () => {
  const num = foo();
  expect(num).toBe(42);
});
