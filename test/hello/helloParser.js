// Generated from ./grammar/hello/hello.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var helloListener = require('./helloListener').helloListener;
var helloVisitor = require('./helloVisitor').helloVisitor;

var grammarFileName = "hello.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u01438\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0015",
    "\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u001b\n\u0003\u0003\u0003\u0005\u0003\u001e\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005-\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u00062\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0002\u0002\t\u0002",
    "\u0004\u0006\b\n\f\u000e\u0002\u0004\u0003\u0002\u008e\u008f\u0003\u0002",
    "\u008d\u0140\u0002?\u0002\u0010\u0003\u0002\u0002\u0002\u0004\u0016",
    "\u0003\u0002\u0002\u0002\u0006\u001f\u0003\u0002\u0002\u0002\b,\u0003",
    "\u0002\u0002\u0002\n1\u0003\u0002\u0002\u0002\f3\u0003\u0002\u0002\u0002",
    "\u000e5\u0003\u0002\u0002\u0002\u0010\u0011\u0007\u008d\u0002\u0002",
    "\u0011\u0014\t\u0002\u0002\u0002\u0012\u0013\u0007C\u0002\u0002\u0013",
    "\u0015\u0007\u0140\u0002\u0002\u0014\u0012\u0003\u0002\u0002\u0002\u0014",
    "\u0015\u0003\u0002\u0002\u0002\u0015\u0003\u0003\u0002\u0002\u0002\u0016",
    "\u0017\u0007\u008d\u0002\u0002\u0017\u001a\u0007\u0090\u0002\u0002\u0018",
    "\u0019\u00077\u0002\u0002\u0019\u001b\u0005\u0006\u0004\u0002\u001a",
    "\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b",
    "\u001d\u0003\u0002\u0002\u0002\u001c\u001e\u0007\u0140\u0002\u0002\u001d",
    "\u001c\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e",
    "\u0005\u0003\u0002\u0002\u0002\u001f \u0005\b\u0005\u0002 \u0007\u0003",
    "\u0002\u0002\u0002!-\u0005\n\u0006\u0002\"-\u0007/\u0002\u0002#-\u0007",
    "8\u0002\u0002$-\u0007A\u0002\u0002%-\u0007\u00fc\u0002\u0002&-\u0007",
    "\\\u0002\u0002\'-\u0007?\u0002\u0002(-\u0007\u0015\u0002\u0002)-\u0007",
    "L\u0002\u0002*-\u0007m\u0002\u0002+-\u0007;\u0002\u0002,!\u0003\u0002",
    "\u0002\u0002,\"\u0003\u0002\u0002\u0002,#\u0003\u0002\u0002\u0002,$",
    "\u0003\u0002\u0002\u0002,%\u0003\u0002\u0002\u0002,&\u0003\u0002\u0002",
    "\u0002,\'\u0003\u0002\u0002\u0002,(\u0003\u0002\u0002\u0002,)\u0003",
    "\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002",
    "-\t\u0003\u0002\u0002\u0002.2\u0007\u0141\u0002\u0002/2\u0005\f\u0007",
    "\u000202\u0005\u000e\b\u00021.\u0003\u0002\u0002\u00021/\u0003\u0002",
    "\u0002\u000210\u0003\u0002\u0002\u00022\u000b\u0003\u0002\u0002\u0002",
    "34\u0007\u0142\u0002\u00024\r\u0003\u0002\u0002\u000256\t\u0003\u0002",
    "\u00026\u000f\u0003\u0002\u0002\u0002\u0007\u0014\u001a\u001d,1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'ALL'", "'ALTER'", "'AND'", "'ARRAY'", "'AS'", 
                     "'AUTHORIZATION'", "'BETWEEN'", "'BIGINT'", "'BINARY'", 
                     "'BOOLEAN'", "'BOTH'", "'BY'", "'CASE'", "'CAST'", 
                     "'CHAR'", "'COLUMN'", "'CONF'", "'CREATE'", "'CROSS'", 
                     "'CUBE'", "'CURRENT'", "'CURRENT_DATE'", "'CURRENT_TIMESTAMP'", 
                     "'CURSOR'", "'DATABASE'", "'DATE'", "'DECIMAL'", "'DELETE'", 
                     "'DESCRIBE'", "'DISTINCT'", "'DOUBLE'", "'DROP'", "'ELSE'", 
                     "'END'", "'EXCHANGE'", "'EXISTS'", "'EXTENDED'", "'EXTERNAL'", 
                     "'FALSE'", "'FETCH'", "'FLOAT'", "'FOLLOWING'", "'FOR'", 
                     "'FROM'", "'FULL'", "'FUNCTION'", "'GRANT'", "'GROUP'", 
                     "'GROUPING'", "'HAVING'", "'IF'", "'IMPORT'", "'IN'", 
                     "'INNER'", "'INSERT'", "'INT'", "'INTERSECT'", "'INTERVAL'", 
                     "'INTO'", "'IS'", "'JOIN'", "'LATERAL'", "'LEFT'", 
                     "'LESS'", "'LIKE'", "'LOCAL'", "'MACRO'", "'MAP'", 
                     "'MORE'", "'NONE'", "'NOT'", "'NULL'", "'OF'", "'ON'", 
                     "'OR'", "'ORDER'", "'OUT'", "'OUTER'", "'OVER'", "'PARTIALSCAN'", 
                     "'PARTITION'", "'PERCENT'", "'PRECEDING'", "'PRESERVE'", 
                     "'PROCEDURE'", "'RANGE'", "'READS'", "'REDUCE'", "'REVOKE'", 
                     "'RIGHT'", "'ROLLUP'", "'ROW'", "'ROWS'", "'SELECT'", 
                     "'SET'", "'SMALLINT'", "'TABLE'", "'TABLESAMPLE'", 
                     "'THEN'", "'TIMESTAMP'", "'TO'", "'TRANSFORM'", "'TRIGGER'", 
                     "'TRUE'", "'TRUNCATE'", "'UNBOUNDED'", "'UNION'", "'UNIQUEJOIN'", 
                     "'UPDATE'", "'USER'", "'USING'", "'UTC_TMESTAMP'", 
                     "'VALUES'", "'VARCHAR'", "'WHEN'", "'WHERE'", "'WINDOW'", 
                     "'WITH'", "'COMMIT'", "'ONLY'", "'REGEXP'", "'RLIKE'", 
                     "'ROLLBACK'", "'START'", "'CACHE'", "'CONSTRAINT'", 
                     "'FOREIGN'", "'PRIMARY'", "'REFERENCES'", "'DAYOFWEEK'", 
                     "'EXTRACT'", "'FLOOR'", "'INTEGER'", "'PRECISION'", 
                     "'VIEWS'", "'TIME'", "'NUMERIC'", "'SYNC'", "'SHOW'", 
                     "'DATABASES'", "'SCHEMAS'", "'TABLES'", "'ADD'", "'ADMIN'", 
                     "'AFTER'", "'ANALYZE'", "'ARCHIVE'", "'ASC'", "'BEFORE'", 
                     "'BUCKET'", "'BUCKETS'", "'CASCADE'", "'CHANGE'", "'CLUSTER'", 
                     "'CLUSTERED'", "'CLUSTERSTATUS'", "'COLLECTION'", "'COLUMNS'", 
                     "'COMMENT'", "'COMPACT'", "'COMPACTIONS'", "'COMPUTE'", 
                     "'CONCATENATE'", "'CONTINUE'", "'DATA'", "'DATETIME'", 
                     "'DAY'", "'DBPROPERTIES'", "'DEFERRED'", "'DEFINED'", 
                     "'DELIMITED'", "'DEPENDENCY'", "'DESC'", "'DIRECTORIES'", 
                     "'DIRECTORY'", "'DISABLE'", "'DISTRIBUTE'", "'ELEM_TYPE'", 
                     "'ENABLE'", "'ESCAPED'", "'EXCLUSIVE'", "'EXPLAIN'", 
                     "'EXPORT'", "'FIELDS'", "'FILE'", "'FILEFORMAT'", "'FIRST'", 
                     "'FORMAT'", "'FORMATTED'", "'FUNCTIONS'", "'HOLD_DDLTIME'", 
                     "'HOUR'", "'IDXPROPERTIES'", "'IGNORE'", "'INDEX'", 
                     "'INDEXES'", "'INPATH'", "'INPUTDRIVER'", "'INPUTFORMAT'", 
                     "'ITEMS'", "'JAR'", "'KEYS'", "'KEY_TYPE'", "'LIMIT'", 
                     "'LINES'", "'LOAD'", "'LOCATION'", "'LOCK'", "'LOCKS'", 
                     "'LOGICAL'", "'LONG'", "'MAPJOIN'", "'MATERIALIZED'", 
                     "'METADATA'", "'MINUS'", "'MINUTE'", "'MONTH'", "'MSCK'", 
                     "'NOSCAN'", "'NO_DROP'", "'OFFLINE'", "'OPTION'", "'OUTPUTDRIVER'", 
                     "'OUTPUTFORMAT'", "'OVERWRITE'", "'OWNER'", "'PARTITIONED'", 
                     "'PARTITIONS'", "'PLUS'", "'PRETTY'", "'PRINCIPALS'", 
                     "'PROTECTION'", "'PURGE'", "'READ'", "'READONLY'", 
                     "'REBUILD'", "'RECORDREADER'", "'RECORDWRITER'", "'RELOAD'", 
                     "'RENAME'", "'REPAIR'", "'REPLACE'", "'REPLICATION'", 
                     "'RESTRICT'", "'REWRITE'", "'ROLE'", "'ROLES'", "'SCHEMA'", 
                     "'SECOND'", "'SEMI'", "'SERDE'", "'SERDEPROPERTIES'", 
                     "'SERVER'", "'SETS'", "'SHARED'", "'SHOW_DATABASE'", 
                     "'SKEWED'", "'SORT'", "'SORTED'", "'SSL'", "'STATISTICS'", 
                     "'STORED'", "'STREAMTABLE'", "'STRUCT'", "'TBLPROPERTIES'", 
                     "'TEMPORARY'", "'TERMINATED'", "'TINYINT'", "'TOUCH'", 
                     "'TRANSACTIONS'", "'UNARCHIVE'", "'UNDO'", "'UNIONTYPE'", 
                     "'UNLOCK'", "'UNSET'", "'UNSIGNED'", "'URI'", "'USE'", 
                     "'UTC'", "'UTCTIMESTAMP'", "'VALUE_TYPE'", "'VIEW'", 
                     "'WHILE'", "'YEAR'", "'AUTOCOMMIT'", "'ISOLATION'", 
                     "'LEVEL'", "'OFFSET'", "'SNAPSHOT'", "'TRANSACTION'", 
                     "'WORK'", "'WRITE'", "'ABORT'", "'KEY'", "'LAST'", 
                     "'NORELY'", "'NOVALIDATE'", "'NULLS'", "'RELY'", "'VALIDATE'", 
                     "'DETAIL'", "'DOW'", "'EXPRESSION'", "'OPERATOR'", 
                     "'QUARTER'", "'SUMMARY'", "'VECTORIZATION'", "'WEEK'", 
                     "'YEARS'", "'MONTHS'", "'WEEKS'", "'DAYS'", "'HOURS'", 
                     "'MINUTES'", "'SECONDS'", "'TIMESTAMPTZ'", "'ZONE'" ];

