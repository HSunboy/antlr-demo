const antlr4 = require("antlr4");
const helloLexer = require("../parser/hello/grammar/helloLexer").helloLexer;
const helloParser = require("../parser/hello/grammar/helloParser").helloParser;
const helloVisitor= require("../parser/hello/grammar/helloVisitor").helloVisitor;

const input = "hello xue"
const chars = new antlr4.InputStream(input);
const lexer = new helloLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new helloParser(tokens);
parser.buildParseTrees = true;
const tree = parser.r();
// const KeyPrinter = function () {
//     sparkListener.call(this); // inherit default listener
//     return this;
// };

// // continue inheriting default listener
// KeyPrinter.prototype = Object.create(sparkListener.prototype);
// KeyPrinter.prototype.constructor = KeyPrinter;

// // override default listener behavior
// KeyPrinter.prototype.enterSingleStatement=function(ctx){
//     console.log(ctx)
// }
// const printer = new KeyPrinter();
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);

/**
 * visitor
 */
// const KeyPrinter = function () {
//     sparkVisitor.call(this); // inherit default listener
//     return this;
// };

// continue inheriting default listener
// KeyPrinter.prototype = Object.create(sparkVisitor.prototype);
// KeyPrinter.prototype.constructor = KeyPrinter;

// // override default listener behavior
// KeyPrinter.prototype.visitSingleStatement=function(ctx){
//     console.log(ctx)
// }
// const printer = new KeyPrinter();
const visitor = new helloVisitor();
console.log(visitor.visit(tree));

// console.log(tree);