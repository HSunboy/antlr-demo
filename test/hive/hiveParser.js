// Generated from ./grammar/hello/hive.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var hiveListener = require('./hiveListener').hiveListener;
var hiveVisitor = require('./hiveVisitor').hiveVisitor;

var grammarFileName = "hive.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0152\u014e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003N\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004T\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005Z\n\u0005\u0003\u0005\u0005",
    "\u0005]\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006d\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006i\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007o\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007s\n\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0005\by\n\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u007f\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u0085\n",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u008a\n\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u008f\n\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u0093\n\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0005\f\u0099\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u009f\n",
    "\r\u0003\r\u0005\r\u00a2\n\r\u0003\r\u0003\r\u0003\r\u0005\r\u00a7\n",
    "\r\u0003\r\u0005\r\u00aa\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007",
    "\u000f\u00b5\n\u000f\f\u000f\u000e\u000f\u00b8\u000b\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00bf\n",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u00c6\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0007\u0013\u00ce\n\u0013\f\u0013\u000e\u0013",
    "\u00d1\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0005",
    "\u0014\u00d7\n\u0014\u0003\u0014\u0005\u0014\u00da\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0007\u0015\u00df\n\u0015\f\u0015\u000e\u0015",
    "\u00e2\u000b\u0015\u0003\u0015\u0005\u0015\u00e5\n\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0007\u0016\u00ea\n\u0016\f\u0016\u000e\u0016",
    "\u00ed\u000b\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005",
    "\u0017\u00f3\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0006\u0018\u00fd\n",
    "\u0018\r\u0018\u000e\u0018\u00fe\u0005\u0018\u0101\n\u0018\u0003\u0019",
    "\u0003\u0019\u0007\u0019\u0105\n\u0019\f\u0019\u000e\u0019\u0108\u000b",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u010e",
    "\n\u001a\u0003\u001b\u0005\u001b\u0111\n\u001b\u0003\u001b\u0003\u001b",
    "\u0005\u001b\u0115\n\u001b\u0003\u001c\u0005\u001c\u0118\n\u001c\u0003",
    "\u001c\u0003\u001c\u0005\u001c\u011c\n\u001c\u0003\u001c\u0003\u001c",
    "\u0005\u001c\u0120\n\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u0124",
    "\n\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u0128\n\u001c\u0003\u001c",
    "\u0003\u001c\u0005\u001c\u012c\n\u001c\u0003\u001c\u0003\u001c\u0005",
    "\u001c\u0130\n\u001c\u0003\u001c\u0005\u001c\u0133\n\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0005\u001e\u0142\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u0148\n\u001f\u0003 \u0003 \u0003!\u0003!\u0003!",
    "\u0002\u0002\"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@\u0002\n\u0003\u0002\u0092",
    "\u0093\u0004\u000222;;\u0004\u0002\u008d\u008d\u00db\u00db\u0004\u0002",
    "\u0092\u0092\u00fe\u00fe\u0003\u0002\u0145\u0146\u0004\u0002\u0149\u0149",
    "\u014e\u014e\u0004\u0002--nn\u0006\u0002\u0091\u00ea\u00ec\u0143\u0145",
    "\u0145\u0147\u0147\u0002\u0176\u0002B\u0003\u0002\u0002\u0002\u0004",
    "M\u0003\u0002\u0002\u0002\u0006O\u0003\u0002\u0002\u0002\bU\u0003\u0002",
    "\u0002\u0002\n^\u0003\u0002\u0002\u0002\fj\u0003\u0002\u0002\u0002\u000e",
    "t\u0003\u0002\u0002\u0002\u0010z\u0003\u0002\u0002\u0002\u0012\u0080",
    "\u0003\u0002\u0002\u0002\u0014\u0086\u0003\u0002\u0002\u0002\u0016\u0094",
    "\u0003\u0002\u0002\u0002\u0018\u00a9\u0003\u0002\u0002\u0002\u001a\u00ab",
    "\u0003\u0002\u0002\u0002\u001c\u00af\u0003\u0002\u0002\u0002\u001e\u00bb",
    "\u0003\u0002\u0002\u0002 \u00c0\u0003\u0002\u0002\u0002\"\u00c5\u0003",
    "\u0002\u0002\u0002$\u00c9\u0003\u0002\u0002\u0002&\u00d4\u0003\u0002",
    "\u0002\u0002(\u00e4\u0003\u0002\u0002\u0002*\u00e6\u0003\u0002\u0002",
    "\u0002,\u00f2\u0003\u0002\u0002\u0002.\u0100\u0003\u0002\u0002\u0002",
    "0\u0102\u0003\u0002\u0002\u00022\u0109\u0003\u0002\u0002\u00024\u0114",
    "\u0003\u0002\u0002\u00026\u0132\u0003\u0002\u0002\u00028\u0134\u0003",
    "\u0002\u0002\u0002:\u0141\u0003\u0002\u0002\u0002<\u0147\u0003\u0002",
    "\u0002\u0002>\u0149\u0003\u0002\u0002\u0002@\u014b\u0003\u0002\u0002",
    "\u0002BC\u0005\u0004\u0003\u0002CD\u0007\u0002\u0002\u0003D\u0003\u0003",
    "\u0002\u0002\u0002EN\u0005\u0006\u0004\u0002FN\u0005\b\u0005\u0002G",
    "N\u0005\f\u0007\u0002HN\u0005\u000e\b\u0002IN\u0005\n\u0006\u0002JN",
    "\u0005\u0010\t\u0002KN\u0005\u0012\n\u0002LN\u0005\u0014\u000b\u0002",
    "ME\u0003\u0002\u0002\u0002MF\u0003\u0002\u0002\u0002MG\u0003\u0002\u0002",
    "\u0002MH\u0003\u0002\u0002\u0002MI\u0003\u0002\u0002\u0002MJ\u0003\u0002",
    "\u0002\u0002MK\u0003\u0002\u0002\u0002ML\u0003\u0002\u0002\u0002N\u0005",
    "\u0003\u0002\u0002\u0002OP\u0007\u0091\u0002\u0002PS\t\u0002\u0002\u0002",
    "QR\u0007G\u0002\u0002RT\u0007\u0147\u0002\u0002SQ\u0003\u0002\u0002",
    "\u0002ST\u0003\u0002\u0002\u0002T\u0007\u0003\u0002\u0002\u0002UV\u0007",
    "\u0091\u0002\u0002VY\u0007\u0094\u0002\u0002WX\u0007;\u0002\u0002XZ",
    "\u0005 \u0011\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002",
    "Z\\\u0003\u0002\u0002\u0002[]\u0007\u0147\u0002\u0002\\[\u0003\u0002",
    "\u0002\u0002\\]\u0003\u0002\u0002\u0002]\t\u0003\u0002\u0002\u0002^",
    "_\u0007\u0091\u0002\u0002_`\u0007g\u0002\u0002`c\u0007+\u0002\u0002",
    "ab\t\u0003\u0002\u0002bd\u0005 \u0011\u0002ca\u0003\u0002\u0002\u0002",
    "cd\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ef\u0007G\u0002",
    "\u0002fh\u0007\u0147\u0002\u0002gi\u0005\u001c\u000f\u0002hg\u0003\u0002",
    "\u0002\u0002hi\u0003\u0002\u0002\u0002i\u000b\u0003\u0002\u0002\u0002",
    "jk\u0007\u0091\u0002\u0002kn\t\u0004\u0002\u0002lm\t\u0003\u0002\u0002",
    "mo\u0005 \u0011\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002",
    "\u0002or\u0003\u0002\u0002\u0002pq\u0007G\u0002\u0002qs\u0007\u0147",
    "\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s\r",
    "\u0003\u0002\u0002\u0002tu\u0007\u0091\u0002\u0002uv\u0007\u00ea\u0002",
    "\u0002vx\u0005\"\u0012\u0002wy\u0005\u001c\u000f\u0002xw\u0003\u0002",
    "\u0002\u0002xy\u0003\u0002\u0002\u0002y\u000f\u0003\u0002\u0002\u0002",
    "z{\u0007\u0091\u0002\u0002{|\u0007\u010f\u0002\u0002|~\u0005\"\u0012",
    "\u0002}\u007f\u0005$\u0013\u0002~}\u0003\u0002\u0002\u0002~\u007f\u0003",
    "\u0002\u0002\u0002\u007f\u0011\u0003\u0002\u0002\u0002\u0080\u0081\u0007",
    "\u0091\u0002\u0002\u0081\u0082\u0007\u0018\u0002\u0002\u0082\u0084\u0007",
    "g\u0002\u0002\u0083\u0085\u0005\"\u0012\u0002\u0084\u0083\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0013\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0007\u0091\u0002\u0002\u0087\u0089\u0007\u00a4",
    "\u0002\u0002\u0088\u008a\t\u0003\u0002\u0002\u0089\u0088\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002",
    "\u0002\u0002\u008b\u008e\u0005\"\u0012\u0002\u008c\u008d\t\u0003\u0002",
    "\u0002\u008d\u008f\u0005 \u0011\u0002\u008e\u008c\u0003\u0002\u0002",
    "\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0092\u0003\u0002\u0002",
    "\u0002\u0090\u0091\u0007G\u0002\u0002\u0091\u0093\u0007\u0147\u0002",
    "\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002",
    "\u0002\u0093\u0015\u0003\u0002\u0002\u0002\u0094\u0095\u0007\u0091\u0002",
    "\u0002\u0095\u0098\u0007\u00c4\u0002\u0002\u0096\u0097\u0007G\u0002",
    "\u0002\u0097\u0099\u0007\u0147\u0002\u0002\u0098\u0096\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u0017\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0007\u0091\u0002\u0002\u009b\u009c\u0007\u00d7\u0002",
    "\u0002\u009c\u009e\u0005\"\u0012\u0002\u009d\u009f\u0005\u001c\u000f",
    "\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002",
    "\u0002\u009f\u00a1\u0003\u0002\u0002\u0002\u00a0\u00a2\u0007+\u0002",
    "\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002",
    "\u0002\u00a2\u00aa\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u0091\u0002",
    "\u0002\u00a4\u00a6\u0007\u00d7\u0002\u0002\u00a5\u00a7\t\u0005\u0002",
    "\u0002\u00a6\u00a5\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002",
    "\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00aa\u0005 \u0011",
    "\u0002\u00a9\u009a\u0003\u0002\u0002\u0002\u00a9\u00a3\u0003\u0002\u0002",
    "\u0002\u00aa\u0019\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007\u0091\u0002",
    "\u0002\u00ac\u00ad\u0007\u0017\u0002\u0002\u00ad\u00ae\u0005*\u0016",
    "\u0002\u00ae\u001b\u0003\u0002\u0002\u0002\u00af\u00b0\u0007W\u0002",
    "\u0002\u00b0\u00b1\u0007\u0003\u0002\u0002\u00b1\u00b6\u0005\u001e\u0010",
    "\u0002\u00b2\u00b3\u0007\u0004\u0002\u0002\u00b3\u00b5\u0005\u001e\u0010",
    "\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b8\u0003\u0002\u0002",
    "\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002",
    "\u0002\u00b7\u00b9\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002",
    "\u0002\u00b9\u00ba\u0007\u0005\u0002\u0002\u00ba\u001d\u0003\u0002\u0002",
    "\u0002\u00bb\u00be\u0005:\u001e\u0002\u00bc\u00bd\u0007\u0144\u0002",
    "\u0002\u00bd\u00bf\u0005.\u0018\u0002\u00be\u00bc\u0003\u0002\u0002",
    "\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf\u001f\u0003\u0002\u0002",
    "\u0002\u00c0\u00c1\u0005:\u001e\u0002\u00c1!\u0003\u0002\u0002\u0002",
    "\u00c2\u00c3\u0005 \u0011\u0002\u00c3\u00c4\u0007\u0006\u0002\u0002",
    "\u00c4\u00c6\u0003\u0002\u0002\u0002\u00c5\u00c2\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002",
    "\u00c7\u00c8\u0005:\u001e\u0002\u00c8#\u0003\u0002\u0002\u0002\u00c9",
    "\u00ca\u0007\u0003\u0002\u0002\u00ca\u00cf\u0005&\u0014\u0002\u00cb",
    "\u00cc\u0007\u0004\u0002\u0002\u00cc\u00ce\u0005&\u0014\u0002\u00cd",
    "\u00cb\u0003\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002\u0002\u0002\u00cf",
    "\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0",
    "\u00d2\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d2",
    "\u00d3\u0007\u0005\u0002\u0002\u00d3%\u0003\u0002\u0002\u0002\u00d4",
    "\u00d9\u0005(\u0015\u0002\u00d5\u00d7\u0007\u0144\u0002\u0002\u00d6",
    "\u00d5\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\u0003\u0002\u0002\u0002\u00d8\u00da\u0005,\u0017\u0002\u00d9",
    "\u00d6\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da",
    "\'\u0003\u0002\u0002\u0002\u00db\u00e0\u0005:\u001e\u0002\u00dc\u00dd",
    "\u0007\u0006\u0002\u0002\u00dd\u00df\u0005:\u001e\u0002\u00de\u00dc",
    "\u0003\u0002\u0002\u0002\u00df\u00e2\u0003\u0002\u0002\u0002\u00e0\u00de",
    "\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e5",
    "\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e3\u00e5",
    "\u0007\u0147\u0002\u0002\u00e4\u00db\u0003\u0002\u0002\u0002\u00e4\u00e3",
    "\u0003\u0002\u0002\u0002\u00e5)\u0003\u0002\u0002\u0002\u00e6\u00eb",
    "\u0005:\u001e\u0002\u00e7\u00e8\u0007\u0006\u0002\u0002\u00e8\u00ea",
    "\u0005:\u001e\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00ea\u00ed",
    "\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ec",
    "\u0003\u0002\u0002\u0002\u00ec+\u0003\u0002\u0002\u0002\u00ed\u00eb",
    "\u0003\u0002\u0002\u0002\u00ee\u00f3\u0007\u0149\u0002\u0002\u00ef\u00f3",
    "\u0007\u014e\u0002\u0002\u00f0\u00f3\u00058\u001d\u0002\u00f1\u00f3",
    "\u0007\u0147\u0002\u0002\u00f2\u00ee\u0003\u0002\u0002\u0002\u00f2\u00ef",
    "\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f1",
    "\u0003\u0002\u0002\u0002\u00f3-\u0003\u0002\u0002\u0002\u00f4\u0101",
    "\u0007N\u0002\u0002\u00f5\u0101\u00050\u0019\u0002\u00f6\u00f7\u0005",
    ":\u001e\u0002\u00f7\u00f8\u0007\u0147\u0002\u0002\u00f8\u0101\u0003",
    "\u0002\u0002\u0002\u00f9\u0101\u00056\u001c\u0002\u00fa\u0101\u0005",
    "8\u001d\u0002\u00fb\u00fd\u0007\u0147\u0002\u0002\u00fc\u00fb\u0003",
    "\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003",
    "\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u0101\u0003",
    "\u0002\u0002\u0002\u0100\u00f4\u0003\u0002\u0002\u0002\u0100\u00f5\u0003",
    "\u0002\u0002\u0002\u0100\u00f6\u0003\u0002\u0002\u0002\u0100\u00f9\u0003",
    "\u0002\u0002\u0002\u0100\u00fa\u0003\u0002\u0002\u0002\u0100\u00fc\u0003",
    "\u0002\u0002\u0002\u0101/\u0003\u0002\u0002\u0002\u0102\u0106\u0007",
    "@\u0002\u0002\u0103\u0105\u00052\u001a\u0002\u0104\u0103\u0003\u0002",
    "\u0002\u0002\u0105\u0108\u0003\u0002\u0002\u0002\u0106\u0104\u0003\u0002",
    "\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u01071\u0003\u0002",
    "\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109\u010a\u00054",
    "\u001b\u0002\u010a\u010d\u0005:\u001e\u0002\u010b\u010c\u0007k\u0002",
    "\u0002\u010c\u010e\u0005:\u001e\u0002\u010d\u010b\u0003\u0002\u0002",
    "\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e3\u0003\u0002\u0002",
    "\u0002\u010f\u0111\t\u0006\u0002\u0002\u0110\u010f\u0003\u0002\u0002",
    "\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002",
    "\u0002\u0112\u0115\t\u0007\u0002\u0002\u0113\u0115\u0007\u0147\u0002",
    "\u0002\u0114\u0110\u0003\u0002\u0002\u0002\u0114\u0113\u0003\u0002\u0002",
    "\u0002\u01155\u0003\u0002\u0002\u0002\u0116\u0118\u0007\u0146\u0002",
    "\u0002\u0117\u0116\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002",
    "\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u0133\u0007\u014e\u0002",
    "\u0002\u011a\u011c\u0007\u0146\u0002\u0002\u011b\u011a\u0003\u0002\u0002",
    "\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002",
    "\u0002\u011d\u0133\u0007\u0149\u0002\u0002\u011e\u0120\u0007\u0146\u0002",
    "\u0002\u011f\u011e\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002",
    "\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0133\u0007\u014b\u0002",
    "\u0002\u0122\u0124\u0007\u0146\u0002\u0002\u0123\u0122\u0003\u0002\u0002",
    "\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002",
    "\u0002\u0125\u0133\u0007\u014c\u0002\u0002\u0126\u0128\u0007\u0146\u0002",
    "\u0002\u0127\u0126\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002",
    "\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u0133\u0007\u014d\u0002",
    "\u0002\u012a\u012c\u0007\u0146\u0002\u0002\u012b\u012a\u0003\u0002\u0002",
    "\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012d\u0003\u0002\u0002",
    "\u0002\u012d\u0133\u0007\u014f\u0002\u0002\u012e\u0130\u0007\u0146\u0002",
    "\u0002\u012f\u012e\u0003\u0002\u0002\u0002\u012f\u0130\u0003\u0002\u0002",
    "\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u0131\u0133\u0007\u0150\u0002",
    "\u0002\u0132\u0117\u0003\u0002\u0002\u0002\u0132\u011b\u0003\u0002\u0002",
    "\u0002\u0132\u011f\u0003\u0002\u0002\u0002\u0132\u0123\u0003\u0002\u0002",
    "\u0002\u0132\u0127\u0003\u0002\u0002\u0002\u0132\u012b\u0003\u0002\u0002",
    "\u0002\u0132\u012f\u0003\u0002\u0002\u0002\u01337\u0003\u0002\u0002",
    "\u0002\u0134\u0135\t\b\u0002\u0002\u01359\u0003\u0002\u0002\u0002\u0136",
    "\u0142\u0005<\u001f\u0002\u0137\u0142\u00073\u0002\u0002\u0138\u0142",
    "\u0007<\u0002\u0002\u0139\u0142\u0007E\u0002\u0002\u013a\u0142\u0007",
    "\u0100\u0002\u0002\u013b\u0142\u0007`\u0002\u0002\u013c\u0142\u0007",
    "C\u0002\u0002\u013d\u0142\u0007\u0019\u0002\u0002\u013e\u0142\u0007",
    "P\u0002\u0002\u013f\u0142\u0007q\u0002\u0002\u0140\u0142\u0007?\u0002",
    "\u0002\u0141\u0136\u0003\u0002\u0002\u0002\u0141\u0137\u0003\u0002\u0002",
    "\u0002\u0141\u0138\u0003\u0002\u0002\u0002\u0141\u0139\u0003\u0002\u0002",
    "\u0002\u0141\u013a\u0003\u0002\u0002\u0002\u0141\u013b\u0003\u0002\u0002",
    "\u0002\u0141\u013c\u0003\u0002\u0002\u0002\u0141\u013d\u0003\u0002\u0002",
    "\u0002\u0141\u013e\u0003\u0002\u0002\u0002\u0141\u013f\u0003\u0002\u0002",
    "\u0002\u0141\u0140\u0003\u0002\u0002\u0002\u0142;\u0003\u0002\u0002",
    "\u0002\u0143\u0148\u0007\u014a\u0002\u0002\u0144\u0148\u0005> \u0002",
    "\u0145\u0148\u0005@!\u0002\u0146\u0148\u0007\u0148\u0002\u0002\u0147",
    "\u0143\u0003\u0002\u0002\u0002\u0147\u0144\u0003\u0002\u0002\u0002\u0147",
    "\u0145\u0003\u0002\u0002\u0002\u0147\u0146\u0003\u0002\u0002\u0002\u0148",
    "=\u0003\u0002\u0002\u0002\u0149\u014a\u0007\u0151\u0002\u0002\u014a",
    "?\u0003\u0002\u0002\u0002\u014b\u014c\t\t\u0002\u0002\u014cA\u0003\u0002",
    "\u0002\u0002/MSY\\chnrx~\u0084\u0089\u008e\u0092\u0098\u009e\u00a1\u00a6",
    "\u00a9\u00b6\u00be\u00c5\u00cf\u00d6\u00d9\u00e0\u00e4\u00eb\u00f2\u00fe",
    "\u0100\u0106\u010d\u0110\u0114\u0117\u011b\u011f\u0123\u0127\u012b\u012f",
    "\u0132\u0141\u0147"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "','", "')'", "'.'", "'ALL'", "'ALTER'", 
                     "'AND'", "'ARRAY'", "'AS'", "'AUTHORIZATION'", "'BETWEEN'", 
                     "'BIGINT'", "'BINARY'", "'BOOLEAN'", "'BOTH'", "'BY'", 
                     "'CASE'", "'CAST'", "'CHAR'", "'COLUMN'", "'CONF'", 
                     "'CREATE'", "'CROSS'", "'CUBE'", "'CURRENT'", "'CURRENT_DATE'", 
                     "'CURRENT_TIMESTAMP'", "'CURSOR'", "'DATABASE'", "'DATE'", 
                     "'DECIMAL'", "'DELETE'", "'DESCRIBE'", "'DISTINCT'", 
                     "'DOUBLE'", "'DROP'", "'ELSE'", "'END'", "'EXCHANGE'", 
                     "'EXISTS'", "'EXTENDED'", "'EXTERNAL'", "'FALSE'", 
                     "'FETCH'", "'FLOAT'", "'FOLLOWING'", "'FOR'", "'FROM'", 
                     "'FULL'", "'FUNCTION'", "'GRANT'", "'GROUP'", "'GROUPING'", 
                     "'HAVING'", "'IF'", "'IMPORT'", "'IN'", "'INNER'", 
                     "'INSERT'", "'INT'", "'INTERSECT'", "'INTERVAL'", "'INTO'", 
                     "'IS'", "'JOIN'", "'LATERAL'", "'LEFT'", "'LESS'", 
                     "'LIKE'", "'LOCAL'", "'MACRO'", "'MAP'", "'MORE'", 
                     "'NONE'", "'NOT'", "'NULL'", "'OF'", "'ON'", "'OR'", 
                     "'ORDER'", "'OUT'", "'OUTER'", "'OVER'", "'PARTIALSCAN'", 
                     "'PARTITION'", "'PERCENT'", "'PRECEDING'", "'PRESERVE'", 
                     "'PROCEDURE'", "'RANGE'", "'READS'", "'REDUCE'", "'REVOKE'", 
                     "'RIGHT'", "'ROLLUP'", "'ROW'", "'ROWS'", "'SELECT'", 
                     "'SET'", "'SMALLINT'", "'TABLE'", "'TABLESAMPLE'", 
                     "'THEN'", "'TIMESTAMP'", "'TO'", "'TRANSFORM'", "'TRIGGER'", 
                     "'TRUE'", "'TRUNCATE'", "'UNBOUNDED'", "'UNION'", "'UNIQUEJOIN'", 
                     "'UPDATE'", "'USER'", "'USING'", "'UTC_TMESTAMP'", 
                     "'VALUES'", "'VARCHAR'", "'WHEN'", "'WHERE'", "'WINDOW'", 
                     "'WITH'", "'COMMIT'", "'ONLY'", "'REGEXP'", "'RLIKE'", 
                     "'ROLLBACK'", "'START'", "'CACHE'", "'CONSTRAINT'", 
                     "'FOREIGN'", "'PRIMARY'", "'REFERENCES'", "'DAYOFWEEK'", 
                     "'EXTRACT'", "'FLOOR'", "'INTEGER'", "'PRECISION'", 
                     "'VIEWS'", "'TIME'", "'NUMERIC'", "'SYNC'", "'SHOW'", 
                     "'DATABASES'", "'SCHEMAS'", "'TABLES'", "'ADD'", "'ADMIN'", 
                     "'AFTER'", "'ANALYZE'", "'ARCHIVE'", "'ASC'", "'BEFORE'", 
                     "'BUCKET'", "'BUCKETS'", "'CASCADE'", "'CHANGE'", "'CLUSTER'", 
                     "'CLUSTERED'", "'CLUSTERSTATUS'", "'COLLECTION'", "'COLUMNS'", 
                     "'COMMENT'", "'COMPACT'", "'COMPACTIONS'", "'COMPUTE'", 
                     "'CONCATENATE'", "'CONTINUE'", "'DATA'", "'DATETIME'", 
                     "'DAY'", "'DBPROPERTIES'", "'DEFERRED'", "'DEFINED'", 
                     "'DELIMITED'", "'DEPENDENCY'", "'DESC'", "'DIRECTORIES'", 
                     "'DIRECTORY'", "'DISABLE'", "'DISTRIBUTE'", "'ELEM_TYPE'", 
                     "'ENABLE'", "'ESCAPED'", "'EXCLUSIVE'", "'EXPLAIN'", 
                     "'EXPORT'", "'FIELDS'", "'FILE'", "'FILEFORMAT'", "'FIRST'", 
                     "'FORMAT'", "'FORMATTED'", "'FUNCTIONS'", "'HOLD_DDLTIME'", 
                     "'HOUR'", "'IDXPROPERTIES'", "'IGNORE'", "'INDEX'", 
                     "'INDEXES'", "'INPATH'", "'INPUTDRIVER'", "'INPUTFORMAT'", 
                     "'ITEMS'", "'JAR'", "'KEYS'", "'KEY_TYPE'", "'LIMIT'", 
                     "'LINES'", "'LOAD'", "'LOCATION'", "'LOCK'", "'LOCKS'", 
                     "'LOGICAL'", "'LONG'", "'MAPJOIN'", "'MATERIALIZED'", 
                     "'METADATA'", "'MINUS'", "'MINUTE'", "'MONTH'", "'MSCK'", 
                     "'NOSCAN'", "'NO_DROP'", "'OFFLINE'", "'OPTION'", "'OUTPUTDRIVER'", 
                     "'OUTPUTFORMAT'", "'OVERWRITE'", "'OWNER'", "'PARTITIONED'", 
                     "'PARTITIONS'", "'PLUS'", "'PRETTY'", "'PRINCIPALS'", 
                     "'PROTECTION'", "'PURGE'", "'READ'", "'READONLY'", 
                     "'REBUILD'", "'RECORDREADER'", "'RECORDWRITER'", "'RELOAD'", 
                     "'RENAME'", "'REPAIR'", "'REPLACE'", "'REPLICATION'", 
                     "'RESTRICT'", "'REWRITE'", "'ROLE'", "'ROLES'", "'SCHEMA'", 
                     "'SECOND'", "'SEMI'", "'SERDE'", "'SERDEPROPERTIES'", 
                     "'SERVER'", "'SETS'", "'SHARED'", "'SHOW_DATABASE'", 
                     "'SKEWED'", "'SORT'", "'SORTED'", "'SSL'", "'STATISTICS'", 
                     "'STORED'", "'STREAMTABLE'", "'STRUCT'", "'TBLPROPERTIES'", 
                     "'TEMPORARY'", "'TERMINATED'", "'TINYINT'", "'TOUCH'", 
                     "'TRANSACTIONS'", "'UNARCHIVE'", "'UNDO'", "'UNIONTYPE'", 
                     "'UNLOCK'", "'UNSET'", "'UNSIGNED'", "'URI'", "'USE'", 
                     "'UTC'", "'UTCTIMESTAMP'", "'VALUE_TYPE'", "'VIEW'", 
                     "'WHILE'", "'YEAR'", "'AUTOCOMMIT'", "'ISOLATION'", 
                     "'LEVEL'", "'OFFSET'", "'SNAPSHOT'", "'TRANSACTION'", 
                     "'WORK'", "'WRITE'", "'ABORT'", "'KEY'", "'LAST'", 
                     "'NORELY'", "'NOVALIDATE'", "'NULLS'", "'RELY'", "'VALIDATE'", 
                     "'DETAIL'", "'DOW'", "'EXPRESSION'", "'OPERATOR'", 
                     "'QUARTER'", "'SUMMARY'", "'VECTORIZATION'", "'WEEK'", 
                     "'YEARS'", "'MONTHS'", "'WEEKS'", "'DAYS'", "'HOURS'", 
                     "'MINUTES'", "'SECONDS'", "'TIMESTAMPTZ'", "'ZONE'", 
                     null, "'+'", "'-'" ];