var symbolicNames = [ null, "ALL", "ALTER", "AND", "ARRAY", "AS", "AUTHORIZATION", 
                      "BETWEEN", "BIGINT", "BINARY", "BOOLEAN", "BOTH", 
                      "BY", "CASE", "CAST", "CHAR", "COLUMN", "CONF", "CREATE", 
                      "CROSS", "CUBE", "CURRENT", "CURRENT_DATE", "CURRENT_TIMESTAMP", 
                      "CURSOR", "DATABASE", "DATE", "DECIMAL", "DELETE", 
                      "DESCRIBE", "DISTINCT", "DOUBLE", "DROP", "ELSE", 
                      "END", "EXCHANGE", "EXISTS", "EXTENDED", "EXTERNAL", 
                      "FALSE", "FETCH", "FLOAT", "FOLLOWING", "FOR", "FROM", 
                      "FULL", "FUNCTION", "GRANT", "GROUP", "GROUPING", 
                      "HAVING", "IF", "IMPORT", "IN", "INNER", "INSERT", 
                      "INT", "INTERSECT", "INTERVAL", "INTO", "IS", "JOIN", 
                      "LATERAL", "LEFT", "LESS", "LIKE", "LOCAL", "MACRO", 
                      "MAP", "MORE1", "NONE", "NOT", "NULL", "OF", "ON", 
                      "OR", "ORDER", "OUT", "OUTER", "OVER", "PARTIALSCAN", 
                      "PARTITION", "PERCENT", "PRECEDING", "PRESERVE", "PROCEDURE", 
                      "RANGE", "READS", "REDUCE", "REVOKE", "RIGHT", "ROLLUP", 
                      "ROW", "ROWS", "SELECT", "SET", "SMALLINT", "TABLE", 
                      "TABLESAMPLE", "THEN", "TIMESTAMP", "TO", "TRANSFORM", 
                      "TRIGGER", "TRUE", "TRUNCATE", "UNBOUNDED", "UNION", 
                      "UNIQUEJOIN", "UPDATE", "USER", "USING", "UTC_TMESTAMP", 
                      "VALUES", "VARCHAR", "WHEN", "WHERE", "WINDOW", "WITH", 
                      "COMMIT", "ONLY", "REGEXP", "RLIKE", "ROLLBACK", "START", 
                      "CACHE", "CONSTRAINT", "FOREIGN", "PRIMARY", "REFERENCES", 
                      "DAYOFWEEK", "EXTRACT", "FLOOR", "INTEGER", "PRECISION", 
                      "VIEWS", "TIME", "NUMERIC", "SYNC", "SHOW", "DATABASES", 
                      "SCHEMAS", "TABLES", "ADD", "ADMIN", "AFTER", "ANALYZE", 
                      "ARCHIVE", "ASC", "BEFORE", "BUCKET", "BUCKETS", "CASCADE", 
                      "CHANGE", "CLUSTER", "CLUSTERED", "CLUSTERSTATUS", 
                      "COLLECTION", "COLUMNS", "COMMENT", "COMPACT", "COMPACTIONS", 
                      "COMPUTE", "CONCATENATE", "CONTINUE", "DATA", "DATETIME", 
                      "DAY", "DBPROPERTIES", "DEFERRED", "DEFINED", "DELIMITED", 
                      "DEPENDENCY", "DESC", "DIRECTORIES", "DIRECTORY", 
                      "DISABLE", "DISTRIBUTE", "ELEM_TYPE", "ENABLE", "ESCAPED", 
                      "EXCLUSIVE", "EXPLAIN", "EXPORT", "FIELDS", "FILE", 
                      "FILEFORMAT", "FIRST", "FORMAT", "FORMATTED", "FUNCTIONS", 
                      "HOLD_DDLTIME", "HOUR", "IDXPROPERTIES", "IGNORE", 
                      "INDEX", "INDEXES", "INPATH", "INPUTDRIVER", "INPUTFORMAT", 
                      "ITEMS", "JAR", "KEYS", "KEY_TYPE", "LIMIT", "LINES", 
                      "LOAD", "LOCATION", "LOCK", "LOCKS", "LOGICAL", "LONG", 
                      "MAPJOIN", "MATERIALIZED", "METADATA", "MINUS", "MINUTE", 
                      "MONTH", "MSCK", "NOSCAN", "NO_DROP", "OFFLINE", "OPTION", 
                      "OUTPUTDRIVER", "OUTPUTFORMAT", "OVERWRITE", "OWNER", 
                      "PARTITIONED", "PARTITIONS", "PLUS", "PRETTY", "PRINCIPALS", 
                      "PROTECTION", "PURGE", "READ", "READONLY", "REBUILD", 
                      "RECORDREADER", "RECORDWRITER", "RELOAD", "RENAME", 
                      "REPAIR", "REPLACE", "REPLICATION", "RESTRICT", "REWRITE", 
                      "ROLE", "ROLES", "SCHEMA", "SECOND", "SEMI", "SERDE", 
                      "SERDEPROPERTIES", "SERVER", "SETS", "SHARED", "SHOW_DATABASE", 
                      "SKEWED", "SORT", "SORTED", "SSL", "STATISTICS", "STORED", 
                      "STREAMTABLE", "STRUCT", "TBLPROPERTIES", "TEMPORARY", 
                      "TERMINATED", "TINYINT", "TOUCH", "TRANSACTIONS", 
                      "UNARCHIVE", "UNDO", "UNIONTYPE", "UNLOCK", "UNSET", 
                      "UNSIGNED", "URI", "USE", "UTC", "UTCTIMESTAMP", "VALUE_TYPE", 
                      "VIEW", "WHILE", "YEAR", "AUTOCOMMIT", "ISOLATION", 
                      "LEVEL", "OFFSET", "SNAPSHOT", "TRANSACTION", "WORK", 
                      "WRITE", "ABORT", "KEY", "LAST", "NORELY", "NOVALIDATE", 
                      "NULLS", "RELY", "VALIDATE", "DETAIL", "DOW", "EXPRESSION", 
                      "OPERATOR", "QUARTER", "SUMMARY", "VECTORIZATION", 
                      "WEEK", "YEARS", "MONTHS", "WEEKS", "DAYS", "HOURS", 
                      "MINUTES", "SECONDS", "TIMESTAMPTZ", "ZONE", "STRING", 
                      "IDENTIFIER", "BACKQUOTED_IDENTIFIER", "WS" ];

var ruleNames =  [ "showDataBases", "showTables", "database_name", "identifier", 
                   "strictIdentifier", "quotedIdentifier", "nonReserved" ];

function helloParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

helloParser.prototype = Object.create(antlr4.Parser.prototype);
helloParser.prototype.constructor = helloParser;

