// Generated from /Users/xuexiaokang/Documents/github/antlr-demo/grammar/bnfsql.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class nmfsqlLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		T__52=53, T__53=54, T__54=55, T__55=56, T__56=57, T__57=58, T__58=59, 
		T__59=60, T__60=61, T__61=62, T__62=63, T__63=64, T__64=65, T__65=66, 
		T__66=67, T__67=68, T__68=69, T__69=70, T__70=71, T__71=72, T__72=73, 
		T__73=74, T__74=75, T__75=76, T__76=77, T__77=78, T__78=79, T__79=80, 
		T__80=81, T__81=82, T__82=83, T__83=84, T__84=85, T__85=86, T__86=87, 
		T__87=88, T__88=89, T__89=90, T__90=91, IDENTIFIER=92, BACKQUOTED_IDENTIFIER=93, 
		SIMPLE_COMMENT=94, BRACKETED_EMPTY_COMMENT=95, BRACKETED_COMMENT=96, WS=97, 
		UNRECOGNIZED=98;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
		"T__49", "T__50", "T__51", "T__52", "T__53", "T__54", "T__55", "T__56", 
		"T__57", "T__58", "T__59", "T__60", "T__61", "T__62", "T__63", "T__64", 
		"T__65", "T__66", "T__67", "T__68", "T__69", "T__70", "T__71", "T__72", 
		"T__73", "T__74", "T__75", "T__76", "T__77", "T__78", "T__79", "T__80", 
		"T__81", "T__82", "T__83", "T__84", "T__85", "T__86", "T__87", "T__88", 
		"T__89", "T__90", "IDENTIFIER", "BACKQUOTED_IDENTIFIER", "DECIMAL_DIGITS", 
		"EXPONENT", "DIGIT", "LETTER", "SIMPLE_COMMENT", "BRACKETED_EMPTY_COMMENT", 
		"BRACKETED_COMMENT", "WS", "UNRECOGNIZED"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "';'", "'ALTER'", "'SYSTEM'", "'SESSION'", "'SET'", "'='", "'RESET'", 
		"'ALL'", "'EXPLAIN'", "'PLAN'", "'WITH'", "'TYPE'", "'IMPLEMENTATION'", 
		"'WITHOUT'", "'EXCLUDING'", "'ATTRIBUTES'", "'INCLUDING'", "'AS'", "'JSON'", 
		"'XML'", "'FOR'", "'DESCRIBE'", "'DATABASE'", "'CATALOG'", "'SCHEMA'", 
		"'TABLE'", "'STATEMENT'", "'INSERT'", "'UPSERT'", "'INTO'", "'('", "','", 
		"')'", "'UPDATE'", "'WHERE'", "'MERGE'", "'USING'", "'ON'", "'WHEN'", 
		"'MATCHED'", "'THEN'", "'NOT'", "'VALUES'", "'DELETE'", "'FROM'", "'UNION'", 
		"'DISTINCT'", "'EXCEPT'", "'MINUS'", "'INTERSECT'", "'ORDER'", "'BY'", 
		"'LIMIT'", "'OFFSET'", "'ROW'", "'ROWS'", "'FETCH'", "'FIRST'", "'NEXT'", 
		"'ONLY'", "'ASC'", "'DESC'", "'NULLS'", "'LAST'", "'SELECT'", "'STREAM'", 
		"'GROUP'", "'HAVING'", "'WINDOW'", "'NATURAL'", "'LEFT'", "'RIGHT'", "'FULL'", 
		"'OUTER'", "'JOIN'", "'CROSS'", "'APPLY'", "'SYSTEM_TIME'", "'OF'", "'EXTEND'", 
		"'LATERAL'", "'UNNEST'", "'ORDINALITY'", "'SPECIFIC'", "'NULL'", "'CUBE'", 
		"'ROLLUP'", "'GROUPING'", "'SETS'", "'PARTITION'", "'RANGE'", null, null, 
		null, "'/**/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, "IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
		"SIMPLE_COMMENT", "BRACKETED_EMPTY_COMMENT", "BRACKETED_COMMENT", "WS", 
		"UNRECOGNIZED"
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


	public nmfsqlLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "bnfsql.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2d\u036d\b\1\4\2\t"+
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
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\3\2\3\2\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\6\3\6\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f"+
		"\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25"+
		"\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33"+
		"\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37"+
		"\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3$"+
		"\3%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3\'\3\'\3\'\3(\3(\3(\3(\3(\3)\3)"+
		"\3)\3)\3)\3)\3)\3)\3*\3*\3*\3*\3*\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3-"+
		"\3-\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3/\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60"+
		"\3\60\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62"+
		"\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63"+
		"\3\64\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\65\3\66\3\66\3\66\3\66\3\66"+
		"\3\66\3\67\3\67\3\67\3\67\3\67\3\67\3\67\38\38\38\38\39\39\39\39\39\3"+
		":\3:\3:\3:\3:\3:\3;\3;\3;\3;\3;\3;\3<\3<\3<\3<\3<\3=\3=\3=\3=\3=\3>\3"+
		">\3>\3>\3?\3?\3?\3?\3?\3@\3@\3@\3@\3@\3@\3A\3A\3A\3A\3A\3B\3B\3B\3B\3"+
		"B\3B\3B\3C\3C\3C\3C\3C\3C\3C\3D\3D\3D\3D\3D\3D\3E\3E\3E\3E\3E\3E\3E\3"+
		"F\3F\3F\3F\3F\3F\3F\3G\3G\3G\3G\3G\3G\3G\3G\3H\3H\3H\3H\3H\3I\3I\3I\3"+
		"I\3I\3I\3J\3J\3J\3J\3J\3K\3K\3K\3K\3K\3K\3L\3L\3L\3L\3L\3M\3M\3M\3M\3"+
		"M\3M\3N\3N\3N\3N\3N\3N\3O\3O\3O\3O\3O\3O\3O\3O\3O\3O\3O\3O\3P\3P\3P\3"+
		"Q\3Q\3Q\3Q\3Q\3Q\3Q\3R\3R\3R\3R\3R\3R\3R\3R\3S\3S\3S\3S\3S\3S\3S\3T\3"+
		"T\3T\3T\3T\3T\3T\3T\3T\3T\3T\3U\3U\3U\3U\3U\3U\3U\3U\3U\3V\3V\3V\3V\3"+
		"V\3W\3W\3W\3W\3W\3X\3X\3X\3X\3X\3X\3X\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Z\3"+
		"Z\3Z\3Z\3Z\3[\3[\3[\3[\3[\3[\3[\3[\3[\3[\3\\\3\\\3\\\3\\\3\\\3\\\3]\3"+
		"]\3]\6]\u030e\n]\r]\16]\u030f\3^\3^\3^\3^\7^\u0316\n^\f^\16^\u0319\13"+
		"^\3^\3^\3_\6_\u031e\n_\r_\16_\u031f\3_\3_\7_\u0324\n_\f_\16_\u0327\13"+
		"_\3_\3_\6_\u032b\n_\r_\16_\u032c\5_\u032f\n_\3`\3`\5`\u0333\n`\3`\6`\u0336"+
		"\n`\r`\16`\u0337\3a\3a\3b\3b\3c\3c\3c\3c\7c\u0342\nc\fc\16c\u0345\13c"+
		"\3c\5c\u0348\nc\3c\5c\u034b\nc\3c\3c\3d\3d\3d\3d\3d\3d\3d\3e\3e\3e\3e"+
		"\3e\7e\u035b\ne\fe\16e\u035e\13e\3e\3e\3e\3e\3e\3f\6f\u0366\nf\rf\16f"+
		"\u0367\3f\3f\3g\3g\3\u035c\2h\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13"+
		"\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61"+
		"\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61"+
		"a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087"+
		"E\u0089F\u008bG\u008dH\u008fI\u0091J\u0093K\u0095L\u0097M\u0099N\u009b"+
		"O\u009dP\u009fQ\u00a1R\u00a3S\u00a5T\u00a7U\u00a9V\u00abW\u00adX\u00af"+
		"Y\u00b1Z\u00b3[\u00b5\\\u00b7]\u00b9^\u00bb_\u00bd\2\u00bf\2\u00c1\2\u00c3"+
		"\2\u00c5`\u00c7a\u00c9b\u00cbc\u00cdd\3\2\t\3\2bb\4\2--//\3\2\62;\3\2"+
		"C\\\4\2\f\f\17\17\3\2--\5\2\13\f\17\17\"\"\2\u0378\2\3\3\2\2\2\2\5\3\2"+
		"\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3"+
		"\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3"+
		"\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3"+
		"\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2"+
		"\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2"+
		"Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3"+
		"\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2"+
		"\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2"+
		"\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3"+
		"\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2"+
		"\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099"+
		"\3\2\2\2\2\u009b\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2\2\2\u00a1\3\2\2"+
		"\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2\2\2\u00a7\3\2\2\2\2\u00a9\3\2\2\2\2\u00ab"+
		"\3\2\2\2\2\u00ad\3\2\2\2\2\u00af\3\2\2\2\2\u00b1\3\2\2\2\2\u00b3\3\2\2"+
		"\2\2\u00b5\3\2\2\2\2\u00b7\3\2\2\2\2\u00b9\3\2\2\2\2\u00bb\3\2\2\2\2\u00c5"+
		"\3\2\2\2\2\u00c7\3\2\2\2\2\u00c9\3\2\2\2\2\u00cb\3\2\2\2\2\u00cd\3\2\2"+
		"\2\3\u00cf\3\2\2\2\5\u00d1\3\2\2\2\7\u00d7\3\2\2\2\t\u00de\3\2\2\2\13"+
		"\u00e6\3\2\2\2\r\u00ea\3\2\2\2\17\u00ec\3\2\2\2\21\u00f2\3\2\2\2\23\u00f6"+
		"\3\2\2\2\25\u00fe\3\2\2\2\27\u0103\3\2\2\2\31\u0108\3\2\2\2\33\u010d\3"+
		"\2\2\2\35\u011c\3\2\2\2\37\u0124\3\2\2\2!\u012e\3\2\2\2#\u0139\3\2\2\2"+
		"%\u0143\3\2\2\2\'\u0146\3\2\2\2)\u014b\3\2\2\2+\u014f\3\2\2\2-\u0153\3"+
		"\2\2\2/\u015c\3\2\2\2\61\u0165\3\2\2\2\63\u016d\3\2\2\2\65\u0174\3\2\2"+
		"\2\67\u017a\3\2\2\29\u0184\3\2\2\2;\u018b\3\2\2\2=\u0192\3\2\2\2?\u0197"+
		"\3\2\2\2A\u0199\3\2\2\2C\u019b\3\2\2\2E\u019d\3\2\2\2G\u01a4\3\2\2\2I"+
		"\u01aa\3\2\2\2K\u01b0\3\2\2\2M\u01b6\3\2\2\2O\u01b9\3\2\2\2Q\u01be\3\2"+
		"\2\2S\u01c6\3\2\2\2U\u01cb\3\2\2\2W\u01cf\3\2\2\2Y\u01d6\3\2\2\2[\u01dd"+
		"\3\2\2\2]\u01e2\3\2\2\2_\u01e8\3\2\2\2a\u01f1\3\2\2\2c\u01f8\3\2\2\2e"+
		"\u01fe\3\2\2\2g\u0208\3\2\2\2i\u020e\3\2\2\2k\u0211\3\2\2\2m\u0217\3\2"+
		"\2\2o\u021e\3\2\2\2q\u0222\3\2\2\2s\u0227\3\2\2\2u\u022d\3\2\2\2w\u0233"+
		"\3\2\2\2y\u0238\3\2\2\2{\u023d\3\2\2\2}\u0241\3\2\2\2\177\u0246\3\2\2"+
		"\2\u0081\u024c\3\2\2\2\u0083\u0251\3\2\2\2\u0085\u0258\3\2\2\2\u0087\u025f"+
		"\3\2\2\2\u0089\u0265\3\2\2\2\u008b\u026c\3\2\2\2\u008d\u0273\3\2\2\2\u008f"+
		"\u027b\3\2\2\2\u0091\u0280\3\2\2\2\u0093\u0286\3\2\2\2\u0095\u028b\3\2"+
		"\2\2\u0097\u0291\3\2\2\2\u0099\u0296\3\2\2\2\u009b\u029c\3\2\2\2\u009d"+
		"\u02a2\3\2\2\2\u009f\u02ae\3\2\2\2\u00a1\u02b1\3\2\2\2\u00a3\u02b8\3\2"+
		"\2\2\u00a5\u02c0\3\2\2\2\u00a7\u02c7\3\2\2\2\u00a9\u02d2\3\2\2\2\u00ab"+
		"\u02db\3\2\2\2\u00ad\u02e0\3\2\2\2\u00af\u02e5\3\2\2\2\u00b1\u02ec\3\2"+
		"\2\2\u00b3\u02f5\3\2\2\2\u00b5\u02fa\3\2\2\2\u00b7\u0304\3\2\2\2\u00b9"+
		"\u030d\3\2\2\2\u00bb\u0311\3\2\2\2\u00bd\u032e\3\2\2\2\u00bf\u0330\3\2"+
		"\2\2\u00c1\u0339\3\2\2\2\u00c3\u033b\3\2\2\2\u00c5\u033d\3\2\2\2\u00c7"+
		"\u034e\3\2\2\2\u00c9\u0355\3\2\2\2\u00cb\u0365\3\2\2\2\u00cd\u036b\3\2"+
		"\2\2\u00cf\u00d0\7=\2\2\u00d0\4\3\2\2\2\u00d1\u00d2\7C\2\2\u00d2\u00d3"+
		"\7N\2\2\u00d3\u00d4\7V\2\2\u00d4\u00d5\7G\2\2\u00d5\u00d6\7T\2\2\u00d6"+
		"\6\3\2\2\2\u00d7\u00d8\7U\2\2\u00d8\u00d9\7[\2\2\u00d9\u00da\7U\2\2\u00da"+
		"\u00db\7V\2\2\u00db\u00dc\7G\2\2\u00dc\u00dd\7O\2\2\u00dd\b\3\2\2\2\u00de"+
		"\u00df\7U\2\2\u00df\u00e0\7G\2\2\u00e0\u00e1\7U\2\2\u00e1\u00e2\7U\2\2"+
		"\u00e2\u00e3\7K\2\2\u00e3\u00e4\7Q\2\2\u00e4\u00e5\7P\2\2\u00e5\n\3\2"+
		"\2\2\u00e6\u00e7\7U\2\2\u00e7\u00e8\7G\2\2\u00e8\u00e9\7V\2\2\u00e9\f"+
		"\3\2\2\2\u00ea\u00eb\7?\2\2\u00eb\16\3\2\2\2\u00ec\u00ed\7T\2\2\u00ed"+
		"\u00ee\7G\2\2\u00ee\u00ef\7U\2\2\u00ef\u00f0\7G\2\2\u00f0\u00f1\7V\2\2"+
		"\u00f1\20\3\2\2\2\u00f2\u00f3\7C\2\2\u00f3\u00f4\7N\2\2\u00f4\u00f5\7"+
		"N\2\2\u00f5\22\3\2\2\2\u00f6\u00f7\7G\2\2\u00f7\u00f8\7Z\2\2\u00f8\u00f9"+
		"\7R\2\2\u00f9\u00fa\7N\2\2\u00fa\u00fb\7C\2\2\u00fb\u00fc\7K\2\2\u00fc"+
		"\u00fd\7P\2\2\u00fd\24\3\2\2\2\u00fe\u00ff\7R\2\2\u00ff\u0100\7N\2\2\u0100"+
		"\u0101\7C\2\2\u0101\u0102\7P\2\2\u0102\26\3\2\2\2\u0103\u0104\7Y\2\2\u0104"+
		"\u0105\7K\2\2\u0105\u0106\7V\2\2\u0106\u0107\7J\2\2\u0107\30\3\2\2\2\u0108"+
		"\u0109\7V\2\2\u0109\u010a\7[\2\2\u010a\u010b\7R\2\2\u010b\u010c\7G\2\2"+
		"\u010c\32\3\2\2\2\u010d\u010e\7K\2\2\u010e\u010f\7O\2\2\u010f\u0110\7"+
		"R\2\2\u0110\u0111\7N\2\2\u0111\u0112\7G\2\2\u0112\u0113\7O\2\2\u0113\u0114"+
		"\7G\2\2\u0114\u0115\7P\2\2\u0115\u0116\7V\2\2\u0116\u0117\7C\2\2\u0117"+
		"\u0118\7V\2\2\u0118\u0119\7K\2\2\u0119\u011a\7Q\2\2\u011a\u011b\7P\2\2"+
		"\u011b\34\3\2\2\2\u011c\u011d\7Y\2\2\u011d\u011e\7K\2\2\u011e\u011f\7"+
		"V\2\2\u011f\u0120\7J\2\2\u0120\u0121\7Q\2\2\u0121\u0122\7W\2\2\u0122\u0123"+
		"\7V\2\2\u0123\36\3\2\2\2\u0124\u0125\7G\2\2\u0125\u0126\7Z\2\2\u0126\u0127"+
		"\7E\2\2\u0127\u0128\7N\2\2\u0128\u0129\7W\2\2\u0129\u012a\7F\2\2\u012a"+
		"\u012b\7K\2\2\u012b\u012c\7P\2\2\u012c\u012d\7I\2\2\u012d \3\2\2\2\u012e"+
		"\u012f\7C\2\2\u012f\u0130\7V\2\2\u0130\u0131\7V\2\2\u0131\u0132\7T\2\2"+
		"\u0132\u0133\7K\2\2\u0133\u0134\7D\2\2\u0134\u0135\7W\2\2\u0135\u0136"+
		"\7V\2\2\u0136\u0137\7G\2\2\u0137\u0138\7U\2\2\u0138\"\3\2\2\2\u0139\u013a"+
		"\7K\2\2\u013a\u013b\7P\2\2\u013b\u013c\7E\2\2\u013c\u013d\7N\2\2\u013d"+
		"\u013e\7W\2\2\u013e\u013f\7F\2\2\u013f\u0140\7K\2\2\u0140\u0141\7P\2\2"+
		"\u0141\u0142\7I\2\2\u0142$\3\2\2\2\u0143\u0144\7C\2\2\u0144\u0145\7U\2"+
		"\2\u0145&\3\2\2\2\u0146\u0147\7L\2\2\u0147\u0148\7U\2\2\u0148\u0149\7"+
		"Q\2\2\u0149\u014a\7P\2\2\u014a(\3\2\2\2\u014b\u014c\7Z\2\2\u014c\u014d"+
		"\7O\2\2\u014d\u014e\7N\2\2\u014e*\3\2\2\2\u014f\u0150\7H\2\2\u0150\u0151"+
		"\7Q\2\2\u0151\u0152\7T\2\2\u0152,\3\2\2\2\u0153\u0154\7F\2\2\u0154\u0155"+
		"\7G\2\2\u0155\u0156\7U\2\2\u0156\u0157\7E\2\2\u0157\u0158\7T\2\2\u0158"+
		"\u0159\7K\2\2\u0159\u015a\7D\2\2\u015a\u015b\7G\2\2\u015b.\3\2\2\2\u015c"+
		"\u015d\7F\2\2\u015d\u015e\7C\2\2\u015e\u015f\7V\2\2\u015f\u0160\7C\2\2"+
		"\u0160\u0161\7D\2\2\u0161\u0162\7C\2\2\u0162\u0163\7U\2\2\u0163\u0164"+
		"\7G\2\2\u0164\60\3\2\2\2\u0165\u0166\7E\2\2\u0166\u0167\7C\2\2\u0167\u0168"+
		"\7V\2\2\u0168\u0169\7C\2\2\u0169\u016a\7N\2\2\u016a\u016b\7Q\2\2\u016b"+
		"\u016c\7I\2\2\u016c\62\3\2\2\2\u016d\u016e\7U\2\2\u016e\u016f\7E\2\2\u016f"+
		"\u0170\7J\2\2\u0170\u0171\7G\2\2\u0171\u0172\7O\2\2\u0172\u0173\7C\2\2"+
		"\u0173\64\3\2\2\2\u0174\u0175\7V\2\2\u0175\u0176\7C\2\2\u0176\u0177\7"+
		"D\2\2\u0177\u0178\7N\2\2\u0178\u0179\7G\2\2\u0179\66\3\2\2\2\u017a\u017b"+
		"\7U\2\2\u017b\u017c\7V\2\2\u017c\u017d\7C\2\2\u017d\u017e\7V\2\2\u017e"+
		"\u017f\7G\2\2\u017f\u0180\7O\2\2\u0180\u0181\7G\2\2\u0181\u0182\7P\2\2"+
		"\u0182\u0183\7V\2\2\u01838\3\2\2\2\u0184\u0185\7K\2\2\u0185\u0186\7P\2"+
		"\2\u0186\u0187\7U\2\2\u0187\u0188\7G\2\2\u0188\u0189\7T\2\2\u0189\u018a"+
		"\7V\2\2\u018a:\3\2\2\2\u018b\u018c\7W\2\2\u018c\u018d\7R\2\2\u018d\u018e"+
		"\7U\2\2\u018e\u018f\7G\2\2\u018f\u0190\7T\2\2\u0190\u0191\7V\2\2\u0191"+
		"<\3\2\2\2\u0192\u0193\7K\2\2\u0193\u0194\7P\2\2\u0194\u0195\7V\2\2\u0195"+
		"\u0196\7Q\2\2\u0196>\3\2\2\2\u0197\u0198\7*\2\2\u0198@\3\2\2\2\u0199\u019a"+
		"\7.\2\2\u019aB\3\2\2\2\u019b\u019c\7+\2\2\u019cD\3\2\2\2\u019d\u019e\7"+
		"W\2\2\u019e\u019f\7R\2\2\u019f\u01a0\7F\2\2\u01a0\u01a1\7C\2\2\u01a1\u01a2"+
		"\7V\2\2\u01a2\u01a3\7G\2\2\u01a3F\3\2\2\2\u01a4\u01a5\7Y\2\2\u01a5\u01a6"+
		"\7J\2\2\u01a6\u01a7\7G\2\2\u01a7\u01a8\7T\2\2\u01a8\u01a9\7G\2\2\u01a9"+
		"H\3\2\2\2\u01aa\u01ab\7O\2\2\u01ab\u01ac\7G\2\2\u01ac\u01ad\7T\2\2\u01ad"+
		"\u01ae\7I\2\2\u01ae\u01af\7G\2\2\u01afJ\3\2\2\2\u01b0\u01b1\7W\2\2\u01b1"+
		"\u01b2\7U\2\2\u01b2\u01b3\7K\2\2\u01b3\u01b4\7P\2\2\u01b4\u01b5\7I\2\2"+
		"\u01b5L\3\2\2\2\u01b6\u01b7\7Q\2\2\u01b7\u01b8\7P\2\2\u01b8N\3\2\2\2\u01b9"+
		"\u01ba\7Y\2\2\u01ba\u01bb\7J\2\2\u01bb\u01bc\7G\2\2\u01bc\u01bd\7P\2\2"+
		"\u01bdP\3\2\2\2\u01be\u01bf\7O\2\2\u01bf\u01c0\7C\2\2\u01c0\u01c1\7V\2"+
		"\2\u01c1\u01c2\7E\2\2\u01c2\u01c3\7J\2\2\u01c3\u01c4\7G\2\2\u01c4\u01c5"+
		"\7F\2\2\u01c5R\3\2\2\2\u01c6\u01c7\7V\2\2\u01c7\u01c8\7J\2\2\u01c8\u01c9"+
		"\7G\2\2\u01c9\u01ca\7P\2\2\u01caT\3\2\2\2\u01cb\u01cc\7P\2\2\u01cc\u01cd"+
		"\7Q\2\2\u01cd\u01ce\7V\2\2\u01ceV\3\2\2\2\u01cf\u01d0\7X\2\2\u01d0\u01d1"+
		"\7C\2\2\u01d1\u01d2\7N\2\2\u01d2\u01d3\7W\2\2\u01d3\u01d4\7G\2\2\u01d4"+
		"\u01d5\7U\2\2\u01d5X\3\2\2\2\u01d6\u01d7\7F\2\2\u01d7\u01d8\7G\2\2\u01d8"+
		"\u01d9\7N\2\2\u01d9\u01da\7G\2\2\u01da\u01db\7V\2\2\u01db\u01dc\7G\2\2"+
		"\u01dcZ\3\2\2\2\u01dd\u01de\7H\2\2\u01de\u01df\7T\2\2\u01df\u01e0\7Q\2"+
		"\2\u01e0\u01e1\7O\2\2\u01e1\\\3\2\2\2\u01e2\u01e3\7W\2\2\u01e3\u01e4\7"+
		"P\2\2\u01e4\u01e5\7K\2\2\u01e5\u01e6\7Q\2\2\u01e6\u01e7\7P\2\2\u01e7^"+
		"\3\2\2\2\u01e8\u01e9\7F\2\2\u01e9\u01ea\7K\2\2\u01ea\u01eb\7U\2\2\u01eb"+
		"\u01ec\7V\2\2\u01ec\u01ed\7K\2\2\u01ed\u01ee\7P\2\2\u01ee\u01ef\7E\2\2"+
		"\u01ef\u01f0\7V\2\2\u01f0`\3\2\2\2\u01f1\u01f2\7G\2\2\u01f2\u01f3\7Z\2"+
		"\2\u01f3\u01f4\7E\2\2\u01f4\u01f5\7G\2\2\u01f5\u01f6\7R\2\2\u01f6\u01f7"+
		"\7V\2\2\u01f7b\3\2\2\2\u01f8\u01f9\7O\2\2\u01f9\u01fa\7K\2\2\u01fa\u01fb"+
		"\7P\2\2\u01fb\u01fc\7W\2\2\u01fc\u01fd\7U\2\2\u01fdd\3\2\2\2\u01fe\u01ff"+
		"\7K\2\2\u01ff\u0200\7P\2\2\u0200\u0201\7V\2\2\u0201\u0202\7G\2\2\u0202"+
		"\u0203\7T\2\2\u0203\u0204\7U\2\2\u0204\u0205\7G\2\2\u0205\u0206\7E\2\2"+
		"\u0206\u0207\7V\2\2\u0207f\3\2\2\2\u0208\u0209\7Q\2\2\u0209\u020a\7T\2"+
		"\2\u020a\u020b\7F\2\2\u020b\u020c\7G\2\2\u020c\u020d\7T\2\2\u020dh\3\2"+
		"\2\2\u020e\u020f\7D\2\2\u020f\u0210\7[\2\2\u0210j\3\2\2\2\u0211\u0212"+
		"\7N\2\2\u0212\u0213\7K\2\2\u0213\u0214\7O\2\2\u0214\u0215\7K\2\2\u0215"+
		"\u0216\7V\2\2\u0216l\3\2\2\2\u0217\u0218\7Q\2\2\u0218\u0219\7H\2\2\u0219"+
		"\u021a\7H\2\2\u021a\u021b\7U\2\2\u021b\u021c\7G\2\2\u021c\u021d\7V\2\2"+
		"\u021dn\3\2\2\2\u021e\u021f\7T\2\2\u021f\u0220\7Q\2\2\u0220\u0221\7Y\2"+
		"\2\u0221p\3\2\2\2\u0222\u0223\7T\2\2\u0223\u0224\7Q\2\2\u0224\u0225\7"+
		"Y\2\2\u0225\u0226\7U\2\2\u0226r\3\2\2\2\u0227\u0228\7H\2\2\u0228\u0229"+
		"\7G\2\2\u0229\u022a\7V\2\2\u022a\u022b\7E\2\2\u022b\u022c\7J\2\2\u022c"+
		"t\3\2\2\2\u022d\u022e\7H\2\2\u022e\u022f\7K\2\2\u022f\u0230\7T\2\2\u0230"+
		"\u0231\7U\2\2\u0231\u0232\7V\2\2\u0232v\3\2\2\2\u0233\u0234\7P\2\2\u0234"+
		"\u0235\7G\2\2\u0235\u0236\7Z\2\2\u0236\u0237\7V\2\2\u0237x\3\2\2\2\u0238"+
		"\u0239\7Q\2\2\u0239\u023a\7P\2\2\u023a\u023b\7N\2\2\u023b\u023c\7[\2\2"+
		"\u023cz\3\2\2\2\u023d\u023e\7C\2\2\u023e\u023f\7U\2\2\u023f\u0240\7E\2"+
		"\2\u0240|\3\2\2\2\u0241\u0242\7F\2\2\u0242\u0243\7G\2\2\u0243\u0244\7"+
		"U\2\2\u0244\u0245\7E\2\2\u0245~\3\2\2\2\u0246\u0247\7P\2\2\u0247\u0248"+
		"\7W\2\2\u0248\u0249\7N\2\2\u0249\u024a\7N\2\2\u024a\u024b\7U\2\2\u024b"+
		"\u0080\3\2\2\2\u024c\u024d\7N\2\2\u024d\u024e\7C\2\2\u024e\u024f\7U\2"+
		"\2\u024f\u0250\7V\2\2\u0250\u0082\3\2\2\2\u0251\u0252\7U\2\2\u0252\u0253"+
		"\7G\2\2\u0253\u0254\7N\2\2\u0254\u0255\7G\2\2\u0255\u0256\7E\2\2\u0256"+
		"\u0257\7V\2\2\u0257\u0084\3\2\2\2\u0258\u0259\7U\2\2\u0259\u025a\7V\2"+
		"\2\u025a\u025b\7T\2\2\u025b\u025c\7G\2\2\u025c\u025d\7C\2\2\u025d\u025e"+
		"\7O\2\2\u025e\u0086\3\2\2\2\u025f\u0260\7I\2\2\u0260\u0261\7T\2\2\u0261"+
		"\u0262\7Q\2\2\u0262\u0263\7W\2\2\u0263\u0264\7R\2\2\u0264\u0088\3\2\2"+
		"\2\u0265\u0266\7J\2\2\u0266\u0267\7C\2\2\u0267\u0268\7X\2\2\u0268\u0269"+
		"\7K\2\2\u0269\u026a\7P\2\2\u026a\u026b\7I\2\2\u026b\u008a\3\2\2\2\u026c"+
		"\u026d\7Y\2\2\u026d\u026e\7K\2\2\u026e\u026f\7P\2\2\u026f\u0270\7F\2\2"+
		"\u0270\u0271\7Q\2\2\u0271\u0272\7Y\2\2\u0272\u008c\3\2\2\2\u0273\u0274"+
		"\7P\2\2\u0274\u0275\7C\2\2\u0275\u0276\7V\2\2\u0276\u0277\7W\2\2\u0277"+
		"\u0278\7T\2\2\u0278\u0279\7C\2\2\u0279\u027a\7N\2\2\u027a\u008e\3\2\2"+
		"\2\u027b\u027c\7N\2\2\u027c\u027d\7G\2\2\u027d\u027e\7H\2\2\u027e\u027f"+
		"\7V\2\2\u027f\u0090\3\2\2\2\u0280\u0281\7T\2\2\u0281\u0282\7K\2\2\u0282"+
		"\u0283\7I\2\2\u0283\u0284\7J\2\2\u0284\u0285\7V\2\2\u0285\u0092\3\2\2"+
		"\2\u0286\u0287\7H\2\2\u0287\u0288\7W\2\2\u0288\u0289\7N\2\2\u0289\u028a"+
		"\7N\2\2\u028a\u0094\3\2\2\2\u028b\u028c\7Q\2\2\u028c\u028d\7W\2\2\u028d"+
		"\u028e\7V\2\2\u028e\u028f\7G\2\2\u028f\u0290\7T\2\2\u0290\u0096\3\2\2"+
		"\2\u0291\u0292\7L\2\2\u0292\u0293\7Q\2\2\u0293\u0294\7K\2\2\u0294\u0295"+
		"\7P\2\2\u0295\u0098\3\2\2\2\u0296\u0297\7E\2\2\u0297\u0298\7T\2\2\u0298"+
		"\u0299\7Q\2\2\u0299\u029a\7U\2\2\u029a\u029b\7U\2\2\u029b\u009a\3\2\2"+
		"\2\u029c\u029d\7C\2\2\u029d\u029e\7R\2\2\u029e\u029f\7R\2\2\u029f\u02a0"+
		"\7N\2\2\u02a0\u02a1\7[\2\2\u02a1\u009c\3\2\2\2\u02a2\u02a3\7U\2\2\u02a3"+
		"\u02a4\7[\2\2\u02a4\u02a5\7U\2\2\u02a5\u02a6\7V\2\2\u02a6\u02a7\7G\2\2"+
		"\u02a7\u02a8\7O\2\2\u02a8\u02a9\7a\2\2\u02a9\u02aa\7V\2\2\u02aa\u02ab"+
		"\7K\2\2\u02ab\u02ac\7O\2\2\u02ac\u02ad\7G\2\2\u02ad\u009e\3\2\2\2\u02ae"+
		"\u02af\7Q\2\2\u02af\u02b0\7H\2\2\u02b0\u00a0\3\2\2\2\u02b1\u02b2\7G\2"+
		"\2\u02b2\u02b3\7Z\2\2\u02b3\u02b4\7V\2\2\u02b4\u02b5\7G\2\2\u02b5\u02b6"+
		"\7P\2\2\u02b6\u02b7\7F\2\2\u02b7\u00a2\3\2\2\2\u02b8\u02b9\7N\2\2\u02b9"+
		"\u02ba\7C\2\2\u02ba\u02bb\7V\2\2\u02bb\u02bc\7G\2\2\u02bc\u02bd\7T\2\2"+
		"\u02bd\u02be\7C\2\2\u02be\u02bf\7N\2\2\u02bf\u00a4\3\2\2\2\u02c0\u02c1"+
		"\7W\2\2\u02c1\u02c2\7P\2\2\u02c2\u02c3\7P\2\2\u02c3\u02c4\7G\2\2\u02c4"+
		"\u02c5\7U\2\2\u02c5\u02c6\7V\2\2\u02c6\u00a6\3\2\2\2\u02c7\u02c8\7Q\2"+
		"\2\u02c8\u02c9\7T\2\2\u02c9\u02ca\7F\2\2\u02ca\u02cb\7K\2\2\u02cb\u02cc"+
		"\7P\2\2\u02cc\u02cd\7C\2\2\u02cd\u02ce\7N\2\2\u02ce\u02cf\7K\2\2\u02cf"+
		"\u02d0\7V\2\2\u02d0\u02d1\7[\2\2\u02d1\u00a8\3\2\2\2\u02d2\u02d3\7U\2"+
		"\2\u02d3\u02d4\7R\2\2\u02d4\u02d5\7G\2\2\u02d5\u02d6\7E\2\2\u02d6\u02d7"+
		"\7K\2\2\u02d7\u02d8\7H\2\2\u02d8\u02d9\7K\2\2\u02d9\u02da\7E\2\2\u02da"+
		"\u00aa\3\2\2\2\u02db\u02dc\7P\2\2\u02dc\u02dd\7W\2\2\u02dd\u02de\7N\2"+
		"\2\u02de\u02df\7N\2\2\u02df\u00ac\3\2\2\2\u02e0\u02e1\7E\2\2\u02e1\u02e2"+
		"\7W\2\2\u02e2\u02e3\7D\2\2\u02e3\u02e4\7G\2\2\u02e4\u00ae\3\2\2\2\u02e5"+
		"\u02e6\7T\2\2\u02e6\u02e7\7Q\2\2\u02e7\u02e8\7N\2\2\u02e8\u02e9\7N\2\2"+
		"\u02e9\u02ea\7W\2\2\u02ea\u02eb\7R\2\2\u02eb\u00b0\3\2\2\2\u02ec\u02ed"+
		"\7I\2\2\u02ed\u02ee\7T\2\2\u02ee\u02ef\7Q\2\2\u02ef\u02f0\7W\2\2\u02f0"+
		"\u02f1\7R\2\2\u02f1\u02f2\7K\2\2\u02f2\u02f3\7P\2\2\u02f3\u02f4\7I\2\2"+
		"\u02f4\u00b2\3\2\2\2\u02f5\u02f6\7U\2\2\u02f6\u02f7\7G\2\2\u02f7\u02f8"+
		"\7V\2\2\u02f8\u02f9\7U\2\2\u02f9\u00b4\3\2\2\2\u02fa\u02fb\7R\2\2\u02fb"+
		"\u02fc\7C\2\2\u02fc\u02fd\7T\2\2\u02fd\u02fe\7V\2\2\u02fe\u02ff\7K\2\2"+
		"\u02ff\u0300\7V\2\2\u0300\u0301\7K\2\2\u0301\u0302\7Q\2\2\u0302\u0303"+
		"\7P\2\2\u0303\u00b6\3\2\2\2\u0304\u0305\7T\2\2\u0305\u0306\7C\2\2\u0306"+
		"\u0307\7P\2\2\u0307\u0308\7I\2\2\u0308\u0309\7G\2\2\u0309\u00b8\3\2\2"+
		"\2\u030a\u030e\5\u00c3b\2\u030b\u030e\5\u00c1a\2\u030c\u030e\7a\2\2\u030d"+
		"\u030a\3\2\2\2\u030d\u030b\3\2\2\2\u030d\u030c\3\2\2\2\u030e\u030f\3\2"+
		"\2\2\u030f\u030d\3\2\2\2\u030f\u0310\3\2\2\2\u0310\u00ba\3\2\2\2\u0311"+
		"\u0317\7b\2\2\u0312\u0316\n\2\2\2\u0313\u0314\7b\2\2\u0314\u0316\7b\2"+
		"\2\u0315\u0312\3\2\2\2\u0315\u0313\3\2\2\2\u0316\u0319\3\2\2\2\u0317\u0315"+
		"\3\2\2\2\u0317\u0318\3\2\2\2\u0318\u031a\3\2\2\2\u0319\u0317\3\2\2\2\u031a"+
		"\u031b\7b\2\2\u031b\u00bc\3\2\2\2\u031c\u031e\5\u00c1a\2\u031d\u031c\3"+
		"\2\2\2\u031e\u031f\3\2\2\2\u031f\u031d\3\2\2\2\u031f\u0320\3\2\2\2\u0320"+
		"\u0321\3\2\2\2\u0321\u0325\7\60\2\2\u0322\u0324\5\u00c1a\2\u0323\u0322"+
		"\3\2\2\2\u0324\u0327\3\2\2\2\u0325\u0323\3\2\2\2\u0325\u0326\3\2\2\2\u0326"+
		"\u032f\3\2\2\2\u0327\u0325\3\2\2\2\u0328\u032a\7\60\2\2\u0329\u032b\5"+
		"\u00c1a\2\u032a\u0329\3\2\2\2\u032b\u032c\3\2\2\2\u032c\u032a\3\2\2\2"+
		"\u032c\u032d\3\2\2\2\u032d\u032f\3\2\2\2\u032e\u031d\3\2\2\2\u032e\u0328"+
		"\3\2\2\2\u032f\u00be\3\2\2\2\u0330\u0332\7G\2\2\u0331\u0333\t\3\2\2\u0332"+
		"\u0331\3\2\2\2\u0332\u0333\3\2\2\2\u0333\u0335\3\2\2\2\u0334\u0336\5\u00c1"+
		"a\2\u0335\u0334\3\2\2\2\u0336\u0337\3\2\2\2\u0337\u0335\3\2\2\2\u0337"+
		"\u0338\3\2\2\2\u0338\u00c0\3\2\2\2\u0339\u033a\t\4\2\2\u033a\u00c2\3\2"+
		"\2\2\u033b\u033c\t\5\2\2\u033c\u00c4\3\2\2\2\u033d\u033e\7/\2\2\u033e"+
		"\u033f\7/\2\2\u033f\u0343\3\2\2\2\u0340\u0342\n\6\2\2\u0341\u0340\3\2"+
		"\2\2\u0342\u0345\3\2\2\2\u0343\u0341\3\2\2\2\u0343\u0344\3\2\2\2\u0344"+
		"\u0347\3\2\2\2\u0345\u0343\3\2\2\2\u0346\u0348\7\17\2\2\u0347\u0346\3"+
		"\2\2\2\u0347\u0348\3\2\2\2\u0348\u034a\3\2\2\2\u0349\u034b\7\f\2\2\u034a"+
		"\u0349\3\2\2\2\u034a\u034b\3\2\2\2\u034b\u034c\3\2\2\2\u034c\u034d\bc"+
		"\2\2\u034d\u00c6\3\2\2\2\u034e\u034f\7\61\2\2\u034f\u0350\7,\2\2\u0350"+
		"\u0351\7,\2\2\u0351\u0352\7\61\2\2\u0352\u0353\3\2\2\2\u0353\u0354\bd"+
		"\2\2\u0354\u00c8\3\2\2\2\u0355\u0356\7\61\2\2\u0356\u0357\7,\2\2\u0357"+
		"\u0358\3\2\2\2\u0358\u035c\n\7\2\2\u0359\u035b\13\2\2\2\u035a\u0359\3"+
		"\2\2\2\u035b\u035e\3\2\2\2\u035c\u035d\3\2\2\2\u035c\u035a\3\2\2\2\u035d"+
		"\u035f\3\2\2\2\u035e\u035c\3\2\2\2\u035f\u0360\7,\2\2\u0360\u0361\7\61"+
		"\2\2\u0361\u0362\3\2\2\2\u0362\u0363\be\2\2\u0363\u00ca\3\2\2\2\u0364"+
		"\u0366\t\b\2\2\u0365\u0364\3\2\2\2\u0366\u0367\3\2\2\2\u0367\u0365\3\2"+
		"\2\2\u0367\u0368\3\2\2\2\u0368\u0369\3\2\2\2\u0369\u036a\bf\2\2\u036a"+
		"\u00cc\3\2\2\2\u036b\u036c\13\2\2\2\u036c\u00ce\3\2\2\2\22\2\u030d\u030f"+
		"\u0315\u0317\u031f\u0325\u032c\u032e\u0332\u0337\u0343\u0347\u034a\u035c"+
		"\u0367\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}