var symbolicNames = [ null, null, null, null, null, "ALL", "ALTER", "AND", 
                      "ARRAY", "AS", "AUTHORIZATION", "BETWEEN", "BIGINT", 
                      "BINARY", "BOOLEAN", "BOTH", "BY", "CASE", "CAST", 
                      "CHAR", "COLUMN", "CONF", "CREATE", "CROSS", "CUBE", 
                      "CURRENT", "CURRENT_DATE", "CURRENT_TIMESTAMP", "CURSOR", 
                      "DATABASE", "DATE", "DECIMAL", "DELETE", "DESCRIBE", 
                      "DISTINCT", "DOUBLE", "DROP", "ELSE", "END", "EXCHANGE", 
                      "EXISTS", "EXTENDED", "EXTERNAL", "FALSE", "FETCH", 
                      "FLOAT", "FOLLOWING", "FOR", "FROM", "FULL", "FUNCTION", 
                      "GRANT", "GROUP", "GROUPING", "HAVING", "IF", "IMPORT", 
                      "IN", "INNER", "INSERT", "INT", "INTERSECT", "INTERVAL", 
                      "INTO", "IS", "JOIN", "LATERAL", "LEFT", "LESS", "LIKE", 
                      "LOCAL", "MACRO", "MAP", "MORE1", "NONE", "NOT", "NULL", 
                      "OF", "ON", "OR", "ORDER", "OUT", "OUTER", "OVER", 
                      "PARTIALSCAN", "PARTITION", "PERCENT", "PRECEDING", 
                      "PRESERVE", "PROCEDURE", "RANGE", "READS", "REDUCE", 
                      "REVOKE", "RIGHT", "ROLLUP", "ROW", "ROWS", "SELECT", 
                      "SET", "SMALLINT", "TABLE", "TABLESAMPLE", "THEN", 
                      "TIMESTAMP", "TO", "TRANSFORM", "TRIGGER", "TRUE", 
                      "TRUNCATE", "UNBOUNDED", "UNION", "UNIQUEJOIN", "UPDATE", 
                      "USER", "USING", "UTC_TMESTAMP", "VALUES", "VARCHAR", 
                      "WHEN", "WHERE", "WINDOW", "WITH", "COMMIT", "ONLY", 
                      "REGEXP", "RLIKE", "ROLLBACK", "START", "CACHE", "CONSTRAINT", 
                      "FOREIGN", "PRIMARY", "REFERENCES", "DAYOFWEEK", "EXTRACT", 
                      "FLOOR", "INTEGER", "PRECISION", "VIEWS", "TIME", 
                      "NUMERIC", "SYNC", "SHOW", "DATABASES", "SCHEMAS", 
                      "TABLES", "ADD", "ADMIN", "AFTER", "ANALYZE", "ARCHIVE", 
                      "ASC", "BEFORE", "BUCKET", "BUCKETS", "CASCADE", "CHANGE", 
                      "CLUSTER", "CLUSTERED", "CLUSTERSTATUS", "COLLECTION", 
                      "COLUMNS", "COMMENT", "COMPACT", "COMPACTIONS", "COMPUTE", 
                      "CONCATENATE", "CONTINUE", "DATA", "DATETIME", "DAY", 
                      "DBPROPERTIES", "DEFERRED", "DEFINED", "DELIMITED", 
                      "DEPENDENCY", "DESC", "DIRECTORIES", "DIRECTORY", 
                      "DISABLE", "DISTRIBUTE", "ELEM_TYPE", "ENABLE", "ESCAPED", 
                      "EXCLUSIVE", "EXPLAIN", "EXPORT", "FIELDS", "FILE", 
                      "FILEFORMAT", "FIRST", "FORMAT", "FORMATTED", "FUNCTIONS", 
                      "HOLD_DDLTIME", "HOUR", "IDXPROPERTIES", "IGNORE", 
                      "INDEX", "INDEXES", "INPATH", "INPUTDRIVER", "INPUTFORMAT", 
                      "ITEMS", "JAR", "KEYS", "KEY_TYPE", "LIMIT", "LINES", 
                      "LOAD", "LOCATION", "LOCK", "LOCKS", "LOGICAL", "LONG", 
                      "MAPJOIN", "MATERIALIZED", "METADATA", "SETMINUS", 
                      "MINUTE", "MONTH", "MSCK", "NOSCAN", "NO_DROP", "OFFLINE", 
                      "OPTION", "OUTPUTDRIVER", "OUTPUTFORMAT", "OVERWRITE", 
                      "OWNER", "PARTITIONED", "PARTITIONS", "SETPLUS", "PRETTY", 
                      "PRINCIPALS", "PROTECTION", "PURGE", "READ", "READONLY", 
                      "REBUILD", "RECORDREADER", "RECORDWRITER", "RELOAD", 
                      "RENAME", "REPAIR", "REPLACE", "REPLICATION", "RESTRICT", 
                      "REWRITE", "ROLE", "ROLES", "SCHEMA", "SECOND", "SEMI", 
                      "SERDE", "SERDEPROPERTIES", "SERVER", "SETS", "SHARED", 
                      "SHOW_DATABASE", "SKEWED", "SORT", "SORTED", "SSL", 
                      "STATISTICS", "STORED", "STREAMTABLE", "STRUCT", "TBLPROPERTIES", 
                      "TEMPORARY", "TERMINATED", "TINYINT", "TOUCH", "TRANSACTIONS", 
                      "UNARCHIVE", "UNDO", "UNIONTYPE", "UNLOCK", "UNSET", 
                      "UNSIGNED", "URI", "USE", "UTC", "UTCTIMESTAMP", "VALUE_TYPE", 
                      "VIEW", "WHILE", "YEAR", "AUTOCOMMIT", "ISOLATION", 
                      "LEVEL", "OFFSET", "SNAPSHOT", "TRANSACTION", "WORK", 
                      "WRITE", "ABORT", "KEY", "LAST", "NORELY", "NOVALIDATE", 
                      "NULLS", "RELY", "VALIDATE", "DETAIL", "DOW", "EXPRESSION", 
                      "OPERATOR", "QUARTER", "SUMMARY", "VECTORIZATION", 
                      "WEEK", "YEARS", "MONTHS", "WEEKS", "DAYS", "HOURS", 
                      "MINUTES", "SECONDS", "TIMESTAMPTZ", "ZONE", "EQ", 
                      "PLUS", "MINUS", "STRING", "VARIABLE_REFERENCE", "INTEGER_VALUE", 
                      "IDENTIFIER", "BIGINT_LITERAL", "SMALLINT_LITERAL", 
                      "TINYINT_LITERAL", "DECIMAL_VALUE", "DOUBLE_LITERAL", 
                      "BIGDECIMAL_LITERAL", "BACKQUOTED_IDENTIFIER", "WS" ];

var ruleNames =  [ "singleStatement", "showStatement", "showDataBases", 
                   "showTables", "showTableExtended", "showViews", "showPartitions", 
                   "showTableProperties", "showCreateTable", "showColumns", 
                   "showFunctions", "showLocks", "showConf", "partitionSpec", 
                   "partitionVal", "database_name", "table_name", "tablePropertyList", 
                   "tableProperty", "tablePropertyKey", "configuration_name", 
                   "tablePropertyValue", "constant", "interval", "intervalField", 
                   "intervalValue", "number", "booleanValue", "identifier", 
                   "strictIdentifier", "quotedIdentifier", "nonReserved" ];

function hiveParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

hiveParser.prototype = Object.create(antlr4.Parser.prototype);
hiveParser.prototype.constructor = hiveParser;

