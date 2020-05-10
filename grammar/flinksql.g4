grammar flinksql;

statement:
	setStatement
	| resetStatement
	| explain
	| describe
	| insert
	| update
	| merge
	| delete
	| query;

statementList: statement ( ';' statement)* ';'?;

setStatement:
	('ALTER' ( 'SYSTEM' | 'SESSION'))? 'SET' IDENTIFIER '=' expression;

resetStatement:
	('ALTER' ( 'SYSTEM' | 'SESSION'))? 'RESET' IDENTIFIER
	| ( 'ALTER' ( 'SYSTEM' | 'SESSION'))? 'RESET' 'ALL';

explain:
	'EXPLAIN' 'PLAN' (
		'WITH' 'TYPE'
		| 'WITH' 'IMPLEMENTATION'
		| 'WITHOUT' 'IMPLEMENTATION'
	)? (
		'EXCLUDING' 'ATTRIBUTES'
		| 'INCLUDING' 'ALL'? 'ATTRIBUTES'
	)? ('AS' 'JSON' | 'AS' 'XML')? 'FOR' (
		query
		| insert
		| update
		| merge
		| delete
	);

describe:
	'DESCRIBE' 'DATABASE' databaseName
	| 'DESCRIBE' 'CATALOG' ( databaseName .)? catalogName
	| 'DESCRIBE' 'SCHEMA' (( databaseName .)? catalogName)? . schemaName
	| 'DESCRIBE' 'TABLE'? (
		(( databaseName .)? catalogName .)? schemaName .
	)? tableName columnName?
	| 'DESCRIBE' 'STATEMENT'? (
		query
		| insert
		| update
		| merge
		| delete
	);

insert:
	('INSERT' | 'UPSERT') 'INTO' tablePrimary (
		'(' column (',' column)* ')'
	)? query;

update:
	'UPDATE' tablePrimary 'SET' assign (',' assign)* (
		'WHERE' booleanExpression
	)?;

assign: identifier '=' expression;

merge:
	'MERGE' 'INTO' tablePrimary (( 'AS')? alias)? 'USING' tablePrimary 'ON' booleanExpression (
		'WHEN' 'MATCHED' 'THEN' 'UPDATE' 'SET' assign (
			',' assign
		)*
	)? (
		'WHEN' 'NOT' 'MATCHED' 'THEN' 'INSERT' 'VALUES' '(' value (
			',' value
		)* ')'
	)?;

delete:
	'DELETE' 'FROM' tablePrimary ('AS'? alias)? (
		'WHERE' booleanExpression
	)?;

query:
	values
	| 'WITH' withItem ( ',' withItem)* query
	| (
		select
		| selectWithoutFrom
		| query 'UNION' ( 'ALL' | 'DISTINCT')? query
		| query 'EXCEPT' ( 'ALL' | 'DISTINCT')? query
		| query 'MINUS' ( 'ALL' | 'DISTINCT')? query
		| query 'INTERSECT' ( 'ALL' | 'DISTINCT')? query
	) ('ORDER' 'BY' orderItem (',' orderItem)*)? (
		'LIMIT' ( start ',')? ( count | 'ALL')
	)? ('OFFSET' start ( 'ROW' | 'ROWS'))? (
		'FETCH' ('FIRST' | 'NEXT') count? ('ROW' | 'ROWS') 'ONLY'
	)?;

withItem:
	name ('(' column (',' column)* ')')? 'AS' '(' query ')';

orderItem:
	expression ('ASC' | 'DESC')? (
		'NULLS' 'FIRST'
		| 'NULLS' 'LAST'
	)?;

select:
	'SELECT' 'STREAM'? ('ALL' | 'DISTINCT')? ( .* | projectItem (',' projectItem )* ) 'FROM'
		tableExpression ('WHERE' booleanExpression)? (
		'GROUP' 'BY' { groupItem (',' groupItem )* }
	)? ('HAVING' booleanExpression)? (
		'WINDOW' windowName 'AS' windowSpec (
			',' windowName 'AS' windowSpec
		)*
	)?;

