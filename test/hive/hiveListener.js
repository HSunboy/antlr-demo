// Generated from ./grammar/hello/hive.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by hiveParser.
function hiveListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

hiveListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
hiveListener.prototype.constructor = hiveListener;

// Enter a parse tree produced by hiveParser#singleStatement.
hiveListener.prototype.enterSingleStatement = function(ctx) {
};

// Exit a parse tree produced by hiveParser#singleStatement.
hiveListener.prototype.exitSingleStatement = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showStatement.
hiveListener.prototype.enterShowStatement = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showStatement.
hiveListener.prototype.exitShowStatement = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showDataBases.
hiveListener.prototype.enterShowDataBases = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showDataBases.
hiveListener.prototype.exitShowDataBases = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showTables.
hiveListener.prototype.enterShowTables = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showTables.
hiveListener.prototype.exitShowTables = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showTableExtended.
hiveListener.prototype.enterShowTableExtended = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showTableExtended.
hiveListener.prototype.exitShowTableExtended = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showViews.
hiveListener.prototype.enterShowViews = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showViews.
hiveListener.prototype.exitShowViews = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showPartitions.
hiveListener.prototype.enterShowPartitions = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showPartitions.
hiveListener.prototype.exitShowPartitions = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showTableProperties.
hiveListener.prototype.enterShowTableProperties = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showTableProperties.
hiveListener.prototype.exitShowTableProperties = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showCreateTable.
hiveListener.prototype.enterShowCreateTable = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showCreateTable.
hiveListener.prototype.exitShowCreateTable = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showColumns.
hiveListener.prototype.enterShowColumns = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showColumns.
hiveListener.prototype.exitShowColumns = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showFunctions.
hiveListener.prototype.enterShowFunctions = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showFunctions.
hiveListener.prototype.exitShowFunctions = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showTableLocks.
hiveListener.prototype.enterShowTableLocks = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showTableLocks.
hiveListener.prototype.exitShowTableLocks = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showDatabaseLocks.
hiveListener.prototype.enterShowDatabaseLocks = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showDatabaseLocks.
hiveListener.prototype.exitShowDatabaseLocks = function(ctx) {
};


// Enter a parse tree produced by hiveParser#showConf.
hiveListener.prototype.enterShowConf = function(ctx) {
};

// Exit a parse tree produced by hiveParser#showConf.
hiveListener.prototype.exitShowConf = function(ctx) {
};


// Enter a parse tree produced by hiveParser#partitionSpec.
hiveListener.prototype.enterPartitionSpec = function(ctx) {
};

// Exit a parse tree produced by hiveParser#partitionSpec.
hiveListener.prototype.exitPartitionSpec = function(ctx) {
};


// Enter a parse tree produced by hiveParser#partitionVal.
hiveListener.prototype.enterPartitionVal = function(ctx) {
};

// Exit a parse tree produced by hiveParser#partitionVal.
hiveListener.prototype.exitPartitionVal = function(ctx) {
};


// Enter a parse tree produced by hiveParser#database_name.
hiveListener.prototype.enterDatabase_name = function(ctx) {
};

// Exit a parse tree produced by hiveParser#database_name.
hiveListener.prototype.exitDatabase_name = function(ctx) {
};


// Enter a parse tree produced by hiveParser#table_name.
hiveListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by hiveParser#table_name.
hiveListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by hiveParser#tablePropertyList.
hiveListener.prototype.enterTablePropertyList = function(ctx) {
};

// Exit a parse tree produced by hiveParser#tablePropertyList.
hiveListener.prototype.exitTablePropertyList = function(ctx) {
};


// Enter a parse tree produced by hiveParser#tableProperty.
hiveListener.prototype.enterTableProperty = function(ctx) {
};

// Exit a parse tree produced by hiveParser#tableProperty.
hiveListener.prototype.exitTableProperty = function(ctx) {
};


// Enter a parse tree produced by hiveParser#tablePropertyKey.
hiveListener.prototype.enterTablePropertyKey = function(ctx) {
};

// Exit a parse tree produced by hiveParser#tablePropertyKey.
hiveListener.prototype.exitTablePropertyKey = function(ctx) {
};


// Enter a parse tree produced by hiveParser#configuration_name.
hiveListener.prototype.enterConfiguration_name = function(ctx) {
};

// Exit a parse tree produced by hiveParser#configuration_name.
hiveListener.prototype.exitConfiguration_name = function(ctx) {
};