Object.defineProperty(hiveParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

hiveParser.EOF = antlr4.Token.EOF;
hiveParser.T__0 = 1;
hiveParser.T__1 = 2;
hiveParser.T__2 = 3;
hiveParser.T__3 = 4;
hiveParser.ALL = 5;
hiveParser.ALTER = 6;
hiveParser.AND = 7;
hiveParser.ARRAY = 8;
hiveParser.AS = 9;
hiveParser.AUTHORIZATION = 10;
hiveParser.BETWEEN = 11;
hiveParser.BIGINT = 12;
hiveParser.BINARY = 13;
hiveParser.BOOLEAN = 14;
hiveParser.BOTH = 15;
hiveParser.BY = 16;
hiveParser.CASE = 17;
hiveParser.CAST = 18;
hiveParser.CHAR = 19;
hiveParser.COLUMN = 20;
hiveParser.CONF = 21;
hiveParser.CREATE = 22;
hiveParser.CROSS = 23;
hiveParser.CUBE = 24;
hiveParser.CURRENT = 25;
hiveParser.CURRENT_DATE = 26;
hiveParser.CURRENT_TIMESTAMP = 27;
hiveParser.CURSOR = 28;
hiveParser.DATABASE = 29;
hiveParser.DATE = 30;
hiveParser.DECIMAL = 31;
hiveParser.DELETE = 32;
hiveParser.DESCRIBE = 33;
hiveParser.DISTINCT = 34;
hiveParser.DOUBLE = 35;
hiveParser.DROP = 36;
hiveParser.ELSE = 37;
hiveParser.END = 38;
hiveParser.EXCHANGE = 39;
hiveParser.EXISTS = 40;
hiveParser.EXTENDED = 41;
hiveParser.EXTERNAL = 42;
hiveParser.FALSE = 43;
hiveParser.FETCH = 44;
hiveParser.FLOAT = 45;
hiveParser.FOLLOWING = 46;
hiveParser.FOR = 47;
hiveParser.FROM = 48;
hiveParser.FULL = 49;
hiveParser.FUNCTION = 50;
hiveParser.GRANT = 51;
hiveParser.GROUP = 52;
hiveParser.GROUPING = 53;
hiveParser.HAVING = 54;
hiveParser.IF = 55;
hiveParser.IMPORT = 56;
hiveParser.IN = 57;
hiveParser.INNER = 58;
hiveParser.INSERT = 59;
hiveParser.INT = 60;
hiveParser.INTERSECT = 61;
hiveParser.INTERVAL = 62;
hiveParser.INTO = 63;
hiveParser.IS = 64;
hiveParser.JOIN = 65;
hiveParser.LATERAL = 66;
hiveParser.LEFT = 67;
hiveParser.LESS = 68;
hiveParser.LIKE = 69;
hiveParser.LOCAL = 70;
hiveParser.MACRO = 71;
hiveParser.MAP = 72;
hiveParser.MORE1 = 73;
hiveParser.NONE = 74;
hiveParser.NOT = 75;
hiveParser.NULL = 76;
hiveParser.OF = 77;
hiveParser.ON = 78;
hiveParser.OR = 79;
hiveParser.ORDER = 80;
hiveParser.OUT = 81;
hiveParser.OUTER = 82;
hiveParser.OVER = 83;
hiveParser.PARTIALSCAN = 84;
hiveParser.PARTITION = 85;
hiveParser.PERCENT = 86;
hiveParser.PRECEDING = 87;
hiveParser.PRESERVE = 88;
hiveParser.PROCEDURE = 89;
hiveParser.RANGE = 90;
hiveParser.READS = 91;
hiveParser.REDUCE = 92;
hiveParser.REVOKE = 93;
hiveParser.RIGHT = 94;
hiveParser.ROLLUP = 95;
hiveParser.ROW = 96;
hiveParser.ROWS = 97;
hiveParser.SELECT = 98;
hiveParser.SET = 99;
hiveParser.SMALLINT = 100;
hiveParser.TABLE = 101;
hiveParser.TABLESAMPLE = 102;
hiveParser.THEN = 103;
hiveParser.TIMESTAMP = 104;
hiveParser.TO = 105;
hiveParser.TRANSFORM = 106;
hiveParser.TRIGGER = 107;
hiveParser.TRUE = 108;
hiveParser.TRUNCATE = 109;
hiveParser.UNBOUNDED = 110;
hiveParser.UNION = 111;
hiveParser.UNIQUEJOIN = 112;
hiveParser.UPDATE = 113;
hiveParser.USER = 114;
hiveParser.USING = 115;
hiveParser.UTC_TMESTAMP = 116;
hiveParser.VALUES = 117;
hiveParser.VARCHAR = 118;
hiveParser.WHEN = 119;
hiveParser.WHERE = 120;
hiveParser.WINDOW = 121;
hiveParser.WITH = 122;
hiveParser.COMMIT = 123;
hiveParser.ONLY = 124;
hiveParser.REGEXP = 125;
hiveParser.RLIKE = 126;
hiveParser.ROLLBACK = 127;
hiveParser.START = 128;
hiveParser.CACHE = 129;
hiveParser.CONSTRAINT = 130;
hiveParser.FOREIGN = 131;
hiveParser.PRIMARY = 132;
hiveParser.REFERENCES = 133;
hiveParser.DAYOFWEEK = 134;
hiveParser.EXTRACT = 135;
hiveParser.FLOOR = 136;
hiveParser.INTEGER = 137;
hiveParser.PRECISION = 138;
hiveParser.VIEWS = 139;
hiveParser.TIME = 140;
hiveParser.NUMERIC = 141;
hiveParser.SYNC = 142;
hiveParser.SHOW = 143;
hiveParser.DATABASES = 144;
hiveParser.SCHEMAS = 145;
hiveParser.TABLES = 146;
hiveParser.ADD = 147;
hiveParser.ADMIN = 148;
hiveParser.AFTER = 149;
hiveParser.ANALYZE = 150;
hiveParser.ARCHIVE = 151;
hiveParser.ASC = 152;
hiveParser.BEFORE = 153;
hiveParser.BUCKET = 154;
hiveParser.BUCKETS = 155;
hiveParser.CASCADE = 156;
hiveParser.CHANGE = 157;
hiveParser.CLUSTER = 158;
hiveParser.CLUSTERED = 159;
hiveParser.CLUSTERSTATUS = 160;
hiveParser.COLLECTION = 161;
hiveParser.COLUMNS = 162;
hiveParser.COMMENT = 163;
hiveParser.COMPACT = 164;
hiveParser.COMPACTIONS = 165;
hiveParser.COMPUTE = 166;
hiveParser.CONCATENATE = 167;
hiveParser.CONTINUE = 168;
hiveParser.DATA = 169;
hiveParser.DATETIME = 170;
hiveParser.DAY = 171;
hiveParser.DBPROPERTIES = 172;
hiveParser.DEFERRED = 173;
hiveParser.DEFINED = 174;
hiveParser.DELIMITED = 175;
hiveParser.DEPENDENCY = 176;
hiveParser.DESC = 177;
hiveParser.DIRECTORIES = 178;
hiveParser.DIRECTORY = 179;
hiveParser.DISABLE = 180;
hiveParser.DISTRIBUTE = 181;
hiveParser.ELEM_TYPE = 182;
hiveParser.ENABLE = 183;
hiveParser.ESCAPED = 184;
hiveParser.EXCLUSIVE = 185;
hiveParser.EXPLAIN = 186;
hiveParser.EXPORT = 187;
hiveParser.FIELDS = 188;
hiveParser.FILE = 189;
hiveParser.FILEFORMAT = 190;
hiveParser.FIRST = 191;
hiveParser.FORMAT = 192;
hiveParser.FORMATTED = 193;
hiveParser.FUNCTIONS = 194;
hiveParser.HOLD_DDLTIME = 195;
hiveParser.HOUR = 196;
hiveParser.IDXPROPERTIES = 197;
hiveParser.IGNORE = 198;
hiveParser.INDEX = 199;
hiveParser.INDEXES = 200;
hiveParser.INPATH = 201;
hiveParser.INPUTDRIVER = 202;
hiveParser.INPUTFORMAT = 203;
hiveParser.ITEMS = 204;
hiveParser.JAR = 205;
hiveParser.KEYS = 206;
hiveParser.KEY_TYPE = 207;
hiveParser.LIMIT = 208;
hiveParser.LINES = 209;
hiveParser.LOAD = 210;
hiveParser.LOCATION = 211;
hiveParser.LOCK = 212;
hiveParser.LOCKS = 213;
hiveParser.LOGICAL = 214;
hiveParser.LONG = 215;
hiveParser.MAPJOIN = 216;
hiveParser.MATERIALIZED = 217;
hiveParser.METADATA = 218;
hiveParser.SETMINUS = 219;
hiveParser.MINUTE = 220;
hiveParser.MONTH = 221;
hiveParser.MSCK = 222;
hiveParser.NOSCAN = 223;
hiveParser.NO_DROP = 224;
hiveParser.OFFLINE = 225;
hiveParser.OPTION = 226;
hiveParser.OUTPUTDRIVER = 227;
hiveParser.OUTPUTFORMAT = 228;
hiveParser.OVERWRITE = 229;
hiveParser.OWNER = 230;
hiveParser.PARTITIONED = 231;
hiveParser.PARTITIONS = 232;
hiveParser.SETPLUS = 233;
hiveParser.PRETTY = 234;
hiveParser.PRINCIPALS = 235;
hiveParser.PROTECTION = 236;
hiveParser.PURGE = 237;
hiveParser.READ = 238;
hiveParser.READONLY = 239;
hiveParser.REBUILD = 240;
hiveParser.RECORDREADER = 241;
hiveParser.RECORDWRITER = 242;
hiveParser.RELOAD = 243;
hiveParser.RENAME = 244;
hiveParser.REPAIR = 245;
hiveParser.REPLACE = 246;
hiveParser.REPLICATION = 247;
hiveParser.RESTRICT = 248;
hiveParser.REWRITE = 249;
hiveParser.ROLE = 250;
hiveParser.ROLES = 251;
hiveParser.SCHEMA = 252;
hiveParser.SECOND = 253;
hiveParser.SEMI = 254;
hiveParser.SERDE = 255;
hiveParser.SERDEPROPERTIES = 256;
hiveParser.SERVER = 257;
hiveParser.SETS = 258;
hiveParser.SHARED = 259;
hiveParser.SHOW_DATABASE = 260;
hiveParser.SKEWED = 261;
hiveParser.SORT = 262;
hiveParser.SORTED = 263;
hiveParser.SSL = 264;
hiveParser.STATISTICS = 265;
hiveParser.STORED = 266;
hiveParser.STREAMTABLE = 267;
hiveParser.STRUCT = 268;
hiveParser.TBLPROPERTIES = 269;
hiveParser.TEMPORARY = 270;
hiveParser.TERMINATED = 271;
hiveParser.TINYINT = 272;
hiveParser.TOUCH = 273;
hiveParser.TRANSACTIONS = 274;
hiveParser.UNARCHIVE = 275;
hiveParser.UNDO = 276;
hiveParser.UNIONTYPE = 277;
hiveParser.UNLOCK = 278;
hiveParser.UNSET = 279;
hiveParser.UNSIGNED = 280;
hiveParser.URI = 281;
hiveParser.USE = 282;
hiveParser.UTC = 283;
hiveParser.UTCTIMESTAMP = 284;
hiveParser.VALUE_TYPE = 285;
hiveParser.VIEW = 286;
hiveParser.WHILE = 287;
hiveParser.YEAR = 288;
hiveParser.AUTOCOMMIT = 289;
hiveParser.ISOLATION = 290;
hiveParser.LEVEL = 291;
hiveParser.OFFSET = 292;
hiveParser.SNAPSHOT = 293;
hiveParser.TRANSACTION = 294;
hiveParser.WORK = 295;
hiveParser.WRITE = 296;
hiveParser.ABORT = 297;
hiveParser.KEY = 298;
hiveParser.LAST = 299;
hiveParser.NORELY = 300;
hiveParser.NOVALIDATE = 301;
hiveParser.NULLS = 302;
hiveParser.RELY = 303;
hiveParser.VALIDATE = 304;
hiveParser.DETAIL = 305;
hiveParser.DOW = 306;
hiveParser.EXPRESSION = 307;
hiveParser.OPERATOR = 308;
hiveParser.QUARTER = 309;
hiveParser.SUMMARY = 310;
hiveParser.VECTORIZATION = 311;
hiveParser.WEEK = 312;
hiveParser.YEARS = 313;
hiveParser.MONTHS = 314;
hiveParser.WEEKS = 315;
hiveParser.DAYS = 316;
hiveParser.HOURS = 317;
hiveParser.MINUTES = 318;
hiveParser.SECONDS = 319;
hiveParser.TIMESTAMPTZ = 320;
hiveParser.ZONE = 321;
hiveParser.EQ = 322;
hiveParser.PLUS = 323;
hiveParser.MINUS = 324;
hiveParser.STRING = 325;
hiveParser.VARIABLE_REFERENCE = 326;
hiveParser.INTEGER_VALUE = 327;
hiveParser.IDENTIFIER = 328;
hiveParser.BIGINT_LITERAL = 329;
hiveParser.SMALLINT_LITERAL = 330;
hiveParser.TINYINT_LITERAL = 331;
hiveParser.DECIMAL_VALUE = 332;
hiveParser.DOUBLE_LITERAL = 333;
hiveParser.BIGDECIMAL_LITERAL = 334;
hiveParser.BACKQUOTED_IDENTIFIER = 335;
hiveParser.WS = 336;

hiveParser.RULE_singleStatement = 0;
hiveParser.RULE_showStatement = 1;
hiveParser.RULE_showDataBases = 2;
hiveParser.RULE_showTables = 3;
hiveParser.RULE_showTableExtended = 4;
hiveParser.RULE_showViews = 5;
hiveParser.RULE_showPartitions = 6;
hiveParser.RULE_showTableProperties = 7;
hiveParser.RULE_showCreateTable = 8;
hiveParser.RULE_showColumns = 9;
hiveParser.RULE_showFunctions = 10;
hiveParser.RULE_showLocks = 11;
hiveParser.RULE_showConf = 12;
hiveParser.RULE_partitionSpec = 13;
hiveParser.RULE_partitionVal = 14;
hiveParser.RULE_database_name = 15;
hiveParser.RULE_table_name = 16;
hiveParser.RULE_tablePropertyList = 17;
hiveParser.RULE_tableProperty = 18;
hiveParser.RULE_tablePropertyKey = 19;
hiveParser.RULE_configuration_name = 20;
hiveParser.RULE_tablePropertyValue = 21;
hiveParser.RULE_constant = 22;
hiveParser.RULE_interval = 23;
hiveParser.RULE_intervalField = 24;
hiveParser.RULE_intervalValue = 25;
hiveParser.RULE_number = 26;
hiveParser.RULE_booleanValue = 27;
hiveParser.RULE_identifier = 28;
hiveParser.RULE_strictIdentifier = 29;
hiveParser.RULE_quotedIdentifier = 30;
hiveParser.RULE_nonReserved = 31;

function SingleStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_singleStatement;
    return this;
}

SingleStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleStatementContext.prototype.constructor = SingleStatementContext;

SingleStatementContext.prototype.showStatement = function() {
    return this.getTypedRuleContext(ShowStatementContext,0);
};

SingleStatementContext.prototype.EOF = function() {
    return this.getToken(hiveParser.EOF, 0);
};

SingleStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterSingleStatement(this);
	}
};

SingleStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitSingleStatement(this);
	}
};

SingleStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitSingleStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.SingleStatementContext = SingleStatementContext;

hiveParser.prototype.singleStatement = function() {

    var localctx = new SingleStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, hiveParser.RULE_singleStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.showStatement();
        this.state = 65;
        this.match(hiveParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showStatement;
    return this;
}

ShowStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowStatementContext.prototype.constructor = ShowStatementContext;

ShowStatementContext.prototype.showDataBases = function() {
    return this.getTypedRuleContext(ShowDataBasesContext,0);
};

ShowStatementContext.prototype.showTables = function() {
    return this.getTypedRuleContext(ShowTablesContext,0);
};

ShowStatementContext.prototype.showViews = function() {
    return this.getTypedRuleContext(ShowViewsContext,0);
};

ShowStatementContext.prototype.showPartitions = function() {
    return this.getTypedRuleContext(ShowPartitionsContext,0);
};

ShowStatementContext.prototype.showTableExtended = function() {
    return this.getTypedRuleContext(ShowTableExtendedContext,0);
};

ShowStatementContext.prototype.showTableProperties = function() {
    return this.getTypedRuleContext(ShowTablePropertiesContext,0);
};

ShowStatementContext.prototype.showCreateTable = function() {
    return this.getTypedRuleContext(ShowCreateTableContext,0);
};

ShowStatementContext.prototype.showColumns = function() {
    return this.getTypedRuleContext(ShowColumnsContext,0);
};

ShowStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowStatement(this);
	}
};

ShowStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowStatement(this);
	}
};

ShowStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowStatementContext = ShowStatementContext;

hiveParser.prototype.showStatement = function() {

    var localctx = new ShowStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, hiveParser.RULE_showStatement);
    try {
        this.state = 75;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 67;
            this.showDataBases();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 68;
            this.showTables();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 69;
            this.showViews();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 70;
            this.showPartitions();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 71;
            this.showTableExtended();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 72;
            this.showTableProperties();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 73;
            this.showCreateTable();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 74;
            this.showColumns();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowDataBasesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showDataBases;
    this.pattern = null; // Token
    return this;
}

ShowDataBasesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowDataBasesContext.prototype.constructor = ShowDataBasesContext;

ShowDataBasesContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowDataBasesContext.prototype.DATABASES = function() {
    return this.getToken(hiveParser.DATABASES, 0);
};

ShowDataBasesContext.prototype.SCHEMAS = function() {
    return this.getToken(hiveParser.SCHEMAS, 0);
};

ShowDataBasesContext.prototype.LIKE = function() {
    return this.getToken(hiveParser.LIKE, 0);
};

ShowDataBasesContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};

ShowDataBasesContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowDataBases(this);
	}
};

ShowDataBasesContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowDataBases(this);
	}
};

ShowDataBasesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowDataBases(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowDataBasesContext = ShowDataBasesContext;

hiveParser.prototype.showDataBases = function() {

    var localctx = new ShowDataBasesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, hiveParser.RULE_showDataBases);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(hiveParser.SHOW);
        this.state = 78;
        _la = this._input.LA(1);
        if(!(_la===hiveParser.DATABASES || _la===hiveParser.SCHEMAS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.LIKE) {
            this.state = 79;
            this.match(hiveParser.LIKE);
            this.state = 80;
            localctx.pattern = this.match(hiveParser.STRING);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowTablesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showTables;
    this.pattern = null; // Token
    return this;
}

ShowTablesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowTablesContext.prototype.constructor = ShowTablesContext;

ShowTablesContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowTablesContext.prototype.TABLES = function() {
    return this.getToken(hiveParser.TABLES, 0);
};

ShowTablesContext.prototype.IN = function() {
    return this.getToken(hiveParser.IN, 0);
};

ShowTablesContext.prototype.database_name = function() {
    return this.getTypedRuleContext(Database_nameContext,0);
};

ShowTablesContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};

ShowTablesContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowTables(this);
	}
};

ShowTablesContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowTables(this);
	}
};

ShowTablesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowTables(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowTablesContext = ShowTablesContext;

hiveParser.prototype.showTables = function() {

    var localctx = new ShowTablesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, hiveParser.RULE_showTables);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(hiveParser.SHOW);
        this.state = 84;
        this.match(hiveParser.TABLES);
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.IN) {
            this.state = 85;
            this.match(hiveParser.IN);
            this.state = 86;
            this.database_name();
        }

        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.STRING) {
            this.state = 89;
            localctx.pattern = this.match(hiveParser.STRING);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowTableExtendedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showTableExtended;
    return this;
}

ShowTableExtendedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowTableExtendedContext.prototype.constructor = ShowTableExtendedContext;

ShowTableExtendedContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowTableExtendedContext.prototype.TABLE = function() {
    return this.getToken(hiveParser.TABLE, 0);
};

