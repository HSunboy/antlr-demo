// Generated from /Users/xuexiaokang/Documents/github/antlr-demo/grammar/helloLexer.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class helloLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SHOW=1, DATABASES=2, SCHEMAS=3, LIKE=4, STRING=5, IDENTIFIER=6, WS=7;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"DIGIT", "LETTER", "SHOW", "DATABASES", "SCHEMAS", "LIKE", "STRING", "IDENTIFIER", 
		"WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'SHOW'", "'DATABASES'", "'SCHEMAS'", "'LIKE'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "SHOW", "DATABASES", "SCHEMAS", "LIKE", "STRING", "IDENTIFIER", 
		"WS"
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


	public helloLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "helloLexer.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\tY\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\3\2\3\2"+
		"\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\7\b"+
		":\n\b\f\b\16\b=\13\b\3\b\3\b\3\b\3\b\3\b\7\bD\n\b\f\b\16\bG\13\b\3\b\5"+
		"\bJ\n\b\3\t\3\t\3\t\6\tO\n\t\r\t\16\tP\3\n\6\nT\n\n\r\n\16\nU\3\n\3\n"+
		"\2\2\13\3\2\5\2\7\3\t\4\13\5\r\6\17\7\21\b\23\t\3\2\7\3\2\62;\3\2C\\\4"+
		"\2))^^\4\2$$^^\5\2\13\f\17\17\"\"\2_\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2"+
		"\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\3\25\3\2\2\2\5"+
		"\27\3\2\2\2\7\31\3\2\2\2\t\36\3\2\2\2\13(\3\2\2\2\r\60\3\2\2\2\17I\3\2"+
		"\2\2\21N\3\2\2\2\23S\3\2\2\2\25\26\t\2\2\2\26\4\3\2\2\2\27\30\t\3\2\2"+
		"\30\6\3\2\2\2\31\32\7U\2\2\32\33\7J\2\2\33\34\7Q\2\2\34\35\7Y\2\2\35\b"+
		"\3\2\2\2\36\37\7F\2\2\37 \7C\2\2 !\7V\2\2!\"\7C\2\2\"#\7D\2\2#$\7C\2\2"+
		"$%\7U\2\2%&\7G\2\2&\'\7U\2\2\'\n\3\2\2\2()\7U\2\2)*\7E\2\2*+\7J\2\2+,"+
		"\7G\2\2,-\7O\2\2-.\7C\2\2./\7U\2\2/\f\3\2\2\2\60\61\7N\2\2\61\62\7K\2"+
		"\2\62\63\7M\2\2\63\64\7G\2\2\64\16\3\2\2\2\65;\7)\2\2\66:\n\4\2\2\678"+
		"\7^\2\28:\13\2\2\29\66\3\2\2\29\67\3\2\2\2:=\3\2\2\2;9\3\2\2\2;<\3\2\2"+
		"\2<>\3\2\2\2=;\3\2\2\2>J\7)\2\2?E\7$\2\2@D\n\5\2\2AB\7^\2\2BD\13\2\2\2"+
		"C@\3\2\2\2CA\3\2\2\2DG\3\2\2\2EC\3\2\2\2EF\3\2\2\2FH\3\2\2\2GE\3\2\2\2"+
		"HJ\7$\2\2I\65\3\2\2\2I?\3\2\2\2J\20\3\2\2\2KO\5\5\3\2LO\5\3\2\2MO\7a\2"+
		"\2NK\3\2\2\2NL\3\2\2\2NM\3\2\2\2OP\3\2\2\2PN\3\2\2\2PQ\3\2\2\2Q\22\3\2"+
		"\2\2RT\t\6\2\2SR\3\2\2\2TU\3\2\2\2US\3\2\2\2UV\3\2\2\2VW\3\2\2\2WX\b\n"+
		"\2\2X\24\3\2\2\2\13\29;CEINPU\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}