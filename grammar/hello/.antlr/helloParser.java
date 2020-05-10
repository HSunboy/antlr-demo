// Generated from /Users/xuexiaokang/Documents/github/antlr-demo/grammar/hello/hello.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class helloParser extends Parser {
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
		EQ=322, PLUS=323, MINUS=324, STRING=325, INTEGER_VALUE=326, IDENTIFIER=327, 
		BIGINT_LITERAL=328, SMALLINT_LITERAL=329, TINYINT_LITERAL=330, DECIMAL_VALUE=331, 
		DOUBLE_LITERAL=332, BIGDECIMAL_LITERAL=333, BACKQUOTED_IDENTIFIER=334, 
		WS=335;
	public static final int
		RULE_singleStatement = 0, RULE_showStatement = 1, RULE_showDataBases = 2, 
		RULE_showTables = 3, RULE_showTableExtended = 4, RULE_showViews = 5, RULE_showPartitions = 6, 
		RULE_partitionSpec = 7, RULE_partitionVal = 8, RULE_database_name = 9, 
		RULE_table_name = 10, RULE_constant = 11, RULE_interval = 12, RULE_intervalField = 13, 
		RULE_intervalValue = 14, RULE_number = 15, RULE_booleanValue = 16, RULE_identifier = 17, 
		RULE_strictIdentifier = 18, RULE_quotedIdentifier = 19, RULE_nonReserved = 20;
	public static final String[] ruleNames = {
		"singleStatement", "showStatement", "showDataBases", "showTables", "showTableExtended", 
		"showViews", "showPartitions", "partitionSpec", "partitionVal", "database_name", 
		"table_name", "constant", "interval", "intervalField", "intervalValue", 
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
		"TIMESTAMPTZ", "ZONE", "EQ", "PLUS", "MINUS", "STRING", "INTEGER_VALUE", 
		"IDENTIFIER", "BIGINT_LITERAL", "SMALLINT_LITERAL", "TINYINT_LITERAL", 
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
	public String getGrammarFileName() { return "hello.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public helloParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class SingleStatementContext extends ParserRuleContext {
		public ShowStatementContext showStatement() {
			return getRuleContext(ShowStatementContext.class,0);
		}
		public TerminalNode EOF() { return getToken(helloParser.EOF, 0); }
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
			setState(42);
			showStatement();
			setState(43);
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
		public ShowStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showStatement; }
	}

	public final ShowStatementContext showStatement() throws RecognitionException {
		ShowStatementContext _localctx = new ShowStatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_showStatement);
		try {
			setState(50);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(45);
				showDataBases();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(46);
				showTables();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(47);
				showViews();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(48);
				showPartitions();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(49);
				showTableExtended();
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
		public TerminalNode SHOW() { return getToken(helloParser.SHOW, 0); }
		public TerminalNode DATABASES() { return getToken(helloParser.DATABASES, 0); }
		public TerminalNode SCHEMAS() { return getToken(helloParser.SCHEMAS, 0); }
		public TerminalNode LIKE() { return getToken(helloParser.LIKE, 0); }
		public TerminalNode STRING() { return getToken(helloParser.STRING, 0); }
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
			setState(52);
			match(SHOW);
			setState(53);
			_la = _input.LA(1);
			if ( !(_la==DATABASES || _la==SCHEMAS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIKE) {
				{
				setState(54);
				match(LIKE);
				setState(55);
				match(STRING);
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
		public TerminalNode SHOW() { return getToken(helloParser.SHOW, 0); }
		public TerminalNode TABLES() { return getToken(helloParser.TABLES, 0); }
		public TerminalNode IN() { return getToken(helloParser.IN, 0); }
		public Database_nameContext database_name() {
			return getRuleContext(Database_nameContext.class,0);
		}
		public TerminalNode STRING() { return getToken(helloParser.STRING, 0); }
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
			setState(58);
			match(SHOW);
			setState(59);
			match(TABLES);
			setState(62);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IN) {
				{
				setState(60);
				match(IN);
				setState(61);
				database_name();
				}
			}

			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STRING) {
				{
				setState(64);
				match(STRING);
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
		public TerminalNode SHOW() { return getToken(helloParser.SHOW, 0); }
		public TerminalNode TABLE() { return getToken(helloParser.TABLE, 0); }
		public TerminalNode EXTENDED() { return getToken(helloParser.EXTENDED, 0); }
		public TerminalNode LIKE() { return getToken(helloParser.LIKE, 0); }
		public TerminalNode STRING() { return getToken(helloParser.STRING, 0); }
		public Database_nameContext database_name() {
			return getRuleContext(Database_nameContext.class,0);
		}
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public TerminalNode IN() { return getToken(helloParser.IN, 0); }
		public TerminalNode FROM() { return getToken(helloParser.FROM, 0); }
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
			setState(67);
			match(SHOW);
			setState(68);
			match(TABLE);
			setState(69);
			match(EXTENDED);
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FROM || _la==IN) {
				{
				setState(70);
				_la = _input.LA(1);
				if ( !(_la==FROM || _la==IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(71);
				database_name();
				}
			}

			setState(74);
			match(LIKE);
			setState(75);
			match(STRING);
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PARTITION) {
				{
				setState(76);
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
		public TerminalNode SHOW() { return getToken(helloParser.SHOW, 0); }
		public TerminalNode VIEWS() { return getToken(helloParser.VIEWS, 0); }
		public TerminalNode MATERIALIZED() { return getToken(helloParser.MATERIALIZED, 0); }
		public Database_nameContext database_name() {
			return getRuleContext(Database_nameContext.class,0);
		}
		public TerminalNode LIKE() { return getToken(helloParser.LIKE, 0); }
		public TerminalNode STRING() { return getToken(helloParser.STRING, 0); }
		public TerminalNode IN() { return getToken(helloParser.IN, 0); }
		public TerminalNode FROM() { return getToken(helloParser.FROM, 0); }
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
			setState(79);
			match(SHOW);
			setState(80);
			_la = _input.LA(1);
			if ( !(_la==VIEWS || _la==MATERIALIZED) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FROM || _la==IN) {
				{
				setState(81);
				_la = _input.LA(1);
				if ( !(_la==FROM || _la==IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(82);
				database_name();
				}
			}

			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIKE) {
				{
				setState(85);
				match(LIKE);
				setState(86);
				match(STRING);
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
		public TerminalNode SHOW() { return getToken(helloParser.SHOW, 0); }
		public TerminalNode PARTITIONS() { return getToken(helloParser.PARTITIONS, 0); }
		public Table_nameContext table_name() {
			return getRuleContext(Table_nameContext.class,0);
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
			setState(89);
			match(SHOW);
			setState(90);
			match(PARTITIONS);
			setState(91);
			table_name();
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PARTITION) {
				{
				setState(92);
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

	public static class PartitionSpecContext extends ParserRuleContext {
		public TerminalNode PARTITION() { return getToken(helloParser.PARTITION, 0); }
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
		enterRule(_localctx, 14, RULE_partitionSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(PARTITION);
			setState(96);
			match(T__0);
			setState(97);
			partitionVal();
			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(98);
				match(T__1);
				setState(99);
				partitionVal();
				}
				}
				setState(104);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(105);
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
		public TerminalNode EQ() { return getToken(helloParser.EQ, 0); }
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
		enterRule(_localctx, 16, RULE_partitionVal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			identifier();
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQ) {
				{
				setState(108);
				match(EQ);
				setState(109);
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

	public static class Database_nameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Database_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_database_name; }
	}

	public final Database_nameContext database_name() throws RecognitionException {
		Database_nameContext _localctx = new Database_nameContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_database_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
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

	public static class Table_nameContext extends ParserRuleContext {
		public Database_nameContext db;
		public IdentifierContext table;
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Database_nameContext database_name() {
			return getRuleContext(Database_nameContext.class,0);
		}
		public Table_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_name; }
	}

	public final Table_nameContext table_name() throws RecognitionException {
		Table_nameContext _localctx = new Table_nameContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_table_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				setState(114);
				((Table_nameContext)_localctx).db = database_name();
				setState(115);
				match(T__3);
				}
				break;
			}
			setState(119);
			((Table_nameContext)_localctx).table = identifier();
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
		public TerminalNode NULL() { return getToken(helloParser.NULL, 0); }
		public NullLiteralContext(ConstantContext ctx) { copyFrom(ctx); }
	}
	public static class StringLiteralContext extends ConstantContext {
		public List<TerminalNode> STRING() { return getTokens(helloParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(helloParser.STRING, i);
		}
		public StringLiteralContext(ConstantContext ctx) { copyFrom(ctx); }
	}
	public static class TypeConstructorContext extends ConstantContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode STRING() { return getToken(helloParser.STRING, 0); }
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
		enterRule(_localctx, 22, RULE_constant);
		int _la;
		try {
			setState(133);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				_localctx = new NullLiteralContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(121);
				match(NULL);
				}
				break;
			case 2:
				_localctx = new IntervalLiteralContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(122);
				interval();
				}
				break;
			case 3:
				_localctx = new TypeConstructorContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(123);
				identifier();
				setState(124);
				match(STRING);
				}
				break;
			case 4:
				_localctx = new NumericLiteralContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(126);
				number();
				}
				break;
			case 5:
				_localctx = new BooleanLiteralContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(127);
				booleanValue();
				}
				break;
			case 6:
				_localctx = new StringLiteralContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(129); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(128);
					match(STRING);
					}
					}
					setState(131); 
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
		public TerminalNode INTERVAL() { return getToken(helloParser.INTERVAL, 0); }
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
		enterRule(_localctx, 24, RULE_interval);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(INTERVAL);
			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 323)) & ~0x3f) == 0 && ((1L << (_la - 323)) & ((1L << (PLUS - 323)) | (1L << (MINUS - 323)) | (1L << (STRING - 323)) | (1L << (INTEGER_VALUE - 323)) | (1L << (DECIMAL_VALUE - 323)))) != 0)) {
				{
				{
				setState(136);
				intervalField();
				}
				}
				setState(141);
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
		public TerminalNode TO() { return getToken(helloParser.TO, 0); }
		public IntervalFieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intervalField; }
	}

	public final IntervalFieldContext intervalField() throws RecognitionException {
		IntervalFieldContext _localctx = new IntervalFieldContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_intervalField);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			((IntervalFieldContext)_localctx).value = intervalValue();
			setState(143);
			((IntervalFieldContext)_localctx).unit = identifier();
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TO) {
				{
				setState(144);
				match(TO);
				setState(145);
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
		public TerminalNode INTEGER_VALUE() { return getToken(helloParser.INTEGER_VALUE, 0); }
		public TerminalNode DECIMAL_VALUE() { return getToken(helloParser.DECIMAL_VALUE, 0); }
		public TerminalNode PLUS() { return getToken(helloParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(helloParser.MINUS, 0); }
		public TerminalNode STRING() { return getToken(helloParser.STRING, 0); }
		public IntervalValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intervalValue; }
	}

	public final IntervalValueContext intervalValue() throws RecognitionException {
		IntervalValueContext _localctx = new IntervalValueContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_intervalValue);
		int _la;
		try {
			setState(153);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
			case MINUS:
			case INTEGER_VALUE:
			case DECIMAL_VALUE:
				enterOuterAlt(_localctx, 1);
				{
				setState(149);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PLUS || _la==MINUS) {
					{
					setState(148);
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

				setState(151);
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
				setState(152);
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
		public TerminalNode DECIMAL_VALUE() { return getToken(helloParser.DECIMAL_VALUE, 0); }
		public TerminalNode MINUS() { return getToken(helloParser.MINUS, 0); }
		public DecimalLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class BigIntLiteralContext extends NumberContext {
		public TerminalNode BIGINT_LITERAL() { return getToken(helloParser.BIGINT_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(helloParser.MINUS, 0); }
		public BigIntLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class TinyIntLiteralContext extends NumberContext {
		public TerminalNode TINYINT_LITERAL() { return getToken(helloParser.TINYINT_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(helloParser.MINUS, 0); }
		public TinyIntLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class BigDecimalLiteralContext extends NumberContext {
		public TerminalNode BIGDECIMAL_LITERAL() { return getToken(helloParser.BIGDECIMAL_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(helloParser.MINUS, 0); }
		public BigDecimalLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class DoubleLiteralContext extends NumberContext {
		public TerminalNode DOUBLE_LITERAL() { return getToken(helloParser.DOUBLE_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(helloParser.MINUS, 0); }
		public DoubleLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class IntegerLiteralContext extends NumberContext {
		public TerminalNode INTEGER_VALUE() { return getToken(helloParser.INTEGER_VALUE, 0); }
		public TerminalNode MINUS() { return getToken(helloParser.MINUS, 0); }
		public IntegerLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class SmallIntLiteralContext extends NumberContext {
		public TerminalNode SMALLINT_LITERAL() { return getToken(helloParser.SMALLINT_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(helloParser.MINUS, 0); }
		public SmallIntLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_number);
		int _la;
		try {
			setState(183);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(155);
					match(MINUS);
					}
				}

				setState(158);
				match(DECIMAL_VALUE);
				}
				break;
			case 2:
				_localctx = new IntegerLiteralContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(160);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(159);
					match(MINUS);
					}
				}

				setState(162);
				match(INTEGER_VALUE);
				}
				break;
			case 3:
				_localctx = new BigIntLiteralContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(163);
					match(MINUS);
					}
				}

				setState(166);
				match(BIGINT_LITERAL);
				}
				break;
			case 4:
				_localctx = new SmallIntLiteralContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(168);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(167);
					match(MINUS);
					}
				}

				setState(170);
				match(SMALLINT_LITERAL);
				}
				break;
			case 5:
				_localctx = new TinyIntLiteralContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(172);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(171);
					match(MINUS);
					}
				}

				setState(174);
				match(TINYINT_LITERAL);
				}
				break;
			case 6:
				_localctx = new DoubleLiteralContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(176);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(175);
					match(MINUS);
					}
				}

				setState(178);
				match(DOUBLE_LITERAL);
				}
				break;
			case 7:
				_localctx = new BigDecimalLiteralContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(180);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(179);
					match(MINUS);
					}
				}

				setState(182);
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
		public TerminalNode TRUE() { return getToken(helloParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(helloParser.FALSE, 0); }
		public BooleanValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanValue; }
	}

	public final BooleanValueContext booleanValue() throws RecognitionException {
		BooleanValueContext _localctx = new BooleanValueContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_booleanValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
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
		public TerminalNode FULL() { return getToken(helloParser.FULL, 0); }
		public TerminalNode INNER() { return getToken(helloParser.INNER, 0); }
		public TerminalNode LEFT() { return getToken(helloParser.LEFT, 0); }
		public TerminalNode SEMI() { return getToken(helloParser.SEMI, 0); }
		public TerminalNode RIGHT() { return getToken(helloParser.RIGHT, 0); }
		public TerminalNode JOIN() { return getToken(helloParser.JOIN, 0); }
		public TerminalNode CROSS() { return getToken(helloParser.CROSS, 0); }
		public TerminalNode ON() { return getToken(helloParser.ON, 0); }
		public TerminalNode UNION() { return getToken(helloParser.UNION, 0); }
		public TerminalNode INTERSECT() { return getToken(helloParser.INTERSECT, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_identifier);
		try {
			setState(198);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(187);
				strictIdentifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(188);
				match(FULL);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(189);
				match(INNER);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(190);
				match(LEFT);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(191);
				match(SEMI);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(192);
				match(RIGHT);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(193);
				match(JOIN);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(194);
				match(CROSS);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(195);
				match(ON);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(196);
				match(UNION);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(197);
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
	public static class QuotedIdentifierAlternativeContext extends StrictIdentifierContext {
		public QuotedIdentifierContext quotedIdentifier() {
			return getRuleContext(QuotedIdentifierContext.class,0);
		}
		public QuotedIdentifierAlternativeContext(StrictIdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class UnquotedIdentifierContext extends StrictIdentifierContext {
		public TerminalNode IDENTIFIER() { return getToken(helloParser.IDENTIFIER, 0); }
		public NonReservedContext nonReserved() {
			return getRuleContext(NonReservedContext.class,0);
		}
		public UnquotedIdentifierContext(StrictIdentifierContext ctx) { copyFrom(ctx); }
	}

	public final StrictIdentifierContext strictIdentifier() throws RecognitionException {
		StrictIdentifierContext _localctx = new StrictIdentifierContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_strictIdentifier);
		try {
			setState(203);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(200);
				match(IDENTIFIER);
				}
				break;
			case BACKQUOTED_IDENTIFIER:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(201);
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
				setState(202);
				nonReserved();
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
		public TerminalNode BACKQUOTED_IDENTIFIER() { return getToken(helloParser.BACKQUOTED_IDENTIFIER, 0); }
		public QuotedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quotedIdentifier; }
	}

	public final QuotedIdentifierContext quotedIdentifier() throws RecognitionException {
		QuotedIdentifierContext _localctx = new QuotedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_quotedIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
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
		public TerminalNode ADD() { return getToken(helloParser.ADD, 0); }
		public TerminalNode ADMIN() { return getToken(helloParser.ADMIN, 0); }
		public TerminalNode AFTER() { return getToken(helloParser.AFTER, 0); }
		public TerminalNode ANALYZE() { return getToken(helloParser.ANALYZE, 0); }
		public TerminalNode ARCHIVE() { return getToken(helloParser.ARCHIVE, 0); }
		public TerminalNode ASC() { return getToken(helloParser.ASC, 0); }
		public TerminalNode BEFORE() { return getToken(helloParser.BEFORE, 0); }
		public TerminalNode BUCKET() { return getToken(helloParser.BUCKET, 0); }
		public TerminalNode BUCKETS() { return getToken(helloParser.BUCKETS, 0); }
		public TerminalNode CASCADE() { return getToken(helloParser.CASCADE, 0); }
		public TerminalNode CHANGE() { return getToken(helloParser.CHANGE, 0); }
		public TerminalNode CLUSTER() { return getToken(helloParser.CLUSTER, 0); }
		public TerminalNode CLUSTERED() { return getToken(helloParser.CLUSTERED, 0); }
		public TerminalNode CLUSTERSTATUS() { return getToken(helloParser.CLUSTERSTATUS, 0); }
		public TerminalNode COLLECTION() { return getToken(helloParser.COLLECTION, 0); }
		public TerminalNode COLUMNS() { return getToken(helloParser.COLUMNS, 0); }
		public TerminalNode COMMENT() { return getToken(helloParser.COMMENT, 0); }
		public TerminalNode COMPACT() { return getToken(helloParser.COMPACT, 0); }
		public TerminalNode COMPACTIONS() { return getToken(helloParser.COMPACTIONS, 0); }
		public TerminalNode COMPUTE() { return getToken(helloParser.COMPUTE, 0); }
		public TerminalNode CONCATENATE() { return getToken(helloParser.CONCATENATE, 0); }
		public TerminalNode CONTINUE() { return getToken(helloParser.CONTINUE, 0); }
		public TerminalNode DATA() { return getToken(helloParser.DATA, 0); }
		public TerminalNode DATABASES() { return getToken(helloParser.DATABASES, 0); }
		public TerminalNode DATETIME() { return getToken(helloParser.DATETIME, 0); }
		public TerminalNode DAY() { return getToken(helloParser.DAY, 0); }
		public TerminalNode DBPROPERTIES() { return getToken(helloParser.DBPROPERTIES, 0); }
		public TerminalNode DEFERRED() { return getToken(helloParser.DEFERRED, 0); }
		public TerminalNode DEFINED() { return getToken(helloParser.DEFINED, 0); }
		public TerminalNode DELIMITED() { return getToken(helloParser.DELIMITED, 0); }
		public TerminalNode DEPENDENCY() { return getToken(helloParser.DEPENDENCY, 0); }
		public TerminalNode DESC() { return getToken(helloParser.DESC, 0); }
		public TerminalNode DIRECTORIES() { return getToken(helloParser.DIRECTORIES, 0); }
		public TerminalNode DIRECTORY() { return getToken(helloParser.DIRECTORY, 0); }
		public TerminalNode DISABLE() { return getToken(helloParser.DISABLE, 0); }
		public TerminalNode DISTRIBUTE() { return getToken(helloParser.DISTRIBUTE, 0); }
		public TerminalNode ELEM_TYPE() { return getToken(helloParser.ELEM_TYPE, 0); }
		public TerminalNode ENABLE() { return getToken(helloParser.ENABLE, 0); }
		public TerminalNode ESCAPED() { return getToken(helloParser.ESCAPED, 0); }
		public TerminalNode EXCLUSIVE() { return getToken(helloParser.EXCLUSIVE, 0); }
		public TerminalNode EXPLAIN() { return getToken(helloParser.EXPLAIN, 0); }
		public TerminalNode EXPORT() { return getToken(helloParser.EXPORT, 0); }
		public TerminalNode FIELDS() { return getToken(helloParser.FIELDS, 0); }
		public TerminalNode FILE() { return getToken(helloParser.FILE, 0); }
		public TerminalNode FILEFORMAT() { return getToken(helloParser.FILEFORMAT, 0); }
		public TerminalNode FIRST() { return getToken(helloParser.FIRST, 0); }
		public TerminalNode FORMAT() { return getToken(helloParser.FORMAT, 0); }
		public TerminalNode FORMATTED() { return getToken(helloParser.FORMATTED, 0); }
		public TerminalNode FUNCTIONS() { return getToken(helloParser.FUNCTIONS, 0); }
		public TerminalNode HOLD_DDLTIME() { return getToken(helloParser.HOLD_DDLTIME, 0); }
		public TerminalNode HOUR() { return getToken(helloParser.HOUR, 0); }
		public TerminalNode IDXPROPERTIES() { return getToken(helloParser.IDXPROPERTIES, 0); }
		public TerminalNode IGNORE() { return getToken(helloParser.IGNORE, 0); }
		public TerminalNode INDEX() { return getToken(helloParser.INDEX, 0); }
		public TerminalNode INDEXES() { return getToken(helloParser.INDEXES, 0); }
		public TerminalNode INPATH() { return getToken(helloParser.INPATH, 0); }
		public TerminalNode INPUTDRIVER() { return getToken(helloParser.INPUTDRIVER, 0); }
		public TerminalNode INPUTFORMAT() { return getToken(helloParser.INPUTFORMAT, 0); }
		public TerminalNode ITEMS() { return getToken(helloParser.ITEMS, 0); }
		public TerminalNode JAR() { return getToken(helloParser.JAR, 0); }
		public TerminalNode KEYS() { return getToken(helloParser.KEYS, 0); }
		public TerminalNode KEY_TYPE() { return getToken(helloParser.KEY_TYPE, 0); }
		public TerminalNode LIMIT() { return getToken(helloParser.LIMIT, 0); }
		public TerminalNode LINES() { return getToken(helloParser.LINES, 0); }
		public TerminalNode LOAD() { return getToken(helloParser.LOAD, 0); }
		public TerminalNode LOCATION() { return getToken(helloParser.LOCATION, 0); }
		public TerminalNode LOCK() { return getToken(helloParser.LOCK, 0); }
		public TerminalNode LOCKS() { return getToken(helloParser.LOCKS, 0); }
		public TerminalNode LOGICAL() { return getToken(helloParser.LOGICAL, 0); }
		public TerminalNode LONG() { return getToken(helloParser.LONG, 0); }
		public TerminalNode MAPJOIN() { return getToken(helloParser.MAPJOIN, 0); }
		public TerminalNode MATERIALIZED() { return getToken(helloParser.MATERIALIZED, 0); }
		public TerminalNode METADATA() { return getToken(helloParser.METADATA, 0); }
		public TerminalNode SETMINUS() { return getToken(helloParser.SETMINUS, 0); }
		public TerminalNode MINUTE() { return getToken(helloParser.MINUTE, 0); }
		public TerminalNode MONTH() { return getToken(helloParser.MONTH, 0); }
		public TerminalNode MSCK() { return getToken(helloParser.MSCK, 0); }
		public TerminalNode NOSCAN() { return getToken(helloParser.NOSCAN, 0); }
		public TerminalNode NO_DROP() { return getToken(helloParser.NO_DROP, 0); }
		public TerminalNode OFFLINE() { return getToken(helloParser.OFFLINE, 0); }
		public TerminalNode OPTION() { return getToken(helloParser.OPTION, 0); }
		public TerminalNode OUTPUTDRIVER() { return getToken(helloParser.OUTPUTDRIVER, 0); }
		public TerminalNode OUTPUTFORMAT() { return getToken(helloParser.OUTPUTFORMAT, 0); }
		public TerminalNode OVERWRITE() { return getToken(helloParser.OVERWRITE, 0); }
		public TerminalNode OWNER() { return getToken(helloParser.OWNER, 0); }
		public TerminalNode PARTITIONED() { return getToken(helloParser.PARTITIONED, 0); }
		public TerminalNode PARTITIONS() { return getToken(helloParser.PARTITIONS, 0); }
		public TerminalNode PLUS() { return getToken(helloParser.PLUS, 0); }
		public TerminalNode PRETTY() { return getToken(helloParser.PRETTY, 0); }
		public TerminalNode PRINCIPALS() { return getToken(helloParser.PRINCIPALS, 0); }
		public TerminalNode PROTECTION() { return getToken(helloParser.PROTECTION, 0); }
		public TerminalNode PURGE() { return getToken(helloParser.PURGE, 0); }
		public TerminalNode READ() { return getToken(helloParser.READ, 0); }
		public TerminalNode READONLY() { return getToken(helloParser.READONLY, 0); }
		public TerminalNode REBUILD() { return getToken(helloParser.REBUILD, 0); }
		public TerminalNode RECORDREADER() { return getToken(helloParser.RECORDREADER, 0); }
		public TerminalNode RECORDWRITER() { return getToken(helloParser.RECORDWRITER, 0); }
		public TerminalNode RELOAD() { return getToken(helloParser.RELOAD, 0); }
		public TerminalNode RENAME() { return getToken(helloParser.RENAME, 0); }
		public TerminalNode REPAIR() { return getToken(helloParser.REPAIR, 0); }
		public TerminalNode REPLACE() { return getToken(helloParser.REPLACE, 0); }
		public TerminalNode REPLICATION() { return getToken(helloParser.REPLICATION, 0); }
		public TerminalNode RESTRICT() { return getToken(helloParser.RESTRICT, 0); }
		public TerminalNode REWRITE() { return getToken(helloParser.REWRITE, 0); }
		public TerminalNode ROLE() { return getToken(helloParser.ROLE, 0); }
		public TerminalNode ROLES() { return getToken(helloParser.ROLES, 0); }
		public TerminalNode SCHEMA() { return getToken(helloParser.SCHEMA, 0); }
		public TerminalNode SCHEMAS() { return getToken(helloParser.SCHEMAS, 0); }
		public TerminalNode SECOND() { return getToken(helloParser.SECOND, 0); }
		public TerminalNode SEMI() { return getToken(helloParser.SEMI, 0); }
		public TerminalNode SERDE() { return getToken(helloParser.SERDE, 0); }
		public TerminalNode SERDEPROPERTIES() { return getToken(helloParser.SERDEPROPERTIES, 0); }
		public TerminalNode SERVER() { return getToken(helloParser.SERVER, 0); }
		public TerminalNode SETS() { return getToken(helloParser.SETS, 0); }
		public TerminalNode SHARED() { return getToken(helloParser.SHARED, 0); }
		public TerminalNode SHOW() { return getToken(helloParser.SHOW, 0); }
		public TerminalNode SHOW_DATABASE() { return getToken(helloParser.SHOW_DATABASE, 0); }
		public TerminalNode SKEWED() { return getToken(helloParser.SKEWED, 0); }
		public TerminalNode SORT() { return getToken(helloParser.SORT, 0); }
		public TerminalNode SORTED() { return getToken(helloParser.SORTED, 0); }
		public TerminalNode SSL() { return getToken(helloParser.SSL, 0); }
		public TerminalNode STATISTICS() { return getToken(helloParser.STATISTICS, 0); }
		public TerminalNode STORED() { return getToken(helloParser.STORED, 0); }
		public TerminalNode STREAMTABLE() { return getToken(helloParser.STREAMTABLE, 0); }
		public TerminalNode STRING() { return getToken(helloParser.STRING, 0); }
		public TerminalNode STRUCT() { return getToken(helloParser.STRUCT, 0); }
		public TerminalNode TABLES() { return getToken(helloParser.TABLES, 0); }
		public TerminalNode TBLPROPERTIES() { return getToken(helloParser.TBLPROPERTIES, 0); }
		public TerminalNode TEMPORARY() { return getToken(helloParser.TEMPORARY, 0); }
		public TerminalNode TERMINATED() { return getToken(helloParser.TERMINATED, 0); }
		public TerminalNode TINYINT() { return getToken(helloParser.TINYINT, 0); }
		public TerminalNode TOUCH() { return getToken(helloParser.TOUCH, 0); }
		public TerminalNode TRANSACTIONS() { return getToken(helloParser.TRANSACTIONS, 0); }
		public TerminalNode UNARCHIVE() { return getToken(helloParser.UNARCHIVE, 0); }
		public TerminalNode UNDO() { return getToken(helloParser.UNDO, 0); }
		public TerminalNode UNIONTYPE() { return getToken(helloParser.UNIONTYPE, 0); }
		public TerminalNode UNLOCK() { return getToken(helloParser.UNLOCK, 0); }
		public TerminalNode UNSET() { return getToken(helloParser.UNSET, 0); }
		public TerminalNode UNSIGNED() { return getToken(helloParser.UNSIGNED, 0); }
		public TerminalNode URI() { return getToken(helloParser.URI, 0); }
		public TerminalNode USE() { return getToken(helloParser.USE, 0); }
		public TerminalNode UTC() { return getToken(helloParser.UTC, 0); }
		public TerminalNode UTCTIMESTAMP() { return getToken(helloParser.UTCTIMESTAMP, 0); }
		public TerminalNode VALUE_TYPE() { return getToken(helloParser.VALUE_TYPE, 0); }
		public TerminalNode VIEW() { return getToken(helloParser.VIEW, 0); }
		public TerminalNode WHILE() { return getToken(helloParser.WHILE, 0); }
		public TerminalNode YEAR() { return getToken(helloParser.YEAR, 0); }
		public TerminalNode AUTOCOMMIT() { return getToken(helloParser.AUTOCOMMIT, 0); }
		public TerminalNode ISOLATION() { return getToken(helloParser.ISOLATION, 0); }
		public TerminalNode LEVEL() { return getToken(helloParser.LEVEL, 0); }
		public TerminalNode OFFSET() { return getToken(helloParser.OFFSET, 0); }
		public TerminalNode SNAPSHOT() { return getToken(helloParser.SNAPSHOT, 0); }
		public TerminalNode TRANSACTION() { return getToken(helloParser.TRANSACTION, 0); }
		public TerminalNode WORK() { return getToken(helloParser.WORK, 0); }
		public TerminalNode WRITE() { return getToken(helloParser.WRITE, 0); }
		public TerminalNode ABORT() { return getToken(helloParser.ABORT, 0); }
		public TerminalNode KEY() { return getToken(helloParser.KEY, 0); }
		public TerminalNode LAST() { return getToken(helloParser.LAST, 0); }
		public TerminalNode NORELY() { return getToken(helloParser.NORELY, 0); }
		public TerminalNode NOVALIDATE() { return getToken(helloParser.NOVALIDATE, 0); }
		public TerminalNode NULLS() { return getToken(helloParser.NULLS, 0); }
		public TerminalNode RELY() { return getToken(helloParser.RELY, 0); }
		public TerminalNode VALIDATE() { return getToken(helloParser.VALIDATE, 0); }
		public TerminalNode DETAIL() { return getToken(helloParser.DETAIL, 0); }
		public TerminalNode DOW() { return getToken(helloParser.DOW, 0); }
		public TerminalNode EXPRESSION() { return getToken(helloParser.EXPRESSION, 0); }
		public TerminalNode OPERATOR() { return getToken(helloParser.OPERATOR, 0); }
		public TerminalNode QUARTER() { return getToken(helloParser.QUARTER, 0); }
		public TerminalNode SUMMARY() { return getToken(helloParser.SUMMARY, 0); }
		public TerminalNode VECTORIZATION() { return getToken(helloParser.VECTORIZATION, 0); }
		public TerminalNode WEEK() { return getToken(helloParser.WEEK, 0); }
		public TerminalNode YEARS() { return getToken(helloParser.YEARS, 0); }
		public TerminalNode MONTHS() { return getToken(helloParser.MONTHS, 0); }
		public TerminalNode WEEKS() { return getToken(helloParser.WEEKS, 0); }
		public TerminalNode DAYS() { return getToken(helloParser.DAYS, 0); }
		public TerminalNode HOURS() { return getToken(helloParser.HOURS, 0); }
		public TerminalNode MINUTES() { return getToken(helloParser.MINUTES, 0); }
		public TerminalNode SECONDS() { return getToken(helloParser.SECONDS, 0); }
		public TerminalNode TIMESTAMPTZ() { return getToken(helloParser.TIMESTAMPTZ, 0); }
		public TerminalNode ZONE() { return getToken(helloParser.ZONE, 0); }
		public NonReservedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonReserved; }
	}

	public final NonReservedContext nonReserved() throws RecognitionException {
		NonReservedContext _localctx = new NonReservedContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_nonReserved);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0151\u00d4\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3"+
		"\3\5\3\65\n\3\3\4\3\4\3\4\3\4\5\4;\n\4\3\5\3\5\3\5\3\5\5\5A\n\5\3\5\5"+
		"\5D\n\5\3\6\3\6\3\6\3\6\3\6\5\6K\n\6\3\6\3\6\3\6\5\6P\n\6\3\7\3\7\3\7"+
		"\3\7\5\7V\n\7\3\7\3\7\5\7Z\n\7\3\b\3\b\3\b\3\b\5\b`\n\b\3\t\3\t\3\t\3"+
		"\t\3\t\7\tg\n\t\f\t\16\tj\13\t\3\t\3\t\3\n\3\n\3\n\5\nq\n\n\3\13\3\13"+
		"\3\f\3\f\3\f\5\fx\n\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\6\r\u0084"+
		"\n\r\r\r\16\r\u0085\5\r\u0088\n\r\3\16\3\16\7\16\u008c\n\16\f\16\16\16"+
		"\u008f\13\16\3\17\3\17\3\17\3\17\5\17\u0095\n\17\3\20\5\20\u0098\n\20"+
		"\3\20\3\20\5\20\u009c\n\20\3\21\5\21\u009f\n\21\3\21\3\21\5\21\u00a3\n"+
		"\21\3\21\3\21\5\21\u00a7\n\21\3\21\3\21\5\21\u00ab\n\21\3\21\3\21\5\21"+
		"\u00af\n\21\3\21\3\21\5\21\u00b3\n\21\3\21\3\21\5\21\u00b7\n\21\3\21\5"+
		"\21\u00ba\n\21\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\5\23\u00c9\n\23\3\24\3\24\3\24\5\24\u00ce\n\24\3\25\3\25\3"+
		"\26\3\26\3\26\2\2\27\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*\2\t"+
		"\3\2\u0092\u0093\4\2\62\62;;\4\2\u008d\u008d\u00db\u00db\3\2\u0145\u0146"+
		"\4\2\u0148\u0148\u014d\u014d\4\2--nn\6\2\u0091\u00ea\u00ec\u0143\u0145"+
		"\u0145\u0147\u0147\2\u00f0\2,\3\2\2\2\4\64\3\2\2\2\6\66\3\2\2\2\b<\3\2"+
		"\2\2\nE\3\2\2\2\fQ\3\2\2\2\16[\3\2\2\2\20a\3\2\2\2\22m\3\2\2\2\24r\3\2"+
		"\2\2\26w\3\2\2\2\30\u0087\3\2\2\2\32\u0089\3\2\2\2\34\u0090\3\2\2\2\36"+
		"\u009b\3\2\2\2 \u00b9\3\2\2\2\"\u00bb\3\2\2\2$\u00c8\3\2\2\2&\u00cd\3"+
		"\2\2\2(\u00cf\3\2\2\2*\u00d1\3\2\2\2,-\5\4\3\2-.\7\2\2\3.\3\3\2\2\2/\65"+
		"\5\6\4\2\60\65\5\b\5\2\61\65\5\f\7\2\62\65\5\16\b\2\63\65\5\n\6\2\64/"+
		"\3\2\2\2\64\60\3\2\2\2\64\61\3\2\2\2\64\62\3\2\2\2\64\63\3\2\2\2\65\5"+
		"\3\2\2\2\66\67\7\u0091\2\2\67:\t\2\2\289\7G\2\29;\7\u0147\2\2:8\3\2\2"+
		"\2:;\3\2\2\2;\7\3\2\2\2<=\7\u0091\2\2=@\7\u0094\2\2>?\7;\2\2?A\5\24\13"+
		"\2@>\3\2\2\2@A\3\2\2\2AC\3\2\2\2BD\7\u0147\2\2CB\3\2\2\2CD\3\2\2\2D\t"+
		"\3\2\2\2EF\7\u0091\2\2FG\7g\2\2GJ\7+\2\2HI\t\3\2\2IK\5\24\13\2JH\3\2\2"+
		"\2JK\3\2\2\2KL\3\2\2\2LM\7G\2\2MO\7\u0147\2\2NP\5\20\t\2ON\3\2\2\2OP\3"+
		"\2\2\2P\13\3\2\2\2QR\7\u0091\2\2RU\t\4\2\2ST\t\3\2\2TV\5\24\13\2US\3\2"+
		"\2\2UV\3\2\2\2VY\3\2\2\2WX\7G\2\2XZ\7\u0147\2\2YW\3\2\2\2YZ\3\2\2\2Z\r"+
		"\3\2\2\2[\\\7\u0091\2\2\\]\7\u00ea\2\2]_\5\26\f\2^`\5\20\t\2_^\3\2\2\2"+
		"_`\3\2\2\2`\17\3\2\2\2ab\7W\2\2bc\7\3\2\2ch\5\22\n\2de\7\4\2\2eg\5\22"+
		"\n\2fd\3\2\2\2gj\3\2\2\2hf\3\2\2\2hi\3\2\2\2ik\3\2\2\2jh\3\2\2\2kl\7\5"+
		"\2\2l\21\3\2\2\2mp\5$\23\2no\7\u0144\2\2oq\5\30\r\2pn\3\2\2\2pq\3\2\2"+
		"\2q\23\3\2\2\2rs\5$\23\2s\25\3\2\2\2tu\5\24\13\2uv\7\6\2\2vx\3\2\2\2w"+
		"t\3\2\2\2wx\3\2\2\2xy\3\2\2\2yz\5$\23\2z\27\3\2\2\2{\u0088\7N\2\2|\u0088"+
		"\5\32\16\2}~\5$\23\2~\177\7\u0147\2\2\177\u0088\3\2\2\2\u0080\u0088\5"+
		" \21\2\u0081\u0088\5\"\22\2\u0082\u0084\7\u0147\2\2\u0083\u0082\3\2\2"+
		"\2\u0084\u0085\3\2\2\2\u0085\u0083\3\2\2\2\u0085\u0086\3\2\2\2\u0086\u0088"+
		"\3\2\2\2\u0087{\3\2\2\2\u0087|\3\2\2\2\u0087}\3\2\2\2\u0087\u0080\3\2"+
		"\2\2\u0087\u0081\3\2\2\2\u0087\u0083\3\2\2\2\u0088\31\3\2\2\2\u0089\u008d"+
		"\7@\2\2\u008a\u008c\5\34\17\2\u008b\u008a\3\2\2\2\u008c\u008f\3\2\2\2"+
		"\u008d\u008b\3\2\2\2\u008d\u008e\3\2\2\2\u008e\33\3\2\2\2\u008f\u008d"+
		"\3\2\2\2\u0090\u0091\5\36\20\2\u0091\u0094\5$\23\2\u0092\u0093\7k\2\2"+
		"\u0093\u0095\5$\23\2\u0094\u0092\3\2\2\2\u0094\u0095\3\2\2\2\u0095\35"+
		"\3\2\2\2\u0096\u0098\t\5\2\2\u0097\u0096\3\2\2\2\u0097\u0098\3\2\2\2\u0098"+
		"\u0099\3\2\2\2\u0099\u009c\t\6\2\2\u009a\u009c\7\u0147\2\2\u009b\u0097"+
		"\3\2\2\2\u009b\u009a\3\2\2\2\u009c\37\3\2\2\2\u009d\u009f\7\u0146\2\2"+
		"\u009e\u009d\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00ba"+
		"\7\u014d\2\2\u00a1\u00a3\7\u0146\2\2\u00a2\u00a1\3\2\2\2\u00a2\u00a3\3"+
		"\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00ba\7\u0148\2\2\u00a5\u00a7\7\u0146"+
		"\2\2\u00a6\u00a5\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8"+
		"\u00ba\7\u014a\2\2\u00a9\u00ab\7\u0146\2\2\u00aa\u00a9\3\2\2\2\u00aa\u00ab"+
		"\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ba\7\u014b\2\2\u00ad\u00af\7\u0146"+
		"\2\2\u00ae\u00ad\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0"+
		"\u00ba\7\u014c\2\2\u00b1\u00b3\7\u0146\2\2\u00b2\u00b1\3\2\2\2\u00b2\u00b3"+
		"\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\u00ba\7\u014e\2\2\u00b5\u00b7\7\u0146"+
		"\2\2\u00b6\u00b5\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8"+
		"\u00ba\7\u014f\2\2\u00b9\u009e\3\2\2\2\u00b9\u00a2\3\2\2\2\u00b9\u00a6"+
		"\3\2\2\2\u00b9\u00aa\3\2\2\2\u00b9\u00ae\3\2\2\2\u00b9\u00b2\3\2\2\2\u00b9"+
		"\u00b6\3\2\2\2\u00ba!\3\2\2\2\u00bb\u00bc\t\7\2\2\u00bc#\3\2\2\2\u00bd"+
		"\u00c9\5&\24\2\u00be\u00c9\7\63\2\2\u00bf\u00c9\7<\2\2\u00c0\u00c9\7E"+
		"\2\2\u00c1\u00c9\7\u0100\2\2\u00c2\u00c9\7`\2\2\u00c3\u00c9\7C\2\2\u00c4"+
		"\u00c9\7\31\2\2\u00c5\u00c9\7P\2\2\u00c6\u00c9\7q\2\2\u00c7\u00c9\7?\2"+
		"\2\u00c8\u00bd\3\2\2\2\u00c8\u00be\3\2\2\2\u00c8\u00bf\3\2\2\2\u00c8\u00c0"+
		"\3\2\2\2\u00c8\u00c1\3\2\2\2\u00c8\u00c2\3\2\2\2\u00c8\u00c3\3\2\2\2\u00c8"+
		"\u00c4\3\2\2\2\u00c8\u00c5\3\2\2\2\u00c8\u00c6\3\2\2\2\u00c8\u00c7\3\2"+
		"\2\2\u00c9%\3\2\2\2\u00ca\u00ce\7\u0149\2\2\u00cb\u00ce\5(\25\2\u00cc"+
		"\u00ce\5*\26\2\u00cd\u00ca\3\2\2\2\u00cd\u00cb\3\2\2\2\u00cd\u00cc\3\2"+
		"\2\2\u00ce\'\3\2\2\2\u00cf\u00d0\7\u0150\2\2\u00d0)\3\2\2\2\u00d1\u00d2"+
		"\t\b\2\2\u00d2+\3\2\2\2\36\64:@CJOUY_hpw\u0085\u0087\u008d\u0094\u0097"+
		"\u009b\u009e\u00a2\u00a6\u00aa\u00ae\u00b2\u00b6\u00b9\u00c8\u00cd";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}