ShowTableExtendedContext.prototype.EXTENDED = function() {
    return this.getToken(hiveParser.EXTENDED, 0);
};

ShowTableExtendedContext.prototype.LIKE = function() {
    return this.getToken(hiveParser.LIKE, 0);
};

ShowTableExtendedContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};

ShowTableExtendedContext.prototype.database_name = function() {
    return this.getTypedRuleContext(Database_nameContext,0);
};

ShowTableExtendedContext.prototype.partitionSpec = function() {
    return this.getTypedRuleContext(PartitionSpecContext,0);
};

ShowTableExtendedContext.prototype.IN = function() {
    return this.getToken(hiveParser.IN, 0);
};

ShowTableExtendedContext.prototype.FROM = function() {
    return this.getToken(hiveParser.FROM, 0);
};

ShowTableExtendedContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowTableExtended(this);
	}
};

ShowTableExtendedContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowTableExtended(this);
	}
};

ShowTableExtendedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowTableExtended(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowTableExtendedContext = ShowTableExtendedContext;

hiveParser.prototype.showTableExtended = function() {

    var localctx = new ShowTableExtendedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, hiveParser.RULE_showTableExtended);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.match(hiveParser.SHOW);
        this.state = 93;
        this.match(hiveParser.TABLE);
        this.state = 94;
        this.match(hiveParser.EXTENDED);
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.FROM || _la===hiveParser.IN) {
            this.state = 95;
            _la = this._input.LA(1);
            if(!(_la===hiveParser.FROM || _la===hiveParser.IN)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 96;
            this.database_name();
        }

        this.state = 99;
        this.match(hiveParser.LIKE);
        this.state = 100;
        this.match(hiveParser.STRING);
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.PARTITION) {
            this.state = 101;
            this.partitionSpec();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowViewsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showViews;
    this.pattern = null; // Token
    return this;
}

ShowViewsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowViewsContext.prototype.constructor = ShowViewsContext;

ShowViewsContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowViewsContext.prototype.VIEWS = function() {
    return this.getToken(hiveParser.VIEWS, 0);
};

ShowViewsContext.prototype.MATERIALIZED = function() {
    return this.getToken(hiveParser.MATERIALIZED, 0);
};

ShowViewsContext.prototype.database_name = function() {
    return this.getTypedRuleContext(Database_nameContext,0);
};

ShowViewsContext.prototype.LIKE = function() {
    return this.getToken(hiveParser.LIKE, 0);
};

ShowViewsContext.prototype.IN = function() {
    return this.getToken(hiveParser.IN, 0);
};

ShowViewsContext.prototype.FROM = function() {
    return this.getToken(hiveParser.FROM, 0);
};

ShowViewsContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};

ShowViewsContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowViews(this);
	}
};

ShowViewsContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowViews(this);
	}
};

ShowViewsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowViews(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowViewsContext = ShowViewsContext;

hiveParser.prototype.showViews = function() {

    var localctx = new ShowViewsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, hiveParser.RULE_showViews);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(hiveParser.SHOW);
        this.state = 105;
        _la = this._input.LA(1);
        if(!(_la===hiveParser.VIEWS || _la===hiveParser.MATERIALIZED)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 108;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.FROM || _la===hiveParser.IN) {
            this.state = 106;
            _la = this._input.LA(1);
            if(!(_la===hiveParser.FROM || _la===hiveParser.IN)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 107;
            this.database_name();
        }

        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.LIKE) {
            this.state = 110;
            this.match(hiveParser.LIKE);
            this.state = 111;
            localctx.pattern = this.match(hiveParser.STRING);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowPartitionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showPartitions;
    return this;
}

ShowPartitionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowPartitionsContext.prototype.constructor = ShowPartitionsContext;

ShowPartitionsContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowPartitionsContext.prototype.PARTITIONS = function() {
    return this.getToken(hiveParser.PARTITIONS, 0);
};

ShowPartitionsContext.prototype.table_name = function() {
    return this.getTypedRuleContext(Table_nameContext,0);
};

ShowPartitionsContext.prototype.partitionSpec = function() {
    return this.getTypedRuleContext(PartitionSpecContext,0);
};

ShowPartitionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowPartitions(this);
	}
};

ShowPartitionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowPartitions(this);
	}
};

ShowPartitionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowPartitions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowPartitionsContext = ShowPartitionsContext;

hiveParser.prototype.showPartitions = function() {

    var localctx = new ShowPartitionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, hiveParser.RULE_showPartitions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(hiveParser.SHOW);
        this.state = 115;
        this.match(hiveParser.PARTITIONS);
        this.state = 116;
        this.table_name();
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.PARTITION) {
            this.state = 117;
            this.partitionSpec();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowTablePropertiesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showTableProperties;
    return this;
}

ShowTablePropertiesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowTablePropertiesContext.prototype.constructor = ShowTablePropertiesContext;

ShowTablePropertiesContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowTablePropertiesContext.prototype.TBLPROPERTIES = function() {
    return this.getToken(hiveParser.TBLPROPERTIES, 0);
};

ShowTablePropertiesContext.prototype.table_name = function() {
    return this.getTypedRuleContext(Table_nameContext,0);
};

ShowTablePropertiesContext.prototype.tablePropertyList = function() {
    return this.getTypedRuleContext(TablePropertyListContext,0);
};

ShowTablePropertiesContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowTableProperties(this);
	}
};

ShowTablePropertiesContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowTableProperties(this);
	}
};

ShowTablePropertiesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowTableProperties(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowTablePropertiesContext = ShowTablePropertiesContext;

hiveParser.prototype.showTableProperties = function() {

    var localctx = new ShowTablePropertiesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, hiveParser.RULE_showTableProperties);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(hiveParser.SHOW);
        this.state = 121;
        this.match(hiveParser.TBLPROPERTIES);
        this.state = 122;
        this.table_name();
        this.state = 124;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.T__0) {
            this.state = 123;
            this.tablePropertyList();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowCreateTableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showCreateTable;
    return this;
}

ShowCreateTableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowCreateTableContext.prototype.constructor = ShowCreateTableContext;

ShowCreateTableContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowCreateTableContext.prototype.CREATE = function() {
    return this.getToken(hiveParser.CREATE, 0);
};

ShowCreateTableContext.prototype.TABLE = function() {
    return this.getToken(hiveParser.TABLE, 0);
};

ShowCreateTableContext.prototype.table_name = function() {
    return this.getTypedRuleContext(Table_nameContext,0);
};

ShowCreateTableContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowCreateTable(this);
	}
};

ShowCreateTableContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowCreateTable(this);
	}
};

ShowCreateTableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowCreateTable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowCreateTableContext = ShowCreateTableContext;

hiveParser.prototype.showCreateTable = function() {

    var localctx = new ShowCreateTableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, hiveParser.RULE_showCreateTable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.match(hiveParser.SHOW);
        this.state = 127;
        this.match(hiveParser.CREATE);
        this.state = 128;
        this.match(hiveParser.TABLE);
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.CROSS || ((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (hiveParser.FULL - 49)) | (1 << (hiveParser.INNER - 49)) | (1 << (hiveParser.INTERSECT - 49)) | (1 << (hiveParser.JOIN - 49)) | (1 << (hiveParser.LEFT - 49)) | (1 << (hiveParser.ON - 49)))) !== 0) || _la===hiveParser.RIGHT || _la===hiveParser.UNION || ((((_la - 143)) & ~0x1f) == 0 && ((1 << (_la - 143)) & ((1 << (hiveParser.SHOW - 143)) | (1 << (hiveParser.DATABASES - 143)) | (1 << (hiveParser.SCHEMAS - 143)) | (1 << (hiveParser.TABLES - 143)) | (1 << (hiveParser.ADD - 143)) | (1 << (hiveParser.ADMIN - 143)) | (1 << (hiveParser.AFTER - 143)) | (1 << (hiveParser.ANALYZE - 143)) | (1 << (hiveParser.ARCHIVE - 143)) | (1 << (hiveParser.ASC - 143)) | (1 << (hiveParser.BEFORE - 143)) | (1 << (hiveParser.BUCKET - 143)) | (1 << (hiveParser.BUCKETS - 143)) | (1 << (hiveParser.CASCADE - 143)) | (1 << (hiveParser.CHANGE - 143)) | (1 << (hiveParser.CLUSTER - 143)) | (1 << (hiveParser.CLUSTERED - 143)) | (1 << (hiveParser.CLUSTERSTATUS - 143)) | (1 << (hiveParser.COLLECTION - 143)) | (1 << (hiveParser.COLUMNS - 143)) | (1 << (hiveParser.COMMENT - 143)) | (1 << (hiveParser.COMPACT - 143)) | (1 << (hiveParser.COMPACTIONS - 143)) | (1 << (hiveParser.COMPUTE - 143)) | (1 << (hiveParser.CONCATENATE - 143)) | (1 << (hiveParser.CONTINUE - 143)) | (1 << (hiveParser.DATA - 143)) | (1 << (hiveParser.DATETIME - 143)) | (1 << (hiveParser.DAY - 143)) | (1 << (hiveParser.DBPROPERTIES - 143)) | (1 << (hiveParser.DEFERRED - 143)) | (1 << (hiveParser.DEFINED - 143)))) !== 0) || ((((_la - 175)) & ~0x1f) == 0 && ((1 << (_la - 175)) & ((1 << (hiveParser.DELIMITED - 175)) | (1 << (hiveParser.DEPENDENCY - 175)) | (1 << (hiveParser.DESC - 175)) | (1 << (hiveParser.DIRECTORIES - 175)) | (1 << (hiveParser.DIRECTORY - 175)) | (1 << (hiveParser.DISABLE - 175)) | (1 << (hiveParser.DISTRIBUTE - 175)) | (1 << (hiveParser.ELEM_TYPE - 175)) | (1 << (hiveParser.ENABLE - 175)) | (1 << (hiveParser.ESCAPED - 175)) | (1 << (hiveParser.EXCLUSIVE - 175)) | (1 << (hiveParser.EXPLAIN - 175)) | (1 << (hiveParser.EXPORT - 175)) | (1 << (hiveParser.FIELDS - 175)) | (1 << (hiveParser.FILE - 175)) | (1 << (hiveParser.FILEFORMAT - 175)) | (1 << (hiveParser.FIRST - 175)) | (1 << (hiveParser.FORMAT - 175)) | (1 << (hiveParser.FORMATTED - 175)) | (1 << (hiveParser.FUNCTIONS - 175)) | (1 << (hiveParser.HOLD_DDLTIME - 175)) | (1 << (hiveParser.HOUR - 175)) | (1 << (hiveParser.IDXPROPERTIES - 175)) | (1 << (hiveParser.IGNORE - 175)) | (1 << (hiveParser.INDEX - 175)) | (1 << (hiveParser.INDEXES - 175)) | (1 << (hiveParser.INPATH - 175)) | (1 << (hiveParser.INPUTDRIVER - 175)) | (1 << (hiveParser.INPUTFORMAT - 175)) | (1 << (hiveParser.ITEMS - 175)) | (1 << (hiveParser.JAR - 175)) | (1 << (hiveParser.KEYS - 175)))) !== 0) || ((((_la - 207)) & ~0x1f) == 0 && ((1 << (_la - 207)) & ((1 << (hiveParser.KEY_TYPE - 207)) | (1 << (hiveParser.LIMIT - 207)) | (1 << (hiveParser.LINES - 207)) | (1 << (hiveParser.LOAD - 207)) | (1 << (hiveParser.LOCATION - 207)) | (1 << (hiveParser.LOCK - 207)) | (1 << (hiveParser.LOCKS - 207)) | (1 << (hiveParser.LOGICAL - 207)) | (1 << (hiveParser.LONG - 207)) | (1 << (hiveParser.MAPJOIN - 207)) | (1 << (hiveParser.MATERIALIZED - 207)) | (1 << (hiveParser.METADATA - 207)) | (1 << (hiveParser.SETMINUS - 207)) | (1 << (hiveParser.MINUTE - 207)) | (1 << (hiveParser.MONTH - 207)) | (1 << (hiveParser.MSCK - 207)) | (1 << (hiveParser.NOSCAN - 207)) | (1 << (hiveParser.NO_DROP - 207)) | (1 << (hiveParser.OFFLINE - 207)) | (1 << (hiveParser.OPTION - 207)) | (1 << (hiveParser.OUTPUTDRIVER - 207)) | (1 << (hiveParser.OUTPUTFORMAT - 207)) | (1 << (hiveParser.OVERWRITE - 207)) | (1 << (hiveParser.OWNER - 207)) | (1 << (hiveParser.PARTITIONED - 207)) | (1 << (hiveParser.PARTITIONS - 207)) | (1 << (hiveParser.PRETTY - 207)) | (1 << (hiveParser.PRINCIPALS - 207)) | (1 << (hiveParser.PROTECTION - 207)) | (1 << (hiveParser.PURGE - 207)) | (1 << (hiveParser.READ - 207)))) !== 0) || ((((_la - 239)) & ~0x1f) == 0 && ((1 << (_la - 239)) & ((1 << (hiveParser.READONLY - 239)) | (1 << (hiveParser.REBUILD - 239)) | (1 << (hiveParser.RECORDREADER - 239)) | (1 << (hiveParser.RECORDWRITER - 239)) | (1 << (hiveParser.RELOAD - 239)) | (1 << (hiveParser.RENAME - 239)) | (1 << (hiveParser.REPAIR - 239)) | (1 << (hiveParser.REPLACE - 239)) | (1 << (hiveParser.REPLICATION - 239)) | (1 << (hiveParser.RESTRICT - 239)) | (1 << (hiveParser.REWRITE - 239)) | (1 << (hiveParser.ROLE - 239)) | (1 << (hiveParser.ROLES - 239)) | (1 << (hiveParser.SCHEMA - 239)) | (1 << (hiveParser.SECOND - 239)) | (1 << (hiveParser.SEMI - 239)) | (1 << (hiveParser.SERDE - 239)) | (1 << (hiveParser.SERDEPROPERTIES - 239)) | (1 << (hiveParser.SERVER - 239)) | (1 << (hiveParser.SETS - 239)) | (1 << (hiveParser.SHARED - 239)) | (1 << (hiveParser.SHOW_DATABASE - 239)) | (1 << (hiveParser.SKEWED - 239)) | (1 << (hiveParser.SORT - 239)) | (1 << (hiveParser.SORTED - 239)) | (1 << (hiveParser.SSL - 239)) | (1 << (hiveParser.STATISTICS - 239)) | (1 << (hiveParser.STORED - 239)) | (1 << (hiveParser.STREAMTABLE - 239)) | (1 << (hiveParser.STRUCT - 239)) | (1 << (hiveParser.TBLPROPERTIES - 239)) | (1 << (hiveParser.TEMPORARY - 239)))) !== 0) || ((((_la - 271)) & ~0x1f) == 0 && ((1 << (_la - 271)) & ((1 << (hiveParser.TERMINATED - 271)) | (1 << (hiveParser.TINYINT - 271)) | (1 << (hiveParser.TOUCH - 271)) | (1 << (hiveParser.TRANSACTIONS - 271)) | (1 << (hiveParser.UNARCHIVE - 271)) | (1 << (hiveParser.UNDO - 271)) | (1 << (hiveParser.UNIONTYPE - 271)) | (1 << (hiveParser.UNLOCK - 271)) | (1 << (hiveParser.UNSET - 271)) | (1 << (hiveParser.UNSIGNED - 271)) | (1 << (hiveParser.URI - 271)) | (1 << (hiveParser.USE - 271)) | (1 << (hiveParser.UTC - 271)) | (1 << (hiveParser.UTCTIMESTAMP - 271)) | (1 << (hiveParser.VALUE_TYPE - 271)) | (1 << (hiveParser.VIEW - 271)) | (1 << (hiveParser.WHILE - 271)) | (1 << (hiveParser.YEAR - 271)) | (1 << (hiveParser.AUTOCOMMIT - 271)) | (1 << (hiveParser.ISOLATION - 271)) | (1 << (hiveParser.LEVEL - 271)) | (1 << (hiveParser.OFFSET - 271)) | (1 << (hiveParser.SNAPSHOT - 271)) | (1 << (hiveParser.TRANSACTION - 271)) | (1 << (hiveParser.WORK - 271)) | (1 << (hiveParser.WRITE - 271)) | (1 << (hiveParser.ABORT - 271)) | (1 << (hiveParser.KEY - 271)) | (1 << (hiveParser.LAST - 271)) | (1 << (hiveParser.NORELY - 271)) | (1 << (hiveParser.NOVALIDATE - 271)) | (1 << (hiveParser.NULLS - 271)))) !== 0) || ((((_la - 303)) & ~0x1f) == 0 && ((1 << (_la - 303)) & ((1 << (hiveParser.RELY - 303)) | (1 << (hiveParser.VALIDATE - 303)) | (1 << (hiveParser.DETAIL - 303)) | (1 << (hiveParser.DOW - 303)) | (1 << (hiveParser.EXPRESSION - 303)) | (1 << (hiveParser.OPERATOR - 303)) | (1 << (hiveParser.QUARTER - 303)) | (1 << (hiveParser.SUMMARY - 303)) | (1 << (hiveParser.VECTORIZATION - 303)) | (1 << (hiveParser.WEEK - 303)) | (1 << (hiveParser.YEARS - 303)) | (1 << (hiveParser.MONTHS - 303)) | (1 << (hiveParser.WEEKS - 303)) | (1 << (hiveParser.DAYS - 303)) | (1 << (hiveParser.HOURS - 303)) | (1 << (hiveParser.MINUTES - 303)) | (1 << (hiveParser.SECONDS - 303)) | (1 << (hiveParser.TIMESTAMPTZ - 303)) | (1 << (hiveParser.ZONE - 303)) | (1 << (hiveParser.PLUS - 303)) | (1 << (hiveParser.STRING - 303)) | (1 << (hiveParser.VARIABLE_REFERENCE - 303)) | (1 << (hiveParser.IDENTIFIER - 303)))) !== 0) || _la===hiveParser.BACKQUOTED_IDENTIFIER) {
            this.state = 129;
            this.table_name();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowColumnsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showColumns;
    this.pattern = null; // Token
    return this;
}

ShowColumnsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowColumnsContext.prototype.constructor = ShowColumnsContext;

ShowColumnsContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowColumnsContext.prototype.COLUMNS = function() {
    return this.getToken(hiveParser.COLUMNS, 0);
};

ShowColumnsContext.prototype.table_name = function() {
    return this.getTypedRuleContext(Table_nameContext,0);
};

ShowColumnsContext.prototype.database_name = function() {
    return this.getTypedRuleContext(Database_nameContext,0);
};

ShowColumnsContext.prototype.LIKE = function() {
    return this.getToken(hiveParser.LIKE, 0);
};

ShowColumnsContext.prototype.FROM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(hiveParser.FROM);
    } else {
        return this.getToken(hiveParser.FROM, i);
    }
};