// Enter a parse tree produced by hiveParser#tablePropertyValue.
hiveListener.prototype.enterTablePropertyValue = function(ctx) {
};

// Exit a parse tree produced by hiveParser#tablePropertyValue.
hiveListener.prototype.exitTablePropertyValue = function(ctx) {
};


// Enter a parse tree produced by hiveParser#nullLiteral.
hiveListener.prototype.enterNullLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#nullLiteral.
hiveListener.prototype.exitNullLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#intervalLiteral.
hiveListener.prototype.enterIntervalLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#intervalLiteral.
hiveListener.prototype.exitIntervalLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#typeConstructor.
hiveListener.prototype.enterTypeConstructor = function(ctx) {
};

// Exit a parse tree produced by hiveParser#typeConstructor.
hiveListener.prototype.exitTypeConstructor = function(ctx) {
};


// Enter a parse tree produced by hiveParser#numericLiteral.
hiveListener.prototype.enterNumericLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#numericLiteral.
hiveListener.prototype.exitNumericLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#booleanLiteral.
hiveListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#booleanLiteral.
hiveListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#stringLiteral.
hiveListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#stringLiteral.
hiveListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#interval.
hiveListener.prototype.enterInterval = function(ctx) {
};

// Exit a parse tree produced by hiveParser#interval.
hiveListener.prototype.exitInterval = function(ctx) {
};


// Enter a parse tree produced by hiveParser#intervalField.
hiveListener.prototype.enterIntervalField = function(ctx) {
};

// Exit a parse tree produced by hiveParser#intervalField.
hiveListener.prototype.exitIntervalField = function(ctx) {
};


// Enter a parse tree produced by hiveParser#intervalValue.
hiveListener.prototype.enterIntervalValue = function(ctx) {
};

// Exit a parse tree produced by hiveParser#intervalValue.
hiveListener.prototype.exitIntervalValue = function(ctx) {
};


// Enter a parse tree produced by hiveParser#decimalLiteral.
hiveListener.prototype.enterDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#decimalLiteral.
hiveListener.prototype.exitDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#integerLiteral.
hiveListener.prototype.enterIntegerLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#integerLiteral.
hiveListener.prototype.exitIntegerLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#bigIntLiteral.
hiveListener.prototype.enterBigIntLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#bigIntLiteral.
hiveListener.prototype.exitBigIntLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#smallIntLiteral.
hiveListener.prototype.enterSmallIntLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#smallIntLiteral.
hiveListener.prototype.exitSmallIntLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#tinyIntLiteral.
hiveListener.prototype.enterTinyIntLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#tinyIntLiteral.
hiveListener.prototype.exitTinyIntLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#doubleLiteral.
hiveListener.prototype.enterDoubleLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#doubleLiteral.
hiveListener.prototype.exitDoubleLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#bigDecimalLiteral.
hiveListener.prototype.enterBigDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by hiveParser#bigDecimalLiteral.
hiveListener.prototype.exitBigDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by hiveParser#booleanValue.
hiveListener.prototype.enterBooleanValue = function(ctx) {
};

// Exit a parse tree produced by hiveParser#booleanValue.
hiveListener.prototype.exitBooleanValue = function(ctx) {
};


// Enter a parse tree produced by hiveParser#identifier.
hiveListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by hiveParser#identifier.
hiveListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by hiveParser#unquotedIdentifier.
hiveListener.prototype.enterUnquotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by hiveParser#unquotedIdentifier.
hiveListener.prototype.exitUnquotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by hiveParser#quotedIdentifierAlternative.
hiveListener.prototype.enterQuotedIdentifierAlternative = function(ctx) {
};

// Exit a parse tree produced by hiveParser#quotedIdentifierAlternative.
hiveListener.prototype.exitQuotedIdentifierAlternative = function(ctx) {
};


// Enter a parse tree produced by hiveParser#variableIdentifier.
hiveListener.prototype.enterVariableIdentifier = function(ctx) {
};

// Exit a parse tree produced by hiveParser#variableIdentifier.
hiveListener.prototype.exitVariableIdentifier = function(ctx) {
};


// Enter a parse tree produced by hiveParser#quotedIdentifier.
hiveListener.prototype.enterQuotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by hiveParser#quotedIdentifier.
hiveListener.prototype.exitQuotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by hiveParser#nonReserved.
hiveListener.prototype.enterNonReserved = function(ctx) {
};

// Exit a parse tree produced by hiveParser#nonReserved.
hiveListener.prototype.exitNonReserved = function(ctx) {
};



exports.hiveListener = hiveListener;