"use strict";
exports.__esModule = true;
var antlr4 = require("antlr4");
var sqlLexer = require("./sql/grammar/sqlLexer");
var sqlParser = require("./sql/grammar/sqlParser");
var sqlVisitor = require('./sql/grammar/sqlVisitor').sqlVisitor;
console.time('all')
console.time('step1')
var inputStream = new antlr4.InputStream(`create table aa(
    name.a[1].a varchar as name ,
    ts int,
    primary key (id, id[2])
) with (
    type = 'kafka',
    aa = '12'
)`.toUpperCase());
console.timeEnd('step1')
console.time('step2')
var lexer = new sqlLexer.sqlLexer(inputStream);
console.timeEnd('step2')
console.time('step3')
var tokenStream = new antlr4.CommonTokenStream(lexer);
console.timeEnd('step3')
console.time('step4')
var parser = new sqlParser.sqlParser(tokenStream);
parser.buildParseTrees = true;
class SqlErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e){
        console.log(e);
        console.log(recognizer,offendingSymbol,line,charPositionInLine,msg,e);
    }
}
parser.addErrorListener(new SqlErrorListener([]))
console.timeEnd('step4')
console.time('step5')
// Parse the input, where `compilationUnit` is whatever entry point you defined
var tree = parser.singleStatement();
console.timeEnd('step5')
console.time('step6')
class myVisitor extends sqlVisitor {
    constructor(){
        super();
    }
    visitTableName (context) {
        const tableIdentifiers = context.tableIdentifier().identifier();
        tableIdentifiers.forEach((item) => {
            const strict = item.strictIdentifier();
            const IDENTIFIER = strict.IDENTIFIER();
            console.log(IDENTIFIER.getText())
        })
    }
    visitCreateFlinkTable (context) {
        const flinkTablePropertyList = context.tablePropertyList();
        // console.log(flinkTablePropertyList)
    }
}
var v = new myVisitor();
v.visit(tree);
console.timeEnd('step6')
console.timeEnd('all');