ShowColumnsContext.prototype.IN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(hiveParser.IN);
    } else {
        return this.getToken(hiveParser.IN, i);
    }
};


ShowColumnsContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};

ShowColumnsContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowColumns(this);
	}
};

ShowColumnsContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowColumns(this);
	}
};

ShowColumnsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowColumns(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowColumnsContext = ShowColumnsContext;

hiveParser.prototype.showColumns = function() {

    var localctx = new ShowColumnsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, hiveParser.RULE_showColumns);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(hiveParser.SHOW);
        this.state = 133;
        this.match(hiveParser.COLUMNS);
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.FROM || _la===hiveParser.IN) {
            this.state = 134;
            _la = this._input.LA(1);
            if(!(_la===hiveParser.FROM || _la===hiveParser.IN)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 137;
        this.table_name();
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.FROM || _la===hiveParser.IN) {
            this.state = 138;
            _la = this._input.LA(1);
            if(!(_la===hiveParser.FROM || _la===hiveParser.IN)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 139;
            this.database_name();
        }

        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.LIKE) {
            this.state = 142;
            this.match(hiveParser.LIKE);
            this.state = 143;
            localctx.pattern = this.match(hiveParser.STRING);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowFunctionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showFunctions;
    this.pattern = null; // Token
    return this;
}

ShowFunctionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowFunctionsContext.prototype.constructor = ShowFunctionsContext;

ShowFunctionsContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowFunctionsContext.prototype.FUNCTIONS = function() {
    return this.getToken(hiveParser.FUNCTIONS, 0);
};

ShowFunctionsContext.prototype.LIKE = function() {
    return this.getToken(hiveParser.LIKE, 0);
};

ShowFunctionsContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};

ShowFunctionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowFunctions(this);
	}
};

ShowFunctionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowFunctions(this);
	}
};

ShowFunctionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowFunctions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowFunctionsContext = ShowFunctionsContext;

hiveParser.prototype.showFunctions = function() {

    var localctx = new ShowFunctionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, hiveParser.RULE_showFunctions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(hiveParser.SHOW);
        this.state = 147;
        this.match(hiveParser.FUNCTIONS);
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.LIKE) {
            this.state = 148;
            this.match(hiveParser.LIKE);
            this.state = 149;
            localctx.pattern = this.match(hiveParser.STRING);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowLocksContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showLocks;
    return this;
}

ShowLocksContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowLocksContext.prototype.constructor = ShowLocksContext;


 
ShowLocksContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ShowDatabaseLocksContext(parser, ctx) {
	ShowLocksContext.call(this, parser);
    ShowLocksContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ShowDatabaseLocksContext.prototype = Object.create(ShowLocksContext.prototype);
ShowDatabaseLocksContext.prototype.constructor = ShowDatabaseLocksContext;

hiveParser.ShowDatabaseLocksContext = ShowDatabaseLocksContext;

ShowDatabaseLocksContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowDatabaseLocksContext.prototype.LOCKS = function() {
    return this.getToken(hiveParser.LOCKS, 0);
};

ShowDatabaseLocksContext.prototype.database_name = function() {
    return this.getTypedRuleContext(Database_nameContext,0);
};

ShowDatabaseLocksContext.prototype.DATABASES = function() {
    return this.getToken(hiveParser.DATABASES, 0);
};

ShowDatabaseLocksContext.prototype.SCHEMA = function() {
    return this.getToken(hiveParser.SCHEMA, 0);
};
ShowDatabaseLocksContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowDatabaseLocks(this);
	}
};

ShowDatabaseLocksContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowDatabaseLocks(this);
	}
};

ShowDatabaseLocksContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowDatabaseLocks(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ShowTableLocksContext(parser, ctx) {
	ShowLocksContext.call(this, parser);
    ShowLocksContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ShowTableLocksContext.prototype = Object.create(ShowLocksContext.prototype);
ShowTableLocksContext.prototype.constructor = ShowTableLocksContext;

hiveParser.ShowTableLocksContext = ShowTableLocksContext;

ShowTableLocksContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowTableLocksContext.prototype.LOCKS = function() {
    return this.getToken(hiveParser.LOCKS, 0);
};

ShowTableLocksContext.prototype.table_name = function() {
    return this.getTypedRuleContext(Table_nameContext,0);
};

ShowTableLocksContext.prototype.partitionSpec = function() {
    return this.getTypedRuleContext(PartitionSpecContext,0);
};

ShowTableLocksContext.prototype.EXTENDED = function() {
    return this.getToken(hiveParser.EXTENDED, 0);
};
ShowTableLocksContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowTableLocks(this);
	}
};

ShowTableLocksContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowTableLocks(this);
	}
};

ShowTableLocksContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowTableLocks(this);
    } else {
        return visitor.visitChildren(this);
    }
};



hiveParser.ShowLocksContext = ShowLocksContext;

hiveParser.prototype.showLocks = function() {

    var localctx = new ShowLocksContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, hiveParser.RULE_showLocks);
    var _la = 0; // Token type
    try {
        this.state = 167;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ShowTableLocksContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 152;
            this.match(hiveParser.SHOW);
            this.state = 153;
            this.match(hiveParser.LOCKS);
            this.state = 154;
            this.table_name();
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.PARTITION) {
                this.state = 155;
                this.partitionSpec();
            }

            this.state = 159;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.EXTENDED) {
                this.state = 158;
                this.match(hiveParser.EXTENDED);
            }

            break;

        case 2:
            localctx = new ShowDatabaseLocksContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 161;
            this.match(hiveParser.SHOW);
            this.state = 162;
            this.match(hiveParser.LOCKS);
            this.state = 164;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
            if(la_===1) {
                this.state = 163;
                _la = this._input.LA(1);
                if(!(_la===hiveParser.DATABASES || _la===hiveParser.SCHEMA)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }

            }
            this.state = 166;
            this.database_name();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShowConfContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_showConf;
    return this;
}

ShowConfContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowConfContext.prototype.constructor = ShowConfContext;

ShowConfContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

ShowConfContext.prototype.CONF = function() {
    return this.getToken(hiveParser.CONF, 0);
};

ShowConfContext.prototype.configuration_name = function() {
    return this.getTypedRuleContext(Configuration_nameContext,0);
};

ShowConfContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterShowConf(this);
	}
};

ShowConfContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitShowConf(this);
	}
};

ShowConfContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitShowConf(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.ShowConfContext = ShowConfContext;

hiveParser.prototype.showConf = function() {

    var localctx = new ShowConfContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, hiveParser.RULE_showConf);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.match(hiveParser.SHOW);
        this.state = 170;
        this.match(hiveParser.CONF);
        this.state = 171;
        this.configuration_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PartitionSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_partitionSpec;
    return this;
}

PartitionSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PartitionSpecContext.prototype.constructor = PartitionSpecContext;

PartitionSpecContext.prototype.PARTITION = function() {
    return this.getToken(hiveParser.PARTITION, 0);
};

PartitionSpecContext.prototype.partitionVal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PartitionValContext);
    } else {
        return this.getTypedRuleContext(PartitionValContext,i);
    }
};

PartitionSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterPartitionSpec(this);
	}
};

PartitionSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitPartitionSpec(this);
	}
};

PartitionSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitPartitionSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.PartitionSpecContext = PartitionSpecContext;

hiveParser.prototype.partitionSpec = function() {

    var localctx = new PartitionSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, hiveParser.RULE_partitionSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(hiveParser.PARTITION);
        this.state = 174;
        this.match(hiveParser.T__0);
        this.state = 175;
        this.partitionVal();
        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===hiveParser.T__1) {
            this.state = 176;
            this.match(hiveParser.T__1);
            this.state = 177;
            this.partitionVal();
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 183;
        this.match(hiveParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PartitionValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_partitionVal;
    return this;
}

PartitionValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PartitionValContext.prototype.constructor = PartitionValContext;

PartitionValContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

PartitionValContext.prototype.EQ = function() {
    return this.getToken(hiveParser.EQ, 0);
};

PartitionValContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

PartitionValContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterPartitionVal(this);
	}
};

PartitionValContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitPartitionVal(this);
	}
};

PartitionValContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitPartitionVal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.PartitionValContext = PartitionValContext;

hiveParser.prototype.partitionVal = function() {

    var localctx = new PartitionValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, hiveParser.RULE_partitionVal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.identifier();
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.EQ) {
            this.state = 186;
            this.match(hiveParser.EQ);
            this.state = 187;
            this.constant();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Database_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_database_name;
    return this;
}

Database_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Database_nameContext.prototype.constructor = Database_nameContext;

Database_nameContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Database_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterDatabase_name(this);
	}
};

Database_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitDatabase_name(this);
	}
};

Database_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitDatabase_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.Database_nameContext = Database_nameContext;

hiveParser.prototype.database_name = function() {

    var localctx = new Database_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, hiveParser.RULE_database_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Table_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_table_name;
    this.db = null; // Database_nameContext
    this.table = null; // IdentifierContext
    return this;
}

Table_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Table_nameContext.prototype.constructor = Table_nameContext;

Table_nameContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Table_nameContext.prototype.database_name = function() {
    return this.getTypedRuleContext(Database_nameContext,0);
};

Table_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterTable_name(this);
	}
};

Table_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitTable_name(this);
	}
};

Table_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitTable_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.Table_nameContext = Table_nameContext;

hiveParser.prototype.table_name = function() {

    var localctx = new Table_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, hiveParser.RULE_table_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        if(la_===1) {
            this.state = 192;
            localctx.db = this.database_name();
            this.state = 193;
            this.match(hiveParser.T__3);

        }
        this.state = 197;
        localctx.table = this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TablePropertyListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_tablePropertyList;
    return this;
}

TablePropertyListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TablePropertyListContext.prototype.constructor = TablePropertyListContext;

TablePropertyListContext.prototype.tableProperty = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TablePropertyContext);
    } else {
        return this.getTypedRuleContext(TablePropertyContext,i);
    }
};

TablePropertyListContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterTablePropertyList(this);
	}
};

TablePropertyListContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitTablePropertyList(this);
	}
};

TablePropertyListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitTablePropertyList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.TablePropertyListContext = TablePropertyListContext;

hiveParser.prototype.tablePropertyList = function() {

    var localctx = new TablePropertyListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, hiveParser.RULE_tablePropertyList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(hiveParser.T__0);
        this.state = 200;
        this.tableProperty();
        this.state = 205;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===hiveParser.T__1) {
            this.state = 201;
            this.match(hiveParser.T__1);
            this.state = 202;
            this.tableProperty();
            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 208;
        this.match(hiveParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TablePropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_tableProperty;
    this.key = null; // TablePropertyKeyContext
    this.value = null; // TablePropertyValueContext
    return this;
}

TablePropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TablePropertyContext.prototype.constructor = TablePropertyContext;

TablePropertyContext.prototype.tablePropertyKey = function() {
    return this.getTypedRuleContext(TablePropertyKeyContext,0);
};

TablePropertyContext.prototype.tablePropertyValue = function() {
    return this.getTypedRuleContext(TablePropertyValueContext,0);
};

TablePropertyContext.prototype.EQ = function() {
    return this.getToken(hiveParser.EQ, 0);
};

TablePropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterTableProperty(this);
	}
};

TablePropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitTableProperty(this);
	}
};

TablePropertyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitTableProperty(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.TablePropertyContext = TablePropertyContext;

hiveParser.prototype.tableProperty = function() {

    var localctx = new TablePropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, hiveParser.RULE_tableProperty);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        localctx.key = this.tablePropertyKey();
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.FALSE || _la===hiveParser.TRUE || ((((_la - 322)) & ~0x1f) == 0 && ((1 << (_la - 322)) & ((1 << (hiveParser.EQ - 322)) | (1 << (hiveParser.STRING - 322)) | (1 << (hiveParser.INTEGER_VALUE - 322)) | (1 << (hiveParser.DECIMAL_VALUE - 322)))) !== 0)) {
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.EQ) {
                this.state = 211;
                this.match(hiveParser.EQ);
            }

            this.state = 214;
            localctx.value = this.tablePropertyValue();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TablePropertyKeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_tablePropertyKey;
    return this;
}

TablePropertyKeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TablePropertyKeyContext.prototype.constructor = TablePropertyKeyContext;

TablePropertyKeyContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

TablePropertyKeyContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};

TablePropertyKeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterTablePropertyKey(this);
	}
};

TablePropertyKeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitTablePropertyKey(this);
	}
};

TablePropertyKeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitTablePropertyKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.TablePropertyKeyContext = TablePropertyKeyContext;

hiveParser.prototype.tablePropertyKey = function() {

    var localctx = new TablePropertyKeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, hiveParser.RULE_tablePropertyKey);
    var _la = 0; // Token type
    try {
        this.state = 226;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.identifier();
            this.state = 222;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===hiveParser.T__3) {
                this.state = 218;
                this.match(hiveParser.T__3);
                this.state = 219;
                this.identifier();
                this.state = 224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 225;
            this.match(hiveParser.STRING);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Configuration_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_configuration_name;
    return this;
}

Configuration_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Configuration_nameContext.prototype.constructor = Configuration_nameContext;

Configuration_nameContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

Configuration_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterConfiguration_name(this);
	}
};

Configuration_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitConfiguration_name(this);
	}
};

Configuration_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitConfiguration_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.Configuration_nameContext = Configuration_nameContext;

hiveParser.prototype.configuration_name = function() {

    var localctx = new Configuration_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, hiveParser.RULE_configuration_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this.identifier();
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===hiveParser.T__3) {
            this.state = 229;
            this.match(hiveParser.T__3);
            this.state = 230;
            this.identifier();
            this.state = 235;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TablePropertyValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_tablePropertyValue;
    return this;
}

TablePropertyValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TablePropertyValueContext.prototype.constructor = TablePropertyValueContext;

TablePropertyValueContext.prototype.INTEGER_VALUE = function() {
    return this.getToken(hiveParser.INTEGER_VALUE, 0);
};

TablePropertyValueContext.prototype.DECIMAL_VALUE = function() {
    return this.getToken(hiveParser.DECIMAL_VALUE, 0);
};

TablePropertyValueContext.prototype.booleanValue = function() {
    return this.getTypedRuleContext(BooleanValueContext,0);
};

TablePropertyValueContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};

TablePropertyValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterTablePropertyValue(this);
	}
};

TablePropertyValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitTablePropertyValue(this);
	}
};

TablePropertyValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitTablePropertyValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.TablePropertyValueContext = TablePropertyValueContext;

hiveParser.prototype.tablePropertyValue = function() {

    var localctx = new TablePropertyValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, hiveParser.RULE_tablePropertyValue);
    try {
        this.state = 240;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case hiveParser.INTEGER_VALUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 236;
            this.match(hiveParser.INTEGER_VALUE);
            break;
        case hiveParser.DECIMAL_VALUE:
            this.enterOuterAlt(localctx, 2);
            this.state = 237;
            this.match(hiveParser.DECIMAL_VALUE);
            break;
        case hiveParser.FALSE:
        case hiveParser.TRUE:
            this.enterOuterAlt(localctx, 3);
            this.state = 238;
            this.booleanValue();
            break;
        case hiveParser.STRING:
            this.enterOuterAlt(localctx, 4);
            this.state = 239;
            this.match(hiveParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;


 
ConstantContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NullLiteralContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullLiteralContext.prototype = Object.create(ConstantContext.prototype);
NullLiteralContext.prototype.constructor = NullLiteralContext;

hiveParser.NullLiteralContext = NullLiteralContext;

NullLiteralContext.prototype.NULL = function() {
    return this.getToken(hiveParser.NULL, 0);
};
NullLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterNullLiteral(this);
	}
};

NullLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitNullLiteral(this);
	}
};

NullLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitNullLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringLiteralContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringLiteralContext.prototype = Object.create(ConstantContext.prototype);
StringLiteralContext.prototype.constructor = StringLiteralContext;

hiveParser.StringLiteralContext = StringLiteralContext;

StringLiteralContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(hiveParser.STRING);
    } else {
        return this.getToken(hiveParser.STRING, i);
    }
};

StringLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterStringLiteral(this);
	}
};

StringLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitStringLiteral(this);
	}
};

StringLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitStringLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeConstructorContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeConstructorContext.prototype = Object.create(ConstantContext.prototype);
TypeConstructorContext.prototype.constructor = TypeConstructorContext;

hiveParser.TypeConstructorContext = TypeConstructorContext;

TypeConstructorContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

TypeConstructorContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};
TypeConstructorContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterTypeConstructor(this);
	}
};

TypeConstructorContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitTypeConstructor(this);
	}
};

TypeConstructorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitTypeConstructor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntervalLiteralContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntervalLiteralContext.prototype = Object.create(ConstantContext.prototype);
IntervalLiteralContext.prototype.constructor = IntervalLiteralContext;

hiveParser.IntervalLiteralContext = IntervalLiteralContext;

IntervalLiteralContext.prototype.interval = function() {
    return this.getTypedRuleContext(IntervalContext,0);
};
IntervalLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterIntervalLiteral(this);
	}
};

IntervalLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitIntervalLiteral(this);
	}
};

IntervalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitIntervalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumericLiteralContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumericLiteralContext.prototype = Object.create(ConstantContext.prototype);
NumericLiteralContext.prototype.constructor = NumericLiteralContext;

hiveParser.NumericLiteralContext = NumericLiteralContext;

NumericLiteralContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
NumericLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterNumericLiteral(this);
	}
};

NumericLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitNumericLiteral(this);
	}
};

NumericLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitNumericLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BooleanLiteralContext(parser, ctx) {
	ConstantContext.call(this, parser);
    ConstantContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanLiteralContext.prototype = Object.create(ConstantContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;

hiveParser.BooleanLiteralContext = BooleanLiteralContext;

BooleanLiteralContext.prototype.booleanValue = function() {
    return this.getTypedRuleContext(BooleanValueContext,0);
};
BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitBooleanLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};



hiveParser.ConstantContext = ConstantContext;

hiveParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, hiveParser.RULE_constant);
    var _la = 0; // Token type
    try {
        this.state = 254;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NullLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 242;
            this.match(hiveParser.NULL);
            break;

        case 2:
            localctx = new IntervalLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 243;
            this.interval();
            break;

        case 3:
            localctx = new TypeConstructorContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 244;
            this.identifier();
            this.state = 245;
            this.match(hiveParser.STRING);
            break;

        case 4:
            localctx = new NumericLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 247;
            this.number();
            break;

        case 5:
            localctx = new BooleanLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 248;
            this.booleanValue();
            break;

        case 6:
            localctx = new StringLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 250; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 249;
                this.match(hiveParser.STRING);
                this.state = 252; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===hiveParser.STRING);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntervalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_interval;
    return this;
}

IntervalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntervalContext.prototype.constructor = IntervalContext;

IntervalContext.prototype.INTERVAL = function() {
    return this.getToken(hiveParser.INTERVAL, 0);
};

