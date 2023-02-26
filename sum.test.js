function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compileAndroidCode 함수에서 오류가 발생하나?', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // 정확한 오류 메세지나 정규식을 사용할 수도 있다.
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});
