// Generated from /Users/xuexiaokang/Documents/github/antlr-demo/grammar/hello/hive.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class hiveParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, ALL=5, ALTER=6, AND=7, ARRAY=8, AS=9, 
		AUTHORIZATION=10, BETWEEN=11, BIGINT=12, BINARY=13, BOOLEAN=14, BOTH=15, 
		BY=16, CASE=17, CAST=18, CHAR=19, COLUMN=20, CONF=21, CREATE=22, CROSS=23, 
		CUBE=24, CURRENT=25, CURRENT_DATE=26, CURRENT_TIMESTAMP=27, CURSOR=28, 
		DATABASE=29, DATE=30, DECIMAL=31, DELETE=32, DESCRIBE=33, DISTINCT=34, 
		DOUBLE=35, DROP=36, ELSE=37, END=38, EXCHANGE=39, EXISTS=40, EXTENDED=41, 
		EXTERNAL=42, FALSE=43, FETCH=44, FLOAT=45, FOLLOWING=46, FOR=47, FROM=48, 
		FULL=49, FUNCTION=50, GRANT=51, GROUP=52, GROUPING=53, HAVING=54, IF=55, 
		IMPORT=56, IN=57, INNER=58, INSERT=59, INT=60, INTERSECT=61, INTERVAL=62, 
		INTO=63, IS=64, JOIN=65, LATERAL=66, LEFT=67, LESS=68, LIKE=69, LOCAL=70, 
		MACRO=71, MAP=72, MORE1=73, NONE=74, NOT=75, NULL=76, OF=77, ON=78, OR=79, 
		ORDER=80, OUT=81, OUTER=82, OVER=83, PARTIALSCAN=84, PARTITION=85, PERCENT=86, 
		PRECEDING=87, PRESERVE=88, PROCEDURE=89, RANGE=90, READS=91, REDUCE=92, 
		REVOKE=93, RIGHT=94, ROLLUP=95, ROW=96, ROWS=97, SELECT=98, SET=99, SMALLINT=100, 
		TABLE=101, TABLESAMPLE=102, THEN=103, TIMESTAMP=104, TO=105, TRANSFORM=106, 
		TRIGGER=107, TRUE=108, TRUNCATE=109, UNBOUNDED=110, UNION=111, UNIQUEJOIN=112, 
		UPDATE=113, USER=114, USING=115, UTC_TMESTAMP=116, VALUES=117, VARCHAR=118, 
		WHEN=119, WHERE=120, WINDOW=121, WITH=122, COMMIT=123, ONLY=124, REGEXP=125, 
		RLIKE=126, ROLLBACK=127, START=128, CACHE=129, CONSTRAINT=130, FOREIGN=131, 
		PRIMARY=132, REFERENCES=133, DAYOFWEEK=134, EXTRACT=135, FLOOR=136, INTEGER=137, 
		PRECISION=138, VIEWS=139, TIME=140, NUMERIC=141, SYNC=142, SHOW=143, DATABASES=144, 
		SCHEMAS=145, TABLES=146, ADD=147, ADMIN=148, AFTER=149, ANALYZE=150, ARCHIVE=151, 
		ASC=152, BEFORE=153, BUCKET=154, BUCKETS=155, CASCADE=156, CHANGE=157, 
		CLUSTER=158, CLUSTERED=159, CLUSTERSTATUS=160, COLLECTION=161, COLUMNS=162, 
		COMMENT=163, COMPACT=164, COMPACTIONS=165, COMPUTE=166, CONCATENATE=167, 
		CONTINUE=168, DATA=169, DATETIME=170, DAY=171, DBPROPERTIES=172, DEFERRED=173, 
		DEFINED=174, DELIMITED=175, DEPENDENCY=176, DESC=177, DIRECTORIES=178, 
		DIRECTORY=179, DISABLE=180, DISTRIBUTE=181, ELEM_TYPE=182, ENABLE=183, 
		ESCAPED=184, EXCLUSIVE=185, EXPLAIN=186, EXPORT=187, FIELDS=188, FILE=189, 
		FILEFORMAT=190, FIRST=191, FORMAT=192, FORMATTED=193, FUNCTIONS=194, HOLD_DDLTIME=195, 
		HOUR=196, IDXPROPERTIES=197, IGNORE=198, INDEX=199, INDEXES=200, INPATH=201, 
		INPUTDRIVER=202, INPUTFORMAT=203, ITEMS=204, JAR=205, KEYS=206, KEY_TYPE=207, 
		LIMIT=208, LINES=209, LOAD=210, LOCATION=211, LOCK=212, LOCKS=213, LOGICAL=214, 
		LONG=215, MAPJOIN=216, MATERIALIZED=217, METADATA=218, SETMINUS=219, MINUTE=220, 
		MONTH=221, MSCK=222, NOSCAN=223, NO_DROP=224, OFFLINE=225, OPTION=226, 
		OUTPUTDRIVER=227, OUTPUTFORMAT=228, OVERWRITE=229, OWNER=230, PARTITIONED=231, 
		PARTITIONS=232, SETPLUS=233, PRETTY=234, PRINCIPALS=235, PROTECTION=236, 
		PURGE=237, READ=238, READONLY=239, REBUILD=240, RECORDREADER=241, RECORDWRITER=242, 
		RELOAD=243, RENAME=244, REPAIR=245, REPLACE=246, REPLICATION=247, RESTRICT=248, 
		REWRITE=249, ROLE=250, ROLES=251, SCHEMA=252, SECOND=253, SEMI=254, SERDE=255, 
		SERDEPROPERTIES=256, SERVER=257, SETS=258, SHARED=259, SHOW_DATABASE=260, 
		SKEWED=261, SORT=262, SORTED=263, SSL=264, STATISTICS=265, STORED=266, 
		STREAMTABLE=267, STRUCT=268, TBLPROPERTIES=269, TEMPORARY=270, TERMINATED=271, 
		TINYINT=272, TOUCH=273, TRANSACTIONS=274, UNARCHIVE=275, UNDO=276, UNIONTYPE=277, 
		UNLOCK=278, UNSET=279, UNSIGNED=280, URI=281, USE=282, UTC=283, UTCTIMESTAMP=284, 
		VALUE_TYPE=285, VIEW=286, WHILE=287, YEAR=288, AUTOCOMMIT=289, ISOLATION=290, 
		LEVEL=291, OFFSET=292, SNAPSHOT=293, TRANSACTION=294, WORK=295, WRITE=296, 
		ABORT=297, KEY=298, LAST=299, NORELY=300, NOVALIDATE=301, NULLS=302, RELY=303, 
		VALIDATE=304, DETAIL=305, DOW=306, EXPRESSION=307, OPERATOR=308, QUARTER=309, 
		SUMMARY=310, VECTORIZATION=311, WEEK=312, YEARS=313, MONTHS=314, WEEKS=315, 
		DAYS=316, HOURS=317, MINUTES=318, SECONDS=319, TIMESTAMPTZ=320, ZONE=321, 
		EQ=322, PLUS=323, MINUS=324, STRING=325, VARIABLE_REFERENCE=326, INTEGER_VALUE=327, 
		IDENTIFIER=328, BIGINT_LITERAL=329, SMALLINT_LITERAL=330, TINYINT_LITERAL=331, 
		DECIMAL_VALUE=332, DOUBLE_LITERAL=333, BIGDECIMAL_LITERAL=334, BACKQUOTED_IDENTIFIER=335, 
		WS=336;
	public static final int
		RULE_singleStatement = 0, RULE_showStatement = 1, RULE_showDataBases = 2, 
		RULE_showTables = 3, RULE_showTableExtended = 4, RULE_showViews = 5, RULE_showPartitions = 6, 
		RULE_showTableProperties = 7, RULE_showCreateTable = 8, RULE_showColumns = 9, 
		RULE_showFunctions = 10, RULE_showLocks = 11, RULE_showConf = 12, RULE_showTransactions = 13, 
		RULE_showCompactions = 14, RULE_partitionSpec = 15, RULE_partitionVal = 16, 
		RULE_databaseName = 17, RULE_tableName = 18, RULE_tablePropertyList = 19, 
		RULE_tableProperty = 20, RULE_tablePropertyKey = 21, RULE_configurationName = 22, 
		RULE_tablePropertyValue = 23, RULE_constant = 24, RULE_interval = 25, 
		RULE_intervalField = 26, RULE_intervalValue = 27, RULE_number = 28, RULE_booleanValue = 29, 
		RULE_identifier = 30, RULE_strictIdentifier = 31, RULE_quotedIdentifier = 32, 
		RULE_nonReserved = 33;
	public static final String[] ruleNames = {
		"singleStatement", "showStatement", "showDataBases", "showTables", "showTableExtended", 
		"showViews", "showPartitions", "showTableProperties", "showCreateTable", 
		"showColumns", "showFunctions", "showLocks", "showConf", "showTransactions", 
		"showCompactions", "partitionSpec", "partitionVal", "databaseName", "tableName", 
		"tablePropertyList", "tableProperty", "tablePropertyKey", "configurationName", 
		"tablePropertyValue", "constant", "interval", "intervalField", "intervalValue", 
		"number", "booleanValue", "identifier", "strictIdentifier", "quotedIdentifier", 
		"nonReserved"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'('", "','", "')'", "'.'", "'ALL'", "'ALTER'", "'AND'", "'ARRAY'", 
		"'AS'", "'AUTHORIZATION'", "'BETWEEN'", "'BIGINT'", "'BINARY'", "'BOOLEAN'", 
		"'BOTH'", "'BY'", "'CASE'", "'CAST'", "'CHAR'", "'COLUMN'", "'CONF'", 
		"'CREATE'", "'CROSS'", "'CUBE'", "'CURRENT'", "'CURRENT_DATE'", "'CURRENT_TIMESTAMP'", 
		"'CURSOR'", "'DATABASE'", "'DATE'", "'DECIMAL'", "'DELETE'", "'DESCRIBE'", 
		"'DISTINCT'", "'DOUBLE'", "'DROP'", "'ELSE'", "'END'", "'EXCHANGE'", "'EXISTS'", 
		"'EXTENDED'", "'EXTERNAL'", "'FALSE'", "'FETCH'", "'FLOAT'", "'FOLLOWING'", 
		"'FOR'", "'FROM'", "'FULL'", "'FUNCTION'", "'GRANT'", "'GROUP'", "'GROUPING'", 
		"'HAVING'", "'IF'", "'IMPORT'", "'IN'", "'INNER'", "'INSERT'", "'INT'", 
		"'INTERSECT'", "'INTERVAL'", "'INTO'", "'IS'", "'JOIN'", "'LATERAL'", 
		"'LEFT'", "'LESS'", "'LIKE'", "'LOCAL'", "'MACRO'", "'MAP'", "'MORE'", 
		"'NONE'", "'NOT'", "'NULL'", "'OF'", "'ON'", "'OR'", "'ORDER'", "'OUT'", 
		"'OUTER'", "'OVER'", "'PARTIALSCAN'", "'PARTITION'", "'PERCENT'", "'PRECEDING'", 
		"'PRESERVE'", "'PROCEDURE'", "'RANGE'", "'READS'", "'REDUCE'", "'REVOKE'", 
		"'RIGHT'", "'ROLLUP'", "'ROW'", "'ROWS'", "'SELECT'", "'SET'", "'SMALLINT'", 
		"'TABLE'", "'TABLESAMPLE'", "'THEN'", "'TIMESTAMP'", "'TO'", "'TRANSFORM'", 
		"'TRIGGER'", "'TRUE'", "'TRUNCATE'", "'UNBOUNDED'", "'UNION'", "'UNIQUEJOIN'", 
		"'UPDATE'", "'USER'", "'USING'", "'UTC_TMESTAMP'", "'VALUES'", "'VARCHAR'", 
		"'WHEN'", "'WHERE'", "'WINDOW'", "'WITH'", "'COMMIT'", "'ONLY'", "'REGEXP'", 
		"'RLIKE'", "'ROLLBACK'", "'START'", "'CACHE'", "'CONSTRAINT'", "'FOREIGN'", 
		"'PRIMARY'", "'REFERENCES'", "'DAYOFWEEK'", "'EXTRACT'", "'FLOOR'", "'INTEGER'", 
		"'PRECISION'", "'VIEWS'", "'TIME'", "'NUMERIC'", "'SYNC'", "'SHOW'", "'DATABASES'", 
		"'SCHEMAS'", "'TABLES'", "'ADD'", "'ADMIN'", "'AFTER'", "'ANALYZE'", "'ARCHIVE'", 
		"'ASC'", "'BEFORE'", "'BUCKET'", "'BUCKETS'", "'CASCADE'", "'CHANGE'", 
		"'CLUSTER'", "'CLUSTERED'", "'CLUSTERSTATUS'", "'COLLECTION'", "'COLUMNS'", 
		"'COMMENT'", "'COMPACT'", "'COMPACTIONS'", "'COMPUTE'", "'CONCATENATE'", 
		"'CONTINUE'", "'DATA'", "'DATETIME'", "'DAY'", "'DBPROPERTIES'", "'DEFERRED'", 
		"'DEFINED'", "'DELIMITED'", "'DEPENDENCY'", "'DESC'", "'DIRECTORIES'", 
		"'DIRECTORY'", "'DISABLE'", "'DISTRIBUTE'", "'ELEM_TYPE'", "'ENABLE'", 
		"'ESCAPED'", "'EXCLUSIVE'", "'EXPLAIN'", "'EXPORT'", "'FIELDS'", "'FILE'", 
		"'FILEFORMAT'", "'FIRST'", "'FORMAT'", "'FORMATTED'", "'FUNCTIONS'", "'HOLD_DDLTIME'", 
		"'HOUR'", "'IDXPROPERTIES'", "'IGNORE'", "'INDEX'", "'INDEXES'", "'INPATH'", 
		"'INPUTDRIVER'", "'INPUTFORMAT'", "'ITEMS'", "'JAR'", "'KEYS'", "'KEY_TYPE'", 
		"'LIMIT'", "'LINES'", "'LOAD'", "'LOCATION'", "'LOCK'", "'LOCKS'", "'LOGICAL'", 
		"'LONG'", "'MAPJOIN'", "'MATERIALIZED'", "'METADATA'", "'MINUS'", "'MINUTE'", 
		"'MONTH'", "'MSCK'", "'NOSCAN'", "'NO_DROP'", "'OFFLINE'", "'OPTION'", 
		"'OUTPUTDRIVER'", "'OUTPUTFORMAT'", "'OVERWRITE'", "'OWNER'", "'PARTITIONED'", 
		"'PARTITIONS'", "'PLUS'", "'PRETTY'", "'PRINCIPALS'", "'PROTECTION'", 
		"'PURGE'", "'READ'", "'READONLY'", "'REBUILD'", "'RECORDREADER'", "'RECORDWRITER'", 
		"'RELOAD'", "'RENAME'", "'REPAIR'", "'REPLACE'", "'REPLICATION'", "'RESTRICT'", 
		"'REWRITE'", "'ROLE'", "'ROLES'", "'SCHEMA'", "'SECOND'", "'SEMI'", "'SERDE'", 
		"'SERDEPROPERTIES'", "'SERVER'", "'SETS'", "'SHARED'", "'SHOW_DATABASE'", 
		"'SKEWED'", "'SORT'", "'SORTED'", "'SSL'", "'STATISTICS'", "'STORED'", 
		"'STREAMTABLE'", "'STRUCT'", "'TBLPROPERTIES'", "'TEMPORARY'", "'TERMINATED'", 
		"'TINYINT'", "'TOUCH'", "'TRANSACTIONS'", "'UNARCHIVE'", "'UNDO'", "'UNIONTYPE'", 
		"'UNLOCK'", "'UNSET'", "'UNSIGNED'", "'URI'", "'USE'", "'UTC'", "'UTCTIMESTAMP'", 
		"'VALUE_TYPE'", "'VIEW'", "'WHILE'", "'YEAR'", "'AUTOCOMMIT'", "'ISOLATION'", 
		"'LEVEL'", "'OFFSET'", "'SNAPSHOT'", "'TRANSACTION'", "'WORK'", "'WRITE'", 
		"'ABORT'", "'KEY'", "'LAST'", "'NORELY'", "'NOVALIDATE'", "'NULLS'", "'RELY'", 
		"'VALIDATE'", "'DETAIL'", "'DOW'", "'EXPRESSION'", "'OPERATOR'", "'QUARTER'", 
		"'SUMMARY'", "'VECTORIZATION'", "'WEEK'", "'YEARS'", "'MONTHS'", "'WEEKS'", 
		"'DAYS'", "'HOURS'", "'MINUTES'", "'SECONDS'", "'TIMESTAMPTZ'", "'ZONE'", 
		null, "'+'", "'-'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, "ALL", "ALTER", "AND", "ARRAY", "AS", "AUTHORIZATION", 
		"BETWEEN", "BIGINT", "BINARY", "BOOLEAN", "BOTH", "BY", "CASE", "CAST", 
		"CHAR", "COLUMN", "CONF", "CREATE", "CROSS", "CUBE", "CURRENT", "CURRENT_DATE", 
		"CURRENT_TIMESTAMP", "CURSOR", "DATABASE", "DATE", "DECIMAL", "DELETE", 
		"DESCRIBE", "DISTINCT", "DOUBLE", "DROP", "ELSE", "END", "EXCHANGE", "EXISTS", 
		"EXTENDED", "EXTERNAL", "FALSE", "FETCH", "FLOAT", "FOLLOWING", "FOR", 
		"FROM", "FULL", "FUNCTION", "GRANT", "GROUP", "GROUPING", "HAVING", "IF", 
		"IMPORT", "IN", "INNER", "INSERT", "INT", "INTERSECT", "INTERVAL", "INTO", 
		"IS", "JOIN", "LATERAL", "LEFT", "LESS", "LIKE", "LOCAL", "MACRO", "MAP", 
		"MORE1", "NONE", "NOT", "NULL", "OF", "ON", "OR", "ORDER", "OUT", "OUTER", 
		"OVER", "PARTIALSCAN", "PARTITION", "PERCENT", "PRECEDING", "PRESERVE", 
		"PROCEDURE", "RANGE", "READS", "REDUCE", "REVOKE", "RIGHT", "ROLLUP", 
		"ROW", "ROWS", "SELECT", "SET", "SMALLINT", "TABLE", "TABLESAMPLE", "THEN", 
		"TIMESTAMP", "TO", "TRANSFORM", "TRIGGER", "TRUE", "TRUNCATE", "UNBOUNDED", 
		"UNION", "UNIQUEJOIN", "UPDATE", "USER", "USING", "UTC_TMESTAMP", "VALUES", 
		"VARCHAR", "WHEN", "WHERE", "WINDOW", "WITH", "COMMIT", "ONLY", "REGEXP", 
		"RLIKE", "ROLLBACK", "START", "CACHE", "CONSTRAINT", "FOREIGN", "PRIMARY", 
		"REFERENCES", "DAYOFWEEK", "EXTRACT", "FLOOR", "INTEGER", "PRECISION", 
		"VIEWS", "TIME", "NUMERIC", "SYNC", "SHOW", "DATABASES", "SCHEMAS", "TABLES", 
		"ADD", "ADMIN", "AFTER", "ANALYZE", "ARCHIVE", "ASC", "BEFORE", "BUCKET", 
		"BUCKETS", "CASCADE", "CHANGE", "CLUSTER", "CLUSTERED", "CLUSTERSTATUS", 
		"COLLECTION", "COLUMNS", "COMMENT", "COMPACT", "COMPACTIONS", "COMPUTE", 
		"CONCATENATE", "CONTINUE", "DATA", "DATETIME", "DAY", "DBPROPERTIES", 
		"DEFERRED", "DEFINED", "DELIMITED", "DEPENDENCY", "DESC", "DIRECTORIES", 
		"DIRECTORY", "DISABLE", "DISTRIBUTE", "ELEM_TYPE", "ENABLE", "ESCAPED", 
		"EXCLUSIVE", "EXPLAIN", "EXPORT", "FIELDS", "FILE", "FILEFORMAT", "FIRST", 
		"FORMAT", "FORMATTED", "FUNCTIONS", "HOLD_DDLTIME", "HOUR", "IDXPROPERTIES", 
		"IGNORE", "INDEX", "INDEXES", "INPATH", "INPUTDRIVER", "INPUTFORMAT", 
		"ITEMS", "JAR", "KEYS", "KEY_TYPE", "LIMIT", "LINES", "LOAD", "LOCATION", 
		"LOCK", "LOCKS", "LOGICAL", "LONG", "MAPJOIN", "MATERIALIZED", "METADATA", 
		"SETMINUS", "MINUTE", "MONTH", "MSCK", "NOSCAN", "NO_DROP", "OFFLINE", 
		"OPTION", "OUTPUTDRIVER", "OUTPUTFORMAT", "OVERWRITE", "OWNER", "PARTITIONED", 
		"PARTITIONS", "SETPLUS", "PRETTY", "PRINCIPALS", "PROTECTION", "PURGE", 
		"READ", "READONLY", "REBUILD", "RECORDREADER", "RECORDWRITER", "RELOAD", 
		"RENAME", "REPAIR", "REPLACE", "REPLICATION", "RESTRICT", "REWRITE", "ROLE", 
		"ROLES", "SCHEMA", "SECOND", "SEMI", "SERDE", "SERDEPROPERTIES", "SERVER", 
		"SETS", "SHARED", "SHOW_DATABASE", "SKEWED", "SORT", "SORTED", "SSL", 
		"STATISTICS", "STORED", "STREAMTABLE", "STRUCT", "TBLPROPERTIES", "TEMPORARY", 
		"TERMINATED", "TINYINT", "TOUCH", "TRANSACTIONS", "UNARCHIVE", "UNDO", 
		"UNIONTYPE", "UNLOCK", "UNSET", "UNSIGNED", "URI", "USE", "UTC", "UTCTIMESTAMP", 
		"VALUE_TYPE", "VIEW", "WHILE", "YEAR", "AUTOCOMMIT", "ISOLATION", "LEVEL", 
		"OFFSET", "SNAPSHOT", "TRANSACTION", "WORK", "WRITE", "ABORT", "KEY", 
		"LAST", "NORELY", "NOVALIDATE", "NULLS", "RELY", "VALIDATE", "DETAIL", 
		"DOW", "EXPRESSION", "OPERATOR", "QUARTER", "SUMMARY", "VECTORIZATION", 
		"WEEK", "YEARS", "MONTHS", "WEEKS", "DAYS", "HOURS", "MINUTES", "SECONDS", 
		"TIMESTAMPTZ", "ZONE", "EQ", "PLUS", "MINUS", "STRING", "VARIABLE_REFERENCE", 
		"INTEGER_VALUE", "IDENTIFIER", "BIGINT_LITERAL", "SMALLINT_LITERAL", "TINYINT_LITERAL", 
		"DECIMAL_VALUE", "DOUBLE_LITERAL", "BIGDECIMAL_LITERAL", "BACKQUOTED_IDENTIFIER", 
		"WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "hive.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public hiveParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class SingleStatementContext extends ParserRuleContext {
		public ShowStatementContext showStatement() {
			return getRuleContext(ShowStatementContext.class,0);
		}
		public TerminalNode EOF() { return getToken(hiveParser.EOF, 0); }
		public SingleStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleStatement; }
	}

	public final SingleStatementContext singleStatement() throws RecognitionException {
		SingleStatementContext _localctx = new SingleStatementContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_singleStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			showStatement();
			setState(69);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowStatementContext extends ParserRuleContext {
		public ShowDataBasesContext showDataBases() {
			return getRuleContext(ShowDataBasesContext.class,0);
		}
		public ShowTablesContext showTables() {
			return getRuleContext(ShowTablesContext.class,0);
		}
		public ShowViewsContext showViews() {
			return getRuleContext(ShowViewsContext.class,0);
		}
		public ShowPartitionsContext showPartitions() {
			return getRuleContext(ShowPartitionsContext.class,0);
		}
		public ShowTableExtendedContext showTableExtended() {
			return getRuleContext(ShowTableExtendedContext.class,0);
		}
		public ShowTablePropertiesContext showTableProperties() {
			return getRuleContext(ShowTablePropertiesContext.class,0);
		}
		public ShowCreateTableContext showCreateTable() {
			return getRuleContext(ShowCreateTableContext.class,0);
		}
		public ShowColumnsContext showColumns() {
			return getRuleContext(ShowColumnsContext.class,0);
		}
		public ShowStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showStatement; }
	}

	public final ShowStatementContext showStatement() throws RecognitionException {
		ShowStatementContext _localctx = new ShowStatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_showStatement);
		try {
			setState(79);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(71);
				showDataBases();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(72);
				showTables();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(73);
				showViews();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(74);
				showPartitions();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(75);
				showTableExtended();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(76);
				showTableProperties();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(77);
				showCreateTable();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(78);
				showColumns();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowDataBasesContext extends ParserRuleContext {
		public Token pattern;
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode DATABASES() { return getToken(hiveParser.DATABASES, 0); }
		public TerminalNode SCHEMAS() { return getToken(hiveParser.SCHEMAS, 0); }
		public TerminalNode LIKE() { return getToken(hiveParser.LIKE, 0); }
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public ShowDataBasesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showDataBases; }
	}

	public final ShowDataBasesContext showDataBases() throws RecognitionException {
		ShowDataBasesContext _localctx = new ShowDataBasesContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_showDataBases);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(SHOW);
			setState(82);
			_la = _input.LA(1);
			if ( !(_la==DATABASES || _la==SCHEMAS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIKE) {
				{
				setState(83);
				match(LIKE);
				setState(84);
				((ShowDataBasesContext)_localctx).pattern = match(STRING);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowTablesContext extends ParserRuleContext {
		public Token pattern;
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode TABLES() { return getToken(hiveParser.TABLES, 0); }
		public TerminalNode IN() { return getToken(hiveParser.IN, 0); }
		public DatabaseNameContext databaseName() {
			return getRuleContext(DatabaseNameContext.class,0);
		}
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public ShowTablesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showTables; }
	}

	public final ShowTablesContext showTables() throws RecognitionException {
		ShowTablesContext _localctx = new ShowTablesContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_showTables);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			match(SHOW);
			setState(88);
			match(TABLES);
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IN) {
				{
				setState(89);
				match(IN);
				setState(90);
				databaseName();
				}
			}

			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STRING) {
				{
				setState(93);
				((ShowTablesContext)_localctx).pattern = match(STRING);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowTableExtendedContext extends ParserRuleContext {
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode TABLE() { return getToken(hiveParser.TABLE, 0); }
		public TerminalNode EXTENDED() { return getToken(hiveParser.EXTENDED, 0); }
		public TerminalNode LIKE() { return getToken(hiveParser.LIKE, 0); }
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public DatabaseNameContext databaseName() {
			return getRuleContext(DatabaseNameContext.class,0);
		}
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public TerminalNode IN() { return getToken(hiveParser.IN, 0); }
		public TerminalNode FROM() { return getToken(hiveParser.FROM, 0); }
		public ShowTableExtendedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showTableExtended; }
	}

	public final ShowTableExtendedContext showTableExtended() throws RecognitionException {
		ShowTableExtendedContext _localctx = new ShowTableExtendedContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_showTableExtended);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(SHOW);
			setState(97);
			match(TABLE);
			setState(98);
			match(EXTENDED);
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FROM || _la==IN) {
				{
				setState(99);
				_la = _input.LA(1);
				if ( !(_la==FROM || _la==IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(100);
				databaseName();
				}
			}

			setState(103);
			match(LIKE);
			setState(104);
			match(STRING);
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PARTITION) {
				{
				setState(105);
				partitionSpec();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowViewsContext extends ParserRuleContext {
		public Token pattern;
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode VIEWS() { return getToken(hiveParser.VIEWS, 0); }
		public TerminalNode MATERIALIZED() { return getToken(hiveParser.MATERIALIZED, 0); }
		public DatabaseNameContext databaseName() {
			return getRuleContext(DatabaseNameContext.class,0);
		}
		public TerminalNode LIKE() { return getToken(hiveParser.LIKE, 0); }
		public TerminalNode IN() { return getToken(hiveParser.IN, 0); }
		public TerminalNode FROM() { return getToken(hiveParser.FROM, 0); }
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public ShowViewsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showViews; }
	}

	public final ShowViewsContext showViews() throws RecognitionException {
		ShowViewsContext _localctx = new ShowViewsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_showViews);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(SHOW);
			setState(109);
			_la = _input.LA(1);
			if ( !(_la==VIEWS || _la==MATERIALIZED) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FROM || _la==IN) {
				{
				setState(110);
				_la = _input.LA(1);
				if ( !(_la==FROM || _la==IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(111);
				databaseName();
				}
			}

			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIKE) {
				{
				setState(114);
				match(LIKE);
				setState(115);
				((ShowViewsContext)_localctx).pattern = match(STRING);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowPartitionsContext extends ParserRuleContext {
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode PARTITIONS() { return getToken(hiveParser.PARTITIONS, 0); }
		public TableNameContext tableName() {
			return getRuleContext(TableNameContext.class,0);
		}
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public ShowPartitionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showPartitions; }
	}

	public final ShowPartitionsContext showPartitions() throws RecognitionException {
		ShowPartitionsContext _localctx = new ShowPartitionsContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_showPartitions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(SHOW);
			setState(119);
			match(PARTITIONS);
			setState(120);
			tableName();
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PARTITION) {
				{
				setState(121);
				partitionSpec();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowTablePropertiesContext extends ParserRuleContext {
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode TBLPROPERTIES() { return getToken(hiveParser.TBLPROPERTIES, 0); }
		public TableNameContext tableName() {
			return getRuleContext(TableNameContext.class,0);
		}
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public ShowTablePropertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showTableProperties; }
	}

	public final ShowTablePropertiesContext showTableProperties() throws RecognitionException {
		ShowTablePropertiesContext _localctx = new ShowTablePropertiesContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_showTableProperties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			match(SHOW);
			setState(125);
			match(TBLPROPERTIES);
			setState(126);
			tableName();
			setState(128);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(127);
				tablePropertyList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowCreateTableContext extends ParserRuleContext {
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode CREATE() { return getToken(hiveParser.CREATE, 0); }
		public TerminalNode TABLE() { return getToken(hiveParser.TABLE, 0); }
		public TableNameContext tableName() {
			return getRuleContext(TableNameContext.class,0);
		}
		public ShowCreateTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showCreateTable; }
	}

	public final ShowCreateTableContext showCreateTable() throws RecognitionException {
		ShowCreateTableContext _localctx = new ShowCreateTableContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_showCreateTable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			match(SHOW);
			setState(131);
			match(CREATE);
			setState(132);
			match(TABLE);
			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 23)) & ~0x3f) == 0 && ((1L << (_la - 23)) & ((1L << (CROSS - 23)) | (1L << (FULL - 23)) | (1L << (INNER - 23)) | (1L << (INTERSECT - 23)) | (1L << (JOIN - 23)) | (1L << (LEFT - 23)) | (1L << (ON - 23)))) != 0) || ((((_la - 94)) & ~0x3f) == 0 && ((1L << (_la - 94)) & ((1L << (RIGHT - 94)) | (1L << (UNION - 94)) | (1L << (SHOW - 94)) | (1L << (DATABASES - 94)) | (1L << (SCHEMAS - 94)) | (1L << (TABLES - 94)) | (1L << (ADD - 94)) | (1L << (ADMIN - 94)) | (1L << (AFTER - 94)) | (1L << (ANALYZE - 94)) | (1L << (ARCHIVE - 94)) | (1L << (ASC - 94)) | (1L << (BEFORE - 94)) | (1L << (BUCKET - 94)) | (1L << (BUCKETS - 94)) | (1L << (CASCADE - 94)) | (1L << (CHANGE - 94)))) != 0) || ((((_la - 158)) & ~0x3f) == 0 && ((1L << (_la - 158)) & ((1L << (CLUSTER - 158)) | (1L << (CLUSTERED - 158)) | (1L << (CLUSTERSTATUS - 158)) | (1L << (COLLECTION - 158)) | (1L << (COLUMNS - 158)) | (1L << (COMMENT - 158)) | (1L << (COMPACT - 158)) | (1L << (COMPACTIONS - 158)) | (1L << (COMPUTE - 158)) | (1L << (CONCATENATE - 158)) | (1L << (CONTINUE - 158)) | (1L << (DATA - 158)) | (1L << (DATETIME - 158)) | (1L << (DAY - 158)) | (1L << (DBPROPERTIES - 158)) | (1L << (DEFERRED - 158)) | (1L << (DEFINED - 158)) | (1L << (DELIMITED - 158)) | (1L << (DEPENDENCY - 158)) | (1L << (DESC - 158)) | (1L << (DIRECTORIES - 158)) | (1L << (DIRECTORY - 158)) | (1L << (DISABLE - 158)) | (1L << (DISTRIBUTE - 158)) | (1L << (ELEM_TYPE - 158)) | (1L << (ENABLE - 158)) | (1L << (ESCAPED - 158)) | (1L << (EXCLUSIVE - 158)) | (1L << (EXPLAIN - 158)) | (1L << (EXPORT - 158)) | (1L << (FIELDS - 158)) | (1L << (FILE - 158)) | (1L << (FILEFORMAT - 158)) | (1L << (FIRST - 158)) | (1L << (FORMAT - 158)) | (1L << (FORMATTED - 158)) | (1L << (FUNCTIONS - 158)) | (1L << (HOLD_DDLTIME - 158)) | (1L << (HOUR - 158)) | (1L << (IDXPROPERTIES - 158)) | (1L << (IGNORE - 158)) | (1L << (INDEX - 158)) | (1L << (INDEXES - 158)) | (1L << (INPATH - 158)) | (1L << (INPUTDRIVER - 158)) | (1L << (INPUTFORMAT - 158)) | (1L << (ITEMS - 158)) | (1L << (JAR - 158)) | (1L << (KEYS - 158)) | (1L << (KEY_TYPE - 158)) | (1L << (LIMIT - 158)) | (1L << (LINES - 158)) | (1L << (LOAD - 158)) | (1L << (LOCATION - 158)) | (1L << (LOCK - 158)) | (1L << (LOCKS - 158)) | (1L << (LOGICAL - 158)) | (1L << (LONG - 158)) | (1L << (MAPJOIN - 158)) | (1L << (MATERIALIZED - 158)) | (1L << (METADATA - 158)) | (1L << (SETMINUS - 158)) | (1L << (MINUTE - 158)) | (1L << (MONTH - 158)))) != 0) || ((((_la - 222)) & ~0x3f) == 0 && ((1L << (_la - 222)) & ((1L << (MSCK - 222)) | (1L << (NOSCAN - 222)) | (1L << (NO_DROP - 222)) | (1L << (OFFLINE - 222)) | (1L << (OPTION - 222)) | (1L << (OUTPUTDRIVER - 222)) | (1L << (OUTPUTFORMAT - 222)) | (1L << (OVERWRITE - 222)) | (1L << (OWNER - 222)) | (1L << (PARTITIONED - 222)) | (1L << (PARTITIONS - 222)) | (1L << (PRETTY - 222)) | (1L << (PRINCIPALS - 222)) | (1L << (PROTECTION - 222)) | (1L << (PURGE - 222)) | (1L << (READ - 222)) | (1L << (READONLY - 222)) | (1L << (REBUILD - 222)) | (1L << (RECORDREADER - 222)) | (1L << (RECORDWRITER - 222)) | (1L << (RELOAD - 222)) | (1L << (RENAME - 222)) | (1L << (REPAIR - 222)) | (1L << (REPLACE - 222)) | (1L << (REPLICATION - 222)) | (1L << (RESTRICT - 222)) | (1L << (REWRITE - 222)) | (1L << (ROLE - 222)) | (1L << (ROLES - 222)) | (1L << (SCHEMA - 222)) | (1L << (SECOND - 222)) | (1L << (SEMI - 222)) | (1L << (SERDE - 222)) | (1L << (SERDEPROPERTIES - 222)) | (1L << (SERVER - 222)) | (1L << (SETS - 222)) | (1L << (SHARED - 222)) | (1L << (SHOW_DATABASE - 222)) | (1L << (SKEWED - 222)) | (1L << (SORT - 222)) | (1L << (SORTED - 222)) | (1L << (SSL - 222)) | (1L << (STATISTICS - 222)) | (1L << (STORED - 222)) | (1L << (STREAMTABLE - 222)) | (1L << (STRUCT - 222)) | (1L << (TBLPROPERTIES - 222)) | (1L << (TEMPORARY - 222)) | (1L << (TERMINATED - 222)) | (1L << (TINYINT - 222)) | (1L << (TOUCH - 222)) | (1L << (TRANSACTIONS - 222)) | (1L << (UNARCHIVE - 222)) | (1L << (UNDO - 222)) | (1L << (UNIONTYPE - 222)) | (1L << (UNLOCK - 222)) | (1L << (UNSET - 222)) | (1L << (UNSIGNED - 222)) | (1L << (URI - 222)) | (1L << (USE - 222)) | (1L << (UTC - 222)) | (1L << (UTCTIMESTAMP - 222)) | (1L << (VALUE_TYPE - 222)))) != 0) || ((((_la - 286)) & ~0x3f) == 0 && ((1L << (_la - 286)) & ((1L << (VIEW - 286)) | (1L << (WHILE - 286)) | (1L << (YEAR - 286)) | (1L << (AUTOCOMMIT - 286)) | (1L << (ISOLATION - 286)) | (1L << (LEVEL - 286)) | (1L << (OFFSET - 286)) | (1L << (SNAPSHOT - 286)) | (1L << (TRANSACTION - 286)) | (1L << (WORK - 286)) | (1L << (WRITE - 286)) | (1L << (ABORT - 286)) | (1L << (KEY - 286)) | (1L << (LAST - 286)) | (1L << (NORELY - 286)) | (1L << (NOVALIDATE - 286)) | (1L << (NULLS - 286)) | (1L << (RELY - 286)) | (1L << (VALIDATE - 286)) | (1L << (DETAIL - 286)) | (1L << (DOW - 286)) | (1L << (EXPRESSION - 286)) | (1L << (OPERATOR - 286)) | (1L << (QUARTER - 286)) | (1L << (SUMMARY - 286)) | (1L << (VECTORIZATION - 286)) | (1L << (WEEK - 286)) | (1L << (YEARS - 286)) | (1L << (MONTHS - 286)) | (1L << (WEEKS - 286)) | (1L << (DAYS - 286)) | (1L << (HOURS - 286)) | (1L << (MINUTES - 286)) | (1L << (SECONDS - 286)) | (1L << (TIMESTAMPTZ - 286)) | (1L << (ZONE - 286)) | (1L << (PLUS - 286)) | (1L << (STRING - 286)) | (1L << (VARIABLE_REFERENCE - 286)) | (1L << (IDENTIFIER - 286)) | (1L << (BACKQUOTED_IDENTIFIER - 286)))) != 0)) {
				{
				setState(133);
				tableName();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowColumnsContext extends ParserRuleContext {
		public Token pattern;
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode COLUMNS() { return getToken(hiveParser.COLUMNS, 0); }
		public TableNameContext tableName() {
			return getRuleContext(TableNameContext.class,0);
		}
		public DatabaseNameContext databaseName() {
			return getRuleContext(DatabaseNameContext.class,0);
		}
		public TerminalNode LIKE() { return getToken(hiveParser.LIKE, 0); }
		public List<TerminalNode> FROM() { return getTokens(hiveParser.FROM); }
		public TerminalNode FROM(int i) {
			return getToken(hiveParser.FROM, i);
		}
		public List<TerminalNode> IN() { return getTokens(hiveParser.IN); }
		public TerminalNode IN(int i) {
			return getToken(hiveParser.IN, i);
		}
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public ShowColumnsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showColumns; }
	}

	public final ShowColumnsContext showColumns() throws RecognitionException {
		ShowColumnsContext _localctx = new ShowColumnsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_showColumns);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(SHOW);
			setState(137);
			match(COLUMNS);
			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FROM || _la==IN) {
				{
				setState(138);
				_la = _input.LA(1);
				if ( !(_la==FROM || _la==IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(141);
			tableName();
			setState(144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FROM || _la==IN) {
				{
				setState(142);
				_la = _input.LA(1);
				if ( !(_la==FROM || _la==IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(143);
				databaseName();
				}
			}

			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIKE) {
				{
				setState(146);
				match(LIKE);
				setState(147);
				((ShowColumnsContext)_localctx).pattern = match(STRING);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowFunctionsContext extends ParserRuleContext {
		public Token pattern;
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode FUNCTIONS() { return getToken(hiveParser.FUNCTIONS, 0); }
		public TerminalNode LIKE() { return getToken(hiveParser.LIKE, 0); }
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public ShowFunctionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showFunctions; }
	}

	public final ShowFunctionsContext showFunctions() throws RecognitionException {
		ShowFunctionsContext _localctx = new ShowFunctionsContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_showFunctions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			match(SHOW);
			setState(151);
			match(FUNCTIONS);
			setState(154);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIKE) {
				{
				setState(152);
				match(LIKE);
				setState(153);
				((ShowFunctionsContext)_localctx).pattern = match(STRING);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowLocksContext extends ParserRuleContext {
		public ShowLocksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showLocks; }
	 
		public ShowLocksContext() { }
		public void copyFrom(ShowLocksContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ShowDatabaseLocksContext extends ShowLocksContext {
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode LOCKS() { return getToken(hiveParser.LOCKS, 0); }
		public DatabaseNameContext databaseName() {
			return getRuleContext(DatabaseNameContext.class,0);
		}
		public TerminalNode DATABASES() { return getToken(hiveParser.DATABASES, 0); }
		public TerminalNode SCHEMA() { return getToken(hiveParser.SCHEMA, 0); }
		public ShowDatabaseLocksContext(ShowLocksContext ctx) { copyFrom(ctx); }
	}
	public static class ShowTableLocksContext extends ShowLocksContext {
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode LOCKS() { return getToken(hiveParser.LOCKS, 0); }
		public TableNameContext tableName() {
			return getRuleContext(TableNameContext.class,0);
		}
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public TerminalNode EXTENDED() { return getToken(hiveParser.EXTENDED, 0); }
		public ShowTableLocksContext(ShowLocksContext ctx) { copyFrom(ctx); }
	}

	public final ShowLocksContext showLocks() throws RecognitionException {
		ShowLocksContext _localctx = new ShowLocksContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_showLocks);
		int _la;
		try {
			setState(171);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				_localctx = new ShowTableLocksContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(156);
				match(SHOW);
				setState(157);
				match(LOCKS);
				setState(158);
				tableName();
				setState(160);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(159);
					partitionSpec();
					}
				}

				setState(163);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EXTENDED) {
					{
					setState(162);
					match(EXTENDED);
					}
				}

				}
				break;
			case 2:
				_localctx = new ShowDatabaseLocksContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(165);
				match(SHOW);
				setState(166);
				match(LOCKS);
				setState(168);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
				case 1:
					{
					setState(167);
					_la = _input.LA(1);
					if ( !(_la==DATABASES || _la==SCHEMA) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				}
				setState(170);
				databaseName();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowConfContext extends ParserRuleContext {
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode CONF() { return getToken(hiveParser.CONF, 0); }
		public ConfigurationNameContext configurationName() {
			return getRuleContext(ConfigurationNameContext.class,0);
		}
		public ShowConfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showConf; }
	}

	public final ShowConfContext showConf() throws RecognitionException {
		ShowConfContext _localctx = new ShowConfContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_showConf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			match(SHOW);
			setState(174);
			match(CONF);
			setState(175);
			configurationName();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowTransactionsContext extends ParserRuleContext {
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode TRANSACTIONS() { return getToken(hiveParser.TRANSACTIONS, 0); }
		public ShowTransactionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showTransactions; }
	}

	public final ShowTransactionsContext showTransactions() throws RecognitionException {
		ShowTransactionsContext _localctx = new ShowTransactionsContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_showTransactions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			match(SHOW);
			setState(178);
			match(TRANSACTIONS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowCompactionsContext extends ParserRuleContext {
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode COMPACTIONS() { return getToken(hiveParser.COMPACTIONS, 0); }
		public ShowCompactionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showCompactions; }
	}

	public final ShowCompactionsContext showCompactions() throws RecognitionException {
		ShowCompactionsContext _localctx = new ShowCompactionsContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_showCompactions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180);
			match(SHOW);
			setState(181);
			match(COMPACTIONS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PartitionSpecContext extends ParserRuleContext {
		public TerminalNode PARTITION() { return getToken(hiveParser.PARTITION, 0); }
		public List<PartitionValContext> partitionVal() {
			return getRuleContexts(PartitionValContext.class);
		}
		public PartitionValContext partitionVal(int i) {
			return getRuleContext(PartitionValContext.class,i);
		}
		public PartitionSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_partitionSpec; }
	}

	public final PartitionSpecContext partitionSpec() throws RecognitionException {
		PartitionSpecContext _localctx = new PartitionSpecContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_partitionSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(PARTITION);
			setState(184);
			match(T__0);
			setState(185);
			partitionVal();
			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(186);
				match(T__1);
				setState(187);
				partitionVal();
				}
				}
				setState(192);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(193);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PartitionValContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode EQ() { return getToken(hiveParser.EQ, 0); }
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public PartitionValContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_partitionVal; }
	}

	public final PartitionValContext partitionVal() throws RecognitionException {
		PartitionValContext _localctx = new PartitionValContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_partitionVal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			identifier();
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQ) {
				{
				setState(196);
				match(EQ);
				setState(197);
				constant();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DatabaseNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DatabaseNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_databaseName; }
	}

	public final DatabaseNameContext databaseName() throws RecognitionException {
		DatabaseNameContext _localctx = new DatabaseNameContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_databaseName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableNameContext extends ParserRuleContext {
		public DatabaseNameContext db;
		public IdentifierContext table;
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DatabaseNameContext databaseName() {
			return getRuleContext(DatabaseNameContext.class,0);
		}
		public TableNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableName; }
	}

	public final TableNameContext tableName() throws RecognitionException {
		TableNameContext _localctx = new TableNameContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_tableName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				setState(202);
				((TableNameContext)_localctx).db = databaseName();
				setState(203);
				match(T__3);
				}
				break;
			}
			setState(207);
			((TableNameContext)_localctx).table = identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyListContext extends ParserRuleContext {
		public List<TablePropertyContext> tableProperty() {
			return getRuleContexts(TablePropertyContext.class);
		}
		public TablePropertyContext tableProperty(int i) {
			return getRuleContext(TablePropertyContext.class,i);
		}
		public TablePropertyListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyList; }
	}

	public final TablePropertyListContext tablePropertyList() throws RecognitionException {
		TablePropertyListContext _localctx = new TablePropertyListContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_tablePropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(T__0);
			setState(210);
			tableProperty();
			setState(215);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(211);
				match(T__1);
				setState(212);
				tableProperty();
				}
				}
				setState(217);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(218);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyContext extends ParserRuleContext {
		public TablePropertyKeyContext key;
		public TablePropertyValueContext value;
		public TablePropertyKeyContext tablePropertyKey() {
			return getRuleContext(TablePropertyKeyContext.class,0);
		}
		public TablePropertyValueContext tablePropertyValue() {
			return getRuleContext(TablePropertyValueContext.class,0);
		}
		public TerminalNode EQ() { return getToken(hiveParser.EQ, 0); }
		public TablePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableProperty; }
	}

	public final TablePropertyContext tableProperty() throws RecognitionException {
		TablePropertyContext _localctx = new TablePropertyContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_tableProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			((TablePropertyContext)_localctx).key = tablePropertyKey();
			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FALSE || _la==TRUE || ((((_la - 322)) & ~0x3f) == 0 && ((1L << (_la - 322)) & ((1L << (EQ - 322)) | (1L << (STRING - 322)) | (1L << (INTEGER_VALUE - 322)) | (1L << (DECIMAL_VALUE - 322)))) != 0)) {
				{
				setState(222);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQ) {
					{
					setState(221);
					match(EQ);
					}
				}

				setState(224);
				((TablePropertyContext)_localctx).value = tablePropertyValue();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyKeyContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public TablePropertyKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyKey; }
	}

	public final TablePropertyKeyContext tablePropertyKey() throws RecognitionException {
		TablePropertyKeyContext _localctx = new TablePropertyKeyContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_tablePropertyKey);
		int _la;
		try {
			setState(236);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(227);
				identifier();
				setState(232);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(228);
					match(T__3);
					setState(229);
					identifier();
					}
					}
					setState(234);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(235);
				match(STRING);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConfigurationNameContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public ConfigurationNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_configurationName; }
	}

	public final ConfigurationNameContext configurationName() throws RecognitionException {
		ConfigurationNameContext _localctx = new ConfigurationNameContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_configurationName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			identifier();
			setState(243);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(239);
				match(T__3);
				setState(240);
				identifier();
				}
				}
				setState(245);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyValueContext extends ParserRuleContext {
		public TerminalNode INTEGER_VALUE() { return getToken(hiveParser.INTEGER_VALUE, 0); }
		public TerminalNode DECIMAL_VALUE() { return getToken(hiveParser.DECIMAL_VALUE, 0); }
		public BooleanValueContext booleanValue() {
			return getRuleContext(BooleanValueContext.class,0);
		}
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public TablePropertyValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyValue; }
	}

	public final TablePropertyValueContext tablePropertyValue() throws RecognitionException {
		TablePropertyValueContext _localctx = new TablePropertyValueContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_tablePropertyValue);
		try {
			setState(250);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER_VALUE:
				enterOuterAlt(_localctx, 1);
				{
				setState(246);
				match(INTEGER_VALUE);
				}
				break;
			case DECIMAL_VALUE:
				enterOuterAlt(_localctx, 2);
				{
				setState(247);
				match(DECIMAL_VALUE);
				}
				break;
			case FALSE:
			case TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(248);
				booleanValue();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 4);
				{
				setState(249);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantContext extends ParserRuleContext {
		public ConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant; }
	 
		public ConstantContext() { }
		public void copyFrom(ConstantContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NullLiteralContext extends ConstantContext {
		public TerminalNode NULL() { return getToken(hiveParser.NULL, 0); }
		public NullLiteralContext(ConstantContext ctx) { copyFrom(ctx); }
	}
	public static class StringLiteralContext extends ConstantContext {
		public List<TerminalNode> STRING() { return getTokens(hiveParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(hiveParser.STRING, i);
		}
		public StringLiteralContext(ConstantContext ctx) { copyFrom(ctx); }
	}
	public static class TypeConstructorContext extends ConstantContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public TypeConstructorContext(ConstantContext ctx) { copyFrom(ctx); }
	}
	public static class IntervalLiteralContext extends ConstantContext {
		public IntervalContext interval() {
			return getRuleContext(IntervalContext.class,0);
		}
		public IntervalLiteralContext(ConstantContext ctx) { copyFrom(ctx); }
	}
	public static class NumericLiteralContext extends ConstantContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public NumericLiteralContext(ConstantContext ctx) { copyFrom(ctx); }
	}
	public static class BooleanLiteralContext extends ConstantContext {
		public BooleanValueContext booleanValue() {
			return getRuleContext(BooleanValueContext.class,0);
		}
		public BooleanLiteralContext(ConstantContext ctx) { copyFrom(ctx); }
	}

	public final ConstantContext constant() throws RecognitionException {
		ConstantContext _localctx = new ConstantContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_constant);
		int _la;
		try {
			setState(264);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				_localctx = new NullLiteralContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(252);
				match(NULL);
				}
				break;
			case 2:
				_localctx = new IntervalLiteralContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(253);
				interval();
				}
				break;
			case 3:
				_localctx = new TypeConstructorContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(254);
				identifier();
				setState(255);
				match(STRING);
				}
				break;
			case 4:
				_localctx = new NumericLiteralContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(257);
				number();
				}
				break;
			case 5:
				_localctx = new BooleanLiteralContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(258);
				booleanValue();
				}
				break;
			case 6:
				_localctx = new StringLiteralContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(260); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(259);
					match(STRING);
					}
					}
					setState(262); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==STRING );
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntervalContext extends ParserRuleContext {
		public TerminalNode INTERVAL() { return getToken(hiveParser.INTERVAL, 0); }
		public List<IntervalFieldContext> intervalField() {
			return getRuleContexts(IntervalFieldContext.class);
		}
		public IntervalFieldContext intervalField(int i) {
			return getRuleContext(IntervalFieldContext.class,i);
		}
		public IntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interval; }
	}

	public final IntervalContext interval() throws RecognitionException {
		IntervalContext _localctx = new IntervalContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_interval);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(INTERVAL);
			setState(270);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 323)) & ~0x3f) == 0 && ((1L << (_la - 323)) & ((1L << (PLUS - 323)) | (1L << (MINUS - 323)) | (1L << (STRING - 323)) | (1L << (INTEGER_VALUE - 323)) | (1L << (DECIMAL_VALUE - 323)))) != 0)) {
				{
				{
				setState(267);
				intervalField();
				}
				}
				setState(272);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntervalFieldContext extends ParserRuleContext {
		public IntervalValueContext value;
		public IdentifierContext unit;
		public IdentifierContext to;
		public IntervalValueContext intervalValue() {
			return getRuleContext(IntervalValueContext.class,0);
		}
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode TO() { return getToken(hiveParser.TO, 0); }
		public IntervalFieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intervalField; }
	}

	public final IntervalFieldContext intervalField() throws RecognitionException {
		IntervalFieldContext _localctx = new IntervalFieldContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_intervalField);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			((IntervalFieldContext)_localctx).value = intervalValue();
			setState(274);
			((IntervalFieldContext)_localctx).unit = identifier();
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TO) {
				{
				setState(275);
				match(TO);
				setState(276);
				((IntervalFieldContext)_localctx).to = identifier();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntervalValueContext extends ParserRuleContext {
		public TerminalNode INTEGER_VALUE() { return getToken(hiveParser.INTEGER_VALUE, 0); }
		public TerminalNode DECIMAL_VALUE() { return getToken(hiveParser.DECIMAL_VALUE, 0); }
		public TerminalNode PLUS() { return getToken(hiveParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(hiveParser.MINUS, 0); }
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public IntervalValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intervalValue; }
	}

	public final IntervalValueContext intervalValue() throws RecognitionException {
		IntervalValueContext _localctx = new IntervalValueContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_intervalValue);
		int _la;
		try {
			setState(284);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
			case MINUS:
			case INTEGER_VALUE:
			case DECIMAL_VALUE:
				enterOuterAlt(_localctx, 1);
				{
				setState(280);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PLUS || _la==MINUS) {
					{
					setState(279);
					_la = _input.LA(1);
					if ( !(_la==PLUS || _la==MINUS) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				setState(282);
				_la = _input.LA(1);
				if ( !(_la==INTEGER_VALUE || _la==DECIMAL_VALUE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(283);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	 
		public NumberContext() { }
		public void copyFrom(NumberContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DecimalLiteralContext extends NumberContext {
		public TerminalNode DECIMAL_VALUE() { return getToken(hiveParser.DECIMAL_VALUE, 0); }
		public TerminalNode MINUS() { return getToken(hiveParser.MINUS, 0); }
		public DecimalLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class BigIntLiteralContext extends NumberContext {
		public TerminalNode BIGINT_LITERAL() { return getToken(hiveParser.BIGINT_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(hiveParser.MINUS, 0); }
		public BigIntLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class TinyIntLiteralContext extends NumberContext {
		public TerminalNode TINYINT_LITERAL() { return getToken(hiveParser.TINYINT_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(hiveParser.MINUS, 0); }
		public TinyIntLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class BigDecimalLiteralContext extends NumberContext {
		public TerminalNode BIGDECIMAL_LITERAL() { return getToken(hiveParser.BIGDECIMAL_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(hiveParser.MINUS, 0); }
		public BigDecimalLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class DoubleLiteralContext extends NumberContext {
		public TerminalNode DOUBLE_LITERAL() { return getToken(hiveParser.DOUBLE_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(hiveParser.MINUS, 0); }
		public DoubleLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class IntegerLiteralContext extends NumberContext {
		public TerminalNode INTEGER_VALUE() { return getToken(hiveParser.INTEGER_VALUE, 0); }
		public TerminalNode MINUS() { return getToken(hiveParser.MINUS, 0); }
		public IntegerLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class SmallIntLiteralContext extends NumberContext {
		public TerminalNode SMALLINT_LITERAL() { return getToken(hiveParser.SMALLINT_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(hiveParser.MINUS, 0); }
		public SmallIntLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_number);
		int _la;
		try {
			setState(314);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(287);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(286);
					match(MINUS);
					}
				}

				setState(289);
				match(DECIMAL_VALUE);
				}
				break;
			case 2:
				_localctx = new IntegerLiteralContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(291);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(290);
					match(MINUS);
					}
				}

				setState(293);
				match(INTEGER_VALUE);
				}
				break;
			case 3:
				_localctx = new BigIntLiteralContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(295);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(294);
					match(MINUS);
					}
				}

				setState(297);
				match(BIGINT_LITERAL);
				}
				break;
			case 4:
				_localctx = new SmallIntLiteralContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(299);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(298);
					match(MINUS);
					}
				}

				setState(301);
				match(SMALLINT_LITERAL);
				}
				break;
			case 5:
				_localctx = new TinyIntLiteralContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(303);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(302);
					match(MINUS);
					}
				}

				setState(305);
				match(TINYINT_LITERAL);
				}
				break;
			case 6:
				_localctx = new DoubleLiteralContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(307);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(306);
					match(MINUS);
					}
				}

				setState(309);
				match(DOUBLE_LITERAL);
				}
				break;
			case 7:
				_localctx = new BigDecimalLiteralContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(311);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(310);
					match(MINUS);
					}
				}

				setState(313);
				match(BIGDECIMAL_LITERAL);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanValueContext extends ParserRuleContext {
		public TerminalNode TRUE() { return getToken(hiveParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(hiveParser.FALSE, 0); }
		public BooleanValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanValue; }
	}

	public final BooleanValueContext booleanValue() throws RecognitionException {
		BooleanValueContext _localctx = new BooleanValueContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_booleanValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(316);
			_la = _input.LA(1);
			if ( !(_la==FALSE || _la==TRUE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public StrictIdentifierContext strictIdentifier() {
			return getRuleContext(StrictIdentifierContext.class,0);
		}
		public TerminalNode FULL() { return getToken(hiveParser.FULL, 0); }
		public TerminalNode INNER() { return getToken(hiveParser.INNER, 0); }
		public TerminalNode LEFT() { return getToken(hiveParser.LEFT, 0); }
		public TerminalNode SEMI() { return getToken(hiveParser.SEMI, 0); }
		public TerminalNode RIGHT() { return getToken(hiveParser.RIGHT, 0); }
		public TerminalNode JOIN() { return getToken(hiveParser.JOIN, 0); }
		public TerminalNode CROSS() { return getToken(hiveParser.CROSS, 0); }
		public TerminalNode ON() { return getToken(hiveParser.ON, 0); }
		public TerminalNode UNION() { return getToken(hiveParser.UNION, 0); }
		public TerminalNode INTERSECT() { return getToken(hiveParser.INTERSECT, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_identifier);
		try {
			setState(329);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(318);
				strictIdentifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(319);
				match(FULL);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(320);
				match(INNER);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(321);
				match(LEFT);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(322);
				match(SEMI);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(323);
				match(RIGHT);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(324);
				match(JOIN);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(325);
				match(CROSS);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(326);
				match(ON);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(327);
				match(UNION);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(328);
				match(INTERSECT);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StrictIdentifierContext extends ParserRuleContext {
		public StrictIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_strictIdentifier; }
	 
		public StrictIdentifierContext() { }
		public void copyFrom(StrictIdentifierContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class VariableIdentifierContext extends StrictIdentifierContext {
		public TerminalNode VARIABLE_REFERENCE() { return getToken(hiveParser.VARIABLE_REFERENCE, 0); }
		public VariableIdentifierContext(StrictIdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class QuotedIdentifierAlternativeContext extends StrictIdentifierContext {
		public QuotedIdentifierContext quotedIdentifier() {
			return getRuleContext(QuotedIdentifierContext.class,0);
		}
		public QuotedIdentifierAlternativeContext(StrictIdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class UnquotedIdentifierContext extends StrictIdentifierContext {
		public TerminalNode IDENTIFIER() { return getToken(hiveParser.IDENTIFIER, 0); }
		public NonReservedContext nonReserved() {
			return getRuleContext(NonReservedContext.class,0);
		}
		public UnquotedIdentifierContext(StrictIdentifierContext ctx) { copyFrom(ctx); }
	}

	public final StrictIdentifierContext strictIdentifier() throws RecognitionException {
		StrictIdentifierContext _localctx = new StrictIdentifierContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_strictIdentifier);
		try {
			setState(335);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(331);
				match(IDENTIFIER);
				}
				break;
			case BACKQUOTED_IDENTIFIER:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(332);
				quotedIdentifier();
				}
				break;
			case SHOW:
			case DATABASES:
			case SCHEMAS:
			case TABLES:
			case ADD:
			case ADMIN:
			case AFTER:
			case ANALYZE:
			case ARCHIVE:
			case ASC:
			case BEFORE:
			case BUCKET:
			case BUCKETS:
			case CASCADE:
			case CHANGE:
			case CLUSTER:
			case CLUSTERED:
			case CLUSTERSTATUS:
			case COLLECTION:
			case COLUMNS:
			case COMMENT:
			case COMPACT:
			case COMPACTIONS:
			case COMPUTE:
			case CONCATENATE:
			case CONTINUE:
			case DATA:
			case DATETIME:
			case DAY:
			case DBPROPERTIES:
			case DEFERRED:
			case DEFINED:
			case DELIMITED:
			case DEPENDENCY:
			case DESC:
			case DIRECTORIES:
			case DIRECTORY:
			case DISABLE:
			case DISTRIBUTE:
			case ELEM_TYPE:
			case ENABLE:
			case ESCAPED:
			case EXCLUSIVE:
			case EXPLAIN:
			case EXPORT:
			case FIELDS:
			case FILE:
			case FILEFORMAT:
			case FIRST:
			case FORMAT:
			case FORMATTED:
			case FUNCTIONS:
			case HOLD_DDLTIME:
			case HOUR:
			case IDXPROPERTIES:
			case IGNORE:
			case INDEX:
			case INDEXES:
			case INPATH:
			case INPUTDRIVER:
			case INPUTFORMAT:
			case ITEMS:
			case JAR:
			case KEYS:
			case KEY_TYPE:
			case LIMIT:
			case LINES:
			case LOAD:
			case LOCATION:
			case LOCK:
			case LOCKS:
			case LOGICAL:
			case LONG:
			case MAPJOIN:
			case MATERIALIZED:
			case METADATA:
			case SETMINUS:
			case MINUTE:
			case MONTH:
			case MSCK:
			case NOSCAN:
			case NO_DROP:
			case OFFLINE:
			case OPTION:
			case OUTPUTDRIVER:
			case OUTPUTFORMAT:
			case OVERWRITE:
			case OWNER:
			case PARTITIONED:
			case PARTITIONS:
			case PRETTY:
			case PRINCIPALS:
			case PROTECTION:
			case PURGE:
			case READ:
			case READONLY:
			case REBUILD:
			case RECORDREADER:
			case RECORDWRITER:
			case RELOAD:
			case RENAME:
			case REPAIR:
			case REPLACE:
			case REPLICATION:
			case RESTRICT:
			case REWRITE:
			case ROLE:
			case ROLES:
			case SCHEMA:
			case SECOND:
			case SEMI:
			case SERDE:
			case SERDEPROPERTIES:
			case SERVER:
			case SETS:
			case SHARED:
			case SHOW_DATABASE:
			case SKEWED:
			case SORT:
			case SORTED:
			case SSL:
			case STATISTICS:
			case STORED:
			case STREAMTABLE:
			case STRUCT:
			case TBLPROPERTIES:
			case TEMPORARY:
			case TERMINATED:
			case TINYINT:
			case TOUCH:
			case TRANSACTIONS:
			case UNARCHIVE:
			case UNDO:
			case UNIONTYPE:
			case UNLOCK:
			case UNSET:
			case UNSIGNED:
			case URI:
			case USE:
			case UTC:
			case UTCTIMESTAMP:
			case VALUE_TYPE:
			case VIEW:
			case WHILE:
			case YEAR:
			case AUTOCOMMIT:
			case ISOLATION:
			case LEVEL:
			case OFFSET:
			case SNAPSHOT:
			case TRANSACTION:
			case WORK:
			case WRITE:
			case ABORT:
			case KEY:
			case LAST:
			case NORELY:
			case NOVALIDATE:
			case NULLS:
			case RELY:
			case VALIDATE:
			case DETAIL:
			case DOW:
			case EXPRESSION:
			case OPERATOR:
			case QUARTER:
			case SUMMARY:
			case VECTORIZATION:
			case WEEK:
			case YEARS:
			case MONTHS:
			case WEEKS:
			case DAYS:
			case HOURS:
			case MINUTES:
			case SECONDS:
			case TIMESTAMPTZ:
			case ZONE:
			case PLUS:
			case STRING:
				_localctx = new UnquotedIdentifierContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(333);
				nonReserved();
				}
				break;
			case VARIABLE_REFERENCE:
				_localctx = new VariableIdentifierContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(334);
				match(VARIABLE_REFERENCE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QuotedIdentifierContext extends ParserRuleContext {
		public TerminalNode BACKQUOTED_IDENTIFIER() { return getToken(hiveParser.BACKQUOTED_IDENTIFIER, 0); }
		public QuotedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quotedIdentifier; }
	}

	public final QuotedIdentifierContext quotedIdentifier() throws RecognitionException {
		QuotedIdentifierContext _localctx = new QuotedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_quotedIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			match(BACKQUOTED_IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonReservedContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(hiveParser.ADD, 0); }
		public TerminalNode ADMIN() { return getToken(hiveParser.ADMIN, 0); }
		public TerminalNode AFTER() { return getToken(hiveParser.AFTER, 0); }
		public TerminalNode ANALYZE() { return getToken(hiveParser.ANALYZE, 0); }
		public TerminalNode ARCHIVE() { return getToken(hiveParser.ARCHIVE, 0); }
		public TerminalNode ASC() { return getToken(hiveParser.ASC, 0); }
		public TerminalNode BEFORE() { return getToken(hiveParser.BEFORE, 0); }
		public TerminalNode BUCKET() { return getToken(hiveParser.BUCKET, 0); }
		public TerminalNode BUCKETS() { return getToken(hiveParser.BUCKETS, 0); }
		public TerminalNode CASCADE() { return getToken(hiveParser.CASCADE, 0); }
		public TerminalNode CHANGE() { return getToken(hiveParser.CHANGE, 0); }
		public TerminalNode CLUSTER() { return getToken(hiveParser.CLUSTER, 0); }
		public TerminalNode CLUSTERED() { return getToken(hiveParser.CLUSTERED, 0); }
		public TerminalNode CLUSTERSTATUS() { return getToken(hiveParser.CLUSTERSTATUS, 0); }
		public TerminalNode COLLECTION() { return getToken(hiveParser.COLLECTION, 0); }
		public TerminalNode COLUMNS() { return getToken(hiveParser.COLUMNS, 0); }
		public TerminalNode COMMENT() { return getToken(hiveParser.COMMENT, 0); }
		public TerminalNode COMPACT() { return getToken(hiveParser.COMPACT, 0); }
		public TerminalNode COMPACTIONS() { return getToken(hiveParser.COMPACTIONS, 0); }
		public TerminalNode COMPUTE() { return getToken(hiveParser.COMPUTE, 0); }
		public TerminalNode CONCATENATE() { return getToken(hiveParser.CONCATENATE, 0); }
		public TerminalNode CONTINUE() { return getToken(hiveParser.CONTINUE, 0); }
		public TerminalNode DATA() { return getToken(hiveParser.DATA, 0); }
		public TerminalNode DATABASES() { return getToken(hiveParser.DATABASES, 0); }
		public TerminalNode DATETIME() { return getToken(hiveParser.DATETIME, 0); }
		public TerminalNode DAY() { return getToken(hiveParser.DAY, 0); }
		public TerminalNode DBPROPERTIES() { return getToken(hiveParser.DBPROPERTIES, 0); }
		public TerminalNode DEFERRED() { return getToken(hiveParser.DEFERRED, 0); }
		public TerminalNode DEFINED() { return getToken(hiveParser.DEFINED, 0); }
		public TerminalNode DELIMITED() { return getToken(hiveParser.DELIMITED, 0); }
		public TerminalNode DEPENDENCY() { return getToken(hiveParser.DEPENDENCY, 0); }
		public TerminalNode DESC() { return getToken(hiveParser.DESC, 0); }
		public TerminalNode DIRECTORIES() { return getToken(hiveParser.DIRECTORIES, 0); }
		public TerminalNode DIRECTORY() { return getToken(hiveParser.DIRECTORY, 0); }
		public TerminalNode DISABLE() { return getToken(hiveParser.DISABLE, 0); }
		public TerminalNode DISTRIBUTE() { return getToken(hiveParser.DISTRIBUTE, 0); }
		public TerminalNode ELEM_TYPE() { return getToken(hiveParser.ELEM_TYPE, 0); }
		public TerminalNode ENABLE() { return getToken(hiveParser.ENABLE, 0); }
		public TerminalNode ESCAPED() { return getToken(hiveParser.ESCAPED, 0); }
		public TerminalNode EXCLUSIVE() { return getToken(hiveParser.EXCLUSIVE, 0); }
		public TerminalNode EXPLAIN() { return getToken(hiveParser.EXPLAIN, 0); }
		public TerminalNode EXPORT() { return getToken(hiveParser.EXPORT, 0); }
		public TerminalNode FIELDS() { return getToken(hiveParser.FIELDS, 0); }
		public TerminalNode FILE() { return getToken(hiveParser.FILE, 0); }
		public TerminalNode FILEFORMAT() { return getToken(hiveParser.FILEFORMAT, 0); }
		public TerminalNode FIRST() { return getToken(hiveParser.FIRST, 0); }
		public TerminalNode FORMAT() { return getToken(hiveParser.FORMAT, 0); }
		public TerminalNode FORMATTED() { return getToken(hiveParser.FORMATTED, 0); }
		public TerminalNode FUNCTIONS() { return getToken(hiveParser.FUNCTIONS, 0); }
		public TerminalNode HOLD_DDLTIME() { return getToken(hiveParser.HOLD_DDLTIME, 0); }
		public TerminalNode HOUR() { return getToken(hiveParser.HOUR, 0); }
		public TerminalNode IDXPROPERTIES() { return getToken(hiveParser.IDXPROPERTIES, 0); }
		public TerminalNode IGNORE() { return getToken(hiveParser.IGNORE, 0); }
		public TerminalNode INDEX() { return getToken(hiveParser.INDEX, 0); }
		public TerminalNode INDEXES() { return getToken(hiveParser.INDEXES, 0); }
		public TerminalNode INPATH() { return getToken(hiveParser.INPATH, 0); }
		public TerminalNode INPUTDRIVER() { return getToken(hiveParser.INPUTDRIVER, 0); }
		public TerminalNode INPUTFORMAT() { return getToken(hiveParser.INPUTFORMAT, 0); }
		public TerminalNode ITEMS() { return getToken(hiveParser.ITEMS, 0); }
		public TerminalNode JAR() { return getToken(hiveParser.JAR, 0); }
		public TerminalNode KEYS() { return getToken(hiveParser.KEYS, 0); }
		public TerminalNode KEY_TYPE() { return getToken(hiveParser.KEY_TYPE, 0); }
		public TerminalNode LIMIT() { return getToken(hiveParser.LIMIT, 0); }
		public TerminalNode LINES() { return getToken(hiveParser.LINES, 0); }
		public TerminalNode LOAD() { return getToken(hiveParser.LOAD, 0); }
		public TerminalNode LOCATION() { return getToken(hiveParser.LOCATION, 0); }
		public TerminalNode LOCK() { return getToken(hiveParser.LOCK, 0); }
		public TerminalNode LOCKS() { return getToken(hiveParser.LOCKS, 0); }
		public TerminalNode LOGICAL() { return getToken(hiveParser.LOGICAL, 0); }
		public TerminalNode LONG() { return getToken(hiveParser.LONG, 0); }
		public TerminalNode MAPJOIN() { return getToken(hiveParser.MAPJOIN, 0); }
		public TerminalNode MATERIALIZED() { return getToken(hiveParser.MATERIALIZED, 0); }
		public TerminalNode METADATA() { return getToken(hiveParser.METADATA, 0); }
		public TerminalNode SETMINUS() { return getToken(hiveParser.SETMINUS, 0); }
		public TerminalNode MINUTE() { return getToken(hiveParser.MINUTE, 0); }
		public TerminalNode MONTH() { return getToken(hiveParser.MONTH, 0); }
		public TerminalNode MSCK() { return getToken(hiveParser.MSCK, 0); }
		public TerminalNode NOSCAN() { return getToken(hiveParser.NOSCAN, 0); }
		public TerminalNode NO_DROP() { return getToken(hiveParser.NO_DROP, 0); }
		public TerminalNode OFFLINE() { return getToken(hiveParser.OFFLINE, 0); }
		public TerminalNode OPTION() { return getToken(hiveParser.OPTION, 0); }
		public TerminalNode OUTPUTDRIVER() { return getToken(hiveParser.OUTPUTDRIVER, 0); }
		public TerminalNode OUTPUTFORMAT() { return getToken(hiveParser.OUTPUTFORMAT, 0); }
		public TerminalNode OVERWRITE() { return getToken(hiveParser.OVERWRITE, 0); }
		public TerminalNode OWNER() { return getToken(hiveParser.OWNER, 0); }
		public TerminalNode PARTITIONED() { return getToken(hiveParser.PARTITIONED, 0); }
		public TerminalNode PARTITIONS() { return getToken(hiveParser.PARTITIONS, 0); }
		public TerminalNode PLUS() { return getToken(hiveParser.PLUS, 0); }
		public TerminalNode PRETTY() { return getToken(hiveParser.PRETTY, 0); }
		public TerminalNode PRINCIPALS() { return getToken(hiveParser.PRINCIPALS, 0); }
		public TerminalNode PROTECTION() { return getToken(hiveParser.PROTECTION, 0); }
		public TerminalNode PURGE() { return getToken(hiveParser.PURGE, 0); }
		public TerminalNode READ() { return getToken(hiveParser.READ, 0); }
		public TerminalNode READONLY() { return getToken(hiveParser.READONLY, 0); }
		public TerminalNode REBUILD() { return getToken(hiveParser.REBUILD, 0); }
		public TerminalNode RECORDREADER() { return getToken(hiveParser.RECORDREADER, 0); }
		public TerminalNode RECORDWRITER() { return getToken(hiveParser.RECORDWRITER, 0); }
		public TerminalNode RELOAD() { return getToken(hiveParser.RELOAD, 0); }
		public TerminalNode RENAME() { return getToken(hiveParser.RENAME, 0); }
		public TerminalNode REPAIR() { return getToken(hiveParser.REPAIR, 0); }
		public TerminalNode REPLACE() { return getToken(hiveParser.REPLACE, 0); }
		public TerminalNode REPLICATION() { return getToken(hiveParser.REPLICATION, 0); }
		public TerminalNode RESTRICT() { return getToken(hiveParser.RESTRICT, 0); }
		public TerminalNode REWRITE() { return getToken(hiveParser.REWRITE, 0); }
		public TerminalNode ROLE() { return getToken(hiveParser.ROLE, 0); }
		public TerminalNode ROLES() { return getToken(hiveParser.ROLES, 0); }
		public TerminalNode SCHEMA() { return getToken(hiveParser.SCHEMA, 0); }
		public TerminalNode SCHEMAS() { return getToken(hiveParser.SCHEMAS, 0); }
		public TerminalNode SECOND() { return getToken(hiveParser.SECOND, 0); }
		public TerminalNode SEMI() { return getToken(hiveParser.SEMI, 0); }
		public TerminalNode SERDE() { return getToken(hiveParser.SERDE, 0); }
		public TerminalNode SERDEPROPERTIES() { return getToken(hiveParser.SERDEPROPERTIES, 0); }
		public TerminalNode SERVER() { return getToken(hiveParser.SERVER, 0); }
		public TerminalNode SETS() { return getToken(hiveParser.SETS, 0); }
		public TerminalNode SHARED() { return getToken(hiveParser.SHARED, 0); }
		public TerminalNode SHOW() { return getToken(hiveParser.SHOW, 0); }
		public TerminalNode SHOW_DATABASE() { return getToken(hiveParser.SHOW_DATABASE, 0); }
		public TerminalNode SKEWED() { return getToken(hiveParser.SKEWED, 0); }
		public TerminalNode SORT() { return getToken(hiveParser.SORT, 0); }
		public TerminalNode SORTED() { return getToken(hiveParser.SORTED, 0); }
		public TerminalNode SSL() { return getToken(hiveParser.SSL, 0); }
		public TerminalNode STATISTICS() { return getToken(hiveParser.STATISTICS, 0); }
		public TerminalNode STORED() { return getToken(hiveParser.STORED, 0); }
		public TerminalNode STREAMTABLE() { return getToken(hiveParser.STREAMTABLE, 0); }
		public TerminalNode STRING() { return getToken(hiveParser.STRING, 0); }
		public TerminalNode STRUCT() { return getToken(hiveParser.STRUCT, 0); }
		public TerminalNode TABLES() { return getToken(hiveParser.TABLES, 0); }
		public TerminalNode TBLPROPERTIES() { return getToken(hiveParser.TBLPROPERTIES, 0); }
		public TerminalNode TEMPORARY() { return getToken(hiveParser.TEMPORARY, 0); }
		public TerminalNode TERMINATED() { return getToken(hiveParser.TERMINATED, 0); }
		public TerminalNode TINYINT() { return getToken(hiveParser.TINYINT, 0); }
		public TerminalNode TOUCH() { return getToken(hiveParser.TOUCH, 0); }
		public TerminalNode TRANSACTIONS() { return getToken(hiveParser.TRANSACTIONS, 0); }
		public TerminalNode UNARCHIVE() { return getToken(hiveParser.UNARCHIVE, 0); }
		public TerminalNode UNDO() { return getToken(hiveParser.UNDO, 0); }
		public TerminalNode UNIONTYPE() { return getToken(hiveParser.UNIONTYPE, 0); }
		public TerminalNode UNLOCK() { return getToken(hiveParser.UNLOCK, 0); }
		public TerminalNode UNSET() { return getToken(hiveParser.UNSET, 0); }
		public TerminalNode UNSIGNED() { return getToken(hiveParser.UNSIGNED, 0); }
		public TerminalNode URI() { return getToken(hiveParser.URI, 0); }
		public TerminalNode USE() { return getToken(hiveParser.USE, 0); }
		public TerminalNode UTC() { return getToken(hiveParser.UTC, 0); }
		public TerminalNode UTCTIMESTAMP() { return getToken(hiveParser.UTCTIMESTAMP, 0); }
		public TerminalNode VALUE_TYPE() { return getToken(hiveParser.VALUE_TYPE, 0); }
		public TerminalNode VIEW() { return getToken(hiveParser.VIEW, 0); }
		public TerminalNode WHILE() { return getToken(hiveParser.WHILE, 0); }
		public TerminalNode YEAR() { return getToken(hiveParser.YEAR, 0); }
		public TerminalNode AUTOCOMMIT() { return getToken(hiveParser.AUTOCOMMIT, 0); }
		public TerminalNode ISOLATION() { return getToken(hiveParser.ISOLATION, 0); }
		public TerminalNode LEVEL() { return getToken(hiveParser.LEVEL, 0); }
		public TerminalNode OFFSET() { return getToken(hiveParser.OFFSET, 0); }
		public TerminalNode SNAPSHOT() { return getToken(hiveParser.SNAPSHOT, 0); }
		public TerminalNode TRANSACTION() { return getToken(hiveParser.TRANSACTION, 0); }
		public TerminalNode WORK() { return getToken(hiveParser.WORK, 0); }
		public TerminalNode WRITE() { return getToken(hiveParser.WRITE, 0); }
		public TerminalNode ABORT() { return getToken(hiveParser.ABORT, 0); }
		public TerminalNode KEY() { return getToken(hiveParser.KEY, 0); }
		public TerminalNode LAST() { return getToken(hiveParser.LAST, 0); }
		public TerminalNode NORELY() { return getToken(hiveParser.NORELY, 0); }
		public TerminalNode NOVALIDATE() { return getToken(hiveParser.NOVALIDATE, 0); }
		public TerminalNode NULLS() { return getToken(hiveParser.NULLS, 0); }
		public TerminalNode RELY() { return getToken(hiveParser.RELY, 0); }
		public TerminalNode VALIDATE() { return getToken(hiveParser.VALIDATE, 0); }
		public TerminalNode DETAIL() { return getToken(hiveParser.DETAIL, 0); }
		public TerminalNode DOW() { return getToken(hiveParser.DOW, 0); }
		public TerminalNode EXPRESSION() { return getToken(hiveParser.EXPRESSION, 0); }
		public TerminalNode OPERATOR() { return getToken(hiveParser.OPERATOR, 0); }
		public TerminalNode QUARTER() { return getToken(hiveParser.QUARTER, 0); }
		public TerminalNode SUMMARY() { return getToken(hiveParser.SUMMARY, 0); }
		public TerminalNode VECTORIZATION() { return getToken(hiveParser.VECTORIZATION, 0); }
		public TerminalNode WEEK() { return getToken(hiveParser.WEEK, 0); }
		public TerminalNode YEARS() { return getToken(hiveParser.YEARS, 0); }
		public TerminalNode MONTHS() { return getToken(hiveParser.MONTHS, 0); }
		public TerminalNode WEEKS() { return getToken(hiveParser.WEEKS, 0); }
		public TerminalNode DAYS() { return getToken(hiveParser.DAYS, 0); }
		public TerminalNode HOURS() { return getToken(hiveParser.HOURS, 0); }
		public TerminalNode MINUTES() { return getToken(hiveParser.MINUTES, 0); }
		public TerminalNode SECONDS() { return getToken(hiveParser.SECONDS, 0); }
		public TerminalNode TIMESTAMPTZ() { return getToken(hiveParser.TIMESTAMPTZ, 0); }
		public TerminalNode ZONE() { return getToken(hiveParser.ZONE, 0); }
		public NonReservedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonReserved; }
	}

	public final NonReservedContext nonReserved() throws RecognitionException {
		NonReservedContext _localctx = new NonReservedContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_nonReserved);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(339);
			_la = _input.LA(1);
			if ( !(((((_la - 143)) & ~0x3f) == 0 && ((1L << (_la - 143)) & ((1L << (SHOW - 143)) | (1L << (DATABASES - 143)) | (1L << (SCHEMAS - 143)) | (1L << (TABLES - 143)) | (1L << (ADD - 143)) | (1L << (ADMIN - 143)) | (1L << (AFTER - 143)) | (1L << (ANALYZE - 143)) | (1L << (ARCHIVE - 143)) | (1L << (ASC - 143)) | (1L << (BEFORE - 143)) | (1L << (BUCKET - 143)) | (1L << (BUCKETS - 143)) | (1L << (CASCADE - 143)) | (1L << (CHANGE - 143)) | (1L << (CLUSTER - 143)) | (1L << (CLUSTERED - 143)) | (1L << (CLUSTERSTATUS - 143)) | (1L << (COLLECTION - 143)) | (1L << (COLUMNS - 143)) | (1L << (COMMENT - 143)) | (1L << (COMPACT - 143)) | (1L << (COMPACTIONS - 143)) | (1L << (COMPUTE - 143)) | (1L << (CONCATENATE - 143)) | (1L << (CONTINUE - 143)) | (1L << (DATA - 143)) | (1L << (DATETIME - 143)) | (1L << (DAY - 143)) | (1L << (DBPROPERTIES - 143)) | (1L << (DEFERRED - 143)) | (1L << (DEFINED - 143)) | (1L << (DELIMITED - 143)) | (1L << (DEPENDENCY - 143)) | (1L << (DESC - 143)) | (1L << (DIRECTORIES - 143)) | (1L << (DIRECTORY - 143)) | (1L << (DISABLE - 143)) | (1L << (DISTRIBUTE - 143)) | (1L << (ELEM_TYPE - 143)) | (1L << (ENABLE - 143)) | (1L << (ESCAPED - 143)) | (1L << (EXCLUSIVE - 143)) | (1L << (EXPLAIN - 143)) | (1L << (EXPORT - 143)) | (1L << (FIELDS - 143)) | (1L << (FILE - 143)) | (1L << (FILEFORMAT - 143)) | (1L << (FIRST - 143)) | (1L << (FORMAT - 143)) | (1L << (FORMATTED - 143)) | (1L << (FUNCTIONS - 143)) | (1L << (HOLD_DDLTIME - 143)) | (1L << (HOUR - 143)) | (1L << (IDXPROPERTIES - 143)) | (1L << (IGNORE - 143)) | (1L << (INDEX - 143)) | (1L << (INDEXES - 143)) | (1L << (INPATH - 143)) | (1L << (INPUTDRIVER - 143)) | (1L << (INPUTFORMAT - 143)) | (1L << (ITEMS - 143)) | (1L << (JAR - 143)) | (1L << (KEYS - 143)))) != 0) || ((((_la - 207)) & ~0x3f) == 0 && ((1L << (_la - 207)) & ((1L << (KEY_TYPE - 207)) | (1L << (LIMIT - 207)) | (1L << (LINES - 207)) | (1L << (LOAD - 207)) | (1L << (LOCATION - 207)) | (1L << (LOCK - 207)) | (1L << (LOCKS - 207)) | (1L << (LOGICAL - 207)) | (1L << (LONG - 207)) | (1L << (MAPJOIN - 207)) | (1L << (MATERIALIZED - 207)) | (1L << (METADATA - 207)) | (1L << (SETMINUS - 207)) | (1L << (MINUTE - 207)) | (1L << (MONTH - 207)) | (1L << (MSCK - 207)) | (1L << (NOSCAN - 207)) | (1L << (NO_DROP - 207)) | (1L << (OFFLINE - 207)) | (1L << (OPTION - 207)) | (1L << (OUTPUTDRIVER - 207)) | (1L << (OUTPUTFORMAT - 207)) | (1L << (OVERWRITE - 207)) | (1L << (OWNER - 207)) | (1L << (PARTITIONED - 207)) | (1L << (PARTITIONS - 207)) | (1L << (PRETTY - 207)) | (1L << (PRINCIPALS - 207)) | (1L << (PROTECTION - 207)) | (1L << (PURGE - 207)) | (1L << (READ - 207)) | (1L << (READONLY - 207)) | (1L << (REBUILD - 207)) | (1L << (RECORDREADER - 207)) | (1L << (RECORDWRITER - 207)) | (1L << (RELOAD - 207)) | (1L << (RENAME - 207)) | (1L << (REPAIR - 207)) | (1L << (REPLACE - 207)) | (1L << (REPLICATION - 207)) | (1L << (RESTRICT - 207)) | (1L << (REWRITE - 207)) | (1L << (ROLE - 207)) | (1L << (ROLES - 207)) | (1L << (SCHEMA - 207)) | (1L << (SECOND - 207)) | (1L << (SEMI - 207)) | (1L << (SERDE - 207)) | (1L << (SERDEPROPERTIES - 207)) | (1L << (SERVER - 207)) | (1L << (SETS - 207)) | (1L << (SHARED - 207)) | (1L << (SHOW_DATABASE - 207)) | (1L << (SKEWED - 207)) | (1L << (SORT - 207)) | (1L << (SORTED - 207)) | (1L << (SSL - 207)) | (1L << (STATISTICS - 207)) | (1L << (STORED - 207)) | (1L << (STREAMTABLE - 207)) | (1L << (STRUCT - 207)) | (1L << (TBLPROPERTIES - 207)) | (1L << (TEMPORARY - 207)))) != 0) || ((((_la - 271)) & ~0x3f) == 0 && ((1L << (_la - 271)) & ((1L << (TERMINATED - 271)) | (1L << (TINYINT - 271)) | (1L << (TOUCH - 271)) | (1L << (TRANSACTIONS - 271)) | (1L << (UNARCHIVE - 271)) | (1L << (UNDO - 271)) | (1L << (UNIONTYPE - 271)) | (1L << (UNLOCK - 271)) | (1L << (UNSET - 271)) | (1L << (UNSIGNED - 271)) | (1L << (URI - 271)) | (1L << (USE - 271)) | (1L << (UTC - 271)) | (1L << (UTCTIMESTAMP - 271)) | (1L << (VALUE_TYPE - 271)) | (1L << (VIEW - 271)) | (1L << (WHILE - 271)) | (1L << (YEAR - 271)) | (1L << (AUTOCOMMIT - 271)) | (1L << (ISOLATION - 271)) | (1L << (LEVEL - 271)) | (1L << (OFFSET - 271)) | (1L << (SNAPSHOT - 271)) | (1L << (TRANSACTION - 271)) | (1L << (WORK - 271)) | (1L << (WRITE - 271)) | (1L << (ABORT - 271)) | (1L << (KEY - 271)) | (1L << (LAST - 271)) | (1L << (NORELY - 271)) | (1L << (NOVALIDATE - 271)) | (1L << (NULLS - 271)) | (1L << (RELY - 271)) | (1L << (VALIDATE - 271)) | (1L << (DETAIL - 271)) | (1L << (DOW - 271)) | (1L << (EXPRESSION - 271)) | (1L << (OPERATOR - 271)) | (1L << (QUARTER - 271)) | (1L << (SUMMARY - 271)) | (1L << (VECTORIZATION - 271)) | (1L << (WEEK - 271)) | (1L << (YEARS - 271)) | (1L << (MONTHS - 271)) | (1L << (WEEKS - 271)) | (1L << (DAYS - 271)) | (1L << (HOURS - 271)) | (1L << (MINUTES - 271)) | (1L << (SECONDS - 271)) | (1L << (TIMESTAMPTZ - 271)) | (1L << (ZONE - 271)) | (1L << (PLUS - 271)) | (1L << (STRING - 271)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0152\u0158\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3R\n\3"+
		"\3\4\3\4\3\4\3\4\5\4X\n\4\3\5\3\5\3\5\3\5\5\5^\n\5\3\5\5\5a\n\5\3\6\3"+
		"\6\3\6\3\6\3\6\5\6h\n\6\3\6\3\6\3\6\5\6m\n\6\3\7\3\7\3\7\3\7\5\7s\n\7"+
		"\3\7\3\7\5\7w\n\7\3\b\3\b\3\b\3\b\5\b}\n\b\3\t\3\t\3\t\3\t\5\t\u0083\n"+
		"\t\3\n\3\n\3\n\3\n\5\n\u0089\n\n\3\13\3\13\3\13\5\13\u008e\n\13\3\13\3"+
		"\13\3\13\5\13\u0093\n\13\3\13\3\13\5\13\u0097\n\13\3\f\3\f\3\f\3\f\5\f"+
		"\u009d\n\f\3\r\3\r\3\r\3\r\5\r\u00a3\n\r\3\r\5\r\u00a6\n\r\3\r\3\r\3\r"+
		"\5\r\u00ab\n\r\3\r\5\r\u00ae\n\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3"+
		"\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\7\21\u00bf\n\21\f\21\16\21\u00c2"+
		"\13\21\3\21\3\21\3\22\3\22\3\22\5\22\u00c9\n\22\3\23\3\23\3\24\3\24\3"+
		"\24\5\24\u00d0\n\24\3\24\3\24\3\25\3\25\3\25\3\25\7\25\u00d8\n\25\f\25"+
		"\16\25\u00db\13\25\3\25\3\25\3\26\3\26\5\26\u00e1\n\26\3\26\5\26\u00e4"+
		"\n\26\3\27\3\27\3\27\7\27\u00e9\n\27\f\27\16\27\u00ec\13\27\3\27\5\27"+
		"\u00ef\n\27\3\30\3\30\3\30\7\30\u00f4\n\30\f\30\16\30\u00f7\13\30\3\31"+
		"\3\31\3\31\3\31\5\31\u00fd\n\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\6\32\u0107\n\32\r\32\16\32\u0108\5\32\u010b\n\32\3\33\3\33\7\33\u010f"+
		"\n\33\f\33\16\33\u0112\13\33\3\34\3\34\3\34\3\34\5\34\u0118\n\34\3\35"+
		"\5\35\u011b\n\35\3\35\3\35\5\35\u011f\n\35\3\36\5\36\u0122\n\36\3\36\3"+
		"\36\5\36\u0126\n\36\3\36\3\36\5\36\u012a\n\36\3\36\3\36\5\36\u012e\n\36"+
		"\3\36\3\36\5\36\u0132\n\36\3\36\3\36\5\36\u0136\n\36\3\36\3\36\5\36\u013a"+
		"\n\36\3\36\5\36\u013d\n\36\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 "+
		"\5 \u014c\n \3!\3!\3!\3!\5!\u0152\n!\3\"\3\"\3#\3#\3#\2\2$\2\4\6\b\n\f"+
		"\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BD\2\n\3\2\u0092"+
		"\u0093\4\2\62\62;;\4\2\u008d\u008d\u00db\u00db\4\2\u0092\u0092\u00fe\u00fe"+
		"\3\2\u0145\u0146\4\2\u0149\u0149\u014e\u014e\4\2--nn\6\2\u0091\u00ea\u00ec"+
		"\u0143\u0145\u0145\u0147\u0147\2\u017e\2F\3\2\2\2\4Q\3\2\2\2\6S\3\2\2"+
		"\2\bY\3\2\2\2\nb\3\2\2\2\fn\3\2\2\2\16x\3\2\2\2\20~\3\2\2\2\22\u0084\3"+
		"\2\2\2\24\u008a\3\2\2\2\26\u0098\3\2\2\2\30\u00ad\3\2\2\2\32\u00af\3\2"+
		"\2\2\34\u00b3\3\2\2\2\36\u00b6\3\2\2\2 \u00b9\3\2\2\2\"\u00c5\3\2\2\2"+
		"$\u00ca\3\2\2\2&\u00cf\3\2\2\2(\u00d3\3\2\2\2*\u00de\3\2\2\2,\u00ee\3"+
		"\2\2\2.\u00f0\3\2\2\2\60\u00fc\3\2\2\2\62\u010a\3\2\2\2\64\u010c\3\2\2"+
		"\2\66\u0113\3\2\2\28\u011e\3\2\2\2:\u013c\3\2\2\2<\u013e\3\2\2\2>\u014b"+
		"\3\2\2\2@\u0151\3\2\2\2B\u0153\3\2\2\2D\u0155\3\2\2\2FG\5\4\3\2GH\7\2"+
		"\2\3H\3\3\2\2\2IR\5\6\4\2JR\5\b\5\2KR\5\f\7\2LR\5\16\b\2MR\5\n\6\2NR\5"+
		"\20\t\2OR\5\22\n\2PR\5\24\13\2QI\3\2\2\2QJ\3\2\2\2QK\3\2\2\2QL\3\2\2\2"+
		"QM\3\2\2\2QN\3\2\2\2QO\3\2\2\2QP\3\2\2\2R\5\3\2\2\2ST\7\u0091\2\2TW\t"+
		"\2\2\2UV\7G\2\2VX\7\u0147\2\2WU\3\2\2\2WX\3\2\2\2X\7\3\2\2\2YZ\7\u0091"+
		"\2\2Z]\7\u0094\2\2[\\\7;\2\2\\^\5$\23\2][\3\2\2\2]^\3\2\2\2^`\3\2\2\2"+
		"_a\7\u0147\2\2`_\3\2\2\2`a\3\2\2\2a\t\3\2\2\2bc\7\u0091\2\2cd\7g\2\2d"+
		"g\7+\2\2ef\t\3\2\2fh\5$\23\2ge\3\2\2\2gh\3\2\2\2hi\3\2\2\2ij\7G\2\2jl"+
		"\7\u0147\2\2km\5 \21\2lk\3\2\2\2lm\3\2\2\2m\13\3\2\2\2no\7\u0091\2\2o"+
		"r\t\4\2\2pq\t\3\2\2qs\5$\23\2rp\3\2\2\2rs\3\2\2\2sv\3\2\2\2tu\7G\2\2u"+
		"w\7\u0147\2\2vt\3\2\2\2vw\3\2\2\2w\r\3\2\2\2xy\7\u0091\2\2yz\7\u00ea\2"+
		"\2z|\5&\24\2{}\5 \21\2|{\3\2\2\2|}\3\2\2\2}\17\3\2\2\2~\177\7\u0091\2"+
		"\2\177\u0080\7\u010f\2\2\u0080\u0082\5&\24\2\u0081\u0083\5(\25\2\u0082"+
		"\u0081\3\2\2\2\u0082\u0083\3\2\2\2\u0083\21\3\2\2\2\u0084\u0085\7\u0091"+
		"\2\2\u0085\u0086\7\30\2\2\u0086\u0088\7g\2\2\u0087\u0089\5&\24\2\u0088"+
		"\u0087\3\2\2\2\u0088\u0089\3\2\2\2\u0089\23\3\2\2\2\u008a\u008b\7\u0091"+
		"\2\2\u008b\u008d\7\u00a4\2\2\u008c\u008e\t\3\2\2\u008d\u008c\3\2\2\2\u008d"+
		"\u008e\3\2\2\2\u008e\u008f\3\2\2\2\u008f\u0092\5&\24\2\u0090\u0091\t\3"+
		"\2\2\u0091\u0093\5$\23\2\u0092\u0090\3\2\2\2\u0092\u0093\3\2\2\2\u0093"+
		"\u0096\3\2\2\2\u0094\u0095\7G\2\2\u0095\u0097\7\u0147\2\2\u0096\u0094"+
		"\3\2\2\2\u0096\u0097\3\2\2\2\u0097\25\3\2\2\2\u0098\u0099\7\u0091\2\2"+
		"\u0099\u009c\7\u00c4\2\2\u009a\u009b\7G\2\2\u009b\u009d\7\u0147\2\2\u009c"+
		"\u009a\3\2\2\2\u009c\u009d\3\2\2\2\u009d\27\3\2\2\2\u009e\u009f\7\u0091"+
		"\2\2\u009f\u00a0\7\u00d7\2\2\u00a0\u00a2\5&\24\2\u00a1\u00a3\5 \21\2\u00a2"+
		"\u00a1\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a5\3\2\2\2\u00a4\u00a6\7+"+
		"\2\2\u00a5\u00a4\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\u00ae\3\2\2\2\u00a7"+
		"\u00a8\7\u0091\2\2\u00a8\u00aa\7\u00d7\2\2\u00a9\u00ab\t\5\2\2\u00aa\u00a9"+
		"\3\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ae\5$\23\2\u00ad"+
		"\u009e\3\2\2\2\u00ad\u00a7\3\2\2\2\u00ae\31\3\2\2\2\u00af\u00b0\7\u0091"+
		"\2\2\u00b0\u00b1\7\27\2\2\u00b1\u00b2\5.\30\2\u00b2\33\3\2\2\2\u00b3\u00b4"+
		"\7\u0091\2\2\u00b4\u00b5\7\u0114\2\2\u00b5\35\3\2\2\2\u00b6\u00b7\7\u0091"+
		"\2\2\u00b7\u00b8\7\u00a7\2\2\u00b8\37\3\2\2\2\u00b9\u00ba\7W\2\2\u00ba"+
		"\u00bb\7\3\2\2\u00bb\u00c0\5\"\22\2\u00bc\u00bd\7\4\2\2\u00bd\u00bf\5"+
		"\"\22\2\u00be\u00bc\3\2\2\2\u00bf\u00c2\3\2\2\2\u00c0\u00be\3\2\2\2\u00c0"+
		"\u00c1\3\2\2\2\u00c1\u00c3\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c3\u00c4\7\5"+
		"\2\2\u00c4!\3\2\2\2\u00c5\u00c8\5> \2\u00c6\u00c7\7\u0144\2\2\u00c7\u00c9"+
		"\5\62\32\2\u00c8\u00c6\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9#\3\2\2\2\u00ca"+
		"\u00cb\5> \2\u00cb%\3\2\2\2\u00cc\u00cd\5$\23\2\u00cd\u00ce\7\6\2\2\u00ce"+
		"\u00d0\3\2\2\2\u00cf\u00cc\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0\u00d1\3\2"+
		"\2\2\u00d1\u00d2\5> \2\u00d2\'\3\2\2\2\u00d3\u00d4\7\3\2\2\u00d4\u00d9"+
		"\5*\26\2\u00d5\u00d6\7\4\2\2\u00d6\u00d8\5*\26\2\u00d7\u00d5\3\2\2\2\u00d8"+
		"\u00db\3\2\2\2\u00d9\u00d7\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00dc\3\2"+
		"\2\2\u00db\u00d9\3\2\2\2\u00dc\u00dd\7\5\2\2\u00dd)\3\2\2\2\u00de\u00e3"+
		"\5,\27\2\u00df\u00e1\7\u0144\2\2\u00e0\u00df\3\2\2\2\u00e0\u00e1\3\2\2"+
		"\2\u00e1\u00e2\3\2\2\2\u00e2\u00e4\5\60\31\2\u00e3\u00e0\3\2\2\2\u00e3"+
		"\u00e4\3\2\2\2\u00e4+\3\2\2\2\u00e5\u00ea\5> \2\u00e6\u00e7\7\6\2\2\u00e7"+
		"\u00e9\5> \2\u00e8\u00e6\3\2\2\2\u00e9\u00ec\3\2\2\2\u00ea\u00e8\3\2\2"+
		"\2\u00ea\u00eb\3\2\2\2\u00eb\u00ef\3\2\2\2\u00ec\u00ea\3\2\2\2\u00ed\u00ef"+
		"\7\u0147\2\2\u00ee\u00e5\3\2\2\2\u00ee\u00ed\3\2\2\2\u00ef-\3\2\2\2\u00f0"+
		"\u00f5\5> \2\u00f1\u00f2\7\6\2\2\u00f2\u00f4\5> \2\u00f3\u00f1\3\2\2\2"+
		"\u00f4\u00f7\3\2\2\2\u00f5\u00f3\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6/\3"+
		"\2\2\2\u00f7\u00f5\3\2\2\2\u00f8\u00fd\7\u0149\2\2\u00f9\u00fd\7\u014e"+
		"\2\2\u00fa\u00fd\5<\37\2\u00fb\u00fd\7\u0147\2\2\u00fc\u00f8\3\2\2\2\u00fc"+
		"\u00f9\3\2\2\2\u00fc\u00fa\3\2\2\2\u00fc\u00fb\3\2\2\2\u00fd\61\3\2\2"+
		"\2\u00fe\u010b\7N\2\2\u00ff\u010b\5\64\33\2\u0100\u0101\5> \2\u0101\u0102"+
		"\7\u0147\2\2\u0102\u010b\3\2\2\2\u0103\u010b\5:\36\2\u0104\u010b\5<\37"+
		"\2\u0105\u0107\7\u0147\2\2\u0106\u0105\3\2\2\2\u0107\u0108\3\2\2\2\u0108"+
		"\u0106\3\2\2\2\u0108\u0109\3\2\2\2\u0109\u010b\3\2\2\2\u010a\u00fe\3\2"+
		"\2\2\u010a\u00ff\3\2\2\2\u010a\u0100\3\2\2\2\u010a\u0103\3\2\2\2\u010a"+
		"\u0104\3\2\2\2\u010a\u0106\3\2\2\2\u010b\63\3\2\2\2\u010c\u0110\7@\2\2"+
		"\u010d\u010f\5\66\34\2\u010e\u010d\3\2\2\2\u010f\u0112\3\2\2\2\u0110\u010e"+
		"\3\2\2\2\u0110\u0111\3\2\2\2\u0111\65\3\2\2\2\u0112\u0110\3\2\2\2\u0113"+
		"\u0114\58\35\2\u0114\u0117\5> \2\u0115\u0116\7k\2\2\u0116\u0118\5> \2"+
		"\u0117\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118\67\3\2\2\2\u0119\u011b"+
		"\t\6\2\2\u011a\u0119\3\2\2\2\u011a\u011b\3\2\2\2\u011b\u011c\3\2\2\2\u011c"+
		"\u011f\t\7\2\2\u011d\u011f\7\u0147\2\2\u011e\u011a\3\2\2\2\u011e\u011d"+
		"\3\2\2\2\u011f9\3\2\2\2\u0120\u0122\7\u0146\2\2\u0121\u0120\3\2\2\2\u0121"+
		"\u0122\3\2\2\2\u0122\u0123\3\2\2\2\u0123\u013d\7\u014e\2\2\u0124\u0126"+
		"\7\u0146\2\2\u0125\u0124\3\2\2\2\u0125\u0126\3\2\2\2\u0126\u0127\3\2\2"+
		"\2\u0127\u013d\7\u0149\2\2\u0128\u012a\7\u0146\2\2\u0129\u0128\3\2\2\2"+
		"\u0129\u012a\3\2\2\2\u012a\u012b\3\2\2\2\u012b\u013d\7\u014b\2\2\u012c"+
		"\u012e\7\u0146\2\2\u012d\u012c\3\2\2\2\u012d\u012e\3\2\2\2\u012e\u012f"+
		"\3\2\2\2\u012f\u013d\7\u014c\2\2\u0130\u0132\7\u0146\2\2\u0131\u0130\3"+
		"\2\2\2\u0131\u0132\3\2\2\2\u0132\u0133\3\2\2\2\u0133\u013d\7\u014d\2\2"+
		"\u0134\u0136\7\u0146\2\2\u0135\u0134\3\2\2\2\u0135\u0136\3\2\2\2\u0136"+
		"\u0137\3\2\2\2\u0137\u013d\7\u014f\2\2\u0138\u013a\7\u0146\2\2\u0139\u0138"+
		"\3\2\2\2\u0139\u013a\3\2\2\2\u013a\u013b\3\2\2\2\u013b\u013d\7\u0150\2"+
		"\2\u013c\u0121\3\2\2\2\u013c\u0125\3\2\2\2\u013c\u0129\3\2\2\2\u013c\u012d"+
		"\3\2\2\2\u013c\u0131\3\2\2\2\u013c\u0135\3\2\2\2\u013c\u0139\3\2\2\2\u013d"+
		";\3\2\2\2\u013e\u013f\t\b\2\2\u013f=\3\2\2\2\u0140\u014c\5@!\2\u0141\u014c"+
		"\7\63\2\2\u0142\u014c\7<\2\2\u0143\u014c\7E\2\2\u0144\u014c\7\u0100\2"+
		"\2\u0145\u014c\7`\2\2\u0146\u014c\7C\2\2\u0147\u014c\7\31\2\2\u0148\u014c"+
		"\7P\2\2\u0149\u014c\7q\2\2\u014a\u014c\7?\2\2\u014b\u0140\3\2\2\2\u014b"+
		"\u0141\3\2\2\2\u014b\u0142\3\2\2\2\u014b\u0143\3\2\2\2\u014b\u0144\3\2"+
		"\2\2\u014b\u0145\3\2\2\2\u014b\u0146\3\2\2\2\u014b\u0147\3\2\2\2\u014b"+
		"\u0148\3\2\2\2\u014b\u0149\3\2\2\2\u014b\u014a\3\2\2\2\u014c?\3\2\2\2"+
		"\u014d\u0152\7\u014a\2\2\u014e\u0152\5B\"\2\u014f\u0152\5D#\2\u0150\u0152"+
		"\7\u0148\2\2\u0151\u014d\3\2\2\2\u0151\u014e\3\2\2\2\u0151\u014f\3\2\2"+
		"\2\u0151\u0150\3\2\2\2\u0152A\3\2\2\2\u0153\u0154\7\u0151\2\2\u0154C\3"+
		"\2\2\2\u0155\u0156\t\t\2\2\u0156E\3\2\2\2/QW]`glrv|\u0082\u0088\u008d"+
		"\u0092\u0096\u009c\u00a2\u00a5\u00aa\u00ad\u00c0\u00c8\u00cf\u00d9\u00e0"+
		"\u00e3\u00ea\u00ee\u00f5\u00fc\u0108\u010a\u0110\u0117\u011a\u011e\u0121"+
		"\u0125\u0129\u012d\u0131\u0135\u0139\u013c\u014b\u0151";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}