IntervalContext.prototype.intervalField = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IntervalFieldContext);
    } else {
        return this.getTypedRuleContext(IntervalFieldContext,i);
    }
};

IntervalContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterInterval(this);
	}
};

IntervalContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitInterval(this);
	}
};

IntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.IntervalContext = IntervalContext;

hiveParser.prototype.interval = function() {

    var localctx = new IntervalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, hiveParser.RULE_interval);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        this.match(hiveParser.INTERVAL);
        this.state = 260;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 323)) & ~0x1f) == 0 && ((1 << (_la - 323)) & ((1 << (hiveParser.PLUS - 323)) | (1 << (hiveParser.MINUS - 323)) | (1 << (hiveParser.STRING - 323)) | (1 << (hiveParser.INTEGER_VALUE - 323)) | (1 << (hiveParser.DECIMAL_VALUE - 323)))) !== 0)) {
            this.state = 257;
            this.intervalField();
            this.state = 262;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntervalFieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_intervalField;
    this.value = null; // IntervalValueContext
    this.unit = null; // IdentifierContext
    this.to = null; // IdentifierContext
    return this;
}

IntervalFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntervalFieldContext.prototype.constructor = IntervalFieldContext;

IntervalFieldContext.prototype.intervalValue = function() {
    return this.getTypedRuleContext(IntervalValueContext,0);
};

IntervalFieldContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

IntervalFieldContext.prototype.TO = function() {
    return this.getToken(hiveParser.TO, 0);
};

IntervalFieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterIntervalField(this);
	}
};

IntervalFieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitIntervalField(this);
	}
};

IntervalFieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitIntervalField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.IntervalFieldContext = IntervalFieldContext;

hiveParser.prototype.intervalField = function() {

    var localctx = new IntervalFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, hiveParser.RULE_intervalField);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        localctx.value = this.intervalValue();
        this.state = 264;
        localctx.unit = this.identifier();
        this.state = 267;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===hiveParser.TO) {
            this.state = 265;
            this.match(hiveParser.TO);
            this.state = 266;
            localctx.to = this.identifier();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntervalValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_intervalValue;
    return this;
}

IntervalValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntervalValueContext.prototype.constructor = IntervalValueContext;

IntervalValueContext.prototype.INTEGER_VALUE = function() {
    return this.getToken(hiveParser.INTEGER_VALUE, 0);
};

IntervalValueContext.prototype.DECIMAL_VALUE = function() {
    return this.getToken(hiveParser.DECIMAL_VALUE, 0);
};

IntervalValueContext.prototype.PLUS = function() {
    return this.getToken(hiveParser.PLUS, 0);
};

IntervalValueContext.prototype.MINUS = function() {
    return this.getToken(hiveParser.MINUS, 0);
};

IntervalValueContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};

IntervalValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterIntervalValue(this);
	}
};

IntervalValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitIntervalValue(this);
	}
};

IntervalValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitIntervalValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.IntervalValueContext = IntervalValueContext;

hiveParser.prototype.intervalValue = function() {

    var localctx = new IntervalValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, hiveParser.RULE_intervalValue);
    var _la = 0; // Token type
    try {
        this.state = 274;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case hiveParser.PLUS:
        case hiveParser.MINUS:
        case hiveParser.INTEGER_VALUE:
        case hiveParser.DECIMAL_VALUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 270;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.PLUS || _la===hiveParser.MINUS) {
                this.state = 269;
                _la = this._input.LA(1);
                if(!(_la===hiveParser.PLUS || _la===hiveParser.MINUS)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 272;
            _la = this._input.LA(1);
            if(!(_la===hiveParser.INTEGER_VALUE || _la===hiveParser.DECIMAL_VALUE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case hiveParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 273;
            this.match(hiveParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;


 
NumberContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DecimalLiteralContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecimalLiteralContext.prototype = Object.create(NumberContext.prototype);
DecimalLiteralContext.prototype.constructor = DecimalLiteralContext;

hiveParser.DecimalLiteralContext = DecimalLiteralContext;

DecimalLiteralContext.prototype.DECIMAL_VALUE = function() {
    return this.getToken(hiveParser.DECIMAL_VALUE, 0);
};

DecimalLiteralContext.prototype.MINUS = function() {
    return this.getToken(hiveParser.MINUS, 0);
};
DecimalLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterDecimalLiteral(this);
	}
};

DecimalLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitDecimalLiteral(this);
	}
};

DecimalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitDecimalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BigIntLiteralContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BigIntLiteralContext.prototype = Object.create(NumberContext.prototype);
BigIntLiteralContext.prototype.constructor = BigIntLiteralContext;

hiveParser.BigIntLiteralContext = BigIntLiteralContext;

BigIntLiteralContext.prototype.BIGINT_LITERAL = function() {
    return this.getToken(hiveParser.BIGINT_LITERAL, 0);
};

BigIntLiteralContext.prototype.MINUS = function() {
    return this.getToken(hiveParser.MINUS, 0);
};
BigIntLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterBigIntLiteral(this);
	}
};

BigIntLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitBigIntLiteral(this);
	}
};

BigIntLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitBigIntLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TinyIntLiteralContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TinyIntLiteralContext.prototype = Object.create(NumberContext.prototype);
TinyIntLiteralContext.prototype.constructor = TinyIntLiteralContext;

hiveParser.TinyIntLiteralContext = TinyIntLiteralContext;

TinyIntLiteralContext.prototype.TINYINT_LITERAL = function() {
    return this.getToken(hiveParser.TINYINT_LITERAL, 0);
};

TinyIntLiteralContext.prototype.MINUS = function() {
    return this.getToken(hiveParser.MINUS, 0);
};
TinyIntLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterTinyIntLiteral(this);
	}
};

TinyIntLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitTinyIntLiteral(this);
	}
};

TinyIntLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitTinyIntLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BigDecimalLiteralContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BigDecimalLiteralContext.prototype = Object.create(NumberContext.prototype);
BigDecimalLiteralContext.prototype.constructor = BigDecimalLiteralContext;

hiveParser.BigDecimalLiteralContext = BigDecimalLiteralContext;

BigDecimalLiteralContext.prototype.BIGDECIMAL_LITERAL = function() {
    return this.getToken(hiveParser.BIGDECIMAL_LITERAL, 0);
};

BigDecimalLiteralContext.prototype.MINUS = function() {
    return this.getToken(hiveParser.MINUS, 0);
};
BigDecimalLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterBigDecimalLiteral(this);
	}
};

BigDecimalLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitBigDecimalLiteral(this);
	}
};

BigDecimalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitBigDecimalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DoubleLiteralContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoubleLiteralContext.prototype = Object.create(NumberContext.prototype);
DoubleLiteralContext.prototype.constructor = DoubleLiteralContext;

hiveParser.DoubleLiteralContext = DoubleLiteralContext;

DoubleLiteralContext.prototype.DOUBLE_LITERAL = function() {
    return this.getToken(hiveParser.DOUBLE_LITERAL, 0);
};

DoubleLiteralContext.prototype.MINUS = function() {
    return this.getToken(hiveParser.MINUS, 0);
};
DoubleLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterDoubleLiteral(this);
	}
};

DoubleLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitDoubleLiteral(this);
	}
};

DoubleLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitDoubleLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntegerLiteralContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntegerLiteralContext.prototype = Object.create(NumberContext.prototype);
IntegerLiteralContext.prototype.constructor = IntegerLiteralContext;

hiveParser.IntegerLiteralContext = IntegerLiteralContext;

IntegerLiteralContext.prototype.INTEGER_VALUE = function() {
    return this.getToken(hiveParser.INTEGER_VALUE, 0);
};

IntegerLiteralContext.prototype.MINUS = function() {
    return this.getToken(hiveParser.MINUS, 0);
};
IntegerLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterIntegerLiteral(this);
	}
};

IntegerLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitIntegerLiteral(this);
	}
};

IntegerLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitIntegerLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SmallIntLiteralContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SmallIntLiteralContext.prototype = Object.create(NumberContext.prototype);
SmallIntLiteralContext.prototype.constructor = SmallIntLiteralContext;

hiveParser.SmallIntLiteralContext = SmallIntLiteralContext;

SmallIntLiteralContext.prototype.SMALLINT_LITERAL = function() {
    return this.getToken(hiveParser.SMALLINT_LITERAL, 0);
};

SmallIntLiteralContext.prototype.MINUS = function() {
    return this.getToken(hiveParser.MINUS, 0);
};
SmallIntLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterSmallIntLiteral(this);
	}
};

SmallIntLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitSmallIntLiteral(this);
	}
};

SmallIntLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitSmallIntLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};



hiveParser.NumberContext = NumberContext;

hiveParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, hiveParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.state = 304;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DecimalLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 277;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.MINUS) {
                this.state = 276;
                this.match(hiveParser.MINUS);
            }

            this.state = 279;
            this.match(hiveParser.DECIMAL_VALUE);
            break;

        case 2:
            localctx = new IntegerLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 281;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.MINUS) {
                this.state = 280;
                this.match(hiveParser.MINUS);
            }

            this.state = 283;
            this.match(hiveParser.INTEGER_VALUE);
            break;

        case 3:
            localctx = new BigIntLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 285;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.MINUS) {
                this.state = 284;
                this.match(hiveParser.MINUS);
            }

            this.state = 287;
            this.match(hiveParser.BIGINT_LITERAL);
            break;

        case 4:
            localctx = new SmallIntLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 289;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.MINUS) {
                this.state = 288;
                this.match(hiveParser.MINUS);
            }

            this.state = 291;
            this.match(hiveParser.SMALLINT_LITERAL);
            break;

        case 5:
            localctx = new TinyIntLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 293;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.MINUS) {
                this.state = 292;
                this.match(hiveParser.MINUS);
            }

            this.state = 295;
            this.match(hiveParser.TINYINT_LITERAL);
            break;

        case 6:
            localctx = new DoubleLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 297;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.MINUS) {
                this.state = 296;
                this.match(hiveParser.MINUS);
            }

            this.state = 299;
            this.match(hiveParser.DOUBLE_LITERAL);
            break;

        case 7:
            localctx = new BigDecimalLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 301;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hiveParser.MINUS) {
                this.state = 300;
                this.match(hiveParser.MINUS);
            }

            this.state = 303;
            this.match(hiveParser.BIGDECIMAL_LITERAL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_booleanValue;
    return this;
}

BooleanValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanValueContext.prototype.constructor = BooleanValueContext;

BooleanValueContext.prototype.TRUE = function() {
    return this.getToken(hiveParser.TRUE, 0);
};

BooleanValueContext.prototype.FALSE = function() {
    return this.getToken(hiveParser.FALSE, 0);
};

BooleanValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterBooleanValue(this);
	}
};

BooleanValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitBooleanValue(this);
	}
};

BooleanValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitBooleanValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.BooleanValueContext = BooleanValueContext;

hiveParser.prototype.booleanValue = function() {

    var localctx = new BooleanValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, hiveParser.RULE_booleanValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        _la = this._input.LA(1);
        if(!(_la===hiveParser.FALSE || _la===hiveParser.TRUE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.strictIdentifier = function() {
    return this.getTypedRuleContext(StrictIdentifierContext,0);
};

IdentifierContext.prototype.FULL = function() {
    return this.getToken(hiveParser.FULL, 0);
};

IdentifierContext.prototype.INNER = function() {
    return this.getToken(hiveParser.INNER, 0);
};

IdentifierContext.prototype.LEFT = function() {
    return this.getToken(hiveParser.LEFT, 0);
};

IdentifierContext.prototype.SEMI = function() {
    return this.getToken(hiveParser.SEMI, 0);
};

IdentifierContext.prototype.RIGHT = function() {
    return this.getToken(hiveParser.RIGHT, 0);
};

IdentifierContext.prototype.JOIN = function() {
    return this.getToken(hiveParser.JOIN, 0);
};

IdentifierContext.prototype.CROSS = function() {
    return this.getToken(hiveParser.CROSS, 0);
};

IdentifierContext.prototype.ON = function() {
    return this.getToken(hiveParser.ON, 0);
};

IdentifierContext.prototype.UNION = function() {
    return this.getToken(hiveParser.UNION, 0);
};

IdentifierContext.prototype.INTERSECT = function() {
    return this.getToken(hiveParser.INTERSECT, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.IdentifierContext = IdentifierContext;

hiveParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, hiveParser.RULE_identifier);
    try {
        this.state = 319;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 308;
            this.strictIdentifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 309;
            this.match(hiveParser.FULL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 310;
            this.match(hiveParser.INNER);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 311;
            this.match(hiveParser.LEFT);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 312;
            this.match(hiveParser.SEMI);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 313;
            this.match(hiveParser.RIGHT);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 314;
            this.match(hiveParser.JOIN);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 315;
            this.match(hiveParser.CROSS);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 316;
            this.match(hiveParser.ON);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 317;
            this.match(hiveParser.UNION);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 318;
            this.match(hiveParser.INTERSECT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StrictIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_strictIdentifier;
    return this;
}

StrictIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StrictIdentifierContext.prototype.constructor = StrictIdentifierContext;


 
StrictIdentifierContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VariableIdentifierContext(parser, ctx) {
	StrictIdentifierContext.call(this, parser);
    StrictIdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableIdentifierContext.prototype = Object.create(StrictIdentifierContext.prototype);
VariableIdentifierContext.prototype.constructor = VariableIdentifierContext;

hiveParser.VariableIdentifierContext = VariableIdentifierContext;

VariableIdentifierContext.prototype.VARIABLE_REFERENCE = function() {
    return this.getToken(hiveParser.VARIABLE_REFERENCE, 0);
};
VariableIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterVariableIdentifier(this);
	}
};

VariableIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitVariableIdentifier(this);
	}
};

VariableIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitVariableIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function QuotedIdentifierAlternativeContext(parser, ctx) {
	StrictIdentifierContext.call(this, parser);
    StrictIdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QuotedIdentifierAlternativeContext.prototype = Object.create(StrictIdentifierContext.prototype);
QuotedIdentifierAlternativeContext.prototype.constructor = QuotedIdentifierAlternativeContext;

hiveParser.QuotedIdentifierAlternativeContext = QuotedIdentifierAlternativeContext;

QuotedIdentifierAlternativeContext.prototype.quotedIdentifier = function() {
    return this.getTypedRuleContext(QuotedIdentifierContext,0);
};
QuotedIdentifierAlternativeContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterQuotedIdentifierAlternative(this);
	}
};

QuotedIdentifierAlternativeContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitQuotedIdentifierAlternative(this);
	}
};

QuotedIdentifierAlternativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitQuotedIdentifierAlternative(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnquotedIdentifierContext(parser, ctx) {
	StrictIdentifierContext.call(this, parser);
    StrictIdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnquotedIdentifierContext.prototype = Object.create(StrictIdentifierContext.prototype);
UnquotedIdentifierContext.prototype.constructor = UnquotedIdentifierContext;

hiveParser.UnquotedIdentifierContext = UnquotedIdentifierContext;

UnquotedIdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(hiveParser.IDENTIFIER, 0);
};

UnquotedIdentifierContext.prototype.nonReserved = function() {
    return this.getTypedRuleContext(NonReservedContext,0);
};
UnquotedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterUnquotedIdentifier(this);
	}
};

UnquotedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitUnquotedIdentifier(this);
	}
};

UnquotedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitUnquotedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};



hiveParser.StrictIdentifierContext = StrictIdentifierContext;

