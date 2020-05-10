// Generated from ./grammar/spark.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `sparkParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface sparkVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `tableName`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `aliasedQuery`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedQuery?: (ctx: AliasedQueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `aliasedRelation`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `inlineTableDefault2`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTableDefault2?: (ctx: InlineTableDefault2Context) => Result;

	/**
	 * Visit a parse tree produced by the `tableValuedFunction`
	 * labeled alternative in `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableValuedFunction?: (ctx: TableValuedFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `bigIntLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBigIntLiteral?: (ctx: BigIntLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `smallIntLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSmallIntLiteral?: (ctx: SmallIntLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `tinyIntLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTinyIntLiteral?: (ctx: TinyIntLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `bigDecimalLiteral`
	 * labeled alternative in `sparkParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBigDecimalLiteral?: (ctx: BigDecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `sparkParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `setOperation`
	 * labeled alternative in `sparkParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperation?: (ctx: SetOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `insertOverwriteTable`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertOverwriteTable?: (ctx: InsertOverwriteTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `insertIntoTable`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertIntoTable?: (ctx: InsertIntoTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `insertOverwriteHiveDir`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertOverwriteHiveDir?: (ctx: InsertOverwriteHiveDirContext) => Result;

	/**
	 * Visit a parse tree produced by the `insertOverwriteDir`
	 * labeled alternative in `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertOverwriteDir?: (ctx: InsertOverwriteDirContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `table`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by the `inlineTableDefault1`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTableDefault1?: (ctx: InlineTableDefault1Context) => Result;

	/**
	 * Visit a parse tree produced by the `subquery`
	 * labeled alternative in `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by the `struct`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct?: (ctx: StructContext) => Result;

	/**
	 * Visit a parse tree produced by the `first`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirst?: (ctx: FirstContext) => Result;

	/**
	 * Visit a parse tree produced by the `last`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLast?: (ctx: LastContext) => Result;

	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantDefault`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDefault?: (ctx: ConstantDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `star`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar?: (ctx: StarContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructor?: (ctx: RowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambda`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `extract`
	 * labeled alternative in `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract?: (ctx: ExtractContext) => Result;

	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `sparkParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `sparkParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `tableFileFormat`
	 * labeled alternative in `sparkParser.fileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFileFormat?: (ctx: TableFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by the `genericFileFormat`
	 * labeled alternative in `sparkParser.fileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericFileFormat?: (ctx: GenericFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by the `sampleByPercentile`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleByPercentile?: (ctx: SampleByPercentileContext) => Result;

	/**
	 * Visit a parse tree produced by the `sampleByRows`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleByRows?: (ctx: SampleByRowsContext) => Result;

	/**
	 * Visit a parse tree produced by the `sampleByBucket`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleByBucket?: (ctx: SampleByBucketContext) => Result;

	/**
	 * Visit a parse tree produced by the `sampleByBytes`
	 * labeled alternative in `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleByBytes?: (ctx: SampleByBytesContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `sparkParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowFormatSerde`
	 * labeled alternative in `sparkParser.rowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormatSerde?: (ctx: RowFormatSerdeContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowFormatDelimited`
	 * labeled alternative in `sparkParser.rowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => Result;

	/**
	 * Visit a parse tree produced by the `complexDataType`
	 * labeled alternative in `sparkParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexDataType?: (ctx: ComplexDataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `primitiveDataType`
	 * labeled alternative in `sparkParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `windowRef`
	 * labeled alternative in `sparkParser.windowSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowRef?: (ctx: WindowRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `windowDef`
	 * labeled alternative in `sparkParser.windowSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowDef?: (ctx: WindowDefContext) => Result;

	/**
	 * Visit a parse tree produced by the `statementDefault`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementDefault?: (ctx: StatementDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `use`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse?: (ctx: UseContext) => Result;

	/**
	 * Visit a parse tree produced by the `createDatabase`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `setDatabaseProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetDatabaseProperties?: (ctx: SetDatabasePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropDatabase`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDatabase?: (ctx: DropDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `createHiveTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateHiveTable?: (ctx: CreateHiveTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTableLike`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableLike?: (ctx: CreateTableLikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `analyze`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyze?: (ctx: AnalyzeContext) => Result;

	/**
	 * Visit a parse tree produced by the `addTableColumns`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddTableColumns?: (ctx: AddTableColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTable?: (ctx: RenameTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `setTableProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableProperties?: (ctx: SetTablePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `unsetTableProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `changeColumn`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangeColumn?: (ctx: ChangeColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `setTableSerDe`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableSerDe?: (ctx: SetTableSerDeContext) => Result;

	/**
	 * Visit a parse tree produced by the `addTablePartition`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddTablePartition?: (ctx: AddTablePartitionContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameTablePartition`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTablePartition?: (ctx: RenameTablePartitionContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropTablePartitions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTablePartitions?: (ctx: DropTablePartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `setTableLocation`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTableLocation?: (ctx: SetTableLocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `recoverPartitions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecoverPartitions?: (ctx: RecoverPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `createView`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTempViewUsing`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => Result;

	/**
	 * Visit a parse tree produced by the `alterViewQuery`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterViewQuery?: (ctx: AlterViewQueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `createFunction`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunction?: (ctx: CreateFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropFunction`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunction?: (ctx: DropFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `explain`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplain?: (ctx: ExplainContext) => Result;

	/**
	 * Visit a parse tree produced by the `showTables`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTables?: (ctx: ShowTablesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTable?: (ctx: ShowTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `showDatabases`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowDatabases?: (ctx: ShowDatabasesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showTblProperties`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTblProperties?: (ctx: ShowTblPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showColumns`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumns?: (ctx: ShowColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showPartitions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowPartitions?: (ctx: ShowPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showFunctions`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeFunction`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeFunction?: (ctx: DescribeFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeDatabase`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeDatabase?: (ctx: DescribeDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeTable?: (ctx: DescribeTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `refreshTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshTable?: (ctx: RefreshTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `refreshResource`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshResource?: (ctx: RefreshResourceContext) => Result;

	/**
	 * Visit a parse tree produced by the `cacheTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCacheTable?: (ctx: CacheTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `uncacheTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUncacheTable?: (ctx: UncacheTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `clearCache`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClearCache?: (ctx: ClearCacheContext) => Result;

	/**
	 * Visit a parse tree produced by the `loadData`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadData?: (ctx: LoadDataContext) => Result;

	/**
	 * Visit a parse tree produced by the `truncateTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTable?: (ctx: TruncateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `repairTable`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepairTable?: (ctx: RepairTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `manageResource`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManageResource?: (ctx: ManageResourceContext) => Result;

	/**
	 * Visit a parse tree produced by the `failNativeCommand`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailNativeCommand?: (ctx: FailNativeCommandContext) => Result;

	/**
	 * Visit a parse tree produced by the `setConfiguration`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetConfiguration?: (ctx: SetConfigurationContext) => Result;

	/**
	 * Visit a parse tree produced by the `resetConfiguration`
	 * labeled alternative in `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetConfiguration?: (ctx: ResetConfigurationContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;

	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `singleInsertQuery`
	 * labeled alternative in `sparkParser.queryNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleInsertQuery?: (ctx: SingleInsertQueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiInsertQuery`
	 * labeled alternative in `sparkParser.queryNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiInsertQuery?: (ctx: MultiInsertQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.singleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStatement?: (ctx: SingleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.singleTableIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleTableIdentifier?: (ctx: SingleTableIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.singleFunctionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleFunctionIdentifier?: (ctx: SingleFunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.singleDataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleDataType?: (ctx: SingleDataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.singleTableSchema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleTableSchema?: (ctx: SingleTableSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.unsupportedHiveNativeCommands`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.createTableHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableHeader?: (ctx: CreateTableHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.bucketSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBucketSpec?: (ctx: BucketSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.skewSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewSpec?: (ctx: SkewSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.locationSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocationSpec?: (ctx: LocationSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.insertInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertInto?: (ctx: InsertIntoContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.partitionSpecLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.partitionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.partitionVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionVal?: (ctx: PartitionValContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.describeFuncName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeFuncName?: (ctx: DescribeFuncNameContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.describeColName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeColName?: (ctx: DescribeColNameContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.ctes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCtes?: (ctx: CtesContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.namedQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedQuery?: (ctx: NamedQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.tableProvider`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProvider?: (ctx: TableProviderContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.tablePropertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyList?: (ctx: TablePropertyListContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.tableProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperty?: (ctx: TablePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyKey?: (ctx: TablePropertyKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyValue?: (ctx: TablePropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.constantList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantList?: (ctx: ConstantListContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.nestedConstantList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedConstantList?: (ctx: NestedConstantListContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.createFileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFileFormat?: (ctx: CreateFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.fileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileFormat?: (ctx: FileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.storageHandler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorageHandler?: (ctx: StorageHandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.queryNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.queryOrganization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryOrganization?: (ctx: QueryOrganizationContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.multiInsertQueryBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTerm?: (ctx: QueryTermContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.hint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHint?: (ctx: HintContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.hintStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintStatement?: (ctx: HintStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.fromClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromClause?: (ctx: FromClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.aggregation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregation?: (ctx: AggregationContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.groupingSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSet?: (ctx: GroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.pivotClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPivotClause?: (ctx: PivotClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.pivotColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPivotColumn?: (ctx: PivotColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.pivotValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPivotValue?: (ctx: PivotValueContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.lateralView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLateralView?: (ctx: LateralViewContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.joinRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRelation?: (ctx: JoinRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.joinCriteria`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.sample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSample?: (ctx: SampleContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleMethod?: (ctx: SampleMethodContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.identifierSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.orderedIdentifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.orderedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.identifierCommentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.identifierComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierComment?: (ctx: IdentifierCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.inlineTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTable?: (ctx: InlineTableContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.functionTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTable?: (ctx: FunctionTableContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.tableAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAlias?: (ctx: TableAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.rowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormat?: (ctx: RowFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.tableIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableIdentifier?: (ctx: TableIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.functionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.namedExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedExpression?: (ctx: NamedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.namedExpressionSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.arithmeticOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.predicateOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateOperator?: (ctx: PredicateOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.intervalField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalField?: (ctx: IntervalFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.intervalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalValue?: (ctx: IntervalValueContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.colPosition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColPosition?: (ctx: ColPositionContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.colTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColTypeList?: (ctx: ColTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.colType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColType?: (ctx: ColTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.complexColTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexColTypeList?: (ctx: ComplexColTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.complexColType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexColType?: (ctx: ComplexColTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.windows`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindows?: (ctx: WindowsContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.namedWindow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedWindow?: (ctx: NamedWindowContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.windowSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowSpec?: (ctx: WindowSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameBound?: (ctx: FrameBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrictIdentifier?: (ctx: StrictIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `sparkParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;
}

