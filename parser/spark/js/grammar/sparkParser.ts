// Generated from ./grammar/spark.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { sparkListener } from "./sparkListener";
import { sparkVisitor } from "./sparkVisitor";


export class sparkParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly SELECT = 11;
	public static readonly FROM = 12;
	public static readonly ADD = 13;
	public static readonly AS = 14;
	public static readonly ALL = 15;
	public static readonly ANY = 16;
	public static readonly DISTINCT = 17;
	public static readonly WHERE = 18;
	public static readonly GROUP = 19;
	public static readonly BY = 20;
	public static readonly GROUPING = 21;
	public static readonly SETS = 22;
	public static readonly CUBE = 23;
	public static readonly ROLLUP = 24;
	public static readonly ORDER = 25;
	public static readonly HAVING = 26;
	public static readonly LIMIT = 27;
	public static readonly AT = 28;
	public static readonly OR = 29;
	public static readonly AND = 30;
	public static readonly IN = 31;
	public static readonly NOT = 32;
	public static readonly NO = 33;
	public static readonly EXISTS = 34;
	public static readonly BETWEEN = 35;
	public static readonly LIKE = 36;
	public static readonly RLIKE = 37;
	public static readonly IS = 38;
	public static readonly NULL = 39;
	public static readonly TRUE = 40;
	public static readonly FALSE = 41;
	public static readonly NULLS = 42;
	public static readonly ASC = 43;
	public static readonly DESC = 44;
	public static readonly FOR = 45;
	public static readonly INTERVAL = 46;
	public static readonly CASE = 47;
	public static readonly WHEN = 48;
	public static readonly THEN = 49;
	public static readonly ELSE = 50;
	public static readonly END = 51;
	public static readonly JOIN = 52;
	public static readonly CROSS = 53;
	public static readonly OUTER = 54;
	public static readonly INNER = 55;
	public static readonly LEFT = 56;
	public static readonly SEMI = 57;
	public static readonly RIGHT = 58;
	public static readonly FULL = 59;
	public static readonly NATURAL = 60;
	public static readonly ON = 61;
	public static readonly PIVOT = 62;
	public static readonly LATERAL = 63;
	public static readonly WINDOW = 64;
	public static readonly OVER = 65;
	public static readonly PARTITION = 66;
	public static readonly RANGE = 67;
	public static readonly ROWS = 68;
	public static readonly UNBOUNDED = 69;
	public static readonly PRECEDING = 70;
	public static readonly FOLLOWING = 71;
	public static readonly CURRENT = 72;
	public static readonly FIRST = 73;
	public static readonly AFTER = 74;
	public static readonly LAST = 75;
	public static readonly ROW = 76;
	public static readonly WITH = 77;
	public static readonly VALUES = 78;
	public static readonly CREATE = 79;
	public static readonly TABLE = 80;
	public static readonly DIRECTORY = 81;
	public static readonly VIEW = 82;
	public static readonly REPLACE = 83;
	public static readonly INSERT = 84;
	public static readonly DELETE = 85;
	public static readonly INTO = 86;
	public static readonly DESCRIBE = 87;
	public static readonly EXPLAIN = 88;
	public static readonly FORMAT = 89;
	public static readonly LOGICAL = 90;
	public static readonly CODEGEN = 91;
	public static readonly COST = 92;
	public static readonly CAST = 93;
	public static readonly SHOW = 94;
	public static readonly TABLES = 95;
	public static readonly COLUMNS = 96;
	public static readonly COLUMN = 97;
	public static readonly USE = 98;
	public static readonly PARTITIONS = 99;
	public static readonly FUNCTIONS = 100;
	public static readonly DROP = 101;
	public static readonly UNION = 102;
	public static readonly EXCEPT = 103;
	public static readonly SETMINUS = 104;
	public static readonly INTERSECT = 105;
	public static readonly TO = 106;
	public static readonly TABLESAMPLE = 107;
	public static readonly STRATIFY = 108;
	public static readonly ALTER = 109;
	public static readonly RENAME = 110;
	public static readonly ARRAY = 111;
	public static readonly MAP = 112;
	public static readonly STRUCT = 113;
	public static readonly COMMENT = 114;
	public static readonly SET = 115;
	public static readonly RESET = 116;
	public static readonly DATA = 117;
	public static readonly START = 118;
	public static readonly TRANSACTION = 119;
	public static readonly COMMIT = 120;
	public static readonly ROLLBACK = 121;
	public static readonly MACRO = 122;
	public static readonly IGNORE = 123;
	public static readonly BOTH = 124;
	public static readonly LEADING = 125;
	public static readonly TRAILING = 126;
	public static readonly IF = 127;
	public static readonly POSITION = 128;
	public static readonly EXTRACT = 129;
	public static readonly EQ = 130;
	public static readonly NSEQ = 131;
	public static readonly NEQ = 132;
	public static readonly NEQJ = 133;
	public static readonly LT = 134;
	public static readonly LTE = 135;
	public static readonly GT = 136;
	public static readonly GTE = 137;
	public static readonly PLUS = 138;
	public static readonly MINUS = 139;
	public static readonly ASTERISK = 140;
	public static readonly SLASH = 141;
	public static readonly PERCENT = 142;
	public static readonly DIV = 143;
	public static readonly TILDE = 144;
	public static readonly AMPERSAND = 145;
	public static readonly PIPE = 146;
	public static readonly CONCAT_PIPE = 147;
	public static readonly HAT = 148;
	public static readonly PERCENTLIT = 149;
	public static readonly BUCKET = 150;
	public static readonly OUT = 151;
	public static readonly OF = 152;
	public static readonly SORT = 153;
	public static readonly CLUSTER = 154;
	public static readonly DISTRIBUTE = 155;
	public static readonly OVERWRITE = 156;
	public static readonly TRANSFORM = 157;
	public static readonly REDUCE = 158;
	public static readonly USING = 159;
	public static readonly SERDE = 160;
	public static readonly SERDEPROPERTIES = 161;
	public static readonly RECORDREADER = 162;
	public static readonly RECORDWRITER = 163;
	public static readonly DELIMITED = 164;
	public static readonly FIELDS = 165;
	public static readonly TERMINATED = 166;
	public static readonly COLLECTION = 167;
	public static readonly ITEMS = 168;
	public static readonly KEYS = 169;
	public static readonly ESCAPED = 170;
	public static readonly LINES = 171;
	public static readonly SEPARATED = 172;
	public static readonly FUNCTION = 173;
	public static readonly EXTENDED = 174;
	public static readonly REFRESH = 175;
	public static readonly CLEAR = 176;
	public static readonly CACHE = 177;
	public static readonly UNCACHE = 178;
	public static readonly LAZY = 179;
	public static readonly FORMATTED = 180;
	public static readonly GLOBAL = 181;
	public static readonly TEMPORARY = 182;
	public static readonly OPTIONS = 183;
	public static readonly UNSET = 184;
	public static readonly TBLPROPERTIES = 185;
	public static readonly DBPROPERTIES = 186;
	public static readonly BUCKETS = 187;
	public static readonly SKEWED = 188;
	public static readonly STORED = 189;
	public static readonly DIRECTORIES = 190;
	public static readonly LOCATION = 191;
	public static readonly EXCHANGE = 192;
	public static readonly ARCHIVE = 193;
	public static readonly UNARCHIVE = 194;
	public static readonly FILEFORMAT = 195;
	public static readonly TOUCH = 196;
	public static readonly COMPACT = 197;
	public static readonly CONCATENATE = 198;
	public static readonly CHANGE = 199;
	public static readonly CASCADE = 200;
	public static readonly RESTRICT = 201;
	public static readonly CLUSTERED = 202;
	public static readonly SORTED = 203;
	public static readonly PURGE = 204;
	public static readonly INPUTFORMAT = 205;
	public static readonly OUTPUTFORMAT = 206;
	public static readonly DATABASE = 207;
	public static readonly DATABASES = 208;
	public static readonly DFS = 209;
	public static readonly TRUNCATE = 210;
	public static readonly ANALYZE = 211;
	public static readonly COMPUTE = 212;
	public static readonly LIST = 213;
	public static readonly STATISTICS = 214;
	public static readonly PARTITIONED = 215;
	public static readonly EXTERNAL = 216;
	public static readonly DEFINED = 217;
	public static readonly REVOKE = 218;
	public static readonly GRANT = 219;
	public static readonly LOCK = 220;
	public static readonly UNLOCK = 221;
	public static readonly MSCK = 222;
	public static readonly REPAIR = 223;
	public static readonly RECOVER = 224;
	public static readonly EXPORT = 225;
	public static readonly IMPORT = 226;
	public static readonly LOAD = 227;
	public static readonly ROLE = 228;
	public static readonly ROLES = 229;
	public static readonly COMPACTIONS = 230;
	public static readonly PRINCIPALS = 231;
	public static readonly TRANSACTIONS = 232;
	public static readonly INDEX = 233;
	public static readonly INDEXES = 234;
	public static readonly LOCKS = 235;
	public static readonly OPTION = 236;
	public static readonly ANTI = 237;
	public static readonly LOCAL = 238;
	public static readonly INPATH = 239;
	public static readonly STRING = 240;
	public static readonly BIGINT_LITERAL = 241;
	public static readonly SMALLINT_LITERAL = 242;
	public static readonly TINYINT_LITERAL = 243;
	public static readonly INTEGER_VALUE = 244;
	public static readonly DECIMAL_VALUE = 245;
	public static readonly DOUBLE_LITERAL = 246;
	public static readonly BIGDECIMAL_LITERAL = 247;
	public static readonly IDENTIFIER = 248;
	public static readonly BACKQUOTED_IDENTIFIER = 249;
	public static readonly SIMPLE_COMMENT = 250;
	public static readonly BRACKETED_EMPTY_COMMENT = 251;
	public static readonly BRACKETED_COMMENT = 252;
	public static readonly WS = 253;
	public static readonly UNRECOGNIZED = 254;
	public static readonly RULE_singleStatement = 0;
	public static readonly RULE_singleExpression = 1;
	public static readonly RULE_singleTableIdentifier = 2;
	public static readonly RULE_singleFunctionIdentifier = 3;
	public static readonly RULE_singleDataType = 4;
	public static readonly RULE_singleTableSchema = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_unsupportedHiveNativeCommands = 7;
	public static readonly RULE_createTableHeader = 8;
	public static readonly RULE_bucketSpec = 9;
	public static readonly RULE_skewSpec = 10;
	public static readonly RULE_locationSpec = 11;
	public static readonly RULE_query = 12;
	public static readonly RULE_insertInto = 13;
	public static readonly RULE_partitionSpecLocation = 14;
	public static readonly RULE_partitionSpec = 15;
	public static readonly RULE_partitionVal = 16;
	public static readonly RULE_describeFuncName = 17;
	public static readonly RULE_describeColName = 18;
	public static readonly RULE_ctes = 19;
	public static readonly RULE_namedQuery = 20;
	public static readonly RULE_tableProvider = 21;
	public static readonly RULE_tablePropertyList = 22;
	public static readonly RULE_tableProperty = 23;
	public static readonly RULE_tablePropertyKey = 24;
	public static readonly RULE_tablePropertyValue = 25;
	public static readonly RULE_constantList = 26;
	public static readonly RULE_nestedConstantList = 27;
	public static readonly RULE_createFileFormat = 28;
	public static readonly RULE_fileFormat = 29;
	public static readonly RULE_storageHandler = 30;
	public static readonly RULE_resource = 31;
	public static readonly RULE_queryNoWith = 32;
	public static readonly RULE_queryOrganization = 33;
	public static readonly RULE_multiInsertQueryBody = 34;
	public static readonly RULE_queryTerm = 35;
	public static readonly RULE_queryPrimary = 36;
	public static readonly RULE_sortItem = 37;
	public static readonly RULE_querySpecification = 38;
	public static readonly RULE_hint = 39;
	public static readonly RULE_hintStatement = 40;
	public static readonly RULE_fromClause = 41;
	public static readonly RULE_aggregation = 42;
	public static readonly RULE_groupingSet = 43;
	public static readonly RULE_pivotClause = 44;
	public static readonly RULE_pivotColumn = 45;
	public static readonly RULE_pivotValue = 46;
	public static readonly RULE_lateralView = 47;
	public static readonly RULE_setQuantifier = 48;
	public static readonly RULE_relation = 49;
	public static readonly RULE_joinRelation = 50;
	public static readonly RULE_joinType = 51;
	public static readonly RULE_joinCriteria = 52;
	public static readonly RULE_sample = 53;
	public static readonly RULE_sampleMethod = 54;
	public static readonly RULE_identifierList = 55;
	public static readonly RULE_identifierSeq = 56;
	public static readonly RULE_orderedIdentifierList = 57;
	public static readonly RULE_orderedIdentifier = 58;
	public static readonly RULE_identifierCommentList = 59;
	public static readonly RULE_identifierComment = 60;
	public static readonly RULE_relationPrimary = 61;
	public static readonly RULE_inlineTable = 62;
	public static readonly RULE_functionTable = 63;
	public static readonly RULE_tableAlias = 64;
	public static readonly RULE_rowFormat = 65;
	public static readonly RULE_tableIdentifier = 66;
	public static readonly RULE_functionIdentifier = 67;
	public static readonly RULE_namedExpression = 68;
	public static readonly RULE_namedExpressionSeq = 69;
	public static readonly RULE_expression = 70;
	public static readonly RULE_booleanExpression = 71;
	public static readonly RULE_predicate = 72;
	public static readonly RULE_valueExpression = 73;
	public static readonly RULE_primaryExpression = 74;
	public static readonly RULE_constant = 75;
	public static readonly RULE_comparisonOperator = 76;
	public static readonly RULE_arithmeticOperator = 77;
	public static readonly RULE_predicateOperator = 78;
	public static readonly RULE_booleanValue = 79;
	public static readonly RULE_interval = 80;
	public static readonly RULE_intervalField = 81;
	public static readonly RULE_intervalValue = 82;
	public static readonly RULE_colPosition = 83;
	public static readonly RULE_dataType = 84;
	public static readonly RULE_colTypeList = 85;
	public static readonly RULE_colType = 86;
	public static readonly RULE_complexColTypeList = 87;
	public static readonly RULE_complexColType = 88;
	public static readonly RULE_whenClause = 89;
	public static readonly RULE_windows = 90;
	public static readonly RULE_namedWindow = 91;
	public static readonly RULE_windowSpec = 92;
	public static readonly RULE_windowFrame = 93;
	public static readonly RULE_frameBound = 94;
	public static readonly RULE_qualifiedName = 95;
	public static readonly RULE_identifier = 96;
	public static readonly RULE_strictIdentifier = 97;
	public static readonly RULE_quotedIdentifier = 98;
	public static readonly RULE_number = 99;
	public static readonly RULE_nonReserved = 100;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"singleStatement", "singleExpression", "singleTableIdentifier", "singleFunctionIdentifier", 
		"singleDataType", "singleTableSchema", "statement", "unsupportedHiveNativeCommands", 
		"createTableHeader", "bucketSpec", "skewSpec", "locationSpec", "query", 
		"insertInto", "partitionSpecLocation", "partitionSpec", "partitionVal", 
		"describeFuncName", "describeColName", "ctes", "namedQuery", "tableProvider", 
		"tablePropertyList", "tableProperty", "tablePropertyKey", "tablePropertyValue", 
		"constantList", "nestedConstantList", "createFileFormat", "fileFormat", 
		"storageHandler", "resource", "queryNoWith", "queryOrganization", "multiInsertQueryBody", 
		"queryTerm", "queryPrimary", "sortItem", "querySpecification", "hint", 
		"hintStatement", "fromClause", "aggregation", "groupingSet", "pivotClause", 
		"pivotColumn", "pivotValue", "lateralView", "setQuantifier", "relation", 
		"joinRelation", "joinType", "joinCriteria", "sample", "sampleMethod", 
		"identifierList", "identifierSeq", "orderedIdentifierList", "orderedIdentifier", 
		"identifierCommentList", "identifierComment", "relationPrimary", "inlineTable", 
		"functionTable", "tableAlias", "rowFormat", "tableIdentifier", "functionIdentifier", 
		"namedExpression", "namedExpressionSeq", "expression", "booleanExpression", 
		"predicate", "valueExpression", "primaryExpression", "constant", "comparisonOperator", 
		"arithmeticOperator", "predicateOperator", "booleanValue", "interval", 
		"intervalField", "intervalValue", "colPosition", "dataType", "colTypeList", 
		"colType", "complexColTypeList", "complexColType", "whenClause", "windows", 
		"namedWindow", "windowSpec", "windowFrame", "frameBound", "qualifiedName", 
		"identifier", "strictIdentifier", "quotedIdentifier", "number", "nonReserved",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "','", "'.'", "'/*+'", "'*/'", "'->'", "'['", 
		"']'", "':'", "'SELECT'", "'FROM'", "'ADD'", "'AS'", "'ALL'", "'ANY'", 
		"'DISTINCT'", "'WHERE'", "'GROUP'", "'BY'", "'GROUPING'", "'SETS'", "'CUBE'", 
		"'ROLLUP'", "'ORDER'", "'HAVING'", "'LIMIT'", "'AT'", "'OR'", "'AND'", 
		"'IN'", undefined, "'NO'", "'EXISTS'", "'BETWEEN'", "'LIKE'", undefined, 
		"'IS'", "'NULL'", "'TRUE'", "'FALSE'", "'NULLS'", "'ASC'", "'DESC'", "'FOR'", 
		"'INTERVAL'", "'CASE'", "'WHEN'", "'THEN'", "'ELSE'", "'END'", "'JOIN'", 
		"'CROSS'", "'OUTER'", "'INNER'", "'LEFT'", "'SEMI'", "'RIGHT'", "'FULL'", 
		"'NATURAL'", "'ON'", "'PIVOT'", "'LATERAL'", "'WINDOW'", "'OVER'", "'PARTITION'", 
		"'RANGE'", "'ROWS'", "'UNBOUNDED'", "'PRECEDING'", "'FOLLOWING'", "'CURRENT'", 
		"'FIRST'", "'AFTER'", "'LAST'", "'ROW'", "'WITH'", "'VALUES'", "'CREATE'", 
		"'TABLE'", "'DIRECTORY'", "'VIEW'", "'REPLACE'", "'INSERT'", "'DELETE'", 
		"'INTO'", "'DESCRIBE'", "'EXPLAIN'", "'FORMAT'", "'LOGICAL'", "'CODEGEN'", 
		"'COST'", "'CAST'", "'SHOW'", "'TABLES'", "'COLUMNS'", "'COLUMN'", "'USE'", 
		"'PARTITIONS'", "'FUNCTIONS'", "'DROP'", "'UNION'", "'EXCEPT'", "'MINUS'", 
		"'INTERSECT'", "'TO'", "'TABLESAMPLE'", "'STRATIFY'", "'ALTER'", "'RENAME'", 
		"'ARRAY'", "'MAP'", "'STRUCT'", "'COMMENT'", "'SET'", "'RESET'", "'DATA'", 
		"'START'", "'TRANSACTION'", "'COMMIT'", "'ROLLBACK'", "'MACRO'", "'IGNORE'", 
		"'BOTH'", "'LEADING'", "'TRAILING'", "'IF'", "'POSITION'", "'EXTRACT'", 
		undefined, "'<=>'", "'<>'", "'!='", "'<'", undefined, "'>'", undefined, 
		"'+'", "'-'", "'*'", "'/'", "'%'", "'DIV'", "'~'", "'&'", "'|'", "'||'", 
		"'^'", "'PERCENT'", "'BUCKET'", "'OUT'", "'OF'", "'SORT'", "'CLUSTER'", 
		"'DISTRIBUTE'", "'OVERWRITE'", "'TRANSFORM'", "'REDUCE'", "'USING'", "'SERDE'", 
		"'SERDEPROPERTIES'", "'RECORDREADER'", "'RECORDWRITER'", "'DELIMITED'", 
		"'FIELDS'", "'TERMINATED'", "'COLLECTION'", "'ITEMS'", "'KEYS'", "'ESCAPED'", 
		"'LINES'", "'SEPARATED'", "'FUNCTION'", "'EXTENDED'", "'REFRESH'", "'CLEAR'", 
		"'CACHE'", "'UNCACHE'", "'LAZY'", "'FORMATTED'", "'GLOBAL'", undefined, 
		"'OPTIONS'", "'UNSET'", "'TBLPROPERTIES'", "'DBPROPERTIES'", "'BUCKETS'", 
		"'SKEWED'", "'STORED'", "'DIRECTORIES'", "'LOCATION'", "'EXCHANGE'", "'ARCHIVE'", 
		"'UNARCHIVE'", "'FILEFORMAT'", "'TOUCH'", "'COMPACT'", "'CONCATENATE'", 
		"'CHANGE'", "'CASCADE'", "'RESTRICT'", "'CLUSTERED'", "'SORTED'", "'PURGE'", 
		"'INPUTFORMAT'", "'OUTPUTFORMAT'", undefined, undefined, "'DFS'", "'TRUNCATE'", 
		"'ANALYZE'", "'COMPUTE'", "'LIST'", "'STATISTICS'", "'PARTITIONED'", "'EXTERNAL'", 
		"'DEFINED'", "'REVOKE'", "'GRANT'", "'LOCK'", "'UNLOCK'", "'MSCK'", "'REPAIR'", 
		"'RECOVER'", "'EXPORT'", "'IMPORT'", "'LOAD'", "'ROLE'", "'ROLES'", "'COMPACTIONS'", 
		"'PRINCIPALS'", "'TRANSACTIONS'", "'INDEX'", "'INDEXES'", "'LOCKS'", "'OPTION'", 
		"'ANTI'", "'LOCAL'", "'INPATH'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'/**/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "SELECT", "FROM", "ADD", "AS", 
		"ALL", "ANY", "DISTINCT", "WHERE", "GROUP", "BY", "GROUPING", "SETS", 
		"CUBE", "ROLLUP", "ORDER", "HAVING", "LIMIT", "AT", "OR", "AND", "IN", 
		"NOT", "NO", "EXISTS", "BETWEEN", "LIKE", "RLIKE", "IS", "NULL", "TRUE", 
		"FALSE", "NULLS", "ASC", "DESC", "FOR", "INTERVAL", "CASE", "WHEN", "THEN", 
		"ELSE", "END", "JOIN", "CROSS", "OUTER", "INNER", "LEFT", "SEMI", "RIGHT", 
		"FULL", "NATURAL", "ON", "PIVOT", "LATERAL", "WINDOW", "OVER", "PARTITION", 
		"RANGE", "ROWS", "UNBOUNDED", "PRECEDING", "FOLLOWING", "CURRENT", "FIRST", 
		"AFTER", "LAST", "ROW", "WITH", "VALUES", "CREATE", "TABLE", "DIRECTORY", 
		"VIEW", "REPLACE", "INSERT", "DELETE", "INTO", "DESCRIBE", "EXPLAIN", 
		"FORMAT", "LOGICAL", "CODEGEN", "COST", "CAST", "SHOW", "TABLES", "COLUMNS", 
		"COLUMN", "USE", "PARTITIONS", "FUNCTIONS", "DROP", "UNION", "EXCEPT", 
		"SETMINUS", "INTERSECT", "TO", "TABLESAMPLE", "STRATIFY", "ALTER", "RENAME", 
		"ARRAY", "MAP", "STRUCT", "COMMENT", "SET", "RESET", "DATA", "START", 
		"TRANSACTION", "COMMIT", "ROLLBACK", "MACRO", "IGNORE", "BOTH", "LEADING", 
		"TRAILING", "IF", "POSITION", "EXTRACT", "EQ", "NSEQ", "NEQ", "NEQJ", 
		"LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", 
		"DIV", "TILDE", "AMPERSAND", "PIPE", "CONCAT_PIPE", "HAT", "PERCENTLIT", 
		"BUCKET", "OUT", "OF", "SORT", "CLUSTER", "DISTRIBUTE", "OVERWRITE", "TRANSFORM", 
		"REDUCE", "USING", "SERDE", "SERDEPROPERTIES", "RECORDREADER", "RECORDWRITER", 
		"DELIMITED", "FIELDS", "TERMINATED", "COLLECTION", "ITEMS", "KEYS", "ESCAPED", 
		"LINES", "SEPARATED", "FUNCTION", "EXTENDED", "REFRESH", "CLEAR", "CACHE", 
		"UNCACHE", "LAZY", "FORMATTED", "GLOBAL", "TEMPORARY", "OPTIONS", "UNSET", 
		"TBLPROPERTIES", "DBPROPERTIES", "BUCKETS", "SKEWED", "STORED", "DIRECTORIES", 
		"LOCATION", "EXCHANGE", "ARCHIVE", "UNARCHIVE", "FILEFORMAT", "TOUCH", 
		"COMPACT", "CONCATENATE", "CHANGE", "CASCADE", "RESTRICT", "CLUSTERED", 
		"SORTED", "PURGE", "INPUTFORMAT", "OUTPUTFORMAT", "DATABASE", "DATABASES", 
		"DFS", "TRUNCATE", "ANALYZE", "COMPUTE", "LIST", "STATISTICS", "PARTITIONED", 
		"EXTERNAL", "DEFINED", "REVOKE", "GRANT", "LOCK", "UNLOCK", "MSCK", "REPAIR", 
		"RECOVER", "EXPORT", "IMPORT", "LOAD", "ROLE", "ROLES", "COMPACTIONS", 
		"PRINCIPALS", "TRANSACTIONS", "INDEX", "INDEXES", "LOCKS", "OPTION", "ANTI", 
		"LOCAL", "INPATH", "STRING", "BIGINT_LITERAL", "SMALLINT_LITERAL", "TINYINT_LITERAL", 
		"INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_LITERAL", "BIGDECIMAL_LITERAL", 
		"IDENTIFIER", "BACKQUOTED_IDENTIFIER", "SIMPLE_COMMENT", "BRACKETED_EMPTY_COMMENT", 
		"BRACKETED_COMMENT", "WS", "UNRECOGNIZED",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(sparkParser._LITERAL_NAMES, sparkParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return sparkParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "spark.g4"; }

	// @Override
	public get ruleNames(): string[] { return sparkParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return sparkParser._serializedATN; }


	  /**
	   * When false, INTERSECT is given the greater precedence over the other set
	   * operations (UNION, EXCEPT and MINUS) as per the SQL standard.
	   */
	  this.legacy_setops_precedence_enbled = false;

	  /**
	   * Verify whether current token is a valid decimal token (which contains dot).
	   * Returns true if the character that follows the token is not a digit or letter or underscore.
	   *
	   * For example:
	   * For char stream "2.3", "2." is not a valid decimal token, because it is followed by digit '3'.
	   * For char stream "2.3_", "2.3" is not a valid decimal token, because it is followed by '_'.
	   * For char stream "2.3W", "2.3" is not a valid decimal token, because it is followed by 'W'.
	   * For char stream "12.0D 34.E2+0.12 "  12.0D is a valid decimal token because it is followed
	   * by a space. 34.E2 is a valid decimal token because it is followed by symbol '+'
	   * which is not a digit or letter or underscore.
	   */
	  this.isValidDecimal=function() {
	    var nextChar = _input.LA(1);
	    if (nextChar >= 'A' && nextChar <= 'Z' || nextChar >= '0' && nextChar <= '9' ||
	      nextChar == '_') {
	      return false;
	    } else {
	      return true;
	    }
	  }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(sparkParser._ATN, this);
	}
	// @RuleVersion(0)
	public singleStatement(): SingleStatementContext {
		let _localctx: SingleStatementContext = new SingleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, sparkParser.RULE_singleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.statement();
			this.state = 203;
			this.match(sparkParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleExpression(): SingleExpressionContext {
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, sparkParser.RULE_singleExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.namedExpression();
			this.state = 206;
			this.match(sparkParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleTableIdentifier(): SingleTableIdentifierContext {
		let _localctx: SingleTableIdentifierContext = new SingleTableIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, sparkParser.RULE_singleTableIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.tableIdentifier();
			this.state = 209;
			this.match(sparkParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleFunctionIdentifier(): SingleFunctionIdentifierContext {
		let _localctx: SingleFunctionIdentifierContext = new SingleFunctionIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, sparkParser.RULE_singleFunctionIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.functionIdentifier();
			this.state = 212;
			this.match(sparkParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleDataType(): SingleDataTypeContext {
		let _localctx: SingleDataTypeContext = new SingleDataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, sparkParser.RULE_singleDataType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.dataType();
			this.state = 215;
			this.match(sparkParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleTableSchema(): SingleTableSchemaContext {
		let _localctx: SingleTableSchemaContext = new SingleTableSchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, sparkParser.RULE_singleTableSchema);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.colTypeList();
			this.state = 218;
			this.match(sparkParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, sparkParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 833;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				_localctx = new StatementDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 220;
				this.query();
				}
				break;

			case 2:
				_localctx = new UseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 221;
				this.match(sparkParser.USE);
				this.state = 222;
				(_localctx as UseContext)._db = this.identifier();
				}
				break;

			case 3:
				_localctx = new CreateDatabaseContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 223;
				this.match(sparkParser.CREATE);
				this.state = 224;
				this.match(sparkParser.DATABASE);
				this.state = 228;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 225;
					this.match(sparkParser.IF);
					this.state = 226;
					this.match(sparkParser.NOT);
					this.state = 227;
					this.match(sparkParser.EXISTS);
					}
					break;
				}
				this.state = 230;
				this.identifier();
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.COMMENT) {
					{
					this.state = 231;
					this.match(sparkParser.COMMENT);
					this.state = 232;
					(_localctx as CreateDatabaseContext)._comment = this.match(sparkParser.STRING);
					}
				}

				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.LOCATION) {
					{
					this.state = 235;
					this.locationSpec();
					}
				}

				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.WITH) {
					{
					this.state = 238;
					this.match(sparkParser.WITH);
					this.state = 239;
					this.match(sparkParser.DBPROPERTIES);
					this.state = 240;
					this.tablePropertyList();
					}
				}

				}
				break;

			case 4:
				_localctx = new SetDatabasePropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 243;
				this.match(sparkParser.ALTER);
				this.state = 244;
				this.match(sparkParser.DATABASE);
				this.state = 245;
				this.identifier();
				this.state = 246;
				this.match(sparkParser.SET);
				this.state = 247;
				this.match(sparkParser.DBPROPERTIES);
				this.state = 248;
				this.tablePropertyList();
				}
				break;

			case 5:
				_localctx = new DropDatabaseContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 250;
				this.match(sparkParser.DROP);
				this.state = 251;
				this.match(sparkParser.DATABASE);
				this.state = 254;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 252;
					this.match(sparkParser.IF);
					this.state = 253;
					this.match(sparkParser.EXISTS);
					}
					break;
				}
				this.state = 256;
				this.identifier();
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.CASCADE || _la === sparkParser.RESTRICT) {
					{
					this.state = 257;
					_la = this._input.LA(1);
					if (!(_la === sparkParser.CASCADE || _la === sparkParser.RESTRICT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;

			case 6:
				_localctx = new CreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 260;
				this.createTableHeader();
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.T__0) {
					{
					this.state = 261;
					this.match(sparkParser.T__0);
					this.state = 262;
					this.colTypeList();
					this.state = 263;
					this.match(sparkParser.T__1);
					}
				}

				this.state = 267;
				this.tableProvider();
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.COMMENT || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & ((1 << (sparkParser.OPTIONS - 183)) | (1 << (sparkParser.TBLPROPERTIES - 183)) | (1 << (sparkParser.LOCATION - 183)) | (1 << (sparkParser.CLUSTERED - 183)))) !== 0) || _la === sparkParser.PARTITIONED) {
					{
					this.state = 279;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case sparkParser.OPTIONS:
						{
						{
						this.state = 268;
						this.match(sparkParser.OPTIONS);
						this.state = 269;
						(_localctx as CreateTableContext)._options = this.tablePropertyList();
						}
						}
						break;
					case sparkParser.PARTITIONED:
						{
						{
						this.state = 270;
						this.match(sparkParser.PARTITIONED);
						this.state = 271;
						this.match(sparkParser.BY);
						this.state = 272;
						(_localctx as CreateTableContext)._partitionColumnNames = this.identifierList();
						}
						}
						break;
					case sparkParser.CLUSTERED:
						{
						this.state = 273;
						this.bucketSpec();
						}
						break;
					case sparkParser.LOCATION:
						{
						this.state = 274;
						this.locationSpec();
						}
						break;
					case sparkParser.COMMENT:
						{
						{
						this.state = 275;
						this.match(sparkParser.COMMENT);
						this.state = 276;
						(_localctx as CreateTableContext)._comment = this.match(sparkParser.STRING);
						}
						}
						break;
					case sparkParser.TBLPROPERTIES:
						{
						{
						this.state = 277;
						this.match(sparkParser.TBLPROPERTIES);
						this.state = 278;
						(_localctx as CreateTableContext)._tableProps = this.tablePropertyList();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.T__0) | (1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.AS))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sparkParser.WITH - 77)) | (1 << (sparkParser.VALUES - 77)) | (1 << (sparkParser.TABLE - 77)) | (1 << (sparkParser.INSERT - 77)))) !== 0) || _la === sparkParser.MAP || _la === sparkParser.REDUCE) {
					{
					this.state = 285;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sparkParser.AS) {
						{
						this.state = 284;
						this.match(sparkParser.AS);
						}
					}

					this.state = 287;
					this.query();
					}
				}

				}
				break;

			case 7:
				_localctx = new CreateHiveTableContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 290;
				this.createTableHeader();
				this.state = 295;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 291;
					this.match(sparkParser.T__0);
					this.state = 292;
					(_localctx as CreateHiveTableContext)._columns = this.colTypeList();
					this.state = 293;
					this.match(sparkParser.T__1);
					}
					break;
				}
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.ROW || _la === sparkParser.COMMENT || ((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & ((1 << (sparkParser.TBLPROPERTIES - 185)) | (1 << (sparkParser.SKEWED - 185)) | (1 << (sparkParser.STORED - 185)) | (1 << (sparkParser.LOCATION - 185)) | (1 << (sparkParser.CLUSTERED - 185)) | (1 << (sparkParser.PARTITIONED - 185)))) !== 0)) {
					{
					this.state = 312;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case sparkParser.COMMENT:
						{
						{
						this.state = 297;
						this.match(sparkParser.COMMENT);
						this.state = 298;
						(_localctx as CreateHiveTableContext)._comment = this.match(sparkParser.STRING);
						}
						}
						break;
					case sparkParser.PARTITIONED:
						{
						{
						this.state = 299;
						this.match(sparkParser.PARTITIONED);
						this.state = 300;
						this.match(sparkParser.BY);
						this.state = 301;
						this.match(sparkParser.T__0);
						this.state = 302;
						(_localctx as CreateHiveTableContext)._partitionColumns = this.colTypeList();
						this.state = 303;
						this.match(sparkParser.T__1);
						}
						}
						break;
					case sparkParser.CLUSTERED:
						{
						this.state = 305;
						this.bucketSpec();
						}
						break;
					case sparkParser.SKEWED:
						{
						this.state = 306;
						this.skewSpec();
						}
						break;
					case sparkParser.ROW:
						{
						this.state = 307;
						this.rowFormat();
						}
						break;
					case sparkParser.STORED:
						{
						this.state = 308;
						this.createFileFormat();
						}
						break;
					case sparkParser.LOCATION:
						{
						this.state = 309;
						this.locationSpec();
						}
						break;
					case sparkParser.TBLPROPERTIES:
						{
						{
						this.state = 310;
						this.match(sparkParser.TBLPROPERTIES);
						this.state = 311;
						(_localctx as CreateHiveTableContext)._tableProps = this.tablePropertyList();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 316;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.T__0) | (1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.AS))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sparkParser.WITH - 77)) | (1 << (sparkParser.VALUES - 77)) | (1 << (sparkParser.TABLE - 77)) | (1 << (sparkParser.INSERT - 77)))) !== 0) || _la === sparkParser.MAP || _la === sparkParser.REDUCE) {
					{
					this.state = 318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sparkParser.AS) {
						{
						this.state = 317;
						this.match(sparkParser.AS);
						}
					}

					this.state = 320;
					this.query();
					}
				}

				}
				break;

			case 8:
				_localctx = new CreateTableLikeContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 323;
				this.match(sparkParser.CREATE);
				this.state = 324;
				this.match(sparkParser.TABLE);
				this.state = 328;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 325;
					this.match(sparkParser.IF);
					this.state = 326;
					this.match(sparkParser.NOT);
					this.state = 327;
					this.match(sparkParser.EXISTS);
					}
					break;
				}
				this.state = 330;
				(_localctx as CreateTableLikeContext)._target = this.tableIdentifier();
				this.state = 331;
				this.match(sparkParser.LIKE);
				this.state = 332;
				(_localctx as CreateTableLikeContext)._source = this.tableIdentifier();
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.LOCATION) {
					{
					this.state = 333;
					this.locationSpec();
					}
				}

				}
				break;

			case 9:
				_localctx = new AnalyzeContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 336;
				this.match(sparkParser.ANALYZE);
				this.state = 337;
				this.match(sparkParser.TABLE);
				this.state = 338;
				this.tableIdentifier();
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 339;
					this.partitionSpec();
					}
				}

				this.state = 342;
				this.match(sparkParser.COMPUTE);
				this.state = 343;
				this.match(sparkParser.STATISTICS);
				this.state = 351;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 344;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 345;
					this.match(sparkParser.FOR);
					this.state = 346;
					this.match(sparkParser.COLUMNS);
					this.state = 347;
					this.identifierSeq();
					}
					break;

				case 3:
					{
					this.state = 348;
					this.match(sparkParser.FOR);
					this.state = 349;
					this.match(sparkParser.ALL);
					this.state = 350;
					this.match(sparkParser.COLUMNS);
					}
					break;
				}
				}
				break;

			case 10:
				_localctx = new AddTableColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 353;
				this.match(sparkParser.ALTER);
				this.state = 354;
				this.match(sparkParser.TABLE);
				this.state = 355;
				this.tableIdentifier();
				this.state = 356;
				this.match(sparkParser.ADD);
				this.state = 357;
				this.match(sparkParser.COLUMNS);
				this.state = 358;
				this.match(sparkParser.T__0);
				this.state = 359;
				(_localctx as AddTableColumnsContext)._columns = this.colTypeList();
				this.state = 360;
				this.match(sparkParser.T__1);
				}
				break;

			case 11:
				_localctx = new RenameTableContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 362;
				this.match(sparkParser.ALTER);
				this.state = 363;
				_la = this._input.LA(1);
				if (!(_la === sparkParser.TABLE || _la === sparkParser.VIEW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 364;
				(_localctx as RenameTableContext)._from = this.tableIdentifier();
				this.state = 365;
				this.match(sparkParser.RENAME);
				this.state = 366;
				this.match(sparkParser.TO);
				this.state = 367;
				(_localctx as RenameTableContext)._to = this.tableIdentifier();
				}
				break;

			case 12:
				_localctx = new SetTablePropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 369;
				this.match(sparkParser.ALTER);
				this.state = 370;
				_la = this._input.LA(1);
				if (!(_la === sparkParser.TABLE || _la === sparkParser.VIEW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 371;
				this.tableIdentifier();
				this.state = 372;
				this.match(sparkParser.SET);
				this.state = 373;
				this.match(sparkParser.TBLPROPERTIES);
				this.state = 374;
				this.tablePropertyList();
				}
				break;

			case 13:
				_localctx = new UnsetTablePropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 376;
				this.match(sparkParser.ALTER);
				this.state = 377;
				_la = this._input.LA(1);
				if (!(_la === sparkParser.TABLE || _la === sparkParser.VIEW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 378;
				this.tableIdentifier();
				this.state = 379;
				this.match(sparkParser.UNSET);
				this.state = 380;
				this.match(sparkParser.TBLPROPERTIES);
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.IF) {
					{
					this.state = 381;
					this.match(sparkParser.IF);
					this.state = 382;
					this.match(sparkParser.EXISTS);
					}
				}

				this.state = 385;
				this.tablePropertyList();
				}
				break;

			case 14:
				_localctx = new ChangeColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 387;
				this.match(sparkParser.ALTER);
				this.state = 388;
				this.match(sparkParser.TABLE);
				this.state = 389;
				this.tableIdentifier();
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 390;
					this.partitionSpec();
					}
				}

				this.state = 393;
				this.match(sparkParser.CHANGE);
				this.state = 395;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 394;
					this.match(sparkParser.COLUMN);
					}
					break;
				}
				this.state = 397;
				this.identifier();
				this.state = 398;
				this.colType();
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.FIRST || _la === sparkParser.AFTER) {
					{
					this.state = 399;
					this.colPosition();
					}
				}

				}
				break;

			case 15:
				_localctx = new SetTableSerDeContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 402;
				this.match(sparkParser.ALTER);
				this.state = 403;
				this.match(sparkParser.TABLE);
				this.state = 404;
				this.tableIdentifier();
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 405;
					this.partitionSpec();
					}
				}

				this.state = 408;
				this.match(sparkParser.SET);
				this.state = 409;
				this.match(sparkParser.SERDE);
				this.state = 410;
				this.match(sparkParser.STRING);
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.WITH) {
					{
					this.state = 411;
					this.match(sparkParser.WITH);
					this.state = 412;
					this.match(sparkParser.SERDEPROPERTIES);
					this.state = 413;
					this.tablePropertyList();
					}
				}

				}
				break;

			case 16:
				_localctx = new SetTableSerDeContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 416;
				this.match(sparkParser.ALTER);
				this.state = 417;
				this.match(sparkParser.TABLE);
				this.state = 418;
				this.tableIdentifier();
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 419;
					this.partitionSpec();
					}
				}

				this.state = 422;
				this.match(sparkParser.SET);
				this.state = 423;
				this.match(sparkParser.SERDEPROPERTIES);
				this.state = 424;
				this.tablePropertyList();
				}
				break;

			case 17:
				_localctx = new AddTablePartitionContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 426;
				this.match(sparkParser.ALTER);
				this.state = 427;
				this.match(sparkParser.TABLE);
				this.state = 428;
				this.tableIdentifier();
				this.state = 429;
				this.match(sparkParser.ADD);
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.IF) {
					{
					this.state = 430;
					this.match(sparkParser.IF);
					this.state = 431;
					this.match(sparkParser.NOT);
					this.state = 432;
					this.match(sparkParser.EXISTS);
					}
				}

				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 435;
					this.partitionSpecLocation();
					}
					}
					this.state = 438;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === sparkParser.PARTITION);
				}
				break;

			case 18:
				_localctx = new AddTablePartitionContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 440;
				this.match(sparkParser.ALTER);
				this.state = 441;
				this.match(sparkParser.VIEW);
				this.state = 442;
				this.tableIdentifier();
				this.state = 443;
				this.match(sparkParser.ADD);
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.IF) {
					{
					this.state = 444;
					this.match(sparkParser.IF);
					this.state = 445;
					this.match(sparkParser.NOT);
					this.state = 446;
					this.match(sparkParser.EXISTS);
					}
				}

				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 449;
					this.partitionSpec();
					}
					}
					this.state = 452;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === sparkParser.PARTITION);
				}
				break;

			case 19:
				_localctx = new RenameTablePartitionContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 454;
				this.match(sparkParser.ALTER);
				this.state = 455;
				this.match(sparkParser.TABLE);
				this.state = 456;
				this.tableIdentifier();
				this.state = 457;
				(_localctx as RenameTablePartitionContext)._from = this.partitionSpec();
				this.state = 458;
				this.match(sparkParser.RENAME);
				this.state = 459;
				this.match(sparkParser.TO);
				this.state = 460;
				(_localctx as RenameTablePartitionContext)._to = this.partitionSpec();
				}
				break;

			case 20:
				_localctx = new DropTablePartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 462;
				this.match(sparkParser.ALTER);
				this.state = 463;
				this.match(sparkParser.TABLE);
				this.state = 464;
				this.tableIdentifier();
				this.state = 465;
				this.match(sparkParser.DROP);
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.IF) {
					{
					this.state = 466;
					this.match(sparkParser.IF);
					this.state = 467;
					this.match(sparkParser.EXISTS);
					}
				}

				this.state = 470;
				this.partitionSpec();
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 471;
					this.match(sparkParser.T__2);
					this.state = 472;
					this.partitionSpec();
					}
					}
					this.state = 477;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PURGE) {
					{
					this.state = 478;
					this.match(sparkParser.PURGE);
					}
				}

				}
				break;

			case 21:
				_localctx = new DropTablePartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 481;
				this.match(sparkParser.ALTER);
				this.state = 482;
				this.match(sparkParser.VIEW);
				this.state = 483;
				this.tableIdentifier();
				this.state = 484;
				this.match(sparkParser.DROP);
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.IF) {
					{
					this.state = 485;
					this.match(sparkParser.IF);
					this.state = 486;
					this.match(sparkParser.EXISTS);
					}
				}

				this.state = 489;
				this.partitionSpec();
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 490;
					this.match(sparkParser.T__2);
					this.state = 491;
					this.partitionSpec();
					}
					}
					this.state = 496;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 22:
				_localctx = new SetTableLocationContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 497;
				this.match(sparkParser.ALTER);
				this.state = 498;
				this.match(sparkParser.TABLE);
				this.state = 499;
				this.tableIdentifier();
				this.state = 501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 500;
					this.partitionSpec();
					}
				}

				this.state = 503;
				this.match(sparkParser.SET);
				this.state = 504;
				this.locationSpec();
				}
				break;

			case 23:
				_localctx = new RecoverPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 506;
				this.match(sparkParser.ALTER);
				this.state = 507;
				this.match(sparkParser.TABLE);
				this.state = 508;
				this.tableIdentifier();
				this.state = 509;
				this.match(sparkParser.RECOVER);
				this.state = 510;
				this.match(sparkParser.PARTITIONS);
				}
				break;

			case 24:
				_localctx = new DropTableContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 512;
				this.match(sparkParser.DROP);
				this.state = 513;
				this.match(sparkParser.TABLE);
				this.state = 516;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 514;
					this.match(sparkParser.IF);
					this.state = 515;
					this.match(sparkParser.EXISTS);
					}
					break;
				}
				this.state = 518;
				this.tableIdentifier();
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PURGE) {
					{
					this.state = 519;
					this.match(sparkParser.PURGE);
					}
				}

				}
				break;

			case 25:
				_localctx = new DropTableContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 522;
				this.match(sparkParser.DROP);
				this.state = 523;
				this.match(sparkParser.VIEW);
				this.state = 526;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 524;
					this.match(sparkParser.IF);
					this.state = 525;
					this.match(sparkParser.EXISTS);
					}
					break;
				}
				this.state = 528;
				this.tableIdentifier();
				}
				break;

			case 26:
				_localctx = new CreateViewContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 529;
				this.match(sparkParser.CREATE);
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.OR) {
					{
					this.state = 530;
					this.match(sparkParser.OR);
					this.state = 531;
					this.match(sparkParser.REPLACE);
					}
				}

				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.GLOBAL || _la === sparkParser.TEMPORARY) {
					{
					this.state = 535;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sparkParser.GLOBAL) {
						{
						this.state = 534;
						this.match(sparkParser.GLOBAL);
						}
					}

					this.state = 537;
					this.match(sparkParser.TEMPORARY);
					}
				}

				this.state = 540;
				this.match(sparkParser.VIEW);
				this.state = 544;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 541;
					this.match(sparkParser.IF);
					this.state = 542;
					this.match(sparkParser.NOT);
					this.state = 543;
					this.match(sparkParser.EXISTS);
					}
					break;
				}
				this.state = 546;
				this.tableIdentifier();
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.T__0) {
					{
					this.state = 547;
					this.identifierCommentList();
					}
				}

				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.COMMENT) {
					{
					this.state = 550;
					this.match(sparkParser.COMMENT);
					this.state = 551;
					this.match(sparkParser.STRING);
					}
				}

				this.state = 557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITIONED) {
					{
					this.state = 554;
					this.match(sparkParser.PARTITIONED);
					this.state = 555;
					this.match(sparkParser.ON);
					this.state = 556;
					this.identifierList();
					}
				}

				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.TBLPROPERTIES) {
					{
					this.state = 559;
					this.match(sparkParser.TBLPROPERTIES);
					this.state = 560;
					this.tablePropertyList();
					}
				}

				this.state = 563;
				this.match(sparkParser.AS);
				this.state = 564;
				this.query();
				}
				break;

			case 27:
				_localctx = new CreateTempViewUsingContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 566;
				this.match(sparkParser.CREATE);
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.OR) {
					{
					this.state = 567;
					this.match(sparkParser.OR);
					this.state = 568;
					this.match(sparkParser.REPLACE);
					}
				}

				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.GLOBAL) {
					{
					this.state = 571;
					this.match(sparkParser.GLOBAL);
					}
				}

				this.state = 574;
				this.match(sparkParser.TEMPORARY);
				this.state = 575;
				this.match(sparkParser.VIEW);
				this.state = 576;
				this.tableIdentifier();
				this.state = 581;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.T__0) {
					{
					this.state = 577;
					this.match(sparkParser.T__0);
					this.state = 578;
					this.colTypeList();
					this.state = 579;
					this.match(sparkParser.T__1);
					}
				}

				this.state = 583;
				this.tableProvider();
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.OPTIONS) {
					{
					this.state = 584;
					this.match(sparkParser.OPTIONS);
					this.state = 585;
					this.tablePropertyList();
					}
				}

				}
				break;

			case 28:
				_localctx = new AlterViewQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 588;
				this.match(sparkParser.ALTER);
				this.state = 589;
				this.match(sparkParser.VIEW);
				this.state = 590;
				this.tableIdentifier();
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.AS) {
					{
					this.state = 591;
					this.match(sparkParser.AS);
					}
				}

				this.state = 594;
				this.query();
				}
				break;

			case 29:
				_localctx = new CreateFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 596;
				this.match(sparkParser.CREATE);
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.OR) {
					{
					this.state = 597;
					this.match(sparkParser.OR);
					this.state = 598;
					this.match(sparkParser.REPLACE);
					}
				}

				this.state = 602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.TEMPORARY) {
					{
					this.state = 601;
					this.match(sparkParser.TEMPORARY);
					}
				}

				this.state = 604;
				this.match(sparkParser.FUNCTION);
				this.state = 608;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
				case 1:
					{
					this.state = 605;
					this.match(sparkParser.IF);
					this.state = 606;
					this.match(sparkParser.NOT);
					this.state = 607;
					this.match(sparkParser.EXISTS);
					}
					break;
				}
				this.state = 610;
				this.qualifiedName();
				this.state = 611;
				this.match(sparkParser.AS);
				this.state = 612;
				(_localctx as CreateFunctionContext)._className = this.match(sparkParser.STRING);
				this.state = 622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.USING) {
					{
					this.state = 613;
					this.match(sparkParser.USING);
					this.state = 614;
					this.resource();
					this.state = 619;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sparkParser.T__2) {
						{
						{
						this.state = 615;
						this.match(sparkParser.T__2);
						this.state = 616;
						this.resource();
						}
						}
						this.state = 621;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;

			case 30:
				_localctx = new DropFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 624;
				this.match(sparkParser.DROP);
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.TEMPORARY) {
					{
					this.state = 625;
					this.match(sparkParser.TEMPORARY);
					}
				}

				this.state = 628;
				this.match(sparkParser.FUNCTION);
				this.state = 631;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 629;
					this.match(sparkParser.IF);
					this.state = 630;
					this.match(sparkParser.EXISTS);
					}
					break;
				}
				this.state = 633;
				this.qualifiedName();
				}
				break;

			case 31:
				_localctx = new ExplainContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 634;
				this.match(sparkParser.EXPLAIN);
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (sparkParser.LOGICAL - 90)) | (1 << (sparkParser.CODEGEN - 90)) | (1 << (sparkParser.COST - 90)))) !== 0) || _la === sparkParser.EXTENDED || _la === sparkParser.FORMATTED) {
					{
					this.state = 635;
					_la = this._input.LA(1);
					if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (sparkParser.LOGICAL - 90)) | (1 << (sparkParser.CODEGEN - 90)) | (1 << (sparkParser.COST - 90)))) !== 0) || _la === sparkParser.EXTENDED || _la === sparkParser.FORMATTED)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 638;
				this.statement();
				}
				break;

			case 32:
				_localctx = new ShowTablesContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 639;
				this.match(sparkParser.SHOW);
				this.state = 640;
				this.match(sparkParser.TABLES);
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.FROM || _la === sparkParser.IN) {
					{
					this.state = 641;
					_la = this._input.LA(1);
					if (!(_la === sparkParser.FROM || _la === sparkParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 642;
					(_localctx as ShowTablesContext)._db = this.identifier();
					}
				}

				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.LIKE || _la === sparkParser.STRING) {
					{
					this.state = 646;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sparkParser.LIKE) {
						{
						this.state = 645;
						this.match(sparkParser.LIKE);
						}
					}

					this.state = 648;
					(_localctx as ShowTablesContext)._pattern = this.match(sparkParser.STRING);
					}
				}

				}
				break;

			case 33:
				_localctx = new ShowTableContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 651;
				this.match(sparkParser.SHOW);
				this.state = 652;
				this.match(sparkParser.TABLE);
				this.state = 653;
				this.match(sparkParser.EXTENDED);
				this.state = 656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.FROM || _la === sparkParser.IN) {
					{
					this.state = 654;
					_la = this._input.LA(1);
					if (!(_la === sparkParser.FROM || _la === sparkParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 655;
					(_localctx as ShowTableContext)._db = this.identifier();
					}
				}

				this.state = 658;
				this.match(sparkParser.LIKE);
				this.state = 659;
				(_localctx as ShowTableContext)._pattern = this.match(sparkParser.STRING);
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 660;
					this.partitionSpec();
					}
				}

				}
				break;

			case 34:
				_localctx = new ShowDatabasesContext(_localctx);
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 663;
				this.match(sparkParser.SHOW);
				this.state = 664;
				this.match(sparkParser.DATABASES);
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.LIKE || _la === sparkParser.STRING) {
					{
					this.state = 666;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sparkParser.LIKE) {
						{
						this.state = 665;
						this.match(sparkParser.LIKE);
						}
					}

					this.state = 668;
					(_localctx as ShowDatabasesContext)._pattern = this.match(sparkParser.STRING);
					}
				}

				}
				break;

			case 35:
				_localctx = new ShowTblPropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 671;
				this.match(sparkParser.SHOW);
				this.state = 672;
				this.match(sparkParser.TBLPROPERTIES);
				this.state = 673;
				(_localctx as ShowTblPropertiesContext)._table = this.tableIdentifier();
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.T__0) {
					{
					this.state = 674;
					this.match(sparkParser.T__0);
					this.state = 675;
					(_localctx as ShowTblPropertiesContext)._key = this.tablePropertyKey();
					this.state = 676;
					this.match(sparkParser.T__1);
					}
				}

				}
				break;

			case 36:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 680;
				this.match(sparkParser.SHOW);
				this.state = 681;
				this.match(sparkParser.COLUMNS);
				this.state = 682;
				_la = this._input.LA(1);
				if (!(_la === sparkParser.FROM || _la === sparkParser.IN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 683;
				this.tableIdentifier();
				this.state = 686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.FROM || _la === sparkParser.IN) {
					{
					this.state = 684;
					_la = this._input.LA(1);
					if (!(_la === sparkParser.FROM || _la === sparkParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 685;
					(_localctx as ShowColumnsContext)._db = this.identifier();
					}
				}

				}
				break;

			case 37:
				_localctx = new ShowPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 688;
				this.match(sparkParser.SHOW);
				this.state = 689;
				this.match(sparkParser.PARTITIONS);
				this.state = 690;
				this.tableIdentifier();
				this.state = 692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 691;
					this.partitionSpec();
					}
				}

				}
				break;

			case 38:
				_localctx = new ShowFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 694;
				this.match(sparkParser.SHOW);
				this.state = 696;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
				case 1:
					{
					this.state = 695;
					this.identifier();
					}
					break;
				}
				this.state = 698;
				this.match(sparkParser.FUNCTIONS);
				this.state = 706;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.STRING - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
					{
					this.state = 700;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
					case 1:
						{
						this.state = 699;
						this.match(sparkParser.LIKE);
						}
						break;
					}
					this.state = 704;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case sparkParser.SELECT:
					case sparkParser.FROM:
					case sparkParser.ADD:
					case sparkParser.AS:
					case sparkParser.ALL:
					case sparkParser.ANY:
					case sparkParser.DISTINCT:
					case sparkParser.WHERE:
					case sparkParser.GROUP:
					case sparkParser.BY:
					case sparkParser.GROUPING:
					case sparkParser.SETS:
					case sparkParser.CUBE:
					case sparkParser.ROLLUP:
					case sparkParser.ORDER:
					case sparkParser.HAVING:
					case sparkParser.LIMIT:
					case sparkParser.AT:
					case sparkParser.OR:
					case sparkParser.AND:
					case sparkParser.IN:
					case sparkParser.NOT:
					case sparkParser.NO:
					case sparkParser.EXISTS:
					case sparkParser.BETWEEN:
					case sparkParser.LIKE:
					case sparkParser.RLIKE:
					case sparkParser.IS:
					case sparkParser.NULL:
					case sparkParser.TRUE:
					case sparkParser.FALSE:
					case sparkParser.NULLS:
					case sparkParser.ASC:
					case sparkParser.DESC:
					case sparkParser.FOR:
					case sparkParser.INTERVAL:
					case sparkParser.CASE:
					case sparkParser.WHEN:
					case sparkParser.THEN:
					case sparkParser.ELSE:
					case sparkParser.END:
					case sparkParser.JOIN:
					case sparkParser.CROSS:
					case sparkParser.OUTER:
					case sparkParser.INNER:
					case sparkParser.LEFT:
					case sparkParser.SEMI:
					case sparkParser.RIGHT:
					case sparkParser.FULL:
					case sparkParser.NATURAL:
					case sparkParser.ON:
					case sparkParser.PIVOT:
					case sparkParser.LATERAL:
					case sparkParser.WINDOW:
					case sparkParser.OVER:
					case sparkParser.PARTITION:
					case sparkParser.RANGE:
					case sparkParser.ROWS:
					case sparkParser.UNBOUNDED:
					case sparkParser.PRECEDING:
					case sparkParser.FOLLOWING:
					case sparkParser.CURRENT:
					case sparkParser.FIRST:
					case sparkParser.AFTER:
					case sparkParser.LAST:
					case sparkParser.ROW:
					case sparkParser.WITH:
					case sparkParser.VALUES:
					case sparkParser.CREATE:
					case sparkParser.TABLE:
					case sparkParser.DIRECTORY:
					case sparkParser.VIEW:
					case sparkParser.REPLACE:
					case sparkParser.INSERT:
					case sparkParser.DELETE:
					case sparkParser.INTO:
					case sparkParser.DESCRIBE:
					case sparkParser.EXPLAIN:
					case sparkParser.FORMAT:
					case sparkParser.LOGICAL:
					case sparkParser.CODEGEN:
					case sparkParser.COST:
					case sparkParser.CAST:
					case sparkParser.SHOW:
					case sparkParser.TABLES:
					case sparkParser.COLUMNS:
					case sparkParser.COLUMN:
					case sparkParser.USE:
					case sparkParser.PARTITIONS:
					case sparkParser.FUNCTIONS:
					case sparkParser.DROP:
					case sparkParser.UNION:
					case sparkParser.EXCEPT:
					case sparkParser.SETMINUS:
					case sparkParser.INTERSECT:
					case sparkParser.TO:
					case sparkParser.TABLESAMPLE:
					case sparkParser.STRATIFY:
					case sparkParser.ALTER:
					case sparkParser.RENAME:
					case sparkParser.ARRAY:
					case sparkParser.MAP:
					case sparkParser.STRUCT:
					case sparkParser.COMMENT:
					case sparkParser.SET:
					case sparkParser.RESET:
					case sparkParser.DATA:
					case sparkParser.START:
					case sparkParser.TRANSACTION:
					case sparkParser.COMMIT:
					case sparkParser.ROLLBACK:
					case sparkParser.MACRO:
					case sparkParser.IGNORE:
					case sparkParser.BOTH:
					case sparkParser.LEADING:
					case sparkParser.TRAILING:
					case sparkParser.IF:
					case sparkParser.POSITION:
					case sparkParser.EXTRACT:
					case sparkParser.DIV:
					case sparkParser.PERCENTLIT:
					case sparkParser.BUCKET:
					case sparkParser.OUT:
					case sparkParser.OF:
					case sparkParser.SORT:
					case sparkParser.CLUSTER:
					case sparkParser.DISTRIBUTE:
					case sparkParser.OVERWRITE:
					case sparkParser.TRANSFORM:
					case sparkParser.REDUCE:
					case sparkParser.SERDE:
					case sparkParser.SERDEPROPERTIES:
					case sparkParser.RECORDREADER:
					case sparkParser.RECORDWRITER:
					case sparkParser.DELIMITED:
					case sparkParser.FIELDS:
					case sparkParser.TERMINATED:
					case sparkParser.COLLECTION:
					case sparkParser.ITEMS:
					case sparkParser.KEYS:
					case sparkParser.ESCAPED:
					case sparkParser.LINES:
					case sparkParser.SEPARATED:
					case sparkParser.FUNCTION:
					case sparkParser.EXTENDED:
					case sparkParser.REFRESH:
					case sparkParser.CLEAR:
					case sparkParser.CACHE:
					case sparkParser.UNCACHE:
					case sparkParser.LAZY:
					case sparkParser.FORMATTED:
					case sparkParser.GLOBAL:
					case sparkParser.TEMPORARY:
					case sparkParser.OPTIONS:
					case sparkParser.UNSET:
					case sparkParser.TBLPROPERTIES:
					case sparkParser.DBPROPERTIES:
					case sparkParser.BUCKETS:
					case sparkParser.SKEWED:
					case sparkParser.STORED:
					case sparkParser.DIRECTORIES:
					case sparkParser.LOCATION:
					case sparkParser.EXCHANGE:
					case sparkParser.ARCHIVE:
					case sparkParser.UNARCHIVE:
					case sparkParser.FILEFORMAT:
					case sparkParser.TOUCH:
					case sparkParser.COMPACT:
					case sparkParser.CONCATENATE:
					case sparkParser.CHANGE:
					case sparkParser.CASCADE:
					case sparkParser.RESTRICT:
					case sparkParser.CLUSTERED:
					case sparkParser.SORTED:
					case sparkParser.PURGE:
					case sparkParser.INPUTFORMAT:
					case sparkParser.OUTPUTFORMAT:
					case sparkParser.DATABASE:
					case sparkParser.DATABASES:
					case sparkParser.DFS:
					case sparkParser.TRUNCATE:
					case sparkParser.ANALYZE:
					case sparkParser.COMPUTE:
					case sparkParser.LIST:
					case sparkParser.STATISTICS:
					case sparkParser.PARTITIONED:
					case sparkParser.EXTERNAL:
					case sparkParser.DEFINED:
					case sparkParser.REVOKE:
					case sparkParser.GRANT:
					case sparkParser.LOCK:
					case sparkParser.UNLOCK:
					case sparkParser.MSCK:
					case sparkParser.REPAIR:
					case sparkParser.RECOVER:
					case sparkParser.EXPORT:
					case sparkParser.IMPORT:
					case sparkParser.LOAD:
					case sparkParser.ROLE:
					case sparkParser.ROLES:
					case sparkParser.COMPACTIONS:
					case sparkParser.PRINCIPALS:
					case sparkParser.TRANSACTIONS:
					case sparkParser.INDEX:
					case sparkParser.INDEXES:
					case sparkParser.LOCKS:
					case sparkParser.OPTION:
					case sparkParser.ANTI:
					case sparkParser.LOCAL:
					case sparkParser.INPATH:
					case sparkParser.IDENTIFIER:
					case sparkParser.BACKQUOTED_IDENTIFIER:
						{
						this.state = 702;
						this.qualifiedName();
						}
						break;
					case sparkParser.STRING:
						{
						this.state = 703;
						(_localctx as ShowFunctionsContext)._pattern = this.match(sparkParser.STRING);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				break;

			case 39:
				_localctx = new ShowCreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 708;
				this.match(sparkParser.SHOW);
				this.state = 709;
				this.match(sparkParser.CREATE);
				this.state = 710;
				this.match(sparkParser.TABLE);
				this.state = 711;
				this.tableIdentifier();
				}
				break;

			case 40:
				_localctx = new DescribeFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 712;
				_la = this._input.LA(1);
				if (!(_la === sparkParser.DESC || _la === sparkParser.DESCRIBE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 713;
				this.match(sparkParser.FUNCTION);
				this.state = 715;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 714;
					this.match(sparkParser.EXTENDED);
					}
					break;
				}
				this.state = 717;
				this.describeFuncName();
				}
				break;

			case 41:
				_localctx = new DescribeDatabaseContext(_localctx);
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 718;
				_la = this._input.LA(1);
				if (!(_la === sparkParser.DESC || _la === sparkParser.DESCRIBE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 719;
				this.match(sparkParser.DATABASE);
				this.state = 721;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 720;
					this.match(sparkParser.EXTENDED);
					}
					break;
				}
				this.state = 723;
				this.identifier();
				}
				break;

			case 42:
				_localctx = new DescribeTableContext(_localctx);
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 724;
				_la = this._input.LA(1);
				if (!(_la === sparkParser.DESC || _la === sparkParser.DESCRIBE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 726;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
				case 1:
					{
					this.state = 725;
					this.match(sparkParser.TABLE);
					}
					break;
				}
				this.state = 729;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 728;
					(_localctx as DescribeTableContext)._option = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === sparkParser.EXTENDED || _la === sparkParser.FORMATTED)) {
						(_localctx as DescribeTableContext)._option = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				this.state = 731;
				this.tableIdentifier();
				this.state = 733;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
				case 1:
					{
					this.state = 732;
					this.partitionSpec();
					}
					break;
				}
				this.state = 736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
					{
					this.state = 735;
					this.describeColName();
					}
				}

				}
				break;

			case 43:
				_localctx = new RefreshTableContext(_localctx);
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 738;
				this.match(sparkParser.REFRESH);
				this.state = 739;
				this.match(sparkParser.TABLE);
				this.state = 740;
				this.tableIdentifier();
				}
				break;

			case 44:
				_localctx = new RefreshResourceContext(_localctx);
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 741;
				this.match(sparkParser.REFRESH);
				this.state = 749;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 742;
					this.match(sparkParser.STRING);
					}
					break;

				case 2:
					{
					this.state = 746;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
					while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1 + 1) {
							{
							{
							this.state = 743;
							this.matchWildcard();
							}
							}
						}
						this.state = 748;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
					}
					}
					break;
				}
				}
				break;

			case 45:
				_localctx = new CacheTableContext(_localctx);
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 751;
				this.match(sparkParser.CACHE);
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.LAZY) {
					{
					this.state = 752;
					this.match(sparkParser.LAZY);
					}
				}

				this.state = 755;
				this.match(sparkParser.TABLE);
				this.state = 756;
				this.tableIdentifier();
				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.OPTIONS) {
					{
					this.state = 757;
					this.match(sparkParser.OPTIONS);
					this.state = 758;
					(_localctx as CacheTableContext)._options = this.tablePropertyList();
					}
				}

				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.T__0) | (1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.AS))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (sparkParser.WITH - 77)) | (1 << (sparkParser.VALUES - 77)) | (1 << (sparkParser.TABLE - 77)) | (1 << (sparkParser.INSERT - 77)))) !== 0) || _la === sparkParser.MAP || _la === sparkParser.REDUCE) {
					{
					this.state = 762;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sparkParser.AS) {
						{
						this.state = 761;
						this.match(sparkParser.AS);
						}
					}

					this.state = 764;
					this.query();
					}
				}

				}
				break;

			case 46:
				_localctx = new UncacheTableContext(_localctx);
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 767;
				this.match(sparkParser.UNCACHE);
				this.state = 768;
				this.match(sparkParser.TABLE);
				this.state = 771;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 769;
					this.match(sparkParser.IF);
					this.state = 770;
					this.match(sparkParser.EXISTS);
					}
					break;
				}
				this.state = 773;
				this.tableIdentifier();
				}
				break;

			case 47:
				_localctx = new ClearCacheContext(_localctx);
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 774;
				this.match(sparkParser.CLEAR);
				this.state = 775;
				this.match(sparkParser.CACHE);
				}
				break;

			case 48:
				_localctx = new LoadDataContext(_localctx);
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 776;
				this.match(sparkParser.LOAD);
				this.state = 777;
				this.match(sparkParser.DATA);
				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.LOCAL) {
					{
					this.state = 778;
					this.match(sparkParser.LOCAL);
					}
				}

				this.state = 781;
				this.match(sparkParser.INPATH);
				this.state = 782;
				(_localctx as LoadDataContext)._path = this.match(sparkParser.STRING);
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.OVERWRITE) {
					{
					this.state = 783;
					this.match(sparkParser.OVERWRITE);
					}
				}

				this.state = 786;
				this.match(sparkParser.INTO);
				this.state = 787;
				this.match(sparkParser.TABLE);
				this.state = 788;
				this.tableIdentifier();
				this.state = 790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 789;
					this.partitionSpec();
					}
				}

				}
				break;

			case 49:
				_localctx = new TruncateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 792;
				this.match(sparkParser.TRUNCATE);
				this.state = 793;
				this.match(sparkParser.TABLE);
				this.state = 794;
				this.tableIdentifier();
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 795;
					this.partitionSpec();
					}
				}

				}
				break;

			case 50:
				_localctx = new RepairTableContext(_localctx);
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 798;
				this.match(sparkParser.MSCK);
				this.state = 799;
				this.match(sparkParser.REPAIR);
				this.state = 800;
				this.match(sparkParser.TABLE);
				this.state = 801;
				this.tableIdentifier();
				}
				break;

			case 51:
				_localctx = new ManageResourceContext(_localctx);
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 802;
				(_localctx as ManageResourceContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === sparkParser.ADD || _la === sparkParser.LIST)) {
					(_localctx as ManageResourceContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 803;
				this.identifier();
				this.state = 807;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 804;
						this.matchWildcard();
						}
						}
					}
					this.state = 809;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
				}
				}
				break;

			case 52:
				_localctx = new FailNativeCommandContext(_localctx);
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 810;
				this.match(sparkParser.SET);
				this.state = 811;
				this.match(sparkParser.ROLE);
				this.state = 815;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 812;
						this.matchWildcard();
						}
						}
					}
					this.state = 817;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				}
				}
				break;

			case 53:
				_localctx = new SetConfigurationContext(_localctx);
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 818;
				this.match(sparkParser.SET);
				this.state = 822;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 819;
						this.matchWildcard();
						}
						}
					}
					this.state = 824;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				}
				}
				break;

			case 54:
				_localctx = new ResetConfigurationContext(_localctx);
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 825;
				this.match(sparkParser.RESET);
				}
				break;

			case 55:
				_localctx = new FailNativeCommandContext(_localctx);
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 826;
				this.unsupportedHiveNativeCommands();
				this.state = 830;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 827;
						this.matchWildcard();
						}
						}
					}
					this.state = 832;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unsupportedHiveNativeCommands(): UnsupportedHiveNativeCommandsContext {
		let _localctx: UnsupportedHiveNativeCommandsContext = new UnsupportedHiveNativeCommandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, sparkParser.RULE_unsupportedHiveNativeCommands);
		let _la: number;
		try {
			this.state = 1005;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 835;
				_localctx._kw1 = this.match(sparkParser.CREATE);
				this.state = 836;
				_localctx._kw2 = this.match(sparkParser.ROLE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 837;
				_localctx._kw1 = this.match(sparkParser.DROP);
				this.state = 838;
				_localctx._kw2 = this.match(sparkParser.ROLE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 839;
				_localctx._kw1 = this.match(sparkParser.GRANT);
				this.state = 841;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
				case 1:
					{
					this.state = 840;
					_localctx._kw2 = this.match(sparkParser.ROLE);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 843;
				_localctx._kw1 = this.match(sparkParser.REVOKE);
				this.state = 845;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 844;
					_localctx._kw2 = this.match(sparkParser.ROLE);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 847;
				_localctx._kw1 = this.match(sparkParser.SHOW);
				this.state = 848;
				_localctx._kw2 = this.match(sparkParser.GRANT);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 849;
				_localctx._kw1 = this.match(sparkParser.SHOW);
				this.state = 850;
				_localctx._kw2 = this.match(sparkParser.ROLE);
				this.state = 852;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 851;
					_localctx._kw3 = this.match(sparkParser.GRANT);
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 854;
				_localctx._kw1 = this.match(sparkParser.SHOW);
				this.state = 855;
				_localctx._kw2 = this.match(sparkParser.PRINCIPALS);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 856;
				_localctx._kw1 = this.match(sparkParser.SHOW);
				this.state = 857;
				_localctx._kw2 = this.match(sparkParser.ROLES);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 858;
				_localctx._kw1 = this.match(sparkParser.SHOW);
				this.state = 859;
				_localctx._kw2 = this.match(sparkParser.CURRENT);
				this.state = 860;
				_localctx._kw3 = this.match(sparkParser.ROLES);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 861;
				_localctx._kw1 = this.match(sparkParser.EXPORT);
				this.state = 862;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 863;
				_localctx._kw1 = this.match(sparkParser.IMPORT);
				this.state = 864;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 865;
				_localctx._kw1 = this.match(sparkParser.SHOW);
				this.state = 866;
				_localctx._kw2 = this.match(sparkParser.COMPACTIONS);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 867;
				_localctx._kw1 = this.match(sparkParser.SHOW);
				this.state = 868;
				_localctx._kw2 = this.match(sparkParser.CREATE);
				this.state = 869;
				_localctx._kw3 = this.match(sparkParser.TABLE);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 870;
				_localctx._kw1 = this.match(sparkParser.SHOW);
				this.state = 871;
				_localctx._kw2 = this.match(sparkParser.TRANSACTIONS);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 872;
				_localctx._kw1 = this.match(sparkParser.SHOW);
				this.state = 873;
				_localctx._kw2 = this.match(sparkParser.INDEXES);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 874;
				_localctx._kw1 = this.match(sparkParser.SHOW);
				this.state = 875;
				_localctx._kw2 = this.match(sparkParser.LOCKS);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 876;
				_localctx._kw1 = this.match(sparkParser.CREATE);
				this.state = 877;
				_localctx._kw2 = this.match(sparkParser.INDEX);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 878;
				_localctx._kw1 = this.match(sparkParser.DROP);
				this.state = 879;
				_localctx._kw2 = this.match(sparkParser.INDEX);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 880;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 881;
				_localctx._kw2 = this.match(sparkParser.INDEX);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 882;
				_localctx._kw1 = this.match(sparkParser.LOCK);
				this.state = 883;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 884;
				_localctx._kw1 = this.match(sparkParser.LOCK);
				this.state = 885;
				_localctx._kw2 = this.match(sparkParser.DATABASE);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 886;
				_localctx._kw1 = this.match(sparkParser.UNLOCK);
				this.state = 887;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 888;
				_localctx._kw1 = this.match(sparkParser.UNLOCK);
				this.state = 889;
				_localctx._kw2 = this.match(sparkParser.DATABASE);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 890;
				_localctx._kw1 = this.match(sparkParser.CREATE);
				this.state = 891;
				_localctx._kw2 = this.match(sparkParser.TEMPORARY);
				this.state = 892;
				_localctx._kw3 = this.match(sparkParser.MACRO);
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 893;
				_localctx._kw1 = this.match(sparkParser.DROP);
				this.state = 894;
				_localctx._kw2 = this.match(sparkParser.TEMPORARY);
				this.state = 895;
				_localctx._kw3 = this.match(sparkParser.MACRO);
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 896;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 897;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 898;
				this.tableIdentifier();
				this.state = 899;
				_localctx._kw3 = this.match(sparkParser.NOT);
				this.state = 900;
				_localctx._kw4 = this.match(sparkParser.CLUSTERED);
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 902;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 903;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 904;
				this.tableIdentifier();
				this.state = 905;
				_localctx._kw3 = this.match(sparkParser.CLUSTERED);
				this.state = 906;
				_localctx._kw4 = this.match(sparkParser.BY);
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 908;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 909;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 910;
				this.tableIdentifier();
				this.state = 911;
				_localctx._kw3 = this.match(sparkParser.NOT);
				this.state = 912;
				_localctx._kw4 = this.match(sparkParser.SORTED);
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 914;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 915;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 916;
				this.tableIdentifier();
				this.state = 917;
				_localctx._kw3 = this.match(sparkParser.SKEWED);
				this.state = 918;
				_localctx._kw4 = this.match(sparkParser.BY);
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 920;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 921;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 922;
				this.tableIdentifier();
				this.state = 923;
				_localctx._kw3 = this.match(sparkParser.NOT);
				this.state = 924;
				_localctx._kw4 = this.match(sparkParser.SKEWED);
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 926;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 927;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 928;
				this.tableIdentifier();
				this.state = 929;
				_localctx._kw3 = this.match(sparkParser.NOT);
				this.state = 930;
				_localctx._kw4 = this.match(sparkParser.STORED);
				this.state = 931;
				_localctx._kw5 = this.match(sparkParser.AS);
				this.state = 932;
				_localctx._kw6 = this.match(sparkParser.DIRECTORIES);
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 934;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 935;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 936;
				this.tableIdentifier();
				this.state = 937;
				_localctx._kw3 = this.match(sparkParser.SET);
				this.state = 938;
				_localctx._kw4 = this.match(sparkParser.SKEWED);
				this.state = 939;
				_localctx._kw5 = this.match(sparkParser.LOCATION);
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 941;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 942;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 943;
				this.tableIdentifier();
				this.state = 944;
				_localctx._kw3 = this.match(sparkParser.EXCHANGE);
				this.state = 945;
				_localctx._kw4 = this.match(sparkParser.PARTITION);
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 947;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 948;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 949;
				this.tableIdentifier();
				this.state = 950;
				_localctx._kw3 = this.match(sparkParser.ARCHIVE);
				this.state = 951;
				_localctx._kw4 = this.match(sparkParser.PARTITION);
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 953;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 954;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 955;
				this.tableIdentifier();
				this.state = 956;
				_localctx._kw3 = this.match(sparkParser.UNARCHIVE);
				this.state = 957;
				_localctx._kw4 = this.match(sparkParser.PARTITION);
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 959;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 960;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 961;
				this.tableIdentifier();
				this.state = 962;
				_localctx._kw3 = this.match(sparkParser.TOUCH);
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 964;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 965;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 966;
				this.tableIdentifier();
				this.state = 968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 967;
					this.partitionSpec();
					}
				}

				this.state = 970;
				_localctx._kw3 = this.match(sparkParser.COMPACT);
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 972;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 973;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 974;
				this.tableIdentifier();
				this.state = 976;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 975;
					this.partitionSpec();
					}
				}

				this.state = 978;
				_localctx._kw3 = this.match(sparkParser.CONCATENATE);
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 980;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 981;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 982;
				this.tableIdentifier();
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 983;
					this.partitionSpec();
					}
				}

				this.state = 986;
				_localctx._kw3 = this.match(sparkParser.SET);
				this.state = 987;
				_localctx._kw4 = this.match(sparkParser.FILEFORMAT);
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 989;
				_localctx._kw1 = this.match(sparkParser.ALTER);
				this.state = 990;
				_localctx._kw2 = this.match(sparkParser.TABLE);
				this.state = 991;
				this.tableIdentifier();
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 992;
					this.partitionSpec();
					}
				}

				this.state = 995;
				_localctx._kw3 = this.match(sparkParser.REPLACE);
				this.state = 996;
				_localctx._kw4 = this.match(sparkParser.COLUMNS);
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 998;
				_localctx._kw1 = this.match(sparkParser.START);
				this.state = 999;
				_localctx._kw2 = this.match(sparkParser.TRANSACTION);
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 1000;
				_localctx._kw1 = this.match(sparkParser.COMMIT);
				}
				break;

			case 43:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 1001;
				_localctx._kw1 = this.match(sparkParser.ROLLBACK);
				}
				break;

			case 44:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 1002;
				_localctx._kw1 = this.match(sparkParser.DFS);
				}
				break;

			case 45:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 1003;
				_localctx._kw1 = this.match(sparkParser.DELETE);
				this.state = 1004;
				_localctx._kw2 = this.match(sparkParser.FROM);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createTableHeader(): CreateTableHeaderContext {
		let _localctx: CreateTableHeaderContext = new CreateTableHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, sparkParser.RULE_createTableHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1007;
			this.match(sparkParser.CREATE);
			this.state = 1009;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.TEMPORARY) {
				{
				this.state = 1008;
				this.match(sparkParser.TEMPORARY);
				}
			}

			this.state = 1012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.EXTERNAL) {
				{
				this.state = 1011;
				this.match(sparkParser.EXTERNAL);
				}
			}

			this.state = 1014;
			this.match(sparkParser.TABLE);
			this.state = 1018;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 1015;
				this.match(sparkParser.IF);
				this.state = 1016;
				this.match(sparkParser.NOT);
				this.state = 1017;
				this.match(sparkParser.EXISTS);
				}
				break;
			}
			this.state = 1020;
			this.tableIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bucketSpec(): BucketSpecContext {
		let _localctx: BucketSpecContext = new BucketSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, sparkParser.RULE_bucketSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1022;
			this.match(sparkParser.CLUSTERED);
			this.state = 1023;
			this.match(sparkParser.BY);
			this.state = 1024;
			this.identifierList();
			this.state = 1028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.SORTED) {
				{
				this.state = 1025;
				this.match(sparkParser.SORTED);
				this.state = 1026;
				this.match(sparkParser.BY);
				this.state = 1027;
				this.orderedIdentifierList();
				}
			}

			this.state = 1030;
			this.match(sparkParser.INTO);
			this.state = 1031;
			this.match(sparkParser.INTEGER_VALUE);
			this.state = 1032;
			this.match(sparkParser.BUCKETS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public skewSpec(): SkewSpecContext {
		let _localctx: SkewSpecContext = new SkewSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, sparkParser.RULE_skewSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1034;
			this.match(sparkParser.SKEWED);
			this.state = 1035;
			this.match(sparkParser.BY);
			this.state = 1036;
			this.identifierList();
			this.state = 1037;
			this.match(sparkParser.ON);
			this.state = 1040;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 1038;
				this.constantList();
				}
				break;

			case 2:
				{
				this.state = 1039;
				this.nestedConstantList();
				}
				break;
			}
			this.state = 1045;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				this.state = 1042;
				this.match(sparkParser.STORED);
				this.state = 1043;
				this.match(sparkParser.AS);
				this.state = 1044;
				this.match(sparkParser.DIRECTORIES);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public locationSpec(): LocationSpecContext {
		let _localctx: LocationSpecContext = new LocationSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, sparkParser.RULE_locationSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this.match(sparkParser.LOCATION);
			this.state = 1048;
			this.match(sparkParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, sparkParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.WITH) {
				{
				this.state = 1050;
				this.ctes();
				}
			}

			this.state = 1053;
			this.queryNoWith();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertInto(): InsertIntoContext {
		let _localctx: InsertIntoContext = new InsertIntoContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, sparkParser.RULE_insertInto);
		let _la: number;
		try {
			this.state = 1103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				_localctx = new InsertOverwriteTableContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1055;
				this.match(sparkParser.INSERT);
				this.state = 1056;
				this.match(sparkParser.OVERWRITE);
				this.state = 1057;
				this.match(sparkParser.TABLE);
				this.state = 1058;
				this.tableIdentifier();
				this.state = 1065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 1059;
					this.partitionSpec();
					this.state = 1063;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sparkParser.IF) {
						{
						this.state = 1060;
						this.match(sparkParser.IF);
						this.state = 1061;
						this.match(sparkParser.NOT);
						this.state = 1062;
						this.match(sparkParser.EXISTS);
						}
					}

					}
				}

				}
				break;

			case 2:
				_localctx = new InsertIntoTableContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1067;
				this.match(sparkParser.INSERT);
				this.state = 1068;
				this.match(sparkParser.INTO);
				this.state = 1070;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 1069;
					this.match(sparkParser.TABLE);
					}
					break;
				}
				this.state = 1072;
				this.tableIdentifier();
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PARTITION) {
					{
					this.state = 1073;
					this.partitionSpec();
					}
				}

				}
				break;

			case 3:
				_localctx = new InsertOverwriteHiveDirContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1076;
				this.match(sparkParser.INSERT);
				this.state = 1077;
				this.match(sparkParser.OVERWRITE);
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.LOCAL) {
					{
					this.state = 1078;
					this.match(sparkParser.LOCAL);
					}
				}

				this.state = 1081;
				this.match(sparkParser.DIRECTORY);
				this.state = 1082;
				(_localctx as InsertOverwriteHiveDirContext)._path = this.match(sparkParser.STRING);
				this.state = 1084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.ROW) {
					{
					this.state = 1083;
					this.rowFormat();
					}
				}

				this.state = 1087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.STORED) {
					{
					this.state = 1086;
					this.createFileFormat();
					}
				}

				}
				break;

			case 4:
				_localctx = new InsertOverwriteDirContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1089;
				this.match(sparkParser.INSERT);
				this.state = 1090;
				this.match(sparkParser.OVERWRITE);
				this.state = 1092;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.LOCAL) {
					{
					this.state = 1091;
					this.match(sparkParser.LOCAL);
					}
				}

				this.state = 1094;
				this.match(sparkParser.DIRECTORY);
				this.state = 1096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.STRING) {
					{
					this.state = 1095;
					(_localctx as InsertOverwriteDirContext)._path = this.match(sparkParser.STRING);
					}
				}

				this.state = 1098;
				this.tableProvider();
				this.state = 1101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.OPTIONS) {
					{
					this.state = 1099;
					this.match(sparkParser.OPTIONS);
					this.state = 1100;
					(_localctx as InsertOverwriteDirContext)._options = this.tablePropertyList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionSpecLocation(): PartitionSpecLocationContext {
		let _localctx: PartitionSpecLocationContext = new PartitionSpecLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, sparkParser.RULE_partitionSpecLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1105;
			this.partitionSpec();
			this.state = 1107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.LOCATION) {
				{
				this.state = 1106;
				this.locationSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionSpec(): PartitionSpecContext {
		let _localctx: PartitionSpecContext = new PartitionSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, sparkParser.RULE_partitionSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1109;
			this.match(sparkParser.PARTITION);
			this.state = 1110;
			this.match(sparkParser.T__0);
			this.state = 1111;
			this.partitionVal();
			this.state = 1116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sparkParser.T__2) {
				{
				{
				this.state = 1112;
				this.match(sparkParser.T__2);
				this.state = 1113;
				this.partitionVal();
				}
				}
				this.state = 1118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1119;
			this.match(sparkParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionVal(): PartitionValContext {
		let _localctx: PartitionValContext = new PartitionValContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, sparkParser.RULE_partitionVal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1121;
			this.identifier();
			this.state = 1124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.EQ) {
				{
				this.state = 1122;
				this.match(sparkParser.EQ);
				this.state = 1123;
				this.constant();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public describeFuncName(): DescribeFuncNameContext {
		let _localctx: DescribeFuncNameContext = new DescribeFuncNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, sparkParser.RULE_describeFuncName);
		try {
			this.state = 1131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1126;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1127;
				this.match(sparkParser.STRING);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1128;
				this.comparisonOperator();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1129;
				this.arithmeticOperator();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1130;
				this.predicateOperator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public describeColName(): DescribeColNameContext {
		let _localctx: DescribeColNameContext = new DescribeColNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, sparkParser.RULE_describeColName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1133;
			_localctx._identifier = this.identifier();
			_localctx._nameParts.push(_localctx._identifier);
			this.state = 1138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sparkParser.T__3) {
				{
				{
				this.state = 1134;
				this.match(sparkParser.T__3);
				this.state = 1135;
				_localctx._identifier = this.identifier();
				_localctx._nameParts.push(_localctx._identifier);
				}
				}
				this.state = 1140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ctes(): CtesContext {
		let _localctx: CtesContext = new CtesContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, sparkParser.RULE_ctes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this.match(sparkParser.WITH);
			this.state = 1142;
			this.namedQuery();
			this.state = 1147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sparkParser.T__2) {
				{
				{
				this.state = 1143;
				this.match(sparkParser.T__2);
				this.state = 1144;
				this.namedQuery();
				}
				}
				this.state = 1149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedQuery(): NamedQueryContext {
		let _localctx: NamedQueryContext = new NamedQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, sparkParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1150;
			_localctx._name = this.identifier();
			this.state = 1152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.AS) {
				{
				this.state = 1151;
				this.match(sparkParser.AS);
				}
			}

			this.state = 1154;
			this.match(sparkParser.T__0);
			this.state = 1155;
			this.query();
			this.state = 1156;
			this.match(sparkParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProvider(): TableProviderContext {
		let _localctx: TableProviderContext = new TableProviderContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, sparkParser.RULE_tableProvider);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1158;
			this.match(sparkParser.USING);
			this.state = 1159;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyList(): TablePropertyListContext {
		let _localctx: TablePropertyListContext = new TablePropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, sparkParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1161;
			this.match(sparkParser.T__0);
			this.state = 1162;
			this.tableProperty();
			this.state = 1167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sparkParser.T__2) {
				{
				{
				this.state = 1163;
				this.match(sparkParser.T__2);
				this.state = 1164;
				this.tableProperty();
				}
				}
				this.state = 1169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1170;
			this.match(sparkParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProperty(): TablePropertyContext {
		let _localctx: TablePropertyContext = new TablePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, sparkParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1172;
			_localctx._key = this.tablePropertyKey();
			this.state = 1177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.TRUE || _la === sparkParser.FALSE || _la === sparkParser.EQ || ((((_la - 240)) & ~0x1F) === 0 && ((1 << (_la - 240)) & ((1 << (sparkParser.STRING - 240)) | (1 << (sparkParser.INTEGER_VALUE - 240)) | (1 << (sparkParser.DECIMAL_VALUE - 240)))) !== 0)) {
				{
				this.state = 1174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.EQ) {
					{
					this.state = 1173;
					this.match(sparkParser.EQ);
					}
				}

				this.state = 1176;
				_localctx._value = this.tablePropertyValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyKey(): TablePropertyKeyContext {
		let _localctx: TablePropertyKeyContext = new TablePropertyKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, sparkParser.RULE_tablePropertyKey);
		let _la: number;
		try {
			this.state = 1188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.SELECT:
			case sparkParser.FROM:
			case sparkParser.ADD:
			case sparkParser.AS:
			case sparkParser.ALL:
			case sparkParser.ANY:
			case sparkParser.DISTINCT:
			case sparkParser.WHERE:
			case sparkParser.GROUP:
			case sparkParser.BY:
			case sparkParser.GROUPING:
			case sparkParser.SETS:
			case sparkParser.CUBE:
			case sparkParser.ROLLUP:
			case sparkParser.ORDER:
			case sparkParser.HAVING:
			case sparkParser.LIMIT:
			case sparkParser.AT:
			case sparkParser.OR:
			case sparkParser.AND:
			case sparkParser.IN:
			case sparkParser.NOT:
			case sparkParser.NO:
			case sparkParser.EXISTS:
			case sparkParser.BETWEEN:
			case sparkParser.LIKE:
			case sparkParser.RLIKE:
			case sparkParser.IS:
			case sparkParser.NULL:
			case sparkParser.TRUE:
			case sparkParser.FALSE:
			case sparkParser.NULLS:
			case sparkParser.ASC:
			case sparkParser.DESC:
			case sparkParser.FOR:
			case sparkParser.INTERVAL:
			case sparkParser.CASE:
			case sparkParser.WHEN:
			case sparkParser.THEN:
			case sparkParser.ELSE:
			case sparkParser.END:
			case sparkParser.JOIN:
			case sparkParser.CROSS:
			case sparkParser.OUTER:
			case sparkParser.INNER:
			case sparkParser.LEFT:
			case sparkParser.SEMI:
			case sparkParser.RIGHT:
			case sparkParser.FULL:
			case sparkParser.NATURAL:
			case sparkParser.ON:
			case sparkParser.PIVOT:
			case sparkParser.LATERAL:
			case sparkParser.WINDOW:
			case sparkParser.OVER:
			case sparkParser.PARTITION:
			case sparkParser.RANGE:
			case sparkParser.ROWS:
			case sparkParser.UNBOUNDED:
			case sparkParser.PRECEDING:
			case sparkParser.FOLLOWING:
			case sparkParser.CURRENT:
			case sparkParser.FIRST:
			case sparkParser.AFTER:
			case sparkParser.LAST:
			case sparkParser.ROW:
			case sparkParser.WITH:
			case sparkParser.VALUES:
			case sparkParser.CREATE:
			case sparkParser.TABLE:
			case sparkParser.DIRECTORY:
			case sparkParser.VIEW:
			case sparkParser.REPLACE:
			case sparkParser.INSERT:
			case sparkParser.DELETE:
			case sparkParser.INTO:
			case sparkParser.DESCRIBE:
			case sparkParser.EXPLAIN:
			case sparkParser.FORMAT:
			case sparkParser.LOGICAL:
			case sparkParser.CODEGEN:
			case sparkParser.COST:
			case sparkParser.CAST:
			case sparkParser.SHOW:
			case sparkParser.TABLES:
			case sparkParser.COLUMNS:
			case sparkParser.COLUMN:
			case sparkParser.USE:
			case sparkParser.PARTITIONS:
			case sparkParser.FUNCTIONS:
			case sparkParser.DROP:
			case sparkParser.UNION:
			case sparkParser.EXCEPT:
			case sparkParser.SETMINUS:
			case sparkParser.INTERSECT:
			case sparkParser.TO:
			case sparkParser.TABLESAMPLE:
			case sparkParser.STRATIFY:
			case sparkParser.ALTER:
			case sparkParser.RENAME:
			case sparkParser.ARRAY:
			case sparkParser.MAP:
			case sparkParser.STRUCT:
			case sparkParser.COMMENT:
			case sparkParser.SET:
			case sparkParser.RESET:
			case sparkParser.DATA:
			case sparkParser.START:
			case sparkParser.TRANSACTION:
			case sparkParser.COMMIT:
			case sparkParser.ROLLBACK:
			case sparkParser.MACRO:
			case sparkParser.IGNORE:
			case sparkParser.BOTH:
			case sparkParser.LEADING:
			case sparkParser.TRAILING:
			case sparkParser.IF:
			case sparkParser.POSITION:
			case sparkParser.EXTRACT:
			case sparkParser.DIV:
			case sparkParser.PERCENTLIT:
			case sparkParser.BUCKET:
			case sparkParser.OUT:
			case sparkParser.OF:
			case sparkParser.SORT:
			case sparkParser.CLUSTER:
			case sparkParser.DISTRIBUTE:
			case sparkParser.OVERWRITE:
			case sparkParser.TRANSFORM:
			case sparkParser.REDUCE:
			case sparkParser.SERDE:
			case sparkParser.SERDEPROPERTIES:
			case sparkParser.RECORDREADER:
			case sparkParser.RECORDWRITER:
			case sparkParser.DELIMITED:
			case sparkParser.FIELDS:
			case sparkParser.TERMINATED:
			case sparkParser.COLLECTION:
			case sparkParser.ITEMS:
			case sparkParser.KEYS:
			case sparkParser.ESCAPED:
			case sparkParser.LINES:
			case sparkParser.SEPARATED:
			case sparkParser.FUNCTION:
			case sparkParser.EXTENDED:
			case sparkParser.REFRESH:
			case sparkParser.CLEAR:
			case sparkParser.CACHE:
			case sparkParser.UNCACHE:
			case sparkParser.LAZY:
			case sparkParser.FORMATTED:
			case sparkParser.GLOBAL:
			case sparkParser.TEMPORARY:
			case sparkParser.OPTIONS:
			case sparkParser.UNSET:
			case sparkParser.TBLPROPERTIES:
			case sparkParser.DBPROPERTIES:
			case sparkParser.BUCKETS:
			case sparkParser.SKEWED:
			case sparkParser.STORED:
			case sparkParser.DIRECTORIES:
			case sparkParser.LOCATION:
			case sparkParser.EXCHANGE:
			case sparkParser.ARCHIVE:
			case sparkParser.UNARCHIVE:
			case sparkParser.FILEFORMAT:
			case sparkParser.TOUCH:
			case sparkParser.COMPACT:
			case sparkParser.CONCATENATE:
			case sparkParser.CHANGE:
			case sparkParser.CASCADE:
			case sparkParser.RESTRICT:
			case sparkParser.CLUSTERED:
			case sparkParser.SORTED:
			case sparkParser.PURGE:
			case sparkParser.INPUTFORMAT:
			case sparkParser.OUTPUTFORMAT:
			case sparkParser.DATABASE:
			case sparkParser.DATABASES:
			case sparkParser.DFS:
			case sparkParser.TRUNCATE:
			case sparkParser.ANALYZE:
			case sparkParser.COMPUTE:
			case sparkParser.LIST:
			case sparkParser.STATISTICS:
			case sparkParser.PARTITIONED:
			case sparkParser.EXTERNAL:
			case sparkParser.DEFINED:
			case sparkParser.REVOKE:
			case sparkParser.GRANT:
			case sparkParser.LOCK:
			case sparkParser.UNLOCK:
			case sparkParser.MSCK:
			case sparkParser.REPAIR:
			case sparkParser.RECOVER:
			case sparkParser.EXPORT:
			case sparkParser.IMPORT:
			case sparkParser.LOAD:
			case sparkParser.ROLE:
			case sparkParser.ROLES:
			case sparkParser.COMPACTIONS:
			case sparkParser.PRINCIPALS:
			case sparkParser.TRANSACTIONS:
			case sparkParser.INDEX:
			case sparkParser.INDEXES:
			case sparkParser.LOCKS:
			case sparkParser.OPTION:
			case sparkParser.ANTI:
			case sparkParser.LOCAL:
			case sparkParser.INPATH:
			case sparkParser.IDENTIFIER:
			case sparkParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1179;
				this.identifier();
				this.state = 1184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__3) {
					{
					{
					this.state = 1180;
					this.match(sparkParser.T__3);
					this.state = 1181;
					this.identifier();
					}
					}
					this.state = 1186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case sparkParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1187;
				this.match(sparkParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyValue(): TablePropertyValueContext {
		let _localctx: TablePropertyValueContext = new TablePropertyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, sparkParser.RULE_tablePropertyValue);
		try {
			this.state = 1194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1190;
				this.match(sparkParser.INTEGER_VALUE);
				}
				break;
			case sparkParser.DECIMAL_VALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1191;
				this.match(sparkParser.DECIMAL_VALUE);
				}
				break;
			case sparkParser.TRUE:
			case sparkParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1192;
				this.booleanValue();
				}
				break;
			case sparkParser.STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1193;
				this.match(sparkParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantList(): ConstantListContext {
		let _localctx: ConstantListContext = new ConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, sparkParser.RULE_constantList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1196;
			this.match(sparkParser.T__0);
			this.state = 1197;
			this.constant();
			this.state = 1202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sparkParser.T__2) {
				{
				{
				this.state = 1198;
				this.match(sparkParser.T__2);
				this.state = 1199;
				this.constant();
				}
				}
				this.state = 1204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1205;
			this.match(sparkParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nestedConstantList(): NestedConstantListContext {
		let _localctx: NestedConstantListContext = new NestedConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, sparkParser.RULE_nestedConstantList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1207;
			this.match(sparkParser.T__0);
			this.state = 1208;
			this.constantList();
			this.state = 1213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sparkParser.T__2) {
				{
				{
				this.state = 1209;
				this.match(sparkParser.T__2);
				this.state = 1210;
				this.constantList();
				}
				}
				this.state = 1215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1216;
			this.match(sparkParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createFileFormat(): CreateFileFormatContext {
		let _localctx: CreateFileFormatContext = new CreateFileFormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, sparkParser.RULE_createFileFormat);
		try {
			this.state = 1224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1218;
				this.match(sparkParser.STORED);
				this.state = 1219;
				this.match(sparkParser.AS);
				this.state = 1220;
				this.fileFormat();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1221;
				this.match(sparkParser.STORED);
				this.state = 1222;
				this.match(sparkParser.BY);
				this.state = 1223;
				this.storageHandler();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fileFormat(): FileFormatContext {
		let _localctx: FileFormatContext = new FileFormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, sparkParser.RULE_fileFormat);
		try {
			this.state = 1231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				_localctx = new TableFileFormatContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1226;
				this.match(sparkParser.INPUTFORMAT);
				this.state = 1227;
				(_localctx as TableFileFormatContext)._inFmt = this.match(sparkParser.STRING);
				this.state = 1228;
				this.match(sparkParser.OUTPUTFORMAT);
				this.state = 1229;
				(_localctx as TableFileFormatContext)._outFmt = this.match(sparkParser.STRING);
				}
				break;

			case 2:
				_localctx = new GenericFileFormatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1230;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageHandler(): StorageHandlerContext {
		let _localctx: StorageHandlerContext = new StorageHandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, sparkParser.RULE_storageHandler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1233;
			this.match(sparkParser.STRING);
			this.state = 1237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1234;
				this.match(sparkParser.WITH);
				this.state = 1235;
				this.match(sparkParser.SERDEPROPERTIES);
				this.state = 1236;
				this.tablePropertyList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, sparkParser.RULE_resource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1239;
			this.identifier();
			this.state = 1240;
			this.match(sparkParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryNoWith(): QueryNoWithContext {
		let _localctx: QueryNoWithContext = new QueryNoWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, sparkParser.RULE_queryNoWith);
		let _la: number;
		try {
			this.state = 1254;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				_localctx = new SingleInsertQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.INSERT) {
					{
					this.state = 1242;
					this.insertInto();
					}
				}

				this.state = 1245;
				this.queryTerm(0);
				this.state = 1246;
				this.queryOrganization();
				}
				break;

			case 2:
				_localctx = new MultiInsertQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1248;
				this.fromClause();
				this.state = 1250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1249;
					this.multiInsertQueryBody();
					}
					}
					this.state = 1252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === sparkParser.SELECT || _la === sparkParser.FROM || _la === sparkParser.INSERT || _la === sparkParser.MAP || _la === sparkParser.REDUCE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryOrganization(): QueryOrganizationContext {
		let _localctx: QueryOrganizationContext = new QueryOrganizationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, sparkParser.RULE_queryOrganization);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.ORDER) {
				{
				this.state = 1256;
				this.match(sparkParser.ORDER);
				this.state = 1257;
				this.match(sparkParser.BY);
				this.state = 1258;
				_localctx._sortItem = this.sortItem();
				_localctx._order.push(_localctx._sortItem);
				this.state = 1263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 1259;
					this.match(sparkParser.T__2);
					this.state = 1260;
					_localctx._sortItem = this.sortItem();
					_localctx._order.push(_localctx._sortItem);
					}
					}
					this.state = 1265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.CLUSTER) {
				{
				this.state = 1268;
				this.match(sparkParser.CLUSTER);
				this.state = 1269;
				this.match(sparkParser.BY);
				this.state = 1270;
				_localctx._expression = this.expression();
				_localctx._clusterBy.push(_localctx._expression);
				this.state = 1275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 1271;
					this.match(sparkParser.T__2);
					this.state = 1272;
					_localctx._expression = this.expression();
					_localctx._clusterBy.push(_localctx._expression);
					}
					}
					this.state = 1277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.DISTRIBUTE) {
				{
				this.state = 1280;
				this.match(sparkParser.DISTRIBUTE);
				this.state = 1281;
				this.match(sparkParser.BY);
				this.state = 1282;
				_localctx._expression = this.expression();
				_localctx._distributeBy.push(_localctx._expression);
				this.state = 1287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 1283;
					this.match(sparkParser.T__2);
					this.state = 1284;
					_localctx._expression = this.expression();
					_localctx._distributeBy.push(_localctx._expression);
					}
					}
					this.state = 1289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.SORT) {
				{
				this.state = 1292;
				this.match(sparkParser.SORT);
				this.state = 1293;
				this.match(sparkParser.BY);
				this.state = 1294;
				_localctx._sortItem = this.sortItem();
				_localctx._sort.push(_localctx._sortItem);
				this.state = 1299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 1295;
					this.match(sparkParser.T__2);
					this.state = 1296;
					_localctx._sortItem = this.sortItem();
					_localctx._sort.push(_localctx._sortItem);
					}
					}
					this.state = 1301;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.WINDOW) {
				{
				this.state = 1304;
				this.windows();
				}
			}

			this.state = 1312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.LIMIT) {
				{
				this.state = 1307;
				this.match(sparkParser.LIMIT);
				this.state = 1310;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
				case 1:
					{
					this.state = 1308;
					this.match(sparkParser.ALL);
					}
					break;

				case 2:
					{
					this.state = 1309;
					_localctx._limit = this.expression();
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiInsertQueryBody(): MultiInsertQueryBodyContext {
		let _localctx: MultiInsertQueryBodyContext = new MultiInsertQueryBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, sparkParser.RULE_multiInsertQueryBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.INSERT) {
				{
				this.state = 1314;
				this.insertInto();
				}
			}

			this.state = 1317;
			this.querySpecification();
			this.state = 1318;
			this.queryOrganization();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public queryTerm(): QueryTermContext;
	public queryTerm(_p: number): QueryTermContext;
	// @RuleVersion(0)
	public queryTerm(_p?: number): QueryTermContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: QueryTermContext = new QueryTermContext(this._ctx, _parentState);
		let _prevctx: QueryTermContext = _localctx;
		let _startState: number = 70;
		this.enterRecursionRule(_localctx, 70, sparkParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QueryTermDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1321;
			this.queryPrimary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1346;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1344;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
					case 1:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_queryTerm);
						this.state = 1323;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1324;
						if (!(this.legacy_setops_precedence_enbled)) {
							throw new FailedPredicateException(this, "this.legacy_setops_precedence_enbled");
						}
						this.state = 1325;
						(_localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (sparkParser.UNION - 102)) | (1 << (sparkParser.EXCEPT - 102)) | (1 << (sparkParser.SETMINUS - 102)) | (1 << (sparkParser.INTERSECT - 102)))) !== 0))) {
							(_localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1327;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === sparkParser.ALL || _la === sparkParser.DISTINCT) {
							{
							this.state = 1326;
							this.setQuantifier();
							}
						}

						this.state = 1329;
						(_localctx as SetOperationContext)._right = this.queryTerm(4);
						}
						break;

					case 2:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_queryTerm);
						this.state = 1330;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1331;
						if (!(!this.legacy_setops_precedence_enbled)) {
							throw new FailedPredicateException(this, "!this.legacy_setops_precedence_enbled");
						}
						this.state = 1332;
						(_localctx as SetOperationContext)._operator = this.match(sparkParser.INTERSECT);
						this.state = 1334;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === sparkParser.ALL || _la === sparkParser.DISTINCT) {
							{
							this.state = 1333;
							this.setQuantifier();
							}
						}

						this.state = 1336;
						(_localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;

					case 3:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_queryTerm);
						this.state = 1337;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 1338;
						if (!(!this.legacy_setops_precedence_enbled)) {
							throw new FailedPredicateException(this, "!this.legacy_setops_precedence_enbled");
						}
						this.state = 1339;
						(_localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (sparkParser.UNION - 102)) | (1 << (sparkParser.EXCEPT - 102)) | (1 << (sparkParser.SETMINUS - 102)))) !== 0))) {
							(_localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1341;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === sparkParser.ALL || _la === sparkParser.DISTINCT) {
							{
							this.state = 1340;
							this.setQuantifier();
							}
						}

						this.state = 1343;
						(_localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1348;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryPrimary(): QueryPrimaryContext {
		let _localctx: QueryPrimaryContext = new QueryPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, sparkParser.RULE_queryPrimary);
		try {
			this.state = 1357;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.SELECT:
			case sparkParser.FROM:
			case sparkParser.MAP:
			case sparkParser.REDUCE:
				_localctx = new QueryPrimaryDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1349;
				this.querySpecification();
				}
				break;
			case sparkParser.TABLE:
				_localctx = new TableContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1350;
				this.match(sparkParser.TABLE);
				this.state = 1351;
				this.tableIdentifier();
				}
				break;
			case sparkParser.VALUES:
				_localctx = new InlineTableDefault1Context(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1352;
				this.inlineTable();
				}
				break;
			case sparkParser.T__0:
				_localctx = new SubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1353;
				this.match(sparkParser.T__0);
				this.state = 1354;
				this.queryNoWith();
				this.state = 1355;
				this.match(sparkParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortItem(): SortItemContext {
		let _localctx: SortItemContext = new SortItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, sparkParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1359;
			this.expression();
			this.state = 1361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.ASC || _la === sparkParser.DESC) {
				{
				this.state = 1360;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === sparkParser.ASC || _la === sparkParser.DESC)) {
					_localctx._ordering = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.NULLS) {
				{
				this.state = 1363;
				this.match(sparkParser.NULLS);
				this.state = 1364;
				_localctx._nullOrder = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === sparkParser.FIRST || _la === sparkParser.LAST)) {
					_localctx._nullOrder = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public querySpecification(): QuerySpecificationContext {
		let _localctx: QuerySpecificationContext = new QuerySpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, sparkParser.RULE_querySpecification);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				{
				this.state = 1377;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sparkParser.SELECT:
					{
					this.state = 1367;
					this.match(sparkParser.SELECT);
					this.state = 1368;
					_localctx._kind = this.match(sparkParser.TRANSFORM);
					this.state = 1369;
					this.match(sparkParser.T__0);
					this.state = 1370;
					this.namedExpressionSeq();
					this.state = 1371;
					this.match(sparkParser.T__1);
					}
					break;
				case sparkParser.MAP:
					{
					this.state = 1373;
					_localctx._kind = this.match(sparkParser.MAP);
					this.state = 1374;
					this.namedExpressionSeq();
					}
					break;
				case sparkParser.REDUCE:
					{
					this.state = 1375;
					_localctx._kind = this.match(sparkParser.REDUCE);
					this.state = 1376;
					this.namedExpressionSeq();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.ROW) {
					{
					this.state = 1379;
					_localctx._inRowFormat = this.rowFormat();
					}
				}

				this.state = 1384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.RECORDWRITER) {
					{
					this.state = 1382;
					this.match(sparkParser.RECORDWRITER);
					this.state = 1383;
					_localctx._recordWriter = this.match(sparkParser.STRING);
					}
				}

				this.state = 1386;
				this.match(sparkParser.USING);
				this.state = 1387;
				_localctx._script = this.match(sparkParser.STRING);
				this.state = 1400;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
				case 1:
					{
					this.state = 1388;
					this.match(sparkParser.AS);
					this.state = 1398;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
					case 1:
						{
						this.state = 1389;
						this.identifierSeq();
						}
						break;

					case 2:
						{
						this.state = 1390;
						this.colTypeList();
						}
						break;

					case 3:
						{
						{
						this.state = 1391;
						this.match(sparkParser.T__0);
						this.state = 1394;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
						case 1:
							{
							this.state = 1392;
							this.identifierSeq();
							}
							break;

						case 2:
							{
							this.state = 1393;
							this.colTypeList();
							}
							break;
						}
						this.state = 1396;
						this.match(sparkParser.T__1);
						}
						}
						break;
					}
					}
					break;
				}
				this.state = 1403;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
				case 1:
					{
					this.state = 1402;
					_localctx._outRowFormat = this.rowFormat();
					}
					break;
				}
				this.state = 1407;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
				case 1:
					{
					this.state = 1405;
					this.match(sparkParser.RECORDREADER);
					this.state = 1406;
					_localctx._recordReader = this.match(sparkParser.STRING);
					}
					break;
				}
				this.state = 1410;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
				case 1:
					{
					this.state = 1409;
					this.fromClause();
					}
					break;
				}
				this.state = 1414;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
				case 1:
					{
					this.state = 1412;
					this.match(sparkParser.WHERE);
					this.state = 1413;
					_localctx._where = this.booleanExpression(0);
					}
					break;
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1438;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sparkParser.SELECT:
					{
					this.state = 1416;
					_localctx._kind = this.match(sparkParser.SELECT);
					this.state = 1420;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sparkParser.T__4) {
						{
						{
						this.state = 1417;
						_localctx._hint = this.hint();
						_localctx._hints.push(_localctx._hint);
						}
						}
						this.state = 1422;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1424;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
					case 1:
						{
						this.state = 1423;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1426;
					this.namedExpressionSeq();
					this.state = 1428;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
					case 1:
						{
						this.state = 1427;
						this.fromClause();
						}
						break;
					}
					}
					break;
				case sparkParser.FROM:
					{
					this.state = 1430;
					this.fromClause();
					this.state = 1436;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
					case 1:
						{
						this.state = 1431;
						_localctx._kind = this.match(sparkParser.SELECT);
						this.state = 1433;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
						case 1:
							{
							this.state = 1432;
							this.setQuantifier();
							}
							break;
						}
						this.state = 1435;
						this.namedExpressionSeq();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1443;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1440;
						this.lateralView();
						}
						}
					}
					this.state = 1445;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
				}
				this.state = 1448;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
				case 1:
					{
					this.state = 1446;
					this.match(sparkParser.WHERE);
					this.state = 1447;
					_localctx._where = this.booleanExpression(0);
					}
					break;
				}
				this.state = 1451;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
				case 1:
					{
					this.state = 1450;
					this.aggregation();
					}
					break;
				}
				this.state = 1455;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
				case 1:
					{
					this.state = 1453;
					this.match(sparkParser.HAVING);
					this.state = 1454;
					_localctx._having = this.booleanExpression(0);
					}
					break;
				}
				this.state = 1458;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
				case 1:
					{
					this.state = 1457;
					this.windows();
					}
					break;
				}
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hint(): HintContext {
		let _localctx: HintContext = new HintContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, sparkParser.RULE_hint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1462;
			this.match(sparkParser.T__4);
			this.state = 1463;
			_localctx._hintStatement = this.hintStatement();
			_localctx._hintStatements.push(_localctx._hintStatement);
			this.state = 1470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.T__2) | (1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
				{
				{
				this.state = 1465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.T__2) {
					{
					this.state = 1464;
					this.match(sparkParser.T__2);
					}
				}

				this.state = 1467;
				_localctx._hintStatement = this.hintStatement();
				_localctx._hintStatements.push(_localctx._hintStatement);
				}
				}
				this.state = 1472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1473;
			this.match(sparkParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hintStatement(): HintStatementContext {
		let _localctx: HintStatementContext = new HintStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, sparkParser.RULE_hintStatement);
		let _la: number;
		try {
			this.state = 1488;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1475;
				_localctx._hintName = this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1476;
				_localctx._hintName = this.identifier();
				this.state = 1477;
				this.match(sparkParser.T__0);
				this.state = 1478;
				_localctx._primaryExpression = this.primaryExpression(0);
				_localctx._parameters.push(_localctx._primaryExpression);
				this.state = 1483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 1479;
					this.match(sparkParser.T__2);
					this.state = 1480;
					_localctx._primaryExpression = this.primaryExpression(0);
					_localctx._parameters.push(_localctx._primaryExpression);
					}
					}
					this.state = 1485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1486;
				this.match(sparkParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromClause(): FromClauseContext {
		let _localctx: FromClauseContext = new FromClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, sparkParser.RULE_fromClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1490;
			this.match(sparkParser.FROM);
			this.state = 1491;
			this.relation();
			this.state = 1496;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1492;
					this.match(sparkParser.T__2);
					this.state = 1493;
					this.relation();
					}
					}
				}
				this.state = 1498;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
			}
			this.state = 1502;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1499;
					this.lateralView();
					}
					}
				}
				this.state = 1504;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
			}
			this.state = 1506;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				{
				this.state = 1505;
				this.pivotClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregation(): AggregationContext {
		let _localctx: AggregationContext = new AggregationContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, sparkParser.RULE_aggregation);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1552;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1508;
				this.match(sparkParser.GROUP);
				this.state = 1509;
				this.match(sparkParser.BY);
				this.state = 1510;
				_localctx._expression = this.expression();
				_localctx._groupingExpressions.push(_localctx._expression);
				this.state = 1515;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1511;
						this.match(sparkParser.T__2);
						this.state = 1512;
						_localctx._expression = this.expression();
						_localctx._groupingExpressions.push(_localctx._expression);
						}
						}
					}
					this.state = 1517;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
				}
				this.state = 1535;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
				case 1:
					{
					this.state = 1518;
					this.match(sparkParser.WITH);
					this.state = 1519;
					_localctx._kind = this.match(sparkParser.ROLLUP);
					}
					break;

				case 2:
					{
					this.state = 1520;
					this.match(sparkParser.WITH);
					this.state = 1521;
					_localctx._kind = this.match(sparkParser.CUBE);
					}
					break;

				case 3:
					{
					this.state = 1522;
					_localctx._kind = this.match(sparkParser.GROUPING);
					this.state = 1523;
					this.match(sparkParser.SETS);
					this.state = 1524;
					this.match(sparkParser.T__0);
					this.state = 1525;
					this.groupingSet();
					this.state = 1530;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sparkParser.T__2) {
						{
						{
						this.state = 1526;
						this.match(sparkParser.T__2);
						this.state = 1527;
						this.groupingSet();
						}
						}
						this.state = 1532;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1533;
					this.match(sparkParser.T__1);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1537;
				this.match(sparkParser.GROUP);
				this.state = 1538;
				this.match(sparkParser.BY);
				this.state = 1539;
				_localctx._kind = this.match(sparkParser.GROUPING);
				this.state = 1540;
				this.match(sparkParser.SETS);
				this.state = 1541;
				this.match(sparkParser.T__0);
				this.state = 1542;
				this.groupingSet();
				this.state = 1547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 1543;
					this.match(sparkParser.T__2);
					this.state = 1544;
					this.groupingSet();
					}
					}
					this.state = 1549;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1550;
				this.match(sparkParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingSet(): GroupingSetContext {
		let _localctx: GroupingSetContext = new GroupingSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, sparkParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 1567;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1554;
				this.match(sparkParser.T__0);
				this.state = 1563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.T__0) | (1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.PLUS - 128)) | (1 << (sparkParser.MINUS - 128)) | (1 << (sparkParser.ASTERISK - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.TILDE - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.STRING - 224)) | (1 << (sparkParser.BIGINT_LITERAL - 224)) | (1 << (sparkParser.SMALLINT_LITERAL - 224)) | (1 << (sparkParser.TINYINT_LITERAL - 224)) | (1 << (sparkParser.INTEGER_VALUE - 224)) | (1 << (sparkParser.DECIMAL_VALUE - 224)) | (1 << (sparkParser.DOUBLE_LITERAL - 224)) | (1 << (sparkParser.BIGDECIMAL_LITERAL - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
					{
					this.state = 1555;
					this.expression();
					this.state = 1560;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sparkParser.T__2) {
						{
						{
						this.state = 1556;
						this.match(sparkParser.T__2);
						this.state = 1557;
						this.expression();
						}
						}
						this.state = 1562;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1565;
				this.match(sparkParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1566;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pivotClause(): PivotClauseContext {
		let _localctx: PivotClauseContext = new PivotClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, sparkParser.RULE_pivotClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1569;
			this.match(sparkParser.PIVOT);
			this.state = 1570;
			this.match(sparkParser.T__0);
			this.state = 1571;
			_localctx._aggregates = this.namedExpressionSeq();
			this.state = 1572;
			this.match(sparkParser.FOR);
			this.state = 1573;
			this.pivotColumn();
			this.state = 1574;
			this.match(sparkParser.IN);
			this.state = 1575;
			this.match(sparkParser.T__0);
			this.state = 1576;
			_localctx._pivotValue = this.pivotValue();
			_localctx._pivotValues.push(_localctx._pivotValue);
			this.state = 1581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sparkParser.T__2) {
				{
				{
				this.state = 1577;
				this.match(sparkParser.T__2);
				this.state = 1578;
				_localctx._pivotValue = this.pivotValue();
				_localctx._pivotValues.push(_localctx._pivotValue);
				}
				}
				this.state = 1583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1584;
			this.match(sparkParser.T__1);
			this.state = 1585;
			this.match(sparkParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pivotColumn(): PivotColumnContext {
		let _localctx: PivotColumnContext = new PivotColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, sparkParser.RULE_pivotColumn);
		let _la: number;
		try {
			this.state = 1599;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.SELECT:
			case sparkParser.FROM:
			case sparkParser.ADD:
			case sparkParser.AS:
			case sparkParser.ALL:
			case sparkParser.ANY:
			case sparkParser.DISTINCT:
			case sparkParser.WHERE:
			case sparkParser.GROUP:
			case sparkParser.BY:
			case sparkParser.GROUPING:
			case sparkParser.SETS:
			case sparkParser.CUBE:
			case sparkParser.ROLLUP:
			case sparkParser.ORDER:
			case sparkParser.HAVING:
			case sparkParser.LIMIT:
			case sparkParser.AT:
			case sparkParser.OR:
			case sparkParser.AND:
			case sparkParser.IN:
			case sparkParser.NOT:
			case sparkParser.NO:
			case sparkParser.EXISTS:
			case sparkParser.BETWEEN:
			case sparkParser.LIKE:
			case sparkParser.RLIKE:
			case sparkParser.IS:
			case sparkParser.NULL:
			case sparkParser.TRUE:
			case sparkParser.FALSE:
			case sparkParser.NULLS:
			case sparkParser.ASC:
			case sparkParser.DESC:
			case sparkParser.FOR:
			case sparkParser.INTERVAL:
			case sparkParser.CASE:
			case sparkParser.WHEN:
			case sparkParser.THEN:
			case sparkParser.ELSE:
			case sparkParser.END:
			case sparkParser.JOIN:
			case sparkParser.CROSS:
			case sparkParser.OUTER:
			case sparkParser.INNER:
			case sparkParser.LEFT:
			case sparkParser.SEMI:
			case sparkParser.RIGHT:
			case sparkParser.FULL:
			case sparkParser.NATURAL:
			case sparkParser.ON:
			case sparkParser.PIVOT:
			case sparkParser.LATERAL:
			case sparkParser.WINDOW:
			case sparkParser.OVER:
			case sparkParser.PARTITION:
			case sparkParser.RANGE:
			case sparkParser.ROWS:
			case sparkParser.UNBOUNDED:
			case sparkParser.PRECEDING:
			case sparkParser.FOLLOWING:
			case sparkParser.CURRENT:
			case sparkParser.FIRST:
			case sparkParser.AFTER:
			case sparkParser.LAST:
			case sparkParser.ROW:
			case sparkParser.WITH:
			case sparkParser.VALUES:
			case sparkParser.CREATE:
			case sparkParser.TABLE:
			case sparkParser.DIRECTORY:
			case sparkParser.VIEW:
			case sparkParser.REPLACE:
			case sparkParser.INSERT:
			case sparkParser.DELETE:
			case sparkParser.INTO:
			case sparkParser.DESCRIBE:
			case sparkParser.EXPLAIN:
			case sparkParser.FORMAT:
			case sparkParser.LOGICAL:
			case sparkParser.CODEGEN:
			case sparkParser.COST:
			case sparkParser.CAST:
			case sparkParser.SHOW:
			case sparkParser.TABLES:
			case sparkParser.COLUMNS:
			case sparkParser.COLUMN:
			case sparkParser.USE:
			case sparkParser.PARTITIONS:
			case sparkParser.FUNCTIONS:
			case sparkParser.DROP:
			case sparkParser.UNION:
			case sparkParser.EXCEPT:
			case sparkParser.SETMINUS:
			case sparkParser.INTERSECT:
			case sparkParser.TO:
			case sparkParser.TABLESAMPLE:
			case sparkParser.STRATIFY:
			case sparkParser.ALTER:
			case sparkParser.RENAME:
			case sparkParser.ARRAY:
			case sparkParser.MAP:
			case sparkParser.STRUCT:
			case sparkParser.COMMENT:
			case sparkParser.SET:
			case sparkParser.RESET:
			case sparkParser.DATA:
			case sparkParser.START:
			case sparkParser.TRANSACTION:
			case sparkParser.COMMIT:
			case sparkParser.ROLLBACK:
			case sparkParser.MACRO:
			case sparkParser.IGNORE:
			case sparkParser.BOTH:
			case sparkParser.LEADING:
			case sparkParser.TRAILING:
			case sparkParser.IF:
			case sparkParser.POSITION:
			case sparkParser.EXTRACT:
			case sparkParser.DIV:
			case sparkParser.PERCENTLIT:
			case sparkParser.BUCKET:
			case sparkParser.OUT:
			case sparkParser.OF:
			case sparkParser.SORT:
			case sparkParser.CLUSTER:
			case sparkParser.DISTRIBUTE:
			case sparkParser.OVERWRITE:
			case sparkParser.TRANSFORM:
			case sparkParser.REDUCE:
			case sparkParser.SERDE:
			case sparkParser.SERDEPROPERTIES:
			case sparkParser.RECORDREADER:
			case sparkParser.RECORDWRITER:
			case sparkParser.DELIMITED:
			case sparkParser.FIELDS:
			case sparkParser.TERMINATED:
			case sparkParser.COLLECTION:
			case sparkParser.ITEMS:
			case sparkParser.KEYS:
			case sparkParser.ESCAPED:
			case sparkParser.LINES:
			case sparkParser.SEPARATED:
			case sparkParser.FUNCTION:
			case sparkParser.EXTENDED:
			case sparkParser.REFRESH:
			case sparkParser.CLEAR:
			case sparkParser.CACHE:
			case sparkParser.UNCACHE:
			case sparkParser.LAZY:
			case sparkParser.FORMATTED:
			case sparkParser.GLOBAL:
			case sparkParser.TEMPORARY:
			case sparkParser.OPTIONS:
			case sparkParser.UNSET:
			case sparkParser.TBLPROPERTIES:
			case sparkParser.DBPROPERTIES:
			case sparkParser.BUCKETS:
			case sparkParser.SKEWED:
			case sparkParser.STORED:
			case sparkParser.DIRECTORIES:
			case sparkParser.LOCATION:
			case sparkParser.EXCHANGE:
			case sparkParser.ARCHIVE:
			case sparkParser.UNARCHIVE:
			case sparkParser.FILEFORMAT:
			case sparkParser.TOUCH:
			case sparkParser.COMPACT:
			case sparkParser.CONCATENATE:
			case sparkParser.CHANGE:
			case sparkParser.CASCADE:
			case sparkParser.RESTRICT:
			case sparkParser.CLUSTERED:
			case sparkParser.SORTED:
			case sparkParser.PURGE:
			case sparkParser.INPUTFORMAT:
			case sparkParser.OUTPUTFORMAT:
			case sparkParser.DATABASE:
			case sparkParser.DATABASES:
			case sparkParser.DFS:
			case sparkParser.TRUNCATE:
			case sparkParser.ANALYZE:
			case sparkParser.COMPUTE:
			case sparkParser.LIST:
			case sparkParser.STATISTICS:
			case sparkParser.PARTITIONED:
			case sparkParser.EXTERNAL:
			case sparkParser.DEFINED:
			case sparkParser.REVOKE:
			case sparkParser.GRANT:
			case sparkParser.LOCK:
			case sparkParser.UNLOCK:
			case sparkParser.MSCK:
			case sparkParser.REPAIR:
			case sparkParser.RECOVER:
			case sparkParser.EXPORT:
			case sparkParser.IMPORT:
			case sparkParser.LOAD:
			case sparkParser.ROLE:
			case sparkParser.ROLES:
			case sparkParser.COMPACTIONS:
			case sparkParser.PRINCIPALS:
			case sparkParser.TRANSACTIONS:
			case sparkParser.INDEX:
			case sparkParser.INDEXES:
			case sparkParser.LOCKS:
			case sparkParser.OPTION:
			case sparkParser.ANTI:
			case sparkParser.LOCAL:
			case sparkParser.INPATH:
			case sparkParser.IDENTIFIER:
			case sparkParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1587;
				_localctx._identifier = this.identifier();
				_localctx._identifiers.push(_localctx._identifier);
				}
				break;
			case sparkParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1588;
				this.match(sparkParser.T__0);
				this.state = 1589;
				_localctx._identifier = this.identifier();
				_localctx._identifiers.push(_localctx._identifier);
				this.state = 1594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 1590;
					this.match(sparkParser.T__2);
					this.state = 1591;
					_localctx._identifier = this.identifier();
					_localctx._identifiers.push(_localctx._identifier);
					}
					}
					this.state = 1596;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1597;
				this.match(sparkParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pivotValue(): PivotValueContext {
		let _localctx: PivotValueContext = new PivotValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, sparkParser.RULE_pivotValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1601;
			this.expression();
			this.state = 1606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
				{
				this.state = 1603;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
				case 1:
					{
					this.state = 1602;
					this.match(sparkParser.AS);
					}
					break;
				}
				this.state = 1605;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lateralView(): LateralViewContext {
		let _localctx: LateralViewContext = new LateralViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, sparkParser.RULE_lateralView);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1608;
			this.match(sparkParser.LATERAL);
			this.state = 1609;
			this.match(sparkParser.VIEW);
			this.state = 1611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				{
				this.state = 1610;
				this.match(sparkParser.OUTER);
				}
				break;
			}
			this.state = 1613;
			this.qualifiedName();
			this.state = 1614;
			this.match(sparkParser.T__0);
			this.state = 1623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.T__0) | (1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.PLUS - 128)) | (1 << (sparkParser.MINUS - 128)) | (1 << (sparkParser.ASTERISK - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.TILDE - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.STRING - 224)) | (1 << (sparkParser.BIGINT_LITERAL - 224)) | (1 << (sparkParser.SMALLINT_LITERAL - 224)) | (1 << (sparkParser.TINYINT_LITERAL - 224)) | (1 << (sparkParser.INTEGER_VALUE - 224)) | (1 << (sparkParser.DECIMAL_VALUE - 224)) | (1 << (sparkParser.DOUBLE_LITERAL - 224)) | (1 << (sparkParser.BIGDECIMAL_LITERAL - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
				{
				this.state = 1615;
				this.expression();
				this.state = 1620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 1616;
					this.match(sparkParser.T__2);
					this.state = 1617;
					this.expression();
					}
					}
					this.state = 1622;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1625;
			this.match(sparkParser.T__1);
			this.state = 1626;
			_localctx._tblName = this.identifier();
			this.state = 1638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1628;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
				case 1:
					{
					this.state = 1627;
					this.match(sparkParser.AS);
					}
					break;
				}
				this.state = 1630;
				_localctx._identifier = this.identifier();
				_localctx._colName.push(_localctx._identifier);
				this.state = 1635;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1631;
						this.match(sparkParser.T__2);
						this.state = 1632;
						_localctx._identifier = this.identifier();
						_localctx._colName.push(_localctx._identifier);
						}
						}
					}
					this.state = 1637;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setQuantifier(): SetQuantifierContext {
		let _localctx: SetQuantifierContext = new SetQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, sparkParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1640;
			_la = this._input.LA(1);
			if (!(_la === sparkParser.ALL || _la === sparkParser.DISTINCT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relation(): RelationContext {
		let _localctx: RelationContext = new RelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, sparkParser.RULE_relation);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1642;
			this.relationPrimary();
			this.state = 1646;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1643;
					this.joinRelation();
					}
					}
				}
				this.state = 1648;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinRelation(): JoinRelationContext {
		let _localctx: JoinRelationContext = new JoinRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, sparkParser.RULE_joinRelation);
		try {
			this.state = 1660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.JOIN:
			case sparkParser.CROSS:
			case sparkParser.INNER:
			case sparkParser.LEFT:
			case sparkParser.RIGHT:
			case sparkParser.FULL:
			case sparkParser.ANTI:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1649;
				this.joinType();
				}
				this.state = 1650;
				this.match(sparkParser.JOIN);
				this.state = 1651;
				_localctx._right = this.relationPrimary();
				this.state = 1653;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
				case 1:
					{
					this.state = 1652;
					this.joinCriteria();
					}
					break;
				}
				}
				break;
			case sparkParser.NATURAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1655;
				this.match(sparkParser.NATURAL);
				this.state = 1656;
				this.joinType();
				this.state = 1657;
				this.match(sparkParser.JOIN);
				this.state = 1658;
				_localctx._right = this.relationPrimary();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinType(): JoinTypeContext {
		let _localctx: JoinTypeContext = new JoinTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, sparkParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 1684;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.INNER) {
					{
					this.state = 1662;
					this.match(sparkParser.INNER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1665;
				this.match(sparkParser.CROSS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1666;
				this.match(sparkParser.LEFT);
				this.state = 1668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.OUTER) {
					{
					this.state = 1667;
					this.match(sparkParser.OUTER);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1670;
				this.match(sparkParser.LEFT);
				this.state = 1671;
				this.match(sparkParser.SEMI);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1672;
				this.match(sparkParser.RIGHT);
				this.state = 1674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.OUTER) {
					{
					this.state = 1673;
					this.match(sparkParser.OUTER);
					}
				}

				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1676;
				this.match(sparkParser.FULL);
				this.state = 1678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.OUTER) {
					{
					this.state = 1677;
					this.match(sparkParser.OUTER);
					}
				}

				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.LEFT) {
					{
					this.state = 1680;
					this.match(sparkParser.LEFT);
					}
				}

				this.state = 1683;
				this.match(sparkParser.ANTI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCriteria(): JoinCriteriaContext {
		let _localctx: JoinCriteriaContext = new JoinCriteriaContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, sparkParser.RULE_joinCriteria);
		try {
			this.state = 1690;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1686;
				this.match(sparkParser.ON);
				this.state = 1687;
				this.booleanExpression(0);
				}
				break;
			case sparkParser.USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1688;
				this.match(sparkParser.USING);
				this.state = 1689;
				this.identifierList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sample(): SampleContext {
		let _localctx: SampleContext = new SampleContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, sparkParser.RULE_sample);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1692;
			this.match(sparkParser.TABLESAMPLE);
			this.state = 1693;
			this.match(sparkParser.T__0);
			this.state = 1695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.T__0) | (1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.PLUS - 128)) | (1 << (sparkParser.MINUS - 128)) | (1 << (sparkParser.ASTERISK - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.TILDE - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.STRING - 224)) | (1 << (sparkParser.BIGINT_LITERAL - 224)) | (1 << (sparkParser.SMALLINT_LITERAL - 224)) | (1 << (sparkParser.TINYINT_LITERAL - 224)) | (1 << (sparkParser.INTEGER_VALUE - 224)) | (1 << (sparkParser.DECIMAL_VALUE - 224)) | (1 << (sparkParser.DOUBLE_LITERAL - 224)) | (1 << (sparkParser.BIGDECIMAL_LITERAL - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
				{
				this.state = 1694;
				this.sampleMethod();
				}
			}

			this.state = 1697;
			this.match(sparkParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sampleMethod(): SampleMethodContext {
		let _localctx: SampleMethodContext = new SampleMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, sparkParser.RULE_sampleMethod);
		let _la: number;
		try {
			this.state = 1723;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				_localctx = new SampleByPercentileContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.MINUS) {
					{
					this.state = 1699;
					(_localctx as SampleByPercentileContext)._negativeSign = this.match(sparkParser.MINUS);
					}
				}

				this.state = 1702;
				(_localctx as SampleByPercentileContext)._percentage = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === sparkParser.INTEGER_VALUE || _la === sparkParser.DECIMAL_VALUE)) {
					(_localctx as SampleByPercentileContext)._percentage = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1703;
				this.match(sparkParser.PERCENTLIT);
				}
				break;

			case 2:
				_localctx = new SampleByRowsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1704;
				this.expression();
				this.state = 1705;
				this.match(sparkParser.ROWS);
				}
				break;

			case 3:
				_localctx = new SampleByBucketContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1707;
				(_localctx as SampleByBucketContext)._sampleType = this.match(sparkParser.BUCKET);
				this.state = 1708;
				(_localctx as SampleByBucketContext)._numerator = this.match(sparkParser.INTEGER_VALUE);
				this.state = 1709;
				this.match(sparkParser.OUT);
				this.state = 1710;
				this.match(sparkParser.OF);
				this.state = 1711;
				(_localctx as SampleByBucketContext)._denominator = this.match(sparkParser.INTEGER_VALUE);
				this.state = 1720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.ON) {
					{
					this.state = 1712;
					this.match(sparkParser.ON);
					this.state = 1718;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
					case 1:
						{
						this.state = 1713;
						this.identifier();
						}
						break;

					case 2:
						{
						this.state = 1714;
						this.qualifiedName();
						this.state = 1715;
						this.match(sparkParser.T__0);
						this.state = 1716;
						this.match(sparkParser.T__1);
						}
						break;
					}
					}
				}

				}
				break;

			case 4:
				_localctx = new SampleByBytesContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1722;
				(_localctx as SampleByBytesContext)._bytes = this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, sparkParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1725;
			this.match(sparkParser.T__0);
			this.state = 1726;
			this.identifierSeq();
			this.state = 1727;
			this.match(sparkParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierSeq(): IdentifierSeqContext {
		let _localctx: IdentifierSeqContext = new IdentifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, sparkParser.RULE_identifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1729;
			this.identifier();
			this.state = 1734;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 227, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1730;
					this.match(sparkParser.T__2);
					this.state = 1731;
					this.identifier();
					}
					}
				}
				this.state = 1736;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 227, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderedIdentifierList(): OrderedIdentifierListContext {
		let _localctx: OrderedIdentifierListContext = new OrderedIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, sparkParser.RULE_orderedIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1737;
			this.match(sparkParser.T__0);
			this.state = 1738;
			this.orderedIdentifier();
			this.state = 1743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sparkParser.T__2) {
				{
				{
				this.state = 1739;
				this.match(sparkParser.T__2);
				this.state = 1740;
				this.orderedIdentifier();
				}
				}
				this.state = 1745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1746;
			this.match(sparkParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderedIdentifier(): OrderedIdentifierContext {
		let _localctx: OrderedIdentifierContext = new OrderedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, sparkParser.RULE_orderedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1748;
			this.identifier();
			this.state = 1750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.ASC || _la === sparkParser.DESC) {
				{
				this.state = 1749;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === sparkParser.ASC || _la === sparkParser.DESC)) {
					_localctx._ordering = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierCommentList(): IdentifierCommentListContext {
		let _localctx: IdentifierCommentListContext = new IdentifierCommentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, sparkParser.RULE_identifierCommentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1752;
			this.match(sparkParser.T__0);
			this.state = 1753;
			this.identifierComment();
			this.state = 1758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sparkParser.T__2) {
				{
				{
				this.state = 1754;
				this.match(sparkParser.T__2);
				this.state = 1755;
				this.identifierComment();
				}
				}
				this.state = 1760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1761;
			this.match(sparkParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierComment(): IdentifierCommentContext {
		let _localctx: IdentifierCommentContext = new IdentifierCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, sparkParser.RULE_identifierComment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1763;
			this.identifier();
			this.state = 1766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.COMMENT) {
				{
				this.state = 1764;
				this.match(sparkParser.COMMENT);
				this.state = 1765;
				this.match(sparkParser.STRING);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationPrimary(): RelationPrimaryContext {
		let _localctx: RelationPrimaryContext = new RelationPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, sparkParser.RULE_relationPrimary);
		try {
			this.state = 1792;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 235, this._ctx) ) {
			case 1:
				_localctx = new TableNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1768;
				this.tableIdentifier();
				this.state = 1770;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
				case 1:
					{
					this.state = 1769;
					this.sample();
					}
					break;
				}
				this.state = 1772;
				this.tableAlias();
				}
				break;

			case 2:
				_localctx = new AliasedQueryContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1774;
				this.match(sparkParser.T__0);
				this.state = 1775;
				this.queryNoWith();
				this.state = 1776;
				this.match(sparkParser.T__1);
				this.state = 1778;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 1777;
					this.sample();
					}
					break;
				}
				this.state = 1780;
				this.tableAlias();
				}
				break;

			case 3:
				_localctx = new AliasedRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1782;
				this.match(sparkParser.T__0);
				this.state = 1783;
				this.relation();
				this.state = 1784;
				this.match(sparkParser.T__1);
				this.state = 1786;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 234, this._ctx) ) {
				case 1:
					{
					this.state = 1785;
					this.sample();
					}
					break;
				}
				this.state = 1788;
				this.tableAlias();
				}
				break;

			case 4:
				_localctx = new InlineTableDefault2Context(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1790;
				this.inlineTable();
				}
				break;

			case 5:
				_localctx = new TableValuedFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1791;
				this.functionTable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineTable(): InlineTableContext {
		let _localctx: InlineTableContext = new InlineTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, sparkParser.RULE_inlineTable);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1794;
			this.match(sparkParser.VALUES);
			this.state = 1795;
			this.expression();
			this.state = 1800;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1796;
					this.match(sparkParser.T__2);
					this.state = 1797;
					this.expression();
					}
					}
				}
				this.state = 1802;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
			}
			this.state = 1803;
			this.tableAlias();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTable(): FunctionTableContext {
		let _localctx: FunctionTableContext = new FunctionTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, sparkParser.RULE_functionTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1805;
			this.identifier();
			this.state = 1806;
			this.match(sparkParser.T__0);
			this.state = 1815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.T__0) | (1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.PLUS - 128)) | (1 << (sparkParser.MINUS - 128)) | (1 << (sparkParser.ASTERISK - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.TILDE - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.STRING - 224)) | (1 << (sparkParser.BIGINT_LITERAL - 224)) | (1 << (sparkParser.SMALLINT_LITERAL - 224)) | (1 << (sparkParser.TINYINT_LITERAL - 224)) | (1 << (sparkParser.INTEGER_VALUE - 224)) | (1 << (sparkParser.DECIMAL_VALUE - 224)) | (1 << (sparkParser.DOUBLE_LITERAL - 224)) | (1 << (sparkParser.BIGDECIMAL_LITERAL - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
				{
				this.state = 1807;
				this.expression();
				this.state = 1812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 1808;
					this.match(sparkParser.T__2);
					this.state = 1809;
					this.expression();
					}
					}
					this.state = 1814;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1817;
			this.match(sparkParser.T__1);
			this.state = 1818;
			this.tableAlias();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableAlias(): TableAliasContext {
		let _localctx: TableAliasContext = new TableAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, sparkParser.RULE_tableAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				{
				this.state = 1821;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
				case 1:
					{
					this.state = 1820;
					this.match(sparkParser.AS);
					}
					break;
				}
				this.state = 1823;
				this.strictIdentifier();
				this.state = 1825;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
				case 1:
					{
					this.state = 1824;
					this.identifierList();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rowFormat(): RowFormatContext {
		let _localctx: RowFormatContext = new RowFormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, sparkParser.RULE_rowFormat);
		try {
			this.state = 1878;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
			case 1:
				_localctx = new RowFormatSerdeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1829;
				this.match(sparkParser.ROW);
				this.state = 1830;
				this.match(sparkParser.FORMAT);
				this.state = 1831;
				this.match(sparkParser.SERDE);
				this.state = 1832;
				(_localctx as RowFormatSerdeContext)._name = this.match(sparkParser.STRING);
				this.state = 1836;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
				case 1:
					{
					this.state = 1833;
					this.match(sparkParser.WITH);
					this.state = 1834;
					this.match(sparkParser.SERDEPROPERTIES);
					this.state = 1835;
					(_localctx as RowFormatSerdeContext)._props = this.tablePropertyList();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new RowFormatDelimitedContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1838;
				this.match(sparkParser.ROW);
				this.state = 1839;
				this.match(sparkParser.FORMAT);
				this.state = 1840;
				this.match(sparkParser.DELIMITED);
				this.state = 1850;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
				case 1:
					{
					this.state = 1841;
					this.match(sparkParser.FIELDS);
					this.state = 1842;
					this.match(sparkParser.TERMINATED);
					this.state = 1843;
					this.match(sparkParser.BY);
					this.state = 1844;
					(_localctx as RowFormatDelimitedContext)._fieldsTerminatedBy = this.match(sparkParser.STRING);
					this.state = 1848;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 243, this._ctx) ) {
					case 1:
						{
						this.state = 1845;
						this.match(sparkParser.ESCAPED);
						this.state = 1846;
						this.match(sparkParser.BY);
						this.state = 1847;
						(_localctx as RowFormatDelimitedContext)._escapedBy = this.match(sparkParser.STRING);
						}
						break;
					}
					}
					break;
				}
				this.state = 1857;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 1852;
					this.match(sparkParser.COLLECTION);
					this.state = 1853;
					this.match(sparkParser.ITEMS);
					this.state = 1854;
					this.match(sparkParser.TERMINATED);
					this.state = 1855;
					this.match(sparkParser.BY);
					this.state = 1856;
					(_localctx as RowFormatDelimitedContext)._collectionItemsTerminatedBy = this.match(sparkParser.STRING);
					}
					break;
				}
				this.state = 1864;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
				case 1:
					{
					this.state = 1859;
					this.match(sparkParser.MAP);
					this.state = 1860;
					this.match(sparkParser.KEYS);
					this.state = 1861;
					this.match(sparkParser.TERMINATED);
					this.state = 1862;
					this.match(sparkParser.BY);
					this.state = 1863;
					(_localctx as RowFormatDelimitedContext)._keysTerminatedBy = this.match(sparkParser.STRING);
					}
					break;
				}
				this.state = 1870;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 247, this._ctx) ) {
				case 1:
					{
					this.state = 1866;
					this.match(sparkParser.LINES);
					this.state = 1867;
					this.match(sparkParser.TERMINATED);
					this.state = 1868;
					this.match(sparkParser.BY);
					this.state = 1869;
					(_localctx as RowFormatDelimitedContext)._linesSeparatedBy = this.match(sparkParser.STRING);
					}
					break;
				}
				this.state = 1876;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 248, this._ctx) ) {
				case 1:
					{
					this.state = 1872;
					this.match(sparkParser.NULL);
					this.state = 1873;
					this.match(sparkParser.DEFINED);
					this.state = 1874;
					this.match(sparkParser.AS);
					this.state = 1875;
					(_localctx as RowFormatDelimitedContext)._nullDefinedAs = this.match(sparkParser.STRING);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableIdentifier(): TableIdentifierContext {
		let _localctx: TableIdentifierContext = new TableIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, sparkParser.RULE_tableIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1883;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 250, this._ctx) ) {
			case 1:
				{
				this.state = 1880;
				_localctx._db = this.identifier();
				this.state = 1881;
				this.match(sparkParser.T__3);
				}
				break;
			}
			this.state = 1885;
			_localctx._table = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionIdentifier(): FunctionIdentifierContext {
		let _localctx: FunctionIdentifierContext = new FunctionIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, sparkParser.RULE_functionIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1890;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
			case 1:
				{
				this.state = 1887;
				_localctx._db = this.identifier();
				this.state = 1888;
				this.match(sparkParser.T__3);
				}
				break;
			}
			this.state = 1892;
			_localctx._j_function = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedExpression(): NamedExpressionContext {
		let _localctx: NamedExpressionContext = new NamedExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, sparkParser.RULE_namedExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1894;
			this.expression();
			this.state = 1902;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				{
				this.state = 1896;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 1895;
					this.match(sparkParser.AS);
					}
					break;
				}
				this.state = 1900;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sparkParser.SELECT:
				case sparkParser.FROM:
				case sparkParser.ADD:
				case sparkParser.AS:
				case sparkParser.ALL:
				case sparkParser.ANY:
				case sparkParser.DISTINCT:
				case sparkParser.WHERE:
				case sparkParser.GROUP:
				case sparkParser.BY:
				case sparkParser.GROUPING:
				case sparkParser.SETS:
				case sparkParser.CUBE:
				case sparkParser.ROLLUP:
				case sparkParser.ORDER:
				case sparkParser.HAVING:
				case sparkParser.LIMIT:
				case sparkParser.AT:
				case sparkParser.OR:
				case sparkParser.AND:
				case sparkParser.IN:
				case sparkParser.NOT:
				case sparkParser.NO:
				case sparkParser.EXISTS:
				case sparkParser.BETWEEN:
				case sparkParser.LIKE:
				case sparkParser.RLIKE:
				case sparkParser.IS:
				case sparkParser.NULL:
				case sparkParser.TRUE:
				case sparkParser.FALSE:
				case sparkParser.NULLS:
				case sparkParser.ASC:
				case sparkParser.DESC:
				case sparkParser.FOR:
				case sparkParser.INTERVAL:
				case sparkParser.CASE:
				case sparkParser.WHEN:
				case sparkParser.THEN:
				case sparkParser.ELSE:
				case sparkParser.END:
				case sparkParser.JOIN:
				case sparkParser.CROSS:
				case sparkParser.OUTER:
				case sparkParser.INNER:
				case sparkParser.LEFT:
				case sparkParser.SEMI:
				case sparkParser.RIGHT:
				case sparkParser.FULL:
				case sparkParser.NATURAL:
				case sparkParser.ON:
				case sparkParser.PIVOT:
				case sparkParser.LATERAL:
				case sparkParser.WINDOW:
				case sparkParser.OVER:
				case sparkParser.PARTITION:
				case sparkParser.RANGE:
				case sparkParser.ROWS:
				case sparkParser.UNBOUNDED:
				case sparkParser.PRECEDING:
				case sparkParser.FOLLOWING:
				case sparkParser.CURRENT:
				case sparkParser.FIRST:
				case sparkParser.AFTER:
				case sparkParser.LAST:
				case sparkParser.ROW:
				case sparkParser.WITH:
				case sparkParser.VALUES:
				case sparkParser.CREATE:
				case sparkParser.TABLE:
				case sparkParser.DIRECTORY:
				case sparkParser.VIEW:
				case sparkParser.REPLACE:
				case sparkParser.INSERT:
				case sparkParser.DELETE:
				case sparkParser.INTO:
				case sparkParser.DESCRIBE:
				case sparkParser.EXPLAIN:
				case sparkParser.FORMAT:
				case sparkParser.LOGICAL:
				case sparkParser.CODEGEN:
				case sparkParser.COST:
				case sparkParser.CAST:
				case sparkParser.SHOW:
				case sparkParser.TABLES:
				case sparkParser.COLUMNS:
				case sparkParser.COLUMN:
				case sparkParser.USE:
				case sparkParser.PARTITIONS:
				case sparkParser.FUNCTIONS:
				case sparkParser.DROP:
				case sparkParser.UNION:
				case sparkParser.EXCEPT:
				case sparkParser.SETMINUS:
				case sparkParser.INTERSECT:
				case sparkParser.TO:
				case sparkParser.TABLESAMPLE:
				case sparkParser.STRATIFY:
				case sparkParser.ALTER:
				case sparkParser.RENAME:
				case sparkParser.ARRAY:
				case sparkParser.MAP:
				case sparkParser.STRUCT:
				case sparkParser.COMMENT:
				case sparkParser.SET:
				case sparkParser.RESET:
				case sparkParser.DATA:
				case sparkParser.START:
				case sparkParser.TRANSACTION:
				case sparkParser.COMMIT:
				case sparkParser.ROLLBACK:
				case sparkParser.MACRO:
				case sparkParser.IGNORE:
				case sparkParser.BOTH:
				case sparkParser.LEADING:
				case sparkParser.TRAILING:
				case sparkParser.IF:
				case sparkParser.POSITION:
				case sparkParser.EXTRACT:
				case sparkParser.DIV:
				case sparkParser.PERCENTLIT:
				case sparkParser.BUCKET:
				case sparkParser.OUT:
				case sparkParser.OF:
				case sparkParser.SORT:
				case sparkParser.CLUSTER:
				case sparkParser.DISTRIBUTE:
				case sparkParser.OVERWRITE:
				case sparkParser.TRANSFORM:
				case sparkParser.REDUCE:
				case sparkParser.SERDE:
				case sparkParser.SERDEPROPERTIES:
				case sparkParser.RECORDREADER:
				case sparkParser.RECORDWRITER:
				case sparkParser.DELIMITED:
				case sparkParser.FIELDS:
				case sparkParser.TERMINATED:
				case sparkParser.COLLECTION:
				case sparkParser.ITEMS:
				case sparkParser.KEYS:
				case sparkParser.ESCAPED:
				case sparkParser.LINES:
				case sparkParser.SEPARATED:
				case sparkParser.FUNCTION:
				case sparkParser.EXTENDED:
				case sparkParser.REFRESH:
				case sparkParser.CLEAR:
				case sparkParser.CACHE:
				case sparkParser.UNCACHE:
				case sparkParser.LAZY:
				case sparkParser.FORMATTED:
				case sparkParser.GLOBAL:
				case sparkParser.TEMPORARY:
				case sparkParser.OPTIONS:
				case sparkParser.UNSET:
				case sparkParser.TBLPROPERTIES:
				case sparkParser.DBPROPERTIES:
				case sparkParser.BUCKETS:
				case sparkParser.SKEWED:
				case sparkParser.STORED:
				case sparkParser.DIRECTORIES:
				case sparkParser.LOCATION:
				case sparkParser.EXCHANGE:
				case sparkParser.ARCHIVE:
				case sparkParser.UNARCHIVE:
				case sparkParser.FILEFORMAT:
				case sparkParser.TOUCH:
				case sparkParser.COMPACT:
				case sparkParser.CONCATENATE:
				case sparkParser.CHANGE:
				case sparkParser.CASCADE:
				case sparkParser.RESTRICT:
				case sparkParser.CLUSTERED:
				case sparkParser.SORTED:
				case sparkParser.PURGE:
				case sparkParser.INPUTFORMAT:
				case sparkParser.OUTPUTFORMAT:
				case sparkParser.DATABASE:
				case sparkParser.DATABASES:
				case sparkParser.DFS:
				case sparkParser.TRUNCATE:
				case sparkParser.ANALYZE:
				case sparkParser.COMPUTE:
				case sparkParser.LIST:
				case sparkParser.STATISTICS:
				case sparkParser.PARTITIONED:
				case sparkParser.EXTERNAL:
				case sparkParser.DEFINED:
				case sparkParser.REVOKE:
				case sparkParser.GRANT:
				case sparkParser.LOCK:
				case sparkParser.UNLOCK:
				case sparkParser.MSCK:
				case sparkParser.REPAIR:
				case sparkParser.RECOVER:
				case sparkParser.EXPORT:
				case sparkParser.IMPORT:
				case sparkParser.LOAD:
				case sparkParser.ROLE:
				case sparkParser.ROLES:
				case sparkParser.COMPACTIONS:
				case sparkParser.PRINCIPALS:
				case sparkParser.TRANSACTIONS:
				case sparkParser.INDEX:
				case sparkParser.INDEXES:
				case sparkParser.LOCKS:
				case sparkParser.OPTION:
				case sparkParser.ANTI:
				case sparkParser.LOCAL:
				case sparkParser.INPATH:
				case sparkParser.IDENTIFIER:
				case sparkParser.BACKQUOTED_IDENTIFIER:
					{
					this.state = 1898;
					this.identifier();
					}
					break;
				case sparkParser.T__0:
					{
					this.state = 1899;
					this.identifierList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedExpressionSeq(): NamedExpressionSeqContext {
		let _localctx: NamedExpressionSeqContext = new NamedExpressionSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, sparkParser.RULE_namedExpressionSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1904;
			this.namedExpression();
			this.state = 1909;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1905;
					this.match(sparkParser.T__2);
					this.state = 1906;
					this.namedExpression();
					}
					}
				}
				this.state = 1911;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, sparkParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1912;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 142;
		this.enterRecursionRule(_localctx, 142, sparkParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1926;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1915;
				this.match(sparkParser.NOT);
				this.state = 1916;
				this.booleanExpression(5);
				}
				break;

			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1917;
				this.match(sparkParser.EXISTS);
				this.state = 1918;
				this.match(sparkParser.T__0);
				this.state = 1919;
				this.query();
				this.state = 1920;
				this.match(sparkParser.T__1);
				}
				break;

			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1922;
				this.valueExpression(0);
				this.state = 1924;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
				case 1:
					{
					this.state = 1923;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1936;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1934;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_booleanExpression);
						this.state = 1928;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1929;
						(_localctx as LogicalBinaryContext)._operator = this.match(sparkParser.AND);
						this.state = 1930;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_booleanExpression);
						this.state = 1931;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 1932;
						(_localctx as LogicalBinaryContext)._operator = this.match(sparkParser.OR);
						this.state = 1933;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1938;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, sparkParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1987;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.NOT) {
					{
					this.state = 1939;
					this.match(sparkParser.NOT);
					}
				}

				this.state = 1942;
				_localctx._kind = this.match(sparkParser.BETWEEN);
				this.state = 1943;
				_localctx._lower = this.valueExpression(0);
				this.state = 1944;
				this.match(sparkParser.AND);
				this.state = 1945;
				_localctx._upper = this.valueExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1948;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.NOT) {
					{
					this.state = 1947;
					this.match(sparkParser.NOT);
					}
				}

				this.state = 1950;
				_localctx._kind = this.match(sparkParser.IN);
				this.state = 1951;
				this.match(sparkParser.T__0);
				this.state = 1952;
				this.expression();
				this.state = 1957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === sparkParser.T__2) {
					{
					{
					this.state = 1953;
					this.match(sparkParser.T__2);
					this.state = 1954;
					this.expression();
					}
					}
					this.state = 1959;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1960;
				this.match(sparkParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.NOT) {
					{
					this.state = 1962;
					this.match(sparkParser.NOT);
					}
				}

				this.state = 1965;
				_localctx._kind = this.match(sparkParser.IN);
				this.state = 1966;
				this.match(sparkParser.T__0);
				this.state = 1967;
				this.query();
				this.state = 1968;
				this.match(sparkParser.T__1);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.NOT) {
					{
					this.state = 1970;
					this.match(sparkParser.NOT);
					}
				}

				this.state = 1973;
				_localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === sparkParser.LIKE || _la === sparkParser.RLIKE)) {
					_localctx._kind = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1974;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1975;
				this.match(sparkParser.IS);
				this.state = 1977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.NOT) {
					{
					this.state = 1976;
					this.match(sparkParser.NOT);
					}
				}

				this.state = 1979;
				_localctx._kind = this.match(sparkParser.NULL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1980;
				this.match(sparkParser.IS);
				this.state = 1982;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.NOT) {
					{
					this.state = 1981;
					this.match(sparkParser.NOT);
					}
				}

				this.state = 1984;
				_localctx._kind = this.match(sparkParser.DISTINCT);
				this.state = 1985;
				this.match(sparkParser.FROM);
				this.state = 1986;
				_localctx._right = this.valueExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public valueExpression(): ValueExpressionContext;
	public valueExpression(_p: number): ValueExpressionContext;
	// @RuleVersion(0)
	public valueExpression(_p?: number): ValueExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, _parentState);
		let _prevctx: ValueExpressionContext = _localctx;
		let _startState: number = 146;
		this.enterRecursionRule(_localctx, 146, sparkParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1993;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 268, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1990;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1991;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (sparkParser.PLUS - 138)) | (1 << (sparkParser.MINUS - 138)) | (1 << (sparkParser.TILDE - 138)))) !== 0))) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1992;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2016;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2014;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_valueExpression);
						this.state = 1995;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 1996;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (sparkParser.ASTERISK - 140)) | (1 << (sparkParser.SLASH - 140)) | (1 << (sparkParser.PERCENT - 140)) | (1 << (sparkParser.DIV - 140)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1997;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_valueExpression);
						this.state = 1998;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 1999;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (sparkParser.PLUS - 138)) | (1 << (sparkParser.MINUS - 138)) | (1 << (sparkParser.CONCAT_PIPE - 138)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2000;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_valueExpression);
						this.state = 2001;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 2002;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(sparkParser.AMPERSAND);
						this.state = 2003;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_valueExpression);
						this.state = 2004;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2005;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(sparkParser.HAT);
						this.state = 2006;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_valueExpression);
						this.state = 2007;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 2008;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(sparkParser.PIPE);
						this.state = 2009;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_valueExpression);
						this.state = 2010;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 2011;
						this.comparisonOperator();
						this.state = 2012;
						(_localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 2018;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public primaryExpression(): PrimaryExpressionContext;
	public primaryExpression(_p: number): PrimaryExpressionContext;
	// @RuleVersion(0)
	public primaryExpression(_p?: number): PrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = _localctx;
		let _startState: number = 148;
		this.enterRecursionRule(_localctx, 148, sparkParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2020;
				this.match(sparkParser.CASE);
				this.state = 2022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2021;
					this.whenClause();
					}
					}
					this.state = 2024;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === sparkParser.WHEN);
				this.state = 2028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.ELSE) {
					{
					this.state = 2026;
					this.match(sparkParser.ELSE);
					this.state = 2027;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2030;
				this.match(sparkParser.END);
				}
				break;

			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2032;
				this.match(sparkParser.CASE);
				this.state = 2033;
				(_localctx as SimpleCaseContext)._value = this.expression();
				this.state = 2035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2034;
					this.whenClause();
					}
					}
					this.state = 2037;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === sparkParser.WHEN);
				this.state = 2041;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.ELSE) {
					{
					this.state = 2039;
					this.match(sparkParser.ELSE);
					this.state = 2040;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2043;
				this.match(sparkParser.END);
				}
				break;

			case 3:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2045;
				this.match(sparkParser.CAST);
				this.state = 2046;
				this.match(sparkParser.T__0);
				this.state = 2047;
				this.expression();
				this.state = 2048;
				this.match(sparkParser.AS);
				this.state = 2049;
				this.dataType();
				this.state = 2050;
				this.match(sparkParser.T__1);
				}
				break;

			case 4:
				{
				_localctx = new StructContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2052;
				this.match(sparkParser.STRUCT);
				this.state = 2053;
				this.match(sparkParser.T__0);
				this.state = 2062;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.T__0) | (1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.PLUS - 128)) | (1 << (sparkParser.MINUS - 128)) | (1 << (sparkParser.ASTERISK - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.TILDE - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.STRING - 224)) | (1 << (sparkParser.BIGINT_LITERAL - 224)) | (1 << (sparkParser.SMALLINT_LITERAL - 224)) | (1 << (sparkParser.TINYINT_LITERAL - 224)) | (1 << (sparkParser.INTEGER_VALUE - 224)) | (1 << (sparkParser.DECIMAL_VALUE - 224)) | (1 << (sparkParser.DOUBLE_LITERAL - 224)) | (1 << (sparkParser.BIGDECIMAL_LITERAL - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
					{
					this.state = 2054;
					(_localctx as StructContext)._namedExpression = this.namedExpression();
					(_localctx as StructContext)._argument.push((_localctx as StructContext)._namedExpression);
					this.state = 2059;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sparkParser.T__2) {
						{
						{
						this.state = 2055;
						this.match(sparkParser.T__2);
						this.state = 2056;
						(_localctx as StructContext)._namedExpression = this.namedExpression();
						(_localctx as StructContext)._argument.push((_localctx as StructContext)._namedExpression);
						}
						}
						this.state = 2061;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2064;
				this.match(sparkParser.T__1);
				}
				break;

			case 5:
				{
				_localctx = new FirstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2065;
				this.match(sparkParser.FIRST);
				this.state = 2066;
				this.match(sparkParser.T__0);
				this.state = 2067;
				this.expression();
				this.state = 2070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.IGNORE) {
					{
					this.state = 2068;
					this.match(sparkParser.IGNORE);
					this.state = 2069;
					this.match(sparkParser.NULLS);
					}
				}

				this.state = 2072;
				this.match(sparkParser.T__1);
				}
				break;

			case 6:
				{
				_localctx = new LastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2074;
				this.match(sparkParser.LAST);
				this.state = 2075;
				this.match(sparkParser.T__0);
				this.state = 2076;
				this.expression();
				this.state = 2079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.IGNORE) {
					{
					this.state = 2077;
					this.match(sparkParser.IGNORE);
					this.state = 2078;
					this.match(sparkParser.NULLS);
					}
				}

				this.state = 2081;
				this.match(sparkParser.T__1);
				}
				break;

			case 7:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2083;
				this.match(sparkParser.POSITION);
				this.state = 2084;
				this.match(sparkParser.T__0);
				this.state = 2085;
				(_localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 2086;
				this.match(sparkParser.IN);
				this.state = 2087;
				(_localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 2088;
				this.match(sparkParser.T__1);
				}
				break;

			case 8:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2090;
				this.constant();
				}
				break;

			case 9:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2091;
				this.match(sparkParser.ASTERISK);
				}
				break;

			case 10:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2092;
				this.qualifiedName();
				this.state = 2093;
				this.match(sparkParser.T__3);
				this.state = 2094;
				this.match(sparkParser.ASTERISK);
				}
				break;

			case 11:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2096;
				this.match(sparkParser.T__0);
				this.state = 2097;
				this.namedExpression();
				this.state = 2100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2098;
					this.match(sparkParser.T__2);
					this.state = 2099;
					this.namedExpression();
					}
					}
					this.state = 2102;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === sparkParser.T__2);
				this.state = 2104;
				this.match(sparkParser.T__1);
				}
				break;

			case 12:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2106;
				this.match(sparkParser.T__0);
				this.state = 2107;
				this.query();
				this.state = 2108;
				this.match(sparkParser.T__1);
				}
				break;

			case 13:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2110;
				this.qualifiedName();
				this.state = 2111;
				this.match(sparkParser.T__0);
				this.state = 2123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.T__0) | (1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.PLUS - 128)) | (1 << (sparkParser.MINUS - 128)) | (1 << (sparkParser.ASTERISK - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.TILDE - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.STRING - 224)) | (1 << (sparkParser.BIGINT_LITERAL - 224)) | (1 << (sparkParser.SMALLINT_LITERAL - 224)) | (1 << (sparkParser.TINYINT_LITERAL - 224)) | (1 << (sparkParser.INTEGER_VALUE - 224)) | (1 << (sparkParser.DECIMAL_VALUE - 224)) | (1 << (sparkParser.DOUBLE_LITERAL - 224)) | (1 << (sparkParser.BIGDECIMAL_LITERAL - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
					{
					this.state = 2113;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
					case 1:
						{
						this.state = 2112;
						this.setQuantifier();
						}
						break;
					}
					this.state = 2115;
					(_localctx as FunctionCallContext)._expression = this.expression();
					(_localctx as FunctionCallContext)._argument.push((_localctx as FunctionCallContext)._expression);
					this.state = 2120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sparkParser.T__2) {
						{
						{
						this.state = 2116;
						this.match(sparkParser.T__2);
						this.state = 2117;
						(_localctx as FunctionCallContext)._expression = this.expression();
						(_localctx as FunctionCallContext)._argument.push((_localctx as FunctionCallContext)._expression);
						}
						}
						this.state = 2122;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2125;
				this.match(sparkParser.T__1);
				this.state = 2128;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
				case 1:
					{
					this.state = 2126;
					this.match(sparkParser.OVER);
					this.state = 2127;
					this.windowSpec();
					}
					break;
				}
				}
				break;

			case 14:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2130;
				this.qualifiedName();
				this.state = 2131;
				this.match(sparkParser.T__0);
				this.state = 2132;
				(_localctx as FunctionCallContext)._trimOption = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (sparkParser.BOTH - 124)) | (1 << (sparkParser.LEADING - 124)) | (1 << (sparkParser.TRAILING - 124)))) !== 0))) {
					(_localctx as FunctionCallContext)._trimOption = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2133;
				(_localctx as FunctionCallContext)._expression = this.expression();
				(_localctx as FunctionCallContext)._argument.push((_localctx as FunctionCallContext)._expression);
				this.state = 2134;
				this.match(sparkParser.FROM);
				this.state = 2135;
				(_localctx as FunctionCallContext)._expression = this.expression();
				(_localctx as FunctionCallContext)._argument.push((_localctx as FunctionCallContext)._expression);
				this.state = 2136;
				this.match(sparkParser.T__1);
				}
				break;

			case 15:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2138;
				this.match(sparkParser.IDENTIFIER);
				this.state = 2139;
				this.match(sparkParser.T__6);
				this.state = 2140;
				this.expression();
				}
				break;

			case 16:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2141;
				this.match(sparkParser.T__0);
				this.state = 2142;
				this.match(sparkParser.IDENTIFIER);
				this.state = 2145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2143;
					this.match(sparkParser.T__2);
					this.state = 2144;
					this.match(sparkParser.IDENTIFIER);
					}
					}
					this.state = 2147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === sparkParser.T__2);
				this.state = 2149;
				this.match(sparkParser.T__1);
				this.state = 2150;
				this.match(sparkParser.T__6);
				this.state = 2151;
				this.expression();
				}
				break;

			case 17:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2152;
				this.identifier();
				}
				break;

			case 18:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2153;
				this.match(sparkParser.T__0);
				this.state = 2154;
				this.expression();
				this.state = 2155;
				this.match(sparkParser.T__1);
				}
				break;

			case 19:
				{
				_localctx = new ExtractContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2157;
				this.match(sparkParser.EXTRACT);
				this.state = 2158;
				this.match(sparkParser.T__0);
				this.state = 2159;
				(_localctx as ExtractContext)._field = this.identifier();
				this.state = 2160;
				this.match(sparkParser.FROM);
				this.state = 2161;
				(_localctx as ExtractContext)._source = this.valueExpression(0);
				this.state = 2162;
				this.match(sparkParser.T__1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2176;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 287, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2174;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
					case 1:
						{
						_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_primaryExpression);
						this.state = 2166;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 2167;
						this.match(sparkParser.T__7);
						this.state = 2168;
						(_localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 2169;
						this.match(sparkParser.T__8);
						}
						break;

					case 2:
						{
						_localctx = new DereferenceContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, sparkParser.RULE_primaryExpression);
						this.state = 2171;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2172;
						this.match(sparkParser.T__3);
						this.state = 2173;
						(_localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 2178;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 287, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, sparkParser.RULE_constant);
		try {
			let _alt: number;
			this.state = 2191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2179;
				this.match(sparkParser.NULL);
				}
				break;

			case 2:
				_localctx = new IntervalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2180;
				this.interval();
				}
				break;

			case 3:
				_localctx = new TypeConstructorContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2181;
				this.identifier();
				this.state = 2182;
				this.match(sparkParser.STRING);
				}
				break;

			case 4:
				_localctx = new NumericLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2184;
				this.number();
				}
				break;

			case 5:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2185;
				this.booleanValue();
				}
				break;

			case 6:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2187;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 2186;
						this.match(sparkParser.STRING);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2189;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, sparkParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2193;
			_la = this._input.LA(1);
			if (!(((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sparkParser.EQ - 130)) | (1 << (sparkParser.NSEQ - 130)) | (1 << (sparkParser.NEQ - 130)) | (1 << (sparkParser.NEQJ - 130)) | (1 << (sparkParser.LT - 130)) | (1 << (sparkParser.LTE - 130)) | (1 << (sparkParser.GT - 130)) | (1 << (sparkParser.GTE - 130)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arithmeticOperator(): ArithmeticOperatorContext {
		let _localctx: ArithmeticOperatorContext = new ArithmeticOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, sparkParser.RULE_arithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2195;
			_la = this._input.LA(1);
			if (!(((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (sparkParser.PLUS - 138)) | (1 << (sparkParser.MINUS - 138)) | (1 << (sparkParser.ASTERISK - 138)) | (1 << (sparkParser.SLASH - 138)) | (1 << (sparkParser.PERCENT - 138)) | (1 << (sparkParser.DIV - 138)) | (1 << (sparkParser.TILDE - 138)) | (1 << (sparkParser.AMPERSAND - 138)) | (1 << (sparkParser.PIPE - 138)) | (1 << (sparkParser.CONCAT_PIPE - 138)) | (1 << (sparkParser.HAT - 138)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicateOperator(): PredicateOperatorContext {
		let _localctx: PredicateOperatorContext = new PredicateOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, sparkParser.RULE_predicateOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2197;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (sparkParser.OR - 29)) | (1 << (sparkParser.AND - 29)) | (1 << (sparkParser.IN - 29)) | (1 << (sparkParser.NOT - 29)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, sparkParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2199;
			_la = this._input.LA(1);
			if (!(_la === sparkParser.TRUE || _la === sparkParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interval(): IntervalContext {
		let _localctx: IntervalContext = new IntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, sparkParser.RULE_interval);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2201;
			this.match(sparkParser.INTERVAL);
			this.state = 2205;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 290, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2202;
					this.intervalField();
					}
					}
				}
				this.state = 2207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 290, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalField(): IntervalFieldContext {
		let _localctx: IntervalFieldContext = new IntervalFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, sparkParser.RULE_intervalField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2208;
			_localctx._value = this.intervalValue();
			this.state = 2209;
			_localctx._unit = this.identifier();
			this.state = 2212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 291, this._ctx) ) {
			case 1:
				{
				this.state = 2210;
				this.match(sparkParser.TO);
				this.state = 2211;
				_localctx._to = this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalValue(): IntervalValueContext {
		let _localctx: IntervalValueContext = new IntervalValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, sparkParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 2219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.PLUS:
			case sparkParser.MINUS:
			case sparkParser.INTEGER_VALUE:
			case sparkParser.DECIMAL_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.PLUS || _la === sparkParser.MINUS) {
					{
					this.state = 2214;
					_la = this._input.LA(1);
					if (!(_la === sparkParser.PLUS || _la === sparkParser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 2217;
				_la = this._input.LA(1);
				if (!(_la === sparkParser.INTEGER_VALUE || _la === sparkParser.DECIMAL_VALUE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case sparkParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2218;
				this.match(sparkParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public colPosition(): ColPositionContext {
		let _localctx: ColPositionContext = new ColPositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, sparkParser.RULE_colPosition);
		try {
			this.state = 2224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.FIRST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2221;
				this.match(sparkParser.FIRST);
				}
				break;
			case sparkParser.AFTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2222;
				this.match(sparkParser.AFTER);
				this.state = 2223;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, sparkParser.RULE_dataType);
		let _la: number;
		try {
			this.state = 2260;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				_localctx = new ComplexDataTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2226;
				(_localctx as ComplexDataTypeContext)._complex = this.match(sparkParser.ARRAY);
				this.state = 2227;
				this.match(sparkParser.LT);
				this.state = 2228;
				this.dataType();
				this.state = 2229;
				this.match(sparkParser.GT);
				}
				break;

			case 2:
				_localctx = new ComplexDataTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2231;
				(_localctx as ComplexDataTypeContext)._complex = this.match(sparkParser.MAP);
				this.state = 2232;
				this.match(sparkParser.LT);
				this.state = 2233;
				this.dataType();
				this.state = 2234;
				this.match(sparkParser.T__2);
				this.state = 2235;
				this.dataType();
				this.state = 2236;
				this.match(sparkParser.GT);
				}
				break;

			case 3:
				_localctx = new ComplexDataTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2238;
				(_localctx as ComplexDataTypeContext)._complex = this.match(sparkParser.STRUCT);
				this.state = 2245;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sparkParser.LT:
					{
					this.state = 2239;
					this.match(sparkParser.LT);
					this.state = 2241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.JOIN - 32)) | (1 << (sparkParser.CROSS - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.INNER - 32)) | (1 << (sparkParser.LEFT - 32)) | (1 << (sparkParser.SEMI - 32)) | (1 << (sparkParser.RIGHT - 32)) | (1 << (sparkParser.FULL - 32)) | (1 << (sparkParser.NATURAL - 32)) | (1 << (sparkParser.ON - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.UNION - 96)) | (1 << (sparkParser.EXCEPT - 96)) | (1 << (sparkParser.SETMINUS - 96)) | (1 << (sparkParser.INTERSECT - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.ANTI - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)) | (1 << (sparkParser.IDENTIFIER - 224)) | (1 << (sparkParser.BACKQUOTED_IDENTIFIER - 224)))) !== 0)) {
						{
						this.state = 2240;
						this.complexColTypeList();
						}
					}

					this.state = 2243;
					this.match(sparkParser.GT);
					}
					break;
				case sparkParser.NEQ:
					{
					this.state = 2244;
					this.match(sparkParser.NEQ);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 4:
				_localctx = new PrimitiveDataTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2247;
				this.identifier();
				this.state = 2258;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
				case 1:
					{
					this.state = 2248;
					this.match(sparkParser.T__0);
					this.state = 2249;
					this.match(sparkParser.INTEGER_VALUE);
					this.state = 2254;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sparkParser.T__2) {
						{
						{
						this.state = 2250;
						this.match(sparkParser.T__2);
						this.state = 2251;
						this.match(sparkParser.INTEGER_VALUE);
						}
						}
						this.state = 2256;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2257;
					this.match(sparkParser.T__1);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public colTypeList(): ColTypeListContext {
		let _localctx: ColTypeListContext = new ColTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, sparkParser.RULE_colTypeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2262;
			this.colType();
			this.state = 2267;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2263;
					this.match(sparkParser.T__2);
					this.state = 2264;
					this.colType();
					}
					}
				}
				this.state = 2269;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public colType(): ColTypeContext {
		let _localctx: ColTypeContext = new ColTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, sparkParser.RULE_colType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2270;
			this.identifier();
			this.state = 2271;
			this.dataType();
			this.state = 2274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 301, this._ctx) ) {
			case 1:
				{
				this.state = 2272;
				this.match(sparkParser.COMMENT);
				this.state = 2273;
				this.match(sparkParser.STRING);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public complexColTypeList(): ComplexColTypeListContext {
		let _localctx: ComplexColTypeListContext = new ComplexColTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, sparkParser.RULE_complexColTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2276;
			this.complexColType();
			this.state = 2281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sparkParser.T__2) {
				{
				{
				this.state = 2277;
				this.match(sparkParser.T__2);
				this.state = 2278;
				this.complexColType();
				}
				}
				this.state = 2283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public complexColType(): ComplexColTypeContext {
		let _localctx: ComplexColTypeContext = new ComplexColTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, sparkParser.RULE_complexColType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2284;
			this.identifier();
			this.state = 2285;
			this.match(sparkParser.T__9);
			this.state = 2286;
			this.dataType();
			this.state = 2289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sparkParser.COMMENT) {
				{
				this.state = 2287;
				this.match(sparkParser.COMMENT);
				this.state = 2288;
				this.match(sparkParser.STRING);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, sparkParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2291;
			this.match(sparkParser.WHEN);
			this.state = 2292;
			_localctx._condition = this.expression();
			this.state = 2293;
			this.match(sparkParser.THEN);
			this.state = 2294;
			_localctx._result = this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windows(): WindowsContext {
		let _localctx: WindowsContext = new WindowsContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, sparkParser.RULE_windows);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2296;
			this.match(sparkParser.WINDOW);
			this.state = 2297;
			this.namedWindow();
			this.state = 2302;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2298;
					this.match(sparkParser.T__2);
					this.state = 2299;
					this.namedWindow();
					}
					}
				}
				this.state = 2304;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedWindow(): NamedWindowContext {
		let _localctx: NamedWindowContext = new NamedWindowContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, sparkParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2305;
			this.identifier();
			this.state = 2306;
			this.match(sparkParser.AS);
			this.state = 2307;
			this.windowSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowSpec(): WindowSpecContext {
		let _localctx: WindowSpecContext = new WindowSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, sparkParser.RULE_windowSpec);
		let _la: number;
		try {
			this.state = 2351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.SELECT:
			case sparkParser.FROM:
			case sparkParser.ADD:
			case sparkParser.AS:
			case sparkParser.ALL:
			case sparkParser.ANY:
			case sparkParser.DISTINCT:
			case sparkParser.WHERE:
			case sparkParser.GROUP:
			case sparkParser.BY:
			case sparkParser.GROUPING:
			case sparkParser.SETS:
			case sparkParser.CUBE:
			case sparkParser.ROLLUP:
			case sparkParser.ORDER:
			case sparkParser.HAVING:
			case sparkParser.LIMIT:
			case sparkParser.AT:
			case sparkParser.OR:
			case sparkParser.AND:
			case sparkParser.IN:
			case sparkParser.NOT:
			case sparkParser.NO:
			case sparkParser.EXISTS:
			case sparkParser.BETWEEN:
			case sparkParser.LIKE:
			case sparkParser.RLIKE:
			case sparkParser.IS:
			case sparkParser.NULL:
			case sparkParser.TRUE:
			case sparkParser.FALSE:
			case sparkParser.NULLS:
			case sparkParser.ASC:
			case sparkParser.DESC:
			case sparkParser.FOR:
			case sparkParser.INTERVAL:
			case sparkParser.CASE:
			case sparkParser.WHEN:
			case sparkParser.THEN:
			case sparkParser.ELSE:
			case sparkParser.END:
			case sparkParser.JOIN:
			case sparkParser.CROSS:
			case sparkParser.OUTER:
			case sparkParser.INNER:
			case sparkParser.LEFT:
			case sparkParser.SEMI:
			case sparkParser.RIGHT:
			case sparkParser.FULL:
			case sparkParser.NATURAL:
			case sparkParser.ON:
			case sparkParser.PIVOT:
			case sparkParser.LATERAL:
			case sparkParser.WINDOW:
			case sparkParser.OVER:
			case sparkParser.PARTITION:
			case sparkParser.RANGE:
			case sparkParser.ROWS:
			case sparkParser.UNBOUNDED:
			case sparkParser.PRECEDING:
			case sparkParser.FOLLOWING:
			case sparkParser.CURRENT:
			case sparkParser.FIRST:
			case sparkParser.AFTER:
			case sparkParser.LAST:
			case sparkParser.ROW:
			case sparkParser.WITH:
			case sparkParser.VALUES:
			case sparkParser.CREATE:
			case sparkParser.TABLE:
			case sparkParser.DIRECTORY:
			case sparkParser.VIEW:
			case sparkParser.REPLACE:
			case sparkParser.INSERT:
			case sparkParser.DELETE:
			case sparkParser.INTO:
			case sparkParser.DESCRIBE:
			case sparkParser.EXPLAIN:
			case sparkParser.FORMAT:
			case sparkParser.LOGICAL:
			case sparkParser.CODEGEN:
			case sparkParser.COST:
			case sparkParser.CAST:
			case sparkParser.SHOW:
			case sparkParser.TABLES:
			case sparkParser.COLUMNS:
			case sparkParser.COLUMN:
			case sparkParser.USE:
			case sparkParser.PARTITIONS:
			case sparkParser.FUNCTIONS:
			case sparkParser.DROP:
			case sparkParser.UNION:
			case sparkParser.EXCEPT:
			case sparkParser.SETMINUS:
			case sparkParser.INTERSECT:
			case sparkParser.TO:
			case sparkParser.TABLESAMPLE:
			case sparkParser.STRATIFY:
			case sparkParser.ALTER:
			case sparkParser.RENAME:
			case sparkParser.ARRAY:
			case sparkParser.MAP:
			case sparkParser.STRUCT:
			case sparkParser.COMMENT:
			case sparkParser.SET:
			case sparkParser.RESET:
			case sparkParser.DATA:
			case sparkParser.START:
			case sparkParser.TRANSACTION:
			case sparkParser.COMMIT:
			case sparkParser.ROLLBACK:
			case sparkParser.MACRO:
			case sparkParser.IGNORE:
			case sparkParser.BOTH:
			case sparkParser.LEADING:
			case sparkParser.TRAILING:
			case sparkParser.IF:
			case sparkParser.POSITION:
			case sparkParser.EXTRACT:
			case sparkParser.DIV:
			case sparkParser.PERCENTLIT:
			case sparkParser.BUCKET:
			case sparkParser.OUT:
			case sparkParser.OF:
			case sparkParser.SORT:
			case sparkParser.CLUSTER:
			case sparkParser.DISTRIBUTE:
			case sparkParser.OVERWRITE:
			case sparkParser.TRANSFORM:
			case sparkParser.REDUCE:
			case sparkParser.SERDE:
			case sparkParser.SERDEPROPERTIES:
			case sparkParser.RECORDREADER:
			case sparkParser.RECORDWRITER:
			case sparkParser.DELIMITED:
			case sparkParser.FIELDS:
			case sparkParser.TERMINATED:
			case sparkParser.COLLECTION:
			case sparkParser.ITEMS:
			case sparkParser.KEYS:
			case sparkParser.ESCAPED:
			case sparkParser.LINES:
			case sparkParser.SEPARATED:
			case sparkParser.FUNCTION:
			case sparkParser.EXTENDED:
			case sparkParser.REFRESH:
			case sparkParser.CLEAR:
			case sparkParser.CACHE:
			case sparkParser.UNCACHE:
			case sparkParser.LAZY:
			case sparkParser.FORMATTED:
			case sparkParser.GLOBAL:
			case sparkParser.TEMPORARY:
			case sparkParser.OPTIONS:
			case sparkParser.UNSET:
			case sparkParser.TBLPROPERTIES:
			case sparkParser.DBPROPERTIES:
			case sparkParser.BUCKETS:
			case sparkParser.SKEWED:
			case sparkParser.STORED:
			case sparkParser.DIRECTORIES:
			case sparkParser.LOCATION:
			case sparkParser.EXCHANGE:
			case sparkParser.ARCHIVE:
			case sparkParser.UNARCHIVE:
			case sparkParser.FILEFORMAT:
			case sparkParser.TOUCH:
			case sparkParser.COMPACT:
			case sparkParser.CONCATENATE:
			case sparkParser.CHANGE:
			case sparkParser.CASCADE:
			case sparkParser.RESTRICT:
			case sparkParser.CLUSTERED:
			case sparkParser.SORTED:
			case sparkParser.PURGE:
			case sparkParser.INPUTFORMAT:
			case sparkParser.OUTPUTFORMAT:
			case sparkParser.DATABASE:
			case sparkParser.DATABASES:
			case sparkParser.DFS:
			case sparkParser.TRUNCATE:
			case sparkParser.ANALYZE:
			case sparkParser.COMPUTE:
			case sparkParser.LIST:
			case sparkParser.STATISTICS:
			case sparkParser.PARTITIONED:
			case sparkParser.EXTERNAL:
			case sparkParser.DEFINED:
			case sparkParser.REVOKE:
			case sparkParser.GRANT:
			case sparkParser.LOCK:
			case sparkParser.UNLOCK:
			case sparkParser.MSCK:
			case sparkParser.REPAIR:
			case sparkParser.RECOVER:
			case sparkParser.EXPORT:
			case sparkParser.IMPORT:
			case sparkParser.LOAD:
			case sparkParser.ROLE:
			case sparkParser.ROLES:
			case sparkParser.COMPACTIONS:
			case sparkParser.PRINCIPALS:
			case sparkParser.TRANSACTIONS:
			case sparkParser.INDEX:
			case sparkParser.INDEXES:
			case sparkParser.LOCKS:
			case sparkParser.OPTION:
			case sparkParser.ANTI:
			case sparkParser.LOCAL:
			case sparkParser.INPATH:
			case sparkParser.IDENTIFIER:
			case sparkParser.BACKQUOTED_IDENTIFIER:
				_localctx = new WindowRefContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2309;
				(_localctx as WindowRefContext)._name = this.identifier();
				}
				break;
			case sparkParser.T__0:
				_localctx = new WindowDefContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2310;
				this.match(sparkParser.T__0);
				this.state = 2345;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sparkParser.CLUSTER:
					{
					this.state = 2311;
					this.match(sparkParser.CLUSTER);
					this.state = 2312;
					this.match(sparkParser.BY);
					this.state = 2313;
					(_localctx as WindowDefContext)._expression = this.expression();
					(_localctx as WindowDefContext)._partition.push((_localctx as WindowDefContext)._expression);
					this.state = 2318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === sparkParser.T__2) {
						{
						{
						this.state = 2314;
						this.match(sparkParser.T__2);
						this.state = 2315;
						(_localctx as WindowDefContext)._expression = this.expression();
						(_localctx as WindowDefContext)._partition.push((_localctx as WindowDefContext)._expression);
						}
						}
						this.state = 2320;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case sparkParser.T__1:
				case sparkParser.ORDER:
				case sparkParser.PARTITION:
				case sparkParser.RANGE:
				case sparkParser.ROWS:
				case sparkParser.SORT:
				case sparkParser.DISTRIBUTE:
					{
					this.state = 2331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sparkParser.PARTITION || _la === sparkParser.DISTRIBUTE) {
						{
						this.state = 2321;
						_la = this._input.LA(1);
						if (!(_la === sparkParser.PARTITION || _la === sparkParser.DISTRIBUTE)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2322;
						this.match(sparkParser.BY);
						this.state = 2323;
						(_localctx as WindowDefContext)._expression = this.expression();
						(_localctx as WindowDefContext)._partition.push((_localctx as WindowDefContext)._expression);
						this.state = 2328;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === sparkParser.T__2) {
							{
							{
							this.state = 2324;
							this.match(sparkParser.T__2);
							this.state = 2325;
							(_localctx as WindowDefContext)._expression = this.expression();
							(_localctx as WindowDefContext)._partition.push((_localctx as WindowDefContext)._expression);
							}
							}
							this.state = 2330;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					this.state = 2343;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === sparkParser.ORDER || _la === sparkParser.SORT) {
						{
						this.state = 2333;
						_la = this._input.LA(1);
						if (!(_la === sparkParser.ORDER || _la === sparkParser.SORT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2334;
						this.match(sparkParser.BY);
						this.state = 2335;
						this.sortItem();
						this.state = 2340;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === sparkParser.T__2) {
							{
							{
							this.state = 2336;
							this.match(sparkParser.T__2);
							this.state = 2337;
							this.sortItem();
							}
							}
							this.state = 2342;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.RANGE || _la === sparkParser.ROWS) {
					{
					this.state = 2347;
					this.windowFrame();
					}
				}

				this.state = 2350;
				this.match(sparkParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowFrame(): WindowFrameContext {
		let _localctx: WindowFrameContext = new WindowFrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, sparkParser.RULE_windowFrame);
		try {
			this.state = 2369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 313, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2353;
				_localctx._frameType = this.match(sparkParser.RANGE);
				this.state = 2354;
				_localctx._start = this.frameBound();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2355;
				_localctx._frameType = this.match(sparkParser.ROWS);
				this.state = 2356;
				_localctx._start = this.frameBound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2357;
				_localctx._frameType = this.match(sparkParser.RANGE);
				this.state = 2358;
				this.match(sparkParser.BETWEEN);
				this.state = 2359;
				_localctx._start = this.frameBound();
				this.state = 2360;
				this.match(sparkParser.AND);
				this.state = 2361;
				_localctx._end = this.frameBound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2363;
				_localctx._frameType = this.match(sparkParser.ROWS);
				this.state = 2364;
				this.match(sparkParser.BETWEEN);
				this.state = 2365;
				_localctx._start = this.frameBound();
				this.state = 2366;
				this.match(sparkParser.AND);
				this.state = 2367;
				_localctx._end = this.frameBound();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frameBound(): FrameBoundContext {
		let _localctx: FrameBoundContext = new FrameBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, sparkParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2378;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 314, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2371;
				this.match(sparkParser.UNBOUNDED);
				this.state = 2372;
				_localctx._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === sparkParser.PRECEDING || _la === sparkParser.FOLLOWING)) {
					_localctx._boundType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2373;
				_localctx._boundType = this.match(sparkParser.CURRENT);
				this.state = 2374;
				this.match(sparkParser.ROW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2375;
				this.expression();
				this.state = 2376;
				_localctx._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === sparkParser.PRECEDING || _la === sparkParser.FOLLOWING)) {
					_localctx._boundType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, sparkParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2380;
			this.identifier();
			this.state = 2385;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2381;
					this.match(sparkParser.T__3);
					this.state = 2382;
					this.identifier();
					}
					}
				}
				this.state = 2387;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, sparkParser.RULE_identifier);
		try {
			this.state = 2403;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.SELECT:
			case sparkParser.FROM:
			case sparkParser.ADD:
			case sparkParser.AS:
			case sparkParser.ALL:
			case sparkParser.ANY:
			case sparkParser.DISTINCT:
			case sparkParser.WHERE:
			case sparkParser.GROUP:
			case sparkParser.BY:
			case sparkParser.GROUPING:
			case sparkParser.SETS:
			case sparkParser.CUBE:
			case sparkParser.ROLLUP:
			case sparkParser.ORDER:
			case sparkParser.HAVING:
			case sparkParser.LIMIT:
			case sparkParser.AT:
			case sparkParser.OR:
			case sparkParser.AND:
			case sparkParser.IN:
			case sparkParser.NOT:
			case sparkParser.NO:
			case sparkParser.EXISTS:
			case sparkParser.BETWEEN:
			case sparkParser.LIKE:
			case sparkParser.RLIKE:
			case sparkParser.IS:
			case sparkParser.NULL:
			case sparkParser.TRUE:
			case sparkParser.FALSE:
			case sparkParser.NULLS:
			case sparkParser.ASC:
			case sparkParser.DESC:
			case sparkParser.FOR:
			case sparkParser.INTERVAL:
			case sparkParser.CASE:
			case sparkParser.WHEN:
			case sparkParser.THEN:
			case sparkParser.ELSE:
			case sparkParser.END:
			case sparkParser.OUTER:
			case sparkParser.PIVOT:
			case sparkParser.LATERAL:
			case sparkParser.WINDOW:
			case sparkParser.OVER:
			case sparkParser.PARTITION:
			case sparkParser.RANGE:
			case sparkParser.ROWS:
			case sparkParser.UNBOUNDED:
			case sparkParser.PRECEDING:
			case sparkParser.FOLLOWING:
			case sparkParser.CURRENT:
			case sparkParser.FIRST:
			case sparkParser.AFTER:
			case sparkParser.LAST:
			case sparkParser.ROW:
			case sparkParser.WITH:
			case sparkParser.VALUES:
			case sparkParser.CREATE:
			case sparkParser.TABLE:
			case sparkParser.DIRECTORY:
			case sparkParser.VIEW:
			case sparkParser.REPLACE:
			case sparkParser.INSERT:
			case sparkParser.DELETE:
			case sparkParser.INTO:
			case sparkParser.DESCRIBE:
			case sparkParser.EXPLAIN:
			case sparkParser.FORMAT:
			case sparkParser.LOGICAL:
			case sparkParser.CODEGEN:
			case sparkParser.COST:
			case sparkParser.CAST:
			case sparkParser.SHOW:
			case sparkParser.TABLES:
			case sparkParser.COLUMNS:
			case sparkParser.COLUMN:
			case sparkParser.USE:
			case sparkParser.PARTITIONS:
			case sparkParser.FUNCTIONS:
			case sparkParser.DROP:
			case sparkParser.TO:
			case sparkParser.TABLESAMPLE:
			case sparkParser.STRATIFY:
			case sparkParser.ALTER:
			case sparkParser.RENAME:
			case sparkParser.ARRAY:
			case sparkParser.MAP:
			case sparkParser.STRUCT:
			case sparkParser.COMMENT:
			case sparkParser.SET:
			case sparkParser.RESET:
			case sparkParser.DATA:
			case sparkParser.START:
			case sparkParser.TRANSACTION:
			case sparkParser.COMMIT:
			case sparkParser.ROLLBACK:
			case sparkParser.MACRO:
			case sparkParser.IGNORE:
			case sparkParser.BOTH:
			case sparkParser.LEADING:
			case sparkParser.TRAILING:
			case sparkParser.IF:
			case sparkParser.POSITION:
			case sparkParser.EXTRACT:
			case sparkParser.DIV:
			case sparkParser.PERCENTLIT:
			case sparkParser.BUCKET:
			case sparkParser.OUT:
			case sparkParser.OF:
			case sparkParser.SORT:
			case sparkParser.CLUSTER:
			case sparkParser.DISTRIBUTE:
			case sparkParser.OVERWRITE:
			case sparkParser.TRANSFORM:
			case sparkParser.REDUCE:
			case sparkParser.SERDE:
			case sparkParser.SERDEPROPERTIES:
			case sparkParser.RECORDREADER:
			case sparkParser.RECORDWRITER:
			case sparkParser.DELIMITED:
			case sparkParser.FIELDS:
			case sparkParser.TERMINATED:
			case sparkParser.COLLECTION:
			case sparkParser.ITEMS:
			case sparkParser.KEYS:
			case sparkParser.ESCAPED:
			case sparkParser.LINES:
			case sparkParser.SEPARATED:
			case sparkParser.FUNCTION:
			case sparkParser.EXTENDED:
			case sparkParser.REFRESH:
			case sparkParser.CLEAR:
			case sparkParser.CACHE:
			case sparkParser.UNCACHE:
			case sparkParser.LAZY:
			case sparkParser.FORMATTED:
			case sparkParser.GLOBAL:
			case sparkParser.TEMPORARY:
			case sparkParser.OPTIONS:
			case sparkParser.UNSET:
			case sparkParser.TBLPROPERTIES:
			case sparkParser.DBPROPERTIES:
			case sparkParser.BUCKETS:
			case sparkParser.SKEWED:
			case sparkParser.STORED:
			case sparkParser.DIRECTORIES:
			case sparkParser.LOCATION:
			case sparkParser.EXCHANGE:
			case sparkParser.ARCHIVE:
			case sparkParser.UNARCHIVE:
			case sparkParser.FILEFORMAT:
			case sparkParser.TOUCH:
			case sparkParser.COMPACT:
			case sparkParser.CONCATENATE:
			case sparkParser.CHANGE:
			case sparkParser.CASCADE:
			case sparkParser.RESTRICT:
			case sparkParser.CLUSTERED:
			case sparkParser.SORTED:
			case sparkParser.PURGE:
			case sparkParser.INPUTFORMAT:
			case sparkParser.OUTPUTFORMAT:
			case sparkParser.DATABASE:
			case sparkParser.DATABASES:
			case sparkParser.DFS:
			case sparkParser.TRUNCATE:
			case sparkParser.ANALYZE:
			case sparkParser.COMPUTE:
			case sparkParser.LIST:
			case sparkParser.STATISTICS:
			case sparkParser.PARTITIONED:
			case sparkParser.EXTERNAL:
			case sparkParser.DEFINED:
			case sparkParser.REVOKE:
			case sparkParser.GRANT:
			case sparkParser.LOCK:
			case sparkParser.UNLOCK:
			case sparkParser.MSCK:
			case sparkParser.REPAIR:
			case sparkParser.RECOVER:
			case sparkParser.EXPORT:
			case sparkParser.IMPORT:
			case sparkParser.LOAD:
			case sparkParser.ROLE:
			case sparkParser.ROLES:
			case sparkParser.COMPACTIONS:
			case sparkParser.PRINCIPALS:
			case sparkParser.TRANSACTIONS:
			case sparkParser.INDEX:
			case sparkParser.INDEXES:
			case sparkParser.LOCKS:
			case sparkParser.OPTION:
			case sparkParser.LOCAL:
			case sparkParser.INPATH:
			case sparkParser.IDENTIFIER:
			case sparkParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2388;
				this.strictIdentifier();
				}
				break;
			case sparkParser.ANTI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2389;
				this.match(sparkParser.ANTI);
				}
				break;
			case sparkParser.FULL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2390;
				this.match(sparkParser.FULL);
				}
				break;
			case sparkParser.INNER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2391;
				this.match(sparkParser.INNER);
				}
				break;
			case sparkParser.LEFT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2392;
				this.match(sparkParser.LEFT);
				}
				break;
			case sparkParser.SEMI:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2393;
				this.match(sparkParser.SEMI);
				}
				break;
			case sparkParser.RIGHT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2394;
				this.match(sparkParser.RIGHT);
				}
				break;
			case sparkParser.NATURAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2395;
				this.match(sparkParser.NATURAL);
				}
				break;
			case sparkParser.JOIN:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2396;
				this.match(sparkParser.JOIN);
				}
				break;
			case sparkParser.CROSS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2397;
				this.match(sparkParser.CROSS);
				}
				break;
			case sparkParser.ON:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2398;
				this.match(sparkParser.ON);
				}
				break;
			case sparkParser.UNION:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2399;
				this.match(sparkParser.UNION);
				}
				break;
			case sparkParser.INTERSECT:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2400;
				this.match(sparkParser.INTERSECT);
				}
				break;
			case sparkParser.EXCEPT:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2401;
				this.match(sparkParser.EXCEPT);
				}
				break;
			case sparkParser.SETMINUS:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2402;
				this.match(sparkParser.SETMINUS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public strictIdentifier(): StrictIdentifierContext {
		let _localctx: StrictIdentifierContext = new StrictIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, sparkParser.RULE_strictIdentifier);
		try {
			this.state = 2408;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sparkParser.IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2405;
				this.match(sparkParser.IDENTIFIER);
				}
				break;
			case sparkParser.BACKQUOTED_IDENTIFIER:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2406;
				this.quotedIdentifier();
				}
				break;
			case sparkParser.SELECT:
			case sparkParser.FROM:
			case sparkParser.ADD:
			case sparkParser.AS:
			case sparkParser.ALL:
			case sparkParser.ANY:
			case sparkParser.DISTINCT:
			case sparkParser.WHERE:
			case sparkParser.GROUP:
			case sparkParser.BY:
			case sparkParser.GROUPING:
			case sparkParser.SETS:
			case sparkParser.CUBE:
			case sparkParser.ROLLUP:
			case sparkParser.ORDER:
			case sparkParser.HAVING:
			case sparkParser.LIMIT:
			case sparkParser.AT:
			case sparkParser.OR:
			case sparkParser.AND:
			case sparkParser.IN:
			case sparkParser.NOT:
			case sparkParser.NO:
			case sparkParser.EXISTS:
			case sparkParser.BETWEEN:
			case sparkParser.LIKE:
			case sparkParser.RLIKE:
			case sparkParser.IS:
			case sparkParser.NULL:
			case sparkParser.TRUE:
			case sparkParser.FALSE:
			case sparkParser.NULLS:
			case sparkParser.ASC:
			case sparkParser.DESC:
			case sparkParser.FOR:
			case sparkParser.INTERVAL:
			case sparkParser.CASE:
			case sparkParser.WHEN:
			case sparkParser.THEN:
			case sparkParser.ELSE:
			case sparkParser.END:
			case sparkParser.OUTER:
			case sparkParser.PIVOT:
			case sparkParser.LATERAL:
			case sparkParser.WINDOW:
			case sparkParser.OVER:
			case sparkParser.PARTITION:
			case sparkParser.RANGE:
			case sparkParser.ROWS:
			case sparkParser.UNBOUNDED:
			case sparkParser.PRECEDING:
			case sparkParser.FOLLOWING:
			case sparkParser.CURRENT:
			case sparkParser.FIRST:
			case sparkParser.AFTER:
			case sparkParser.LAST:
			case sparkParser.ROW:
			case sparkParser.WITH:
			case sparkParser.VALUES:
			case sparkParser.CREATE:
			case sparkParser.TABLE:
			case sparkParser.DIRECTORY:
			case sparkParser.VIEW:
			case sparkParser.REPLACE:
			case sparkParser.INSERT:
			case sparkParser.DELETE:
			case sparkParser.INTO:
			case sparkParser.DESCRIBE:
			case sparkParser.EXPLAIN:
			case sparkParser.FORMAT:
			case sparkParser.LOGICAL:
			case sparkParser.CODEGEN:
			case sparkParser.COST:
			case sparkParser.CAST:
			case sparkParser.SHOW:
			case sparkParser.TABLES:
			case sparkParser.COLUMNS:
			case sparkParser.COLUMN:
			case sparkParser.USE:
			case sparkParser.PARTITIONS:
			case sparkParser.FUNCTIONS:
			case sparkParser.DROP:
			case sparkParser.TO:
			case sparkParser.TABLESAMPLE:
			case sparkParser.STRATIFY:
			case sparkParser.ALTER:
			case sparkParser.RENAME:
			case sparkParser.ARRAY:
			case sparkParser.MAP:
			case sparkParser.STRUCT:
			case sparkParser.COMMENT:
			case sparkParser.SET:
			case sparkParser.RESET:
			case sparkParser.DATA:
			case sparkParser.START:
			case sparkParser.TRANSACTION:
			case sparkParser.COMMIT:
			case sparkParser.ROLLBACK:
			case sparkParser.MACRO:
			case sparkParser.IGNORE:
			case sparkParser.BOTH:
			case sparkParser.LEADING:
			case sparkParser.TRAILING:
			case sparkParser.IF:
			case sparkParser.POSITION:
			case sparkParser.EXTRACT:
			case sparkParser.DIV:
			case sparkParser.PERCENTLIT:
			case sparkParser.BUCKET:
			case sparkParser.OUT:
			case sparkParser.OF:
			case sparkParser.SORT:
			case sparkParser.CLUSTER:
			case sparkParser.DISTRIBUTE:
			case sparkParser.OVERWRITE:
			case sparkParser.TRANSFORM:
			case sparkParser.REDUCE:
			case sparkParser.SERDE:
			case sparkParser.SERDEPROPERTIES:
			case sparkParser.RECORDREADER:
			case sparkParser.RECORDWRITER:
			case sparkParser.DELIMITED:
			case sparkParser.FIELDS:
			case sparkParser.TERMINATED:
			case sparkParser.COLLECTION:
			case sparkParser.ITEMS:
			case sparkParser.KEYS:
			case sparkParser.ESCAPED:
			case sparkParser.LINES:
			case sparkParser.SEPARATED:
			case sparkParser.FUNCTION:
			case sparkParser.EXTENDED:
			case sparkParser.REFRESH:
			case sparkParser.CLEAR:
			case sparkParser.CACHE:
			case sparkParser.UNCACHE:
			case sparkParser.LAZY:
			case sparkParser.FORMATTED:
			case sparkParser.GLOBAL:
			case sparkParser.TEMPORARY:
			case sparkParser.OPTIONS:
			case sparkParser.UNSET:
			case sparkParser.TBLPROPERTIES:
			case sparkParser.DBPROPERTIES:
			case sparkParser.BUCKETS:
			case sparkParser.SKEWED:
			case sparkParser.STORED:
			case sparkParser.DIRECTORIES:
			case sparkParser.LOCATION:
			case sparkParser.EXCHANGE:
			case sparkParser.ARCHIVE:
			case sparkParser.UNARCHIVE:
			case sparkParser.FILEFORMAT:
			case sparkParser.TOUCH:
			case sparkParser.COMPACT:
			case sparkParser.CONCATENATE:
			case sparkParser.CHANGE:
			case sparkParser.CASCADE:
			case sparkParser.RESTRICT:
			case sparkParser.CLUSTERED:
			case sparkParser.SORTED:
			case sparkParser.PURGE:
			case sparkParser.INPUTFORMAT:
			case sparkParser.OUTPUTFORMAT:
			case sparkParser.DATABASE:
			case sparkParser.DATABASES:
			case sparkParser.DFS:
			case sparkParser.TRUNCATE:
			case sparkParser.ANALYZE:
			case sparkParser.COMPUTE:
			case sparkParser.LIST:
			case sparkParser.STATISTICS:
			case sparkParser.PARTITIONED:
			case sparkParser.EXTERNAL:
			case sparkParser.DEFINED:
			case sparkParser.REVOKE:
			case sparkParser.GRANT:
			case sparkParser.LOCK:
			case sparkParser.UNLOCK:
			case sparkParser.MSCK:
			case sparkParser.REPAIR:
			case sparkParser.RECOVER:
			case sparkParser.EXPORT:
			case sparkParser.IMPORT:
			case sparkParser.LOAD:
			case sparkParser.ROLE:
			case sparkParser.ROLES:
			case sparkParser.COMPACTIONS:
			case sparkParser.PRINCIPALS:
			case sparkParser.TRANSACTIONS:
			case sparkParser.INDEX:
			case sparkParser.INDEXES:
			case sparkParser.LOCKS:
			case sparkParser.OPTION:
			case sparkParser.LOCAL:
			case sparkParser.INPATH:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2407;
				this.nonReserved();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quotedIdentifier(): QuotedIdentifierContext {
		let _localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, sparkParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2410;
			this.match(sparkParser.BACKQUOTED_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, sparkParser.RULE_number);
		let _la: number;
		try {
			this.state = 2440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 325, this._ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.MINUS) {
					{
					this.state = 2412;
					this.match(sparkParser.MINUS);
					}
				}

				this.state = 2415;
				this.match(sparkParser.DECIMAL_VALUE);
				}
				break;

			case 2:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.MINUS) {
					{
					this.state = 2416;
					this.match(sparkParser.MINUS);
					}
				}

				this.state = 2419;
				this.match(sparkParser.INTEGER_VALUE);
				}
				break;

			case 3:
				_localctx = new BigIntLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.MINUS) {
					{
					this.state = 2420;
					this.match(sparkParser.MINUS);
					}
				}

				this.state = 2423;
				this.match(sparkParser.BIGINT_LITERAL);
				}
				break;

			case 4:
				_localctx = new SmallIntLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.MINUS) {
					{
					this.state = 2424;
					this.match(sparkParser.MINUS);
					}
				}

				this.state = 2427;
				this.match(sparkParser.SMALLINT_LITERAL);
				}
				break;

			case 5:
				_localctx = new TinyIntLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.MINUS) {
					{
					this.state = 2428;
					this.match(sparkParser.MINUS);
					}
				}

				this.state = 2431;
				this.match(sparkParser.TINYINT_LITERAL);
				}
				break;

			case 6:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.MINUS) {
					{
					this.state = 2432;
					this.match(sparkParser.MINUS);
					}
				}

				this.state = 2435;
				this.match(sparkParser.DOUBLE_LITERAL);
				}
				break;

			case 7:
				_localctx = new BigDecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === sparkParser.MINUS) {
					{
					this.state = 2436;
					this.match(sparkParser.MINUS);
					}
				}

				this.state = 2439;
				this.match(sparkParser.BIGDECIMAL_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonReserved(): NonReservedContext {
		let _localctx: NonReservedContext = new NonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, sparkParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2442;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sparkParser.SELECT) | (1 << sparkParser.FROM) | (1 << sparkParser.ADD) | (1 << sparkParser.AS) | (1 << sparkParser.ALL) | (1 << sparkParser.ANY) | (1 << sparkParser.DISTINCT) | (1 << sparkParser.WHERE) | (1 << sparkParser.GROUP) | (1 << sparkParser.BY) | (1 << sparkParser.GROUPING) | (1 << sparkParser.SETS) | (1 << sparkParser.CUBE) | (1 << sparkParser.ROLLUP) | (1 << sparkParser.ORDER) | (1 << sparkParser.HAVING) | (1 << sparkParser.LIMIT) | (1 << sparkParser.AT) | (1 << sparkParser.OR) | (1 << sparkParser.AND) | (1 << sparkParser.IN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sparkParser.NOT - 32)) | (1 << (sparkParser.NO - 32)) | (1 << (sparkParser.EXISTS - 32)) | (1 << (sparkParser.BETWEEN - 32)) | (1 << (sparkParser.LIKE - 32)) | (1 << (sparkParser.RLIKE - 32)) | (1 << (sparkParser.IS - 32)) | (1 << (sparkParser.NULL - 32)) | (1 << (sparkParser.TRUE - 32)) | (1 << (sparkParser.FALSE - 32)) | (1 << (sparkParser.NULLS - 32)) | (1 << (sparkParser.ASC - 32)) | (1 << (sparkParser.DESC - 32)) | (1 << (sparkParser.FOR - 32)) | (1 << (sparkParser.INTERVAL - 32)) | (1 << (sparkParser.CASE - 32)) | (1 << (sparkParser.WHEN - 32)) | (1 << (sparkParser.THEN - 32)) | (1 << (sparkParser.ELSE - 32)) | (1 << (sparkParser.END - 32)) | (1 << (sparkParser.OUTER - 32)) | (1 << (sparkParser.PIVOT - 32)) | (1 << (sparkParser.LATERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sparkParser.WINDOW - 64)) | (1 << (sparkParser.OVER - 64)) | (1 << (sparkParser.PARTITION - 64)) | (1 << (sparkParser.RANGE - 64)) | (1 << (sparkParser.ROWS - 64)) | (1 << (sparkParser.UNBOUNDED - 64)) | (1 << (sparkParser.PRECEDING - 64)) | (1 << (sparkParser.FOLLOWING - 64)) | (1 << (sparkParser.CURRENT - 64)) | (1 << (sparkParser.FIRST - 64)) | (1 << (sparkParser.AFTER - 64)) | (1 << (sparkParser.LAST - 64)) | (1 << (sparkParser.ROW - 64)) | (1 << (sparkParser.WITH - 64)) | (1 << (sparkParser.VALUES - 64)) | (1 << (sparkParser.CREATE - 64)) | (1 << (sparkParser.TABLE - 64)) | (1 << (sparkParser.DIRECTORY - 64)) | (1 << (sparkParser.VIEW - 64)) | (1 << (sparkParser.REPLACE - 64)) | (1 << (sparkParser.INSERT - 64)) | (1 << (sparkParser.DELETE - 64)) | (1 << (sparkParser.INTO - 64)) | (1 << (sparkParser.DESCRIBE - 64)) | (1 << (sparkParser.EXPLAIN - 64)) | (1 << (sparkParser.FORMAT - 64)) | (1 << (sparkParser.LOGICAL - 64)) | (1 << (sparkParser.CODEGEN - 64)) | (1 << (sparkParser.COST - 64)) | (1 << (sparkParser.CAST - 64)) | (1 << (sparkParser.SHOW - 64)) | (1 << (sparkParser.TABLES - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sparkParser.COLUMNS - 96)) | (1 << (sparkParser.COLUMN - 96)) | (1 << (sparkParser.USE - 96)) | (1 << (sparkParser.PARTITIONS - 96)) | (1 << (sparkParser.FUNCTIONS - 96)) | (1 << (sparkParser.DROP - 96)) | (1 << (sparkParser.TO - 96)) | (1 << (sparkParser.TABLESAMPLE - 96)) | (1 << (sparkParser.STRATIFY - 96)) | (1 << (sparkParser.ALTER - 96)) | (1 << (sparkParser.RENAME - 96)) | (1 << (sparkParser.ARRAY - 96)) | (1 << (sparkParser.MAP - 96)) | (1 << (sparkParser.STRUCT - 96)) | (1 << (sparkParser.COMMENT - 96)) | (1 << (sparkParser.SET - 96)) | (1 << (sparkParser.RESET - 96)) | (1 << (sparkParser.DATA - 96)) | (1 << (sparkParser.START - 96)) | (1 << (sparkParser.TRANSACTION - 96)) | (1 << (sparkParser.COMMIT - 96)) | (1 << (sparkParser.ROLLBACK - 96)) | (1 << (sparkParser.MACRO - 96)) | (1 << (sparkParser.IGNORE - 96)) | (1 << (sparkParser.BOTH - 96)) | (1 << (sparkParser.LEADING - 96)) | (1 << (sparkParser.TRAILING - 96)) | (1 << (sparkParser.IF - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sparkParser.POSITION - 128)) | (1 << (sparkParser.EXTRACT - 128)) | (1 << (sparkParser.DIV - 128)) | (1 << (sparkParser.PERCENTLIT - 128)) | (1 << (sparkParser.BUCKET - 128)) | (1 << (sparkParser.OUT - 128)) | (1 << (sparkParser.OF - 128)) | (1 << (sparkParser.SORT - 128)) | (1 << (sparkParser.CLUSTER - 128)) | (1 << (sparkParser.DISTRIBUTE - 128)) | (1 << (sparkParser.OVERWRITE - 128)) | (1 << (sparkParser.TRANSFORM - 128)) | (1 << (sparkParser.REDUCE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (sparkParser.SERDE - 160)) | (1 << (sparkParser.SERDEPROPERTIES - 160)) | (1 << (sparkParser.RECORDREADER - 160)) | (1 << (sparkParser.RECORDWRITER - 160)) | (1 << (sparkParser.DELIMITED - 160)) | (1 << (sparkParser.FIELDS - 160)) | (1 << (sparkParser.TERMINATED - 160)) | (1 << (sparkParser.COLLECTION - 160)) | (1 << (sparkParser.ITEMS - 160)) | (1 << (sparkParser.KEYS - 160)) | (1 << (sparkParser.ESCAPED - 160)) | (1 << (sparkParser.LINES - 160)) | (1 << (sparkParser.SEPARATED - 160)) | (1 << (sparkParser.FUNCTION - 160)) | (1 << (sparkParser.EXTENDED - 160)) | (1 << (sparkParser.REFRESH - 160)) | (1 << (sparkParser.CLEAR - 160)) | (1 << (sparkParser.CACHE - 160)) | (1 << (sparkParser.UNCACHE - 160)) | (1 << (sparkParser.LAZY - 160)) | (1 << (sparkParser.FORMATTED - 160)) | (1 << (sparkParser.GLOBAL - 160)) | (1 << (sparkParser.TEMPORARY - 160)) | (1 << (sparkParser.OPTIONS - 160)) | (1 << (sparkParser.UNSET - 160)) | (1 << (sparkParser.TBLPROPERTIES - 160)) | (1 << (sparkParser.DBPROPERTIES - 160)) | (1 << (sparkParser.BUCKETS - 160)) | (1 << (sparkParser.SKEWED - 160)) | (1 << (sparkParser.STORED - 160)) | (1 << (sparkParser.DIRECTORIES - 160)) | (1 << (sparkParser.LOCATION - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (sparkParser.EXCHANGE - 192)) | (1 << (sparkParser.ARCHIVE - 192)) | (1 << (sparkParser.UNARCHIVE - 192)) | (1 << (sparkParser.FILEFORMAT - 192)) | (1 << (sparkParser.TOUCH - 192)) | (1 << (sparkParser.COMPACT - 192)) | (1 << (sparkParser.CONCATENATE - 192)) | (1 << (sparkParser.CHANGE - 192)) | (1 << (sparkParser.CASCADE - 192)) | (1 << (sparkParser.RESTRICT - 192)) | (1 << (sparkParser.CLUSTERED - 192)) | (1 << (sparkParser.SORTED - 192)) | (1 << (sparkParser.PURGE - 192)) | (1 << (sparkParser.INPUTFORMAT - 192)) | (1 << (sparkParser.OUTPUTFORMAT - 192)) | (1 << (sparkParser.DATABASE - 192)) | (1 << (sparkParser.DATABASES - 192)) | (1 << (sparkParser.DFS - 192)) | (1 << (sparkParser.TRUNCATE - 192)) | (1 << (sparkParser.ANALYZE - 192)) | (1 << (sparkParser.COMPUTE - 192)) | (1 << (sparkParser.LIST - 192)) | (1 << (sparkParser.STATISTICS - 192)) | (1 << (sparkParser.PARTITIONED - 192)) | (1 << (sparkParser.EXTERNAL - 192)) | (1 << (sparkParser.DEFINED - 192)) | (1 << (sparkParser.REVOKE - 192)) | (1 << (sparkParser.GRANT - 192)) | (1 << (sparkParser.LOCK - 192)) | (1 << (sparkParser.UNLOCK - 192)) | (1 << (sparkParser.MSCK - 192)) | (1 << (sparkParser.REPAIR - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (sparkParser.RECOVER - 224)) | (1 << (sparkParser.EXPORT - 224)) | (1 << (sparkParser.IMPORT - 224)) | (1 << (sparkParser.LOAD - 224)) | (1 << (sparkParser.ROLE - 224)) | (1 << (sparkParser.ROLES - 224)) | (1 << (sparkParser.COMPACTIONS - 224)) | (1 << (sparkParser.PRINCIPALS - 224)) | (1 << (sparkParser.TRANSACTIONS - 224)) | (1 << (sparkParser.INDEX - 224)) | (1 << (sparkParser.INDEXES - 224)) | (1 << (sparkParser.LOCKS - 224)) | (1 << (sparkParser.OPTION - 224)) | (1 << (sparkParser.LOCAL - 224)) | (1 << (sparkParser.INPATH - 224)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 35:
			return this.queryTerm_sempred(_localctx as QueryTermContext, predIndex);

		case 71:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 73:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 74:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private queryTerm_sempred(_localctx: QueryTermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.legacy_setops_precedence_enbled;

		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return !this.legacy_setops_precedence_enbled;

		case 4:
			return this.precpred(this._ctx, 1);

		case 5:
			return !this.legacy_setops_precedence_enbled;
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);

		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 6);

		case 9:
			return this.precpred(this._ctx, 5);

		case 10:
			return this.precpred(this._ctx, 4);

		case 11:
			return this.precpred(this._ctx, 3);

		case 12:
			return this.precpred(this._ctx, 2);

		case 13:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 5);

		case 15:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0100\u098F\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xE7\n\b\x03\b\x03\b\x03\b\x05\b\xEC" +
		"\n\b\x03\b\x05\b\xEF\n\b\x03\b\x03\b\x03\b\x05\b\xF4\n\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0101\n\b\x03" +
		"\b\x03\b\x05\b\u0105\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u010C\n\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x07\b\u011A\n\b\f\b\x0E\b\u011D\v\b\x03\b\x05\b\u0120\n\b\x03\b\x05" +
		"\b\u0123\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u012A\n\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x07\b\u013B\n\b\f\b\x0E\b\u013E\v\b\x03\b\x05\b\u0141\n\b\x03" +
		"\b\x05\b\u0144\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u014B\n\b\x03\b" +
		"\x03\b\x03\b\x03\b\x05\b\u0151\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0157" +
		"\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0162" +
		"\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0182\n\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\u018A\n\b\x03\b\x03\b\x05\b\u018E\n\b" +
		"\x03\b\x03\b\x03\b\x05\b\u0193\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0199" +
		"\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01A1\n\b\x03\b\x03\b\x03" +
		"\b\x03\b\x05\b\u01A7\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\u01B4\n\b\x03\b\x06\b\u01B7\n\b\r\b\x0E\b\u01B8" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01C2\n\b\x03\b\x06\b" +
		"\u01C5\n\b\r\b\x0E\b\u01C6\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01D7\n\b\x03\b\x03\b\x03" +
		"\b\x07\b\u01DC\n\b\f\b\x0E\b\u01DF\v\b\x03\b\x05\b\u01E2\n\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01EA\n\b\x03\b\x03\b\x03\b\x07\b\u01EF" +
		"\n\b\f\b\x0E\b\u01F2\v\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01F8\n\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b\u0207\n\b\x03\b\x03\b\x05\b\u020B\n\b\x03\b\x03\b\x03\b\x03\b" +
		"\x05\b\u0211\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0217\n\b\x03\b\x05\b\u021A" +
		"\n\b\x03\b\x05\b\u021D\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0223\n\b\x03" +
		"\b\x03\b\x05\b\u0227\n\b\x03\b\x03\b\x05\b\u022B\n\b\x03\b\x03\b\x03\b" +
		"\x05\b\u0230\n\b\x03\b\x03\b\x05\b\u0234\n\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x05\b\u023C\n\b\x03\b\x05\b\u023F\n\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x05\b\u0248\n\b\x03\b\x03\b\x03\b\x05\b\u024D\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\u0253\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05" +
		"\b\u025A\n\b\x03\b\x05\b\u025D\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0263" +
		"\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u026C\n\b\f\b\x0E" +
		"\b\u026F\v\b\x05\b\u0271\n\b\x03\b\x03\b\x05\b\u0275\n\b\x03\b\x03\b\x03" +
		"\b\x05\b\u027A\n\b\x03\b\x03\b\x03\b\x05\b\u027F\n\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x05\b\u0286\n\b\x03\b\x05\b\u0289\n\b\x03\b\x05\b\u028C\n" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0293\n\b\x03\b\x03\b\x03\b\x05" +
		"\b\u0298\n\b\x03\b\x03\b\x03\b\x05\b\u029D\n\b\x03\b\x05\b\u02A0\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u02A9\n\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\u02B1\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u02B7" +
		"\n\b\x03\b\x03\b\x05\b\u02BB\n\b\x03\b\x03\b\x05\b\u02BF\n\b\x03\b\x03" +
		"\b\x05\b\u02C3\n\b\x05\b\u02C5\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x05\b\u02CE\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u02D4\n\b\x03\b\x03" +
		"\b\x03\b\x05\b\u02D9\n\b\x03\b\x05\b\u02DC\n\b\x03\b\x03\b\x05\b\u02E0" +
		"\n\b\x03\b\x05\b\u02E3\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u02EB" +
		"\n\b\f\b\x0E\b\u02EE\v\b\x05\b\u02F0\n\b\x03\b\x03\b\x05\b\u02F4\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\u02FA\n\b\x03\b\x05\b\u02FD\n\b\x03\b\x05\b" +
		"\u0300\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0306\n\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\u030E\n\b\x03\b\x03\b\x03\b\x05\b\u0313\n\b\x03\b" +
		"\x03\b\x03\b\x03\b\x05\b\u0319\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\u031F" +
		"\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u0328\n\b\f\b\x0E" +
		"\b\u032B\v\b\x03\b\x03\b\x03\b\x07\b\u0330\n\b\f\b\x0E\b\u0333\v\b\x03" +
		"\b\x03\b\x07\b\u0337\n\b\f\b\x0E\b\u033A\v\b\x03\b\x03\b\x03\b\x07\b\u033F" +
		"\n\b\f\b\x0E\b\u0342\v\b\x05\b\u0344\n\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x05\t\u034C\n\t\x03\t\x03\t\x05\t\u0350\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\u0357\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u03CB" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u03D3\n\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\u03DB\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\u03E4\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\u03F0\n\t\x03\n\x03\n\x05\n\u03F4\n\n\x03\n\x05\n" +
		"\u03F7\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u03FD\n\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0407\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0413\n\f\x03\f\x03\f\x03\f\x05" +
		"\f\u0418\n\f\x03\r\x03\r\x03\r\x03\x0E\x05\x0E\u041E\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u042A\n\x0F\x05\x0F\u042C\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0431" +
		"\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0435\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u043A\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u043F\n\x0F\x03\x0F\x05" +
		"\x0F\u0442\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0447\n\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u044B\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0450\n\x0F\x05" +
		"\x0F\u0452\n\x0F\x03\x10\x03\x10\x05\x10\u0456\n\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\u045D\n\x11\f\x11\x0E\x11\u0460\v\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0467\n\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\u046E\n\x13\x03\x14\x03\x14\x03\x14\x07" +
		"\x14\u0473\n\x14\f\x14\x0E\x14\u0476\v\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x07\x15\u047C\n\x15\f\x15\x0E\x15\u047F\v\x15\x03\x16\x03\x16\x05" +
		"\x16\u0483\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0490\n\x18\f\x18\x0E\x18\u0493" +
		"\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0499\n\x19\x03\x19\x05" +
		"\x19\u049C\n\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u04A1\n\x1A\f\x1A\x0E" +
		"\x1A\u04A4\v\x1A\x03\x1A\x05\x1A\u04A7\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u04AD\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u04B3" +
		"\n\x1C\f\x1C\x0E\x1C\u04B6\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x07\x1D\u04BE\n\x1D\f\x1D\x0E\x1D\u04C1\v\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u04CB\n\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u04D2\n\x1F\x03 \x03 \x03" +
		" \x03 \x05 \u04D8\n \x03!\x03!\x03!\x03\"\x05\"\u04DE\n\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03\"\x06\"\u04E5\n\"\r\"\x0E\"\u04E6\x05\"\u04E9\n\"\x03" +
		"#\x03#\x03#\x03#\x03#\x07#\u04F0\n#\f#\x0E#\u04F3\v#\x05#\u04F5\n#\x03" +
		"#\x03#\x03#\x03#\x03#\x07#\u04FC\n#\f#\x0E#\u04FF\v#\x05#\u0501\n#\x03" +
		"#\x03#\x03#\x03#\x03#\x07#\u0508\n#\f#\x0E#\u050B\v#\x05#\u050D\n#\x03" +
		"#\x03#\x03#\x03#\x03#\x07#\u0514\n#\f#\x0E#\u0517\v#\x05#\u0519\n#\x03" +
		"#\x05#\u051C\n#\x03#\x03#\x03#\x05#\u0521\n#\x05#\u0523\n#\x03$\x05$\u0526" +
		"\n$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0532\n%\x03" +
		"%\x03%\x03%\x03%\x03%\x05%\u0539\n%\x03%\x03%\x03%\x03%\x03%\x05%\u0540" +
		"\n%\x03%\x07%\u0543\n%\f%\x0E%\u0546\v%\x03&\x03&\x03&\x03&\x03&\x03&" +
		"\x03&\x03&\x05&\u0550\n&\x03\'\x03\'\x05\'\u0554\n\'\x03\'\x03\'\x05\'" +
		"\u0558\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0564" +
		"\n(\x03(\x05(\u0567\n(\x03(\x03(\x05(\u056B\n(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u0575\n(\x03(\x03(\x05(\u0579\n(\x05(\u057B\n(\x03" +
		"(\x05(\u057E\n(\x03(\x03(\x05(\u0582\n(\x03(\x05(\u0585\n(\x03(\x03(\x05" +
		"(\u0589\n(\x03(\x03(\x07(\u058D\n(\f(\x0E(\u0590\v(\x03(\x05(\u0593\n" +
		"(\x03(\x03(\x05(\u0597\n(\x03(\x03(\x03(\x05(\u059C\n(\x03(\x05(\u059F" +
		"\n(\x05(\u05A1\n(\x03(\x07(\u05A4\n(\f(\x0E(\u05A7\v(\x03(\x03(\x05(\u05AB" +
		"\n(\x03(\x05(\u05AE\n(\x03(\x03(\x05(\u05B2\n(\x03(\x05(\u05B5\n(\x05" +
		"(\u05B7\n(\x03)\x03)\x03)\x05)\u05BC\n)\x03)\x07)\u05BF\n)\f)\x0E)\u05C2" +
		"\v)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u05CC\n*\f*\x0E*\u05CF" +
		"\v*\x03*\x03*\x05*\u05D3\n*\x03+\x03+\x03+\x03+\x07+\u05D9\n+\f+\x0E+" +
		"\u05DC\v+\x03+\x07+\u05DF\n+\f+\x0E+\u05E2\v+\x03+\x05+\u05E5\n+\x03," +
		"\x03,\x03,\x03,\x03,\x07,\u05EC\n,\f,\x0E,\u05EF\v,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x07,\u05FB\n,\f,\x0E,\u05FE\v,\x03,\x03" +
		",\x05,\u0602\n,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x07,\u060C\n," +
		"\f,\x0E,\u060F\v,\x03,\x03,\x05,\u0613\n,\x03-\x03-\x03-\x03-\x07-\u0619" +
		"\n-\f-\x0E-\u061C\v-\x05-\u061E\n-\x03-\x03-\x05-\u0622\n-\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u062E\n.\f.\x0E.\u0631\v.\x03" +
		".\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x07/\u063B\n/\f/\x0E/\u063E\v/\x03" +
		"/\x03/\x05/\u0642\n/\x030\x030\x050\u0646\n0\x030\x050\u0649\n0\x031\x03" +
		"1\x031\x051\u064E\n1\x031\x031\x031\x031\x031\x071\u0655\n1\f1\x0E1\u0658" +
		"\v1\x051\u065A\n1\x031\x031\x031\x051\u065F\n1\x031\x031\x031\x071\u0664" +
		"\n1\f1\x0E1\u0667\v1\x051\u0669\n1\x032\x032\x033\x033\x073\u066F\n3\f" +
		"3\x0E3\u0672\v3\x034\x034\x034\x034\x054\u0678\n4\x034\x034\x034\x034" +
		"\x034\x054\u067F\n4\x035\x055\u0682\n5\x035\x035\x035\x055\u0687\n5\x03" +
		"5\x035\x035\x035\x055\u068D\n5\x035\x035\x055\u0691\n5\x035\x055\u0694" +
		"\n5\x035\x055\u0697\n5\x036\x036\x036\x036\x056\u069D\n6\x037\x037\x03" +
		"7\x057\u06A2\n7\x037\x037\x038\x058\u06A7\n8\x038\x038\x038\x038\x038" +
		"\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x058\u06B9\n8" +
		"\x058\u06BB\n8\x038\x058\u06BE\n8\x039\x039\x039\x039\x03:\x03:\x03:\x07" +
		":\u06C7\n:\f:\x0E:\u06CA\v:\x03;\x03;\x03;\x03;\x07;\u06D0\n;\f;\x0E;" +
		"\u06D3\v;\x03;\x03;\x03<\x03<\x05<\u06D9\n<\x03=\x03=\x03=\x03=\x07=\u06DF" +
		"\n=\f=\x0E=\u06E2\v=\x03=\x03=\x03>\x03>\x03>\x05>\u06E9\n>\x03?\x03?" +
		"\x05?\u06ED\n?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u06F5\n?\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x05?\u06FD\n?\x03?\x03?\x03?\x03?\x05?\u0703\n?\x03@" +
		"\x03@\x03@\x03@\x07@\u0709\n@\f@\x0E@\u070C\v@\x03@\x03@\x03A\x03A\x03" +
		"A\x03A\x03A\x07A\u0715\nA\fA\x0EA\u0718\vA\x05A\u071A\nA\x03A\x03A\x03" +
		"A\x03B\x05B\u0720\nB\x03B\x03B\x05B\u0724\nB\x05B\u0726\nB\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x05C\u072F\nC\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x05C\u073B\nC\x05C\u073D\nC\x03C\x03C\x03C\x03C\x03C" +
		"\x05C\u0744\nC\x03C\x03C\x03C\x03C\x03C\x05C\u074B\nC\x03C\x03C\x03C\x03" +
		"C\x05C\u0751\nC\x03C\x03C\x03C\x03C\x05C\u0757\nC\x05C\u0759\nC\x03D\x03" +
		"D\x03D\x05D\u075E\nD\x03D\x03D\x03E\x03E\x03E\x05E\u0765\nE\x03E\x03E" +
		"\x03F\x03F\x05F\u076B\nF\x03F\x03F\x05F\u076F\nF\x05F\u0771\nF\x03G\x03" +
		"G\x03G\x07G\u0776\nG\fG\x0EG\u0779\vG\x03H\x03H\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x05I\u0787\nI\x05I\u0789\nI\x03I\x03I\x03I" +
		"\x03I\x03I\x03I\x07I\u0791\nI\fI\x0EI\u0794\vI\x03J\x05J\u0797\nJ\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x05J\u079F\nJ\x03J\x03J\x03J\x03J\x03J\x07" +
		"J\u07A6\nJ\fJ\x0EJ\u07A9\vJ\x03J\x03J\x03J\x05J\u07AE\nJ\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x05J\u07B6\nJ\x03J\x03J\x03J\x03J\x05J\u07BC\nJ\x03J" +
		"\x03J\x03J\x05J\u07C1\nJ\x03J\x03J\x03J\x05J\u07C6\nJ\x03K\x03K\x03K\x03" +
		"K\x05K\u07CC\nK\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
		"K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u07E1\nK\fK\x0EK\u07E4" +
		"\vK\x03L\x03L\x03L\x06L\u07E9\nL\rL\x0EL\u07EA\x03L\x03L\x05L\u07EF\n" +
		"L\x03L\x03L\x03L\x03L\x03L\x06L\u07F6\nL\rL\x0EL\u07F7\x03L\x03L\x05L" +
		"\u07FC\nL\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L" +
		"\x03L\x03L\x07L\u080C\nL\fL\x0EL\u080F\vL\x05L\u0811\nL\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x05L\u0819\nL\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05" +
		"L\u0822\nL\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x06L\u0837\nL\rL\x0EL\u0838\x03L" +
		"\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0844\nL\x03L\x03L\x03L" +
		"\x07L\u0849\nL\fL\x0EL\u084C\vL\x05L\u084E\nL\x03L\x03L\x03L\x05L\u0853" +
		"\nL\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x06L\u0864\nL\rL\x0EL\u0865\x03L\x03L\x03L\x03L\x03L\x03L\x03L" +
		"\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0877\nL\x03L\x03L\x03L" +
		"\x03L\x03L\x03L\x03L\x03L\x07L\u0881\nL\fL\x0EL\u0884\vL\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x06M\u088E\nM\rM\x0EM\u088F\x05M\u0892\nM\x03" +
		"N\x03N\x03O\x03O\x03P\x03P\x03Q\x03Q\x03R\x03R\x07R\u089E\nR\fR\x0ER\u08A1" +
		"\vR\x03S\x03S\x03S\x03S\x05S\u08A7\nS\x03T\x05T\u08AA\nT\x03T\x03T\x05" +
		"T\u08AE\nT\x03U\x03U\x03U\x05U\u08B3\nU\x03V\x03V\x03V\x03V\x03V\x03V" +
		"\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u08C4\nV\x03V\x03V" +
		"\x05V\u08C8\nV\x03V\x03V\x03V\x03V\x03V\x07V\u08CF\nV\fV\x0EV\u08D2\v" +
		"V\x03V\x05V\u08D5\nV\x05V\u08D7\nV\x03W\x03W\x03W\x07W\u08DC\nW\fW\x0E" +
		"W\u08DF\vW\x03X\x03X\x03X\x03X\x05X\u08E5\nX\x03Y\x03Y\x03Y\x07Y\u08EA" +
		"\nY\fY\x0EY\u08ED\vY\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u08F4\nZ\x03[\x03[" +
		"\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x07\\\u08FF\n\\\f\\\x0E\\\u0902" +
		"\v\\\x03]\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03";
	private static readonly _serializedATNSegment1: string =
		"^\x03^\x03^\x07^\u090F\n^\f^\x0E^\u0912\v^\x03^\x03^\x03^\x03^\x03^\x07" +
		"^\u0919\n^\f^\x0E^\u091C\v^\x05^\u091E\n^\x03^\x03^\x03^\x03^\x03^\x07" +
		"^\u0925\n^\f^\x0E^\u0928\v^\x05^\u092A\n^\x05^\u092C\n^\x03^\x05^\u092F" +
		"\n^\x03^\x05^\u0932\n^\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u0944\n_\x03`\x03`\x03`\x03`\x03" +
		"`\x03`\x03`\x05`\u094D\n`\x03a\x03a\x03a\x07a\u0952\na\fa\x0Ea\u0955\v" +
		"a\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03" +
		"b\x03b\x05b\u0966\nb\x03c\x03c\x03c\x05c\u096B\nc\x03d\x03d\x03e\x05e" +
		"\u0970\ne\x03e\x03e\x05e\u0974\ne\x03e\x03e\x05e\u0978\ne\x03e\x03e\x05" +
		"e\u097C\ne\x03e\x03e\x05e\u0980\ne\x03e\x03e\x05e\u0984\ne\x03e\x03e\x05" +
		"e\u0988\ne\x03e\x05e\u098B\ne\x03f\x03f\x03f\x07\u02EC\u0329\u0331\u0338" +
		"\u0340\x02\x06H\x90\x94\x96g\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\x02\x1D\x03\x02\xCA\xCB" +
		"\x04\x02RRTT\x05\x02\\^\xB0\xB0\xB6\xB6\x04\x02\x0E\x0E!!\x04\x02..YY" +
		"\x04\x02\xB0\xB0\xB6\xB6\x04\x02\x0F\x0F\xD7\xD7\x03\x02hk\x03\x02hj\x03" +
		"\x02-.\x04\x02KKMM\x04\x02\x11\x11\x13\x13\x03\x02\xF6\xF7\x03\x02&\'" +
		"\x04\x02\x8C\x8D\x92\x92\x03\x02\x8E\x91\x04\x02\x8C\x8D\x95\x95\x03\x02" +
		"~\x80\x03\x02\x84\x8B\x03\x02\x8C\x96\x03\x02\x1F\"\x03\x02*+\x03\x02" +
		"\x8C\x8D\x04\x02DD\x9D\x9D\x04\x02\x1B\x1B\x9B\x9B\x03\x02HI\n\x02\r5" +
		"88@gl\x83\x91\x91\x97\xA0\xA2\xEE\xF0\xF1\x02\u0B29\x02\xCC\x03\x02\x02" +
		"\x02\x04\xCF\x03\x02\x02\x02\x06\xD2\x03\x02\x02\x02\b\xD5\x03\x02\x02" +
		"\x02\n\xD8\x03\x02\x02\x02\f\xDB\x03\x02\x02\x02\x0E\u0343\x03\x02\x02" +
		"\x02\x10\u03EF\x03\x02\x02\x02\x12\u03F1\x03\x02\x02\x02\x14\u0400\x03" +
		"\x02\x02\x02\x16\u040C\x03\x02\x02\x02\x18\u0419\x03\x02\x02\x02\x1A\u041D" +
		"\x03\x02\x02\x02\x1C\u0451\x03\x02\x02\x02\x1E\u0453\x03\x02\x02\x02 " +
		"\u0457\x03\x02\x02\x02\"\u0463\x03\x02\x02\x02$\u046D\x03\x02\x02\x02" +
		"&\u046F\x03\x02\x02\x02(\u0477\x03\x02\x02\x02*\u0480\x03\x02\x02\x02" +
		",\u0488\x03\x02\x02\x02.\u048B\x03\x02\x02\x020\u0496\x03\x02\x02\x02" +
		"2\u04A6\x03\x02\x02\x024\u04AC\x03\x02\x02\x026\u04AE\x03\x02\x02\x02" +
		"8\u04B9\x03\x02\x02\x02:\u04CA\x03\x02\x02\x02<\u04D1\x03\x02\x02\x02" +
		">\u04D3\x03\x02\x02\x02@\u04D9\x03\x02\x02\x02B\u04E8\x03\x02\x02\x02" +
		"D\u04F4\x03\x02\x02\x02F\u0525\x03\x02\x02\x02H\u052A\x03\x02\x02\x02" +
		"J\u054F\x03\x02\x02\x02L\u0551\x03\x02\x02\x02N\u05B6\x03\x02\x02\x02" +
		"P\u05B8\x03\x02\x02\x02R\u05D2\x03\x02\x02\x02T\u05D4\x03\x02\x02\x02" +
		"V\u0612\x03\x02\x02\x02X\u0621\x03\x02\x02\x02Z\u0623\x03\x02\x02\x02" +
		"\\\u0641\x03\x02\x02\x02^\u0643\x03\x02\x02\x02`\u064A\x03\x02\x02\x02" +
		"b\u066A\x03\x02\x02\x02d\u066C\x03\x02\x02\x02f\u067E\x03\x02\x02\x02" +
		"h\u0696\x03\x02\x02\x02j\u069C\x03\x02\x02\x02l\u069E\x03\x02\x02\x02" +
		"n\u06BD\x03\x02\x02\x02p\u06BF\x03\x02\x02\x02r\u06C3\x03\x02\x02\x02" +
		"t\u06CB\x03\x02\x02\x02v\u06D6\x03\x02\x02\x02x\u06DA\x03\x02\x02\x02" +
		"z\u06E5\x03\x02\x02\x02|\u0702\x03\x02\x02\x02~\u0704\x03\x02\x02\x02" +
		"\x80\u070F\x03\x02\x02\x02\x82\u0725\x03\x02\x02\x02\x84\u0758\x03\x02" +
		"\x02\x02\x86\u075D\x03\x02\x02\x02\x88\u0764\x03\x02\x02\x02\x8A\u0768" +
		"\x03\x02\x02\x02\x8C\u0772\x03\x02\x02\x02\x8E\u077A\x03\x02\x02\x02\x90" +
		"\u0788\x03\x02\x02\x02\x92\u07C5\x03\x02\x02\x02\x94\u07CB\x03\x02\x02" +
		"\x02\x96\u0876\x03\x02\x02\x02\x98\u0891\x03\x02\x02\x02\x9A\u0893\x03" +
		"\x02\x02\x02\x9C\u0895\x03\x02\x02\x02\x9E\u0897\x03\x02\x02\x02\xA0\u0899" +
		"\x03\x02\x02\x02\xA2\u089B\x03\x02\x02\x02\xA4\u08A2\x03\x02\x02\x02\xA6" +
		"\u08AD\x03\x02\x02\x02\xA8\u08B2\x03\x02\x02\x02\xAA\u08D6\x03\x02\x02" +
		"\x02\xAC\u08D8\x03\x02\x02\x02\xAE\u08E0\x03\x02\x02\x02\xB0\u08E6\x03" +
		"\x02\x02\x02\xB2\u08EE\x03\x02\x02\x02\xB4\u08F5\x03\x02\x02\x02\xB6\u08FA" +
		"\x03\x02\x02\x02\xB8\u0903\x03\x02\x02\x02\xBA\u0931\x03\x02\x02\x02\xBC" +
		"\u0943\x03\x02\x02\x02\xBE\u094C\x03\x02\x02\x02\xC0\u094E\x03\x02\x02" +
		"\x02\xC2\u0965\x03\x02\x02\x02\xC4\u096A\x03\x02\x02\x02\xC6\u096C\x03" +
		"\x02\x02\x02\xC8\u098A\x03\x02\x02\x02\xCA\u098C\x03\x02\x02\x02\xCC\xCD" +
		"\x05\x0E\b\x02\xCD\xCE\x07\x02\x02\x03\xCE\x03\x03\x02\x02\x02\xCF\xD0" +
		"\x05\x8AF\x02\xD0\xD1\x07\x02\x02\x03\xD1\x05\x03\x02\x02\x02\xD2\xD3" +
		"\x05\x86D\x02\xD3\xD4\x07\x02\x02\x03\xD4\x07\x03\x02\x02\x02\xD5\xD6" +
		"\x05\x88E\x02\xD6\xD7\x07\x02\x02\x03\xD7\t\x03\x02\x02\x02\xD8\xD9\x05" +
		"\xAAV\x02\xD9\xDA\x07\x02\x02\x03\xDA\v\x03\x02\x02\x02\xDB\xDC\x05\xAC" +
		"W\x02\xDC\xDD\x07\x02\x02\x03\xDD\r\x03\x02\x02\x02\xDE\u0344\x05\x1A" +
		"\x0E\x02\xDF\xE0\x07d\x02\x02\xE0\u0344\x05\xC2b\x02\xE1\xE2\x07Q\x02" +
		"\x02\xE2\xE6\x07\xD1\x02\x02\xE3\xE4\x07\x81\x02\x02\xE4\xE5\x07\"\x02" +
		"\x02\xE5\xE7\x07$\x02\x02\xE6\xE3\x03\x02\x02\x02\xE6\xE7\x03\x02\x02" +
		"\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEB\x05\xC2b\x02\xE9\xEA\x07t\x02\x02" +
		"\xEA\xEC\x07\xF2\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02" +
		"\xEC\xEE\x03\x02\x02\x02\xED\xEF\x05\x18\r\x02\xEE\xED\x03\x02\x02\x02" +
		"\xEE\xEF\x03\x02\x02\x02\xEF\xF3\x03\x02\x02\x02\xF0\xF1\x07O\x02\x02" +
		"\xF1\xF2\x07\xBC\x02\x02\xF2\xF4\x05.\x18\x02\xF3\xF0\x03\x02\x02\x02" +
		"\xF3\xF4\x03\x02\x02\x02\xF4\u0344\x03\x02\x02\x02\xF5\xF6\x07o\x02\x02" +
		"\xF6\xF7\x07\xD1\x02\x02\xF7\xF8\x05\xC2b\x02\xF8\xF9\x07u\x02\x02\xF9" +
		"\xFA\x07\xBC\x02\x02\xFA\xFB\x05.\x18\x02\xFB\u0344\x03\x02\x02\x02\xFC" +
		"\xFD\x07g\x02\x02\xFD\u0100\x07\xD1\x02\x02\xFE\xFF\x07\x81\x02\x02\xFF" +
		"\u0101\x07$\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02" +
		"\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0104\x05\xC2b\x02\u0103\u0105" +
		"\t\x02\x02\x02\u0104\u0103\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02" +
		"\u0105\u0344\x03\x02\x02\x02\u0106\u010B\x05\x12\n\x02\u0107\u0108\x07" +
		"\x03\x02\x02\u0108\u0109\x05\xACW\x02\u0109\u010A\x07\x04\x02\x02\u010A" +
		"\u010C\x03\x02\x02\x02\u010B\u0107\x03\x02\x02\x02\u010B\u010C\x03\x02" +
		"\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u011B\x05,\x17\x02\u010E\u010F" +
		"\x07\xB9\x02\x02\u010F\u011A\x05.\x18\x02\u0110\u0111\x07\xD9\x02\x02" +
		"\u0111\u0112\x07\x16\x02\x02\u0112\u011A\x05p9\x02\u0113\u011A\x05\x14" +
		"\v\x02\u0114\u011A\x05\x18\r\x02\u0115\u0116\x07t\x02\x02\u0116\u011A" +
		"\x07\xF2\x02\x02\u0117\u0118\x07\xBB\x02\x02\u0118\u011A\x05.\x18\x02" +
		"\u0119\u010E\x03\x02\x02\x02\u0119\u0110\x03\x02\x02\x02\u0119\u0113\x03" +
		"\x02\x02\x02\u0119\u0114\x03\x02\x02\x02\u0119\u0115\x03\x02\x02\x02\u0119" +
		"\u0117\x03\x02\x02\x02\u011A\u011D\x03\x02\x02\x02\u011B\u0119\x03\x02" +
		"\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u0122\x03\x02\x02\x02\u011D" +
		"\u011B\x03\x02\x02\x02\u011E\u0120\x07\x10\x02\x02\u011F\u011E\x03\x02" +
		"\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121" +
		"\u0123\x05\x1A\x0E\x02\u0122\u011F\x03\x02\x02\x02\u0122\u0123\x03\x02" +
		"\x02\x02\u0123\u0344\x03\x02\x02\x02\u0124\u0129\x05\x12\n\x02\u0125\u0126" +
		"\x07\x03\x02\x02\u0126\u0127\x05\xACW\x02\u0127\u0128\x07\x04\x02\x02" +
		"\u0128\u012A\x03\x02\x02\x02\u0129\u0125\x03\x02\x02\x02\u0129\u012A\x03" +
		"\x02\x02\x02\u012A\u013C\x03\x02\x02\x02\u012B\u012C\x07t\x02\x02\u012C" +
		"\u013B\x07\xF2\x02\x02\u012D\u012E\x07\xD9\x02\x02\u012E\u012F\x07\x16" +
		"\x02\x02\u012F\u0130\x07\x03\x02\x02\u0130\u0131\x05\xACW\x02\u0131\u0132" +
		"\x07\x04\x02\x02\u0132\u013B\x03\x02\x02\x02\u0133\u013B\x05\x14\v\x02" +
		"\u0134\u013B\x05\x16\f\x02\u0135\u013B\x05\x84C\x02\u0136\u013B\x05:\x1E" +
		"\x02\u0137\u013B\x05\x18\r\x02\u0138\u0139\x07\xBB\x02\x02\u0139\u013B" +
		"\x05.\x18\x02\u013A\u012B\x03\x02\x02\x02\u013A\u012D\x03\x02\x02\x02" +
		"\u013A\u0133\x03\x02\x02\x02\u013A\u0134\x03\x02\x02\x02\u013A\u0135\x03" +
		"\x02\x02\x02\u013A\u0136\x03\x02\x02\x02\u013A\u0137\x03\x02\x02\x02\u013A" +
		"\u0138\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02" +
		"\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u0143\x03\x02\x02\x02\u013E" +
		"\u013C\x03\x02\x02\x02\u013F\u0141\x07\x10\x02\x02\u0140\u013F\x03\x02" +
		"\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142" +
		"\u0144\x05\x1A\x0E\x02\u0143\u0140\x03\x02\x02\x02\u0143\u0144\x03\x02" +
		"\x02\x02\u0144\u0344\x03\x02\x02\x02\u0145\u0146\x07Q\x02\x02\u0146\u014A" +
		"\x07R\x02\x02\u0147\u0148\x07\x81\x02\x02\u0148\u0149\x07\"\x02\x02\u0149" +
		"\u014B\x07$\x02\x02\u014A\u0147\x03\x02\x02\x02\u014A\u014B\x03\x02\x02" +
		"\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x05\x86D\x02\u014D\u014E" +
		"\x07&\x02\x02\u014E\u0150\x05\x86D\x02\u014F\u0151\x05\x18\r\x02\u0150" +
		"\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0344\x03\x02" +
		"\x02\x02\u0152\u0153\x07\xD5\x02\x02\u0153\u0154\x07R\x02\x02\u0154\u0156" +
		"\x05\x86D\x02\u0155\u0157\x05 \x11\x02\u0156\u0155\x03\x02\x02\x02\u0156" +
		"\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x07\xD6" +
		"\x02\x02\u0159\u0161\x07\xD8\x02\x02\u015A\u0162\x05\xC2b\x02\u015B\u015C" +
		"\x07/\x02\x02\u015C\u015D\x07b\x02\x02\u015D\u0162\x05r:\x02\u015E\u015F" +
		"\x07/\x02\x02\u015F\u0160\x07\x11\x02\x02\u0160\u0162\x07b\x02\x02\u0161" +
		"\u015A\x03\x02\x02\x02\u0161\u015B\x03\x02\x02\x02\u0161\u015E\x03\x02" +
		"\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0344\x03\x02\x02\x02\u0163" +
		"\u0164\x07o\x02\x02\u0164\u0165\x07R\x02\x02\u0165\u0166\x05\x86D\x02" +
		"\u0166\u0167\x07\x0F\x02\x02\u0167\u0168\x07b\x02\x02\u0168\u0169\x07" +
		"\x03\x02\x02\u0169\u016A\x05\xACW\x02\u016A\u016B\x07\x04\x02\x02\u016B" +
		"\u0344\x03\x02\x02\x02\u016C\u016D\x07o\x02\x02\u016D\u016E\t\x03\x02" +
		"\x02\u016E\u016F\x05\x86D\x02\u016F\u0170\x07p\x02\x02\u0170\u0171\x07" +
		"l\x02\x02\u0171\u0172\x05\x86D\x02\u0172\u0344\x03\x02\x02\x02\u0173\u0174" +
		"\x07o\x02\x02\u0174\u0175\t\x03\x02\x02\u0175\u0176\x05\x86D\x02\u0176" +
		"\u0177\x07u\x02\x02\u0177\u0178\x07\xBB\x02\x02\u0178\u0179\x05.\x18\x02" +
		"\u0179\u0344\x03\x02\x02\x02\u017A\u017B\x07o\x02\x02\u017B\u017C\t\x03" +
		"\x02\x02\u017C\u017D\x05\x86D\x02\u017D\u017E\x07\xBA\x02\x02\u017E\u0181" +
		"\x07\xBB\x02\x02\u017F\u0180\x07\x81\x02\x02\u0180\u0182\x07$\x02\x02" +
		"\u0181\u017F\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0183\x03" +
		"\x02\x02\x02\u0183\u0184\x05.\x18\x02\u0184\u0344\x03\x02\x02\x02\u0185" +
		"\u0186\x07o\x02\x02\u0186\u0187\x07R\x02\x02\u0187\u0189\x05\x86D\x02" +
		"\u0188\u018A\x05 \x11\x02\u0189\u0188\x03\x02\x02\x02\u0189\u018A\x03" +
		"\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018D\x07\xC9\x02\x02\u018C" +
		"\u018E\x07c\x02\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03\x02\x02" +
		"\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0190\x05\xC2b\x02\u0190\u0192" +
		"\x05\xAEX\x02\u0191\u0193\x05\xA8U\x02\u0192\u0191\x03\x02\x02\x02\u0192" +
		"\u0193\x03\x02\x02\x02\u0193\u0344\x03\x02\x02\x02\u0194\u0195\x07o\x02" +
		"\x02\u0195\u0196\x07R\x02\x02\u0196\u0198\x05\x86D\x02\u0197\u0199\x05" +
		" \x11\x02\u0198\u0197\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199" +
		"\u019A\x03\x02\x02\x02\u019A\u019B\x07u\x02\x02\u019B\u019C\x07\xA2\x02" +
		"\x02\u019C\u01A0\x07\xF2\x02\x02\u019D\u019E\x07O\x02\x02\u019E\u019F" +
		"\x07\xA3\x02\x02\u019F\u01A1\x05.\x18\x02\u01A0\u019D\x03\x02\x02\x02" +
		"\u01A0\u01A1\x03\x02\x02\x02\u01A1\u0344\x03\x02\x02\x02\u01A2\u01A3\x07" +
		"o\x02\x02\u01A3\u01A4\x07R\x02\x02\u01A4\u01A6\x05\x86D\x02\u01A5\u01A7" +
		"\x05 \x11\x02\u01A6\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02" +
		"\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9\x07u\x02\x02\u01A9\u01AA\x07" +
		"\xA3\x02\x02\u01AA\u01AB\x05.\x18\x02\u01AB\u0344\x03\x02\x02\x02\u01AC" +
		"\u01AD\x07o\x02\x02\u01AD\u01AE\x07R\x02\x02\u01AE\u01AF\x05\x86D\x02" +
		"\u01AF\u01B3\x07\x0F\x02\x02\u01B0\u01B1\x07\x81\x02\x02\u01B1\u01B2\x07" +
		"\"\x02\x02\u01B2\u01B4\x07$\x02\x02\u01B3\u01B0\x03\x02\x02\x02\u01B3" +
		"\u01B4\x03\x02\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B7\x05\x1E" +
		"\x10\x02\u01B6\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8" +
		"\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u0344\x03\x02" +
		"\x02\x02\u01BA\u01BB\x07o\x02\x02\u01BB\u01BC\x07T\x02\x02\u01BC\u01BD" +
		"\x05\x86D\x02\u01BD\u01C1\x07\x0F\x02\x02\u01BE\u01BF\x07\x81\x02\x02" +
		"\u01BF\u01C0\x07\"\x02\x02\u01C0\u01C2\x07$\x02\x02\u01C1\u01BE\x03\x02" +
		"\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3" +
		"\u01C5\x05 \x11\x02\u01C4\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02" +
		"\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u0344" +
		"\x03\x02\x02\x02\u01C8\u01C9\x07o\x02\x02\u01C9\u01CA\x07R\x02\x02\u01CA" +
		"\u01CB\x05\x86D\x02\u01CB\u01CC\x05 \x11\x02\u01CC\u01CD\x07p\x02\x02" +
		"\u01CD\u01CE\x07l\x02\x02\u01CE\u01CF\x05 \x11\x02\u01CF\u0344\x03\x02" +
		"\x02\x02\u01D0\u01D1\x07o\x02\x02\u01D1\u01D2\x07R\x02\x02\u01D2\u01D3" +
		"\x05\x86D\x02\u01D3\u01D6\x07g\x02\x02\u01D4\u01D5\x07\x81\x02\x02\u01D5" +
		"\u01D7\x07$\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02" +
		"\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DD\x05 \x11\x02\u01D9\u01DA" +
		"\x07\x05\x02\x02\u01DA\u01DC\x05 \x11\x02\u01DB\u01D9\x03\x02\x02\x02" +
		"\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03" +
		"\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0" +
		"\u01E2\x07\xCE\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02" +
		"\x02\x02\u01E2\u0344\x03\x02\x02\x02\u01E3\u01E4\x07o\x02\x02\u01E4\u01E5" +
		"\x07T\x02\x02\u01E5\u01E6\x05\x86D\x02\u01E6\u01E9\x07g\x02\x02\u01E7" +
		"\u01E8\x07\x81\x02\x02\u01E8\u01EA\x07$\x02\x02\u01E9\u01E7\x03\x02\x02" +
		"\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01F0" +
		"\x05 \x11\x02\u01EC\u01ED\x07\x05\x02\x02\u01ED\u01EF\x05 \x11\x02\u01EE" +
		"\u01EC\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02\u01F0\u01EE\x03\x02" +
		"\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u0344\x03\x02\x02\x02\u01F2" +
		"\u01F0\x03\x02\x02\x02\u01F3\u01F4\x07o\x02\x02\u01F4\u01F5\x07R\x02\x02" +
		"\u01F5\u01F7\x05\x86D\x02\u01F6\u01F8\x05 \x11\x02\u01F7\u01F6\x03\x02" +
		"\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9" +
		"\u01FA\x07u\x02\x02\u01FA\u01FB\x05\x18\r\x02\u01FB\u0344\x03\x02\x02" +
		"\x02\u01FC\u01FD\x07o\x02\x02\u01FD\u01FE\x07R\x02\x02\u01FE\u01FF\x05" +
		"\x86D\x02\u01FF\u0200\x07\xE2\x02\x02\u0200\u0201\x07e\x02\x02\u0201\u0344" +
		"\x03\x02\x02\x02\u0202\u0203\x07g\x02\x02\u0203\u0206\x07R\x02\x02\u0204" +
		"\u0205\x07\x81\x02\x02\u0205\u0207\x07$\x02\x02\u0206\u0204\x03\x02\x02" +
		"\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u020A" +
		"\x05\x86D\x02\u0209\u020B\x07\xCE\x02\x02\u020A\u0209\x03\x02\x02\x02" +
		"\u020A\u020B\x03\x02\x02\x02\u020B\u0344\x03\x02\x02\x02\u020C\u020D\x07" +
		"g\x02\x02\u020D\u0210\x07T\x02\x02\u020E\u020F\x07\x81\x02\x02\u020F\u0211" +
		"\x07$\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02" +
		"\u0211\u0212\x03\x02\x02\x02\u0212\u0344\x05\x86D\x02\u0213\u0216\x07" +
		"Q\x02\x02\u0214\u0215\x07\x1F\x02\x02\u0215\u0217\x07U\x02\x02\u0216\u0214" +
		"\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u021C\x03\x02\x02\x02" +
		"\u0218\u021A\x07\xB7\x02\x02\u0219\u0218\x03\x02\x02\x02\u0219\u021A\x03" +
		"\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021D\x07\xB8\x02\x02\u021C" +
		"\u0219\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x03\x02" +
		"\x02\x02\u021E\u0222\x07T\x02\x02\u021F\u0220\x07\x81\x02\x02\u0220\u0221" +
		"\x07\"\x02\x02\u0221\u0223\x07$\x02\x02\u0222\u021F\x03\x02\x02\x02\u0222" +
		"\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0226\x05\x86" +
		"D\x02\u0225\u0227\x05x=\x02\u0226\u0225\x03\x02\x02\x02\u0226\u0227\x03" +
		"\x02\x02\x02\u0227\u022A\x03\x02\x02\x02\u0228\u0229\x07t\x02\x02\u0229" +
		"\u022B\x07\xF2\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03\x02" +
		"\x02\x02\u022B\u022F\x03\x02\x02\x02\u022C\u022D\x07\xD9\x02\x02\u022D" +
		"\u022E\x07?\x02\x02\u022E\u0230\x05p9\x02\u022F\u022C\x03\x02\x02\x02" +
		"\u022F\u0230\x03\x02\x02\x02\u0230\u0233\x03\x02\x02\x02\u0231\u0232\x07" +
		"\xBB\x02\x02\u0232\u0234\x05.\x18\x02\u0233\u0231\x03\x02\x02\x02\u0233" +
		"\u0234\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x07\x10" +
		"\x02\x02\u0236\u0237\x05\x1A\x0E\x02\u0237\u0344\x03\x02\x02\x02\u0238" +
		"\u023B\x07Q\x02\x02\u0239\u023A\x07\x1F\x02\x02\u023A\u023C\x07U\x02\x02" +
		"\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023E\x03" +
		"\x02\x02\x02\u023D\u023F\x07\xB7\x02\x02\u023E\u023D\x03\x02\x02\x02\u023E" +
		"\u023F\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0241\x07\xB8" +
		"\x02\x02\u0241\u0242\x07T\x02\x02\u0242\u0247\x05\x86D\x02\u0243\u0244" +
		"\x07\x03\x02\x02\u0244\u0245\x05\xACW\x02\u0245\u0246\x07\x04\x02\x02" +
		"\u0246\u0248\x03\x02\x02\x02\u0247\u0243\x03\x02\x02\x02\u0247\u0248\x03" +
		"\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024C\x05,\x17\x02\u024A" +
		"\u024B\x07\xB9\x02\x02\u024B\u024D\x05.\x18\x02\u024C\u024A\x03\x02\x02" +
		"\x02\u024C\u024D\x03\x02\x02\x02\u024D\u0344\x03\x02\x02\x02\u024E\u024F" +
		"\x07o\x02\x02\u024F\u0250\x07T\x02\x02\u0250\u0252\x05\x86D\x02\u0251" +
		"\u0253\x07\x10\x02\x02\u0252\u0251\x03\x02\x02\x02\u0252\u0253\x03\x02" +
		"\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x05\x1A\x0E\x02\u0255" +
		"\u0344\x03\x02\x02\x02\u0256\u0259\x07Q\x02\x02\u0257\u0258\x07\x1F\x02" +
		"\x02\u0258\u025A\x07U\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A" +
		"\x03\x02\x02\x02\u025A\u025C\x03\x02\x02\x02\u025B\u025D\x07\xB8\x02\x02" +
		"\u025C\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x03" +
		"\x02\x02\x02\u025E\u0262\x07\xAF\x02\x02\u025F\u0260\x07\x81\x02\x02\u0260" +
		"\u0261\x07\"\x02\x02\u0261\u0263\x07$\x02\x02\u0262\u025F\x03\x02\x02" +
		"\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0265" +
		"\x05\xC0a\x02\u0265\u0266\x07\x10\x02\x02\u0266\u0270\x07\xF2\x02\x02" +
		"\u0267\u0268\x07\xA1\x02\x02\u0268\u026D\x05@!\x02\u0269\u026A\x07\x05" +
		"\x02\x02\u026A\u026C\x05@!\x02\u026B\u0269\x03\x02\x02\x02\u026C\u026F" +
		"\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02" +
		"\u026E\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u0270\u0267\x03" +
		"\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0344\x03\x02\x02\x02\u0272" +
		"\u0274\x07g\x02\x02\u0273\u0275\x07\xB8\x02\x02\u0274\u0273\x03\x02\x02" +
		"\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0279" +
		"\x07\xAF\x02\x02\u0277\u0278\x07\x81\x02\x02\u0278\u027A\x07$\x02\x02" +
		"\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027B\x03" +
		"\x02\x02\x02\u027B\u0344\x05\xC0a\x02\u027C\u027E\x07Z\x02\x02\u027D\u027F" +
		"\t\x04\x02\x02\u027E\u027D\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02" +
		"\u027F\u0280\x03\x02\x02\x02\u0280\u0344\x05\x0E\b\x02\u0281\u0282\x07" +
		"`\x02\x02\u0282\u0285\x07a\x02\x02\u0283\u0284\t\x05\x02\x02\u0284\u0286" +
		"\x05\xC2b\x02\u0285\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02" +
		"\u0286\u028B\x03\x02\x02\x02\u0287\u0289\x07&\x02\x02\u0288\u0287\x03" +
		"\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A" +
		"\u028C\x07\xF2\x02\x02\u028B\u0288\x03\x02\x02\x02\u028B\u028C\x03\x02" +
		"\x02\x02\u028C\u0344\x03\x02\x02\x02\u028D\u028E\x07`\x02\x02\u028E\u028F" +
		"\x07R\x02\x02\u028F\u0292\x07\xB0\x02\x02\u0290\u0291\t\x05\x02\x02\u0291" +
		"\u0293\x05\xC2b\x02\u0292\u0290\x03\x02\x02\x02\u0292\u0293\x03\x02\x02" +
		"\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x07&\x02\x02\u0295\u0297" +
		"\x07\xF2\x02\x02\u0296\u0298\x05 \x11\x02\u0297\u0296\x03\x02\x02\x02" +
		"\u0297\u0298\x03\x02\x02\x02\u0298\u0344\x03\x02\x02\x02\u0299\u029A\x07" +
		"`\x02\x02\u029A\u029F\x07\xD2\x02\x02\u029B\u029D\x07&\x02\x02\u029C\u029B" +
		"\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02" +
		"\u029E\u02A0\x07\xF2\x02\x02\u029F\u029C\x03\x02\x02\x02\u029F\u02A0\x03" +
		"\x02\x02\x02\u02A0\u0344\x03\x02\x02\x02\u02A1\u02A2\x07`\x02\x02\u02A2" +
		"\u02A3\x07\xBB\x02\x02\u02A3\u02A8\x05\x86D\x02\u02A4\u02A5\x07\x03\x02" +
		"\x02\u02A5\u02A6\x052\x1A\x02\u02A6\u02A7\x07\x04\x02\x02\u02A7\u02A9" +
		"\x03\x02\x02\x02\u02A8\u02A4\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02" +
		"\u02A9\u0344\x03\x02\x02\x02\u02AA\u02AB\x07`\x02\x02\u02AB\u02AC\x07" +
		"b\x02\x02\u02AC\u02AD\t\x05\x02\x02\u02AD\u02B0\x05\x86D\x02\u02AE\u02AF" +
		"\t\x05\x02\x02\u02AF\u02B1\x05\xC2b\x02\u02B0\u02AE\x03\x02\x02\x02\u02B0" +
		"\u02B1\x03\x02\x02\x02\u02B1\u0344\x03\x02\x02\x02\u02B2\u02B3\x07`\x02" +
		"\x02\u02B3\u02B4\x07e\x02\x02\u02B4\u02B6\x05\x86D\x02\u02B5\u02B7\x05" +
		" \x11\x02\u02B6\u02B5\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7" +
		"\u0344\x03\x02\x02\x02\u02B8\u02BA\x07`\x02\x02\u02B9\u02BB\x05\xC2b\x02" +
		"\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BC\x03" +
		"\x02\x02\x02\u02BC\u02C4\x07f\x02\x02\u02BD\u02BF\x07&\x02\x02\u02BE\u02BD" +
		"\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02" +
		"\u02C0\u02C3\x05\xC0a\x02\u02C1\u02C3\x07\xF2\x02\x02\u02C2\u02C0\x03" +
		"\x02\x02\x02\u02C2\u02C1\x03\x02\x02\x02\u02C3\u02C5\x03\x02\x02\x02\u02C4" +
		"\u02BE\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u0344\x03\x02" +
		"\x02\x02\u02C6\u02C7\x07`\x02\x02\u02C7\u02C8\x07Q\x02\x02\u02C8\u02C9" +
		"\x07R\x02\x02\u02C9\u0344\x05\x86D\x02\u02CA\u02CB\t\x06\x02\x02\u02CB" +
		"\u02CD\x07\xAF\x02\x02\u02CC\u02CE\x07\xB0\x02\x02\u02CD\u02CC\x03\x02" +
		"\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF" +
		"\u0344\x05$\x13\x02\u02D0\u02D1\t\x06\x02\x02\u02D1\u02D3\x07\xD1\x02" +
		"\x02\u02D2\u02D4\x07\xB0\x02\x02\u02D3\u02D2\x03\x02\x02\x02\u02D3\u02D4" +
		"\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u0344\x05\xC2b\x02" +
		"\u02D6\u02D8\t\x06\x02\x02\u02D7\u02D9\x07R\x02\x02\u02D8\u02D7\x03\x02" +
		"\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DB\x03\x02\x02\x02\u02DA" +
		"\u02DC\t\x07\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02" +
		"\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02DF\x05\x86D\x02\u02DE\u02E0" +
		"\x05 \x11\x02\u02DF\u02DE\x03\x02\x02\x02\u02DF";
	private static readonly _serializedATNSegment2: string =
		"\u02E0\x03\x02\x02\x02\u02E0\u02E2\x03\x02\x02\x02\u02E1\u02E3\x05&\x14" +
		"\x02\u02E2\u02E1\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u0344" +
		"\x03\x02\x02\x02\u02E4\u02E5\x07\xB1\x02\x02\u02E5\u02E6\x07R\x02\x02" +
		"\u02E6\u0344\x05\x86D\x02\u02E7\u02EF\x07\xB1\x02\x02\u02E8\u02F0\x07" +
		"\xF2\x02\x02\u02E9\u02EB\v\x02\x02\x02\u02EA\u02E9\x03\x02\x02\x02\u02EB" +
		"\u02EE\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02EC\u02EA\x03\x02" +
		"\x02\x02\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF" +
		"\u02E8\x03\x02\x02\x02\u02EF\u02EC\x03\x02\x02\x02\u02F0\u0344\x03\x02" +
		"\x02\x02\u02F1\u02F3\x07\xB3\x02\x02\u02F2\u02F4\x07\xB5\x02\x02\u02F3" +
		"\u02F2\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F5\x03\x02" +
		"\x02\x02\u02F5\u02F6\x07R\x02\x02\u02F6\u02F9\x05\x86D\x02\u02F7\u02F8" +
		"\x07\xB9\x02\x02\u02F8\u02FA\x05.\x18\x02\u02F9\u02F7\x03\x02\x02\x02" +
		"\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FF\x03\x02\x02\x02\u02FB\u02FD\x07" +
		"\x10\x02\x02\u02FC\u02FB\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD" +
		"\u02FE\x03\x02\x02\x02\u02FE\u0300\x05\x1A\x0E\x02\u02FF\u02FC\x03\x02" +
		"\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0344\x03\x02\x02\x02\u0301" +
		"\u0302\x07\xB4\x02\x02\u0302\u0305\x07R\x02\x02\u0303\u0304\x07\x81\x02" +
		"\x02\u0304\u0306\x07$\x02\x02\u0305\u0303\x03\x02\x02\x02\u0305\u0306" +
		"\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0344\x05\x86D\x02" +
		"\u0308\u0309\x07\xB2\x02\x02\u0309\u0344\x07\xB3\x02\x02\u030A\u030B\x07" +
		"\xE5\x02\x02\u030B\u030D\x07w\x02\x02\u030C\u030E\x07\xF0\x02\x02\u030D" +
		"\u030C\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u030F\x03\x02" +
		"\x02\x02\u030F\u0310\x07\xF1\x02\x02\u0310\u0312\x07\xF2\x02\x02\u0311" +
		"\u0313\x07\x9E\x02\x02\u0312\u0311\x03\x02\x02\x02\u0312\u0313\x03\x02" +
		"\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314\u0315\x07X\x02\x02\u0315\u0316" +
		"\x07R\x02\x02\u0316\u0318\x05\x86D\x02\u0317\u0319\x05 \x11\x02\u0318" +
		"\u0317\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u0344\x03\x02" +
		"\x02\x02\u031A\u031B\x07\xD4\x02\x02\u031B\u031C\x07R\x02\x02\u031C\u031E" +
		"\x05\x86D\x02\u031D\u031F\x05 \x11\x02\u031E\u031D\x03\x02\x02\x02\u031E" +
		"\u031F\x03\x02\x02\x02\u031F\u0344\x03\x02\x02\x02\u0320\u0321\x07\xE0" +
		"\x02\x02\u0321\u0322\x07\xE1\x02\x02\u0322\u0323\x07R\x02\x02\u0323\u0344" +
		"\x05\x86D\x02\u0324\u0325\t\b\x02\x02\u0325\u0329\x05\xC2b\x02\u0326\u0328" +
		"\v\x02\x02\x02\u0327\u0326\x03\x02\x02\x02\u0328\u032B\x03\x02\x02\x02" +
		"\u0329\u032A\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u032A\u0344\x03" +
		"\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032C\u032D\x07u\x02\x02\u032D" +
		"\u0331\x07\xE6\x02\x02\u032E\u0330\v\x02\x02\x02\u032F\u032E\x03\x02\x02" +
		"\x02\u0330\u0333\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0331\u032F" +
		"\x03\x02\x02\x02\u0332\u0344\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02" +
		"\u0334\u0338\x07u\x02\x02\u0335\u0337\v\x02\x02\x02\u0336\u0335\x03\x02" +
		"\x02\x02\u0337\u033A\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0338" +
		"\u0336\x03\x02\x02\x02\u0339\u0344\x03\x02\x02\x02\u033A\u0338\x03\x02" +
		"\x02\x02\u033B\u0344\x07v\x02\x02\u033C\u0340\x05\x10\t\x02\u033D\u033F" +
		"\v\x02\x02\x02\u033E\u033D\x03\x02\x02\x02\u033F\u0342\x03\x02\x02\x02" +
		"\u0340\u0341\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02\u0341\u0344\x03" +
		"\x02\x02\x02\u0342\u0340\x03\x02\x02\x02\u0343\xDE\x03\x02\x02\x02\u0343" +
		"\xDF\x03\x02\x02\x02\u0343\xE1\x03\x02\x02\x02\u0343\xF5\x03\x02\x02\x02" +
		"\u0343\xFC\x03\x02\x02\x02\u0343\u0106\x03\x02\x02\x02\u0343\u0124\x03" +
		"\x02\x02\x02\u0343\u0145\x03\x02\x02\x02\u0343\u0152\x03\x02\x02\x02\u0343" +
		"\u0163\x03\x02\x02\x02\u0343\u016C\x03\x02\x02\x02\u0343\u0173\x03\x02" +
		"\x02\x02\u0343\u017A\x03\x02\x02\x02\u0343\u0185\x03\x02\x02\x02\u0343" +
		"\u0194\x03\x02\x02\x02\u0343\u01A2\x03\x02\x02\x02\u0343\u01AC\x03\x02" +
		"\x02\x02\u0343\u01BA\x03\x02\x02\x02\u0343\u01C8\x03\x02\x02\x02\u0343" +
		"\u01D0\x03\x02\x02\x02\u0343\u01E3\x03\x02\x02\x02\u0343\u01F3\x03\x02" +
		"\x02\x02\u0343\u01FC\x03\x02\x02\x02\u0343\u0202\x03\x02\x02\x02\u0343" +
		"\u020C\x03\x02\x02\x02\u0343\u0213\x03\x02\x02\x02\u0343\u0238\x03\x02" +
		"\x02\x02\u0343\u024E\x03\x02\x02\x02\u0343\u0256\x03\x02\x02\x02\u0343" +
		"\u0272\x03\x02\x02\x02\u0343\u027C\x03\x02\x02\x02\u0343\u0281\x03\x02" +
		"\x02\x02\u0343\u028D\x03\x02\x02\x02\u0343\u0299\x03\x02\x02\x02\u0343" +
		"\u02A1\x03\x02\x02\x02\u0343\u02AA\x03\x02\x02\x02\u0343\u02B2\x03\x02" +
		"\x02\x02\u0343\u02B8\x03\x02\x02\x02\u0343\u02C6\x03\x02\x02\x02\u0343" +
		"\u02CA\x03\x02\x02\x02\u0343\u02D0\x03\x02\x02\x02\u0343\u02D6\x03\x02" +
		"\x02\x02\u0343\u02E4\x03\x02\x02\x02\u0343\u02E7\x03\x02\x02\x02\u0343" +
		"\u02F1\x03\x02\x02\x02\u0343\u0301\x03\x02\x02\x02\u0343\u0308\x03\x02" +
		"\x02\x02\u0343\u030A\x03\x02\x02\x02\u0343\u031A\x03\x02\x02\x02\u0343" +
		"\u0320\x03\x02\x02\x02\u0343\u0324\x03\x02\x02\x02\u0343\u032C\x03\x02" +
		"\x02\x02\u0343\u0334\x03\x02\x02\x02\u0343\u033B\x03\x02\x02\x02\u0343" +
		"\u033C\x03\x02\x02\x02\u0344\x0F\x03\x02\x02\x02\u0345\u0346\x07Q\x02" +
		"\x02\u0346\u03F0\x07\xE6\x02\x02\u0347\u0348\x07g\x02\x02\u0348\u03F0" +
		"\x07\xE6\x02\x02\u0349\u034B\x07\xDD\x02\x02\u034A\u034C\x07\xE6\x02\x02" +
		"\u034B\u034A\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u03F0\x03" +
		"\x02\x02\x02\u034D\u034F\x07\xDC\x02\x02\u034E\u0350\x07\xE6\x02\x02\u034F" +
		"\u034E\x03\x02\x02\x02\u034F\u0350\x03\x02\x02\x02\u0350\u03F0\x03\x02" +
		"\x02\x02\u0351\u0352\x07`\x02\x02\u0352\u03F0\x07\xDD\x02\x02\u0353\u0354" +
		"\x07`\x02\x02\u0354\u0356\x07\xE6\x02\x02\u0355\u0357\x07\xDD\x02\x02" +
		"\u0356\u0355\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u03F0\x03" +
		"\x02\x02\x02\u0358\u0359\x07`\x02\x02\u0359\u03F0\x07\xE9\x02\x02\u035A" +
		"\u035B\x07`\x02\x02\u035B\u03F0\x07\xE7\x02\x02\u035C\u035D\x07`\x02\x02" +
		"\u035D\u035E\x07J\x02\x02\u035E\u03F0\x07\xE7\x02\x02\u035F\u0360\x07" +
		"\xE3\x02\x02\u0360\u03F0\x07R\x02\x02\u0361\u0362\x07\xE4\x02\x02\u0362" +
		"\u03F0\x07R\x02\x02\u0363\u0364\x07`\x02\x02\u0364\u03F0\x07\xE8\x02\x02" +
		"\u0365\u0366\x07`\x02\x02\u0366\u0367\x07Q\x02\x02\u0367\u03F0\x07R\x02" +
		"\x02\u0368\u0369\x07`\x02\x02\u0369\u03F0\x07\xEA\x02\x02\u036A\u036B" +
		"\x07`\x02\x02\u036B\u03F0\x07\xEC\x02\x02\u036C\u036D\x07`\x02\x02\u036D" +
		"\u03F0\x07\xED\x02\x02\u036E\u036F\x07Q\x02\x02\u036F\u03F0\x07\xEB\x02" +
		"\x02\u0370\u0371\x07g\x02\x02\u0371\u03F0\x07\xEB\x02\x02\u0372\u0373" +
		"\x07o\x02\x02\u0373\u03F0\x07\xEB\x02\x02\u0374\u0375\x07\xDE\x02\x02" +
		"\u0375\u03F0\x07R\x02\x02\u0376\u0377\x07\xDE\x02\x02\u0377\u03F0\x07" +
		"\xD1\x02\x02\u0378\u0379\x07\xDF\x02\x02\u0379\u03F0\x07R\x02\x02\u037A" +
		"\u037B\x07\xDF\x02\x02\u037B\u03F0\x07\xD1\x02\x02\u037C\u037D\x07Q\x02" +
		"\x02\u037D\u037E\x07\xB8\x02\x02\u037E\u03F0\x07|\x02\x02\u037F\u0380" +
		"\x07g\x02\x02\u0380\u0381\x07\xB8\x02\x02\u0381\u03F0\x07|\x02\x02\u0382" +
		"\u0383\x07o\x02\x02\u0383\u0384\x07R\x02\x02\u0384\u0385\x05\x86D\x02" +
		"\u0385\u0386\x07\"\x02\x02\u0386\u0387\x07\xCC\x02\x02\u0387\u03F0\x03" +
		"\x02\x02\x02\u0388\u0389\x07o\x02\x02\u0389\u038A\x07R\x02\x02\u038A\u038B" +
		"\x05\x86D\x02\u038B\u038C\x07\xCC\x02\x02\u038C\u038D\x07\x16\x02\x02" +
		"\u038D\u03F0\x03\x02\x02\x02\u038E\u038F\x07o\x02\x02\u038F\u0390\x07" +
		"R\x02\x02\u0390\u0391\x05\x86D\x02\u0391\u0392\x07\"\x02\x02\u0392\u0393" +
		"\x07\xCD\x02\x02\u0393\u03F0\x03\x02\x02\x02\u0394\u0395\x07o\x02\x02" +
		"\u0395\u0396\x07R\x02\x02\u0396\u0397\x05\x86D\x02\u0397\u0398\x07\xBE" +
		"\x02\x02\u0398\u0399\x07\x16\x02\x02\u0399\u03F0\x03\x02\x02\x02\u039A" +
		"\u039B\x07o\x02\x02\u039B\u039C\x07R\x02\x02\u039C\u039D\x05\x86D\x02" +
		"\u039D\u039E\x07\"\x02\x02\u039E\u039F\x07\xBE\x02\x02\u039F\u03F0\x03" +
		"\x02\x02\x02\u03A0\u03A1\x07o\x02\x02\u03A1\u03A2\x07R\x02\x02\u03A2\u03A3" +
		"\x05\x86D\x02\u03A3\u03A4\x07\"\x02\x02\u03A4\u03A5\x07\xBF\x02\x02\u03A5" +
		"\u03A6\x07\x10\x02\x02\u03A6\u03A7\x07\xC0\x02\x02\u03A7\u03F0\x03\x02" +
		"\x02\x02\u03A8\u03A9\x07o\x02\x02\u03A9\u03AA\x07R\x02\x02\u03AA\u03AB" +
		"\x05\x86D\x02\u03AB\u03AC\x07u\x02\x02\u03AC\u03AD\x07\xBE\x02\x02\u03AD" +
		"\u03AE\x07\xC1\x02\x02\u03AE\u03F0\x03\x02\x02\x02\u03AF\u03B0\x07o\x02" +
		"\x02\u03B0\u03B1\x07R\x02\x02\u03B1\u03B2\x05\x86D\x02\u03B2\u03B3\x07" +
		"\xC2\x02\x02\u03B3\u03B4\x07D\x02\x02\u03B4\u03F0\x03\x02\x02\x02\u03B5" +
		"\u03B6\x07o\x02\x02\u03B6\u03B7\x07R\x02\x02\u03B7\u03B8\x05\x86D\x02" +
		"\u03B8\u03B9\x07\xC3\x02\x02\u03B9\u03BA\x07D\x02\x02\u03BA\u03F0\x03" +
		"\x02\x02\x02\u03BB\u03BC\x07o\x02\x02\u03BC\u03BD\x07R\x02\x02\u03BD\u03BE" +
		"\x05\x86D\x02\u03BE\u03BF\x07\xC4\x02\x02\u03BF\u03C0\x07D\x02\x02\u03C0" +
		"\u03F0\x03\x02\x02\x02\u03C1\u03C2\x07o\x02\x02\u03C2\u03C3\x07R\x02\x02" +
		"\u03C3\u03C4\x05\x86D\x02\u03C4\u03C5\x07\xC6\x02\x02\u03C5\u03F0\x03" +
		"\x02\x02\x02\u03C6\u03C7\x07o\x02\x02\u03C7\u03C8\x07R\x02\x02\u03C8\u03CA" +
		"\x05\x86D\x02\u03C9\u03CB\x05 \x11\x02\u03CA\u03C9\x03\x02\x02\x02\u03CA" +
		"\u03CB\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03CD\x07\xC7" +
		"\x02\x02\u03CD\u03F0\x03\x02\x02\x02\u03CE\u03CF\x07o\x02\x02\u03CF\u03D0" +
		"\x07R\x02\x02\u03D0\u03D2\x05\x86D\x02\u03D1\u03D3\x05 \x11\x02\u03D2" +
		"\u03D1\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03D4\x03\x02" +
		"\x02\x02\u03D4\u03D5\x07\xC8\x02\x02\u03D5\u03F0\x03\x02\x02\x02\u03D6" +
		"\u03D7\x07o\x02\x02\u03D7\u03D8\x07R\x02\x02\u03D8\u03DA\x05\x86D\x02" +
		"\u03D9\u03DB\x05 \x11\x02\u03DA\u03D9\x03\x02\x02\x02\u03DA\u03DB\x03" +
		"\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DD\x07u\x02\x02\u03DD" +
		"\u03DE\x07\xC5\x02\x02\u03DE\u03F0\x03\x02\x02\x02\u03DF\u03E0\x07o\x02" +
		"\x02\u03E0\u03E1\x07R\x02\x02\u03E1\u03E3\x05\x86D\x02\u03E2\u03E4\x05" +
		" \x11\x02\u03E3\u03E2\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4" +
		"\u03E5\x03\x02\x02\x02\u03E5\u03E6\x07U\x02\x02\u03E6\u03E7\x07b\x02\x02" +
		"\u03E7\u03F0\x03\x02\x02\x02\u03E8\u03E9\x07x\x02\x02\u03E9\u03F0\x07" +
		"y\x02\x02\u03EA\u03F0\x07z\x02\x02\u03EB\u03F0\x07{\x02\x02\u03EC\u03F0" +
		"\x07\xD3\x02\x02\u03ED\u03EE\x07W\x02\x02\u03EE\u03F0\x07\x0E\x02\x02" +
		"\u03EF\u0345\x03\x02\x02\x02\u03EF\u0347\x03\x02\x02\x02\u03EF\u0349\x03" +
		"\x02\x02\x02\u03EF\u034D\x03\x02\x02\x02\u03EF\u0351\x03\x02\x02\x02\u03EF" +
		"\u0353\x03\x02\x02\x02\u03EF\u0358\x03\x02\x02\x02\u03EF\u035A\x03\x02" +
		"\x02\x02\u03EF\u035C\x03\x02\x02\x02\u03EF\u035F\x03\x02\x02\x02\u03EF" +
		"\u0361\x03\x02\x02\x02\u03EF\u0363\x03\x02\x02\x02\u03EF\u0365\x03\x02" +
		"\x02\x02\u03EF\u0368\x03\x02\x02\x02\u03EF\u036A\x03\x02\x02\x02\u03EF" +
		"\u036C\x03\x02\x02\x02\u03EF\u036E\x03\x02\x02\x02\u03EF\u0370\x03\x02" +
		"\x02\x02\u03EF\u0372\x03\x02\x02\x02\u03EF\u0374\x03\x02\x02\x02\u03EF" +
		"\u0376\x03\x02\x02\x02\u03EF\u0378\x03\x02\x02\x02\u03EF\u037A\x03\x02" +
		"\x02\x02\u03EF\u037C\x03\x02\x02\x02\u03EF\u037F\x03\x02\x02\x02\u03EF" +
		"\u0382\x03\x02\x02\x02\u03EF\u0388\x03\x02\x02\x02\u03EF\u038E\x03\x02" +
		"\x02\x02\u03EF\u0394\x03\x02\x02\x02\u03EF\u039A\x03\x02\x02\x02\u03EF" +
		"\u03A0\x03\x02\x02\x02\u03EF\u03A8\x03\x02\x02\x02\u03EF\u03AF\x03\x02" +
		"\x02\x02\u03EF\u03B5\x03\x02\x02\x02\u03EF\u03BB\x03\x02\x02\x02\u03EF" +
		"\u03C1\x03\x02\x02\x02\u03EF\u03C6\x03\x02\x02\x02\u03EF\u03CE\x03\x02" +
		"\x02\x02\u03EF\u03D6\x03\x02\x02\x02\u03EF\u03DF\x03\x02\x02\x02\u03EF" +
		"\u03E8\x03\x02\x02\x02\u03EF\u03EA\x03\x02\x02\x02\u03EF\u03EB\x03\x02" +
		"\x02\x02\u03EF\u03EC\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03F0" +
		"\x11\x03\x02\x02\x02\u03F1\u03F3\x07Q\x02\x02\u03F2\u03F4\x07\xB8\x02" +
		"\x02\u03F3\u03F2\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F6" +
		"\x03\x02\x02\x02\u03F5\u03F7\x07\xDA\x02\x02\u03F6\u03F5\x03\x02\x02\x02" +
		"\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03FC\x07" +
		"R\x02\x02\u03F9\u03FA\x07\x81\x02\x02\u03FA\u03FB\x07\"\x02\x02\u03FB" +
		"\u03FD\x07$\x02\x02\u03FC\u03F9\x03\x02\x02\x02\u03FC\u03FD\x03\x02\x02" +
		"\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\u03FF\x05\x86D\x02\u03FF\x13\x03" +
		"\x02\x02\x02\u0400\u0401\x07\xCC\x02\x02\u0401\u0402\x07\x16\x02\x02\u0402" +
		"\u0406\x05p9\x02\u0403\u0404\x07\xCD\x02\x02\u0404\u0405\x07\x16\x02\x02" +
		"\u0405\u0407\x05t;\x02\u0406\u0403\x03\x02\x02\x02\u0406\u0407\x03\x02" +
		"\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u0409\x07X\x02\x02\u0409\u040A" +
		"\x07\xF6\x02\x02\u040A\u040B\x07\xBD\x02\x02\u040B\x15\x03\x02\x02\x02" +
		"\u040C\u040D\x07\xBE\x02\x02\u040D\u040E\x07\x16\x02\x02\u040E\u040F\x05" +
		"p9\x02\u040F\u0412\x07?\x02\x02\u0410\u0413\x056\x1C\x02\u0411\u0413\x05" +
		"8\x1D\x02\u0412\u0410\x03\x02\x02\x02\u0412\u0411\x03\x02\x02\x02\u0413" +
		"\u0417\x03\x02\x02\x02\u0414\u0415\x07\xBF\x02\x02\u0415\u0416\x07\x10" +
		"\x02\x02\u0416\u0418\x07\xC0\x02\x02\u0417\u0414\x03\x02\x02\x02\u0417" +
		"\u0418\x03\x02\x02\x02\u0418\x17\x03\x02\x02\x02\u0419\u041A\x07\xC1\x02" +
		"\x02\u041A\u041B\x07\xF2\x02\x02\u041B\x19\x03\x02\x02\x02\u041C\u041E" +
		"\x05(\x15\x02\u041D\u041C\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02" +
		"\u041E\u041F\x03\x02\x02\x02\u041F\u0420\x05B\"\x02\u0420\x1B\x03\x02" +
		"\x02\x02\u0421\u0422\x07V\x02\x02\u0422\u0423\x07\x9E\x02\x02\u0423\u0424" +
		"\x07R\x02\x02\u0424\u042B\x05\x86D\x02\u0425\u0429\x05 \x11\x02\u0426" +
		"\u0427\x07\x81\x02\x02\u0427\u0428\x07\"\x02\x02\u0428\u042A\x07$\x02" +
		"\x02\u0429\u0426\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02\u042A\u042C" +
		"\x03\x02\x02\x02\u042B\u0425\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02" +
		"\u042C\u0452\x03\x02\x02\x02\u042D\u042E\x07V\x02\x02\u042E\u0430\x07" +
		"X\x02\x02\u042F\u0431\x07R\x02\x02\u0430\u042F\x03\x02\x02\x02\u0430\u0431" +
		"\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0434\x05\x86D\x02" +
		"\u0433\u0435\x05 \x11\x02\u0434\u0433\x03\x02\x02\x02\u0434\u0435\x03" +
		"\x02\x02\x02\u0435\u0452\x03\x02\x02\x02\u0436\u0437\x07V\x02\x02\u0437" +
		"\u0439\x07\x9E\x02\x02\u0438\u043A\x07\xF0\x02\x02\u0439\u0438\x03\x02" +
		"\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B" +
		"\u043C\x07S\x02\x02\u043C\u043E\x07\xF2\x02\x02\u043D\u043F\x05\x84C\x02" +
		"\u043E\u043D\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F\u0441\x03" +
		"\x02\x02\x02\u0440\u0442\x05:\x1E\x02\u0441\u0440\x03\x02\x02\x02\u0441" +
		"\u0442\x03\x02\x02\x02\u0442\u0452\x03\x02\x02\x02\u0443\u0444\x07V\x02" +
		"\x02\u0444\u0446\x07\x9E\x02\x02\u0445\u0447\x07\xF0\x02\x02\u0446\u0445" +
		"\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02" +
		"\u0448\u044A\x07S\x02\x02\u0449\u044B\x07\xF2\x02\x02\u044A\u0449\x03" +
		"\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C" +
		"\u044F\x05,\x17\x02\u044D\u044E\x07\xB9\x02\x02\u044E\u0450\x05.\x18\x02" +
		"\u044F\u044D\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0452\x03" +
		"\x02\x02\x02\u0451\u0421\x03\x02\x02\x02\u0451\u042D\x03\x02\x02\x02\u0451" +
		"\u0436\x03\x02\x02\x02\u0451\u0443\x03\x02\x02\x02\u0452\x1D\x03\x02\x02" +
		"\x02\u0453\u0455\x05 \x11\x02\u0454\u0456\x05\x18\r\x02\u0455\u0454\x03" +
		"\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\x1F\x03\x02\x02\x02\u0457" +
		"\u0458\x07D\x02\x02\u0458\u0459\x07\x03\x02\x02\u0459\u045E\x05\"\x12" +
		"\x02\u045A\u045B\x07\x05\x02\x02\u045B\u045D\x05\"\x12\x02\u045C\u045A" +
		"\x03\x02\x02\x02\u045D\u0460\x03\x02\x02\x02\u045E\u045C\x03\x02\x02\x02" +
		"\u045E\u045F\x03\x02\x02\x02\u045F\u0461\x03\x02\x02\x02\u0460\u045E\x03" +
		"\x02\x02\x02\u0461\u0462\x07\x04\x02\x02\u0462!\x03\x02\x02\x02\u0463" +
		"\u0466\x05\xC2b\x02\u0464\u0465\x07\x84\x02\x02\u0465\u0467\x05\x98M\x02" +
		"\u0466\u0464\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467#\x03\x02" +
		"\x02\x02\u0468\u046E\x05\xC0a\x02\u0469\u046E\x07\xF2\x02\x02\u046A\u046E" +
		"\x05\x9AN\x02\u046B\u046E\x05\x9CO\x02\u046C\u046E\x05\x9EP\x02\u046D" +
		"\u0468\x03\x02\x02\x02\u046D\u0469\x03\x02\x02\x02\u046D\u046A\x03\x02" +
		"\x02\x02\u046D\u046B\x03\x02\x02\x02\u046D\u046C\x03\x02\x02\x02\u046E" +
		"%\x03\x02\x02\x02\u046F\u0474\x05\xC2b\x02\u0470\u0471\x07\x06\x02\x02" +
		"\u0471\u0473\x05\xC2b\x02\u0472\u0470\x03\x02\x02\x02\u0473\u0476\x03" +
		"\x02\x02\x02\u0474\u0472\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475" +
		"\'\x03\x02\x02\x02\u0476\u0474\x03\x02\x02\x02\u0477\u0478\x07O\x02\x02" +
		"\u0478\u047D\x05*\x16\x02\u0479\u047A\x07\x05\x02\x02\u047A\u047C\x05" +
		"*\x16\x02\u047B\u0479\x03\x02\x02\x02\u047C\u047F\x03\x02\x02\x02\u047D" +
		"\u047B\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E)\x03\x02\x02" +
		"\x02\u047F\u047D\x03\x02\x02\x02\u0480\u0482\x05\xC2b\x02\u0481\u0483" +
		"\x07\x10\x02\x02\u0482\u0481\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02" +
		"\u0483\u0484\x03\x02\x02\x02\u0484\u0485\x07\x03\x02\x02\u0485\u0486\x05" +
		"\x1A\x0E\x02\u0486\u0487\x07\x04\x02\x02\u0487+\x03\x02\x02\x02\u0488" +
		"\u0489\x07\xA1\x02\x02\u0489\u048A\x05\xC0a\x02\u048A-\x03\x02\x02\x02" +
		"\u048B\u048C\x07\x03\x02\x02\u048C\u0491\x050\x19\x02\u048D\u048E\x07" +
		"\x05\x02\x02\u048E\u0490\x050\x19\x02\u048F\u048D\x03\x02\x02\x02\u0490" +
		"\u0493\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02\u0491\u0492\x03\x02" +
		"\x02\x02\u0492\u0494\x03\x02\x02\x02\u0493\u0491\x03\x02\x02\x02\u0494" +
		"\u0495\x07\x04\x02\x02\u0495/\x03\x02\x02\x02\u0496\u049B\x052\x1A\x02" +
		"\u0497\u0499\x07\x84\x02\x02\u0498\u0497\x03\x02\x02\x02\u0498\u0499\x03" +
		"\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049C\x054\x1B\x02\u049B" +
		"\u0498\x03\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C1\x03\x02\x02" +
		"\x02\u049D\u04A2\x05\xC2b\x02\u049E\u049F\x07\x06\x02\x02\u049F\u04A1" +
		"\x05\xC2b\x02\u04A0\u049E\x03\x02\x02\x02\u04A1\u04A4\x03\x02\x02\x02" +
		"\u04A2\u04A0\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A7\x03" +
		"\x02\x02\x02\u04A4\u04A2\x03\x02\x02\x02\u04A5\u04A7\x07\xF2\x02\x02\u04A6" +
		"\u049D\x03\x02\x02\x02\u04A6\u04A5\x03\x02\x02\x02\u04A73\x03\x02\x02" +
		"\x02\u04A8\u04AD\x07\xF6\x02\x02\u04A9\u04AD\x07\xF7\x02\x02\u04AA\u04AD" +
		"\x05\xA0Q\x02\u04AB\u04AD\x07\xF2\x02\x02\u04AC\u04A8\x03\x02\x02\x02" +
		"\u04AC\u04A9\x03\x02\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AC\u04AB\x03" +
		"\x02\x02\x02\u04AD5\x03\x02\x02\x02\u04AE\u04AF\x07\x03\x02\x02\u04AF" +
		"\u04B4\x05\x98M\x02\u04B0\u04B1\x07\x05\x02\x02\u04B1\u04B3\x05\x98M\x02" +
		"\u04B2\u04B0\x03\x02\x02\x02\u04B3\u04B6\x03\x02\x02\x02\u04B4\u04B2\x03" +
		"\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\u04B7\x03\x02\x02\x02\u04B6" +
		"\u04B4\x03\x02\x02\x02\u04B7\u04B8\x07\x04\x02\x02\u04B87\x03\x02\x02" +
		"\x02\u04B9\u04BA\x07\x03\x02\x02\u04BA\u04BF\x056\x1C\x02\u04BB\u04BC" +
		"\x07\x05\x02\x02\u04BC\u04BE\x056\x1C\x02\u04BD\u04BB\x03\x02\x02\x02" +
		"\u04BE\u04C1\x03\x02\x02\x02\u04BF\u04BD\x03\x02\x02\x02\u04BF\u04C0\x03" +
		"\x02\x02\x02\u04C0\u04C2\x03\x02\x02\x02\u04C1\u04BF\x03\x02\x02\x02\u04C2" +
		"\u04C3\x07\x04\x02\x02\u04C39\x03\x02\x02\x02\u04C4\u04C5\x07\xBF\x02" +
		"\x02\u04C5\u04C6\x07\x10\x02\x02\u04C6\u04CB\x05<\x1F\x02\u04C7\u04C8" +
		"\x07\xBF\x02\x02\u04C8\u04C9\x07\x16\x02\x02\u04C9\u04CB\x05> \x02\u04CA" +
		"\u04C4\x03\x02\x02\x02\u04CA\u04C7\x03\x02\x02\x02\u04CB;\x03\x02\x02" +
		"\x02\u04CC\u04CD\x07\xCF\x02\x02\u04CD\u04CE\x07\xF2\x02\x02\u04CE\u04CF" +
		"\x07\xD0\x02\x02\u04CF\u04D2\x07\xF2\x02\x02\u04D0\u04D2\x05\xC2b\x02" +
		"\u04D1\u04CC\x03\x02\x02\x02\u04D1\u04D0\x03\x02\x02\x02\u04D2=\x03\x02" +
		"\x02\x02\u04D3\u04D7\x07\xF2\x02\x02\u04D4\u04D5\x07O\x02\x02\u04D5\u04D6" +
		"\x07\xA3\x02\x02\u04D6\u04D8\x05.\x18\x02\u04D7\u04D4\x03\x02\x02\x02" +
		"\u04D7\u04D8\x03\x02\x02\x02\u04D8?\x03\x02\x02\x02\u04D9\u04DA\x05\xC2" +
		"b\x02\u04DA\u04DB\x07\xF2\x02\x02\u04DBA\x03\x02\x02\x02\u04DC\u04DE\x05" +
		"\x1C\x0F\x02\u04DD\u04DC\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE" +
		"\u04DF\x03\x02\x02\x02\u04DF\u04E0\x05H%\x02\u04E0\u04E1\x05D#\x02\u04E1" +
		"\u04E9\x03\x02\x02\x02\u04E2\u04E4\x05T+\x02\u04E3\u04E5\x05F$\x02\u04E4" +
		"\u04E3\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6\u04E4\x03\x02" +
		"\x02\x02\u04E6\u04E7\x03\x02\x02\x02\u04E7\u04E9\x03\x02\x02\x02\u04E8" +
		"\u04DD\x03\x02\x02\x02\u04E8\u04E2\x03\x02\x02\x02\u04E9C\x03\x02\x02" +
		"\x02\u04EA\u04EB\x07\x1B\x02\x02\u04EB\u04EC\x07\x16\x02\x02\u04EC\u04F1" +
		"\x05L\'\x02\u04ED\u04EE\x07\x05\x02\x02\u04EE\u04F0\x05L\'\x02\u04EF\u04ED" +
		"\x03\x02\x02\x02\u04F0\u04F3\x03\x02\x02\x02\u04F1\u04EF\x03\x02\x02\x02" +
		"\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F5\x03\x02\x02\x02\u04F3\u04F1\x03" +
		"\x02\x02\x02\u04F4\u04EA\x03\x02\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5" +
		"\u0500\x03\x02\x02\x02\u04F6\u04F7\x07\x9C\x02\x02\u04F7\u04F8\x07\x16" +
		"\x02\x02\u04F8\u04FD\x05\x8EH\x02\u04F9\u04FA\x07\x05\x02\x02\u04FA\u04FC" +
		"\x05\x8EH\x02\u04FB\u04F9\x03\x02\x02\x02\u04FC\u04FF\x03\x02\x02\x02" +
		"\u04FD\u04FB\x03\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u0501\x03" +
		"\x02\x02\x02\u04FF\u04FD\x03\x02\x02\x02\u0500\u04F6\x03\x02\x02\x02\u0500" +
		"\u0501\x03\x02\x02\x02\u0501\u050C\x03\x02\x02\x02\u0502\u0503\x07\x9D" +
		"\x02\x02\u0503\u0504\x07\x16\x02\x02\u0504\u0509\x05\x8EH\x02\u0505\u0506" +
		"\x07\x05\x02\x02\u0506\u0508\x05\x8EH\x02\u0507\u0505\x03\x02\x02\x02" +
		"\u0508\u050B\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u050A\x03" +
		"\x02\x02\x02\u050A\u050D\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050C" +
		"\u0502\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u0518\x03\x02" +
		"\x02\x02\u050E\u050F\x07\x9B\x02\x02\u050F\u0510\x07\x16\x02\x02\u0510" +
		"\u0515\x05L\'\x02\u0511\u0512\x07\x05\x02\x02\u0512\u0514\x05L\'\x02\u0513" +
		"\u0511\x03\x02\x02\x02\u0514\u0517\x03\x02\x02\x02\u0515\u0513\x03\x02" +
		"\x02\x02\u0515\u0516\x03\x02\x02\x02\u0516\u0519\x03\x02\x02\x02\u0517" +
		"\u0515\x03\x02\x02\x02\u0518\u050E\x03\x02\x02\x02\u0518\u0519\x03\x02" +
		"\x02\x02\u0519\u051B\x03\x02\x02\x02\u051A\u051C\x05\xB6\\\x02\u051B\u051A" +
		"\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051C\u0522\x03\x02\x02\x02" +
		"\u051D\u0520\x07\x1D\x02\x02\u051E\u0521\x07\x11\x02\x02\u051F\u0521\x05" +
		"\x8EH\x02\u0520\u051E\x03\x02\x02\x02\u0520\u051F\x03\x02\x02\x02\u0521" +
		"\u0523\x03\x02\x02\x02\u0522\u051D\x03\x02\x02\x02\u0522\u0523\x03\x02" +
		"\x02\x02\u0523E\x03\x02\x02\x02\u0524\u0526\x05\x1C\x0F\x02\u0525\u0524" +
		"\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526\u0527\x03\x02\x02\x02" +
		"\u0527\u0528\x05N(\x02\u0528\u0529\x05D#\x02\u0529G\x03\x02\x02\x02\u052A" +
		"\u052B\b%\x01\x02\u052B\u052C\x05J&\x02\u052C\u0544\x03\x02\x02\x02\u052D" +
		"\u052E\f\x05\x02\x02\u052E\u052F\x06%\x03\x02\u052F\u0531\t\t\x02\x02" +
		"\u0530\u0532\x05b2\x02\u0531\u0530\x03\x02\x02\x02\u0531\u0532\x03\x02" +
		"\x02\x02\u0532\u0533\x03\x02\x02\x02\u0533\u0543\x05H%\x06\u0534\u0535" +
		"\f\x04\x02\x02\u0535\u0536\x06%\x05\x02\u0536\u0538\x07k\x02\x02\u0537" +
		"\u0539\x05b2\x02\u0538\u0537\x03\x02\x02\x02\u0538\u0539\x03\x02\x02\x02" +
		"\u0539\u053A\x03\x02\x02\x02\u053A\u0543\x05H%\x05\u053B\u053C\f\x03\x02" +
		"\x02\u053C\u053D\x06%\x07\x02\u053D\u053F\t\n\x02\x02\u053E\u0540\x05" +
		"b2\x02\u053F\u053E\x03\x02\x02\x02\u053F\u0540\x03\x02\x02\x02\u0540\u0541" +
		"\x03\x02\x02\x02\u0541\u0543\x05H%\x04\u0542\u052D\x03\x02\x02\x02\u0542" +
		"\u0534\x03\x02\x02\x02\u0542\u053B\x03\x02\x02\x02\u0543\u0546\x03\x02" +
		"\x02\x02\u0544\u0542\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545" +
		"I\x03\x02\x02\x02\u0546\u0544\x03\x02\x02\x02\u0547\u0550\x05N(\x02\u0548" +
		"\u0549\x07R\x02\x02\u0549\u0550\x05\x86D\x02\u054A\u0550\x05~@\x02\u054B" +
		"\u054C\x07\x03\x02\x02\u054C\u054D\x05B\"\x02\u054D\u054E\x07\x04\x02" +
		"\x02\u054E\u0550\x03\x02\x02\x02\u054F\u0547\x03\x02\x02\x02\u054F\u0548" +
		"\x03\x02\x02\x02\u054F\u054A\x03\x02\x02\x02\u054F\u054B\x03\x02\x02\x02" +
		"\u0550K\x03\x02\x02\x02\u0551\u0553\x05\x8EH\x02\u0552\u0554\t\v\x02\x02" +
		"\u0553\u0552\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554\u0557\x03" +
		"\x02\x02\x02\u0555\u0556\x07,\x02\x02\u0556\u0558\t\f\x02\x02\u0557\u0555" +
		"\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558M\x03\x02\x02\x02\u0559" +
		"\u055A\x07\r\x02\x02\u055A\u055B\x07\x9F\x02\x02\u055B\u055C\x07\x03\x02" +
		"\x02\u055C\u055D\x05\x8CG\x02\u055D\u055E\x07\x04\x02\x02\u055E\u0564" +
		"\x03\x02\x02\x02\u055F\u0560\x07r\x02\x02\u0560\u0564\x05\x8CG\x02\u0561" +
		"\u0562\x07\xA0\x02\x02\u0562\u0564\x05";
	private static readonly _serializedATNSegment3: string =
		"\x8CG\x02\u0563\u0559\x03\x02\x02\x02\u0563\u055F\x03\x02\x02\x02\u0563" +
		"\u0561\x03\x02\x02\x02\u0564\u0566\x03\x02\x02\x02\u0565\u0567\x05\x84" +
		"C\x02\u0566\u0565\x03\x02\x02\x02\u0566\u0567\x03\x02\x02\x02\u0567\u056A" +
		"\x03\x02\x02\x02\u0568\u0569\x07\xA5\x02\x02\u0569\u056B\x07\xF2\x02\x02" +
		"\u056A\u0568\x03\x02\x02\x02\u056A\u056B\x03\x02\x02\x02\u056B\u056C\x03" +
		"\x02\x02\x02\u056C\u056D\x07\xA1\x02\x02\u056D\u057A\x07\xF2\x02\x02\u056E" +
		"\u0578\x07\x10\x02\x02\u056F\u0579\x05r:\x02\u0570\u0579\x05\xACW\x02" +
		"\u0571\u0574\x07\x03\x02\x02\u0572\u0575\x05r:\x02\u0573\u0575\x05\xAC" +
		"W\x02\u0574\u0572\x03\x02\x02\x02\u0574\u0573\x03\x02\x02\x02\u0575\u0576" +
		"\x03\x02\x02\x02\u0576\u0577\x07\x04\x02\x02\u0577\u0579\x03\x02\x02\x02" +
		"\u0578\u056F\x03\x02\x02\x02\u0578\u0570\x03\x02\x02\x02\u0578\u0571\x03" +
		"\x02\x02\x02\u0579\u057B\x03\x02\x02\x02\u057A\u056E\x03\x02\x02\x02\u057A" +
		"\u057B\x03\x02\x02\x02\u057B\u057D\x03\x02\x02\x02\u057C\u057E\x05\x84" +
		"C\x02\u057D\u057C\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E\u0581" +
		"\x03\x02\x02\x02\u057F\u0580\x07\xA4\x02\x02\u0580\u0582\x07\xF2\x02\x02" +
		"\u0581\u057F\x03\x02\x02\x02\u0581\u0582\x03\x02\x02\x02\u0582\u0584\x03" +
		"\x02\x02\x02\u0583\u0585\x05T+\x02\u0584\u0583\x03\x02\x02\x02\u0584\u0585" +
		"\x03\x02\x02\x02\u0585\u0588\x03\x02\x02\x02\u0586\u0587\x07\x14\x02\x02" +
		"\u0587\u0589\x05\x90I\x02\u0588\u0586\x03\x02\x02\x02\u0588\u0589\x03" +
		"\x02\x02\x02\u0589\u05B7\x03\x02\x02\x02\u058A\u058E\x07\r\x02\x02\u058B" +
		"\u058D\x05P)\x02\u058C\u058B\x03\x02\x02\x02\u058D\u0590\x03\x02\x02\x02" +
		"\u058E\u058C\x03\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F\u0592\x03" +
		"\x02\x02\x02\u0590\u058E\x03\x02\x02\x02\u0591\u0593\x05b2\x02\u0592\u0591" +
		"\x03\x02\x02\x02\u0592\u0593\x03\x02\x02\x02\u0593\u0594\x03\x02\x02\x02" +
		"\u0594\u0596\x05\x8CG\x02\u0595\u0597\x05T+\x02\u0596\u0595\x03\x02\x02" +
		"\x02\u0596\u0597\x03\x02\x02\x02\u0597\u05A1\x03\x02\x02\x02\u0598\u059E" +
		"\x05T+\x02\u0599\u059B\x07\r\x02\x02\u059A\u059C\x05b2\x02\u059B\u059A" +
		"\x03\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C\u059D\x03\x02\x02\x02" +
		"\u059D\u059F\x05\x8CG\x02\u059E\u0599\x03\x02\x02\x02\u059E\u059F\x03" +
		"\x02\x02\x02\u059F\u05A1\x03\x02\x02\x02\u05A0\u058A\x03\x02\x02\x02\u05A0" +
		"\u0598\x03\x02\x02\x02\u05A1\u05A5\x03\x02\x02\x02\u05A2\u05A4\x05`1\x02" +
		"\u05A3\u05A2\x03\x02\x02\x02\u05A4\u05A7\x03\x02\x02\x02\u05A5\u05A3\x03" +
		"\x02\x02\x02\u05A5\u05A6\x03\x02\x02\x02\u05A6\u05AA\x03\x02\x02\x02\u05A7" +
		"\u05A5\x03\x02\x02\x02\u05A8\u05A9\x07\x14\x02\x02\u05A9\u05AB\x05\x90" +
		"I\x02\u05AA\u05A8\x03\x02\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05AD" +
		"\x03\x02\x02\x02\u05AC\u05AE\x05V,\x02\u05AD\u05AC\x03\x02\x02\x02\u05AD" +
		"\u05AE\x03\x02\x02\x02\u05AE\u05B1\x03\x02\x02\x02\u05AF\u05B0\x07\x1C" +
		"\x02\x02\u05B0\u05B2\x05\x90I\x02\u05B1\u05AF\x03\x02\x02\x02\u05B1\u05B2" +
		"\x03\x02\x02\x02\u05B2\u05B4\x03\x02\x02\x02\u05B3\u05B5\x05\xB6\\\x02" +
		"\u05B4\u05B3\x03\x02\x02\x02\u05B4\u05B5\x03\x02\x02\x02\u05B5\u05B7\x03" +
		"\x02\x02\x02\u05B6\u0563\x03\x02\x02\x02\u05B6\u05A0\x03\x02\x02\x02\u05B7" +
		"O\x03\x02\x02\x02\u05B8\u05B9\x07\x07\x02\x02\u05B9\u05C0\x05R*\x02\u05BA" +
		"\u05BC\x07\x05\x02\x02\u05BB\u05BA\x03\x02\x02\x02\u05BB\u05BC\x03\x02" +
		"\x02\x02\u05BC\u05BD\x03\x02\x02\x02\u05BD\u05BF\x05R*\x02\u05BE\u05BB" +
		"\x03\x02\x02\x02\u05BF\u05C2\x03\x02\x02\x02\u05C0\u05BE\x03\x02\x02\x02" +
		"\u05C0\u05C1\x03\x02\x02\x02\u05C1\u05C3\x03\x02\x02\x02\u05C2\u05C0\x03" +
		"\x02\x02\x02\u05C3\u05C4\x07\b\x02\x02\u05C4Q\x03\x02\x02\x02\u05C5\u05D3" +
		"\x05\xC2b\x02\u05C6\u05C7\x05\xC2b\x02\u05C7\u05C8\x07\x03\x02\x02\u05C8" +
		"\u05CD\x05\x96L\x02\u05C9\u05CA\x07\x05\x02\x02\u05CA\u05CC\x05\x96L\x02" +
		"\u05CB\u05C9\x03\x02\x02\x02\u05CC\u05CF\x03\x02\x02\x02\u05CD\u05CB\x03" +
		"\x02\x02\x02\u05CD\u05CE\x03\x02\x02\x02\u05CE\u05D0\x03\x02\x02\x02\u05CF" +
		"\u05CD\x03\x02\x02\x02\u05D0\u05D1\x07\x04\x02\x02\u05D1\u05D3\x03\x02" +
		"\x02\x02\u05D2\u05C5\x03\x02\x02\x02\u05D2\u05C6\x03\x02\x02\x02\u05D3" +
		"S\x03\x02\x02\x02\u05D4\u05D5\x07\x0E\x02\x02\u05D5\u05DA\x05d3\x02\u05D6" +
		"\u05D7\x07\x05\x02\x02\u05D7\u05D9\x05d3\x02\u05D8\u05D6\x03\x02\x02\x02" +
		"\u05D9\u05DC\x03\x02\x02\x02\u05DA\u05D8\x03\x02\x02\x02\u05DA\u05DB\x03" +
		"\x02\x02\x02\u05DB\u05E0\x03\x02\x02\x02\u05DC\u05DA\x03\x02\x02\x02\u05DD" +
		"\u05DF\x05`1\x02\u05DE\u05DD\x03\x02\x02\x02\u05DF\u05E2\x03\x02\x02\x02" +
		"\u05E0\u05DE\x03\x02\x02\x02\u05E0\u05E1\x03\x02\x02\x02\u05E1\u05E4\x03" +
		"\x02\x02\x02\u05E2\u05E0\x03\x02\x02\x02\u05E3\u05E5\x05Z.\x02\u05E4\u05E3" +
		"\x03\x02\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5U\x03\x02\x02\x02\u05E6" +
		"\u05E7\x07\x15\x02\x02\u05E7\u05E8\x07\x16\x02\x02\u05E8\u05ED\x05\x8E" +
		"H\x02\u05E9\u05EA\x07\x05\x02\x02\u05EA\u05EC\x05\x8EH\x02\u05EB\u05E9" +
		"\x03\x02\x02\x02\u05EC\u05EF\x03\x02\x02\x02\u05ED\u05EB\x03\x02\x02\x02" +
		"\u05ED\u05EE\x03\x02\x02\x02\u05EE\u0601\x03\x02\x02\x02\u05EF\u05ED\x03" +
		"\x02\x02\x02\u05F0\u05F1\x07O\x02\x02\u05F1\u0602\x07\x1A\x02\x02\u05F2" +
		"\u05F3\x07O\x02\x02\u05F3\u0602\x07\x19\x02\x02\u05F4\u05F5\x07\x17\x02" +
		"\x02\u05F5\u05F6\x07\x18\x02\x02\u05F6\u05F7\x07\x03\x02\x02\u05F7\u05FC" +
		"\x05X-\x02\u05F8\u05F9\x07\x05\x02\x02\u05F9\u05FB\x05X-\x02\u05FA\u05F8" +
		"\x03\x02\x02\x02\u05FB\u05FE\x03\x02\x02\x02\u05FC\u05FA\x03\x02\x02\x02" +
		"\u05FC\u05FD\x03\x02\x02\x02\u05FD\u05FF\x03\x02\x02\x02\u05FE\u05FC\x03" +
		"\x02\x02\x02\u05FF\u0600\x07\x04\x02\x02\u0600\u0602\x03\x02\x02\x02\u0601" +
		"\u05F0\x03\x02\x02\x02\u0601\u05F2\x03\x02\x02\x02\u0601\u05F4\x03\x02" +
		"\x02\x02\u0601\u0602\x03\x02\x02\x02\u0602\u0613\x03\x02\x02\x02\u0603" +
		"\u0604\x07\x15\x02\x02\u0604\u0605\x07\x16\x02\x02\u0605\u0606\x07\x17" +
		"\x02\x02\u0606\u0607\x07\x18\x02\x02\u0607\u0608\x07\x03\x02\x02\u0608" +
		"\u060D\x05X-\x02\u0609\u060A\x07\x05\x02\x02\u060A\u060C\x05X-\x02\u060B" +
		"\u0609\x03\x02\x02\x02\u060C\u060F\x03\x02\x02\x02\u060D\u060B\x03\x02" +
		"\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E\u0610\x03\x02\x02\x02\u060F" +
		"\u060D\x03\x02\x02\x02\u0610\u0611\x07\x04\x02\x02\u0611\u0613\x03\x02" +
		"\x02\x02\u0612\u05E6\x03\x02\x02\x02\u0612\u0603\x03\x02\x02\x02\u0613" +
		"W\x03\x02\x02\x02\u0614\u061D\x07\x03\x02\x02\u0615\u061A\x05\x8EH\x02" +
		"\u0616\u0617\x07\x05\x02\x02\u0617\u0619\x05\x8EH\x02\u0618\u0616\x03" +
		"\x02\x02\x02\u0619\u061C\x03\x02\x02\x02\u061A\u0618\x03\x02\x02\x02\u061A" +
		"\u061B\x03\x02\x02\x02\u061B\u061E\x03\x02\x02\x02\u061C\u061A\x03\x02" +
		"\x02\x02\u061D\u0615\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E" +
		"\u061F\x03\x02\x02\x02\u061F\u0622\x07\x04\x02\x02\u0620\u0622\x05\x8E" +
		"H\x02\u0621\u0614\x03\x02\x02\x02\u0621\u0620\x03\x02\x02\x02\u0622Y\x03" +
		"\x02\x02\x02\u0623\u0624\x07@\x02\x02\u0624\u0625\x07\x03\x02\x02\u0625" +
		"\u0626\x05\x8CG\x02\u0626\u0627\x07/\x02\x02\u0627\u0628\x05\\/\x02\u0628" +
		"\u0629\x07!\x02\x02\u0629\u062A\x07\x03\x02\x02\u062A\u062F\x05^0\x02" +
		"\u062B\u062C\x07\x05\x02\x02\u062C\u062E\x05^0\x02\u062D\u062B\x03\x02" +
		"\x02\x02\u062E\u0631\x03\x02\x02\x02\u062F\u062D\x03\x02\x02\x02\u062F" +
		"\u0630\x03\x02\x02\x02\u0630\u0632\x03\x02\x02\x02\u0631\u062F\x03\x02" +
		"\x02\x02\u0632\u0633\x07\x04\x02\x02\u0633\u0634\x07\x04\x02\x02\u0634" +
		"[\x03\x02\x02\x02\u0635\u0642\x05\xC2b\x02\u0636\u0637\x07\x03\x02\x02" +
		"\u0637\u063C\x05\xC2b\x02\u0638\u0639\x07\x05\x02\x02\u0639\u063B\x05" +
		"\xC2b\x02\u063A\u0638\x03\x02\x02\x02\u063B\u063E\x03\x02\x02\x02\u063C" +
		"\u063A\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02\u063D\u063F\x03\x02" +
		"\x02\x02\u063E\u063C\x03\x02\x02\x02\u063F\u0640\x07\x04\x02\x02\u0640" +
		"\u0642\x03\x02\x02\x02\u0641\u0635\x03\x02\x02\x02\u0641\u0636\x03\x02" +
		"\x02\x02\u0642]\x03\x02\x02\x02\u0643\u0648\x05\x8EH\x02\u0644\u0646\x07" +
		"\x10\x02\x02\u0645\u0644\x03\x02\x02\x02\u0645\u0646\x03\x02\x02\x02\u0646" +
		"\u0647\x03\x02\x02\x02\u0647\u0649\x05\xC2b\x02\u0648\u0645\x03\x02\x02" +
		"\x02\u0648\u0649\x03\x02\x02\x02\u0649_\x03\x02\x02\x02\u064A\u064B\x07" +
		"A\x02\x02\u064B\u064D\x07T\x02\x02\u064C\u064E\x078\x02\x02\u064D\u064C" +
		"\x03\x02\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02" +
		"\u064F\u0650\x05\xC0a\x02\u0650\u0659\x07\x03\x02\x02\u0651\u0656\x05" +
		"\x8EH\x02\u0652\u0653\x07\x05\x02\x02\u0653\u0655\x05\x8EH\x02\u0654\u0652" +
		"\x03\x02\x02\x02\u0655\u0658\x03\x02\x02\x02\u0656\u0654\x03\x02\x02\x02" +
		"\u0656\u0657\x03\x02\x02\x02\u0657\u065A\x03\x02\x02\x02\u0658\u0656\x03" +
		"\x02\x02\x02\u0659\u0651\x03\x02\x02\x02\u0659\u065A\x03\x02\x02\x02\u065A" +
		"\u065B\x03\x02\x02\x02\u065B\u065C\x07\x04\x02\x02\u065C\u0668\x05\xC2" +
		"b\x02\u065D\u065F\x07\x10\x02\x02\u065E\u065D\x03\x02\x02\x02\u065E\u065F" +
		"\x03\x02\x02\x02\u065F\u0660\x03\x02\x02\x02\u0660\u0665\x05\xC2b\x02" +
		"\u0661\u0662\x07\x05\x02\x02\u0662\u0664\x05\xC2b\x02\u0663\u0661\x03" +
		"\x02\x02\x02\u0664\u0667\x03\x02\x02\x02\u0665\u0663\x03\x02\x02\x02\u0665" +
		"\u0666\x03\x02\x02\x02\u0666\u0669\x03\x02\x02\x02\u0667\u0665\x03\x02" +
		"\x02\x02\u0668\u065E\x03\x02\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669" +
		"a\x03\x02\x02\x02\u066A\u066B\t\r\x02\x02\u066Bc\x03\x02\x02\x02\u066C" +
		"\u0670\x05|?\x02\u066D\u066F\x05f4\x02\u066E\u066D\x03\x02\x02\x02\u066F" +
		"\u0672\x03\x02\x02\x02\u0670\u066E\x03\x02\x02\x02\u0670\u0671\x03\x02" +
		"\x02\x02\u0671e\x03\x02\x02\x02\u0672\u0670\x03\x02\x02\x02\u0673\u0674" +
		"\x05h5\x02\u0674\u0675\x076\x02\x02\u0675\u0677\x05|?\x02\u0676\u0678" +
		"\x05j6\x02\u0677\u0676\x03\x02\x02\x02\u0677\u0678\x03\x02\x02\x02\u0678" +
		"\u067F\x03\x02\x02\x02\u0679\u067A\x07>\x02\x02\u067A\u067B\x05h5\x02" +
		"\u067B\u067C\x076\x02\x02\u067C\u067D\x05|?\x02\u067D\u067F\x03\x02\x02" +
		"\x02\u067E\u0673\x03\x02\x02\x02\u067E\u0679\x03\x02\x02\x02\u067Fg\x03" +
		"\x02\x02\x02\u0680\u0682\x079\x02\x02\u0681\u0680\x03\x02\x02\x02\u0681" +
		"\u0682\x03\x02\x02\x02\u0682\u0697\x03\x02\x02\x02\u0683\u0697\x077\x02" +
		"\x02\u0684\u0686\x07:\x02\x02\u0685\u0687\x078\x02\x02\u0686\u0685\x03" +
		"\x02\x02\x02\u0686\u0687\x03\x02\x02\x02\u0687\u0697\x03\x02\x02\x02\u0688" +
		"\u0689\x07:\x02\x02\u0689\u0697\x07;\x02\x02\u068A\u068C\x07<\x02\x02" +
		"\u068B\u068D\x078\x02\x02\u068C\u068B\x03\x02\x02\x02\u068C\u068D\x03" +
		"\x02\x02\x02\u068D\u0697\x03\x02\x02\x02\u068E\u0690\x07=\x02\x02\u068F" +
		"\u0691\x078\x02\x02\u0690\u068F\x03\x02\x02\x02\u0690\u0691\x03\x02\x02" +
		"\x02\u0691\u0697\x03\x02\x02\x02\u0692\u0694\x07:\x02\x02\u0693\u0692" +
		"\x03\x02\x02\x02\u0693\u0694\x03\x02\x02\x02\u0694\u0695\x03\x02\x02\x02" +
		"\u0695\u0697\x07\xEF\x02\x02\u0696\u0681\x03\x02\x02\x02\u0696\u0683\x03" +
		"\x02\x02\x02\u0696\u0684\x03\x02\x02\x02\u0696\u0688\x03\x02\x02\x02\u0696" +
		"\u068A\x03\x02\x02\x02\u0696\u068E\x03\x02\x02\x02\u0696\u0693\x03\x02" +
		"\x02\x02\u0697i\x03\x02\x02\x02\u0698\u0699\x07?\x02\x02\u0699\u069D\x05" +
		"\x90I\x02\u069A\u069B\x07\xA1\x02\x02\u069B\u069D\x05p9\x02\u069C\u0698" +
		"\x03\x02\x02\x02\u069C\u069A\x03\x02\x02\x02\u069Dk\x03\x02\x02\x02\u069E" +
		"\u069F\x07m\x02\x02\u069F\u06A1\x07\x03\x02\x02\u06A0\u06A2\x05n8\x02" +
		"\u06A1\u06A0\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2\u06A3\x03" +
		"\x02\x02\x02\u06A3\u06A4\x07\x04\x02\x02\u06A4m\x03\x02\x02\x02\u06A5" +
		"\u06A7\x07\x8D\x02\x02\u06A6\u06A5\x03\x02\x02\x02\u06A6\u06A7\x03\x02" +
		"\x02\x02\u06A7\u06A8\x03\x02\x02\x02\u06A8\u06A9\t\x0E\x02\x02\u06A9\u06BE" +
		"\x07\x97\x02\x02\u06AA\u06AB\x05\x8EH\x02\u06AB\u06AC\x07F\x02\x02\u06AC" +
		"\u06BE\x03\x02\x02\x02\u06AD\u06AE\x07\x98\x02\x02\u06AE\u06AF\x07\xF6" +
		"\x02\x02\u06AF\u06B0\x07\x99\x02\x02\u06B0\u06B1\x07\x9A\x02\x02\u06B1" +
		"\u06BA\x07\xF6\x02\x02\u06B2\u06B8\x07?\x02\x02\u06B3\u06B9\x05\xC2b\x02" +
		"\u06B4\u06B5\x05\xC0a\x02\u06B5\u06B6\x07\x03\x02\x02\u06B6\u06B7\x07" +
		"\x04\x02\x02\u06B7\u06B9\x03\x02\x02\x02\u06B8\u06B3\x03\x02\x02\x02\u06B8" +
		"\u06B4\x03\x02\x02\x02\u06B9\u06BB\x03\x02\x02\x02\u06BA\u06B2\x03\x02" +
		"\x02\x02\u06BA\u06BB\x03\x02\x02\x02\u06BB\u06BE\x03\x02\x02\x02\u06BC" +
		"\u06BE\x05\x8EH\x02\u06BD\u06A6\x03\x02\x02\x02\u06BD\u06AA\x03\x02\x02" +
		"\x02\u06BD\u06AD\x03\x02\x02\x02\u06BD\u06BC\x03\x02\x02\x02\u06BEo\x03" +
		"\x02\x02\x02\u06BF\u06C0\x07\x03\x02\x02\u06C0\u06C1\x05r:\x02\u06C1\u06C2" +
		"\x07\x04\x02\x02\u06C2q\x03\x02\x02\x02\u06C3\u06C8\x05\xC2b\x02\u06C4" +
		"\u06C5\x07\x05\x02\x02\u06C5\u06C7\x05\xC2b\x02\u06C6\u06C4\x03\x02\x02" +
		"\x02\u06C7\u06CA\x03\x02\x02\x02\u06C8\u06C6\x03\x02\x02\x02\u06C8\u06C9" +
		"\x03\x02\x02\x02\u06C9s\x03\x02\x02\x02\u06CA\u06C8\x03\x02\x02\x02\u06CB" +
		"\u06CC\x07\x03\x02\x02\u06CC\u06D1\x05v<\x02\u06CD\u06CE\x07\x05\x02\x02" +
		"\u06CE\u06D0\x05v<\x02\u06CF\u06CD\x03\x02\x02\x02\u06D0\u06D3\x03\x02" +
		"\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2" +
		"\u06D4\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D4\u06D5\x07\x04" +
		"\x02\x02\u06D5u\x03\x02\x02\x02\u06D6\u06D8\x05\xC2b\x02\u06D7\u06D9\t" +
		"\v\x02\x02\u06D8\u06D7\x03\x02\x02\x02\u06D8\u06D9\x03\x02\x02\x02\u06D9" +
		"w\x03\x02\x02\x02\u06DA\u06DB\x07\x03\x02\x02\u06DB\u06E0\x05z>\x02\u06DC" +
		"\u06DD\x07\x05\x02\x02\u06DD\u06DF\x05z>\x02\u06DE\u06DC\x03\x02\x02\x02" +
		"\u06DF\u06E2\x03\x02\x02\x02\u06E0\u06DE\x03\x02\x02\x02\u06E0\u06E1\x03" +
		"\x02\x02\x02\u06E1\u06E3\x03\x02\x02\x02\u06E2\u06E0\x03\x02\x02\x02\u06E3" +
		"\u06E4\x07\x04\x02\x02\u06E4y\x03\x02\x02\x02\u06E5\u06E8\x05\xC2b\x02" +
		"\u06E6\u06E7\x07t\x02\x02\u06E7\u06E9\x07\xF2\x02\x02\u06E8\u06E6\x03" +
		"\x02\x02\x02\u06E8\u06E9\x03\x02\x02\x02\u06E9{\x03\x02\x02\x02\u06EA" +
		"\u06EC\x05\x86D\x02\u06EB\u06ED\x05l7\x02\u06EC\u06EB\x03\x02\x02\x02" +
		"\u06EC\u06ED\x03\x02\x02\x02\u06ED\u06EE\x03\x02\x02\x02\u06EE\u06EF\x05" +
		"\x82B\x02\u06EF\u0703\x03\x02\x02\x02\u06F0\u06F1\x07\x03\x02\x02\u06F1" +
		"\u06F2\x05B\"\x02\u06F2\u06F4\x07\x04\x02\x02\u06F3\u06F5\x05l7\x02\u06F4" +
		"\u06F3\x03\x02\x02\x02\u06F4\u06F5\x03\x02\x02\x02\u06F5\u06F6\x03\x02" +
		"\x02\x02\u06F6\u06F7\x05\x82B\x02\u06F7\u0703\x03\x02\x02\x02\u06F8\u06F9" +
		"\x07\x03\x02\x02\u06F9\u06FA\x05d3\x02\u06FA\u06FC\x07\x04\x02\x02\u06FB" +
		"\u06FD\x05l7\x02\u06FC\u06FB\x03\x02\x02\x02\u06FC\u06FD\x03\x02\x02\x02" +
		"\u06FD\u06FE\x03\x02\x02\x02\u06FE\u06FF\x05\x82B\x02\u06FF\u0703\x03" +
		"\x02\x02\x02\u0700\u0703\x05~@\x02\u0701\u0703\x05\x80A\x02\u0702\u06EA" +
		"\x03\x02\x02\x02\u0702\u06F0\x03\x02\x02\x02\u0702\u06F8\x03\x02\x02\x02" +
		"\u0702\u0700\x03\x02\x02\x02\u0702\u0701\x03\x02\x02\x02\u0703}\x03\x02" +
		"\x02\x02\u0704\u0705\x07P\x02\x02\u0705\u070A\x05\x8EH\x02\u0706\u0707" +
		"\x07\x05\x02\x02\u0707\u0709\x05\x8EH\x02\u0708\u0706\x03\x02\x02\x02" +
		"\u0709\u070C\x03\x02\x02\x02\u070A\u0708\x03\x02\x02\x02\u070A\u070B\x03" +
		"\x02\x02\x02\u070B\u070D\x03\x02\x02\x02\u070C\u070A\x03\x02\x02\x02\u070D" +
		"\u070E\x05\x82B\x02\u070E\x7F\x03\x02\x02\x02\u070F\u0710\x05\xC2b\x02" +
		"\u0710\u0719\x07\x03\x02\x02\u0711\u0716\x05\x8EH\x02\u0712\u0713\x07" +
		"\x05\x02\x02\u0713\u0715\x05\x8EH\x02\u0714\u0712\x03\x02\x02\x02\u0715" +
		"\u0718\x03\x02\x02\x02\u0716\u0714\x03\x02\x02\x02\u0716\u0717\x03\x02" +
		"\x02\x02\u0717\u071A\x03\x02\x02\x02\u0718\u0716\x03\x02\x02\x02\u0719" +
		"\u0711\x03\x02\x02\x02\u0719\u071A\x03\x02\x02\x02\u071A\u071B\x03\x02" +
		"\x02\x02\u071B\u071C\x07\x04\x02\x02\u071C\u071D\x05\x82B\x02\u071D\x81" +
		"\x03\x02\x02\x02\u071E\u0720\x07\x10\x02\x02\u071F\u071E\x03\x02\x02\x02" +
		"\u071F\u0720\x03\x02\x02\x02\u0720\u0721\x03\x02\x02\x02\u0721\u0723\x05" +
		"\xC4c\x02\u0722\u0724\x05p9\x02\u0723\u0722\x03\x02\x02\x02\u0723\u0724" +
		"\x03\x02\x02\x02\u0724\u0726\x03\x02\x02\x02\u0725\u071F\x03\x02\x02\x02" +
		"\u0725\u0726\x03\x02\x02\x02\u0726\x83\x03\x02\x02\x02\u0727\u0728\x07" +
		"N\x02\x02\u0728\u0729\x07[\x02\x02\u0729\u072A\x07\xA2\x02\x02\u072A\u072E" +
		"\x07\xF2\x02\x02\u072B\u072C\x07O\x02\x02\u072C\u072D\x07\xA3\x02\x02" +
		"\u072D\u072F\x05.\x18\x02\u072E\u072B\x03\x02\x02\x02\u072E\u072F\x03" +
		"\x02\x02\x02\u072F\u0759\x03\x02\x02\x02\u0730\u0731\x07N\x02\x02\u0731" +
		"\u0732\x07[\x02\x02\u0732\u073C\x07\xA6\x02\x02\u0733\u0734\x07\xA7\x02" +
		"\x02\u0734\u0735\x07\xA8\x02\x02\u0735\u0736\x07\x16\x02\x02\u0736\u073A" +
		"\x07\xF2\x02\x02\u0737\u0738\x07\xAC\x02\x02\u0738\u0739\x07\x16\x02\x02" +
		"\u0739\u073B\x07\xF2\x02\x02\u073A\u0737\x03\x02\x02\x02\u073A\u073B\x03" +
		"\x02\x02\x02\u073B\u073D\x03\x02\x02\x02\u073C\u0733\x03\x02\x02\x02\u073C" +
		"\u073D\x03\x02\x02\x02\u073D\u0743\x03\x02\x02\x02\u073E\u073F\x07\xA9" +
		"\x02\x02\u073F\u0740\x07\xAA\x02\x02\u0740\u0741\x07\xA8\x02\x02\u0741" +
		"\u0742\x07\x16\x02\x02\u0742\u0744\x07\xF2\x02\x02\u0743\u073E\x03\x02" +
		"\x02\x02\u0743\u0744\x03\x02\x02\x02\u0744\u074A\x03\x02\x02\x02\u0745" +
		"\u0746\x07r\x02\x02\u0746\u0747\x07\xAB\x02\x02\u0747\u0748\x07\xA8\x02" +
		"\x02\u0748\u0749\x07\x16\x02\x02\u0749\u074B\x07\xF2\x02\x02\u074A\u0745" +
		"\x03\x02\x02\x02\u074A\u074B\x03\x02\x02\x02\u074B\u0750\x03\x02\x02\x02" +
		"\u074C\u074D\x07\xAD\x02\x02\u074D\u074E\x07\xA8\x02\x02\u074E\u074F\x07" +
		"\x16\x02\x02\u074F\u0751\x07\xF2\x02\x02\u0750\u074C\x03\x02\x02\x02\u0750" +
		"\u0751\x03\x02\x02\x02\u0751\u0756\x03\x02\x02\x02\u0752\u0753\x07)\x02" +
		"\x02\u0753\u0754\x07\xDB\x02\x02\u0754\u0755\x07\x10\x02\x02\u0755\u0757" +
		"\x07\xF2\x02\x02\u0756\u0752\x03\x02\x02\x02\u0756\u0757\x03\x02\x02\x02" +
		"\u0757\u0759\x03\x02\x02\x02\u0758\u0727\x03\x02\x02\x02\u0758\u0730\x03" +
		"\x02\x02\x02\u0759\x85\x03\x02\x02\x02\u075A\u075B\x05\xC2b\x02\u075B" +
		"\u075C\x07\x06\x02\x02\u075C\u075E\x03\x02\x02\x02\u075D\u075A\x03\x02" +
		"\x02\x02\u075D\u075E\x03\x02\x02\x02\u075E\u075F\x03\x02\x02\x02\u075F" +
		"\u0760\x05\xC2b\x02\u0760\x87\x03\x02\x02\x02\u0761\u0762\x05\xC2b\x02" +
		"\u0762\u0763\x07\x06\x02\x02\u0763\u0765\x03\x02\x02\x02\u0764\u0761\x03" +
		"\x02\x02\x02\u0764\u0765\x03\x02\x02\x02\u0765\u0766\x03\x02\x02\x02\u0766" +
		"\u0767\x05\xC2b\x02\u0767\x89\x03\x02\x02\x02\u0768\u0770\x05\x8EH\x02" +
		"\u0769\u076B\x07\x10\x02\x02\u076A\u0769\x03\x02\x02\x02\u076A\u076B\x03" +
		"\x02\x02\x02\u076B\u076E\x03\x02\x02\x02\u076C\u076F\x05\xC2b\x02\u076D" +
		"\u076F\x05p9\x02\u076E\u076C\x03\x02\x02\x02\u076E\u076D\x03\x02\x02\x02" +
		"\u076F\u0771\x03\x02\x02\x02\u0770\u076A\x03\x02\x02\x02\u0770\u0771\x03" +
		"\x02\x02\x02\u0771\x8B\x03\x02\x02\x02\u0772\u0777\x05\x8AF\x02\u0773" +
		"\u0774\x07\x05\x02\x02\u0774\u0776\x05\x8AF\x02\u0775\u0773\x03\x02\x02" +
		"\x02\u0776\u0779\x03\x02\x02\x02\u0777\u0775\x03\x02\x02\x02\u0777\u0778" +
		"\x03\x02\x02\x02\u0778\x8D\x03\x02\x02\x02\u0779\u0777\x03\x02\x02\x02" +
		"\u077A\u077B\x05\x90I\x02\u077B\x8F\x03\x02\x02\x02\u077C\u077D\bI\x01" +
		"\x02\u077D\u077E\x07\"\x02\x02\u077E\u0789\x05\x90I\x07\u077F\u0780\x07" +
		"$\x02\x02\u0780\u0781\x07\x03\x02\x02\u0781\u0782\x05\x1A\x0E\x02\u0782" +
		"\u0783\x07\x04\x02\x02\u0783\u0789\x03\x02\x02\x02\u0784\u0786\x05\x94" +
		"K\x02\u0785\u0787\x05\x92J\x02\u0786\u0785\x03\x02\x02\x02\u0786\u0787" +
		"\x03\x02\x02\x02\u0787\u0789\x03\x02\x02\x02\u0788\u077C\x03\x02\x02\x02" +
		"\u0788\u077F\x03\x02\x02\x02\u0788\u0784\x03\x02\x02\x02\u0789\u0792\x03" +
		"\x02\x02\x02\u078A\u078B\f\x04\x02\x02\u078B\u078C\x07 \x02\x02\u078C" +
		"\u0791\x05\x90I\x05\u078D\u078E\f\x03\x02\x02\u078E\u078F\x07\x1F\x02" +
		"\x02\u078F\u0791\x05\x90I\x04\u0790\u078A\x03\x02\x02\x02\u0790\u078D" +
		"\x03\x02\x02\x02\u0791\u0794\x03\x02\x02\x02\u0792\u0790\x03\x02\x02\x02" +
		"\u0792\u0793\x03\x02\x02\x02\u0793\x91\x03\x02\x02\x02\u0794\u0792\x03" +
		"\x02\x02\x02\u0795\u0797\x07\"\x02\x02\u0796\u0795\x03\x02\x02\x02\u0796" +
		"\u0797\x03\x02\x02\x02\u0797\u0798\x03\x02\x02\x02\u0798\u0799\x07%\x02" +
		"\x02\u0799\u079A\x05\x94K\x02\u079A\u079B\x07 \x02\x02\u079B\u079C\x05" +
		"\x94K\x02\u079C\u07C6\x03\x02\x02\x02\u079D\u079F\x07\"\x02\x02\u079E" +
		"\u079D\x03\x02\x02\x02\u079E\u079F\x03\x02\x02\x02\u079F\u07A0\x03\x02" +
		"\x02\x02\u07A0\u07A1\x07!\x02\x02\u07A1\u07A2\x07\x03\x02\x02\u07A2\u07A7" +
		"\x05\x8EH\x02\u07A3\u07A4\x07\x05\x02\x02\u07A4\u07A6\x05\x8EH\x02\u07A5" +
		"\u07A3\x03\x02\x02\x02\u07A6\u07A9\x03\x02\x02\x02\u07A7\u07A5\x03\x02" +
		"\x02\x02\u07A7\u07A8\x03\x02\x02\x02\u07A8\u07AA\x03\x02\x02\x02\u07A9" +
		"\u07A7\x03\x02\x02\x02\u07AA\u07AB\x07\x04\x02\x02\u07AB\u07C6\x03\x02" +
		"\x02\x02\u07AC\u07AE\x07\"\x02\x02\u07AD\u07AC\x03\x02\x02\x02\u07AD\u07AE" +
		"\x03\x02\x02\x02\u07AE\u07AF\x03\x02\x02\x02\u07AF\u07B0\x07!\x02\x02" +
		"\u07B0\u07B1\x07\x03\x02\x02\u07B1\u07B2\x05\x1A\x0E\x02\u07B2\u07B3\x07" +
		"\x04\x02\x02\u07B3\u07C6\x03\x02\x02\x02\u07B4\u07B6\x07\"\x02\x02\u07B5" +
		"\u07B4\x03\x02\x02\x02\u07B5\u07B6\x03\x02\x02\x02\u07B6\u07B7\x03\x02" +
		"\x02\x02\u07B7\u07B8\t\x0F\x02\x02\u07B8\u07C6\x05\x94K\x02\u07B9\u07BB" +
		"\x07(\x02\x02\u07BA\u07BC\x07\"\x02\x02\u07BB\u07BA\x03\x02\x02\x02\u07BB" +
		"\u07BC\x03\x02\x02\x02\u07BC\u07BD\x03\x02\x02\x02\u07BD\u07C6\x07)\x02" +
		"\x02\u07BE\u07C0\x07(\x02\x02\u07BF\u07C1\x07\"\x02\x02\u07C0\u07BF\x03" +
		"\x02\x02\x02\u07C0\u07C1\x03\x02\x02\x02\u07C1\u07C2\x03\x02\x02\x02\u07C2" +
		"\u07C3\x07\x13\x02\x02\u07C3\u07C4\x07\x0E\x02\x02\u07C4\u07C6\x05\x94" +
		"K\x02\u07C5\u0796\x03\x02\x02\x02\u07C5\u079E\x03\x02\x02\x02\u07C5\u07AD" +
		"\x03\x02\x02\x02\u07C5\u07B5\x03\x02\x02\x02\u07C5\u07B9\x03\x02\x02\x02" +
		"\u07C5\u07BE\x03\x02\x02\x02\u07C6\x93\x03\x02\x02\x02\u07C7\u07C8\bK" +
		"\x01\x02\u07C8\u07CC\x05\x96L\x02\u07C9\u07CA\t\x10\x02\x02\u07CA\u07CC" +
		"\x05\x94K\t\u07CB\u07C7\x03\x02\x02\x02\u07CB\u07C9\x03\x02\x02\x02\u07CC" +
		"\u07E2\x03\x02\x02\x02\u07CD\u07CE\f\b\x02\x02\u07CE\u07CF\t\x11\x02\x02" +
		"\u07CF\u07E1\x05\x94K\t\u07D0\u07D1\f\x07\x02\x02\u07D1\u07D2\t\x12\x02" +
		"\x02\u07D2\u07E1\x05\x94K\b\u07D3\u07D4\f\x06\x02\x02\u07D4\u07D5\x07" +
		"\x93\x02\x02\u07D5\u07E1\x05\x94K\x07\u07D6\u07D7\f\x05\x02\x02\u07D7" +
		"\u07D8\x07\x96\x02\x02\u07D8\u07E1\x05\x94K\x06\u07D9\u07DA\f\x04\x02" +
		"\x02\u07DA\u07DB\x07\x94\x02\x02\u07DB\u07E1\x05\x94K\x05\u07DC\u07DD" +
		"\f\x03\x02\x02\u07DD\u07DE\x05\x9AN\x02\u07DE\u07DF\x05\x94K\x04\u07DF" +
		"\u07E1\x03\x02\x02\x02\u07E0\u07CD\x03\x02\x02\x02\u07E0\u07D0\x03\x02" +
		"\x02\x02\u07E0\u07D3\x03\x02\x02\x02\u07E0\u07D6\x03\x02\x02\x02\u07E0" +
		"\u07D9\x03\x02\x02\x02\u07E0\u07DC\x03\x02\x02\x02\u07E1\u07E4\x03\x02" +
		"\x02\x02\u07E2\u07E0\x03\x02\x02\x02\u07E2\u07E3\x03\x02\x02\x02\u07E3" +
		"\x95\x03\x02\x02\x02\u07E4\u07E2\x03\x02\x02\x02\u07E5\u07E6\bL\x01\x02" +
		"\u07E6\u07E8\x071\x02\x02\u07E7\u07E9\x05\xB4[\x02\u07E8\u07E7\x03\x02" +
		"\x02\x02\u07E9\u07EA\x03\x02\x02\x02\u07EA\u07E8\x03\x02\x02\x02\u07EA" +
		"\u07EB\x03\x02\x02\x02\u07EB\u07EE\x03\x02\x02\x02\u07EC\u07ED\x074\x02" +
		"\x02\u07ED\u07EF\x05\x8EH\x02\u07EE\u07EC\x03\x02\x02\x02\u07EE\u07EF" +
		"\x03\x02\x02\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07F1\x075\x02\x02" +
		"\u07F1\u0877\x03\x02\x02\x02\u07F2\u07F3\x071\x02\x02\u07F3\u07F5\x05" +
		"\x8EH\x02\u07F4\u07F6\x05\xB4[\x02\u07F5\u07F4\x03\x02\x02\x02\u07F6\u07F7" +
		"\x03\x02\x02\x02\u07F7\u07F5\x03\x02\x02\x02\u07F7\u07F8\x03\x02\x02\x02" +
		"\u07F8\u07FB\x03\x02\x02\x02\u07F9\u07FA\x074\x02\x02\u07FA\u07FC\x05" +
		"\x8EH\x02\u07FB\u07F9\x03\x02\x02\x02\u07FB\u07FC\x03\x02\x02\x02\u07FC" +
		"\u07FD\x03\x02\x02\x02\u07FD\u07FE\x075\x02\x02\u07FE\u0877\x03\x02\x02" +
		"\x02\u07FF\u0800\x07_\x02\x02\u0800\u0801\x07\x03\x02\x02\u0801\u0802" +
		"\x05\x8EH\x02\u0802\u0803\x07\x10\x02\x02\u0803\u0804\x05\xAAV\x02\u0804" +
		"\u0805\x07\x04\x02\x02\u0805\u0877\x03\x02\x02\x02\u0806\u0807\x07s\x02" +
		"\x02\u0807\u0810\x07\x03\x02\x02\u0808\u080D\x05\x8AF\x02\u0809\u080A" +
		"\x07\x05\x02\x02\u080A\u080C\x05\x8AF\x02\u080B\u0809\x03\x02\x02\x02" +
		"\u080C\u080F\x03\x02\x02\x02\u080D\u080B\x03\x02\x02\x02\u080D\u080E\x03" +
		"\x02\x02\x02\u080E\u0811\x03\x02\x02\x02\u080F\u080D\x03\x02\x02\x02\u0810" +
		"\u0808\x03\x02\x02\x02\u0810\u0811\x03\x02\x02\x02\u0811\u0812\x03\x02" +
		"\x02\x02\u0812\u0877\x07\x04\x02\x02\u0813\u0814\x07K\x02\x02\u0814\u0815" +
		"\x07\x03\x02\x02\u0815\u0818\x05\x8EH\x02\u0816\u0817\x07}\x02\x02\u0817" +
		"\u0819\x07,\x02\x02\u0818\u0816\x03\x02\x02\x02\u0818\u0819\x03\x02\x02" +
		"\x02\u0819\u081A\x03\x02\x02\x02\u081A\u081B\x07\x04\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\u081B\u0877\x03\x02\x02\x02\u081C\u081D\x07M\x02\x02\u081D\u081E" +
		"\x07\x03\x02\x02\u081E\u0821\x05\x8EH\x02\u081F\u0820\x07}\x02\x02\u0820" +
		"\u0822\x07,\x02\x02\u0821\u081F\x03\x02\x02\x02\u0821\u0822\x03\x02\x02" +
		"\x02\u0822\u0823\x03\x02\x02\x02\u0823\u0824\x07\x04\x02\x02\u0824\u0877" +
		"\x03\x02\x02\x02\u0825\u0826\x07\x82\x02\x02\u0826\u0827\x07\x03\x02\x02" +
		"\u0827\u0828\x05\x94K\x02\u0828\u0829\x07!\x02\x02\u0829\u082A\x05\x94" +
		"K\x02\u082A\u082B\x07\x04\x02\x02\u082B\u0877\x03\x02\x02\x02\u082C\u0877" +
		"\x05\x98M\x02\u082D\u0877\x07\x8E\x02\x02\u082E\u082F\x05\xC0a\x02\u082F" +
		"\u0830\x07\x06\x02\x02\u0830\u0831\x07\x8E\x02\x02\u0831\u0877\x03\x02" +
		"\x02\x02\u0832\u0833\x07\x03\x02\x02\u0833\u0836\x05\x8AF\x02\u0834\u0835" +
		"\x07\x05\x02\x02\u0835\u0837\x05\x8AF\x02\u0836\u0834\x03\x02\x02\x02" +
		"\u0837\u0838\x03\x02\x02\x02\u0838\u0836\x03\x02\x02\x02\u0838\u0839\x03" +
		"\x02\x02\x02\u0839\u083A\x03\x02\x02\x02\u083A\u083B\x07\x04\x02\x02\u083B" +
		"\u0877\x03\x02\x02\x02\u083C\u083D\x07\x03\x02\x02\u083D\u083E\x05\x1A" +
		"\x0E\x02\u083E\u083F\x07\x04\x02\x02\u083F\u0877\x03\x02\x02\x02\u0840" +
		"\u0841\x05\xC0a\x02\u0841\u084D\x07\x03\x02\x02\u0842\u0844\x05b2\x02" +
		"\u0843\u0842\x03\x02\x02\x02\u0843\u0844\x03\x02\x02\x02\u0844\u0845\x03" +
		"\x02\x02\x02\u0845\u084A\x05\x8EH\x02\u0846\u0847\x07\x05\x02\x02\u0847" +
		"\u0849\x05\x8EH\x02\u0848\u0846\x03\x02\x02\x02\u0849\u084C\x03\x02\x02" +
		"\x02\u084A\u0848\x03\x02\x02\x02\u084A\u084B\x03\x02\x02\x02\u084B\u084E" +
		"\x03\x02\x02\x02\u084C\u084A\x03\x02\x02\x02\u084D\u0843\x03\x02\x02\x02" +
		"\u084D\u084E\x03\x02\x02\x02\u084E\u084F\x03\x02\x02\x02\u084F\u0852\x07" +
		"\x04\x02\x02\u0850\u0851\x07C\x02\x02\u0851\u0853\x05\xBA^\x02\u0852\u0850" +
		"\x03\x02\x02\x02\u0852\u0853\x03\x02\x02\x02\u0853\u0877\x03\x02\x02\x02" +
		"\u0854\u0855\x05\xC0a\x02\u0855\u0856\x07\x03\x02\x02\u0856\u0857\t\x13" +
		"\x02\x02\u0857\u0858\x05\x8EH\x02\u0858\u0859\x07\x0E\x02\x02\u0859\u085A" +
		"\x05\x8EH\x02\u085A\u085B\x07\x04\x02\x02\u085B\u0877\x03\x02\x02\x02" +
		"\u085C\u085D\x07\xFA\x02\x02\u085D\u085E\x07\t\x02\x02\u085E\u0877\x05" +
		"\x8EH\x02\u085F\u0860\x07\x03\x02\x02\u0860\u0863\x07\xFA\x02\x02\u0861" +
		"\u0862\x07\x05\x02\x02\u0862\u0864\x07\xFA\x02\x02\u0863\u0861\x03\x02" +
		"\x02\x02\u0864\u0865\x03\x02\x02\x02\u0865\u0863\x03\x02\x02\x02\u0865" +
		"\u0866\x03\x02\x02\x02\u0866\u0867\x03\x02\x02\x02\u0867\u0868\x07\x04" +
		"\x02\x02\u0868\u0869\x07\t\x02\x02\u0869\u0877\x05\x8EH\x02\u086A\u0877" +
		"\x05\xC2b\x02\u086B\u086C\x07\x03\x02\x02\u086C\u086D\x05\x8EH\x02\u086D" +
		"\u086E\x07\x04\x02\x02\u086E\u0877\x03\x02\x02\x02\u086F\u0870\x07\x83" +
		"\x02\x02\u0870\u0871\x07\x03\x02\x02\u0871\u0872\x05\xC2b\x02\u0872\u0873" +
		"\x07\x0E\x02\x02\u0873\u0874\x05\x94K\x02\u0874\u0875\x07\x04\x02\x02" +
		"\u0875\u0877\x03\x02\x02\x02\u0876\u07E5\x03\x02\x02\x02\u0876\u07F2\x03" +
		"\x02\x02\x02\u0876\u07FF\x03\x02\x02\x02\u0876\u0806\x03\x02\x02\x02\u0876" +
		"\u0813\x03\x02\x02\x02\u0876\u081C\x03\x02\x02\x02\u0876\u0825\x03\x02" +
		"\x02\x02\u0876\u082C\x03\x02\x02\x02\u0876\u082D\x03\x02\x02\x02\u0876" +
		"\u082E\x03\x02\x02\x02\u0876\u0832\x03\x02\x02\x02\u0876\u083C\x03\x02" +
		"\x02\x02\u0876\u0840\x03\x02\x02\x02\u0876\u0854\x03\x02\x02\x02\u0876" +
		"\u085C\x03\x02\x02\x02\u0876\u085F\x03\x02\x02\x02\u0876\u086A\x03\x02" +
		"\x02\x02\u0876\u086B\x03\x02\x02\x02\u0876\u086F\x03\x02\x02\x02\u0877" +
		"\u0882\x03\x02\x02\x02\u0878\u0879\f\x07\x02\x02\u0879\u087A\x07\n\x02" +
		"\x02\u087A\u087B\x05\x94K\x02\u087B\u087C\x07\v\x02\x02\u087C\u0881\x03" +
		"\x02\x02\x02\u087D\u087E\f\x05\x02\x02\u087E\u087F\x07\x06\x02\x02\u087F" +
		"\u0881\x05\xC2b\x02\u0880\u0878\x03\x02\x02\x02\u0880\u087D\x03\x02\x02" +
		"\x02\u0881\u0884\x03\x02\x02\x02\u0882\u0880\x03\x02\x02\x02\u0882\u0883" +
		"\x03\x02\x02\x02\u0883\x97\x03\x02\x02\x02\u0884\u0882\x03\x02\x02\x02" +
		"\u0885\u0892\x07)\x02\x02\u0886\u0892\x05\xA2R\x02\u0887\u0888\x05\xC2" +
		"b\x02\u0888\u0889\x07\xF2\x02\x02\u0889\u0892\x03\x02\x02\x02\u088A\u0892" +
		"\x05\xC8e\x02\u088B\u0892\x05\xA0Q\x02\u088C\u088E\x07\xF2\x02\x02\u088D" +
		"\u088C\x03\x02\x02\x02\u088E\u088F\x03\x02\x02\x02\u088F\u088D\x03\x02" +
		"\x02\x02\u088F\u0890\x03\x02\x02\x02\u0890\u0892\x03\x02\x02\x02\u0891" +
		"\u0885\x03\x02\x02\x02\u0891\u0886\x03\x02\x02\x02\u0891\u0887\x03\x02" +
		"\x02\x02\u0891\u088A\x03\x02\x02\x02\u0891\u088B\x03\x02\x02\x02\u0891" +
		"\u088D\x03\x02\x02\x02\u0892\x99\x03\x02\x02\x02\u0893\u0894\t\x14\x02" +
		"\x02\u0894\x9B\x03\x02\x02\x02\u0895\u0896\t\x15\x02\x02\u0896\x9D\x03" +
		"\x02\x02\x02\u0897\u0898\t\x16\x02\x02\u0898\x9F\x03\x02\x02\x02\u0899" +
		"\u089A\t\x17\x02\x02\u089A\xA1\x03\x02\x02\x02\u089B\u089F\x070\x02\x02" +
		"\u089C\u089E\x05\xA4S\x02\u089D\u089C\x03\x02\x02\x02\u089E\u08A1\x03" +
		"\x02\x02\x02\u089F\u089D\x03\x02\x02\x02\u089F\u08A0\x03\x02\x02\x02\u08A0" +
		"\xA3\x03\x02\x02\x02\u08A1\u089F\x03\x02\x02\x02\u08A2\u08A3\x05\xA6T" +
		"\x02\u08A3\u08A6\x05\xC2b\x02\u08A4\u08A5\x07l\x02\x02\u08A5\u08A7\x05" +
		"\xC2b\x02\u08A6\u08A4\x03\x02\x02\x02\u08A6\u08A7\x03\x02\x02\x02\u08A7" +
		"\xA5\x03\x02\x02\x02\u08A8\u08AA\t\x18\x02\x02\u08A9\u08A8\x03\x02\x02" +
		"\x02\u08A9\u08AA\x03\x02\x02\x02\u08AA\u08AB\x03\x02\x02\x02\u08AB\u08AE" +
		"\t\x0E\x02\x02\u08AC\u08AE\x07\xF2\x02\x02\u08AD\u08A9\x03\x02\x02\x02" +
		"\u08AD\u08AC\x03\x02\x02\x02\u08AE\xA7\x03\x02\x02\x02\u08AF\u08B3\x07" +
		"K\x02\x02\u08B0\u08B1\x07L\x02\x02\u08B1\u08B3\x05\xC2b\x02\u08B2\u08AF" +
		"\x03\x02\x02\x02\u08B2\u08B0\x03\x02\x02\x02\u08B3\xA9\x03\x02\x02\x02" +
		"\u08B4\u08B5\x07q\x02\x02\u08B5\u08B6\x07\x88\x02\x02\u08B6\u08B7\x05" +
		"\xAAV\x02\u08B7\u08B8\x07\x8A\x02\x02\u08B8\u08D7\x03\x02\x02\x02\u08B9" +
		"\u08BA\x07r\x02\x02\u08BA\u08BB\x07\x88\x02\x02\u08BB\u08BC\x05\xAAV\x02" +
		"\u08BC\u08BD\x07\x05\x02\x02\u08BD\u08BE\x05\xAAV\x02\u08BE\u08BF\x07" +
		"\x8A\x02\x02\u08BF\u08D7\x03\x02\x02\x02\u08C0\u08C7\x07s\x02\x02\u08C1" +
		"\u08C3\x07\x88\x02\x02\u08C2\u08C4\x05\xB0Y\x02\u08C3\u08C2\x03\x02\x02" +
		"\x02\u08C3\u08C4\x03\x02\x02\x02\u08C4\u08C5\x03\x02\x02\x02\u08C5\u08C8" +
		"\x07\x8A\x02\x02\u08C6\u08C8\x07\x86\x02\x02\u08C7\u08C1\x03\x02\x02\x02" +
		"\u08C7\u08C6\x03\x02\x02\x02\u08C8\u08D7\x03\x02\x02\x02\u08C9\u08D4\x05" +
		"\xC2b\x02\u08CA\u08CB\x07\x03\x02\x02\u08CB\u08D0\x07\xF6\x02\x02\u08CC" +
		"\u08CD\x07\x05\x02\x02\u08CD\u08CF\x07\xF6\x02\x02\u08CE\u08CC\x03\x02" +
		"\x02\x02\u08CF\u08D2\x03\x02\x02\x02\u08D0\u08CE\x03\x02\x02\x02\u08D0" +
		"\u08D1\x03\x02\x02\x02\u08D1\u08D3\x03\x02\x02\x02\u08D2\u08D0\x03\x02" +
		"\x02\x02\u08D3\u08D5\x07\x04\x02\x02\u08D4\u08CA\x03\x02\x02\x02\u08D4" +
		"\u08D5\x03\x02\x02\x02\u08D5\u08D7\x03\x02\x02\x02\u08D6\u08B4\x03\x02" +
		"\x02\x02\u08D6\u08B9\x03\x02\x02\x02\u08D6\u08C0\x03\x02\x02\x02\u08D6" +
		"\u08C9\x03\x02\x02\x02\u08D7\xAB\x03\x02\x02\x02\u08D8\u08DD\x05\xAEX" +
		"\x02\u08D9\u08DA\x07\x05\x02\x02\u08DA\u08DC\x05\xAEX\x02\u08DB\u08D9" +
		"\x03\x02\x02\x02\u08DC\u08DF\x03\x02\x02\x02\u08DD\u08DB\x03\x02\x02\x02" +
		"\u08DD\u08DE\x03\x02\x02\x02\u08DE\xAD\x03\x02\x02\x02\u08DF\u08DD\x03" +
		"\x02\x02\x02\u08E0\u08E1\x05\xC2b\x02\u08E1\u08E4\x05\xAAV\x02\u08E2\u08E3" +
		"\x07t\x02\x02\u08E3\u08E5\x07\xF2\x02\x02\u08E4\u08E2\x03\x02\x02\x02" +
		"\u08E4\u08E5\x03\x02\x02\x02\u08E5\xAF\x03\x02\x02\x02\u08E6\u08EB\x05" +
		"\xB2Z\x02\u08E7\u08E8\x07\x05\x02\x02\u08E8\u08EA\x05\xB2Z\x02\u08E9\u08E7" +
		"\x03\x02\x02\x02\u08EA\u08ED\x03\x02\x02\x02\u08EB\u08E9\x03\x02\x02\x02" +
		"\u08EB\u08EC\x03\x02\x02\x02\u08EC\xB1\x03\x02\x02\x02\u08ED\u08EB\x03" +
		"\x02\x02\x02\u08EE\u08EF\x05\xC2b\x02\u08EF\u08F0\x07\f\x02\x02\u08F0" +
		"\u08F3\x05\xAAV\x02\u08F1\u08F2\x07t\x02\x02\u08F2\u08F4\x07\xF2\x02\x02" +
		"\u08F3\u08F1\x03\x02\x02\x02\u08F3\u08F4\x03\x02\x02\x02\u08F4\xB3\x03" +
		"\x02\x02\x02\u08F5\u08F6\x072\x02\x02\u08F6\u08F7\x05\x8EH\x02\u08F7\u08F8" +
		"\x073\x02\x02\u08F8\u08F9\x05\x8EH\x02\u08F9\xB5\x03\x02\x02\x02\u08FA" +
		"\u08FB\x07B\x02\x02\u08FB\u0900\x05\xB8]\x02\u08FC\u08FD\x07\x05\x02\x02" +
		"\u08FD\u08FF\x05\xB8]\x02\u08FE\u08FC\x03\x02\x02\x02\u08FF\u0902\x03" +
		"\x02\x02\x02\u0900\u08FE\x03\x02\x02\x02\u0900\u0901\x03\x02\x02\x02\u0901" +
		"\xB7\x03\x02\x02\x02\u0902\u0900\x03\x02\x02\x02\u0903\u0904\x05\xC2b" +
		"\x02\u0904\u0905\x07\x10\x02\x02\u0905\u0906\x05\xBA^\x02\u0906\xB9\x03" +
		"\x02\x02\x02\u0907\u0932\x05\xC2b\x02\u0908\u092B\x07\x03\x02\x02\u0909" +
		"\u090A\x07\x9C\x02\x02\u090A\u090B\x07\x16\x02\x02\u090B\u0910\x05\x8E" +
		"H\x02\u090C\u090D\x07\x05\x02\x02\u090D\u090F\x05\x8EH\x02\u090E\u090C" +
		"\x03\x02\x02\x02\u090F\u0912\x03\x02\x02\x02\u0910\u090E\x03\x02\x02\x02" +
		"\u0910\u0911\x03\x02\x02\x02\u0911\u092C\x03\x02\x02\x02\u0912\u0910\x03" +
		"\x02\x02\x02\u0913\u0914\t\x19\x02\x02\u0914\u0915\x07\x16\x02\x02\u0915" +
		"\u091A\x05\x8EH\x02\u0916\u0917\x07\x05\x02\x02\u0917\u0919\x05\x8EH\x02" +
		"\u0918\u0916\x03\x02\x02\x02\u0919\u091C\x03\x02\x02\x02\u091A\u0918\x03" +
		"\x02\x02\x02\u091A\u091B\x03\x02\x02\x02\u091B\u091E\x03\x02\x02\x02\u091C" +
		"\u091A\x03\x02\x02\x02\u091D\u0913\x03\x02\x02\x02\u091D\u091E\x03\x02" +
		"\x02\x02\u091E\u0929\x03\x02\x02\x02\u091F\u0920\t\x1A\x02\x02\u0920\u0921" +
		"\x07\x16\x02\x02\u0921\u0926\x05L\'\x02\u0922\u0923\x07\x05\x02\x02\u0923" +
		"\u0925\x05L\'\x02\u0924\u0922\x03\x02\x02\x02\u0925\u0928\x03\x02\x02" +
		"\x02\u0926\u0924\x03\x02\x02\x02\u0926\u0927\x03\x02\x02\x02\u0927\u092A" +
		"\x03\x02\x02\x02\u0928\u0926\x03\x02\x02\x02\u0929\u091F\x03\x02\x02\x02" +
		"\u0929\u092A\x03\x02\x02\x02\u092A\u092C\x03\x02\x02\x02\u092B\u0909\x03" +
		"\x02\x02\x02\u092B\u091D\x03\x02\x02\x02\u092C\u092E\x03\x02\x02\x02\u092D" +
		"\u092F\x05\xBC_\x02\u092E\u092D\x03\x02\x02\x02\u092E\u092F\x03\x02\x02" +
		"\x02\u092F\u0930\x03\x02\x02\x02\u0930\u0932\x07\x04\x02\x02\u0931\u0907" +
		"\x03\x02\x02\x02\u0931\u0908\x03\x02\x02\x02\u0932\xBB\x03\x02\x02\x02" +
		"\u0933\u0934\x07E\x02\x02\u0934\u0944\x05\xBE`\x02\u0935\u0936\x07F\x02" +
		"\x02\u0936\u0944\x05\xBE`\x02\u0937\u0938\x07E\x02\x02\u0938\u0939\x07" +
		"%\x02\x02\u0939\u093A\x05\xBE`\x02\u093A\u093B\x07 \x02\x02\u093B\u093C" +
		"\x05\xBE`\x02\u093C\u0944\x03\x02\x02\x02\u093D\u093E\x07F\x02\x02\u093E" +
		"\u093F\x07%\x02\x02\u093F\u0940\x05\xBE`\x02\u0940\u0941\x07 \x02\x02" +
		"\u0941\u0942\x05\xBE`\x02\u0942\u0944\x03\x02\x02\x02\u0943\u0933\x03" +
		"\x02\x02\x02\u0943\u0935\x03\x02\x02\x02\u0943\u0937\x03\x02\x02\x02\u0943" +
		"\u093D\x03\x02\x02\x02\u0944\xBD\x03\x02\x02\x02\u0945\u0946\x07G\x02" +
		"\x02\u0946\u094D\t\x1B\x02\x02\u0947\u0948\x07J\x02\x02\u0948\u094D\x07" +
		"N\x02\x02\u0949\u094A\x05\x8EH\x02\u094A\u094B\t\x1B\x02\x02\u094B\u094D" +
		"\x03\x02\x02\x02\u094C\u0945\x03\x02\x02\x02\u094C\u0947\x03\x02\x02\x02" +
		"\u094C\u0949\x03\x02\x02\x02\u094D\xBF\x03\x02\x02\x02\u094E\u0953\x05" +
		"\xC2b\x02\u094F\u0950\x07\x06\x02\x02\u0950\u0952\x05\xC2b\x02\u0951\u094F" +
		"\x03\x02\x02\x02\u0952\u0955\x03\x02\x02\x02\u0953\u0951\x03\x02\x02\x02" +
		"\u0953\u0954\x03\x02\x02\x02\u0954\xC1\x03\x02\x02\x02\u0955\u0953\x03" +
		"\x02\x02\x02\u0956\u0966\x05\xC4c\x02\u0957\u0966\x07\xEF\x02\x02\u0958" +
		"\u0966\x07=\x02\x02\u0959\u0966\x079\x02\x02\u095A\u0966\x07:\x02\x02" +
		"\u095B\u0966\x07;\x02\x02\u095C\u0966\x07<\x02\x02\u095D\u0966\x07>\x02" +
		"\x02\u095E\u0966\x076\x02\x02\u095F\u0966\x077\x02\x02\u0960\u0966\x07" +
		"?\x02\x02\u0961\u0966\x07h\x02\x02\u0962\u0966\x07k\x02\x02\u0963\u0966" +
		"\x07i\x02\x02\u0964\u0966\x07j\x02\x02\u0965\u0956\x03\x02\x02\x02\u0965" +
		"\u0957\x03\x02\x02\x02\u0965\u0958\x03\x02\x02\x02\u0965\u0959\x03\x02" +
		"\x02\x02\u0965\u095A\x03\x02\x02\x02\u0965\u095B\x03\x02\x02\x02\u0965" +
		"\u095C\x03\x02\x02\x02\u0965\u095D\x03\x02\x02\x02\u0965\u095E\x03\x02" +
		"\x02\x02\u0965\u095F\x03\x02\x02\x02\u0965\u0960\x03\x02\x02\x02\u0965" +
		"\u0961\x03\x02\x02\x02\u0965\u0962\x03\x02\x02\x02\u0965\u0963\x03\x02" +
		"\x02\x02\u0965\u0964\x03\x02\x02\x02\u0966\xC3\x03\x02\x02\x02\u0967\u096B" +
		"\x07\xFA\x02\x02\u0968\u096B\x05\xC6d\x02\u0969\u096B\x05\xCAf\x02\u096A" +
		"\u0967\x03\x02\x02\x02\u096A\u0968\x03\x02\x02\x02\u096A\u0969\x03\x02" +
		"\x02\x02\u096B\xC5\x03\x02\x02\x02\u096C\u096D\x07\xFB\x02\x02\u096D\xC7" +
		"\x03\x02\x02\x02\u096E\u0970\x07\x8D\x02\x02\u096F\u096E\x03\x02\x02\x02" +
		"\u096F\u0970\x03\x02\x02\x02\u0970\u0971\x03\x02\x02\x02\u0971\u098B\x07" +
		"\xF7\x02\x02\u0972\u0974\x07\x8D\x02\x02\u0973\u0972\x03\x02\x02\x02\u0973" +
		"\u0974\x03\x02\x02\x02\u0974\u0975\x03\x02\x02\x02\u0975\u098B\x07\xF6" +
		"\x02\x02\u0976\u0978\x07\x8D\x02\x02\u0977\u0976\x03\x02\x02\x02\u0977" +
		"\u0978\x03\x02\x02\x02\u0978\u0979\x03\x02\x02\x02\u0979\u098B\x07\xF3" +
		"\x02\x02\u097A\u097C\x07\x8D\x02\x02\u097B\u097A\x03\x02\x02\x02\u097B" +
		"\u097C\x03\x02\x02\x02\u097C\u097D\x03\x02\x02\x02\u097D\u098B\x07\xF4" +
		"\x02\x02\u097E\u0980\x07\x8D\x02\x02\u097F\u097E\x03\x02\x02\x02\u097F" +
		"\u0980\x03\x02\x02\x02\u0980\u0981\x03\x02\x02\x02\u0981\u098B\x07\xF5" +
		"\x02\x02\u0982\u0984\x07\x8D\x02\x02\u0983\u0982\x03\x02\x02\x02\u0983" +
		"\u0984\x03\x02\x02\x02\u0984\u0985\x03\x02\x02\x02\u0985\u098B\x07\xF8" +
		"\x02\x02\u0986\u0988\x07\x8D\x02\x02\u0987\u0986\x03\x02\x02\x02\u0987" +
		"\u0988\x03\x02\x02\x02\u0988\u0989\x03\x02\x02\x02\u0989\u098B\x07\xF9" +
		"\x02\x02\u098A\u096F\x03\x02\x02\x02\u098A\u0973\x03\x02\x02\x02\u098A" +
		"\u0977\x03\x02\x02\x02\u098A\u097B\x03\x02\x02\x02\u098A\u097F\x03\x02" +
		"\x02\x02\u098A\u0983\x03\x02\x02\x02\u098A\u0987\x03\x02\x02\x02\u098B" +
		"\xC9\x03\x02\x02\x02\u098C\u098D\t\x1C\x02\x02\u098D\xCB\x03\x02\x02\x02" +
		"\u0148\xE6\xEB\xEE\xF3\u0100\u0104\u010B\u0119\u011B\u011F\u0122\u0129" +
		"\u013A\u013C\u0140\u0143\u014A\u0150\u0156\u0161\u0181\u0189\u018D\u0192" +
		"\u0198\u01A0\u01A6\u01B3\u01B8\u01C1\u01C6\u01D6\u01DD\u01E1\u01E9\u01F0" +
		"\u01F7\u0206\u020A\u0210\u0216\u0219\u021C\u0222\u0226\u022A\u022F\u0233" +
		"\u023B\u023E\u0247\u024C\u0252\u0259\u025C\u0262\u026D\u0270\u0274\u0279" +
		"\u027E\u0285\u0288\u028B\u0292\u0297\u029C\u029F\u02A8\u02B0\u02B6\u02BA" +
		"\u02BE\u02C2\u02C4\u02CD\u02D3\u02D8\u02DB\u02DF\u02E2\u02EC\u02EF\u02F3" +
		"\u02F9\u02FC\u02FF\u0305\u030D\u0312\u0318\u031E\u0329\u0331\u0338\u0340" +
		"\u0343\u034B\u034F\u0356\u03CA\u03D2\u03DA\u03E3\u03EF\u03F3\u03F6\u03FC" +
		"\u0406\u0412\u0417\u041D\u0429\u042B\u0430\u0434\u0439\u043E\u0441\u0446" +
		"\u044A\u044F\u0451\u0455\u045E\u0466\u046D\u0474\u047D\u0482\u0491\u0498" +
		"\u049B\u04A2\u04A6\u04AC\u04B4\u04BF\u04CA\u04D1\u04D7\u04DD\u04E6\u04E8" +
		"\u04F1\u04F4\u04FD\u0500\u0509\u050C\u0515\u0518\u051B\u0520\u0522\u0525" +
		"\u0531\u0538\u053F\u0542\u0544\u054F\u0553\u0557\u0563\u0566\u056A\u0574" +
		"\u0578\u057A\u057D\u0581\u0584\u0588\u058E\u0592\u0596\u059B\u059E\u05A0" +
		"\u05A5\u05AA\u05AD\u05B1\u05B4\u05B6\u05BB\u05C0\u05CD\u05D2\u05DA\u05E0" +
		"\u05E4\u05ED\u05FC\u0601\u060D\u0612\u061A\u061D\u0621\u062F\u063C\u0641" +
		"\u0645\u0648\u064D\u0656\u0659\u065E\u0665\u0668\u0670\u0677\u067E\u0681" +
		"\u0686\u068C\u0690\u0693\u0696\u069C\u06A1\u06A6\u06B8\u06BA\u06BD\u06C8" +
		"\u06D1\u06D8\u06E0\u06E8\u06EC\u06F4\u06FC\u0702\u070A\u0716\u0719\u071F" +
		"\u0723\u0725\u072E\u073A\u073C\u0743\u074A\u0750\u0756\u0758\u075D\u0764" +
		"\u076A\u076E\u0770\u0777\u0786\u0788\u0790\u0792\u0796\u079E\u07A7\u07AD" +
		"\u07B5\u07BB\u07C0\u07C5\u07CB\u07E0\u07E2\u07EA\u07EE\u07F7\u07FB\u080D" +
		"\u0810\u0818\u0821\u0838\u0843\u084A\u084D\u0852\u0865\u0876\u0880\u0882" +
		"\u088F\u0891\u089F\u08A6\u08A9\u08AD\u08B2\u08C3\u08C7\u08D0\u08D4\u08D6" +
		"\u08DD\u08E4\u08EB\u08F3\u0900\u0910\u091A\u091D\u0926\u0929\u092B\u092E" +
		"\u0931\u0943\u094C\u0953\u0965\u096A\u096F\u0973\u0977\u097B\u097F\u0983" +
		"\u0987\u098A";
	public static readonly _serializedATN: string = Utils.join(
		[
			sparkParser._serializedATNSegment0,
			sparkParser._serializedATNSegment1,
			sparkParser._serializedATNSegment2,
			sparkParser._serializedATNSegment3,
			sparkParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!sparkParser.__ATN) {
			sparkParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(sparkParser._serializedATN));
		}

		return sparkParser.__ATN;
	}

}

export class SingleStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public EOF(): TerminalNode { return this.getToken(sparkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_singleStatement; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSingleStatement) {
			listener.enterSingleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSingleStatement) {
			listener.exitSingleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSingleStatement) {
			return visitor.visitSingleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	public namedExpression(): NamedExpressionContext {
		return this.getRuleContext(0, NamedExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(sparkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_singleExpression; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSingleExpression) {
			listener.enterSingleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSingleExpression) {
			listener.exitSingleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSingleExpression) {
			return visitor.visitSingleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleTableIdentifierContext extends ParserRuleContext {
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public EOF(): TerminalNode { return this.getToken(sparkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_singleTableIdentifier; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSingleTableIdentifier) {
			listener.enterSingleTableIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSingleTableIdentifier) {
			listener.exitSingleTableIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSingleTableIdentifier) {
			return visitor.visitSingleTableIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleFunctionIdentifierContext extends ParserRuleContext {
	public functionIdentifier(): FunctionIdentifierContext {
		return this.getRuleContext(0, FunctionIdentifierContext);
	}
	public EOF(): TerminalNode { return this.getToken(sparkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_singleFunctionIdentifier; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSingleFunctionIdentifier) {
			listener.enterSingleFunctionIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSingleFunctionIdentifier) {
			listener.exitSingleFunctionIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSingleFunctionIdentifier) {
			return visitor.visitSingleFunctionIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleDataTypeContext extends ParserRuleContext {
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public EOF(): TerminalNode { return this.getToken(sparkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_singleDataType; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSingleDataType) {
			listener.enterSingleDataType(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSingleDataType) {
			listener.exitSingleDataType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSingleDataType) {
			return visitor.visitSingleDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleTableSchemaContext extends ParserRuleContext {
	public colTypeList(): ColTypeListContext {
		return this.getRuleContext(0, ColTypeListContext);
	}
	public EOF(): TerminalNode { return this.getToken(sparkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_singleTableSchema; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSingleTableSchema) {
			listener.enterSingleTableSchema(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSingleTableSchema) {
			listener.exitSingleTableSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSingleTableSchema) {
			return visitor.visitSingleTableSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class StatementDefaultContext extends StatementContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterStatementDefault) {
			listener.enterStatementDefault(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitStatementDefault) {
			listener.exitStatementDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitStatementDefault) {
			return visitor.visitStatementDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UseContext extends StatementContext {
	public _db: IdentifierContext;
	public USE(): TerminalNode { return this.getToken(sparkParser.USE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterUse) {
			listener.enterUse(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitUse) {
			listener.exitUse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitUse) {
			return visitor.visitUse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateDatabaseContext extends StatementContext {
	public _comment: Token;
	public CREATE(): TerminalNode { return this.getToken(sparkParser.CREATE, 0); }
	public DATABASE(): TerminalNode { return this.getToken(sparkParser.DATABASE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMMENT, 0); }
	public locationSpec(): LocationSpecContext | undefined {
		return this.tryGetRuleContext(0, LocationSpecContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.WITH, 0); }
	public DBPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DBPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCreateDatabase) {
			listener.enterCreateDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCreateDatabase) {
			listener.exitCreateDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCreateDatabase) {
			return visitor.visitCreateDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetDatabasePropertiesContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public DATABASE(): TerminalNode { return this.getToken(sparkParser.DATABASE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SET(): TerminalNode { return this.getToken(sparkParser.SET, 0); }
	public DBPROPERTIES(): TerminalNode { return this.getToken(sparkParser.DBPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSetDatabaseProperties) {
			listener.enterSetDatabaseProperties(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSetDatabaseProperties) {
			listener.exitSetDatabaseProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSetDatabaseProperties) {
			return visitor.visitSetDatabaseProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropDatabaseContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(sparkParser.DROP, 0); }
	public DATABASE(): TerminalNode { return this.getToken(sparkParser.DATABASE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RESTRICT, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CASCADE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDropDatabase) {
			listener.enterDropDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDropDatabase) {
			listener.exitDropDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDropDatabase) {
			return visitor.visitDropDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableContext extends StatementContext {
	public _options: TablePropertyListContext;
	public _partitionColumnNames: IdentifierListContext;
	public _comment: Token;
	public _tableProps: TablePropertyListContext;
	public createTableHeader(): CreateTableHeaderContext {
		return this.getRuleContext(0, CreateTableHeaderContext);
	}
	public tableProvider(): TableProviderContext {
		return this.getRuleContext(0, TableProviderContext);
	}
	public colTypeList(): ColTypeListContext | undefined {
		return this.tryGetRuleContext(0, ColTypeListContext);
	}
	public bucketSpec(): BucketSpecContext[];
	public bucketSpec(i: number): BucketSpecContext;
	public bucketSpec(i?: number): BucketSpecContext | BucketSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BucketSpecContext);
		} else {
			return this.getRuleContext(i, BucketSpecContext);
		}
	}
	public locationSpec(): LocationSpecContext[];
	public locationSpec(i: number): LocationSpecContext;
	public locationSpec(i?: number): LocationSpecContext | LocationSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocationSpecContext);
		} else {
			return this.getRuleContext(i, LocationSpecContext);
		}
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public OPTIONS(): TerminalNode[];
	public OPTIONS(i: number): TerminalNode;
	public OPTIONS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.OPTIONS);
		} else {
			return this.getToken(sparkParser.OPTIONS, i);
		}
	}
	public PARTITIONED(): TerminalNode[];
	public PARTITIONED(i: number): TerminalNode;
	public PARTITIONED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.PARTITIONED);
		} else {
			return this.getToken(sparkParser.PARTITIONED, i);
		}
	}
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.BY);
		} else {
			return this.getToken(sparkParser.BY, i);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.COMMENT);
		} else {
			return this.getToken(sparkParser.COMMENT, i);
		}
	}
	public TBLPROPERTIES(): TerminalNode[];
	public TBLPROPERTIES(i: number): TerminalNode;
	public TBLPROPERTIES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.TBLPROPERTIES);
		} else {
			return this.getToken(sparkParser.TBLPROPERTIES, i);
		}
	}
	public tablePropertyList(): TablePropertyListContext[];
	public tablePropertyList(i: number): TablePropertyListContext;
	public tablePropertyList(i?: number): TablePropertyListContext | TablePropertyListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyListContext);
		} else {
			return this.getRuleContext(i, TablePropertyListContext);
		}
	}
	public identifierList(): IdentifierListContext[];
	public identifierList(i: number): IdentifierListContext;
	public identifierList(i?: number): IdentifierListContext | IdentifierListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		} else {
			return this.getRuleContext(i, IdentifierListContext);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.STRING);
		} else {
			return this.getToken(sparkParser.STRING, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCreateTable) {
			listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateHiveTableContext extends StatementContext {
	public _columns: ColTypeListContext;
	public _comment: Token;
	public _partitionColumns: ColTypeListContext;
	public _tableProps: TablePropertyListContext;
	public createTableHeader(): CreateTableHeaderContext {
		return this.getRuleContext(0, CreateTableHeaderContext);
	}
	public bucketSpec(): BucketSpecContext[];
	public bucketSpec(i: number): BucketSpecContext;
	public bucketSpec(i?: number): BucketSpecContext | BucketSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BucketSpecContext);
		} else {
			return this.getRuleContext(i, BucketSpecContext);
		}
	}
	public skewSpec(): SkewSpecContext[];
	public skewSpec(i: number): SkewSpecContext;
	public skewSpec(i?: number): SkewSpecContext | SkewSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SkewSpecContext);
		} else {
			return this.getRuleContext(i, SkewSpecContext);
		}
	}
	public rowFormat(): RowFormatContext[];
	public rowFormat(i: number): RowFormatContext;
	public rowFormat(i?: number): RowFormatContext | RowFormatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowFormatContext);
		} else {
			return this.getRuleContext(i, RowFormatContext);
		}
	}
	public createFileFormat(): CreateFileFormatContext[];
	public createFileFormat(i: number): CreateFileFormatContext;
	public createFileFormat(i?: number): CreateFileFormatContext | CreateFileFormatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CreateFileFormatContext);
		} else {
			return this.getRuleContext(i, CreateFileFormatContext);
		}
	}
	public locationSpec(): LocationSpecContext[];
	public locationSpec(i: number): LocationSpecContext;
	public locationSpec(i?: number): LocationSpecContext | LocationSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LocationSpecContext);
		} else {
			return this.getRuleContext(i, LocationSpecContext);
		}
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public colTypeList(): ColTypeListContext[];
	public colTypeList(i: number): ColTypeListContext;
	public colTypeList(i?: number): ColTypeListContext | ColTypeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColTypeListContext);
		} else {
			return this.getRuleContext(i, ColTypeListContext);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.COMMENT);
		} else {
			return this.getToken(sparkParser.COMMENT, i);
		}
	}
	public PARTITIONED(): TerminalNode[];
	public PARTITIONED(i: number): TerminalNode;
	public PARTITIONED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.PARTITIONED);
		} else {
			return this.getToken(sparkParser.PARTITIONED, i);
		}
	}
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.BY);
		} else {
			return this.getToken(sparkParser.BY, i);
		}
	}
	public TBLPROPERTIES(): TerminalNode[];
	public TBLPROPERTIES(i: number): TerminalNode;
	public TBLPROPERTIES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.TBLPROPERTIES);
		} else {
			return this.getToken(sparkParser.TBLPROPERTIES, i);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.STRING);
		} else {
			return this.getToken(sparkParser.STRING, i);
		}
	}
	public tablePropertyList(): TablePropertyListContext[];
	public tablePropertyList(i: number): TablePropertyListContext;
	public tablePropertyList(i?: number): TablePropertyListContext | TablePropertyListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyListContext);
		} else {
			return this.getRuleContext(i, TablePropertyListContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCreateHiveTable) {
			listener.enterCreateHiveTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCreateHiveTable) {
			listener.exitCreateHiveTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCreateHiveTable) {
			return visitor.visitCreateHiveTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableLikeContext extends StatementContext {
	public _target: TableIdentifierContext;
	public _source: TableIdentifierContext;
	public CREATE(): TerminalNode { return this.getToken(sparkParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public LIKE(): TerminalNode { return this.getToken(sparkParser.LIKE, 0); }
	public tableIdentifier(): TableIdentifierContext[];
	public tableIdentifier(i: number): TableIdentifierContext;
	public tableIdentifier(i?: number): TableIdentifierContext | TableIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableIdentifierContext);
		} else {
			return this.getRuleContext(i, TableIdentifierContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	public locationSpec(): LocationSpecContext | undefined {
		return this.tryGetRuleContext(0, LocationSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCreateTableLike) {
			listener.enterCreateTableLike(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCreateTableLike) {
			listener.exitCreateTableLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCreateTableLike) {
			return visitor.visitCreateTableLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnalyzeContext extends StatementContext {
	public ANALYZE(): TerminalNode { return this.getToken(sparkParser.ANALYZE, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public COMPUTE(): TerminalNode { return this.getToken(sparkParser.COMPUTE, 0); }
	public STATISTICS(): TerminalNode { return this.getToken(sparkParser.STATISTICS, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FOR, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COLUMNS, 0); }
	public identifierSeq(): IdentifierSeqContext | undefined {
		return this.tryGetRuleContext(0, IdentifierSeqContext);
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ALL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterAnalyze) {
			listener.enterAnalyze(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitAnalyze) {
			listener.exitAnalyze(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitAnalyze) {
			return visitor.visitAnalyze(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddTableColumnsContext extends StatementContext {
	public _columns: ColTypeListContext;
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public ADD(): TerminalNode { return this.getToken(sparkParser.ADD, 0); }
	public COLUMNS(): TerminalNode { return this.getToken(sparkParser.COLUMNS, 0); }
	public colTypeList(): ColTypeListContext {
		return this.getRuleContext(0, ColTypeListContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterAddTableColumns) {
			listener.enterAddTableColumns(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitAddTableColumns) {
			listener.exitAddTableColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitAddTableColumns) {
			return visitor.visitAddTableColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameTableContext extends StatementContext {
	public _from: TableIdentifierContext;
	public _to: TableIdentifierContext;
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public RENAME(): TerminalNode { return this.getToken(sparkParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(sparkParser.TO, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.VIEW, 0); }
	public tableIdentifier(): TableIdentifierContext[];
	public tableIdentifier(i: number): TableIdentifierContext;
	public tableIdentifier(i?: number): TableIdentifierContext | TableIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableIdentifierContext);
		} else {
			return this.getRuleContext(i, TableIdentifierContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterRenameTable) {
			listener.enterRenameTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitRenameTable) {
			listener.exitRenameTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitRenameTable) {
			return visitor.visitRenameTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTablePropertiesContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public SET(): TerminalNode { return this.getToken(sparkParser.SET, 0); }
	public TBLPROPERTIES(): TerminalNode { return this.getToken(sparkParser.TBLPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.VIEW, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSetTableProperties) {
			listener.enterSetTableProperties(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSetTableProperties) {
			listener.exitSetTableProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSetTableProperties) {
			return visitor.visitSetTableProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnsetTablePropertiesContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public UNSET(): TerminalNode { return this.getToken(sparkParser.UNSET, 0); }
	public TBLPROPERTIES(): TerminalNode { return this.getToken(sparkParser.TBLPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.VIEW, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterUnsetTableProperties) {
			listener.enterUnsetTableProperties(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitUnsetTableProperties) {
			listener.exitUnsetTableProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitUnsetTableProperties) {
			return visitor.visitUnsetTableProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ChangeColumnContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public CHANGE(): TerminalNode { return this.getToken(sparkParser.CHANGE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public colType(): ColTypeContext {
		return this.getRuleContext(0, ColTypeContext);
	}
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COLUMN, 0); }
	public colPosition(): ColPositionContext | undefined {
		return this.tryGetRuleContext(0, ColPositionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterChangeColumn) {
			listener.enterChangeColumn(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitChangeColumn) {
			listener.exitChangeColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitChangeColumn) {
			return visitor.visitChangeColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTableSerDeContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public SET(): TerminalNode { return this.getToken(sparkParser.SET, 0); }
	public SERDE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SERDE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.WITH, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SERDEPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSetTableSerDe) {
			listener.enterSetTableSerDe(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSetTableSerDe) {
			listener.exitSetTableSerDe(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSetTableSerDe) {
			return visitor.visitSetTableSerDe(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddTablePartitionContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public ADD(): TerminalNode { return this.getToken(sparkParser.ADD, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	public partitionSpecLocation(): PartitionSpecLocationContext[];
	public partitionSpecLocation(i: number): PartitionSpecLocationContext;
	public partitionSpecLocation(i?: number): PartitionSpecLocationContext | PartitionSpecLocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionSpecLocationContext);
		} else {
			return this.getRuleContext(i, PartitionSpecLocationContext);
		}
	}
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.VIEW, 0); }
	public partitionSpec(): PartitionSpecContext[];
	public partitionSpec(i: number): PartitionSpecContext;
	public partitionSpec(i?: number): PartitionSpecContext | PartitionSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionSpecContext);
		} else {
			return this.getRuleContext(i, PartitionSpecContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterAddTablePartition) {
			listener.enterAddTablePartition(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitAddTablePartition) {
			listener.exitAddTablePartition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitAddTablePartition) {
			return visitor.visitAddTablePartition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameTablePartitionContext extends StatementContext {
	public _from: PartitionSpecContext;
	public _to: PartitionSpecContext;
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public RENAME(): TerminalNode { return this.getToken(sparkParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(sparkParser.TO, 0); }
	public partitionSpec(): PartitionSpecContext[];
	public partitionSpec(i: number): PartitionSpecContext;
	public partitionSpec(i?: number): PartitionSpecContext | PartitionSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionSpecContext);
		} else {
			return this.getRuleContext(i, PartitionSpecContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterRenameTablePartition) {
			listener.enterRenameTablePartition(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitRenameTablePartition) {
			listener.exitRenameTablePartition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitRenameTablePartition) {
			return visitor.visitRenameTablePartition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTablePartitionsContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public DROP(): TerminalNode { return this.getToken(sparkParser.DROP, 0); }
	public partitionSpec(): PartitionSpecContext[];
	public partitionSpec(i: number): PartitionSpecContext;
	public partitionSpec(i?: number): PartitionSpecContext | PartitionSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionSpecContext);
		} else {
			return this.getRuleContext(i, PartitionSpecContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	public PURGE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PURGE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.VIEW, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDropTablePartitions) {
			listener.enterDropTablePartitions(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDropTablePartitions) {
			listener.exitDropTablePartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDropTablePartitions) {
			return visitor.visitDropTablePartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetTableLocationContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public SET(): TerminalNode { return this.getToken(sparkParser.SET, 0); }
	public locationSpec(): LocationSpecContext {
		return this.getRuleContext(0, LocationSpecContext);
	}
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSetTableLocation) {
			listener.enterSetTableLocation(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSetTableLocation) {
			listener.exitSetTableLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSetTableLocation) {
			return visitor.visitSetTableLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecoverPartitionsContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public RECOVER(): TerminalNode { return this.getToken(sparkParser.RECOVER, 0); }
	public PARTITIONS(): TerminalNode { return this.getToken(sparkParser.PARTITIONS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterRecoverPartitions) {
			listener.enterRecoverPartitions(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitRecoverPartitions) {
			listener.exitRecoverPartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitRecoverPartitions) {
			return visitor.visitRecoverPartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTableContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(sparkParser.DROP, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	public PURGE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PURGE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.VIEW, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDropTable) {
			listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateViewContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(sparkParser.CREATE, 0); }
	public VIEW(): TerminalNode { return this.getToken(sparkParser.VIEW, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public AS(): TerminalNode { return this.getToken(sparkParser.AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REPLACE, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TEMPORARY, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	public identifierCommentList(): IdentifierCommentListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierCommentListContext);
	}
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMMENT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	public PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PARTITIONED, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ON, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TBLPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GLOBAL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCreateView) {
			listener.enterCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCreateView) {
			listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTempViewUsingContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(sparkParser.CREATE, 0); }
	public TEMPORARY(): TerminalNode { return this.getToken(sparkParser.TEMPORARY, 0); }
	public VIEW(): TerminalNode { return this.getToken(sparkParser.VIEW, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public tableProvider(): TableProviderContext {
		return this.getRuleContext(0, TableProviderContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REPLACE, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GLOBAL, 0); }
	public colTypeList(): ColTypeListContext | undefined {
		return this.tryGetRuleContext(0, ColTypeListContext);
	}
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OPTIONS, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCreateTempViewUsing) {
			listener.enterCreateTempViewUsing(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCreateTempViewUsing) {
			listener.exitCreateTempViewUsing(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCreateTempViewUsing) {
			return visitor.visitCreateTempViewUsing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AlterViewQueryContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(sparkParser.ALTER, 0); }
	public VIEW(): TerminalNode { return this.getToken(sparkParser.VIEW, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterAlterViewQuery) {
			listener.enterAlterViewQuery(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitAlterViewQuery) {
			listener.exitAlterViewQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitAlterViewQuery) {
			return visitor.visitAlterViewQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateFunctionContext extends StatementContext {
	public _className: Token;
	public CREATE(): TerminalNode { return this.getToken(sparkParser.CREATE, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(sparkParser.FUNCTION, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public AS(): TerminalNode { return this.getToken(sparkParser.AS, 0); }
	public STRING(): TerminalNode { return this.getToken(sparkParser.STRING, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REPLACE, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TEMPORARY, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.USING, 0); }
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCreateFunction) {
			listener.enterCreateFunction(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCreateFunction) {
			listener.exitCreateFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCreateFunction) {
			return visitor.visitCreateFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropFunctionContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(sparkParser.DROP, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(sparkParser.FUNCTION, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TEMPORARY, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDropFunction) {
			listener.enterDropFunction(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDropFunction) {
			listener.exitDropFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDropFunction) {
			return visitor.visitDropFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExplainContext extends StatementContext {
	public EXPLAIN(): TerminalNode { return this.getToken(sparkParser.EXPLAIN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOGICAL, 0); }
	public FORMATTED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FORMATTED, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXTENDED, 0); }
	public CODEGEN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CODEGEN, 0); }
	public COST(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COST, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterExplain) {
			listener.enterExplain(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitExplain) {
			listener.exitExplain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitExplain) {
			return visitor.visitExplain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTablesContext extends StatementContext {
	public _db: IdentifierContext;
	public _pattern: Token;
	public SHOW(): TerminalNode { return this.getToken(sparkParser.SHOW, 0); }
	public TABLES(): TerminalNode { return this.getToken(sparkParser.TABLES, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LIKE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterShowTables) {
			listener.enterShowTables(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitShowTables) {
			listener.exitShowTables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitShowTables) {
			return visitor.visitShowTables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTableContext extends StatementContext {
	public _db: IdentifierContext;
	public _pattern: Token;
	public SHOW(): TerminalNode { return this.getToken(sparkParser.SHOW, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public EXTENDED(): TerminalNode { return this.getToken(sparkParser.EXTENDED, 0); }
	public LIKE(): TerminalNode { return this.getToken(sparkParser.LIKE, 0); }
	public STRING(): TerminalNode { return this.getToken(sparkParser.STRING, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterShowTable) {
			listener.enterShowTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitShowTable) {
			listener.exitShowTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitShowTable) {
			return visitor.visitShowTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowDatabasesContext extends StatementContext {
	public _pattern: Token;
	public SHOW(): TerminalNode { return this.getToken(sparkParser.SHOW, 0); }
	public DATABASES(): TerminalNode { return this.getToken(sparkParser.DATABASES, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LIKE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterShowDatabases) {
			listener.enterShowDatabases(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitShowDatabases) {
			listener.exitShowDatabases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitShowDatabases) {
			return visitor.visitShowDatabases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTblPropertiesContext extends StatementContext {
	public _table: TableIdentifierContext;
	public _key: TablePropertyKeyContext;
	public SHOW(): TerminalNode { return this.getToken(sparkParser.SHOW, 0); }
	public TBLPROPERTIES(): TerminalNode { return this.getToken(sparkParser.TBLPROPERTIES, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public tablePropertyKey(): TablePropertyKeyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyKeyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterShowTblProperties) {
			listener.enterShowTblProperties(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitShowTblProperties) {
			listener.exitShowTblProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitShowTblProperties) {
			return visitor.visitShowTblProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowColumnsContext extends StatementContext {
	public _db: IdentifierContext;
	public SHOW(): TerminalNode { return this.getToken(sparkParser.SHOW, 0); }
	public COLUMNS(): TerminalNode { return this.getToken(sparkParser.COLUMNS, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public FROM(): TerminalNode[];
	public FROM(i: number): TerminalNode;
	public FROM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.FROM);
		} else {
			return this.getToken(sparkParser.FROM, i);
		}
	}
	public IN(): TerminalNode[];
	public IN(i: number): TerminalNode;
	public IN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.IN);
		} else {
			return this.getToken(sparkParser.IN, i);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterShowColumns) {
			listener.enterShowColumns(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitShowColumns) {
			listener.exitShowColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitShowColumns) {
			return visitor.visitShowColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowPartitionsContext extends StatementContext {
	public SHOW(): TerminalNode { return this.getToken(sparkParser.SHOW, 0); }
	public PARTITIONS(): TerminalNode { return this.getToken(sparkParser.PARTITIONS, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterShowPartitions) {
			listener.enterShowPartitions(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitShowPartitions) {
			listener.exitShowPartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitShowPartitions) {
			return visitor.visitShowPartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowFunctionsContext extends StatementContext {
	public _pattern: Token;
	public SHOW(): TerminalNode { return this.getToken(sparkParser.SHOW, 0); }
	public FUNCTIONS(): TerminalNode { return this.getToken(sparkParser.FUNCTIONS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LIKE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterShowFunctions) {
			listener.enterShowFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitShowFunctions) {
			listener.exitShowFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitShowFunctions) {
			return visitor.visitShowFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateTableContext extends StatementContext {
	public SHOW(): TerminalNode { return this.getToken(sparkParser.SHOW, 0); }
	public CREATE(): TerminalNode { return this.getToken(sparkParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterShowCreateTable) {
			listener.enterShowCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitShowCreateTable) {
			listener.exitShowCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitShowCreateTable) {
			return visitor.visitShowCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeFunctionContext extends StatementContext {
	public FUNCTION(): TerminalNode { return this.getToken(sparkParser.FUNCTION, 0); }
	public describeFuncName(): DescribeFuncNameContext {
		return this.getRuleContext(0, DescribeFuncNameContext);
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DESCRIBE, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXTENDED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDescribeFunction) {
			listener.enterDescribeFunction(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDescribeFunction) {
			listener.exitDescribeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDescribeFunction) {
			return visitor.visitDescribeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeDatabaseContext extends StatementContext {
	public DATABASE(): TerminalNode { return this.getToken(sparkParser.DATABASE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DESCRIBE, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXTENDED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDescribeDatabase) {
			listener.enterDescribeDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDescribeDatabase) {
			listener.exitDescribeDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDescribeDatabase) {
			return visitor.visitDescribeDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeTableContext extends StatementContext {
	public _option: Token;
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DESCRIBE, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLE, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public describeColName(): DescribeColNameContext | undefined {
		return this.tryGetRuleContext(0, DescribeColNameContext);
	}
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXTENDED, 0); }
	public FORMATTED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FORMATTED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDescribeTable) {
			listener.enterDescribeTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDescribeTable) {
			listener.exitDescribeTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDescribeTable) {
			return visitor.visitDescribeTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshTableContext extends StatementContext {
	public REFRESH(): TerminalNode { return this.getToken(sparkParser.REFRESH, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterRefreshTable) {
			listener.enterRefreshTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitRefreshTable) {
			listener.exitRefreshTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitRefreshTable) {
			return visitor.visitRefreshTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshResourceContext extends StatementContext {
	public REFRESH(): TerminalNode { return this.getToken(sparkParser.REFRESH, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterRefreshResource) {
			listener.enterRefreshResource(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitRefreshResource) {
			listener.exitRefreshResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitRefreshResource) {
			return visitor.visitRefreshResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CacheTableContext extends StatementContext {
	public _options: TablePropertyListContext;
	public CACHE(): TerminalNode { return this.getToken(sparkParser.CACHE, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public LAZY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LAZY, 0); }
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OPTIONS, 0); }
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCacheTable) {
			listener.enterCacheTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCacheTable) {
			listener.exitCacheTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCacheTable) {
			return visitor.visitCacheTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UncacheTableContext extends StatementContext {
	public UNCACHE(): TerminalNode { return this.getToken(sparkParser.UNCACHE, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterUncacheTable) {
			listener.enterUncacheTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitUncacheTable) {
			listener.exitUncacheTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitUncacheTable) {
			return visitor.visitUncacheTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClearCacheContext extends StatementContext {
	public CLEAR(): TerminalNode { return this.getToken(sparkParser.CLEAR, 0); }
	public CACHE(): TerminalNode { return this.getToken(sparkParser.CACHE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterClearCache) {
			listener.enterClearCache(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitClearCache) {
			listener.exitClearCache(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitClearCache) {
			return visitor.visitClearCache(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LoadDataContext extends StatementContext {
	public _path: Token;
	public LOAD(): TerminalNode { return this.getToken(sparkParser.LOAD, 0); }
	public DATA(): TerminalNode { return this.getToken(sparkParser.DATA, 0); }
	public INPATH(): TerminalNode { return this.getToken(sparkParser.INPATH, 0); }
	public INTO(): TerminalNode { return this.getToken(sparkParser.INTO, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public STRING(): TerminalNode { return this.getToken(sparkParser.STRING, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOCAL, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OVERWRITE, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterLoadData) {
			listener.enterLoadData(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitLoadData) {
			listener.exitLoadData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitLoadData) {
			return visitor.visitLoadData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TruncateTableContext extends StatementContext {
	public TRUNCATE(): TerminalNode { return this.getToken(sparkParser.TRUNCATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTruncateTable) {
			listener.enterTruncateTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTruncateTable) {
			listener.exitTruncateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTruncateTable) {
			return visitor.visitTruncateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RepairTableContext extends StatementContext {
	public MSCK(): TerminalNode { return this.getToken(sparkParser.MSCK, 0); }
	public REPAIR(): TerminalNode { return this.getToken(sparkParser.REPAIR, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterRepairTable) {
			listener.enterRepairTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitRepairTable) {
			listener.exitRepairTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitRepairTable) {
			return visitor.visitRepairTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ManageResourceContext extends StatementContext {
	public _op: Token;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ADD, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LIST, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterManageResource) {
			listener.enterManageResource(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitManageResource) {
			listener.exitManageResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitManageResource) {
			return visitor.visitManageResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FailNativeCommandContext extends StatementContext {
	public SET(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SET, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROLE, 0); }
	public unsupportedHiveNativeCommands(): UnsupportedHiveNativeCommandsContext | undefined {
		return this.tryGetRuleContext(0, UnsupportedHiveNativeCommandsContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterFailNativeCommand) {
			listener.enterFailNativeCommand(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitFailNativeCommand) {
			listener.exitFailNativeCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitFailNativeCommand) {
			return visitor.visitFailNativeCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetConfigurationContext extends StatementContext {
	public SET(): TerminalNode { return this.getToken(sparkParser.SET, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSetConfiguration) {
			listener.enterSetConfiguration(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSetConfiguration) {
			listener.exitSetConfiguration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSetConfiguration) {
			return visitor.visitSetConfiguration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResetConfigurationContext extends StatementContext {
	public RESET(): TerminalNode { return this.getToken(sparkParser.RESET, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterResetConfiguration) {
			listener.enterResetConfiguration(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitResetConfiguration) {
			listener.exitResetConfiguration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitResetConfiguration) {
			return visitor.visitResetConfiguration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnsupportedHiveNativeCommandsContext extends ParserRuleContext {
	public _kw1: Token;
	public _kw2: Token;
	public _kw3: Token;
	public _kw4: Token;
	public _kw5: Token;
	public _kw6: Token;
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CREATE, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROLE, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DROP, 0); }
	public GRANT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GRANT, 0); }
	public REVOKE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REVOKE, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SHOW, 0); }
	public PRINCIPALS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PRINCIPALS, 0); }
	public ROLES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROLES, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CURRENT, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXPORT, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IMPORT, 0); }
	public COMPACTIONS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMPACTIONS, 0); }
	public TRANSACTIONS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRANSACTIONS, 0); }
	public INDEXES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INDEXES, 0); }
	public LOCKS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOCKS, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INDEX, 0); }
	public ALTER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ALTER, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOCK, 0); }
	public DATABASE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DATABASE, 0); }
	public UNLOCK(): TerminalNode | undefined { return this.tryGetToken(sparkParser.UNLOCK, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TEMPORARY, 0); }
	public MACRO(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MACRO, 0); }
	public tableIdentifier(): TableIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TableIdentifierContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	public CLUSTERED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CLUSTERED, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.BY, 0); }
	public SORTED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SORTED, 0); }
	public SKEWED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SKEWED, 0); }
	public STORED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STORED, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	public DIRECTORIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DIRECTORIES, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SET, 0); }
	public LOCATION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOCATION, 0); }
	public EXCHANGE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXCHANGE, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PARTITION, 0); }
	public ARCHIVE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ARCHIVE, 0); }
	public UNARCHIVE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.UNARCHIVE, 0); }
	public TOUCH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TOUCH, 0); }
	public COMPACT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMPACT, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public CONCATENATE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CONCATENATE, 0); }
	public FILEFORMAT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FILEFORMAT, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REPLACE, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COLUMNS, 0); }
	public START(): TerminalNode | undefined { return this.tryGetToken(sparkParser.START, 0); }
	public TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRANSACTION, 0); }
	public COMMIT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMMIT, 0); }
	public ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROLLBACK, 0); }
	public DFS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DFS, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DELETE, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FROM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_unsupportedHiveNativeCommands; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterUnsupportedHiveNativeCommands) {
			listener.enterUnsupportedHiveNativeCommands(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitUnsupportedHiveNativeCommands) {
			listener.exitUnsupportedHiveNativeCommands(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitUnsupportedHiveNativeCommands) {
			return visitor.visitUnsupportedHiveNativeCommands(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableHeaderContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(sparkParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TEMPORARY, 0); }
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXTERNAL, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_createTableHeader; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCreateTableHeader) {
			listener.enterCreateTableHeader(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCreateTableHeader) {
			listener.exitCreateTableHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCreateTableHeader) {
			return visitor.visitCreateTableHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BucketSpecContext extends ParserRuleContext {
	public CLUSTERED(): TerminalNode { return this.getToken(sparkParser.CLUSTERED, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.BY);
		} else {
			return this.getToken(sparkParser.BY, i);
		}
	}
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public INTO(): TerminalNode { return this.getToken(sparkParser.INTO, 0); }
	public INTEGER_VALUE(): TerminalNode { return this.getToken(sparkParser.INTEGER_VALUE, 0); }
	public BUCKETS(): TerminalNode { return this.getToken(sparkParser.BUCKETS, 0); }
	public SORTED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SORTED, 0); }
	public orderedIdentifierList(): OrderedIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, OrderedIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_bucketSpec; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterBucketSpec) {
			listener.enterBucketSpec(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitBucketSpec) {
			listener.exitBucketSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitBucketSpec) {
			return visitor.visitBucketSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkewSpecContext extends ParserRuleContext {
	public SKEWED(): TerminalNode { return this.getToken(sparkParser.SKEWED, 0); }
	public BY(): TerminalNode { return this.getToken(sparkParser.BY, 0); }
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public ON(): TerminalNode { return this.getToken(sparkParser.ON, 0); }
	public constantList(): ConstantListContext | undefined {
		return this.tryGetRuleContext(0, ConstantListContext);
	}
	public nestedConstantList(): NestedConstantListContext | undefined {
		return this.tryGetRuleContext(0, NestedConstantListContext);
	}
	public STORED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STORED, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	public DIRECTORIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DIRECTORIES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_skewSpec; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSkewSpec) {
			listener.enterSkewSpec(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSkewSpec) {
			listener.exitSkewSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSkewSpec) {
			return visitor.visitSkewSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocationSpecContext extends ParserRuleContext {
	public LOCATION(): TerminalNode { return this.getToken(sparkParser.LOCATION, 0); }
	public STRING(): TerminalNode { return this.getToken(sparkParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_locationSpec; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterLocationSpec) {
			listener.enterLocationSpec(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitLocationSpec) {
			listener.exitLocationSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitLocationSpec) {
			return visitor.visitLocationSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public queryNoWith(): QueryNoWithContext {
		return this.getRuleContext(0, QueryNoWithContext);
	}
	public ctes(): CtesContext | undefined {
		return this.tryGetRuleContext(0, CtesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_query; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertIntoContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_insertInto; }
	public copyFrom(ctx: InsertIntoContext): void {
		super.copyFrom(ctx);
	}
}
export class InsertOverwriteTableContext extends InsertIntoContext {
	public INSERT(): TerminalNode { return this.getToken(sparkParser.INSERT, 0); }
	public OVERWRITE(): TerminalNode { return this.getToken(sparkParser.OVERWRITE, 0); }
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	constructor(ctx: InsertIntoContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterInsertOverwriteTable) {
			listener.enterInsertOverwriteTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitInsertOverwriteTable) {
			listener.exitInsertOverwriteTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitInsertOverwriteTable) {
			return visitor.visitInsertOverwriteTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertIntoTableContext extends InsertIntoContext {
	public INSERT(): TerminalNode { return this.getToken(sparkParser.INSERT, 0); }
	public INTO(): TerminalNode { return this.getToken(sparkParser.INTO, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLE, 0); }
	public partitionSpec(): PartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, PartitionSpecContext);
	}
	constructor(ctx: InsertIntoContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterInsertIntoTable) {
			listener.enterInsertIntoTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitInsertIntoTable) {
			listener.exitInsertIntoTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitInsertIntoTable) {
			return visitor.visitInsertIntoTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertOverwriteHiveDirContext extends InsertIntoContext {
	public _path: Token;
	public INSERT(): TerminalNode { return this.getToken(sparkParser.INSERT, 0); }
	public OVERWRITE(): TerminalNode { return this.getToken(sparkParser.OVERWRITE, 0); }
	public DIRECTORY(): TerminalNode { return this.getToken(sparkParser.DIRECTORY, 0); }
	public STRING(): TerminalNode { return this.getToken(sparkParser.STRING, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOCAL, 0); }
	public rowFormat(): RowFormatContext | undefined {
		return this.tryGetRuleContext(0, RowFormatContext);
	}
	public createFileFormat(): CreateFileFormatContext | undefined {
		return this.tryGetRuleContext(0, CreateFileFormatContext);
	}
	constructor(ctx: InsertIntoContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterInsertOverwriteHiveDir) {
			listener.enterInsertOverwriteHiveDir(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitInsertOverwriteHiveDir) {
			listener.exitInsertOverwriteHiveDir(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitInsertOverwriteHiveDir) {
			return visitor.visitInsertOverwriteHiveDir(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertOverwriteDirContext extends InsertIntoContext {
	public _path: Token;
	public _options: TablePropertyListContext;
	public INSERT(): TerminalNode { return this.getToken(sparkParser.INSERT, 0); }
	public OVERWRITE(): TerminalNode { return this.getToken(sparkParser.OVERWRITE, 0); }
	public DIRECTORY(): TerminalNode { return this.getToken(sparkParser.DIRECTORY, 0); }
	public tableProvider(): TableProviderContext {
		return this.getRuleContext(0, TableProviderContext);
	}
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOCAL, 0); }
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OPTIONS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(ctx: InsertIntoContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterInsertOverwriteDir) {
			listener.enterInsertOverwriteDir(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitInsertOverwriteDir) {
			listener.exitInsertOverwriteDir(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitInsertOverwriteDir) {
			return visitor.visitInsertOverwriteDir(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionSpecLocationContext extends ParserRuleContext {
	public partitionSpec(): PartitionSpecContext {
		return this.getRuleContext(0, PartitionSpecContext);
	}
	public locationSpec(): LocationSpecContext | undefined {
		return this.tryGetRuleContext(0, LocationSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_partitionSpecLocation; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPartitionSpecLocation) {
			listener.enterPartitionSpecLocation(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPartitionSpecLocation) {
			listener.exitPartitionSpecLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPartitionSpecLocation) {
			return visitor.visitPartitionSpecLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionSpecContext extends ParserRuleContext {
	public PARTITION(): TerminalNode { return this.getToken(sparkParser.PARTITION, 0); }
	public partitionVal(): PartitionValContext[];
	public partitionVal(i: number): PartitionValContext;
	public partitionVal(i?: number): PartitionValContext | PartitionValContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionValContext);
		} else {
			return this.getRuleContext(i, PartitionValContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_partitionSpec; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPartitionSpec) {
			listener.enterPartitionSpec(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPartitionSpec) {
			listener.exitPartitionSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPartitionSpec) {
			return visitor.visitPartitionSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionValContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EQ, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_partitionVal; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPartitionVal) {
			listener.enterPartitionVal(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPartitionVal) {
			listener.exitPartitionVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPartitionVal) {
			return visitor.visitPartitionVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescribeFuncNameContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	public comparisonOperator(): ComparisonOperatorContext | undefined {
		return this.tryGetRuleContext(0, ComparisonOperatorContext);
	}
	public arithmeticOperator(): ArithmeticOperatorContext | undefined {
		return this.tryGetRuleContext(0, ArithmeticOperatorContext);
	}
	public predicateOperator(): PredicateOperatorContext | undefined {
		return this.tryGetRuleContext(0, PredicateOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_describeFuncName; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDescribeFuncName) {
			listener.enterDescribeFuncName(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDescribeFuncName) {
			listener.exitDescribeFuncName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDescribeFuncName) {
			return visitor.visitDescribeFuncName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescribeColNameContext extends ParserRuleContext {
	public _identifier: IdentifierContext;
	public _nameParts: IdentifierContext[] = [];
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_describeColName; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDescribeColName) {
			listener.enterDescribeColName(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDescribeColName) {
			listener.exitDescribeColName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDescribeColName) {
			return visitor.visitDescribeColName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CtesContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(sparkParser.WITH, 0); }
	public namedQuery(): NamedQueryContext[];
	public namedQuery(i: number): NamedQueryContext;
	public namedQuery(i?: number): NamedQueryContext | NamedQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedQueryContext);
		} else {
			return this.getRuleContext(i, NamedQueryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_ctes; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCtes) {
			listener.enterCtes(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCtes) {
			listener.exitCtes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCtes) {
			return visitor.visitCtes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedQueryContext extends ParserRuleContext {
	public _name: IdentifierContext;
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_namedQuery; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterNamedQuery) {
			listener.enterNamedQuery(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitNamedQuery) {
			listener.exitNamedQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitNamedQuery) {
			return visitor.visitNamedQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableProviderContext extends ParserRuleContext {
	public USING(): TerminalNode { return this.getToken(sparkParser.USING, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_tableProvider; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTableProvider) {
			listener.enterTableProvider(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTableProvider) {
			listener.exitTableProvider(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTableProvider) {
			return visitor.visitTableProvider(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyListContext extends ParserRuleContext {
	public tableProperty(): TablePropertyContext[];
	public tableProperty(i: number): TablePropertyContext;
	public tableProperty(i?: number): TablePropertyContext | TablePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyContext);
		} else {
			return this.getRuleContext(i, TablePropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_tablePropertyList; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTablePropertyList) {
			listener.enterTablePropertyList(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTablePropertyList) {
			listener.exitTablePropertyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTablePropertyList) {
			return visitor.visitTablePropertyList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyContext extends ParserRuleContext {
	public _key: TablePropertyKeyContext;
	public _value: TablePropertyValueContext;
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getRuleContext(0, TablePropertyKeyContext);
	}
	public tablePropertyValue(): TablePropertyValueContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyValueContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_tableProperty; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTableProperty) {
			listener.enterTableProperty(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTableProperty) {
			listener.exitTableProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTableProperty) {
			return visitor.visitTableProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyKeyContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_tablePropertyKey; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTablePropertyKey) {
			listener.enterTablePropertyKey(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTablePropertyKey) {
			listener.exitTablePropertyKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTablePropertyKey) {
			return visitor.visitTablePropertyKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyValueContext extends ParserRuleContext {
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INTEGER_VALUE, 0); }
	public DECIMAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DECIMAL_VALUE, 0); }
	public booleanValue(): BooleanValueContext | undefined {
		return this.tryGetRuleContext(0, BooleanValueContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_tablePropertyValue; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTablePropertyValue) {
			listener.enterTablePropertyValue(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTablePropertyValue) {
			listener.exitTablePropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTablePropertyValue) {
			return visitor.visitTablePropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantListContext extends ParserRuleContext {
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_constantList; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterConstantList) {
			listener.enterConstantList(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitConstantList) {
			listener.exitConstantList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitConstantList) {
			return visitor.visitConstantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedConstantListContext extends ParserRuleContext {
	public constantList(): ConstantListContext[];
	public constantList(i: number): ConstantListContext;
	public constantList(i?: number): ConstantListContext | ConstantListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantListContext);
		} else {
			return this.getRuleContext(i, ConstantListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_nestedConstantList; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterNestedConstantList) {
			listener.enterNestedConstantList(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitNestedConstantList) {
			listener.exitNestedConstantList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitNestedConstantList) {
			return visitor.visitNestedConstantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateFileFormatContext extends ParserRuleContext {
	public STORED(): TerminalNode { return this.getToken(sparkParser.STORED, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	public fileFormat(): FileFormatContext | undefined {
		return this.tryGetRuleContext(0, FileFormatContext);
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.BY, 0); }
	public storageHandler(): StorageHandlerContext | undefined {
		return this.tryGetRuleContext(0, StorageHandlerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_createFileFormat; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCreateFileFormat) {
			listener.enterCreateFileFormat(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCreateFileFormat) {
			listener.exitCreateFileFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCreateFileFormat) {
			return visitor.visitCreateFileFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileFormatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_fileFormat; }
	public copyFrom(ctx: FileFormatContext): void {
		super.copyFrom(ctx);
	}
}
export class TableFileFormatContext extends FileFormatContext {
	public _inFmt: Token;
	public _outFmt: Token;
	public INPUTFORMAT(): TerminalNode { return this.getToken(sparkParser.INPUTFORMAT, 0); }
	public OUTPUTFORMAT(): TerminalNode { return this.getToken(sparkParser.OUTPUTFORMAT, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.STRING);
		} else {
			return this.getToken(sparkParser.STRING, i);
		}
	}
	constructor(ctx: FileFormatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTableFileFormat) {
			listener.enterTableFileFormat(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTableFileFormat) {
			listener.exitTableFileFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTableFileFormat) {
			return visitor.visitTableFileFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GenericFileFormatContext extends FileFormatContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: FileFormatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterGenericFileFormat) {
			listener.enterGenericFileFormat(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitGenericFileFormat) {
			listener.exitGenericFileFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitGenericFileFormat) {
			return visitor.visitGenericFileFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageHandlerContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(sparkParser.STRING, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.WITH, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SERDEPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_storageHandler; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterStorageHandler) {
			listener.enterStorageHandler(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitStorageHandler) {
			listener.exitStorageHandler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitStorageHandler) {
			return visitor.visitStorageHandler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode { return this.getToken(sparkParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_resource; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryNoWithContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_queryNoWith; }
	public copyFrom(ctx: QueryNoWithContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleInsertQueryContext extends QueryNoWithContext {
	public queryTerm(): QueryTermContext {
		return this.getRuleContext(0, QueryTermContext);
	}
	public queryOrganization(): QueryOrganizationContext {
		return this.getRuleContext(0, QueryOrganizationContext);
	}
	public insertInto(): InsertIntoContext | undefined {
		return this.tryGetRuleContext(0, InsertIntoContext);
	}
	constructor(ctx: QueryNoWithContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSingleInsertQuery) {
			listener.enterSingleInsertQuery(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSingleInsertQuery) {
			listener.exitSingleInsertQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSingleInsertQuery) {
			return visitor.visitSingleInsertQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiInsertQueryContext extends QueryNoWithContext {
	public fromClause(): FromClauseContext {
		return this.getRuleContext(0, FromClauseContext);
	}
	public multiInsertQueryBody(): MultiInsertQueryBodyContext[];
	public multiInsertQueryBody(i: number): MultiInsertQueryBodyContext;
	public multiInsertQueryBody(i?: number): MultiInsertQueryBodyContext | MultiInsertQueryBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiInsertQueryBodyContext);
		} else {
			return this.getRuleContext(i, MultiInsertQueryBodyContext);
		}
	}
	constructor(ctx: QueryNoWithContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterMultiInsertQuery) {
			listener.enterMultiInsertQuery(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitMultiInsertQuery) {
			listener.exitMultiInsertQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitMultiInsertQuery) {
			return visitor.visitMultiInsertQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryOrganizationContext extends ParserRuleContext {
	public _sortItem: SortItemContext;
	public _order: SortItemContext[] = [];
	public _expression: ExpressionContext;
	public _clusterBy: ExpressionContext[] = [];
	public _distributeBy: ExpressionContext[] = [];
	public _sort: SortItemContext[] = [];
	public _limit: ExpressionContext;
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ORDER, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.BY);
		} else {
			return this.getToken(sparkParser.BY, i);
		}
	}
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CLUSTER, 0); }
	public DISTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DISTRIBUTE, 0); }
	public SORT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SORT, 0); }
	public windows(): WindowsContext | undefined {
		return this.tryGetRuleContext(0, WindowsContext);
	}
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LIMIT, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_queryOrganization; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterQueryOrganization) {
			listener.enterQueryOrganization(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitQueryOrganization) {
			listener.exitQueryOrganization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitQueryOrganization) {
			return visitor.visitQueryOrganization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiInsertQueryBodyContext extends ParserRuleContext {
	public querySpecification(): QuerySpecificationContext {
		return this.getRuleContext(0, QuerySpecificationContext);
	}
	public queryOrganization(): QueryOrganizationContext {
		return this.getRuleContext(0, QueryOrganizationContext);
	}
	public insertInto(): InsertIntoContext | undefined {
		return this.tryGetRuleContext(0, InsertIntoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_multiInsertQueryBody; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterMultiInsertQueryBody) {
			listener.enterMultiInsertQueryBody(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitMultiInsertQueryBody) {
			listener.exitMultiInsertQueryBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitMultiInsertQueryBody) {
			return visitor.visitMultiInsertQueryBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryTermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_queryTerm; }
	public copyFrom(ctx: QueryTermContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryTermDefaultContext extends QueryTermContext {
	public queryPrimary(): QueryPrimaryContext {
		return this.getRuleContext(0, QueryPrimaryContext);
	}
	constructor(ctx: QueryTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterQueryTermDefault) {
			listener.enterQueryTermDefault(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitQueryTermDefault) {
			listener.exitQueryTermDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitQueryTermDefault) {
			return visitor.visitQueryTermDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetOperationContext extends QueryTermContext {
	public _left: QueryTermContext;
	public _operator: Token;
	public _right: QueryTermContext;
	public queryTerm(): QueryTermContext[];
	public queryTerm(i: number): QueryTermContext;
	public queryTerm(i?: number): QueryTermContext | QueryTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryTermContext);
		} else {
			return this.getRuleContext(i, QueryTermContext);
		}
	}
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INTERSECT, 0); }
	public UNION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.UNION, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXCEPT, 0); }
	public SETMINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SETMINUS, 0); }
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	constructor(ctx: QueryTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSetOperation) {
			listener.enterSetOperation(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSetOperation) {
			listener.exitSetOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSetOperation) {
			return visitor.visitSetOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryPrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_queryPrimary; }
	public copyFrom(ctx: QueryPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	public querySpecification(): QuerySpecificationContext {
		return this.getRuleContext(0, QuerySpecificationContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterQueryPrimaryDefault) {
			listener.enterQueryPrimaryDefault(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitQueryPrimaryDefault) {
			listener.exitQueryPrimaryDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitQueryPrimaryDefault) {
			return visitor.visitQueryPrimaryDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableContext extends QueryPrimaryContext {
	public TABLE(): TerminalNode { return this.getToken(sparkParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTable) {
			listener.enterTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTable) {
			listener.exitTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTable) {
			return visitor.visitTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineTableDefault1Context extends QueryPrimaryContext {
	public inlineTable(): InlineTableContext {
		return this.getRuleContext(0, InlineTableContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterInlineTableDefault1) {
			listener.enterInlineTableDefault1(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitInlineTableDefault1) {
			listener.exitInlineTableDefault1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitInlineTableDefault1) {
			return visitor.visitInlineTableDefault1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryContext extends QueryPrimaryContext {
	public queryNoWith(): QueryNoWithContext {
		return this.getRuleContext(0, QueryNoWithContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSubquery) {
			listener.enterSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSubquery) {
			listener.exitSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSubquery) {
			return visitor.visitSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortItemContext extends ParserRuleContext {
	public _ordering: Token;
	public _nullOrder: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NULLS, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DESC, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LAST, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FIRST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_sortItem; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSortItem) {
			listener.enterSortItem(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSortItem) {
			listener.exitSortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSortItem) {
			return visitor.visitSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuerySpecificationContext extends ParserRuleContext {
	public _kind: Token;
	public _inRowFormat: RowFormatContext;
	public _recordWriter: Token;
	public _script: Token;
	public _outRowFormat: RowFormatContext;
	public _recordReader: Token;
	public _where: BooleanExpressionContext;
	public _hint: HintContext;
	public _hints: HintContext[] = [];
	public _having: BooleanExpressionContext;
	public USING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.USING, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.STRING);
		} else {
			return this.getToken(sparkParser.STRING, i);
		}
	}
	public RECORDWRITER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RECORDWRITER, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	public RECORDREADER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RECORDREADER, 0); }
	public fromClause(): FromClauseContext | undefined {
		return this.tryGetRuleContext(0, FromClauseContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.WHERE, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SELECT, 0); }
	public namedExpressionSeq(): NamedExpressionSeqContext | undefined {
		return this.tryGetRuleContext(0, NamedExpressionSeqContext);
	}
	public rowFormat(): RowFormatContext[];
	public rowFormat(i: number): RowFormatContext;
	public rowFormat(i?: number): RowFormatContext | RowFormatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RowFormatContext);
		} else {
			return this.getRuleContext(i, RowFormatContext);
		}
	}
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRANSFORM, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MAP, 0); }
	public REDUCE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REDUCE, 0); }
	public identifierSeq(): IdentifierSeqContext | undefined {
		return this.tryGetRuleContext(0, IdentifierSeqContext);
	}
	public colTypeList(): ColTypeListContext | undefined {
		return this.tryGetRuleContext(0, ColTypeListContext);
	}
	public lateralView(): LateralViewContext[];
	public lateralView(i: number): LateralViewContext;
	public lateralView(i?: number): LateralViewContext | LateralViewContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LateralViewContext);
		} else {
			return this.getRuleContext(i, LateralViewContext);
		}
	}
	public aggregation(): AggregationContext | undefined {
		return this.tryGetRuleContext(0, AggregationContext);
	}
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.HAVING, 0); }
	public windows(): WindowsContext | undefined {
		return this.tryGetRuleContext(0, WindowsContext);
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public hint(): HintContext[];
	public hint(i: number): HintContext;
	public hint(i?: number): HintContext | HintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HintContext);
		} else {
			return this.getRuleContext(i, HintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_querySpecification; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterQuerySpecification) {
			listener.enterQuerySpecification(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitQuerySpecification) {
			listener.exitQuerySpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitQuerySpecification) {
			return visitor.visitQuerySpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	public _hintStatement: HintStatementContext;
	public _hintStatements: HintStatementContext[] = [];
	public hintStatement(): HintStatementContext[];
	public hintStatement(i: number): HintStatementContext;
	public hintStatement(i?: number): HintStatementContext | HintStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HintStatementContext);
		} else {
			return this.getRuleContext(i, HintStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_hint; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterHint) {
			listener.enterHint(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitHint) {
			listener.exitHint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitHint) {
			return visitor.visitHint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HintStatementContext extends ParserRuleContext {
	public _hintName: IdentifierContext;
	public _primaryExpression: PrimaryExpressionContext;
	public _parameters: PrimaryExpressionContext[] = [];
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public primaryExpression(): PrimaryExpressionContext[];
	public primaryExpression(i: number): PrimaryExpressionContext;
	public primaryExpression(i?: number): PrimaryExpressionContext | PrimaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryExpressionContext);
		} else {
			return this.getRuleContext(i, PrimaryExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_hintStatement; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterHintStatement) {
			listener.enterHintStatement(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitHintStatement) {
			listener.exitHintStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitHintStatement) {
			return visitor.visitHintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromClauseContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(sparkParser.FROM, 0); }
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public lateralView(): LateralViewContext[];
	public lateralView(i: number): LateralViewContext;
	public lateralView(i?: number): LateralViewContext | LateralViewContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LateralViewContext);
		} else {
			return this.getRuleContext(i, LateralViewContext);
		}
	}
	public pivotClause(): PivotClauseContext | undefined {
		return this.tryGetRuleContext(0, PivotClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_fromClause; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterFromClause) {
			listener.enterFromClause(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitFromClause) {
			listener.exitFromClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitFromClause) {
			return visitor.visitFromClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregationContext extends ParserRuleContext {
	public _expression: ExpressionContext;
	public _groupingExpressions: ExpressionContext[] = [];
	public _kind: Token;
	public GROUP(): TerminalNode { return this.getToken(sparkParser.GROUP, 0); }
	public BY(): TerminalNode { return this.getToken(sparkParser.BY, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.WITH, 0); }
	public SETS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SETS, 0); }
	public groupingSet(): GroupingSetContext[];
	public groupingSet(i: number): GroupingSetContext;
	public groupingSet(i?: number): GroupingSetContext | GroupingSetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingSetContext);
		} else {
			return this.getRuleContext(i, GroupingSetContext);
		}
	}
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROLLUP, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CUBE, 0); }
	public GROUPING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GROUPING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_aggregation; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterAggregation) {
			listener.enterAggregation(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitAggregation) {
			listener.exitAggregation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitAggregation) {
			return visitor.visitAggregation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_groupingSet; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterGroupingSet) {
			listener.enterGroupingSet(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitGroupingSet) {
			listener.exitGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitGroupingSet) {
			return visitor.visitGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PivotClauseContext extends ParserRuleContext {
	public _aggregates: NamedExpressionSeqContext;
	public _pivotValue: PivotValueContext;
	public _pivotValues: PivotValueContext[] = [];
	public PIVOT(): TerminalNode { return this.getToken(sparkParser.PIVOT, 0); }
	public FOR(): TerminalNode { return this.getToken(sparkParser.FOR, 0); }
	public pivotColumn(): PivotColumnContext {
		return this.getRuleContext(0, PivotColumnContext);
	}
	public IN(): TerminalNode { return this.getToken(sparkParser.IN, 0); }
	public namedExpressionSeq(): NamedExpressionSeqContext {
		return this.getRuleContext(0, NamedExpressionSeqContext);
	}
	public pivotValue(): PivotValueContext[];
	public pivotValue(i: number): PivotValueContext;
	public pivotValue(i?: number): PivotValueContext | PivotValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PivotValueContext);
		} else {
			return this.getRuleContext(i, PivotValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_pivotClause; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPivotClause) {
			listener.enterPivotClause(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPivotClause) {
			listener.exitPivotClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPivotClause) {
			return visitor.visitPivotClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PivotColumnContext extends ParserRuleContext {
	public _identifier: IdentifierContext;
	public _identifiers: IdentifierContext[] = [];
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_pivotColumn; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPivotColumn) {
			listener.enterPivotColumn(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPivotColumn) {
			listener.exitPivotColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPivotColumn) {
			return visitor.visitPivotColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PivotValueContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_pivotValue; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPivotValue) {
			listener.enterPivotValue(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPivotValue) {
			listener.exitPivotValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPivotValue) {
			return visitor.visitPivotValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LateralViewContext extends ParserRuleContext {
	public _tblName: IdentifierContext;
	public _identifier: IdentifierContext;
	public _colName: IdentifierContext[] = [];
	public LATERAL(): TerminalNode { return this.getToken(sparkParser.LATERAL, 0); }
	public VIEW(): TerminalNode { return this.getToken(sparkParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OUTER, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_lateralView; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterLateralView) {
			listener.enterLateralView(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitLateralView) {
			listener.exitLateralView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitLateralView) {
			return visitor.visitLateralView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DISTINCT, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_setQuantifier; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSetQuantifier) {
			listener.enterSetQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSetQuantifier) {
			listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	public relationPrimary(): RelationPrimaryContext {
		return this.getRuleContext(0, RelationPrimaryContext);
	}
	public joinRelation(): JoinRelationContext[];
	public joinRelation(i: number): JoinRelationContext;
	public joinRelation(i?: number): JoinRelationContext | JoinRelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinRelationContext);
		} else {
			return this.getRuleContext(i, JoinRelationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_relation; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterRelation) {
			listener.enterRelation(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitRelation) {
			listener.exitRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitRelation) {
			return visitor.visitRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinRelationContext extends ParserRuleContext {
	public _right: RelationPrimaryContext;
	public JOIN(): TerminalNode { return this.getToken(sparkParser.JOIN, 0); }
	public relationPrimary(): RelationPrimaryContext {
		return this.getRuleContext(0, RelationPrimaryContext);
	}
	public joinType(): JoinTypeContext | undefined {
		return this.tryGetRuleContext(0, JoinTypeContext);
	}
	public joinCriteria(): JoinCriteriaContext | undefined {
		return this.tryGetRuleContext(0, JoinCriteriaContext);
	}
	public NATURAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NATURAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_joinRelation; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterJoinRelation) {
			listener.enterJoinRelation(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitJoinRelation) {
			listener.exitJoinRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitJoinRelation) {
			return visitor.visitJoinRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinTypeContext extends ParserRuleContext {
	public INNER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INNER, 0); }
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CROSS, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LEFT, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OUTER, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SEMI, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RIGHT, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FULL, 0); }
	public ANTI(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ANTI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_joinType; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterJoinType) {
			listener.enterJoinType(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitJoinType) {
			listener.exitJoinType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitJoinType) {
			return visitor.visitJoinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinCriteriaContext extends ParserRuleContext {
	public ON(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.USING, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_joinCriteria; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterJoinCriteria) {
			listener.enterJoinCriteria(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitJoinCriteria) {
			listener.exitJoinCriteria(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitJoinCriteria) {
			return visitor.visitJoinCriteria(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampleContext extends ParserRuleContext {
	public TABLESAMPLE(): TerminalNode { return this.getToken(sparkParser.TABLESAMPLE, 0); }
	public sampleMethod(): SampleMethodContext | undefined {
		return this.tryGetRuleContext(0, SampleMethodContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_sample; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSample) {
			listener.enterSample(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSample) {
			listener.exitSample(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSample) {
			return visitor.visitSample(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampleMethodContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_sampleMethod; }
	public copyFrom(ctx: SampleMethodContext): void {
		super.copyFrom(ctx);
	}
}
export class SampleByPercentileContext extends SampleMethodContext {
	public _negativeSign: Token;
	public _percentage: Token;
	public PERCENTLIT(): TerminalNode { return this.getToken(sparkParser.PERCENTLIT, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INTEGER_VALUE, 0); }
	public DECIMAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DECIMAL_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	constructor(ctx: SampleMethodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSampleByPercentile) {
			listener.enterSampleByPercentile(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSampleByPercentile) {
			listener.exitSampleByPercentile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSampleByPercentile) {
			return visitor.visitSampleByPercentile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SampleByRowsContext extends SampleMethodContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ROWS(): TerminalNode { return this.getToken(sparkParser.ROWS, 0); }
	constructor(ctx: SampleMethodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSampleByRows) {
			listener.enterSampleByRows(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSampleByRows) {
			listener.exitSampleByRows(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSampleByRows) {
			return visitor.visitSampleByRows(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SampleByBucketContext extends SampleMethodContext {
	public _sampleType: Token;
	public _numerator: Token;
	public _denominator: Token;
	public OUT(): TerminalNode { return this.getToken(sparkParser.OUT, 0); }
	public OF(): TerminalNode { return this.getToken(sparkParser.OF, 0); }
	public BUCKET(): TerminalNode { return this.getToken(sparkParser.BUCKET, 0); }
	public INTEGER_VALUE(): TerminalNode[];
	public INTEGER_VALUE(i: number): TerminalNode;
	public INTEGER_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.INTEGER_VALUE);
		} else {
			return this.getToken(sparkParser.INTEGER_VALUE, i);
		}
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ON, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: SampleMethodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSampleByBucket) {
			listener.enterSampleByBucket(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSampleByBucket) {
			listener.exitSampleByBucket(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSampleByBucket) {
			return visitor.visitSampleByBucket(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SampleByBytesContext extends SampleMethodContext {
	public _bytes: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: SampleMethodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSampleByBytes) {
			listener.enterSampleByBytes(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSampleByBytes) {
			listener.exitSampleByBytes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSampleByBytes) {
			return visitor.visitSampleByBytes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifierSeq(): IdentifierSeqContext {
		return this.getRuleContext(0, IdentifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierSeqContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_identifierSeq; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterIdentifierSeq) {
			listener.enterIdentifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitIdentifierSeq) {
			listener.exitIdentifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitIdentifierSeq) {
			return visitor.visitIdentifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderedIdentifierListContext extends ParserRuleContext {
	public orderedIdentifier(): OrderedIdentifierContext[];
	public orderedIdentifier(i: number): OrderedIdentifierContext;
	public orderedIdentifier(i?: number): OrderedIdentifierContext | OrderedIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderedIdentifierContext);
		} else {
			return this.getRuleContext(i, OrderedIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_orderedIdentifierList; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterOrderedIdentifierList) {
			listener.enterOrderedIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitOrderedIdentifierList) {
			listener.exitOrderedIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitOrderedIdentifierList) {
			return visitor.visitOrderedIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderedIdentifierContext extends ParserRuleContext {
	public _ordering: Token;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASC(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_orderedIdentifier; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterOrderedIdentifier) {
			listener.enterOrderedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitOrderedIdentifier) {
			listener.exitOrderedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitOrderedIdentifier) {
			return visitor.visitOrderedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierCommentListContext extends ParserRuleContext {
	public identifierComment(): IdentifierCommentContext[];
	public identifierComment(i: number): IdentifierCommentContext;
	public identifierComment(i?: number): IdentifierCommentContext | IdentifierCommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierCommentContext);
		} else {
			return this.getRuleContext(i, IdentifierCommentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_identifierCommentList; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterIdentifierCommentList) {
			listener.enterIdentifierCommentList(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitIdentifierCommentList) {
			listener.exitIdentifierCommentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitIdentifierCommentList) {
			return visitor.visitIdentifierCommentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierCommentContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMMENT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_identifierComment; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterIdentifierComment) {
			listener.enterIdentifierComment(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitIdentifierComment) {
			listener.exitIdentifierComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitIdentifierComment) {
			return visitor.visitIdentifierComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationPrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_relationPrimary; }
	public copyFrom(ctx: RelationPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class TableNameContext extends RelationPrimaryContext {
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	public sample(): SampleContext | undefined {
		return this.tryGetRuleContext(0, SampleContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTableName) {
			listener.enterTableName(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTableName) {
			listener.exitTableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTableName) {
			return visitor.visitTableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AliasedQueryContext extends RelationPrimaryContext {
	public queryNoWith(): QueryNoWithContext {
		return this.getRuleContext(0, QueryNoWithContext);
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	public sample(): SampleContext | undefined {
		return this.tryGetRuleContext(0, SampleContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterAliasedQuery) {
			listener.enterAliasedQuery(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitAliasedQuery) {
			listener.exitAliasedQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitAliasedQuery) {
			return visitor.visitAliasedQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AliasedRelationContext extends RelationPrimaryContext {
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	public sample(): SampleContext | undefined {
		return this.tryGetRuleContext(0, SampleContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterAliasedRelation) {
			listener.enterAliasedRelation(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitAliasedRelation) {
			listener.exitAliasedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitAliasedRelation) {
			return visitor.visitAliasedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineTableDefault2Context extends RelationPrimaryContext {
	public inlineTable(): InlineTableContext {
		return this.getRuleContext(0, InlineTableContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterInlineTableDefault2) {
			listener.enterInlineTableDefault2(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitInlineTableDefault2) {
			listener.exitInlineTableDefault2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitInlineTableDefault2) {
			return visitor.visitInlineTableDefault2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableValuedFunctionContext extends RelationPrimaryContext {
	public functionTable(): FunctionTableContext {
		return this.getRuleContext(0, FunctionTableContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTableValuedFunction) {
			listener.enterTableValuedFunction(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTableValuedFunction) {
			listener.exitTableValuedFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTableValuedFunction) {
			return visitor.visitTableValuedFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineTableContext extends ParserRuleContext {
	public VALUES(): TerminalNode { return this.getToken(sparkParser.VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_inlineTable; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterInlineTable) {
			listener.enterInlineTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitInlineTable) {
			listener.exitInlineTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitInlineTable) {
			return visitor.visitInlineTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTableContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_functionTable; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterFunctionTable) {
			listener.enterFunctionTable(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitFunctionTable) {
			listener.exitFunctionTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitFunctionTable) {
			return visitor.visitFunctionTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableAliasContext extends ParserRuleContext {
	public strictIdentifier(): StrictIdentifierContext | undefined {
		return this.tryGetRuleContext(0, StrictIdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_tableAlias; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTableAlias) {
			listener.enterTableAlias(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTableAlias) {
			listener.exitTableAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTableAlias) {
			return visitor.visitTableAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowFormatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_rowFormat; }
	public copyFrom(ctx: RowFormatContext): void {
		super.copyFrom(ctx);
	}
}
export class RowFormatSerdeContext extends RowFormatContext {
	public _name: Token;
	public _props: TablePropertyListContext;
	public ROW(): TerminalNode { return this.getToken(sparkParser.ROW, 0); }
	public FORMAT(): TerminalNode { return this.getToken(sparkParser.FORMAT, 0); }
	public SERDE(): TerminalNode { return this.getToken(sparkParser.SERDE, 0); }
	public STRING(): TerminalNode { return this.getToken(sparkParser.STRING, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.WITH, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SERDEPROPERTIES, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(ctx: RowFormatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterRowFormatSerde) {
			listener.enterRowFormatSerde(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitRowFormatSerde) {
			listener.exitRowFormatSerde(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitRowFormatSerde) {
			return visitor.visitRowFormatSerde(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowFormatDelimitedContext extends RowFormatContext {
	public _fieldsTerminatedBy: Token;
	public _escapedBy: Token;
	public _collectionItemsTerminatedBy: Token;
	public _keysTerminatedBy: Token;
	public _linesSeparatedBy: Token;
	public _nullDefinedAs: Token;
	public ROW(): TerminalNode { return this.getToken(sparkParser.ROW, 0); }
	public FORMAT(): TerminalNode { return this.getToken(sparkParser.FORMAT, 0); }
	public DELIMITED(): TerminalNode { return this.getToken(sparkParser.DELIMITED, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FIELDS, 0); }
	public TERMINATED(): TerminalNode[];
	public TERMINATED(i: number): TerminalNode;
	public TERMINATED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.TERMINATED);
		} else {
			return this.getToken(sparkParser.TERMINATED, i);
		}
	}
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.BY);
		} else {
			return this.getToken(sparkParser.BY, i);
		}
	}
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COLLECTION, 0); }
	public ITEMS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ITEMS, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MAP, 0); }
	public KEYS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.KEYS, 0); }
	public LINES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LINES, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NULL, 0); }
	public DEFINED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DEFINED, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.STRING);
		} else {
			return this.getToken(sparkParser.STRING, i);
		}
	}
	public ESCAPED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ESCAPED, 0); }
	constructor(ctx: RowFormatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterRowFormatDelimited) {
			listener.enterRowFormatDelimited(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitRowFormatDelimited) {
			listener.exitRowFormatDelimited(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitRowFormatDelimited) {
			return visitor.visitRowFormatDelimited(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableIdentifierContext extends ParserRuleContext {
	public _db: IdentifierContext;
	public _table: IdentifierContext;
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_tableIdentifier; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTableIdentifier) {
			listener.enterTableIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTableIdentifier) {
			listener.exitTableIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTableIdentifier) {
			return visitor.visitTableIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionIdentifierContext extends ParserRuleContext {
	public _db: IdentifierContext;
	public _j_function: IdentifierContext;
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_functionIdentifier; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterFunctionIdentifier) {
			listener.enterFunctionIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitFunctionIdentifier) {
			listener.exitFunctionIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitFunctionIdentifier) {
			return visitor.visitFunctionIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_namedExpression; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterNamedExpression) {
			listener.enterNamedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitNamedExpression) {
			listener.exitNamedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitNamedExpression) {
			return visitor.visitNamedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedExpressionSeqContext extends ParserRuleContext {
	public namedExpression(): NamedExpressionContext[];
	public namedExpression(i: number): NamedExpressionContext;
	public namedExpression(i?: number): NamedExpressionContext | NamedExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedExpressionContext);
		} else {
			return this.getRuleContext(i, NamedExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_namedExpressionSeq; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterNamedExpressionSeq) {
			listener.enterNamedExpressionSeq(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitNamedExpressionSeq) {
			listener.exitNamedExpressionSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitNamedExpressionSeq) {
			return visitor.visitNamedExpressionSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_expression; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public NOT(): TerminalNode { return this.getToken(sparkParser.NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitLogicalNot) {
			listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends BooleanExpressionContext {
	public EXISTS(): TerminalNode { return this.getToken(sparkParser.EXISTS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitExists) {
			listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPredicated) {
			listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left: BooleanExpressionContext;
	public _operator: Token;
	public _right: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitLogicalBinary) {
			listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public _kind: Token;
	public _lower: ValueExpressionContext;
	public _upper: ValueExpressionContext;
	public _pattern: ValueExpressionContext;
	public _right: ValueExpressionContext;
	public AND(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AND, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.BETWEEN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IN, 0); }
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public RLIKE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RLIKE, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LIKE, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IS, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NULL, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FROM, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DISTINCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_predicate; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_valueExpression; }
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitValueExpressionDefault) {
			listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PLUS, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TILDE, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitArithmeticUnary) {
			listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left: ValueExpressionContext;
	public _operator: Token;
	public _right: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PERCENT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DIV, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	public CONCAT_PIPE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CONCAT_PIPE, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AMPERSAND, 0); }
	public HAT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.HAT, 0); }
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PIPE, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitArithmeticBinary) {
			listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonContext extends ValueExpressionContext {
	public _left: ValueExpressionContext;
	public _right: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(sparkParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(sparkParser.END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSearchedCase) {
			listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _value: ExpressionContext;
	public _elseExpression: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(sparkParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(sparkParser.END, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ELSE, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSimpleCase) {
			listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	public CAST(): TerminalNode { return this.getToken(sparkParser.CAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public AS(): TerminalNode { return this.getToken(sparkParser.AS, 0); }
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitCast) {
			listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructContext extends PrimaryExpressionContext {
	public _namedExpression: NamedExpressionContext;
	public _argument: NamedExpressionContext[] = [];
	public STRUCT(): TerminalNode { return this.getToken(sparkParser.STRUCT, 0); }
	public namedExpression(): NamedExpressionContext[];
	public namedExpression(i: number): NamedExpressionContext;
	public namedExpression(i?: number): NamedExpressionContext | NamedExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedExpressionContext);
		} else {
			return this.getRuleContext(i, NamedExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterStruct) {
			listener.enterStruct(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitStruct) {
			listener.exitStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitStruct) {
			return visitor.visitStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FirstContext extends PrimaryExpressionContext {
	public FIRST(): TerminalNode { return this.getToken(sparkParser.FIRST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IGNORE, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterFirst) {
			listener.enterFirst(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitFirst) {
			listener.exitFirst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitFirst) {
			return visitor.visitFirst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LastContext extends PrimaryExpressionContext {
	public LAST(): TerminalNode { return this.getToken(sparkParser.LAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IGNORE, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterLast) {
			listener.enterLast(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitLast) {
			listener.exitLast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitLast) {
			return visitor.visitLast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositionContext extends PrimaryExpressionContext {
	public _substr: ValueExpressionContext;
	public _str: ValueExpressionContext;
	public POSITION(): TerminalNode { return this.getToken(sparkParser.POSITION, 0); }
	public IN(): TerminalNode { return this.getToken(sparkParser.IN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterConstantDefault) {
			listener.enterConstantDefault(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitConstantDefault) {
			listener.exitConstantDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitConstantDefault) {
			return visitor.visitConstantDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StarContext extends PrimaryExpressionContext {
	public ASTERISK(): TerminalNode { return this.getToken(sparkParser.ASTERISK, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterStar) {
			listener.enterStar(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitStar) {
			listener.exitStar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitStar) {
			return visitor.visitStar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowConstructorContext extends PrimaryExpressionContext {
	public namedExpression(): NamedExpressionContext[];
	public namedExpression(i: number): NamedExpressionContext;
	public namedExpression(i?: number): NamedExpressionContext | NamedExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedExpressionContext);
		} else {
			return this.getRuleContext(i, NamedExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterRowConstructor) {
			listener.enterRowConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitRowConstructor) {
			listener.exitRowConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitRowConstructor) {
			return visitor.visitRowConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSubqueryExpression) {
			listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	public _expression: ExpressionContext;
	public _argument: ExpressionContext[] = [];
	public _trimOption: Token;
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public OVER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OVER, 0); }
	public windowSpec(): WindowSpecContext | undefined {
		return this.tryGetRuleContext(0, WindowSpecContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FROM, 0); }
	public BOTH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.BOTH, 0); }
	public LEADING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LEADING, 0); }
	public TRAILING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRAILING, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaContext extends PrimaryExpressionContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.IDENTIFIER);
		} else {
			return this.getToken(sparkParser.IDENTIFIER, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value: PrimaryExpressionContext;
	public _index: ValueExpressionContext;
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitColumnReference) {
			listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public _base: PrimaryExpressionContext;
	public _fieldName: IdentifierContext;
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDereference) {
			listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExtractContext extends PrimaryExpressionContext {
	public _field: IdentifierContext;
	public _source: ValueExpressionContext;
	public EXTRACT(): TerminalNode { return this.getToken(sparkParser.EXTRACT, 0); }
	public FROM(): TerminalNode { return this.getToken(sparkParser.FROM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterExtract) {
			listener.enterExtract(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitExtract) {
			listener.exitExtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitExtract) {
			return visitor.visitExtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_constant; }
	public copyFrom(ctx: ConstantContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends ConstantContext {
	public NULL(): TerminalNode { return this.getToken(sparkParser.NULL, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalLiteralContext extends ConstantContext {
	public interval(): IntervalContext {
		return this.getRuleContext(0, IntervalContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterIntervalLiteral) {
			listener.enterIntervalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitIntervalLiteral) {
			listener.exitIntervalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitIntervalLiteral) {
			return visitor.visitIntervalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstructorContext extends ConstantContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode { return this.getToken(sparkParser.STRING, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTypeConstructor) {
			listener.enterTypeConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTypeConstructor) {
			listener.exitTypeConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTypeConstructor) {
			return visitor.visitTypeConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends ConstantContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends ConstantContext {
	public booleanValue(): BooleanValueContext {
		return this.getRuleContext(0, BooleanValueContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends ConstantContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.STRING);
		} else {
			return this.getToken(sparkParser.STRING, i);
		}
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NEQ, 0); }
	public NEQJ(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NEQJ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GTE, 0); }
	public NSEQ(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NSEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticOperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PERCENT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DIV, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TILDE, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AMPERSAND, 0); }
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PIPE, 0); }
	public CONCAT_PIPE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CONCAT_PIPE, 0); }
	public HAT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.HAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_arithmeticOperator; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterArithmeticOperator) {
			listener.enterArithmeticOperator(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitArithmeticOperator) {
			listener.exitArithmeticOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitArithmeticOperator) {
			return visitor.visitArithmeticOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateOperatorContext extends ParserRuleContext {
	public OR(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AND, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_predicateOperator; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPredicateOperator) {
			listener.enterPredicateOperator(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPredicateOperator) {
			listener.exitPredicateOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPredicateOperator) {
			return visitor.visitPredicateOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalContext extends ParserRuleContext {
	public INTERVAL(): TerminalNode { return this.getToken(sparkParser.INTERVAL, 0); }
	public intervalField(): IntervalFieldContext[];
	public intervalField(i: number): IntervalFieldContext;
	public intervalField(i?: number): IntervalFieldContext | IntervalFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalFieldContext);
		} else {
			return this.getRuleContext(i, IntervalFieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_interval; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterInterval) {
			listener.enterInterval(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitInterval) {
			listener.exitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalFieldContext extends ParserRuleContext {
	public _value: IntervalValueContext;
	public _unit: IdentifierContext;
	public _to: IdentifierContext;
	public intervalValue(): IntervalValueContext {
		return this.getRuleContext(0, IntervalValueContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_intervalField; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterIntervalField) {
			listener.enterIntervalField(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitIntervalField) {
			listener.exitIntervalField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitIntervalField) {
			return visitor.visitIntervalField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalValueContext extends ParserRuleContext {
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INTEGER_VALUE, 0); }
	public DECIMAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DECIMAL_VALUE, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_intervalValue; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterIntervalValue) {
			listener.enterIntervalValue(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitIntervalValue) {
			listener.exitIntervalValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitIntervalValue) {
			return visitor.visitIntervalValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColPositionContext extends ParserRuleContext {
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FIRST, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AFTER, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_colPosition; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterColPosition) {
			listener.enterColPosition(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitColPosition) {
			listener.exitColPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitColPosition) {
			return visitor.visitColPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_dataType; }
	public copyFrom(ctx: DataTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ComplexDataTypeContext extends DataTypeContext {
	public _complex: Token;
	public LT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LT, 0); }
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GT, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ARRAY, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MAP, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRUCT, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NEQ, 0); }
	public complexColTypeList(): ComplexColTypeListContext | undefined {
		return this.tryGetRuleContext(0, ComplexColTypeListContext);
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterComplexDataType) {
			listener.enterComplexDataType(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitComplexDataType) {
			listener.exitComplexDataType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitComplexDataType) {
			return visitor.visitComplexDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimitiveDataTypeContext extends DataTypeContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public INTEGER_VALUE(): TerminalNode[];
	public INTEGER_VALUE(i: number): TerminalNode;
	public INTEGER_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.INTEGER_VALUE);
		} else {
			return this.getToken(sparkParser.INTEGER_VALUE, i);
		}
	}
	constructor(ctx: DataTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterPrimitiveDataType) {
			listener.enterPrimitiveDataType(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitPrimitiveDataType) {
			listener.exitPrimitiveDataType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitPrimitiveDataType) {
			return visitor.visitPrimitiveDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColTypeListContext extends ParserRuleContext {
	public colType(): ColTypeContext[];
	public colType(i: number): ColTypeContext;
	public colType(i?: number): ColTypeContext | ColTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColTypeContext);
		} else {
			return this.getRuleContext(i, ColTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_colTypeList; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterColTypeList) {
			listener.enterColTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitColTypeList) {
			listener.exitColTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitColTypeList) {
			return visitor.visitColTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMMENT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_colType; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterColType) {
			listener.enterColType(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitColType) {
			listener.exitColType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitColType) {
			return visitor.visitColType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplexColTypeListContext extends ParserRuleContext {
	public complexColType(): ComplexColTypeContext[];
	public complexColType(i: number): ComplexColTypeContext;
	public complexColType(i?: number): ComplexColTypeContext | ComplexColTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComplexColTypeContext);
		} else {
			return this.getRuleContext(i, ComplexColTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_complexColTypeList; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterComplexColTypeList) {
			listener.enterComplexColTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitComplexColTypeList) {
			listener.exitComplexColTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitComplexColTypeList) {
			return visitor.visitComplexColTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplexColTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMMENT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_complexColType; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterComplexColType) {
			listener.enterComplexColType(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitComplexColType) {
			listener.exitComplexColType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitComplexColType) {
			return visitor.visitComplexColType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public _condition: ExpressionContext;
	public _result: ExpressionContext;
	public WHEN(): TerminalNode { return this.getToken(sparkParser.WHEN, 0); }
	public THEN(): TerminalNode { return this.getToken(sparkParser.THEN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitWhenClause) {
			listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowsContext extends ParserRuleContext {
	public WINDOW(): TerminalNode { return this.getToken(sparkParser.WINDOW, 0); }
	public namedWindow(): NamedWindowContext[];
	public namedWindow(i: number): NamedWindowContext;
	public namedWindow(i?: number): NamedWindowContext | NamedWindowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedWindowContext);
		} else {
			return this.getRuleContext(i, NamedWindowContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_windows; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterWindows) {
			listener.enterWindows(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitWindows) {
			listener.exitWindows(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitWindows) {
			return visitor.visitWindows(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedWindowContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode { return this.getToken(sparkParser.AS, 0); }
	public windowSpec(): WindowSpecContext {
		return this.getRuleContext(0, WindowSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_namedWindow; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterNamedWindow) {
			listener.enterNamedWindow(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitNamedWindow) {
			listener.exitNamedWindow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitNamedWindow) {
			return visitor.visitNamedWindow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowSpecContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_windowSpec; }
	public copyFrom(ctx: WindowSpecContext): void {
		super.copyFrom(ctx);
	}
}
export class WindowRefContext extends WindowSpecContext {
	public _name: IdentifierContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: WindowSpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterWindowRef) {
			listener.enterWindowRef(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitWindowRef) {
			listener.exitWindowRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitWindowRef) {
			return visitor.visitWindowRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WindowDefContext extends WindowSpecContext {
	public _expression: ExpressionContext;
	public _partition: ExpressionContext[] = [];
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CLUSTER, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sparkParser.BY);
		} else {
			return this.getToken(sparkParser.BY, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public windowFrame(): WindowFrameContext | undefined {
		return this.tryGetRuleContext(0, WindowFrameContext);
	}
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PARTITION, 0); }
	public DISTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DISTRIBUTE, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ORDER, 0); }
	public SORT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SORT, 0); }
	constructor(ctx: WindowSpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterWindowDef) {
			listener.enterWindowDef(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitWindowDef) {
			listener.exitWindowDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitWindowDef) {
			return visitor.visitWindowDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	public _frameType: Token;
	public _start: FrameBoundContext;
	public _end: FrameBoundContext;
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RANGE, 0); }
	public frameBound(): FrameBoundContext[];
	public frameBound(i: number): FrameBoundContext;
	public frameBound(i?: number): FrameBoundContext | FrameBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FrameBoundContext);
		} else {
			return this.getRuleContext(i, FrameBoundContext);
		}
	}
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROWS, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.BETWEEN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_windowFrame; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterWindowFrame) {
			listener.enterWindowFrame(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitWindowFrame) {
			listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	public _boundType: Token;
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.UNBOUNDED, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PRECEDING, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FOLLOWING, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROW, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CURRENT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_frameBound; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterFrameBound) {
			listener.enterFrameBound(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitFrameBound) {
			listener.exitFrameBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitFrameBound) {
			return visitor.visitFrameBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public strictIdentifier(): StrictIdentifierContext | undefined {
		return this.tryGetRuleContext(0, StrictIdentifierContext);
	}
	public ANTI(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ANTI, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FULL, 0); }
	public INNER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INNER, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LEFT, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SEMI, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RIGHT, 0); }
	public NATURAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NATURAL, 0); }
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.JOIN, 0); }
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CROSS, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ON, 0); }
	public UNION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.UNION, 0); }
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INTERSECT, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXCEPT, 0); }
	public SETMINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SETMINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_identifier; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrictIdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_strictIdentifier; }
	public copyFrom(ctx: StrictIdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierContext extends StrictIdentifierContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IDENTIFIER, 0); }
	public nonReserved(): NonReservedContext | undefined {
		return this.tryGetRuleContext(0, NonReservedContext);
	}
	constructor(ctx: StrictIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitUnquotedIdentifier) {
			listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierAlternativeContext extends StrictIdentifierContext {
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getRuleContext(0, QuotedIdentifierContext);
	}
	constructor(ctx: StrictIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterQuotedIdentifierAlternative) {
			listener.enterQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitQuotedIdentifierAlternative) {
			listener.exitQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifierAlternative) {
			return visitor.visitQuotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuotedIdentifierContext extends ParserRuleContext {
	public BACKQUOTED_IDENTIFIER(): TerminalNode { return this.getToken(sparkParser.BACKQUOTED_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_quotedIdentifier; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitQuotedIdentifier) {
			listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_VALUE(): TerminalNode { return this.getToken(sparkParser.DECIMAL_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	public INTEGER_VALUE(): TerminalNode { return this.getToken(sparkParser.INTEGER_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BigIntLiteralContext extends NumberContext {
	public BIGINT_LITERAL(): TerminalNode { return this.getToken(sparkParser.BIGINT_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterBigIntLiteral) {
			listener.enterBigIntLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitBigIntLiteral) {
			listener.exitBigIntLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitBigIntLiteral) {
			return visitor.visitBigIntLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SmallIntLiteralContext extends NumberContext {
	public SMALLINT_LITERAL(): TerminalNode { return this.getToken(sparkParser.SMALLINT_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterSmallIntLiteral) {
			listener.enterSmallIntLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitSmallIntLiteral) {
			listener.exitSmallIntLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitSmallIntLiteral) {
			return visitor.visitSmallIntLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TinyIntLiteralContext extends NumberContext {
	public TINYINT_LITERAL(): TerminalNode { return this.getToken(sparkParser.TINYINT_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterTinyIntLiteral) {
			listener.enterTinyIntLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitTinyIntLiteral) {
			listener.exitTinyIntLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitTinyIntLiteral) {
			return visitor.visitTinyIntLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleLiteralContext extends NumberContext {
	public DOUBLE_LITERAL(): TerminalNode { return this.getToken(sparkParser.DOUBLE_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterDoubleLiteral) {
			listener.enterDoubleLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitDoubleLiteral) {
			listener.exitDoubleLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitDoubleLiteral) {
			return visitor.visitDoubleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BigDecimalLiteralContext extends NumberContext {
	public BIGDECIMAL_LITERAL(): TerminalNode { return this.getToken(sparkParser.BIGDECIMAL_LITERAL, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterBigDecimalLiteral) {
			listener.enterBigDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitBigDecimalLiteral) {
			listener.exitBigDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitBigDecimalLiteral) {
			return visitor.visitBigDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedContext extends ParserRuleContext {
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SHOW, 0); }
	public TABLES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLES, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COLUMNS, 0); }
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COLUMN, 0); }
	public PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PARTITIONS, 0); }
	public FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FUNCTIONS, 0); }
	public DATABASES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DATABASES, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ADD, 0); }
	public OVER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OVER, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PARTITION, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RANGE, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROWS, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PRECEDING, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FOLLOWING, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CURRENT, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROW, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LAST, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FIRST, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AFTER, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MAP, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ARRAY, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRUCT, 0); }
	public PIVOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PIVOT, 0); }
	public LATERAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LATERAL, 0); }
	public WINDOW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.WINDOW, 0); }
	public REDUCE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REDUCE, 0); }
	public TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRANSFORM, 0); }
	public SERDE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SERDE, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SERDEPROPERTIES, 0); }
	public RECORDREADER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RECORDREADER, 0); }
	public DELIMITED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DELIMITED, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FIELDS, 0); }
	public TERMINATED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TERMINATED, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COLLECTION, 0); }
	public ITEMS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ITEMS, 0); }
	public KEYS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.KEYS, 0); }
	public ESCAPED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ESCAPED, 0); }
	public LINES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LINES, 0); }
	public SEPARATED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SEPARATED, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXTENDED, 0); }
	public REFRESH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REFRESH, 0); }
	public CLEAR(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CLEAR, 0); }
	public CACHE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CACHE, 0); }
	public UNCACHE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.UNCACHE, 0); }
	public LAZY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LAZY, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GLOBAL, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TEMPORARY, 0); }
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OPTIONS, 0); }
	public GROUPING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GROUPING, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CUBE, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROLLUP, 0); }
	public EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXPLAIN, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FORMAT, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOGICAL, 0); }
	public FORMATTED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FORMATTED, 0); }
	public CODEGEN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CODEGEN, 0); }
	public COST(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COST, 0); }
	public TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLESAMPLE, 0); }
	public USE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.USE, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TO, 0); }
	public BUCKET(): TerminalNode | undefined { return this.tryGetToken(sparkParser.BUCKET, 0); }
	public PERCENTLIT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PERCENTLIT, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OUT, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OF, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SET, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RESET, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(sparkParser.VIEW, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REPLACE, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IF, 0); }
	public POSITION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.POSITION, 0); }
	public EXTRACT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXTRACT, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NO, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DATA, 0); }
	public START(): TerminalNode | undefined { return this.tryGetToken(sparkParser.START, 0); }
	public TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRANSACTION, 0); }
	public COMMIT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMMIT, 0); }
	public ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROLLBACK, 0); }
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IGNORE, 0); }
	public SORT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SORT, 0); }
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CLUSTER, 0); }
	public DISTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DISTRIBUTE, 0); }
	public UNSET(): TerminalNode | undefined { return this.tryGetToken(sparkParser.UNSET, 0); }
	public TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TBLPROPERTIES, 0); }
	public SKEWED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SKEWED, 0); }
	public STORED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STORED, 0); }
	public DIRECTORIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DIRECTORIES, 0); }
	public LOCATION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOCATION, 0); }
	public EXCHANGE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXCHANGE, 0); }
	public ARCHIVE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ARCHIVE, 0); }
	public UNARCHIVE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.UNARCHIVE, 0); }
	public FILEFORMAT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FILEFORMAT, 0); }
	public TOUCH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TOUCH, 0); }
	public COMPACT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMPACT, 0); }
	public CONCATENATE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CONCATENATE, 0); }
	public CHANGE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CHANGE, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CASCADE, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RESTRICT, 0); }
	public BUCKETS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.BUCKETS, 0); }
	public CLUSTERED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CLUSTERED, 0); }
	public SORTED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SORTED, 0); }
	public PURGE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PURGE, 0); }
	public INPUTFORMAT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INPUTFORMAT, 0); }
	public OUTPUTFORMAT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OUTPUTFORMAT, 0); }
	public DBPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DBPROPERTIES, 0); }
	public DFS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DFS, 0); }
	public TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRUNCATE, 0); }
	public COMPUTE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMPUTE, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LIST, 0); }
	public STATISTICS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STATISTICS, 0); }
	public ANALYZE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ANALYZE, 0); }
	public PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PARTITIONED, 0); }
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXTERNAL, 0); }
	public DEFINED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DEFINED, 0); }
	public RECORDWRITER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RECORDWRITER, 0); }
	public REVOKE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REVOKE, 0); }
	public GRANT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GRANT, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOCK, 0); }
	public UNLOCK(): TerminalNode | undefined { return this.tryGetToken(sparkParser.UNLOCK, 0); }
	public MSCK(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MSCK, 0); }
	public REPAIR(): TerminalNode | undefined { return this.tryGetToken(sparkParser.REPAIR, 0); }
	public RECOVER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RECOVER, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXPORT, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IMPORT, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOAD, 0); }
	public VALUES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.VALUES, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMMENT, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROLE, 0); }
	public ROLES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ROLES, 0); }
	public COMPACTIONS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.COMPACTIONS, 0); }
	public PRINCIPALS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.PRINCIPALS, 0); }
	public TRANSACTIONS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRANSACTIONS, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INDEX, 0); }
	public INDEXES(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INDEXES, 0); }
	public LOCKS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOCKS, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OPTION, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LOCAL, 0); }
	public INPATH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INPATH, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DESC, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LIMIT, 0); }
	public RENAME(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RENAME, 0); }
	public SETS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SETS, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AT, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NULLS, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OVERWRITE, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ALL, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ANY, 0); }
	public ALTER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ALTER, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AS, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.BETWEEN, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.BY, 0); }
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CREATE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DELETE, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DESCRIBE, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DROP, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.EXISTS, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FALSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FOR, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(sparkParser.GROUP, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IN, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INSERT, 0); }
	public INTO(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INTO, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(sparkParser.IS, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LIKE, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NULL, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ORDER, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OUTER, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TABLE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRUE, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.WITH, 0); }
	public RLIKE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.RLIKE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(sparkParser.AND, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CASE, 0); }
	public CAST(): TerminalNode | undefined { return this.tryGetToken(sparkParser.CAST, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DISTINCT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DIV, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.ELSE, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(sparkParser.END, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FUNCTION, 0); }
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(sparkParser.INTERVAL, 0); }
	public MACRO(): TerminalNode | undefined { return this.tryGetToken(sparkParser.MACRO, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(sparkParser.OR, 0); }
	public STRATIFY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.STRATIFY, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.THEN, 0); }
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(sparkParser.UNBOUNDED, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(sparkParser.WHEN, 0); }
	public DATABASE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DATABASE, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.SELECT, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(sparkParser.FROM, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(sparkParser.WHERE, 0); }
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.HAVING, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(sparkParser.NOT, 0); }
	public DIRECTORY(): TerminalNode | undefined { return this.tryGetToken(sparkParser.DIRECTORY, 0); }
	public BOTH(): TerminalNode | undefined { return this.tryGetToken(sparkParser.BOTH, 0); }
	public LEADING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.LEADING, 0); }
	public TRAILING(): TerminalNode | undefined { return this.tryGetToken(sparkParser.TRAILING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sparkParser.RULE_nonReserved; }
	// @Override
	public enterRule(listener: sparkListener): void {
		if (listener.enterNonReserved) {
			listener.enterNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: sparkListener): void {
		if (listener.exitNonReserved) {
			listener.exitNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sparkVisitor<Result>): Result {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