selectWithoutFrom:
	'SELECT' ('ALL' | 'DISTINCT')? { * | projectItem [, projectItem ]* };

projectItem: expression ( 'AS'? columnAlias)? | tableAlias '.' .*;

tableExpression:
	tableReference (',' tableReference)*
	| tableExpression 'NATURAL'? (
		( 'LEFT' | 'RIGHT' | 'FULL') 'OUTER'?
	)? 'JOIN' tableExpression joinCondition?
	| tableExpression 'CROSS' 'JOIN' tableExpression
	| tableExpression ('CROSS' | 'OUTER')? 'APPLY' tableExpression;

joinCondition:
	'ON' booleanExpression
	| 'USING' '(' column (',' column)* ')';

tableReference:
	tablePrimary ('FOR' 'SYSTEM_TIME' 'AS' 'OF' expression)? matchRecognize? (
		'AS'? alias ('(' columnAlias (',' columnAlias)* ')')?
	)?;

tablePrimary:
	(( catalogName .)? schemaName .)? tableName '(' 'TABLE' (
		(catalogName .)? schemaName .
	) tableName ')'
	| tablePrimary 'EXTEND'? '(' columnDecl (',' columnDecl)* ')'
	| 'LATERAL'? '(' query ')'
	| 'UNNEST' '(' expression ')' ('WITH' 'ORDINALITY')?
	| 'LATERAL'? 'TABLE' '(' 'SPECIFIC'? functionName '(' expression (
		',' expression
	)* ')' ')';

columnDecl: column type ('NOT' 'NULL')?;

values: 'VALUES' expression (',' expression)*;

groupItem:
	expression
	| '(' ')'
	| '(' expression (',' expression)* ')'
	| 'CUBE' '(' expression (',' expression)* ')'
	| 'ROLLUP' '(' expression (',' expression)* ')'
	| 'GROUPING' 'SETS' '(' groupItem (',' groupItem)* ')';

window: windowName | windowSpec;

windowSpec:
	'(' windowName? ('ORDER' 'BY' orderItem (',' orderItem)*)? (
		'PARTITION' 'BY' expression (',' expression)*
	)? (
		'RANGE' numericOrIntervalExpression { 'PRECEDING' | 'FOLLOWING' }
		| 'ROWS' numericExpression { 'PRECEDING' | 'FOLLOWING' }
	)? ')';

expression
    : booleanExpression
    ;
booleanExpression
    : 'NOT' booleanExpression                                        #logicalNot
    | 'EXISTS' '(' query ')'                                         #exists
    | valueExpression predicate?                                   #predicated
    | left=booleanExpression operator=AND right=booleanExpression  #logicalBinary
    | left=booleanExpression operator=OR right=booleanExpression   #logicalBinary
    ;
valueExpression
    : primaryExpression                                                                      #valueExpressionDefault
    | operator=(MINUS | PLUS | TILDE) valueExpression                                        #arithmeticUnary
    | left=valueExpression operator=(ASTERISK | SLASH | PERCENT | DIV) right=valueExpression #arithmeticBinary
    | left=valueExpression operator=(PLUS | MINUS | CONCAT_PIPE) right=valueExpression       #arithmeticBinary
    | left=valueExpression operator=AMPERSAND right=valueExpression                          #arithmeticBinary
    | left=valueExpression operator=HAT right=valueExpression                                #arithmeticBinary
    | left=valueExpression operator=PIPE right=valueExpression                               #arithmeticBinary
    | left=valueExpression comparisonOperator right=valueExpression                          #comparison
    ;
