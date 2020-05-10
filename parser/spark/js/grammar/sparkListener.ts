// Generated from ./grammar/spark.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TableNameContext } from "./sparkParser";
import { AliasedQueryContext } from "./sparkParser";
import { AliasedRelationContext } from "./sparkParser";
import { InlineTableDefault2Context } from "./sparkParser";
import { TableValuedFunctionContext } from "./sparkParser";
import { DecimalLiteralContext } from "./sparkParser";
import { IntegerLiteralContext } from "./sparkParser";
import { BigIntLiteralContext } from "./sparkParser";
import { SmallIntLiteralContext } from "./sparkParser";
import { TinyIntLiteralContext } from "./sparkParser";
import { DoubleLiteralContext } from "./sparkParser";
import { BigDecimalLiteralContext } from "./sparkParser";
import { QueryTermDefaultContext } from "./sparkParser";
import { SetOperationContext } from "./sparkParser";
import { InsertOverwriteTableContext } from "./sparkParser";
import { InsertIntoTableContext } from "./sparkParser";
import { InsertOverwriteHiveDirContext } from "./sparkParser";
import { InsertOverwriteDirContext } from "./sparkParser";
import { ValueExpressionDefaultContext } from "./sparkParser";
import { ArithmeticUnaryContext } from "./sparkParser";
import { ArithmeticBinaryContext } from "./sparkParser";
import { ComparisonContext } from "./sparkParser";
import { QueryPrimaryDefaultContext } from "./sparkParser";
import { TableContext } from "./sparkParser";
import { InlineTableDefault1Context } from "./sparkParser";
import { SubqueryContext } from "./sparkParser";
import { SearchedCaseContext } from "./sparkParser";
import { SimpleCaseContext } from "./sparkParser";
import { CastContext } from "./sparkParser";
import { StructContext } from "./sparkParser";
import { FirstContext } from "./sparkParser";
import { LastContext } from "./sparkParser";
import { PositionContext } from "./sparkParser";
import { ConstantDefaultContext } from "./sparkParser";
import { StarContext } from "./sparkParser";
import { RowConstructorContext } from "./sparkParser";
import { SubqueryExpressionContext } from "./sparkParser";
import { FunctionCallContext } from "./sparkParser";
import { LambdaContext } from "./sparkParser";
import { SubscriptContext } from "./sparkParser";
import { ColumnReferenceContext } from "./sparkParser";
import { DereferenceContext } from "./sparkParser";
import { ParenthesizedExpressionContext } from "./sparkParser";
import { ExtractContext } from "./sparkParser";
import { UnquotedIdentifierContext } from "./sparkParser";
import { QuotedIdentifierAlternativeContext } from "./sparkParser";
import { TableFileFormatContext } from "./sparkParser";
import { GenericFileFormatContext } from "./sparkParser";
import { SampleByPercentileContext } from "./sparkParser";
import { SampleByRowsContext } from "./sparkParser";
import { SampleByBucketContext } from "./sparkParser";
import { SampleByBytesContext } from "./sparkParser";
import { NullLiteralContext } from "./sparkParser";
import { IntervalLiteralContext } from "./sparkParser";
import { TypeConstructorContext } from "./sparkParser";
import { NumericLiteralContext } from "./sparkParser";
import { BooleanLiteralContext } from "./sparkParser";
import { StringLiteralContext } from "./sparkParser";
import { RowFormatSerdeContext } from "./sparkParser";
import { RowFormatDelimitedContext } from "./sparkParser";
import { ComplexDataTypeContext } from "./sparkParser";
import { PrimitiveDataTypeContext } from "./sparkParser";
import { WindowRefContext } from "./sparkParser";
import { WindowDefContext } from "./sparkParser";
import { StatementDefaultContext } from "./sparkParser";
import { UseContext } from "./sparkParser";
import { CreateDatabaseContext } from "./sparkParser";
import { SetDatabasePropertiesContext } from "./sparkParser";
import { DropDatabaseContext } from "./sparkParser";
import { CreateTableContext } from "./sparkParser";
import { CreateHiveTableContext } from "./sparkParser";
import { CreateTableLikeContext } from "./sparkParser";
import { AnalyzeContext } from "./sparkParser";
import { AddTableColumnsContext } from "./sparkParser";
import { RenameTableContext } from "./sparkParser";
import { SetTablePropertiesContext } from "./sparkParser";
import { UnsetTablePropertiesContext } from "./sparkParser";
import { ChangeColumnContext } from "./sparkParser";
import { SetTableSerDeContext } from "./sparkParser";
import { AddTablePartitionContext } from "./sparkParser";
import { RenameTablePartitionContext } from "./sparkParser";
import { DropTablePartitionsContext } from "./sparkParser";
import { SetTableLocationContext } from "./sparkParser";
import { RecoverPartitionsContext } from "./sparkParser";
import { DropTableContext } from "./sparkParser";
import { CreateViewContext } from "./sparkParser";
import { CreateTempViewUsingContext } from "./sparkParser";
import { AlterViewQueryContext } from "./sparkParser";
import { CreateFunctionContext } from "./sparkParser";
import { DropFunctionContext } from "./sparkParser";
import { ExplainContext } from "./sparkParser";
import { ShowTablesContext } from "./sparkParser";
import { ShowTableContext } from "./sparkParser";
import { ShowDatabasesContext } from "./sparkParser";
import { ShowTblPropertiesContext } from "./sparkParser";
import { ShowColumnsContext } from "./sparkParser";
import { ShowPartitionsContext } from "./sparkParser";
import { ShowFunctionsContext } from "./sparkParser";
import { ShowCreateTableContext } from "./sparkParser";
import { DescribeFunctionContext } from "./sparkParser";
import { DescribeDatabaseContext } from "./sparkParser";
import { DescribeTableContext } from "./sparkParser";
import { RefreshTableContext } from "./sparkParser";
import { RefreshResourceContext } from "./sparkParser";
import { CacheTableContext } from "./sparkParser";
import { UncacheTableContext } from "./sparkParser";
import { ClearCacheContext } from "./sparkParser";
import { LoadDataContext } from "./sparkParser";
import { TruncateTableContext } from "./sparkParser";
import { RepairTableContext } from "./sparkParser";
import { ManageResourceContext } from "./sparkParser";
import { FailNativeCommandContext } from "./sparkParser";
import { SetConfigurationContext } from "./sparkParser";
import { ResetConfigurationContext } from "./sparkParser";
import { LogicalNotContext } from "./sparkParser";
import { ExistsContext } from "./sparkParser";
import { PredicatedContext } from "./sparkParser";
import { LogicalBinaryContext } from "./sparkParser";
import { SingleInsertQueryContext } from "./sparkParser";
import { MultiInsertQueryContext } from "./sparkParser";
import { SingleStatementContext } from "./sparkParser";
import { SingleExpressionContext } from "./sparkParser";
import { SingleTableIdentifierContext } from "./sparkParser";
import { SingleFunctionIdentifierContext } from "./sparkParser";
import { SingleDataTypeContext } from "./sparkParser";
import { SingleTableSchemaContext } from "./sparkParser";
import { StatementContext } from "./sparkParser";
import { UnsupportedHiveNativeCommandsContext } from "./sparkParser";
import { CreateTableHeaderContext } from "./sparkParser";
import { BucketSpecContext } from "./sparkParser";
import { SkewSpecContext } from "./sparkParser";
import { LocationSpecContext } from "./sparkParser";
import { QueryContext } from "./sparkParser";
import { InsertIntoContext } from "./sparkParser";
import { PartitionSpecLocationContext } from "./sparkParser";
import { PartitionSpecContext } from "./sparkParser";
import { PartitionValContext } from "./sparkParser";
import { DescribeFuncNameContext } from "./sparkParser";
import { DescribeColNameContext } from "./sparkParser";
import { CtesContext } from "./sparkParser";
import { NamedQueryContext } from "./sparkParser";
import { TableProviderContext } from "./sparkParser";
import { TablePropertyListContext } from "./sparkParser";
import { TablePropertyContext } from "./sparkParser";
import { TablePropertyKeyContext } from "./sparkParser";
import { TablePropertyValueContext } from "./sparkParser";
import { ConstantListContext } from "./sparkParser";
import { NestedConstantListContext } from "./sparkParser";
import { CreateFileFormatContext } from "./sparkParser";
import { FileFormatContext } from "./sparkParser";
import { StorageHandlerContext } from "./sparkParser";
import { ResourceContext } from "./sparkParser";
import { QueryNoWithContext } from "./sparkParser";
import { QueryOrganizationContext } from "./sparkParser";
import { MultiInsertQueryBodyContext } from "./sparkParser";
import { QueryTermContext } from "./sparkParser";
import { QueryPrimaryContext } from "./sparkParser";
import { SortItemContext } from "./sparkParser";
import { QuerySpecificationContext } from "./sparkParser";
import { HintContext } from "./sparkParser";
import { HintStatementContext } from "./sparkParser";
import { FromClauseContext } from "./sparkParser";
import { AggregationContext } from "./sparkParser";
import { GroupingSetContext } from "./sparkParser";
import { PivotClauseContext } from "./sparkParser";
import { PivotColumnContext } from "./sparkParser";
import { PivotValueContext } from "./sparkParser";
import { LateralViewContext } from "./sparkParser";
import { SetQuantifierContext } from "./sparkParser";
import { RelationContext } from "./sparkParser";
import { JoinRelationContext } from "./sparkParser";
import { JoinTypeContext } from "./sparkParser";
import { JoinCriteriaContext } from "./sparkParser";
import { SampleContext } from "./sparkParser";
import { SampleMethodContext } from "./sparkParser";
import { IdentifierListContext } from "./sparkParser";
import { IdentifierSeqContext } from "./sparkParser";
import { OrderedIdentifierListContext } from "./sparkParser";
import { OrderedIdentifierContext } from "./sparkParser";
import { IdentifierCommentListContext } from "./sparkParser";
import { IdentifierCommentContext } from "./sparkParser";
import { RelationPrimaryContext } from "./sparkParser";
import { InlineTableContext } from "./sparkParser";
import { FunctionTableContext } from "./sparkParser";
import { TableAliasContext } from "./sparkParser";
import { RowFormatContext } from "./sparkParser";
import { TableIdentifierContext } from "./sparkParser";
import { FunctionIdentifierContext } from "./sparkParser";
import { NamedExpressionContext } from "./sparkParser";
import { NamedExpressionSeqContext } from "./sparkParser";
import { ExpressionContext } from "./sparkParser";
import { BooleanExpressionContext } from "./sparkParser";
import { PredicateContext } from "./sparkParser";
import { ValueExpressionContext } from "./sparkParser";
import { PrimaryExpressionContext } from "./sparkParser";
import { ConstantContext } from "./sparkParser";
import { ComparisonOperatorContext } from "./sparkParser";
import { ArithmeticOperatorContext } from "./sparkParser";
import { PredicateOperatorContext } from "./sparkParser";
import { BooleanValueContext } from "./sparkParser";
import { IntervalContext } from "./sparkParser";
import { IntervalFieldContext } from "./sparkParser";
import { IntervalValueContext } from "./sparkParser";
import { ColPositionContext } from "./sparkParser";
import { DataTypeContext } from "./sparkParser";
import { ColTypeListContext } from "./sparkParser";
import { ColTypeContext } from "./sparkParser";
import { ComplexColTypeListContext } from "./sparkParser";
import { ComplexColTypeContext } from "./sparkParser";
import { WhenClauseContext } from "./sparkParser";
import { WindowsContext } from "./sparkParser";
import { NamedWindowContext } from "./sparkParser";
import { WindowSpecContext } from "./sparkParser";
import { WindowFrameContext } from "./sparkParser";
import { FrameBoundContext } from "./sparkParser";
import { QualifiedNameContext } from "./sparkParser";
import { IdentifierContext } from "./sparkParser";
import { StrictIdentifierContext } from "./sparkParser";
import { QuotedIdentifierContext } from "./sparkParser";
import { NumberContext } from "./sparkParser";
import { NonReservedContext } from "./sparkParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `sparkParser`.
 */
