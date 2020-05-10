// Generated from /Users/xuexiaokang/Documents/github/antlr-demo/grammar/sql.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class sqlParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, SELECT=19, FROM=20, ADD=21, AS=22, ALL=23, ANY=24, DISTINCT=25, 
		WHERE=26, GROUP=27, BY=28, GROUPING=29, SETS=30, CUBE=31, ROLLUP=32, ORDER=33, 
		HAVING=34, LIMIT=35, AT=36, OR=37, AND=38, IN=39, NOT=40, NO=41, EXISTS=42, 
		BETWEEN=43, LIKE=44, RLIKE=45, IS=46, NULL=47, TRUE=48, FALSE=49, NULLS=50, 
		ASC=51, DESC=52, FOR=53, INTERVAL=54, CASE=55, WHEN=56, THEN=57, ELSE=58, 
		END=59, JOIN=60, CROSS=61, OUTER=62, INNER=63, LEFT=64, SEMI=65, RIGHT=66, 
		FULL=67, NATURAL=68, ON=69, PIVOT=70, LATERAL=71, WINDOW=72, OVER=73, 
		PARTITION=74, RANGE=75, ROWS=76, UNBOUNDED=77, PRECEDING=78, FOLLOWING=79, 
		CURRENT=80, FIRST=81, AFTER=82, LAST=83, ROW=84, WITH=85, VALUES=86, CREATE=87, 
		TABLE=88, DIRECTORY=89, VIEW=90, REPLACE=91, INSERT=92, DELETE=93, INTO=94, 
		DESCRIBE=95, EXPLAIN=96, FORMAT=97, LOGICAL=98, CODEGEN=99, COST=100, 
		CAST=101, SHOW=102, TABLES=103, COLUMNS=104, COLUMN=105, USE=106, PARTITIONS=107, 
		FUNCTIONS=108, DROP=109, UNION=110, EXCEPT=111, SETMINUS=112, INTERSECT=113, 
		TO=114, TABLESAMPLE=115, STRATIFY=116, ALTER=117, RENAME=118, ARRAY=119, 
		MAP=120, STRUCT=121, COMMENT=122, SET=123, RESET=124, DATA=125, START=126, 
		TRANSACTION=127, COMMIT=128, ROLLBACK=129, MACRO=130, IGNORE=131, BOTH=132, 
		LEADING=133, TRAILING=134, IF=135, POSITION=136, EXTRACT=137, EQ=138, 
		NSEQ=139, NEQ=140, NEQJ=141, LT=142, LTE=143, GT=144, GTE=145, PLUS=146, 
		MINUS=147, ASTERISK=148, SLASH=149, PERCENT=150, DIV=151, TILDE=152, AMPERSAND=153, 
		PIPE=154, CONCAT_PIPE=155, HAT=156, PERCENTLIT=157, BUCKET=158, OUT=159, 
		OF=160, SORT=161, CLUSTER=162, DISTRIBUTE=163, OVERWRITE=164, TRANSFORM=165, 
		REDUCE=166, USING=167, SERDE=168, SERDEPROPERTIES=169, RECORDREADER=170, 
		RECORDWRITER=171, DELIMITED=172, FIELDS=173, TERMINATED=174, COLLECTION=175, 
		ITEMS=176, KEYS=177, ESCAPED=178, LINES=179, SEPARATED=180, FUNCTION=181, 
		EXTENDED=182, REFRESH=183, CLEAR=184, CACHE=185, UNCACHE=186, LAZY=187, 
		FORMATTED=188, GLOBAL=189, TEMPORARY=190, OPTIONS=191, UNSET=192, TBLPROPERTIES=193, 
		DBPROPERTIES=194, BUCKETS=195, SKEWED=196, STORED=197, DIRECTORIES=198, 
		LOCATION=199, EXCHANGE=200, ARCHIVE=201, UNARCHIVE=202, FILEFORMAT=203, 
		TOUCH=204, COMPACT=205, CONCATENATE=206, CHANGE=207, CASCADE=208, RESTRICT=209, 
		CLUSTERED=210, SORTED=211, PURGE=212, INPUTFORMAT=213, OUTPUTFORMAT=214, 
		DATABASE=215, DATABASES=216, DFS=217, TRUNCATE=218, ANALYZE=219, COMPUTE=220, 
		LIST=221, STATISTICS=222, PARTITIONED=223, EXTERNAL=224, DEFINED=225, 
		REVOKE=226, GRANT=227, LOCK=228, UNLOCK=229, MSCK=230, REPAIR=231, RECOVER=232, 
		EXPORT=233, IMPORT=234, LOAD=235, ROLE=236, ROLES=237, COMPACTIONS=238, 
		PRINCIPALS=239, TRANSACTIONS=240, INDEX=241, INDEXES=242, LOCKS=243, OPTION=244, 
		ANTI=245, LOCAL=246, INPATH=247, WATERMARK=248, UNNEST=249, MATCH_RECOGNIZE=250, 
		MEASURES=251, ONE=252, PER=253, MATCH=254, SKIP1=255, NEXT=256, PAST=257, 
		PATTERN=258, WITHIN=259, DEFINE=260, STRING=261, BIGINT_LITERAL=262, SMALLINT_LITERAL=263, 
		TINYINT_LITERAL=264, INTEGER_VALUE=265, DECIMAL_VALUE=266, DOUBLE_LITERAL=267, 
		BIGDECIMAL_LITERAL=268, IDENTIFIER=269, BACKQUOTED_IDENTIFIER=270, SIMPLE_COMMENT=271, 
		BRACKETED_EMPTY_COMMENT=272, BRACKETED_COMMENT=273, WS=274, UNRECOGNIZED=275;
	public static final int
		RULE_singleStatement = 0, RULE_singleExpression = 1, RULE_singleTableIdentifier = 2, 
		RULE_singleFunctionIdentifier = 3, RULE_singleDataType = 4, RULE_singleTableSchema = 5, 
		RULE_statement = 6, RULE_unsupportedHiveNativeCommands = 7, RULE_createTableHeader = 8, 
		RULE_bucketSpec = 9, RULE_skewSpec = 10, RULE_locationSpec = 11, RULE_query = 12, 
		RULE_insertInto = 13, RULE_partitionSpecLocation = 14, RULE_partitionSpec = 15, 
		RULE_partitionVal = 16, RULE_describeFuncName = 17, RULE_describeColName = 18, 
		RULE_ctes = 19, RULE_namedQuery = 20, RULE_tableProvider = 21, RULE_tablePropertyList = 22, 
		RULE_tableProperty = 23, RULE_tablePropertyKey = 24, RULE_tablePropertyValue = 25, 
		RULE_constantList = 26, RULE_nestedConstantList = 27, RULE_createFileFormat = 28, 
		RULE_fileFormat = 29, RULE_storageHandler = 30, RULE_resource = 31, RULE_queryNoWith = 32, 
		RULE_queryOrganization = 33, RULE_multiInsertQueryBody = 34, RULE_queryTerm = 35, 
		RULE_queryPrimary = 36, RULE_sortItem = 37, RULE_querySpecification = 38, 
		RULE_hint = 39, RULE_hintStatement = 40, RULE_fromClause = 41, RULE_aggregation = 42, 
		RULE_groupingSet = 43, RULE_pivotClause = 44, RULE_pivotColumn = 45, RULE_pivotValue = 46, 
		RULE_lateralView = 47, RULE_setQuantifier = 48, RULE_relation = 49, RULE_joinRelation = 50, 
		RULE_joinType = 51, RULE_joinCriteria = 52, RULE_sample = 53, RULE_sampleMethod = 54, 
		RULE_identifierList = 55, RULE_identifierSeq = 56, RULE_orderedIdentifierList = 57, 
		RULE_orderedIdentifier = 58, RULE_identifierCommentList = 59, RULE_identifierComment = 60, 
		RULE_relationPrimary = 61, RULE_matchRecognize = 62, RULE_measureColumn = 63, 
		RULE_condition1 = 64, RULE_variable = 65, RULE_pattern1 = 66, RULE_patternTerm = 67, 
		RULE_patternFactor = 68, RULE_patternQuantifier = 69, RULE_minRepeat = 70, 
		RULE_maxRepeat = 71, RULE_repeat = 72, RULE_inlineTable = 73, RULE_functionTable = 74, 
		RULE_tableAlias = 75, RULE_rowFormat = 76, RULE_tableIdentifier = 77, 
		RULE_functionIdentifier = 78, RULE_namedExpression = 79, RULE_namedExpressionSeq = 80, 
		RULE_expression = 81, RULE_booleanExpression = 82, RULE_predicate = 83, 
		RULE_valueExpression = 84, RULE_primaryExpression = 85, RULE_constant = 86, 
		RULE_comparisonOperator = 87, RULE_arithmeticOperator = 88, RULE_predicateOperator = 89, 
		RULE_booleanValue = 90, RULE_interval = 91, RULE_intervalField = 92, RULE_intervalValue = 93, 
		RULE_colPosition = 94, RULE_dataType = 95, RULE_colTypeList = 96, RULE_colType = 97, 
		RULE_dtColTypeList = 98, RULE_dtColType = 99, RULE_dtColIdentifier = 100, 
		RULE_complexColTypeList = 101, RULE_complexColType = 102, RULE_whenClause = 103, 
		RULE_windows = 104, RULE_namedWindow = 105, RULE_windowSpec = 106, RULE_windowFrame = 107, 
		RULE_frameBound = 108, RULE_qualifiedName = 109, RULE_identifier = 110, 
		RULE_strictIdentifier = 111, RULE_quotedIdentifier = 112, RULE_number = 113, 
		RULE_nonReserved = 114;
	public static final String[] ruleNames = {
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
		"identifierCommentList", "identifierComment", "relationPrimary", "matchRecognize", 
		"measureColumn", "condition1", "variable", "pattern1", "patternTerm", 
		"patternFactor", "patternQuantifier", "minRepeat", "maxRepeat", "repeat", 
		"inlineTable", "functionTable", "tableAlias", "rowFormat", "tableIdentifier", 
		"functionIdentifier", "namedExpression", "namedExpressionSeq", "expression", 
		"booleanExpression", "predicate", "valueExpression", "primaryExpression", 
		"constant", "comparisonOperator", "arithmeticOperator", "predicateOperator", 
		"booleanValue", "interval", "intervalField", "intervalValue", "colPosition", 
		"dataType", "colTypeList", "colType", "dtColTypeList", "dtColType", "dtColIdentifier", 
		"complexColTypeList", "complexColType", "whenClause", "windows", "namedWindow", 
		"windowSpec", "windowFrame", "frameBound", "qualifiedName", "identifier", 
		"strictIdentifier", "quotedIdentifier", "number", "nonReserved"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'('", "')'", "'.'", "','", "'/*+'", "'*/'", "'*?'", "'+?'", "'?'", 
		"'??'", "'{'", "'}'", "'->'", "'['", "']'", "'PRIMARY'", "'KEY'", "':'", 
		"'SELECT'", "'FROM'", "'ADD'", "'AS'", "'ALL'", "'ANY'", "'DISTINCT'", 
		"'WHERE'", "'GROUP'", "'BY'", "'GROUPING'", "'SETS'", "'CUBE'", "'ROLLUP'", 
		"'ORDER'", "'HAVING'", "'LIMIT'", "'AT'", "'OR'", "'AND'", "'IN'", null, 
		"'NO'", "'EXISTS'", "'BETWEEN'", "'LIKE'", null, "'IS'", "'NULL'", "'TRUE'", 
		"'FALSE'", "'NULLS'", "'ASC'", "'DESC'", "'FOR'", "'INTERVAL'", "'CASE'", 
		"'WHEN'", "'THEN'", "'ELSE'", "'END'", "'JOIN'", "'CROSS'", "'OUTER'", 
		"'INNER'", "'LEFT'", "'SEMI'", "'RIGHT'", "'FULL'", "'NATURAL'", "'ON'", 
		"'PIVOT'", "'LATERAL'", "'WINDOW'", "'OVER'", "'PARTITION'", "'RANGE'", 
		"'ROWS'", "'UNBOUNDED'", "'PRECEDING'", "'FOLLOWING'", "'CURRENT'", "'FIRST'", 
		"'AFTER'", "'LAST'", "'ROW'", "'WITH'", "'VALUES'", "'CREATE'", "'TABLE'", 
		"'DIRECTORY'", "'VIEW'", "'REPLACE'", "'INSERT'", "'DELETE'", "'INTO'", 
		"'DESCRIBE'", "'EXPLAIN'", "'FORMAT'", "'LOGICAL'", "'CODEGEN'", "'COST'", 
		"'CAST'", "'SHOW'", "'TABLES'", "'COLUMNS'", "'COLUMN'", "'USE'", "'PARTITIONS'", 
		"'FUNCTIONS'", "'DROP'", "'UNION'", "'EXCEPT'", "'MINUS'", "'INTERSECT'", 
		"'TO'", "'TABLESAMPLE'", "'STRATIFY'", "'ALTER'", "'RENAME'", "'ARRAY'", 
		"'MAP'", "'STRUCT'", "'COMMENT'", "'SET'", "'RESET'", "'DATA'", "'START'", 
		"'TRANSACTION'", "'COMMIT'", "'ROLLBACK'", "'MACRO'", "'IGNORE'", "'BOTH'", 
		"'LEADING'", "'TRAILING'", "'IF'", "'POSITION'", "'EXTRACT'", null, "'<=>'", 
		"'<>'", "'!='", "'<'", null, "'>'", null, "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'DIV'", "'~'", "'&'", "'|'", "'||'", "'^'", "'PERCENT'", "'BUCKET'", 
		"'OUT'", "'OF'", "'SORT'", "'CLUSTER'", "'DISTRIBUTE'", "'OVERWRITE'", 
		"'TRANSFORM'", "'REDUCE'", "'USING'", "'SERDE'", "'SERDEPROPERTIES'", 
		"'RECORDREADER'", "'RECORDWRITER'", "'DELIMITED'", "'FIELDS'", "'TERMINATED'", 
		"'COLLECTION'", "'ITEMS'", "'KEYS'", "'ESCAPED'", "'LINES'", "'SEPARATED'", 
		"'FUNCTION'", "'EXTENDED'", "'REFRESH'", "'CLEAR'", "'CACHE'", "'UNCACHE'", 
		"'LAZY'", "'FORMATTED'", "'GLOBAL'", null, "'OPTIONS'", "'UNSET'", "'TBLPROPERTIES'", 
		"'DBPROPERTIES'", "'BUCKETS'", "'SKEWED'", "'STORED'", "'DIRECTORIES'", 
		"'LOCATION'", "'EXCHANGE'", "'ARCHIVE'", "'UNARCHIVE'", "'FILEFORMAT'", 
		"'TOUCH'", "'COMPACT'", "'CONCATENATE'", "'CHANGE'", "'CASCADE'", "'RESTRICT'", 
		"'CLUSTERED'", "'SORTED'", "'PURGE'", "'INPUTFORMAT'", "'OUTPUTFORMAT'", 
		null, null, "'DFS'", "'TRUNCATE'", "'ANALYZE'", "'COMPUTE'", "'LIST'", 
		"'STATISTICS'", "'PARTITIONED'", "'EXTERNAL'", "'DEFINED'", "'REVOKE'", 
		"'GRANT'", "'LOCK'", "'UNLOCK'", "'MSCK'", "'REPAIR'", "'RECOVER'", "'EXPORT'", 
		"'IMPORT'", "'LOAD'", "'ROLE'", "'ROLES'", "'COMPACTIONS'", "'PRINCIPALS'", 
		"'TRANSACTIONS'", "'INDEX'", "'INDEXES'", "'LOCKS'", "'OPTION'", "'ANTI'", 
		"'LOCAL'", "'INPATH'", "'WATERMARK'", "'UNNEST'", "'MATCH_RECOGNIZE'", 
		"'MEASURES'", "'ONE'", "'PER'", "'MATCH'", "'SKIP'", "'NEXT'", "'PAST'", 
		"'PATTERN'", "'WITHIN'", "'DEFINE'", null, null, null, null, null, null, 
		null, null, null, null, null, "'/**/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, "SELECT", "FROM", "ADD", "AS", 
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
		"LOCAL", "INPATH", "WATERMARK", "UNNEST", "MATCH_RECOGNIZE", "MEASURES", 
		"ONE", "PER", "MATCH", "SKIP1", "NEXT", "PAST", "PATTERN", "WITHIN", "DEFINE", 
		"STRING", "BIGINT_LITERAL", "SMALLINT_LITERAL", "TINYINT_LITERAL", "INTEGER_VALUE", 
		"DECIMAL_VALUE", "DOUBLE_LITERAL", "BIGDECIMAL_LITERAL", "IDENTIFIER", 
		"BACKQUOTED_IDENTIFIER", "SIMPLE_COMMENT", "BRACKETED_EMPTY_COMMENT", 
		"BRACKETED_COMMENT", "WS", "UNRECOGNIZED"
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
	public String getGrammarFileName() { return "sql.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public sqlParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class SingleStatementContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode EOF() { return getToken(sqlParser.EOF, 0); }
		public SingleStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleStatement; }
	}

	public final SingleStatementContext singleStatement() throws RecognitionException {
		SingleStatementContext _localctx = new SingleStatementContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_singleStatement);
		try {
			setState(234);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case SELECT:
			case FROM:
			case ADD:
			case DESC:
			case WITH:
			case VALUES:
			case CREATE:
			case TABLE:
			case INSERT:
			case DELETE:
			case DESCRIBE:
			case EXPLAIN:
			case SHOW:
			case USE:
			case DROP:
			case ALTER:
			case MAP:
			case SET:
			case RESET:
			case START:
			case COMMIT:
			case ROLLBACK:
			case REDUCE:
			case REFRESH:
			case CLEAR:
			case CACHE:
			case UNCACHE:
			case DFS:
			case TRUNCATE:
			case ANALYZE:
			case LIST:
			case REVOKE:
			case GRANT:
			case LOCK:
			case UNLOCK:
			case MSCK:
			case EXPORT:
			case IMPORT:
			case LOAD:
				enterOuterAlt(_localctx, 1);
				{
				setState(230);
				statement();
				setState(231);
				match(EOF);
				}
				break;
			case EOF:
				enterOuterAlt(_localctx, 2);
				{
				setState(233);
				match(EOF);
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

	public static class SingleExpressionContext extends ParserRuleContext {
		public NamedExpressionContext namedExpression() {
			return getRuleContext(NamedExpressionContext.class,0);
		}
		public TerminalNode EOF() { return getToken(sqlParser.EOF, 0); }
		public SingleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleExpression; }
	}

	public final SingleExpressionContext singleExpression() throws RecognitionException {
		SingleExpressionContext _localctx = new SingleExpressionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_singleExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
			namedExpression();
			setState(237);
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

	public static class SingleTableIdentifierContext extends ParserRuleContext {
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode EOF() { return getToken(sqlParser.EOF, 0); }
		public SingleTableIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleTableIdentifier; }
	}

	public final SingleTableIdentifierContext singleTableIdentifier() throws RecognitionException {
		SingleTableIdentifierContext _localctx = new SingleTableIdentifierContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_singleTableIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			tableIdentifier();
			setState(240);
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

	public static class SingleFunctionIdentifierContext extends ParserRuleContext {
		public FunctionIdentifierContext functionIdentifier() {
			return getRuleContext(FunctionIdentifierContext.class,0);
		}
		public TerminalNode EOF() { return getToken(sqlParser.EOF, 0); }
		public SingleFunctionIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleFunctionIdentifier; }
	}

	public final SingleFunctionIdentifierContext singleFunctionIdentifier() throws RecognitionException {
		SingleFunctionIdentifierContext _localctx = new SingleFunctionIdentifierContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_singleFunctionIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			functionIdentifier();
			setState(243);
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

	public static class SingleDataTypeContext extends ParserRuleContext {
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public TerminalNode EOF() { return getToken(sqlParser.EOF, 0); }
		public SingleDataTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleDataType; }
	}

	public final SingleDataTypeContext singleDataType() throws RecognitionException {
		SingleDataTypeContext _localctx = new SingleDataTypeContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_singleDataType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			dataType();
			setState(246);
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

	public static class SingleTableSchemaContext extends ParserRuleContext {
		public ColTypeListContext colTypeList() {
			return getRuleContext(ColTypeListContext.class,0);
		}
		public TerminalNode EOF() { return getToken(sqlParser.EOF, 0); }
		public SingleTableSchemaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleTableSchema; }
	}

	public final SingleTableSchemaContext singleTableSchema() throws RecognitionException {
		SingleTableSchemaContext _localctx = new SingleTableSchemaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_singleTableSchema);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			colTypeList();
			setState(249);
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

	public static class StatementContext extends ParserRuleContext {
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	 
		public StatementContext() { }
		public void copyFrom(StatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ExplainContext extends StatementContext {
		public TerminalNode EXPLAIN() { return getToken(sqlParser.EXPLAIN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode LOGICAL() { return getToken(sqlParser.LOGICAL, 0); }
		public TerminalNode FORMATTED() { return getToken(sqlParser.FORMATTED, 0); }
		public TerminalNode EXTENDED() { return getToken(sqlParser.EXTENDED, 0); }
		public TerminalNode CODEGEN() { return getToken(sqlParser.CODEGEN, 0); }
		public TerminalNode COST() { return getToken(sqlParser.COST, 0); }
		public ExplainContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DropDatabaseContext extends StatementContext {
		public TerminalNode DROP() { return getToken(sqlParser.DROP, 0); }
		public TerminalNode DATABASE() { return getToken(sqlParser.DATABASE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public TerminalNode RESTRICT() { return getToken(sqlParser.RESTRICT, 0); }
		public TerminalNode CASCADE() { return getToken(sqlParser.CASCADE, 0); }
		public DropDatabaseContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ResetConfigurationContext extends StatementContext {
		public TerminalNode RESET() { return getToken(sqlParser.RESET, 0); }
		public ResetConfigurationContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DescribeDatabaseContext extends StatementContext {
		public TerminalNode DATABASE() { return getToken(sqlParser.DATABASE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode DESC() { return getToken(sqlParser.DESC, 0); }
		public TerminalNode DESCRIBE() { return getToken(sqlParser.DESCRIBE, 0); }
		public TerminalNode EXTENDED() { return getToken(sqlParser.EXTENDED, 0); }
		public DescribeDatabaseContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class AlterViewQueryContext extends StatementContext {
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public AlterViewQueryContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class UseContext extends StatementContext {
		public IdentifierContext db;
		public TerminalNode USE() { return getToken(sqlParser.USE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public UseContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CreateTempViewUsingContext extends StatementContext {
		public TerminalNode CREATE() { return getToken(sqlParser.CREATE, 0); }
		public TerminalNode TEMPORARY() { return getToken(sqlParser.TEMPORARY, 0); }
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TableProviderContext tableProvider() {
			return getRuleContext(TableProviderContext.class,0);
		}
		public TerminalNode OR() { return getToken(sqlParser.OR, 0); }
		public TerminalNode REPLACE() { return getToken(sqlParser.REPLACE, 0); }
		public TerminalNode GLOBAL() { return getToken(sqlParser.GLOBAL, 0); }
		public ColTypeListContext colTypeList() {
			return getRuleContext(ColTypeListContext.class,0);
		}
		public TerminalNode OPTIONS() { return getToken(sqlParser.OPTIONS, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public CreateTempViewUsingContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class RenameTableContext extends StatementContext {
		public TableIdentifierContext from;
		public TableIdentifierContext to;
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode RENAME() { return getToken(sqlParser.RENAME, 0); }
		public TerminalNode TO() { return getToken(sqlParser.TO, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public List<TableIdentifierContext> tableIdentifier() {
			return getRuleContexts(TableIdentifierContext.class);
		}
		public TableIdentifierContext tableIdentifier(int i) {
			return getRuleContext(TableIdentifierContext.class,i);
		}
		public RenameTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class FailNativeCommandContext extends StatementContext {
		public TerminalNode SET() { return getToken(sqlParser.SET, 0); }
		public TerminalNode ROLE() { return getToken(sqlParser.ROLE, 0); }
		public UnsupportedHiveNativeCommandsContext unsupportedHiveNativeCommands() {
			return getRuleContext(UnsupportedHiveNativeCommandsContext.class,0);
		}
		public FailNativeCommandContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ClearCacheContext extends StatementContext {
		public TerminalNode CLEAR() { return getToken(sqlParser.CLEAR, 0); }
		public TerminalNode CACHE() { return getToken(sqlParser.CACHE, 0); }
		public ClearCacheContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ShowTablesContext extends StatementContext {
		public IdentifierContext db;
		public Token pattern;
		public TerminalNode SHOW() { return getToken(sqlParser.SHOW, 0); }
		public TerminalNode TABLES() { return getToken(sqlParser.TABLES, 0); }
		public TerminalNode FROM() { return getToken(sqlParser.FROM, 0); }
		public TerminalNode IN() { return getToken(sqlParser.IN, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TerminalNode LIKE() { return getToken(sqlParser.LIKE, 0); }
		public ShowTablesContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class RecoverPartitionsContext extends StatementContext {
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode RECOVER() { return getToken(sqlParser.RECOVER, 0); }
		public TerminalNode PARTITIONS() { return getToken(sqlParser.PARTITIONS, 0); }
		public RecoverPartitionsContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class RenameTablePartitionContext extends StatementContext {
		public PartitionSpecContext from;
		public PartitionSpecContext to;
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode RENAME() { return getToken(sqlParser.RENAME, 0); }
		public TerminalNode TO() { return getToken(sqlParser.TO, 0); }
		public List<PartitionSpecContext> partitionSpec() {
			return getRuleContexts(PartitionSpecContext.class);
		}
		public PartitionSpecContext partitionSpec(int i) {
			return getRuleContext(PartitionSpecContext.class,i);
		}
		public RenameTablePartitionContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class RepairTableContext extends StatementContext {
		public TerminalNode MSCK() { return getToken(sqlParser.MSCK, 0); }
		public TerminalNode REPAIR() { return getToken(sqlParser.REPAIR, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public RepairTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class RefreshResourceContext extends StatementContext {
		public TerminalNode REFRESH() { return getToken(sqlParser.REFRESH, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public RefreshResourceContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ShowCreateTableContext extends StatementContext {
		public TerminalNode SHOW() { return getToken(sqlParser.SHOW, 0); }
		public TerminalNode CREATE() { return getToken(sqlParser.CREATE, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public ShowCreateTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ShowColumnsContext extends StatementContext {
		public IdentifierContext db;
		public TerminalNode SHOW() { return getToken(sqlParser.SHOW, 0); }
		public TerminalNode COLUMNS() { return getToken(sqlParser.COLUMNS, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public List<TerminalNode> FROM() { return getTokens(sqlParser.FROM); }
		public TerminalNode FROM(int i) {
			return getToken(sqlParser.FROM, i);
		}
		public List<TerminalNode> IN() { return getTokens(sqlParser.IN); }
		public TerminalNode IN(int i) {
			return getToken(sqlParser.IN, i);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ShowColumnsContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class AddTablePartitionContext extends StatementContext {
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode ADD() { return getToken(sqlParser.ADD, 0); }
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public List<PartitionSpecLocationContext> partitionSpecLocation() {
			return getRuleContexts(PartitionSpecLocationContext.class);
		}
		public PartitionSpecLocationContext partitionSpecLocation(int i) {
			return getRuleContext(PartitionSpecLocationContext.class,i);
		}
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public List<PartitionSpecContext> partitionSpec() {
			return getRuleContexts(PartitionSpecContext.class);
		}
		public PartitionSpecContext partitionSpec(int i) {
			return getRuleContext(PartitionSpecContext.class,i);
		}
		public AddTablePartitionContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class RefreshTableContext extends StatementContext {
		public TerminalNode REFRESH() { return getToken(sqlParser.REFRESH, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public RefreshTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ManageResourceContext extends StatementContext {
		public Token op;
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ADD() { return getToken(sqlParser.ADD, 0); }
		public TerminalNode LIST() { return getToken(sqlParser.LIST, 0); }
		public ManageResourceContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CreateDatabaseContext extends StatementContext {
		public Token comment;
		public TerminalNode CREATE() { return getToken(sqlParser.CREATE, 0); }
		public TerminalNode DATABASE() { return getToken(sqlParser.DATABASE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public TerminalNode COMMENT() { return getToken(sqlParser.COMMENT, 0); }
		public LocationSpecContext locationSpec() {
			return getRuleContext(LocationSpecContext.class,0);
		}
		public TerminalNode WITH() { return getToken(sqlParser.WITH, 0); }
		public TerminalNode DBPROPERTIES() { return getToken(sqlParser.DBPROPERTIES, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public CreateDatabaseContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class AnalyzeContext extends StatementContext {
		public TerminalNode ANALYZE() { return getToken(sqlParser.ANALYZE, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode COMPUTE() { return getToken(sqlParser.COMPUTE, 0); }
		public TerminalNode STATISTICS() { return getToken(sqlParser.STATISTICS, 0); }
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode FOR() { return getToken(sqlParser.FOR, 0); }
		public TerminalNode COLUMNS() { return getToken(sqlParser.COLUMNS, 0); }
		public IdentifierSeqContext identifierSeq() {
			return getRuleContext(IdentifierSeqContext.class,0);
		}
		public TerminalNode ALL() { return getToken(sqlParser.ALL, 0); }
		public AnalyzeContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CreateHiveTableContext extends StatementContext {
		public ColTypeListContext columns;
		public Token comment;
		public ColTypeListContext partitionColumns;
		public TablePropertyListContext tableProps;
		public CreateTableHeaderContext createTableHeader() {
			return getRuleContext(CreateTableHeaderContext.class,0);
		}
		public List<BucketSpecContext> bucketSpec() {
			return getRuleContexts(BucketSpecContext.class);
		}
		public BucketSpecContext bucketSpec(int i) {
			return getRuleContext(BucketSpecContext.class,i);
		}
		public List<SkewSpecContext> skewSpec() {
			return getRuleContexts(SkewSpecContext.class);
		}
		public SkewSpecContext skewSpec(int i) {
			return getRuleContext(SkewSpecContext.class,i);
		}
		public List<RowFormatContext> rowFormat() {
			return getRuleContexts(RowFormatContext.class);
		}
		public RowFormatContext rowFormat(int i) {
			return getRuleContext(RowFormatContext.class,i);
		}
		public List<CreateFileFormatContext> createFileFormat() {
			return getRuleContexts(CreateFileFormatContext.class);
		}
		public CreateFileFormatContext createFileFormat(int i) {
			return getRuleContext(CreateFileFormatContext.class,i);
		}
		public List<LocationSpecContext> locationSpec() {
			return getRuleContexts(LocationSpecContext.class);
		}
		public LocationSpecContext locationSpec(int i) {
			return getRuleContext(LocationSpecContext.class,i);
		}
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public List<ColTypeListContext> colTypeList() {
			return getRuleContexts(ColTypeListContext.class);
		}
		public ColTypeListContext colTypeList(int i) {
			return getRuleContext(ColTypeListContext.class,i);
		}
		public List<TerminalNode> COMMENT() { return getTokens(sqlParser.COMMENT); }
		public TerminalNode COMMENT(int i) {
			return getToken(sqlParser.COMMENT, i);
		}
		public List<TerminalNode> PARTITIONED() { return getTokens(sqlParser.PARTITIONED); }
		public TerminalNode PARTITIONED(int i) {
			return getToken(sqlParser.PARTITIONED, i);
		}
		public List<TerminalNode> BY() { return getTokens(sqlParser.BY); }
		public TerminalNode BY(int i) {
			return getToken(sqlParser.BY, i);
		}
		public List<TerminalNode> TBLPROPERTIES() { return getTokens(sqlParser.TBLPROPERTIES); }
		public TerminalNode TBLPROPERTIES(int i) {
			return getToken(sqlParser.TBLPROPERTIES, i);
		}
		public List<TerminalNode> STRING() { return getTokens(sqlParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(sqlParser.STRING, i);
		}
		public List<TablePropertyListContext> tablePropertyList() {
			return getRuleContexts(TablePropertyListContext.class);
		}
		public TablePropertyListContext tablePropertyList(int i) {
			return getRuleContext(TablePropertyListContext.class,i);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public CreateHiveTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CreateFunctionContext extends StatementContext {
		public Token className;
		public TerminalNode CREATE() { return getToken(sqlParser.CREATE, 0); }
		public TerminalNode FUNCTION() { return getToken(sqlParser.FUNCTION, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TerminalNode OR() { return getToken(sqlParser.OR, 0); }
		public TerminalNode REPLACE() { return getToken(sqlParser.REPLACE, 0); }
		public TerminalNode TEMPORARY() { return getToken(sqlParser.TEMPORARY, 0); }
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public TerminalNode USING() { return getToken(sqlParser.USING, 0); }
		public List<ResourceContext> resource() {
			return getRuleContexts(ResourceContext.class);
		}
		public ResourceContext resource(int i) {
			return getRuleContext(ResourceContext.class,i);
		}
		public CreateFunctionContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ShowTableContext extends StatementContext {
		public IdentifierContext db;
		public Token pattern;
		public TerminalNode SHOW() { return getToken(sqlParser.SHOW, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TerminalNode EXTENDED() { return getToken(sqlParser.EXTENDED, 0); }
		public TerminalNode LIKE() { return getToken(sqlParser.LIKE, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public TerminalNode FROM() { return getToken(sqlParser.FROM, 0); }
		public TerminalNode IN() { return getToken(sqlParser.IN, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ShowTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SetDatabasePropertiesContext extends StatementContext {
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode DATABASE() { return getToken(sqlParser.DATABASE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SET() { return getToken(sqlParser.SET, 0); }
		public TerminalNode DBPROPERTIES() { return getToken(sqlParser.DBPROPERTIES, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public SetDatabasePropertiesContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CreateTableContext extends StatementContext {
		public TablePropertyListContext options;
		public IdentifierListContext partitionColumnNames;
		public Token comment;
		public TablePropertyListContext tableProps;
		public CreateTableHeaderContext createTableHeader() {
			return getRuleContext(CreateTableHeaderContext.class,0);
		}
		public TableProviderContext tableProvider() {
			return getRuleContext(TableProviderContext.class,0);
		}
		public ColTypeListContext colTypeList() {
			return getRuleContext(ColTypeListContext.class,0);
		}
		public List<BucketSpecContext> bucketSpec() {
			return getRuleContexts(BucketSpecContext.class);
		}
		public BucketSpecContext bucketSpec(int i) {
			return getRuleContext(BucketSpecContext.class,i);
		}
		public List<LocationSpecContext> locationSpec() {
			return getRuleContexts(LocationSpecContext.class);
		}
		public LocationSpecContext locationSpec(int i) {
			return getRuleContext(LocationSpecContext.class,i);
		}
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public List<TerminalNode> OPTIONS() { return getTokens(sqlParser.OPTIONS); }
		public TerminalNode OPTIONS(int i) {
			return getToken(sqlParser.OPTIONS, i);
		}
		public List<TerminalNode> PARTITIONED() { return getTokens(sqlParser.PARTITIONED); }
		public TerminalNode PARTITIONED(int i) {
			return getToken(sqlParser.PARTITIONED, i);
		}
		public List<TerminalNode> BY() { return getTokens(sqlParser.BY); }
		public TerminalNode BY(int i) {
			return getToken(sqlParser.BY, i);
		}
		public List<TerminalNode> COMMENT() { return getTokens(sqlParser.COMMENT); }
		public TerminalNode COMMENT(int i) {
			return getToken(sqlParser.COMMENT, i);
		}
		public List<TerminalNode> TBLPROPERTIES() { return getTokens(sqlParser.TBLPROPERTIES); }
		public TerminalNode TBLPROPERTIES(int i) {
			return getToken(sqlParser.TBLPROPERTIES, i);
		}
		public List<TablePropertyListContext> tablePropertyList() {
			return getRuleContexts(TablePropertyListContext.class);
		}
		public TablePropertyListContext tablePropertyList(int i) {
			return getRuleContext(TablePropertyListContext.class,i);
		}
		public List<IdentifierListContext> identifierList() {
			return getRuleContexts(IdentifierListContext.class);
		}
		public IdentifierListContext identifierList(int i) {
			return getRuleContext(IdentifierListContext.class,i);
		}
		public List<TerminalNode> STRING() { return getTokens(sqlParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(sqlParser.STRING, i);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public CreateTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DescribeTableContext extends StatementContext {
		public Token option;
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode DESC() { return getToken(sqlParser.DESC, 0); }
		public TerminalNode DESCRIBE() { return getToken(sqlParser.DESCRIBE, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public DescribeColNameContext describeColName() {
			return getRuleContext(DescribeColNameContext.class,0);
		}
		public TerminalNode EXTENDED() { return getToken(sqlParser.EXTENDED, 0); }
		public TerminalNode FORMATTED() { return getToken(sqlParser.FORMATTED, 0); }
		public DescribeTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CreateTableLikeContext extends StatementContext {
		public TableIdentifierContext target;
		public TableIdentifierContext source;
		public TerminalNode CREATE() { return getToken(sqlParser.CREATE, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TerminalNode LIKE() { return getToken(sqlParser.LIKE, 0); }
		public List<TableIdentifierContext> tableIdentifier() {
			return getRuleContexts(TableIdentifierContext.class);
		}
		public TableIdentifierContext tableIdentifier(int i) {
			return getRuleContext(TableIdentifierContext.class,i);
		}
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public LocationSpecContext locationSpec() {
			return getRuleContext(LocationSpecContext.class,0);
		}
		public CreateTableLikeContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class UncacheTableContext extends StatementContext {
		public TerminalNode UNCACHE() { return getToken(sqlParser.UNCACHE, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public UncacheTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DropFunctionContext extends StatementContext {
		public TerminalNode DROP() { return getToken(sqlParser.DROP, 0); }
		public TerminalNode FUNCTION() { return getToken(sqlParser.FUNCTION, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public TerminalNode TEMPORARY() { return getToken(sqlParser.TEMPORARY, 0); }
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public DropFunctionContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class LoadDataContext extends StatementContext {
		public Token path;
		public TerminalNode LOAD() { return getToken(sqlParser.LOAD, 0); }
		public TerminalNode DATA() { return getToken(sqlParser.DATA, 0); }
		public TerminalNode INPATH() { return getToken(sqlParser.INPATH, 0); }
		public TerminalNode INTO() { return getToken(sqlParser.INTO, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TerminalNode LOCAL() { return getToken(sqlParser.LOCAL, 0); }
		public TerminalNode OVERWRITE() { return getToken(sqlParser.OVERWRITE, 0); }
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public LoadDataContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ShowPartitionsContext extends StatementContext {
		public TerminalNode SHOW() { return getToken(sqlParser.SHOW, 0); }
		public TerminalNode PARTITIONS() { return getToken(sqlParser.PARTITIONS, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public ShowPartitionsContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DescribeFunctionContext extends StatementContext {
		public TerminalNode FUNCTION() { return getToken(sqlParser.FUNCTION, 0); }
		public DescribeFuncNameContext describeFuncName() {
			return getRuleContext(DescribeFuncNameContext.class,0);
		}
		public TerminalNode DESC() { return getToken(sqlParser.DESC, 0); }
		public TerminalNode DESCRIBE() { return getToken(sqlParser.DESCRIBE, 0); }
		public TerminalNode EXTENDED() { return getToken(sqlParser.EXTENDED, 0); }
		public DescribeFunctionContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ChangeColumnContext extends StatementContext {
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode CHANGE() { return getToken(sqlParser.CHANGE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ColTypeContext colType() {
			return getRuleContext(ColTypeContext.class,0);
		}
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public TerminalNode COLUMN() { return getToken(sqlParser.COLUMN, 0); }
		public ColPositionContext colPosition() {
			return getRuleContext(ColPositionContext.class,0);
		}
		public ChangeColumnContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class StatementDefaultContext extends StatementContext {
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public StatementDefaultContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class TruncateTableContext extends StatementContext {
		public TerminalNode TRUNCATE() { return getToken(sqlParser.TRUNCATE, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public TruncateTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SetTableSerDeContext extends StatementContext {
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode SET() { return getToken(sqlParser.SET, 0); }
		public TerminalNode SERDE() { return getToken(sqlParser.SERDE, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public TerminalNode WITH() { return getToken(sqlParser.WITH, 0); }
		public TerminalNode SERDEPROPERTIES() { return getToken(sqlParser.SERDEPROPERTIES, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public SetTableSerDeContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CreateViewContext extends StatementContext {
		public TerminalNode CREATE() { return getToken(sqlParser.CREATE, 0); }
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public TerminalNode OR() { return getToken(sqlParser.OR, 0); }
		public TerminalNode REPLACE() { return getToken(sqlParser.REPLACE, 0); }
		public TerminalNode TEMPORARY() { return getToken(sqlParser.TEMPORARY, 0); }
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public IdentifierCommentListContext identifierCommentList() {
			return getRuleContext(IdentifierCommentListContext.class,0);
		}
		public TerminalNode COMMENT() { return getToken(sqlParser.COMMENT, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TerminalNode PARTITIONED() { return getToken(sqlParser.PARTITIONED, 0); }
		public TerminalNode ON() { return getToken(sqlParser.ON, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode TBLPROPERTIES() { return getToken(sqlParser.TBLPROPERTIES, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public TerminalNode GLOBAL() { return getToken(sqlParser.GLOBAL, 0); }
		public CreateViewContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DropTablePartitionsContext extends StatementContext {
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode DROP() { return getToken(sqlParser.DROP, 0); }
		public List<PartitionSpecContext> partitionSpec() {
			return getRuleContexts(PartitionSpecContext.class);
		}
		public PartitionSpecContext partitionSpec(int i) {
			return getRuleContext(PartitionSpecContext.class,i);
		}
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public TerminalNode PURGE() { return getToken(sqlParser.PURGE, 0); }
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public DropTablePartitionsContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SetConfigurationContext extends StatementContext {
		public TerminalNode SET() { return getToken(sqlParser.SET, 0); }
		public SetConfigurationContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DropTableContext extends StatementContext {
		public TerminalNode DROP() { return getToken(sqlParser.DROP, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public TerminalNode PURGE() { return getToken(sqlParser.PURGE, 0); }
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public DropTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ShowDatabasesContext extends StatementContext {
		public Token pattern;
		public TerminalNode SHOW() { return getToken(sqlParser.SHOW, 0); }
		public TerminalNode DATABASES() { return getToken(sqlParser.DATABASES, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TerminalNode LIKE() { return getToken(sqlParser.LIKE, 0); }
		public ShowDatabasesContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ShowTblPropertiesContext extends StatementContext {
		public TableIdentifierContext table;
		public TablePropertyKeyContext key;
		public TerminalNode SHOW() { return getToken(sqlParser.SHOW, 0); }
		public TerminalNode TBLPROPERTIES() { return getToken(sqlParser.TBLPROPERTIES, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TablePropertyKeyContext tablePropertyKey() {
			return getRuleContext(TablePropertyKeyContext.class,0);
		}
		public ShowTblPropertiesContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CreateFlinkTableContext extends StatementContext {
		public IdentifierContext catcatalogName;
		public DtColTypeListContext columns;
		public Token comment;
		public IdentifierListContext partitionColumnNames;
		public TerminalNode CREATE() { return getToken(sqlParser.CREATE, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode WITH() { return getToken(sqlParser.WITH, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public TerminalNode COMMENT() { return getToken(sqlParser.COMMENT, 0); }
		public TerminalNode PARTITIONED() { return getToken(sqlParser.PARTITIONED, 0); }
		public TerminalNode BY() { return getToken(sqlParser.BY, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DtColTypeListContext dtColTypeList() {
			return getRuleContext(DtColTypeListContext.class,0);
		}
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public CreateFlinkTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class UnsetTablePropertiesContext extends StatementContext {
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode UNSET() { return getToken(sqlParser.UNSET, 0); }
		public TerminalNode TBLPROPERTIES() { return getToken(sqlParser.TBLPROPERTIES, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public UnsetTablePropertiesContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SetTableLocationContext extends StatementContext {
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode SET() { return getToken(sqlParser.SET, 0); }
		public LocationSpecContext locationSpec() {
			return getRuleContext(LocationSpecContext.class,0);
		}
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public SetTableLocationContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ShowFunctionsContext extends StatementContext {
		public Token pattern;
		public TerminalNode SHOW() { return getToken(sqlParser.SHOW, 0); }
		public TerminalNode FUNCTIONS() { return getToken(sqlParser.FUNCTIONS, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public TerminalNode LIKE() { return getToken(sqlParser.LIKE, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public ShowFunctionsContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CacheTableContext extends StatementContext {
		public TablePropertyListContext options;
		public TerminalNode CACHE() { return getToken(sqlParser.CACHE, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode LAZY() { return getToken(sqlParser.LAZY, 0); }
		public TerminalNode OPTIONS() { return getToken(sqlParser.OPTIONS, 0); }
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public CacheTableContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class AddTableColumnsContext extends StatementContext {
		public ColTypeListContext columns;
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode ADD() { return getToken(sqlParser.ADD, 0); }
		public TerminalNode COLUMNS() { return getToken(sqlParser.COLUMNS, 0); }
		public ColTypeListContext colTypeList() {
			return getRuleContext(ColTypeListContext.class,0);
		}
		public AddTableColumnsContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SetTablePropertiesContext extends StatementContext {
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode SET() { return getToken(sqlParser.SET, 0); }
		public TerminalNode TBLPROPERTIES() { return getToken(sqlParser.TBLPROPERTIES, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public SetTablePropertiesContext(StatementContext ctx) { copyFrom(ctx); }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_statement);
		int _la;
		try {
			int _alt;
			setState(893);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				_localctx = new StatementDefaultContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(251);
				query();
				}
				break;
			case 2:
				_localctx = new UseContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(252);
				match(USE);
				setState(253);
				((UseContext)_localctx).db = identifier();
				}
				break;
			case 3:
				_localctx = new CreateDatabaseContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(254);
				match(CREATE);
				setState(255);
				match(DATABASE);
				setState(259);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
				case 1:
					{
					setState(256);
					match(IF);
					setState(257);
					match(NOT);
					setState(258);
					match(EXISTS);
					}
					break;
				}
				setState(261);
				identifier();
				setState(264);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMENT) {
					{
					setState(262);
					match(COMMENT);
					setState(263);
					((CreateDatabaseContext)_localctx).comment = match(STRING);
					}
				}

				setState(267);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LOCATION) {
					{
					setState(266);
					locationSpec();
					}
				}

				setState(272);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WITH) {
					{
					setState(269);
					match(WITH);
					setState(270);
					match(DBPROPERTIES);
					setState(271);
					tablePropertyList();
					}
				}

				}
				break;
			case 4:
				_localctx = new SetDatabasePropertiesContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(274);
				match(ALTER);
				setState(275);
				match(DATABASE);
				setState(276);
				identifier();
				setState(277);
				match(SET);
				setState(278);
				match(DBPROPERTIES);
				setState(279);
				tablePropertyList();
				}
				break;
			case 5:
				_localctx = new DropDatabaseContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(281);
				match(DROP);
				setState(282);
				match(DATABASE);
				setState(285);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(283);
					match(IF);
					setState(284);
					match(EXISTS);
					}
					break;
				}
				setState(287);
				identifier();
				setState(289);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CASCADE || _la==RESTRICT) {
					{
					setState(288);
					_la = _input.LA(1);
					if ( !(_la==CASCADE || _la==RESTRICT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			case 6:
				_localctx = new CreateTableContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(291);
				createTableHeader();
				setState(296);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(292);
					match(T__0);
					setState(293);
					colTypeList();
					setState(294);
					match(T__1);
					}
				}

				setState(298);
				tableProvider();
				setState(312);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMENT || ((((_la - 191)) & ~0x3f) == 0 && ((1L << (_la - 191)) & ((1L << (OPTIONS - 191)) | (1L << (TBLPROPERTIES - 191)) | (1L << (LOCATION - 191)) | (1L << (CLUSTERED - 191)) | (1L << (PARTITIONED - 191)))) != 0)) {
					{
					setState(310);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case OPTIONS:
						{
						{
						setState(299);
						match(OPTIONS);
						setState(300);
						((CreateTableContext)_localctx).options = tablePropertyList();
						}
						}
						break;
					case PARTITIONED:
						{
						{
						setState(301);
						match(PARTITIONED);
						setState(302);
						match(BY);
						setState(303);
						((CreateTableContext)_localctx).partitionColumnNames = identifierList();
						}
						}
						break;
					case CLUSTERED:
						{
						setState(304);
						bucketSpec();
						}
						break;
					case LOCATION:
						{
						setState(305);
						locationSpec();
						}
						break;
					case COMMENT:
						{
						{
						setState(306);
						match(COMMENT);
						setState(307);
						((CreateTableContext)_localctx).comment = match(STRING);
						}
						}
						break;
					case TBLPROPERTIES:
						{
						{
						setState(308);
						match(TBLPROPERTIES);
						setState(309);
						((CreateTableContext)_localctx).tableProps = tablePropertyList();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(314);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(319);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << SELECT) | (1L << FROM) | (1L << AS))) != 0) || ((((_la - 85)) & ~0x3f) == 0 && ((1L << (_la - 85)) & ((1L << (WITH - 85)) | (1L << (VALUES - 85)) | (1L << (TABLE - 85)) | (1L << (INSERT - 85)) | (1L << (MAP - 85)))) != 0) || _la==REDUCE) {
					{
					setState(316);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==AS) {
						{
						setState(315);
						match(AS);
						}
					}

					setState(318);
					query();
					}
				}

				}
				break;
			case 7:
				_localctx = new CreateHiveTableContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(321);
				createTableHeader();
				setState(326);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
				case 1:
					{
					setState(322);
					match(T__0);
					setState(323);
					((CreateHiveTableContext)_localctx).columns = colTypeList();
					setState(324);
					match(T__1);
					}
					break;
				}
				setState(345);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ROW || _la==COMMENT || ((((_la - 193)) & ~0x3f) == 0 && ((1L << (_la - 193)) & ((1L << (TBLPROPERTIES - 193)) | (1L << (SKEWED - 193)) | (1L << (STORED - 193)) | (1L << (LOCATION - 193)) | (1L << (CLUSTERED - 193)) | (1L << (PARTITIONED - 193)))) != 0)) {
					{
					setState(343);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case COMMENT:
						{
						{
						setState(328);
						match(COMMENT);
						setState(329);
						((CreateHiveTableContext)_localctx).comment = match(STRING);
						}
						}
						break;
					case PARTITIONED:
						{
						{
						setState(330);
						match(PARTITIONED);
						setState(331);
						match(BY);
						setState(332);
						match(T__0);
						setState(333);
						((CreateHiveTableContext)_localctx).partitionColumns = colTypeList();
						setState(334);
						match(T__1);
						}
						}
						break;
					case CLUSTERED:
						{
						setState(336);
						bucketSpec();
						}
						break;
					case SKEWED:
						{
						setState(337);
						skewSpec();
						}
						break;
					case ROW:
						{
						setState(338);
						rowFormat();
						}
						break;
					case STORED:
						{
						setState(339);
						createFileFormat();
						}
						break;
					case LOCATION:
						{
						setState(340);
						locationSpec();
						}
						break;
					case TBLPROPERTIES:
						{
						{
						setState(341);
						match(TBLPROPERTIES);
						setState(342);
						((CreateHiveTableContext)_localctx).tableProps = tablePropertyList();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(347);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(352);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << SELECT) | (1L << FROM) | (1L << AS))) != 0) || ((((_la - 85)) & ~0x3f) == 0 && ((1L << (_la - 85)) & ((1L << (WITH - 85)) | (1L << (VALUES - 85)) | (1L << (TABLE - 85)) | (1L << (INSERT - 85)) | (1L << (MAP - 85)))) != 0) || _la==REDUCE) {
					{
					setState(349);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==AS) {
						{
						setState(348);
						match(AS);
						}
					}

					setState(351);
					query();
					}
				}

				}
				break;
			case 8:
				_localctx = new CreateFlinkTableContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(354);
				match(CREATE);
				setState(355);
				match(TABLE);
				setState(359);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
				case 1:
					{
					setState(356);
					((CreateFlinkTableContext)_localctx).catcatalogName = identifier();
					setState(357);
					match(T__2);
					}
					break;
				}
				setState(361);
				tableIdentifier();
				setState(366);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(362);
					match(T__0);
					setState(363);
					((CreateFlinkTableContext)_localctx).columns = dtColTypeList();
					setState(364);
					match(T__1);
					}
				}

				setState(370);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMENT) {
					{
					setState(368);
					match(COMMENT);
					setState(369);
					((CreateFlinkTableContext)_localctx).comment = match(STRING);
					}
				}

				setState(378);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITIONED) {
					{
					setState(372);
					match(PARTITIONED);
					setState(373);
					match(BY);
					setState(374);
					match(T__0);
					setState(375);
					((CreateFlinkTableContext)_localctx).partitionColumnNames = identifierList();
					setState(376);
					match(T__1);
					}
				}

				setState(380);
				match(WITH);
				setState(381);
				tablePropertyList();
				}
				break;
			case 9:
				_localctx = new CreateTableLikeContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(383);
				match(CREATE);
				setState(384);
				match(TABLE);
				setState(388);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
				case 1:
					{
					setState(385);
					match(IF);
					setState(386);
					match(NOT);
					setState(387);
					match(EXISTS);
					}
					break;
				}
				setState(390);
				((CreateTableLikeContext)_localctx).target = tableIdentifier();
				setState(391);
				match(LIKE);
				setState(392);
				((CreateTableLikeContext)_localctx).source = tableIdentifier();
				setState(394);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LOCATION) {
					{
					setState(393);
					locationSpec();
					}
				}

				}
				break;
			case 10:
				_localctx = new AnalyzeContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(396);
				match(ANALYZE);
				setState(397);
				match(TABLE);
				setState(398);
				tableIdentifier();
				setState(400);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(399);
					partitionSpec();
					}
				}

				setState(402);
				match(COMPUTE);
				setState(403);
				match(STATISTICS);
				setState(411);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
				case 1:
					{
					setState(404);
					identifier();
					}
					break;
				case 2:
					{
					setState(405);
					match(FOR);
					setState(406);
					match(COLUMNS);
					setState(407);
					identifierSeq();
					}
					break;
				case 3:
					{
					setState(408);
					match(FOR);
					setState(409);
					match(ALL);
					setState(410);
					match(COLUMNS);
					}
					break;
				}
				}
				break;
			case 11:
				_localctx = new AddTableColumnsContext(_localctx);
				enterOuterAlt(_localctx, 11);
				{
				setState(413);
				match(ALTER);
				setState(414);
				match(TABLE);
				setState(415);
				tableIdentifier();
				setState(416);
				match(ADD);
				setState(417);
				match(COLUMNS);
				setState(418);
				match(T__0);
				setState(419);
				((AddTableColumnsContext)_localctx).columns = colTypeList();
				setState(420);
				match(T__1);
				}
				break;
			case 12:
				_localctx = new RenameTableContext(_localctx);
				enterOuterAlt(_localctx, 12);
				{
				setState(422);
				match(ALTER);
				setState(423);
				_la = _input.LA(1);
				if ( !(_la==TABLE || _la==VIEW) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(424);
				((RenameTableContext)_localctx).from = tableIdentifier();
				setState(425);
				match(RENAME);
				setState(426);
				match(TO);
				setState(427);
				((RenameTableContext)_localctx).to = tableIdentifier();
				}
				break;
			case 13:
				_localctx = new SetTablePropertiesContext(_localctx);
				enterOuterAlt(_localctx, 13);
				{
				setState(429);
				match(ALTER);
				setState(430);
				_la = _input.LA(1);
				if ( !(_la==TABLE || _la==VIEW) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(431);
				tableIdentifier();
				setState(432);
				match(SET);
				setState(433);
				match(TBLPROPERTIES);
				setState(434);
				tablePropertyList();
				}
				break;
			case 14:
				_localctx = new UnsetTablePropertiesContext(_localctx);
				enterOuterAlt(_localctx, 14);
				{
				setState(436);
				match(ALTER);
				setState(437);
				_la = _input.LA(1);
				if ( !(_la==TABLE || _la==VIEW) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(438);
				tableIdentifier();
				setState(439);
				match(UNSET);
				setState(440);
				match(TBLPROPERTIES);
				setState(443);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IF) {
					{
					setState(441);
					match(IF);
					setState(442);
					match(EXISTS);
					}
				}

				setState(445);
				tablePropertyList();
				}
				break;
			case 15:
				_localctx = new ChangeColumnContext(_localctx);
				enterOuterAlt(_localctx, 15);
				{
				setState(447);
				match(ALTER);
				setState(448);
				match(TABLE);
				setState(449);
				tableIdentifier();
				setState(451);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(450);
					partitionSpec();
					}
				}

				setState(453);
				match(CHANGE);
				setState(455);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
				case 1:
					{
					setState(454);
					match(COLUMN);
					}
					break;
				}
				setState(457);
				identifier();
				setState(458);
				colType();
				setState(460);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==FIRST || _la==AFTER) {
					{
					setState(459);
					colPosition();
					}
				}

				}
				break;
			case 16:
				_localctx = new SetTableSerDeContext(_localctx);
				enterOuterAlt(_localctx, 16);
				{
				setState(462);
				match(ALTER);
				setState(463);
				match(TABLE);
				setState(464);
				tableIdentifier();
				setState(466);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(465);
					partitionSpec();
					}
				}

				setState(468);
				match(SET);
				setState(469);
				match(SERDE);
				setState(470);
				match(STRING);
				setState(474);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WITH) {
					{
					setState(471);
					match(WITH);
					setState(472);
					match(SERDEPROPERTIES);
					setState(473);
					tablePropertyList();
					}
				}

				}
				break;
			case 17:
				_localctx = new SetTableSerDeContext(_localctx);
				enterOuterAlt(_localctx, 17);
				{
				setState(476);
				match(ALTER);
				setState(477);
				match(TABLE);
				setState(478);
				tableIdentifier();
				setState(480);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(479);
					partitionSpec();
					}
				}

				setState(482);
				match(SET);
				setState(483);
				match(SERDEPROPERTIES);
				setState(484);
				tablePropertyList();
				}
				break;
			case 18:
				_localctx = new AddTablePartitionContext(_localctx);
				enterOuterAlt(_localctx, 18);
				{
				setState(486);
				match(ALTER);
				setState(487);
				match(TABLE);
				setState(488);
				tableIdentifier();
				setState(489);
				match(ADD);
				setState(493);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IF) {
					{
					setState(490);
					match(IF);
					setState(491);
					match(NOT);
					setState(492);
					match(EXISTS);
					}
				}

				setState(496); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(495);
					partitionSpecLocation();
					}
					}
					setState(498); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==PARTITION );
				}
				break;
			case 19:
				_localctx = new AddTablePartitionContext(_localctx);
				enterOuterAlt(_localctx, 19);
				{
				setState(500);
				match(ALTER);
				setState(501);
				match(VIEW);
				setState(502);
				tableIdentifier();
				setState(503);
				match(ADD);
				setState(507);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IF) {
					{
					setState(504);
					match(IF);
					setState(505);
					match(NOT);
					setState(506);
					match(EXISTS);
					}
				}

				setState(510); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(509);
					partitionSpec();
					}
					}
					setState(512); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==PARTITION );
				}
				break;
			case 20:
				_localctx = new RenameTablePartitionContext(_localctx);
				enterOuterAlt(_localctx, 20);
				{
				setState(514);
				match(ALTER);
				setState(515);
				match(TABLE);
				setState(516);
				tableIdentifier();
				setState(517);
				((RenameTablePartitionContext)_localctx).from = partitionSpec();
				setState(518);
				match(RENAME);
				setState(519);
				match(TO);
				setState(520);
				((RenameTablePartitionContext)_localctx).to = partitionSpec();
				}
				break;
			case 21:
				_localctx = new DropTablePartitionsContext(_localctx);
				enterOuterAlt(_localctx, 21);
				{
				setState(522);
				match(ALTER);
				setState(523);
				match(TABLE);
				setState(524);
				tableIdentifier();
				setState(525);
				match(DROP);
				setState(528);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IF) {
					{
					setState(526);
					match(IF);
					setState(527);
					match(EXISTS);
					}
				}

				setState(530);
				partitionSpec();
				setState(535);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(531);
					match(T__3);
					setState(532);
					partitionSpec();
					}
					}
					setState(537);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(539);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PURGE) {
					{
					setState(538);
					match(PURGE);
					}
				}

				}
				break;
			case 22:
				_localctx = new DropTablePartitionsContext(_localctx);
				enterOuterAlt(_localctx, 22);
				{
				setState(541);
				match(ALTER);
				setState(542);
				match(VIEW);
				setState(543);
				tableIdentifier();
				setState(544);
				match(DROP);
				setState(547);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IF) {
					{
					setState(545);
					match(IF);
					setState(546);
					match(EXISTS);
					}
				}

				setState(549);
				partitionSpec();
				setState(554);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(550);
					match(T__3);
					setState(551);
					partitionSpec();
					}
					}
					setState(556);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 23:
				_localctx = new SetTableLocationContext(_localctx);
				enterOuterAlt(_localctx, 23);
				{
				setState(557);
				match(ALTER);
				setState(558);
				match(TABLE);
				setState(559);
				tableIdentifier();
				setState(561);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(560);
					partitionSpec();
					}
				}

				setState(563);
				match(SET);
				setState(564);
				locationSpec();
				}
				break;
			case 24:
				_localctx = new RecoverPartitionsContext(_localctx);
				enterOuterAlt(_localctx, 24);
				{
				setState(566);
				match(ALTER);
				setState(567);
				match(TABLE);
				setState(568);
				tableIdentifier();
				setState(569);
				match(RECOVER);
				setState(570);
				match(PARTITIONS);
				}
				break;
			case 25:
				_localctx = new DropTableContext(_localctx);
				enterOuterAlt(_localctx, 25);
				{
				setState(572);
				match(DROP);
				setState(573);
				match(TABLE);
				setState(576);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
				case 1:
					{
					setState(574);
					match(IF);
					setState(575);
					match(EXISTS);
					}
					break;
				}
				setState(578);
				tableIdentifier();
				setState(580);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PURGE) {
					{
					setState(579);
					match(PURGE);
					}
				}

				}
				break;
			case 26:
				_localctx = new DropTableContext(_localctx);
				enterOuterAlt(_localctx, 26);
				{
				setState(582);
				match(DROP);
				setState(583);
				match(VIEW);
				setState(586);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
				case 1:
					{
					setState(584);
					match(IF);
					setState(585);
					match(EXISTS);
					}
					break;
				}
				setState(588);
				tableIdentifier();
				}
				break;
			case 27:
				_localctx = new CreateViewContext(_localctx);
				enterOuterAlt(_localctx, 27);
				{
				setState(589);
				match(CREATE);
				setState(592);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OR) {
					{
					setState(590);
					match(OR);
					setState(591);
					match(REPLACE);
					}
				}

				setState(598);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL || _la==TEMPORARY) {
					{
					setState(595);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==GLOBAL) {
						{
						setState(594);
						match(GLOBAL);
						}
					}

					setState(597);
					match(TEMPORARY);
					}
				}

				setState(600);
				match(VIEW);
				setState(604);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
				case 1:
					{
					setState(601);
					match(IF);
					setState(602);
					match(NOT);
					setState(603);
					match(EXISTS);
					}
					break;
				}
				setState(606);
				tableIdentifier();
				setState(608);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(607);
					identifierCommentList();
					}
				}

				setState(612);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMENT) {
					{
					setState(610);
					match(COMMENT);
					setState(611);
					match(STRING);
					}
				}

				setState(617);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITIONED) {
					{
					setState(614);
					match(PARTITIONED);
					setState(615);
					match(ON);
					setState(616);
					identifierList();
					}
				}

				setState(621);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==TBLPROPERTIES) {
					{
					setState(619);
					match(TBLPROPERTIES);
					setState(620);
					tablePropertyList();
					}
				}

				setState(623);
				match(AS);
				setState(624);
				query();
				}
				break;
			case 28:
				_localctx = new CreateTempViewUsingContext(_localctx);
				enterOuterAlt(_localctx, 28);
				{
				setState(626);
				match(CREATE);
				setState(629);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OR) {
					{
					setState(627);
					match(OR);
					setState(628);
					match(REPLACE);
					}
				}

				setState(632);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==GLOBAL) {
					{
					setState(631);
					match(GLOBAL);
					}
				}

				setState(634);
				match(TEMPORARY);
				setState(635);
				match(VIEW);
				setState(636);
				tableIdentifier();
				setState(641);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(637);
					match(T__0);
					setState(638);
					colTypeList();
					setState(639);
					match(T__1);
					}
				}

				setState(643);
				tableProvider();
				setState(646);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPTIONS) {
					{
					setState(644);
					match(OPTIONS);
					setState(645);
					tablePropertyList();
					}
				}

				}
				break;
			case 29:
				_localctx = new AlterViewQueryContext(_localctx);
				enterOuterAlt(_localctx, 29);
				{
				setState(648);
				match(ALTER);
				setState(649);
				match(VIEW);
				setState(650);
				tableIdentifier();
				setState(652);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==AS) {
					{
					setState(651);
					match(AS);
					}
				}

				setState(654);
				query();
				}
				break;
			case 30:
				_localctx = new CreateFunctionContext(_localctx);
				enterOuterAlt(_localctx, 30);
				{
				setState(656);
				match(CREATE);
				setState(659);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OR) {
					{
					setState(657);
					match(OR);
					setState(658);
					match(REPLACE);
					}
				}

				setState(662);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==TEMPORARY) {
					{
					setState(661);
					match(TEMPORARY);
					}
				}

				setState(664);
				match(FUNCTION);
				setState(668);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
				case 1:
					{
					setState(665);
					match(IF);
					setState(666);
					match(NOT);
					setState(667);
					match(EXISTS);
					}
					break;
				}
				setState(670);
				qualifiedName();
				setState(671);
				match(AS);
				setState(672);
				((CreateFunctionContext)_localctx).className = match(STRING);
				setState(682);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==USING) {
					{
					setState(673);
					match(USING);
					setState(674);
					resource();
					setState(679);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__3) {
						{
						{
						setState(675);
						match(T__3);
						setState(676);
						resource();
						}
						}
						setState(681);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				}
				break;
			case 31:
				_localctx = new DropFunctionContext(_localctx);
				enterOuterAlt(_localctx, 31);
				{
				setState(684);
				match(DROP);
				setState(686);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==TEMPORARY) {
					{
					setState(685);
					match(TEMPORARY);
					}
				}

				setState(688);
				match(FUNCTION);
				setState(691);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
				case 1:
					{
					setState(689);
					match(IF);
					setState(690);
					match(EXISTS);
					}
					break;
				}
				setState(693);
				qualifiedName();
				}
				break;
			case 32:
				_localctx = new ExplainContext(_localctx);
				enterOuterAlt(_localctx, 32);
				{
				setState(694);
				match(EXPLAIN);
				setState(696);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 98)) & ~0x3f) == 0 && ((1L << (_la - 98)) & ((1L << (LOGICAL - 98)) | (1L << (CODEGEN - 98)) | (1L << (COST - 98)))) != 0) || _la==EXTENDED || _la==FORMATTED) {
					{
					setState(695);
					_la = _input.LA(1);
					if ( !(((((_la - 98)) & ~0x3f) == 0 && ((1L << (_la - 98)) & ((1L << (LOGICAL - 98)) | (1L << (CODEGEN - 98)) | (1L << (COST - 98)))) != 0) || _la==EXTENDED || _la==FORMATTED) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				setState(698);
				statement();
				}
				break;
			case 33:
				_localctx = new ShowTablesContext(_localctx);
				enterOuterAlt(_localctx, 33);
				{
				setState(699);
				match(SHOW);
				setState(700);
				match(TABLES);
				setState(703);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==FROM || _la==IN) {
					{
					setState(701);
					_la = _input.LA(1);
					if ( !(_la==FROM || _la==IN) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(702);
					((ShowTablesContext)_localctx).db = identifier();
					}
				}

				setState(709);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LIKE || _la==STRING) {
					{
					setState(706);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==LIKE) {
						{
						setState(705);
						match(LIKE);
						}
					}

					setState(708);
					((ShowTablesContext)_localctx).pattern = match(STRING);
					}
				}

				}
				break;
			case 34:
				_localctx = new ShowTableContext(_localctx);
				enterOuterAlt(_localctx, 34);
				{
				setState(711);
				match(SHOW);
				setState(712);
				match(TABLE);
				setState(713);
				match(EXTENDED);
				setState(716);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==FROM || _la==IN) {
					{
					setState(714);
					_la = _input.LA(1);
					if ( !(_la==FROM || _la==IN) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(715);
					((ShowTableContext)_localctx).db = identifier();
					}
				}

				setState(718);
				match(LIKE);
				setState(719);
				((ShowTableContext)_localctx).pattern = match(STRING);
				setState(721);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(720);
					partitionSpec();
					}
				}

				}
				break;
			case 35:
				_localctx = new ShowDatabasesContext(_localctx);
				enterOuterAlt(_localctx, 35);
				{
				setState(723);
				match(SHOW);
				setState(724);
				match(DATABASES);
				setState(729);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LIKE || _la==STRING) {
					{
					setState(726);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==LIKE) {
						{
						setState(725);
						match(LIKE);
						}
					}

					setState(728);
					((ShowDatabasesContext)_localctx).pattern = match(STRING);
					}
				}

				}
				break;
			case 36:
				_localctx = new ShowTblPropertiesContext(_localctx);
				enterOuterAlt(_localctx, 36);
				{
				setState(731);
				match(SHOW);
				setState(732);
				match(TBLPROPERTIES);
				setState(733);
				((ShowTblPropertiesContext)_localctx).table = tableIdentifier();
				setState(738);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(734);
					match(T__0);
					setState(735);
					((ShowTblPropertiesContext)_localctx).key = tablePropertyKey();
					setState(736);
					match(T__1);
					}
				}

				}
				break;
			case 37:
				_localctx = new ShowColumnsContext(_localctx);
				enterOuterAlt(_localctx, 37);
				{
				setState(740);
				match(SHOW);
				setState(741);
				match(COLUMNS);
				setState(742);
				_la = _input.LA(1);
				if ( !(_la==FROM || _la==IN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(743);
				tableIdentifier();
				setState(746);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==FROM || _la==IN) {
					{
					setState(744);
					_la = _input.LA(1);
					if ( !(_la==FROM || _la==IN) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(745);
					((ShowColumnsContext)_localctx).db = identifier();
					}
				}

				}
				break;
			case 38:
				_localctx = new ShowPartitionsContext(_localctx);
				enterOuterAlt(_localctx, 38);
				{
				setState(748);
				match(SHOW);
				setState(749);
				match(PARTITIONS);
				setState(750);
				tableIdentifier();
				setState(752);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(751);
					partitionSpec();
					}
				}

				}
				break;
			case 39:
				_localctx = new ShowFunctionsContext(_localctx);
				enterOuterAlt(_localctx, 39);
				{
				setState(754);
				match(SHOW);
				setState(756);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,76,_ctx) ) {
				case 1:
					{
					setState(755);
					identifier();
					}
					break;
				}
				setState(758);
				match(FUNCTIONS);
				setState(766);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 19)) & ~0x3f) == 0 && ((1L << (_la - 19)) & ((1L << (SELECT - 19)) | (1L << (FROM - 19)) | (1L << (ADD - 19)) | (1L << (AS - 19)) | (1L << (ALL - 19)) | (1L << (ANY - 19)) | (1L << (DISTINCT - 19)) | (1L << (WHERE - 19)) | (1L << (GROUP - 19)) | (1L << (BY - 19)) | (1L << (GROUPING - 19)) | (1L << (SETS - 19)) | (1L << (CUBE - 19)) | (1L << (ROLLUP - 19)) | (1L << (ORDER - 19)) | (1L << (HAVING - 19)) | (1L << (LIMIT - 19)) | (1L << (AT - 19)) | (1L << (OR - 19)) | (1L << (AND - 19)) | (1L << (IN - 19)) | (1L << (NOT - 19)) | (1L << (NO - 19)) | (1L << (EXISTS - 19)) | (1L << (BETWEEN - 19)) | (1L << (LIKE - 19)) | (1L << (RLIKE - 19)) | (1L << (IS - 19)) | (1L << (NULL - 19)) | (1L << (TRUE - 19)) | (1L << (FALSE - 19)) | (1L << (NULLS - 19)) | (1L << (ASC - 19)) | (1L << (DESC - 19)) | (1L << (FOR - 19)) | (1L << (INTERVAL - 19)) | (1L << (CASE - 19)) | (1L << (WHEN - 19)) | (1L << (THEN - 19)) | (1L << (ELSE - 19)) | (1L << (END - 19)) | (1L << (JOIN - 19)) | (1L << (CROSS - 19)) | (1L << (OUTER - 19)) | (1L << (INNER - 19)) | (1L << (LEFT - 19)) | (1L << (SEMI - 19)) | (1L << (RIGHT - 19)) | (1L << (FULL - 19)) | (1L << (NATURAL - 19)) | (1L << (ON - 19)) | (1L << (PIVOT - 19)) | (1L << (LATERAL - 19)) | (1L << (WINDOW - 19)) | (1L << (OVER - 19)) | (1L << (PARTITION - 19)) | (1L << (RANGE - 19)) | (1L << (ROWS - 19)) | (1L << (UNBOUNDED - 19)) | (1L << (PRECEDING - 19)) | (1L << (FOLLOWING - 19)) | (1L << (CURRENT - 19)) | (1L << (FIRST - 19)) | (1L << (AFTER - 19)))) != 0) || ((((_la - 83)) & ~0x3f) == 0 && ((1L << (_la - 83)) & ((1L << (LAST - 83)) | (1L << (ROW - 83)) | (1L << (WITH - 83)) | (1L << (CREATE - 83)) | (1L << (TABLE - 83)) | (1L << (DIRECTORY - 83)) | (1L << (VIEW - 83)) | (1L << (REPLACE - 83)) | (1L << (INSERT - 83)) | (1L << (DELETE - 83)) | (1L << (INTO - 83)) | (1L << (DESCRIBE - 83)) | (1L << (EXPLAIN - 83)) | (1L << (FORMAT - 83)) | (1L << (LOGICAL - 83)) | (1L << (CODEGEN - 83)) | (1L << (COST - 83)) | (1L << (CAST - 83)) | (1L << (SHOW - 83)) | (1L << (TABLES - 83)) | (1L << (COLUMNS - 83)) | (1L << (COLUMN - 83)) | (1L << (USE - 83)) | (1L << (PARTITIONS - 83)) | (1L << (FUNCTIONS - 83)) | (1L << (DROP - 83)) | (1L << (UNION - 83)) | (1L << (EXCEPT - 83)) | (1L << (SETMINUS - 83)) | (1L << (INTERSECT - 83)) | (1L << (TO - 83)) | (1L << (TABLESAMPLE - 83)) | (1L << (STRATIFY - 83)) | (1L << (ALTER - 83)) | (1L << (RENAME - 83)) | (1L << (ARRAY - 83)) | (1L << (MAP - 83)) | (1L << (STRUCT - 83)) | (1L << (COMMENT - 83)) | (1L << (SET - 83)) | (1L << (RESET - 83)) | (1L << (DATA - 83)) | (1L << (START - 83)) | (1L << (TRANSACTION - 83)) | (1L << (COMMIT - 83)) | (1L << (ROLLBACK - 83)) | (1L << (MACRO - 83)) | (1L << (IGNORE - 83)) | (1L << (BOTH - 83)) | (1L << (LEADING - 83)) | (1L << (TRAILING - 83)) | (1L << (IF - 83)) | (1L << (POSITION - 83)) | (1L << (EXTRACT - 83)))) != 0) || ((((_la - 151)) & ~0x3f) == 0 && ((1L << (_la - 151)) & ((1L << (DIV - 151)) | (1L << (PERCENTLIT - 151)) | (1L << (BUCKET - 151)) | (1L << (OUT - 151)) | (1L << (OF - 151)) | (1L << (SORT - 151)) | (1L << (CLUSTER - 151)) | (1L << (DISTRIBUTE - 151)) | (1L << (OVERWRITE - 151)) | (1L << (TRANSFORM - 151)) | (1L << (REDUCE - 151)) | (1L << (SERDE - 151)) | (1L << (SERDEPROPERTIES - 151)) | (1L << (RECORDREADER - 151)) | (1L << (RECORDWRITER - 151)) | (1L << (DELIMITED - 151)) | (1L << (FIELDS - 151)) | (1L << (TERMINATED - 151)) | (1L << (COLLECTION - 151)) | (1L << (ITEMS - 151)) | (1L << (KEYS - 151)) | (1L << (ESCAPED - 151)) | (1L << (LINES - 151)) | (1L << (SEPARATED - 151)) | (1L << (FUNCTION - 151)) | (1L << (EXTENDED - 151)) | (1L << (REFRESH - 151)) | (1L << (CLEAR - 151)) | (1L << (CACHE - 151)) | (1L << (UNCACHE - 151)) | (1L << (LAZY - 151)) | (1L << (FORMATTED - 151)) | (1L << (GLOBAL - 151)) | (1L << (TEMPORARY - 151)) | (1L << (OPTIONS - 151)) | (1L << (UNSET - 151)) | (1L << (TBLPROPERTIES - 151)) | (1L << (DBPROPERTIES - 151)) | (1L << (BUCKETS - 151)) | (1L << (SKEWED - 151)) | (1L << (STORED - 151)) | (1L << (DIRECTORIES - 151)) | (1L << (LOCATION - 151)) | (1L << (EXCHANGE - 151)) | (1L << (ARCHIVE - 151)) | (1L << (UNARCHIVE - 151)) | (1L << (FILEFORMAT - 151)) | (1L << (TOUCH - 151)) | (1L << (COMPACT - 151)) | (1L << (CONCATENATE - 151)) | (1L << (CHANGE - 151)) | (1L << (CASCADE - 151)) | (1L << (RESTRICT - 151)) | (1L << (CLUSTERED - 151)) | (1L << (SORTED - 151)) | (1L << (PURGE - 151)) | (1L << (INPUTFORMAT - 151)) | (1L << (OUTPUTFORMAT - 151)))) != 0) || ((((_la - 215)) & ~0x3f) == 0 && ((1L << (_la - 215)) & ((1L << (DATABASE - 215)) | (1L << (DATABASES - 215)) | (1L << (DFS - 215)) | (1L << (TRUNCATE - 215)) | (1L << (ANALYZE - 215)) | (1L << (COMPUTE - 215)) | (1L << (LIST - 215)) | (1L << (STATISTICS - 215)) | (1L << (PARTITIONED - 215)) | (1L << (EXTERNAL - 215)) | (1L << (DEFINED - 215)) | (1L << (REVOKE - 215)) | (1L << (GRANT - 215)) | (1L << (LOCK - 215)) | (1L << (UNLOCK - 215)) | (1L << (MSCK - 215)) | (1L << (REPAIR - 215)) | (1L << (RECOVER - 215)) | (1L << (EXPORT - 215)) | (1L << (IMPORT - 215)) | (1L << (LOAD - 215)) | (1L << (ROLE - 215)) | (1L << (ROLES - 215)) | (1L << (COMPACTIONS - 215)) | (1L << (PRINCIPALS - 215)) | (1L << (TRANSACTIONS - 215)) | (1L << (INDEX - 215)) | (1L << (INDEXES - 215)) | (1L << (LOCKS - 215)) | (1L << (OPTION - 215)) | (1L << (ANTI - 215)) | (1L << (LOCAL - 215)) | (1L << (INPATH - 215)) | (1L << (STRING - 215)) | (1L << (IDENTIFIER - 215)) | (1L << (BACKQUOTED_IDENTIFIER - 215)))) != 0)) {
					{
					setState(760);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,77,_ctx) ) {
					case 1:
						{
						setState(759);
						match(LIKE);
						}
						break;
					}
					setState(764);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case SELECT:
					case FROM:
					case ADD:
					case AS:
					case ALL:
					case ANY:
					case DISTINCT:
					case WHERE:
					case GROUP:
					case BY:
					case GROUPING:
					case SETS:
					case CUBE:
					case ROLLUP:
					case ORDER:
					case HAVING:
					case LIMIT:
					case AT:
					case OR:
					case AND:
					case IN:
					case NOT:
					case NO:
					case EXISTS:
					case BETWEEN:
					case LIKE:
					case RLIKE:
					case IS:
					case NULL:
					case TRUE:
					case FALSE:
					case NULLS:
					case ASC:
					case DESC:
					case FOR:
					case INTERVAL:
					case CASE:
					case WHEN:
					case THEN:
					case ELSE:
					case END:
					case JOIN:
					case CROSS:
					case OUTER:
					case INNER:
					case LEFT:
					case SEMI:
					case RIGHT:
					case FULL:
					case NATURAL:
					case ON:
					case PIVOT:
					case LATERAL:
					case WINDOW:
					case OVER:
					case PARTITION:
					case RANGE:
					case ROWS:
					case UNBOUNDED:
					case PRECEDING:
					case FOLLOWING:
					case CURRENT:
					case FIRST:
					case AFTER:
					case LAST:
					case ROW:
					case WITH:
					case CREATE:
					case TABLE:
					case DIRECTORY:
					case VIEW:
					case REPLACE:
					case INSERT:
					case DELETE:
					case INTO:
					case DESCRIBE:
					case EXPLAIN:
					case FORMAT:
					case LOGICAL:
					case CODEGEN:
					case COST:
					case CAST:
					case SHOW:
					case TABLES:
					case COLUMNS:
					case COLUMN:
					case USE:
					case PARTITIONS:
					case FUNCTIONS:
					case DROP:
					case UNION:
					case EXCEPT:
					case SETMINUS:
					case INTERSECT:
					case TO:
					case TABLESAMPLE:
					case STRATIFY:
					case ALTER:
					case RENAME:
					case ARRAY:
					case MAP:
					case STRUCT:
					case COMMENT:
					case SET:
					case RESET:
					case DATA:
					case START:
					case TRANSACTION:
					case COMMIT:
					case ROLLBACK:
					case MACRO:
					case IGNORE:
					case BOTH:
					case LEADING:
					case TRAILING:
					case IF:
					case POSITION:
					case EXTRACT:
					case DIV:
					case PERCENTLIT:
					case BUCKET:
					case OUT:
					case OF:
					case SORT:
					case CLUSTER:
					case DISTRIBUTE:
					case OVERWRITE:
					case TRANSFORM:
					case REDUCE:
					case SERDE:
					case SERDEPROPERTIES:
					case RECORDREADER:
					case RECORDWRITER:
					case DELIMITED:
					case FIELDS:
					case TERMINATED:
					case COLLECTION:
					case ITEMS:
					case KEYS:
					case ESCAPED:
					case LINES:
					case SEPARATED:
					case FUNCTION:
					case EXTENDED:
					case REFRESH:
					case CLEAR:
					case CACHE:
					case UNCACHE:
					case LAZY:
					case FORMATTED:
					case GLOBAL:
					case TEMPORARY:
					case OPTIONS:
					case UNSET:
					case TBLPROPERTIES:
					case DBPROPERTIES:
					case BUCKETS:
					case SKEWED:
					case STORED:
					case DIRECTORIES:
					case LOCATION:
					case EXCHANGE:
					case ARCHIVE:
					case UNARCHIVE:
					case FILEFORMAT:
					case TOUCH:
					case COMPACT:
					case CONCATENATE:
					case CHANGE:
					case CASCADE:
					case RESTRICT:
					case CLUSTERED:
					case SORTED:
					case PURGE:
					case INPUTFORMAT:
					case OUTPUTFORMAT:
					case DATABASE:
					case DATABASES:
					case DFS:
					case TRUNCATE:
					case ANALYZE:
					case COMPUTE:
					case LIST:
					case STATISTICS:
					case PARTITIONED:
					case EXTERNAL:
					case DEFINED:
					case REVOKE:
					case GRANT:
					case LOCK:
					case UNLOCK:
					case MSCK:
					case REPAIR:
					case RECOVER:
					case EXPORT:
					case IMPORT:
					case LOAD:
					case ROLE:
					case ROLES:
					case COMPACTIONS:
					case PRINCIPALS:
					case TRANSACTIONS:
					case INDEX:
					case INDEXES:
					case LOCKS:
					case OPTION:
					case ANTI:
					case LOCAL:
					case INPATH:
					case IDENTIFIER:
					case BACKQUOTED_IDENTIFIER:
						{
						setState(762);
						qualifiedName();
						}
						break;
					case STRING:
						{
						setState(763);
						((ShowFunctionsContext)_localctx).pattern = match(STRING);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				break;
			case 40:
				_localctx = new ShowCreateTableContext(_localctx);
				enterOuterAlt(_localctx, 40);
				{
				setState(768);
				match(SHOW);
				setState(769);
				match(CREATE);
				setState(770);
				match(TABLE);
				setState(771);
				tableIdentifier();
				}
				break;
			case 41:
				_localctx = new DescribeFunctionContext(_localctx);
				enterOuterAlt(_localctx, 41);
				{
				setState(772);
				_la = _input.LA(1);
				if ( !(_la==DESC || _la==DESCRIBE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(773);
				match(FUNCTION);
				setState(775);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,80,_ctx) ) {
				case 1:
					{
					setState(774);
					match(EXTENDED);
					}
					break;
				}
				setState(777);
				describeFuncName();
				}
				break;
			case 42:
				_localctx = new DescribeDatabaseContext(_localctx);
				enterOuterAlt(_localctx, 42);
				{
				setState(778);
				_la = _input.LA(1);
				if ( !(_la==DESC || _la==DESCRIBE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(779);
				match(DATABASE);
				setState(781);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,81,_ctx) ) {
				case 1:
					{
					setState(780);
					match(EXTENDED);
					}
					break;
				}
				setState(783);
				identifier();
				}
				break;
			case 43:
				_localctx = new DescribeTableContext(_localctx);
				enterOuterAlt(_localctx, 43);
				{
				setState(784);
				_la = _input.LA(1);
				if ( !(_la==DESC || _la==DESCRIBE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(786);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,82,_ctx) ) {
				case 1:
					{
					setState(785);
					match(TABLE);
					}
					break;
				}
				setState(789);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
				case 1:
					{
					setState(788);
					((DescribeTableContext)_localctx).option = _input.LT(1);
					_la = _input.LA(1);
					if ( !(_la==EXTENDED || _la==FORMATTED) ) {
						((DescribeTableContext)_localctx).option = (Token)_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				}
				setState(791);
				tableIdentifier();
				setState(793);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
				case 1:
					{
					setState(792);
					partitionSpec();
					}
					break;
				}
				setState(796);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 19)) & ~0x3f) == 0 && ((1L << (_la - 19)) & ((1L << (SELECT - 19)) | (1L << (FROM - 19)) | (1L << (ADD - 19)) | (1L << (AS - 19)) | (1L << (ALL - 19)) | (1L << (ANY - 19)) | (1L << (DISTINCT - 19)) | (1L << (WHERE - 19)) | (1L << (GROUP - 19)) | (1L << (BY - 19)) | (1L << (GROUPING - 19)) | (1L << (SETS - 19)) | (1L << (CUBE - 19)) | (1L << (ROLLUP - 19)) | (1L << (ORDER - 19)) | (1L << (HAVING - 19)) | (1L << (LIMIT - 19)) | (1L << (AT - 19)) | (1L << (OR - 19)) | (1L << (AND - 19)) | (1L << (IN - 19)) | (1L << (NOT - 19)) | (1L << (NO - 19)) | (1L << (EXISTS - 19)) | (1L << (BETWEEN - 19)) | (1L << (LIKE - 19)) | (1L << (RLIKE - 19)) | (1L << (IS - 19)) | (1L << (NULL - 19)) | (1L << (TRUE - 19)) | (1L << (FALSE - 19)) | (1L << (NULLS - 19)) | (1L << (ASC - 19)) | (1L << (DESC - 19)) | (1L << (FOR - 19)) | (1L << (INTERVAL - 19)) | (1L << (CASE - 19)) | (1L << (WHEN - 19)) | (1L << (THEN - 19)) | (1L << (ELSE - 19)) | (1L << (END - 19)) | (1L << (JOIN - 19)) | (1L << (CROSS - 19)) | (1L << (OUTER - 19)) | (1L << (INNER - 19)) | (1L << (LEFT - 19)) | (1L << (SEMI - 19)) | (1L << (RIGHT - 19)) | (1L << (FULL - 19)) | (1L << (NATURAL - 19)) | (1L << (ON - 19)) | (1L << (PIVOT - 19)) | (1L << (LATERAL - 19)) | (1L << (WINDOW - 19)) | (1L << (OVER - 19)) | (1L << (PARTITION - 19)) | (1L << (RANGE - 19)) | (1L << (ROWS - 19)) | (1L << (UNBOUNDED - 19)) | (1L << (PRECEDING - 19)) | (1L << (FOLLOWING - 19)) | (1L << (CURRENT - 19)) | (1L << (FIRST - 19)) | (1L << (AFTER - 19)))) != 0) || ((((_la - 83)) & ~0x3f) == 0 && ((1L << (_la - 83)) & ((1L << (LAST - 83)) | (1L << (ROW - 83)) | (1L << (WITH - 83)) | (1L << (CREATE - 83)) | (1L << (TABLE - 83)) | (1L << (DIRECTORY - 83)) | (1L << (VIEW - 83)) | (1L << (REPLACE - 83)) | (1L << (INSERT - 83)) | (1L << (DELETE - 83)) | (1L << (INTO - 83)) | (1L << (DESCRIBE - 83)) | (1L << (EXPLAIN - 83)) | (1L << (FORMAT - 83)) | (1L << (LOGICAL - 83)) | (1L << (CODEGEN - 83)) | (1L << (COST - 83)) | (1L << (CAST - 83)) | (1L << (SHOW - 83)) | (1L << (TABLES - 83)) | (1L << (COLUMNS - 83)) | (1L << (COLUMN - 83)) | (1L << (USE - 83)) | (1L << (PARTITIONS - 83)) | (1L << (FUNCTIONS - 83)) | (1L << (DROP - 83)) | (1L << (UNION - 83)) | (1L << (EXCEPT - 83)) | (1L << (SETMINUS - 83)) | (1L << (INTERSECT - 83)) | (1L << (TO - 83)) | (1L << (TABLESAMPLE - 83)) | (1L << (STRATIFY - 83)) | (1L << (ALTER - 83)) | (1L << (RENAME - 83)) | (1L << (ARRAY - 83)) | (1L << (MAP - 83)) | (1L << (STRUCT - 83)) | (1L << (COMMENT - 83)) | (1L << (SET - 83)) | (1L << (RESET - 83)) | (1L << (DATA - 83)) | (1L << (START - 83)) | (1L << (TRANSACTION - 83)) | (1L << (COMMIT - 83)) | (1L << (ROLLBACK - 83)) | (1L << (MACRO - 83)) | (1L << (IGNORE - 83)) | (1L << (BOTH - 83)) | (1L << (LEADING - 83)) | (1L << (TRAILING - 83)) | (1L << (IF - 83)) | (1L << (POSITION - 83)) | (1L << (EXTRACT - 83)))) != 0) || ((((_la - 151)) & ~0x3f) == 0 && ((1L << (_la - 151)) & ((1L << (DIV - 151)) | (1L << (PERCENTLIT - 151)) | (1L << (BUCKET - 151)) | (1L << (OUT - 151)) | (1L << (OF - 151)) | (1L << (SORT - 151)) | (1L << (CLUSTER - 151)) | (1L << (DISTRIBUTE - 151)) | (1L << (OVERWRITE - 151)) | (1L << (TRANSFORM - 151)) | (1L << (REDUCE - 151)) | (1L << (SERDE - 151)) | (1L << (SERDEPROPERTIES - 151)) | (1L << (RECORDREADER - 151)) | (1L << (RECORDWRITER - 151)) | (1L << (DELIMITED - 151)) | (1L << (FIELDS - 151)) | (1L << (TERMINATED - 151)) | (1L << (COLLECTION - 151)) | (1L << (ITEMS - 151)) | (1L << (KEYS - 151)) | (1L << (ESCAPED - 151)) | (1L << (LINES - 151)) | (1L << (SEPARATED - 151)) | (1L << (FUNCTION - 151)) | (1L << (EXTENDED - 151)) | (1L << (REFRESH - 151)) | (1L << (CLEAR - 151)) | (1L << (CACHE - 151)) | (1L << (UNCACHE - 151)) | (1L << (LAZY - 151)) | (1L << (FORMATTED - 151)) | (1L << (GLOBAL - 151)) | (1L << (TEMPORARY - 151)) | (1L << (OPTIONS - 151)) | (1L << (UNSET - 151)) | (1L << (TBLPROPERTIES - 151)) | (1L << (DBPROPERTIES - 151)) | (1L << (BUCKETS - 151)) | (1L << (SKEWED - 151)) | (1L << (STORED - 151)) | (1L << (DIRECTORIES - 151)) | (1L << (LOCATION - 151)) | (1L << (EXCHANGE - 151)) | (1L << (ARCHIVE - 151)) | (1L << (UNARCHIVE - 151)) | (1L << (FILEFORMAT - 151)) | (1L << (TOUCH - 151)) | (1L << (COMPACT - 151)) | (1L << (CONCATENATE - 151)) | (1L << (CHANGE - 151)) | (1L << (CASCADE - 151)) | (1L << (RESTRICT - 151)) | (1L << (CLUSTERED - 151)) | (1L << (SORTED - 151)) | (1L << (PURGE - 151)) | (1L << (INPUTFORMAT - 151)) | (1L << (OUTPUTFORMAT - 151)))) != 0) || ((((_la - 215)) & ~0x3f) == 0 && ((1L << (_la - 215)) & ((1L << (DATABASE - 215)) | (1L << (DATABASES - 215)) | (1L << (DFS - 215)) | (1L << (TRUNCATE - 215)) | (1L << (ANALYZE - 215)) | (1L << (COMPUTE - 215)) | (1L << (LIST - 215)) | (1L << (STATISTICS - 215)) | (1L << (PARTITIONED - 215)) | (1L << (EXTERNAL - 215)) | (1L << (DEFINED - 215)) | (1L << (REVOKE - 215)) | (1L << (GRANT - 215)) | (1L << (LOCK - 215)) | (1L << (UNLOCK - 215)) | (1L << (MSCK - 215)) | (1L << (REPAIR - 215)) | (1L << (RECOVER - 215)) | (1L << (EXPORT - 215)) | (1L << (IMPORT - 215)) | (1L << (LOAD - 215)) | (1L << (ROLE - 215)) | (1L << (ROLES - 215)) | (1L << (COMPACTIONS - 215)) | (1L << (PRINCIPALS - 215)) | (1L << (TRANSACTIONS - 215)) | (1L << (INDEX - 215)) | (1L << (INDEXES - 215)) | (1L << (LOCKS - 215)) | (1L << (OPTION - 215)) | (1L << (ANTI - 215)) | (1L << (LOCAL - 215)) | (1L << (INPATH - 215)) | (1L << (IDENTIFIER - 215)) | (1L << (BACKQUOTED_IDENTIFIER - 215)))) != 0)) {
					{
					setState(795);
					describeColName();
					}
				}

				}
				break;
			case 44:
				_localctx = new RefreshTableContext(_localctx);
				enterOuterAlt(_localctx, 44);
				{
				setState(798);
				match(REFRESH);
				setState(799);
				match(TABLE);
				setState(800);
				tableIdentifier();
				}
				break;
			case 45:
				_localctx = new RefreshResourceContext(_localctx);
				enterOuterAlt(_localctx, 45);
				{
				setState(801);
				match(REFRESH);
				setState(809);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,87,_ctx) ) {
				case 1:
					{
					setState(802);
					match(STRING);
					}
					break;
				case 2:
					{
					setState(806);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,86,_ctx);
					while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
						if ( _alt==1+1 ) {
							{
							{
							setState(803);
							matchWildcard();
							}
							} 
						}
						setState(808);
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,86,_ctx);
					}
					}
					break;
				}
				}
				break;
			case 46:
				_localctx = new CacheTableContext(_localctx);
				enterOuterAlt(_localctx, 46);
				{
				setState(811);
				match(CACHE);
				setState(813);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LAZY) {
					{
					setState(812);
					match(LAZY);
					}
				}

				setState(815);
				match(TABLE);
				setState(816);
				tableIdentifier();
				setState(819);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPTIONS) {
					{
					setState(817);
					match(OPTIONS);
					setState(818);
					((CacheTableContext)_localctx).options = tablePropertyList();
					}
				}

				setState(825);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << SELECT) | (1L << FROM) | (1L << AS))) != 0) || ((((_la - 85)) & ~0x3f) == 0 && ((1L << (_la - 85)) & ((1L << (WITH - 85)) | (1L << (VALUES - 85)) | (1L << (TABLE - 85)) | (1L << (INSERT - 85)) | (1L << (MAP - 85)))) != 0) || _la==REDUCE) {
					{
					setState(822);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==AS) {
						{
						setState(821);
						match(AS);
						}
					}

					setState(824);
					query();
					}
				}

				}
				break;
			case 47:
				_localctx = new UncacheTableContext(_localctx);
				enterOuterAlt(_localctx, 47);
				{
				setState(827);
				match(UNCACHE);
				setState(828);
				match(TABLE);
				setState(831);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
				case 1:
					{
					setState(829);
					match(IF);
					setState(830);
					match(EXISTS);
					}
					break;
				}
				setState(833);
				tableIdentifier();
				}
				break;
			case 48:
				_localctx = new ClearCacheContext(_localctx);
				enterOuterAlt(_localctx, 48);
				{
				setState(834);
				match(CLEAR);
				setState(835);
				match(CACHE);
				}
				break;
			case 49:
				_localctx = new LoadDataContext(_localctx);
				enterOuterAlt(_localctx, 49);
				{
				setState(836);
				match(LOAD);
				setState(837);
				match(DATA);
				setState(839);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LOCAL) {
					{
					setState(838);
					match(LOCAL);
					}
				}

				setState(841);
				match(INPATH);
				setState(842);
				((LoadDataContext)_localctx).path = match(STRING);
				setState(844);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OVERWRITE) {
					{
					setState(843);
					match(OVERWRITE);
					}
				}

				setState(846);
				match(INTO);
				setState(847);
				match(TABLE);
				setState(848);
				tableIdentifier();
				setState(850);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(849);
					partitionSpec();
					}
				}

				}
				break;
			case 50:
				_localctx = new TruncateTableContext(_localctx);
				enterOuterAlt(_localctx, 50);
				{
				setState(852);
				match(TRUNCATE);
				setState(853);
				match(TABLE);
				setState(854);
				tableIdentifier();
				setState(856);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(855);
					partitionSpec();
					}
				}

				}
				break;
			case 51:
				_localctx = new RepairTableContext(_localctx);
				enterOuterAlt(_localctx, 51);
				{
				setState(858);
				match(MSCK);
				setState(859);
				match(REPAIR);
				setState(860);
				match(TABLE);
				setState(861);
				tableIdentifier();
				}
				break;
			case 52:
				_localctx = new ManageResourceContext(_localctx);
				enterOuterAlt(_localctx, 52);
				{
				setState(862);
				((ManageResourceContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==ADD || _la==LIST) ) {
					((ManageResourceContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(863);
				identifier();
				setState(867);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,97,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(864);
						matchWildcard();
						}
						} 
					}
					setState(869);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,97,_ctx);
				}
				}
				break;
			case 53:
				_localctx = new FailNativeCommandContext(_localctx);
				enterOuterAlt(_localctx, 53);
				{
				setState(870);
				match(SET);
				setState(871);
				match(ROLE);
				setState(875);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,98,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(872);
						matchWildcard();
						}
						} 
					}
					setState(877);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,98,_ctx);
				}
				}
				break;
			case 54:
				_localctx = new SetConfigurationContext(_localctx);
				enterOuterAlt(_localctx, 54);
				{
				setState(878);
				match(SET);
				setState(882);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,99,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(879);
						matchWildcard();
						}
						} 
					}
					setState(884);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,99,_ctx);
				}
				}
				break;
			case 55:
				_localctx = new ResetConfigurationContext(_localctx);
				enterOuterAlt(_localctx, 55);
				{
				setState(885);
				match(RESET);
				}
				break;
			case 56:
				_localctx = new FailNativeCommandContext(_localctx);
				enterOuterAlt(_localctx, 56);
				{
				setState(886);
				unsupportedHiveNativeCommands();
				setState(890);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,100,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(887);
						matchWildcard();
						}
						} 
					}
					setState(892);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,100,_ctx);
				}
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

	public static class UnsupportedHiveNativeCommandsContext extends ParserRuleContext {
		public Token kw1;
		public Token kw2;
		public Token kw3;
		public Token kw4;
		public Token kw5;
		public Token kw6;
		public TerminalNode CREATE() { return getToken(sqlParser.CREATE, 0); }
		public TerminalNode ROLE() { return getToken(sqlParser.ROLE, 0); }
		public TerminalNode DROP() { return getToken(sqlParser.DROP, 0); }
		public TerminalNode GRANT() { return getToken(sqlParser.GRANT, 0); }
		public TerminalNode REVOKE() { return getToken(sqlParser.REVOKE, 0); }
		public TerminalNode SHOW() { return getToken(sqlParser.SHOW, 0); }
		public TerminalNode PRINCIPALS() { return getToken(sqlParser.PRINCIPALS, 0); }
		public TerminalNode ROLES() { return getToken(sqlParser.ROLES, 0); }
		public TerminalNode CURRENT() { return getToken(sqlParser.CURRENT, 0); }
		public TerminalNode EXPORT() { return getToken(sqlParser.EXPORT, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TerminalNode IMPORT() { return getToken(sqlParser.IMPORT, 0); }
		public TerminalNode COMPACTIONS() { return getToken(sqlParser.COMPACTIONS, 0); }
		public TerminalNode TRANSACTIONS() { return getToken(sqlParser.TRANSACTIONS, 0); }
		public TerminalNode INDEXES() { return getToken(sqlParser.INDEXES, 0); }
		public TerminalNode LOCKS() { return getToken(sqlParser.LOCKS, 0); }
		public TerminalNode INDEX() { return getToken(sqlParser.INDEX, 0); }
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode LOCK() { return getToken(sqlParser.LOCK, 0); }
		public TerminalNode DATABASE() { return getToken(sqlParser.DATABASE, 0); }
		public TerminalNode UNLOCK() { return getToken(sqlParser.UNLOCK, 0); }
		public TerminalNode TEMPORARY() { return getToken(sqlParser.TEMPORARY, 0); }
		public TerminalNode MACRO() { return getToken(sqlParser.MACRO, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public TerminalNode CLUSTERED() { return getToken(sqlParser.CLUSTERED, 0); }
		public TerminalNode BY() { return getToken(sqlParser.BY, 0); }
		public TerminalNode SORTED() { return getToken(sqlParser.SORTED, 0); }
		public TerminalNode SKEWED() { return getToken(sqlParser.SKEWED, 0); }
		public TerminalNode STORED() { return getToken(sqlParser.STORED, 0); }
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public TerminalNode DIRECTORIES() { return getToken(sqlParser.DIRECTORIES, 0); }
		public TerminalNode SET() { return getToken(sqlParser.SET, 0); }
		public TerminalNode LOCATION() { return getToken(sqlParser.LOCATION, 0); }
		public TerminalNode EXCHANGE() { return getToken(sqlParser.EXCHANGE, 0); }
		public TerminalNode PARTITION() { return getToken(sqlParser.PARTITION, 0); }
		public TerminalNode ARCHIVE() { return getToken(sqlParser.ARCHIVE, 0); }
		public TerminalNode UNARCHIVE() { return getToken(sqlParser.UNARCHIVE, 0); }
		public TerminalNode TOUCH() { return getToken(sqlParser.TOUCH, 0); }
		public TerminalNode COMPACT() { return getToken(sqlParser.COMPACT, 0); }
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public TerminalNode CONCATENATE() { return getToken(sqlParser.CONCATENATE, 0); }
		public TerminalNode FILEFORMAT() { return getToken(sqlParser.FILEFORMAT, 0); }
		public TerminalNode REPLACE() { return getToken(sqlParser.REPLACE, 0); }
		public TerminalNode COLUMNS() { return getToken(sqlParser.COLUMNS, 0); }
		public TerminalNode START() { return getToken(sqlParser.START, 0); }
		public TerminalNode TRANSACTION() { return getToken(sqlParser.TRANSACTION, 0); }
		public TerminalNode COMMIT() { return getToken(sqlParser.COMMIT, 0); }
		public TerminalNode ROLLBACK() { return getToken(sqlParser.ROLLBACK, 0); }
		public TerminalNode DFS() { return getToken(sqlParser.DFS, 0); }
		public TerminalNode DELETE() { return getToken(sqlParser.DELETE, 0); }
		public TerminalNode FROM() { return getToken(sqlParser.FROM, 0); }
		public UnsupportedHiveNativeCommandsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unsupportedHiveNativeCommands; }
	}

	public final UnsupportedHiveNativeCommandsContext unsupportedHiveNativeCommands() throws RecognitionException {
		UnsupportedHiveNativeCommandsContext _localctx = new UnsupportedHiveNativeCommandsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_unsupportedHiveNativeCommands);
		int _la;
		try {
			setState(1065);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,109,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(895);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(CREATE);
				setState(896);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(ROLE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(897);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(DROP);
				setState(898);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(ROLE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(899);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(GRANT);
				setState(901);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,102,_ctx) ) {
				case 1:
					{
					setState(900);
					((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(ROLE);
					}
					break;
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(903);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(REVOKE);
				setState(905);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
				case 1:
					{
					setState(904);
					((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(ROLE);
					}
					break;
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(907);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(SHOW);
				setState(908);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(GRANT);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(909);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(SHOW);
				setState(910);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(ROLE);
				setState(912);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
				case 1:
					{
					setState(911);
					((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(GRANT);
					}
					break;
				}
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(914);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(SHOW);
				setState(915);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(PRINCIPALS);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(916);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(SHOW);
				setState(917);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(ROLES);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(918);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(SHOW);
				setState(919);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(CURRENT);
				setState(920);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(ROLES);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(921);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(EXPORT);
				setState(922);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(923);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(IMPORT);
				setState(924);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(925);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(SHOW);
				setState(926);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(COMPACTIONS);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(927);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(SHOW);
				setState(928);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(CREATE);
				setState(929);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(TABLE);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(930);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(SHOW);
				setState(931);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TRANSACTIONS);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(932);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(SHOW);
				setState(933);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(INDEXES);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(934);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(SHOW);
				setState(935);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(LOCKS);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(936);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(CREATE);
				setState(937);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(INDEX);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(938);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(DROP);
				setState(939);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(INDEX);
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(940);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(941);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(INDEX);
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(942);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(LOCK);
				setState(943);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(944);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(LOCK);
				setState(945);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(DATABASE);
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(946);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(UNLOCK);
				setState(947);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(948);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(UNLOCK);
				setState(949);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(DATABASE);
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(950);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(CREATE);
				setState(951);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TEMPORARY);
				setState(952);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(MACRO);
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(953);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(DROP);
				setState(954);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TEMPORARY);
				setState(955);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(MACRO);
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(956);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(957);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(958);
				tableIdentifier();
				setState(959);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(NOT);
				setState(960);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(CLUSTERED);
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(962);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(963);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(964);
				tableIdentifier();
				setState(965);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(CLUSTERED);
				setState(966);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(BY);
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(968);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(969);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(970);
				tableIdentifier();
				setState(971);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(NOT);
				setState(972);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(SORTED);
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(974);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(975);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(976);
				tableIdentifier();
				setState(977);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(SKEWED);
				setState(978);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(BY);
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(980);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(981);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(982);
				tableIdentifier();
				setState(983);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(NOT);
				setState(984);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(SKEWED);
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(986);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(987);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(988);
				tableIdentifier();
				setState(989);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(NOT);
				setState(990);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(STORED);
				setState(991);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw5 = match(AS);
				setState(992);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw6 = match(DIRECTORIES);
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(994);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(995);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(996);
				tableIdentifier();
				setState(997);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(SET);
				setState(998);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(SKEWED);
				setState(999);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw5 = match(LOCATION);
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(1001);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(1002);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(1003);
				tableIdentifier();
				setState(1004);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(EXCHANGE);
				setState(1005);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(PARTITION);
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(1007);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(1008);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(1009);
				tableIdentifier();
				setState(1010);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(ARCHIVE);
				setState(1011);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(PARTITION);
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(1013);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(1014);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(1015);
				tableIdentifier();
				setState(1016);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(UNARCHIVE);
				setState(1017);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(PARTITION);
				}
				break;
			case 36:
				enterOuterAlt(_localctx, 36);
				{
				setState(1019);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(1020);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(1021);
				tableIdentifier();
				setState(1022);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(TOUCH);
				}
				break;
			case 37:
				enterOuterAlt(_localctx, 37);
				{
				setState(1024);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(1025);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(1026);
				tableIdentifier();
				setState(1028);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(1027);
					partitionSpec();
					}
				}

				setState(1030);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(COMPACT);
				}
				break;
			case 38:
				enterOuterAlt(_localctx, 38);
				{
				setState(1032);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(1033);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(1034);
				tableIdentifier();
				setState(1036);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(1035);
					partitionSpec();
					}
				}

				setState(1038);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(CONCATENATE);
				}
				break;
			case 39:
				enterOuterAlt(_localctx, 39);
				{
				setState(1040);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(1041);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(1042);
				tableIdentifier();
				setState(1044);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(1043);
					partitionSpec();
					}
				}

				setState(1046);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(SET);
				setState(1047);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(FILEFORMAT);
				}
				break;
			case 40:
				enterOuterAlt(_localctx, 40);
				{
				setState(1049);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ALTER);
				setState(1050);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TABLE);
				setState(1051);
				tableIdentifier();
				setState(1053);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(1052);
					partitionSpec();
					}
				}

				setState(1055);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw3 = match(REPLACE);
				setState(1056);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw4 = match(COLUMNS);
				}
				break;
			case 41:
				enterOuterAlt(_localctx, 41);
				{
				setState(1058);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(START);
				setState(1059);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(TRANSACTION);
				}
				break;
			case 42:
				enterOuterAlt(_localctx, 42);
				{
				setState(1060);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(COMMIT);
				}
				break;
			case 43:
				enterOuterAlt(_localctx, 43);
				{
				setState(1061);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(ROLLBACK);
				}
				break;
			case 44:
				enterOuterAlt(_localctx, 44);
				{
				setState(1062);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(DFS);
				}
				break;
			case 45:
				enterOuterAlt(_localctx, 45);
				{
				setState(1063);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw1 = match(DELETE);
				setState(1064);
				((UnsupportedHiveNativeCommandsContext)_localctx).kw2 = match(FROM);
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

	public static class CreateTableHeaderContext extends ParserRuleContext {
		public TerminalNode CREATE() { return getToken(sqlParser.CREATE, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode TEMPORARY() { return getToken(sqlParser.TEMPORARY, 0); }
		public TerminalNode EXTERNAL() { return getToken(sqlParser.EXTERNAL, 0); }
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public CreateTableHeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createTableHeader; }
	}

	public final CreateTableHeaderContext createTableHeader() throws RecognitionException {
		CreateTableHeaderContext _localctx = new CreateTableHeaderContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_createTableHeader);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1067);
			match(CREATE);
			setState(1069);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TEMPORARY) {
				{
				setState(1068);
				match(TEMPORARY);
				}
			}

			setState(1072);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTERNAL) {
				{
				setState(1071);
				match(EXTERNAL);
				}
			}

			setState(1074);
			match(TABLE);
			setState(1078);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,112,_ctx) ) {
			case 1:
				{
				setState(1075);
				match(IF);
				setState(1076);
				match(NOT);
				setState(1077);
				match(EXISTS);
				}
				break;
			}
			setState(1080);
			tableIdentifier();
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

	public static class BucketSpecContext extends ParserRuleContext {
		public TerminalNode CLUSTERED() { return getToken(sqlParser.CLUSTERED, 0); }
		public List<TerminalNode> BY() { return getTokens(sqlParser.BY); }
		public TerminalNode BY(int i) {
			return getToken(sqlParser.BY, i);
		}
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode INTO() { return getToken(sqlParser.INTO, 0); }
		public TerminalNode INTEGER_VALUE() { return getToken(sqlParser.INTEGER_VALUE, 0); }
		public TerminalNode BUCKETS() { return getToken(sqlParser.BUCKETS, 0); }
		public TerminalNode SORTED() { return getToken(sqlParser.SORTED, 0); }
		public OrderedIdentifierListContext orderedIdentifierList() {
			return getRuleContext(OrderedIdentifierListContext.class,0);
		}
		public BucketSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bucketSpec; }
	}

	public final BucketSpecContext bucketSpec() throws RecognitionException {
		BucketSpecContext _localctx = new BucketSpecContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_bucketSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1082);
			match(CLUSTERED);
			setState(1083);
			match(BY);
			setState(1084);
			identifierList();
			setState(1088);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SORTED) {
				{
				setState(1085);
				match(SORTED);
				setState(1086);
				match(BY);
				setState(1087);
				orderedIdentifierList();
				}
			}

			setState(1090);
			match(INTO);
			setState(1091);
			match(INTEGER_VALUE);
			setState(1092);
			match(BUCKETS);
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

	public static class SkewSpecContext extends ParserRuleContext {
		public TerminalNode SKEWED() { return getToken(sqlParser.SKEWED, 0); }
		public TerminalNode BY() { return getToken(sqlParser.BY, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode ON() { return getToken(sqlParser.ON, 0); }
		public ConstantListContext constantList() {
			return getRuleContext(ConstantListContext.class,0);
		}
		public NestedConstantListContext nestedConstantList() {
			return getRuleContext(NestedConstantListContext.class,0);
		}
		public TerminalNode STORED() { return getToken(sqlParser.STORED, 0); }
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public TerminalNode DIRECTORIES() { return getToken(sqlParser.DIRECTORIES, 0); }
		public SkewSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_skewSpec; }
	}

	public final SkewSpecContext skewSpec() throws RecognitionException {
		SkewSpecContext _localctx = new SkewSpecContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_skewSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1094);
			match(SKEWED);
			setState(1095);
			match(BY);
			setState(1096);
			identifierList();
			setState(1097);
			match(ON);
			setState(1100);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
			case 1:
				{
				setState(1098);
				constantList();
				}
				break;
			case 2:
				{
				setState(1099);
				nestedConstantList();
				}
				break;
			}
			setState(1105);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,115,_ctx) ) {
			case 1:
				{
				setState(1102);
				match(STORED);
				setState(1103);
				match(AS);
				setState(1104);
				match(DIRECTORIES);
				}
				break;
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

	public static class LocationSpecContext extends ParserRuleContext {
		public TerminalNode LOCATION() { return getToken(sqlParser.LOCATION, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public LocationSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_locationSpec; }
	}

	public final LocationSpecContext locationSpec() throws RecognitionException {
		LocationSpecContext _localctx = new LocationSpecContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_locationSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1107);
			match(LOCATION);
			setState(1108);
			match(STRING);
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

	public static class QueryContext extends ParserRuleContext {
		public QueryNoWithContext queryNoWith() {
			return getRuleContext(QueryNoWithContext.class,0);
		}
		public CtesContext ctes() {
			return getRuleContext(CtesContext.class,0);
		}
		public QueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_query; }
	}

	public final QueryContext query() throws RecognitionException {
		QueryContext _localctx = new QueryContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_query);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WITH) {
				{
				setState(1110);
				ctes();
				}
			}

			setState(1113);
			queryNoWith();
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

	public static class InsertIntoContext extends ParserRuleContext {
		public InsertIntoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertInto; }
	 
		public InsertIntoContext() { }
		public void copyFrom(InsertIntoContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class InsertOverwriteHiveDirContext extends InsertIntoContext {
		public Token path;
		public TerminalNode INSERT() { return getToken(sqlParser.INSERT, 0); }
		public TerminalNode OVERWRITE() { return getToken(sqlParser.OVERWRITE, 0); }
		public TerminalNode DIRECTORY() { return getToken(sqlParser.DIRECTORY, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TerminalNode LOCAL() { return getToken(sqlParser.LOCAL, 0); }
		public RowFormatContext rowFormat() {
			return getRuleContext(RowFormatContext.class,0);
		}
		public CreateFileFormatContext createFileFormat() {
			return getRuleContext(CreateFileFormatContext.class,0);
		}
		public InsertOverwriteHiveDirContext(InsertIntoContext ctx) { copyFrom(ctx); }
	}
	public static class InsertOverwriteDirContext extends InsertIntoContext {
		public Token path;
		public TablePropertyListContext options;
		public TerminalNode INSERT() { return getToken(sqlParser.INSERT, 0); }
		public TerminalNode OVERWRITE() { return getToken(sqlParser.OVERWRITE, 0); }
		public TerminalNode DIRECTORY() { return getToken(sqlParser.DIRECTORY, 0); }
		public TableProviderContext tableProvider() {
			return getRuleContext(TableProviderContext.class,0);
		}
		public TerminalNode LOCAL() { return getToken(sqlParser.LOCAL, 0); }
		public TerminalNode OPTIONS() { return getToken(sqlParser.OPTIONS, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public InsertOverwriteDirContext(InsertIntoContext ctx) { copyFrom(ctx); }
	}
	public static class InsertOverwriteTableContext extends InsertIntoContext {
		public TerminalNode INSERT() { return getToken(sqlParser.INSERT, 0); }
		public TerminalNode OVERWRITE() { return getToken(sqlParser.OVERWRITE, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public InsertOverwriteTableContext(InsertIntoContext ctx) { copyFrom(ctx); }
	}
	public static class InsertIntoTableContext extends InsertIntoContext {
		public TerminalNode INSERT() { return getToken(sqlParser.INSERT, 0); }
		public TerminalNode INTO() { return getToken(sqlParser.INTO, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public InsertIntoTableContext(InsertIntoContext ctx) { copyFrom(ctx); }
	}

	public final InsertIntoContext insertInto() throws RecognitionException {
		InsertIntoContext _localctx = new InsertIntoContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_insertInto);
		int _la;
		try {
			setState(1163);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,127,_ctx) ) {
			case 1:
				_localctx = new InsertOverwriteTableContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(1115);
				match(INSERT);
				setState(1116);
				match(OVERWRITE);
				setState(1117);
				match(TABLE);
				setState(1118);
				tableIdentifier();
				setState(1125);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(1119);
					partitionSpec();
					setState(1123);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==IF) {
						{
						setState(1120);
						match(IF);
						setState(1121);
						match(NOT);
						setState(1122);
						match(EXISTS);
						}
					}

					}
				}

				}
				break;
			case 2:
				_localctx = new InsertIntoTableContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(1127);
				match(INSERT);
				setState(1128);
				match(INTO);
				setState(1130);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
				case 1:
					{
					setState(1129);
					match(TABLE);
					}
					break;
				}
				setState(1132);
				tableIdentifier();
				setState(1134);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(1133);
					partitionSpec();
					}
				}

				}
				break;
			case 3:
				_localctx = new InsertOverwriteHiveDirContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(1136);
				match(INSERT);
				setState(1137);
				match(OVERWRITE);
				setState(1139);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LOCAL) {
					{
					setState(1138);
					match(LOCAL);
					}
				}

				setState(1141);
				match(DIRECTORY);
				setState(1142);
				((InsertOverwriteHiveDirContext)_localctx).path = match(STRING);
				setState(1144);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ROW) {
					{
					setState(1143);
					rowFormat();
					}
				}

				setState(1147);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STORED) {
					{
					setState(1146);
					createFileFormat();
					}
				}

				}
				break;
			case 4:
				_localctx = new InsertOverwriteDirContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(1149);
				match(INSERT);
				setState(1150);
				match(OVERWRITE);
				setState(1152);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LOCAL) {
					{
					setState(1151);
					match(LOCAL);
					}
				}

				setState(1154);
				match(DIRECTORY);
				setState(1156);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STRING) {
					{
					setState(1155);
					((InsertOverwriteDirContext)_localctx).path = match(STRING);
					}
				}

				setState(1158);
				tableProvider();
				setState(1161);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPTIONS) {
					{
					setState(1159);
					match(OPTIONS);
					setState(1160);
					((InsertOverwriteDirContext)_localctx).options = tablePropertyList();
					}
				}

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

	public static class PartitionSpecLocationContext extends ParserRuleContext {
		public PartitionSpecContext partitionSpec() {
			return getRuleContext(PartitionSpecContext.class,0);
		}
		public LocationSpecContext locationSpec() {
			return getRuleContext(LocationSpecContext.class,0);
		}
		public PartitionSpecLocationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_partitionSpecLocation; }
	}

	public final PartitionSpecLocationContext partitionSpecLocation() throws RecognitionException {
		PartitionSpecLocationContext _localctx = new PartitionSpecLocationContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_partitionSpecLocation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1165);
			partitionSpec();
			setState(1167);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOCATION) {
				{
				setState(1166);
				locationSpec();
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
		public TerminalNode PARTITION() { return getToken(sqlParser.PARTITION, 0); }
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
			setState(1169);
			match(PARTITION);
			setState(1170);
			match(T__0);
			setState(1171);
			partitionVal();
			setState(1176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(1172);
				match(T__3);
				setState(1173);
				partitionVal();
				}
				}
				setState(1178);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1179);
			match(T__1);
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
		public TerminalNode EQ() { return getToken(sqlParser.EQ, 0); }
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
			setState(1181);
			identifier();
			setState(1184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQ) {
				{
				setState(1182);
				match(EQ);
				setState(1183);
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

	public static class DescribeFuncNameContext extends ParserRuleContext {
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public ComparisonOperatorContext comparisonOperator() {
			return getRuleContext(ComparisonOperatorContext.class,0);
		}
		public ArithmeticOperatorContext arithmeticOperator() {
			return getRuleContext(ArithmeticOperatorContext.class,0);
		}
		public PredicateOperatorContext predicateOperator() {
			return getRuleContext(PredicateOperatorContext.class,0);
		}
		public DescribeFuncNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_describeFuncName; }
	}

	public final DescribeFuncNameContext describeFuncName() throws RecognitionException {
		DescribeFuncNameContext _localctx = new DescribeFuncNameContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_describeFuncName);
		try {
			setState(1191);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,131,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1186);
				qualifiedName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1187);
				match(STRING);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1188);
				comparisonOperator();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1189);
				arithmeticOperator();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1190);
				predicateOperator();
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

	public static class DescribeColNameContext extends ParserRuleContext {
		public IdentifierContext identifier;
		public List<IdentifierContext> nameParts = new ArrayList<IdentifierContext>();
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public DescribeColNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_describeColName; }
	}

	public final DescribeColNameContext describeColName() throws RecognitionException {
		DescribeColNameContext _localctx = new DescribeColNameContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_describeColName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1193);
			((DescribeColNameContext)_localctx).identifier = identifier();
			((DescribeColNameContext)_localctx).nameParts.add(((DescribeColNameContext)_localctx).identifier);
			setState(1198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(1194);
				match(T__2);
				setState(1195);
				((DescribeColNameContext)_localctx).identifier = identifier();
				((DescribeColNameContext)_localctx).nameParts.add(((DescribeColNameContext)_localctx).identifier);
				}
				}
				setState(1200);
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

	public static class CtesContext extends ParserRuleContext {
		public TerminalNode WITH() { return getToken(sqlParser.WITH, 0); }
		public List<NamedQueryContext> namedQuery() {
			return getRuleContexts(NamedQueryContext.class);
		}
		public NamedQueryContext namedQuery(int i) {
			return getRuleContext(NamedQueryContext.class,i);
		}
		public CtesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ctes; }
	}

	public final CtesContext ctes() throws RecognitionException {
		CtesContext _localctx = new CtesContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_ctes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1201);
			match(WITH);
			setState(1202);
			namedQuery();
			setState(1207);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(1203);
				match(T__3);
				setState(1204);
				namedQuery();
				}
				}
				setState(1209);
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

	public static class NamedQueryContext extends ParserRuleContext {
		public IdentifierContext name;
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public NamedQueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedQuery; }
	}

	public final NamedQueryContext namedQuery() throws RecognitionException {
		NamedQueryContext _localctx = new NamedQueryContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_namedQuery);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1210);
			((NamedQueryContext)_localctx).name = identifier();
			setState(1212);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AS) {
				{
				setState(1211);
				match(AS);
				}
			}

			setState(1214);
			match(T__0);
			setState(1215);
			query();
			setState(1216);
			match(T__1);
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

	public static class TableProviderContext extends ParserRuleContext {
		public TerminalNode USING() { return getToken(sqlParser.USING, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public TableProviderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableProvider; }
	}

	public final TableProviderContext tableProvider() throws RecognitionException {
		TableProviderContext _localctx = new TableProviderContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_tableProvider);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1218);
			match(USING);
			setState(1219);
			qualifiedName();
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
		enterRule(_localctx, 44, RULE_tablePropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1221);
			match(T__0);
			setState(1222);
			tableProperty();
			setState(1227);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(1223);
				match(T__3);
				setState(1224);
				tableProperty();
				}
				}
				setState(1229);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1230);
			match(T__1);
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
		public TerminalNode EQ() { return getToken(sqlParser.EQ, 0); }
		public TablePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableProperty; }
	}

	public final TablePropertyContext tableProperty() throws RecognitionException {
		TablePropertyContext _localctx = new TablePropertyContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_tableProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1232);
			((TablePropertyContext)_localctx).key = tablePropertyKey();
			setState(1237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TRUE || _la==FALSE || _la==EQ || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (STRING - 261)) | (1L << (INTEGER_VALUE - 261)) | (1L << (DECIMAL_VALUE - 261)))) != 0)) {
				{
				setState(1234);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQ) {
					{
					setState(1233);
					match(EQ);
					}
				}

				setState(1236);
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
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TablePropertyKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyKey; }
	}

	public final TablePropertyKeyContext tablePropertyKey() throws RecognitionException {
		TablePropertyKeyContext _localctx = new TablePropertyKeyContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_tablePropertyKey);
		int _la;
		try {
			setState(1248);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SELECT:
			case FROM:
			case ADD:
			case AS:
			case ALL:
			case ANY:
			case DISTINCT:
			case WHERE:
			case GROUP:
			case BY:
			case GROUPING:
			case SETS:
			case CUBE:
			case ROLLUP:
			case ORDER:
			case HAVING:
			case LIMIT:
			case AT:
			case OR:
			case AND:
			case IN:
			case NOT:
			case NO:
			case EXISTS:
			case BETWEEN:
			case LIKE:
			case RLIKE:
			case IS:
			case NULL:
			case TRUE:
			case FALSE:
			case NULLS:
			case ASC:
			case DESC:
			case FOR:
			case INTERVAL:
			case CASE:
			case WHEN:
			case THEN:
			case ELSE:
			case END:
			case JOIN:
			case CROSS:
			case OUTER:
			case INNER:
			case LEFT:
			case SEMI:
			case RIGHT:
			case FULL:
			case NATURAL:
			case ON:
			case PIVOT:
			case LATERAL:
			case WINDOW:
			case OVER:
			case PARTITION:
			case RANGE:
			case ROWS:
			case UNBOUNDED:
			case PRECEDING:
			case FOLLOWING:
			case CURRENT:
			case FIRST:
			case AFTER:
			case LAST:
			case ROW:
			case WITH:
			case CREATE:
			case TABLE:
			case DIRECTORY:
			case VIEW:
			case REPLACE:
			case INSERT:
			case DELETE:
			case INTO:
			case DESCRIBE:
			case EXPLAIN:
			case FORMAT:
			case LOGICAL:
			case CODEGEN:
			case COST:
			case CAST:
			case SHOW:
			case TABLES:
			case COLUMNS:
			case COLUMN:
			case USE:
			case PARTITIONS:
			case FUNCTIONS:
			case DROP:
			case UNION:
			case EXCEPT:
			case SETMINUS:
			case INTERSECT:
			case TO:
			case TABLESAMPLE:
			case STRATIFY:
			case ALTER:
			case RENAME:
			case ARRAY:
			case MAP:
			case STRUCT:
			case COMMENT:
			case SET:
			case RESET:
			case DATA:
			case START:
			case TRANSACTION:
			case COMMIT:
			case ROLLBACK:
			case MACRO:
			case IGNORE:
			case BOTH:
			case LEADING:
			case TRAILING:
			case IF:
			case POSITION:
			case EXTRACT:
			case DIV:
			case PERCENTLIT:
			case BUCKET:
			case OUT:
			case OF:
			case SORT:
			case CLUSTER:
			case DISTRIBUTE:
			case OVERWRITE:
			case TRANSFORM:
			case REDUCE:
			case SERDE:
			case SERDEPROPERTIES:
			case RECORDREADER:
			case RECORDWRITER:
			case DELIMITED:
			case FIELDS:
			case TERMINATED:
			case COLLECTION:
			case ITEMS:
			case KEYS:
			case ESCAPED:
			case LINES:
			case SEPARATED:
			case FUNCTION:
			case EXTENDED:
			case REFRESH:
			case CLEAR:
			case CACHE:
			case UNCACHE:
			case LAZY:
			case FORMATTED:
			case GLOBAL:
			case TEMPORARY:
			case OPTIONS:
			case UNSET:
			case TBLPROPERTIES:
			case DBPROPERTIES:
			case BUCKETS:
			case SKEWED:
			case STORED:
			case DIRECTORIES:
			case LOCATION:
			case EXCHANGE:
			case ARCHIVE:
			case UNARCHIVE:
			case FILEFORMAT:
			case TOUCH:
			case COMPACT:
			case CONCATENATE:
			case CHANGE:
			case CASCADE:
			case RESTRICT:
			case CLUSTERED:
			case SORTED:
			case PURGE:
			case INPUTFORMAT:
			case OUTPUTFORMAT:
			case DATABASE:
			case DATABASES:
			case DFS:
			case TRUNCATE:
			case ANALYZE:
			case COMPUTE:
			case LIST:
			case STATISTICS:
			case PARTITIONED:
			case EXTERNAL:
			case DEFINED:
			case REVOKE:
			case GRANT:
			case LOCK:
			case UNLOCK:
			case MSCK:
			case REPAIR:
			case RECOVER:
			case EXPORT:
			case IMPORT:
			case LOAD:
			case ROLE:
			case ROLES:
			case COMPACTIONS:
			case PRINCIPALS:
			case TRANSACTIONS:
			case INDEX:
			case INDEXES:
			case LOCKS:
			case OPTION:
			case ANTI:
			case LOCAL:
			case INPATH:
			case IDENTIFIER:
			case BACKQUOTED_IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1239);
				identifier();
				setState(1244);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(1240);
					match(T__2);
					setState(1241);
					identifier();
					}
					}
					setState(1246);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(1247);
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

	public static class TablePropertyValueContext extends ParserRuleContext {
		public TerminalNode INTEGER_VALUE() { return getToken(sqlParser.INTEGER_VALUE, 0); }
		public TerminalNode DECIMAL_VALUE() { return getToken(sqlParser.DECIMAL_VALUE, 0); }
		public BooleanValueContext booleanValue() {
			return getRuleContext(BooleanValueContext.class,0);
		}
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TablePropertyValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyValue; }
	}

	public final TablePropertyValueContext tablePropertyValue() throws RecognitionException {
		TablePropertyValueContext _localctx = new TablePropertyValueContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_tablePropertyValue);
		try {
			setState(1254);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INTEGER_VALUE:
				enterOuterAlt(_localctx, 1);
				{
				setState(1250);
				match(INTEGER_VALUE);
				}
				break;
			case DECIMAL_VALUE:
				enterOuterAlt(_localctx, 2);
				{
				setState(1251);
				match(DECIMAL_VALUE);
				}
				break;
			case TRUE:
			case FALSE:
				enterOuterAlt(_localctx, 3);
				{
				setState(1252);
				booleanValue();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 4);
				{
				setState(1253);
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

	public static class ConstantListContext extends ParserRuleContext {
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public ConstantListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantList; }
	}

	public final ConstantListContext constantList() throws RecognitionException {
		ConstantListContext _localctx = new ConstantListContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_constantList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1256);
			match(T__0);
			setState(1257);
			constant();
			setState(1262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(1258);
				match(T__3);
				setState(1259);
				constant();
				}
				}
				setState(1264);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1265);
			match(T__1);
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

	public static class NestedConstantListContext extends ParserRuleContext {
		public List<ConstantListContext> constantList() {
			return getRuleContexts(ConstantListContext.class);
		}
		public ConstantListContext constantList(int i) {
			return getRuleContext(ConstantListContext.class,i);
		}
		public NestedConstantListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nestedConstantList; }
	}

	public final NestedConstantListContext nestedConstantList() throws RecognitionException {
		NestedConstantListContext _localctx = new NestedConstantListContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_nestedConstantList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1267);
			match(T__0);
			setState(1268);
			constantList();
			setState(1273);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(1269);
				match(T__3);
				setState(1270);
				constantList();
				}
				}
				setState(1275);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1276);
			match(T__1);
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

	public static class CreateFileFormatContext extends ParserRuleContext {
		public TerminalNode STORED() { return getToken(sqlParser.STORED, 0); }
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public FileFormatContext fileFormat() {
			return getRuleContext(FileFormatContext.class,0);
		}
		public TerminalNode BY() { return getToken(sqlParser.BY, 0); }
		public StorageHandlerContext storageHandler() {
			return getRuleContext(StorageHandlerContext.class,0);
		}
		public CreateFileFormatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createFileFormat; }
	}

	public final CreateFileFormatContext createFileFormat() throws RecognitionException {
		CreateFileFormatContext _localctx = new CreateFileFormatContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_createFileFormat);
		try {
			setState(1284);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,143,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1278);
				match(STORED);
				setState(1279);
				match(AS);
				setState(1280);
				fileFormat();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1281);
				match(STORED);
				setState(1282);
				match(BY);
				setState(1283);
				storageHandler();
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

	public static class FileFormatContext extends ParserRuleContext {
		public FileFormatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fileFormat; }
	 
		public FileFormatContext() { }
		public void copyFrom(FileFormatContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TableFileFormatContext extends FileFormatContext {
		public Token inFmt;
		public Token outFmt;
		public TerminalNode INPUTFORMAT() { return getToken(sqlParser.INPUTFORMAT, 0); }
		public TerminalNode OUTPUTFORMAT() { return getToken(sqlParser.OUTPUTFORMAT, 0); }
		public List<TerminalNode> STRING() { return getTokens(sqlParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(sqlParser.STRING, i);
		}
		public TableFileFormatContext(FileFormatContext ctx) { copyFrom(ctx); }
	}
	public static class GenericFileFormatContext extends FileFormatContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public GenericFileFormatContext(FileFormatContext ctx) { copyFrom(ctx); }
	}

	public final FileFormatContext fileFormat() throws RecognitionException {
		FileFormatContext _localctx = new FileFormatContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_fileFormat);
		try {
			setState(1291);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,144,_ctx) ) {
			case 1:
				_localctx = new TableFileFormatContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(1286);
				match(INPUTFORMAT);
				setState(1287);
				((TableFileFormatContext)_localctx).inFmt = match(STRING);
				setState(1288);
				match(OUTPUTFORMAT);
				setState(1289);
				((TableFileFormatContext)_localctx).outFmt = match(STRING);
				}
				break;
			case 2:
				_localctx = new GenericFileFormatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(1290);
				identifier();
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

	public static class StorageHandlerContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TerminalNode WITH() { return getToken(sqlParser.WITH, 0); }
		public TerminalNode SERDEPROPERTIES() { return getToken(sqlParser.SERDEPROPERTIES, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public StorageHandlerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_storageHandler; }
	}

	public final StorageHandlerContext storageHandler() throws RecognitionException {
		StorageHandlerContext _localctx = new StorageHandlerContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_storageHandler);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1293);
			match(STRING);
			setState(1297);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,145,_ctx) ) {
			case 1:
				{
				setState(1294);
				match(WITH);
				setState(1295);
				match(SERDEPROPERTIES);
				setState(1296);
				tablePropertyList();
				}
				break;
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

	public static class ResourceContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public ResourceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resource; }
	}

	public final ResourceContext resource() throws RecognitionException {
		ResourceContext _localctx = new ResourceContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_resource);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1299);
			identifier();
			setState(1300);
			match(STRING);
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

	public static class QueryNoWithContext extends ParserRuleContext {
		public QueryNoWithContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryNoWith; }
	 
		public QueryNoWithContext() { }
		public void copyFrom(QueryNoWithContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class SingleInsertQueryContext extends QueryNoWithContext {
		public QueryTermContext queryTerm() {
			return getRuleContext(QueryTermContext.class,0);
		}
		public QueryOrganizationContext queryOrganization() {
			return getRuleContext(QueryOrganizationContext.class,0);
		}
		public InsertIntoContext insertInto() {
			return getRuleContext(InsertIntoContext.class,0);
		}
		public SingleInsertQueryContext(QueryNoWithContext ctx) { copyFrom(ctx); }
	}
	public static class MultiInsertQueryContext extends QueryNoWithContext {
		public FromClauseContext fromClause() {
			return getRuleContext(FromClauseContext.class,0);
		}
		public List<MultiInsertQueryBodyContext> multiInsertQueryBody() {
			return getRuleContexts(MultiInsertQueryBodyContext.class);
		}
		public MultiInsertQueryBodyContext multiInsertQueryBody(int i) {
			return getRuleContext(MultiInsertQueryBodyContext.class,i);
		}
		public MultiInsertQueryContext(QueryNoWithContext ctx) { copyFrom(ctx); }
	}

	public final QueryNoWithContext queryNoWith() throws RecognitionException {
		QueryNoWithContext _localctx = new QueryNoWithContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_queryNoWith);
		int _la;
		try {
			setState(1314);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,148,_ctx) ) {
			case 1:
				_localctx = new SingleInsertQueryContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(1303);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INSERT) {
					{
					setState(1302);
					insertInto();
					}
				}

				setState(1305);
				queryTerm(0);
				setState(1306);
				queryOrganization();
				}
				break;
			case 2:
				_localctx = new MultiInsertQueryContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(1308);
				fromClause();
				setState(1310); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1309);
					multiInsertQueryBody();
					}
					}
					setState(1312); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==SELECT || _la==FROM || _la==INSERT || _la==MAP || _la==REDUCE );
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

	public static class QueryOrganizationContext extends ParserRuleContext {
		public SortItemContext sortItem;
		public List<SortItemContext> order = new ArrayList<SortItemContext>();
		public ExpressionContext expression;
		public List<ExpressionContext> clusterBy = new ArrayList<ExpressionContext>();
		public List<ExpressionContext> distributeBy = new ArrayList<ExpressionContext>();
		public List<SortItemContext> sort = new ArrayList<SortItemContext>();
		public ExpressionContext limit;
		public TerminalNode ORDER() { return getToken(sqlParser.ORDER, 0); }
		public List<TerminalNode> BY() { return getTokens(sqlParser.BY); }
		public TerminalNode BY(int i) {
			return getToken(sqlParser.BY, i);
		}
		public TerminalNode CLUSTER() { return getToken(sqlParser.CLUSTER, 0); }
		public TerminalNode DISTRIBUTE() { return getToken(sqlParser.DISTRIBUTE, 0); }
		public TerminalNode SORT() { return getToken(sqlParser.SORT, 0); }
		public WindowsContext windows() {
			return getRuleContext(WindowsContext.class,0);
		}
		public TerminalNode LIMIT() { return getToken(sqlParser.LIMIT, 0); }
		public List<SortItemContext> sortItem() {
			return getRuleContexts(SortItemContext.class);
		}
		public SortItemContext sortItem(int i) {
			return getRuleContext(SortItemContext.class,i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ALL() { return getToken(sqlParser.ALL, 0); }
		public QueryOrganizationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryOrganization; }
	}

	public final QueryOrganizationContext queryOrganization() throws RecognitionException {
		QueryOrganizationContext _localctx = new QueryOrganizationContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_queryOrganization);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1326);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ORDER) {
				{
				setState(1316);
				match(ORDER);
				setState(1317);
				match(BY);
				setState(1318);
				((QueryOrganizationContext)_localctx).sortItem = sortItem();
				((QueryOrganizationContext)_localctx).order.add(((QueryOrganizationContext)_localctx).sortItem);
				setState(1323);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1319);
					match(T__3);
					setState(1320);
					((QueryOrganizationContext)_localctx).sortItem = sortItem();
					((QueryOrganizationContext)_localctx).order.add(((QueryOrganizationContext)_localctx).sortItem);
					}
					}
					setState(1325);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1338);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CLUSTER) {
				{
				setState(1328);
				match(CLUSTER);
				setState(1329);
				match(BY);
				setState(1330);
				((QueryOrganizationContext)_localctx).expression = expression();
				((QueryOrganizationContext)_localctx).clusterBy.add(((QueryOrganizationContext)_localctx).expression);
				setState(1335);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1331);
					match(T__3);
					setState(1332);
					((QueryOrganizationContext)_localctx).expression = expression();
					((QueryOrganizationContext)_localctx).clusterBy.add(((QueryOrganizationContext)_localctx).expression);
					}
					}
					setState(1337);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1350);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DISTRIBUTE) {
				{
				setState(1340);
				match(DISTRIBUTE);
				setState(1341);
				match(BY);
				setState(1342);
				((QueryOrganizationContext)_localctx).expression = expression();
				((QueryOrganizationContext)_localctx).distributeBy.add(((QueryOrganizationContext)_localctx).expression);
				setState(1347);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1343);
					match(T__3);
					setState(1344);
					((QueryOrganizationContext)_localctx).expression = expression();
					((QueryOrganizationContext)_localctx).distributeBy.add(((QueryOrganizationContext)_localctx).expression);
					}
					}
					setState(1349);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1362);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SORT) {
				{
				setState(1352);
				match(SORT);
				setState(1353);
				match(BY);
				setState(1354);
				((QueryOrganizationContext)_localctx).sortItem = sortItem();
				((QueryOrganizationContext)_localctx).sort.add(((QueryOrganizationContext)_localctx).sortItem);
				setState(1359);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1355);
					match(T__3);
					setState(1356);
					((QueryOrganizationContext)_localctx).sortItem = sortItem();
					((QueryOrganizationContext)_localctx).sort.add(((QueryOrganizationContext)_localctx).sortItem);
					}
					}
					setState(1361);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1365);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WINDOW) {
				{
				setState(1364);
				windows();
				}
			}

			setState(1372);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIMIT) {
				{
				setState(1367);
				match(LIMIT);
				setState(1370);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,158,_ctx) ) {
				case 1:
					{
					setState(1368);
					match(ALL);
					}
					break;
				case 2:
					{
					setState(1369);
					((QueryOrganizationContext)_localctx).limit = expression();
					}
					break;
				}
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

	public static class MultiInsertQueryBodyContext extends ParserRuleContext {
		public QuerySpecificationContext querySpecification() {
			return getRuleContext(QuerySpecificationContext.class,0);
		}
		public QueryOrganizationContext queryOrganization() {
			return getRuleContext(QueryOrganizationContext.class,0);
		}
		public InsertIntoContext insertInto() {
			return getRuleContext(InsertIntoContext.class,0);
		}
		public MultiInsertQueryBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiInsertQueryBody; }
	}

	public final MultiInsertQueryBodyContext multiInsertQueryBody() throws RecognitionException {
		MultiInsertQueryBodyContext _localctx = new MultiInsertQueryBodyContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_multiInsertQueryBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1375);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INSERT) {
				{
				setState(1374);
				insertInto();
				}
			}

			setState(1377);
			querySpecification();
			setState(1378);
			queryOrganization();
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

	public static class QueryTermContext extends ParserRuleContext {
		public QueryTermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryTerm; }
	 
		public QueryTermContext() { }
		public void copyFrom(QueryTermContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class QueryTermDefaultContext extends QueryTermContext {
		public QueryPrimaryContext queryPrimary() {
			return getRuleContext(QueryPrimaryContext.class,0);
		}
		public QueryTermDefaultContext(QueryTermContext ctx) { copyFrom(ctx); }
	}
	public static class SetOperationContext extends QueryTermContext {
		public QueryTermContext left;
		public Token operator;
		public QueryTermContext right;
		public List<QueryTermContext> queryTerm() {
			return getRuleContexts(QueryTermContext.class);
		}
		public QueryTermContext queryTerm(int i) {
			return getRuleContext(QueryTermContext.class,i);
		}
		public TerminalNode INTERSECT() { return getToken(sqlParser.INTERSECT, 0); }
		public TerminalNode UNION() { return getToken(sqlParser.UNION, 0); }
		public TerminalNode EXCEPT() { return getToken(sqlParser.EXCEPT, 0); }
		public TerminalNode SETMINUS() { return getToken(sqlParser.SETMINUS, 0); }
		public SetQuantifierContext setQuantifier() {
			return getRuleContext(SetQuantifierContext.class,0);
		}
		public SetOperationContext(QueryTermContext ctx) { copyFrom(ctx); }
	}

	public final QueryTermContext queryTerm() throws RecognitionException {
		return queryTerm(0);
	}

	private QueryTermContext queryTerm(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		QueryTermContext _localctx = new QueryTermContext(_ctx, _parentState);
		QueryTermContext _prevctx = _localctx;
		int _startState = 70;
		enterRecursionRule(_localctx, 70, RULE_queryTerm, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QueryTermDefaultContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(1381);
			queryPrimary();
			}
			_ctx.stop = _input.LT(-1);
			setState(1406);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,165,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1404);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,164,_ctx) ) {
					case 1:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						((SetOperationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_queryTerm);
						setState(1383);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1384);
						if (!(this.legacy_setops_precedence_enbled)) throw new FailedPredicateException(this, "this.legacy_setops_precedence_enbled");
						setState(1385);
						((SetOperationContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 110)) & ~0x3f) == 0 && ((1L << (_la - 110)) & ((1L << (UNION - 110)) | (1L << (EXCEPT - 110)) | (1L << (SETMINUS - 110)) | (1L << (INTERSECT - 110)))) != 0)) ) {
							((SetOperationContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1387);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==ALL || _la==DISTINCT) {
							{
							setState(1386);
							setQuantifier();
							}
						}

						setState(1389);
						((SetOperationContext)_localctx).right = queryTerm(4);
						}
						break;
					case 2:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						((SetOperationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_queryTerm);
						setState(1390);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1391);
						if (!(!this.legacy_setops_precedence_enbled)) throw new FailedPredicateException(this, "!this.legacy_setops_precedence_enbled");
						setState(1392);
						((SetOperationContext)_localctx).operator = match(INTERSECT);
						setState(1394);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==ALL || _la==DISTINCT) {
							{
							setState(1393);
							setQuantifier();
							}
						}

						setState(1396);
						((SetOperationContext)_localctx).right = queryTerm(3);
						}
						break;
					case 3:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						((SetOperationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_queryTerm);
						setState(1397);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1398);
						if (!(!this.legacy_setops_precedence_enbled)) throw new FailedPredicateException(this, "!this.legacy_setops_precedence_enbled");
						setState(1399);
						((SetOperationContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 110)) & ~0x3f) == 0 && ((1L << (_la - 110)) & ((1L << (UNION - 110)) | (1L << (EXCEPT - 110)) | (1L << (SETMINUS - 110)))) != 0)) ) {
							((SetOperationContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1401);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==ALL || _la==DISTINCT) {
							{
							setState(1400);
							setQuantifier();
							}
						}

						setState(1403);
						((SetOperationContext)_localctx).right = queryTerm(2);
						}
						break;
					}
					} 
				}
				setState(1408);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,165,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class QueryPrimaryContext extends ParserRuleContext {
		public QueryPrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryPrimary; }
	 
		public QueryPrimaryContext() { }
		public void copyFrom(QueryPrimaryContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class SubqueryContext extends QueryPrimaryContext {
		public QueryNoWithContext queryNoWith() {
			return getRuleContext(QueryNoWithContext.class,0);
		}
		public SubqueryContext(QueryPrimaryContext ctx) { copyFrom(ctx); }
	}
	public static class QueryPrimaryDefaultContext extends QueryPrimaryContext {
		public QuerySpecificationContext querySpecification() {
			return getRuleContext(QuerySpecificationContext.class,0);
		}
		public QueryPrimaryDefaultContext(QueryPrimaryContext ctx) { copyFrom(ctx); }
	}
	public static class InlineTableDefault1Context extends QueryPrimaryContext {
		public InlineTableContext inlineTable() {
			return getRuleContext(InlineTableContext.class,0);
		}
		public InlineTableDefault1Context(QueryPrimaryContext ctx) { copyFrom(ctx); }
	}
	public static class TableContext extends QueryPrimaryContext {
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TableContext(QueryPrimaryContext ctx) { copyFrom(ctx); }
	}

	public final QueryPrimaryContext queryPrimary() throws RecognitionException {
		QueryPrimaryContext _localctx = new QueryPrimaryContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_queryPrimary);
		try {
			setState(1417);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SELECT:
			case FROM:
			case MAP:
			case REDUCE:
				_localctx = new QueryPrimaryDefaultContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(1409);
				querySpecification();
				}
				break;
			case TABLE:
				_localctx = new TableContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(1410);
				match(TABLE);
				setState(1411);
				tableIdentifier();
				}
				break;
			case VALUES:
				_localctx = new InlineTableDefault1Context(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(1412);
				inlineTable();
				}
				break;
			case T__0:
				_localctx = new SubqueryContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(1413);
				match(T__0);
				setState(1414);
				queryNoWith();
				setState(1415);
				match(T__1);
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

	public static class SortItemContext extends ParserRuleContext {
		public Token ordering;
		public Token nullOrder;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode NULLS() { return getToken(sqlParser.NULLS, 0); }
		public TerminalNode ASC() { return getToken(sqlParser.ASC, 0); }
		public TerminalNode DESC() { return getToken(sqlParser.DESC, 0); }
		public TerminalNode LAST() { return getToken(sqlParser.LAST, 0); }
		public TerminalNode FIRST() { return getToken(sqlParser.FIRST, 0); }
		public SortItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sortItem; }
	}

	public final SortItemContext sortItem() throws RecognitionException {
		SortItemContext _localctx = new SortItemContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_sortItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1419);
			expression();
			setState(1421);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASC || _la==DESC) {
				{
				setState(1420);
				((SortItemContext)_localctx).ordering = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==ASC || _la==DESC) ) {
					((SortItemContext)_localctx).ordering = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(1425);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NULLS) {
				{
				setState(1423);
				match(NULLS);
				setState(1424);
				((SortItemContext)_localctx).nullOrder = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==FIRST || _la==LAST) ) {
					((SortItemContext)_localctx).nullOrder = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
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

	public static class QuerySpecificationContext extends ParserRuleContext {
		public Token kind;
		public RowFormatContext inRowFormat;
		public Token recordWriter;
		public Token script;
		public RowFormatContext outRowFormat;
		public Token recordReader;
		public BooleanExpressionContext where;
		public HintContext hint;
		public List<HintContext> hints = new ArrayList<HintContext>();
		public BooleanExpressionContext having;
		public TerminalNode USING() { return getToken(sqlParser.USING, 0); }
		public List<TerminalNode> STRING() { return getTokens(sqlParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(sqlParser.STRING, i);
		}
		public TerminalNode RECORDWRITER() { return getToken(sqlParser.RECORDWRITER, 0); }
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public TerminalNode RECORDREADER() { return getToken(sqlParser.RECORDREADER, 0); }
		public FromClauseContext fromClause() {
			return getRuleContext(FromClauseContext.class,0);
		}
		public TerminalNode WHERE() { return getToken(sqlParser.WHERE, 0); }
		public TerminalNode SELECT() { return getToken(sqlParser.SELECT, 0); }
		public NamedExpressionSeqContext namedExpressionSeq() {
			return getRuleContext(NamedExpressionSeqContext.class,0);
		}
		public List<RowFormatContext> rowFormat() {
			return getRuleContexts(RowFormatContext.class);
		}
		public RowFormatContext rowFormat(int i) {
			return getRuleContext(RowFormatContext.class,i);
		}
		public List<BooleanExpressionContext> booleanExpression() {
			return getRuleContexts(BooleanExpressionContext.class);
		}
		public BooleanExpressionContext booleanExpression(int i) {
			return getRuleContext(BooleanExpressionContext.class,i);
		}
		public TerminalNode TRANSFORM() { return getToken(sqlParser.TRANSFORM, 0); }
		public TerminalNode MAP() { return getToken(sqlParser.MAP, 0); }
		public TerminalNode REDUCE() { return getToken(sqlParser.REDUCE, 0); }
		public IdentifierSeqContext identifierSeq() {
			return getRuleContext(IdentifierSeqContext.class,0);
		}
		public ColTypeListContext colTypeList() {
			return getRuleContext(ColTypeListContext.class,0);
		}
		public List<LateralViewContext> lateralView() {
			return getRuleContexts(LateralViewContext.class);
		}
		public LateralViewContext lateralView(int i) {
			return getRuleContext(LateralViewContext.class,i);
		}
		public AggregationContext aggregation() {
			return getRuleContext(AggregationContext.class,0);
		}
		public TerminalNode HAVING() { return getToken(sqlParser.HAVING, 0); }
		public WindowsContext windows() {
			return getRuleContext(WindowsContext.class,0);
		}
		public SetQuantifierContext setQuantifier() {
			return getRuleContext(SetQuantifierContext.class,0);
		}
		public List<HintContext> hint() {
			return getRuleContexts(HintContext.class);
		}
		public HintContext hint(int i) {
			return getRuleContext(HintContext.class,i);
		}
		public QuerySpecificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_querySpecification; }
	}

	public final QuerySpecificationContext querySpecification() throws RecognitionException {
		QuerySpecificationContext _localctx = new QuerySpecificationContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_querySpecification);
		int _la;
		try {
			int _alt;
			setState(1520);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,190,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				{
				setState(1437);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case SELECT:
					{
					setState(1427);
					match(SELECT);
					setState(1428);
					((QuerySpecificationContext)_localctx).kind = match(TRANSFORM);
					setState(1429);
					match(T__0);
					setState(1430);
					namedExpressionSeq();
					setState(1431);
					match(T__1);
					}
					break;
				case MAP:
					{
					setState(1433);
					((QuerySpecificationContext)_localctx).kind = match(MAP);
					setState(1434);
					namedExpressionSeq();
					}
					break;
				case REDUCE:
					{
					setState(1435);
					((QuerySpecificationContext)_localctx).kind = match(REDUCE);
					setState(1436);
					namedExpressionSeq();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(1440);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ROW) {
					{
					setState(1439);
					((QuerySpecificationContext)_localctx).inRowFormat = rowFormat();
					}
				}

				setState(1444);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==RECORDWRITER) {
					{
					setState(1442);
					match(RECORDWRITER);
					setState(1443);
					((QuerySpecificationContext)_localctx).recordWriter = match(STRING);
					}
				}

				setState(1446);
				match(USING);
				setState(1447);
				((QuerySpecificationContext)_localctx).script = match(STRING);
				setState(1460);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,174,_ctx) ) {
				case 1:
					{
					setState(1448);
					match(AS);
					setState(1458);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,173,_ctx) ) {
					case 1:
						{
						setState(1449);
						identifierSeq();
						}
						break;
					case 2:
						{
						setState(1450);
						colTypeList();
						}
						break;
					case 3:
						{
						{
						setState(1451);
						match(T__0);
						setState(1454);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,172,_ctx) ) {
						case 1:
							{
							setState(1452);
							identifierSeq();
							}
							break;
						case 2:
							{
							setState(1453);
							colTypeList();
							}
							break;
						}
						setState(1456);
						match(T__1);
						}
						}
						break;
					}
					}
					break;
				}
				setState(1463);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,175,_ctx) ) {
				case 1:
					{
					setState(1462);
					((QuerySpecificationContext)_localctx).outRowFormat = rowFormat();
					}
					break;
				}
				setState(1467);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,176,_ctx) ) {
				case 1:
					{
					setState(1465);
					match(RECORDREADER);
					setState(1466);
					((QuerySpecificationContext)_localctx).recordReader = match(STRING);
					}
					break;
				}
				setState(1470);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,177,_ctx) ) {
				case 1:
					{
					setState(1469);
					fromClause();
					}
					break;
				}
				setState(1474);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,178,_ctx) ) {
				case 1:
					{
					setState(1472);
					match(WHERE);
					setState(1473);
					((QuerySpecificationContext)_localctx).where = booleanExpression(0);
					}
					break;
				}
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(1498);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case SELECT:
					{
					setState(1476);
					((QuerySpecificationContext)_localctx).kind = match(SELECT);
					setState(1480);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__4) {
						{
						{
						setState(1477);
						((QuerySpecificationContext)_localctx).hint = hint();
						((QuerySpecificationContext)_localctx).hints.add(((QuerySpecificationContext)_localctx).hint);
						}
						}
						setState(1482);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(1484);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,180,_ctx) ) {
					case 1:
						{
						setState(1483);
						setQuantifier();
						}
						break;
					}
					setState(1486);
					namedExpressionSeq();
					setState(1488);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,181,_ctx) ) {
					case 1:
						{
						setState(1487);
						fromClause();
						}
						break;
					}
					}
					break;
				case FROM:
					{
					setState(1490);
					fromClause();
					setState(1496);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,183,_ctx) ) {
					case 1:
						{
						setState(1491);
						((QuerySpecificationContext)_localctx).kind = match(SELECT);
						setState(1493);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,182,_ctx) ) {
						case 1:
							{
							setState(1492);
							setQuantifier();
							}
							break;
						}
						setState(1495);
						namedExpressionSeq();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1503);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,185,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1500);
						lateralView();
						}
						} 
					}
					setState(1505);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,185,_ctx);
				}
				setState(1508);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,186,_ctx) ) {
				case 1:
					{
					setState(1506);
					match(WHERE);
					setState(1507);
					((QuerySpecificationContext)_localctx).where = booleanExpression(0);
					}
					break;
				}
				setState(1511);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,187,_ctx) ) {
				case 1:
					{
					setState(1510);
					aggregation();
					}
					break;
				}
				setState(1515);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,188,_ctx) ) {
				case 1:
					{
					setState(1513);
					match(HAVING);
					setState(1514);
					((QuerySpecificationContext)_localctx).having = booleanExpression(0);
					}
					break;
				}
				setState(1518);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,189,_ctx) ) {
				case 1:
					{
					setState(1517);
					windows();
					}
					break;
				}
				}
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

	public static class HintContext extends ParserRuleContext {
		public HintStatementContext hintStatement;
		public List<HintStatementContext> hintStatements = new ArrayList<HintStatementContext>();
		public List<HintStatementContext> hintStatement() {
			return getRuleContexts(HintStatementContext.class);
		}
		public HintStatementContext hintStatement(int i) {
			return getRuleContext(HintStatementContext.class,i);
		}
		public HintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hint; }
	}

	public final HintContext hint() throws RecognitionException {
		HintContext _localctx = new HintContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_hint);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1522);
			match(T__4);
			setState(1523);
			((HintContext)_localctx).hintStatement = hintStatement();
			((HintContext)_localctx).hintStatements.add(((HintContext)_localctx).hintStatement);
			setState(1530);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << JOIN) | (1L << CROSS) | (1L << OUTER) | (1L << INNER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LEFT - 64)) | (1L << (SEMI - 64)) | (1L << (RIGHT - 64)) | (1L << (FULL - 64)) | (1L << (NATURAL - 64)) | (1L << (ON - 64)) | (1L << (PIVOT - 64)) | (1L << (LATERAL - 64)) | (1L << (WINDOW - 64)) | (1L << (OVER - 64)) | (1L << (PARTITION - 64)) | (1L << (RANGE - 64)) | (1L << (ROWS - 64)) | (1L << (UNBOUNDED - 64)) | (1L << (PRECEDING - 64)) | (1L << (FOLLOWING - 64)) | (1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (ROW - 64)) | (1L << (WITH - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (UNION - 64)) | (1L << (EXCEPT - 64)) | (1L << (SETMINUS - 64)) | (1L << (INTERSECT - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (ARRAY - 64)) | (1L << (MAP - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (COMMIT - 128)) | (1L << (ROLLBACK - 128)) | (1L << (MACRO - 128)) | (1L << (IGNORE - 128)) | (1L << (BOTH - 128)) | (1L << (LEADING - 128)) | (1L << (TRAILING - 128)) | (1L << (IF - 128)) | (1L << (POSITION - 128)) | (1L << (EXTRACT - 128)) | (1L << (DIV - 128)) | (1L << (PERCENTLIT - 128)) | (1L << (BUCKET - 128)) | (1L << (OUT - 128)) | (1L << (OF - 128)) | (1L << (SORT - 128)) | (1L << (CLUSTER - 128)) | (1L << (DISTRIBUTE - 128)) | (1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (UNSET - 192)) | (1L << (TBLPROPERTIES - 192)) | (1L << (DBPROPERTIES - 192)) | (1L << (BUCKETS - 192)) | (1L << (SKEWED - 192)) | (1L << (STORED - 192)) | (1L << (DIRECTORIES - 192)) | (1L << (LOCATION - 192)) | (1L << (EXCHANGE - 192)) | (1L << (ARCHIVE - 192)) | (1L << (UNARCHIVE - 192)) | (1L << (FILEFORMAT - 192)) | (1L << (TOUCH - 192)) | (1L << (COMPACT - 192)) | (1L << (CONCATENATE - 192)) | (1L << (CHANGE - 192)) | (1L << (CASCADE - 192)) | (1L << (RESTRICT - 192)) | (1L << (CLUSTERED - 192)) | (1L << (SORTED - 192)) | (1L << (PURGE - 192)) | (1L << (INPUTFORMAT - 192)) | (1L << (OUTPUTFORMAT - 192)) | (1L << (DATABASE - 192)) | (1L << (DATABASES - 192)) | (1L << (DFS - 192)) | (1L << (TRUNCATE - 192)) | (1L << (ANALYZE - 192)) | (1L << (COMPUTE - 192)) | (1L << (LIST - 192)) | (1L << (STATISTICS - 192)) | (1L << (PARTITIONED - 192)) | (1L << (EXTERNAL - 192)) | (1L << (DEFINED - 192)) | (1L << (REVOKE - 192)) | (1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (ANTI - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)))) != 0) || _la==IDENTIFIER || _la==BACKQUOTED_IDENTIFIER) {
				{
				{
				setState(1525);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__3) {
					{
					setState(1524);
					match(T__3);
					}
				}

				setState(1527);
				((HintContext)_localctx).hintStatement = hintStatement();
				((HintContext)_localctx).hintStatements.add(((HintContext)_localctx).hintStatement);
				}
				}
				setState(1532);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1533);
			match(T__5);
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

	public static class HintStatementContext extends ParserRuleContext {
		public IdentifierContext hintName;
		public PrimaryExpressionContext primaryExpression;
		public List<PrimaryExpressionContext> parameters = new ArrayList<PrimaryExpressionContext>();
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<PrimaryExpressionContext> primaryExpression() {
			return getRuleContexts(PrimaryExpressionContext.class);
		}
		public PrimaryExpressionContext primaryExpression(int i) {
			return getRuleContext(PrimaryExpressionContext.class,i);
		}
		public HintStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hintStatement; }
	}

	public final HintStatementContext hintStatement() throws RecognitionException {
		HintStatementContext _localctx = new HintStatementContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_hintStatement);
		int _la;
		try {
			setState(1548);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,194,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1535);
				((HintStatementContext)_localctx).hintName = identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1536);
				((HintStatementContext)_localctx).hintName = identifier();
				setState(1537);
				match(T__0);
				setState(1538);
				((HintStatementContext)_localctx).primaryExpression = primaryExpression(0);
				((HintStatementContext)_localctx).parameters.add(((HintStatementContext)_localctx).primaryExpression);
				setState(1543);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1539);
					match(T__3);
					setState(1540);
					((HintStatementContext)_localctx).primaryExpression = primaryExpression(0);
					((HintStatementContext)_localctx).parameters.add(((HintStatementContext)_localctx).primaryExpression);
					}
					}
					setState(1545);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1546);
				match(T__1);
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

	public static class FromClauseContext extends ParserRuleContext {
		public TerminalNode FROM() { return getToken(sqlParser.FROM, 0); }
		public List<RelationContext> relation() {
			return getRuleContexts(RelationContext.class);
		}
		public RelationContext relation(int i) {
			return getRuleContext(RelationContext.class,i);
		}
		public List<LateralViewContext> lateralView() {
			return getRuleContexts(LateralViewContext.class);
		}
		public LateralViewContext lateralView(int i) {
			return getRuleContext(LateralViewContext.class,i);
		}
		public PivotClauseContext pivotClause() {
			return getRuleContext(PivotClauseContext.class,0);
		}
		public FromClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fromClause; }
	}

	public final FromClauseContext fromClause() throws RecognitionException {
		FromClauseContext _localctx = new FromClauseContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_fromClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1550);
			match(FROM);
			setState(1551);
			relation();
			setState(1556);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,195,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1552);
					match(T__3);
					setState(1553);
					relation();
					}
					} 
				}
				setState(1558);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,195,_ctx);
			}
			setState(1562);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,196,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1559);
					lateralView();
					}
					} 
				}
				setState(1564);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,196,_ctx);
			}
			setState(1566);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,197,_ctx) ) {
			case 1:
				{
				setState(1565);
				pivotClause();
				}
				break;
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

	public static class AggregationContext extends ParserRuleContext {
		public ExpressionContext expression;
		public List<ExpressionContext> groupingExpressions = new ArrayList<ExpressionContext>();
		public Token kind;
		public TerminalNode GROUP() { return getToken(sqlParser.GROUP, 0); }
		public TerminalNode BY() { return getToken(sqlParser.BY, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode WITH() { return getToken(sqlParser.WITH, 0); }
		public TerminalNode SETS() { return getToken(sqlParser.SETS, 0); }
		public List<GroupingSetContext> groupingSet() {
			return getRuleContexts(GroupingSetContext.class);
		}
		public GroupingSetContext groupingSet(int i) {
			return getRuleContext(GroupingSetContext.class,i);
		}
		public TerminalNode ROLLUP() { return getToken(sqlParser.ROLLUP, 0); }
		public TerminalNode CUBE() { return getToken(sqlParser.CUBE, 0); }
		public TerminalNode GROUPING() { return getToken(sqlParser.GROUPING, 0); }
		public AggregationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregation; }
	}

	public final AggregationContext aggregation() throws RecognitionException {
		AggregationContext _localctx = new AggregationContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_aggregation);
		int _la;
		try {
			int _alt;
			setState(1612);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,202,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1568);
				match(GROUP);
				setState(1569);
				match(BY);
				setState(1570);
				((AggregationContext)_localctx).expression = expression();
				((AggregationContext)_localctx).groupingExpressions.add(((AggregationContext)_localctx).expression);
				setState(1575);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,198,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1571);
						match(T__3);
						setState(1572);
						((AggregationContext)_localctx).expression = expression();
						((AggregationContext)_localctx).groupingExpressions.add(((AggregationContext)_localctx).expression);
						}
						} 
					}
					setState(1577);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,198,_ctx);
				}
				setState(1595);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,200,_ctx) ) {
				case 1:
					{
					setState(1578);
					match(WITH);
					setState(1579);
					((AggregationContext)_localctx).kind = match(ROLLUP);
					}
					break;
				case 2:
					{
					setState(1580);
					match(WITH);
					setState(1581);
					((AggregationContext)_localctx).kind = match(CUBE);
					}
					break;
				case 3:
					{
					setState(1582);
					((AggregationContext)_localctx).kind = match(GROUPING);
					setState(1583);
					match(SETS);
					setState(1584);
					match(T__0);
					setState(1585);
					groupingSet();
					setState(1590);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__3) {
						{
						{
						setState(1586);
						match(T__3);
						setState(1587);
						groupingSet();
						}
						}
						setState(1592);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(1593);
					match(T__1);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1597);
				match(GROUP);
				setState(1598);
				match(BY);
				setState(1599);
				((AggregationContext)_localctx).kind = match(GROUPING);
				setState(1600);
				match(SETS);
				setState(1601);
				match(T__0);
				setState(1602);
				groupingSet();
				setState(1607);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1603);
					match(T__3);
					setState(1604);
					groupingSet();
					}
					}
					setState(1609);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1610);
				match(T__1);
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

	public static class GroupingSetContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public GroupingSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupingSet; }
	}

	public final GroupingSetContext groupingSet() throws RecognitionException {
		GroupingSetContext _localctx = new GroupingSetContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_groupingSet);
		int _la;
		try {
			setState(1627);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,205,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1614);
				match(T__0);
				setState(1623);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << JOIN) | (1L << CROSS) | (1L << OUTER) | (1L << INNER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LEFT - 64)) | (1L << (SEMI - 64)) | (1L << (RIGHT - 64)) | (1L << (FULL - 64)) | (1L << (NATURAL - 64)) | (1L << (ON - 64)) | (1L << (PIVOT - 64)) | (1L << (LATERAL - 64)) | (1L << (WINDOW - 64)) | (1L << (OVER - 64)) | (1L << (PARTITION - 64)) | (1L << (RANGE - 64)) | (1L << (ROWS - 64)) | (1L << (UNBOUNDED - 64)) | (1L << (PRECEDING - 64)) | (1L << (FOLLOWING - 64)) | (1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (ROW - 64)) | (1L << (WITH - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (UNION - 64)) | (1L << (EXCEPT - 64)) | (1L << (SETMINUS - 64)) | (1L << (INTERSECT - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (ARRAY - 64)) | (1L << (MAP - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (COMMIT - 128)) | (1L << (ROLLBACK - 128)) | (1L << (MACRO - 128)) | (1L << (IGNORE - 128)) | (1L << (BOTH - 128)) | (1L << (LEADING - 128)) | (1L << (TRAILING - 128)) | (1L << (IF - 128)) | (1L << (POSITION - 128)) | (1L << (EXTRACT - 128)) | (1L << (PLUS - 128)) | (1L << (MINUS - 128)) | (1L << (ASTERISK - 128)) | (1L << (DIV - 128)) | (1L << (TILDE - 128)) | (1L << (PERCENTLIT - 128)) | (1L << (BUCKET - 128)) | (1L << (OUT - 128)) | (1L << (OF - 128)) | (1L << (SORT - 128)) | (1L << (CLUSTER - 128)) | (1L << (DISTRIBUTE - 128)) | (1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (UNSET - 192)) | (1L << (TBLPROPERTIES - 192)) | (1L << (DBPROPERTIES - 192)) | (1L << (BUCKETS - 192)) | (1L << (SKEWED - 192)) | (1L << (STORED - 192)) | (1L << (DIRECTORIES - 192)) | (1L << (LOCATION - 192)) | (1L << (EXCHANGE - 192)) | (1L << (ARCHIVE - 192)) | (1L << (UNARCHIVE - 192)) | (1L << (FILEFORMAT - 192)) | (1L << (TOUCH - 192)) | (1L << (COMPACT - 192)) | (1L << (CONCATENATE - 192)) | (1L << (CHANGE - 192)) | (1L << (CASCADE - 192)) | (1L << (RESTRICT - 192)) | (1L << (CLUSTERED - 192)) | (1L << (SORTED - 192)) | (1L << (PURGE - 192)) | (1L << (INPUTFORMAT - 192)) | (1L << (OUTPUTFORMAT - 192)) | (1L << (DATABASE - 192)) | (1L << (DATABASES - 192)) | (1L << (DFS - 192)) | (1L << (TRUNCATE - 192)) | (1L << (ANALYZE - 192)) | (1L << (COMPUTE - 192)) | (1L << (LIST - 192)) | (1L << (STATISTICS - 192)) | (1L << (PARTITIONED - 192)) | (1L << (EXTERNAL - 192)) | (1L << (DEFINED - 192)) | (1L << (REVOKE - 192)) | (1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (ANTI - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)))) != 0) || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (STRING - 261)) | (1L << (BIGINT_LITERAL - 261)) | (1L << (SMALLINT_LITERAL - 261)) | (1L << (TINYINT_LITERAL - 261)) | (1L << (INTEGER_VALUE - 261)) | (1L << (DECIMAL_VALUE - 261)) | (1L << (DOUBLE_LITERAL - 261)) | (1L << (BIGDECIMAL_LITERAL - 261)) | (1L << (IDENTIFIER - 261)) | (1L << (BACKQUOTED_IDENTIFIER - 261)))) != 0)) {
					{
					setState(1615);
					expression();
					setState(1620);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__3) {
						{
						{
						setState(1616);
						match(T__3);
						setState(1617);
						expression();
						}
						}
						setState(1622);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(1625);
				match(T__1);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1626);
				expression();
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

	public static class PivotClauseContext extends ParserRuleContext {
		public NamedExpressionSeqContext aggregates;
		public PivotValueContext pivotValue;
		public List<PivotValueContext> pivotValues = new ArrayList<PivotValueContext>();
		public TerminalNode PIVOT() { return getToken(sqlParser.PIVOT, 0); }
		public TerminalNode FOR() { return getToken(sqlParser.FOR, 0); }
		public PivotColumnContext pivotColumn() {
			return getRuleContext(PivotColumnContext.class,0);
		}
		public TerminalNode IN() { return getToken(sqlParser.IN, 0); }
		public NamedExpressionSeqContext namedExpressionSeq() {
			return getRuleContext(NamedExpressionSeqContext.class,0);
		}
		public List<PivotValueContext> pivotValue() {
			return getRuleContexts(PivotValueContext.class);
		}
		public PivotValueContext pivotValue(int i) {
			return getRuleContext(PivotValueContext.class,i);
		}
		public PivotClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pivotClause; }
	}

	public final PivotClauseContext pivotClause() throws RecognitionException {
		PivotClauseContext _localctx = new PivotClauseContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_pivotClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1629);
			match(PIVOT);
			setState(1630);
			match(T__0);
			setState(1631);
			((PivotClauseContext)_localctx).aggregates = namedExpressionSeq();
			setState(1632);
			match(FOR);
			setState(1633);
			pivotColumn();
			setState(1634);
			match(IN);
			setState(1635);
			match(T__0);
			setState(1636);
			((PivotClauseContext)_localctx).pivotValue = pivotValue();
			((PivotClauseContext)_localctx).pivotValues.add(((PivotClauseContext)_localctx).pivotValue);
			setState(1641);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(1637);
				match(T__3);
				setState(1638);
				((PivotClauseContext)_localctx).pivotValue = pivotValue();
				((PivotClauseContext)_localctx).pivotValues.add(((PivotClauseContext)_localctx).pivotValue);
				}
				}
				setState(1643);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1644);
			match(T__1);
			setState(1645);
			match(T__1);
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

	public static class PivotColumnContext extends ParserRuleContext {
		public IdentifierContext identifier;
		public List<IdentifierContext> identifiers = new ArrayList<IdentifierContext>();
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public PivotColumnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pivotColumn; }
	}

	public final PivotColumnContext pivotColumn() throws RecognitionException {
		PivotColumnContext _localctx = new PivotColumnContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_pivotColumn);
		int _la;
		try {
			setState(1659);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SELECT:
			case FROM:
			case ADD:
			case AS:
			case ALL:
			case ANY:
			case DISTINCT:
			case WHERE:
			case GROUP:
			case BY:
			case GROUPING:
			case SETS:
			case CUBE:
			case ROLLUP:
			case ORDER:
			case HAVING:
			case LIMIT:
			case AT:
			case OR:
			case AND:
			case IN:
			case NOT:
			case NO:
			case EXISTS:
			case BETWEEN:
			case LIKE:
			case RLIKE:
			case IS:
			case NULL:
			case TRUE:
			case FALSE:
			case NULLS:
			case ASC:
			case DESC:
			case FOR:
			case INTERVAL:
			case CASE:
			case WHEN:
			case THEN:
			case ELSE:
			case END:
			case JOIN:
			case CROSS:
			case OUTER:
			case INNER:
			case LEFT:
			case SEMI:
			case RIGHT:
			case FULL:
			case NATURAL:
			case ON:
			case PIVOT:
			case LATERAL:
			case WINDOW:
			case OVER:
			case PARTITION:
			case RANGE:
			case ROWS:
			case UNBOUNDED:
			case PRECEDING:
			case FOLLOWING:
			case CURRENT:
			case FIRST:
			case AFTER:
			case LAST:
			case ROW:
			case WITH:
			case CREATE:
			case TABLE:
			case DIRECTORY:
			case VIEW:
			case REPLACE:
			case INSERT:
			case DELETE:
			case INTO:
			case DESCRIBE:
			case EXPLAIN:
			case FORMAT:
			case LOGICAL:
			case CODEGEN:
			case COST:
			case CAST:
			case SHOW:
			case TABLES:
			case COLUMNS:
			case COLUMN:
			case USE:
			case PARTITIONS:
			case FUNCTIONS:
			case DROP:
			case UNION:
			case EXCEPT:
			case SETMINUS:
			case INTERSECT:
			case TO:
			case TABLESAMPLE:
			case STRATIFY:
			case ALTER:
			case RENAME:
			case ARRAY:
			case MAP:
			case STRUCT:
			case COMMENT:
			case SET:
			case RESET:
			case DATA:
			case START:
			case TRANSACTION:
			case COMMIT:
			case ROLLBACK:
			case MACRO:
			case IGNORE:
			case BOTH:
			case LEADING:
			case TRAILING:
			case IF:
			case POSITION:
			case EXTRACT:
			case DIV:
			case PERCENTLIT:
			case BUCKET:
			case OUT:
			case OF:
			case SORT:
			case CLUSTER:
			case DISTRIBUTE:
			case OVERWRITE:
			case TRANSFORM:
			case REDUCE:
			case SERDE:
			case SERDEPROPERTIES:
			case RECORDREADER:
			case RECORDWRITER:
			case DELIMITED:
			case FIELDS:
			case TERMINATED:
			case COLLECTION:
			case ITEMS:
			case KEYS:
			case ESCAPED:
			case LINES:
			case SEPARATED:
			case FUNCTION:
			case EXTENDED:
			case REFRESH:
			case CLEAR:
			case CACHE:
			case UNCACHE:
			case LAZY:
			case FORMATTED:
			case GLOBAL:
			case TEMPORARY:
			case OPTIONS:
			case UNSET:
			case TBLPROPERTIES:
			case DBPROPERTIES:
			case BUCKETS:
			case SKEWED:
			case STORED:
			case DIRECTORIES:
			case LOCATION:
			case EXCHANGE:
			case ARCHIVE:
			case UNARCHIVE:
			case FILEFORMAT:
			case TOUCH:
			case COMPACT:
			case CONCATENATE:
			case CHANGE:
			case CASCADE:
			case RESTRICT:
			case CLUSTERED:
			case SORTED:
			case PURGE:
			case INPUTFORMAT:
			case OUTPUTFORMAT:
			case DATABASE:
			case DATABASES:
			case DFS:
			case TRUNCATE:
			case ANALYZE:
			case COMPUTE:
			case LIST:
			case STATISTICS:
			case PARTITIONED:
			case EXTERNAL:
			case DEFINED:
			case REVOKE:
			case GRANT:
			case LOCK:
			case UNLOCK:
			case MSCK:
			case REPAIR:
			case RECOVER:
			case EXPORT:
			case IMPORT:
			case LOAD:
			case ROLE:
			case ROLES:
			case COMPACTIONS:
			case PRINCIPALS:
			case TRANSACTIONS:
			case INDEX:
			case INDEXES:
			case LOCKS:
			case OPTION:
			case ANTI:
			case LOCAL:
			case INPATH:
			case IDENTIFIER:
			case BACKQUOTED_IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(1647);
				((PivotColumnContext)_localctx).identifier = identifier();
				((PivotColumnContext)_localctx).identifiers.add(((PivotColumnContext)_localctx).identifier);
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 2);
				{
				setState(1648);
				match(T__0);
				setState(1649);
				((PivotColumnContext)_localctx).identifier = identifier();
				((PivotColumnContext)_localctx).identifiers.add(((PivotColumnContext)_localctx).identifier);
				setState(1654);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1650);
					match(T__3);
					setState(1651);
					((PivotColumnContext)_localctx).identifier = identifier();
					((PivotColumnContext)_localctx).identifiers.add(((PivotColumnContext)_localctx).identifier);
					}
					}
					setState(1656);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1657);
				match(T__1);
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

	public static class PivotValueContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public PivotValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pivotValue; }
	}

	public final PivotValueContext pivotValue() throws RecognitionException {
		PivotValueContext _localctx = new PivotValueContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_pivotValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1661);
			expression();
			setState(1666);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 19)) & ~0x3f) == 0 && ((1L << (_la - 19)) & ((1L << (SELECT - 19)) | (1L << (FROM - 19)) | (1L << (ADD - 19)) | (1L << (AS - 19)) | (1L << (ALL - 19)) | (1L << (ANY - 19)) | (1L << (DISTINCT - 19)) | (1L << (WHERE - 19)) | (1L << (GROUP - 19)) | (1L << (BY - 19)) | (1L << (GROUPING - 19)) | (1L << (SETS - 19)) | (1L << (CUBE - 19)) | (1L << (ROLLUP - 19)) | (1L << (ORDER - 19)) | (1L << (HAVING - 19)) | (1L << (LIMIT - 19)) | (1L << (AT - 19)) | (1L << (OR - 19)) | (1L << (AND - 19)) | (1L << (IN - 19)) | (1L << (NOT - 19)) | (1L << (NO - 19)) | (1L << (EXISTS - 19)) | (1L << (BETWEEN - 19)) | (1L << (LIKE - 19)) | (1L << (RLIKE - 19)) | (1L << (IS - 19)) | (1L << (NULL - 19)) | (1L << (TRUE - 19)) | (1L << (FALSE - 19)) | (1L << (NULLS - 19)) | (1L << (ASC - 19)) | (1L << (DESC - 19)) | (1L << (FOR - 19)) | (1L << (INTERVAL - 19)) | (1L << (CASE - 19)) | (1L << (WHEN - 19)) | (1L << (THEN - 19)) | (1L << (ELSE - 19)) | (1L << (END - 19)) | (1L << (JOIN - 19)) | (1L << (CROSS - 19)) | (1L << (OUTER - 19)) | (1L << (INNER - 19)) | (1L << (LEFT - 19)) | (1L << (SEMI - 19)) | (1L << (RIGHT - 19)) | (1L << (FULL - 19)) | (1L << (NATURAL - 19)) | (1L << (ON - 19)) | (1L << (PIVOT - 19)) | (1L << (LATERAL - 19)) | (1L << (WINDOW - 19)) | (1L << (OVER - 19)) | (1L << (PARTITION - 19)) | (1L << (RANGE - 19)) | (1L << (ROWS - 19)) | (1L << (UNBOUNDED - 19)) | (1L << (PRECEDING - 19)) | (1L << (FOLLOWING - 19)) | (1L << (CURRENT - 19)) | (1L << (FIRST - 19)) | (1L << (AFTER - 19)))) != 0) || ((((_la - 83)) & ~0x3f) == 0 && ((1L << (_la - 83)) & ((1L << (LAST - 83)) | (1L << (ROW - 83)) | (1L << (WITH - 83)) | (1L << (CREATE - 83)) | (1L << (TABLE - 83)) | (1L << (DIRECTORY - 83)) | (1L << (VIEW - 83)) | (1L << (REPLACE - 83)) | (1L << (INSERT - 83)) | (1L << (DELETE - 83)) | (1L << (INTO - 83)) | (1L << (DESCRIBE - 83)) | (1L << (EXPLAIN - 83)) | (1L << (FORMAT - 83)) | (1L << (LOGICAL - 83)) | (1L << (CODEGEN - 83)) | (1L << (COST - 83)) | (1L << (CAST - 83)) | (1L << (SHOW - 83)) | (1L << (TABLES - 83)) | (1L << (COLUMNS - 83)) | (1L << (COLUMN - 83)) | (1L << (USE - 83)) | (1L << (PARTITIONS - 83)) | (1L << (FUNCTIONS - 83)) | (1L << (DROP - 83)) | (1L << (UNION - 83)) | (1L << (EXCEPT - 83)) | (1L << (SETMINUS - 83)) | (1L << (INTERSECT - 83)) | (1L << (TO - 83)) | (1L << (TABLESAMPLE - 83)) | (1L << (STRATIFY - 83)) | (1L << (ALTER - 83)) | (1L << (RENAME - 83)) | (1L << (ARRAY - 83)) | (1L << (MAP - 83)) | (1L << (STRUCT - 83)) | (1L << (COMMENT - 83)) | (1L << (SET - 83)) | (1L << (RESET - 83)) | (1L << (DATA - 83)) | (1L << (START - 83)) | (1L << (TRANSACTION - 83)) | (1L << (COMMIT - 83)) | (1L << (ROLLBACK - 83)) | (1L << (MACRO - 83)) | (1L << (IGNORE - 83)) | (1L << (BOTH - 83)) | (1L << (LEADING - 83)) | (1L << (TRAILING - 83)) | (1L << (IF - 83)) | (1L << (POSITION - 83)) | (1L << (EXTRACT - 83)))) != 0) || ((((_la - 151)) & ~0x3f) == 0 && ((1L << (_la - 151)) & ((1L << (DIV - 151)) | (1L << (PERCENTLIT - 151)) | (1L << (BUCKET - 151)) | (1L << (OUT - 151)) | (1L << (OF - 151)) | (1L << (SORT - 151)) | (1L << (CLUSTER - 151)) | (1L << (DISTRIBUTE - 151)) | (1L << (OVERWRITE - 151)) | (1L << (TRANSFORM - 151)) | (1L << (REDUCE - 151)) | (1L << (SERDE - 151)) | (1L << (SERDEPROPERTIES - 151)) | (1L << (RECORDREADER - 151)) | (1L << (RECORDWRITER - 151)) | (1L << (DELIMITED - 151)) | (1L << (FIELDS - 151)) | (1L << (TERMINATED - 151)) | (1L << (COLLECTION - 151)) | (1L << (ITEMS - 151)) | (1L << (KEYS - 151)) | (1L << (ESCAPED - 151)) | (1L << (LINES - 151)) | (1L << (SEPARATED - 151)) | (1L << (FUNCTION - 151)) | (1L << (EXTENDED - 151)) | (1L << (REFRESH - 151)) | (1L << (CLEAR - 151)) | (1L << (CACHE - 151)) | (1L << (UNCACHE - 151)) | (1L << (LAZY - 151)) | (1L << (FORMATTED - 151)) | (1L << (GLOBAL - 151)) | (1L << (TEMPORARY - 151)) | (1L << (OPTIONS - 151)) | (1L << (UNSET - 151)) | (1L << (TBLPROPERTIES - 151)) | (1L << (DBPROPERTIES - 151)) | (1L << (BUCKETS - 151)) | (1L << (SKEWED - 151)) | (1L << (STORED - 151)) | (1L << (DIRECTORIES - 151)) | (1L << (LOCATION - 151)) | (1L << (EXCHANGE - 151)) | (1L << (ARCHIVE - 151)) | (1L << (UNARCHIVE - 151)) | (1L << (FILEFORMAT - 151)) | (1L << (TOUCH - 151)) | (1L << (COMPACT - 151)) | (1L << (CONCATENATE - 151)) | (1L << (CHANGE - 151)) | (1L << (CASCADE - 151)) | (1L << (RESTRICT - 151)) | (1L << (CLUSTERED - 151)) | (1L << (SORTED - 151)) | (1L << (PURGE - 151)) | (1L << (INPUTFORMAT - 151)) | (1L << (OUTPUTFORMAT - 151)))) != 0) || ((((_la - 215)) & ~0x3f) == 0 && ((1L << (_la - 215)) & ((1L << (DATABASE - 215)) | (1L << (DATABASES - 215)) | (1L << (DFS - 215)) | (1L << (TRUNCATE - 215)) | (1L << (ANALYZE - 215)) | (1L << (COMPUTE - 215)) | (1L << (LIST - 215)) | (1L << (STATISTICS - 215)) | (1L << (PARTITIONED - 215)) | (1L << (EXTERNAL - 215)) | (1L << (DEFINED - 215)) | (1L << (REVOKE - 215)) | (1L << (GRANT - 215)) | (1L << (LOCK - 215)) | (1L << (UNLOCK - 215)) | (1L << (MSCK - 215)) | (1L << (REPAIR - 215)) | (1L << (RECOVER - 215)) | (1L << (EXPORT - 215)) | (1L << (IMPORT - 215)) | (1L << (LOAD - 215)) | (1L << (ROLE - 215)) | (1L << (ROLES - 215)) | (1L << (COMPACTIONS - 215)) | (1L << (PRINCIPALS - 215)) | (1L << (TRANSACTIONS - 215)) | (1L << (INDEX - 215)) | (1L << (INDEXES - 215)) | (1L << (LOCKS - 215)) | (1L << (OPTION - 215)) | (1L << (ANTI - 215)) | (1L << (LOCAL - 215)) | (1L << (INPATH - 215)) | (1L << (IDENTIFIER - 215)) | (1L << (BACKQUOTED_IDENTIFIER - 215)))) != 0)) {
				{
				setState(1663);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,209,_ctx) ) {
				case 1:
					{
					setState(1662);
					match(AS);
					}
					break;
				}
				setState(1665);
				identifier();
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

	public static class LateralViewContext extends ParserRuleContext {
		public IdentifierContext tblName;
		public IdentifierContext identifier;
		public List<IdentifierContext> colName = new ArrayList<IdentifierContext>();
		public TerminalNode LATERAL() { return getToken(sqlParser.LATERAL, 0); }
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode OUTER() { return getToken(sqlParser.OUTER, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public LateralViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lateralView; }
	}

	public final LateralViewContext lateralView() throws RecognitionException {
		LateralViewContext _localctx = new LateralViewContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_lateralView);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1668);
			match(LATERAL);
			setState(1669);
			match(VIEW);
			setState(1671);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,211,_ctx) ) {
			case 1:
				{
				setState(1670);
				match(OUTER);
				}
				break;
			}
			setState(1673);
			qualifiedName();
			setState(1674);
			match(T__0);
			setState(1683);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << JOIN) | (1L << CROSS) | (1L << OUTER) | (1L << INNER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LEFT - 64)) | (1L << (SEMI - 64)) | (1L << (RIGHT - 64)) | (1L << (FULL - 64)) | (1L << (NATURAL - 64)) | (1L << (ON - 64)) | (1L << (PIVOT - 64)) | (1L << (LATERAL - 64)) | (1L << (WINDOW - 64)) | (1L << (OVER - 64)) | (1L << (PARTITION - 64)) | (1L << (RANGE - 64)) | (1L << (ROWS - 64)) | (1L << (UNBOUNDED - 64)) | (1L << (PRECEDING - 64)) | (1L << (FOLLOWING - 64)) | (1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (ROW - 64)) | (1L << (WITH - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (UNION - 64)) | (1L << (EXCEPT - 64)) | (1L << (SETMINUS - 64)) | (1L << (INTERSECT - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (ARRAY - 64)) | (1L << (MAP - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (COMMIT - 128)) | (1L << (ROLLBACK - 128)) | (1L << (MACRO - 128)) | (1L << (IGNORE - 128)) | (1L << (BOTH - 128)) | (1L << (LEADING - 128)) | (1L << (TRAILING - 128)) | (1L << (IF - 128)) | (1L << (POSITION - 128)) | (1L << (EXTRACT - 128)) | (1L << (PLUS - 128)) | (1L << (MINUS - 128)) | (1L << (ASTERISK - 128)) | (1L << (DIV - 128)) | (1L << (TILDE - 128)) | (1L << (PERCENTLIT - 128)) | (1L << (BUCKET - 128)) | (1L << (OUT - 128)) | (1L << (OF - 128)) | (1L << (SORT - 128)) | (1L << (CLUSTER - 128)) | (1L << (DISTRIBUTE - 128)) | (1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (UNSET - 192)) | (1L << (TBLPROPERTIES - 192)) | (1L << (DBPROPERTIES - 192)) | (1L << (BUCKETS - 192)) | (1L << (SKEWED - 192)) | (1L << (STORED - 192)) | (1L << (DIRECTORIES - 192)) | (1L << (LOCATION - 192)) | (1L << (EXCHANGE - 192)) | (1L << (ARCHIVE - 192)) | (1L << (UNARCHIVE - 192)) | (1L << (FILEFORMAT - 192)) | (1L << (TOUCH - 192)) | (1L << (COMPACT - 192)) | (1L << (CONCATENATE - 192)) | (1L << (CHANGE - 192)) | (1L << (CASCADE - 192)) | (1L << (RESTRICT - 192)) | (1L << (CLUSTERED - 192)) | (1L << (SORTED - 192)) | (1L << (PURGE - 192)) | (1L << (INPUTFORMAT - 192)) | (1L << (OUTPUTFORMAT - 192)) | (1L << (DATABASE - 192)) | (1L << (DATABASES - 192)) | (1L << (DFS - 192)) | (1L << (TRUNCATE - 192)) | (1L << (ANALYZE - 192)) | (1L << (COMPUTE - 192)) | (1L << (LIST - 192)) | (1L << (STATISTICS - 192)) | (1L << (PARTITIONED - 192)) | (1L << (EXTERNAL - 192)) | (1L << (DEFINED - 192)) | (1L << (REVOKE - 192)) | (1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (ANTI - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)))) != 0) || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (STRING - 261)) | (1L << (BIGINT_LITERAL - 261)) | (1L << (SMALLINT_LITERAL - 261)) | (1L << (TINYINT_LITERAL - 261)) | (1L << (INTEGER_VALUE - 261)) | (1L << (DECIMAL_VALUE - 261)) | (1L << (DOUBLE_LITERAL - 261)) | (1L << (BIGDECIMAL_LITERAL - 261)) | (1L << (IDENTIFIER - 261)) | (1L << (BACKQUOTED_IDENTIFIER - 261)))) != 0)) {
				{
				setState(1675);
				expression();
				setState(1680);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1676);
					match(T__3);
					setState(1677);
					expression();
					}
					}
					setState(1682);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1685);
			match(T__1);
			setState(1686);
			((LateralViewContext)_localctx).tblName = identifier();
			setState(1698);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,216,_ctx) ) {
			case 1:
				{
				setState(1688);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,214,_ctx) ) {
				case 1:
					{
					setState(1687);
					match(AS);
					}
					break;
				}
				setState(1690);
				((LateralViewContext)_localctx).identifier = identifier();
				((LateralViewContext)_localctx).colName.add(((LateralViewContext)_localctx).identifier);
				setState(1695);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,215,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1691);
						match(T__3);
						setState(1692);
						((LateralViewContext)_localctx).identifier = identifier();
						((LateralViewContext)_localctx).colName.add(((LateralViewContext)_localctx).identifier);
						}
						} 
					}
					setState(1697);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,215,_ctx);
				}
				}
				break;
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

	public static class SetQuantifierContext extends ParserRuleContext {
		public TerminalNode DISTINCT() { return getToken(sqlParser.DISTINCT, 0); }
		public TerminalNode ALL() { return getToken(sqlParser.ALL, 0); }
		public SetQuantifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setQuantifier; }
	}

	public final SetQuantifierContext setQuantifier() throws RecognitionException {
		SetQuantifierContext _localctx = new SetQuantifierContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_setQuantifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1700);
			_la = _input.LA(1);
			if ( !(_la==ALL || _la==DISTINCT) ) {
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

	public static class RelationContext extends ParserRuleContext {
		public RelationPrimaryContext relationPrimary() {
			return getRuleContext(RelationPrimaryContext.class,0);
		}
		public List<JoinRelationContext> joinRelation() {
			return getRuleContexts(JoinRelationContext.class);
		}
		public JoinRelationContext joinRelation(int i) {
			return getRuleContext(JoinRelationContext.class,i);
		}
		public RelationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relation; }
	}

	public final RelationContext relation() throws RecognitionException {
		RelationContext _localctx = new RelationContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_relation);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1702);
			relationPrimary();
			setState(1706);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,217,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1703);
					joinRelation();
					}
					} 
				}
				setState(1708);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,217,_ctx);
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

	public static class JoinRelationContext extends ParserRuleContext {
		public RelationPrimaryContext right;
		public TerminalNode JOIN() { return getToken(sqlParser.JOIN, 0); }
		public RelationPrimaryContext relationPrimary() {
			return getRuleContext(RelationPrimaryContext.class,0);
		}
		public JoinTypeContext joinType() {
			return getRuleContext(JoinTypeContext.class,0);
		}
		public JoinCriteriaContext joinCriteria() {
			return getRuleContext(JoinCriteriaContext.class,0);
		}
		public TerminalNode NATURAL() { return getToken(sqlParser.NATURAL, 0); }
		public JoinRelationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_joinRelation; }
	}

	public final JoinRelationContext joinRelation() throws RecognitionException {
		JoinRelationContext _localctx = new JoinRelationContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_joinRelation);
		try {
			setState(1720);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case JOIN:
			case CROSS:
			case INNER:
			case LEFT:
			case RIGHT:
			case FULL:
			case ANTI:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(1709);
				joinType();
				}
				setState(1710);
				match(JOIN);
				setState(1711);
				((JoinRelationContext)_localctx).right = relationPrimary();
				setState(1713);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,218,_ctx) ) {
				case 1:
					{
					setState(1712);
					joinCriteria();
					}
					break;
				}
				}
				break;
			case NATURAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1715);
				match(NATURAL);
				setState(1716);
				joinType();
				setState(1717);
				match(JOIN);
				setState(1718);
				((JoinRelationContext)_localctx).right = relationPrimary();
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

	public static class JoinTypeContext extends ParserRuleContext {
		public TerminalNode INNER() { return getToken(sqlParser.INNER, 0); }
		public TerminalNode CROSS() { return getToken(sqlParser.CROSS, 0); }
		public TerminalNode LEFT() { return getToken(sqlParser.LEFT, 0); }
		public TerminalNode OUTER() { return getToken(sqlParser.OUTER, 0); }
		public TerminalNode SEMI() { return getToken(sqlParser.SEMI, 0); }
		public TerminalNode RIGHT() { return getToken(sqlParser.RIGHT, 0); }
		public TerminalNode FULL() { return getToken(sqlParser.FULL, 0); }
		public TerminalNode ANTI() { return getToken(sqlParser.ANTI, 0); }
		public JoinTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_joinType; }
	}

	public final JoinTypeContext joinType() throws RecognitionException {
		JoinTypeContext _localctx = new JoinTypeContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_joinType);
		int _la;
		try {
			setState(1744);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,225,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1723);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INNER) {
					{
					setState(1722);
					match(INNER);
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1725);
				match(CROSS);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1726);
				match(LEFT);
				setState(1728);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OUTER) {
					{
					setState(1727);
					match(OUTER);
					}
				}

				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1730);
				match(LEFT);
				setState(1731);
				match(SEMI);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1732);
				match(RIGHT);
				setState(1734);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OUTER) {
					{
					setState(1733);
					match(OUTER);
					}
				}

				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1736);
				match(FULL);
				setState(1738);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OUTER) {
					{
					setState(1737);
					match(OUTER);
					}
				}

				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1741);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LEFT) {
					{
					setState(1740);
					match(LEFT);
					}
				}

				setState(1743);
				match(ANTI);
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

	public static class JoinCriteriaContext extends ParserRuleContext {
		public TerminalNode ON() { return getToken(sqlParser.ON, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public TerminalNode USING() { return getToken(sqlParser.USING, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public JoinCriteriaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_joinCriteria; }
	}

	public final JoinCriteriaContext joinCriteria() throws RecognitionException {
		JoinCriteriaContext _localctx = new JoinCriteriaContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_joinCriteria);
		try {
			setState(1750);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ON:
				enterOuterAlt(_localctx, 1);
				{
				setState(1746);
				match(ON);
				setState(1747);
				booleanExpression(0);
				}
				break;
			case USING:
				enterOuterAlt(_localctx, 2);
				{
				setState(1748);
				match(USING);
				setState(1749);
				identifierList();
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

	public static class SampleContext extends ParserRuleContext {
		public TerminalNode TABLESAMPLE() { return getToken(sqlParser.TABLESAMPLE, 0); }
		public SampleMethodContext sampleMethod() {
			return getRuleContext(SampleMethodContext.class,0);
		}
		public SampleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sample; }
	}

	public final SampleContext sample() throws RecognitionException {
		SampleContext _localctx = new SampleContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_sample);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1752);
			match(TABLESAMPLE);
			setState(1753);
			match(T__0);
			setState(1755);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << JOIN) | (1L << CROSS) | (1L << OUTER) | (1L << INNER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LEFT - 64)) | (1L << (SEMI - 64)) | (1L << (RIGHT - 64)) | (1L << (FULL - 64)) | (1L << (NATURAL - 64)) | (1L << (ON - 64)) | (1L << (PIVOT - 64)) | (1L << (LATERAL - 64)) | (1L << (WINDOW - 64)) | (1L << (OVER - 64)) | (1L << (PARTITION - 64)) | (1L << (RANGE - 64)) | (1L << (ROWS - 64)) | (1L << (UNBOUNDED - 64)) | (1L << (PRECEDING - 64)) | (1L << (FOLLOWING - 64)) | (1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (ROW - 64)) | (1L << (WITH - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (UNION - 64)) | (1L << (EXCEPT - 64)) | (1L << (SETMINUS - 64)) | (1L << (INTERSECT - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (ARRAY - 64)) | (1L << (MAP - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (COMMIT - 128)) | (1L << (ROLLBACK - 128)) | (1L << (MACRO - 128)) | (1L << (IGNORE - 128)) | (1L << (BOTH - 128)) | (1L << (LEADING - 128)) | (1L << (TRAILING - 128)) | (1L << (IF - 128)) | (1L << (POSITION - 128)) | (1L << (EXTRACT - 128)) | (1L << (PLUS - 128)) | (1L << (MINUS - 128)) | (1L << (ASTERISK - 128)) | (1L << (DIV - 128)) | (1L << (TILDE - 128)) | (1L << (PERCENTLIT - 128)) | (1L << (BUCKET - 128)) | (1L << (OUT - 128)) | (1L << (OF - 128)) | (1L << (SORT - 128)) | (1L << (CLUSTER - 128)) | (1L << (DISTRIBUTE - 128)) | (1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (UNSET - 192)) | (1L << (TBLPROPERTIES - 192)) | (1L << (DBPROPERTIES - 192)) | (1L << (BUCKETS - 192)) | (1L << (SKEWED - 192)) | (1L << (STORED - 192)) | (1L << (DIRECTORIES - 192)) | (1L << (LOCATION - 192)) | (1L << (EXCHANGE - 192)) | (1L << (ARCHIVE - 192)) | (1L << (UNARCHIVE - 192)) | (1L << (FILEFORMAT - 192)) | (1L << (TOUCH - 192)) | (1L << (COMPACT - 192)) | (1L << (CONCATENATE - 192)) | (1L << (CHANGE - 192)) | (1L << (CASCADE - 192)) | (1L << (RESTRICT - 192)) | (1L << (CLUSTERED - 192)) | (1L << (SORTED - 192)) | (1L << (PURGE - 192)) | (1L << (INPUTFORMAT - 192)) | (1L << (OUTPUTFORMAT - 192)) | (1L << (DATABASE - 192)) | (1L << (DATABASES - 192)) | (1L << (DFS - 192)) | (1L << (TRUNCATE - 192)) | (1L << (ANALYZE - 192)) | (1L << (COMPUTE - 192)) | (1L << (LIST - 192)) | (1L << (STATISTICS - 192)) | (1L << (PARTITIONED - 192)) | (1L << (EXTERNAL - 192)) | (1L << (DEFINED - 192)) | (1L << (REVOKE - 192)) | (1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (ANTI - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)))) != 0) || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (STRING - 261)) | (1L << (BIGINT_LITERAL - 261)) | (1L << (SMALLINT_LITERAL - 261)) | (1L << (TINYINT_LITERAL - 261)) | (1L << (INTEGER_VALUE - 261)) | (1L << (DECIMAL_VALUE - 261)) | (1L << (DOUBLE_LITERAL - 261)) | (1L << (BIGDECIMAL_LITERAL - 261)) | (1L << (IDENTIFIER - 261)) | (1L << (BACKQUOTED_IDENTIFIER - 261)))) != 0)) {
				{
				setState(1754);
				sampleMethod();
				}
			}

			setState(1757);
			match(T__1);
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

	public static class SampleMethodContext extends ParserRuleContext {
		public SampleMethodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sampleMethod; }
	 
		public SampleMethodContext() { }
		public void copyFrom(SampleMethodContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class SampleByRowsContext extends SampleMethodContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode ROWS() { return getToken(sqlParser.ROWS, 0); }
		public SampleByRowsContext(SampleMethodContext ctx) { copyFrom(ctx); }
	}
	public static class SampleByPercentileContext extends SampleMethodContext {
		public Token negativeSign;
		public Token percentage;
		public TerminalNode PERCENTLIT() { return getToken(sqlParser.PERCENTLIT, 0); }
		public TerminalNode INTEGER_VALUE() { return getToken(sqlParser.INTEGER_VALUE, 0); }
		public TerminalNode DECIMAL_VALUE() { return getToken(sqlParser.DECIMAL_VALUE, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public SampleByPercentileContext(SampleMethodContext ctx) { copyFrom(ctx); }
	}
	public static class SampleByBucketContext extends SampleMethodContext {
		public Token sampleType;
		public Token numerator;
		public Token denominator;
		public TerminalNode OUT() { return getToken(sqlParser.OUT, 0); }
		public TerminalNode OF() { return getToken(sqlParser.OF, 0); }
		public TerminalNode BUCKET() { return getToken(sqlParser.BUCKET, 0); }
		public List<TerminalNode> INTEGER_VALUE() { return getTokens(sqlParser.INTEGER_VALUE); }
		public TerminalNode INTEGER_VALUE(int i) {
			return getToken(sqlParser.INTEGER_VALUE, i);
		}
		public TerminalNode ON() { return getToken(sqlParser.ON, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public SampleByBucketContext(SampleMethodContext ctx) { copyFrom(ctx); }
	}
	public static class SampleByBytesContext extends SampleMethodContext {
		public ExpressionContext bytes;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SampleByBytesContext(SampleMethodContext ctx) { copyFrom(ctx); }
	}

	public final SampleMethodContext sampleMethod() throws RecognitionException {
		SampleMethodContext _localctx = new SampleMethodContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_sampleMethod);
		int _la;
		try {
			setState(1783);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,231,_ctx) ) {
			case 1:
				_localctx = new SampleByPercentileContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(1760);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(1759);
					((SampleByPercentileContext)_localctx).negativeSign = match(MINUS);
					}
				}

				setState(1762);
				((SampleByPercentileContext)_localctx).percentage = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==INTEGER_VALUE || _la==DECIMAL_VALUE) ) {
					((SampleByPercentileContext)_localctx).percentage = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1763);
				match(PERCENTLIT);
				}
				break;
			case 2:
				_localctx = new SampleByRowsContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(1764);
				expression();
				setState(1765);
				match(ROWS);
				}
				break;
			case 3:
				_localctx = new SampleByBucketContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(1767);
				((SampleByBucketContext)_localctx).sampleType = match(BUCKET);
				setState(1768);
				((SampleByBucketContext)_localctx).numerator = match(INTEGER_VALUE);
				setState(1769);
				match(OUT);
				setState(1770);
				match(OF);
				setState(1771);
				((SampleByBucketContext)_localctx).denominator = match(INTEGER_VALUE);
				setState(1780);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ON) {
					{
					setState(1772);
					match(ON);
					setState(1778);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,229,_ctx) ) {
					case 1:
						{
						setState(1773);
						identifier();
						}
						break;
					case 2:
						{
						setState(1774);
						qualifiedName();
						setState(1775);
						match(T__0);
						setState(1776);
						match(T__1);
						}
						break;
					}
					}
				}

				}
				break;
			case 4:
				_localctx = new SampleByBytesContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(1782);
				((SampleByBytesContext)_localctx).bytes = expression();
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

	public static class IdentifierListContext extends ParserRuleContext {
		public IdentifierSeqContext identifierSeq() {
			return getRuleContext(IdentifierSeqContext.class,0);
		}
		public IdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierList; }
	}

	public final IdentifierListContext identifierList() throws RecognitionException {
		IdentifierListContext _localctx = new IdentifierListContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_identifierList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1785);
			match(T__0);
			setState(1786);
			identifierSeq();
			setState(1787);
			match(T__1);
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

	public static class IdentifierSeqContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public IdentifierSeqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierSeq; }
	}

	public final IdentifierSeqContext identifierSeq() throws RecognitionException {
		IdentifierSeqContext _localctx = new IdentifierSeqContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_identifierSeq);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1789);
			identifier();
			setState(1794);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,232,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1790);
					match(T__3);
					setState(1791);
					identifier();
					}
					} 
				}
				setState(1796);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,232,_ctx);
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

	public static class OrderedIdentifierListContext extends ParserRuleContext {
		public List<OrderedIdentifierContext> orderedIdentifier() {
			return getRuleContexts(OrderedIdentifierContext.class);
		}
		public OrderedIdentifierContext orderedIdentifier(int i) {
			return getRuleContext(OrderedIdentifierContext.class,i);
		}
		public OrderedIdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderedIdentifierList; }
	}

	public final OrderedIdentifierListContext orderedIdentifierList() throws RecognitionException {
		OrderedIdentifierListContext _localctx = new OrderedIdentifierListContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_orderedIdentifierList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1797);
			match(T__0);
			setState(1798);
			orderedIdentifier();
			setState(1803);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(1799);
				match(T__3);
				setState(1800);
				orderedIdentifier();
				}
				}
				setState(1805);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1806);
			match(T__1);
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

	public static class OrderedIdentifierContext extends ParserRuleContext {
		public Token ordering;
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ASC() { return getToken(sqlParser.ASC, 0); }
		public TerminalNode DESC() { return getToken(sqlParser.DESC, 0); }
		public OrderedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderedIdentifier; }
	}

	public final OrderedIdentifierContext orderedIdentifier() throws RecognitionException {
		OrderedIdentifierContext _localctx = new OrderedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_orderedIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1808);
			identifier();
			setState(1810);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASC || _la==DESC) {
				{
				setState(1809);
				((OrderedIdentifierContext)_localctx).ordering = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==ASC || _la==DESC) ) {
					((OrderedIdentifierContext)_localctx).ordering = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
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

	public static class IdentifierCommentListContext extends ParserRuleContext {
		public List<IdentifierCommentContext> identifierComment() {
			return getRuleContexts(IdentifierCommentContext.class);
		}
		public IdentifierCommentContext identifierComment(int i) {
			return getRuleContext(IdentifierCommentContext.class,i);
		}
		public IdentifierCommentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierCommentList; }
	}

	public final IdentifierCommentListContext identifierCommentList() throws RecognitionException {
		IdentifierCommentListContext _localctx = new IdentifierCommentListContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_identifierCommentList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1812);
			match(T__0);
			setState(1813);
			identifierComment();
			setState(1818);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(1814);
				match(T__3);
				setState(1815);
				identifierComment();
				}
				}
				setState(1820);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1821);
			match(T__1);
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

	public static class IdentifierCommentContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode COMMENT() { return getToken(sqlParser.COMMENT, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public IdentifierCommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierComment; }
	}

	public final IdentifierCommentContext identifierComment() throws RecognitionException {
		IdentifierCommentContext _localctx = new IdentifierCommentContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_identifierComment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1823);
			identifier();
			setState(1826);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMENT) {
				{
				setState(1824);
				match(COMMENT);
				setState(1825);
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

	public static class RelationPrimaryContext extends ParserRuleContext {
		public RelationPrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationPrimary; }
	 
		public RelationPrimaryContext() { }
		public void copyFrom(RelationPrimaryContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TableValuedFunctionContext extends RelationPrimaryContext {
		public FunctionTableContext functionTable() {
			return getRuleContext(FunctionTableContext.class,0);
		}
		public TableValuedFunctionContext(RelationPrimaryContext ctx) { copyFrom(ctx); }
	}
	public static class InlineTableDefault2Context extends RelationPrimaryContext {
		public InlineTableContext inlineTable() {
			return getRuleContext(InlineTableContext.class,0);
		}
		public InlineTableDefault2Context(RelationPrimaryContext ctx) { copyFrom(ctx); }
	}
	public static class AliasedRelationContext extends RelationPrimaryContext {
		public RelationContext relation() {
			return getRuleContext(RelationContext.class,0);
		}
		public TableAliasContext tableAlias() {
			return getRuleContext(TableAliasContext.class,0);
		}
		public SampleContext sample() {
			return getRuleContext(SampleContext.class,0);
		}
		public AliasedRelationContext(RelationPrimaryContext ctx) { copyFrom(ctx); }
	}
	public static class AliasedQueryContext extends RelationPrimaryContext {
		public QueryNoWithContext queryNoWith() {
			return getRuleContext(QueryNoWithContext.class,0);
		}
		public TableAliasContext tableAlias() {
			return getRuleContext(TableAliasContext.class,0);
		}
		public SampleContext sample() {
			return getRuleContext(SampleContext.class,0);
		}
		public AliasedQueryContext(RelationPrimaryContext ctx) { copyFrom(ctx); }
	}
	public static class TableNameContext extends RelationPrimaryContext {
		public TableIdentifierContext tableIdentifier() {
			return getRuleContext(TableIdentifierContext.class,0);
		}
		public TableAliasContext tableAlias() {
			return getRuleContext(TableAliasContext.class,0);
		}
		public SampleContext sample() {
			return getRuleContext(SampleContext.class,0);
		}
		public MatchRecognizeContext matchRecognize() {
			return getRuleContext(MatchRecognizeContext.class,0);
		}
		public TableNameContext(RelationPrimaryContext ctx) { copyFrom(ctx); }
	}

	public final RelationPrimaryContext relationPrimary() throws RecognitionException {
		RelationPrimaryContext _localctx = new RelationPrimaryContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_relationPrimary);
		try {
			setState(1853);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,240,_ctx) ) {
			case 1:
				_localctx = new TableNameContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(1828);
				tableIdentifier();
				setState(1831);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,237,_ctx) ) {
				case 1:
					{
					setState(1829);
					sample();
					}
					break;
				case 2:
					{
					setState(1830);
					matchRecognize();
					}
					break;
				}
				setState(1833);
				tableAlias();
				}
				break;
			case 2:
				_localctx = new AliasedQueryContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(1835);
				match(T__0);
				setState(1836);
				queryNoWith();
				setState(1837);
				match(T__1);
				setState(1839);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,238,_ctx) ) {
				case 1:
					{
					setState(1838);
					sample();
					}
					break;
				}
				setState(1841);
				tableAlias();
				}
				break;
			case 3:
				_localctx = new AliasedRelationContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(1843);
				match(T__0);
				setState(1844);
				relation();
				setState(1845);
				match(T__1);
				setState(1847);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,239,_ctx) ) {
				case 1:
					{
					setState(1846);
					sample();
					}
					break;
				}
				setState(1849);
				tableAlias();
				}
				break;
			case 4:
				_localctx = new InlineTableDefault2Context(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(1851);
				inlineTable();
				}
				break;
			case 5:
				_localctx = new TableValuedFunctionContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(1852);
				functionTable();
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

	public static class MatchRecognizeContext extends ParserRuleContext {
		public TerminalNode MATCH_RECOGNIZE() { return getToken(sqlParser.MATCH_RECOGNIZE, 0); }
		public TerminalNode PATTERN() { return getToken(sqlParser.PATTERN, 0); }
		public Pattern1Context pattern1() {
			return getRuleContext(Pattern1Context.class,0);
		}
		public TerminalNode DEFINE() { return getToken(sqlParser.DEFINE, 0); }
		public List<VariableContext> variable() {
			return getRuleContexts(VariableContext.class);
		}
		public VariableContext variable(int i) {
			return getRuleContext(VariableContext.class,i);
		}
		public List<TerminalNode> AS() { return getTokens(sqlParser.AS); }
		public TerminalNode AS(int i) {
			return getToken(sqlParser.AS, i);
		}
		public List<Condition1Context> condition1() {
			return getRuleContexts(Condition1Context.class);
		}
		public Condition1Context condition1(int i) {
			return getRuleContext(Condition1Context.class,i);
		}
		public TerminalNode PARTITION() { return getToken(sqlParser.PARTITION, 0); }
		public List<TerminalNode> BY() { return getTokens(sqlParser.BY); }
		public TerminalNode BY(int i) {
			return getToken(sqlParser.BY, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ORDER() { return getToken(sqlParser.ORDER, 0); }
		public List<SortItemContext> sortItem() {
			return getRuleContexts(SortItemContext.class);
		}
		public SortItemContext sortItem(int i) {
			return getRuleContext(SortItemContext.class,i);
		}
		public TerminalNode MEASURES() { return getToken(sqlParser.MEASURES, 0); }
		public List<MeasureColumnContext> measureColumn() {
			return getRuleContexts(MeasureColumnContext.class);
		}
		public MeasureColumnContext measureColumn(int i) {
			return getRuleContext(MeasureColumnContext.class,i);
		}
		public TerminalNode ONE() { return getToken(sqlParser.ONE, 0); }
		public List<TerminalNode> ROW() { return getTokens(sqlParser.ROW); }
		public TerminalNode ROW(int i) {
			return getToken(sqlParser.ROW, i);
		}
		public TerminalNode PER() { return getToken(sqlParser.PER, 0); }
		public List<TerminalNode> MATCH() { return getTokens(sqlParser.MATCH); }
		public TerminalNode MATCH(int i) {
			return getToken(sqlParser.MATCH, i);
		}
		public TerminalNode AFTER() { return getToken(sqlParser.AFTER, 0); }
		public TerminalNode WITHIN() { return getToken(sqlParser.WITHIN, 0); }
		public IntervalContext interval() {
			return getRuleContext(IntervalContext.class,0);
		}
		public TerminalNode SKIP1() { return getToken(sqlParser.SKIP1, 0); }
		public TerminalNode TO() { return getToken(sqlParser.TO, 0); }
		public TerminalNode NEXT() { return getToken(sqlParser.NEXT, 0); }
		public TerminalNode PAST() { return getToken(sqlParser.PAST, 0); }
		public TerminalNode LAST() { return getToken(sqlParser.LAST, 0); }
		public TerminalNode FIRST() { return getToken(sqlParser.FIRST, 0); }
		public MatchRecognizeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_matchRecognize; }
	}

	public final MatchRecognizeContext matchRecognize() throws RecognitionException {
		MatchRecognizeContext _localctx = new MatchRecognizeContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_matchRecognize);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1855);
			match(MATCH_RECOGNIZE);
			setState(1856);
			match(T__0);
			setState(1867);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PARTITION) {
				{
				setState(1857);
				match(PARTITION);
				setState(1858);
				match(BY);
				setState(1859);
				expression();
				setState(1864);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1860);
					match(T__3);
					setState(1861);
					expression();
					}
					}
					setState(1866);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1879);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ORDER) {
				{
				setState(1869);
				match(ORDER);
				setState(1870);
				match(BY);
				setState(1871);
				sortItem();
				setState(1876);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1872);
					match(T__3);
					setState(1873);
					sortItem();
					}
					}
					setState(1878);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1890);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MEASURES) {
				{
				setState(1881);
				match(MEASURES);
				setState(1882);
				measureColumn();
				setState(1887);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(1883);
					match(T__3);
					setState(1884);
					measureColumn();
					}
					}
					setState(1889);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1896);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ONE) {
				{
				setState(1892);
				match(ONE);
				setState(1893);
				match(ROW);
				setState(1894);
				match(PER);
				setState(1895);
				match(MATCH);
				}
			}

			setState(1921);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AFTER) {
				{
				setState(1898);
				match(AFTER);
				setState(1899);
				match(MATCH);
				setState(1919);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,248,_ctx) ) {
				case 1:
					{
					setState(1900);
					match(SKIP1);
					setState(1901);
					match(TO);
					setState(1902);
					match(NEXT);
					setState(1903);
					match(ROW);
					}
					break;
				case 2:
					{
					setState(1904);
					match(SKIP1);
					setState(1905);
					match(PAST);
					setState(1906);
					match(LAST);
					setState(1907);
					match(ROW);
					}
					break;
				case 3:
					{
					setState(1908);
					match(SKIP1);
					setState(1909);
					match(TO);
					setState(1910);
					match(FIRST);
					setState(1911);
					variable();
					}
					break;
				case 4:
					{
					setState(1912);
					match(SKIP1);
					setState(1913);
					match(TO);
					setState(1914);
					match(LAST);
					setState(1915);
					variable();
					}
					break;
				case 5:
					{
					setState(1916);
					match(SKIP1);
					setState(1917);
					match(TO);
					setState(1918);
					variable();
					}
					break;
				}
				}
			}

			setState(1923);
			match(PATTERN);
			setState(1924);
			match(T__0);
			setState(1925);
			pattern1();
			setState(1926);
			match(T__1);
			setState(1929);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WITHIN) {
				{
				setState(1927);
				match(WITHIN);
				setState(1928);
				interval();
				}
			}

			setState(1931);
			match(DEFINE);
			setState(1932);
			variable();
			setState(1933);
			match(AS);
			setState(1934);
			condition1();
			setState(1942);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(1935);
				match(T__3);
				setState(1936);
				variable();
				setState(1937);
				match(AS);
				setState(1938);
				condition1();
				}
				}
				setState(1944);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1945);
			match(T__1);
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

	public static class MeasureColumnContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public StrictIdentifierContext strictIdentifier() {
			return getRuleContext(StrictIdentifierContext.class,0);
		}
		public MeasureColumnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_measureColumn; }
	}

	public final MeasureColumnContext measureColumn() throws RecognitionException {
		MeasureColumnContext _localctx = new MeasureColumnContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_measureColumn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1947);
			expression();
			setState(1948);
			match(AS);
			setState(1949);
			strictIdentifier();
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

	public static class Condition1Context extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Condition1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition1; }
	}

	public final Condition1Context condition1() throws RecognitionException {
		Condition1Context _localctx = new Condition1Context(_ctx, getState());
		enterRule(_localctx, 128, RULE_condition1);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1951);
			expression();
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

	public static class VariableContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_variable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1953);
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

	public static class Pattern1Context extends ParserRuleContext {
		public List<PatternTermContext> patternTerm() {
			return getRuleContexts(PatternTermContext.class);
		}
		public PatternTermContext patternTerm(int i) {
			return getRuleContext(PatternTermContext.class,i);
		}
		public List<TerminalNode> PIPE() { return getTokens(sqlParser.PIPE); }
		public TerminalNode PIPE(int i) {
			return getToken(sqlParser.PIPE, i);
		}
		public Pattern1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pattern1; }
	}

	public final Pattern1Context pattern1() throws RecognitionException {
		Pattern1Context _localctx = new Pattern1Context(_ctx, getState());
		enterRule(_localctx, 132, RULE_pattern1);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1955);
			patternTerm();
			setState(1960);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PIPE) {
				{
				{
				setState(1956);
				match(PIPE);
				setState(1957);
				patternTerm();
				}
				}
				setState(1962);
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

	public static class PatternTermContext extends ParserRuleContext {
		public List<PatternFactorContext> patternFactor() {
			return getRuleContexts(PatternFactorContext.class);
		}
		public PatternFactorContext patternFactor(int i) {
			return getRuleContext(PatternFactorContext.class,i);
		}
		public PatternTermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_patternTerm; }
	}

	public final PatternTermContext patternTerm() throws RecognitionException {
		PatternTermContext _localctx = new PatternTermContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_patternTerm);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1963);
			patternFactor();
			setState(1967);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 19)) & ~0x3f) == 0 && ((1L << (_la - 19)) & ((1L << (SELECT - 19)) | (1L << (FROM - 19)) | (1L << (ADD - 19)) | (1L << (AS - 19)) | (1L << (ALL - 19)) | (1L << (ANY - 19)) | (1L << (DISTINCT - 19)) | (1L << (WHERE - 19)) | (1L << (GROUP - 19)) | (1L << (BY - 19)) | (1L << (GROUPING - 19)) | (1L << (SETS - 19)) | (1L << (CUBE - 19)) | (1L << (ROLLUP - 19)) | (1L << (ORDER - 19)) | (1L << (HAVING - 19)) | (1L << (LIMIT - 19)) | (1L << (AT - 19)) | (1L << (OR - 19)) | (1L << (AND - 19)) | (1L << (IN - 19)) | (1L << (NOT - 19)) | (1L << (NO - 19)) | (1L << (EXISTS - 19)) | (1L << (BETWEEN - 19)) | (1L << (LIKE - 19)) | (1L << (RLIKE - 19)) | (1L << (IS - 19)) | (1L << (NULL - 19)) | (1L << (TRUE - 19)) | (1L << (FALSE - 19)) | (1L << (NULLS - 19)) | (1L << (ASC - 19)) | (1L << (DESC - 19)) | (1L << (FOR - 19)) | (1L << (INTERVAL - 19)) | (1L << (CASE - 19)) | (1L << (WHEN - 19)) | (1L << (THEN - 19)) | (1L << (ELSE - 19)) | (1L << (END - 19)) | (1L << (JOIN - 19)) | (1L << (CROSS - 19)) | (1L << (OUTER - 19)) | (1L << (INNER - 19)) | (1L << (LEFT - 19)) | (1L << (SEMI - 19)) | (1L << (RIGHT - 19)) | (1L << (FULL - 19)) | (1L << (NATURAL - 19)) | (1L << (ON - 19)) | (1L << (PIVOT - 19)) | (1L << (LATERAL - 19)) | (1L << (WINDOW - 19)) | (1L << (OVER - 19)) | (1L << (PARTITION - 19)) | (1L << (RANGE - 19)) | (1L << (ROWS - 19)) | (1L << (UNBOUNDED - 19)) | (1L << (PRECEDING - 19)) | (1L << (FOLLOWING - 19)) | (1L << (CURRENT - 19)) | (1L << (FIRST - 19)) | (1L << (AFTER - 19)))) != 0) || ((((_la - 83)) & ~0x3f) == 0 && ((1L << (_la - 83)) & ((1L << (LAST - 83)) | (1L << (ROW - 83)) | (1L << (WITH - 83)) | (1L << (CREATE - 83)) | (1L << (TABLE - 83)) | (1L << (DIRECTORY - 83)) | (1L << (VIEW - 83)) | (1L << (REPLACE - 83)) | (1L << (INSERT - 83)) | (1L << (DELETE - 83)) | (1L << (INTO - 83)) | (1L << (DESCRIBE - 83)) | (1L << (EXPLAIN - 83)) | (1L << (FORMAT - 83)) | (1L << (LOGICAL - 83)) | (1L << (CODEGEN - 83)) | (1L << (COST - 83)) | (1L << (CAST - 83)) | (1L << (SHOW - 83)) | (1L << (TABLES - 83)) | (1L << (COLUMNS - 83)) | (1L << (COLUMN - 83)) | (1L << (USE - 83)) | (1L << (PARTITIONS - 83)) | (1L << (FUNCTIONS - 83)) | (1L << (DROP - 83)) | (1L << (UNION - 83)) | (1L << (EXCEPT - 83)) | (1L << (SETMINUS - 83)) | (1L << (INTERSECT - 83)) | (1L << (TO - 83)) | (1L << (TABLESAMPLE - 83)) | (1L << (STRATIFY - 83)) | (1L << (ALTER - 83)) | (1L << (RENAME - 83)) | (1L << (ARRAY - 83)) | (1L << (MAP - 83)) | (1L << (STRUCT - 83)) | (1L << (COMMENT - 83)) | (1L << (SET - 83)) | (1L << (RESET - 83)) | (1L << (DATA - 83)) | (1L << (START - 83)) | (1L << (TRANSACTION - 83)) | (1L << (COMMIT - 83)) | (1L << (ROLLBACK - 83)) | (1L << (MACRO - 83)) | (1L << (IGNORE - 83)) | (1L << (BOTH - 83)) | (1L << (LEADING - 83)) | (1L << (TRAILING - 83)) | (1L << (IF - 83)) | (1L << (POSITION - 83)) | (1L << (EXTRACT - 83)))) != 0) || ((((_la - 151)) & ~0x3f) == 0 && ((1L << (_la - 151)) & ((1L << (DIV - 151)) | (1L << (PERCENTLIT - 151)) | (1L << (BUCKET - 151)) | (1L << (OUT - 151)) | (1L << (OF - 151)) | (1L << (SORT - 151)) | (1L << (CLUSTER - 151)) | (1L << (DISTRIBUTE - 151)) | (1L << (OVERWRITE - 151)) | (1L << (TRANSFORM - 151)) | (1L << (REDUCE - 151)) | (1L << (SERDE - 151)) | (1L << (SERDEPROPERTIES - 151)) | (1L << (RECORDREADER - 151)) | (1L << (RECORDWRITER - 151)) | (1L << (DELIMITED - 151)) | (1L << (FIELDS - 151)) | (1L << (TERMINATED - 151)) | (1L << (COLLECTION - 151)) | (1L << (ITEMS - 151)) | (1L << (KEYS - 151)) | (1L << (ESCAPED - 151)) | (1L << (LINES - 151)) | (1L << (SEPARATED - 151)) | (1L << (FUNCTION - 151)) | (1L << (EXTENDED - 151)) | (1L << (REFRESH - 151)) | (1L << (CLEAR - 151)) | (1L << (CACHE - 151)) | (1L << (UNCACHE - 151)) | (1L << (LAZY - 151)) | (1L << (FORMATTED - 151)) | (1L << (GLOBAL - 151)) | (1L << (TEMPORARY - 151)) | (1L << (OPTIONS - 151)) | (1L << (UNSET - 151)) | (1L << (TBLPROPERTIES - 151)) | (1L << (DBPROPERTIES - 151)) | (1L << (BUCKETS - 151)) | (1L << (SKEWED - 151)) | (1L << (STORED - 151)) | (1L << (DIRECTORIES - 151)) | (1L << (LOCATION - 151)) | (1L << (EXCHANGE - 151)) | (1L << (ARCHIVE - 151)) | (1L << (UNARCHIVE - 151)) | (1L << (FILEFORMAT - 151)) | (1L << (TOUCH - 151)) | (1L << (COMPACT - 151)) | (1L << (CONCATENATE - 151)) | (1L << (CHANGE - 151)) | (1L << (CASCADE - 151)) | (1L << (RESTRICT - 151)) | (1L << (CLUSTERED - 151)) | (1L << (SORTED - 151)) | (1L << (PURGE - 151)) | (1L << (INPUTFORMAT - 151)) | (1L << (OUTPUTFORMAT - 151)))) != 0) || ((((_la - 215)) & ~0x3f) == 0 && ((1L << (_la - 215)) & ((1L << (DATABASE - 215)) | (1L << (DATABASES - 215)) | (1L << (DFS - 215)) | (1L << (TRUNCATE - 215)) | (1L << (ANALYZE - 215)) | (1L << (COMPUTE - 215)) | (1L << (LIST - 215)) | (1L << (STATISTICS - 215)) | (1L << (PARTITIONED - 215)) | (1L << (EXTERNAL - 215)) | (1L << (DEFINED - 215)) | (1L << (REVOKE - 215)) | (1L << (GRANT - 215)) | (1L << (LOCK - 215)) | (1L << (UNLOCK - 215)) | (1L << (MSCK - 215)) | (1L << (REPAIR - 215)) | (1L << (RECOVER - 215)) | (1L << (EXPORT - 215)) | (1L << (IMPORT - 215)) | (1L << (LOAD - 215)) | (1L << (ROLE - 215)) | (1L << (ROLES - 215)) | (1L << (COMPACTIONS - 215)) | (1L << (PRINCIPALS - 215)) | (1L << (TRANSACTIONS - 215)) | (1L << (INDEX - 215)) | (1L << (INDEXES - 215)) | (1L << (LOCKS - 215)) | (1L << (OPTION - 215)) | (1L << (ANTI - 215)) | (1L << (LOCAL - 215)) | (1L << (INPATH - 215)) | (1L << (IDENTIFIER - 215)) | (1L << (BACKQUOTED_IDENTIFIER - 215)))) != 0)) {
				{
				{
				setState(1964);
				patternFactor();
				}
				}
				setState(1969);
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

	public static class PatternFactorContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public PatternQuantifierContext patternQuantifier() {
			return getRuleContext(PatternQuantifierContext.class,0);
		}
		public PatternFactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_patternFactor; }
	}

	public final PatternFactorContext patternFactor() throws RecognitionException {
		PatternFactorContext _localctx = new PatternFactorContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_patternFactor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1970);
			variable();
			setState(1972);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10))) != 0) || _la==PLUS || _la==ASTERISK) {
				{
				setState(1971);
				patternQuantifier();
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

	public static class PatternQuantifierContext extends ParserRuleContext {
		public TerminalNode ASTERISK() { return getToken(sqlParser.ASTERISK, 0); }
		public TerminalNode PLUS() { return getToken(sqlParser.PLUS, 0); }
		public MinRepeatContext minRepeat() {
			return getRuleContext(MinRepeatContext.class,0);
		}
		public MaxRepeatContext maxRepeat() {
			return getRuleContext(MaxRepeatContext.class,0);
		}
		public RepeatContext repeat() {
			return getRuleContext(RepeatContext.class,0);
		}
		public PatternQuantifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_patternQuantifier; }
	}

	public final PatternQuantifierContext patternQuantifier() throws RecognitionException {
		PatternQuantifierContext _localctx = new PatternQuantifierContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_patternQuantifier);
		int _la;
		try {
			setState(1996);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,258,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1974);
				match(ASTERISK);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1975);
				match(T__6);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1976);
				match(PLUS);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1977);
				match(T__7);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1978);
				match(T__8);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1979);
				match(T__9);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1980);
				match(T__10);
				{
				setState(1982);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INTEGER_VALUE) {
					{
					setState(1981);
					minRepeat();
					}
				}

				setState(1984);
				match(T__3);
				setState(1986);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INTEGER_VALUE) {
					{
					setState(1985);
					maxRepeat();
					}
				}

				}
				setState(1988);
				match(T__11);
				setState(1990);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__8) {
					{
					setState(1989);
					match(T__8);
					}
				}

				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1992);
				match(T__10);
				setState(1993);
				repeat();
				setState(1994);
				match(T__11);
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

	public static class MinRepeatContext extends ParserRuleContext {
		public TerminalNode INTEGER_VALUE() { return getToken(sqlParser.INTEGER_VALUE, 0); }
		public MinRepeatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_minRepeat; }
	}

	public final MinRepeatContext minRepeat() throws RecognitionException {
		MinRepeatContext _localctx = new MinRepeatContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_minRepeat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1998);
			match(INTEGER_VALUE);
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

	public static class MaxRepeatContext extends ParserRuleContext {
		public TerminalNode INTEGER_VALUE() { return getToken(sqlParser.INTEGER_VALUE, 0); }
		public MaxRepeatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_maxRepeat; }
	}

	public final MaxRepeatContext maxRepeat() throws RecognitionException {
		MaxRepeatContext _localctx = new MaxRepeatContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_maxRepeat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2000);
			match(INTEGER_VALUE);
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

	public static class RepeatContext extends ParserRuleContext {
		public TerminalNode INTEGER_VALUE() { return getToken(sqlParser.INTEGER_VALUE, 0); }
		public RepeatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_repeat; }
	}

	public final RepeatContext repeat() throws RecognitionException {
		RepeatContext _localctx = new RepeatContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_repeat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2002);
			match(INTEGER_VALUE);
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

	public static class InlineTableContext extends ParserRuleContext {
		public TerminalNode VALUES() { return getToken(sqlParser.VALUES, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TableAliasContext tableAlias() {
			return getRuleContext(TableAliasContext.class,0);
		}
		public InlineTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineTable; }
	}

	public final InlineTableContext inlineTable() throws RecognitionException {
		InlineTableContext _localctx = new InlineTableContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_inlineTable);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2004);
			match(VALUES);
			setState(2005);
			expression();
			setState(2010);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,259,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(2006);
					match(T__3);
					setState(2007);
					expression();
					}
					} 
				}
				setState(2012);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,259,_ctx);
			}
			setState(2013);
			tableAlias();
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

	public static class FunctionTableContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TableAliasContext tableAlias() {
			return getRuleContext(TableAliasContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public FunctionTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionTable; }
	}

	public final FunctionTableContext functionTable() throws RecognitionException {
		FunctionTableContext _localctx = new FunctionTableContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_functionTable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2015);
			identifier();
			setState(2016);
			match(T__0);
			setState(2025);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << JOIN) | (1L << CROSS) | (1L << OUTER) | (1L << INNER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LEFT - 64)) | (1L << (SEMI - 64)) | (1L << (RIGHT - 64)) | (1L << (FULL - 64)) | (1L << (NATURAL - 64)) | (1L << (ON - 64)) | (1L << (PIVOT - 64)) | (1L << (LATERAL - 64)) | (1L << (WINDOW - 64)) | (1L << (OVER - 64)) | (1L << (PARTITION - 64)) | (1L << (RANGE - 64)) | (1L << (ROWS - 64)) | (1L << (UNBOUNDED - 64)) | (1L << (PRECEDING - 64)) | (1L << (FOLLOWING - 64)) | (1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (ROW - 64)) | (1L << (WITH - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (UNION - 64)) | (1L << (EXCEPT - 64)) | (1L << (SETMINUS - 64)) | (1L << (INTERSECT - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (ARRAY - 64)) | (1L << (MAP - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (COMMIT - 128)) | (1L << (ROLLBACK - 128)) | (1L << (MACRO - 128)) | (1L << (IGNORE - 128)) | (1L << (BOTH - 128)) | (1L << (LEADING - 128)) | (1L << (TRAILING - 128)) | (1L << (IF - 128)) | (1L << (POSITION - 128)) | (1L << (EXTRACT - 128)) | (1L << (PLUS - 128)) | (1L << (MINUS - 128)) | (1L << (ASTERISK - 128)) | (1L << (DIV - 128)) | (1L << (TILDE - 128)) | (1L << (PERCENTLIT - 128)) | (1L << (BUCKET - 128)) | (1L << (OUT - 128)) | (1L << (OF - 128)) | (1L << (SORT - 128)) | (1L << (CLUSTER - 128)) | (1L << (DISTRIBUTE - 128)) | (1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (UNSET - 192)) | (1L << (TBLPROPERTIES - 192)) | (1L << (DBPROPERTIES - 192)) | (1L << (BUCKETS - 192)) | (1L << (SKEWED - 192)) | (1L << (STORED - 192)) | (1L << (DIRECTORIES - 192)) | (1L << (LOCATION - 192)) | (1L << (EXCHANGE - 192)) | (1L << (ARCHIVE - 192)) | (1L << (UNARCHIVE - 192)) | (1L << (FILEFORMAT - 192)) | (1L << (TOUCH - 192)) | (1L << (COMPACT - 192)) | (1L << (CONCATENATE - 192)) | (1L << (CHANGE - 192)) | (1L << (CASCADE - 192)) | (1L << (RESTRICT - 192)) | (1L << (CLUSTERED - 192)) | (1L << (SORTED - 192)) | (1L << (PURGE - 192)) | (1L << (INPUTFORMAT - 192)) | (1L << (OUTPUTFORMAT - 192)) | (1L << (DATABASE - 192)) | (1L << (DATABASES - 192)) | (1L << (DFS - 192)) | (1L << (TRUNCATE - 192)) | (1L << (ANALYZE - 192)) | (1L << (COMPUTE - 192)) | (1L << (LIST - 192)) | (1L << (STATISTICS - 192)) | (1L << (PARTITIONED - 192)) | (1L << (EXTERNAL - 192)) | (1L << (DEFINED - 192)) | (1L << (REVOKE - 192)) | (1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (ANTI - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)))) != 0) || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (STRING - 261)) | (1L << (BIGINT_LITERAL - 261)) | (1L << (SMALLINT_LITERAL - 261)) | (1L << (TINYINT_LITERAL - 261)) | (1L << (INTEGER_VALUE - 261)) | (1L << (DECIMAL_VALUE - 261)) | (1L << (DOUBLE_LITERAL - 261)) | (1L << (BIGDECIMAL_LITERAL - 261)) | (1L << (IDENTIFIER - 261)) | (1L << (BACKQUOTED_IDENTIFIER - 261)))) != 0)) {
				{
				setState(2017);
				expression();
				setState(2022);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(2018);
					match(T__3);
					setState(2019);
					expression();
					}
					}
					setState(2024);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(2027);
			match(T__1);
			setState(2028);
			tableAlias();
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

	public static class TableAliasContext extends ParserRuleContext {
		public StrictIdentifierContext strictIdentifier() {
			return getRuleContext(StrictIdentifierContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TableAliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableAlias; }
	}

	public final TableAliasContext tableAlias() throws RecognitionException {
		TableAliasContext _localctx = new TableAliasContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_tableAlias);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2037);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,264,_ctx) ) {
			case 1:
				{
				setState(2031);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,262,_ctx) ) {
				case 1:
					{
					setState(2030);
					match(AS);
					}
					break;
				}
				setState(2033);
				strictIdentifier();
				setState(2035);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,263,_ctx) ) {
				case 1:
					{
					setState(2034);
					identifierList();
					}
					break;
				}
				}
				break;
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

	public static class RowFormatContext extends ParserRuleContext {
		public RowFormatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rowFormat; }
	 
		public RowFormatContext() { }
		public void copyFrom(RowFormatContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RowFormatSerdeContext extends RowFormatContext {
		public Token name;
		public TablePropertyListContext props;
		public TerminalNode ROW() { return getToken(sqlParser.ROW, 0); }
		public TerminalNode FORMAT() { return getToken(sqlParser.FORMAT, 0); }
		public TerminalNode SERDE() { return getToken(sqlParser.SERDE, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TerminalNode WITH() { return getToken(sqlParser.WITH, 0); }
		public TerminalNode SERDEPROPERTIES() { return getToken(sqlParser.SERDEPROPERTIES, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public RowFormatSerdeContext(RowFormatContext ctx) { copyFrom(ctx); }
	}
	public static class RowFormatDelimitedContext extends RowFormatContext {
		public Token fieldsTerminatedBy;
		public Token escapedBy;
		public Token collectionItemsTerminatedBy;
		public Token keysTerminatedBy;
		public Token linesSeparatedBy;
		public Token nullDefinedAs;
		public TerminalNode ROW() { return getToken(sqlParser.ROW, 0); }
		public TerminalNode FORMAT() { return getToken(sqlParser.FORMAT, 0); }
		public TerminalNode DELIMITED() { return getToken(sqlParser.DELIMITED, 0); }
		public TerminalNode FIELDS() { return getToken(sqlParser.FIELDS, 0); }
		public List<TerminalNode> TERMINATED() { return getTokens(sqlParser.TERMINATED); }
		public TerminalNode TERMINATED(int i) {
			return getToken(sqlParser.TERMINATED, i);
		}
		public List<TerminalNode> BY() { return getTokens(sqlParser.BY); }
		public TerminalNode BY(int i) {
			return getToken(sqlParser.BY, i);
		}
		public TerminalNode COLLECTION() { return getToken(sqlParser.COLLECTION, 0); }
		public TerminalNode ITEMS() { return getToken(sqlParser.ITEMS, 0); }
		public TerminalNode MAP() { return getToken(sqlParser.MAP, 0); }
		public TerminalNode KEYS() { return getToken(sqlParser.KEYS, 0); }
		public TerminalNode LINES() { return getToken(sqlParser.LINES, 0); }
		public TerminalNode NULL() { return getToken(sqlParser.NULL, 0); }
		public TerminalNode DEFINED() { return getToken(sqlParser.DEFINED, 0); }
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public List<TerminalNode> STRING() { return getTokens(sqlParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(sqlParser.STRING, i);
		}
		public TerminalNode ESCAPED() { return getToken(sqlParser.ESCAPED, 0); }
		public RowFormatDelimitedContext(RowFormatContext ctx) { copyFrom(ctx); }
	}

	public final RowFormatContext rowFormat() throws RecognitionException {
		RowFormatContext _localctx = new RowFormatContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_rowFormat);
		try {
			setState(2088);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,272,_ctx) ) {
			case 1:
				_localctx = new RowFormatSerdeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2039);
				match(ROW);
				setState(2040);
				match(FORMAT);
				setState(2041);
				match(SERDE);
				setState(2042);
				((RowFormatSerdeContext)_localctx).name = match(STRING);
				setState(2046);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,265,_ctx) ) {
				case 1:
					{
					setState(2043);
					match(WITH);
					setState(2044);
					match(SERDEPROPERTIES);
					setState(2045);
					((RowFormatSerdeContext)_localctx).props = tablePropertyList();
					}
					break;
				}
				}
				break;
			case 2:
				_localctx = new RowFormatDelimitedContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(2048);
				match(ROW);
				setState(2049);
				match(FORMAT);
				setState(2050);
				match(DELIMITED);
				setState(2060);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,267,_ctx) ) {
				case 1:
					{
					setState(2051);
					match(FIELDS);
					setState(2052);
					match(TERMINATED);
					setState(2053);
					match(BY);
					setState(2054);
					((RowFormatDelimitedContext)_localctx).fieldsTerminatedBy = match(STRING);
					setState(2058);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,266,_ctx) ) {
					case 1:
						{
						setState(2055);
						match(ESCAPED);
						setState(2056);
						match(BY);
						setState(2057);
						((RowFormatDelimitedContext)_localctx).escapedBy = match(STRING);
						}
						break;
					}
					}
					break;
				}
				setState(2067);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,268,_ctx) ) {
				case 1:
					{
					setState(2062);
					match(COLLECTION);
					setState(2063);
					match(ITEMS);
					setState(2064);
					match(TERMINATED);
					setState(2065);
					match(BY);
					setState(2066);
					((RowFormatDelimitedContext)_localctx).collectionItemsTerminatedBy = match(STRING);
					}
					break;
				}
				setState(2074);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,269,_ctx) ) {
				case 1:
					{
					setState(2069);
					match(MAP);
					setState(2070);
					match(KEYS);
					setState(2071);
					match(TERMINATED);
					setState(2072);
					match(BY);
					setState(2073);
					((RowFormatDelimitedContext)_localctx).keysTerminatedBy = match(STRING);
					}
					break;
				}
				setState(2080);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,270,_ctx) ) {
				case 1:
					{
					setState(2076);
					match(LINES);
					setState(2077);
					match(TERMINATED);
					setState(2078);
					match(BY);
					setState(2079);
					((RowFormatDelimitedContext)_localctx).linesSeparatedBy = match(STRING);
					}
					break;
				}
				setState(2086);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,271,_ctx) ) {
				case 1:
					{
					setState(2082);
					match(NULL);
					setState(2083);
					match(DEFINED);
					setState(2084);
					match(AS);
					setState(2085);
					((RowFormatDelimitedContext)_localctx).nullDefinedAs = match(STRING);
					}
					break;
				}
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

	public static class TableIdentifierContext extends ParserRuleContext {
		public IdentifierContext db;
		public IdentifierContext table;
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode LATERAL() { return getToken(sqlParser.LATERAL, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public FunctionIdentifierContext functionIdentifier() {
			return getRuleContext(FunctionIdentifierContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode UNNEST() { return getToken(sqlParser.UNNEST, 0); }
		public TableIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableIdentifier; }
	}

	public final TableIdentifierContext tableIdentifier() throws RecognitionException {
		TableIdentifierContext _localctx = new TableIdentifierContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_tableIdentifier);
		int _la;
		try {
			setState(2117);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,275,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2093);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,273,_ctx) ) {
				case 1:
					{
					setState(2090);
					((TableIdentifierContext)_localctx).db = identifier();
					setState(2091);
					match(T__2);
					}
					break;
				}
				setState(2095);
				((TableIdentifierContext)_localctx).table = identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2096);
				match(LATERAL);
				setState(2097);
				match(TABLE);
				setState(2098);
				match(T__0);
				setState(2099);
				functionIdentifier();
				setState(2100);
				match(T__0);
				setState(2101);
				expression();
				setState(2106);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(2102);
					match(T__3);
					setState(2103);
					expression();
					}
					}
					setState(2108);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(2109);
				match(T__1);
				setState(2110);
				match(T__1);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2112);
				match(UNNEST);
				setState(2113);
				match(T__0);
				setState(2114);
				expression();
				setState(2115);
				match(T__1);
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

	public static class FunctionIdentifierContext extends ParserRuleContext {
		public IdentifierContext db;
		public IdentifierContext j_function;
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public FunctionIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionIdentifier; }
	}

	public final FunctionIdentifierContext functionIdentifier() throws RecognitionException {
		FunctionIdentifierContext _localctx = new FunctionIdentifierContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_functionIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2122);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,276,_ctx) ) {
			case 1:
				{
				setState(2119);
				((FunctionIdentifierContext)_localctx).db = identifier();
				setState(2120);
				match(T__2);
				}
				break;
			}
			setState(2124);
			((FunctionIdentifierContext)_localctx).j_function = identifier();
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

	public static class NamedExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public NamedExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedExpression; }
	}

	public final NamedExpressionContext namedExpression() throws RecognitionException {
		NamedExpressionContext _localctx = new NamedExpressionContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_namedExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2126);
			expression();
			setState(2134);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,279,_ctx) ) {
			case 1:
				{
				setState(2128);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,277,_ctx) ) {
				case 1:
					{
					setState(2127);
					match(AS);
					}
					break;
				}
				setState(2132);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case SELECT:
				case FROM:
				case ADD:
				case AS:
				case ALL:
				case ANY:
				case DISTINCT:
				case WHERE:
				case GROUP:
				case BY:
				case GROUPING:
				case SETS:
				case CUBE:
				case ROLLUP:
				case ORDER:
				case HAVING:
				case LIMIT:
				case AT:
				case OR:
				case AND:
				case IN:
				case NOT:
				case NO:
				case EXISTS:
				case BETWEEN:
				case LIKE:
				case RLIKE:
				case IS:
				case NULL:
				case TRUE:
				case FALSE:
				case NULLS:
				case ASC:
				case DESC:
				case FOR:
				case INTERVAL:
				case CASE:
				case WHEN:
				case THEN:
				case ELSE:
				case END:
				case JOIN:
				case CROSS:
				case OUTER:
				case INNER:
				case LEFT:
				case SEMI:
				case RIGHT:
				case FULL:
				case NATURAL:
				case ON:
				case PIVOT:
				case LATERAL:
				case WINDOW:
				case OVER:
				case PARTITION:
				case RANGE:
				case ROWS:
				case UNBOUNDED:
				case PRECEDING:
				case FOLLOWING:
				case CURRENT:
				case FIRST:
				case AFTER:
				case LAST:
				case ROW:
				case WITH:
				case CREATE:
				case TABLE:
				case DIRECTORY:
				case VIEW:
				case REPLACE:
				case INSERT:
				case DELETE:
				case INTO:
				case DESCRIBE:
				case EXPLAIN:
				case FORMAT:
				case LOGICAL:
				case CODEGEN:
				case COST:
				case CAST:
				case SHOW:
				case TABLES:
				case COLUMNS:
				case COLUMN:
				case USE:
				case PARTITIONS:
				case FUNCTIONS:
				case DROP:
				case UNION:
				case EXCEPT:
				case SETMINUS:
				case INTERSECT:
				case TO:
				case TABLESAMPLE:
				case STRATIFY:
				case ALTER:
				case RENAME:
				case ARRAY:
				case MAP:
				case STRUCT:
				case COMMENT:
				case SET:
				case RESET:
				case DATA:
				case START:
				case TRANSACTION:
				case COMMIT:
				case ROLLBACK:
				case MACRO:
				case IGNORE:
				case BOTH:
				case LEADING:
				case TRAILING:
				case IF:
				case POSITION:
				case EXTRACT:
				case DIV:
				case PERCENTLIT:
				case BUCKET:
				case OUT:
				case OF:
				case SORT:
				case CLUSTER:
				case DISTRIBUTE:
				case OVERWRITE:
				case TRANSFORM:
				case REDUCE:
				case SERDE:
				case SERDEPROPERTIES:
				case RECORDREADER:
				case RECORDWRITER:
				case DELIMITED:
				case FIELDS:
				case TERMINATED:
				case COLLECTION:
				case ITEMS:
				case KEYS:
				case ESCAPED:
				case LINES:
				case SEPARATED:
				case FUNCTION:
				case EXTENDED:
				case REFRESH:
				case CLEAR:
				case CACHE:
				case UNCACHE:
				case LAZY:
				case FORMATTED:
				case GLOBAL:
				case TEMPORARY:
				case OPTIONS:
				case UNSET:
				case TBLPROPERTIES:
				case DBPROPERTIES:
				case BUCKETS:
				case SKEWED:
				case STORED:
				case DIRECTORIES:
				case LOCATION:
				case EXCHANGE:
				case ARCHIVE:
				case UNARCHIVE:
				case FILEFORMAT:
				case TOUCH:
				case COMPACT:
				case CONCATENATE:
				case CHANGE:
				case CASCADE:
				case RESTRICT:
				case CLUSTERED:
				case SORTED:
				case PURGE:
				case INPUTFORMAT:
				case OUTPUTFORMAT:
				case DATABASE:
				case DATABASES:
				case DFS:
				case TRUNCATE:
				case ANALYZE:
				case COMPUTE:
				case LIST:
				case STATISTICS:
				case PARTITIONED:
				case EXTERNAL:
				case DEFINED:
				case REVOKE:
				case GRANT:
				case LOCK:
				case UNLOCK:
				case MSCK:
				case REPAIR:
				case RECOVER:
				case EXPORT:
				case IMPORT:
				case LOAD:
				case ROLE:
				case ROLES:
				case COMPACTIONS:
				case PRINCIPALS:
				case TRANSACTIONS:
				case INDEX:
				case INDEXES:
				case LOCKS:
				case OPTION:
				case ANTI:
				case LOCAL:
				case INPATH:
				case IDENTIFIER:
				case BACKQUOTED_IDENTIFIER:
					{
					setState(2130);
					identifier();
					}
					break;
				case T__0:
					{
					setState(2131);
					identifierList();
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

	public static class NamedExpressionSeqContext extends ParserRuleContext {
		public List<NamedExpressionContext> namedExpression() {
			return getRuleContexts(NamedExpressionContext.class);
		}
		public NamedExpressionContext namedExpression(int i) {
			return getRuleContext(NamedExpressionContext.class,i);
		}
		public NamedExpressionSeqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedExpressionSeq; }
	}

	public final NamedExpressionSeqContext namedExpressionSeq() throws RecognitionException {
		NamedExpressionSeqContext _localctx = new NamedExpressionSeqContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_namedExpressionSeq);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2136);
			namedExpression();
			setState(2141);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,280,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(2137);
					match(T__3);
					setState(2138);
					namedExpression();
					}
					} 
				}
				setState(2143);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,280,_ctx);
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

	public static class ExpressionContext extends ParserRuleContext {
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2144);
			booleanExpression(0);
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

	public static class BooleanExpressionContext extends ParserRuleContext {
		public BooleanExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanExpression; }
	 
		public BooleanExpressionContext() { }
		public void copyFrom(BooleanExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LogicalNotContext extends BooleanExpressionContext {
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public LogicalNotContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PredicatedContext extends BooleanExpressionContext {
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public PredicateContext predicate() {
			return getRuleContext(PredicateContext.class,0);
		}
		public PredicatedContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExistsContext extends BooleanExpressionContext {
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public ExistsContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalBinaryContext extends BooleanExpressionContext {
		public BooleanExpressionContext left;
		public Token operator;
		public BooleanExpressionContext right;
		public List<BooleanExpressionContext> booleanExpression() {
			return getRuleContexts(BooleanExpressionContext.class);
		}
		public BooleanExpressionContext booleanExpression(int i) {
			return getRuleContext(BooleanExpressionContext.class,i);
		}
		public TerminalNode AND() { return getToken(sqlParser.AND, 0); }
		public TerminalNode OR() { return getToken(sqlParser.OR, 0); }
		public LogicalBinaryContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}

	public final BooleanExpressionContext booleanExpression() throws RecognitionException {
		return booleanExpression(0);
	}

	private BooleanExpressionContext booleanExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		BooleanExpressionContext _localctx = new BooleanExpressionContext(_ctx, _parentState);
		BooleanExpressionContext _prevctx = _localctx;
		int _startState = 164;
		enterRecursionRule(_localctx, 164, RULE_booleanExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2158);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,282,_ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(2147);
				match(NOT);
				setState(2148);
				booleanExpression(5);
				}
				break;
			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2149);
				match(EXISTS);
				setState(2150);
				match(T__0);
				setState(2151);
				query();
				setState(2152);
				match(T__1);
				}
				break;
			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2154);
				valueExpression(0);
				setState(2156);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,281,_ctx) ) {
				case 1:
					{
					setState(2155);
					predicate();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(2168);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,284,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(2166);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,283,_ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(2160);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(2161);
						((LogicalBinaryContext)_localctx).operator = match(AND);
						setState(2162);
						((LogicalBinaryContext)_localctx).right = booleanExpression(3);
						}
						break;
					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(2163);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(2164);
						((LogicalBinaryContext)_localctx).operator = match(OR);
						setState(2165);
						((LogicalBinaryContext)_localctx).right = booleanExpression(2);
						}
						break;
					}
					} 
				}
				setState(2170);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,284,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PredicateContext extends ParserRuleContext {
		public Token kind;
		public ValueExpressionContext lower;
		public ValueExpressionContext upper;
		public ValueExpressionContext pattern;
		public ValueExpressionContext right;
		public TerminalNode AND() { return getToken(sqlParser.AND, 0); }
		public TerminalNode BETWEEN() { return getToken(sqlParser.BETWEEN, 0); }
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode IN() { return getToken(sqlParser.IN, 0); }
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public TerminalNode RLIKE() { return getToken(sqlParser.RLIKE, 0); }
		public TerminalNode LIKE() { return getToken(sqlParser.LIKE, 0); }
		public TerminalNode IS() { return getToken(sqlParser.IS, 0); }
		public TerminalNode NULL() { return getToken(sqlParser.NULL, 0); }
		public TerminalNode FROM() { return getToken(sqlParser.FROM, 0); }
		public TerminalNode DISTINCT() { return getToken(sqlParser.DISTINCT, 0); }
		public PredicateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_predicate; }
	}

	public final PredicateContext predicate() throws RecognitionException {
		PredicateContext _localctx = new PredicateContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_predicate);
		int _la;
		try {
			setState(2219);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,292,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2172);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(2171);
					match(NOT);
					}
				}

				setState(2174);
				((PredicateContext)_localctx).kind = match(BETWEEN);
				setState(2175);
				((PredicateContext)_localctx).lower = valueExpression(0);
				setState(2176);
				match(AND);
				setState(2177);
				((PredicateContext)_localctx).upper = valueExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2180);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(2179);
					match(NOT);
					}
				}

				setState(2182);
				((PredicateContext)_localctx).kind = match(IN);
				setState(2183);
				match(T__0);
				setState(2184);
				expression();
				setState(2189);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(2185);
					match(T__3);
					setState(2186);
					expression();
					}
					}
					setState(2191);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(2192);
				match(T__1);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2195);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(2194);
					match(NOT);
					}
				}

				setState(2197);
				((PredicateContext)_localctx).kind = match(IN);
				setState(2198);
				match(T__0);
				setState(2199);
				query();
				setState(2200);
				match(T__1);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2203);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(2202);
					match(NOT);
					}
				}

				setState(2205);
				((PredicateContext)_localctx).kind = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==LIKE || _la==RLIKE) ) {
					((PredicateContext)_localctx).kind = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(2206);
				((PredicateContext)_localctx).pattern = valueExpression(0);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2207);
				match(IS);
				setState(2209);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(2208);
					match(NOT);
					}
				}

				setState(2211);
				((PredicateContext)_localctx).kind = match(NULL);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2212);
				match(IS);
				setState(2214);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(2213);
					match(NOT);
					}
				}

				setState(2216);
				((PredicateContext)_localctx).kind = match(DISTINCT);
				setState(2217);
				match(FROM);
				setState(2218);
				((PredicateContext)_localctx).right = valueExpression(0);
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

	public static class ValueExpressionContext extends ParserRuleContext {
		public ValueExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valueExpression; }
	 
		public ValueExpressionContext() { }
		public void copyFrom(ValueExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ValueExpressionDefaultContext extends ValueExpressionContext {
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public ValueExpressionDefaultContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ComparisonContext extends ValueExpressionContext {
		public ValueExpressionContext left;
		public ValueExpressionContext right;
		public ComparisonOperatorContext comparisonOperator() {
			return getRuleContext(ComparisonOperatorContext.class,0);
		}
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public ComparisonContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArithmeticBinaryContext extends ValueExpressionContext {
		public ValueExpressionContext left;
		public Token operator;
		public ValueExpressionContext right;
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public TerminalNode ASTERISK() { return getToken(sqlParser.ASTERISK, 0); }
		public TerminalNode SLASH() { return getToken(sqlParser.SLASH, 0); }
		public TerminalNode PERCENT() { return getToken(sqlParser.PERCENT, 0); }
		public TerminalNode DIV() { return getToken(sqlParser.DIV, 0); }
		public TerminalNode PLUS() { return getToken(sqlParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public TerminalNode CONCAT_PIPE() { return getToken(sqlParser.CONCAT_PIPE, 0); }
		public TerminalNode AMPERSAND() { return getToken(sqlParser.AMPERSAND, 0); }
		public TerminalNode HAT() { return getToken(sqlParser.HAT, 0); }
		public TerminalNode PIPE() { return getToken(sqlParser.PIPE, 0); }
		public ArithmeticBinaryContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArithmeticUnaryContext extends ValueExpressionContext {
		public Token operator;
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public TerminalNode PLUS() { return getToken(sqlParser.PLUS, 0); }
		public TerminalNode TILDE() { return getToken(sqlParser.TILDE, 0); }
		public ArithmeticUnaryContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ValueExpressionContext valueExpression() throws RecognitionException {
		return valueExpression(0);
	}

	private ValueExpressionContext valueExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ValueExpressionContext _localctx = new ValueExpressionContext(_ctx, _parentState);
		ValueExpressionContext _prevctx = _localctx;
		int _startState = 168;
		enterRecursionRule(_localctx, 168, RULE_valueExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2225);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,293,_ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(2222);
				primaryExpression(0);
				}
				break;
			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2223);
				((ArithmeticUnaryContext)_localctx).operator = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 146)) & ~0x3f) == 0 && ((1L << (_la - 146)) & ((1L << (PLUS - 146)) | (1L << (MINUS - 146)) | (1L << (TILDE - 146)))) != 0)) ) {
					((ArithmeticUnaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(2224);
				valueExpression(7);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(2248);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,295,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(2246);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,294,_ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(2227);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(2228);
						((ArithmeticBinaryContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 148)) & ~0x3f) == 0 && ((1L << (_la - 148)) & ((1L << (ASTERISK - 148)) | (1L << (SLASH - 148)) | (1L << (PERCENT - 148)) | (1L << (DIV - 148)))) != 0)) ) {
							((ArithmeticBinaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(2229);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(7);
						}
						break;
					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(2230);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(2231);
						((ArithmeticBinaryContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 146)) & ~0x3f) == 0 && ((1L << (_la - 146)) & ((1L << (PLUS - 146)) | (1L << (MINUS - 146)) | (1L << (CONCAT_PIPE - 146)))) != 0)) ) {
							((ArithmeticBinaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(2232);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(6);
						}
						break;
					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(2233);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(2234);
						((ArithmeticBinaryContext)_localctx).operator = match(AMPERSAND);
						setState(2235);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(5);
						}
						break;
					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(2236);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(2237);
						((ArithmeticBinaryContext)_localctx).operator = match(HAT);
						setState(2238);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(4);
						}
						break;
					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(2239);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(2240);
						((ArithmeticBinaryContext)_localctx).operator = match(PIPE);
						setState(2241);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(3);
						}
						break;
					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(2242);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(2243);
						comparisonOperator();
						setState(2244);
						((ComparisonContext)_localctx).right = valueExpression(2);
						}
						break;
					}
					} 
				}
				setState(2250);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,295,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PrimaryExpressionContext extends ParserRuleContext {
		public PrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryExpression; }
	 
		public PrimaryExpressionContext() { }
		public void copyFrom(PrimaryExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StructContext extends PrimaryExpressionContext {
		public NamedExpressionContext namedExpression;
		public List<NamedExpressionContext> argument = new ArrayList<NamedExpressionContext>();
		public TerminalNode STRUCT() { return getToken(sqlParser.STRUCT, 0); }
		public List<NamedExpressionContext> namedExpression() {
			return getRuleContexts(NamedExpressionContext.class);
		}
		public NamedExpressionContext namedExpression(int i) {
			return getRuleContext(NamedExpressionContext.class,i);
		}
		public StructContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class DereferenceContext extends PrimaryExpressionContext {
		public PrimaryExpressionContext base;
		public IdentifierContext fieldName;
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DereferenceContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SimpleCaseContext extends PrimaryExpressionContext {
		public ExpressionContext value;
		public ExpressionContext elseExpression;
		public TerminalNode CASE() { return getToken(sqlParser.CASE, 0); }
		public TerminalNode END() { return getToken(sqlParser.END, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<WhenClauseContext> whenClause() {
			return getRuleContexts(WhenClauseContext.class);
		}
		public WhenClauseContext whenClause(int i) {
			return getRuleContext(WhenClauseContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(sqlParser.ELSE, 0); }
		public SimpleCaseContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ColumnReferenceContext extends PrimaryExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ColumnReferenceContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RowConstructorContext extends PrimaryExpressionContext {
		public List<NamedExpressionContext> namedExpression() {
			return getRuleContexts(NamedExpressionContext.class);
		}
		public NamedExpressionContext namedExpression(int i) {
			return getRuleContext(NamedExpressionContext.class,i);
		}
		public RowConstructorContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LastContext extends PrimaryExpressionContext {
		public TerminalNode LAST() { return getToken(sqlParser.LAST, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode IGNORE() { return getToken(sqlParser.IGNORE, 0); }
		public TerminalNode NULLS() { return getToken(sqlParser.NULLS, 0); }
		public LastContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class StarContext extends PrimaryExpressionContext {
		public TerminalNode ASTERISK() { return getToken(sqlParser.ASTERISK, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public StarContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SubscriptContext extends PrimaryExpressionContext {
		public PrimaryExpressionContext value;
		public ValueExpressionContext index;
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public SubscriptContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SubqueryExpressionContext extends PrimaryExpressionContext {
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public SubqueryExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CastContext extends PrimaryExpressionContext {
		public TerminalNode CAST() { return getToken(sqlParser.CAST, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public CastContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ConstantDefaultContext extends PrimaryExpressionContext {
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public ConstantDefaultContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LambdaContext extends PrimaryExpressionContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(sqlParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(sqlParser.IDENTIFIER, i);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LambdaContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesizedExpressionContext extends PrimaryExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParenthesizedExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExtractContext extends PrimaryExpressionContext {
		public IdentifierContext field;
		public ValueExpressionContext source;
		public TerminalNode EXTRACT() { return getToken(sqlParser.EXTRACT, 0); }
		public TerminalNode FROM() { return getToken(sqlParser.FROM, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public ExtractContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionCallContext extends PrimaryExpressionContext {
		public ExpressionContext expression;
		public List<ExpressionContext> argument = new ArrayList<ExpressionContext>();
		public Token trimOption;
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public TerminalNode OVER() { return getToken(sqlParser.OVER, 0); }
		public WindowSpecContext windowSpec() {
			return getRuleContext(WindowSpecContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public SetQuantifierContext setQuantifier() {
			return getRuleContext(SetQuantifierContext.class,0);
		}
		public TerminalNode FROM() { return getToken(sqlParser.FROM, 0); }
		public TerminalNode BOTH() { return getToken(sqlParser.BOTH, 0); }
		public TerminalNode LEADING() { return getToken(sqlParser.LEADING, 0); }
		public TerminalNode TRAILING() { return getToken(sqlParser.TRAILING, 0); }
		public FunctionCallContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SearchedCaseContext extends PrimaryExpressionContext {
		public ExpressionContext elseExpression;
		public TerminalNode CASE() { return getToken(sqlParser.CASE, 0); }
		public TerminalNode END() { return getToken(sqlParser.END, 0); }
		public List<WhenClauseContext> whenClause() {
			return getRuleContexts(WhenClauseContext.class);
		}
		public WhenClauseContext whenClause(int i) {
			return getRuleContext(WhenClauseContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(sqlParser.ELSE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SearchedCaseContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PositionContext extends PrimaryExpressionContext {
		public ValueExpressionContext substr;
		public ValueExpressionContext str;
		public TerminalNode POSITION() { return getToken(sqlParser.POSITION, 0); }
		public TerminalNode IN() { return getToken(sqlParser.IN, 0); }
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public PositionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FirstContext extends PrimaryExpressionContext {
		public TerminalNode FIRST() { return getToken(sqlParser.FIRST, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode IGNORE() { return getToken(sqlParser.IGNORE, 0); }
		public TerminalNode NULLS() { return getToken(sqlParser.NULLS, 0); }
		public FirstContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		return primaryExpression(0);
	}

	private PrimaryExpressionContext primaryExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, _parentState);
		PrimaryExpressionContext _prevctx = _localctx;
		int _startState = 170;
		enterRecursionRule(_localctx, 170, RULE_primaryExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2396);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,310,_ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(2252);
				match(CASE);
				setState(2254); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(2253);
					whenClause();
					}
					}
					setState(2256); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==WHEN );
				setState(2260);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ELSE) {
					{
					setState(2258);
					match(ELSE);
					setState(2259);
					((SearchedCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(2262);
				match(END);
				}
				break;
			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2264);
				match(CASE);
				setState(2265);
				((SimpleCaseContext)_localctx).value = expression();
				setState(2267); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(2266);
					whenClause();
					}
					}
					setState(2269); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==WHEN );
				setState(2273);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ELSE) {
					{
					setState(2271);
					match(ELSE);
					setState(2272);
					((SimpleCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(2275);
				match(END);
				}
				break;
			case 3:
				{
				_localctx = new CastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2277);
				match(CAST);
				setState(2278);
				match(T__0);
				setState(2279);
				expression();
				setState(2280);
				match(AS);
				setState(2281);
				dataType();
				setState(2282);
				match(T__1);
				}
				break;
			case 4:
				{
				_localctx = new StructContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2284);
				match(STRUCT);
				setState(2285);
				match(T__0);
				setState(2294);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << JOIN) | (1L << CROSS) | (1L << OUTER) | (1L << INNER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LEFT - 64)) | (1L << (SEMI - 64)) | (1L << (RIGHT - 64)) | (1L << (FULL - 64)) | (1L << (NATURAL - 64)) | (1L << (ON - 64)) | (1L << (PIVOT - 64)) | (1L << (LATERAL - 64)) | (1L << (WINDOW - 64)) | (1L << (OVER - 64)) | (1L << (PARTITION - 64)) | (1L << (RANGE - 64)) | (1L << (ROWS - 64)) | (1L << (UNBOUNDED - 64)) | (1L << (PRECEDING - 64)) | (1L << (FOLLOWING - 64)) | (1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (ROW - 64)) | (1L << (WITH - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (UNION - 64)) | (1L << (EXCEPT - 64)) | (1L << (SETMINUS - 64)) | (1L << (INTERSECT - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (ARRAY - 64)) | (1L << (MAP - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (COMMIT - 128)) | (1L << (ROLLBACK - 128)) | (1L << (MACRO - 128)) | (1L << (IGNORE - 128)) | (1L << (BOTH - 128)) | (1L << (LEADING - 128)) | (1L << (TRAILING - 128)) | (1L << (IF - 128)) | (1L << (POSITION - 128)) | (1L << (EXTRACT - 128)) | (1L << (PLUS - 128)) | (1L << (MINUS - 128)) | (1L << (ASTERISK - 128)) | (1L << (DIV - 128)) | (1L << (TILDE - 128)) | (1L << (PERCENTLIT - 128)) | (1L << (BUCKET - 128)) | (1L << (OUT - 128)) | (1L << (OF - 128)) | (1L << (SORT - 128)) | (1L << (CLUSTER - 128)) | (1L << (DISTRIBUTE - 128)) | (1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (UNSET - 192)) | (1L << (TBLPROPERTIES - 192)) | (1L << (DBPROPERTIES - 192)) | (1L << (BUCKETS - 192)) | (1L << (SKEWED - 192)) | (1L << (STORED - 192)) | (1L << (DIRECTORIES - 192)) | (1L << (LOCATION - 192)) | (1L << (EXCHANGE - 192)) | (1L << (ARCHIVE - 192)) | (1L << (UNARCHIVE - 192)) | (1L << (FILEFORMAT - 192)) | (1L << (TOUCH - 192)) | (1L << (COMPACT - 192)) | (1L << (CONCATENATE - 192)) | (1L << (CHANGE - 192)) | (1L << (CASCADE - 192)) | (1L << (RESTRICT - 192)) | (1L << (CLUSTERED - 192)) | (1L << (SORTED - 192)) | (1L << (PURGE - 192)) | (1L << (INPUTFORMAT - 192)) | (1L << (OUTPUTFORMAT - 192)) | (1L << (DATABASE - 192)) | (1L << (DATABASES - 192)) | (1L << (DFS - 192)) | (1L << (TRUNCATE - 192)) | (1L << (ANALYZE - 192)) | (1L << (COMPUTE - 192)) | (1L << (LIST - 192)) | (1L << (STATISTICS - 192)) | (1L << (PARTITIONED - 192)) | (1L << (EXTERNAL - 192)) | (1L << (DEFINED - 192)) | (1L << (REVOKE - 192)) | (1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (ANTI - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)))) != 0) || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (STRING - 261)) | (1L << (BIGINT_LITERAL - 261)) | (1L << (SMALLINT_LITERAL - 261)) | (1L << (TINYINT_LITERAL - 261)) | (1L << (INTEGER_VALUE - 261)) | (1L << (DECIMAL_VALUE - 261)) | (1L << (DOUBLE_LITERAL - 261)) | (1L << (BIGDECIMAL_LITERAL - 261)) | (1L << (IDENTIFIER - 261)) | (1L << (BACKQUOTED_IDENTIFIER - 261)))) != 0)) {
					{
					setState(2286);
					((StructContext)_localctx).namedExpression = namedExpression();
					((StructContext)_localctx).argument.add(((StructContext)_localctx).namedExpression);
					setState(2291);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__3) {
						{
						{
						setState(2287);
						match(T__3);
						setState(2288);
						((StructContext)_localctx).namedExpression = namedExpression();
						((StructContext)_localctx).argument.add(((StructContext)_localctx).namedExpression);
						}
						}
						setState(2293);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(2296);
				match(T__1);
				}
				break;
			case 5:
				{
				_localctx = new FirstContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2297);
				match(FIRST);
				setState(2298);
				match(T__0);
				setState(2299);
				expression();
				setState(2302);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IGNORE) {
					{
					setState(2300);
					match(IGNORE);
					setState(2301);
					match(NULLS);
					}
				}

				setState(2304);
				match(T__1);
				}
				break;
			case 6:
				{
				_localctx = new LastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2306);
				match(LAST);
				setState(2307);
				match(T__0);
				setState(2308);
				expression();
				setState(2311);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IGNORE) {
					{
					setState(2309);
					match(IGNORE);
					setState(2310);
					match(NULLS);
					}
				}

				setState(2313);
				match(T__1);
				}
				break;
			case 7:
				{
				_localctx = new PositionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2315);
				match(POSITION);
				setState(2316);
				match(T__0);
				setState(2317);
				((PositionContext)_localctx).substr = valueExpression(0);
				setState(2318);
				match(IN);
				setState(2319);
				((PositionContext)_localctx).str = valueExpression(0);
				setState(2320);
				match(T__1);
				}
				break;
			case 8:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2322);
				constant();
				}
				break;
			case 9:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2323);
				match(ASTERISK);
				}
				break;
			case 10:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2324);
				qualifiedName();
				setState(2325);
				match(T__2);
				setState(2326);
				match(ASTERISK);
				}
				break;
			case 11:
				{
				_localctx = new RowConstructorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2328);
				match(T__0);
				setState(2329);
				namedExpression();
				setState(2332); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(2330);
					match(T__3);
					setState(2331);
					namedExpression();
					}
					}
					setState(2334); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__3 );
				setState(2336);
				match(T__1);
				}
				break;
			case 12:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2338);
				match(T__0);
				setState(2339);
				query();
				setState(2340);
				match(T__1);
				}
				break;
			case 13:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2342);
				qualifiedName();
				setState(2343);
				match(T__0);
				setState(2355);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << JOIN) | (1L << CROSS) | (1L << OUTER) | (1L << INNER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (LEFT - 64)) | (1L << (SEMI - 64)) | (1L << (RIGHT - 64)) | (1L << (FULL - 64)) | (1L << (NATURAL - 64)) | (1L << (ON - 64)) | (1L << (PIVOT - 64)) | (1L << (LATERAL - 64)) | (1L << (WINDOW - 64)) | (1L << (OVER - 64)) | (1L << (PARTITION - 64)) | (1L << (RANGE - 64)) | (1L << (ROWS - 64)) | (1L << (UNBOUNDED - 64)) | (1L << (PRECEDING - 64)) | (1L << (FOLLOWING - 64)) | (1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (ROW - 64)) | (1L << (WITH - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (UNION - 64)) | (1L << (EXCEPT - 64)) | (1L << (SETMINUS - 64)) | (1L << (INTERSECT - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (ARRAY - 64)) | (1L << (MAP - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (COMMIT - 128)) | (1L << (ROLLBACK - 128)) | (1L << (MACRO - 128)) | (1L << (IGNORE - 128)) | (1L << (BOTH - 128)) | (1L << (LEADING - 128)) | (1L << (TRAILING - 128)) | (1L << (IF - 128)) | (1L << (POSITION - 128)) | (1L << (EXTRACT - 128)) | (1L << (PLUS - 128)) | (1L << (MINUS - 128)) | (1L << (ASTERISK - 128)) | (1L << (DIV - 128)) | (1L << (TILDE - 128)) | (1L << (PERCENTLIT - 128)) | (1L << (BUCKET - 128)) | (1L << (OUT - 128)) | (1L << (OF - 128)) | (1L << (SORT - 128)) | (1L << (CLUSTER - 128)) | (1L << (DISTRIBUTE - 128)) | (1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (UNSET - 192)) | (1L << (TBLPROPERTIES - 192)) | (1L << (DBPROPERTIES - 192)) | (1L << (BUCKETS - 192)) | (1L << (SKEWED - 192)) | (1L << (STORED - 192)) | (1L << (DIRECTORIES - 192)) | (1L << (LOCATION - 192)) | (1L << (EXCHANGE - 192)) | (1L << (ARCHIVE - 192)) | (1L << (UNARCHIVE - 192)) | (1L << (FILEFORMAT - 192)) | (1L << (TOUCH - 192)) | (1L << (COMPACT - 192)) | (1L << (CONCATENATE - 192)) | (1L << (CHANGE - 192)) | (1L << (CASCADE - 192)) | (1L << (RESTRICT - 192)) | (1L << (CLUSTERED - 192)) | (1L << (SORTED - 192)) | (1L << (PURGE - 192)) | (1L << (INPUTFORMAT - 192)) | (1L << (OUTPUTFORMAT - 192)) | (1L << (DATABASE - 192)) | (1L << (DATABASES - 192)) | (1L << (DFS - 192)) | (1L << (TRUNCATE - 192)) | (1L << (ANALYZE - 192)) | (1L << (COMPUTE - 192)) | (1L << (LIST - 192)) | (1L << (STATISTICS - 192)) | (1L << (PARTITIONED - 192)) | (1L << (EXTERNAL - 192)) | (1L << (DEFINED - 192)) | (1L << (REVOKE - 192)) | (1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (ANTI - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)))) != 0) || ((((_la - 261)) & ~0x3f) == 0 && ((1L << (_la - 261)) & ((1L << (STRING - 261)) | (1L << (BIGINT_LITERAL - 261)) | (1L << (SMALLINT_LITERAL - 261)) | (1L << (TINYINT_LITERAL - 261)) | (1L << (INTEGER_VALUE - 261)) | (1L << (DECIMAL_VALUE - 261)) | (1L << (DOUBLE_LITERAL - 261)) | (1L << (BIGDECIMAL_LITERAL - 261)) | (1L << (IDENTIFIER - 261)) | (1L << (BACKQUOTED_IDENTIFIER - 261)))) != 0)) {
					{
					setState(2345);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,305,_ctx) ) {
					case 1:
						{
						setState(2344);
						setQuantifier();
						}
						break;
					}
					setState(2347);
					((FunctionCallContext)_localctx).expression = expression();
					((FunctionCallContext)_localctx).argument.add(((FunctionCallContext)_localctx).expression);
					setState(2352);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__3) {
						{
						{
						setState(2348);
						match(T__3);
						setState(2349);
						((FunctionCallContext)_localctx).expression = expression();
						((FunctionCallContext)_localctx).argument.add(((FunctionCallContext)_localctx).expression);
						}
						}
						setState(2354);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(2357);
				match(T__1);
				setState(2360);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,308,_ctx) ) {
				case 1:
					{
					setState(2358);
					match(OVER);
					setState(2359);
					windowSpec();
					}
					break;
				}
				}
				break;
			case 14:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2362);
				qualifiedName();
				setState(2363);
				match(T__0);
				setState(2364);
				((FunctionCallContext)_localctx).trimOption = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 132)) & ~0x3f) == 0 && ((1L << (_la - 132)) & ((1L << (BOTH - 132)) | (1L << (LEADING - 132)) | (1L << (TRAILING - 132)))) != 0)) ) {
					((FunctionCallContext)_localctx).trimOption = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(2365);
				((FunctionCallContext)_localctx).expression = expression();
				((FunctionCallContext)_localctx).argument.add(((FunctionCallContext)_localctx).expression);
				setState(2366);
				match(FROM);
				setState(2367);
				((FunctionCallContext)_localctx).expression = expression();
				((FunctionCallContext)_localctx).argument.add(((FunctionCallContext)_localctx).expression);
				setState(2368);
				match(T__1);
				}
				break;
			case 15:
				{
				_localctx = new LambdaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2370);
				match(IDENTIFIER);
				setState(2371);
				match(T__12);
				setState(2372);
				expression();
				}
				break;
			case 16:
				{
				_localctx = new LambdaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2373);
				match(T__0);
				setState(2374);
				match(IDENTIFIER);
				setState(2377); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(2375);
					match(T__3);
					setState(2376);
					match(IDENTIFIER);
					}
					}
					setState(2379); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__3 );
				setState(2381);
				match(T__1);
				setState(2382);
				match(T__12);
				setState(2383);
				expression();
				}
				break;
			case 17:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2384);
				identifier();
				}
				break;
			case 18:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2385);
				match(T__0);
				setState(2386);
				expression();
				setState(2387);
				match(T__1);
				}
				break;
			case 19:
				{
				_localctx = new ExtractContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(2389);
				match(EXTRACT);
				setState(2390);
				match(T__0);
				setState(2391);
				((ExtractContext)_localctx).field = identifier();
				setState(2392);
				match(FROM);
				setState(2393);
				((ExtractContext)_localctx).source = valueExpression(0);
				setState(2394);
				match(T__1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(2408);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,312,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(2406);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,311,_ctx) ) {
					case 1:
						{
						_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
						((SubscriptContext)_localctx).value = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_primaryExpression);
						setState(2398);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(2399);
						match(T__13);
						setState(2400);
						((SubscriptContext)_localctx).index = valueExpression(0);
						setState(2401);
						match(T__14);
						}
						break;
					case 2:
						{
						_localctx = new DereferenceContext(new PrimaryExpressionContext(_parentctx, _parentState));
						((DereferenceContext)_localctx).base = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_primaryExpression);
						setState(2403);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(2404);
						match(T__2);
						setState(2405);
						((DereferenceContext)_localctx).fieldName = identifier();
						}
						break;
					}
					} 
				}
				setState(2410);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,312,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
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
		public TerminalNode NULL() { return getToken(sqlParser.NULL, 0); }
		public NullLiteralContext(ConstantContext ctx) { copyFrom(ctx); }
	}
	public static class StringLiteralContext extends ConstantContext {
		public List<TerminalNode> STRING() { return getTokens(sqlParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(sqlParser.STRING, i);
		}
		public StringLiteralContext(ConstantContext ctx) { copyFrom(ctx); }
	}
	public static class TypeConstructorContext extends ConstantContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
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
		enterRule(_localctx, 172, RULE_constant);
		try {
			int _alt;
			setState(2423);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,314,_ctx) ) {
			case 1:
				_localctx = new NullLiteralContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2411);
				match(NULL);
				}
				break;
			case 2:
				_localctx = new IntervalLiteralContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(2412);
				interval();
				}
				break;
			case 3:
				_localctx = new TypeConstructorContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(2413);
				identifier();
				setState(2414);
				match(STRING);
				}
				break;
			case 4:
				_localctx = new NumericLiteralContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(2416);
				number();
				}
				break;
			case 5:
				_localctx = new BooleanLiteralContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(2417);
				booleanValue();
				}
				break;
			case 6:
				_localctx = new StringLiteralContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(2419); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(2418);
						match(STRING);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(2421); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,313,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
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

	public static class ComparisonOperatorContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(sqlParser.EQ, 0); }
		public TerminalNode NEQ() { return getToken(sqlParser.NEQ, 0); }
		public TerminalNode NEQJ() { return getToken(sqlParser.NEQJ, 0); }
		public TerminalNode LT() { return getToken(sqlParser.LT, 0); }
		public TerminalNode LTE() { return getToken(sqlParser.LTE, 0); }
		public TerminalNode GT() { return getToken(sqlParser.GT, 0); }
		public TerminalNode GTE() { return getToken(sqlParser.GTE, 0); }
		public TerminalNode NSEQ() { return getToken(sqlParser.NSEQ, 0); }
		public ComparisonOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonOperator; }
	}

	public final ComparisonOperatorContext comparisonOperator() throws RecognitionException {
		ComparisonOperatorContext _localctx = new ComparisonOperatorContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_comparisonOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2425);
			_la = _input.LA(1);
			if ( !(((((_la - 138)) & ~0x3f) == 0 && ((1L << (_la - 138)) & ((1L << (EQ - 138)) | (1L << (NSEQ - 138)) | (1L << (NEQ - 138)) | (1L << (NEQJ - 138)) | (1L << (LT - 138)) | (1L << (LTE - 138)) | (1L << (GT - 138)) | (1L << (GTE - 138)))) != 0)) ) {
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

	public static class ArithmeticOperatorContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(sqlParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public TerminalNode ASTERISK() { return getToken(sqlParser.ASTERISK, 0); }
		public TerminalNode SLASH() { return getToken(sqlParser.SLASH, 0); }
		public TerminalNode PERCENT() { return getToken(sqlParser.PERCENT, 0); }
		public TerminalNode DIV() { return getToken(sqlParser.DIV, 0); }
		public TerminalNode TILDE() { return getToken(sqlParser.TILDE, 0); }
		public TerminalNode AMPERSAND() { return getToken(sqlParser.AMPERSAND, 0); }
		public TerminalNode PIPE() { return getToken(sqlParser.PIPE, 0); }
		public TerminalNode CONCAT_PIPE() { return getToken(sqlParser.CONCAT_PIPE, 0); }
		public TerminalNode HAT() { return getToken(sqlParser.HAT, 0); }
		public ArithmeticOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arithmeticOperator; }
	}

	public final ArithmeticOperatorContext arithmeticOperator() throws RecognitionException {
		ArithmeticOperatorContext _localctx = new ArithmeticOperatorContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_arithmeticOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2427);
			_la = _input.LA(1);
			if ( !(((((_la - 146)) & ~0x3f) == 0 && ((1L << (_la - 146)) & ((1L << (PLUS - 146)) | (1L << (MINUS - 146)) | (1L << (ASTERISK - 146)) | (1L << (SLASH - 146)) | (1L << (PERCENT - 146)) | (1L << (DIV - 146)) | (1L << (TILDE - 146)) | (1L << (AMPERSAND - 146)) | (1L << (PIPE - 146)) | (1L << (CONCAT_PIPE - 146)) | (1L << (HAT - 146)))) != 0)) ) {
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

	public static class PredicateOperatorContext extends ParserRuleContext {
		public TerminalNode OR() { return getToken(sqlParser.OR, 0); }
		public TerminalNode AND() { return getToken(sqlParser.AND, 0); }
		public TerminalNode IN() { return getToken(sqlParser.IN, 0); }
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public PredicateOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_predicateOperator; }
	}

	public final PredicateOperatorContext predicateOperator() throws RecognitionException {
		PredicateOperatorContext _localctx = new PredicateOperatorContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_predicateOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2429);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT))) != 0)) ) {
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

	public static class BooleanValueContext extends ParserRuleContext {
		public TerminalNode TRUE() { return getToken(sqlParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(sqlParser.FALSE, 0); }
		public BooleanValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanValue; }
	}

	public final BooleanValueContext booleanValue() throws RecognitionException {
		BooleanValueContext _localctx = new BooleanValueContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_booleanValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2431);
			_la = _input.LA(1);
			if ( !(_la==TRUE || _la==FALSE) ) {
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

	public static class IntervalContext extends ParserRuleContext {
		public TerminalNode INTERVAL() { return getToken(sqlParser.INTERVAL, 0); }
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
		enterRule(_localctx, 182, RULE_interval);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2433);
			match(INTERVAL);
			setState(2437);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,315,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(2434);
					intervalField();
					}
					} 
				}
				setState(2439);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,315,_ctx);
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
		public TerminalNode TO() { return getToken(sqlParser.TO, 0); }
		public IntervalFieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intervalField; }
	}

	public final IntervalFieldContext intervalField() throws RecognitionException {
		IntervalFieldContext _localctx = new IntervalFieldContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_intervalField);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2440);
			((IntervalFieldContext)_localctx).value = intervalValue();
			setState(2441);
			((IntervalFieldContext)_localctx).unit = identifier();
			setState(2444);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,316,_ctx) ) {
			case 1:
				{
				setState(2442);
				match(TO);
				setState(2443);
				((IntervalFieldContext)_localctx).to = identifier();
				}
				break;
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
		public TerminalNode INTEGER_VALUE() { return getToken(sqlParser.INTEGER_VALUE, 0); }
		public TerminalNode DECIMAL_VALUE() { return getToken(sqlParser.DECIMAL_VALUE, 0); }
		public TerminalNode PLUS() { return getToken(sqlParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public IntervalValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intervalValue; }
	}

	public final IntervalValueContext intervalValue() throws RecognitionException {
		IntervalValueContext _localctx = new IntervalValueContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_intervalValue);
		int _la;
		try {
			setState(2451);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
			case MINUS:
			case INTEGER_VALUE:
			case DECIMAL_VALUE:
				enterOuterAlt(_localctx, 1);
				{
				setState(2447);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PLUS || _la==MINUS) {
					{
					setState(2446);
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

				setState(2449);
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
				setState(2450);
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

	public static class ColPositionContext extends ParserRuleContext {
		public TerminalNode FIRST() { return getToken(sqlParser.FIRST, 0); }
		public TerminalNode AFTER() { return getToken(sqlParser.AFTER, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ColPositionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colPosition; }
	}

	public final ColPositionContext colPosition() throws RecognitionException {
		ColPositionContext _localctx = new ColPositionContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_colPosition);
		try {
			setState(2456);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FIRST:
				enterOuterAlt(_localctx, 1);
				{
				setState(2453);
				match(FIRST);
				}
				break;
			case AFTER:
				enterOuterAlt(_localctx, 2);
				{
				setState(2454);
				match(AFTER);
				setState(2455);
				identifier();
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

	public static class DataTypeContext extends ParserRuleContext {
		public DataTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataType; }
	 
		public DataTypeContext() { }
		public void copyFrom(DataTypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ComplexDataTypeContext extends DataTypeContext {
		public Token complex;
		public List<DataTypeContext> dataType() {
			return getRuleContexts(DataTypeContext.class);
		}
		public DataTypeContext dataType(int i) {
			return getRuleContext(DataTypeContext.class,i);
		}
		public TerminalNode ARRAY() { return getToken(sqlParser.ARRAY, 0); }
		public TerminalNode MAP() { return getToken(sqlParser.MAP, 0); }
		public TerminalNode STRUCT() { return getToken(sqlParser.STRUCT, 0); }
		public TerminalNode NEQ() { return getToken(sqlParser.NEQ, 0); }
		public ComplexColTypeListContext complexColTypeList() {
			return getRuleContext(ComplexColTypeListContext.class,0);
		}
		public ComplexDataTypeContext(DataTypeContext ctx) { copyFrom(ctx); }
	}
	public static class PrimitiveDataTypeContext extends DataTypeContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TerminalNode> INTEGER_VALUE() { return getTokens(sqlParser.INTEGER_VALUE); }
		public TerminalNode INTEGER_VALUE(int i) {
			return getToken(sqlParser.INTEGER_VALUE, i);
		}
		public PrimitiveDataTypeContext(DataTypeContext ctx) { copyFrom(ctx); }
	}

	public final DataTypeContext dataType() throws RecognitionException {
		DataTypeContext _localctx = new DataTypeContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_dataType);
		int _la;
		try {
			setState(2492);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,324,_ctx) ) {
			case 1:
				_localctx = new ComplexDataTypeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2458);
				((ComplexDataTypeContext)_localctx).complex = match(ARRAY);
				setState(2459);
				match(LT);
				setState(2460);
				dataType();
				setState(2461);
				match(GT);
				}
				break;
			case 2:
				_localctx = new ComplexDataTypeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(2463);
				((ComplexDataTypeContext)_localctx).complex = match(MAP);
				setState(2464);
				match(LT);
				setState(2465);
				dataType();
				setState(2466);
				match(T__3);
				setState(2467);
				dataType();
				setState(2468);
				match(GT);
				}
				break;
			case 3:
				_localctx = new ComplexDataTypeContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(2470);
				((ComplexDataTypeContext)_localctx).complex = match(STRUCT);
				setState(2477);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LT:
					{
					setState(2471);
					match(LT);
					setState(2473);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (((((_la - 19)) & ~0x3f) == 0 && ((1L << (_la - 19)) & ((1L << (SELECT - 19)) | (1L << (FROM - 19)) | (1L << (ADD - 19)) | (1L << (AS - 19)) | (1L << (ALL - 19)) | (1L << (ANY - 19)) | (1L << (DISTINCT - 19)) | (1L << (WHERE - 19)) | (1L << (GROUP - 19)) | (1L << (BY - 19)) | (1L << (GROUPING - 19)) | (1L << (SETS - 19)) | (1L << (CUBE - 19)) | (1L << (ROLLUP - 19)) | (1L << (ORDER - 19)) | (1L << (HAVING - 19)) | (1L << (LIMIT - 19)) | (1L << (AT - 19)) | (1L << (OR - 19)) | (1L << (AND - 19)) | (1L << (IN - 19)) | (1L << (NOT - 19)) | (1L << (NO - 19)) | (1L << (EXISTS - 19)) | (1L << (BETWEEN - 19)) | (1L << (LIKE - 19)) | (1L << (RLIKE - 19)) | (1L << (IS - 19)) | (1L << (NULL - 19)) | (1L << (TRUE - 19)) | (1L << (FALSE - 19)) | (1L << (NULLS - 19)) | (1L << (ASC - 19)) | (1L << (DESC - 19)) | (1L << (FOR - 19)) | (1L << (INTERVAL - 19)) | (1L << (CASE - 19)) | (1L << (WHEN - 19)) | (1L << (THEN - 19)) | (1L << (ELSE - 19)) | (1L << (END - 19)) | (1L << (JOIN - 19)) | (1L << (CROSS - 19)) | (1L << (OUTER - 19)) | (1L << (INNER - 19)) | (1L << (LEFT - 19)) | (1L << (SEMI - 19)) | (1L << (RIGHT - 19)) | (1L << (FULL - 19)) | (1L << (NATURAL - 19)) | (1L << (ON - 19)) | (1L << (PIVOT - 19)) | (1L << (LATERAL - 19)) | (1L << (WINDOW - 19)) | (1L << (OVER - 19)) | (1L << (PARTITION - 19)) | (1L << (RANGE - 19)) | (1L << (ROWS - 19)) | (1L << (UNBOUNDED - 19)) | (1L << (PRECEDING - 19)) | (1L << (FOLLOWING - 19)) | (1L << (CURRENT - 19)) | (1L << (FIRST - 19)) | (1L << (AFTER - 19)))) != 0) || ((((_la - 83)) & ~0x3f) == 0 && ((1L << (_la - 83)) & ((1L << (LAST - 83)) | (1L << (ROW - 83)) | (1L << (WITH - 83)) | (1L << (CREATE - 83)) | (1L << (TABLE - 83)) | (1L << (DIRECTORY - 83)) | (1L << (VIEW - 83)) | (1L << (REPLACE - 83)) | (1L << (INSERT - 83)) | (1L << (DELETE - 83)) | (1L << (INTO - 83)) | (1L << (DESCRIBE - 83)) | (1L << (EXPLAIN - 83)) | (1L << (FORMAT - 83)) | (1L << (LOGICAL - 83)) | (1L << (CODEGEN - 83)) | (1L << (COST - 83)) | (1L << (CAST - 83)) | (1L << (SHOW - 83)) | (1L << (TABLES - 83)) | (1L << (COLUMNS - 83)) | (1L << (COLUMN - 83)) | (1L << (USE - 83)) | (1L << (PARTITIONS - 83)) | (1L << (FUNCTIONS - 83)) | (1L << (DROP - 83)) | (1L << (UNION - 83)) | (1L << (EXCEPT - 83)) | (1L << (SETMINUS - 83)) | (1L << (INTERSECT - 83)) | (1L << (TO - 83)) | (1L << (TABLESAMPLE - 83)) | (1L << (STRATIFY - 83)) | (1L << (ALTER - 83)) | (1L << (RENAME - 83)) | (1L << (ARRAY - 83)) | (1L << (MAP - 83)) | (1L << (STRUCT - 83)) | (1L << (COMMENT - 83)) | (1L << (SET - 83)) | (1L << (RESET - 83)) | (1L << (DATA - 83)) | (1L << (START - 83)) | (1L << (TRANSACTION - 83)) | (1L << (COMMIT - 83)) | (1L << (ROLLBACK - 83)) | (1L << (MACRO - 83)) | (1L << (IGNORE - 83)) | (1L << (BOTH - 83)) | (1L << (LEADING - 83)) | (1L << (TRAILING - 83)) | (1L << (IF - 83)) | (1L << (POSITION - 83)) | (1L << (EXTRACT - 83)))) != 0) || ((((_la - 151)) & ~0x3f) == 0 && ((1L << (_la - 151)) & ((1L << (DIV - 151)) | (1L << (PERCENTLIT - 151)) | (1L << (BUCKET - 151)) | (1L << (OUT - 151)) | (1L << (OF - 151)) | (1L << (SORT - 151)) | (1L << (CLUSTER - 151)) | (1L << (DISTRIBUTE - 151)) | (1L << (OVERWRITE - 151)) | (1L << (TRANSFORM - 151)) | (1L << (REDUCE - 151)) | (1L << (SERDE - 151)) | (1L << (SERDEPROPERTIES - 151)) | (1L << (RECORDREADER - 151)) | (1L << (RECORDWRITER - 151)) | (1L << (DELIMITED - 151)) | (1L << (FIELDS - 151)) | (1L << (TERMINATED - 151)) | (1L << (COLLECTION - 151)) | (1L << (ITEMS - 151)) | (1L << (KEYS - 151)) | (1L << (ESCAPED - 151)) | (1L << (LINES - 151)) | (1L << (SEPARATED - 151)) | (1L << (FUNCTION - 151)) | (1L << (EXTENDED - 151)) | (1L << (REFRESH - 151)) | (1L << (CLEAR - 151)) | (1L << (CACHE - 151)) | (1L << (UNCACHE - 151)) | (1L << (LAZY - 151)) | (1L << (FORMATTED - 151)) | (1L << (GLOBAL - 151)) | (1L << (TEMPORARY - 151)) | (1L << (OPTIONS - 151)) | (1L << (UNSET - 151)) | (1L << (TBLPROPERTIES - 151)) | (1L << (DBPROPERTIES - 151)) | (1L << (BUCKETS - 151)) | (1L << (SKEWED - 151)) | (1L << (STORED - 151)) | (1L << (DIRECTORIES - 151)) | (1L << (LOCATION - 151)) | (1L << (EXCHANGE - 151)) | (1L << (ARCHIVE - 151)) | (1L << (UNARCHIVE - 151)) | (1L << (FILEFORMAT - 151)) | (1L << (TOUCH - 151)) | (1L << (COMPACT - 151)) | (1L << (CONCATENATE - 151)) | (1L << (CHANGE - 151)) | (1L << (CASCADE - 151)) | (1L << (RESTRICT - 151)) | (1L << (CLUSTERED - 151)) | (1L << (SORTED - 151)) | (1L << (PURGE - 151)) | (1L << (INPUTFORMAT - 151)) | (1L << (OUTPUTFORMAT - 151)))) != 0) || ((((_la - 215)) & ~0x3f) == 0 && ((1L << (_la - 215)) & ((1L << (DATABASE - 215)) | (1L << (DATABASES - 215)) | (1L << (DFS - 215)) | (1L << (TRUNCATE - 215)) | (1L << (ANALYZE - 215)) | (1L << (COMPUTE - 215)) | (1L << (LIST - 215)) | (1L << (STATISTICS - 215)) | (1L << (PARTITIONED - 215)) | (1L << (EXTERNAL - 215)) | (1L << (DEFINED - 215)) | (1L << (REVOKE - 215)) | (1L << (GRANT - 215)) | (1L << (LOCK - 215)) | (1L << (UNLOCK - 215)) | (1L << (MSCK - 215)) | (1L << (REPAIR - 215)) | (1L << (RECOVER - 215)) | (1L << (EXPORT - 215)) | (1L << (IMPORT - 215)) | (1L << (LOAD - 215)) | (1L << (ROLE - 215)) | (1L << (ROLES - 215)) | (1L << (COMPACTIONS - 215)) | (1L << (PRINCIPALS - 215)) | (1L << (TRANSACTIONS - 215)) | (1L << (INDEX - 215)) | (1L << (INDEXES - 215)) | (1L << (LOCKS - 215)) | (1L << (OPTION - 215)) | (1L << (ANTI - 215)) | (1L << (LOCAL - 215)) | (1L << (INPATH - 215)) | (1L << (IDENTIFIER - 215)) | (1L << (BACKQUOTED_IDENTIFIER - 215)))) != 0)) {
						{
						setState(2472);
						complexColTypeList();
						}
					}

					setState(2475);
					match(GT);
					}
					break;
				case NEQ:
					{
					setState(2476);
					match(NEQ);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 4:
				_localctx = new PrimitiveDataTypeContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(2479);
				identifier();
				setState(2490);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,323,_ctx) ) {
				case 1:
					{
					setState(2480);
					match(T__0);
					setState(2481);
					match(INTEGER_VALUE);
					setState(2486);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__3) {
						{
						{
						setState(2482);
						match(T__3);
						setState(2483);
						match(INTEGER_VALUE);
						}
						}
						setState(2488);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(2489);
					match(T__1);
					}
					break;
				}
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

	public static class ColTypeListContext extends ParserRuleContext {
		public List<ColTypeContext> colType() {
			return getRuleContexts(ColTypeContext.class);
		}
		public ColTypeContext colType(int i) {
			return getRuleContext(ColTypeContext.class,i);
		}
		public ColTypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colTypeList; }
	}

	public final ColTypeListContext colTypeList() throws RecognitionException {
		ColTypeListContext _localctx = new ColTypeListContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_colTypeList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2494);
			colType();
			setState(2499);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,325,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(2495);
					match(T__3);
					setState(2496);
					colType();
					}
					} 
				}
				setState(2501);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,325,_ctx);
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

	public static class ColTypeContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public TerminalNode COMMENT() { return getToken(sqlParser.COMMENT, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public ColTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colType; }
	}

	public final ColTypeContext colType() throws RecognitionException {
		ColTypeContext _localctx = new ColTypeContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_colType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2502);
			identifier();
			setState(2503);
			dataType();
			setState(2506);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,326,_ctx) ) {
			case 1:
				{
				setState(2504);
				match(COMMENT);
				setState(2505);
				match(STRING);
				}
				break;
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

	public static class DtColTypeListContext extends ParserRuleContext {
		public List<DtColTypeContext> dtColType() {
			return getRuleContexts(DtColTypeContext.class);
		}
		public DtColTypeContext dtColType(int i) {
			return getRuleContext(DtColTypeContext.class,i);
		}
		public DtColTypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dtColTypeList; }
	}

	public final DtColTypeListContext dtColTypeList() throws RecognitionException {
		DtColTypeListContext _localctx = new DtColTypeListContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_dtColTypeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2508);
			dtColType();
			setState(2513);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(2509);
				match(T__3);
				setState(2510);
				dtColType();
				}
				}
				setState(2515);
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

	public static class DtColTypeContext extends ParserRuleContext {
		public List<DtColIdentifierContext> dtColIdentifier() {
			return getRuleContexts(DtColIdentifierContext.class);
		}
		public DtColIdentifierContext dtColIdentifier(int i) {
			return getRuleContext(DtColIdentifierContext.class,i);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode COMMENT() { return getToken(sqlParser.COMMENT, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public TerminalNode WATERMARK() { return getToken(sqlParser.WATERMARK, 0); }
		public TerminalNode FOR() { return getToken(sqlParser.FOR, 0); }
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public DtColTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dtColType; }
	}

	public final DtColTypeContext dtColType() throws RecognitionException {
		DtColTypeContext _localctx = new DtColTypeContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_dtColType);
		int _la;
		try {
			setState(2552);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SELECT:
			case FROM:
			case ADD:
			case AS:
			case ALL:
			case ANY:
			case DISTINCT:
			case WHERE:
			case GROUP:
			case BY:
			case GROUPING:
			case SETS:
			case CUBE:
			case ROLLUP:
			case ORDER:
			case HAVING:
			case LIMIT:
			case AT:
			case OR:
			case AND:
			case IN:
			case NOT:
			case NO:
			case EXISTS:
			case BETWEEN:
			case LIKE:
			case RLIKE:
			case IS:
			case NULL:
			case TRUE:
			case FALSE:
			case NULLS:
			case ASC:
			case DESC:
			case FOR:
			case INTERVAL:
			case CASE:
			case WHEN:
			case THEN:
			case ELSE:
			case END:
			case JOIN:
			case CROSS:
			case OUTER:
			case INNER:
			case LEFT:
			case SEMI:
			case RIGHT:
			case FULL:
			case NATURAL:
			case ON:
			case PIVOT:
			case LATERAL:
			case WINDOW:
			case OVER:
			case PARTITION:
			case RANGE:
			case ROWS:
			case UNBOUNDED:
			case PRECEDING:
			case FOLLOWING:
			case CURRENT:
			case FIRST:
			case AFTER:
			case LAST:
			case ROW:
			case WITH:
			case CREATE:
			case TABLE:
			case DIRECTORY:
			case VIEW:
			case REPLACE:
			case INSERT:
			case DELETE:
			case INTO:
			case DESCRIBE:
			case EXPLAIN:
			case FORMAT:
			case LOGICAL:
			case CODEGEN:
			case COST:
			case CAST:
			case SHOW:
			case TABLES:
			case COLUMNS:
			case COLUMN:
			case USE:
			case PARTITIONS:
			case FUNCTIONS:
			case DROP:
			case UNION:
			case EXCEPT:
			case SETMINUS:
			case INTERSECT:
			case TO:
			case TABLESAMPLE:
			case STRATIFY:
			case ALTER:
			case RENAME:
			case ARRAY:
			case MAP:
			case STRUCT:
			case COMMENT:
			case SET:
			case RESET:
			case DATA:
			case START:
			case TRANSACTION:
			case COMMIT:
			case ROLLBACK:
			case MACRO:
			case IGNORE:
			case BOTH:
			case LEADING:
			case TRAILING:
			case IF:
			case POSITION:
			case EXTRACT:
			case DIV:
			case PERCENTLIT:
			case BUCKET:
			case OUT:
			case OF:
			case SORT:
			case CLUSTER:
			case DISTRIBUTE:
			case OVERWRITE:
			case TRANSFORM:
			case REDUCE:
			case SERDE:
			case SERDEPROPERTIES:
			case RECORDREADER:
			case RECORDWRITER:
			case DELIMITED:
			case FIELDS:
			case TERMINATED:
			case COLLECTION:
			case ITEMS:
			case KEYS:
			case ESCAPED:
			case LINES:
			case SEPARATED:
			case FUNCTION:
			case EXTENDED:
			case REFRESH:
			case CLEAR:
			case CACHE:
			case UNCACHE:
			case LAZY:
			case FORMATTED:
			case GLOBAL:
			case TEMPORARY:
			case OPTIONS:
			case UNSET:
			case TBLPROPERTIES:
			case DBPROPERTIES:
			case BUCKETS:
			case SKEWED:
			case STORED:
			case DIRECTORIES:
			case LOCATION:
			case EXCHANGE:
			case ARCHIVE:
			case UNARCHIVE:
			case FILEFORMAT:
			case TOUCH:
			case COMPACT:
			case CONCATENATE:
			case CHANGE:
			case CASCADE:
			case RESTRICT:
			case CLUSTERED:
			case SORTED:
			case PURGE:
			case INPUTFORMAT:
			case OUTPUTFORMAT:
			case DATABASE:
			case DATABASES:
			case DFS:
			case TRUNCATE:
			case ANALYZE:
			case COMPUTE:
			case LIST:
			case STATISTICS:
			case PARTITIONED:
			case EXTERNAL:
			case DEFINED:
			case REVOKE:
			case GRANT:
			case LOCK:
			case UNLOCK:
			case MSCK:
			case REPAIR:
			case RECOVER:
			case EXPORT:
			case IMPORT:
			case LOAD:
			case ROLE:
			case ROLES:
			case COMPACTIONS:
			case PRINCIPALS:
			case TRANSACTIONS:
			case INDEX:
			case INDEXES:
			case LOCKS:
			case OPTION:
			case ANTI:
			case LOCAL:
			case INPATH:
			case IDENTIFIER:
			case BACKQUOTED_IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(2516);
				dtColIdentifier();
				setState(2521);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(2517);
					match(T__2);
					setState(2518);
					dtColIdentifier();
					}
					}
					setState(2523);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(2524);
				dataType();
				setState(2527);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==AS) {
					{
					setState(2525);
					match(AS);
					setState(2526);
					identifier();
					}
				}

				setState(2531);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMENT) {
					{
					setState(2529);
					match(COMMENT);
					setState(2530);
					match(STRING);
					}
				}

				}
				break;
			case WATERMARK:
				enterOuterAlt(_localctx, 2);
				{
				setState(2533);
				match(WATERMARK);
				setState(2534);
				match(FOR);
				setState(2535);
				identifier();
				setState(2536);
				match(AS);
				setState(2537);
				primaryExpression(0);
				}
				break;
			case T__15:
				enterOuterAlt(_localctx, 3);
				{
				setState(2539);
				match(T__15);
				setState(2540);
				match(T__16);
				setState(2541);
				match(T__0);
				setState(2542);
				dtColIdentifier();
				setState(2547);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(2543);
					match(T__3);
					setState(2544);
					dtColIdentifier();
					}
					}
					setState(2549);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(2550);
				match(T__1);
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

	public static class DtColIdentifierContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public DtColIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dtColIdentifier; }
	}

	public final DtColIdentifierContext dtColIdentifier() throws RecognitionException {
		DtColIdentifierContext _localctx = new DtColIdentifierContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_dtColIdentifier);
		try {
			setState(2560);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,333,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2554);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2555);
				identifier();
				setState(2556);
				match(T__13);
				setState(2557);
				valueExpression(0);
				setState(2558);
				match(T__14);
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

	public static class ComplexColTypeListContext extends ParserRuleContext {
		public List<ComplexColTypeContext> complexColType() {
			return getRuleContexts(ComplexColTypeContext.class);
		}
		public ComplexColTypeContext complexColType(int i) {
			return getRuleContext(ComplexColTypeContext.class,i);
		}
		public ComplexColTypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complexColTypeList; }
	}

	public final ComplexColTypeListContext complexColTypeList() throws RecognitionException {
		ComplexColTypeListContext _localctx = new ComplexColTypeListContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_complexColTypeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2562);
			complexColType();
			setState(2567);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(2563);
				match(T__3);
				setState(2564);
				complexColType();
				}
				}
				setState(2569);
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

	public static class ComplexColTypeContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public TerminalNode COMMENT() { return getToken(sqlParser.COMMENT, 0); }
		public TerminalNode STRING() { return getToken(sqlParser.STRING, 0); }
		public ComplexColTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complexColType; }
	}

	public final ComplexColTypeContext complexColType() throws RecognitionException {
		ComplexColTypeContext _localctx = new ComplexColTypeContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_complexColType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2570);
			identifier();
			setState(2571);
			match(T__17);
			setState(2572);
			dataType();
			setState(2575);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMENT) {
				{
				setState(2573);
				match(COMMENT);
				setState(2574);
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

	public static class WhenClauseContext extends ParserRuleContext {
		public ExpressionContext condition;
		public ExpressionContext result;
		public TerminalNode WHEN() { return getToken(sqlParser.WHEN, 0); }
		public TerminalNode THEN() { return getToken(sqlParser.THEN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public WhenClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whenClause; }
	}

	public final WhenClauseContext whenClause() throws RecognitionException {
		WhenClauseContext _localctx = new WhenClauseContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_whenClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2577);
			match(WHEN);
			setState(2578);
			((WhenClauseContext)_localctx).condition = expression();
			setState(2579);
			match(THEN);
			setState(2580);
			((WhenClauseContext)_localctx).result = expression();
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

	public static class WindowsContext extends ParserRuleContext {
		public TerminalNode WINDOW() { return getToken(sqlParser.WINDOW, 0); }
		public List<NamedWindowContext> namedWindow() {
			return getRuleContexts(NamedWindowContext.class);
		}
		public NamedWindowContext namedWindow(int i) {
			return getRuleContext(NamedWindowContext.class,i);
		}
		public WindowsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windows; }
	}

	public final WindowsContext windows() throws RecognitionException {
		WindowsContext _localctx = new WindowsContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_windows);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2582);
			match(WINDOW);
			setState(2583);
			namedWindow();
			setState(2588);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,336,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(2584);
					match(T__3);
					setState(2585);
					namedWindow();
					}
					} 
				}
				setState(2590);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,336,_ctx);
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

	public static class NamedWindowContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public WindowSpecContext windowSpec() {
			return getRuleContext(WindowSpecContext.class,0);
		}
		public NamedWindowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedWindow; }
	}

	public final NamedWindowContext namedWindow() throws RecognitionException {
		NamedWindowContext _localctx = new NamedWindowContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_namedWindow);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2591);
			identifier();
			setState(2592);
			match(AS);
			setState(2593);
			windowSpec();
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

	public static class WindowSpecContext extends ParserRuleContext {
		public WindowSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windowSpec; }
	 
		public WindowSpecContext() { }
		public void copyFrom(WindowSpecContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class WindowRefContext extends WindowSpecContext {
		public IdentifierContext name;
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public WindowRefContext(WindowSpecContext ctx) { copyFrom(ctx); }
	}
	public static class WindowDefContext extends WindowSpecContext {
		public ExpressionContext expression;
		public List<ExpressionContext> partition = new ArrayList<ExpressionContext>();
		public TerminalNode CLUSTER() { return getToken(sqlParser.CLUSTER, 0); }
		public List<TerminalNode> BY() { return getTokens(sqlParser.BY); }
		public TerminalNode BY(int i) {
			return getToken(sqlParser.BY, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public WindowFrameContext windowFrame() {
			return getRuleContext(WindowFrameContext.class,0);
		}
		public List<SortItemContext> sortItem() {
			return getRuleContexts(SortItemContext.class);
		}
		public SortItemContext sortItem(int i) {
			return getRuleContext(SortItemContext.class,i);
		}
		public TerminalNode PARTITION() { return getToken(sqlParser.PARTITION, 0); }
		public TerminalNode DISTRIBUTE() { return getToken(sqlParser.DISTRIBUTE, 0); }
		public TerminalNode ORDER() { return getToken(sqlParser.ORDER, 0); }
		public TerminalNode SORT() { return getToken(sqlParser.SORT, 0); }
		public WindowDefContext(WindowSpecContext ctx) { copyFrom(ctx); }
	}

	public final WindowSpecContext windowSpec() throws RecognitionException {
		WindowSpecContext _localctx = new WindowSpecContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_windowSpec);
		int _la;
		try {
			setState(2637);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SELECT:
			case FROM:
			case ADD:
			case AS:
			case ALL:
			case ANY:
			case DISTINCT:
			case WHERE:
			case GROUP:
			case BY:
			case GROUPING:
			case SETS:
			case CUBE:
			case ROLLUP:
			case ORDER:
			case HAVING:
			case LIMIT:
			case AT:
			case OR:
			case AND:
			case IN:
			case NOT:
			case NO:
			case EXISTS:
			case BETWEEN:
			case LIKE:
			case RLIKE:
			case IS:
			case NULL:
			case TRUE:
			case FALSE:
			case NULLS:
			case ASC:
			case DESC:
			case FOR:
			case INTERVAL:
			case CASE:
			case WHEN:
			case THEN:
			case ELSE:
			case END:
			case JOIN:
			case CROSS:
			case OUTER:
			case INNER:
			case LEFT:
			case SEMI:
			case RIGHT:
			case FULL:
			case NATURAL:
			case ON:
			case PIVOT:
			case LATERAL:
			case WINDOW:
			case OVER:
			case PARTITION:
			case RANGE:
			case ROWS:
			case UNBOUNDED:
			case PRECEDING:
			case FOLLOWING:
			case CURRENT:
			case FIRST:
			case AFTER:
			case LAST:
			case ROW:
			case WITH:
			case CREATE:
			case TABLE:
			case DIRECTORY:
			case VIEW:
			case REPLACE:
			case INSERT:
			case DELETE:
			case INTO:
			case DESCRIBE:
			case EXPLAIN:
			case FORMAT:
			case LOGICAL:
			case CODEGEN:
			case COST:
			case CAST:
			case SHOW:
			case TABLES:
			case COLUMNS:
			case COLUMN:
			case USE:
			case PARTITIONS:
			case FUNCTIONS:
			case DROP:
			case UNION:
			case EXCEPT:
			case SETMINUS:
			case INTERSECT:
			case TO:
			case TABLESAMPLE:
			case STRATIFY:
			case ALTER:
			case RENAME:
			case ARRAY:
			case MAP:
			case STRUCT:
			case COMMENT:
			case SET:
			case RESET:
			case DATA:
			case START:
			case TRANSACTION:
			case COMMIT:
			case ROLLBACK:
			case MACRO:
			case IGNORE:
			case BOTH:
			case LEADING:
			case TRAILING:
			case IF:
			case POSITION:
			case EXTRACT:
			case DIV:
			case PERCENTLIT:
			case BUCKET:
			case OUT:
			case OF:
			case SORT:
			case CLUSTER:
			case DISTRIBUTE:
			case OVERWRITE:
			case TRANSFORM:
			case REDUCE:
			case SERDE:
			case SERDEPROPERTIES:
			case RECORDREADER:
			case RECORDWRITER:
			case DELIMITED:
			case FIELDS:
			case TERMINATED:
			case COLLECTION:
			case ITEMS:
			case KEYS:
			case ESCAPED:
			case LINES:
			case SEPARATED:
			case FUNCTION:
			case EXTENDED:
			case REFRESH:
			case CLEAR:
			case CACHE:
			case UNCACHE:
			case LAZY:
			case FORMATTED:
			case GLOBAL:
			case TEMPORARY:
			case OPTIONS:
			case UNSET:
			case TBLPROPERTIES:
			case DBPROPERTIES:
			case BUCKETS:
			case SKEWED:
			case STORED:
			case DIRECTORIES:
			case LOCATION:
			case EXCHANGE:
			case ARCHIVE:
			case UNARCHIVE:
			case FILEFORMAT:
			case TOUCH:
			case COMPACT:
			case CONCATENATE:
			case CHANGE:
			case CASCADE:
			case RESTRICT:
			case CLUSTERED:
			case SORTED:
			case PURGE:
			case INPUTFORMAT:
			case OUTPUTFORMAT:
			case DATABASE:
			case DATABASES:
			case DFS:
			case TRUNCATE:
			case ANALYZE:
			case COMPUTE:
			case LIST:
			case STATISTICS:
			case PARTITIONED:
			case EXTERNAL:
			case DEFINED:
			case REVOKE:
			case GRANT:
			case LOCK:
			case UNLOCK:
			case MSCK:
			case REPAIR:
			case RECOVER:
			case EXPORT:
			case IMPORT:
			case LOAD:
			case ROLE:
			case ROLES:
			case COMPACTIONS:
			case PRINCIPALS:
			case TRANSACTIONS:
			case INDEX:
			case INDEXES:
			case LOCKS:
			case OPTION:
			case ANTI:
			case LOCAL:
			case INPATH:
			case IDENTIFIER:
			case BACKQUOTED_IDENTIFIER:
				_localctx = new WindowRefContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2595);
				((WindowRefContext)_localctx).name = identifier();
				}
				break;
			case T__0:
				_localctx = new WindowDefContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(2596);
				match(T__0);
				setState(2631);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case CLUSTER:
					{
					setState(2597);
					match(CLUSTER);
					setState(2598);
					match(BY);
					setState(2599);
					((WindowDefContext)_localctx).expression = expression();
					((WindowDefContext)_localctx).partition.add(((WindowDefContext)_localctx).expression);
					setState(2604);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__3) {
						{
						{
						setState(2600);
						match(T__3);
						setState(2601);
						((WindowDefContext)_localctx).expression = expression();
						((WindowDefContext)_localctx).partition.add(((WindowDefContext)_localctx).expression);
						}
						}
						setState(2606);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
					break;
				case T__1:
				case ORDER:
				case PARTITION:
				case RANGE:
				case ROWS:
				case SORT:
				case DISTRIBUTE:
					{
					setState(2617);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==PARTITION || _la==DISTRIBUTE) {
						{
						setState(2607);
						_la = _input.LA(1);
						if ( !(_la==PARTITION || _la==DISTRIBUTE) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(2608);
						match(BY);
						setState(2609);
						((WindowDefContext)_localctx).expression = expression();
						((WindowDefContext)_localctx).partition.add(((WindowDefContext)_localctx).expression);
						setState(2614);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==T__3) {
							{
							{
							setState(2610);
							match(T__3);
							setState(2611);
							((WindowDefContext)_localctx).expression = expression();
							((WindowDefContext)_localctx).partition.add(((WindowDefContext)_localctx).expression);
							}
							}
							setState(2616);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						}
					}

					setState(2629);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==ORDER || _la==SORT) {
						{
						setState(2619);
						_la = _input.LA(1);
						if ( !(_la==ORDER || _la==SORT) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(2620);
						match(BY);
						setState(2621);
						sortItem();
						setState(2626);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==T__3) {
							{
							{
							setState(2622);
							match(T__3);
							setState(2623);
							sortItem();
							}
							}
							setState(2628);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2634);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==RANGE || _la==ROWS) {
					{
					setState(2633);
					windowFrame();
					}
				}

				setState(2636);
				match(T__1);
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

	public static class WindowFrameContext extends ParserRuleContext {
		public Token frameType;
		public FrameBoundContext start;
		public FrameBoundContext end;
		public TerminalNode RANGE() { return getToken(sqlParser.RANGE, 0); }
		public List<FrameBoundContext> frameBound() {
			return getRuleContexts(FrameBoundContext.class);
		}
		public FrameBoundContext frameBound(int i) {
			return getRuleContext(FrameBoundContext.class,i);
		}
		public TerminalNode ROWS() { return getToken(sqlParser.ROWS, 0); }
		public TerminalNode BETWEEN() { return getToken(sqlParser.BETWEEN, 0); }
		public TerminalNode AND() { return getToken(sqlParser.AND, 0); }
		public WindowFrameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windowFrame; }
	}

	public final WindowFrameContext windowFrame() throws RecognitionException {
		WindowFrameContext _localctx = new WindowFrameContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_windowFrame);
		try {
			setState(2655);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,345,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2639);
				((WindowFrameContext)_localctx).frameType = match(RANGE);
				setState(2640);
				((WindowFrameContext)_localctx).start = frameBound();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2641);
				((WindowFrameContext)_localctx).frameType = match(ROWS);
				setState(2642);
				((WindowFrameContext)_localctx).start = frameBound();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2643);
				((WindowFrameContext)_localctx).frameType = match(RANGE);
				setState(2644);
				match(BETWEEN);
				setState(2645);
				((WindowFrameContext)_localctx).start = frameBound();
				setState(2646);
				match(AND);
				setState(2647);
				((WindowFrameContext)_localctx).end = frameBound();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2649);
				((WindowFrameContext)_localctx).frameType = match(ROWS);
				setState(2650);
				match(BETWEEN);
				setState(2651);
				((WindowFrameContext)_localctx).start = frameBound();
				setState(2652);
				match(AND);
				setState(2653);
				((WindowFrameContext)_localctx).end = frameBound();
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

	public static class FrameBoundContext extends ParserRuleContext {
		public Token boundType;
		public TerminalNode UNBOUNDED() { return getToken(sqlParser.UNBOUNDED, 0); }
		public TerminalNode PRECEDING() { return getToken(sqlParser.PRECEDING, 0); }
		public TerminalNode FOLLOWING() { return getToken(sqlParser.FOLLOWING, 0); }
		public TerminalNode ROW() { return getToken(sqlParser.ROW, 0); }
		public TerminalNode CURRENT() { return getToken(sqlParser.CURRENT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FrameBoundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_frameBound; }
	}

	public final FrameBoundContext frameBound() throws RecognitionException {
		FrameBoundContext _localctx = new FrameBoundContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_frameBound);
		int _la;
		try {
			setState(2664);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,346,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2657);
				match(UNBOUNDED);
				setState(2658);
				((FrameBoundContext)_localctx).boundType = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==PRECEDING || _la==FOLLOWING) ) {
					((FrameBoundContext)_localctx).boundType = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2659);
				((FrameBoundContext)_localctx).boundType = match(CURRENT);
				setState(2660);
				match(ROW);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2661);
				expression();
				setState(2662);
				((FrameBoundContext)_localctx).boundType = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==PRECEDING || _la==FOLLOWING) ) {
					((FrameBoundContext)_localctx).boundType = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
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

	public static class QualifiedNameContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public QualifiedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifiedName; }
	}

	public final QualifiedNameContext qualifiedName() throws RecognitionException {
		QualifiedNameContext _localctx = new QualifiedNameContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_qualifiedName);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2666);
			identifier();
			setState(2671);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,347,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(2667);
					match(T__2);
					setState(2668);
					identifier();
					}
					} 
				}
				setState(2673);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,347,_ctx);
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
		public TerminalNode ANTI() { return getToken(sqlParser.ANTI, 0); }
		public TerminalNode FULL() { return getToken(sqlParser.FULL, 0); }
		public TerminalNode INNER() { return getToken(sqlParser.INNER, 0); }
		public TerminalNode LEFT() { return getToken(sqlParser.LEFT, 0); }
		public TerminalNode SEMI() { return getToken(sqlParser.SEMI, 0); }
		public TerminalNode RIGHT() { return getToken(sqlParser.RIGHT, 0); }
		public TerminalNode NATURAL() { return getToken(sqlParser.NATURAL, 0); }
		public TerminalNode JOIN() { return getToken(sqlParser.JOIN, 0); }
		public TerminalNode CROSS() { return getToken(sqlParser.CROSS, 0); }
		public TerminalNode ON() { return getToken(sqlParser.ON, 0); }
		public TerminalNode UNION() { return getToken(sqlParser.UNION, 0); }
		public TerminalNode INTERSECT() { return getToken(sqlParser.INTERSECT, 0); }
		public TerminalNode EXCEPT() { return getToken(sqlParser.EXCEPT, 0); }
		public TerminalNode SETMINUS() { return getToken(sqlParser.SETMINUS, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 220, RULE_identifier);
		try {
			setState(2689);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SELECT:
			case FROM:
			case ADD:
			case AS:
			case ALL:
			case ANY:
			case DISTINCT:
			case WHERE:
			case GROUP:
			case BY:
			case GROUPING:
			case SETS:
			case CUBE:
			case ROLLUP:
			case ORDER:
			case HAVING:
			case LIMIT:
			case AT:
			case OR:
			case AND:
			case IN:
			case NOT:
			case NO:
			case EXISTS:
			case BETWEEN:
			case LIKE:
			case RLIKE:
			case IS:
			case NULL:
			case TRUE:
			case FALSE:
			case NULLS:
			case ASC:
			case DESC:
			case FOR:
			case INTERVAL:
			case CASE:
			case WHEN:
			case THEN:
			case ELSE:
			case END:
			case OUTER:
			case PIVOT:
			case LATERAL:
			case WINDOW:
			case OVER:
			case PARTITION:
			case RANGE:
			case ROWS:
			case UNBOUNDED:
			case PRECEDING:
			case FOLLOWING:
			case CURRENT:
			case FIRST:
			case AFTER:
			case LAST:
			case ROW:
			case WITH:
			case CREATE:
			case TABLE:
			case DIRECTORY:
			case VIEW:
			case REPLACE:
			case INSERT:
			case DELETE:
			case INTO:
			case DESCRIBE:
			case EXPLAIN:
			case FORMAT:
			case LOGICAL:
			case CODEGEN:
			case COST:
			case CAST:
			case SHOW:
			case TABLES:
			case COLUMNS:
			case COLUMN:
			case USE:
			case PARTITIONS:
			case FUNCTIONS:
			case DROP:
			case TO:
			case TABLESAMPLE:
			case STRATIFY:
			case ALTER:
			case RENAME:
			case ARRAY:
			case MAP:
			case STRUCT:
			case COMMENT:
			case SET:
			case RESET:
			case DATA:
			case START:
			case TRANSACTION:
			case COMMIT:
			case ROLLBACK:
			case MACRO:
			case IGNORE:
			case BOTH:
			case LEADING:
			case TRAILING:
			case IF:
			case POSITION:
			case EXTRACT:
			case DIV:
			case PERCENTLIT:
			case BUCKET:
			case OUT:
			case OF:
			case SORT:
			case CLUSTER:
			case DISTRIBUTE:
			case OVERWRITE:
			case TRANSFORM:
			case REDUCE:
			case SERDE:
			case SERDEPROPERTIES:
			case RECORDREADER:
			case RECORDWRITER:
			case DELIMITED:
			case FIELDS:
			case TERMINATED:
			case COLLECTION:
			case ITEMS:
			case KEYS:
			case ESCAPED:
			case LINES:
			case SEPARATED:
			case FUNCTION:
			case EXTENDED:
			case REFRESH:
			case CLEAR:
			case CACHE:
			case UNCACHE:
			case LAZY:
			case FORMATTED:
			case GLOBAL:
			case TEMPORARY:
			case OPTIONS:
			case UNSET:
			case TBLPROPERTIES:
			case DBPROPERTIES:
			case BUCKETS:
			case SKEWED:
			case STORED:
			case DIRECTORIES:
			case LOCATION:
			case EXCHANGE:
			case ARCHIVE:
			case UNARCHIVE:
			case FILEFORMAT:
			case TOUCH:
			case COMPACT:
			case CONCATENATE:
			case CHANGE:
			case CASCADE:
			case RESTRICT:
			case CLUSTERED:
			case SORTED:
			case PURGE:
			case INPUTFORMAT:
			case OUTPUTFORMAT:
			case DATABASE:
			case DATABASES:
			case DFS:
			case TRUNCATE:
			case ANALYZE:
			case COMPUTE:
			case LIST:
			case STATISTICS:
			case PARTITIONED:
			case EXTERNAL:
			case DEFINED:
			case REVOKE:
			case GRANT:
			case LOCK:
			case UNLOCK:
			case MSCK:
			case REPAIR:
			case RECOVER:
			case EXPORT:
			case IMPORT:
			case LOAD:
			case ROLE:
			case ROLES:
			case COMPACTIONS:
			case PRINCIPALS:
			case TRANSACTIONS:
			case INDEX:
			case INDEXES:
			case LOCKS:
			case OPTION:
			case LOCAL:
			case INPATH:
			case IDENTIFIER:
			case BACKQUOTED_IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(2674);
				strictIdentifier();
				}
				break;
			case ANTI:
				enterOuterAlt(_localctx, 2);
				{
				setState(2675);
				match(ANTI);
				}
				break;
			case FULL:
				enterOuterAlt(_localctx, 3);
				{
				setState(2676);
				match(FULL);
				}
				break;
			case INNER:
				enterOuterAlt(_localctx, 4);
				{
				setState(2677);
				match(INNER);
				}
				break;
			case LEFT:
				enterOuterAlt(_localctx, 5);
				{
				setState(2678);
				match(LEFT);
				}
				break;
			case SEMI:
				enterOuterAlt(_localctx, 6);
				{
				setState(2679);
				match(SEMI);
				}
				break;
			case RIGHT:
				enterOuterAlt(_localctx, 7);
				{
				setState(2680);
				match(RIGHT);
				}
				break;
			case NATURAL:
				enterOuterAlt(_localctx, 8);
				{
				setState(2681);
				match(NATURAL);
				}
				break;
			case JOIN:
				enterOuterAlt(_localctx, 9);
				{
				setState(2682);
				match(JOIN);
				}
				break;
			case CROSS:
				enterOuterAlt(_localctx, 10);
				{
				setState(2683);
				match(CROSS);
				}
				break;
			case ON:
				enterOuterAlt(_localctx, 11);
				{
				setState(2684);
				match(ON);
				}
				break;
			case UNION:
				enterOuterAlt(_localctx, 12);
				{
				setState(2685);
				match(UNION);
				}
				break;
			case INTERSECT:
				enterOuterAlt(_localctx, 13);
				{
				setState(2686);
				match(INTERSECT);
				}
				break;
			case EXCEPT:
				enterOuterAlt(_localctx, 14);
				{
				setState(2687);
				match(EXCEPT);
				}
				break;
			case SETMINUS:
				enterOuterAlt(_localctx, 15);
				{
				setState(2688);
				match(SETMINUS);
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
		public TerminalNode IDENTIFIER() { return getToken(sqlParser.IDENTIFIER, 0); }
		public NonReservedContext nonReserved() {
			return getRuleContext(NonReservedContext.class,0);
		}
		public UnquotedIdentifierContext(StrictIdentifierContext ctx) { copyFrom(ctx); }
	}

	public final StrictIdentifierContext strictIdentifier() throws RecognitionException {
		StrictIdentifierContext _localctx = new StrictIdentifierContext(_ctx, getState());
		enterRule(_localctx, 222, RULE_strictIdentifier);
		try {
			setState(2694);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2691);
				match(IDENTIFIER);
				}
				break;
			case BACKQUOTED_IDENTIFIER:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(2692);
				quotedIdentifier();
				}
				break;
			case SELECT:
			case FROM:
			case ADD:
			case AS:
			case ALL:
			case ANY:
			case DISTINCT:
			case WHERE:
			case GROUP:
			case BY:
			case GROUPING:
			case SETS:
			case CUBE:
			case ROLLUP:
			case ORDER:
			case HAVING:
			case LIMIT:
			case AT:
			case OR:
			case AND:
			case IN:
			case NOT:
			case NO:
			case EXISTS:
			case BETWEEN:
			case LIKE:
			case RLIKE:
			case IS:
			case NULL:
			case TRUE:
			case FALSE:
			case NULLS:
			case ASC:
			case DESC:
			case FOR:
			case INTERVAL:
			case CASE:
			case WHEN:
			case THEN:
			case ELSE:
			case END:
			case OUTER:
			case PIVOT:
			case LATERAL:
			case WINDOW:
			case OVER:
			case PARTITION:
			case RANGE:
			case ROWS:
			case UNBOUNDED:
			case PRECEDING:
			case FOLLOWING:
			case CURRENT:
			case FIRST:
			case AFTER:
			case LAST:
			case ROW:
			case WITH:
			case CREATE:
			case TABLE:
			case DIRECTORY:
			case VIEW:
			case REPLACE:
			case INSERT:
			case DELETE:
			case INTO:
			case DESCRIBE:
			case EXPLAIN:
			case FORMAT:
			case LOGICAL:
			case CODEGEN:
			case COST:
			case CAST:
			case SHOW:
			case TABLES:
			case COLUMNS:
			case COLUMN:
			case USE:
			case PARTITIONS:
			case FUNCTIONS:
			case DROP:
			case TO:
			case TABLESAMPLE:
			case STRATIFY:
			case ALTER:
			case RENAME:
			case ARRAY:
			case MAP:
			case STRUCT:
			case COMMENT:
			case SET:
			case RESET:
			case DATA:
			case START:
			case TRANSACTION:
			case COMMIT:
			case ROLLBACK:
			case MACRO:
			case IGNORE:
			case BOTH:
			case LEADING:
			case TRAILING:
			case IF:
			case POSITION:
			case EXTRACT:
			case DIV:
			case PERCENTLIT:
			case BUCKET:
			case OUT:
			case OF:
			case SORT:
			case CLUSTER:
			case DISTRIBUTE:
			case OVERWRITE:
			case TRANSFORM:
			case REDUCE:
			case SERDE:
			case SERDEPROPERTIES:
			case RECORDREADER:
			case RECORDWRITER:
			case DELIMITED:
			case FIELDS:
			case TERMINATED:
			case COLLECTION:
			case ITEMS:
			case KEYS:
			case ESCAPED:
			case LINES:
			case SEPARATED:
			case FUNCTION:
			case EXTENDED:
			case REFRESH:
			case CLEAR:
			case CACHE:
			case UNCACHE:
			case LAZY:
			case FORMATTED:
			case GLOBAL:
			case TEMPORARY:
			case OPTIONS:
			case UNSET:
			case TBLPROPERTIES:
			case DBPROPERTIES:
			case BUCKETS:
			case SKEWED:
			case STORED:
			case DIRECTORIES:
			case LOCATION:
			case EXCHANGE:
			case ARCHIVE:
			case UNARCHIVE:
			case FILEFORMAT:
			case TOUCH:
			case COMPACT:
			case CONCATENATE:
			case CHANGE:
			case CASCADE:
			case RESTRICT:
			case CLUSTERED:
			case SORTED:
			case PURGE:
			case INPUTFORMAT:
			case OUTPUTFORMAT:
			case DATABASE:
			case DATABASES:
			case DFS:
			case TRUNCATE:
			case ANALYZE:
			case COMPUTE:
			case LIST:
			case STATISTICS:
			case PARTITIONED:
			case EXTERNAL:
			case DEFINED:
			case REVOKE:
			case GRANT:
			case LOCK:
			case UNLOCK:
			case MSCK:
			case REPAIR:
			case RECOVER:
			case EXPORT:
			case IMPORT:
			case LOAD:
			case ROLE:
			case ROLES:
			case COMPACTIONS:
			case PRINCIPALS:
			case TRANSACTIONS:
			case INDEX:
			case INDEXES:
			case LOCKS:
			case OPTION:
			case LOCAL:
			case INPATH:
				_localctx = new UnquotedIdentifierContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(2693);
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
		public TerminalNode BACKQUOTED_IDENTIFIER() { return getToken(sqlParser.BACKQUOTED_IDENTIFIER, 0); }
		public QuotedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quotedIdentifier; }
	}

	public final QuotedIdentifierContext quotedIdentifier() throws RecognitionException {
		QuotedIdentifierContext _localctx = new QuotedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 224, RULE_quotedIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2696);
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
		public TerminalNode DECIMAL_VALUE() { return getToken(sqlParser.DECIMAL_VALUE, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public DecimalLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class BigIntLiteralContext extends NumberContext {
		public TerminalNode BIGINT_LITERAL() { return getToken(sqlParser.BIGINT_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public BigIntLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class TinyIntLiteralContext extends NumberContext {
		public TerminalNode TINYINT_LITERAL() { return getToken(sqlParser.TINYINT_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public TinyIntLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class BigDecimalLiteralContext extends NumberContext {
		public TerminalNode BIGDECIMAL_LITERAL() { return getToken(sqlParser.BIGDECIMAL_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public BigDecimalLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class DoubleLiteralContext extends NumberContext {
		public TerminalNode DOUBLE_LITERAL() { return getToken(sqlParser.DOUBLE_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public DoubleLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class IntegerLiteralContext extends NumberContext {
		public TerminalNode INTEGER_VALUE() { return getToken(sqlParser.INTEGER_VALUE, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public IntegerLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}
	public static class SmallIntLiteralContext extends NumberContext {
		public TerminalNode SMALLINT_LITERAL() { return getToken(sqlParser.SMALLINT_LITERAL, 0); }
		public TerminalNode MINUS() { return getToken(sqlParser.MINUS, 0); }
		public SmallIntLiteralContext(NumberContext ctx) { copyFrom(ctx); }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 226, RULE_number);
		int _la;
		try {
			setState(2726);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,357,_ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(2699);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(2698);
					match(MINUS);
					}
				}

				setState(2701);
				match(DECIMAL_VALUE);
				}
				break;
			case 2:
				_localctx = new IntegerLiteralContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(2703);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(2702);
					match(MINUS);
					}
				}

				setState(2705);
				match(INTEGER_VALUE);
				}
				break;
			case 3:
				_localctx = new BigIntLiteralContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(2707);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(2706);
					match(MINUS);
					}
				}

				setState(2709);
				match(BIGINT_LITERAL);
				}
				break;
			case 4:
				_localctx = new SmallIntLiteralContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(2711);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(2710);
					match(MINUS);
					}
				}

				setState(2713);
				match(SMALLINT_LITERAL);
				}
				break;
			case 5:
				_localctx = new TinyIntLiteralContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(2715);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(2714);
					match(MINUS);
					}
				}

				setState(2717);
				match(TINYINT_LITERAL);
				}
				break;
			case 6:
				_localctx = new DoubleLiteralContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(2719);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(2718);
					match(MINUS);
					}
				}

				setState(2721);
				match(DOUBLE_LITERAL);
				}
				break;
			case 7:
				_localctx = new BigDecimalLiteralContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(2723);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(2722);
					match(MINUS);
					}
				}

				setState(2725);
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

	public static class NonReservedContext extends ParserRuleContext {
		public TerminalNode SHOW() { return getToken(sqlParser.SHOW, 0); }
		public TerminalNode TABLES() { return getToken(sqlParser.TABLES, 0); }
		public TerminalNode COLUMNS() { return getToken(sqlParser.COLUMNS, 0); }
		public TerminalNode COLUMN() { return getToken(sqlParser.COLUMN, 0); }
		public TerminalNode PARTITIONS() { return getToken(sqlParser.PARTITIONS, 0); }
		public TerminalNode FUNCTIONS() { return getToken(sqlParser.FUNCTIONS, 0); }
		public TerminalNode DATABASES() { return getToken(sqlParser.DATABASES, 0); }
		public TerminalNode ADD() { return getToken(sqlParser.ADD, 0); }
		public TerminalNode OVER() { return getToken(sqlParser.OVER, 0); }
		public TerminalNode PARTITION() { return getToken(sqlParser.PARTITION, 0); }
		public TerminalNode RANGE() { return getToken(sqlParser.RANGE, 0); }
		public TerminalNode ROWS() { return getToken(sqlParser.ROWS, 0); }
		public TerminalNode PRECEDING() { return getToken(sqlParser.PRECEDING, 0); }
		public TerminalNode FOLLOWING() { return getToken(sqlParser.FOLLOWING, 0); }
		public TerminalNode CURRENT() { return getToken(sqlParser.CURRENT, 0); }
		public TerminalNode ROW() { return getToken(sqlParser.ROW, 0); }
		public TerminalNode LAST() { return getToken(sqlParser.LAST, 0); }
		public TerminalNode FIRST() { return getToken(sqlParser.FIRST, 0); }
		public TerminalNode AFTER() { return getToken(sqlParser.AFTER, 0); }
		public TerminalNode MAP() { return getToken(sqlParser.MAP, 0); }
		public TerminalNode ARRAY() { return getToken(sqlParser.ARRAY, 0); }
		public TerminalNode STRUCT() { return getToken(sqlParser.STRUCT, 0); }
		public TerminalNode PIVOT() { return getToken(sqlParser.PIVOT, 0); }
		public TerminalNode LATERAL() { return getToken(sqlParser.LATERAL, 0); }
		public TerminalNode WINDOW() { return getToken(sqlParser.WINDOW, 0); }
		public TerminalNode REDUCE() { return getToken(sqlParser.REDUCE, 0); }
		public TerminalNode TRANSFORM() { return getToken(sqlParser.TRANSFORM, 0); }
		public TerminalNode SERDE() { return getToken(sqlParser.SERDE, 0); }
		public TerminalNode SERDEPROPERTIES() { return getToken(sqlParser.SERDEPROPERTIES, 0); }
		public TerminalNode RECORDREADER() { return getToken(sqlParser.RECORDREADER, 0); }
		public TerminalNode DELIMITED() { return getToken(sqlParser.DELIMITED, 0); }
		public TerminalNode FIELDS() { return getToken(sqlParser.FIELDS, 0); }
		public TerminalNode TERMINATED() { return getToken(sqlParser.TERMINATED, 0); }
		public TerminalNode COLLECTION() { return getToken(sqlParser.COLLECTION, 0); }
		public TerminalNode ITEMS() { return getToken(sqlParser.ITEMS, 0); }
		public TerminalNode KEYS() { return getToken(sqlParser.KEYS, 0); }
		public TerminalNode ESCAPED() { return getToken(sqlParser.ESCAPED, 0); }
		public TerminalNode LINES() { return getToken(sqlParser.LINES, 0); }
		public TerminalNode SEPARATED() { return getToken(sqlParser.SEPARATED, 0); }
		public TerminalNode EXTENDED() { return getToken(sqlParser.EXTENDED, 0); }
		public TerminalNode REFRESH() { return getToken(sqlParser.REFRESH, 0); }
		public TerminalNode CLEAR() { return getToken(sqlParser.CLEAR, 0); }
		public TerminalNode CACHE() { return getToken(sqlParser.CACHE, 0); }
		public TerminalNode UNCACHE() { return getToken(sqlParser.UNCACHE, 0); }
		public TerminalNode LAZY() { return getToken(sqlParser.LAZY, 0); }
		public TerminalNode GLOBAL() { return getToken(sqlParser.GLOBAL, 0); }
		public TerminalNode TEMPORARY() { return getToken(sqlParser.TEMPORARY, 0); }
		public TerminalNode OPTIONS() { return getToken(sqlParser.OPTIONS, 0); }
		public TerminalNode GROUPING() { return getToken(sqlParser.GROUPING, 0); }
		public TerminalNode CUBE() { return getToken(sqlParser.CUBE, 0); }
		public TerminalNode ROLLUP() { return getToken(sqlParser.ROLLUP, 0); }
		public TerminalNode EXPLAIN() { return getToken(sqlParser.EXPLAIN, 0); }
		public TerminalNode FORMAT() { return getToken(sqlParser.FORMAT, 0); }
		public TerminalNode LOGICAL() { return getToken(sqlParser.LOGICAL, 0); }
		public TerminalNode FORMATTED() { return getToken(sqlParser.FORMATTED, 0); }
		public TerminalNode CODEGEN() { return getToken(sqlParser.CODEGEN, 0); }
		public TerminalNode COST() { return getToken(sqlParser.COST, 0); }
		public TerminalNode TABLESAMPLE() { return getToken(sqlParser.TABLESAMPLE, 0); }
		public TerminalNode USE() { return getToken(sqlParser.USE, 0); }
		public TerminalNode TO() { return getToken(sqlParser.TO, 0); }
		public TerminalNode BUCKET() { return getToken(sqlParser.BUCKET, 0); }
		public TerminalNode PERCENTLIT() { return getToken(sqlParser.PERCENTLIT, 0); }
		public TerminalNode OUT() { return getToken(sqlParser.OUT, 0); }
		public TerminalNode OF() { return getToken(sqlParser.OF, 0); }
		public TerminalNode SET() { return getToken(sqlParser.SET, 0); }
		public TerminalNode RESET() { return getToken(sqlParser.RESET, 0); }
		public TerminalNode VIEW() { return getToken(sqlParser.VIEW, 0); }
		public TerminalNode REPLACE() { return getToken(sqlParser.REPLACE, 0); }
		public TerminalNode IF() { return getToken(sqlParser.IF, 0); }
		public TerminalNode POSITION() { return getToken(sqlParser.POSITION, 0); }
		public TerminalNode EXTRACT() { return getToken(sqlParser.EXTRACT, 0); }
		public TerminalNode NO() { return getToken(sqlParser.NO, 0); }
		public TerminalNode DATA() { return getToken(sqlParser.DATA, 0); }
		public TerminalNode START() { return getToken(sqlParser.START, 0); }
		public TerminalNode TRANSACTION() { return getToken(sqlParser.TRANSACTION, 0); }
		public TerminalNode COMMIT() { return getToken(sqlParser.COMMIT, 0); }
		public TerminalNode ROLLBACK() { return getToken(sqlParser.ROLLBACK, 0); }
		public TerminalNode IGNORE() { return getToken(sqlParser.IGNORE, 0); }
		public TerminalNode SORT() { return getToken(sqlParser.SORT, 0); }
		public TerminalNode CLUSTER() { return getToken(sqlParser.CLUSTER, 0); }
		public TerminalNode DISTRIBUTE() { return getToken(sqlParser.DISTRIBUTE, 0); }
		public TerminalNode UNSET() { return getToken(sqlParser.UNSET, 0); }
		public TerminalNode TBLPROPERTIES() { return getToken(sqlParser.TBLPROPERTIES, 0); }
		public TerminalNode SKEWED() { return getToken(sqlParser.SKEWED, 0); }
		public TerminalNode STORED() { return getToken(sqlParser.STORED, 0); }
		public TerminalNode DIRECTORIES() { return getToken(sqlParser.DIRECTORIES, 0); }
		public TerminalNode LOCATION() { return getToken(sqlParser.LOCATION, 0); }
		public TerminalNode EXCHANGE() { return getToken(sqlParser.EXCHANGE, 0); }
		public TerminalNode ARCHIVE() { return getToken(sqlParser.ARCHIVE, 0); }
		public TerminalNode UNARCHIVE() { return getToken(sqlParser.UNARCHIVE, 0); }
		public TerminalNode FILEFORMAT() { return getToken(sqlParser.FILEFORMAT, 0); }
		public TerminalNode TOUCH() { return getToken(sqlParser.TOUCH, 0); }
		public TerminalNode COMPACT() { return getToken(sqlParser.COMPACT, 0); }
		public TerminalNode CONCATENATE() { return getToken(sqlParser.CONCATENATE, 0); }
		public TerminalNode CHANGE() { return getToken(sqlParser.CHANGE, 0); }
		public TerminalNode CASCADE() { return getToken(sqlParser.CASCADE, 0); }
		public TerminalNode RESTRICT() { return getToken(sqlParser.RESTRICT, 0); }
		public TerminalNode BUCKETS() { return getToken(sqlParser.BUCKETS, 0); }
		public TerminalNode CLUSTERED() { return getToken(sqlParser.CLUSTERED, 0); }
		public TerminalNode SORTED() { return getToken(sqlParser.SORTED, 0); }
		public TerminalNode PURGE() { return getToken(sqlParser.PURGE, 0); }
		public TerminalNode INPUTFORMAT() { return getToken(sqlParser.INPUTFORMAT, 0); }
		public TerminalNode OUTPUTFORMAT() { return getToken(sqlParser.OUTPUTFORMAT, 0); }
		public TerminalNode DBPROPERTIES() { return getToken(sqlParser.DBPROPERTIES, 0); }
		public TerminalNode DFS() { return getToken(sqlParser.DFS, 0); }
		public TerminalNode TRUNCATE() { return getToken(sqlParser.TRUNCATE, 0); }
		public TerminalNode COMPUTE() { return getToken(sqlParser.COMPUTE, 0); }
		public TerminalNode LIST() { return getToken(sqlParser.LIST, 0); }
		public TerminalNode STATISTICS() { return getToken(sqlParser.STATISTICS, 0); }
		public TerminalNode ANALYZE() { return getToken(sqlParser.ANALYZE, 0); }
		public TerminalNode PARTITIONED() { return getToken(sqlParser.PARTITIONED, 0); }
		public TerminalNode EXTERNAL() { return getToken(sqlParser.EXTERNAL, 0); }
		public TerminalNode DEFINED() { return getToken(sqlParser.DEFINED, 0); }
		public TerminalNode RECORDWRITER() { return getToken(sqlParser.RECORDWRITER, 0); }
		public TerminalNode REVOKE() { return getToken(sqlParser.REVOKE, 0); }
		public TerminalNode GRANT() { return getToken(sqlParser.GRANT, 0); }
		public TerminalNode LOCK() { return getToken(sqlParser.LOCK, 0); }
		public TerminalNode UNLOCK() { return getToken(sqlParser.UNLOCK, 0); }
		public TerminalNode MSCK() { return getToken(sqlParser.MSCK, 0); }
		public TerminalNode REPAIR() { return getToken(sqlParser.REPAIR, 0); }
		public TerminalNode RECOVER() { return getToken(sqlParser.RECOVER, 0); }
		public TerminalNode EXPORT() { return getToken(sqlParser.EXPORT, 0); }
		public TerminalNode IMPORT() { return getToken(sqlParser.IMPORT, 0); }
		public TerminalNode LOAD() { return getToken(sqlParser.LOAD, 0); }
		public TerminalNode COMMENT() { return getToken(sqlParser.COMMENT, 0); }
		public TerminalNode ROLE() { return getToken(sqlParser.ROLE, 0); }
		public TerminalNode ROLES() { return getToken(sqlParser.ROLES, 0); }
		public TerminalNode COMPACTIONS() { return getToken(sqlParser.COMPACTIONS, 0); }
		public TerminalNode PRINCIPALS() { return getToken(sqlParser.PRINCIPALS, 0); }
		public TerminalNode TRANSACTIONS() { return getToken(sqlParser.TRANSACTIONS, 0); }
		public TerminalNode INDEX() { return getToken(sqlParser.INDEX, 0); }
		public TerminalNode INDEXES() { return getToken(sqlParser.INDEXES, 0); }
		public TerminalNode LOCKS() { return getToken(sqlParser.LOCKS, 0); }
		public TerminalNode OPTION() { return getToken(sqlParser.OPTION, 0); }
		public TerminalNode LOCAL() { return getToken(sqlParser.LOCAL, 0); }
		public TerminalNode INPATH() { return getToken(sqlParser.INPATH, 0); }
		public TerminalNode ASC() { return getToken(sqlParser.ASC, 0); }
		public TerminalNode DESC() { return getToken(sqlParser.DESC, 0); }
		public TerminalNode LIMIT() { return getToken(sqlParser.LIMIT, 0); }
		public TerminalNode RENAME() { return getToken(sqlParser.RENAME, 0); }
		public TerminalNode SETS() { return getToken(sqlParser.SETS, 0); }
		public TerminalNode AT() { return getToken(sqlParser.AT, 0); }
		public TerminalNode NULLS() { return getToken(sqlParser.NULLS, 0); }
		public TerminalNode OVERWRITE() { return getToken(sqlParser.OVERWRITE, 0); }
		public TerminalNode ALL() { return getToken(sqlParser.ALL, 0); }
		public TerminalNode ANY() { return getToken(sqlParser.ANY, 0); }
		public TerminalNode ALTER() { return getToken(sqlParser.ALTER, 0); }
		public TerminalNode AS() { return getToken(sqlParser.AS, 0); }
		public TerminalNode BETWEEN() { return getToken(sqlParser.BETWEEN, 0); }
		public TerminalNode BY() { return getToken(sqlParser.BY, 0); }
		public TerminalNode CREATE() { return getToken(sqlParser.CREATE, 0); }
		public TerminalNode DELETE() { return getToken(sqlParser.DELETE, 0); }
		public TerminalNode DESCRIBE() { return getToken(sqlParser.DESCRIBE, 0); }
		public TerminalNode DROP() { return getToken(sqlParser.DROP, 0); }
		public TerminalNode EXISTS() { return getToken(sqlParser.EXISTS, 0); }
		public TerminalNode FALSE() { return getToken(sqlParser.FALSE, 0); }
		public TerminalNode FOR() { return getToken(sqlParser.FOR, 0); }
		public TerminalNode GROUP() { return getToken(sqlParser.GROUP, 0); }
		public TerminalNode IN() { return getToken(sqlParser.IN, 0); }
		public TerminalNode INSERT() { return getToken(sqlParser.INSERT, 0); }
		public TerminalNode INTO() { return getToken(sqlParser.INTO, 0); }
		public TerminalNode IS() { return getToken(sqlParser.IS, 0); }
		public TerminalNode LIKE() { return getToken(sqlParser.LIKE, 0); }
		public TerminalNode NULL() { return getToken(sqlParser.NULL, 0); }
		public TerminalNode ORDER() { return getToken(sqlParser.ORDER, 0); }
		public TerminalNode OUTER() { return getToken(sqlParser.OUTER, 0); }
		public TerminalNode TABLE() { return getToken(sqlParser.TABLE, 0); }
		public TerminalNode TRUE() { return getToken(sqlParser.TRUE, 0); }
		public TerminalNode WITH() { return getToken(sqlParser.WITH, 0); }
		public TerminalNode RLIKE() { return getToken(sqlParser.RLIKE, 0); }
		public TerminalNode AND() { return getToken(sqlParser.AND, 0); }
		public TerminalNode CASE() { return getToken(sqlParser.CASE, 0); }
		public TerminalNode CAST() { return getToken(sqlParser.CAST, 0); }
		public TerminalNode DISTINCT() { return getToken(sqlParser.DISTINCT, 0); }
		public TerminalNode DIV() { return getToken(sqlParser.DIV, 0); }
		public TerminalNode ELSE() { return getToken(sqlParser.ELSE, 0); }
		public TerminalNode END() { return getToken(sqlParser.END, 0); }
		public TerminalNode FUNCTION() { return getToken(sqlParser.FUNCTION, 0); }
		public TerminalNode INTERVAL() { return getToken(sqlParser.INTERVAL, 0); }
		public TerminalNode MACRO() { return getToken(sqlParser.MACRO, 0); }
		public TerminalNode OR() { return getToken(sqlParser.OR, 0); }
		public TerminalNode STRATIFY() { return getToken(sqlParser.STRATIFY, 0); }
		public TerminalNode THEN() { return getToken(sqlParser.THEN, 0); }
		public TerminalNode UNBOUNDED() { return getToken(sqlParser.UNBOUNDED, 0); }
		public TerminalNode WHEN() { return getToken(sqlParser.WHEN, 0); }
		public TerminalNode DATABASE() { return getToken(sqlParser.DATABASE, 0); }
		public TerminalNode SELECT() { return getToken(sqlParser.SELECT, 0); }
		public TerminalNode FROM() { return getToken(sqlParser.FROM, 0); }
		public TerminalNode WHERE() { return getToken(sqlParser.WHERE, 0); }
		public TerminalNode HAVING() { return getToken(sqlParser.HAVING, 0); }
		public TerminalNode NOT() { return getToken(sqlParser.NOT, 0); }
		public TerminalNode DIRECTORY() { return getToken(sqlParser.DIRECTORY, 0); }
		public TerminalNode BOTH() { return getToken(sqlParser.BOTH, 0); }
		public TerminalNode LEADING() { return getToken(sqlParser.LEADING, 0); }
		public TerminalNode TRAILING() { return getToken(sqlParser.TRAILING, 0); }
		public NonReservedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonReserved; }
	}

	public final NonReservedContext nonReserved() throws RecognitionException {
		NonReservedContext _localctx = new NonReservedContext(_ctx, getState());
		enterRule(_localctx, 228, RULE_nonReserved);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2728);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << OUTER))) != 0) || ((((_la - 70)) & ~0x3f) == 0 && ((1L << (_la - 70)) & ((1L << (PIVOT - 70)) | (1L << (LATERAL - 70)) | (1L << (WINDOW - 70)) | (1L << (OVER - 70)) | (1L << (PARTITION - 70)) | (1L << (RANGE - 70)) | (1L << (ROWS - 70)) | (1L << (UNBOUNDED - 70)) | (1L << (PRECEDING - 70)) | (1L << (FOLLOWING - 70)) | (1L << (CURRENT - 70)) | (1L << (FIRST - 70)) | (1L << (AFTER - 70)) | (1L << (LAST - 70)) | (1L << (ROW - 70)) | (1L << (WITH - 70)) | (1L << (CREATE - 70)) | (1L << (TABLE - 70)) | (1L << (DIRECTORY - 70)) | (1L << (VIEW - 70)) | (1L << (REPLACE - 70)) | (1L << (INSERT - 70)) | (1L << (DELETE - 70)) | (1L << (INTO - 70)) | (1L << (DESCRIBE - 70)) | (1L << (EXPLAIN - 70)) | (1L << (FORMAT - 70)) | (1L << (LOGICAL - 70)) | (1L << (CODEGEN - 70)) | (1L << (COST - 70)) | (1L << (CAST - 70)) | (1L << (SHOW - 70)) | (1L << (TABLES - 70)) | (1L << (COLUMNS - 70)) | (1L << (COLUMN - 70)) | (1L << (USE - 70)) | (1L << (PARTITIONS - 70)) | (1L << (FUNCTIONS - 70)) | (1L << (DROP - 70)) | (1L << (TO - 70)) | (1L << (TABLESAMPLE - 70)) | (1L << (STRATIFY - 70)) | (1L << (ALTER - 70)) | (1L << (RENAME - 70)) | (1L << (ARRAY - 70)) | (1L << (MAP - 70)) | (1L << (STRUCT - 70)) | (1L << (COMMENT - 70)) | (1L << (SET - 70)) | (1L << (RESET - 70)) | (1L << (DATA - 70)) | (1L << (START - 70)) | (1L << (TRANSACTION - 70)) | (1L << (COMMIT - 70)) | (1L << (ROLLBACK - 70)) | (1L << (MACRO - 70)) | (1L << (IGNORE - 70)) | (1L << (BOTH - 70)) | (1L << (LEADING - 70)))) != 0) || ((((_la - 134)) & ~0x3f) == 0 && ((1L << (_la - 134)) & ((1L << (TRAILING - 134)) | (1L << (IF - 134)) | (1L << (POSITION - 134)) | (1L << (EXTRACT - 134)) | (1L << (DIV - 134)) | (1L << (PERCENTLIT - 134)) | (1L << (BUCKET - 134)) | (1L << (OUT - 134)) | (1L << (OF - 134)) | (1L << (SORT - 134)) | (1L << (CLUSTER - 134)) | (1L << (DISTRIBUTE - 134)) | (1L << (OVERWRITE - 134)) | (1L << (TRANSFORM - 134)) | (1L << (REDUCE - 134)) | (1L << (SERDE - 134)) | (1L << (SERDEPROPERTIES - 134)) | (1L << (RECORDREADER - 134)) | (1L << (RECORDWRITER - 134)) | (1L << (DELIMITED - 134)) | (1L << (FIELDS - 134)) | (1L << (TERMINATED - 134)) | (1L << (COLLECTION - 134)) | (1L << (ITEMS - 134)) | (1L << (KEYS - 134)) | (1L << (ESCAPED - 134)) | (1L << (LINES - 134)) | (1L << (SEPARATED - 134)) | (1L << (FUNCTION - 134)) | (1L << (EXTENDED - 134)) | (1L << (REFRESH - 134)) | (1L << (CLEAR - 134)) | (1L << (CACHE - 134)) | (1L << (UNCACHE - 134)) | (1L << (LAZY - 134)) | (1L << (FORMATTED - 134)) | (1L << (GLOBAL - 134)) | (1L << (TEMPORARY - 134)) | (1L << (OPTIONS - 134)) | (1L << (UNSET - 134)) | (1L << (TBLPROPERTIES - 134)) | (1L << (DBPROPERTIES - 134)) | (1L << (BUCKETS - 134)) | (1L << (SKEWED - 134)) | (1L << (STORED - 134)))) != 0) || ((((_la - 198)) & ~0x3f) == 0 && ((1L << (_la - 198)) & ((1L << (DIRECTORIES - 198)) | (1L << (LOCATION - 198)) | (1L << (EXCHANGE - 198)) | (1L << (ARCHIVE - 198)) | (1L << (UNARCHIVE - 198)) | (1L << (FILEFORMAT - 198)) | (1L << (TOUCH - 198)) | (1L << (COMPACT - 198)) | (1L << (CONCATENATE - 198)) | (1L << (CHANGE - 198)) | (1L << (CASCADE - 198)) | (1L << (RESTRICT - 198)) | (1L << (CLUSTERED - 198)) | (1L << (SORTED - 198)) | (1L << (PURGE - 198)) | (1L << (INPUTFORMAT - 198)) | (1L << (OUTPUTFORMAT - 198)) | (1L << (DATABASE - 198)) | (1L << (DATABASES - 198)) | (1L << (DFS - 198)) | (1L << (TRUNCATE - 198)) | (1L << (ANALYZE - 198)) | (1L << (COMPUTE - 198)) | (1L << (LIST - 198)) | (1L << (STATISTICS - 198)) | (1L << (PARTITIONED - 198)) | (1L << (EXTERNAL - 198)) | (1L << (DEFINED - 198)) | (1L << (REVOKE - 198)) | (1L << (GRANT - 198)) | (1L << (LOCK - 198)) | (1L << (UNLOCK - 198)) | (1L << (MSCK - 198)) | (1L << (REPAIR - 198)) | (1L << (RECOVER - 198)) | (1L << (EXPORT - 198)) | (1L << (IMPORT - 198)) | (1L << (LOAD - 198)) | (1L << (ROLE - 198)) | (1L << (ROLES - 198)) | (1L << (COMPACTIONS - 198)) | (1L << (PRINCIPALS - 198)) | (1L << (TRANSACTIONS - 198)) | (1L << (INDEX - 198)) | (1L << (INDEXES - 198)) | (1L << (LOCKS - 198)) | (1L << (OPTION - 198)) | (1L << (LOCAL - 198)) | (1L << (INPATH - 198)))) != 0)) ) {
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 35:
			return queryTerm_sempred((QueryTermContext)_localctx, predIndex);
		case 82:
			return booleanExpression_sempred((BooleanExpressionContext)_localctx, predIndex);
		case 84:
			return valueExpression_sempred((ValueExpressionContext)_localctx, predIndex);
		case 85:
			return primaryExpression_sempred((PrimaryExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean queryTerm_sempred(QueryTermContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		case 1:
			return this.legacy_setops_precedence_enbled;
		case 2:
			return precpred(_ctx, 2);
		case 3:
			return !this.legacy_setops_precedence_enbled;
		case 4:
			return precpred(_ctx, 1);
		case 5:
			return !this.legacy_setops_precedence_enbled;
		}
		return true;
	}
	private boolean booleanExpression_sempred(BooleanExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return precpred(_ctx, 2);
		case 7:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean valueExpression_sempred(ValueExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 8:
			return precpred(_ctx, 6);
		case 9:
			return precpred(_ctx, 5);
		case 10:
			return precpred(_ctx, 4);
		case 11:
			return precpred(_ctx, 3);
		case 12:
			return precpred(_ctx, 2);
		case 13:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean primaryExpression_sempred(PrimaryExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 14:
			return precpred(_ctx, 5);
		case 15:
			return precpred(_ctx, 3);
		}
		return true;
	}

	private static final int _serializedATNSegments = 2;
	private static final String _serializedATNSegment0 =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0115\u0aad\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\4l\tl\4m\tm\4n\tn\4o\to\4p\tp\4q\tq\4r\tr\4s\ts\4t\tt\3\2\3\2\3\2\3"+
		"\2\5\2\u00ed\n\2\3\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3"+
		"\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0106\n\b\3\b\3\b\3\b\5\b\u010b"+
		"\n\b\3\b\5\b\u010e\n\b\3\b\3\b\3\b\5\b\u0113\n\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\5\b\u0120\n\b\3\b\3\b\5\b\u0124\n\b\3\b\3\b\3\b"+
		"\3\b\3\b\5\b\u012b\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\7\b\u0139\n\b\f\b\16\b\u013c\13\b\3\b\5\b\u013f\n\b\3\b\5\b\u0142\n\b"+
		"\3\b\3\b\3\b\3\b\3\b\5\b\u0149\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u015a\n\b\f\b\16\b\u015d\13\b\3\b\5\b\u0160"+
		"\n\b\3\b\5\b\u0163\n\b\3\b\3\b\3\b\3\b\3\b\5\b\u016a\n\b\3\b\3\b\3\b\3"+
		"\b\3\b\5\b\u0171\n\b\3\b\3\b\5\b\u0175\n\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b"+
		"\u017d\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0187\n\b\3\b\3\b\3\b\3"+
		"\b\5\b\u018d\n\b\3\b\3\b\3\b\3\b\5\b\u0193\n\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\5\b\u019e\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\5\b\u01be\n\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u01c6\n\b\3\b\3\b\5\b"+
		"\u01ca\n\b\3\b\3\b\3\b\5\b\u01cf\n\b\3\b\3\b\3\b\3\b\5\b\u01d5\n\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\5\b\u01dd\n\b\3\b\3\b\3\b\3\b\5\b\u01e3\n\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u01f0\n\b\3\b\6\b\u01f3\n\b"+
		"\r\b\16\b\u01f4\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u01fe\n\b\3\b\6\b\u0201"+
		"\n\b\r\b\16\b\u0202\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\5\b\u0213\n\b\3\b\3\b\3\b\7\b\u0218\n\b\f\b\16\b\u021b\13\b\3\b"+
		"\5\b\u021e\n\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0226\n\b\3\b\3\b\3\b\7\b\u022b"+
		"\n\b\f\b\16\b\u022e\13\b\3\b\3\b\3\b\3\b\5\b\u0234\n\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0243\n\b\3\b\3\b\5\b\u0247\n"+
		"\b\3\b\3\b\3\b\3\b\5\b\u024d\n\b\3\b\3\b\3\b\3\b\5\b\u0253\n\b\3\b\5\b"+
		"\u0256\n\b\3\b\5\b\u0259\n\b\3\b\3\b\3\b\3\b\5\b\u025f\n\b\3\b\3\b\5\b"+
		"\u0263\n\b\3\b\3\b\5\b\u0267\n\b\3\b\3\b\3\b\5\b\u026c\n\b\3\b\3\b\5\b"+
		"\u0270\n\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0278\n\b\3\b\5\b\u027b\n\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0284\n\b\3\b\3\b\3\b\5\b\u0289\n\b\3\b\3"+
		"\b\3\b\3\b\5\b\u028f\n\b\3\b\3\b\3\b\3\b\3\b\5\b\u0296\n\b\3\b\5\b\u0299"+
		"\n\b\3\b\3\b\3\b\3\b\5\b\u029f\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u02a8"+
		"\n\b\f\b\16\b\u02ab\13\b\5\b\u02ad\n\b\3\b\3\b\5\b\u02b1\n\b\3\b\3\b\3"+
		"\b\5\b\u02b6\n\b\3\b\3\b\3\b\5\b\u02bb\n\b\3\b\3\b\3\b\3\b\3\b\5\b\u02c2"+
		"\n\b\3\b\5\b\u02c5\n\b\3\b\5\b\u02c8\n\b\3\b\3\b\3\b\3\b\3\b\5\b\u02cf"+
		"\n\b\3\b\3\b\3\b\5\b\u02d4\n\b\3\b\3\b\3\b\5\b\u02d9\n\b\3\b\5\b\u02dc"+
		"\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u02e5\n\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\5\b\u02ed\n\b\3\b\3\b\3\b\3\b\5\b\u02f3\n\b\3\b\3\b\5\b\u02f7\n\b\3\b"+
		"\3\b\5\b\u02fb\n\b\3\b\3\b\5\b\u02ff\n\b\5\b\u0301\n\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\5\b\u030a\n\b\3\b\3\b\3\b\3\b\5\b\u0310\n\b\3\b\3\b\3\b\5"+
		"\b\u0315\n\b\3\b\5\b\u0318\n\b\3\b\3\b\5\b\u031c\n\b\3\b\5\b\u031f\n\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u0327\n\b\f\b\16\b\u032a\13\b\5\b\u032c\n"+
		"\b\3\b\3\b\5\b\u0330\n\b\3\b\3\b\3\b\3\b\5\b\u0336\n\b\3\b\5\b\u0339\n"+
		"\b\3\b\5\b\u033c\n\b\3\b\3\b\3\b\3\b\5\b\u0342\n\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\5\b\u034a\n\b\3\b\3\b\3\b\5\b\u034f\n\b\3\b\3\b\3\b\3\b\5\b\u0355"+
		"\n\b\3\b\3\b\3\b\3\b\5\b\u035b\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u0364"+
		"\n\b\f\b\16\b\u0367\13\b\3\b\3\b\3\b\7\b\u036c\n\b\f\b\16\b\u036f\13\b"+
		"\3\b\3\b\7\b\u0373\n\b\f\b\16\b\u0376\13\b\3\b\3\b\3\b\7\b\u037b\n\b\f"+
		"\b\16\b\u037e\13\b\5\b\u0380\n\b\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u0388\n\t"+
		"\3\t\3\t\5\t\u038c\n\t\3\t\3\t\3\t\3\t\3\t\5\t\u0393\n\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\5\t\u0407\n\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u040f"+
		"\n\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u0417\n\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\5\t\u0420\n\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u042c\n\t\3"+
		"\n\3\n\5\n\u0430\n\n\3\n\5\n\u0433\n\n\3\n\3\n\3\n\3\n\5\n\u0439\n\n\3"+
		"\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u0443\n\13\3\13\3\13\3\13\3"+
		"\13\3\f\3\f\3\f\3\f\3\f\3\f\5\f\u044f\n\f\3\f\3\f\3\f\5\f\u0454\n\f\3"+
		"\r\3\r\3\r\3\16\5\16\u045a\n\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\5\17\u0466\n\17\5\17\u0468\n\17\3\17\3\17\3\17\5\17\u046d\n"+
		"\17\3\17\3\17\5\17\u0471\n\17\3\17\3\17\3\17\5\17\u0476\n\17\3\17\3\17"+
		"\3\17\5\17\u047b\n\17\3\17\5\17\u047e\n\17\3\17\3\17\3\17\5\17\u0483\n"+
		"\17\3\17\3\17\5\17\u0487\n\17\3\17\3\17\3\17\5\17\u048c\n\17\5\17\u048e"+
		"\n\17\3\20\3\20\5\20\u0492\n\20\3\21\3\21\3\21\3\21\3\21\7\21\u0499\n"+
		"\21\f\21\16\21\u049c\13\21\3\21\3\21\3\22\3\22\3\22\5\22\u04a3\n\22\3"+
		"\23\3\23\3\23\3\23\3\23\5\23\u04aa\n\23\3\24\3\24\3\24\7\24\u04af\n\24"+
		"\f\24\16\24\u04b2\13\24\3\25\3\25\3\25\3\25\7\25\u04b8\n\25\f\25\16\25"+
		"\u04bb\13\25\3\26\3\26\5\26\u04bf\n\26\3\26\3\26\3\26\3\26\3\27\3\27\3"+
		"\27\3\30\3\30\3\30\3\30\7\30\u04cc\n\30\f\30\16\30\u04cf\13\30\3\30\3"+
		"\30\3\31\3\31\5\31\u04d5\n\31\3\31\5\31\u04d8\n\31\3\32\3\32\3\32\7\32"+
		"\u04dd\n\32\f\32\16\32\u04e0\13\32\3\32\5\32\u04e3\n\32\3\33\3\33\3\33"+
		"\3\33\5\33\u04e9\n\33\3\34\3\34\3\34\3\34\7\34\u04ef\n\34\f\34\16\34\u04f2"+
		"\13\34\3\34\3\34\3\35\3\35\3\35\3\35\7\35\u04fa\n\35\f\35\16\35\u04fd"+
		"\13\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\5\36\u0507\n\36\3\37\3"+
		"\37\3\37\3\37\3\37\5\37\u050e\n\37\3 \3 \3 \3 \5 \u0514\n \3!\3!\3!\3"+
		"\"\5\"\u051a\n\"\3\"\3\"\3\"\3\"\3\"\6\"\u0521\n\"\r\"\16\"\u0522\5\""+
		"\u0525\n\"\3#\3#\3#\3#\3#\7#\u052c\n#\f#\16#\u052f\13#\5#\u0531\n#\3#"+
		"\3#\3#\3#\3#\7#\u0538\n#\f#\16#\u053b\13#\5#\u053d\n#\3#\3#\3#\3#\3#\7"+
		"#\u0544\n#\f#\16#\u0547\13#\5#\u0549\n#\3#\3#\3#\3#\3#\7#\u0550\n#\f#"+
		"\16#\u0553\13#\5#\u0555\n#\3#\5#\u0558\n#\3#\3#\3#\5#\u055d\n#\5#\u055f"+
		"\n#\3$\5$\u0562\n$\3$\3$\3$\3%\3%\3%\3%\3%\3%\3%\5%\u056e\n%\3%\3%\3%"+
		"\3%\3%\5%\u0575\n%\3%\3%\3%\3%\3%\5%\u057c\n%\3%\7%\u057f\n%\f%\16%\u0582"+
		"\13%\3&\3&\3&\3&\3&\3&\3&\3&\5&\u058c\n&\3\'\3\'\5\'\u0590\n\'\3\'\3\'"+
		"\5\'\u0594\n\'\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\5(\u05a0\n(\3(\5(\u05a3\n"+
		"(\3(\3(\5(\u05a7\n(\3(\3(\3(\3(\3(\3(\3(\3(\5(\u05b1\n(\3(\3(\5(\u05b5"+
		"\n(\5(\u05b7\n(\3(\5(\u05ba\n(\3(\3(\5(\u05be\n(\3(\5(\u05c1\n(\3(\3("+
		"\5(\u05c5\n(\3(\3(\7(\u05c9\n(\f(\16(\u05cc\13(\3(\5(\u05cf\n(\3(\3(\5"+
		"(\u05d3\n(\3(\3(\3(\5(\u05d8\n(\3(\5(\u05db\n(\5(\u05dd\n(\3(\7(\u05e0"+
		"\n(\f(\16(\u05e3\13(\3(\3(\5(\u05e7\n(\3(\5(\u05ea\n(\3(\3(\5(\u05ee\n"+
		"(\3(\5(\u05f1\n(\5(\u05f3\n(\3)\3)\3)\5)\u05f8\n)\3)\7)\u05fb\n)\f)\16"+
		")\u05fe\13)\3)\3)\3*\3*\3*\3*\3*\3*\7*\u0608\n*\f*\16*\u060b\13*\3*\3"+
		"*\5*\u060f\n*\3+\3+\3+\3+\7+\u0615\n+\f+\16+\u0618\13+\3+\7+\u061b\n+"+
		"\f+\16+\u061e\13+\3+\5+\u0621\n+\3,\3,\3,\3,\3,\7,\u0628\n,\f,\16,\u062b"+
		"\13,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\7,\u0637\n,\f,\16,\u063a\13,\3,\3,"+
		"\5,\u063e\n,\3,\3,\3,\3,\3,\3,\3,\3,\7,\u0648\n,\f,\16,\u064b\13,\3,\3"+
		",\5,\u064f\n,\3-\3-\3-\3-\7-\u0655\n-\f-\16-\u0658\13-\5-\u065a\n-\3-"+
		"\3-\5-\u065e\n-\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\7.\u066a\n.\f.\16.\u066d"+
		"\13.\3.\3.\3.\3/\3/\3/\3/\3/\7/\u0677\n/\f/\16/\u067a\13/\3/\3/\5/\u067e"+
		"\n/\3\60\3\60\5\60\u0682\n\60\3\60\5\60\u0685\n\60\3\61\3\61\3\61\5\61"+
		"\u068a\n\61\3\61\3\61\3\61\3\61\3\61\7\61\u0691\n\61\f\61\16\61\u0694"+
		"\13\61\5\61\u0696\n\61\3\61\3\61\3\61\5\61\u069b\n\61\3\61\3\61\3\61\7"+
		"\61\u06a0\n\61\f\61\16\61\u06a3\13\61\5\61\u06a5\n\61\3\62\3\62\3\63\3"+
		"\63\7\63\u06ab\n\63\f\63\16\63\u06ae\13\63\3\64\3\64\3\64\3\64\5\64\u06b4"+
		"\n\64\3\64\3\64\3\64\3\64\3\64\5\64\u06bb\n\64\3\65\5\65\u06be\n\65\3"+
		"\65\3\65\3\65\5\65\u06c3\n\65\3\65\3\65\3\65\3\65\5\65\u06c9\n\65\3\65"+
		"\3\65\5\65\u06cd\n\65\3\65\5\65\u06d0\n\65\3\65\5\65\u06d3\n\65\3\66\3"+
		"\66\3\66\3\66\5\66\u06d9\n\66\3\67\3\67\3\67\5\67\u06de\n\67\3\67\3\67"+
		"\38\58\u06e3\n8\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\38\58\u06f5"+
		"\n8\58\u06f7\n8\38\58\u06fa\n8\39\39\39\39\3:\3:\3:\7:\u0703\n:\f:\16"+
		":\u0706\13:\3;\3;\3;\3;\7;\u070c\n;\f;\16;\u070f\13;\3;\3;\3<\3<\5<\u0715"+
		"\n<\3=\3=\3=\3=\7=\u071b\n=\f=\16=\u071e\13=\3=\3=\3>\3>\3>\5>\u0725\n"+
		">\3?\3?\3?\5?\u072a\n?\3?\3?\3?\3?\3?\3?\5?\u0732\n?\3?\3?\3?\3?\3?\3"+
		"?\5?\u073a\n?\3?\3?\3?\3?\5?\u0740\n?\3@\3@\3@\3@\3@\3@\3@\7@\u0749\n"+
		"@\f@\16@\u074c\13@\5@\u074e\n@\3@\3@\3@\3@\3@\7@\u0755\n@\f@\16@\u0758"+
		"\13@\5@\u075a\n@\3@\3@\3@\3@\7@\u0760\n@\f@\16@\u0763\13@\5@\u0765\n@"+
		"\3@\3@\3@\3@\5@\u076b\n@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@"+
		"\3@\3@\3@\3@\3@\3@\5@\u0782\n@\5@\u0784\n@\3@\3@\3@\3@\3@\3@\5@\u078c"+
		"\n@\3@\3@\3@\3@\3@\3@\3@\3@\3@\7@\u0797\n@\f@\16@\u079a\13@\3@\3@\3A\3"+
		"A\3A\3A\3B\3B\3C\3C\3D\3D\3D\7D\u07a9\nD\fD\16D\u07ac\13D\3E\3E\7E\u07b0"+
		"\nE\fE\16E\u07b3\13E\3F\3F\5F\u07b7\nF\3G\3G\3G\3G\3G\3G\3G\3G\5G\u07c1"+
		"\nG\3G\3G\5G\u07c5\nG\3G\3G\5G\u07c9\nG\3G\3G\3G\3G\5G\u07cf\nG\3H\3H"+
		"\3I\3I\3J\3J\3K\3K\3K\3K\7K\u07db\nK\fK\16K\u07de\13K\3K\3K\3L\3L\3L\3"+
		"L\3L\7L\u07e7\nL\fL\16L\u07ea\13L\5L\u07ec\nL\3L\3L\3L\3M\5M\u07f2\nM"+
		"\3M\3M\5M\u07f6\nM\5M\u07f8\nM\3N\3N\3N\3N\3N\3N\3N\5N\u0801\nN\3N\3N"+
		"\3N\3N\3N\3N\3N\3N\3N\3N\5N\u080d\nN\5N\u080f\nN\3N\3N\3N\3N\3N\5N\u0816"+
		"\nN\3N\3N\3N\3N\3N\5N\u081d\nN\3N\3N\3N\3N\5N\u0823\nN\3N\3N\3N\3N\5N"+
		"\u0829\nN\5N\u082b\nN\3O\3O\3O\5O\u0830\nO\3O\3O\3O\3O\3O\3O\3O\3O\3O"+
		"\7O\u083b\nO\fO\16O\u083e\13O\3O\3O\3O\3O\3O\3O\3O\3O\5O\u0848\nO\3P\3"+
		"P\3P\5P\u084d\nP\3P\3P\3Q\3Q\5Q\u0853\nQ\3Q\3Q\5Q\u0857\nQ\5Q\u0859\n"+
		"Q\3R\3R\3R\7R\u085e\nR\fR\16R\u0861\13R\3S\3S\3T\3T\3T\3T\3T\3T\3T\3T"+
		"\3T\3T\5T\u086f\nT\5T\u0871\nT\3T\3T\3T\3T\3T\3T\7T\u0879\nT\fT\16T\u087c"+
		"\13T\3U\5U\u087f\nU\3U\3U\3U\3U\3U\3U\5U\u0887\nU\3U\3U\3U\3U\3U\7U\u088e"+
		"\nU\fU\16U\u0891\13U\3U\3U\3U\5U\u0896\nU\3U\3U\3U\3U\3U\3U\5U\u089e\n"+
		"U\3U\3U\3U\3U\5U\u08a4\nU\3U\3U\3U\5U\u08a9\nU\3U\3U\3U\5U\u08ae\nU\3"+
		"V\3V\3V\3V\5V\u08b4\nV\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3"+
		"V\3V\3V\3V\7V\u08c9\nV\fV\16V\u08cc\13V\3W\3W\3W\6W\u08d1\nW\rW\16W\u08d2"+
		"\3W\3W\5W\u08d7\nW\3W\3W\3W\3W\3W\6W\u08de\nW\rW\16W\u08df\3W\3W\5W\u08e4"+
		"\nW\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\7W\u08f4\nW\fW\16W\u08f7"+
		"\13W\5W\u08f9\nW\3W\3W\3W\3W\3W\3W\5W\u0901\nW\3W\3W\3W\3W\3W\3W\3W\5"+
		"W\u090a\nW\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\6"+
		"W\u091f\nW\rW\16W\u0920\3W\3W\3W\3W\3W\3W\3W\3W\3W\5W\u092c\nW\3W\3W\3"+
		"W\7W\u0931\nW\fW\16W\u0934\13W\5W\u0936\nW\3W\3W\3W\5W\u093b\nW\3W\3W"+
		"\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\6W\u094c\nW\rW\16W\u094d\3W\3"+
		"W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\3W\5W\u095f\nW\3W\3W\3W\3W\3W\3"+
		"W\3W\3W\7W\u0969\nW\fW\16W\u096c\13W\3X\3X\3X\3X\3X\3X\3X\3X\6X\u0976"+
		"\nX\rX\16X\u0977\5X\u097a\nX\3Y\3Y\3Z\3Z\3[\3[\3\\\3\\\3]\3]\7]\u0986"+
		"\n]\f]\16]\u0989\13]\3^\3^\3^\3^\5^\u098f\n^\3_\5_\u0992\n_\3_\3_\5_\u0996"+
		"\n_\3`\3`\3`\5`\u099b\n`\3a\3a\3a\3a\3a\3a\3a\3a\3a\3a\3a\3a\3a\3a\3a"+
		"\5a\u09ac\na\3a\3a\5a\u09b0\na\3a\3a\3a\3a\3a\7a\u09b7\na\fa\16a\u09ba"+
		"\13a\3a\5a\u09bd\na\5a\u09bf\na\3b\3b\3b\7b\u09c4\nb\fb\16b\u09c7\13b"+
		"\3c\3c\3c\3c\5c\u09cd\nc\3d\3d\3d\7d\u09d2\nd\fd\16d\u09d5\13d\3e\3e\3"+
		"e\7e\u09da\ne\fe\16e\u09dd\13e\3e\3e\3e\5e\u09e2\ne\3e\3e\5e\u09e6\ne"+
		"\3e\3e\3e\3e\3e\3e\3e\3e\3e\3e\3e\3e\7e\u09f4\ne\fe\16e\u09f7\13e\3e\3"+
		"e\5e\u09fb\ne\3f\3f\3f\3f\3f\3f\5f\u0a03\nf\3g\3g\3g\7g\u0a08\ng\fg\16"+
		"g\u0a0b\13g\3h\3h\3h\3h\3h\5h\u0a12\nh\3i\3i\3i\3i\3i\3j\3j\3j\3j\7j\u0a1d"+
		"\nj\fj\16j\u0a20\13j\3k\3k\3k\3k\3l\3l\3l\3l\3l\3l\3l\7l\u0a2d\nl\fl\16"+
		"l\u0a30\13l\3l\3l\3l\3l\3l\7l\u0a37\nl\fl\16l\u0a3a\13l\5l\u0a3c\nl\3"+
		"l\3l\3l\3l\3l\7l\u0a43\nl\fl\16l\u0a46\13l\5l\u0a48\nl\5l\u0a4a\nl\3l"+
		"\5l\u0a4d\nl\3l\5l\u0a50\nl\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m"+
		"\3m\3m\5m\u0a62\nm\3n\3n\3n\3n\3n\3n\3n\5n\u0a6b\nn\3o\3o\3o\7o\u0a70"+
		"\no\fo\16o\u0a73\13o\3p\3p\3p\3p\3p\3p\3p\3p\3p\3p\3p\3p\3p\3p\3p\5p\u0a84"+
		"\np\3q\3q\3q\5q\u0a89\nq\3r\3r\3s\5s\u0a8e\ns\3s\3s\5s\u0a92\ns\3s\3s"+
		"\5s\u0a96\ns\3s\3s\5s\u0a9a\ns\3s\3s\5s\u0a9e\ns\3s\3s\5s\u0aa2\ns\3s"+
		"\3s\5s\u0aa6\ns\3s\5s\u0aa9\ns\3t\3t\3t\7\u0328\u0365\u036d\u0374\u037c"+
		"\6H\u00a6\u00aa\u00acu\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,"+
		".\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086"+
		"\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e"+
		"\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6"+
		"\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc\u00ce"+
		"\u00d0\u00d2\u00d4\u00d6\u00d8\u00da\u00dc\u00de\u00e0\u00e2\u00e4\u00e6"+
		"\2\35\3\2\u00d2\u00d3\4\2ZZ\\\\\5\2df\u00b8\u00b8\u00be\u00be\4\2\26\26"+
		"))\4\2\66\66aa\4\2\u00b8\u00b8\u00be\u00be\4\2\27\27\u00df\u00df\3\2p"+
		"s\3\2pr\3\2\65\66\4\2SSUU\4\2\31\31\33\33\3\2\u010b\u010c\3\2./\4\2\u0094"+
		"\u0095\u009a\u009a\3\2\u0096\u0099\4\2\u0094\u0095\u009d\u009d\3\2\u0086"+
		"\u0088\3\2\u008c\u0093\3\2\u0094\u009e\3\2\'*\3\2\62\63\3\2\u0094\u0095"+
		"\4\2LL\u00a5\u00a5\4\2##\u00a3\u00a3\3\2PQ\13\2\25=@@HWYot\u008b\u0099"+
		"\u0099\u009f\u00a8\u00aa\u00f6\u00f8\u00f9\2\u0c66\2\u00ec\3\2\2\2\4\u00ee"+
		"\3\2\2\2\6\u00f1\3\2\2\2\b\u00f4\3\2\2\2\n\u00f7\3\2\2\2\f\u00fa\3\2\2"+
		"\2\16\u037f\3\2\2\2\20\u042b\3\2\2\2\22\u042d\3\2\2\2\24\u043c\3\2\2\2"+
		"\26\u0448\3\2\2\2\30\u0455\3\2\2\2\32\u0459\3\2\2\2\34\u048d\3\2\2\2\36"+
		"\u048f\3\2\2\2 \u0493\3\2\2\2\"\u049f\3\2\2\2$\u04a9\3\2\2\2&\u04ab\3"+
		"\2\2\2(\u04b3\3\2\2\2*\u04bc\3\2\2\2,\u04c4\3\2\2\2.\u04c7\3\2\2\2\60"+
		"\u04d2\3\2\2\2\62\u04e2\3\2\2\2\64\u04e8\3\2\2\2\66\u04ea\3\2\2\28\u04f5"+
		"\3\2\2\2:\u0506\3\2\2\2<\u050d\3\2\2\2>\u050f\3\2\2\2@\u0515\3\2\2\2B"+
		"\u0524\3\2\2\2D\u0530\3\2\2\2F\u0561\3\2\2\2H\u0566\3\2\2\2J\u058b\3\2"+
		"\2\2L\u058d\3\2\2\2N\u05f2\3\2\2\2P\u05f4\3\2\2\2R\u060e\3\2\2\2T\u0610"+
		"\3\2\2\2V\u064e\3\2\2\2X\u065d\3\2\2\2Z\u065f\3\2\2\2\\\u067d\3\2\2\2"+
		"^\u067f\3\2\2\2`\u0686\3\2\2\2b\u06a6\3\2\2\2d\u06a8\3\2\2\2f\u06ba\3"+
		"\2\2\2h\u06d2\3\2\2\2j\u06d8\3\2\2\2l\u06da\3\2\2\2n\u06f9\3\2\2\2p\u06fb"+
		"\3\2\2\2r\u06ff\3\2\2\2t\u0707\3\2\2\2v\u0712\3\2\2\2x\u0716\3\2\2\2z"+
		"\u0721\3\2\2\2|\u073f\3\2\2\2~\u0741\3\2\2\2\u0080\u079d\3\2\2\2\u0082"+
		"\u07a1\3\2\2\2\u0084\u07a3\3\2\2\2\u0086\u07a5\3\2\2\2\u0088\u07ad\3\2"+
		"\2\2\u008a\u07b4\3\2\2\2\u008c\u07ce\3\2\2\2\u008e\u07d0\3\2\2\2\u0090"+
		"\u07d2\3\2\2\2\u0092\u07d4\3\2\2\2\u0094\u07d6\3\2\2\2\u0096\u07e1\3\2"+
		"\2\2\u0098\u07f7\3\2\2\2\u009a\u082a\3\2\2\2\u009c\u0847\3\2\2\2\u009e"+
		"\u084c\3\2\2\2\u00a0\u0850\3\2\2\2\u00a2\u085a\3\2\2\2\u00a4\u0862\3\2"+
		"\2\2\u00a6\u0870\3\2\2\2\u00a8\u08ad\3\2\2\2\u00aa\u08b3\3\2\2\2\u00ac"+
		"\u095e\3\2\2\2\u00ae\u0979\3\2\2\2\u00b0\u097b\3\2\2\2\u00b2\u097d\3\2"+
		"\2\2\u00b4\u097f\3\2\2\2\u00b6\u0981\3\2\2\2\u00b8\u0983\3\2\2\2\u00ba"+
		"\u098a\3\2\2\2\u00bc\u0995\3\2\2\2\u00be\u099a\3\2\2\2\u00c0\u09be\3\2"+
		"\2\2\u00c2\u09c0\3\2\2\2\u00c4\u09c8\3\2\2\2\u00c6\u09ce\3\2\2\2\u00c8"+
		"\u09fa\3\2\2\2\u00ca\u0a02\3\2\2\2\u00cc\u0a04\3\2\2\2\u00ce\u0a0c\3\2"+
		"\2\2\u00d0\u0a13\3\2\2\2\u00d2\u0a18\3\2\2\2\u00d4\u0a21\3\2\2\2\u00d6"+
		"\u0a4f\3\2\2\2\u00d8\u0a61\3\2\2\2\u00da\u0a6a\3\2\2\2\u00dc\u0a6c\3\2"+
		"\2\2\u00de\u0a83\3\2\2\2\u00e0\u0a88\3\2\2\2\u00e2\u0a8a\3\2\2\2\u00e4"+
		"\u0aa8\3\2\2\2\u00e6\u0aaa\3\2\2\2\u00e8\u00e9\5\16\b\2\u00e9\u00ea\7"+
		"\2\2\3\u00ea\u00ed\3\2\2\2\u00eb\u00ed\7\2\2\3\u00ec\u00e8\3\2\2\2\u00ec"+
		"\u00eb\3\2\2\2\u00ed\3\3\2\2\2\u00ee\u00ef\5\u00a0Q\2\u00ef\u00f0\7\2"+
		"\2\3\u00f0\5\3\2\2\2\u00f1\u00f2\5\u009cO\2\u00f2\u00f3\7\2\2\3\u00f3"+
		"\7\3\2\2\2\u00f4\u00f5\5\u009eP\2\u00f5\u00f6\7\2\2\3\u00f6\t\3\2\2\2"+
		"\u00f7\u00f8\5\u00c0a\2\u00f8\u00f9\7\2\2\3\u00f9\13\3\2\2\2\u00fa\u00fb"+
		"\5\u00c2b\2\u00fb\u00fc\7\2\2\3\u00fc\r\3\2\2\2\u00fd\u0380\5\32\16\2"+
		"\u00fe\u00ff\7l\2\2\u00ff\u0380\5\u00dep\2\u0100\u0101\7Y\2\2\u0101\u0105"+
		"\7\u00d9\2\2\u0102\u0103\7\u0089\2\2\u0103\u0104\7*\2\2\u0104\u0106\7"+
		",\2\2\u0105\u0102\3\2\2\2\u0105\u0106\3\2\2\2\u0106\u0107\3\2\2\2\u0107"+
		"\u010a\5\u00dep\2\u0108\u0109\7|\2\2\u0109\u010b\7\u0107\2\2\u010a\u0108"+
		"\3\2\2\2\u010a\u010b\3\2\2\2\u010b\u010d\3\2\2\2\u010c\u010e\5\30\r\2"+
		"\u010d\u010c\3\2\2\2\u010d\u010e\3\2\2\2\u010e\u0112\3\2\2\2\u010f\u0110"+
		"\7W\2\2\u0110\u0111\7\u00c4\2\2\u0111\u0113\5.\30\2\u0112\u010f\3\2\2"+
		"\2\u0112\u0113\3\2\2\2\u0113\u0380\3\2\2\2\u0114\u0115\7w\2\2\u0115\u0116"+
		"\7\u00d9\2\2\u0116\u0117\5\u00dep\2\u0117\u0118\7}\2\2\u0118\u0119\7\u00c4"+
		"\2\2\u0119\u011a\5.\30\2\u011a\u0380\3\2\2\2\u011b\u011c\7o\2\2\u011c"+
		"\u011f\7\u00d9\2\2\u011d\u011e\7\u0089\2\2\u011e\u0120\7,\2\2\u011f\u011d"+
		"\3\2\2\2\u011f\u0120\3\2\2\2\u0120\u0121\3\2\2\2\u0121\u0123\5\u00dep"+
		"\2\u0122\u0124\t\2\2\2\u0123\u0122\3\2\2\2\u0123\u0124\3\2\2\2\u0124\u0380"+
		"\3\2\2\2\u0125\u012a\5\22\n\2\u0126\u0127\7\3\2\2\u0127\u0128\5\u00c2"+
		"b\2\u0128\u0129\7\4\2\2\u0129\u012b\3\2\2\2\u012a\u0126\3\2\2\2\u012a"+
		"\u012b\3\2\2\2\u012b\u012c\3\2\2\2\u012c\u013a\5,\27\2\u012d\u012e\7\u00c1"+
		"\2\2\u012e\u0139\5.\30\2\u012f\u0130\7\u00e1\2\2\u0130\u0131\7\36\2\2"+
		"\u0131\u0139\5p9\2\u0132\u0139\5\24\13\2\u0133\u0139\5\30\r\2\u0134\u0135"+
		"\7|\2\2\u0135\u0139\7\u0107\2\2\u0136\u0137\7\u00c3\2\2\u0137\u0139\5"+
		".\30\2\u0138\u012d\3\2\2\2\u0138\u012f\3\2\2\2\u0138\u0132\3\2\2\2\u0138"+
		"\u0133\3\2\2\2\u0138\u0134\3\2\2\2\u0138\u0136\3\2\2\2\u0139\u013c\3\2"+
		"\2\2\u013a\u0138\3\2\2\2\u013a\u013b\3\2\2\2\u013b\u0141\3\2\2\2\u013c"+
		"\u013a\3\2\2\2\u013d\u013f\7\30\2\2\u013e\u013d\3\2\2\2\u013e\u013f\3"+
		"\2\2\2\u013f\u0140\3\2\2\2\u0140\u0142\5\32\16\2\u0141\u013e\3\2\2\2\u0141"+
		"\u0142\3\2\2\2\u0142\u0380\3\2\2\2\u0143\u0148\5\22\n\2\u0144\u0145\7"+
		"\3\2\2\u0145\u0146\5\u00c2b\2\u0146\u0147\7\4\2\2\u0147\u0149\3\2\2\2"+
		"\u0148\u0144\3\2\2\2\u0148\u0149\3\2\2\2\u0149\u015b\3\2\2\2\u014a\u014b"+
		"\7|\2\2\u014b\u015a\7\u0107\2\2\u014c\u014d\7\u00e1\2\2\u014d\u014e\7"+
		"\36\2\2\u014e\u014f\7\3\2\2\u014f\u0150\5\u00c2b\2\u0150\u0151\7\4\2\2"+
		"\u0151\u015a\3\2\2\2\u0152\u015a\5\24\13\2\u0153\u015a\5\26\f\2\u0154"+
		"\u015a\5\u009aN\2\u0155\u015a\5:\36\2\u0156\u015a\5\30\r\2\u0157\u0158"+
		"\7\u00c3\2\2\u0158\u015a\5.\30\2\u0159\u014a\3\2\2\2\u0159\u014c\3\2\2"+
		"\2\u0159\u0152\3\2\2\2\u0159\u0153\3\2\2\2\u0159\u0154\3\2\2\2\u0159\u0155"+
		"\3\2\2\2\u0159\u0156\3\2\2\2\u0159\u0157\3\2\2\2\u015a\u015d\3\2\2\2\u015b"+
		"\u0159\3\2\2\2\u015b\u015c\3\2\2\2\u015c\u0162\3\2\2\2\u015d\u015b\3\2"+
		"\2\2\u015e\u0160\7\30\2\2\u015f\u015e\3\2\2\2\u015f\u0160\3\2\2\2\u0160"+
		"\u0161\3\2\2\2\u0161\u0163\5\32\16\2\u0162\u015f\3\2\2\2\u0162\u0163\3"+
		"\2\2\2\u0163\u0380\3\2\2\2\u0164\u0165\7Y\2\2\u0165\u0169\7Z\2\2\u0166"+
		"\u0167\5\u00dep\2\u0167\u0168\7\5\2\2\u0168\u016a\3\2\2\2\u0169\u0166"+
		"\3\2\2\2\u0169\u016a\3\2\2\2\u016a\u016b\3\2\2\2\u016b\u0170\5\u009cO"+
		"\2\u016c\u016d\7\3\2\2\u016d\u016e\5\u00c6d\2\u016e\u016f\7\4\2\2\u016f"+
		"\u0171\3\2\2\2\u0170\u016c\3\2\2\2\u0170\u0171\3\2\2\2\u0171\u0174\3\2"+
		"\2\2\u0172\u0173\7|\2\2\u0173\u0175\7\u0107\2\2\u0174\u0172\3\2\2\2\u0174"+
		"\u0175\3\2\2\2\u0175\u017c\3\2\2\2\u0176\u0177\7\u00e1\2\2\u0177\u0178"+
		"\7\36\2\2\u0178\u0179\7\3\2\2\u0179\u017a\5p9\2\u017a\u017b\7\4\2\2\u017b"+
		"\u017d\3\2\2\2\u017c\u0176\3\2\2\2\u017c\u017d\3\2\2\2\u017d\u017e\3\2"+
		"\2\2\u017e\u017f\7W\2\2\u017f\u0180\5.\30\2\u0180\u0380\3\2\2\2\u0181"+
		"\u0182\7Y\2\2\u0182\u0186\7Z\2\2\u0183\u0184\7\u0089\2\2\u0184\u0185\7"+
		"*\2\2\u0185\u0187\7,\2\2\u0186\u0183\3\2\2\2\u0186\u0187\3\2\2\2\u0187"+
		"\u0188\3\2\2\2\u0188\u0189\5\u009cO\2\u0189\u018a\7.\2\2\u018a\u018c\5"+
		"\u009cO\2\u018b\u018d\5\30\r\2\u018c\u018b\3\2\2\2\u018c\u018d\3\2\2\2"+
		"\u018d\u0380\3\2\2\2\u018e\u018f\7\u00dd\2\2\u018f\u0190\7Z\2\2\u0190"+
		"\u0192\5\u009cO\2\u0191\u0193\5 \21\2\u0192\u0191\3\2\2\2\u0192\u0193"+
		"\3\2\2\2\u0193\u0194\3\2\2\2\u0194\u0195\7\u00de\2\2\u0195\u019d\7\u00e0"+
		"\2\2\u0196\u019e\5\u00dep\2\u0197\u0198\7\67\2\2\u0198\u0199\7j\2\2\u0199"+
		"\u019e\5r:\2\u019a\u019b\7\67\2\2\u019b\u019c\7\31\2\2\u019c\u019e\7j"+
		"\2\2\u019d\u0196\3\2\2\2\u019d\u0197\3\2\2\2\u019d\u019a\3\2\2\2\u019d"+
		"\u019e\3\2\2\2\u019e\u0380\3\2\2\2\u019f\u01a0\7w\2\2\u01a0\u01a1\7Z\2"+
		"\2\u01a1\u01a2\5\u009cO\2\u01a2\u01a3\7\27\2\2\u01a3\u01a4\7j\2\2\u01a4"+
		"\u01a5\7\3\2\2\u01a5\u01a6\5\u00c2b\2\u01a6\u01a7\7\4\2\2\u01a7\u0380"+
		"\3\2\2\2\u01a8\u01a9\7w\2\2\u01a9\u01aa\t\3\2\2\u01aa\u01ab\5\u009cO\2"+
		"\u01ab\u01ac\7x\2\2\u01ac\u01ad\7t\2\2\u01ad\u01ae\5\u009cO\2\u01ae\u0380"+
		"\3\2\2\2\u01af\u01b0\7w\2\2\u01b0\u01b1\t\3\2\2\u01b1\u01b2\5\u009cO\2"+
		"\u01b2\u01b3\7}\2\2\u01b3\u01b4\7\u00c3\2\2\u01b4\u01b5\5.\30\2\u01b5"+
		"\u0380\3\2\2\2\u01b6\u01b7\7w\2\2\u01b7\u01b8\t\3\2\2\u01b8\u01b9\5\u009c"+
		"O\2\u01b9\u01ba\7\u00c2\2\2\u01ba\u01bd\7\u00c3\2\2\u01bb\u01bc\7\u0089"+
		"\2\2\u01bc\u01be\7,\2\2\u01bd\u01bb\3\2\2\2\u01bd\u01be\3\2\2\2\u01be"+
		"\u01bf\3\2\2\2\u01bf\u01c0\5.\30\2\u01c0\u0380\3\2\2\2\u01c1\u01c2\7w"+
		"\2\2\u01c2\u01c3\7Z\2\2\u01c3\u01c5\5\u009cO\2\u01c4\u01c6\5 \21\2\u01c5"+
		"\u01c4\3\2\2\2\u01c5\u01c6\3\2\2\2\u01c6\u01c7\3\2\2\2\u01c7\u01c9\7\u00d1"+
		"\2\2\u01c8\u01ca\7k\2\2\u01c9\u01c8\3\2\2\2\u01c9\u01ca\3\2\2\2\u01ca"+
		"\u01cb\3\2\2\2\u01cb\u01cc\5\u00dep\2\u01cc\u01ce\5\u00c4c\2\u01cd\u01cf"+
		"\5\u00be`\2\u01ce\u01cd\3\2\2\2\u01ce\u01cf\3\2\2\2\u01cf\u0380\3\2\2"+
		"\2\u01d0\u01d1\7w\2\2\u01d1\u01d2\7Z\2\2\u01d2\u01d4\5\u009cO\2\u01d3"+
		"\u01d5\5 \21\2\u01d4\u01d3\3\2\2\2\u01d4\u01d5\3\2\2\2\u01d5\u01d6\3\2"+
		"\2\2\u01d6\u01d7\7}\2\2\u01d7\u01d8\7\u00aa\2\2\u01d8\u01dc\7\u0107\2"+
		"\2\u01d9\u01da\7W\2\2\u01da\u01db\7\u00ab\2\2\u01db\u01dd\5.\30\2\u01dc"+
		"\u01d9\3\2\2\2\u01dc\u01dd\3\2\2\2\u01dd\u0380\3\2\2\2\u01de\u01df\7w"+
		"\2\2\u01df\u01e0\7Z\2\2\u01e0\u01e2\5\u009cO\2\u01e1\u01e3\5 \21\2\u01e2"+
		"\u01e1\3\2\2\2\u01e2\u01e3\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4\u01e5\7}"+
		"\2\2\u01e5\u01e6\7\u00ab\2\2\u01e6\u01e7\5.\30\2\u01e7\u0380\3\2\2\2\u01e8"+
		"\u01e9\7w\2\2\u01e9\u01ea\7Z\2\2\u01ea\u01eb\5\u009cO\2\u01eb\u01ef\7"+
		"\27\2\2\u01ec\u01ed\7\u0089\2\2\u01ed\u01ee\7*\2\2\u01ee\u01f0\7,\2\2"+
		"\u01ef\u01ec\3\2\2\2\u01ef\u01f0\3\2\2\2\u01f0\u01f2\3\2\2\2\u01f1\u01f3"+
		"\5\36\20\2\u01f2\u01f1\3\2\2\2\u01f3\u01f4\3\2\2\2\u01f4\u01f2\3\2\2\2"+
		"\u01f4\u01f5\3\2\2\2\u01f5\u0380\3\2\2\2\u01f6\u01f7\7w\2\2\u01f7\u01f8"+
		"\7\\\2\2\u01f8\u01f9\5\u009cO\2\u01f9\u01fd\7\27\2\2\u01fa\u01fb\7\u0089"+
		"\2\2\u01fb\u01fc\7*\2\2\u01fc\u01fe\7,\2\2\u01fd\u01fa\3\2\2\2\u01fd\u01fe"+
		"\3\2\2\2\u01fe\u0200\3\2\2\2\u01ff\u0201\5 \21\2\u0200\u01ff\3\2\2\2\u0201"+
		"\u0202\3\2\2\2\u0202\u0200\3\2\2\2\u0202\u0203\3\2\2\2\u0203\u0380\3\2"+
		"\2\2\u0204\u0205\7w\2\2\u0205\u0206\7Z\2\2\u0206\u0207\5\u009cO\2\u0207"+
		"\u0208\5 \21\2\u0208\u0209\7x\2\2\u0209\u020a\7t\2\2\u020a\u020b\5 \21"+
		"\2\u020b\u0380\3\2\2\2\u020c\u020d\7w\2\2\u020d\u020e\7Z\2\2\u020e\u020f"+
		"\5\u009cO\2\u020f\u0212\7o\2\2\u0210\u0211\7\u0089\2\2\u0211\u0213\7,"+
		"\2\2\u0212\u0210\3\2\2\2\u0212\u0213\3\2\2\2\u0213\u0214\3\2\2\2\u0214"+
		"\u0219\5 \21\2\u0215\u0216\7\6\2\2\u0216\u0218\5 \21\2\u0217\u0215\3\2"+
		"\2\2\u0218\u021b\3\2\2\2\u0219\u0217\3\2\2\2\u0219\u021a\3\2\2\2\u021a"+
		"\u021d\3\2\2\2\u021b\u0219\3\2\2\2\u021c\u021e\7\u00d6\2\2\u021d\u021c"+
		"\3\2\2\2\u021d\u021e\3\2\2\2\u021e\u0380\3\2\2\2\u021f\u0220\7w\2\2\u0220"+
		"\u0221\7\\\2\2\u0221\u0222\5\u009cO\2\u0222\u0225\7o\2\2\u0223\u0224\7"+
		"\u0089\2\2\u0224\u0226\7,\2\2\u0225\u0223\3\2\2\2\u0225\u0226\3\2\2\2"+
		"\u0226\u0227\3\2\2\2\u0227\u022c\5 \21\2\u0228\u0229\7\6\2\2\u0229\u022b"+
		"\5 \21\2\u022a\u0228\3\2\2\2\u022b\u022e\3\2\2\2\u022c\u022a\3\2\2\2\u022c"+
		"\u022d\3\2\2\2\u022d\u0380\3\2\2\2\u022e\u022c\3\2\2\2\u022f\u0230\7w"+
		"\2\2\u0230\u0231\7Z\2\2\u0231\u0233\5\u009cO\2\u0232\u0234\5 \21\2\u0233"+
		"\u0232\3\2\2\2\u0233\u0234\3\2\2\2\u0234\u0235\3\2\2\2\u0235\u0236\7}"+
		"\2\2\u0236\u0237\5\30\r\2\u0237\u0380\3\2\2\2\u0238\u0239\7w\2\2\u0239"+
		"\u023a\7Z\2\2\u023a\u023b\5\u009cO\2\u023b\u023c\7\u00ea\2\2\u023c\u023d"+
		"\7m\2\2\u023d\u0380\3\2\2\2\u023e\u023f\7o\2\2\u023f\u0242\7Z\2\2\u0240"+
		"\u0241\7\u0089\2\2\u0241\u0243\7,\2\2\u0242\u0240\3\2\2\2\u0242\u0243"+
		"\3\2\2\2\u0243\u0244\3\2\2\2\u0244\u0246\5\u009cO\2\u0245\u0247\7\u00d6"+
		"\2\2\u0246\u0245\3\2\2\2\u0246\u0247\3\2\2\2\u0247\u0380\3\2\2\2\u0248"+
		"\u0249\7o\2\2\u0249\u024c\7\\\2\2\u024a\u024b\7\u0089\2\2\u024b\u024d"+
		"\7,\2\2\u024c\u024a\3\2\2\2\u024c\u024d\3\2\2\2\u024d\u024e\3\2\2\2\u024e"+
		"\u0380\5\u009cO\2\u024f\u0252\7Y\2\2\u0250\u0251\7\'\2\2\u0251\u0253\7"+
		"]\2\2\u0252\u0250\3\2\2\2\u0252\u0253\3\2\2\2\u0253\u0258\3\2\2\2\u0254"+
		"\u0256\7\u00bf\2\2\u0255\u0254\3\2\2\2\u0255\u0256\3\2\2\2\u0256\u0257"+
		"\3\2\2\2\u0257\u0259\7\u00c0\2\2\u0258\u0255\3\2\2\2\u0258\u0259\3\2\2"+
		"\2\u0259\u025a\3\2\2\2\u025a\u025e\7\\\2\2\u025b\u025c\7\u0089\2\2\u025c"+
		"\u025d\7*\2\2\u025d\u025f\7,\2\2\u025e\u025b\3\2\2\2\u025e\u025f\3\2\2"+
		"\2\u025f\u0260\3\2\2\2\u0260\u0262\5\u009cO\2\u0261\u0263\5x=\2\u0262"+
		"\u0261\3\2\2\2\u0262\u0263\3\2\2\2\u0263\u0266\3\2\2\2\u0264\u0265\7|"+
		"\2\2\u0265\u0267\7\u0107\2\2\u0266\u0264\3\2\2\2\u0266\u0267\3\2\2\2\u0267"+
		"\u026b\3\2\2\2\u0268\u0269\7\u00e1\2\2\u0269\u026a\7G\2\2\u026a\u026c"+
		"\5p9\2\u026b\u0268\3\2\2\2\u026b\u026c\3\2\2\2\u026c\u026f\3\2\2\2\u026d"+
		"\u026e\7\u00c3\2\2\u026e\u0270\5.\30\2\u026f\u026d\3\2\2\2\u026f\u0270"+
		"\3\2\2\2\u0270\u0271\3\2\2\2\u0271\u0272\7\30\2\2\u0272\u0273\5\32\16"+
		"\2\u0273\u0380\3\2\2\2\u0274\u0277\7Y\2\2\u0275\u0276\7\'\2\2\u0276\u0278"+
		"\7]\2\2\u0277\u0275\3\2\2\2\u0277\u0278\3\2\2\2\u0278\u027a\3\2\2\2\u0279"+
		"\u027b\7\u00bf\2\2\u027a\u0279\3\2\2\2\u027a\u027b\3\2\2\2\u027b\u027c"+
		"\3\2\2\2\u027c\u027d\7\u00c0\2\2\u027d\u027e\7\\\2\2\u027e\u0283\5\u009c"+
		"O\2\u027f\u0280\7\3\2\2\u0280\u0281\5\u00c2b\2\u0281\u0282\7\4\2\2\u0282"+
		"\u0284\3\2\2\2\u0283\u027f\3\2\2\2\u0283\u0284\3\2\2\2\u0284\u0285\3\2"+
		"\2\2\u0285\u0288\5,\27\2\u0286\u0287\7\u00c1\2\2\u0287\u0289\5.\30\2\u0288"+
		"\u0286\3\2\2\2\u0288\u0289\3\2\2\2\u0289\u0380\3\2\2\2\u028a\u028b\7w"+
		"\2\2\u028b\u028c\7\\\2\2\u028c\u028e\5\u009cO\2\u028d\u028f\7\30\2\2\u028e"+
		"\u028d\3\2\2\2\u028e\u028f\3\2\2\2\u028f\u0290\3\2\2\2\u0290\u0291\5\32"+
		"\16\2\u0291\u0380\3\2\2\2\u0292\u0295\7Y\2\2\u0293\u0294\7\'\2\2\u0294"+
		"\u0296\7]\2\2\u0295\u0293\3\2\2\2\u0295\u0296\3\2\2\2\u0296\u0298\3\2"+
		"\2\2\u0297\u0299\7\u00c0\2\2\u0298\u0297\3\2\2\2\u0298\u0299\3\2\2\2\u0299"+
		"\u029a\3\2\2\2\u029a\u029e\7\u00b7\2\2\u029b\u029c\7\u0089\2\2\u029c\u029d"+
		"\7*\2\2\u029d\u029f\7,\2\2\u029e\u029b\3\2\2\2\u029e\u029f\3\2\2\2\u029f"+
		"\u02a0\3\2\2\2\u02a0\u02a1\5\u00dco\2\u02a1\u02a2\7\30\2\2\u02a2\u02ac"+
		"\7\u0107\2\2\u02a3\u02a4\7\u00a9\2\2\u02a4\u02a9\5@!\2\u02a5\u02a6\7\6"+
		"\2\2\u02a6\u02a8\5@!\2\u02a7\u02a5\3\2\2\2\u02a8\u02ab\3\2\2\2\u02a9\u02a7"+
		"\3\2\2\2\u02a9\u02aa\3\2\2\2\u02aa\u02ad\3\2\2\2\u02ab\u02a9\3\2\2\2\u02ac"+
		"\u02a3\3\2\2\2\u02ac\u02ad\3\2\2\2\u02ad\u0380\3\2\2\2\u02ae\u02b0\7o"+
		"\2\2\u02af\u02b1\7\u00c0\2\2\u02b0\u02af\3\2\2\2\u02b0\u02b1\3\2\2\2\u02b1"+
		"\u02b2\3\2\2\2\u02b2\u02b5\7\u00b7\2\2\u02b3\u02b4\7\u0089\2\2\u02b4\u02b6"+
		"\7,\2\2\u02b5\u02b3\3\2\2\2\u02b5\u02b6\3\2\2\2\u02b6\u02b7\3\2\2\2\u02b7"+
		"\u0380\5\u00dco\2\u02b8\u02ba\7b\2\2\u02b9\u02bb\t\4\2\2\u02ba\u02b9\3"+
		"\2\2\2\u02ba\u02bb\3\2\2\2\u02bb\u02bc\3\2\2\2\u02bc\u0380\5\16\b\2\u02bd"+
		"\u02be\7h\2\2\u02be\u02c1\7i\2\2\u02bf\u02c0\t\5\2\2\u02c0\u02c2\5\u00de"+
		"p\2\u02c1\u02bf\3\2\2\2\u02c1\u02c2\3\2\2\2\u02c2\u02c7\3\2\2\2\u02c3"+
		"\u02c5\7.\2\2\u02c4\u02c3\3\2\2\2\u02c4\u02c5\3\2\2\2\u02c5\u02c6\3\2"+
		"\2\2\u02c6\u02c8\7\u0107\2\2\u02c7\u02c4\3\2\2\2\u02c7\u02c8\3\2\2\2\u02c8"+
		"\u0380\3\2\2\2\u02c9\u02ca\7h\2\2\u02ca\u02cb\7Z\2\2\u02cb\u02ce\7\u00b8"+
		"\2\2\u02cc\u02cd\t\5\2\2\u02cd\u02cf\5\u00dep\2\u02ce\u02cc\3\2\2\2\u02ce"+
		"\u02cf\3\2\2\2\u02cf\u02d0\3\2\2\2\u02d0\u02d1\7.\2\2\u02d1\u02d3\7\u0107"+
		"\2\2\u02d2\u02d4\5 \21\2\u02d3\u02d2\3\2\2\2\u02d3\u02d4\3\2\2\2\u02d4"+
		"\u0380\3\2\2\2\u02d5\u02d6\7h\2\2\u02d6\u02db\7\u00da\2\2\u02d7\u02d9"+
		"\7.\2\2\u02d8\u02d7\3\2\2\2\u02d8\u02d9\3\2\2\2\u02d9\u02da\3\2\2\2\u02da"+
		"\u02dc\7\u0107\2\2\u02db\u02d8\3\2\2\2\u02db\u02dc\3\2\2\2\u02dc\u0380"+
		"\3\2\2\2\u02dd\u02de\7h\2\2\u02de\u02df\7\u00c3\2\2\u02df\u02e4\5\u009c"+
		"O\2\u02e0\u02e1\7\3\2\2\u02e1\u02e2\5\62\32\2\u02e2\u02e3\7\4\2\2\u02e3"+
		"\u02e5\3\2\2\2\u02e4\u02e0\3\2\2\2\u02e4\u02e5\3\2\2\2\u02e5\u0380\3\2"+
		"\2\2\u02e6\u02e7\7h\2\2\u02e7\u02e8\7j\2\2\u02e8\u02e9\t\5\2\2\u02e9\u02ec"+
		"\5\u009cO\2\u02ea\u02eb\t\5\2\2\u02eb\u02ed\5\u00dep\2\u02ec\u02ea\3\2"+
		"\2\2\u02ec\u02ed\3\2\2\2\u02ed\u0380\3\2\2\2\u02ee\u02ef\7h\2\2\u02ef"+
		"\u02f0\7m\2\2\u02f0\u02f2\5\u009cO\2\u02f1\u02f3\5 \21\2\u02f2\u02f1\3"+
		"\2\2\2\u02f2\u02f3\3\2\2\2\u02f3\u0380\3\2\2\2\u02f4\u02f6\7h\2\2\u02f5"+
		"\u02f7\5\u00dep\2\u02f6\u02f5\3\2\2\2\u02f6\u02f7\3\2\2\2\u02f7\u02f8"+
		"\3\2\2\2\u02f8\u0300\7n\2\2\u02f9\u02fb\7.\2\2\u02fa\u02f9\3\2\2\2\u02fa"+
		"\u02fb\3\2\2\2\u02fb\u02fe\3\2\2\2\u02fc\u02ff\5\u00dco\2\u02fd\u02ff"+
		"\7\u0107\2\2\u02fe\u02fc\3\2\2\2\u02fe\u02fd\3\2\2\2\u02ff\u0301\3\2\2"+
		"\2\u0300\u02fa\3\2\2\2\u0300\u0301\3\2\2\2\u0301\u0380\3\2\2\2\u0302\u0303"+
		"\7h\2\2\u0303\u0304\7Y\2\2\u0304\u0305\7Z\2\2\u0305\u0380\5\u009cO\2\u0306"+
		"\u0307\t\6\2\2\u0307\u0309\7\u00b7\2\2\u0308\u030a\7\u00b8\2\2\u0309\u0308"+
		"\3\2\2\2\u0309\u030a\3\2\2\2\u030a\u030b\3\2\2\2\u030b\u0380\5$\23\2\u030c"+
		"\u030d\t\6\2\2\u030d\u030f\7\u00d9\2\2\u030e\u0310\7\u00b8\2\2\u030f\u030e"+
		"\3\2\2\2\u030f\u0310\3\2\2\2\u0310\u0311\3\2\2\2\u0311\u0380\5\u00dep"+
		"\2\u0312\u0314\t\6\2\2\u0313\u0315\7Z\2\2\u0314\u0313\3\2\2\2\u0314\u0315"+
		"\3\2\2\2\u0315\u0317\3\2\2\2\u0316\u0318\t\7\2\2\u0317\u0316\3\2\2\2\u0317"+
		"\u0318\3\2\2\2\u0318\u0319\3\2\2\2\u0319\u031b\5\u009cO\2\u031a\u031c"+
		"\5 \21\2\u031b\u031a\3\2\2\2\u031b\u031c\3\2\2\2\u031c\u031e\3\2\2\2\u031d"+
		"\u031f\5&\24\2\u031e\u031d\3\2\2\2\u031e\u031f\3\2\2\2\u031f\u0380\3\2"+
		"\2\2\u0320\u0321\7\u00b9\2\2\u0321\u0322\7Z\2\2\u0322\u0380\5\u009cO\2"+
		"\u0323\u032b\7\u00b9\2\2\u0324\u032c\7\u0107\2\2\u0325\u0327\13\2\2\2"+
		"\u0326\u0325\3\2\2\2\u0327\u032a\3\2\2\2\u0328\u0329\3\2\2\2\u0328\u0326"+
		"\3\2\2\2\u0329\u032c\3\2\2\2\u032a\u0328\3\2\2\2\u032b\u0324\3\2\2\2\u032b"+
		"\u0328\3\2\2\2\u032c\u0380\3\2\2\2\u032d\u032f\7\u00bb\2\2\u032e\u0330"+
		"\7\u00bd\2\2\u032f\u032e\3\2\2\2\u032f\u0330\3\2\2\2\u0330\u0331\3\2\2"+
		"\2\u0331\u0332\7Z\2\2\u0332\u0335\5\u009cO\2\u0333\u0334\7\u00c1\2\2\u0334"+
		"\u0336\5.\30\2\u0335\u0333\3\2\2\2\u0335\u0336\3\2\2\2\u0336\u033b\3\2"+
		"\2\2\u0337\u0339\7\30\2\2\u0338\u0337\3\2\2\2\u0338\u0339\3\2\2\2\u0339"+
		"\u033a\3\2\2\2\u033a\u033c\5\32\16\2\u033b\u0338\3\2\2\2\u033b\u033c\3"+
		"\2\2\2\u033c\u0380\3\2\2\2\u033d\u033e\7\u00bc\2\2\u033e\u0341\7Z\2\2"+
		"\u033f\u0340\7\u0089\2\2\u0340\u0342\7,\2\2\u0341\u033f\3\2\2\2\u0341"+
		"\u0342\3\2\2\2\u0342\u0343\3\2\2\2\u0343\u0380\5\u009cO\2\u0344\u0345"+
		"\7\u00ba\2\2\u0345\u0380\7\u00bb\2\2\u0346\u0347\7\u00ed\2\2\u0347\u0349"+
		"\7\177\2\2\u0348\u034a\7\u00f8\2\2\u0349\u0348\3\2\2\2\u0349\u034a\3\2"+
		"\2\2\u034a\u034b\3\2\2\2\u034b\u034c\7\u00f9\2\2\u034c\u034e\7\u0107\2"+
		"\2\u034d\u034f\7\u00a6\2\2\u034e\u034d\3\2\2\2\u034e\u034f\3\2\2\2\u034f"+
		"\u0350\3\2\2\2\u0350\u0351\7`\2\2\u0351\u0352\7Z\2\2\u0352\u0354\5\u009c"+
		"O\2\u0353\u0355\5 \21\2\u0354\u0353\3\2\2\2\u0354\u0355\3\2\2\2\u0355"+
		"\u0380\3\2\2\2\u0356\u0357\7\u00dc\2\2\u0357\u0358\7Z\2\2\u0358\u035a"+
		"\5\u009cO\2\u0359\u035b\5 \21\2\u035a\u0359\3\2\2\2\u035a\u035b\3\2\2"+
		"\2\u035b\u0380\3\2\2\2\u035c\u035d\7\u00e8\2\2\u035d\u035e\7\u00e9\2\2"+
		"\u035e\u035f\7Z\2\2\u035f\u0380\5\u009cO\2\u0360\u0361\t\b\2\2\u0361\u0365"+
		"\5\u00dep\2\u0362\u0364\13\2\2\2\u0363\u0362\3\2\2\2\u0364\u0367\3\2\2"+
		"\2\u0365\u0366\3\2\2\2\u0365\u0363\3\2\2\2\u0366\u0380\3\2\2\2\u0367\u0365"+
		"\3\2\2\2\u0368\u0369\7}\2\2\u0369\u036d\7\u00ee\2\2\u036a\u036c\13\2\2"+
		"\2\u036b\u036a\3\2\2\2\u036c\u036f\3\2\2\2\u036d\u036e\3\2\2\2\u036d\u036b"+
		"\3\2\2\2\u036e\u0380\3\2\2\2\u036f\u036d\3\2\2\2\u0370\u0374\7}\2\2\u0371"+
		"\u0373\13\2\2\2\u0372\u0371\3\2\2\2\u0373\u0376\3\2\2\2\u0374\u0375\3"+
		"\2\2\2\u0374\u0372\3\2\2\2\u0375\u0380\3\2\2\2\u0376\u0374\3\2\2\2\u0377"+
		"\u0380\7~\2\2\u0378\u037c\5\20\t\2\u0379\u037b\13\2\2\2\u037a\u0379\3"+
		"\2\2\2\u037b\u037e\3\2\2\2\u037c\u037d\3\2\2\2\u037c\u037a\3\2\2\2\u037d"+
		"\u0380\3\2\2\2\u037e\u037c\3\2\2\2\u037f\u00fd\3\2\2\2\u037f\u00fe\3\2"+
		"\2\2\u037f\u0100\3\2\2\2\u037f\u0114\3\2\2\2\u037f\u011b\3\2\2\2\u037f"+
		"\u0125\3\2\2\2\u037f\u0143\3\2\2\2\u037f\u0164\3\2\2\2\u037f\u0181\3\2"+
		"\2\2\u037f\u018e\3\2\2\2\u037f\u019f\3\2\2\2\u037f\u01a8\3\2\2\2\u037f"+
		"\u01af\3\2\2\2\u037f\u01b6\3\2\2\2\u037f\u01c1\3\2\2\2\u037f\u01d0\3\2"+
		"\2\2\u037f\u01de\3\2\2\2\u037f\u01e8\3\2\2\2\u037f\u01f6\3\2\2\2\u037f"+
		"\u0204\3\2\2\2\u037f\u020c\3\2\2\2\u037f\u021f\3\2\2\2\u037f\u022f\3\2"+
		"\2\2\u037f\u0238\3\2\2\2\u037f\u023e\3\2\2\2\u037f\u0248\3\2\2\2\u037f"+
		"\u024f\3\2\2\2\u037f\u0274\3\2\2\2\u037f\u028a\3\2\2\2\u037f\u0292\3\2"+
		"\2\2\u037f\u02ae\3\2\2\2\u037f\u02b8\3\2\2\2\u037f\u02bd\3\2\2\2\u037f"+
		"\u02c9\3\2\2\2\u037f\u02d5\3\2\2\2\u037f\u02dd\3\2\2\2\u037f\u02e6\3\2"+
		"\2\2\u037f\u02ee\3\2\2\2\u037f\u02f4\3\2\2\2\u037f\u0302\3\2\2\2\u037f"+
		"\u0306\3\2\2\2\u037f\u030c\3\2\2\2\u037f\u0312\3\2\2\2\u037f\u0320\3\2"+
		"\2\2\u037f\u0323\3\2\2\2\u037f\u032d\3\2\2\2\u037f\u033d\3\2\2\2\u037f"+
		"\u0344\3\2\2\2\u037f\u0346\3\2\2\2\u037f\u0356\3\2\2\2\u037f\u035c\3\2"+
		"\2\2\u037f\u0360\3\2\2\2\u037f\u0368\3\2\2\2\u037f\u0370\3\2\2\2\u037f"+
		"\u0377\3\2\2\2\u037f\u0378\3\2\2\2\u0380\17\3\2\2\2\u0381\u0382\7Y\2\2"+
		"\u0382\u042c\7\u00ee\2\2\u0383\u0384\7o\2\2\u0384\u042c\7\u00ee\2\2\u0385"+
		"\u0387\7\u00e5\2\2\u0386\u0388\7\u00ee\2\2\u0387\u0386\3\2\2\2\u0387\u0388"+
		"\3\2\2\2\u0388\u042c\3\2\2\2\u0389\u038b\7\u00e4\2\2\u038a\u038c\7\u00ee"+
		"\2\2\u038b\u038a\3\2\2\2\u038b\u038c\3\2\2\2\u038c\u042c\3\2\2\2\u038d"+
		"\u038e\7h\2\2\u038e\u042c\7\u00e5\2\2\u038f\u0390\7h\2\2\u0390\u0392\7"+
		"\u00ee\2\2\u0391\u0393\7\u00e5\2\2\u0392\u0391\3\2\2\2\u0392\u0393\3\2"+
		"\2\2\u0393\u042c\3\2\2\2\u0394\u0395\7h\2\2\u0395\u042c\7\u00f1\2\2\u0396"+
		"\u0397\7h\2\2\u0397\u042c\7\u00ef\2\2\u0398\u0399\7h\2\2\u0399\u039a\7"+
		"R\2\2\u039a\u042c\7\u00ef\2\2\u039b\u039c\7\u00eb\2\2\u039c\u042c\7Z\2"+
		"\2\u039d\u039e\7\u00ec\2\2\u039e\u042c\7Z\2\2\u039f\u03a0\7h\2\2\u03a0"+
		"\u042c\7\u00f0\2\2\u03a1\u03a2\7h\2\2\u03a2\u03a3\7Y\2\2\u03a3\u042c\7"+
		"Z\2\2\u03a4\u03a5\7h\2\2\u03a5\u042c\7\u00f2\2\2\u03a6\u03a7\7h\2\2\u03a7"+
		"\u042c\7\u00f4\2\2\u03a8\u03a9\7h\2\2\u03a9\u042c\7\u00f5\2\2\u03aa\u03ab"+
		"\7Y\2\2\u03ab\u042c\7\u00f3\2\2\u03ac\u03ad\7o\2\2\u03ad\u042c\7\u00f3"+
		"\2\2\u03ae\u03af\7w\2\2\u03af\u042c\7\u00f3\2\2\u03b0\u03b1\7\u00e6\2"+
		"\2\u03b1\u042c\7Z\2\2\u03b2\u03b3\7\u00e6\2\2\u03b3\u042c\7\u00d9\2\2"+
		"\u03b4\u03b5\7\u00e7\2\2\u03b5\u042c\7Z\2\2\u03b6\u03b7\7\u00e7\2\2\u03b7"+
		"\u042c\7\u00d9\2\2\u03b8\u03b9\7Y\2\2\u03b9\u03ba\7\u00c0\2\2\u03ba\u042c"+
		"\7\u0084\2\2\u03bb\u03bc\7o\2\2\u03bc\u03bd\7\u00c0\2\2\u03bd\u042c\7"+
		"\u0084\2\2\u03be\u03bf\7w\2\2\u03bf\u03c0\7Z\2\2\u03c0\u03c1\5\u009cO"+
		"\2\u03c1\u03c2\7*\2\2\u03c2\u03c3\7\u00d4\2\2\u03c3\u042c\3\2\2\2\u03c4"+
		"\u03c5\7w\2\2\u03c5\u03c6\7Z\2\2\u03c6\u03c7\5\u009cO\2\u03c7\u03c8\7"+
		"\u00d4\2\2\u03c8\u03c9\7\36\2\2\u03c9\u042c\3\2\2\2\u03ca\u03cb\7w\2\2"+
		"\u03cb\u03cc\7Z\2\2\u03cc\u03cd\5\u009cO\2\u03cd\u03ce\7*\2\2\u03ce\u03cf"+
		"\7\u00d5\2\2\u03cf\u042c\3\2\2\2\u03d0\u03d1\7w\2\2\u03d1\u03d2\7Z\2\2"+
		"\u03d2\u03d3\5\u009cO\2\u03d3\u03d4\7\u00c6\2\2\u03d4\u03d5\7\36\2\2\u03d5"+
		"\u042c\3\2\2\2\u03d6\u03d7\7w\2\2\u03d7\u03d8\7Z\2\2\u03d8\u03d9\5\u009c"+
		"O\2\u03d9\u03da\7*\2\2\u03da\u03db\7\u00c6\2\2\u03db\u042c\3\2\2\2\u03dc"+
		"\u03dd\7w\2\2\u03dd\u03de\7Z\2\2\u03de\u03df\5\u009cO\2\u03df\u03e0\7"+
		"*\2\2\u03e0\u03e1\7\u00c7\2\2\u03e1\u03e2\7\30\2\2\u03e2\u03e3\7\u00c8"+
		"\2\2\u03e3\u042c\3\2\2\2\u03e4\u03e5\7w\2\2\u03e5\u03e6\7Z\2\2\u03e6\u03e7"+
		"\5\u009cO\2\u03e7\u03e8\7}\2\2\u03e8\u03e9\7\u00c6\2\2\u03e9\u03ea\7\u00c9"+
		"\2\2\u03ea\u042c\3\2\2\2\u03eb\u03ec\7w\2\2\u03ec\u03ed\7Z\2\2\u03ed\u03ee"+
		"\5\u009cO\2\u03ee\u03ef\7\u00ca\2\2\u03ef\u03f0\7L\2\2\u03f0\u042c\3\2"+
		"\2\2\u03f1\u03f2\7w\2\2\u03f2\u03f3\7Z\2\2\u03f3\u03f4\5\u009cO\2\u03f4"+
		"\u03f5\7\u00cb\2\2\u03f5\u03f6\7L\2\2\u03f6\u042c\3\2\2\2\u03f7\u03f8"+
		"\7w\2\2\u03f8\u03f9\7Z\2\2\u03f9\u03fa\5\u009cO\2\u03fa\u03fb\7\u00cc"+
		"\2\2\u03fb\u03fc\7L\2\2\u03fc\u042c\3\2\2\2\u03fd\u03fe\7w\2\2\u03fe\u03ff"+
		"\7Z\2\2\u03ff\u0400\5\u009cO\2\u0400\u0401\7\u00ce\2\2\u0401\u042c\3\2"+
		"\2\2\u0402\u0403\7w\2\2\u0403\u0404\7Z\2\2\u0404\u0406\5\u009cO\2\u0405"+
		"\u0407\5 \21\2\u0406\u0405\3\2\2\2\u0406\u0407\3\2\2\2\u0407\u0408\3\2"+
		"\2\2\u0408\u0409\7\u00cf\2\2\u0409\u042c\3\2\2\2\u040a\u040b\7w\2\2\u040b"+
		"\u040c\7Z\2\2\u040c\u040e\5\u009cO\2\u040d\u040f\5 \21\2\u040e\u040d\3"+
		"\2\2\2\u040e\u040f\3\2\2\2\u040f\u0410\3\2\2\2\u0410\u0411\7\u00d0\2\2"+
		"\u0411\u042c\3\2\2\2\u0412\u0413\7w\2\2\u0413\u0414\7Z\2\2\u0414\u0416"+
		"\5\u009cO\2\u0415\u0417\5 \21\2\u0416\u0415\3\2\2\2\u0416\u0417\3\2\2"+
		"\2\u0417\u0418\3\2\2\2\u0418\u0419\7}\2\2\u0419\u041a\7\u00cd\2\2\u041a"+
		"\u042c\3\2\2\2\u041b\u041c\7w\2\2\u041c\u041d\7Z\2\2\u041d\u041f\5\u009c"+
		"O\2\u041e\u0420\5 \21\2\u041f\u041e\3\2\2\2\u041f\u0420\3\2\2\2\u0420"+
		"\u0421\3\2\2\2\u0421\u0422\7]\2\2\u0422\u0423\7j\2\2\u0423\u042c\3\2\2"+
		"\2\u0424\u0425\7\u0080\2\2\u0425\u042c\7\u0081\2\2\u0426\u042c\7\u0082"+
		"\2\2\u0427\u042c\7\u0083\2\2\u0428\u042c\7\u00db\2\2\u0429\u042a\7_\2"+
		"\2\u042a\u042c\7\26\2\2\u042b\u0381\3\2\2\2\u042b\u0383\3\2\2\2\u042b"+
		"\u0385\3\2\2\2\u042b\u0389\3\2\2\2\u042b\u038d\3\2\2\2\u042b\u038f\3\2"+
		"\2\2\u042b\u0394\3\2\2\2\u042b\u0396\3\2\2\2\u042b\u0398\3\2\2\2\u042b"+
		"\u039b\3\2\2\2\u042b\u039d\3\2\2\2\u042b\u039f\3\2\2\2\u042b\u03a1\3\2"+
		"\2\2\u042b\u03a4\3\2\2\2\u042b\u03a6\3\2\2\2\u042b\u03a8\3\2\2\2\u042b"+
		"\u03aa\3\2\2\2\u042b\u03ac\3\2\2\2\u042b\u03ae\3\2\2\2\u042b\u03b0\3\2"+
		"\2\2\u042b\u03b2\3\2\2\2\u042b\u03b4\3\2\2\2\u042b\u03b6\3\2\2\2\u042b"+
		"\u03b8\3\2\2\2\u042b\u03bb\3\2\2\2\u042b\u03be\3\2\2\2\u042b\u03c4\3\2"+
		"\2\2\u042b\u03ca\3\2\2\2\u042b\u03d0\3\2\2\2\u042b\u03d6\3\2\2\2\u042b"+
		"\u03dc\3\2\2\2\u042b\u03e4\3\2\2\2\u042b\u03eb\3\2\2\2\u042b\u03f1\3\2"+
		"\2\2\u042b\u03f7\3\2\2\2\u042b\u03fd\3\2\2\2\u042b\u0402\3\2\2\2\u042b"+
		"\u040a\3\2\2\2\u042b\u0412\3\2\2\2\u042b\u041b\3\2\2\2\u042b\u0424\3\2"+
		"\2\2\u042b\u0426\3\2\2\2\u042b\u0427\3\2\2\2\u042b\u0428\3\2\2\2\u042b"+
		"\u0429\3\2\2\2\u042c\21\3\2\2\2\u042d\u042f\7Y\2\2\u042e\u0430\7\u00c0"+
		"\2\2\u042f\u042e\3\2\2\2\u042f\u0430\3\2\2\2\u0430\u0432\3\2\2\2\u0431"+
		"\u0433\7\u00e2\2\2\u0432\u0431\3\2\2\2\u0432\u0433\3\2\2\2\u0433\u0434"+
		"\3\2\2\2\u0434\u0438\7Z\2\2\u0435\u0436\7\u0089\2\2\u0436\u0437\7*\2\2"+
		"\u0437\u0439\7,\2\2\u0438\u0435\3\2\2\2\u0438\u0439\3\2\2\2\u0439\u043a"+
		"\3\2\2\2\u043a\u043b\5\u009cO\2\u043b\23\3\2\2\2\u043c\u043d\7\u00d4\2"+
		"\2\u043d\u043e\7\36\2\2\u043e\u0442\5p9\2\u043f\u0440\7\u00d5\2\2\u0440"+
		"\u0441\7\36\2\2\u0441\u0443\5t;\2\u0442\u043f\3\2\2\2\u0442\u0443\3\2"+
		"\2\2\u0443\u0444\3\2\2\2\u0444\u0445\7`\2\2\u0445\u0446\7\u010b\2\2\u0446"+
		"\u0447\7\u00c5\2\2\u0447\25\3\2\2\2\u0448\u0449\7\u00c6\2\2\u0449\u044a"+
		"\7\36\2\2\u044a\u044b\5p9\2\u044b\u044e\7G\2\2\u044c\u044f\5\66\34\2\u044d"+
		"\u044f\58\35\2\u044e\u044c\3\2\2\2\u044e\u044d\3\2\2\2\u044f\u0453\3\2"+
		"\2\2\u0450\u0451\7\u00c7\2\2\u0451\u0452\7\30\2\2\u0452\u0454\7\u00c8"+
		"\2\2\u0453\u0450\3\2\2\2\u0453\u0454\3\2\2\2\u0454\27\3\2\2\2\u0455\u0456"+
		"\7\u00c9\2\2\u0456\u0457\7\u0107\2\2\u0457\31\3\2\2\2\u0458\u045a\5(\25"+
		"\2\u0459\u0458\3\2\2\2\u0459\u045a\3\2\2\2\u045a\u045b\3\2\2\2\u045b\u045c"+
		"\5B\"\2\u045c\33\3\2\2\2\u045d\u045e\7^\2\2\u045e\u045f\7\u00a6\2\2\u045f"+
		"\u0460\7Z\2\2\u0460\u0467\5\u009cO\2\u0461\u0465\5 \21\2\u0462\u0463\7"+
		"\u0089\2\2\u0463\u0464\7*\2\2\u0464\u0466\7,\2\2\u0465\u0462\3\2\2\2\u0465"+
		"\u0466\3\2\2\2\u0466\u0468\3\2\2\2\u0467\u0461\3\2\2\2\u0467\u0468\3\2"+
		"\2\2\u0468\u048e\3\2\2\2\u0469\u046a\7^\2\2\u046a\u046c\7`\2\2\u046b\u046d"+
		"\7Z\2\2\u046c\u046b\3\2\2\2\u046c\u046d\3\2\2\2\u046d\u046e\3\2\2\2\u046e"+
		"\u0470\5\u009cO\2\u046f\u0471\5 \21\2\u0470\u046f\3\2\2\2\u0470\u0471"+
		"\3\2\2\2\u0471\u048e\3\2\2\2\u0472\u0473\7^\2\2\u0473\u0475\7\u00a6\2"+
		"\2\u0474\u0476\7\u00f8\2\2\u0475\u0474\3\2\2\2\u0475\u0476\3\2\2\2\u0476"+
		"\u0477\3\2\2\2\u0477\u0478\7[\2\2\u0478\u047a\7\u0107\2\2\u0479\u047b"+
		"\5\u009aN\2\u047a\u0479\3\2\2\2\u047a\u047b\3\2\2\2\u047b\u047d\3\2\2"+
		"\2\u047c\u047e\5:\36\2\u047d\u047c\3\2\2\2\u047d\u047e\3\2\2\2\u047e\u048e"+
		"\3\2\2\2\u047f\u0480\7^\2\2\u0480\u0482\7\u00a6\2\2\u0481\u0483\7\u00f8"+
		"\2\2\u0482\u0481\3\2\2\2\u0482\u0483\3\2\2\2\u0483\u0484\3\2\2\2\u0484"+
		"\u0486\7[\2\2\u0485\u0487\7\u0107\2\2\u0486\u0485\3\2\2\2\u0486\u0487"+
		"\3\2\2\2\u0487\u0488\3\2\2\2\u0488\u048b\5,\27\2\u0489\u048a\7\u00c1\2"+
		"\2\u048a\u048c\5.\30\2\u048b\u0489\3\2\2\2\u048b\u048c\3\2\2\2\u048c\u048e"+
		"\3\2\2\2\u048d\u045d\3\2\2\2\u048d\u0469\3\2\2\2\u048d\u0472\3\2\2\2\u048d"+
		"\u047f\3\2\2\2\u048e\35\3\2\2\2\u048f\u0491\5 \21\2\u0490\u0492\5\30\r"+
		"\2\u0491\u0490\3\2\2\2\u0491\u0492\3\2\2\2\u0492\37\3\2\2\2\u0493\u0494"+
		"\7L\2\2\u0494\u0495\7\3\2\2\u0495\u049a\5\"\22\2\u0496\u0497\7\6\2\2\u0497"+
		"\u0499\5\"\22\2\u0498\u0496\3\2\2\2\u0499\u049c\3\2\2\2\u049a\u0498\3"+
		"\2\2\2\u049a\u049b\3\2\2\2\u049b\u049d\3\2\2\2\u049c\u049a\3\2\2\2\u049d"+
		"\u049e\7\4\2\2\u049e!\3\2\2\2\u049f\u04a2\5\u00dep\2\u04a0\u04a1\7\u008c"+
		"\2\2\u04a1\u04a3\5\u00aeX\2\u04a2\u04a0\3\2\2\2\u04a2\u04a3\3\2\2\2\u04a3"+
		"#\3\2\2\2\u04a4\u04aa\5\u00dco\2\u04a5\u04aa\7\u0107\2\2\u04a6\u04aa\5"+
		"\u00b0Y\2\u04a7\u04aa\5\u00b2Z\2\u04a8\u04aa\5\u00b4[\2\u04a9\u04a4\3"+
		"\2\2\2\u04a9\u04a5\3\2\2\2\u04a9\u04a6\3\2\2\2\u04a9\u04a7\3\2\2\2\u04a9"+
		"\u04a8\3\2\2\2\u04aa%\3\2\2\2\u04ab\u04b0\5\u00dep\2\u04ac\u04ad\7\5\2"+
		"\2\u04ad\u04af\5\u00dep\2\u04ae\u04ac\3\2\2\2\u04af\u04b2\3\2\2\2\u04b0"+
		"\u04ae\3\2\2\2\u04b0\u04b1\3\2\2\2\u04b1\'\3\2\2\2\u04b2\u04b0\3\2\2\2"+
		"\u04b3\u04b4\7W\2\2\u04b4\u04b9\5*\26\2\u04b5\u04b6\7\6\2\2\u04b6\u04b8"+
		"\5*\26\2\u04b7\u04b5\3\2\2\2\u04b8\u04bb\3\2\2\2\u04b9\u04b7\3\2\2\2\u04b9"+
		"\u04ba\3\2\2\2\u04ba)\3\2\2\2\u04bb\u04b9\3\2\2\2\u04bc\u04be\5\u00de"+
		"p\2\u04bd\u04bf\7\30\2\2\u04be\u04bd\3\2\2\2\u04be\u04bf\3\2\2\2\u04bf"+
		"\u04c0\3\2\2\2\u04c0\u04c1\7\3\2\2\u04c1\u04c2\5\32\16\2\u04c2\u04c3\7"+
		"\4\2\2\u04c3+\3\2\2\2\u04c4\u04c5\7\u00a9\2\2\u04c5\u04c6\5\u00dco\2\u04c6"+
		"-\3\2\2\2\u04c7\u04c8\7\3\2\2\u04c8\u04cd\5\60\31\2\u04c9\u04ca\7\6\2"+
		"\2\u04ca\u04cc\5\60\31\2\u04cb\u04c9\3\2\2\2\u04cc\u04cf\3\2\2\2\u04cd"+
		"\u04cb\3\2\2\2\u04cd\u04ce\3\2\2\2\u04ce\u04d0\3\2\2\2\u04cf\u04cd\3\2"+
		"\2\2\u04d0\u04d1\7\4\2\2\u04d1/\3\2\2\2\u04d2\u04d7\5\62\32\2\u04d3\u04d5"+
		"\7\u008c\2\2\u04d4\u04d3\3\2\2\2\u04d4\u04d5\3\2\2\2\u04d5\u04d6\3\2\2"+
		"\2\u04d6\u04d8\5\64\33\2\u04d7\u04d4\3\2\2\2\u04d7\u04d8\3\2\2\2\u04d8"+
		"\61\3\2\2\2\u04d9\u04de\5\u00dep\2\u04da\u04db\7\5\2\2\u04db\u04dd\5\u00de"+
		"p\2\u04dc\u04da\3\2\2\2\u04dd\u04e0\3\2\2\2\u04de\u04dc\3\2\2\2\u04de"+
		"\u04df\3\2\2\2\u04df\u04e3\3\2\2\2\u04e0\u04de\3\2\2\2\u04e1\u04e3\7\u0107"+
		"\2\2\u04e2\u04d9\3\2\2\2\u04e2\u04e1\3\2\2\2\u04e3\63\3\2\2\2\u04e4\u04e9"+
		"\7\u010b\2\2\u04e5\u04e9\7\u010c\2\2\u04e6\u04e9\5\u00b6\\\2\u04e7\u04e9"+
		"\7\u0107\2\2\u04e8\u04e4\3\2\2\2\u04e8\u04e5\3\2\2\2\u04e8\u04e6\3\2\2"+
		"\2\u04e8\u04e7\3\2\2\2\u04e9\65\3\2\2\2\u04ea\u04eb\7\3\2\2\u04eb\u04f0"+
		"\5\u00aeX\2\u04ec\u04ed\7\6\2\2\u04ed\u04ef\5\u00aeX\2\u04ee\u04ec\3\2"+
		"\2\2\u04ef\u04f2\3\2\2\2\u04f0\u04ee\3\2\2\2\u04f0\u04f1\3\2\2\2\u04f1"+
		"\u04f3\3\2\2\2\u04f2\u04f0\3\2\2\2\u04f3\u04f4\7\4\2\2\u04f4\67\3\2\2"+
		"\2\u04f5\u04f6\7\3\2\2\u04f6\u04fb\5\66\34\2\u04f7\u04f8\7\6\2\2\u04f8"+
		"\u04fa\5\66\34\2\u04f9\u04f7\3\2\2\2\u04fa\u04fd\3\2\2\2\u04fb\u04f9\3"+
		"\2\2\2\u04fb\u04fc\3\2\2\2\u04fc\u04fe\3\2\2\2\u04fd\u04fb\3\2\2\2\u04fe"+
		"\u04ff\7\4\2\2\u04ff9\3\2\2\2\u0500\u0501\7\u00c7\2\2\u0501\u0502\7\30"+
		"\2\2\u0502\u0507\5<\37\2\u0503\u0504\7\u00c7\2\2\u0504\u0505\7\36\2\2"+
		"\u0505\u0507\5> \2\u0506\u0500\3\2\2\2\u0506\u0503\3\2\2\2\u0507;\3\2"+
		"\2\2\u0508\u0509\7\u00d7\2\2\u0509\u050a\7\u0107\2\2\u050a\u050b\7\u00d8"+
		"\2\2\u050b\u050e\7\u0107\2\2\u050c\u050e\5\u00dep\2\u050d\u0508\3\2\2"+
		"\2\u050d\u050c\3\2\2\2\u050e=\3\2\2\2\u050f\u0513\7\u0107\2\2\u0510\u0511"+
		"\7W\2\2\u0511\u0512\7\u00ab\2\2\u0512\u0514\5.\30\2\u0513\u0510\3\2\2"+
		"\2\u0513\u0514\3\2\2\2\u0514?\3\2\2\2\u0515\u0516\5\u00dep\2\u0516\u0517"+
		"\7\u0107\2\2\u0517A\3\2\2\2\u0518\u051a\5\34\17\2\u0519\u0518\3\2\2\2"+
		"\u0519\u051a\3\2\2\2\u051a\u051b\3\2\2\2\u051b\u051c\5H%\2\u051c\u051d"+
		"\5D#\2\u051d\u0525\3\2\2\2\u051e\u0520\5T+\2\u051f\u0521\5F$\2\u0520\u051f"+
		"\3\2\2\2\u0521\u0522\3\2\2\2\u0522\u0520\3\2\2\2\u0522\u0523\3\2\2\2\u0523"+
		"\u0525\3\2\2\2\u0524\u0519\3\2\2\2\u0524\u051e\3\2\2\2\u0525C\3\2\2\2"+
		"\u0526\u0527\7#\2\2\u0527\u0528\7\36\2\2\u0528\u052d\5L\'\2\u0529\u052a"+
		"\7\6\2\2\u052a\u052c\5L\'\2\u052b\u0529\3\2\2\2\u052c\u052f\3\2\2\2\u052d"+
		"\u052b\3\2\2\2\u052d\u052e\3\2\2\2\u052e\u0531\3\2\2\2\u052f\u052d\3\2"+
		"\2\2\u0530\u0526\3\2\2\2\u0530\u0531\3\2\2\2\u0531\u053c\3\2\2\2\u0532"+
		"\u0533\7\u00a4\2\2\u0533\u0534\7\36\2\2\u0534\u0539\5\u00a4S\2\u0535\u0536"+
		"\7\6\2\2\u0536\u0538\5\u00a4S\2\u0537\u0535\3\2\2\2\u0538\u053b\3\2\2"+
		"\2\u0539\u0537\3\2\2\2\u0539\u053a\3\2\2\2\u053a\u053d\3\2\2\2\u053b\u0539"+
		"\3\2\2\2\u053c\u0532\3\2\2\2\u053c\u053d\3\2\2\2\u053d\u0548\3\2\2\2\u053e"+
		"\u053f\7\u00a5\2\2\u053f\u0540\7\36\2\2\u0540\u0545\5\u00a4S\2\u0541\u0542"+
		"\7\6\2\2\u0542\u0544\5\u00a4S\2\u0543\u0541\3\2\2\2\u0544\u0547\3\2\2"+
		"\2\u0545\u0543\3\2\2\2\u0545\u0546\3\2\2\2\u0546\u0549\3\2\2\2\u0547\u0545"+
		"\3\2\2\2\u0548\u053e\3\2\2\2\u0548\u0549\3\2\2\2\u0549\u0554\3\2\2\2\u054a"+
		"\u054b\7\u00a3\2\2\u054b\u054c\7\36\2\2\u054c\u0551\5L\'\2\u054d\u054e"+
		"\7\6\2\2\u054e\u0550\5L\'\2\u054f\u054d\3\2\2\2\u0550\u0553\3\2\2\2\u0551"+
		"\u054f\3\2\2\2\u0551\u0552\3\2\2\2\u0552\u0555\3\2\2\2\u0553\u0551\3\2"+
		"\2\2\u0554\u054a\3\2\2\2\u0554\u0555\3\2\2\2\u0555\u0557\3\2\2\2\u0556"+
		"\u0558\5\u00d2j\2\u0557\u0556\3\2\2\2\u0557\u0558\3\2\2\2\u0558\u055e"+
		"\3\2\2\2\u0559\u055c\7%\2\2\u055a\u055d\7\31\2\2\u055b\u055d\5\u00a4S"+
		"\2\u055c\u055a\3\2\2\2\u055c\u055b\3\2\2\2\u055d\u055f\3\2\2\2\u055e\u0559"+
		"\3\2\2\2\u055e\u055f\3\2\2\2\u055fE\3\2\2\2\u0560\u0562\5\34\17\2\u0561"+
		"\u0560\3\2\2\2\u0561\u0562\3\2\2\2\u0562\u0563\3\2\2\2\u0563\u0564\5N"+
		"(\2\u0564\u0565\5D#\2\u0565G\3\2\2\2\u0566\u0567\b%\1\2\u0567\u0568\5"+
		"J&\2\u0568\u0580\3\2\2\2\u0569\u056a\f\5\2\2\u056a\u056b\6%\3\2\u056b"+
		"\u056d\t\t\2\2\u056c\u056e\5b\62\2\u056d\u056c\3\2\2\2\u056d\u056e\3\2"+
		"\2\2\u056e\u056f\3\2\2\2\u056f\u057f\5H%\6\u0570\u0571\f\4\2\2\u0571\u0572"+
		"\6%\5\2\u0572\u0574\7s\2\2\u0573\u0575\5b\62\2\u0574\u0573\3\2\2\2\u0574"+
		"\u0575\3\2\2\2\u0575\u0576\3\2\2\2\u0576\u057f\5H%\5\u0577\u0578\f\3\2"+
		"\2\u0578\u0579\6%\7\2\u0579\u057b\t\n\2\2\u057a\u057c\5b\62\2\u057b\u057a"+
		"\3\2\2\2\u057b\u057c\3\2\2\2\u057c\u057d\3\2\2\2\u057d\u057f\5H%\4\u057e"+
		"\u0569\3\2\2\2\u057e\u0570\3\2\2\2\u057e\u0577\3\2\2\2\u057f\u0582\3\2"+
		"\2\2\u0580\u057e\3\2\2\2\u0580\u0581\3\2\2\2\u0581I\3\2\2\2\u0582\u0580"+
		"\3\2\2\2\u0583\u058c\5N(\2\u0584\u0585\7Z\2\2\u0585\u058c\5\u009cO\2\u0586"+
		"\u058c\5\u0094K\2\u0587\u0588\7\3\2\2\u0588\u0589\5B\"\2\u0589\u058a\7"+
		"\4\2\2\u058a\u058c\3\2\2\2\u058b\u0583\3\2\2\2\u058b\u0584\3\2\2\2\u058b"+
		"\u0586\3\2\2\2\u058b\u0587\3\2\2\2\u058cK\3\2\2\2\u058d\u058f\5\u00a4"+
		"S\2\u058e\u0590\t\13\2\2\u058f\u058e\3\2\2\2\u058f\u0590\3\2\2\2\u0590"+
		"\u0593\3\2\2\2\u0591\u0592\7\64\2\2\u0592\u0594\t\f\2\2\u0593\u0591\3"+
		"\2\2\2\u0593\u0594\3\2\2\2\u0594M\3\2\2\2\u0595\u0596\7\25\2\2\u0596\u0597"+
		"\7\u00a7\2\2\u0597\u0598\7\3\2\2\u0598\u0599\5\u00a2R\2\u0599\u059a\7"+
		"\4\2\2\u059a\u05a0\3\2\2\2\u059b\u059c\7z\2\2\u059c\u05a0\5\u00a2R\2\u059d"+
		"\u059e\7\u00a8\2\2\u059e\u05a0\5\u00a2R\2\u059f\u0595\3\2\2\2\u059f\u059b"+
		"\3\2\2\2\u059f\u059d\3\2\2\2\u05a0\u05a2\3\2\2\2\u05a1\u05a3\5\u009aN"+
		"\2\u05a2\u05a1\3\2\2\2\u05a2\u05a3\3\2\2\2\u05a3\u05a6\3\2\2\2\u05a4\u05a5"+
		"\7\u00ad\2\2\u05a5\u05a7\7\u0107\2\2\u05a6\u05a4\3\2\2\2\u05a6\u05a7\3"+
		"\2\2\2\u05a7\u05a8\3\2\2\2\u05a8\u05a9\7\u00a9\2\2\u05a9\u05b6\7\u0107"+
		"\2\2\u05aa\u05b4\7\30\2\2\u05ab\u05b5\5r:\2\u05ac\u05b5\5\u00c2b\2\u05ad"+
		"\u05b0\7\3\2\2\u05ae\u05b1\5r:\2\u05af\u05b1\5\u00c2b\2\u05b0\u05ae\3"+
		"\2\2\2\u05b0\u05af\3\2\2\2\u05b1\u05b2\3\2\2\2\u05b2\u05b3\7\4\2\2\u05b3"+
		"\u05b5\3\2\2\2\u05b4\u05ab\3\2\2\2\u05b4\u05ac\3\2\2\2\u05b4\u05ad\3\2"+
		"\2\2\u05b5\u05b7\3\2\2\2\u05b6\u05aa\3\2\2\2\u05b6\u05b7\3\2\2\2\u05b7"+
		"\u05b9\3\2\2\2\u05b8\u05ba\5\u009aN\2\u05b9\u05b8\3\2\2\2\u05b9\u05ba"+
		"\3\2\2\2\u05ba\u05bd\3\2\2\2\u05bb\u05bc\7\u00ac\2\2\u05bc\u05be\7\u0107"+
		"\2\2\u05bd\u05bb\3\2\2\2\u05bd\u05be\3\2\2\2\u05be\u05c0\3\2\2\2\u05bf"+
		"\u05c1\5T+\2\u05c0\u05bf\3\2\2\2\u05c0\u05c1\3\2\2\2\u05c1\u05c4\3\2\2"+
		"\2\u05c2\u05c3\7\34\2\2\u05c3\u05c5\5\u00a6T\2\u05c4\u05c2\3\2\2\2\u05c4"+
		"\u05c5\3\2\2\2\u05c5\u05f3\3\2\2\2\u05c6\u05ca\7\25\2\2\u05c7\u05c9\5"+
		"P)\2\u05c8\u05c7\3\2\2\2\u05c9\u05cc\3\2\2\2\u05ca\u05c8\3\2\2\2\u05ca"+
		"\u05cb\3\2\2\2\u05cb\u05ce\3\2\2\2\u05cc\u05ca\3\2\2\2\u05cd\u05cf\5b"+
		"\62\2\u05ce\u05cd\3\2\2\2\u05ce\u05cf\3\2\2\2\u05cf\u05d0\3\2\2\2\u05d0"+
		"\u05d2\5\u00a2R\2\u05d1\u05d3\5T+\2\u05d2\u05d1\3\2\2\2\u05d2\u05d3\3"+
		"\2\2\2\u05d3\u05dd\3\2\2\2\u05d4\u05da\5T+\2\u05d5\u05d7\7\25\2\2\u05d6"+
		"\u05d8\5b\62\2\u05d7\u05d6\3\2\2\2\u05d7\u05d8\3\2\2\2\u05d8\u05d9\3\2"+
		"\2\2\u05d9\u05db\5\u00a2R\2\u05da\u05d5\3\2\2\2\u05da\u05db\3\2\2\2\u05db"+
		"\u05dd\3\2\2\2\u05dc\u05c6\3\2\2\2\u05dc\u05d4\3\2\2\2\u05dd\u05e1\3\2"+
		"\2\2\u05de\u05e0\5`\61\2\u05df\u05de\3\2\2\2\u05e0\u05e3\3\2\2\2\u05e1"+
		"\u05df\3\2\2\2\u05e1\u05e2\3\2\2\2\u05e2\u05e6\3\2\2\2\u05e3\u05e1\3\2"+
		"\2\2\u05e4\u05e5\7\34\2\2\u05e5\u05e7\5\u00a6T\2\u05e6\u05e4\3\2\2\2\u05e6"+
		"\u05e7\3\2\2\2\u05e7\u05e9\3\2\2\2\u05e8\u05ea\5V,\2\u05e9\u05e8\3\2\2"+
		"\2\u05e9\u05ea\3\2\2\2\u05ea\u05ed\3\2\2\2\u05eb\u05ec\7$\2\2\u05ec\u05ee"+
		"\5\u00a6T\2\u05ed\u05eb\3\2\2\2\u05ed\u05ee\3\2\2\2\u05ee\u05f0\3\2\2"+
		"\2\u05ef\u05f1\5\u00d2j\2\u05f0\u05ef\3\2\2\2\u05f0\u05f1\3\2\2\2\u05f1"+
		"\u05f3\3\2\2\2\u05f2\u059f\3\2\2\2\u05f2\u05dc\3\2\2\2\u05f3O\3\2\2\2"+
		"\u05f4\u05f5\7\7\2\2\u05f5\u05fc\5R*\2\u05f6\u05f8\7\6\2\2\u05f7\u05f6"+
		"\3\2\2\2\u05f7\u05f8\3\2\2\2\u05f8\u05f9\3\2\2\2\u05f9\u05fb\5R*\2\u05fa"+
		"\u05f7\3\2\2\2\u05fb\u05fe\3\2\2\2\u05fc\u05fa\3\2\2\2\u05fc\u05fd\3\2"+
		"\2\2\u05fd\u05ff\3\2\2\2\u05fe\u05fc\3\2\2\2\u05ff\u0600\7\b\2\2\u0600"+
		"Q\3\2\2\2\u0601\u060f\5\u00dep\2\u0602\u0603\5\u00dep\2\u0603\u0604\7"+
		"\3\2\2\u0604\u0609\5\u00acW\2\u0605\u0606\7\6\2\2\u0606\u0608\5\u00ac"+
		"W\2\u0607\u0605\3\2\2\2\u0608\u060b\3\2\2\2\u0609\u0607\3\2\2\2\u0609"+
		"\u060a\3\2\2\2\u060a\u060c\3\2\2\2\u060b\u0609\3\2\2\2\u060c\u060d\7\4"+
		"\2\2\u060d\u060f\3\2\2\2\u060e\u0601\3\2\2\2\u060e\u0602\3\2\2\2\u060f"+
		"S\3\2\2\2\u0610\u0611\7\26\2\2\u0611\u0616\5d\63\2\u0612\u0613\7\6\2\2"+
		"\u0613\u0615\5d\63\2\u0614\u0612\3\2\2\2\u0615\u0618\3\2\2\2\u0616\u0614"+
		"\3\2\2\2\u0616\u0617\3\2\2\2\u0617\u061c\3\2\2\2\u0618\u0616\3\2\2\2\u0619"+
		"\u061b\5`\61\2\u061a\u0619\3\2\2\2\u061b\u061e\3\2\2\2\u061c\u061a\3\2"+
		"\2\2\u061c\u061d\3\2\2\2\u061d\u0620\3\2\2\2\u061e\u061c\3\2\2\2\u061f"+
		"\u0621\5Z.\2\u0620\u061f\3\2\2\2\u0620\u0621\3\2\2\2\u0621U\3\2\2\2\u0622"+
		"\u0623\7\35\2\2\u0623\u0624\7\36\2\2\u0624\u0629\5\u00a4S\2\u0625\u0626"+
		"\7\6\2\2\u0626\u0628\5\u00a4S\2\u0627\u0625\3\2\2\2\u0628\u062b\3\2\2"+
		"\2\u0629\u0627\3\2\2\2\u0629\u062a\3\2\2\2\u062a\u063d\3\2\2\2\u062b\u0629"+
		"\3\2\2\2\u062c\u062d\7W\2\2\u062d\u063e\7\"\2\2\u062e\u062f\7W\2\2\u062f"+
		"\u063e\7!\2\2\u0630\u0631\7\37\2\2\u0631\u0632\7 \2\2\u0632\u0633\7\3"+
		"\2\2\u0633\u0638\5X-\2\u0634\u0635\7\6\2\2\u0635\u0637\5X-\2\u0636\u0634"+
		"\3\2\2\2\u0637\u063a\3\2\2\2\u0638\u0636\3\2\2\2\u0638\u0639\3\2\2\2\u0639"+
		"\u063b\3\2\2\2\u063a\u0638\3\2\2\2\u063b\u063c\7\4\2\2\u063c\u063e\3\2"+
		"\2\2\u063d\u062c\3\2\2\2\u063d\u062e\3\2\2\2\u063d\u0630\3\2\2\2\u063d"+
		"\u063e\3\2\2\2\u063e\u064f\3\2\2\2\u063f\u0640\7\35\2\2\u0640\u0641\7"+
		"\36\2\2\u0641\u0642\7\37\2\2\u0642\u0643\7 \2\2\u0643\u0644\7\3\2\2\u0644"+
		"\u0649\5X-\2\u0645\u0646\7\6\2\2\u0646\u0648\5X-\2\u0647\u0645\3\2\2\2"+
		"\u0648\u064b\3\2\2\2\u0649\u0647\3\2\2\2\u0649\u064a\3\2\2\2\u064a\u064c"+
		"\3\2\2\2\u064b\u0649\3\2\2\2\u064c\u064d\7\4\2\2\u064d\u064f\3\2\2\2\u064e"+
		"\u0622\3\2\2\2\u064e\u063f\3\2\2\2\u064fW\3\2\2\2\u0650\u0659\7\3\2\2"+
		"\u0651\u0656\5\u00a4S\2\u0652\u0653\7\6\2\2\u0653\u0655\5\u00a4S\2\u0654"+
		"\u0652\3\2\2\2\u0655\u0658\3\2\2\2\u0656\u0654\3\2\2\2\u0656\u0657\3\2"+
		"\2\2\u0657\u065a\3\2\2\2\u0658\u0656\3\2\2\2\u0659\u0651\3\2\2\2\u0659"+
		"\u065a\3\2\2\2\u065a\u065b\3\2\2\2\u065b\u065e\7\4\2\2\u065c\u065e\5\u00a4"+
		"S\2\u065d\u0650\3\2\2\2\u065d\u065c\3\2\2\2\u065eY\3\2\2\2\u065f\u0660"+
		"\7H\2\2\u0660\u0661\7\3\2\2\u0661\u0662\5\u00a2R\2\u0662\u0663\7\67\2"+
		"\2\u0663\u0664\5\\/\2\u0664\u0665\7)\2\2\u0665\u0666\7\3\2\2\u0666\u066b"+
		"\5^\60\2\u0667\u0668\7\6\2\2\u0668\u066a\5^\60\2\u0669\u0667\3\2\2\2\u066a"+
		"\u066d\3\2\2\2\u066b\u0669\3\2\2\2\u066b\u066c\3\2\2\2\u066c\u066e\3\2"+
		"\2\2\u066d\u066b\3\2\2\2\u066e\u066f\7\4\2\2\u066f\u0670\7\4\2\2\u0670"+
		"[\3\2\2\2\u0671\u067e\5\u00dep\2\u0672\u0673\7\3\2\2\u0673\u0678\5\u00de"+
		"p\2\u0674\u0675\7\6\2\2\u0675\u0677\5\u00dep\2\u0676\u0674\3\2\2\2\u0677"+
		"\u067a\3\2\2\2\u0678\u0676\3\2\2\2\u0678\u0679\3\2\2\2\u0679\u067b\3\2"+
		"\2\2\u067a\u0678\3\2\2\2\u067b\u067c\7\4\2\2\u067c\u067e\3\2\2\2\u067d"+
		"\u0671\3\2\2\2\u067d\u0672\3\2\2\2\u067e]\3\2\2\2\u067f\u0684\5\u00a4"+
		"S\2\u0680\u0682\7\30\2\2\u0681\u0680\3\2\2\2\u0681\u0682\3\2\2\2\u0682"+
		"\u0683\3\2\2\2\u0683\u0685\5\u00dep\2\u0684\u0681\3\2\2\2\u0684\u0685"+
		"\3\2\2\2\u0685_\3\2\2\2\u0686\u0687\7I\2\2\u0687\u0689\7\\\2\2\u0688\u068a"+
		"\7@\2\2\u0689\u0688\3\2\2\2\u0689\u068a\3\2\2\2\u068a\u068b\3\2\2\2\u068b"+
		"\u068c\5\u00dco\2\u068c\u0695\7\3\2\2\u068d\u0692\5\u00a4S\2\u068e\u068f"+
		"\7\6\2\2\u068f\u0691\5\u00a4S\2\u0690\u068e\3\2\2\2\u0691\u0694\3\2\2"+
		"\2\u0692\u0690\3\2\2\2\u0692\u0693\3\2\2\2\u0693\u0696\3\2\2\2\u0694\u0692"+
		"\3\2\2\2\u0695\u068d\3\2\2\2\u0695\u0696\3\2\2\2\u0696\u0697\3\2\2\2\u0697"+
		"\u0698\7\4\2\2\u0698\u06a4\5\u00dep\2\u0699\u069b\7\30\2\2\u069a\u0699"+
		"\3\2\2\2\u069a\u069b\3\2\2\2\u069b\u069c\3\2\2\2\u069c\u06a1\5\u00dep"+
		"\2\u069d\u069e\7\6\2\2\u069e\u06a0\5\u00dep\2\u069f\u069d\3\2\2\2\u06a0"+
		"\u06a3\3\2\2\2\u06a1\u069f\3\2\2\2\u06a1\u06a2\3\2\2\2\u06a2\u06a5\3\2"+
		"\2\2\u06a3\u06a1\3\2\2\2\u06a4\u069a\3\2\2\2\u06a4\u06a5\3\2\2\2\u06a5"+
		"a\3\2\2\2\u06a6\u06a7\t\r\2\2\u06a7c\3\2\2\2\u06a8\u06ac\5|?\2\u06a9\u06ab"+
		"\5f\64\2\u06aa\u06a9\3\2\2\2\u06ab\u06ae\3\2\2\2\u06ac\u06aa\3\2\2\2\u06ac"+
		"\u06ad\3\2\2\2\u06ade\3\2\2\2\u06ae\u06ac\3\2\2\2\u06af\u06b0\5h\65\2"+
		"\u06b0\u06b1\7>\2\2\u06b1\u06b3\5|?\2\u06b2\u06b4\5j\66\2\u06b3\u06b2"+
		"\3\2\2\2\u06b3\u06b4\3\2\2\2\u06b4\u06bb\3\2\2\2\u06b5\u06b6\7F\2\2\u06b6"+
		"\u06b7\5h\65\2\u06b7\u06b8\7>\2\2\u06b8\u06b9\5|?\2\u06b9\u06bb\3\2\2"+
		"\2\u06ba\u06af\3\2\2\2\u06ba\u06b5\3\2\2\2\u06bbg\3\2\2\2\u06bc\u06be"+
		"\7A\2\2\u06bd\u06bc\3\2\2\2\u06bd\u06be\3\2\2\2\u06be\u06d3\3\2\2\2\u06bf"+
		"\u06d3\7?\2\2\u06c0\u06c2\7B\2\2\u06c1\u06c3\7@\2\2\u06c2\u06c1\3\2\2"+
		"\2\u06c2\u06c3\3\2\2\2\u06c3\u06d3\3\2\2\2\u06c4\u06c5\7B\2\2\u06c5\u06d3"+
		"\7C\2\2\u06c6\u06c8\7D\2\2\u06c7\u06c9\7@\2\2\u06c8\u06c7\3\2\2\2\u06c8"+
		"\u06c9\3\2\2\2\u06c9\u06d3\3\2\2\2\u06ca\u06cc\7E\2\2\u06cb\u06cd\7@\2"+
		"\2\u06cc\u06cb\3\2\2\2\u06cc\u06cd\3\2\2\2\u06cd\u06d3\3\2\2\2\u06ce\u06d0"+
		"\7B\2\2\u06cf\u06ce\3\2\2\2\u06cf\u06d0\3\2\2\2\u06d0\u06d1\3\2\2\2\u06d1"+
		"\u06d3\7\u00f7\2\2\u06d2\u06bd\3\2\2\2\u06d2\u06bf\3\2\2\2\u06d2\u06c0"+
		"\3\2\2\2\u06d2\u06c4\3\2\2\2\u06d2\u06c6\3\2\2\2\u06d2\u06ca\3\2\2\2\u06d2"+
		"\u06cf\3\2\2\2\u06d3i\3\2\2\2\u06d4\u06d5\7G\2\2\u06d5\u06d9\5\u00a6T"+
		"\2\u06d6\u06d7\7\u00a9\2\2\u06d7\u06d9\5p9\2\u06d8\u06d4\3\2\2\2\u06d8"+
		"\u06d6\3\2\2\2\u06d9k\3\2\2\2\u06da\u06db\7u\2\2\u06db\u06dd\7\3\2\2\u06dc"+
		"\u06de\5n8\2\u06dd\u06dc\3\2\2\2\u06dd\u06de\3\2\2\2\u06de\u06df\3\2\2"+
		"\2\u06df\u06e0\7\4\2\2\u06e0m\3\2\2\2\u06e1\u06e3\7\u0095\2\2\u06e2\u06e1"+
		"\3\2\2\2\u06e2\u06e3\3\2\2\2\u06e3\u06e4\3\2\2\2\u06e4\u06e5\t\16\2\2"+
		"\u06e5\u06fa\7\u009f\2\2\u06e6\u06e7\5\u00a4S\2\u06e7\u06e8\7N\2\2\u06e8"+
		"\u06fa\3\2\2\2\u06e9\u06ea\7\u00a0\2\2\u06ea\u06eb\7\u010b\2\2\u06eb\u06ec"+
		"\7\u00a1\2\2\u06ec\u06ed\7\u00a2\2\2\u06ed\u06f6\7\u010b\2\2\u06ee\u06f4"+
		"\7G\2\2\u06ef\u06f5\5\u00dep\2\u06f0\u06f1\5\u00dco\2\u06f1\u06f2\7\3"+
		"\2\2\u06f2\u06f3\7\4\2\2\u06f3\u06f5\3\2\2\2\u06f4\u06ef\3\2\2\2\u06f4"+
		"\u06f0\3\2\2\2\u06f5\u06f7\3\2\2\2\u06f6\u06ee\3\2\2\2\u06f6\u06f7\3\2"+
		"\2\2\u06f7\u06fa\3\2\2\2\u06f8\u06fa\5\u00a4S\2\u06f9\u06e2\3\2\2\2\u06f9"+
		"\u06e6\3\2\2\2\u06f9\u06e9\3\2\2\2\u06f9\u06f8\3\2\2\2\u06fao\3\2\2\2"+
		"\u06fb\u06fc\7\3\2\2\u06fc\u06fd\5r:\2\u06fd\u06fe\7\4\2\2\u06feq\3\2"+
		"\2\2\u06ff\u0704\5\u00dep\2\u0700\u0701\7\6\2\2\u0701\u0703\5\u00dep\2"+
		"\u0702\u0700\3\2\2\2\u0703\u0706\3\2\2\2\u0704\u0702\3\2\2\2\u0704\u0705"+
		"\3\2\2\2\u0705s\3\2\2\2\u0706\u0704\3\2\2\2\u0707\u0708\7\3\2\2\u0708"+
		"\u070d\5v<\2\u0709\u070a\7\6\2\2\u070a\u070c\5v<\2\u070b\u0709\3\2\2\2"+
		"\u070c\u070f\3\2\2\2\u070d\u070b\3\2\2\2\u070d\u070e\3\2\2\2\u070e\u0710"+
		"\3\2\2\2\u070f\u070d\3\2\2\2\u0710\u0711\7\4\2\2\u0711u\3\2\2\2\u0712"+
		"\u0714\5\u00dep\2\u0713\u0715\t\13\2\2\u0714\u0713\3\2\2\2\u0714\u0715"+
		"\3\2\2\2\u0715w\3\2\2\2\u0716\u0717\7\3\2\2\u0717\u071c\5z>\2\u0718\u0719"+
		"\7\6\2\2\u0719\u071b\5z>\2\u071a\u0718\3\2\2\2\u071b\u071e\3\2\2\2\u071c"+
		"\u071a\3\2\2\2\u071c\u071d\3\2\2\2\u071d\u071f\3\2\2\2\u071e\u071c\3\2"+
		"\2\2\u071f\u0720\7\4\2\2\u0720y\3\2\2\2\u0721\u0724\5\u00dep\2\u0722\u0723"+
		"\7|\2\2\u0723\u0725\7\u0107\2\2\u0724\u0722\3\2\2\2\u0724\u0725\3\2\2"+
		"\2\u0725{\3\2\2\2\u0726\u0729\5\u009cO\2\u0727\u072a\5l\67\2\u0728\u072a"+
		"\5~@\2\u0729\u0727\3\2\2\2\u0729\u0728\3\2\2\2\u0729\u072a\3\2\2\2\u072a"+
		"\u072b\3\2\2\2\u072b\u072c\5\u0098M\2\u072c\u0740\3\2\2\2\u072d\u072e"+
		"\7\3\2\2\u072e\u072f\5B\"\2\u072f\u0731\7\4\2\2\u0730\u0732\5l\67\2\u0731"+
		"\u0730\3\2\2\2\u0731\u0732\3\2\2\2\u0732\u0733\3\2\2\2\u0733\u0734\5\u0098"+
		"M\2\u0734\u0740\3\2\2\2\u0735\u0736\7\3\2\2\u0736\u0737\5d\63\2\u0737"+
		"\u0739\7\4\2\2\u0738\u073a\5l\67\2\u0739\u0738\3\2\2\2\u0739\u073a\3\2"+
		"\2\2\u073a\u073b\3\2\2\2\u073b\u073c\5\u0098M\2\u073c\u0740\3\2\2\2\u073d"+
		"\u0740\5\u0094K\2\u073e\u0740\5\u0096L\2\u073f\u0726\3\2\2\2\u073f\u072d"+
		"\3\2\2\2\u073f\u0735\3\2\2\2\u073f\u073d\3\2\2\2\u073f\u073e\3\2\2\2\u0740"+
		"}\3\2\2\2\u0741\u0742\7\u00fc\2\2\u0742\u074d\7\3\2\2\u0743\u0744\7L\2"+
		"\2\u0744\u0745\7\36\2\2\u0745\u074a\5\u00a4S\2\u0746\u0747\7\6\2\2\u0747"+
		"\u0749\5\u00a4S\2\u0748\u0746\3\2\2\2\u0749\u074c\3\2\2\2\u074a\u0748"+
		"\3\2\2\2\u074a\u074b\3\2\2\2\u074b\u074e\3\2\2\2\u074c\u074a\3\2\2\2\u074d"+
		"\u0743\3\2\2\2\u074d\u074e\3\2\2\2\u074e\u0759\3\2\2\2\u074f\u0750\7#"+
		"\2\2\u0750\u0751\7\36\2\2\u0751\u0756\5L\'\2\u0752\u0753\7\6\2\2\u0753"+
		"\u0755\5L\'\2\u0754\u0752\3\2\2\2\u0755\u0758\3\2\2\2\u0756\u0754\3\2"+
		"\2\2\u0756\u0757\3\2\2\2\u0757\u075a\3\2\2\2\u0758\u0756\3\2\2\2\u0759"+
		"\u074f\3\2\2\2\u0759\u075a\3\2\2\2\u075a\u0764\3\2\2\2\u075b\u075c\7\u00fd"+
		"\2\2\u075c\u0761\5\u0080A\2\u075d\u075e\7\6\2\2\u075e\u0760\5\u0080A\2"+
		"\u075f\u075d\3\2\2\2\u0760\u0763\3\2\2\2\u0761\u075f\3\2\2\2\u0761\u0762"+
		"\3\2\2\2\u0762\u0765\3\2\2\2\u0763\u0761\3\2\2\2\u0764\u075b\3\2\2\2\u0764"+
		"\u0765\3\2\2\2\u0765\u076a\3\2\2\2\u0766\u0767\7\u00fe\2\2\u0767\u0768"+
		"\7V\2\2\u0768\u0769\7\u00ff\2\2\u0769\u076b\7\u0100\2\2\u076a\u0766\3"+
		"\2\2\2\u076a\u076b\3\2\2\2\u076b\u0783\3\2\2\2\u076c\u076d\7T\2\2\u076d"+
		"\u0781\7\u0100\2\2\u076e\u076f\7\u0101\2\2\u076f\u0770\7t\2\2\u0770\u0771"+
		"\7\u0102\2\2\u0771\u0782\7V\2\2\u0772\u0773\7\u0101\2\2\u0773\u0774\7"+
		"\u0103\2\2\u0774\u0775\7U\2\2\u0775\u0782\7V\2\2\u0776\u0777\7\u0101\2"+
		"\2\u0777\u0778\7t\2\2\u0778\u0779\7S\2\2\u0779\u0782\5\u0084C\2\u077a"+
		"\u077b\7\u0101\2\2\u077b\u077c\7t\2\2\u077c\u077d\7U\2\2\u077d\u0782\5"+
		"\u0084C\2\u077e\u077f\7\u0101\2\2\u077f\u0780\7t\2\2\u0780\u0782\5\u0084"+
		"C\2\u0781\u076e\3\2\2\2\u0781\u0772\3\2\2\2\u0781\u0776\3\2\2\2\u0781"+
		"\u077a\3\2\2\2\u0781\u077e\3\2\2\2\u0782\u0784\3\2\2\2\u0783\u076c\3\2"+
		"\2\2\u0783\u0784\3\2\2\2\u0784\u0785\3\2\2\2\u0785\u0786\7\u0104\2\2\u0786"+
		"\u0787\7\3\2\2\u0787\u0788\5\u0086D\2\u0788\u078b\7\4\2\2\u0789\u078a"+
		"\7\u0105\2\2\u078a\u078c\5\u00b8]\2\u078b\u0789\3\2\2\2\u078b\u078c\3"+
		"\2\2\2\u078c\u078d\3\2\2\2\u078d\u078e\7\u0106\2\2\u078e\u078f\5\u0084"+
		"C\2\u078f\u0790\7\30\2\2\u0790\u0798\5\u0082B\2\u0791\u0792\7\6\2\2\u0792"+
		"\u0793\5\u0084C\2\u0793\u0794\7\30\2\2\u0794\u0795\5\u0082B\2\u0795\u0797"+
		"\3\2\2\2\u0796\u0791\3\2\2\2\u0797\u079a\3\2\2\2\u0798\u0796\3\2\2\2\u0798"+
		"\u0799\3\2\2\2\u0799\u079b\3\2\2\2\u079a\u0798\3\2\2\2\u079b\u079c\7\4"+
		"\2\2\u079c\177\3\2\2\2\u079d\u079e\5\u00a4S\2\u079e\u079f\7\30\2\2\u079f"+
		"\u07a0\5\u00e0q\2\u07a0\u0081\3\2\2\2\u07a1\u07a2\5\u00a4S\2\u07a2\u0083"+
		"\3\2\2\2\u07a3\u07a4\5\u00dep\2\u07a4\u0085\3\2\2\2\u07a5\u07aa\5\u0088"+
		"E\2\u07a6\u07a7\7\u009c\2\2\u07a7\u07a9\5\u0088E\2\u07a8\u07a6\3\2\2\2"+
		"\u07a9\u07ac\3\2\2\2\u07aa\u07a8\3\2\2\2\u07aa\u07ab\3\2\2\2\u07ab\u0087"+
		"\3\2\2\2\u07ac\u07aa\3\2\2\2\u07ad\u07b1\5\u008aF\2\u07ae\u07b0\5\u008a"+
		"F\2\u07af\u07ae\3\2\2\2\u07b0\u07b3\3\2\2\2\u07b1\u07af\3\2\2\2\u07b1"+
		"\u07b2\3\2\2\2\u07b2\u0089\3\2\2\2\u07b3\u07b1\3\2\2\2\u07b4\u07b6\5\u0084"+
		"C\2\u07b5\u07b7\5\u008cG\2\u07b6\u07b5\3\2\2\2\u07b6\u07b7\3\2\2\2\u07b7"+
		"\u008b\3\2\2\2\u07b8\u07cf\7\u0096\2\2\u07b9\u07cf\7\t\2\2\u07ba\u07cf"+
		"\7\u0094\2\2\u07bb\u07cf\7\n\2\2\u07bc\u07cf\7\13\2\2\u07bd\u07cf\7\f"+
		"\2\2\u07be\u07c0\7\r\2\2\u07bf\u07c1\5\u008eH\2\u07c0\u07bf\3\2\2\2\u07c0"+
		"\u07c1\3\2\2\2\u07c1\u07c2\3\2\2\2\u07c2\u07c4\7\6\2\2\u07c3\u07c5\5\u0090"+
		"I\2\u07c4\u07c3\3\2\2\2\u07c4\u07c5\3\2\2\2\u07c5\u07c6\3\2\2\2\u07c6"+
		"\u07c8\7\16\2\2\u07c7\u07c9\7\13\2\2\u07c8\u07c7\3\2\2\2\u07c8\u07c9\3"+
		"\2\2\2\u07c9\u07cf\3\2\2\2\u07ca\u07cb\7\r\2\2\u07cb\u07cc\5\u0092J\2"+
		"\u07cc\u07cd\7\16\2\2\u07cd\u07cf\3\2\2\2\u07ce\u07b8\3\2\2\2\u07ce\u07b9"+
		"\3\2\2\2\u07ce\u07ba\3\2\2\2\u07ce\u07bb\3\2\2\2\u07ce\u07bc\3\2\2\2\u07ce"+
		"\u07bd\3\2\2\2\u07ce\u07be\3\2\2\2\u07ce\u07ca\3\2\2\2\u07cf\u008d\3\2"+
		"\2\2\u07d0\u07d1\7\u010b\2\2\u07d1\u008f\3\2\2\2\u07d2\u07d3\7\u010b\2"+
		"\2\u07d3\u0091\3\2\2\2\u07d4\u07d5\7\u010b\2\2\u07d5\u0093\3\2\2\2\u07d6"+
		"\u07d7\7X\2\2\u07d7\u07dc\5\u00a4S\2\u07d8\u07d9\7\6\2\2\u07d9\u07db\5"+
		"\u00a4S\2\u07da\u07d8\3\2\2\2\u07db\u07de\3\2\2\2\u07dc\u07da\3\2\2\2"+
		"\u07dc\u07dd\3\2\2\2\u07dd\u07df\3\2\2\2\u07de\u07dc\3\2\2\2\u07df\u07e0"+
		"\5\u0098M\2\u07e0\u0095\3\2\2\2\u07e1\u07e2\5\u00dep\2\u07e2\u07eb\7\3"+
		"\2\2\u07e3\u07e8\5\u00a4S\2\u07e4\u07e5\7\6\2\2\u07e5\u07e7\5\u00a4S\2"+
		"\u07e6\u07e4\3\2\2\2\u07e7\u07ea\3\2\2\2\u07e8\u07e6\3\2\2\2\u07e8\u07e9"+
		"\3\2\2\2\u07e9\u07ec\3\2\2\2\u07ea\u07e8\3\2\2\2\u07eb\u07e3\3\2\2\2\u07eb"+
		"\u07ec\3\2\2\2\u07ec\u07ed\3\2\2\2\u07ed\u07ee\7\4\2\2\u07ee\u07ef\5\u0098"+
		"M\2\u07ef\u0097\3\2\2\2\u07f0\u07f2\7\30\2\2\u07f1\u07f0\3\2\2\2\u07f1"+
		"\u07f2\3\2\2\2\u07f2\u07f3\3\2\2\2\u07f3\u07f5\5\u00e0q\2\u07f4\u07f6"+
		"\5p9\2\u07f5\u07f4\3\2\2\2\u07f5\u07f6\3\2\2\2\u07f6\u07f8\3\2\2\2\u07f7"+
		"\u07f1\3\2\2\2\u07f7\u07f8\3\2\2\2\u07f8\u0099\3\2\2\2\u07f9\u07fa\7V"+
		"\2\2\u07fa\u07fb\7c\2\2\u07fb\u07fc\7\u00aa\2\2\u07fc\u0800\7\u0107\2"+
		"\2\u07fd\u07fe\7W\2\2\u07fe\u07ff\7\u00ab\2\2\u07ff\u0801\5.\30\2\u0800"+
		"\u07fd\3\2\2\2\u0800\u0801\3\2\2\2\u0801\u082b\3\2\2\2\u0802\u0803\7V"+
		"\2\2\u0803\u0804\7c\2\2\u0804\u080e\7\u00ae\2\2\u0805\u0806\7\u00af\2"+
		"\2\u0806\u0807\7\u00b0\2\2\u0807\u0808\7\36\2\2\u0808\u080c\7\u0107\2"+
		"\2\u0809\u080a\7\u00b4\2\2\u080a\u080b\7\36\2\2\u080b\u080d\7\u0107\2"+
		"\2\u080c\u0809\3\2\2\2\u080c\u080d\3\2\2\2\u080d\u080f\3\2\2\2\u080e\u0805"+
		"\3\2\2\2\u080e\u080f\3\2\2\2\u080f\u0815\3\2\2\2\u0810\u0811\7\u00b1\2"+
		"\2\u0811\u0812\7\u00b2\2\2\u0812\u0813\7\u00b0\2\2\u0813\u0814\7\36\2"+
		"\2\u0814\u0816\7\u0107\2\2\u0815\u0810\3\2\2\2\u0815\u0816\3\2\2\2\u0816"+
		"\u081c\3\2\2\2\u0817\u0818\7z\2\2\u0818\u0819\7\u00b3\2\2\u0819\u081a"+
		"\7\u00b0\2\2\u081a\u081b\7\36\2\2\u081b\u081d\7\u0107\2\2\u081c\u0817"+
		"\3\2\2\2\u081c\u081d\3\2\2\2\u081d\u0822\3\2\2\2\u081e\u081f\7\u00b5\2"+
		"\2\u081f\u0820\7\u00b0\2\2\u0820\u0821\7\36\2\2\u0821\u0823\7\u0107\2"+
		"\2\u0822\u081e\3\2\2\2\u0822\u0823\3\2\2\2\u0823\u0828\3\2\2\2\u0824\u0825"+
		"\7\61\2\2\u0825\u0826\7\u00e3\2\2\u0826\u0827\7\30\2\2\u0827\u0829\7\u0107"+
		"\2\2\u0828\u0824\3\2\2\2\u0828\u0829\3\2\2\2\u0829\u082b\3\2\2\2\u082a"+
		"\u07f9\3\2\2\2\u082a\u0802\3\2\2\2\u082b\u009b\3\2\2\2\u082c\u082d\5\u00de"+
		"p\2\u082d\u082e\7\5\2\2\u082e\u0830\3\2\2\2\u082f\u082c\3\2\2\2\u082f"+
		"\u0830\3\2\2\2\u0830\u0831\3\2\2\2\u0831\u0848\5\u00dep\2\u0832\u0833"+
		"\7I\2\2\u0833\u0834\7Z\2\2\u0834\u0835\7\3\2\2\u0835\u0836\5\u009eP\2"+
		"\u0836\u0837\7\3\2\2\u0837\u083c\5\u00a4S\2\u0838\u0839\7\6\2\2\u0839"+
		"\u083b\5\u00a4S\2\u083a\u0838\3\2\2\2\u083b\u083e\3\2\2\2\u083c\u083a"+
		"\3\2\2\2\u083c\u083d\3\2\2\2\u083d\u083f\3\2\2\2\u083e\u083c\3\2\2\2\u083f"+
		"\u0840\7\4\2\2\u0840\u0841\7\4\2\2\u0841\u0848\3\2\2\2\u0842\u0843\7\u00fb"+
		"\2\2\u0843\u0844\7\3\2\2\u0844\u0845\5\u00a4S\2\u0845\u0846\7\4\2\2\u0846"+
		"\u0848\3\2\2\2\u0847\u082f\3\2\2\2\u0847\u0832\3\2\2\2\u0847\u0842\3\2"+
		"\2\2\u0848\u009d\3\2\2\2\u0849\u084a\5\u00dep\2\u084a\u084b\7\5\2\2\u084b"+
		"\u084d\3\2\2\2\u084c\u0849\3\2\2\2\u084c\u084d\3\2\2\2\u084d\u084e\3\2"+
		"\2\2\u084e\u084f\5\u00dep\2\u084f\u009f\3\2\2\2\u0850\u0858\5\u00a4S\2"+
		"\u0851\u0853\7\30\2\2\u0852\u0851\3\2\2\2\u0852\u0853\3\2\2\2\u0853\u0856"+
		"\3\2\2\2\u0854\u0857\5\u00dep\2\u0855\u0857\5p9\2\u0856\u0854\3\2\2\2"+
		"\u0856\u0855\3\2\2\2\u0857\u0859\3\2\2\2\u0858\u0852\3\2\2\2\u0858\u0859"+
		"\3\2\2\2\u0859\u00a1\3\2\2\2\u085a\u085f\5\u00a0Q\2\u085b\u085c\7\6\2"+
		"\2\u085c\u085e\5\u00a0Q\2\u085d\u085b\3\2\2\2\u085e\u0861\3\2\2\2\u085f"+
		"\u085d\3\2\2\2\u085f\u0860\3\2\2\2\u0860\u00a3\3\2\2\2\u0861\u085f\3\2"+
		"\2\2\u0862\u0863\5\u00a6T\2\u0863\u00a5\3\2\2\2\u0864\u0865\bT\1\2\u0865"+
		"\u0866\7*\2\2\u0866\u0871\5\u00a6T\7\u0867\u0868\7,\2\2\u0868\u0869\7"+
		"\3\2\2\u0869\u086a\5\32\16\2\u086a\u086b\7\4\2\2\u086b\u0871\3\2\2\2\u086c"+
		"\u086e\5\u00aaV\2\u086d\u086f\5\u00a8U\2\u086e\u086d\3\2\2\2\u086e\u086f"+
		"\3\2\2\2\u086f\u0871\3\2\2\2\u0870\u0864\3\2\2\2\u0870\u0867\3\2\2\2\u0870"+
		"\u086c\3\2\2\2\u0871\u087a\3\2\2\2\u0872\u0873\f\4\2\2\u0873\u0874\7("+
		"\2\2\u0874\u0879\5\u00a6T\5\u0875\u0876\f\3\2\2\u0876\u0877\7\'\2\2\u0877"+
		"\u0879\5\u00a6T\4\u0878\u0872\3\2\2\2\u0878\u0875\3\2\2\2\u0879\u087c"+
		"\3\2\2\2\u087a\u0878\3\2\2\2\u087a\u087b\3\2\2\2\u087b\u00a7\3\2\2\2\u087c"+
		"\u087a\3\2\2\2\u087d\u087f\7*\2\2\u087e\u087d\3\2\2\2\u087e\u087f\3\2"+
		"\2\2\u087f\u0880\3\2\2\2\u0880\u0881\7-\2\2\u0881\u0882\5\u00aaV\2\u0882"+
		"\u0883\7(\2\2\u0883\u0884\5\u00aaV\2\u0884\u08ae\3\2\2\2\u0885\u0887\7"+
		"*\2\2\u0886\u0885\3\2\2\2\u0886\u0887\3\2\2\2\u0887\u0888\3\2\2\2\u0888"+
		"\u0889\7)\2\2\u0889\u088a\7\3\2\2\u088a\u088f\5\u00a4S\2\u088b\u088c\7"+
		"\6\2\2\u088c\u088e\5\u00a4S\2\u088d\u088b\3\2\2\2\u088e\u0891\3\2\2\2"+
		"\u088f\u088d\3\2\2\2\u088f\u0890\3\2\2\2\u0890\u0892\3\2\2\2\u0891\u088f"+
		"\3\2\2\2\u0892\u0893\7\4\2\2\u0893\u08ae\3\2\2\2\u0894\u0896\7*\2\2\u0895"+
		"\u0894\3\2\2\2\u0895\u0896\3\2\2\2\u0896\u0897\3\2\2\2\u0897\u0898\7)"+
		"\2\2\u0898\u0899\7\3\2\2\u0899\u089a\5\32\16\2\u089a\u089b\7\4\2\2\u089b"+
		"\u08ae\3\2\2\2\u089c\u089e\7*\2\2\u089d\u089c\3\2\2\2\u089d\u089e\3\2"+
		"\2\2\u089e\u089f\3\2\2\2\u089f\u08a0\t\17\2\2\u08a0\u08ae\5\u00aaV\2\u08a1"+
		"\u08a3\7\60\2\2\u08a2\u08a4\7*\2\2\u08a3\u08a2\3\2\2\2\u08a3\u08a4\3\2"+
		"\2\2\u08a4\u08a5\3\2\2\2\u08a5\u08ae\7\61\2\2\u08a6\u08a8\7\60\2\2\u08a7"+
		"\u08a9\7*\2\2\u08a8\u08a7\3\2\2\2\u08a8\u08a9\3\2\2\2\u08a9\u08aa\3\2"+
		"\2\2\u08aa\u08ab\7\33\2\2\u08ab\u08ac\7\26\2\2\u08ac\u08ae\5\u00aaV\2"+
		"\u08ad\u087e\3\2\2\2\u08ad\u0886\3\2\2\2\u08ad\u0895\3\2\2\2\u08ad\u089d"+
		"\3\2\2\2\u08ad\u08a1\3\2\2\2\u08ad\u08a6\3\2\2\2\u08ae\u00a9\3\2\2\2\u08af"+
		"\u08b0\bV\1\2\u08b0\u08b4\5\u00acW\2\u08b1\u08b2\t\20\2\2\u08b2\u08b4"+
		"\5\u00aaV\t\u08b3\u08af\3\2\2\2\u08b3\u08b1\3\2\2\2\u08b4\u08ca\3\2\2"+
		"\2\u08b5\u08b6\f\b\2\2\u08b6\u08b7\t\21\2\2\u08b7\u08c9\5\u00aaV\t\u08b8"+
		"\u08b9\f\7\2\2\u08b9\u08ba\t\22\2\2\u08ba\u08c9\5\u00aaV\b\u08bb\u08bc"+
		"\f\6\2\2\u08bc\u08bd\7\u009b\2\2\u08bd\u08c9\5\u00aaV\7\u08be\u08bf\f"+
		"\5\2\2\u08bf\u08c0\7\u009e\2\2\u08c0\u08c9\5\u00aaV\6\u08c1\u08c2\f\4"+
		"\2\2\u08c2\u08c3\7\u009c\2\2\u08c3\u08c9\5\u00aaV\5\u08c4\u08c5\f\3\2"+
		"\2\u08c5\u08c6\5\u00b0Y\2\u08c6\u08c7\5\u00aaV\4\u08c7\u08c9\3\2\2\2\u08c8"+
		"\u08b5\3\2\2\2\u08c8\u08b8\3\2\2\2\u08c8\u08bb\3\2\2\2\u08c8\u08be\3\2"+
		"\2\2\u08c8\u08c1\3\2\2\2\u08c8\u08c4\3\2\2\2\u08c9\u08cc\3\2\2\2\u08ca"+
		"\u08c8\3\2\2\2\u08ca\u08cb\3\2\2\2\u08cb\u00ab\3\2\2\2\u08cc\u08ca\3\2"+
		"\2\2\u08cd\u08ce\bW\1\2\u08ce\u08d0\79\2\2\u08cf\u08d1\5\u00d0i\2\u08d0"+
		"\u08cf\3\2\2\2\u08d1\u08d2\3\2\2\2\u08d2\u08d0\3\2\2\2\u08d2\u08d3\3\2"+
		"\2\2\u08d3\u08d6\3\2\2\2\u08d4\u08d5\7<\2\2\u08d5\u08d7\5\u00a4S\2\u08d6"+
		"\u08d4\3\2\2\2\u08d6\u08d7\3\2\2\2\u08d7\u08d8\3\2\2\2\u08d8\u08d9\7="+
		"\2\2\u08d9\u095f\3\2\2\2\u08da\u08db\79\2\2\u08db\u08dd\5\u00a4S\2\u08dc"+
		"\u08de\5\u00d0i\2\u08dd\u08dc\3\2\2\2\u08de\u08df\3\2\2\2\u08df\u08dd"+
		"\3\2\2\2\u08df\u08e0\3\2\2\2\u08e0\u08e3\3\2\2\2\u08e1\u08e2\7<\2\2\u08e2"+
		"\u08e4\5\u00a4S\2\u08e3\u08e1";
	private static final String _serializedATNSegment1 =
		"\3\2\2\2\u08e3\u08e4\3\2\2\2\u08e4\u08e5\3\2\2\2\u08e5\u08e6\7=\2\2\u08e6"+
		"\u095f\3\2\2\2\u08e7\u08e8\7g\2\2\u08e8\u08e9\7\3\2\2\u08e9\u08ea\5\u00a4"+
		"S\2\u08ea\u08eb\7\30\2\2\u08eb\u08ec\5\u00c0a\2\u08ec\u08ed\7\4\2\2\u08ed"+
		"\u095f\3\2\2\2\u08ee\u08ef\7{\2\2\u08ef\u08f8\7\3\2\2\u08f0\u08f5\5\u00a0"+
		"Q\2\u08f1\u08f2\7\6\2\2\u08f2\u08f4\5\u00a0Q\2\u08f3\u08f1\3\2\2\2\u08f4"+
		"\u08f7\3\2\2\2\u08f5\u08f3\3\2\2\2\u08f5\u08f6\3\2\2\2\u08f6\u08f9\3\2"+
		"\2\2\u08f7\u08f5\3\2\2\2\u08f8\u08f0\3\2\2\2\u08f8\u08f9\3\2\2\2\u08f9"+
		"\u08fa\3\2\2\2\u08fa\u095f\7\4\2\2\u08fb\u08fc\7S\2\2\u08fc\u08fd\7\3"+
		"\2\2\u08fd\u0900\5\u00a4S\2\u08fe\u08ff\7\u0085\2\2\u08ff\u0901\7\64\2"+
		"\2\u0900\u08fe\3\2\2\2\u0900\u0901\3\2\2\2\u0901\u0902\3\2\2\2\u0902\u0903"+
		"\7\4\2\2\u0903\u095f\3\2\2\2\u0904\u0905\7U\2\2\u0905\u0906\7\3\2\2\u0906"+
		"\u0909\5\u00a4S\2\u0907\u0908\7\u0085\2\2\u0908\u090a\7\64\2\2\u0909\u0907"+
		"\3\2\2\2\u0909\u090a\3\2\2\2\u090a\u090b\3\2\2\2\u090b\u090c\7\4\2\2\u090c"+
		"\u095f\3\2\2\2\u090d\u090e\7\u008a\2\2\u090e\u090f\7\3\2\2\u090f\u0910"+
		"\5\u00aaV\2\u0910\u0911\7)\2\2\u0911\u0912\5\u00aaV\2\u0912\u0913\7\4"+
		"\2\2\u0913\u095f\3\2\2\2\u0914\u095f\5\u00aeX\2\u0915\u095f\7\u0096\2"+
		"\2\u0916\u0917\5\u00dco\2\u0917\u0918\7\5\2\2\u0918\u0919\7\u0096\2\2"+
		"\u0919\u095f\3\2\2\2\u091a\u091b\7\3\2\2\u091b\u091e\5\u00a0Q\2\u091c"+
		"\u091d\7\6\2\2\u091d\u091f\5\u00a0Q\2\u091e\u091c\3\2\2\2\u091f\u0920"+
		"\3\2\2\2\u0920\u091e\3\2\2\2\u0920\u0921\3\2\2\2\u0921\u0922\3\2\2\2\u0922"+
		"\u0923\7\4\2\2\u0923\u095f\3\2\2\2\u0924\u0925\7\3\2\2\u0925\u0926\5\32"+
		"\16\2\u0926\u0927\7\4\2\2\u0927\u095f\3\2\2\2\u0928\u0929\5\u00dco\2\u0929"+
		"\u0935\7\3\2\2\u092a\u092c\5b\62\2\u092b\u092a\3\2\2\2\u092b\u092c\3\2"+
		"\2\2\u092c\u092d\3\2\2\2\u092d\u0932\5\u00a4S\2\u092e\u092f\7\6\2\2\u092f"+
		"\u0931\5\u00a4S\2\u0930\u092e\3\2\2\2\u0931\u0934\3\2\2\2\u0932\u0930"+
		"\3\2\2\2\u0932\u0933\3\2\2\2\u0933\u0936\3\2\2\2\u0934\u0932\3\2\2\2\u0935"+
		"\u092b\3\2\2\2\u0935\u0936\3\2\2\2\u0936\u0937\3\2\2\2\u0937\u093a\7\4"+
		"\2\2\u0938\u0939\7K\2\2\u0939\u093b\5\u00d6l\2\u093a\u0938\3\2\2\2\u093a"+
		"\u093b\3\2\2\2\u093b\u095f\3\2\2\2\u093c\u093d\5\u00dco\2\u093d\u093e"+
		"\7\3\2\2\u093e\u093f\t\23\2\2\u093f\u0940\5\u00a4S\2\u0940\u0941\7\26"+
		"\2\2\u0941\u0942\5\u00a4S\2\u0942\u0943\7\4\2\2\u0943\u095f\3\2\2\2\u0944"+
		"\u0945\7\u010f\2\2\u0945\u0946\7\17\2\2\u0946\u095f\5\u00a4S\2\u0947\u0948"+
		"\7\3\2\2\u0948\u094b\7\u010f\2\2\u0949\u094a\7\6\2\2\u094a\u094c\7\u010f"+
		"\2\2\u094b\u0949\3\2\2\2\u094c\u094d\3\2\2\2\u094d\u094b\3\2\2\2\u094d"+
		"\u094e\3\2\2\2\u094e\u094f\3\2\2\2\u094f\u0950\7\4\2\2\u0950\u0951\7\17"+
		"\2\2\u0951\u095f\5\u00a4S\2\u0952\u095f\5\u00dep\2\u0953\u0954\7\3\2\2"+
		"\u0954\u0955\5\u00a4S\2\u0955\u0956\7\4\2\2\u0956\u095f\3\2\2\2\u0957"+
		"\u0958\7\u008b\2\2\u0958\u0959\7\3\2\2\u0959\u095a\5\u00dep\2\u095a\u095b"+
		"\7\26\2\2\u095b\u095c\5\u00aaV\2\u095c\u095d\7\4\2\2\u095d\u095f\3\2\2"+
		"\2\u095e\u08cd\3\2\2\2\u095e\u08da\3\2\2\2\u095e\u08e7\3\2\2\2\u095e\u08ee"+
		"\3\2\2\2\u095e\u08fb\3\2\2\2\u095e\u0904\3\2\2\2\u095e\u090d\3\2\2\2\u095e"+
		"\u0914\3\2\2\2\u095e\u0915\3\2\2\2\u095e\u0916\3\2\2\2\u095e\u091a\3\2"+
		"\2\2\u095e\u0924\3\2\2\2\u095e\u0928\3\2\2\2\u095e\u093c\3\2\2\2\u095e"+
		"\u0944\3\2\2\2\u095e\u0947\3\2\2\2\u095e\u0952\3\2\2\2\u095e\u0953\3\2"+
		"\2\2\u095e\u0957\3\2\2\2\u095f\u096a\3\2\2\2\u0960\u0961\f\7\2\2\u0961"+
		"\u0962\7\20\2\2\u0962\u0963\5\u00aaV\2\u0963\u0964\7\21\2\2\u0964\u0969"+
		"\3\2\2\2\u0965\u0966\f\5\2\2\u0966\u0967\7\5\2\2\u0967\u0969\5\u00dep"+
		"\2\u0968\u0960\3\2\2\2\u0968\u0965\3\2\2\2\u0969\u096c\3\2\2\2\u096a\u0968"+
		"\3\2\2\2\u096a\u096b\3\2\2\2\u096b\u00ad\3\2\2\2\u096c\u096a\3\2\2\2\u096d"+
		"\u097a\7\61\2\2\u096e\u097a\5\u00b8]\2\u096f\u0970\5\u00dep\2\u0970\u0971"+
		"\7\u0107\2\2\u0971\u097a\3\2\2\2\u0972\u097a\5\u00e4s\2\u0973\u097a\5"+
		"\u00b6\\\2\u0974\u0976\7\u0107\2\2\u0975\u0974\3\2\2\2\u0976\u0977\3\2"+
		"\2\2\u0977\u0975\3\2\2\2\u0977\u0978\3\2\2\2\u0978\u097a\3\2\2\2\u0979"+
		"\u096d\3\2\2\2\u0979\u096e\3\2\2\2\u0979\u096f\3\2\2\2\u0979\u0972\3\2"+
		"\2\2\u0979\u0973\3\2\2\2\u0979\u0975\3\2\2\2\u097a\u00af\3\2\2\2\u097b"+
		"\u097c\t\24\2\2\u097c\u00b1\3\2\2\2\u097d\u097e\t\25\2\2\u097e\u00b3\3"+
		"\2\2\2\u097f\u0980\t\26\2\2\u0980\u00b5\3\2\2\2\u0981\u0982\t\27\2\2\u0982"+
		"\u00b7\3\2\2\2\u0983\u0987\78\2\2\u0984\u0986\5\u00ba^\2\u0985\u0984\3"+
		"\2\2\2\u0986\u0989\3\2\2\2\u0987\u0985\3\2\2\2\u0987\u0988\3\2\2\2\u0988"+
		"\u00b9\3\2\2\2\u0989\u0987\3\2\2\2\u098a\u098b\5\u00bc_\2\u098b\u098e"+
		"\5\u00dep\2\u098c\u098d\7t\2\2\u098d\u098f\5\u00dep\2\u098e\u098c\3\2"+
		"\2\2\u098e\u098f\3\2\2\2\u098f\u00bb\3\2\2\2\u0990\u0992\t\30\2\2\u0991"+
		"\u0990\3\2\2\2\u0991\u0992\3\2\2\2\u0992\u0993\3\2\2\2\u0993\u0996\t\16"+
		"\2\2\u0994\u0996\7\u0107\2\2\u0995\u0991\3\2\2\2\u0995\u0994\3\2\2\2\u0996"+
		"\u00bd\3\2\2\2\u0997\u099b\7S\2\2\u0998\u0999\7T\2\2\u0999\u099b\5\u00de"+
		"p\2\u099a\u0997\3\2\2\2\u099a\u0998\3\2\2\2\u099b\u00bf\3\2\2\2\u099c"+
		"\u099d\7y\2\2\u099d\u099e\7\u0090\2\2\u099e\u099f\5\u00c0a\2\u099f\u09a0"+
		"\7\u0092\2\2\u09a0\u09bf\3\2\2\2\u09a1\u09a2\7z\2\2\u09a2\u09a3\7\u0090"+
		"\2\2\u09a3\u09a4\5\u00c0a\2\u09a4\u09a5\7\6\2\2\u09a5\u09a6\5\u00c0a\2"+
		"\u09a6\u09a7\7\u0092\2\2\u09a7\u09bf\3\2\2\2\u09a8\u09af\7{\2\2\u09a9"+
		"\u09ab\7\u0090\2\2\u09aa\u09ac\5\u00ccg\2\u09ab\u09aa\3\2\2\2\u09ab\u09ac"+
		"\3\2\2\2\u09ac\u09ad\3\2\2\2\u09ad\u09b0\7\u0092\2\2\u09ae\u09b0\7\u008e"+
		"\2\2\u09af\u09a9\3\2\2\2\u09af\u09ae\3\2\2\2\u09b0\u09bf\3\2\2\2\u09b1"+
		"\u09bc\5\u00dep\2\u09b2\u09b3\7\3\2\2\u09b3\u09b8\7\u010b\2\2\u09b4\u09b5"+
		"\7\6\2\2\u09b5\u09b7\7\u010b\2\2\u09b6\u09b4\3\2\2\2\u09b7\u09ba\3\2\2"+
		"\2\u09b8\u09b6\3\2\2\2\u09b8\u09b9\3\2\2\2\u09b9\u09bb\3\2\2\2\u09ba\u09b8"+
		"\3\2\2\2\u09bb\u09bd\7\4\2\2\u09bc\u09b2\3\2\2\2\u09bc\u09bd\3\2\2\2\u09bd"+
		"\u09bf\3\2\2\2\u09be\u099c\3\2\2\2\u09be\u09a1\3\2\2\2\u09be\u09a8\3\2"+
		"\2\2\u09be\u09b1\3\2\2\2\u09bf\u00c1\3\2\2\2\u09c0\u09c5\5\u00c4c\2\u09c1"+
		"\u09c2\7\6\2\2\u09c2\u09c4\5\u00c4c\2\u09c3\u09c1\3\2\2\2\u09c4\u09c7"+
		"\3\2\2\2\u09c5\u09c3\3\2\2\2\u09c5\u09c6\3\2\2\2\u09c6\u00c3\3\2\2\2\u09c7"+
		"\u09c5\3\2\2\2\u09c8\u09c9\5\u00dep\2\u09c9\u09cc\5\u00c0a\2\u09ca\u09cb"+
		"\7|\2\2\u09cb\u09cd\7\u0107\2\2\u09cc\u09ca\3\2\2\2\u09cc\u09cd\3\2\2"+
		"\2\u09cd\u00c5\3\2\2\2\u09ce\u09d3\5\u00c8e\2\u09cf\u09d0\7\6\2\2\u09d0"+
		"\u09d2\5\u00c8e\2\u09d1\u09cf\3\2\2\2\u09d2\u09d5\3\2\2\2\u09d3\u09d1"+
		"\3\2\2\2\u09d3\u09d4\3\2\2\2\u09d4\u00c7\3\2\2\2\u09d5\u09d3\3\2\2\2\u09d6"+
		"\u09db\5\u00caf\2\u09d7\u09d8\7\5\2\2\u09d8\u09da\5\u00caf\2\u09d9\u09d7"+
		"\3\2\2\2\u09da\u09dd\3\2\2\2\u09db\u09d9\3\2\2\2\u09db\u09dc\3\2\2\2\u09dc"+
		"\u09de\3\2\2\2\u09dd\u09db\3\2\2\2\u09de\u09e1\5\u00c0a\2\u09df\u09e0"+
		"\7\30\2\2\u09e0\u09e2\5\u00dep\2\u09e1\u09df\3\2\2\2\u09e1\u09e2\3\2\2"+
		"\2\u09e2\u09e5\3\2\2\2\u09e3\u09e4\7|\2\2\u09e4\u09e6\7\u0107\2\2\u09e5"+
		"\u09e3\3\2\2\2\u09e5\u09e6\3\2\2\2\u09e6\u09fb\3\2\2\2\u09e7\u09e8\7\u00fa"+
		"\2\2\u09e8\u09e9\7\67\2\2\u09e9\u09ea\5\u00dep\2\u09ea\u09eb\7\30\2\2"+
		"\u09eb\u09ec\5\u00acW\2\u09ec\u09fb\3\2\2\2\u09ed\u09ee\7\22\2\2\u09ee"+
		"\u09ef\7\23\2\2\u09ef\u09f0\7\3\2\2\u09f0\u09f5\5\u00caf\2\u09f1\u09f2"+
		"\7\6\2\2\u09f2\u09f4\5\u00caf\2\u09f3\u09f1\3\2\2\2\u09f4\u09f7\3\2\2"+
		"\2\u09f5\u09f3\3\2\2\2\u09f5\u09f6\3\2\2\2\u09f6\u09f8\3\2\2\2\u09f7\u09f5"+
		"\3\2\2\2\u09f8\u09f9\7\4\2\2\u09f9\u09fb\3\2\2\2\u09fa\u09d6\3\2\2\2\u09fa"+
		"\u09e7\3\2\2\2\u09fa\u09ed\3\2\2\2\u09fb\u00c9\3\2\2\2\u09fc\u0a03\5\u00de"+
		"p\2\u09fd\u09fe\5\u00dep\2\u09fe\u09ff\7\20\2\2\u09ff\u0a00\5\u00aaV\2"+
		"\u0a00\u0a01\7\21\2\2\u0a01\u0a03\3\2\2\2\u0a02\u09fc\3\2\2\2\u0a02\u09fd"+
		"\3\2\2\2\u0a03\u00cb\3\2\2\2\u0a04\u0a09\5\u00ceh\2\u0a05\u0a06\7\6\2"+
		"\2\u0a06\u0a08\5\u00ceh\2\u0a07\u0a05\3\2\2\2\u0a08\u0a0b\3\2\2\2\u0a09"+
		"\u0a07\3\2\2\2\u0a09\u0a0a\3\2\2\2\u0a0a\u00cd\3\2\2\2\u0a0b\u0a09\3\2"+
		"\2\2\u0a0c\u0a0d\5\u00dep\2\u0a0d\u0a0e\7\24\2\2\u0a0e\u0a11\5\u00c0a"+
		"\2\u0a0f\u0a10\7|\2\2\u0a10\u0a12\7\u0107\2\2\u0a11\u0a0f\3\2\2\2\u0a11"+
		"\u0a12\3\2\2\2\u0a12\u00cf\3\2\2\2\u0a13\u0a14\7:\2\2\u0a14\u0a15\5\u00a4"+
		"S\2\u0a15\u0a16\7;\2\2\u0a16\u0a17\5\u00a4S\2\u0a17\u00d1\3\2\2\2\u0a18"+
		"\u0a19\7J\2\2\u0a19\u0a1e\5\u00d4k\2\u0a1a\u0a1b\7\6\2\2\u0a1b\u0a1d\5"+
		"\u00d4k\2\u0a1c\u0a1a\3\2\2\2\u0a1d\u0a20\3\2\2\2\u0a1e\u0a1c\3\2\2\2"+
		"\u0a1e\u0a1f\3\2\2\2\u0a1f\u00d3\3\2\2\2\u0a20\u0a1e\3\2\2\2\u0a21\u0a22"+
		"\5\u00dep\2\u0a22\u0a23\7\30\2\2\u0a23\u0a24\5\u00d6l\2\u0a24\u00d5\3"+
		"\2\2\2\u0a25\u0a50\5\u00dep\2\u0a26\u0a49\7\3\2\2\u0a27\u0a28\7\u00a4"+
		"\2\2\u0a28\u0a29\7\36\2\2\u0a29\u0a2e\5\u00a4S\2\u0a2a\u0a2b\7\6\2\2\u0a2b"+
		"\u0a2d\5\u00a4S\2\u0a2c\u0a2a\3\2\2\2\u0a2d\u0a30\3\2\2\2\u0a2e\u0a2c"+
		"\3\2\2\2\u0a2e\u0a2f\3\2\2\2\u0a2f\u0a4a\3\2\2\2\u0a30\u0a2e\3\2\2\2\u0a31"+
		"\u0a32\t\31\2\2\u0a32\u0a33\7\36\2\2\u0a33\u0a38\5\u00a4S\2\u0a34\u0a35"+
		"\7\6\2\2\u0a35\u0a37\5\u00a4S\2\u0a36\u0a34\3\2\2\2\u0a37\u0a3a\3\2\2"+
		"\2\u0a38\u0a36\3\2\2\2\u0a38\u0a39\3\2\2\2\u0a39\u0a3c\3\2\2\2\u0a3a\u0a38"+
		"\3\2\2\2\u0a3b\u0a31\3\2\2\2\u0a3b\u0a3c\3\2\2\2\u0a3c\u0a47\3\2\2\2\u0a3d"+
		"\u0a3e\t\32\2\2\u0a3e\u0a3f\7\36\2\2\u0a3f\u0a44\5L\'\2\u0a40\u0a41\7"+
		"\6\2\2\u0a41\u0a43\5L\'\2\u0a42\u0a40\3\2\2\2\u0a43\u0a46\3\2\2\2\u0a44"+
		"\u0a42\3\2\2\2\u0a44\u0a45\3\2\2\2\u0a45\u0a48\3\2\2\2\u0a46\u0a44\3\2"+
		"\2\2\u0a47\u0a3d\3\2\2\2\u0a47\u0a48\3\2\2\2\u0a48\u0a4a\3\2\2\2\u0a49"+
		"\u0a27\3\2\2\2\u0a49\u0a3b\3\2\2\2\u0a4a\u0a4c\3\2\2\2\u0a4b\u0a4d\5\u00d8"+
		"m\2\u0a4c\u0a4b\3\2\2\2\u0a4c\u0a4d\3\2\2\2\u0a4d\u0a4e\3\2\2\2\u0a4e"+
		"\u0a50\7\4\2\2\u0a4f\u0a25\3\2\2\2\u0a4f\u0a26\3\2\2\2\u0a50\u00d7\3\2"+
		"\2\2\u0a51\u0a52\7M\2\2\u0a52\u0a62\5\u00dan\2\u0a53\u0a54\7N\2\2\u0a54"+
		"\u0a62\5\u00dan\2\u0a55\u0a56\7M\2\2\u0a56\u0a57\7-\2\2\u0a57\u0a58\5"+
		"\u00dan\2\u0a58\u0a59\7(\2\2\u0a59\u0a5a\5\u00dan\2\u0a5a\u0a62\3\2\2"+
		"\2\u0a5b\u0a5c\7N\2\2\u0a5c\u0a5d\7-\2\2\u0a5d\u0a5e\5\u00dan\2\u0a5e"+
		"\u0a5f\7(\2\2\u0a5f\u0a60\5\u00dan\2\u0a60\u0a62\3\2\2\2\u0a61\u0a51\3"+
		"\2\2\2\u0a61\u0a53\3\2\2\2\u0a61\u0a55\3\2\2\2\u0a61\u0a5b\3\2\2\2\u0a62"+
		"\u00d9\3\2\2\2\u0a63\u0a64\7O\2\2\u0a64\u0a6b\t\33\2\2\u0a65\u0a66\7R"+
		"\2\2\u0a66\u0a6b\7V\2\2\u0a67\u0a68\5\u00a4S\2\u0a68\u0a69\t\33\2\2\u0a69"+
		"\u0a6b\3\2\2\2\u0a6a\u0a63\3\2\2\2\u0a6a\u0a65\3\2\2\2\u0a6a\u0a67\3\2"+
		"\2\2\u0a6b\u00db\3\2\2\2\u0a6c\u0a71\5\u00dep\2\u0a6d\u0a6e\7\5\2\2\u0a6e"+
		"\u0a70\5\u00dep\2\u0a6f\u0a6d\3\2\2\2\u0a70\u0a73\3\2\2\2\u0a71\u0a6f"+
		"\3\2\2\2\u0a71\u0a72\3\2\2\2\u0a72\u00dd\3\2\2\2\u0a73\u0a71\3\2\2\2\u0a74"+
		"\u0a84\5\u00e0q\2\u0a75\u0a84\7\u00f7\2\2\u0a76\u0a84\7E\2\2\u0a77\u0a84"+
		"\7A\2\2\u0a78\u0a84\7B\2\2\u0a79\u0a84\7C\2\2\u0a7a\u0a84\7D\2\2\u0a7b"+
		"\u0a84\7F\2\2\u0a7c\u0a84\7>\2\2\u0a7d\u0a84\7?\2\2\u0a7e\u0a84\7G\2\2"+
		"\u0a7f\u0a84\7p\2\2\u0a80\u0a84\7s\2\2\u0a81\u0a84\7q\2\2\u0a82\u0a84"+
		"\7r\2\2\u0a83\u0a74\3\2\2\2\u0a83\u0a75\3\2\2\2\u0a83\u0a76\3\2\2\2\u0a83"+
		"\u0a77\3\2\2\2\u0a83\u0a78\3\2\2\2\u0a83\u0a79\3\2\2\2\u0a83\u0a7a\3\2"+
		"\2\2\u0a83\u0a7b\3\2\2\2\u0a83\u0a7c\3\2\2\2\u0a83\u0a7d\3\2\2\2\u0a83"+
		"\u0a7e\3\2\2\2\u0a83\u0a7f\3\2\2\2\u0a83\u0a80\3\2\2\2\u0a83\u0a81\3\2"+
		"\2\2\u0a83\u0a82\3\2\2\2\u0a84\u00df\3\2\2\2\u0a85\u0a89\7\u010f\2\2\u0a86"+
		"\u0a89\5\u00e2r\2\u0a87\u0a89\5\u00e6t\2\u0a88\u0a85\3\2\2\2\u0a88\u0a86"+
		"\3\2\2\2\u0a88\u0a87\3\2\2\2\u0a89\u00e1\3\2\2\2\u0a8a\u0a8b\7\u0110\2"+
		"\2\u0a8b\u00e3\3\2\2\2\u0a8c\u0a8e\7\u0095\2\2\u0a8d\u0a8c\3\2\2\2\u0a8d"+
		"\u0a8e\3\2\2\2\u0a8e\u0a8f\3\2\2\2\u0a8f\u0aa9\7\u010c\2\2\u0a90\u0a92"+
		"\7\u0095\2\2\u0a91\u0a90\3\2\2\2\u0a91\u0a92\3\2\2\2\u0a92\u0a93\3\2\2"+
		"\2\u0a93\u0aa9\7\u010b\2\2\u0a94\u0a96\7\u0095\2\2\u0a95\u0a94\3\2\2\2"+
		"\u0a95\u0a96\3\2\2\2\u0a96\u0a97\3\2\2\2\u0a97\u0aa9\7\u0108\2\2\u0a98"+
		"\u0a9a\7\u0095\2\2\u0a99\u0a98\3\2\2\2\u0a99\u0a9a\3\2\2\2\u0a9a\u0a9b"+
		"\3\2\2\2\u0a9b\u0aa9\7\u0109\2\2\u0a9c\u0a9e\7\u0095\2\2\u0a9d\u0a9c\3"+
		"\2\2\2\u0a9d\u0a9e\3\2\2\2\u0a9e\u0a9f\3\2\2\2\u0a9f\u0aa9\7\u010a\2\2"+
		"\u0aa0\u0aa2\7\u0095\2\2\u0aa1\u0aa0\3\2\2\2\u0aa1\u0aa2\3\2\2\2\u0aa2"+
		"\u0aa3\3\2\2\2\u0aa3\u0aa9\7\u010d\2\2\u0aa4\u0aa6\7\u0095\2\2\u0aa5\u0aa4"+
		"\3\2\2\2\u0aa5\u0aa6\3\2\2\2\u0aa6\u0aa7\3\2\2\2\u0aa7\u0aa9\7\u010e\2"+
		"\2\u0aa8\u0a8d\3\2\2\2\u0aa8\u0a91\3\2\2\2\u0aa8\u0a95\3\2\2\2\u0aa8\u0a99"+
		"\3\2\2\2\u0aa8\u0a9d\3\2\2\2\u0aa8\u0aa1\3\2\2\2\u0aa8\u0aa5\3\2\2\2\u0aa9"+
		"\u00e5\3\2\2\2\u0aaa\u0aab\t\34\2\2\u0aab\u00e7\3\2\2\2\u0168\u00ec\u0105"+
		"\u010a\u010d\u0112\u011f\u0123\u012a\u0138\u013a\u013e\u0141\u0148\u0159"+
		"\u015b\u015f\u0162\u0169\u0170\u0174\u017c\u0186\u018c\u0192\u019d\u01bd"+
		"\u01c5\u01c9\u01ce\u01d4\u01dc\u01e2\u01ef\u01f4\u01fd\u0202\u0212\u0219"+
		"\u021d\u0225\u022c\u0233\u0242\u0246\u024c\u0252\u0255\u0258\u025e\u0262"+
		"\u0266\u026b\u026f\u0277\u027a\u0283\u0288\u028e\u0295\u0298\u029e\u02a9"+
		"\u02ac\u02b0\u02b5\u02ba\u02c1\u02c4\u02c7\u02ce\u02d3\u02d8\u02db\u02e4"+
		"\u02ec\u02f2\u02f6\u02fa\u02fe\u0300\u0309\u030f\u0314\u0317\u031b\u031e"+
		"\u0328\u032b\u032f\u0335\u0338\u033b\u0341\u0349\u034e\u0354\u035a\u0365"+
		"\u036d\u0374\u037c\u037f\u0387\u038b\u0392\u0406\u040e\u0416\u041f\u042b"+
		"\u042f\u0432\u0438\u0442\u044e\u0453\u0459\u0465\u0467\u046c\u0470\u0475"+
		"\u047a\u047d\u0482\u0486\u048b\u048d\u0491\u049a\u04a2\u04a9\u04b0\u04b9"+
		"\u04be\u04cd\u04d4\u04d7\u04de\u04e2\u04e8\u04f0\u04fb\u0506\u050d\u0513"+
		"\u0519\u0522\u0524\u052d\u0530\u0539\u053c\u0545\u0548\u0551\u0554\u0557"+
		"\u055c\u055e\u0561\u056d\u0574\u057b\u057e\u0580\u058b\u058f\u0593\u059f"+
		"\u05a2\u05a6\u05b0\u05b4\u05b6\u05b9\u05bd\u05c0\u05c4\u05ca\u05ce\u05d2"+
		"\u05d7\u05da\u05dc\u05e1\u05e6\u05e9\u05ed\u05f0\u05f2\u05f7\u05fc\u0609"+
		"\u060e\u0616\u061c\u0620\u0629\u0638\u063d\u0649\u064e\u0656\u0659\u065d"+
		"\u066b\u0678\u067d\u0681\u0684\u0689\u0692\u0695\u069a\u06a1\u06a4\u06ac"+
		"\u06b3\u06ba\u06bd\u06c2\u06c8\u06cc\u06cf\u06d2\u06d8\u06dd\u06e2\u06f4"+
		"\u06f6\u06f9\u0704\u070d\u0714\u071c\u0724\u0729\u0731\u0739\u073f\u074a"+
		"\u074d\u0756\u0759\u0761\u0764\u076a\u0781\u0783\u078b\u0798\u07aa\u07b1"+
		"\u07b6\u07c0\u07c4\u07c8\u07ce\u07dc\u07e8\u07eb\u07f1\u07f5\u07f7\u0800"+
		"\u080c\u080e\u0815\u081c\u0822\u0828\u082a\u082f\u083c\u0847\u084c\u0852"+
		"\u0856\u0858\u085f\u086e\u0870\u0878\u087a\u087e\u0886\u088f\u0895\u089d"+
		"\u08a3\u08a8\u08ad\u08b3\u08c8\u08ca\u08d2\u08d6\u08df\u08e3\u08f5\u08f8"+
		"\u0900\u0909\u0920\u092b\u0932\u0935\u093a\u094d\u095e\u0968\u096a\u0977"+
		"\u0979\u0987\u098e\u0991\u0995\u099a\u09ab\u09af\u09b8\u09bc\u09be\u09c5"+
		"\u09cc\u09d3\u09db\u09e1\u09e5\u09f5\u09fa\u0a02\u0a09\u0a11\u0a1e\u0a2e"+
		"\u0a38\u0a3b\u0a44\u0a47\u0a49\u0a4c\u0a4f\u0a61\u0a6a\u0a71\u0a83\u0a88"+
		"\u0a8d\u0a91\u0a95\u0a99\u0a9d\u0aa1\u0aa5\u0aa8";
	public static final String _serializedATN = Utils.join(
		new String[] {
			_serializedATNSegment0,
			_serializedATNSegment1
		},
		""
	);
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}