// Generated from grammar/hello.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by helloParser.

function helloVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

helloVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
helloVisitor.prototype.constructor = helloVisitor;

// Visit a parse tree produced by helloParser#r.
helloVisitor.prototype.visitR = function(ctx) {
  return this.visitChildren(ctx);
};



exports.helloVisitor = helloVisitor;