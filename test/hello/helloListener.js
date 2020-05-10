// Generated from ./grammar/hello/hello.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by helloParser.
function helloListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

helloListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
helloListener.prototype.constructor = helloListener;

// Enter a parse tree produced by helloParser#showDataBases.
helloListener.prototype.enterShowDataBases = function(ctx) {
};

// Exit a parse tree produced by helloParser#showDataBases.
helloListener.prototype.exitShowDataBases = function(ctx) {
};


// Enter a parse tree produced by helloParser#showTables.
helloListener.prototype.enterShowTables = function(ctx) {
};

// Exit a parse tree produced by helloParser#showTables.
helloListener.prototype.exitShowTables = function(ctx) {
};


// Enter a parse tree produced by helloParser#database_name.
helloListener.prototype.enterDatabase_name = function(ctx) {
};

// Exit a parse tree produced by helloParser#database_name.
helloListener.prototype.exitDatabase_name = function(ctx) {
};


// Enter a parse tree produced by helloParser#identifier.
helloListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by helloParser#identifier.
helloListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by helloParser#unquotedIdentifier.
helloListener.prototype.enterUnquotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by helloParser#unquotedIdentifier.
helloListener.prototype.exitUnquotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by helloParser#quotedIdentifierAlternative.
helloListener.prototype.enterQuotedIdentifierAlternative = function(ctx) {
};

// Exit a parse tree produced by helloParser#quotedIdentifierAlternative.
helloListener.prototype.exitQuotedIdentifierAlternative = function(ctx) {
};


// Enter a parse tree produced by helloParser#quotedIdentifier.
helloListener.prototype.enterQuotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by helloParser#quotedIdentifier.
helloListener.prototype.exitQuotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by helloParser#nonReserved.
helloListener.prototype.enterNonReserved = function(ctx) {
};

// Exit a parse tree produced by helloParser#nonReserved.
helloListener.prototype.exitNonReserved = function(ctx) {
};



exports.helloListener = helloListener;