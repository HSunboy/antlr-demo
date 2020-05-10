const antlr4 = require("antlr4");
const helloLexer = require("./hello/helloLexer").helloLexer;
const helloParser = require("./hello/helloParser").helloParser;
const helloVisitor= require("./hello/helloVisitor").helloVisitor;

const input = "show databases like "
const chars = new antlr4.InputStream(input.toUpperCase());
const lexer = new helloLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new helloParser(tokens);
parser.buildParseTrees = true;
const tree = parser.showDataBases();
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
class KeyPrinter extends helloVisitor {
    visitShowDataBases (ctx) {
        // const start = ctx.start.start;
        // const end = ctx.stop && ctx.stop.stop;
        // let t = new antlr4.Interval(start, end);
        // console.log(t);
    }
}
const printer = new KeyPrinter();
console.log(printer.visit(tree));

// console.log(tree);