primaryExpression
    : CASE whenClause+ (ELSE elseExpression=expression)? END                                   #searchedCase
    | CASE value=expression whenClause+ (ELSE elseExpression=expression)? END                  #simpleCase
    | CAST '(' expression AS dataType ')'                                                      #cast
    | STRUCT '(' (argument+=namedExpression (',' argument+=namedExpression)*)? ')'             #struct
    | FIRST '(' expression (IGNORE NULLS)? ')'                                                 #first
    | LAST '(' expression (IGNORE NULLS)? ')'                                                  #last
    | POSITION '(' substr=valueExpression IN str=valueExpression ')'                           #position
    | constant                                                                                 #constantDefault
    | ASTERISK                                                                                 #star
    | qualifiedName '.' ASTERISK                                                               #star
    | '(' namedExpression (',' namedExpression)+ ')'                                           #rowConstructor
    | '(' query ')'                                                                            #subqueryExpression
    | qualifiedName '(' (setQuantifier? argument+=expression (',' argument+=expression)*)? ')'
       (OVER windowSpec)?                                                                      #functionCall
    | qualifiedName '(' trimOption=(BOTH | LEADING | TRAILING) argument+=expression
      FROM argument+=expression ')'                                                            #functionCall
    | IDENTIFIER '->' expression                                                               #lambda
    | '(' IDENTIFIER (',' IDENTIFIER)+ ')' '->' expression                                     #lambda
    | value=primaryExpression '[' index=valueExpression ']'                                    #subscript
    | identifier                                                                               #columnReference
    | base=primaryExpression '.' fieldName=identifier                                          #dereference
    | '(' expression ')'                                                                       #parenthesizedExpression
    | EXTRACT '(' field=identifier FROM source=valueExpression ')'                             #extract
    ;
predicate
    : NOT? kind=BETWEEN lower=valueExpression AND upper=valueExpression
    | NOT? kind=IN '(' expression (',' expression)* ')'
    | NOT? kind=IN '(' query ')'
    | NOT? kind=(RLIKE | LIKE) pattern=valueExpression
    | IS NOT? kind=NULL
    | IS NOT? kind=DISTINCT FROM right=valueExpression
    ;
databaseName: IDENTIFIER;
//
// 
//
// 
//

SELECT: 'SELECT';
FROM: 'FROM';
ADD: 'ADD';
AS: 'AS';
ALL: 'ALL';
ANY: 'ANY';
DISTINCT: 'DISTINCT';
WHERE: 'WHERE';
GROUP: 'GROUP';
BY: 'BY';
GROUPING: 'GROUPING';
SETS: 'SETS';
CUBE: 'CUBE';
ROLLUP: 'ROLLUP';
ORDER: 'ORDER';
HAVING: 'HAVING';
LIMIT: 'LIMIT';
AT: 'AT';
OR: 'OR';
AND: 'AND';
IN: 'IN';
NOT: 'NOT' | '!';
NO: 'NO';
EXISTS: 'EXISTS';
BETWEEN: 'BETWEEN';
LIKE: 'LIKE';
RLIKE: 'RLIKE' | 'REGEXP';
IS: 'IS';
NULL: 'NULL';
TRUE: 'TRUE';
FALSE: 'FALSE';
NULLS: 'NULLS';
ASC: 'ASC';
DESC: 'DESC';
FOR: 'FOR';
INTERVAL: 'INTERVAL';
CASE: 'CASE';
WHEN: 'WHEN';
THEN: 'THEN';
ELSE: 'ELSE';
END: 'END';
JOIN: 'JOIN';
CROSS: 'CROSS';
OUTER: 'OUTER';
INNER: 'INNER';
LEFT: 'LEFT';
SEMI: 'SEMI';
RIGHT: 'RIGHT';
FULL: 'FULL';
NATURAL: 'NATURAL';
ON: 'ON';
PIVOT: 'PIVOT';
LATERAL: 'LATERAL';
WINDOW: 'WINDOW';
OVER: 'OVER';
PARTITION: 'PARTITION';
RANGE: 'RANGE';
ROWS: 'ROWS';
UNBOUNDED: 'UNBOUNDED';
PRECEDING: 'PRECEDING';
FOLLOWING: 'FOLLOWING';
CURRENT: 'CURRENT';
FIRST: 'FIRST';
AFTER: 'AFTER';
LAST: 'LAST';
ROW: 'ROW';
WITH: 'WITH';
VALUES: 'VALUES';
CREATE: 'CREATE';
TABLE: 'TABLE';
DIRECTORY: 'DIRECTORY';
VIEW: 'VIEW';
REPLACE: 'REPLACE';
INSERT: 'INSERT';
DELETE: 'DELETE';
INTO: 'INTO';
DESCRIBE: 'DESCRIBE';
EXPLAIN: 'EXPLAIN';
FORMAT: 'FORMAT';
LOGICAL: 'LOGICAL';
CODEGEN: 'CODEGEN';
COST: 'COST';
CAST: 'CAST';
SHOW: 'SHOW';
TABLES: 'TABLES';
COLUMNS: 'COLUMNS';
COLUMN: 'COLUMN';
USE: 'USE';
PARTITIONS: 'PARTITIONS';
FUNCTIONS: 'FUNCTIONS';
DROP: 'DROP';
UNION: 'UNION';
EXCEPT: 'EXCEPT';
SETMINUS: 'MINUS';
INTERSECT: 'INTERSECT';
TO: 'TO';
TABLESAMPLE: 'TABLESAMPLE';
STRATIFY: 'STRATIFY';
ALTER: 'ALTER';
RENAME: 'RENAME';
ARRAY: 'ARRAY';
MAP: 'MAP';
STRUCT: 'STRUCT';
COMMENT: 'COMMENT';
SET: 'SET';
RESET: 'RESET';
DATA: 'DATA';
START: 'START';
TRANSACTION: 'TRANSACTION';
COMMIT: 'COMMIT';
ROLLBACK: 'ROLLBACK';
MACRO: 'MACRO';
IGNORE: 'IGNORE';
BOTH: 'BOTH';
LEADING: 'LEADING';
TRAILING: 'TRAILING';

