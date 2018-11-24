const antlr4 = require("antlr4");
const sparkLexer = require("./parser/spark/grammar/sparkLexer").sparkLexer;
const sparkParser = require("./parser/spark/grammar/sparkParser").sparkParser;
const sparkListener = require("./parser/spark/grammar/sparkListener").sparkListener;
const sparkVisitor= require("./parser/spark/grammar/sparkVisitor").sparkVisitor;

const input = "SELECT * FROM TBAL"
const chars = new antlr4.InputStream(input);
const lexer = new sparkLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new sparkParser(tokens);
parser.buildParseTrees = true;
const tree = parser.singleStatement();
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
const visitor = new sparkVisitor();
visitor.visit(tree);

// console.log(tree);