Object.defineProperty(helloParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

helloParser.EOF = antlr4.Token.EOF;
helloParser.ALL = 1;
helloParser.ALTER = 2;
helloParser.AND = 3;
helloParser.ARRAY = 4;
helloParser.AS = 5;
helloParser.AUTHORIZATION = 6;
helloParser.BETWEEN = 7;
helloParser.BIGINT = 8;
helloParser.BINARY = 9;
helloParser.BOOLEAN = 10;
helloParser.BOTH = 11;
helloParser.BY = 12;
helloParser.CASE = 13;
helloParser.CAST = 14;
helloParser.CHAR = 15;
helloParser.COLUMN = 16;
helloParser.CONF = 17;
helloParser.CREATE = 18;
helloParser.CROSS = 19;
helloParser.CUBE = 20;
helloParser.CURRENT = 21;
helloParser.CURRENT_DATE = 22;
helloParser.CURRENT_TIMESTAMP = 23;
helloParser.CURSOR = 24;
helloParser.DATABASE = 25;
helloParser.DATE = 26;
helloParser.DECIMAL = 27;
helloParser.DELETE = 28;
helloParser.DESCRIBE = 29;
helloParser.DISTINCT = 30;
helloParser.DOUBLE = 31;
helloParser.DROP = 32;
helloParser.ELSE = 33;
helloParser.END = 34;
helloParser.EXCHANGE = 35;
helloParser.EXISTS = 36;
helloParser.EXTENDED = 37;
helloParser.EXTERNAL = 38;
helloParser.FALSE = 39;
helloParser.FETCH = 40;
helloParser.FLOAT = 41;
helloParser.FOLLOWING = 42;
helloParser.FOR = 43;
helloParser.FROM = 44;
helloParser.FULL = 45;
helloParser.FUNCTION = 46;
helloParser.GRANT = 47;
helloParser.GROUP = 48;
helloParser.GROUPING = 49;
helloParser.HAVING = 50;
helloParser.IF = 51;
helloParser.IMPORT = 52;
helloParser.IN = 53;
helloParser.INNER = 54;
helloParser.INSERT = 55;
helloParser.INT = 56;
helloParser.INTERSECT = 57;
helloParser.INTERVAL = 58;
helloParser.INTO = 59;
helloParser.IS = 60;
helloParser.JOIN = 61;
helloParser.LATERAL = 62;
helloParser.LEFT = 63;
helloParser.LESS = 64;
helloParser.LIKE = 65;
helloParser.LOCAL = 66;
helloParser.MACRO = 67;
helloParser.MAP = 68;
helloParser.MORE1 = 69;
helloParser.NONE = 70;
helloParser.NOT = 71;
helloParser.NULL = 72;
helloParser.OF = 73;
helloParser.ON = 74;
helloParser.OR = 75;
helloParser.ORDER = 76;
helloParser.OUT = 77;
helloParser.OUTER = 78;
helloParser.OVER = 79;
helloParser.PARTIALSCAN = 80;
helloParser.PARTITION = 81;
helloParser.PERCENT = 82;
helloParser.PRECEDING = 83;
helloParser.PRESERVE = 84;
helloParser.PROCEDURE = 85;
helloParser.RANGE = 86;
helloParser.READS = 87;
helloParser.REDUCE = 88;
helloParser.REVOKE = 89;
helloParser.RIGHT = 90;
helloParser.ROLLUP = 91;
helloParser.ROW = 92;
helloParser.ROWS = 93;
helloParser.SELECT = 94;
helloParser.SET = 95;
helloParser.SMALLINT = 96;
helloParser.TABLE = 97;
helloParser.TABLESAMPLE = 98;
helloParser.THEN = 99;
helloParser.TIMESTAMP = 100;
helloParser.TO = 101;
helloParser.TRANSFORM = 102;
helloParser.TRIGGER = 103;
helloParser.TRUE = 104;
helloParser.TRUNCATE = 105;
helloParser.UNBOUNDED = 106;
helloParser.UNION = 107;
helloParser.UNIQUEJOIN = 108;
helloParser.UPDATE = 109;
helloParser.USER = 110;
helloParser.USING = 111;
helloParser.UTC_TMESTAMP = 112;
helloParser.VALUES = 113;
helloParser.VARCHAR = 114;
helloParser.WHEN = 115;
helloParser.WHERE = 116;
helloParser.WINDOW = 117;
helloParser.WITH = 118;
helloParser.COMMIT = 119;
helloParser.ONLY = 120;
helloParser.REGEXP = 121;
helloParser.RLIKE = 122;
helloParser.ROLLBACK = 123;
helloParser.START = 124;
helloParser.CACHE = 125;
helloParser.CONSTRAINT = 126;
helloParser.FOREIGN = 127;
helloParser.PRIMARY = 128;
helloParser.REFERENCES = 129;
helloParser.DAYOFWEEK = 130;
helloParser.EXTRACT = 131;
helloParser.FLOOR = 132;
helloParser.INTEGER = 133;
helloParser.PRECISION = 134;
helloParser.VIEWS = 135;
helloParser.TIME = 136;
helloParser.NUMERIC = 137;
helloParser.SYNC = 138;
helloParser.SHOW = 139;
helloParser.DATABASES = 140;
helloParser.SCHEMAS = 141;
helloParser.TABLES = 142;
helloParser.ADD = 143;
helloParser.ADMIN = 144;
helloParser.AFTER = 145;
helloParser.ANALYZE = 146;
helloParser.ARCHIVE = 147;
helloParser.ASC = 148;
helloParser.BEFORE = 149;
helloParser.BUCKET = 150;
helloParser.BUCKETS = 151;
helloParser.CASCADE = 152;
helloParser.CHANGE = 153;
helloParser.CLUSTER = 154;
helloParser.CLUSTERED = 155;
helloParser.CLUSTERSTATUS = 156;
helloParser.COLLECTION = 157;
helloParser.COLUMNS = 158;
helloParser.COMMENT = 159;
helloParser.COMPACT = 160;
helloParser.COMPACTIONS = 161;
helloParser.COMPUTE = 162;
helloParser.CONCATENATE = 163;
helloParser.CONTINUE = 164;
helloParser.DATA = 165;
helloParser.DATETIME = 166;
helloParser.DAY = 167;
helloParser.DBPROPERTIES = 168;
helloParser.DEFERRED = 169;
helloParser.DEFINED = 170;
helloParser.DELIMITED = 171;
helloParser.DEPENDENCY = 172;
helloParser.DESC = 173;
helloParser.DIRECTORIES = 174;
helloParser.DIRECTORY = 175;
helloParser.DISABLE = 176;
helloParser.DISTRIBUTE = 177;
helloParser.ELEM_TYPE = 178;
helloParser.ENABLE = 179;
helloParser.ESCAPED = 180;
helloParser.EXCLUSIVE = 181;
helloParser.EXPLAIN = 182;
helloParser.EXPORT = 183;
helloParser.FIELDS = 184;
helloParser.FILE = 185;
helloParser.FILEFORMAT = 186;
helloParser.FIRST = 187;
helloParser.FORMAT = 188;
helloParser.FORMATTED = 189;
helloParser.FUNCTIONS = 190;
helloParser.HOLD_DDLTIME = 191;
helloParser.HOUR = 192;
helloParser.IDXPROPERTIES = 193;
helloParser.IGNORE = 194;
helloParser.INDEX = 195;
helloParser.INDEXES = 196;
helloParser.INPATH = 197;
helloParser.INPUTDRIVER = 198;
helloParser.INPUTFORMAT = 199;
helloParser.ITEMS = 200;
helloParser.JAR = 201;
helloParser.KEYS = 202;
helloParser.KEY_TYPE = 203;
helloParser.LIMIT = 204;
helloParser.LINES = 205;
helloParser.LOAD = 206;
helloParser.LOCATION = 207;
helloParser.LOCK = 208;
helloParser.LOCKS = 209;
helloParser.LOGICAL = 210;
helloParser.LONG = 211;
helloParser.MAPJOIN = 212;
helloParser.MATERIALIZED = 213;
helloParser.METADATA = 214;
helloParser.MINUS = 215;
helloParser.MINUTE = 216;
helloParser.MONTH = 217;
helloParser.MSCK = 218;
helloParser.NOSCAN = 219;
helloParser.NO_DROP = 220;
helloParser.OFFLINE = 221;
helloParser.OPTION = 222;
helloParser.OUTPUTDRIVER = 223;
helloParser.OUTPUTFORMAT = 224;
helloParser.OVERWRITE = 225;
helloParser.OWNER = 226;
helloParser.PARTITIONED = 227;
helloParser.PARTITIONS = 228;
helloParser.PLUS = 229;
helloParser.PRETTY = 230;
helloParser.PRINCIPALS = 231;
helloParser.PROTECTION = 232;
helloParser.PURGE = 233;
helloParser.READ = 234;
helloParser.READONLY = 235;
helloParser.REBUILD = 236;
helloParser.RECORDREADER = 237;
helloParser.RECORDWRITER = 238;
helloParser.RELOAD = 239;
helloParser.RENAME = 240;
helloParser.REPAIR = 241;
helloParser.REPLACE = 242;
helloParser.REPLICATION = 243;
helloParser.RESTRICT = 244;
helloParser.REWRITE = 245;
helloParser.ROLE = 246;
helloParser.ROLES = 247;
helloParser.SCHEMA = 248;
helloParser.SECOND = 249;
helloParser.SEMI = 250;
helloParser.SERDE = 251;
helloParser.SERDEPROPERTIES = 252;
helloParser.SERVER = 253;
helloParser.SETS = 254;
helloParser.SHARED = 255;
helloParser.SHOW_DATABASE = 256;
helloParser.SKEWED = 257;
helloParser.SORT = 258;
helloParser.SORTED = 259;
helloParser.SSL = 260;
helloParser.STATISTICS = 261;
helloParser.STORED = 262;
helloParser.STREAMTABLE = 263;
helloParser.STRUCT = 264;
helloParser.TBLPROPERTIES = 265;
helloParser.TEMPORARY = 266;
helloParser.TERMINATED = 267;
helloParser.TINYINT = 268;
helloParser.TOUCH = 269;
helloParser.TRANSACTIONS = 270;
helloParser.UNARCHIVE = 271;
helloParser.UNDO = 272;
helloParser.UNIONTYPE = 273;
helloParser.UNLOCK = 274;
helloParser.UNSET = 275;
helloParser.UNSIGNED = 276;
helloParser.URI = 277;
helloParser.USE = 278;
helloParser.UTC = 279;
helloParser.UTCTIMESTAMP = 280;
helloParser.VALUE_TYPE = 281;
helloParser.VIEW = 282;
helloParser.WHILE = 283;
helloParser.YEAR = 284;
helloParser.AUTOCOMMIT = 285;
helloParser.ISOLATION = 286;
helloParser.LEVEL = 287;
helloParser.OFFSET = 288;
helloParser.SNAPSHOT = 289;
helloParser.TRANSACTION = 290;
helloParser.WORK = 291;
helloParser.WRITE = 292;
helloParser.ABORT = 293;
helloParser.KEY = 294;
helloParser.LAST = 295;
helloParser.NORELY = 296;
helloParser.NOVALIDATE = 297;
helloParser.NULLS = 298;
helloParser.RELY = 299;
helloParser.VALIDATE = 300;
helloParser.DETAIL = 301;
helloParser.DOW = 302;
helloParser.EXPRESSION = 303;
helloParser.OPERATOR = 304;
helloParser.QUARTER = 305;
helloParser.SUMMARY = 306;
helloParser.VECTORIZATION = 307;
helloParser.WEEK = 308;
helloParser.YEARS = 309;
helloParser.MONTHS = 310;
helloParser.WEEKS = 311;
helloParser.DAYS = 312;
helloParser.HOURS = 313;
helloParser.MINUTES = 314;
helloParser.SECONDS = 315;
helloParser.TIMESTAMPTZ = 316;
helloParser.ZONE = 317;
helloParser.STRING = 318;
helloParser.IDENTIFIER = 319;
helloParser.BACKQUOTED_IDENTIFIER = 320;
helloParser.WS = 321;

helloParser.RULE_showDataBases = 0;
helloParser.RULE_showTables = 1;
helloParser.RULE_database_name = 2;
helloParser.RULE_identifier = 3;
helloParser.RULE_strictIdentifier = 4;
helloParser.RULE_quotedIdentifier = 5;
helloParser.RULE_nonReserved = 6;

function ShowDataBasesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_showDataBases;
    return this;
}

ShowDataBasesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowDataBasesContext.prototype.constructor = ShowDataBasesContext;

ShowDataBasesContext.prototype.SHOW = function() {
    return this.getToken(helloParser.SHOW, 0);
};

ShowDataBasesContext.prototype.DATABASES = function() {
    return this.getToken(helloParser.DATABASES, 0);
};

ShowDataBasesContext.prototype.SCHEMAS = function() {
    return this.getToken(helloParser.SCHEMAS, 0);
};

ShowDataBasesContext.prototype.LIKE = function() {
    return this.getToken(helloParser.LIKE, 0);
};

ShowDataBasesContext.prototype.STRING = function() {
    return this.getToken(helloParser.STRING, 0);
};

ShowDataBasesContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterShowDataBases(this);
	}
};

ShowDataBasesContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitShowDataBases(this);
	}
};

ShowDataBasesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof helloVisitor ) {
        return visitor.visitShowDataBases(this);
    } else {
        return visitor.visitChildren(this);
    }
};




helloParser.ShowDataBasesContext = ShowDataBasesContext;

helloParser.prototype.showDataBases = function() {

    var localctx = new ShowDataBasesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, helloParser.RULE_showDataBases);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.match(helloParser.SHOW);
        this.state = 15;
        _la = this._input.LA(1);
        if(!(_la===helloParser.DATABASES || _la===helloParser.SCHEMAS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 18;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===helloParser.LIKE) {
            this.state = 16;
            this.match(helloParser.LIKE);
            this.state = 17;
            this.match(helloParser.STRING);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowTablesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_showTables;
    return this;
}

ShowTablesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowTablesContext.prototype.constructor = ShowTablesContext;

ShowTablesContext.prototype.SHOW = function() {
    return this.getToken(helloParser.SHOW, 0);
};

ShowTablesContext.prototype.TABLES = function() {
    return this.getToken(helloParser.TABLES, 0);
};

ShowTablesContext.prototype.IN = function() {
    return this.getToken(helloParser.IN, 0);
};

ShowTablesContext.prototype.database_name = function() {
    return this.getTypedRuleContext(Database_nameContext,0);
};

ShowTablesContext.prototype.STRING = function() {
    return this.getToken(helloParser.STRING, 0);
};

ShowTablesContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterShowTables(this);
	}
};

ShowTablesContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitShowTables(this);
	}
};

ShowTablesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof helloVisitor ) {
        return visitor.visitShowTables(this);
    } else {
        return visitor.visitChildren(this);
    }
};




helloParser.ShowTablesContext = ShowTablesContext;

helloParser.prototype.showTables = function() {

    var localctx = new ShowTablesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, helloParser.RULE_showTables);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(helloParser.SHOW);
        this.state = 21;
        this.match(helloParser.TABLES);
        this.state = 24;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===helloParser.IN) {
            this.state = 22;
            this.match(helloParser.IN);
            this.state = 23;
            this.database_name();
        }

        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===helloParser.STRING) {
            this.state = 26;
            this.match(helloParser.STRING);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Database_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_database_name;
    return this;
}

Database_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Database_nameContext.prototype.constructor = Database_nameContext;

Database_nameContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Database_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterDatabase_name(this);
	}
};

Database_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitDatabase_name(this);
	}
};

Database_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof helloVisitor ) {
        return visitor.visitDatabase_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




helloParser.Database_nameContext = Database_nameContext;

helloParser.prototype.database_name = function() {

    var localctx = new Database_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, helloParser.RULE_database_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.strictIdentifier = function() {
    return this.getTypedRuleContext(StrictIdentifierContext,0);
};

IdentifierContext.prototype.FULL = function() {
    return this.getToken(helloParser.FULL, 0);
};

IdentifierContext.prototype.INNER = function() {
    return this.getToken(helloParser.INNER, 0);
};

IdentifierContext.prototype.LEFT = function() {
    return this.getToken(helloParser.LEFT, 0);
};

IdentifierContext.prototype.SEMI = function() {
    return this.getToken(helloParser.SEMI, 0);
};

IdentifierContext.prototype.RIGHT = function() {
    return this.getToken(helloParser.RIGHT, 0);
};

IdentifierContext.prototype.JOIN = function() {
    return this.getToken(helloParser.JOIN, 0);
};

IdentifierContext.prototype.CROSS = function() {
    return this.getToken(helloParser.CROSS, 0);
};

IdentifierContext.prototype.ON = function() {
    return this.getToken(helloParser.ON, 0);
};

IdentifierContext.prototype.UNION = function() {
    return this.getToken(helloParser.UNION, 0);
};

IdentifierContext.prototype.INTERSECT = function() {
    return this.getToken(helloParser.INTERSECT, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof helloVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




helloParser.IdentifierContext = IdentifierContext;

helloParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, helloParser.RULE_identifier);
    try {
        this.state = 42;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.strictIdentifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 32;
            this.match(helloParser.FULL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 33;
            this.match(helloParser.INNER);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 34;
            this.match(helloParser.LEFT);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 35;
            this.match(helloParser.SEMI);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 36;
            this.match(helloParser.RIGHT);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 37;
            this.match(helloParser.JOIN);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 38;
            this.match(helloParser.CROSS);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 39;
            this.match(helloParser.ON);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 40;
            this.match(helloParser.UNION);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 41;
            this.match(helloParser.INTERSECT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StrictIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_strictIdentifier;
    return this;
}

StrictIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StrictIdentifierContext.prototype.constructor = StrictIdentifierContext;


 
StrictIdentifierContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function QuotedIdentifierAlternativeContext(parser, ctx) {
	StrictIdentifierContext.call(this, parser);
    StrictIdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QuotedIdentifierAlternativeContext.prototype = Object.create(StrictIdentifierContext.prototype);
QuotedIdentifierAlternativeContext.prototype.constructor = QuotedIdentifierAlternativeContext;

helloParser.QuotedIdentifierAlternativeContext = QuotedIdentifierAlternativeContext;

QuotedIdentifierAlternativeContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};
QuotedIdentifierAlternativeContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterQuotedIdentifierAlternative(this);
	}
};

QuotedIdentifierAlternativeContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitQuotedIdentifierAlternative(this);
	}
};

QuotedIdentifierAlternativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof helloVisitor ) {
        return visitor.visitQuotedIdentifierAlternative(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnquotedIdentifierContext(parser, ctx) {
	StrictIdentifierContext.call(this, parser);
    StrictIdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnquotedIdentifierContext.prototype = Object.create(StrictIdentifierContext.prototype);
UnquotedIdentifierContext.prototype.constructor = UnquotedIdentifierContext;

helloParser.UnquotedIdentifierContext = UnquotedIdentifierContext;

UnquotedIdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(helloParser.IDENTIFIER, 0);
};

UnquotedIdentifierContext.prototype.nonReserved = function() {
    return this.getTypedRuleContext(NonReservedContext,0);
};
UnquotedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterUnquotedIdentifier(this);
	}
};

UnquotedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitUnquotedIdentifier(this);
	}
};

UnquotedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof helloVisitor ) {
        return visitor.visitUnquotedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};



helloParser.StrictIdentifierContext = StrictIdentifierContext;