hiveParser.prototype.strictIdentifier = function() {

    var localctx = new StrictIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, hiveParser.RULE_strictIdentifier);
    try {
        this.state = 325;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case hiveParser.IDENTIFIER:
            localctx = new UnquotedIdentifierContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 321;
            this.match(hiveParser.IDENTIFIER);
            break;
        case hiveParser.BACKQUOTED_IDENTIFIER:
            localctx = new QuotedIdentifierAlternativeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 322;
            this.quotedIdentifier();
            break;
        case hiveParser.SHOW:
        case hiveParser.DATABASES:
        case hiveParser.SCHEMAS:
        case hiveParser.TABLES:
        case hiveParser.ADD:
        case hiveParser.ADMIN:
        case hiveParser.AFTER:
        case hiveParser.ANALYZE:
        case hiveParser.ARCHIVE:
        case hiveParser.ASC:
        case hiveParser.BEFORE:
        case hiveParser.BUCKET:
        case hiveParser.BUCKETS:
        case hiveParser.CASCADE:
        case hiveParser.CHANGE:
        case hiveParser.CLUSTER:
        case hiveParser.CLUSTERED:
        case hiveParser.CLUSTERSTATUS:
        case hiveParser.COLLECTION:
        case hiveParser.COLUMNS:
        case hiveParser.COMMENT:
        case hiveParser.COMPACT:
        case hiveParser.COMPACTIONS:
        case hiveParser.COMPUTE:
        case hiveParser.CONCATENATE:
        case hiveParser.CONTINUE:
        case hiveParser.DATA:
        case hiveParser.DATETIME:
        case hiveParser.DAY:
        case hiveParser.DBPROPERTIES:
        case hiveParser.DEFERRED:
        case hiveParser.DEFINED:
        case hiveParser.DELIMITED:
        case hiveParser.DEPENDENCY:
        case hiveParser.DESC:
        case hiveParser.DIRECTORIES:
        case hiveParser.DIRECTORY:
        case hiveParser.DISABLE:
        case hiveParser.DISTRIBUTE:
        case hiveParser.ELEM_TYPE:
        case hiveParser.ENABLE:
        case hiveParser.ESCAPED:
        case hiveParser.EXCLUSIVE:
        case hiveParser.EXPLAIN:
        case hiveParser.EXPORT:
        case hiveParser.FIELDS:
        case hiveParser.FILE:
        case hiveParser.FILEFORMAT:
        case hiveParser.FIRST:
        case hiveParser.FORMAT:
        case hiveParser.FORMATTED:
        case hiveParser.FUNCTIONS:
        case hiveParser.HOLD_DDLTIME:
        case hiveParser.HOUR:
        case hiveParser.IDXPROPERTIES:
        case hiveParser.IGNORE:
        case hiveParser.INDEX:
        case hiveParser.INDEXES:
        case hiveParser.INPATH:
        case hiveParser.INPUTDRIVER:
        case hiveParser.INPUTFORMAT:
        case hiveParser.ITEMS:
        case hiveParser.JAR:
        case hiveParser.KEYS:
        case hiveParser.KEY_TYPE:
        case hiveParser.LIMIT:
        case hiveParser.LINES:
        case hiveParser.LOAD:
        case hiveParser.LOCATION:
        case hiveParser.LOCK:
        case hiveParser.LOCKS:
        case hiveParser.LOGICAL:
        case hiveParser.LONG:
        case hiveParser.MAPJOIN:
        case hiveParser.MATERIALIZED:
        case hiveParser.METADATA:
        case hiveParser.SETMINUS:
        case hiveParser.MINUTE:
        case hiveParser.MONTH:
        case hiveParser.MSCK:
        case hiveParser.NOSCAN:
        case hiveParser.NO_DROP:
        case hiveParser.OFFLINE:
        case hiveParser.OPTION:
        case hiveParser.OUTPUTDRIVER:
        case hiveParser.OUTPUTFORMAT:
        case hiveParser.OVERWRITE:
        case hiveParser.OWNER:
        case hiveParser.PARTITIONED:
        case hiveParser.PARTITIONS:
        case hiveParser.PRETTY:
        case hiveParser.PRINCIPALS:
        case hiveParser.PROTECTION:
        case hiveParser.PURGE:
        case hiveParser.READ:
        case hiveParser.READONLY:
        case hiveParser.REBUILD:
        case hiveParser.RECORDREADER:
        case hiveParser.RECORDWRITER:
        case hiveParser.RELOAD:
        case hiveParser.RENAME:
        case hiveParser.REPAIR:
        case hiveParser.REPLACE:
        case hiveParser.REPLICATION:
        case hiveParser.RESTRICT:
        case hiveParser.REWRITE:
        case hiveParser.ROLE:
        case hiveParser.ROLES:
        case hiveParser.SCHEMA:
        case hiveParser.SECOND:
        case hiveParser.SEMI:
        case hiveParser.SERDE:
        case hiveParser.SERDEPROPERTIES:
        case hiveParser.SERVER:
        case hiveParser.SETS:
        case hiveParser.SHARED:
        case hiveParser.SHOW_DATABASE:
        case hiveParser.SKEWED:
        case hiveParser.SORT:
        case hiveParser.SORTED:
        case hiveParser.SSL:
        case hiveParser.STATISTICS:
        case hiveParser.STORED:
        case hiveParser.STREAMTABLE:
        case hiveParser.STRUCT:
        case hiveParser.TBLPROPERTIES:
        case hiveParser.TEMPORARY:
        case hiveParser.TERMINATED:
        case hiveParser.TINYINT:
        case hiveParser.TOUCH:
        case hiveParser.TRANSACTIONS:
        case hiveParser.UNARCHIVE:
        case hiveParser.UNDO:
        case hiveParser.UNIONTYPE:
        case hiveParser.UNLOCK:
        case hiveParser.UNSET:
        case hiveParser.UNSIGNED:
        case hiveParser.URI:
        case hiveParser.USE:
        case hiveParser.UTC:
        case hiveParser.UTCTIMESTAMP:
        case hiveParser.VALUE_TYPE:
        case hiveParser.VIEW:
        case hiveParser.WHILE:
        case hiveParser.YEAR:
        case hiveParser.AUTOCOMMIT:
        case hiveParser.ISOLATION:
        case hiveParser.LEVEL:
        case hiveParser.OFFSET:
        case hiveParser.SNAPSHOT:
        case hiveParser.TRANSACTION:
        case hiveParser.WORK:
        case hiveParser.WRITE:
        case hiveParser.ABORT:
        case hiveParser.KEY:
        case hiveParser.LAST:
        case hiveParser.NORELY:
        case hiveParser.NOVALIDATE:
        case hiveParser.NULLS:
        case hiveParser.RELY:
        case hiveParser.VALIDATE:
        case hiveParser.DETAIL:
        case hiveParser.DOW:
        case hiveParser.EXPRESSION:
        case hiveParser.OPERATOR:
        case hiveParser.QUARTER:
        case hiveParser.SUMMARY:
        case hiveParser.VECTORIZATION:
        case hiveParser.WEEK:
        case hiveParser.YEARS:
        case hiveParser.MONTHS:
        case hiveParser.WEEKS:
        case hiveParser.DAYS:
        case hiveParser.HOURS:
        case hiveParser.MINUTES:
        case hiveParser.SECONDS:
        case hiveParser.TIMESTAMPTZ:
        case hiveParser.ZONE:
        case hiveParser.PLUS:
        case hiveParser.STRING:
            localctx = new UnquotedIdentifierContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 323;
            this.nonReserved();
            break;
        case hiveParser.VARIABLE_REFERENCE:
            localctx = new VariableIdentifierContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 324;
            this.match(hiveParser.VARIABLE_REFERENCE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuotedIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_quotedIdentifier;
    return this;
}

QuotedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedIdentifierContext.prototype.constructor = QuotedIdentifierContext;

QuotedIdentifierContext.prototype.BACKQUOTED_IDENTIFIER = function() {
    return this.getToken(hiveParser.BACKQUOTED_IDENTIFIER, 0);
};

QuotedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitQuotedIdentifier(this);
	}
};

QuotedIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitQuotedIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.QuotedIdentifierContext = QuotedIdentifierContext;

hiveParser.prototype.quotedIdentifier = function() {

    var localctx = new QuotedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, hiveParser.RULE_quotedIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 327;
        this.match(hiveParser.BACKQUOTED_IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NonReservedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hiveParser.RULE_nonReserved;
    return this;
}

NonReservedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NonReservedContext.prototype.constructor = NonReservedContext;

NonReservedContext.prototype.ADD = function() {
    return this.getToken(hiveParser.ADD, 0);
};

NonReservedContext.prototype.ADMIN = function() {
    return this.getToken(hiveParser.ADMIN, 0);
};

NonReservedContext.prototype.AFTER = function() {
    return this.getToken(hiveParser.AFTER, 0);
};

NonReservedContext.prototype.ANALYZE = function() {
    return this.getToken(hiveParser.ANALYZE, 0);
};

NonReservedContext.prototype.ARCHIVE = function() {
    return this.getToken(hiveParser.ARCHIVE, 0);
};

NonReservedContext.prototype.ASC = function() {
    return this.getToken(hiveParser.ASC, 0);
};

NonReservedContext.prototype.BEFORE = function() {
    return this.getToken(hiveParser.BEFORE, 0);
};

NonReservedContext.prototype.BUCKET = function() {
    return this.getToken(hiveParser.BUCKET, 0);
};

NonReservedContext.prototype.BUCKETS = function() {
    return this.getToken(hiveParser.BUCKETS, 0);
};

NonReservedContext.prototype.CASCADE = function() {
    return this.getToken(hiveParser.CASCADE, 0);
};

NonReservedContext.prototype.CHANGE = function() {
    return this.getToken(hiveParser.CHANGE, 0);
};

NonReservedContext.prototype.CLUSTER = function() {
    return this.getToken(hiveParser.CLUSTER, 0);
};

NonReservedContext.prototype.CLUSTERED = function() {
    return this.getToken(hiveParser.CLUSTERED, 0);
};

NonReservedContext.prototype.CLUSTERSTATUS = function() {
    return this.getToken(hiveParser.CLUSTERSTATUS, 0);
};

NonReservedContext.prototype.COLLECTION = function() {
    return this.getToken(hiveParser.COLLECTION, 0);
};

NonReservedContext.prototype.COLUMNS = function() {
    return this.getToken(hiveParser.COLUMNS, 0);
};

NonReservedContext.prototype.COMMENT = function() {
    return this.getToken(hiveParser.COMMENT, 0);
};

NonReservedContext.prototype.COMPACT = function() {
    return this.getToken(hiveParser.COMPACT, 0);
};

NonReservedContext.prototype.COMPACTIONS = function() {
    return this.getToken(hiveParser.COMPACTIONS, 0);
};

NonReservedContext.prototype.COMPUTE = function() {
    return this.getToken(hiveParser.COMPUTE, 0);
};

NonReservedContext.prototype.CONCATENATE = function() {
    return this.getToken(hiveParser.CONCATENATE, 0);
};

NonReservedContext.prototype.CONTINUE = function() {
    return this.getToken(hiveParser.CONTINUE, 0);
};

NonReservedContext.prototype.DATA = function() {
    return this.getToken(hiveParser.DATA, 0);
};

NonReservedContext.prototype.DATABASES = function() {
    return this.getToken(hiveParser.DATABASES, 0);
};

NonReservedContext.prototype.DATETIME = function() {
    return this.getToken(hiveParser.DATETIME, 0);
};

NonReservedContext.prototype.DAY = function() {
    return this.getToken(hiveParser.DAY, 0);
};

NonReservedContext.prototype.DBPROPERTIES = function() {
    return this.getToken(hiveParser.DBPROPERTIES, 0);
};

NonReservedContext.prototype.DEFERRED = function() {
    return this.getToken(hiveParser.DEFERRED, 0);
};

NonReservedContext.prototype.DEFINED = function() {
    return this.getToken(hiveParser.DEFINED, 0);
};

NonReservedContext.prototype.DELIMITED = function() {
    return this.getToken(hiveParser.DELIMITED, 0);
};

NonReservedContext.prototype.DEPENDENCY = function() {
    return this.getToken(hiveParser.DEPENDENCY, 0);
};

NonReservedContext.prototype.DESC = function() {
    return this.getToken(hiveParser.DESC, 0);
};

NonReservedContext.prototype.DIRECTORIES = function() {
    return this.getToken(hiveParser.DIRECTORIES, 0);
};

NonReservedContext.prototype.DIRECTORY = function() {
    return this.getToken(hiveParser.DIRECTORY, 0);
};

NonReservedContext.prototype.DISABLE = function() {
    return this.getToken(hiveParser.DISABLE, 0);
};

NonReservedContext.prototype.DISTRIBUTE = function() {
    return this.getToken(hiveParser.DISTRIBUTE, 0);
};

NonReservedContext.prototype.ELEM_TYPE = function() {
    return this.getToken(hiveParser.ELEM_TYPE, 0);
};

NonReservedContext.prototype.ENABLE = function() {
    return this.getToken(hiveParser.ENABLE, 0);
};

NonReservedContext.prototype.ESCAPED = function() {
    return this.getToken(hiveParser.ESCAPED, 0);
};

NonReservedContext.prototype.EXCLUSIVE = function() {
    return this.getToken(hiveParser.EXCLUSIVE, 0);
};

NonReservedContext.prototype.EXPLAIN = function() {
    return this.getToken(hiveParser.EXPLAIN, 0);
};

NonReservedContext.prototype.EXPORT = function() {
    return this.getToken(hiveParser.EXPORT, 0);
};

NonReservedContext.prototype.FIELDS = function() {
    return this.getToken(hiveParser.FIELDS, 0);
};

NonReservedContext.prototype.FILE = function() {
    return this.getToken(hiveParser.FILE, 0);
};

NonReservedContext.prototype.FILEFORMAT = function() {
    return this.getToken(hiveParser.FILEFORMAT, 0);
};

NonReservedContext.prototype.FIRST = function() {
    return this.getToken(hiveParser.FIRST, 0);
};

NonReservedContext.prototype.FORMAT = function() {
    return this.getToken(hiveParser.FORMAT, 0);
};

NonReservedContext.prototype.FORMATTED = function() {
    return this.getToken(hiveParser.FORMATTED, 0);
};

NonReservedContext.prototype.FUNCTIONS = function() {
    return this.getToken(hiveParser.FUNCTIONS, 0);
};

NonReservedContext.prototype.HOLD_DDLTIME = function() {
    return this.getToken(hiveParser.HOLD_DDLTIME, 0);
};

NonReservedContext.prototype.HOUR = function() {
    return this.getToken(hiveParser.HOUR, 0);
};

NonReservedContext.prototype.IDXPROPERTIES = function() {
    return this.getToken(hiveParser.IDXPROPERTIES, 0);
};

NonReservedContext.prototype.IGNORE = function() {
    return this.getToken(hiveParser.IGNORE, 0);
};

NonReservedContext.prototype.INDEX = function() {
    return this.getToken(hiveParser.INDEX, 0);
};

NonReservedContext.prototype.INDEXES = function() {
    return this.getToken(hiveParser.INDEXES, 0);
};

NonReservedContext.prototype.INPATH = function() {
    return this.getToken(hiveParser.INPATH, 0);
};

NonReservedContext.prototype.INPUTDRIVER = function() {
    return this.getToken(hiveParser.INPUTDRIVER, 0);
};

NonReservedContext.prototype.INPUTFORMAT = function() {
    return this.getToken(hiveParser.INPUTFORMAT, 0);
};

NonReservedContext.prototype.ITEMS = function() {
    return this.getToken(hiveParser.ITEMS, 0);
};

NonReservedContext.prototype.JAR = function() {
    return this.getToken(hiveParser.JAR, 0);
};

NonReservedContext.prototype.KEYS = function() {
    return this.getToken(hiveParser.KEYS, 0);
};

NonReservedContext.prototype.KEY_TYPE = function() {
    return this.getToken(hiveParser.KEY_TYPE, 0);
};

NonReservedContext.prototype.LIMIT = function() {
    return this.getToken(hiveParser.LIMIT, 0);
};

NonReservedContext.prototype.LINES = function() {
    return this.getToken(hiveParser.LINES, 0);
};

NonReservedContext.prototype.LOAD = function() {
    return this.getToken(hiveParser.LOAD, 0);
};

NonReservedContext.prototype.LOCATION = function() {
    return this.getToken(hiveParser.LOCATION, 0);
};

NonReservedContext.prototype.LOCK = function() {
    return this.getToken(hiveParser.LOCK, 0);
};

NonReservedContext.prototype.LOCKS = function() {
    return this.getToken(hiveParser.LOCKS, 0);
};

NonReservedContext.prototype.LOGICAL = function() {
    return this.getToken(hiveParser.LOGICAL, 0);
};

NonReservedContext.prototype.LONG = function() {
    return this.getToken(hiveParser.LONG, 0);
};

NonReservedContext.prototype.MAPJOIN = function() {
    return this.getToken(hiveParser.MAPJOIN, 0);
};

NonReservedContext.prototype.MATERIALIZED = function() {
    return this.getToken(hiveParser.MATERIALIZED, 0);
};

NonReservedContext.prototype.METADATA = function() {
    return this.getToken(hiveParser.METADATA, 0);
};

NonReservedContext.prototype.SETMINUS = function() {
    return this.getToken(hiveParser.SETMINUS, 0);
};

NonReservedContext.prototype.MINUTE = function() {
    return this.getToken(hiveParser.MINUTE, 0);
};

NonReservedContext.prototype.MONTH = function() {
    return this.getToken(hiveParser.MONTH, 0);
};

NonReservedContext.prototype.MSCK = function() {
    return this.getToken(hiveParser.MSCK, 0);
};

NonReservedContext.prototype.NOSCAN = function() {
    return this.getToken(hiveParser.NOSCAN, 0);
};

NonReservedContext.prototype.NO_DROP = function() {
    return this.getToken(hiveParser.NO_DROP, 0);
};

NonReservedContext.prototype.OFFLINE = function() {
    return this.getToken(hiveParser.OFFLINE, 0);
};

NonReservedContext.prototype.OPTION = function() {
    return this.getToken(hiveParser.OPTION, 0);
};

NonReservedContext.prototype.OUTPUTDRIVER = function() {
    return this.getToken(hiveParser.OUTPUTDRIVER, 0);
};

NonReservedContext.prototype.OUTPUTFORMAT = function() {
    return this.getToken(hiveParser.OUTPUTFORMAT, 0);
};

NonReservedContext.prototype.OVERWRITE = function() {
    return this.getToken(hiveParser.OVERWRITE, 0);
};

NonReservedContext.prototype.OWNER = function() {
    return this.getToken(hiveParser.OWNER, 0);
};

NonReservedContext.prototype.PARTITIONED = function() {
    return this.getToken(hiveParser.PARTITIONED, 0);
};

NonReservedContext.prototype.PARTITIONS = function() {
    return this.getToken(hiveParser.PARTITIONS, 0);
};

NonReservedContext.prototype.PLUS = function() {
    return this.getToken(hiveParser.PLUS, 0);
};

NonReservedContext.prototype.PRETTY = function() {
    return this.getToken(hiveParser.PRETTY, 0);
};

NonReservedContext.prototype.PRINCIPALS = function() {
    return this.getToken(hiveParser.PRINCIPALS, 0);
};

NonReservedContext.prototype.PROTECTION = function() {
    return this.getToken(hiveParser.PROTECTION, 0);
};

NonReservedContext.prototype.PURGE = function() {
    return this.getToken(hiveParser.PURGE, 0);
};

NonReservedContext.prototype.READ = function() {
    return this.getToken(hiveParser.READ, 0);
};

NonReservedContext.prototype.READONLY = function() {
    return this.getToken(hiveParser.READONLY, 0);
};

NonReservedContext.prototype.REBUILD = function() {
    return this.getToken(hiveParser.REBUILD, 0);
};

NonReservedContext.prototype.RECORDREADER = function() {
    return this.getToken(hiveParser.RECORDREADER, 0);
};

NonReservedContext.prototype.RECORDWRITER = function() {
    return this.getToken(hiveParser.RECORDWRITER, 0);
};

NonReservedContext.prototype.RELOAD = function() {
    return this.getToken(hiveParser.RELOAD, 0);
};

NonReservedContext.prototype.RENAME = function() {
    return this.getToken(hiveParser.RENAME, 0);
};

NonReservedContext.prototype.REPAIR = function() {
    return this.getToken(hiveParser.REPAIR, 0);
};

NonReservedContext.prototype.REPLACE = function() {
    return this.getToken(hiveParser.REPLACE, 0);
};

NonReservedContext.prototype.REPLICATION = function() {
    return this.getToken(hiveParser.REPLICATION, 0);
};

NonReservedContext.prototype.RESTRICT = function() {
    return this.getToken(hiveParser.RESTRICT, 0);
};

NonReservedContext.prototype.REWRITE = function() {
    return this.getToken(hiveParser.REWRITE, 0);
};

NonReservedContext.prototype.ROLE = function() {
    return this.getToken(hiveParser.ROLE, 0);
};

NonReservedContext.prototype.ROLES = function() {
    return this.getToken(hiveParser.ROLES, 0);
};

NonReservedContext.prototype.SCHEMA = function() {
    return this.getToken(hiveParser.SCHEMA, 0);
};

NonReservedContext.prototype.SCHEMAS = function() {
    return this.getToken(hiveParser.SCHEMAS, 0);
};

NonReservedContext.prototype.SECOND = function() {
    return this.getToken(hiveParser.SECOND, 0);
};

NonReservedContext.prototype.SEMI = function() {
    return this.getToken(hiveParser.SEMI, 0);
};

NonReservedContext.prototype.SERDE = function() {
    return this.getToken(hiveParser.SERDE, 0);
};

NonReservedContext.prototype.SERDEPROPERTIES = function() {
    return this.getToken(hiveParser.SERDEPROPERTIES, 0);
};

NonReservedContext.prototype.SERVER = function() {
    return this.getToken(hiveParser.SERVER, 0);
};

NonReservedContext.prototype.SETS = function() {
    return this.getToken(hiveParser.SETS, 0);
};

NonReservedContext.prototype.SHARED = function() {
    return this.getToken(hiveParser.SHARED, 0);
};

NonReservedContext.prototype.SHOW = function() {
    return this.getToken(hiveParser.SHOW, 0);
};

NonReservedContext.prototype.SHOW_DATABASE = function() {
    return this.getToken(hiveParser.SHOW_DATABASE, 0);
};

NonReservedContext.prototype.SKEWED = function() {
    return this.getToken(hiveParser.SKEWED, 0);
};

NonReservedContext.prototype.SORT = function() {
    return this.getToken(hiveParser.SORT, 0);
};

NonReservedContext.prototype.SORTED = function() {
    return this.getToken(hiveParser.SORTED, 0);
};

NonReservedContext.prototype.SSL = function() {
    return this.getToken(hiveParser.SSL, 0);
};

NonReservedContext.prototype.STATISTICS = function() {
    return this.getToken(hiveParser.STATISTICS, 0);
};

NonReservedContext.prototype.STORED = function() {
    return this.getToken(hiveParser.STORED, 0);
};

NonReservedContext.prototype.STREAMTABLE = function() {
    return this.getToken(hiveParser.STREAMTABLE, 0);
};

NonReservedContext.prototype.STRING = function() {
    return this.getToken(hiveParser.STRING, 0);
};

NonReservedContext.prototype.STRUCT = function() {
    return this.getToken(hiveParser.STRUCT, 0);
};

NonReservedContext.prototype.TABLES = function() {
    return this.getToken(hiveParser.TABLES, 0);
};

NonReservedContext.prototype.TBLPROPERTIES = function() {
    return this.getToken(hiveParser.TBLPROPERTIES, 0);
};

NonReservedContext.prototype.TEMPORARY = function() {
    return this.getToken(hiveParser.TEMPORARY, 0);
};

NonReservedContext.prototype.TERMINATED = function() {
    return this.getToken(hiveParser.TERMINATED, 0);
};

NonReservedContext.prototype.TINYINT = function() {
    return this.getToken(hiveParser.TINYINT, 0);
};

NonReservedContext.prototype.TOUCH = function() {
    return this.getToken(hiveParser.TOUCH, 0);
};

NonReservedContext.prototype.TRANSACTIONS = function() {
    return this.getToken(hiveParser.TRANSACTIONS, 0);
};

NonReservedContext.prototype.UNARCHIVE = function() {
    return this.getToken(hiveParser.UNARCHIVE, 0);
};

NonReservedContext.prototype.UNDO = function() {
    return this.getToken(hiveParser.UNDO, 0);
};

NonReservedContext.prototype.UNIONTYPE = function() {
    return this.getToken(hiveParser.UNIONTYPE, 0);
};

NonReservedContext.prototype.UNLOCK = function() {
    return this.getToken(hiveParser.UNLOCK, 0);
};

NonReservedContext.prototype.UNSET = function() {
    return this.getToken(hiveParser.UNSET, 0);
};

NonReservedContext.prototype.UNSIGNED = function() {
    return this.getToken(hiveParser.UNSIGNED, 0);
};

NonReservedContext.prototype.URI = function() {
    return this.getToken(hiveParser.URI, 0);
};

NonReservedContext.prototype.USE = function() {
    return this.getToken(hiveParser.USE, 0);
};

NonReservedContext.prototype.UTC = function() {
    return this.getToken(hiveParser.UTC, 0);
};

NonReservedContext.prototype.UTCTIMESTAMP = function() {
    return this.getToken(hiveParser.UTCTIMESTAMP, 0);
};

NonReservedContext.prototype.VALUE_TYPE = function() {
    return this.getToken(hiveParser.VALUE_TYPE, 0);
};

NonReservedContext.prototype.VIEW = function() {
    return this.getToken(hiveParser.VIEW, 0);
};

NonReservedContext.prototype.WHILE = function() {
    return this.getToken(hiveParser.WHILE, 0);
};

NonReservedContext.prototype.YEAR = function() {
    return this.getToken(hiveParser.YEAR, 0);
};

NonReservedContext.prototype.AUTOCOMMIT = function() {
    return this.getToken(hiveParser.AUTOCOMMIT, 0);
};

NonReservedContext.prototype.ISOLATION = function() {
    return this.getToken(hiveParser.ISOLATION, 0);
};

NonReservedContext.prototype.LEVEL = function() {
    return this.getToken(hiveParser.LEVEL, 0);
};

NonReservedContext.prototype.OFFSET = function() {
    return this.getToken(hiveParser.OFFSET, 0);
};

NonReservedContext.prototype.SNAPSHOT = function() {
    return this.getToken(hiveParser.SNAPSHOT, 0);
};

NonReservedContext.prototype.TRANSACTION = function() {
    return this.getToken(hiveParser.TRANSACTION, 0);
};

NonReservedContext.prototype.WORK = function() {
    return this.getToken(hiveParser.WORK, 0);
};

NonReservedContext.prototype.WRITE = function() {
    return this.getToken(hiveParser.WRITE, 0);
};

NonReservedContext.prototype.ABORT = function() {
    return this.getToken(hiveParser.ABORT, 0);
};

NonReservedContext.prototype.KEY = function() {
    return this.getToken(hiveParser.KEY, 0);
};

NonReservedContext.prototype.LAST = function() {
    return this.getToken(hiveParser.LAST, 0);
};

NonReservedContext.prototype.NORELY = function() {
    return this.getToken(hiveParser.NORELY, 0);
};

NonReservedContext.prototype.NOVALIDATE = function() {
    return this.getToken(hiveParser.NOVALIDATE, 0);
};

NonReservedContext.prototype.NULLS = function() {
    return this.getToken(hiveParser.NULLS, 0);
};

NonReservedContext.prototype.RELY = function() {
    return this.getToken(hiveParser.RELY, 0);
};

NonReservedContext.prototype.VALIDATE = function() {
    return this.getToken(hiveParser.VALIDATE, 0);
};

NonReservedContext.prototype.DETAIL = function() {
    return this.getToken(hiveParser.DETAIL, 0);
};

NonReservedContext.prototype.DOW = function() {
    return this.getToken(hiveParser.DOW, 0);
};

NonReservedContext.prototype.EXPRESSION = function() {
    return this.getToken(hiveParser.EXPRESSION, 0);
};

NonReservedContext.prototype.OPERATOR = function() {
    return this.getToken(hiveParser.OPERATOR, 0);
};

NonReservedContext.prototype.QUARTER = function() {
    return this.getToken(hiveParser.QUARTER, 0);
};

NonReservedContext.prototype.SUMMARY = function() {
    return this.getToken(hiveParser.SUMMARY, 0);
};

NonReservedContext.prototype.VECTORIZATION = function() {
    return this.getToken(hiveParser.VECTORIZATION, 0);
};

NonReservedContext.prototype.WEEK = function() {
    return this.getToken(hiveParser.WEEK, 0);
};

NonReservedContext.prototype.YEARS = function() {
    return this.getToken(hiveParser.YEARS, 0);
};

NonReservedContext.prototype.MONTHS = function() {
    return this.getToken(hiveParser.MONTHS, 0);
};

NonReservedContext.prototype.WEEKS = function() {
    return this.getToken(hiveParser.WEEKS, 0);
};

NonReservedContext.prototype.DAYS = function() {
    return this.getToken(hiveParser.DAYS, 0);
};

NonReservedContext.prototype.HOURS = function() {
    return this.getToken(hiveParser.HOURS, 0);
};

NonReservedContext.prototype.MINUTES = function() {
    return this.getToken(hiveParser.MINUTES, 0);
};

NonReservedContext.prototype.SECONDS = function() {
    return this.getToken(hiveParser.SECONDS, 0);
};

NonReservedContext.prototype.TIMESTAMPTZ = function() {
    return this.getToken(hiveParser.TIMESTAMPTZ, 0);
};

NonReservedContext.prototype.ZONE = function() {
    return this.getToken(hiveParser.ZONE, 0);
};

NonReservedContext.prototype.enterRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.enterNonReserved(this);
	}
};

