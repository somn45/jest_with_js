export function fetchData(id, cb) {
  setTimeout(() => {
    console.log('wait 0.1 sec');
    const user = {
      id,
      name: `User${id}`,
      email: `${id}@test.com`,
    };
    cb(user);
  }, 100);
}

export function fetchDataWithPromise(id) {
  return new Promise((reslove) => {
    setTimeout(() => {
      console.log('wait 0.1 sec');
      const user = {
        id,
        name: `User${id}`,
        email: `${id}@test.com`,
      };
      reslove(user);
    }, 100);
  });
}

/*
// async-await 구문을 사용하는 경우
test("fetch a user", async () => {
  const user = await fetchUser(2);
  expect(user).toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com",
  });
});
*/
