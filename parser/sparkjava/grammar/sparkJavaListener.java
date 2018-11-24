// Generated from grammar/sparkJava.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link sparkJavaParser}.
 */
public interface sparkJavaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#singleStatement}.
	 * @param ctx the parse tree
	 */
	void enterSingleStatement(sparkJavaParser.SingleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#singleStatement}.
	 * @param ctx the parse tree
	 */
	void exitSingleStatement(sparkJavaParser.SingleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterSingleExpression(sparkJavaParser.SingleExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitSingleExpression(sparkJavaParser.SingleExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#singleTableIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterSingleTableIdentifier(sparkJavaParser.SingleTableIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#singleTableIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitSingleTableIdentifier(sparkJavaParser.SingleTableIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#singleFunctionIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterSingleFunctionIdentifier(sparkJavaParser.SingleFunctionIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#singleFunctionIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitSingleFunctionIdentifier(sparkJavaParser.SingleFunctionIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#singleDataType}.
	 * @param ctx the parse tree
	 */
	void enterSingleDataType(sparkJavaParser.SingleDataTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#singleDataType}.
	 * @param ctx the parse tree
	 */
	void exitSingleDataType(sparkJavaParser.SingleDataTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#singleTableSchema}.
	 * @param ctx the parse tree
	 */
	void enterSingleTableSchema(sparkJavaParser.SingleTableSchemaContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#singleTableSchema}.
	 * @param ctx the parse tree
	 */
	void exitSingleTableSchema(sparkJavaParser.SingleTableSchemaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code statementDefault}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatementDefault(sparkJavaParser.StatementDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code statementDefault}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatementDefault(sparkJavaParser.StatementDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code use}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterUse(sparkJavaParser.UseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code use}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitUse(sparkJavaParser.UseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createDatabase}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateDatabase(sparkJavaParser.CreateDatabaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createDatabase}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateDatabase(sparkJavaParser.CreateDatabaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setDatabaseProperties}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetDatabaseProperties(sparkJavaParser.SetDatabasePropertiesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setDatabaseProperties}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetDatabaseProperties(sparkJavaParser.SetDatabasePropertiesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropDatabase}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropDatabase(sparkJavaParser.DropDatabaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropDatabase}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropDatabase(sparkJavaParser.DropDatabaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateTable(sparkJavaParser.CreateTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateTable(sparkJavaParser.CreateTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createHiveTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateHiveTable(sparkJavaParser.CreateHiveTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createHiveTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateHiveTable(sparkJavaParser.CreateHiveTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createTableLike}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateTableLike(sparkJavaParser.CreateTableLikeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createTableLike}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateTableLike(sparkJavaParser.CreateTableLikeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code analyze}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAnalyze(sparkJavaParser.AnalyzeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code analyze}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAnalyze(sparkJavaParser.AnalyzeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addTableColumns}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAddTableColumns(sparkJavaParser.AddTableColumnsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addTableColumns}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAddTableColumns(sparkJavaParser.AddTableColumnsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRenameTable(sparkJavaParser.RenameTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRenameTable(sparkJavaParser.RenameTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setTableProperties}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetTableProperties(sparkJavaParser.SetTablePropertiesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setTableProperties}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetTableProperties(sparkJavaParser.SetTablePropertiesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unsetTableProperties}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterUnsetTableProperties(sparkJavaParser.UnsetTablePropertiesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unsetTableProperties}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitUnsetTableProperties(sparkJavaParser.UnsetTablePropertiesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code changeColumn}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterChangeColumn(sparkJavaParser.ChangeColumnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code changeColumn}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitChangeColumn(sparkJavaParser.ChangeColumnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setTableSerDe}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetTableSerDe(sparkJavaParser.SetTableSerDeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setTableSerDe}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetTableSerDe(sparkJavaParser.SetTableSerDeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addTablePartition}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAddTablePartition(sparkJavaParser.AddTablePartitionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addTablePartition}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAddTablePartition(sparkJavaParser.AddTablePartitionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameTablePartition}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRenameTablePartition(sparkJavaParser.RenameTablePartitionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameTablePartition}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRenameTablePartition(sparkJavaParser.RenameTablePartitionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropTablePartitions}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropTablePartitions(sparkJavaParser.DropTablePartitionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropTablePartitions}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropTablePartitions(sparkJavaParser.DropTablePartitionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setTableLocation}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetTableLocation(sparkJavaParser.SetTableLocationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setTableLocation}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetTableLocation(sparkJavaParser.SetTableLocationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code recoverPartitions}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRecoverPartitions(sparkJavaParser.RecoverPartitionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code recoverPartitions}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRecoverPartitions(sparkJavaParser.RecoverPartitionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropTable(sparkJavaParser.DropTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropTable(sparkJavaParser.DropTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createView}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateView(sparkJavaParser.CreateViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createView}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateView(sparkJavaParser.CreateViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createTempViewUsing}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateTempViewUsing(sparkJavaParser.CreateTempViewUsingContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createTempViewUsing}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateTempViewUsing(sparkJavaParser.CreateTempViewUsingContext ctx);
	/**
	 * Enter a parse tree produced by the {@code alterViewQuery}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAlterViewQuery(sparkJavaParser.AlterViewQueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code alterViewQuery}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAlterViewQuery(sparkJavaParser.AlterViewQueryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createFunction}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateFunction(sparkJavaParser.CreateFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createFunction}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateFunction(sparkJavaParser.CreateFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropFunction}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropFunction(sparkJavaParser.DropFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropFunction}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropFunction(sparkJavaParser.DropFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code explain}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterExplain(sparkJavaParser.ExplainContext ctx);
	/**
	 * Exit a parse tree produced by the {@code explain}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitExplain(sparkJavaParser.ExplainContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showTables}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowTables(sparkJavaParser.ShowTablesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showTables}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowTables(sparkJavaParser.ShowTablesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowTable(sparkJavaParser.ShowTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowTable(sparkJavaParser.ShowTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showDatabases}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowDatabases(sparkJavaParser.ShowDatabasesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showDatabases}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowDatabases(sparkJavaParser.ShowDatabasesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showTblProperties}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowTblProperties(sparkJavaParser.ShowTblPropertiesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showTblProperties}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowTblProperties(sparkJavaParser.ShowTblPropertiesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showColumns}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowColumns(sparkJavaParser.ShowColumnsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showColumns}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowColumns(sparkJavaParser.ShowColumnsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showPartitions}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowPartitions(sparkJavaParser.ShowPartitionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showPartitions}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowPartitions(sparkJavaParser.ShowPartitionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showFunctions}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowFunctions(sparkJavaParser.ShowFunctionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showFunctions}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowFunctions(sparkJavaParser.ShowFunctionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showCreateTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowCreateTable(sparkJavaParser.ShowCreateTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showCreateTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowCreateTable(sparkJavaParser.ShowCreateTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code describeFunction}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDescribeFunction(sparkJavaParser.DescribeFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code describeFunction}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDescribeFunction(sparkJavaParser.DescribeFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code describeDatabase}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDescribeDatabase(sparkJavaParser.DescribeDatabaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code describeDatabase}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDescribeDatabase(sparkJavaParser.DescribeDatabaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code describeTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDescribeTable(sparkJavaParser.DescribeTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code describeTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDescribeTable(sparkJavaParser.DescribeTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code refreshTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRefreshTable(sparkJavaParser.RefreshTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code refreshTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRefreshTable(sparkJavaParser.RefreshTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code refreshResource}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRefreshResource(sparkJavaParser.RefreshResourceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code refreshResource}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRefreshResource(sparkJavaParser.RefreshResourceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cacheTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCacheTable(sparkJavaParser.CacheTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cacheTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCacheTable(sparkJavaParser.CacheTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code uncacheTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterUncacheTable(sparkJavaParser.UncacheTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code uncacheTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitUncacheTable(sparkJavaParser.UncacheTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code clearCache}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterClearCache(sparkJavaParser.ClearCacheContext ctx);
	/**
	 * Exit a parse tree produced by the {@code clearCache}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitClearCache(sparkJavaParser.ClearCacheContext ctx);
	/**
	 * Enter a parse tree produced by the {@code loadData}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterLoadData(sparkJavaParser.LoadDataContext ctx);
	/**
	 * Exit a parse tree produced by the {@code loadData}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitLoadData(sparkJavaParser.LoadDataContext ctx);
	/**
	 * Enter a parse tree produced by the {@code truncateTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterTruncateTable(sparkJavaParser.TruncateTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code truncateTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitTruncateTable(sparkJavaParser.TruncateTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code repairTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRepairTable(sparkJavaParser.RepairTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code repairTable}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRepairTable(sparkJavaParser.RepairTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code manageResource}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterManageResource(sparkJavaParser.ManageResourceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code manageResource}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitManageResource(sparkJavaParser.ManageResourceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code failNativeCommand}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterFailNativeCommand(sparkJavaParser.FailNativeCommandContext ctx);
	/**
	 * Exit a parse tree produced by the {@code failNativeCommand}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitFailNativeCommand(sparkJavaParser.FailNativeCommandContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setConfiguration}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetConfiguration(sparkJavaParser.SetConfigurationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setConfiguration}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetConfiguration(sparkJavaParser.SetConfigurationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code resetConfiguration}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterResetConfiguration(sparkJavaParser.ResetConfigurationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code resetConfiguration}
	 * labeled alternative in {@link sparkJavaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitResetConfiguration(sparkJavaParser.ResetConfigurationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#unsupportedHiveNativeCommands}.
	 * @param ctx the parse tree
	 */
	void enterUnsupportedHiveNativeCommands(sparkJavaParser.UnsupportedHiveNativeCommandsContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#unsupportedHiveNativeCommands}.
	 * @param ctx the parse tree
	 */
	void exitUnsupportedHiveNativeCommands(sparkJavaParser.UnsupportedHiveNativeCommandsContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#createTableHeader}.
	 * @param ctx the parse tree
	 */
	void enterCreateTableHeader(sparkJavaParser.CreateTableHeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#createTableHeader}.
	 * @param ctx the parse tree
	 */
	void exitCreateTableHeader(sparkJavaParser.CreateTableHeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#bucketSpec}.
	 * @param ctx the parse tree
	 */
	void enterBucketSpec(sparkJavaParser.BucketSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#bucketSpec}.
	 * @param ctx the parse tree
	 */
	void exitBucketSpec(sparkJavaParser.BucketSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#skewSpec}.
	 * @param ctx the parse tree
	 */
	void enterSkewSpec(sparkJavaParser.SkewSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#skewSpec}.
	 * @param ctx the parse tree
	 */
	void exitSkewSpec(sparkJavaParser.SkewSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#locationSpec}.
	 * @param ctx the parse tree
	 */
	void enterLocationSpec(sparkJavaParser.LocationSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#locationSpec}.
	 * @param ctx the parse tree
	 */
	void exitLocationSpec(sparkJavaParser.LocationSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#query}.
	 * @param ctx the parse tree
	 */
	void enterQuery(sparkJavaParser.QueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#query}.
	 * @param ctx the parse tree
	 */
	void exitQuery(sparkJavaParser.QueryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code insertOverwriteTable}
	 * labeled alternative in {@link sparkJavaParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void enterInsertOverwriteTable(sparkJavaParser.InsertOverwriteTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code insertOverwriteTable}
	 * labeled alternative in {@link sparkJavaParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void exitInsertOverwriteTable(sparkJavaParser.InsertOverwriteTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code insertIntoTable}
	 * labeled alternative in {@link sparkJavaParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void enterInsertIntoTable(sparkJavaParser.InsertIntoTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code insertIntoTable}
	 * labeled alternative in {@link sparkJavaParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void exitInsertIntoTable(sparkJavaParser.InsertIntoTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code insertOverwriteHiveDir}
	 * labeled alternative in {@link sparkJavaParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void enterInsertOverwriteHiveDir(sparkJavaParser.InsertOverwriteHiveDirContext ctx);
	/**
	 * Exit a parse tree produced by the {@code insertOverwriteHiveDir}
	 * labeled alternative in {@link sparkJavaParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void exitInsertOverwriteHiveDir(sparkJavaParser.InsertOverwriteHiveDirContext ctx);
	/**
	 * Enter a parse tree produced by the {@code insertOverwriteDir}
	 * labeled alternative in {@link sparkJavaParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void enterInsertOverwriteDir(sparkJavaParser.InsertOverwriteDirContext ctx);
	/**
	 * Exit a parse tree produced by the {@code insertOverwriteDir}
	 * labeled alternative in {@link sparkJavaParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void exitInsertOverwriteDir(sparkJavaParser.InsertOverwriteDirContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#partitionSpecLocation}.
	 * @param ctx the parse tree
	 */
	void enterPartitionSpecLocation(sparkJavaParser.PartitionSpecLocationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#partitionSpecLocation}.
	 * @param ctx the parse tree
	 */
	void exitPartitionSpecLocation(sparkJavaParser.PartitionSpecLocationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#partitionSpec}.
	 * @param ctx the parse tree
	 */
	void enterPartitionSpec(sparkJavaParser.PartitionSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#partitionSpec}.
	 * @param ctx the parse tree
	 */
	void exitPartitionSpec(sparkJavaParser.PartitionSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#partitionVal}.
	 * @param ctx the parse tree
	 */
	void enterPartitionVal(sparkJavaParser.PartitionValContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#partitionVal}.
	 * @param ctx the parse tree
	 */
	void exitPartitionVal(sparkJavaParser.PartitionValContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#describeFuncName}.
	 * @param ctx the parse tree
	 */
	void enterDescribeFuncName(sparkJavaParser.DescribeFuncNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#describeFuncName}.
	 * @param ctx the parse tree
	 */
	void exitDescribeFuncName(sparkJavaParser.DescribeFuncNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#describeColName}.
	 * @param ctx the parse tree
	 */
	void enterDescribeColName(sparkJavaParser.DescribeColNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#describeColName}.
	 * @param ctx the parse tree
	 */
	void exitDescribeColName(sparkJavaParser.DescribeColNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#ctes}.
	 * @param ctx the parse tree
	 */
	void enterCtes(sparkJavaParser.CtesContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#ctes}.
	 * @param ctx the parse tree
	 */
	void exitCtes(sparkJavaParser.CtesContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#namedQuery}.
	 * @param ctx the parse tree
	 */
	void enterNamedQuery(sparkJavaParser.NamedQueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#namedQuery}.
	 * @param ctx the parse tree
	 */
	void exitNamedQuery(sparkJavaParser.NamedQueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#tableProvider}.
	 * @param ctx the parse tree
	 */
	void enterTableProvider(sparkJavaParser.TableProviderContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#tableProvider}.
	 * @param ctx the parse tree
	 */
	void exitTableProvider(sparkJavaParser.TableProviderContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#tablePropertyList}.
	 * @param ctx the parse tree
	 */
	void enterTablePropertyList(sparkJavaParser.TablePropertyListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#tablePropertyList}.
	 * @param ctx the parse tree
	 */
	void exitTablePropertyList(sparkJavaParser.TablePropertyListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#tableProperty}.
	 * @param ctx the parse tree
	 */
	void enterTableProperty(sparkJavaParser.TablePropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#tableProperty}.
	 * @param ctx the parse tree
	 */
	void exitTableProperty(sparkJavaParser.TablePropertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#tablePropertyKey}.
	 * @param ctx the parse tree
	 */
	void enterTablePropertyKey(sparkJavaParser.TablePropertyKeyContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#tablePropertyKey}.
	 * @param ctx the parse tree
	 */
	void exitTablePropertyKey(sparkJavaParser.TablePropertyKeyContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#tablePropertyValue}.
	 * @param ctx the parse tree
	 */
	void enterTablePropertyValue(sparkJavaParser.TablePropertyValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#tablePropertyValue}.
	 * @param ctx the parse tree
	 */
	void exitTablePropertyValue(sparkJavaParser.TablePropertyValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#constantList}.
	 * @param ctx the parse tree
	 */
	void enterConstantList(sparkJavaParser.ConstantListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#constantList}.
	 * @param ctx the parse tree
	 */
	void exitConstantList(sparkJavaParser.ConstantListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#nestedConstantList}.
	 * @param ctx the parse tree
	 */
	void enterNestedConstantList(sparkJavaParser.NestedConstantListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#nestedConstantList}.
	 * @param ctx the parse tree
	 */
	void exitNestedConstantList(sparkJavaParser.NestedConstantListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#createFileFormat}.
	 * @param ctx the parse tree
	 */
	void enterCreateFileFormat(sparkJavaParser.CreateFileFormatContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#createFileFormat}.
	 * @param ctx the parse tree
	 */
	void exitCreateFileFormat(sparkJavaParser.CreateFileFormatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code tableFileFormat}
	 * labeled alternative in {@link sparkJavaParser#fileFormat}.
	 * @param ctx the parse tree
	 */
	void enterTableFileFormat(sparkJavaParser.TableFileFormatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code tableFileFormat}
	 * labeled alternative in {@link sparkJavaParser#fileFormat}.
	 * @param ctx the parse tree
	 */
	void exitTableFileFormat(sparkJavaParser.TableFileFormatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code genericFileFormat}
	 * labeled alternative in {@link sparkJavaParser#fileFormat}.
	 * @param ctx the parse tree
	 */
	void enterGenericFileFormat(sparkJavaParser.GenericFileFormatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code genericFileFormat}
	 * labeled alternative in {@link sparkJavaParser#fileFormat}.
	 * @param ctx the parse tree
	 */
	void exitGenericFileFormat(sparkJavaParser.GenericFileFormatContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#storageHandler}.
	 * @param ctx the parse tree
	 */
	void enterStorageHandler(sparkJavaParser.StorageHandlerContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#storageHandler}.
	 * @param ctx the parse tree
	 */
	void exitStorageHandler(sparkJavaParser.StorageHandlerContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#resource}.
	 * @param ctx the parse tree
	 */
	void enterResource(sparkJavaParser.ResourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#resource}.
	 * @param ctx the parse tree
	 */
	void exitResource(sparkJavaParser.ResourceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code singleInsertQuery}
	 * labeled alternative in {@link sparkJavaParser#queryNoWith}.
	 * @param ctx the parse tree
	 */
	void enterSingleInsertQuery(sparkJavaParser.SingleInsertQueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code singleInsertQuery}
	 * labeled alternative in {@link sparkJavaParser#queryNoWith}.
	 * @param ctx the parse tree
	 */
	void exitSingleInsertQuery(sparkJavaParser.SingleInsertQueryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multiInsertQuery}
	 * labeled alternative in {@link sparkJavaParser#queryNoWith}.
	 * @param ctx the parse tree
	 */
	void enterMultiInsertQuery(sparkJavaParser.MultiInsertQueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multiInsertQuery}
	 * labeled alternative in {@link sparkJavaParser#queryNoWith}.
	 * @param ctx the parse tree
	 */
	void exitMultiInsertQuery(sparkJavaParser.MultiInsertQueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#queryOrganization}.
	 * @param ctx the parse tree
	 */
	void enterQueryOrganization(sparkJavaParser.QueryOrganizationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#queryOrganization}.
	 * @param ctx the parse tree
	 */
	void exitQueryOrganization(sparkJavaParser.QueryOrganizationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#multiInsertQueryBody}.
	 * @param ctx the parse tree
	 */
	void enterMultiInsertQueryBody(sparkJavaParser.MultiInsertQueryBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#multiInsertQueryBody}.
	 * @param ctx the parse tree
	 */
	void exitMultiInsertQueryBody(sparkJavaParser.MultiInsertQueryBodyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code queryTermDefault}
	 * labeled alternative in {@link sparkJavaParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void enterQueryTermDefault(sparkJavaParser.QueryTermDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code queryTermDefault}
	 * labeled alternative in {@link sparkJavaParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void exitQueryTermDefault(sparkJavaParser.QueryTermDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setOperation}
	 * labeled alternative in {@link sparkJavaParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void enterSetOperation(sparkJavaParser.SetOperationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setOperation}
	 * labeled alternative in {@link sparkJavaParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void exitSetOperation(sparkJavaParser.SetOperationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code queryPrimaryDefault}
	 * labeled alternative in {@link sparkJavaParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterQueryPrimaryDefault(sparkJavaParser.QueryPrimaryDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code queryPrimaryDefault}
	 * labeled alternative in {@link sparkJavaParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitQueryPrimaryDefault(sparkJavaParser.QueryPrimaryDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code table}
	 * labeled alternative in {@link sparkJavaParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterTable(sparkJavaParser.TableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code table}
	 * labeled alternative in {@link sparkJavaParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitTable(sparkJavaParser.TableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code inlineTableDefault1}
	 * labeled alternative in {@link sparkJavaParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterInlineTableDefault1(sparkJavaParser.InlineTableDefault1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code inlineTableDefault1}
	 * labeled alternative in {@link sparkJavaParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitInlineTableDefault1(sparkJavaParser.InlineTableDefault1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code subquery}
	 * labeled alternative in {@link sparkJavaParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterSubquery(sparkJavaParser.SubqueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subquery}
	 * labeled alternative in {@link sparkJavaParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitSubquery(sparkJavaParser.SubqueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#sortItem}.
	 * @param ctx the parse tree
	 */
	void enterSortItem(sparkJavaParser.SortItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#sortItem}.
	 * @param ctx the parse tree
	 */
	void exitSortItem(sparkJavaParser.SortItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#querySpecification}.
	 * @param ctx the parse tree
	 */
	void enterQuerySpecification(sparkJavaParser.QuerySpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#querySpecification}.
	 * @param ctx the parse tree
	 */
	void exitQuerySpecification(sparkJavaParser.QuerySpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#hint}.
	 * @param ctx the parse tree
	 */
	void enterHint(sparkJavaParser.HintContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#hint}.
	 * @param ctx the parse tree
	 */
	void exitHint(sparkJavaParser.HintContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#hintStatement}.
	 * @param ctx the parse tree
	 */
	void enterHintStatement(sparkJavaParser.HintStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#hintStatement}.
	 * @param ctx the parse tree
	 */
	void exitHintStatement(sparkJavaParser.HintStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#fromClause}.
	 * @param ctx the parse tree
	 */
	void enterFromClause(sparkJavaParser.FromClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#fromClause}.
	 * @param ctx the parse tree
	 */
	void exitFromClause(sparkJavaParser.FromClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#aggregation}.
	 * @param ctx the parse tree
	 */
	void enterAggregation(sparkJavaParser.AggregationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#aggregation}.
	 * @param ctx the parse tree
	 */
	void exitAggregation(sparkJavaParser.AggregationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#groupingSet}.
	 * @param ctx the parse tree
	 */
	void enterGroupingSet(sparkJavaParser.GroupingSetContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#groupingSet}.
	 * @param ctx the parse tree
	 */
	void exitGroupingSet(sparkJavaParser.GroupingSetContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#pivotClause}.
	 * @param ctx the parse tree
	 */
	void enterPivotClause(sparkJavaParser.PivotClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#pivotClause}.
	 * @param ctx the parse tree
	 */
	void exitPivotClause(sparkJavaParser.PivotClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#pivotColumn}.
	 * @param ctx the parse tree
	 */
	void enterPivotColumn(sparkJavaParser.PivotColumnContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#pivotColumn}.
	 * @param ctx the parse tree
	 */
	void exitPivotColumn(sparkJavaParser.PivotColumnContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#pivotValue}.
	 * @param ctx the parse tree
	 */
	void enterPivotValue(sparkJavaParser.PivotValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#pivotValue}.
	 * @param ctx the parse tree
	 */
	void exitPivotValue(sparkJavaParser.PivotValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#lateralView}.
	 * @param ctx the parse tree
	 */
	void enterLateralView(sparkJavaParser.LateralViewContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#lateralView}.
	 * @param ctx the parse tree
	 */
	void exitLateralView(sparkJavaParser.LateralViewContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#setQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterSetQuantifier(sparkJavaParser.SetQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#setQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitSetQuantifier(sparkJavaParser.SetQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#relation}.
	 * @param ctx the parse tree
	 */
	void enterRelation(sparkJavaParser.RelationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#relation}.
	 * @param ctx the parse tree
	 */
	void exitRelation(sparkJavaParser.RelationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#joinRelation}.
	 * @param ctx the parse tree
	 */
	void enterJoinRelation(sparkJavaParser.JoinRelationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#joinRelation}.
	 * @param ctx the parse tree
	 */
	void exitJoinRelation(sparkJavaParser.JoinRelationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#joinType}.
	 * @param ctx the parse tree
	 */
	void enterJoinType(sparkJavaParser.JoinTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#joinType}.
	 * @param ctx the parse tree
	 */
	void exitJoinType(sparkJavaParser.JoinTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#joinCriteria}.
	 * @param ctx the parse tree
	 */
	void enterJoinCriteria(sparkJavaParser.JoinCriteriaContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#joinCriteria}.
	 * @param ctx the parse tree
	 */
	void exitJoinCriteria(sparkJavaParser.JoinCriteriaContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#sample}.
	 * @param ctx the parse tree
	 */
	void enterSample(sparkJavaParser.SampleContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#sample}.
	 * @param ctx the parse tree
	 */
	void exitSample(sparkJavaParser.SampleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sampleByPercentile}
	 * labeled alternative in {@link sparkJavaParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void enterSampleByPercentile(sparkJavaParser.SampleByPercentileContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sampleByPercentile}
	 * labeled alternative in {@link sparkJavaParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void exitSampleByPercentile(sparkJavaParser.SampleByPercentileContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sampleByRows}
	 * labeled alternative in {@link sparkJavaParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void enterSampleByRows(sparkJavaParser.SampleByRowsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sampleByRows}
	 * labeled alternative in {@link sparkJavaParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void exitSampleByRows(sparkJavaParser.SampleByRowsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sampleByBucket}
	 * labeled alternative in {@link sparkJavaParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void enterSampleByBucket(sparkJavaParser.SampleByBucketContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sampleByBucket}
	 * labeled alternative in {@link sparkJavaParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void exitSampleByBucket(sparkJavaParser.SampleByBucketContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sampleByBytes}
	 * labeled alternative in {@link sparkJavaParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void enterSampleByBytes(sparkJavaParser.SampleByBytesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sampleByBytes}
	 * labeled alternative in {@link sparkJavaParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void exitSampleByBytes(sparkJavaParser.SampleByBytesContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#identifierList}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierList(sparkJavaParser.IdentifierListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#identifierList}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierList(sparkJavaParser.IdentifierListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#identifierSeq}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierSeq(sparkJavaParser.IdentifierSeqContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#identifierSeq}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierSeq(sparkJavaParser.IdentifierSeqContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#orderedIdentifierList}.
	 * @param ctx the parse tree
	 */
	void enterOrderedIdentifierList(sparkJavaParser.OrderedIdentifierListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#orderedIdentifierList}.
	 * @param ctx the parse tree
	 */
	void exitOrderedIdentifierList(sparkJavaParser.OrderedIdentifierListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#orderedIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterOrderedIdentifier(sparkJavaParser.OrderedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#orderedIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitOrderedIdentifier(sparkJavaParser.OrderedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#identifierCommentList}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierCommentList(sparkJavaParser.IdentifierCommentListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#identifierCommentList}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierCommentList(sparkJavaParser.IdentifierCommentListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#identifierComment}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierComment(sparkJavaParser.IdentifierCommentContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#identifierComment}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierComment(sparkJavaParser.IdentifierCommentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code tableName}
	 * labeled alternative in {@link sparkJavaParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterTableName(sparkJavaParser.TableNameContext ctx);
	/**
	 * Exit a parse tree produced by the {@code tableName}
	 * labeled alternative in {@link sparkJavaParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitTableName(sparkJavaParser.TableNameContext ctx);
	/**
	 * Enter a parse tree produced by the {@code aliasedQuery}
	 * labeled alternative in {@link sparkJavaParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterAliasedQuery(sparkJavaParser.AliasedQueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code aliasedQuery}
	 * labeled alternative in {@link sparkJavaParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitAliasedQuery(sparkJavaParser.AliasedQueryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code aliasedRelation}
	 * labeled alternative in {@link sparkJavaParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterAliasedRelation(sparkJavaParser.AliasedRelationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code aliasedRelation}
	 * labeled alternative in {@link sparkJavaParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitAliasedRelation(sparkJavaParser.AliasedRelationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code inlineTableDefault2}
	 * labeled alternative in {@link sparkJavaParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterInlineTableDefault2(sparkJavaParser.InlineTableDefault2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code inlineTableDefault2}
	 * labeled alternative in {@link sparkJavaParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitInlineTableDefault2(sparkJavaParser.InlineTableDefault2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code tableValuedFunction}
	 * labeled alternative in {@link sparkJavaParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterTableValuedFunction(sparkJavaParser.TableValuedFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code tableValuedFunction}
	 * labeled alternative in {@link sparkJavaParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitTableValuedFunction(sparkJavaParser.TableValuedFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#inlineTable}.
	 * @param ctx the parse tree
	 */
	void enterInlineTable(sparkJavaParser.InlineTableContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#inlineTable}.
	 * @param ctx the parse tree
	 */
	void exitInlineTable(sparkJavaParser.InlineTableContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#functionTable}.
	 * @param ctx the parse tree
	 */
	void enterFunctionTable(sparkJavaParser.FunctionTableContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#functionTable}.
	 * @param ctx the parse tree
	 */
	void exitFunctionTable(sparkJavaParser.FunctionTableContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#tableAlias}.
	 * @param ctx the parse tree
	 */
	void enterTableAlias(sparkJavaParser.TableAliasContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#tableAlias}.
	 * @param ctx the parse tree
	 */
	void exitTableAlias(sparkJavaParser.TableAliasContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rowFormatSerde}
	 * labeled alternative in {@link sparkJavaParser#rowFormat}.
	 * @param ctx the parse tree
	 */
	void enterRowFormatSerde(sparkJavaParser.RowFormatSerdeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rowFormatSerde}
	 * labeled alternative in {@link sparkJavaParser#rowFormat}.
	 * @param ctx the parse tree
	 */
	void exitRowFormatSerde(sparkJavaParser.RowFormatSerdeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rowFormatDelimited}
	 * labeled alternative in {@link sparkJavaParser#rowFormat}.
	 * @param ctx the parse tree
	 */
	void enterRowFormatDelimited(sparkJavaParser.RowFormatDelimitedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rowFormatDelimited}
	 * labeled alternative in {@link sparkJavaParser#rowFormat}.
	 * @param ctx the parse tree
	 */
	void exitRowFormatDelimited(sparkJavaParser.RowFormatDelimitedContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#tableIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterTableIdentifier(sparkJavaParser.TableIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#tableIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitTableIdentifier(sparkJavaParser.TableIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#functionIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterFunctionIdentifier(sparkJavaParser.FunctionIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#functionIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitFunctionIdentifier(sparkJavaParser.FunctionIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#namedExpression}.
	 * @param ctx the parse tree
	 */
	void enterNamedExpression(sparkJavaParser.NamedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#namedExpression}.
	 * @param ctx the parse tree
	 */
	void exitNamedExpression(sparkJavaParser.NamedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#namedExpressionSeq}.
	 * @param ctx the parse tree
	 */
	void enterNamedExpressionSeq(sparkJavaParser.NamedExpressionSeqContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#namedExpressionSeq}.
	 * @param ctx the parse tree
	 */
	void exitNamedExpressionSeq(sparkJavaParser.NamedExpressionSeqContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(sparkJavaParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(sparkJavaParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link sparkJavaParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalNot(sparkJavaParser.LogicalNotContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link sparkJavaParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalNot(sparkJavaParser.LogicalNotContext ctx);
	/**
	 * Enter a parse tree produced by the {@code predicated}
	 * labeled alternative in {@link sparkJavaParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterPredicated(sparkJavaParser.PredicatedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code predicated}
	 * labeled alternative in {@link sparkJavaParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitPredicated(sparkJavaParser.PredicatedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code exists}
	 * labeled alternative in {@link sparkJavaParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterExists(sparkJavaParser.ExistsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code exists}
	 * labeled alternative in {@link sparkJavaParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitExists(sparkJavaParser.ExistsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalBinary}
	 * labeled alternative in {@link sparkJavaParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalBinary(sparkJavaParser.LogicalBinaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalBinary}
	 * labeled alternative in {@link sparkJavaParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalBinary(sparkJavaParser.LogicalBinaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterPredicate(sparkJavaParser.PredicateContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitPredicate(sparkJavaParser.PredicateContext ctx);
	/**
	 * Enter a parse tree produced by the {@code valueExpressionDefault}
	 * labeled alternative in {@link sparkJavaParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterValueExpressionDefault(sparkJavaParser.ValueExpressionDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code valueExpressionDefault}
	 * labeled alternative in {@link sparkJavaParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitValueExpressionDefault(sparkJavaParser.ValueExpressionDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code comparison}
	 * labeled alternative in {@link sparkJavaParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterComparison(sparkJavaParser.ComparisonContext ctx);
	/**
	 * Exit a parse tree produced by the {@code comparison}
	 * labeled alternative in {@link sparkJavaParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitComparison(sparkJavaParser.ComparisonContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arithmeticBinary}
	 * labeled alternative in {@link sparkJavaParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticBinary(sparkJavaParser.ArithmeticBinaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arithmeticBinary}
	 * labeled alternative in {@link sparkJavaParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticBinary(sparkJavaParser.ArithmeticBinaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arithmeticUnary}
	 * labeled alternative in {@link sparkJavaParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticUnary(sparkJavaParser.ArithmeticUnaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arithmeticUnary}
	 * labeled alternative in {@link sparkJavaParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticUnary(sparkJavaParser.ArithmeticUnaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code struct}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterStruct(sparkJavaParser.StructContext ctx);
	/**
	 * Exit a parse tree produced by the {@code struct}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitStruct(sparkJavaParser.StructContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dereference}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterDereference(sparkJavaParser.DereferenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dereference}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitDereference(sparkJavaParser.DereferenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code simpleCase}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSimpleCase(sparkJavaParser.SimpleCaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code simpleCase}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSimpleCase(sparkJavaParser.SimpleCaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code columnReference}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterColumnReference(sparkJavaParser.ColumnReferenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code columnReference}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitColumnReference(sparkJavaParser.ColumnReferenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rowConstructor}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterRowConstructor(sparkJavaParser.RowConstructorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rowConstructor}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitRowConstructor(sparkJavaParser.RowConstructorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code last}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterLast(sparkJavaParser.LastContext ctx);
	/**
	 * Exit a parse tree produced by the {@code last}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitLast(sparkJavaParser.LastContext ctx);
	/**
	 * Enter a parse tree produced by the {@code star}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterStar(sparkJavaParser.StarContext ctx);
	/**
	 * Exit a parse tree produced by the {@code star}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitStar(sparkJavaParser.StarContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subscript}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSubscript(sparkJavaParser.SubscriptContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subscript}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSubscript(sparkJavaParser.SubscriptContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subqueryExpression}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSubqueryExpression(sparkJavaParser.SubqueryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subqueryExpression}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSubqueryExpression(sparkJavaParser.SubqueryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cast}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterCast(sparkJavaParser.CastContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cast}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitCast(sparkJavaParser.CastContext ctx);
	/**
	 * Enter a parse tree produced by the {@code constantDefault}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterConstantDefault(sparkJavaParser.ConstantDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code constantDefault}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitConstantDefault(sparkJavaParser.ConstantDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code lambda}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterLambda(sparkJavaParser.LambdaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code lambda}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitLambda(sparkJavaParser.LambdaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parenthesizedExpression}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedExpression(sparkJavaParser.ParenthesizedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parenthesizedExpression}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedExpression(sparkJavaParser.ParenthesizedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code extract}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterExtract(sparkJavaParser.ExtractContext ctx);
	/**
	 * Exit a parse tree produced by the {@code extract}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitExtract(sparkJavaParser.ExtractContext ctx);
	/**
	 * Enter a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(sparkJavaParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(sparkJavaParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code searchedCase}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSearchedCase(sparkJavaParser.SearchedCaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code searchedCase}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSearchedCase(sparkJavaParser.SearchedCaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code position}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterPosition(sparkJavaParser.PositionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code position}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitPosition(sparkJavaParser.PositionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code first}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterFirst(sparkJavaParser.FirstContext ctx);
	/**
	 * Exit a parse tree produced by the {@code first}
	 * labeled alternative in {@link sparkJavaParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitFirst(sparkJavaParser.FirstContext ctx);
	/**
	 * Enter a parse tree produced by the {@code nullLiteral}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterNullLiteral(sparkJavaParser.NullLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code nullLiteral}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitNullLiteral(sparkJavaParser.NullLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code intervalLiteral}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterIntervalLiteral(sparkJavaParser.IntervalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code intervalLiteral}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitIntervalLiteral(sparkJavaParser.IntervalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code typeConstructor}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterTypeConstructor(sparkJavaParser.TypeConstructorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code typeConstructor}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitTypeConstructor(sparkJavaParser.TypeConstructorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code numericLiteral}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterNumericLiteral(sparkJavaParser.NumericLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code numericLiteral}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitNumericLiteral(sparkJavaParser.NumericLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code booleanLiteral}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterBooleanLiteral(sparkJavaParser.BooleanLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code booleanLiteral}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitBooleanLiteral(sparkJavaParser.BooleanLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code stringLiteral}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterStringLiteral(sparkJavaParser.StringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code stringLiteral}
	 * labeled alternative in {@link sparkJavaParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitStringLiteral(sparkJavaParser.StringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#comparisonOperator}.
	 * @param ctx the parse tree
	 */
	void enterComparisonOperator(sparkJavaParser.ComparisonOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#comparisonOperator}.
	 * @param ctx the parse tree
	 */
	void exitComparisonOperator(sparkJavaParser.ComparisonOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#arithmeticOperator}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticOperator(sparkJavaParser.ArithmeticOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#arithmeticOperator}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticOperator(sparkJavaParser.ArithmeticOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#predicateOperator}.
	 * @param ctx the parse tree
	 */
	void enterPredicateOperator(sparkJavaParser.PredicateOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#predicateOperator}.
	 * @param ctx the parse tree
	 */
	void exitPredicateOperator(sparkJavaParser.PredicateOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#booleanValue}.
	 * @param ctx the parse tree
	 */
	void enterBooleanValue(sparkJavaParser.BooleanValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#booleanValue}.
	 * @param ctx the parse tree
	 */
	void exitBooleanValue(sparkJavaParser.BooleanValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#interval}.
	 * @param ctx the parse tree
	 */
	void enterInterval(sparkJavaParser.IntervalContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#interval}.
	 * @param ctx the parse tree
	 */
	void exitInterval(sparkJavaParser.IntervalContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#intervalField}.
	 * @param ctx the parse tree
	 */
	void enterIntervalField(sparkJavaParser.IntervalFieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#intervalField}.
	 * @param ctx the parse tree
	 */
	void exitIntervalField(sparkJavaParser.IntervalFieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#intervalValue}.
	 * @param ctx the parse tree
	 */
	void enterIntervalValue(sparkJavaParser.IntervalValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#intervalValue}.
	 * @param ctx the parse tree
	 */
	void exitIntervalValue(sparkJavaParser.IntervalValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#colPosition}.
	 * @param ctx the parse tree
	 */
	void enterColPosition(sparkJavaParser.ColPositionContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#colPosition}.
	 * @param ctx the parse tree
	 */
	void exitColPosition(sparkJavaParser.ColPositionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code complexDataType}
	 * labeled alternative in {@link sparkJavaParser#dataType}.
	 * @param ctx the parse tree
	 */
	void enterComplexDataType(sparkJavaParser.ComplexDataTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code complexDataType}
	 * labeled alternative in {@link sparkJavaParser#dataType}.
	 * @param ctx the parse tree
	 */
	void exitComplexDataType(sparkJavaParser.ComplexDataTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code primitiveDataType}
	 * labeled alternative in {@link sparkJavaParser#dataType}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveDataType(sparkJavaParser.PrimitiveDataTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code primitiveDataType}
	 * labeled alternative in {@link sparkJavaParser#dataType}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveDataType(sparkJavaParser.PrimitiveDataTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#colTypeList}.
	 * @param ctx the parse tree
	 */
	void enterColTypeList(sparkJavaParser.ColTypeListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#colTypeList}.
	 * @param ctx the parse tree
	 */
	void exitColTypeList(sparkJavaParser.ColTypeListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#colType}.
	 * @param ctx the parse tree
	 */
	void enterColType(sparkJavaParser.ColTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#colType}.
	 * @param ctx the parse tree
	 */
	void exitColType(sparkJavaParser.ColTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#complexColTypeList}.
	 * @param ctx the parse tree
	 */
	void enterComplexColTypeList(sparkJavaParser.ComplexColTypeListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#complexColTypeList}.
	 * @param ctx the parse tree
	 */
	void exitComplexColTypeList(sparkJavaParser.ComplexColTypeListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#complexColType}.
	 * @param ctx the parse tree
	 */
	void enterComplexColType(sparkJavaParser.ComplexColTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#complexColType}.
	 * @param ctx the parse tree
	 */
	void exitComplexColType(sparkJavaParser.ComplexColTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#whenClause}.
	 * @param ctx the parse tree
	 */
	void enterWhenClause(sparkJavaParser.WhenClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#whenClause}.
	 * @param ctx the parse tree
	 */
	void exitWhenClause(sparkJavaParser.WhenClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#windows}.
	 * @param ctx the parse tree
	 */
	void enterWindows(sparkJavaParser.WindowsContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#windows}.
	 * @param ctx the parse tree
	 */
	void exitWindows(sparkJavaParser.WindowsContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#namedWindow}.
	 * @param ctx the parse tree
	 */
	void enterNamedWindow(sparkJavaParser.NamedWindowContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#namedWindow}.
	 * @param ctx the parse tree
	 */
	void exitNamedWindow(sparkJavaParser.NamedWindowContext ctx);
	/**
	 * Enter a parse tree produced by the {@code windowRef}
	 * labeled alternative in {@link sparkJavaParser#windowSpec}.
	 * @param ctx the parse tree
	 */
	void enterWindowRef(sparkJavaParser.WindowRefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code windowRef}
	 * labeled alternative in {@link sparkJavaParser#windowSpec}.
	 * @param ctx the parse tree
	 */
	void exitWindowRef(sparkJavaParser.WindowRefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code windowDef}
	 * labeled alternative in {@link sparkJavaParser#windowSpec}.
	 * @param ctx the parse tree
	 */
	void enterWindowDef(sparkJavaParser.WindowDefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code windowDef}
	 * labeled alternative in {@link sparkJavaParser#windowSpec}.
	 * @param ctx the parse tree
	 */
	void exitWindowDef(sparkJavaParser.WindowDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#windowFrame}.
	 * @param ctx the parse tree
	 */
	void enterWindowFrame(sparkJavaParser.WindowFrameContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#windowFrame}.
	 * @param ctx the parse tree
	 */
	void exitWindowFrame(sparkJavaParser.WindowFrameContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void enterFrameBound(sparkJavaParser.FrameBoundContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void exitFrameBound(sparkJavaParser.FrameBoundContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void enterQualifiedName(sparkJavaParser.QualifiedNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void exitQualifiedName(sparkJavaParser.QualifiedNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(sparkJavaParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(sparkJavaParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unquotedIdentifier}
	 * labeled alternative in {@link sparkJavaParser#strictIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterUnquotedIdentifier(sparkJavaParser.UnquotedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unquotedIdentifier}
	 * labeled alternative in {@link sparkJavaParser#strictIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitUnquotedIdentifier(sparkJavaParser.UnquotedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code quotedIdentifierAlternative}
	 * labeled alternative in {@link sparkJavaParser#strictIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterQuotedIdentifierAlternative(sparkJavaParser.QuotedIdentifierAlternativeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quotedIdentifierAlternative}
	 * labeled alternative in {@link sparkJavaParser#strictIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitQuotedIdentifierAlternative(sparkJavaParser.QuotedIdentifierAlternativeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#quotedIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterQuotedIdentifier(sparkJavaParser.QuotedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#quotedIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitQuotedIdentifier(sparkJavaParser.QuotedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code decimalLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void enterDecimalLiteral(sparkJavaParser.DecimalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code decimalLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void exitDecimalLiteral(sparkJavaParser.DecimalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code integerLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void enterIntegerLiteral(sparkJavaParser.IntegerLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code integerLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void exitIntegerLiteral(sparkJavaParser.IntegerLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code bigIntLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void enterBigIntLiteral(sparkJavaParser.BigIntLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code bigIntLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void exitBigIntLiteral(sparkJavaParser.BigIntLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code smallIntLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void enterSmallIntLiteral(sparkJavaParser.SmallIntLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code smallIntLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void exitSmallIntLiteral(sparkJavaParser.SmallIntLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code tinyIntLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void enterTinyIntLiteral(sparkJavaParser.TinyIntLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code tinyIntLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void exitTinyIntLiteral(sparkJavaParser.TinyIntLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code doubleLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void enterDoubleLiteral(sparkJavaParser.DoubleLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code doubleLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void exitDoubleLiteral(sparkJavaParser.DoubleLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code bigDecimalLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void enterBigDecimalLiteral(sparkJavaParser.BigDecimalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code bigDecimalLiteral}
	 * labeled alternative in {@link sparkJavaParser#number}.
	 * @param ctx the parse tree
	 */
	void exitBigDecimalLiteral(sparkJavaParser.BigDecimalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkJavaParser#nonReserved}.
	 * @param ctx the parse tree
	 */
	void enterNonReserved(sparkJavaParser.NonReservedContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkJavaParser#nonReserved}.
	 * @param ctx the parse tree
	 */
	void exitNonReserved(sparkJavaParser.NonReservedContext ctx);
}