helloParser.prototype.strictIdentifier = function() {

    var localctx = new StrictIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, helloParser.RULE_strictIdentifier);
    try {
        this.state = 47;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case helloParser.IDENTIFIER:
            localctx = new UnquotedIdentifierContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 44;
            this.match(helloParser.IDENTIFIER);
            break;
        case helloParser.BACKQUOTED_IDENTIFIER:
            localctx = new QuotedIdentifierAlternativeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 45;
            this.quotedIdentifier();
            break;
        case helloParser.SHOW:
        case helloParser.DATABASES:
        case helloParser.SCHEMAS:
        case helloParser.TABLES:
        case helloParser.ADD:
        case helloParser.ADMIN:
        case helloParser.AFTER:
        case helloParser.ANALYZE:
        case helloParser.ARCHIVE:
        case helloParser.ASC:
        case helloParser.BEFORE:
        case helloParser.BUCKET:
        case helloParser.BUCKETS:
        case helloParser.CASCADE:
        case helloParser.CHANGE:
        case helloParser.CLUSTER:
        case helloParser.CLUSTERED:
        case helloParser.CLUSTERSTATUS:
        case helloParser.COLLECTION:
        case helloParser.COLUMNS:
        case helloParser.COMMENT:
        case helloParser.COMPACT:
        case helloParser.COMPACTIONS:
        case helloParser.COMPUTE:
        case helloParser.CONCATENATE:
        case helloParser.CONTINUE:
        case helloParser.DATA:
        case helloParser.DATETIME:
        case helloParser.DAY:
        case helloParser.DBPROPERTIES:
        case helloParser.DEFERRED:
        case helloParser.DEFINED:
        case helloParser.DELIMITED:
        case helloParser.DEPENDENCY:
        case helloParser.DESC:
        case helloParser.DIRECTORIES:
        case helloParser.DIRECTORY:
        case helloParser.DISABLE:
        case helloParser.DISTRIBUTE:
        case helloParser.ELEM_TYPE:
        case helloParser.ENABLE:
        case helloParser.ESCAPED:
        case helloParser.EXCLUSIVE:
        case helloParser.EXPLAIN:
        case helloParser.EXPORT:
        case helloParser.FIELDS:
        case helloParser.FILE:
        case helloParser.FILEFORMAT:
        case helloParser.FIRST:
        case helloParser.FORMAT:
        case helloParser.FORMATTED:
        case helloParser.FUNCTIONS:
        case helloParser.HOLD_DDLTIME:
        case helloParser.HOUR:
        case helloParser.IDXPROPERTIES:
        case helloParser.IGNORE:
        case helloParser.INDEX:
        case helloParser.INDEXES:
        case helloParser.INPATH:
        case helloParser.INPUTDRIVER:
        case helloParser.INPUTFORMAT:
        case helloParser.ITEMS:
        case helloParser.JAR:
        case helloParser.KEYS:
        case helloParser.KEY_TYPE:
        case helloParser.LIMIT:
        case helloParser.LINES:
        case helloParser.LOAD:
        case helloParser.LOCATION:
        case helloParser.LOCK:
        case helloParser.LOCKS:
        case helloParser.LOGICAL:
        case helloParser.LONG:
        case helloParser.MAPJOIN:
        case helloParser.MATERIALIZED:
        case helloParser.METADATA:
        case helloParser.MINUS:
        case helloParser.MINUTE:
        case helloParser.MONTH:
        case helloParser.MSCK:
        case helloParser.NOSCAN:
        case helloParser.NO_DROP:
        case helloParser.OFFLINE:
        case helloParser.OPTION:
        case helloParser.OUTPUTDRIVER:
        case helloParser.OUTPUTFORMAT:
        case helloParser.OVERWRITE:
        case helloParser.OWNER:
        case helloParser.PARTITIONED:
        case helloParser.PARTITIONS:
        case helloParser.PLUS:
        case helloParser.PRETTY:
        case helloParser.PRINCIPALS:
        case helloParser.PROTECTION:
        case helloParser.PURGE:
        case helloParser.READ:
        case helloParser.READONLY:
        case helloParser.REBUILD:
        case helloParser.RECORDREADER:
        case helloParser.RECORDWRITER:
        case helloParser.RELOAD:
        case helloParser.RENAME:
        case helloParser.REPAIR:
        case helloParser.REPLACE:
        case helloParser.REPLICATION:
        case helloParser.RESTRICT:
        case helloParser.REWRITE:
        case helloParser.ROLE:
        case helloParser.ROLES:
        case helloParser.SCHEMA:
        case helloParser.SECOND:
        case helloParser.SEMI:
        case helloParser.SERDE:
        case helloParser.SERDEPROPERTIES:
        case helloParser.SERVER:
        case helloParser.SETS:
        case helloParser.SHARED:
        case helloParser.SHOW_DATABASE:
        case helloParser.SKEWED:
        case helloParser.SORT:
        case helloParser.SORTED:
        case helloParser.SSL:
        case helloParser.STATISTICS:
        case helloParser.STORED:
        case helloParser.STREAMTABLE:
        case helloParser.STRUCT:
        case helloParser.TBLPROPERTIES:
        case helloParser.TEMPORARY:
        case helloParser.TERMINATED:
        case helloParser.TINYINT:
        case helloParser.TOUCH:
        case helloParser.TRANSACTIONS:
        case helloParser.UNARCHIVE:
        case helloParser.UNDO:
        case helloParser.UNIONTYPE:
        case helloParser.UNLOCK:
        case helloParser.UNSET:
        case helloParser.UNSIGNED:
        case helloParser.URI:
        case helloParser.USE:
        case helloParser.UTC:
        case helloParser.UTCTIMESTAMP:
        case helloParser.VALUE_TYPE:
        case helloParser.VIEW:
        case helloParser.WHILE:
        case helloParser.YEAR:
        case helloParser.AUTOCOMMIT:
        case helloParser.ISOLATION:
        case helloParser.LEVEL:
        case helloParser.OFFSET:
        case helloParser.SNAPSHOT:
        case helloParser.TRANSACTION:
        case helloParser.WORK:
        case helloParser.WRITE:
        case helloParser.ABORT:
        case helloParser.KEY:
        case helloParser.LAST:
        case helloParser.NORELY:
        case helloParser.NOVALIDATE:
        case helloParser.NULLS:
        case helloParser.RELY:
        case helloParser.VALIDATE:
        case helloParser.DETAIL:
        case helloParser.DOW:
        case helloParser.EXPRESSION:
        case helloParser.OPERATOR:
        case helloParser.QUARTER:
        case helloParser.SUMMARY:
        case helloParser.VECTORIZATION:
        case helloParser.WEEK:
        case helloParser.YEARS:
        case helloParser.MONTHS:
        case helloParser.WEEKS:
        case helloParser.DAYS:
        case helloParser.HOURS:
        case helloParser.MINUTES:
        case helloParser.SECONDS:
        case helloParser.TIMESTAMPTZ:
        case helloParser.ZONE:
        case helloParser.STRING:
            localctx = new UnquotedIdentifierContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 46;
            this.nonReserved();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuotedIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_quotedIdentifier;
    return this;
}

QuotedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedIdentifierContext.prototype.constructor = QuotedIdentifierContext;

QuotedIdentifierContext.prototype.BACKQUOTED_IDENTIFIER = function() {
    return this.getToken(helloParser.BACKQUOTED_IDENTIFIER, 0);
};

QuotedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof helloVisitor ) {
        return visitor.visitQuotedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




helloParser.QuotedIdentifierContext = QuotedIdentifierContext;

helloParser.prototype.quotedIdentifier = function() {

    var localctx = new QuotedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, helloParser.RULE_quotedIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(helloParser.BACKQUOTED_IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NonReservedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_nonReserved;
    return this;
}

NonReservedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NonReservedContext.prototype.constructor = NonReservedContext;

NonReservedContext.prototype.ADD = function() {
    return this.getToken(helloParser.ADD, 0);
};

NonReservedContext.prototype.ADMIN = function() {
    return this.getToken(helloParser.ADMIN, 0);
};

NonReservedContext.prototype.AFTER = function() {
    return this.getToken(helloParser.AFTER, 0);
};

NonReservedContext.prototype.ANALYZE = function() {
    return this.getToken(helloParser.ANALYZE, 0);
};

NonReservedContext.prototype.ARCHIVE = function() {
    return this.getToken(helloParser.ARCHIVE, 0);
};

NonReservedContext.prototype.ASC = function() {
    return this.getToken(helloParser.ASC, 0);
};

NonReservedContext.prototype.BEFORE = function() {
    return this.getToken(helloParser.BEFORE, 0);
};

NonReservedContext.prototype.BUCKET = function() {
    return this.getToken(helloParser.BUCKET, 0);
};

NonReservedContext.prototype.BUCKETS = function() {
    return this.getToken(helloParser.BUCKETS, 0);
};

NonReservedContext.prototype.CASCADE = function() {
    return this.getToken(helloParser.CASCADE, 0);
};

NonReservedContext.prototype.CHANGE = function() {
    return this.getToken(helloParser.CHANGE, 0);
};

NonReservedContext.prototype.CLUSTER = function() {
    return this.getToken(helloParser.CLUSTER, 0);
};

NonReservedContext.prototype.CLUSTERED = function() {
    return this.getToken(helloParser.CLUSTERED, 0);
};

NonReservedContext.prototype.CLUSTERSTATUS = function() {
    return this.getToken(helloParser.CLUSTERSTATUS, 0);
};

NonReservedContext.prototype.COLLECTION = function() {
    return this.getToken(helloParser.COLLECTION, 0);
};

NonReservedContext.prototype.COLUMNS = function() {
    return this.getToken(helloParser.COLUMNS, 0);
};

NonReservedContext.prototype.COMMENT = function() {
    return this.getToken(helloParser.COMMENT, 0);
};

NonReservedContext.prototype.COMPACT = function() {
    return this.getToken(helloParser.COMPACT, 0);
};

NonReservedContext.prototype.COMPACTIONS = function() {
    return this.getToken(helloParser.COMPACTIONS, 0);
};

NonReservedContext.prototype.COMPUTE = function() {
    return this.getToken(helloParser.COMPUTE, 0);
};

NonReservedContext.prototype.CONCATENATE = function() {
    return this.getToken(helloParser.CONCATENATE, 0);
};

NonReservedContext.prototype.CONTINUE = function() {
    return this.getToken(helloParser.CONTINUE, 0);
};

NonReservedContext.prototype.DATA = function() {
    return this.getToken(helloParser.DATA, 0);
};

NonReservedContext.prototype.DATABASES = function() {
    return this.getToken(helloParser.DATABASES, 0);
};

NonReservedContext.prototype.DATETIME = function() {
    return this.getToken(helloParser.DATETIME, 0);
};

NonReservedContext.prototype.DAY = function() {
    return this.getToken(helloParser.DAY, 0);
};

NonReservedContext.prototype.DBPROPERTIES = function() {
    return this.getToken(helloParser.DBPROPERTIES, 0);
};

NonReservedContext.prototype.DEFERRED = function() {
    return this.getToken(helloParser.DEFERRED, 0);
};

NonReservedContext.prototype.DEFINED = function() {
    return this.getToken(helloParser.DEFINED, 0);
};

NonReservedContext.prototype.DELIMITED = function() {
    return this.getToken(helloParser.DELIMITED, 0);
};

NonReservedContext.prototype.DEPENDENCY = function() {
    return this.getToken(helloParser.DEPENDENCY, 0);
};

NonReservedContext.prototype.DESC = function() {
    return this.getToken(helloParser.DESC, 0);
};

NonReservedContext.prototype.DIRECTORIES = function() {
    return this.getToken(helloParser.DIRECTORIES, 0);
};

NonReservedContext.prototype.DIRECTORY = function() {
    return this.getToken(helloParser.DIRECTORY, 0);
};

NonReservedContext.prototype.DISABLE = function() {
    return this.getToken(helloParser.DISABLE, 0);
};

NonReservedContext.prototype.DISTRIBUTE = function() {
    return this.getToken(helloParser.DISTRIBUTE, 0);
};

NonReservedContext.prototype.ELEM_TYPE = function() {
    return this.getToken(helloParser.ELEM_TYPE, 0);
};

NonReservedContext.prototype.ENABLE = function() {
    return this.getToken(helloParser.ENABLE, 0);
};

NonReservedContext.prototype.ESCAPED = function() {
    return this.getToken(helloParser.ESCAPED, 0);
};

NonReservedContext.prototype.EXCLUSIVE = function() {
    return this.getToken(helloParser.EXCLUSIVE, 0);
};

NonReservedContext.prototype.EXPLAIN = function() {
    return this.getToken(helloParser.EXPLAIN, 0);
};

NonReservedContext.prototype.EXPORT = function() {
    return this.getToken(helloParser.EXPORT, 0);
};

NonReservedContext.prototype.FIELDS = function() {
    return this.getToken(helloParser.FIELDS, 0);
};

NonReservedContext.prototype.FILE = function() {
    return this.getToken(helloParser.FILE, 0);
};

NonReservedContext.prototype.FILEFORMAT = function() {
    return this.getToken(helloParser.FILEFORMAT, 0);
};

NonReservedContext.prototype.FIRST = function() {
    return this.getToken(helloParser.FIRST, 0);
};

NonReservedContext.prototype.FORMAT = function() {
    return this.getToken(helloParser.FORMAT, 0);
};

NonReservedContext.prototype.FORMATTED = function() {
    return this.getToken(helloParser.FORMATTED, 0);
};

NonReservedContext.prototype.FUNCTIONS = function() {
    return this.getToken(helloParser.FUNCTIONS, 0);
};

NonReservedContext.prototype.HOLD_DDLTIME = function() {
    return this.getToken(helloParser.HOLD_DDLTIME, 0);
};

NonReservedContext.prototype.HOUR = function() {
    return this.getToken(helloParser.HOUR, 0);
};

NonReservedContext.prototype.IDXPROPERTIES = function() {
    return this.getToken(helloParser.IDXPROPERTIES, 0);
};

NonReservedContext.prototype.IGNORE = function() {
    return this.getToken(helloParser.IGNORE, 0);
};

NonReservedContext.prototype.INDEX = function() {
    return this.getToken(helloParser.INDEX, 0);
};

NonReservedContext.prototype.INDEXES = function() {
    return this.getToken(helloParser.INDEXES, 0);
};

NonReservedContext.prototype.INPATH = function() {
    return this.getToken(helloParser.INPATH, 0);
};

NonReservedContext.prototype.INPUTDRIVER = function() {
    return this.getToken(helloParser.INPUTDRIVER, 0);
};

NonReservedContext.prototype.INPUTFORMAT = function() {
    return this.getToken(helloParser.INPUTFORMAT, 0);
};

NonReservedContext.prototype.ITEMS = function() {
    return this.getToken(helloParser.ITEMS, 0);
};

NonReservedContext.prototype.JAR = function() {
    return this.getToken(helloParser.JAR, 0);
};

NonReservedContext.prototype.KEYS = function() {
    return this.getToken(helloParser.KEYS, 0);
};

NonReservedContext.prototype.KEY_TYPE = function() {
    return this.getToken(helloParser.KEY_TYPE, 0);
};

NonReservedContext.prototype.LIMIT = function() {
    return this.getToken(helloParser.LIMIT, 0);
};

NonReservedContext.prototype.LINES = function() {
    return this.getToken(helloParser.LINES, 0);
};

NonReservedContext.prototype.LOAD = function() {
    return this.getToken(helloParser.LOAD, 0);
};

NonReservedContext.prototype.LOCATION = function() {
    return this.getToken(helloParser.LOCATION, 0);
};

NonReservedContext.prototype.LOCK = function() {
    return this.getToken(helloParser.LOCK, 0);
};

NonReservedContext.prototype.LOCKS = function() {
    return this.getToken(helloParser.LOCKS, 0);
};

NonReservedContext.prototype.LOGICAL = function() {
    return this.getToken(helloParser.LOGICAL, 0);
};

NonReservedContext.prototype.LONG = function() {
    return this.getToken(helloParser.LONG, 0);
};

NonReservedContext.prototype.MAPJOIN = function() {
    return this.getToken(helloParser.MAPJOIN, 0);
};

NonReservedContext.prototype.MATERIALIZED = function() {
    return this.getToken(helloParser.MATERIALIZED, 0);
};

NonReservedContext.prototype.METADATA = function() {
    return this.getToken(helloParser.METADATA, 0);
};

NonReservedContext.prototype.MINUS = function() {
    return this.getToken(helloParser.MINUS, 0);
};

NonReservedContext.prototype.MINUTE = function() {
    return this.getToken(helloParser.MINUTE, 0);
};

NonReservedContext.prototype.MONTH = function() {
    return this.getToken(helloParser.MONTH, 0);
};

NonReservedContext.prototype.MSCK = function() {
    return this.getToken(helloParser.MSCK, 0);
};

NonReservedContext.prototype.NOSCAN = function() {
    return this.getToken(helloParser.NOSCAN, 0);
};

NonReservedContext.prototype.NO_DROP = function() {
    return this.getToken(helloParser.NO_DROP, 0);
};

NonReservedContext.prototype.OFFLINE = function() {
    return this.getToken(helloParser.OFFLINE, 0);
};

NonReservedContext.prototype.OPTION = function() {
    return this.getToken(helloParser.OPTION, 0);
};

NonReservedContext.prototype.OUTPUTDRIVER = function() {
    return this.getToken(helloParser.OUTPUTDRIVER, 0);
};

NonReservedContext.prototype.OUTPUTFORMAT = function() {
    return this.getToken(helloParser.OUTPUTFORMAT, 0);
};

NonReservedContext.prototype.OVERWRITE = function() {
    return this.getToken(helloParser.OVERWRITE, 0);
};

NonReservedContext.prototype.OWNER = function() {
    return this.getToken(helloParser.OWNER, 0);
};

NonReservedContext.prototype.PARTITIONED = function() {
    return this.getToken(helloParser.PARTITIONED, 0);
};

NonReservedContext.prototype.PARTITIONS = function() {
    return this.getToken(helloParser.PARTITIONS, 0);
};

NonReservedContext.prototype.PLUS = function() {
    return this.getToken(helloParser.PLUS, 0);
};

NonReservedContext.prototype.PRETTY = function() {
    return this.getToken(helloParser.PRETTY, 0);
};

NonReservedContext.prototype.PRINCIPALS = function() {
    return this.getToken(helloParser.PRINCIPALS, 0);
};

NonReservedContext.prototype.PROTECTION = function() {
    return this.getToken(helloParser.PROTECTION, 0);
};

NonReservedContext.prototype.PURGE = function() {
    return this.getToken(helloParser.PURGE, 0);
};

NonReservedContext.prototype.READ = function() {
    return this.getToken(helloParser.READ, 0);
};

NonReservedContext.prototype.READONLY = function() {
    return this.getToken(helloParser.READONLY, 0);
};

NonReservedContext.prototype.REBUILD = function() {
    return this.getToken(helloParser.REBUILD, 0);
};

NonReservedContext.prototype.RECORDREADER = function() {
    return this.getToken(helloParser.RECORDREADER, 0);
};

NonReservedContext.prototype.RECORDWRITER = function() {
    return this.getToken(helloParser.RECORDWRITER, 0);
};

NonReservedContext.prototype.RELOAD = function() {
    return this.getToken(helloParser.RELOAD, 0);
};

NonReservedContext.prototype.RENAME = function() {
    return this.getToken(helloParser.RENAME, 0);
};

NonReservedContext.prototype.REPAIR = function() {
    return this.getToken(helloParser.REPAIR, 0);
};

NonReservedContext.prototype.REPLACE = function() {
    return this.getToken(helloParser.REPLACE, 0);
};

NonReservedContext.prototype.REPLICATION = function() {
    return this.getToken(helloParser.REPLICATION, 0);
};

NonReservedContext.prototype.RESTRICT = function() {
    return this.getToken(helloParser.RESTRICT, 0);
};

NonReservedContext.prototype.REWRITE = function() {
    return this.getToken(helloParser.REWRITE, 0);
};

NonReservedContext.prototype.ROLE = function() {
    return this.getToken(helloParser.ROLE, 0);
};

NonReservedContext.prototype.ROLES = function() {
    return this.getToken(helloParser.ROLES, 0);
};

NonReservedContext.prototype.SCHEMA = function() {
    return this.getToken(helloParser.SCHEMA, 0);
};

NonReservedContext.prototype.SCHEMAS = function() {
    return this.getToken(helloParser.SCHEMAS, 0);
};

NonReservedContext.prototype.SECOND = function() {
    return this.getToken(helloParser.SECOND, 0);
};

NonReservedContext.prototype.SEMI = function() {
    return this.getToken(helloParser.SEMI, 0);
};

NonReservedContext.prototype.SERDE = function() {
    return this.getToken(helloParser.SERDE, 0);
};

NonReservedContext.prototype.SERDEPROPERTIES = function() {
    return this.getToken(helloParser.SERDEPROPERTIES, 0);
};

NonReservedContext.prototype.SERVER = function() {
    return this.getToken(helloParser.SERVER, 0);
};

NonReservedContext.prototype.SETS = function() {
    return this.getToken(helloParser.SETS, 0);
};

NonReservedContext.prototype.SHARED = function() {
    return this.getToken(helloParser.SHARED, 0);
};

NonReservedContext.prototype.SHOW = function() {
    return this.getToken(helloParser.SHOW, 0);
};

NonReservedContext.prototype.SHOW_DATABASE = function() {
    return this.getToken(helloParser.SHOW_DATABASE, 0);
};

NonReservedContext.prototype.SKEWED = function() {
    return this.getToken(helloParser.SKEWED, 0);
};

NonReservedContext.prototype.SORT = function() {
    return this.getToken(helloParser.SORT, 0);
};

NonReservedContext.prototype.SORTED = function() {
    return this.getToken(helloParser.SORTED, 0);
};

NonReservedContext.prototype.SSL = function() {
    return this.getToken(helloParser.SSL, 0);
};

NonReservedContext.prototype.STATISTICS = function() {
    return this.getToken(helloParser.STATISTICS, 0);
};

NonReservedContext.prototype.STORED = function() {
    return this.getToken(helloParser.STORED, 0);
};

NonReservedContext.prototype.STREAMTABLE = function() {
    return this.getToken(helloParser.STREAMTABLE, 0);
};

NonReservedContext.prototype.STRING = function() {
    return this.getToken(helloParser.STRING, 0);
};

NonReservedContext.prototype.STRUCT = function() {
    return this.getToken(helloParser.STRUCT, 0);
};

NonReservedContext.prototype.TABLES = function() {
    return this.getToken(helloParser.TABLES, 0);
};

NonReservedContext.prototype.TBLPROPERTIES = function() {
    return this.getToken(helloParser.TBLPROPERTIES, 0);
};

NonReservedContext.prototype.TEMPORARY = function() {
    return this.getToken(helloParser.TEMPORARY, 0);
};

NonReservedContext.prototype.TERMINATED = function() {
    return this.getToken(helloParser.TERMINATED, 0);
};

NonReservedContext.prototype.TINYINT = function() {
    return this.getToken(helloParser.TINYINT, 0);
};

NonReservedContext.prototype.TOUCH = function() {
    return this.getToken(helloParser.TOUCH, 0);
};

NonReservedContext.prototype.TRANSACTIONS = function() {
    return this.getToken(helloParser.TRANSACTIONS, 0);
};

NonReservedContext.prototype.UNARCHIVE = function() {
    return this.getToken(helloParser.UNARCHIVE, 0);
};

NonReservedContext.prototype.UNDO = function() {
    return this.getToken(helloParser.UNDO, 0);
};

NonReservedContext.prototype.UNIONTYPE = function() {
    return this.getToken(helloParser.UNIONTYPE, 0);
};

NonReservedContext.prototype.UNLOCK = function() {
    return this.getToken(helloParser.UNLOCK, 0);
};

NonReservedContext.prototype.UNSET = function() {
    return this.getToken(helloParser.UNSET, 0);
};

NonReservedContext.prototype.UNSIGNED = function() {
    return this.getToken(helloParser.UNSIGNED, 0);
};

NonReservedContext.prototype.URI = function() {
    return this.getToken(helloParser.URI, 0);
};

NonReservedContext.prototype.USE = function() {
    return this.getToken(helloParser.USE, 0);
};

NonReservedContext.prototype.UTC = function() {
    return this.getToken(helloParser.UTC, 0);
};

NonReservedContext.prototype.UTCTIMESTAMP = function() {
    return this.getToken(helloParser.UTCTIMESTAMP, 0);
};

NonReservedContext.prototype.VALUE_TYPE = function() {
    return this.getToken(helloParser.VALUE_TYPE, 0);
};

NonReservedContext.prototype.VIEW = function() {
    return this.getToken(helloParser.VIEW, 0);
};

NonReservedContext.prototype.WHILE = function() {
    return this.getToken(helloParser.WHILE, 0);
};

NonReservedContext.prototype.YEAR = function() {
    return this.getToken(helloParser.YEAR, 0);
};

NonReservedContext.prototype.AUTOCOMMIT = function() {
    return this.getToken(helloParser.AUTOCOMMIT, 0);
};

NonReservedContext.prototype.ISOLATION = function() {
    return this.getToken(helloParser.ISOLATION, 0);
};

NonReservedContext.prototype.LEVEL = function() {
    return this.getToken(helloParser.LEVEL, 0);
};

NonReservedContext.prototype.OFFSET = function() {
    return this.getToken(helloParser.OFFSET, 0);
};

NonReservedContext.prototype.SNAPSHOT = function() {
    return this.getToken(helloParser.SNAPSHOT, 0);
};

NonReservedContext.prototype.TRANSACTION = function() {
    return this.getToken(helloParser.TRANSACTION, 0);
};

NonReservedContext.prototype.WORK = function() {
    return this.getToken(helloParser.WORK, 0);
};

NonReservedContext.prototype.WRITE = function() {
    return this.getToken(helloParser.WRITE, 0);
};

NonReservedContext.prototype.ABORT = function() {
    return this.getToken(helloParser.ABORT, 0);
};

NonReservedContext.prototype.KEY = function() {
    return this.getToken(helloParser.KEY, 0);
};

NonReservedContext.prototype.LAST = function() {
    return this.getToken(helloParser.LAST, 0);
};

NonReservedContext.prototype.NORELY = function() {
    return this.getToken(helloParser.NORELY, 0);
};

NonReservedContext.prototype.NOVALIDATE = function() {
    return this.getToken(helloParser.NOVALIDATE, 0);
};

NonReservedContext.prototype.NULLS = function() {
    return this.getToken(helloParser.NULLS, 0);
};

NonReservedContext.prototype.RELY = function() {
    return this.getToken(helloParser.RELY, 0);
};

NonReservedContext.prototype.VALIDATE = function() {
    return this.getToken(helloParser.VALIDATE, 0);
};

NonReservedContext.prototype.DETAIL = function() {
    return this.getToken(helloParser.DETAIL, 0);
};

NonReservedContext.prototype.DOW = function() {
    return this.getToken(helloParser.DOW, 0);
};

NonReservedContext.prototype.EXPRESSION = function() {
    return this.getToken(helloParser.EXPRESSION, 0);
};

NonReservedContext.prototype.OPERATOR = function() {
    return this.getToken(helloParser.OPERATOR, 0);
};

NonReservedContext.prototype.QUARTER = function() {
    return this.getToken(helloParser.QUARTER, 0);
};

NonReservedContext.prototype.SUMMARY = function() {
    return this.getToken(helloParser.SUMMARY, 0);
};

NonReservedContext.prototype.VECTORIZATION = function() {
    return this.getToken(helloParser.VECTORIZATION, 0);
};

NonReservedContext.prototype.WEEK = function() {
    return this.getToken(helloParser.WEEK, 0);
};

NonReservedContext.prototype.YEARS = function() {
    return this.getToken(helloParser.YEARS, 0);
};

NonReservedContext.prototype.MONTHS = function() {
    return this.getToken(helloParser.MONTHS, 0);
};

NonReservedContext.prototype.WEEKS = function() {
    return this.getToken(helloParser.WEEKS, 0);
};

NonReservedContext.prototype.DAYS = function() {
    return this.getToken(helloParser.DAYS, 0);
};

NonReservedContext.prototype.HOURS = function() {
    return this.getToken(helloParser.HOURS, 0);
};

NonReservedContext.prototype.MINUTES = function() {
    return this.getToken(helloParser.MINUTES, 0);
};

NonReservedContext.prototype.SECONDS = function() {
    return this.getToken(helloParser.SECONDS, 0);
};

NonReservedContext.prototype.TIMESTAMPTZ = function() {
    return this.getToken(helloParser.TIMESTAMPTZ, 0);
};

NonReservedContext.prototype.ZONE = function() {
    return this.getToken(helloParser.ZONE, 0);
};

NonReservedContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterNonReserved(this);
	}
};

NonReservedContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitNonReserved(this);
	}
};

NonReservedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof helloVisitor ) {
        return visitor.visitNonReserved(this);
    } else {
        return visitor.visitChildren(this);
    }
};




helloParser.NonReservedContext = NonReservedContext;

helloParser.prototype.nonReserved = function() {

    var localctx = new NonReservedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, helloParser.RULE_nonReserved);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        _la = this._input.LA(1);
        if(!(((((_la - 139)) & ~0x1f) == 0 && ((1 << (_la - 139)) & ((1 << (helloParser.SHOW - 139)) | (1 << (helloParser.DATABASES - 139)) | (1 << (helloParser.SCHEMAS - 139)) | (1 << (helloParser.TABLES - 139)) | (1 << (helloParser.ADD - 139)) | (1 << (helloParser.ADMIN - 139)) | (1 << (helloParser.AFTER - 139)) | (1 << (helloParser.ANALYZE - 139)) | (1 << (helloParser.ARCHIVE - 139)) | (1 << (helloParser.ASC - 139)) | (1 << (helloParser.BEFORE - 139)) | (1 << (helloParser.BUCKET - 139)) | (1 << (helloParser.BUCKETS - 139)) | (1 << (helloParser.CASCADE - 139)) | (1 << (helloParser.CHANGE - 139)) | (1 << (helloParser.CLUSTER - 139)) | (1 << (helloParser.CLUSTERED - 139)) | (1 << (helloParser.CLUSTERSTATUS - 139)) | (1 << (helloParser.COLLECTION - 139)) | (1 << (helloParser.COLUMNS - 139)) | (1 << (helloParser.COMMENT - 139)) | (1 << (helloParser.COMPACT - 139)) | (1 << (helloParser.COMPACTIONS - 139)) | (1 << (helloParser.COMPUTE - 139)) | (1 << (helloParser.CONCATENATE - 139)) | (1 << (helloParser.CONTINUE - 139)) | (1 << (helloParser.DATA - 139)) | (1 << (helloParser.DATETIME - 139)) | (1 << (helloParser.DAY - 139)) | (1 << (helloParser.DBPROPERTIES - 139)) | (1 << (helloParser.DEFERRED - 139)) | (1 << (helloParser.DEFINED - 139)))) !== 0) || ((((_la - 171)) & ~0x1f) == 0 && ((1 << (_la - 171)) & ((1 << (helloParser.DELIMITED - 171)) | (1 << (helloParser.DEPENDENCY - 171)) | (1 << (helloParser.DESC - 171)) | (1 << (helloParser.DIRECTORIES - 171)) | (1 << (helloParser.DIRECTORY - 171)) | (1 << (helloParser.DISABLE - 171)) | (1 << (helloParser.DISTRIBUTE - 171)) | (1 << (helloParser.ELEM_TYPE - 171)) | (1 << (helloParser.ENABLE - 171)) | (1 << (helloParser.ESCAPED - 171)) | (1 << (helloParser.EXCLUSIVE - 171)) | (1 << (helloParser.EXPLAIN - 171)) | (1 << (helloParser.EXPORT - 171)) | (1 << (helloParser.FIELDS - 171)) | (1 << (helloParser.FILE - 171)) | (1 << (helloParser.FILEFORMAT - 171)) | (1 << (helloParser.FIRST - 171)) | (1 << (helloParser.FORMAT - 171)) | (1 << (helloParser.FORMATTED - 171)) | (1 << (helloParser.FUNCTIONS - 171)) | (1 << (helloParser.HOLD_DDLTIME - 171)) | (1 << (helloParser.HOUR - 171)) | (1 << (helloParser.IDXPROPERTIES - 171)) | (1 << (helloParser.IGNORE - 171)) | (1 << (helloParser.INDEX - 171)) | (1 << (helloParser.INDEXES - 171)) | (1 << (helloParser.INPATH - 171)) | (1 << (helloParser.INPUTDRIVER - 171)) | (1 << (helloParser.INPUTFORMAT - 171)) | (1 << (helloParser.ITEMS - 171)) | (1 << (helloParser.JAR - 171)) | (1 << (helloParser.KEYS - 171)))) !== 0) || ((((_la - 203)) & ~0x1f) == 0 && ((1 << (_la - 203)) & ((1 << (helloParser.KEY_TYPE - 203)) | (1 << (helloParser.LIMIT - 203)) | (1 << (helloParser.LINES - 203)) | (1 << (helloParser.LOAD - 203)) | (1 << (helloParser.LOCATION - 203)) | (1 << (helloParser.LOCK - 203)) | (1 << (helloParser.LOCKS - 203)) | (1 << (helloParser.LOGICAL - 203)) | (1 << (helloParser.LONG - 203)) | (1 << (helloParser.MAPJOIN - 203)) | (1 << (helloParser.MATERIALIZED - 203)) | (1 << (helloParser.METADATA - 203)) | (1 << (helloParser.MINUS - 203)) | (1 << (helloParser.MINUTE - 203)) | (1 << (helloParser.MONTH - 203)) | (1 << (helloParser.MSCK - 203)) | (1 << (helloParser.NOSCAN - 203)) | (1 << (helloParser.NO_DROP - 203)) | (1 << (helloParser.OFFLINE - 203)) | (1 << (helloParser.OPTION - 203)) | (1 << (helloParser.OUTPUTDRIVER - 203)) | (1 << (helloParser.OUTPUTFORMAT - 203)) | (1 << (helloParser.OVERWRITE - 203)) | (1 << (helloParser.OWNER - 203)) | (1 << (helloParser.PARTITIONED - 203)) | (1 << (helloParser.PARTITIONS - 203)) | (1 << (helloParser.PLUS - 203)) | (1 << (helloParser.PRETTY - 203)) | (1 << (helloParser.PRINCIPALS - 203)) | (1 << (helloParser.PROTECTION - 203)) | (1 << (helloParser.PURGE - 203)) | (1 << (helloParser.READ - 203)))) !== 0) || ((((_la - 235)) & ~0x1f) == 0 && ((1 << (_la - 235)) & ((1 << (helloParser.READONLY - 235)) | (1 << (helloParser.REBUILD - 235)) | (1 << (helloParser.RECORDREADER - 235)) | (1 << (helloParser.RECORDWRITER - 235)) | (1 << (helloParser.RELOAD - 235)) | (1 << (helloParser.RENAME - 235)) | (1 << (helloParser.REPAIR - 235)) | (1 << (helloParser.REPLACE - 235)) | (1 << (helloParser.REPLICATION - 235)) | (1 << (helloParser.RESTRICT - 235)) | (1 << (helloParser.REWRITE - 235)) | (1 << (helloParser.ROLE - 235)) | (1 << (helloParser.ROLES - 235)) | (1 << (helloParser.SCHEMA - 235)) | (1 << (helloParser.SECOND - 235)) | (1 << (helloParser.SEMI - 235)) | (1 << (helloParser.SERDE - 235)) | (1 << (helloParser.SERDEPROPERTIES - 235)) | (1 << (helloParser.SERVER - 235)) | (1 << (helloParser.SETS - 235)) | (1 << (helloParser.SHARED - 235)) | (1 << (helloParser.SHOW_DATABASE - 235)) | (1 << (helloParser.SKEWED - 235)) | (1 << (helloParser.SORT - 235)) | (1 << (helloParser.SORTED - 235)) | (1 << (helloParser.SSL - 235)) | (1 << (helloParser.STATISTICS - 235)) | (1 << (helloParser.STORED - 235)) | (1 << (helloParser.STREAMTABLE - 235)) | (1 << (helloParser.STRUCT - 235)) | (1 << (helloParser.TBLPROPERTIES - 235)) | (1 << (helloParser.TEMPORARY - 235)))) !== 0) || ((((_la - 267)) & ~0x1f) == 0 && ((1 << (_la - 267)) & ((1 << (helloParser.TERMINATED - 267)) | (1 << (helloParser.TINYINT - 267)) | (1 << (helloParser.TOUCH - 267)) | (1 << (helloParser.TRANSACTIONS - 267)) | (1 << (helloParser.UNARCHIVE - 267)) | (1 << (helloParser.UNDO - 267)) | (1 << (helloParser.UNIONTYPE - 267)) | (1 << (helloParser.UNLOCK - 267)) | (1 << (helloParser.UNSET - 267)) | (1 << (helloParser.UNSIGNED - 267)) | (1 << (helloParser.URI - 267)) | (1 << (helloParser.USE - 267)) | (1 << (helloParser.UTC - 267)) | (1 << (helloParser.UTCTIMESTAMP - 267)) | (1 << (helloParser.VALUE_TYPE - 267)) | (1 << (helloParser.VIEW - 267)) | (1 << (helloParser.WHILE - 267)) | (1 << (helloParser.YEAR - 267)) | (1 << (helloParser.AUTOCOMMIT - 267)) | (1 << (helloParser.ISOLATION - 267)) | (1 << (helloParser.LEVEL - 267)) | (1 << (helloParser.OFFSET - 267)) | (1 << (helloParser.SNAPSHOT - 267)) | (1 << (helloParser.TRANSACTION - 267)) | (1 << (helloParser.WORK - 267)) | (1 << (helloParser.WRITE - 267)) | (1 << (helloParser.ABORT - 267)) | (1 << (helloParser.KEY - 267)) | (1 << (helloParser.LAST - 267)) | (1 << (helloParser.NORELY - 267)) | (1 << (helloParser.NOVALIDATE - 267)) | (1 << (helloParser.NULLS - 267)))) !== 0) || ((((_la - 299)) & ~0x1f) == 0 && ((1 << (_la - 299)) & ((1 << (helloParser.RELY - 299)) | (1 << (helloParser.VALIDATE - 299)) | (1 << (helloParser.DETAIL - 299)) | (1 << (helloParser.DOW - 299)) | (1 << (helloParser.EXPRESSION - 299)) | (1 << (helloParser.OPERATOR - 299)) | (1 << (helloParser.QUARTER - 299)) | (1 << (helloParser.SUMMARY - 299)) | (1 << (helloParser.VECTORIZATION - 299)) | (1 << (helloParser.WEEK - 299)) | (1 << (helloParser.YEARS - 299)) | (1 << (helloParser.MONTHS - 299)) | (1 << (helloParser.WEEKS - 299)) | (1 << (helloParser.DAYS - 299)) | (1 << (helloParser.HOURS - 299)) | (1 << (helloParser.MINUTES - 299)) | (1 << (helloParser.SECONDS - 299)) | (1 << (helloParser.TIMESTAMPTZ - 299)) | (1 << (helloParser.ZONE - 299)) | (1 << (helloParser.STRING - 299)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.helloParser = helloParser;