IF: 'IF';
POSITION: 'POSITION';
EXTRACT: 'EXTRACT';

EQ  : '=' | '==';
NSEQ: '<=>';
NEQ : '<>';
NEQJ: '!=';
LT  : '<';
LTE : '<=' | '!>';
GT  : '>';
GTE : '>=' | '!<';

PLUS: '+';
MINUS: '-';
ASTERISK: '*';
SLASH: '/';
PERCENT: '%';
DIV: 'DIV';
TILDE: '~';
AMPERSAND: '&';
PIPE: '|';
CONCAT_PIPE: '||';
HAT: '^';

PERCENTLIT: 'PERCENT';
BUCKET: 'BUCKET';
OUT: 'OUT';
OF: 'OF';

SORT: 'SORT';
CLUSTER: 'CLUSTER';
DISTRIBUTE: 'DISTRIBUTE';
OVERWRITE: 'OVERWRITE';
TRANSFORM: 'TRANSFORM';
REDUCE: 'REDUCE';
USING: 'USING';
SERDE: 'SERDE';
SERDEPROPERTIES: 'SERDEPROPERTIES';
RECORDREADER: 'RECORDREADER';
RECORDWRITER: 'RECORDWRITER';
DELIMITED: 'DELIMITED';
FIELDS: 'FIELDS';
TERMINATED: 'TERMINATED';
COLLECTION: 'COLLECTION';
ITEMS: 'ITEMS';
KEYS: 'KEYS';
ESCAPED: 'ESCAPED';
LINES: 'LINES';
SEPARATED: 'SEPARATED';
FUNCTION: 'FUNCTION';
EXTENDED: 'EXTENDED';
REFRESH: 'REFRESH';
CLEAR: 'CLEAR';
CACHE: 'CACHE';
UNCACHE: 'UNCACHE';
LAZY: 'LAZY';
FORMATTED: 'FORMATTED';
GLOBAL: 'GLOBAL';
TEMPORARY: 'TEMPORARY' | 'TEMP';
OPTIONS: 'OPTIONS';
UNSET: 'UNSET';
TBLPROPERTIES: 'TBLPROPERTIES';
DBPROPERTIES: 'DBPROPERTIES';
BUCKETS: 'BUCKETS';
SKEWED: 'SKEWED';
STORED: 'STORED';
DIRECTORIES: 'DIRECTORIES';
LOCATION: 'LOCATION';
EXCHANGE: 'EXCHANGE';
ARCHIVE: 'ARCHIVE';
UNARCHIVE: 'UNARCHIVE';
FILEFORMAT: 'FILEFORMAT';
TOUCH: 'TOUCH';
COMPACT: 'COMPACT';
CONCATENATE: 'CONCATENATE';
CHANGE: 'CHANGE';
CASCADE: 'CASCADE';
RESTRICT: 'RESTRICT';
CLUSTERED: 'CLUSTERED';
SORTED: 'SORTED';
PURGE: 'PURGE';
INPUTFORMAT: 'INPUTFORMAT';
OUTPUTFORMAT: 'OUTPUTFORMAT';
DATABASE: 'DATABASE' | 'SCHEMA';
DATABASES: 'DATABASES' | 'SCHEMAS';
DFS: 'DFS';
TRUNCATE: 'TRUNCATE';
ANALYZE: 'ANALYZE';
COMPUTE: 'COMPUTE';
LIST: 'LIST';
STATISTICS: 'STATISTICS';
PARTITIONED: 'PARTITIONED';
EXTERNAL: 'EXTERNAL';
DEFINED: 'DEFINED';
REVOKE: 'REVOKE';
GRANT: 'GRANT';
LOCK: 'LOCK';
UNLOCK: 'UNLOCK';
MSCK: 'MSCK';
REPAIR: 'REPAIR';
RECOVER: 'RECOVER';
EXPORT: 'EXPORT';
IMPORT: 'IMPORT';
LOAD: 'LOAD';
ROLE: 'ROLE';
ROLES: 'ROLES';
COMPACTIONS: 'COMPACTIONS';
PRINCIPALS: 'PRINCIPALS';
TRANSACTIONS: 'TRANSACTIONS';
INDEX: 'INDEX';
INDEXES: 'INDEXES';
LOCKS: 'LOCKS';
OPTION: 'OPTION';
ANTI: 'ANTI';
LOCAL: 'LOCAL';
INPATH: 'INPATH';

