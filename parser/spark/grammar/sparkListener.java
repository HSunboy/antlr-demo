// Generated from grammar/spark.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link sparkParser}.
 */
public interface sparkListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link sparkParser#singleStatement}.
	 * @param ctx the parse tree
	 */
	void enterSingleStatement(sparkParser.SingleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#singleStatement}.
	 * @param ctx the parse tree
	 */
	void exitSingleStatement(sparkParser.SingleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterSingleExpression(sparkParser.SingleExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitSingleExpression(sparkParser.SingleExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#singleTableIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterSingleTableIdentifier(sparkParser.SingleTableIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#singleTableIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitSingleTableIdentifier(sparkParser.SingleTableIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#singleFunctionIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterSingleFunctionIdentifier(sparkParser.SingleFunctionIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#singleFunctionIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitSingleFunctionIdentifier(sparkParser.SingleFunctionIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#singleDataType}.
	 * @param ctx the parse tree
	 */
	void enterSingleDataType(sparkParser.SingleDataTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#singleDataType}.
	 * @param ctx the parse tree
	 */
	void exitSingleDataType(sparkParser.SingleDataTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#singleTableSchema}.
	 * @param ctx the parse tree
	 */
	void enterSingleTableSchema(sparkParser.SingleTableSchemaContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#singleTableSchema}.
	 * @param ctx the parse tree
	 */
	void exitSingleTableSchema(sparkParser.SingleTableSchemaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code statementDefault}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatementDefault(sparkParser.StatementDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code statementDefault}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatementDefault(sparkParser.StatementDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code use}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterUse(sparkParser.UseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code use}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitUse(sparkParser.UseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createDatabase}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateDatabase(sparkParser.CreateDatabaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createDatabase}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateDatabase(sparkParser.CreateDatabaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setDatabaseProperties}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetDatabaseProperties(sparkParser.SetDatabasePropertiesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setDatabaseProperties}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetDatabaseProperties(sparkParser.SetDatabasePropertiesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropDatabase}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropDatabase(sparkParser.DropDatabaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropDatabase}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropDatabase(sparkParser.DropDatabaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateTable(sparkParser.CreateTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateTable(sparkParser.CreateTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createHiveTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateHiveTable(sparkParser.CreateHiveTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createHiveTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateHiveTable(sparkParser.CreateHiveTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createTableLike}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateTableLike(sparkParser.CreateTableLikeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createTableLike}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateTableLike(sparkParser.CreateTableLikeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code analyze}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAnalyze(sparkParser.AnalyzeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code analyze}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAnalyze(sparkParser.AnalyzeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addTableColumns}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAddTableColumns(sparkParser.AddTableColumnsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addTableColumns}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAddTableColumns(sparkParser.AddTableColumnsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRenameTable(sparkParser.RenameTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRenameTable(sparkParser.RenameTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setTableProperties}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetTableProperties(sparkParser.SetTablePropertiesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setTableProperties}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetTableProperties(sparkParser.SetTablePropertiesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unsetTableProperties}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterUnsetTableProperties(sparkParser.UnsetTablePropertiesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unsetTableProperties}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitUnsetTableProperties(sparkParser.UnsetTablePropertiesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code changeColumn}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterChangeColumn(sparkParser.ChangeColumnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code changeColumn}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitChangeColumn(sparkParser.ChangeColumnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setTableSerDe}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetTableSerDe(sparkParser.SetTableSerDeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setTableSerDe}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetTableSerDe(sparkParser.SetTableSerDeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addTablePartition}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAddTablePartition(sparkParser.AddTablePartitionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addTablePartition}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAddTablePartition(sparkParser.AddTablePartitionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code renameTablePartition}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRenameTablePartition(sparkParser.RenameTablePartitionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code renameTablePartition}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRenameTablePartition(sparkParser.RenameTablePartitionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropTablePartitions}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropTablePartitions(sparkParser.DropTablePartitionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropTablePartitions}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropTablePartitions(sparkParser.DropTablePartitionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setTableLocation}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetTableLocation(sparkParser.SetTableLocationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setTableLocation}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetTableLocation(sparkParser.SetTableLocationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code recoverPartitions}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRecoverPartitions(sparkParser.RecoverPartitionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code recoverPartitions}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRecoverPartitions(sparkParser.RecoverPartitionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropTable(sparkParser.DropTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropTable(sparkParser.DropTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createView}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateView(sparkParser.CreateViewContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createView}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateView(sparkParser.CreateViewContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createTempViewUsing}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateTempViewUsing(sparkParser.CreateTempViewUsingContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createTempViewUsing}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateTempViewUsing(sparkParser.CreateTempViewUsingContext ctx);
	/**
	 * Enter a parse tree produced by the {@code alterViewQuery}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAlterViewQuery(sparkParser.AlterViewQueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code alterViewQuery}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAlterViewQuery(sparkParser.AlterViewQueryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code createFunction}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCreateFunction(sparkParser.CreateFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code createFunction}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCreateFunction(sparkParser.CreateFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dropFunction}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDropFunction(sparkParser.DropFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dropFunction}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDropFunction(sparkParser.DropFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code explain}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterExplain(sparkParser.ExplainContext ctx);
	/**
	 * Exit a parse tree produced by the {@code explain}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitExplain(sparkParser.ExplainContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showTables}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowTables(sparkParser.ShowTablesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showTables}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowTables(sparkParser.ShowTablesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowTable(sparkParser.ShowTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowTable(sparkParser.ShowTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showDatabases}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowDatabases(sparkParser.ShowDatabasesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showDatabases}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowDatabases(sparkParser.ShowDatabasesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showTblProperties}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowTblProperties(sparkParser.ShowTblPropertiesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showTblProperties}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowTblProperties(sparkParser.ShowTblPropertiesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showColumns}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowColumns(sparkParser.ShowColumnsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showColumns}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowColumns(sparkParser.ShowColumnsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showPartitions}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowPartitions(sparkParser.ShowPartitionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showPartitions}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowPartitions(sparkParser.ShowPartitionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showFunctions}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowFunctions(sparkParser.ShowFunctionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showFunctions}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowFunctions(sparkParser.ShowFunctionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showCreateTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterShowCreateTable(sparkParser.ShowCreateTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showCreateTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitShowCreateTable(sparkParser.ShowCreateTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code describeFunction}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDescribeFunction(sparkParser.DescribeFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code describeFunction}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDescribeFunction(sparkParser.DescribeFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code describeDatabase}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDescribeDatabase(sparkParser.DescribeDatabaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code describeDatabase}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDescribeDatabase(sparkParser.DescribeDatabaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code describeTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDescribeTable(sparkParser.DescribeTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code describeTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDescribeTable(sparkParser.DescribeTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code refreshTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRefreshTable(sparkParser.RefreshTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code refreshTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRefreshTable(sparkParser.RefreshTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code refreshResource}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRefreshResource(sparkParser.RefreshResourceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code refreshResource}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRefreshResource(sparkParser.RefreshResourceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cacheTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterCacheTable(sparkParser.CacheTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cacheTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitCacheTable(sparkParser.CacheTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code uncacheTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterUncacheTable(sparkParser.UncacheTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code uncacheTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitUncacheTable(sparkParser.UncacheTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code clearCache}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterClearCache(sparkParser.ClearCacheContext ctx);
	/**
	 * Exit a parse tree produced by the {@code clearCache}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitClearCache(sparkParser.ClearCacheContext ctx);
	/**
	 * Enter a parse tree produced by the {@code loadData}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterLoadData(sparkParser.LoadDataContext ctx);
	/**
	 * Exit a parse tree produced by the {@code loadData}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitLoadData(sparkParser.LoadDataContext ctx);
	/**
	 * Enter a parse tree produced by the {@code truncateTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterTruncateTable(sparkParser.TruncateTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code truncateTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitTruncateTable(sparkParser.TruncateTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code repairTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterRepairTable(sparkParser.RepairTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code repairTable}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitRepairTable(sparkParser.RepairTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code manageResource}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterManageResource(sparkParser.ManageResourceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code manageResource}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitManageResource(sparkParser.ManageResourceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code failNativeCommand}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterFailNativeCommand(sparkParser.FailNativeCommandContext ctx);
	/**
	 * Exit a parse tree produced by the {@code failNativeCommand}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitFailNativeCommand(sparkParser.FailNativeCommandContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setConfiguration}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterSetConfiguration(sparkParser.SetConfigurationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setConfiguration}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitSetConfiguration(sparkParser.SetConfigurationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code resetConfiguration}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterResetConfiguration(sparkParser.ResetConfigurationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code resetConfiguration}
	 * labeled alternative in {@link sparkParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitResetConfiguration(sparkParser.ResetConfigurationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#unsupportedHiveNativeCommands}.
	 * @param ctx the parse tree
	 */
	void enterUnsupportedHiveNativeCommands(sparkParser.UnsupportedHiveNativeCommandsContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#unsupportedHiveNativeCommands}.
	 * @param ctx the parse tree
	 */
	void exitUnsupportedHiveNativeCommands(sparkParser.UnsupportedHiveNativeCommandsContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#createTableHeader}.
	 * @param ctx the parse tree
	 */
	void enterCreateTableHeader(sparkParser.CreateTableHeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#createTableHeader}.
	 * @param ctx the parse tree
	 */
	void exitCreateTableHeader(sparkParser.CreateTableHeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#bucketSpec}.
	 * @param ctx the parse tree
	 */
	void enterBucketSpec(sparkParser.BucketSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#bucketSpec}.
	 * @param ctx the parse tree
	 */
	void exitBucketSpec(sparkParser.BucketSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#skewSpec}.
	 * @param ctx the parse tree
	 */
	void enterSkewSpec(sparkParser.SkewSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#skewSpec}.
	 * @param ctx the parse tree
	 */
	void exitSkewSpec(sparkParser.SkewSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#locationSpec}.
	 * @param ctx the parse tree
	 */
	void enterLocationSpec(sparkParser.LocationSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#locationSpec}.
	 * @param ctx the parse tree
	 */
	void exitLocationSpec(sparkParser.LocationSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#query}.
	 * @param ctx the parse tree
	 */
	void enterQuery(sparkParser.QueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#query}.
	 * @param ctx the parse tree
	 */
	void exitQuery(sparkParser.QueryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code insertOverwriteTable}
	 * labeled alternative in {@link sparkParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void enterInsertOverwriteTable(sparkParser.InsertOverwriteTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code insertOverwriteTable}
	 * labeled alternative in {@link sparkParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void exitInsertOverwriteTable(sparkParser.InsertOverwriteTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code insertIntoTable}
	 * labeled alternative in {@link sparkParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void enterInsertIntoTable(sparkParser.InsertIntoTableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code insertIntoTable}
	 * labeled alternative in {@link sparkParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void exitInsertIntoTable(sparkParser.InsertIntoTableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code insertOverwriteHiveDir}
	 * labeled alternative in {@link sparkParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void enterInsertOverwriteHiveDir(sparkParser.InsertOverwriteHiveDirContext ctx);
	/**
	 * Exit a parse tree produced by the {@code insertOverwriteHiveDir}
	 * labeled alternative in {@link sparkParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void exitInsertOverwriteHiveDir(sparkParser.InsertOverwriteHiveDirContext ctx);
	/**
	 * Enter a parse tree produced by the {@code insertOverwriteDir}
	 * labeled alternative in {@link sparkParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void enterInsertOverwriteDir(sparkParser.InsertOverwriteDirContext ctx);
	/**
	 * Exit a parse tree produced by the {@code insertOverwriteDir}
	 * labeled alternative in {@link sparkParser#insertInto}.
	 * @param ctx the parse tree
	 */
	void exitInsertOverwriteDir(sparkParser.InsertOverwriteDirContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#partitionSpecLocation}.
	 * @param ctx the parse tree
	 */
	void enterPartitionSpecLocation(sparkParser.PartitionSpecLocationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#partitionSpecLocation}.
	 * @param ctx the parse tree
	 */
	void exitPartitionSpecLocation(sparkParser.PartitionSpecLocationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#partitionSpec}.
	 * @param ctx the parse tree
	 */
	void enterPartitionSpec(sparkParser.PartitionSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#partitionSpec}.
	 * @param ctx the parse tree
	 */
	void exitPartitionSpec(sparkParser.PartitionSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#partitionVal}.
	 * @param ctx the parse tree
	 */
	void enterPartitionVal(sparkParser.PartitionValContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#partitionVal}.
	 * @param ctx the parse tree
	 */
	void exitPartitionVal(sparkParser.PartitionValContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#describeFuncName}.
	 * @param ctx the parse tree
	 */
	void enterDescribeFuncName(sparkParser.DescribeFuncNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#describeFuncName}.
	 * @param ctx the parse tree
	 */
	void exitDescribeFuncName(sparkParser.DescribeFuncNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#describeColName}.
	 * @param ctx the parse tree
	 */
	void enterDescribeColName(sparkParser.DescribeColNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#describeColName}.
	 * @param ctx the parse tree
	 */
	void exitDescribeColName(sparkParser.DescribeColNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#ctes}.
	 * @param ctx the parse tree
	 */
	void enterCtes(sparkParser.CtesContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#ctes}.
	 * @param ctx the parse tree
	 */
	void exitCtes(sparkParser.CtesContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#namedQuery}.
	 * @param ctx the parse tree
	 */
	void enterNamedQuery(sparkParser.NamedQueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#namedQuery}.
	 * @param ctx the parse tree
	 */
	void exitNamedQuery(sparkParser.NamedQueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#tableProvider}.
	 * @param ctx the parse tree
	 */
	void enterTableProvider(sparkParser.TableProviderContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#tableProvider}.
	 * @param ctx the parse tree
	 */
	void exitTableProvider(sparkParser.TableProviderContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#tablePropertyList}.
	 * @param ctx the parse tree
	 */
	void enterTablePropertyList(sparkParser.TablePropertyListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#tablePropertyList}.
	 * @param ctx the parse tree
	 */
	void exitTablePropertyList(sparkParser.TablePropertyListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#tableProperty}.
	 * @param ctx the parse tree
	 */
	void enterTableProperty(sparkParser.TablePropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#tableProperty}.
	 * @param ctx the parse tree
	 */
	void exitTableProperty(sparkParser.TablePropertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#tablePropertyKey}.
	 * @param ctx the parse tree
	 */
	void enterTablePropertyKey(sparkParser.TablePropertyKeyContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#tablePropertyKey}.
	 * @param ctx the parse tree
	 */
	void exitTablePropertyKey(sparkParser.TablePropertyKeyContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#tablePropertyValue}.
	 * @param ctx the parse tree
	 */
	void enterTablePropertyValue(sparkParser.TablePropertyValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#tablePropertyValue}.
	 * @param ctx the parse tree
	 */
	void exitTablePropertyValue(sparkParser.TablePropertyValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#constantList}.
	 * @param ctx the parse tree
	 */
	void enterConstantList(sparkParser.ConstantListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#constantList}.
	 * @param ctx the parse tree
	 */
	void exitConstantList(sparkParser.ConstantListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#nestedConstantList}.
	 * @param ctx the parse tree
	 */
	void enterNestedConstantList(sparkParser.NestedConstantListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#nestedConstantList}.
	 * @param ctx the parse tree
	 */
	void exitNestedConstantList(sparkParser.NestedConstantListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#createFileFormat}.
	 * @param ctx the parse tree
	 */
	void enterCreateFileFormat(sparkParser.CreateFileFormatContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#createFileFormat}.
	 * @param ctx the parse tree
	 */
	void exitCreateFileFormat(sparkParser.CreateFileFormatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code tableFileFormat}
	 * labeled alternative in {@link sparkParser#fileFormat}.
	 * @param ctx the parse tree
	 */
	void enterTableFileFormat(sparkParser.TableFileFormatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code tableFileFormat}
	 * labeled alternative in {@link sparkParser#fileFormat}.
	 * @param ctx the parse tree
	 */
	void exitTableFileFormat(sparkParser.TableFileFormatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code genericFileFormat}
	 * labeled alternative in {@link sparkParser#fileFormat}.
	 * @param ctx the parse tree
	 */
	void enterGenericFileFormat(sparkParser.GenericFileFormatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code genericFileFormat}
	 * labeled alternative in {@link sparkParser#fileFormat}.
	 * @param ctx the parse tree
	 */
	void exitGenericFileFormat(sparkParser.GenericFileFormatContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#storageHandler}.
	 * @param ctx the parse tree
	 */
	void enterStorageHandler(sparkParser.StorageHandlerContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#storageHandler}.
	 * @param ctx the parse tree
	 */
	void exitStorageHandler(sparkParser.StorageHandlerContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#resource}.
	 * @param ctx the parse tree
	 */
	void enterResource(sparkParser.ResourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#resource}.
	 * @param ctx the parse tree
	 */
	void exitResource(sparkParser.ResourceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code singleInsertQuery}
	 * labeled alternative in {@link sparkParser#queryNoWith}.
	 * @param ctx the parse tree
	 */
	void enterSingleInsertQuery(sparkParser.SingleInsertQueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code singleInsertQuery}
	 * labeled alternative in {@link sparkParser#queryNoWith}.
	 * @param ctx the parse tree
	 */
	void exitSingleInsertQuery(sparkParser.SingleInsertQueryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multiInsertQuery}
	 * labeled alternative in {@link sparkParser#queryNoWith}.
	 * @param ctx the parse tree
	 */
	void enterMultiInsertQuery(sparkParser.MultiInsertQueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multiInsertQuery}
	 * labeled alternative in {@link sparkParser#queryNoWith}.
	 * @param ctx the parse tree
	 */
	void exitMultiInsertQuery(sparkParser.MultiInsertQueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#queryOrganization}.
	 * @param ctx the parse tree
	 */
	void enterQueryOrganization(sparkParser.QueryOrganizationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#queryOrganization}.
	 * @param ctx the parse tree
	 */
	void exitQueryOrganization(sparkParser.QueryOrganizationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#multiInsertQueryBody}.
	 * @param ctx the parse tree
	 */
	void enterMultiInsertQueryBody(sparkParser.MultiInsertQueryBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#multiInsertQueryBody}.
	 * @param ctx the parse tree
	 */
	void exitMultiInsertQueryBody(sparkParser.MultiInsertQueryBodyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code queryTermDefault}
	 * labeled alternative in {@link sparkParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void enterQueryTermDefault(sparkParser.QueryTermDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code queryTermDefault}
	 * labeled alternative in {@link sparkParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void exitQueryTermDefault(sparkParser.QueryTermDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code setOperation}
	 * labeled alternative in {@link sparkParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void enterSetOperation(sparkParser.SetOperationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code setOperation}
	 * labeled alternative in {@link sparkParser#queryTerm}.
	 * @param ctx the parse tree
	 */
	void exitSetOperation(sparkParser.SetOperationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code queryPrimaryDefault}
	 * labeled alternative in {@link sparkParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterQueryPrimaryDefault(sparkParser.QueryPrimaryDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code queryPrimaryDefault}
	 * labeled alternative in {@link sparkParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitQueryPrimaryDefault(sparkParser.QueryPrimaryDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code table}
	 * labeled alternative in {@link sparkParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterTable(sparkParser.TableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code table}
	 * labeled alternative in {@link sparkParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitTable(sparkParser.TableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code inlineTableDefault1}
	 * labeled alternative in {@link sparkParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterInlineTableDefault1(sparkParser.InlineTableDefault1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code inlineTableDefault1}
	 * labeled alternative in {@link sparkParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitInlineTableDefault1(sparkParser.InlineTableDefault1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code subquery}
	 * labeled alternative in {@link sparkParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterSubquery(sparkParser.SubqueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subquery}
	 * labeled alternative in {@link sparkParser#queryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitSubquery(sparkParser.SubqueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#sortItem}.
	 * @param ctx the parse tree
	 */
	void enterSortItem(sparkParser.SortItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#sortItem}.
	 * @param ctx the parse tree
	 */
	void exitSortItem(sparkParser.SortItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#querySpecification}.
	 * @param ctx the parse tree
	 */
	void enterQuerySpecification(sparkParser.QuerySpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#querySpecification}.
	 * @param ctx the parse tree
	 */
	void exitQuerySpecification(sparkParser.QuerySpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#hint}.
	 * @param ctx the parse tree
	 */
	void enterHint(sparkParser.HintContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#hint}.
	 * @param ctx the parse tree
	 */
	void exitHint(sparkParser.HintContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#hintStatement}.
	 * @param ctx the parse tree
	 */
	void enterHintStatement(sparkParser.HintStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#hintStatement}.
	 * @param ctx the parse tree
	 */
	void exitHintStatement(sparkParser.HintStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#fromClause}.
	 * @param ctx the parse tree
	 */
	void enterFromClause(sparkParser.FromClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#fromClause}.
	 * @param ctx the parse tree
	 */
	void exitFromClause(sparkParser.FromClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#aggregation}.
	 * @param ctx the parse tree
	 */
	void enterAggregation(sparkParser.AggregationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#aggregation}.
	 * @param ctx the parse tree
	 */
	void exitAggregation(sparkParser.AggregationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#groupingSet}.
	 * @param ctx the parse tree
	 */
	void enterGroupingSet(sparkParser.GroupingSetContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#groupingSet}.
	 * @param ctx the parse tree
	 */
	void exitGroupingSet(sparkParser.GroupingSetContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#pivotClause}.
	 * @param ctx the parse tree
	 */
	void enterPivotClause(sparkParser.PivotClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#pivotClause}.
	 * @param ctx the parse tree
	 */
	void exitPivotClause(sparkParser.PivotClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#pivotColumn}.
	 * @param ctx the parse tree
	 */
	void enterPivotColumn(sparkParser.PivotColumnContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#pivotColumn}.
	 * @param ctx the parse tree
	 */
	void exitPivotColumn(sparkParser.PivotColumnContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#pivotValue}.
	 * @param ctx the parse tree
	 */
	void enterPivotValue(sparkParser.PivotValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#pivotValue}.
	 * @param ctx the parse tree
	 */
	void exitPivotValue(sparkParser.PivotValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#lateralView}.
	 * @param ctx the parse tree
	 */
	void enterLateralView(sparkParser.LateralViewContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#lateralView}.
	 * @param ctx the parse tree
	 */
	void exitLateralView(sparkParser.LateralViewContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#setQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterSetQuantifier(sparkParser.SetQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#setQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitSetQuantifier(sparkParser.SetQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#relation}.
	 * @param ctx the parse tree
	 */
	void enterRelation(sparkParser.RelationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#relation}.
	 * @param ctx the parse tree
	 */
	void exitRelation(sparkParser.RelationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#joinRelation}.
	 * @param ctx the parse tree
	 */
	void enterJoinRelation(sparkParser.JoinRelationContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#joinRelation}.
	 * @param ctx the parse tree
	 */
	void exitJoinRelation(sparkParser.JoinRelationContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#joinType}.
	 * @param ctx the parse tree
	 */
	void enterJoinType(sparkParser.JoinTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#joinType}.
	 * @param ctx the parse tree
	 */
	void exitJoinType(sparkParser.JoinTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#joinCriteria}.
	 * @param ctx the parse tree
	 */
	void enterJoinCriteria(sparkParser.JoinCriteriaContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#joinCriteria}.
	 * @param ctx the parse tree
	 */
	void exitJoinCriteria(sparkParser.JoinCriteriaContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#sample}.
	 * @param ctx the parse tree
	 */
	void enterSample(sparkParser.SampleContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#sample}.
	 * @param ctx the parse tree
	 */
	void exitSample(sparkParser.SampleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sampleByPercentile}
	 * labeled alternative in {@link sparkParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void enterSampleByPercentile(sparkParser.SampleByPercentileContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sampleByPercentile}
	 * labeled alternative in {@link sparkParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void exitSampleByPercentile(sparkParser.SampleByPercentileContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sampleByRows}
	 * labeled alternative in {@link sparkParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void enterSampleByRows(sparkParser.SampleByRowsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sampleByRows}
	 * labeled alternative in {@link sparkParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void exitSampleByRows(sparkParser.SampleByRowsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sampleByBucket}
	 * labeled alternative in {@link sparkParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void enterSampleByBucket(sparkParser.SampleByBucketContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sampleByBucket}
	 * labeled alternative in {@link sparkParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void exitSampleByBucket(sparkParser.SampleByBucketContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sampleByBytes}
	 * labeled alternative in {@link sparkParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void enterSampleByBytes(sparkParser.SampleByBytesContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sampleByBytes}
	 * labeled alternative in {@link sparkParser#sampleMethod}.
	 * @param ctx the parse tree
	 */
	void exitSampleByBytes(sparkParser.SampleByBytesContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#identifierList}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierList(sparkParser.IdentifierListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#identifierList}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierList(sparkParser.IdentifierListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#identifierSeq}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierSeq(sparkParser.IdentifierSeqContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#identifierSeq}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierSeq(sparkParser.IdentifierSeqContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#orderedIdentifierList}.
	 * @param ctx the parse tree
	 */
	void enterOrderedIdentifierList(sparkParser.OrderedIdentifierListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#orderedIdentifierList}.
	 * @param ctx the parse tree
	 */
	void exitOrderedIdentifierList(sparkParser.OrderedIdentifierListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#orderedIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterOrderedIdentifier(sparkParser.OrderedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#orderedIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitOrderedIdentifier(sparkParser.OrderedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#identifierCommentList}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierCommentList(sparkParser.IdentifierCommentListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#identifierCommentList}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierCommentList(sparkParser.IdentifierCommentListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#identifierComment}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierComment(sparkParser.IdentifierCommentContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#identifierComment}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierComment(sparkParser.IdentifierCommentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code tableName}
	 * labeled alternative in {@link sparkParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterTableName(sparkParser.TableNameContext ctx);
	/**
	 * Exit a parse tree produced by the {@code tableName}
	 * labeled alternative in {@link sparkParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitTableName(sparkParser.TableNameContext ctx);
	/**
	 * Enter a parse tree produced by the {@code aliasedQuery}
	 * labeled alternative in {@link sparkParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterAliasedQuery(sparkParser.AliasedQueryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code aliasedQuery}
	 * labeled alternative in {@link sparkParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitAliasedQuery(sparkParser.AliasedQueryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code aliasedRelation}
	 * labeled alternative in {@link sparkParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterAliasedRelation(sparkParser.AliasedRelationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code aliasedRelation}
	 * labeled alternative in {@link sparkParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitAliasedRelation(sparkParser.AliasedRelationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code inlineTableDefault2}
	 * labeled alternative in {@link sparkParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterInlineTableDefault2(sparkParser.InlineTableDefault2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code inlineTableDefault2}
	 * labeled alternative in {@link sparkParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitInlineTableDefault2(sparkParser.InlineTableDefault2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code tableValuedFunction}
	 * labeled alternative in {@link sparkParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void enterTableValuedFunction(sparkParser.TableValuedFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code tableValuedFunction}
	 * labeled alternative in {@link sparkParser#relationPrimary}.
	 * @param ctx the parse tree
	 */
	void exitTableValuedFunction(sparkParser.TableValuedFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#inlineTable}.
	 * @param ctx the parse tree
	 */
	void enterInlineTable(sparkParser.InlineTableContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#inlineTable}.
	 * @param ctx the parse tree
	 */
	void exitInlineTable(sparkParser.InlineTableContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#functionTable}.
	 * @param ctx the parse tree
	 */
	void enterFunctionTable(sparkParser.FunctionTableContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#functionTable}.
	 * @param ctx the parse tree
	 */
	void exitFunctionTable(sparkParser.FunctionTableContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#tableAlias}.
	 * @param ctx the parse tree
	 */
	void enterTableAlias(sparkParser.TableAliasContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#tableAlias}.
	 * @param ctx the parse tree
	 */
	void exitTableAlias(sparkParser.TableAliasContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rowFormatSerde}
	 * labeled alternative in {@link sparkParser#rowFormat}.
	 * @param ctx the parse tree
	 */
	void enterRowFormatSerde(sparkParser.RowFormatSerdeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rowFormatSerde}
	 * labeled alternative in {@link sparkParser#rowFormat}.
	 * @param ctx the parse tree
	 */
	void exitRowFormatSerde(sparkParser.RowFormatSerdeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rowFormatDelimited}
	 * labeled alternative in {@link sparkParser#rowFormat}.
	 * @param ctx the parse tree
	 */
	void enterRowFormatDelimited(sparkParser.RowFormatDelimitedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rowFormatDelimited}
	 * labeled alternative in {@link sparkParser#rowFormat}.
	 * @param ctx the parse tree
	 */
	void exitRowFormatDelimited(sparkParser.RowFormatDelimitedContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#tableIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterTableIdentifier(sparkParser.TableIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#tableIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitTableIdentifier(sparkParser.TableIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#functionIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterFunctionIdentifier(sparkParser.FunctionIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#functionIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitFunctionIdentifier(sparkParser.FunctionIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#namedExpression}.
	 * @param ctx the parse tree
	 */
	void enterNamedExpression(sparkParser.NamedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#namedExpression}.
	 * @param ctx the parse tree
	 */
	void exitNamedExpression(sparkParser.NamedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#namedExpressionSeq}.
	 * @param ctx the parse tree
	 */
	void enterNamedExpressionSeq(sparkParser.NamedExpressionSeqContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#namedExpressionSeq}.
	 * @param ctx the parse tree
	 */
	void exitNamedExpressionSeq(sparkParser.NamedExpressionSeqContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(sparkParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(sparkParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link sparkParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalNot(sparkParser.LogicalNotContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link sparkParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalNot(sparkParser.LogicalNotContext ctx);
	/**
	 * Enter a parse tree produced by the {@code predicated}
	 * labeled alternative in {@link sparkParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterPredicated(sparkParser.PredicatedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code predicated}
	 * labeled alternative in {@link sparkParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitPredicated(sparkParser.PredicatedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code exists}
	 * labeled alternative in {@link sparkParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterExists(sparkParser.ExistsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code exists}
	 * labeled alternative in {@link sparkParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitExists(sparkParser.ExistsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalBinary}
	 * labeled alternative in {@link sparkParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalBinary(sparkParser.LogicalBinaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalBinary}
	 * labeled alternative in {@link sparkParser#booleanExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalBinary(sparkParser.LogicalBinaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#predicate}.
	 * @param ctx the parse tree
	 */
	void enterPredicate(sparkParser.PredicateContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#predicate}.
	 * @param ctx the parse tree
	 */
	void exitPredicate(sparkParser.PredicateContext ctx);
	/**
	 * Enter a parse tree produced by the {@code valueExpressionDefault}
	 * labeled alternative in {@link sparkParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterValueExpressionDefault(sparkParser.ValueExpressionDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code valueExpressionDefault}
	 * labeled alternative in {@link sparkParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitValueExpressionDefault(sparkParser.ValueExpressionDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code comparison}
	 * labeled alternative in {@link sparkParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterComparison(sparkParser.ComparisonContext ctx);
	/**
	 * Exit a parse tree produced by the {@code comparison}
	 * labeled alternative in {@link sparkParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitComparison(sparkParser.ComparisonContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arithmeticBinary}
	 * labeled alternative in {@link sparkParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticBinary(sparkParser.ArithmeticBinaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arithmeticBinary}
	 * labeled alternative in {@link sparkParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticBinary(sparkParser.ArithmeticBinaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arithmeticUnary}
	 * labeled alternative in {@link sparkParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticUnary(sparkParser.ArithmeticUnaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arithmeticUnary}
	 * labeled alternative in {@link sparkParser#valueExpression}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticUnary(sparkParser.ArithmeticUnaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code struct}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterStruct(sparkParser.StructContext ctx);
	/**
	 * Exit a parse tree produced by the {@code struct}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitStruct(sparkParser.StructContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dereference}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterDereference(sparkParser.DereferenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dereference}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitDereference(sparkParser.DereferenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code simpleCase}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSimpleCase(sparkParser.SimpleCaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code simpleCase}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSimpleCase(sparkParser.SimpleCaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code columnReference}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterColumnReference(sparkParser.ColumnReferenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code columnReference}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitColumnReference(sparkParser.ColumnReferenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code rowConstructor}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterRowConstructor(sparkParser.RowConstructorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code rowConstructor}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitRowConstructor(sparkParser.RowConstructorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code last}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterLast(sparkParser.LastContext ctx);
	/**
	 * Exit a parse tree produced by the {@code last}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitLast(sparkParser.LastContext ctx);
	/**
	 * Enter a parse tree produced by the {@code star}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterStar(sparkParser.StarContext ctx);
	/**
	 * Exit a parse tree produced by the {@code star}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitStar(sparkParser.StarContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subscript}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSubscript(sparkParser.SubscriptContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subscript}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSubscript(sparkParser.SubscriptContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subqueryExpression}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSubqueryExpression(sparkParser.SubqueryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subqueryExpression}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSubqueryExpression(sparkParser.SubqueryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cast}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterCast(sparkParser.CastContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cast}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitCast(sparkParser.CastContext ctx);
	/**
	 * Enter a parse tree produced by the {@code constantDefault}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterConstantDefault(sparkParser.ConstantDefaultContext ctx);
	/**
	 * Exit a parse tree produced by the {@code constantDefault}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitConstantDefault(sparkParser.ConstantDefaultContext ctx);
	/**
	 * Enter a parse tree produced by the {@code lambda}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterLambda(sparkParser.LambdaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code lambda}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitLambda(sparkParser.LambdaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parenthesizedExpression}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedExpression(sparkParser.ParenthesizedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parenthesizedExpression}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedExpression(sparkParser.ParenthesizedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code extract}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterExtract(sparkParser.ExtractContext ctx);
	/**
	 * Exit a parse tree produced by the {@code extract}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitExtract(sparkParser.ExtractContext ctx);
	/**
	 * Enter a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(sparkParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(sparkParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code searchedCase}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterSearchedCase(sparkParser.SearchedCaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code searchedCase}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitSearchedCase(sparkParser.SearchedCaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code position}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterPosition(sparkParser.PositionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code position}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitPosition(sparkParser.PositionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code first}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterFirst(sparkParser.FirstContext ctx);
	/**
	 * Exit a parse tree produced by the {@code first}
	 * labeled alternative in {@link sparkParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitFirst(sparkParser.FirstContext ctx);
	/**
	 * Enter a parse tree produced by the {@code nullLiteral}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterNullLiteral(sparkParser.NullLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code nullLiteral}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitNullLiteral(sparkParser.NullLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code intervalLiteral}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterIntervalLiteral(sparkParser.IntervalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code intervalLiteral}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitIntervalLiteral(sparkParser.IntervalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code typeConstructor}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterTypeConstructor(sparkParser.TypeConstructorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code typeConstructor}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitTypeConstructor(sparkParser.TypeConstructorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code numericLiteral}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterNumericLiteral(sparkParser.NumericLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code numericLiteral}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitNumericLiteral(sparkParser.NumericLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code booleanLiteral}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterBooleanLiteral(sparkParser.BooleanLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code booleanLiteral}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitBooleanLiteral(sparkParser.BooleanLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code stringLiteral}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterStringLiteral(sparkParser.StringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code stringLiteral}
	 * labeled alternative in {@link sparkParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitStringLiteral(sparkParser.StringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#comparisonOperator}.
	 * @param ctx the parse tree
	 */
	void enterComparisonOperator(sparkParser.ComparisonOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#comparisonOperator}.
	 * @param ctx the parse tree
	 */
	void exitComparisonOperator(sparkParser.ComparisonOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#arithmeticOperator}.
	 * @param ctx the parse tree
	 */
	void enterArithmeticOperator(sparkParser.ArithmeticOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#arithmeticOperator}.
	 * @param ctx the parse tree
	 */
	void exitArithmeticOperator(sparkParser.ArithmeticOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#predicateOperator}.
	 * @param ctx the parse tree
	 */
	void enterPredicateOperator(sparkParser.PredicateOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#predicateOperator}.
	 * @param ctx the parse tree
	 */
	void exitPredicateOperator(sparkParser.PredicateOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#booleanValue}.
	 * @param ctx the parse tree
	 */
	void enterBooleanValue(sparkParser.BooleanValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#booleanValue}.
	 * @param ctx the parse tree
	 */
	void exitBooleanValue(sparkParser.BooleanValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#interval}.
	 * @param ctx the parse tree
	 */
	void enterInterval(sparkParser.IntervalContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#interval}.
	 * @param ctx the parse tree
	 */
	void exitInterval(sparkParser.IntervalContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#intervalField}.
	 * @param ctx the parse tree
	 */
	void enterIntervalField(sparkParser.IntervalFieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#intervalField}.
	 * @param ctx the parse tree
	 */
	void exitIntervalField(sparkParser.IntervalFieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#intervalValue}.
	 * @param ctx the parse tree
	 */
	void enterIntervalValue(sparkParser.IntervalValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#intervalValue}.
	 * @param ctx the parse tree
	 */
	void exitIntervalValue(sparkParser.IntervalValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#colPosition}.
	 * @param ctx the parse tree
	 */
	void enterColPosition(sparkParser.ColPositionContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#colPosition}.
	 * @param ctx the parse tree
	 */
	void exitColPosition(sparkParser.ColPositionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code complexDataType}
	 * labeled alternative in {@link sparkParser#dataType}.
	 * @param ctx the parse tree
	 */
	void enterComplexDataType(sparkParser.ComplexDataTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code complexDataType}
	 * labeled alternative in {@link sparkParser#dataType}.
	 * @param ctx the parse tree
	 */
	void exitComplexDataType(sparkParser.ComplexDataTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code primitiveDataType}
	 * labeled alternative in {@link sparkParser#dataType}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveDataType(sparkParser.PrimitiveDataTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code primitiveDataType}
	 * labeled alternative in {@link sparkParser#dataType}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveDataType(sparkParser.PrimitiveDataTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#colTypeList}.
	 * @param ctx the parse tree
	 */
	void enterColTypeList(sparkParser.ColTypeListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#colTypeList}.
	 * @param ctx the parse tree
	 */
	void exitColTypeList(sparkParser.ColTypeListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#colType}.
	 * @param ctx the parse tree
	 */
	void enterColType(sparkParser.ColTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#colType}.
	 * @param ctx the parse tree
	 */
	void exitColType(sparkParser.ColTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#complexColTypeList}.
	 * @param ctx the parse tree
	 */
	void enterComplexColTypeList(sparkParser.ComplexColTypeListContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#complexColTypeList}.
	 * @param ctx the parse tree
	 */
	void exitComplexColTypeList(sparkParser.ComplexColTypeListContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#complexColType}.
	 * @param ctx the parse tree
	 */
	void enterComplexColType(sparkParser.ComplexColTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#complexColType}.
	 * @param ctx the parse tree
	 */
	void exitComplexColType(sparkParser.ComplexColTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#whenClause}.
	 * @param ctx the parse tree
	 */
	void enterWhenClause(sparkParser.WhenClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#whenClause}.
	 * @param ctx the parse tree
	 */
	void exitWhenClause(sparkParser.WhenClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#windows}.
	 * @param ctx the parse tree
	 */
	void enterWindows(sparkParser.WindowsContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#windows}.
	 * @param ctx the parse tree
	 */
	void exitWindows(sparkParser.WindowsContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#namedWindow}.
	 * @param ctx the parse tree
	 */
	void enterNamedWindow(sparkParser.NamedWindowContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#namedWindow}.
	 * @param ctx the parse tree
	 */
	void exitNamedWindow(sparkParser.NamedWindowContext ctx);
	/**
	 * Enter a parse tree produced by the {@code windowRef}
	 * labeled alternative in {@link sparkParser#windowSpec}.
	 * @param ctx the parse tree
	 */
	void enterWindowRef(sparkParser.WindowRefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code windowRef}
	 * labeled alternative in {@link sparkParser#windowSpec}.
	 * @param ctx the parse tree
	 */
	void exitWindowRef(sparkParser.WindowRefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code windowDef}
	 * labeled alternative in {@link sparkParser#windowSpec}.
	 * @param ctx the parse tree
	 */
	void enterWindowDef(sparkParser.WindowDefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code windowDef}
	 * labeled alternative in {@link sparkParser#windowSpec}.
	 * @param ctx the parse tree
	 */
	void exitWindowDef(sparkParser.WindowDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#windowFrame}.
	 * @param ctx the parse tree
	 */
	void enterWindowFrame(sparkParser.WindowFrameContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#windowFrame}.
	 * @param ctx the parse tree
	 */
	void exitWindowFrame(sparkParser.WindowFrameContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void enterFrameBound(sparkParser.FrameBoundContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#frameBound}.
	 * @param ctx the parse tree
	 */
	void exitFrameBound(sparkParser.FrameBoundContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void enterQualifiedName(sparkParser.QualifiedNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void exitQualifiedName(sparkParser.QualifiedNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(sparkParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(sparkParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unquotedIdentifier}
	 * labeled alternative in {@link sparkParser#strictIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterUnquotedIdentifier(sparkParser.UnquotedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unquotedIdentifier}
	 * labeled alternative in {@link sparkParser#strictIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitUnquotedIdentifier(sparkParser.UnquotedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code quotedIdentifierAlternative}
	 * labeled alternative in {@link sparkParser#strictIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterQuotedIdentifierAlternative(sparkParser.QuotedIdentifierAlternativeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quotedIdentifierAlternative}
	 * labeled alternative in {@link sparkParser#strictIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitQuotedIdentifierAlternative(sparkParser.QuotedIdentifierAlternativeContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#quotedIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterQuotedIdentifier(sparkParser.QuotedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#quotedIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitQuotedIdentifier(sparkParser.QuotedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by the {@code decimalLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void enterDecimalLiteral(sparkParser.DecimalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code decimalLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void exitDecimalLiteral(sparkParser.DecimalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code integerLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void enterIntegerLiteral(sparkParser.IntegerLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code integerLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void exitIntegerLiteral(sparkParser.IntegerLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code bigIntLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void enterBigIntLiteral(sparkParser.BigIntLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code bigIntLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void exitBigIntLiteral(sparkParser.BigIntLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code smallIntLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void enterSmallIntLiteral(sparkParser.SmallIntLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code smallIntLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void exitSmallIntLiteral(sparkParser.SmallIntLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code tinyIntLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void enterTinyIntLiteral(sparkParser.TinyIntLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code tinyIntLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void exitTinyIntLiteral(sparkParser.TinyIntLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code doubleLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void enterDoubleLiteral(sparkParser.DoubleLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code doubleLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void exitDoubleLiteral(sparkParser.DoubleLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code bigDecimalLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void enterBigDecimalLiteral(sparkParser.BigDecimalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code bigDecimalLiteral}
	 * labeled alternative in {@link sparkParser#number}.
	 * @param ctx the parse tree
	 */
	void exitBigDecimalLiteral(sparkParser.BigDecimalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link sparkParser#nonReserved}.
	 * @param ctx the parse tree
	 */
	void enterNonReserved(sparkParser.NonReservedContext ctx);
	/**
	 * Exit a parse tree produced by {@link sparkParser#nonReserved}.
	 * @param ctx the parse tree
	 */
	void exitNonReserved(sparkParser.NonReservedContext ctx);
}