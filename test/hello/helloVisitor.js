// Generated from ./grammar/hello/hello.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by helloParser.

function helloVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

helloVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
helloVisitor.prototype.constructor = helloVisitor;

// Visit a parse tree produced by helloParser#showDataBases.
helloVisitor.prototype.visitShowDataBases = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by helloParser#showTables.
helloVisitor.prototype.visitShowTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by helloParser#database_name.
helloVisitor.prototype.visitDatabase_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by helloParser#identifier.
helloVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by helloParser#unquotedIdentifier.
helloVisitor.prototype.visitUnquotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by helloParser#quotedIdentifierAlternative.
helloVisitor.prototype.visitQuotedIdentifierAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by helloParser#quotedIdentifier.
helloVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by helloParser#nonReserved.
helloVisitor.prototype.visitNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};



exports.helloVisitor = helloVisitor;