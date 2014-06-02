//Load our function
var hello = require('../lib/node-package-skeleton');
describe('hello', function () {
    it("Should append \"Hello, \" and \"!\" to a string", function () {
         var input = "world";
         expect(hello(input)).toEqual("Hello, " + input + "!");
    });
});