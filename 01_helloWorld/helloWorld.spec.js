const helloWorld = require('./helloWorld');

//remove the word test
describe('Hello World', function() {
  test('says "Hello, World!!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});