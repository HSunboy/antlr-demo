grammar hive;
import hiveLexerRule;

singleStatement: showStatement EOF;

/**
 * show statement
 */
showStatement:
	showDataBases
	| showTables
	| showViews
	| showPartitions
	| showTableExtended
	| showTableProperties
	| showCreateTable
	| showColumns;

showDataBases:
	SHOW (DATABASES | SCHEMAS) (LIKE pattern = STRING)?;

showTables: SHOW TABLES (IN databaseName)? pattern = STRING?;

showTableExtended:
	SHOW TABLE EXTENDED ((IN | FROM) databaseName)? LIKE STRING partitionSpec?;

// hive 2.2.0
showViews:
	SHOW (VIEWS | MATERIALIZED) ((IN | FROM) databaseName)? (
		LIKE pattern = STRING
	)?;

showPartitions: SHOW PARTITIONS tableName partitionSpec?;

showTableProperties:
	SHOW TBLPROPERTIES tableName tablePropertyList?;

showCreateTable: SHOW CREATE TABLE tableName?;

showColumns:
	SHOW COLUMNS (FROM | IN)? tableName (
		(FROM | IN) databaseName
	)? (LIKE pattern = STRING)?;

showFunctions: SHOW FUNCTIONS (LIKE pattern = STRING)?;

showLocks:
	SHOW LOCKS tableName partitionSpec? EXTENDED?		# showTableLocks
	| SHOW LOCKS (DATABASES | SCHEMA)? databaseName	# showDatabaseLocks;

showConf: SHOW CONF configurationName;

showTransactions: SHOW TRANSACTIONS;

showCompactions: SHOW COMPACTIONS;

/**
 * common
 */
partitionSpec:
	PARTITION '(' partitionVal (',' partitionVal)* ')';

partitionVal: identifier (EQ constant)?;

databaseName: identifier;

tableName: (db = databaseName '.')? table = identifier;

tablePropertyList: '(' tableProperty (',' tableProperty)* ')';

tableProperty:
	key = tablePropertyKey (EQ? value = tablePropertyValue)?;

tablePropertyKey: identifier ('.' identifier)* | STRING;

configurationName: identifier ('.' identifier)*;

tablePropertyValue:
	INTEGER_VALUE
	| DECIMAL_VALUE
	| booleanValue
	| STRING;

constant:
	NULL				# nullLiteral
	| interval			# intervalLiteral
	| identifier STRING	# typeConstructor
	| number			# numericLiteral
	| booleanValue		# booleanLiteral
	| STRING+			# stringLiteral;

interval: INTERVAL intervalField*;

intervalField:
	value = intervalValue unit = identifier (TO to = identifier)?;

// 时间间隔=数字或者字符串
intervalValue: (PLUS | MINUS)? (INTEGER_VALUE | DECIMAL_VALUE)
	| STRING;

// 数值类型
number:
	MINUS? DECIMAL_VALUE		# decimalLiteral
	| MINUS? INTEGER_VALUE		# integerLiteral
	| MINUS? BIGINT_LITERAL		# bigIntLiteral
	| MINUS? SMALLINT_LITERAL	# smallIntLiteral
	| MINUS? TINYINT_LITERAL	# tinyIntLiteral
	| MINUS? DOUBLE_LITERAL		# doubleLiteral
	| MINUS? BIGDECIMAL_LITERAL	# bigDecimalLiteral;

booleanValue: TRUE | FALSE;

identifier:
	strictIdentifier
	| FULL
	| INNER
	| LEFT
	| SEMI
	| RIGHT
	| JOIN
	| CROSS
	| ON
	| UNION
	| INTERSECT;

strictIdentifier:
	IDENTIFIER				# unquotedIdentifier
	| quotedIdentifier		# quotedIdentifierAlternative
	| nonReserved			# unquotedIdentifier
	| VARIABLE_REFERENCE	# variableIdentifier;

// 间隔号包裹的字符串
quotedIdentifier: BACKQUOTED_IDENTIFIER;