STRING
    : '\'' ( ~('\''|'\\') | ('\\' .) )* '\''
    | '"' ( ~('"'|'\\') | ('\\' .) )* '"'
    ;

BIGINT_LITERAL
    : DIGIT+ 'L'
    ;

SMALLINT_LITERAL
    : DIGIT+ 'S'
    ;

TINYINT_LITERAL
    : DIGIT+ 'Y'
    ;

INTEGER_VALUE
    : DIGIT+
    ;

DECIMAL_VALUE
    : DIGIT+ EXPONENT
    | DECIMAL_DIGITS EXPONENT? {this.isValidDecimal()}?
    ;

DOUBLE_LITERAL
    : DIGIT+ EXPONENT? 'D'
    | DECIMAL_DIGITS EXPONENT? 'D' {this.isValidDecimal()}?
    ;

BIGDECIMAL_LITERAL
    : DIGIT+ EXPONENT? 'BD'
    | DECIMAL_DIGITS EXPONENT? 'BD' {this.isValidDecimal()}?
    ;

IDENTIFIER
    : (LETTER | DIGIT | '_')+
    ;

BACKQUOTED_IDENTIFIER
    : '`' ( ~'`' | '``' )* '`'
    ;

fragment DECIMAL_DIGITS
    : DIGIT+ '.' DIGIT*
    | '.' DIGIT+
    ;

fragment EXPONENT
    : 'E' [+-]? DIGIT+
    ;

fragment DIGIT
    : [0-9]
    ;

fragment LETTER
    : [A-Z]
    ;

SIMPLE_COMMENT
    : '--' ~[\r\n]* '\r'? '\n'? -> channel(HIDDEN)
    ;

BRACKETED_EMPTY_COMMENT
    : '/**/' -> channel(HIDDEN)
    ;

BRACKETED_COMMENT
    : '/*' ~[+] .*? '*/' -> channel(HIDDEN)
    ;

WS
    : [ \r\n\t]+ -> channel(HIDDEN)
    ;

// Catch-all for anything we can't recognize.
// We use this to be able to ignore and recover all the text
// when splitting statements with DelimiterLexer
UNRECOGNIZED
    : .
    ;
