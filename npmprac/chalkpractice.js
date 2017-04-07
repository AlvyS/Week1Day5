var chalk = require("chalk");

var mess = chalk.blue("bye")
var message = chalk.red(mess) + " " + chalk.yellow("World");


// style a string
var message1 = chalk.blue("Hello");

// combine styled and normal strings
var message2 = chalk.blue('Hello') + 'World' + chalk.red('!');

// compose multiple styles using the chainable API
var message3 = chalk.blue.bgRed.bold('Hello world!');

// pass in multiple arguments
var message4 = chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz');

// nest styles
var message5 = chalk.red('Hello', chalk.underline.bgBlue('world') + '!');

console.log(message);
console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);