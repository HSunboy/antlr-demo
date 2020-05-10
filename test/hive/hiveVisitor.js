// Generated from ./grammar/hello/hive.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by hiveParser.

function hiveVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

hiveVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
hiveVisitor.prototype.constructor = hiveVisitor;

// Visit a parse tree produced by hiveParser#singleStatement.
hiveVisitor.prototype.visitSingleStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showStatement.
hiveVisitor.prototype.visitShowStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showDataBases.
hiveVisitor.prototype.visitShowDataBases = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showTables.
hiveVisitor.prototype.visitShowTables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showTableExtended.
hiveVisitor.prototype.visitShowTableExtended = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showViews.
hiveVisitor.prototype.visitShowViews = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showPartitions.
hiveVisitor.prototype.visitShowPartitions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showTableProperties.
hiveVisitor.prototype.visitShowTableProperties = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showCreateTable.
hiveVisitor.prototype.visitShowCreateTable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showColumns.
hiveVisitor.prototype.visitShowColumns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showFunctions.
hiveVisitor.prototype.visitShowFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showTableLocks.
hiveVisitor.prototype.visitShowTableLocks = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showDatabaseLocks.
hiveVisitor.prototype.visitShowDatabaseLocks = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#showConf.
hiveVisitor.prototype.visitShowConf = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#partitionSpec.
hiveVisitor.prototype.visitPartitionSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#partitionVal.
hiveVisitor.prototype.visitPartitionVal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#database_name.
hiveVisitor.prototype.visitDatabase_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#table_name.
hiveVisitor.prototype.visitTable_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#tablePropertyList.
hiveVisitor.prototype.visitTablePropertyList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#tableProperty.
hiveVisitor.prototype.visitTableProperty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#tablePropertyKey.
hiveVisitor.prototype.visitTablePropertyKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#configuration_name.
hiveVisitor.prototype.visitConfiguration_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#tablePropertyValue.
hiveVisitor.prototype.visitTablePropertyValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#nullLiteral.
hiveVisitor.prototype.visitNullLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#intervalLiteral.
hiveVisitor.prototype.visitIntervalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#typeConstructor.
hiveVisitor.prototype.visitTypeConstructor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#numericLiteral.
hiveVisitor.prototype.visitNumericLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#booleanLiteral.
hiveVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#stringLiteral.
hiveVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#interval.
hiveVisitor.prototype.visitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#intervalField.
hiveVisitor.prototype.visitIntervalField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#intervalValue.
hiveVisitor.prototype.visitIntervalValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#decimalLiteral.
hiveVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#integerLiteral.
hiveVisitor.prototype.visitIntegerLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#bigIntLiteral.
hiveVisitor.prototype.visitBigIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#smallIntLiteral.
hiveVisitor.prototype.visitSmallIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#tinyIntLiteral.
hiveVisitor.prototype.visitTinyIntLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#doubleLiteral.
hiveVisitor.prototype.visitDoubleLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#bigDecimalLiteral.
hiveVisitor.prototype.visitBigDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#booleanValue.
hiveVisitor.prototype.visitBooleanValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#identifier.
hiveVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#unquotedIdentifier.
hiveVisitor.prototype.visitUnquotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#quotedIdentifierAlternative.
hiveVisitor.prototype.visitQuotedIdentifierAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#variableIdentifier.
hiveVisitor.prototype.visitVariableIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#quotedIdentifier.
hiveVisitor.prototype.visitQuotedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hiveParser#nonReserved.
hiveVisitor.prototype.visitNonReserved = function(ctx) {
  return this.visitChildren(ctx);
};



exports.hiveVisitor = hiveVisitor;