export interface sparkListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `tableName`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by the `tableName`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;

	/**
	 * Enter a parse tree produced by the `aliasedQuery`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterAliasedQuery?: (ctx: AliasedQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `aliasedQuery`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitAliasedQuery?: (ctx: AliasedQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `aliasedRelation`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
	/**
	 * Exit a parse tree produced by the `aliasedRelation`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitAliasedRelation?: (ctx: AliasedRelationContext) => void;

	/**
	 * Enter a parse tree produced by the `inlineTableDefault2`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterInlineTableDefault2?: (ctx: InlineTableDefault2Context) => void;
	/**
	 * Exit a parse tree produced by the `inlineTableDefault2`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitInlineTableDefault2?: (ctx: InlineTableDefault2Context) => void;

	/**
	 * Enter a parse tree produced by the `tableValuedFunction`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableValuedFunction?: (ctx: TableValuedFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `tableValuedFunction`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableValuedFunction?: (ctx: TableValuedFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `integerLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `bigIntLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	enterBigIntLiteral?: (ctx: BigIntLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `bigIntLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	exitBigIntLiteral?: (ctx: BigIntLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `smallIntLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	enterSmallIntLiteral?: (ctx: SmallIntLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `smallIntLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	exitSmallIntLiteral?: (ctx: SmallIntLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `tinyIntLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	enterTinyIntLiteral?: (ctx: TinyIntLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `tinyIntLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	exitTinyIntLiteral?: (ctx: TinyIntLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `bigDecimalLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	enterBigDecimalLiteral?: (ctx: BigDecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `bigDecimalLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	exitBigDecimalLiteral?: (ctx: BigDecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `sparkParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `sparkParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `setOperation`
	 * labeled alternative in `sparkParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterSetOperation?: (ctx: SetOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `setOperation`
	 * labeled alternative in `sparkParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitSetOperation?: (ctx: SetOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `insertOverwriteTable`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 */
	enterInsertOverwriteTable?: (ctx: InsertOverwriteTableContext) => void;
	/**
	 * Exit a parse tree produced by the `insertOverwriteTable`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 */
	exitInsertOverwriteTable?: (ctx: InsertOverwriteTableContext) => void;

	/**
	 * Enter a parse tree produced by the `insertIntoTable`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 */
	enterInsertIntoTable?: (ctx: InsertIntoTableContext) => void;
	/**
	 * Exit a parse tree produced by the `insertIntoTable`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 */
	exitInsertIntoTable?: (ctx: InsertIntoTableContext) => void;

	/**
	 * Enter a parse tree produced by the `insertOverwriteHiveDir`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 */
	enterInsertOverwriteHiveDir?: (ctx: InsertOverwriteHiveDirContext) => void;
	/**
	 * Exit a parse tree produced by the `insertOverwriteHiveDir`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 */
	exitInsertOverwriteHiveDir?: (ctx: InsertOverwriteHiveDirContext) => void;

	/**
	 * Enter a parse tree produced by the `insertOverwriteDir`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 */
	enterInsertOverwriteDir?: (ctx: InsertOverwriteDirContext) => void;
	/**
	 * Exit a parse tree produced by the `insertOverwriteDir`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 */
	exitInsertOverwriteDir?: (ctx: InsertOverwriteDirContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `table`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by the `table`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by the `inlineTableDefault1`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterInlineTableDefault1?: (ctx: InlineTableDefault1Context) => void;
	/**
	 * Exit a parse tree produced by the `inlineTableDefault1`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitInlineTableDefault1?: (ctx: InlineTableDefault1Context) => void;

	/**
	 * Enter a parse tree produced by the `subquery`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `subquery`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;

	/**
	 * Enter a parse tree produced by the `searchedCase`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCase`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleCase`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCase`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `cast`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by the `cast`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by the `struct`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStruct?: (ctx: StructContext) => void;
	/**
	 * Exit a parse tree produced by the `struct`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStruct?: (ctx: StructContext) => void;

	/**
	 * Enter a parse tree produced by the `first`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFirst?: (ctx: FirstContext) => void;
	/**
	 * Exit a parse tree produced by the `first`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFirst?: (ctx: FirstContext) => void;

	/**
	 * Enter a parse tree produced by the `last`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLast?: (ctx: LastContext) => void;
	/**
	 * Exit a parse tree produced by the `last`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLast?: (ctx: LastContext) => void;

	/**
	 * Enter a parse tree produced by the `position`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by the `position`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by the `constantDefault`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantDefault?: (ctx: ConstantDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `constantDefault`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantDefault?: (ctx: ConstantDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `star`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStar?: (ctx: StarContext) => void;
	/**
	 * Exit a parse tree produced by the `star`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStar?: (ctx: StarContext) => void;

	/**
	 * Enter a parse tree produced by the `rowConstructor`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterRowConstructor?: (ctx: RowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitRowConstructor?: (ctx: RowConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `lambda`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by the `lambda`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by the `subscript`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by the `subscript`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `dereference`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `dereference`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDereference?: (ctx: DereferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `extract`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExtract?: (ctx: ExtractContext) => void;
	/**
	 * Exit a parse tree produced by the `extract`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExtract?: (ctx: ExtractContext) => void;

	/**
	 * Enter a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `sparkParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `sparkParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `sparkParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `sparkParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by the `tableFileFormat`
	 * labeled alternative in `sparkParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	enterTableFileFormat?: (ctx: TableFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by the `tableFileFormat`
	 * labeled alternative in `sparkParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	exitTableFileFormat?: (ctx: TableFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by the `genericFileFormat`
	 * labeled alternative in `sparkParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	enterGenericFileFormat?: (ctx: GenericFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by the `genericFileFormat`
	 * labeled alternative in `sparkParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	exitGenericFileFormat?: (ctx: GenericFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by the `sampleByPercentile`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleByPercentile?: (ctx: SampleByPercentileContext) => void;
	/**
	 * Exit a parse tree produced by the `sampleByPercentile`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleByPercentile?: (ctx: SampleByPercentileContext) => void;

	/**
	 * Enter a parse tree produced by the `sampleByRows`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleByRows?: (ctx: SampleByRowsContext) => void;
	/**
	 * Exit a parse tree produced by the `sampleByRows`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleByRows?: (ctx: SampleByRowsContext) => void;

	/**
	 * Enter a parse tree produced by the `sampleByBucket`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleByBucket?: (ctx: SampleByBucketContext) => void;
	/**
	 * Exit a parse tree produced by the `sampleByBucket`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleByBucket?: (ctx: SampleByBucketContext) => void;

	/**
	 * Enter a parse tree produced by the `sampleByBytes`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleByBytes?: (ctx: SampleByBytesContext) => void;
	/**
	 * Exit a parse tree produced by the `sampleByBytes`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleByBytes?: (ctx: SampleByBytesContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `typeConstructor`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	exitTypeConstructor?: (ctx: TypeConstructorContext) => void;

	/**
	 * Enter a parse tree produced by the `numericLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `rowFormatSerde`
	 * labeled alternative in `sparkParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	enterRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;
	/**
	 * Exit a parse tree produced by the `rowFormatSerde`
	 * labeled alternative in `sparkParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	exitRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;

	/**
	 * Enter a parse tree produced by the `rowFormatDelimited`
	 * labeled alternative in `sparkParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	enterRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;
	/**
	 * Exit a parse tree produced by the `rowFormatDelimited`
	 * labeled alternative in `sparkParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	exitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;

	/**
	 * Enter a parse tree produced by the `complexDataType`
	 * labeled alternative in `sparkParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterComplexDataType?: (ctx: ComplexDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `complexDataType`
	 * labeled alternative in `sparkParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitComplexDataType?: (ctx: ComplexDataTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `primitiveDataType`
	 * labeled alternative in `sparkParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `primitiveDataType`
	 * labeled alternative in `sparkParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `windowRef`
	 * labeled alternative in `sparkParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	enterWindowRef?: (ctx: WindowRefContext) => void;
	/**
	 * Exit a parse tree produced by the `windowRef`
	 * labeled alternative in `sparkParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	exitWindowRef?: (ctx: WindowRefContext) => void;

	/**
	 * Enter a parse tree produced by the `windowDef`
	 * labeled alternative in `sparkParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	enterWindowDef?: (ctx: WindowDefContext) => void;
	/**
	 * Exit a parse tree produced by the `windowDef`
	 * labeled alternative in `sparkParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	exitWindowDef?: (ctx: WindowDefContext) => void;

	/**
	 * Enter a parse tree produced by the `statementDefault`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatementDefault?: (ctx: StatementDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `statementDefault`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatementDefault?: (ctx: StatementDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `use`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUse?: (ctx: UseContext) => void;
	/**
	 * Exit a parse tree produced by the `use`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUse?: (ctx: UseContext) => void;

	/**
	 * Enter a parse tree produced by the `createDatabase`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by the `createDatabase`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by the `setDatabaseProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetDatabaseProperties?: (ctx: SetDatabasePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `setDatabaseProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetDatabaseProperties?: (ctx: SetDatabasePropertiesContext) => void;

	/**
	 * Enter a parse tree produced by the `dropDatabase`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropDatabase?: (ctx: DropDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by the `dropDatabase`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropDatabase?: (ctx: DropDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by the `createTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `createTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `createHiveTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateHiveTable?: (ctx: CreateHiveTableContext) => void;
	/**
	 * Exit a parse tree produced by the `createHiveTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateHiveTable?: (ctx: CreateHiveTableContext) => void;

	/**
	 * Enter a parse tree produced by the `createTableLike`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTableLike?: (ctx: CreateTableLikeContext) => void;
	/**
	 * Exit a parse tree produced by the `createTableLike`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTableLike?: (ctx: CreateTableLikeContext) => void;

	/**
	 * Enter a parse tree produced by the `analyze`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAnalyze?: (ctx: AnalyzeContext) => void;
	/**
	 * Exit a parse tree produced by the `analyze`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAnalyze?: (ctx: AnalyzeContext) => void;

	/**
	 * Enter a parse tree produced by the `addTableColumns`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAddTableColumns?: (ctx: AddTableColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `addTableColumns`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAddTableColumns?: (ctx: AddTableColumnsContext) => void;

	/**
	 * Enter a parse tree produced by the `renameTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameTable?: (ctx: RenameTableContext) => void;
	/**
	 * Exit a parse tree produced by the `renameTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameTable?: (ctx: RenameTableContext) => void;

	/**
	 * Enter a parse tree produced by the `setTableProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `setTableProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetTableProperties?: (ctx: SetTablePropertiesContext) => void;

	/**
	 * Enter a parse tree produced by the `unsetTableProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `unsetTableProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => void;

	/**
	 * Enter a parse tree produced by the `changeColumn`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterChangeColumn?: (ctx: ChangeColumnContext) => void;
	/**
	 * Exit a parse tree produced by the `changeColumn`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitChangeColumn?: (ctx: ChangeColumnContext) => void;

	/**
	 * Enter a parse tree produced by the `setTableSerDe`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetTableSerDe?: (ctx: SetTableSerDeContext) => void;
	/**
	 * Exit a parse tree produced by the `setTableSerDe`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetTableSerDe?: (ctx: SetTableSerDeContext) => void;

	/**
	 * Enter a parse tree produced by the `addTablePartition`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAddTablePartition?: (ctx: AddTablePartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `addTablePartition`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAddTablePartition?: (ctx: AddTablePartitionContext) => void;

	/**
	 * Enter a parse tree produced by the `renameTablePartition`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRenameTablePartition?: (ctx: RenameTablePartitionContext) => void;
	/**
	 * Exit a parse tree produced by the `renameTablePartition`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRenameTablePartition?: (ctx: RenameTablePartitionContext) => void;

	/**
	 * Enter a parse tree produced by the `dropTablePartitions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropTablePartitions?: (ctx: DropTablePartitionsContext) => void;
	/**
	 * Exit a parse tree produced by the `dropTablePartitions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropTablePartitions?: (ctx: DropTablePartitionsContext) => void;

	/**
	 * Enter a parse tree produced by the `setTableLocation`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetTableLocation?: (ctx: SetTableLocationContext) => void;
	/**
	 * Exit a parse tree produced by the `setTableLocation`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetTableLocation?: (ctx: SetTableLocationContext) => void;

	/**
	 * Enter a parse tree produced by the `recoverPartitions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRecoverPartitions?: (ctx: RecoverPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by the `recoverPartitions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRecoverPartitions?: (ctx: RecoverPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by the `dropTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by the `dropTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;

	/**
	 * Enter a parse tree produced by the `createView`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Exit a parse tree produced by the `createView`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateView?: (ctx: CreateViewContext) => void;

	/**
	 * Enter a parse tree produced by the `createTempViewUsing`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => void;
	/**
	 * Exit a parse tree produced by the `createTempViewUsing`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => void;

	/**
	 * Enter a parse tree produced by the `alterViewQuery`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAlterViewQuery?: (ctx: AlterViewQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `alterViewQuery`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAlterViewQuery?: (ctx: AlterViewQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `createFunction`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateFunction?: (ctx: CreateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `createFunction`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateFunction?: (ctx: CreateFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `dropFunction`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropFunction?: (ctx: DropFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `dropFunction`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropFunction?: (ctx: DropFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `explain`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExplain?: (ctx: ExplainContext) => void;
	/**
	 * Exit a parse tree produced by the `explain`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExplain?: (ctx: ExplainContext) => void;

	/**
	 * Enter a parse tree produced by the `showTables`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowTables?: (ctx: ShowTablesContext) => void;
	/**
	 * Exit a parse tree produced by the `showTables`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowTables?: (ctx: ShowTablesContext) => void;

	/**
	 * Enter a parse tree produced by the `showTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowTable?: (ctx: ShowTableContext) => void;
	/**
	 * Exit a parse tree produced by the `showTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowTable?: (ctx: ShowTableContext) => void;

	/**
	 * Enter a parse tree produced by the `showDatabases`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowDatabases?: (ctx: ShowDatabasesContext) => void;
	/**
	 * Exit a parse tree produced by the `showDatabases`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowDatabases?: (ctx: ShowDatabasesContext) => void;

	/**
	 * Enter a parse tree produced by the `showTblProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowTblProperties?: (ctx: ShowTblPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `showTblProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowTblProperties?: (ctx: ShowTblPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by the `showColumns`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowColumns?: (ctx: ShowColumnsContext) => void;
	/**
	 * Exit a parse tree produced by the `showColumns`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowColumns?: (ctx: ShowColumnsContext) => void;

	/**
	 * Enter a parse tree produced by the `showPartitions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowPartitions?: (ctx: ShowPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by the `showPartitions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowPartitions?: (ctx: ShowPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by the `showFunctions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `showFunctions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowFunctions?: (ctx: ShowFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `showCreateTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `describeFunction`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDescribeFunction?: (ctx: DescribeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `describeFunction`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDescribeFunction?: (ctx: DescribeFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `describeDatabase`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDescribeDatabase?: (ctx: DescribeDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by the `describeDatabase`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDescribeDatabase?: (ctx: DescribeDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by the `describeTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDescribeTable?: (ctx: DescribeTableContext) => void;
	/**
	 * Exit a parse tree produced by the `describeTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDescribeTable?: (ctx: DescribeTableContext) => void;

	/**
	 * Enter a parse tree produced by the `refreshTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRefreshTable?: (ctx: RefreshTableContext) => void;
	/**
	 * Exit a parse tree produced by the `refreshTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRefreshTable?: (ctx: RefreshTableContext) => void;

	/**
	 * Enter a parse tree produced by the `refreshResource`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRefreshResource?: (ctx: RefreshResourceContext) => void;
	/**
	 * Exit a parse tree produced by the `refreshResource`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRefreshResource?: (ctx: RefreshResourceContext) => void;

	/**
	 * Enter a parse tree produced by the `cacheTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCacheTable?: (ctx: CacheTableContext) => void;
	/**
	 * Exit a parse tree produced by the `cacheTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCacheTable?: (ctx: CacheTableContext) => void;

	/**
	 * Enter a parse tree produced by the `uncacheTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterUncacheTable?: (ctx: UncacheTableContext) => void;
	/**
	 * Exit a parse tree produced by the `uncacheTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitUncacheTable?: (ctx: UncacheTableContext) => void;

	/**
	 * Enter a parse tree produced by the `clearCache`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterClearCache?: (ctx: ClearCacheContext) => void;
	/**
	 * Exit a parse tree produced by the `clearCache`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitClearCache?: (ctx: ClearCacheContext) => void;

	/**
	 * Enter a parse tree produced by the `loadData`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLoadData?: (ctx: LoadDataContext) => void;
	/**
	 * Exit a parse tree produced by the `loadData`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLoadData?: (ctx: LoadDataContext) => void;

	/**
	 * Enter a parse tree produced by the `truncateTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTruncateTable?: (ctx: TruncateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `truncateTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTruncateTable?: (ctx: TruncateTableContext) => void;

	/**
	 * Enter a parse tree produced by the `repairTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterRepairTable?: (ctx: RepairTableContext) => void;
	/**
	 * Exit a parse tree produced by the `repairTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitRepairTable?: (ctx: RepairTableContext) => void;

	/**
	 * Enter a parse tree produced by the `manageResource`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterManageResource?: (ctx: ManageResourceContext) => void;
	/**
	 * Exit a parse tree produced by the `manageResource`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitManageResource?: (ctx: ManageResourceContext) => void;

	/**
	 * Enter a parse tree produced by the `failNativeCommand`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterFailNativeCommand?: (ctx: FailNativeCommandContext) => void;
	/**
	 * Exit a parse tree produced by the `failNativeCommand`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitFailNativeCommand?: (ctx: FailNativeCommandContext) => void;

	/**
	 * Enter a parse tree produced by the `setConfiguration`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetConfiguration?: (ctx: SetConfigurationContext) => void;
	/**
	 * Exit a parse tree produced by the `setConfiguration`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetConfiguration?: (ctx: SetConfigurationContext) => void;

	/**
	 * Enter a parse tree produced by the `resetConfiguration`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterResetConfiguration?: (ctx: ResetConfigurationContext) => void;
	/**
	 * Exit a parse tree produced by the `resetConfiguration`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitResetConfiguration?: (ctx: ResetConfigurationContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `exists`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExists?: (ctx: ExistsContext) => void;
	/**
	 * Exit a parse tree produced by the `exists`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExists?: (ctx: ExistsContext) => void;

	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalBinary`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `singleInsertQuery`
	 * labeled alternative in `sparkParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	enterSingleInsertQuery?: (ctx: SingleInsertQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `singleInsertQuery`
	 * labeled alternative in `sparkParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	exitSingleInsertQuery?: (ctx: SingleInsertQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `multiInsertQuery`
	 * labeled alternative in `sparkParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	enterMultiInsertQuery?: (ctx: MultiInsertQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `multiInsertQuery`
	 * labeled alternative in `sparkParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	exitMultiInsertQuery?: (ctx: MultiInsertQueryContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleStatement?: (ctx: SingleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleStatement?: (ctx: SingleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.singleTableIdentifier`.
	 * @param ctx the parse tree
	 */
	enterSingleTableIdentifier?: (ctx: SingleTableIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.singleTableIdentifier`.
	 * @param ctx the parse tree
	 */
	exitSingleTableIdentifier?: (ctx: SingleTableIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.singleFunctionIdentifier`.
	 * @param ctx the parse tree
	 */
	enterSingleFunctionIdentifier?: (ctx: SingleFunctionIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.singleFunctionIdentifier`.
	 * @param ctx the parse tree
	 */
	exitSingleFunctionIdentifier?: (ctx: SingleFunctionIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.singleDataType`.
	 * @param ctx the parse tree
	 */
	enterSingleDataType?: (ctx: SingleDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.singleDataType`.
	 * @param ctx the parse tree
	 */
	exitSingleDataType?: (ctx: SingleDataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.singleTableSchema`.
	 * @param ctx the parse tree
	 */
	enterSingleTableSchema?: (ctx: SingleTableSchemaContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.singleTableSchema`.
	 * @param ctx the parse tree
	 */
	exitSingleTableSchema?: (ctx: SingleTableSchemaContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.unsupportedHiveNativeCommands`.
	 * @param ctx the parse tree
	 */
	enterUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.unsupportedHiveNativeCommands`.
	 * @param ctx the parse tree
	 */
	exitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.createTableHeader`.
	 * @param ctx the parse tree
	 */
	enterCreateTableHeader?: (ctx: CreateTableHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.createTableHeader`.
	 * @param ctx the parse tree
	 */
	exitCreateTableHeader?: (ctx: CreateTableHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.bucketSpec`.
	 * @param ctx the parse tree
	 */
	enterBucketSpec?: (ctx: BucketSpecContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.bucketSpec`.
	 * @param ctx the parse tree
	 */
	exitBucketSpec?: (ctx: BucketSpecContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.skewSpec`.
	 * @param ctx the parse tree
	 */
	enterSkewSpec?: (ctx: SkewSpecContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.skewSpec`.
	 * @param ctx the parse tree
	 */
	exitSkewSpec?: (ctx: SkewSpecContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.locationSpec`.
	 * @param ctx the parse tree
	 */
	enterLocationSpec?: (ctx: LocationSpecContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.locationSpec`.
	 * @param ctx the parse tree
	 */
	exitLocationSpec?: (ctx: LocationSpecContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 */
	enterInsertInto?: (ctx: InsertIntoContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 */
	exitInsertInto?: (ctx: InsertIntoContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.partitionSpecLocation`.
	 * @param ctx the parse tree
	 */
	enterPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.partitionSpecLocation`.
	 * @param ctx the parse tree
	 */
	exitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.partitionSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.partitionSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitionSpec?: (ctx: PartitionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.partitionVal`.
	 * @param ctx the parse tree
	 */
	enterPartitionVal?: (ctx: PartitionValContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.partitionVal`.
	 * @param ctx the parse tree
	 */
	exitPartitionVal?: (ctx: PartitionValContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.describeFuncName`.
	 * @param ctx the parse tree
	 */
	enterDescribeFuncName?: (ctx: DescribeFuncNameContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.describeFuncName`.
	 * @param ctx the parse tree
	 */
	exitDescribeFuncName?: (ctx: DescribeFuncNameContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.describeColName`.
	 * @param ctx the parse tree
	 */
	enterDescribeColName?: (ctx: DescribeColNameContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.describeColName`.
	 * @param ctx the parse tree
	 */
	exitDescribeColName?: (ctx: DescribeColNameContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.ctes`.
	 * @param ctx the parse tree
	 */
	enterCtes?: (ctx: CtesContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.ctes`.
	 * @param ctx the parse tree
	 */
	exitCtes?: (ctx: CtesContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	enterNamedQuery?: (ctx: NamedQueryContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.namedQuery`.
	 * @param ctx the parse tree
	 */
	exitNamedQuery?: (ctx: NamedQueryContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.tableProvider`.
	 * @param ctx the parse tree
	 */
	enterTableProvider?: (ctx: TableProviderContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.tableProvider`.
	 * @param ctx the parse tree
	 */
	exitTableProvider?: (ctx: TableProviderContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.tablePropertyList`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyList?: (ctx: TablePropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.tablePropertyList`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyList?: (ctx: TablePropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	enterTableProperty?: (ctx: TablePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	exitTableProperty?: (ctx: TablePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyValue?: (ctx: TablePropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyValue?: (ctx: TablePropertyValueContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.constantList`.
	 * @param ctx the parse tree
	 */
	enterConstantList?: (ctx: ConstantListContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.constantList`.
	 * @param ctx the parse tree
	 */
	exitConstantList?: (ctx: ConstantListContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.nestedConstantList`.
	 * @param ctx the parse tree
	 */
	enterNestedConstantList?: (ctx: NestedConstantListContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.nestedConstantList`.
	 * @param ctx the parse tree
	 */
	exitNestedConstantList?: (ctx: NestedConstantListContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.createFileFormat`.
	 * @param ctx the parse tree
	 */
	enterCreateFileFormat?: (ctx: CreateFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.createFileFormat`.
	 * @param ctx the parse tree
	 */
	exitCreateFileFormat?: (ctx: CreateFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	enterFileFormat?: (ctx: FileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	exitFileFormat?: (ctx: FileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.storageHandler`.
	 * @param ctx the parse tree
	 */
	enterStorageHandler?: (ctx: StorageHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.storageHandler`.
	 * @param ctx the parse tree
	 */
	exitStorageHandler?: (ctx: StorageHandlerContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	enterQueryNoWith?: (ctx: QueryNoWithContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.queryNoWith`.
	 * @param ctx the parse tree
	 */
	exitQueryNoWith?: (ctx: QueryNoWithContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.queryOrganization`.
	 * @param ctx the parse tree
	 */
	enterQueryOrganization?: (ctx: QueryOrganizationContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.queryOrganization`.
	 * @param ctx the parse tree
	 */
	exitQueryOrganization?: (ctx: QueryOrganizationContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.multiInsertQueryBody`.
	 * @param ctx the parse tree
	 */
	enterMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.multiInsertQueryBody`.
	 * @param ctx the parse tree
	 */
	exitMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTerm?: (ctx: QueryTermContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTerm?: (ctx: QueryTermContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimary?: (ctx: QueryPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimary?: (ctx: QueryPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.sortItem`.
	 * @param ctx the parse tree
	 */
	enterSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.sortItem`.
	 * @param ctx the parse tree
	 */
	exitSortItem?: (ctx: SortItemContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.hintStatement`.
	 * @param ctx the parse tree
	 */
	enterHintStatement?: (ctx: HintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.hintStatement`.
	 * @param ctx the parse tree
	 */
	exitHintStatement?: (ctx: HintStatementContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.fromClause`.
	 * @param ctx the parse tree
	 */
	enterFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.fromClause`.
	 * @param ctx the parse tree
	 */
	exitFromClause?: (ctx: FromClauseContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.aggregation`.
	 * @param ctx the parse tree
	 */
	enterAggregation?: (ctx: AggregationContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.aggregation`.
	 * @param ctx the parse tree
	 */
	exitAggregation?: (ctx: AggregationContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	enterGroupingSet?: (ctx: GroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	exitGroupingSet?: (ctx: GroupingSetContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.pivotClause`.
	 * @param ctx the parse tree
	 */
	enterPivotClause?: (ctx: PivotClauseContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.pivotClause`.
	 * @param ctx the parse tree
	 */
	exitPivotClause?: (ctx: PivotClauseContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.pivotColumn`.
	 * @param ctx the parse tree
	 */
	enterPivotColumn?: (ctx: PivotColumnContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.pivotColumn`.
	 * @param ctx the parse tree
	 */
	exitPivotColumn?: (ctx: PivotColumnContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.pivotValue`.
	 * @param ctx the parse tree
	 */
	enterPivotValue?: (ctx: PivotValueContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.pivotValue`.
	 * @param ctx the parse tree
	 */
	exitPivotValue?: (ctx: PivotValueContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.lateralView`.
	 * @param ctx the parse tree
	 */
	enterLateralView?: (ctx: LateralViewContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.lateralView`.
	 * @param ctx the parse tree
	 */
	exitLateralView?: (ctx: LateralViewContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	exitSetQuantifier?: (ctx: SetQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.joinRelation`.
	 * @param ctx the parse tree
	 */
	enterJoinRelation?: (ctx: JoinRelationContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.joinRelation`.
	 * @param ctx the parse tree
	 */
	exitJoinRelation?: (ctx: JoinRelationContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitJoinType?: (ctx: JoinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.sample`.
	 * @param ctx the parse tree
	 */
	enterSample?: (ctx: SampleContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.sample`.
	 * @param ctx the parse tree
	 */
	exitSample?: (ctx: SampleContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleMethod?: (ctx: SampleMethodContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleMethod?: (ctx: SampleMethodContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.identifierSeq`.
	 * @param ctx the parse tree
	 */
	enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.identifierSeq`.
	 * @param ctx the parse tree
	 */
	exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.orderedIdentifierList`.
	 * @param ctx the parse tree
	 */
	enterOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.orderedIdentifierList`.
	 * @param ctx the parse tree
	 */
	exitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.orderedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterOrderedIdentifier?: (ctx: OrderedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.orderedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.identifierCommentList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierCommentList?: (ctx: IdentifierCommentListContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.identifierCommentList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.identifierComment`.
	 * @param ctx the parse tree
	 */
	enterIdentifierComment?: (ctx: IdentifierCommentContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.identifierComment`.
	 * @param ctx the parse tree
	 */
	exitIdentifierComment?: (ctx: IdentifierCommentContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterRelationPrimary?: (ctx: RelationPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitRelationPrimary?: (ctx: RelationPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.inlineTable`.
	 * @param ctx the parse tree
	 */
	enterInlineTable?: (ctx: InlineTableContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.inlineTable`.
	 * @param ctx the parse tree
	 */
	exitInlineTable?: (ctx: InlineTableContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.functionTable`.
	 * @param ctx the parse tree
	 */
	enterFunctionTable?: (ctx: FunctionTableContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.functionTable`.
	 * @param ctx the parse tree
	 */
	exitFunctionTable?: (ctx: FunctionTableContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	enterTableAlias?: (ctx: TableAliasContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	exitTableAlias?: (ctx: TableAliasContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	enterRowFormat?: (ctx: RowFormatContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	exitRowFormat?: (ctx: RowFormatContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.tableIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableIdentifier?: (ctx: TableIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.tableIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableIdentifier?: (ctx: TableIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.namedExpression`.
	 * @param ctx the parse tree
	 */
	enterNamedExpression?: (ctx: NamedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.namedExpression`.
	 * @param ctx the parse tree
	 */
	exitNamedExpression?: (ctx: NamedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.namedExpressionSeq`.
	 * @param ctx the parse tree
	 */
	enterNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.namedExpressionSeq`.
	 * @param ctx the parse tree
	 */
	exitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 */
	enterArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 */
	exitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.predicateOperator`.
	 * @param ctx the parse tree
	 */
	enterPredicateOperator?: (ctx: PredicateOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.predicateOperator`.
	 * @param ctx the parse tree
	 */
	exitPredicateOperator?: (ctx: PredicateOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.intervalField`.
	 * @param ctx the parse tree
	 */
	enterIntervalField?: (ctx: IntervalFieldContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.intervalField`.
	 * @param ctx the parse tree
	 */
	exitIntervalField?: (ctx: IntervalFieldContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.intervalValue`.
	 * @param ctx the parse tree
	 */
	enterIntervalValue?: (ctx: IntervalValueContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.intervalValue`.
	 * @param ctx the parse tree
	 */
	exitIntervalValue?: (ctx: IntervalValueContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.colPosition`.
	 * @param ctx the parse tree
	 */
	enterColPosition?: (ctx: ColPositionContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.colPosition`.
	 * @param ctx the parse tree
	 */
	exitColPosition?: (ctx: ColPositionContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.colTypeList`.
	 * @param ctx the parse tree
	 */
	enterColTypeList?: (ctx: ColTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.colTypeList`.
	 * @param ctx the parse tree
	 */
	exitColTypeList?: (ctx: ColTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.colType`.
	 * @param ctx the parse tree
	 */
	enterColType?: (ctx: ColTypeContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.colType`.
	 * @param ctx the parse tree
	 */
	exitColType?: (ctx: ColTypeContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.complexColTypeList`.
	 * @param ctx the parse tree
	 */
	enterComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.complexColTypeList`.
	 * @param ctx the parse tree
	 */
	exitComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.complexColType`.
	 * @param ctx the parse tree
	 */
	enterComplexColType?: (ctx: ComplexColTypeContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.complexColType`.
	 * @param ctx the parse tree
	 */
	exitComplexColType?: (ctx: ComplexColTypeContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.windows`.
	 * @param ctx the parse tree
	 */
	enterWindows?: (ctx: WindowsContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.windows`.
	 * @param ctx the parse tree
	 */
	exitWindows?: (ctx: WindowsContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.namedWindow`.
	 * @param ctx the parse tree
	 */
	enterNamedWindow?: (ctx: NamedWindowContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.namedWindow`.
	 * @param ctx the parse tree
	 */
	exitNamedWindow?: (ctx: NamedWindowContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	enterWindowSpec?: (ctx: WindowSpecContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	exitWindowSpec?: (ctx: WindowSpecContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	enterWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	exitWindowFrame?: (ctx: WindowFrameContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterFrameBound?: (ctx: FrameBoundContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitFrameBound?: (ctx: FrameBoundContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterStrictIdentifier?: (ctx: StrictIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitStrictIdentifier?: (ctx: StrictIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `sparkParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `sparkParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;
}