NonReservedContext.prototype.exitRule = function(listener) {
    if(listener instanceof hiveListener ) {
        listener.exitNonReserved(this);
	}
};

NonReservedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hiveVisitor ) {
        return visitor.visitNonReserved(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hiveParser.NonReservedContext = NonReservedContext;

hiveParser.prototype.nonReserved = function() {

    var localctx = new NonReservedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, hiveParser.RULE_nonReserved);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 329;
        _la = this._input.LA(1);
        if(!(((((_la - 143)) & ~0x1f) == 0 && ((1 << (_la - 143)) & ((1 << (hiveParser.SHOW - 143)) | (1 << (hiveParser.DATABASES - 143)) | (1 << (hiveParser.SCHEMAS - 143)) | (1 << (hiveParser.TABLES - 143)) | (1 << (hiveParser.ADD - 143)) | (1 << (hiveParser.ADMIN - 143)) | (1 << (hiveParser.AFTER - 143)) | (1 << (hiveParser.ANALYZE - 143)) | (1 << (hiveParser.ARCHIVE - 143)) | (1 << (hiveParser.ASC - 143)) | (1 << (hiveParser.BEFORE - 143)) | (1 << (hiveParser.BUCKET - 143)) | (1 << (hiveParser.BUCKETS - 143)) | (1 << (hiveParser.CASCADE - 143)) | (1 << (hiveParser.CHANGE - 143)) | (1 << (hiveParser.CLUSTER - 143)) | (1 << (hiveParser.CLUSTERED - 143)) | (1 << (hiveParser.CLUSTERSTATUS - 143)) | (1 << (hiveParser.COLLECTION - 143)) | (1 << (hiveParser.COLUMNS - 143)) | (1 << (hiveParser.COMMENT - 143)) | (1 << (hiveParser.COMPACT - 143)) | (1 << (hiveParser.COMPACTIONS - 143)) | (1 << (hiveParser.COMPUTE - 143)) | (1 << (hiveParser.CONCATENATE - 143)) | (1 << (hiveParser.CONTINUE - 143)) | (1 << (hiveParser.DATA - 143)) | (1 << (hiveParser.DATETIME - 143)) | (1 << (hiveParser.DAY - 143)) | (1 << (hiveParser.DBPROPERTIES - 143)) | (1 << (hiveParser.DEFERRED - 143)) | (1 << (hiveParser.DEFINED - 143)))) !== 0) || ((((_la - 175)) & ~0x1f) == 0 && ((1 << (_la - 175)) & ((1 << (hiveParser.DELIMITED - 175)) | (1 << (hiveParser.DEPENDENCY - 175)) | (1 << (hiveParser.DESC - 175)) | (1 << (hiveParser.DIRECTORIES - 175)) | (1 << (hiveParser.DIRECTORY - 175)) | (1 << (hiveParser.DISABLE - 175)) | (1 << (hiveParser.DISTRIBUTE - 175)) | (1 << (hiveParser.ELEM_TYPE - 175)) | (1 << (hiveParser.ENABLE - 175)) | (1 << (hiveParser.ESCAPED - 175)) | (1 << (hiveParser.EXCLUSIVE - 175)) | (1 << (hiveParser.EXPLAIN - 175)) | (1 << (hiveParser.EXPORT - 175)) | (1 << (hiveParser.FIELDS - 175)) | (1 << (hiveParser.FILE - 175)) | (1 << (hiveParser.FILEFORMAT - 175)) | (1 << (hiveParser.FIRST - 175)) | (1 << (hiveParser.FORMAT - 175)) | (1 << (hiveParser.FORMATTED - 175)) | (1 << (hiveParser.FUNCTIONS - 175)) | (1 << (hiveParser.HOLD_DDLTIME - 175)) | (1 << (hiveParser.HOUR - 175)) | (1 << (hiveParser.IDXPROPERTIES - 175)) | (1 << (hiveParser.IGNORE - 175)) | (1 << (hiveParser.INDEX - 175)) | (1 << (hiveParser.INDEXES - 175)) | (1 << (hiveParser.INPATH - 175)) | (1 << (hiveParser.INPUTDRIVER - 175)) | (1 << (hiveParser.INPUTFORMAT - 175)) | (1 << (hiveParser.ITEMS - 175)) | (1 << (hiveParser.JAR - 175)) | (1 << (hiveParser.KEYS - 175)))) !== 0) || ((((_la - 207)) & ~0x1f) == 0 && ((1 << (_la - 207)) & ((1 << (hiveParser.KEY_TYPE - 207)) | (1 << (hiveParser.LIMIT - 207)) | (1 << (hiveParser.LINES - 207)) | (1 << (hiveParser.LOAD - 207)) | (1 << (hiveParser.LOCATION - 207)) | (1 << (hiveParser.LOCK - 207)) | (1 << (hiveParser.LOCKS - 207)) | (1 << (hiveParser.LOGICAL - 207)) | (1 << (hiveParser.LONG - 207)) | (1 << (hiveParser.MAPJOIN - 207)) | (1 << (hiveParser.MATERIALIZED - 207)) | (1 << (hiveParser.METADATA - 207)) | (1 << (hiveParser.SETMINUS - 207)) | (1 << (hiveParser.MINUTE - 207)) | (1 << (hiveParser.MONTH - 207)) | (1 << (hiveParser.MSCK - 207)) | (1 << (hiveParser.NOSCAN - 207)) | (1 << (hiveParser.NO_DROP - 207)) | (1 << (hiveParser.OFFLINE - 207)) | (1 << (hiveParser.OPTION - 207)) | (1 << (hiveParser.OUTPUTDRIVER - 207)) | (1 << (hiveParser.OUTPUTFORMAT - 207)) | (1 << (hiveParser.OVERWRITE - 207)) | (1 << (hiveParser.OWNER - 207)) | (1 << (hiveParser.PARTITIONED - 207)) | (1 << (hiveParser.PARTITIONS - 207)) | (1 << (hiveParser.PRETTY - 207)) | (1 << (hiveParser.PRINCIPALS - 207)) | (1 << (hiveParser.PROTECTION - 207)) | (1 << (hiveParser.PURGE - 207)) | (1 << (hiveParser.READ - 207)))) !== 0) || ((((_la - 239)) & ~0x1f) == 0 && ((1 << (_la - 239)) & ((1 << (hiveParser.READONLY - 239)) | (1 << (hiveParser.REBUILD - 239)) | (1 << (hiveParser.RECORDREADER - 239)) | (1 << (hiveParser.RECORDWRITER - 239)) | (1 << (hiveParser.RELOAD - 239)) | (1 << (hiveParser.RENAME - 239)) | (1 << (hiveParser.REPAIR - 239)) | (1 << (hiveParser.REPLACE - 239)) | (1 << (hiveParser.REPLICATION - 239)) | (1 << (hiveParser.RESTRICT - 239)) | (1 << (hiveParser.REWRITE - 239)) | (1 << (hiveParser.ROLE - 239)) | (1 << (hiveParser.ROLES - 239)) | (1 << (hiveParser.SCHEMA - 239)) | (1 << (hiveParser.SECOND - 239)) | (1 << (hiveParser.SEMI - 239)) | (1 << (hiveParser.SERDE - 239)) | (1 << (hiveParser.SERDEPROPERTIES - 239)) | (1 << (hiveParser.SERVER - 239)) | (1 << (hiveParser.SETS - 239)) | (1 << (hiveParser.SHARED - 239)) | (1 << (hiveParser.SHOW_DATABASE - 239)) | (1 << (hiveParser.SKEWED - 239)) | (1 << (hiveParser.SORT - 239)) | (1 << (hiveParser.SORTED - 239)) | (1 << (hiveParser.SSL - 239)) | (1 << (hiveParser.STATISTICS - 239)) | (1 << (hiveParser.STORED - 239)) | (1 << (hiveParser.STREAMTABLE - 239)) | (1 << (hiveParser.STRUCT - 239)) | (1 << (hiveParser.TBLPROPERTIES - 239)) | (1 << (hiveParser.TEMPORARY - 239)))) !== 0) || ((((_la - 271)) & ~0x1f) == 0 && ((1 << (_la - 271)) & ((1 << (hiveParser.TERMINATED - 271)) | (1 << (hiveParser.TINYINT - 271)) | (1 << (hiveParser.TOUCH - 271)) | (1 << (hiveParser.TRANSACTIONS - 271)) | (1 << (hiveParser.UNARCHIVE - 271)) | (1 << (hiveParser.UNDO - 271)) | (1 << (hiveParser.UNIONTYPE - 271)) | (1 << (hiveParser.UNLOCK - 271)) | (1 << (hiveParser.UNSET - 271)) | (1 << (hiveParser.UNSIGNED - 271)) | (1 << (hiveParser.URI - 271)) | (1 << (hiveParser.USE - 271)) | (1 << (hiveParser.UTC - 271)) | (1 << (hiveParser.UTCTIMESTAMP - 271)) | (1 << (hiveParser.VALUE_TYPE - 271)) | (1 << (hiveParser.VIEW - 271)) | (1 << (hiveParser.WHILE - 271)) | (1 << (hiveParser.YEAR - 271)) | (1 << (hiveParser.AUTOCOMMIT - 271)) | (1 << (hiveParser.ISOLATION - 271)) | (1 << (hiveParser.LEVEL - 271)) | (1 << (hiveParser.OFFSET - 271)) | (1 << (hiveParser.SNAPSHOT - 271)) | (1 << (hiveParser.TRANSACTION - 271)) | (1 << (hiveParser.WORK - 271)) | (1 << (hiveParser.WRITE - 271)) | (1 << (hiveParser.ABORT - 271)) | (1 << (hiveParser.KEY - 271)) | (1 << (hiveParser.LAST - 271)) | (1 << (hiveParser.NORELY - 271)) | (1 << (hiveParser.NOVALIDATE - 271)) | (1 << (hiveParser.NULLS - 271)))) !== 0) || ((((_la - 303)) & ~0x1f) == 0 && ((1 << (_la - 303)) & ((1 << (hiveParser.RELY - 303)) | (1 << (hiveParser.VALIDATE - 303)) | (1 << (hiveParser.DETAIL - 303)) | (1 << (hiveParser.DOW - 303)) | (1 << (hiveParser.EXPRESSION - 303)) | (1 << (hiveParser.OPERATOR - 303)) | (1 << (hiveParser.QUARTER - 303)) | (1 << (hiveParser.SUMMARY - 303)) | (1 << (hiveParser.VECTORIZATION - 303)) | (1 << (hiveParser.WEEK - 303)) | (1 << (hiveParser.YEARS - 303)) | (1 << (hiveParser.MONTHS - 303)) | (1 << (hiveParser.WEEKS - 303)) | (1 << (hiveParser.DAYS - 303)) | (1 << (hiveParser.HOURS - 303)) | (1 << (hiveParser.MINUTES - 303)) | (1 << (hiveParser.SECONDS - 303)) | (1 << (hiveParser.TIMESTAMPTZ - 303)) | (1 << (hiveParser.ZONE - 303)) | (1 << (hiveParser.PLUS - 303)) | (1 << (hiveParser.STRING - 303)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.hiveParser = hiveParser;
