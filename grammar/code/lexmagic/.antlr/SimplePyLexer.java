// Generated from /Users/xuexiaokang/Documents/github/antlr-demo/grammar/code/lexmagic/SimplePy.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SimplePyLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, ID=4, INT=5, LPAREN=6, RPAREN=7, LBRACK=8, RBRACK=9, 
		IGNORE_NEWLINE=10, NEWLINE=11, WS=12, LINE_ESCAPE=13, COMMENT=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "ID", "INT", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
		"IGNORE_NEWLINE", "NEWLINE", "WS", "LINE_ESCAPE", "COMMENT"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'='", "'+'", "','", null, null, "'('", "')'", "'['", "']'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, "ID", "INT", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
		"IGNORE_NEWLINE", "NEWLINE", "WS", "LINE_ESCAPE", "COMMENT"
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


	    int nesting = 0;


	public SimplePyLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SimplePy.g4"; }

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

	@Override
	public void action(RuleContext _localctx, int ruleIndex, int actionIndex) {
		switch (ruleIndex) {
		case 5:
			LPAREN_action((RuleContext)_localctx, actionIndex);
			break;
		case 6:
			RPAREN_action((RuleContext)_localctx, actionIndex);
			break;
		case 7:
			LBRACK_action((RuleContext)_localctx, actionIndex);
			break;
		case 8:
			RBRACK_action((RuleContext)_localctx, actionIndex);
			break;
		}
	}
	private void LPAREN_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 0:
			nesting++;
			break;
		}
	}
	private void RPAREN_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 1:
			nesting--;
			break;
		}
	}
	private void LBRACK_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 2:
			nesting++;
			break;
		}
	}
	private void RBRACK_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 3:
			nesting--;
			break;
		}
	}
	@Override
	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 9:
			return IGNORE_NEWLINE_sempred((RuleContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean IGNORE_NEWLINE_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return nesting>0;
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\20b\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3"+
		"\5\7\5(\n\5\f\5\16\5+\13\5\3\6\6\6.\n\6\r\6\16\6/\3\7\3\7\3\7\3\b\3\b"+
		"\3\b\3\t\3\t\3\t\3\n\3\n\3\n\3\13\5\13?\n\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\f\5\fG\n\f\3\f\3\f\3\r\6\rL\n\r\r\r\16\rM\3\r\3\r\3\16\3\16\5\16T\n"+
		"\16\3\16\3\16\3\16\3\16\3\17\3\17\7\17\\\n\17\f\17\16\17_\13\17\3\17\3"+
		"\17\2\2\20\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33"+
		"\17\35\20\3\2\7\5\2C\\aac|\6\2\62;C\\aac|\3\2\62;\4\2\13\13\"\"\4\2\f"+
		"\f\17\17\2h\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2"+
		"\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\3\37\3\2\2\2\5!\3\2\2"+
		"\2\7#\3\2\2\2\t%\3\2\2\2\13-\3\2\2\2\r\61\3\2\2\2\17\64\3\2\2\2\21\67"+
		"\3\2\2\2\23:\3\2\2\2\25>\3\2\2\2\27F\3\2\2\2\31K\3\2\2\2\33Q\3\2\2\2\35"+
		"Y\3\2\2\2\37 \7?\2\2 \4\3\2\2\2!\"\7-\2\2\"\6\3\2\2\2#$\7.\2\2$\b\3\2"+
		"\2\2%)\t\2\2\2&(\t\3\2\2\'&\3\2\2\2(+\3\2\2\2)\'\3\2\2\2)*\3\2\2\2*\n"+
		"\3\2\2\2+)\3\2\2\2,.\t\4\2\2-,\3\2\2\2./\3\2\2\2/-\3\2\2\2/\60\3\2\2\2"+
		"\60\f\3\2\2\2\61\62\7*\2\2\62\63\b\7\2\2\63\16\3\2\2\2\64\65\7+\2\2\65"+
		"\66\b\b\3\2\66\20\3\2\2\2\678\7]\2\289\b\t\4\29\22\3\2\2\2:;\7_\2\2;<"+
		"\b\n\5\2<\24\3\2\2\2=?\7\17\2\2>=\3\2\2\2>?\3\2\2\2?@\3\2\2\2@A\7\f\2"+
		"\2AB\6\13\2\2BC\3\2\2\2CD\b\13\6\2D\26\3\2\2\2EG\7\17\2\2FE\3\2\2\2FG"+
		"\3\2\2\2GH\3\2\2\2HI\7\f\2\2I\30\3\2\2\2JL\t\5\2\2KJ\3\2\2\2LM\3\2\2\2"+
		"MK\3\2\2\2MN\3\2\2\2NO\3\2\2\2OP\b\r\6\2P\32\3\2\2\2QS\7^\2\2RT\7\17\2"+
		"\2SR\3\2\2\2ST\3\2\2\2TU\3\2\2\2UV\7\f\2\2VW\3\2\2\2WX\b\16\6\2X\34\3"+
		"\2\2\2Y]\7%\2\2Z\\\n\6\2\2[Z\3\2\2\2\\_\3\2\2\2][\3\2\2\2]^\3\2\2\2^`"+
		"\3\2\2\2_]\3\2\2\2`a\b\17\6\2a\36\3\2\2\2\n\2)/>FMS]\7\3\7\2\3\b\3\3\t"+
		"\4\3\n\5\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}