// 非保留字
nonReserved:
	ADD
	| ADMIN
	| AFTER
	| ANALYZE
	| ARCHIVE
	| ASC
	| BEFORE
	| BUCKET
	| BUCKETS
	| CASCADE
	| CHANGE
	| CLUSTER
	| CLUSTERED
	| CLUSTERSTATUS
	| COLLECTION
	| COLUMNS
	| COMMENT
	| COMPACT
	| COMPACTIONS
	| COMPUTE
	| CONCATENATE
	| CONTINUE
	| DATA
	| DATABASES
	| DATETIME
	| DAY
	| DBPROPERTIES
	| DEFERRED
	| DEFINED
	| DELIMITED
	| DEPENDENCY
	| DESC
	| DIRECTORIES
	| DIRECTORY
	| DISABLE
	| DISTRIBUTE
	| ELEM_TYPE
	| ENABLE
	| ESCAPED
	| EXCLUSIVE
	| EXPLAIN
	| EXPORT
	| FIELDS
	| FILE
	| FILEFORMAT
	| FIRST
	| FORMAT
	| FORMATTED
	| FUNCTIONS
	| HOLD_DDLTIME
	| HOUR
	| IDXPROPERTIES
	| IGNORE
	| INDEX
	| INDEXES
	| INPATH
	| INPUTDRIVER
	| INPUTFORMAT
	| ITEMS
	| JAR
	| KEYS
	| KEY_TYPE
	| LIMIT
	| LINES
	| LOAD
	| LOCATION
	| LOCK
	| LOCKS
	| LOGICAL
	| LONG
	| MAPJOIN
	| MATERIALIZED
	| METADATA
	| SETMINUS
	| MINUTE
	| MONTH
	| MSCK
	| NOSCAN
	| NO_DROP
	| OFFLINE
	| OPTION
	| OUTPUTDRIVER
	| OUTPUTFORMAT
	| OVERWRITE
	| OWNER
	| PARTITIONED
	| PARTITIONS
	| PLUS
	| PRETTY
	| PRINCIPALS
	| PROTECTION
	| PURGE
	| READ
	| READONLY
	| REBUILD
	| RECORDREADER
	| RECORDWRITER
	| RELOAD
	| RENAME
	| REPAIR
	| REPLACE
	| REPLICATION
	| RESTRICT
	| REWRITE
	| ROLE
	| ROLES
	| SCHEMA
	| SCHEMAS
	| SECOND
	| SEMI
	| SERDE
	| SERDEPROPERTIES
	| SERVER
	| SETS
	| SHARED
	| SHOW
	| SHOW_DATABASE
	| SKEWED
	| SORT
	| SORTED
	| SSL
	| STATISTICS
	| STORED
	| STREAMTABLE
	| STRING
	| STRUCT
	| TABLES
	| TBLPROPERTIES
	| TEMPORARY
	| TERMINATED
	| TINYINT
	| TOUCH
	| TRANSACTIONS
	| UNARCHIVE
	| UNDO
	| UNIONTYPE
	| UNLOCK
	| UNSET
	| UNSIGNED
	| URI
	| USE
	| UTC
	| UTCTIMESTAMP
	| VALUE_TYPE
	| VIEW
	| WHILE
	| YEAR
	| AUTOCOMMIT
	| ISOLATION
	| LEVEL
	| OFFSET
	| SNAPSHOT
	| TRANSACTION
	| WORK
	| WRITE
	| ABORT
	| KEY
	| LAST
	| NORELY
	| NOVALIDATE
	| NULLS
	| RELY
	| VALIDATE
	| DETAIL
	| DOW
	| EXPRESSION
	| OPERATOR
	| QUARTER
	| SUMMARY
	| VECTORIZATION
	| WEEK
	| YEARS
	| MONTHS
	| WEEKS
	| DAYS
	| HOURS
	| MINUTES
	| SECONDS
	| TIMESTAMPTZ
	| ZONE;

