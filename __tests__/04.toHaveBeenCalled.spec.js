test("toHaveBeenCalledTimes", () => {
  const mockFn = jest.fn();
  expect(mockFn).toHaveBeenCalledTimes(0);

  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(1);
});

function sayHello() {
  return "👋 Hello";
}
test("Testing a function", () => {
  expect(sayHello()).toEqual("👋 Hello");
  
  expect(sayHello()).toBe("👋 Hello");
});

it('Mocking the function', () => {
  const mockSayHello = jest.fn(() => sayHello());
    
  expect(mockSayHello).toHaveBeenCalledTimes(0);

  mockSayHello();
  
  mockSayHello();

  expect(mockSayHello).toHaveBeenCalledTimes(2);
});





function sayHelloName(name) {
  return "👋 Hello " + name;
}
it('Mocking the function', () => {
  const mockSayHello = jest.fn((name) => sayHelloName(name));
    
  expect(mockSayHello).toHaveBeenCalledTimes(0);
  
  mockSayHello("Youssef");
  
  expect(mockSayHello).toHaveBeenCalledWith("Youssef");
  expect(mockSayHello).toHaveBeenCalledTimes(1);
  expect(mockSayHello('Youssef')).toEqual("👋 Hello Youssef");
});