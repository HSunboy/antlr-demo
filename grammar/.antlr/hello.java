// Generated from /Users/xuexiaokang/Documents/github/antlr-demo/grammar/hello.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class hello extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SHOW=1, DATABASES=2, SCHEMAS=3, LIKE=4, STRING=5;
	public static final int
		RULE_showDataBases = 0;
	public static final String[] ruleNames = {
		"showDataBases"
	};

	private static final String[] _LITERAL_NAMES = {
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "SHOW", "DATABASES", "SCHEMAS", "LIKE", "STRING"
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

	@Override
	public String getGrammarFileName() { return "hello.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public hello(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ShowDataBasesContext extends ParserRuleContext {
		public TerminalNode SHOW() { return getToken(hello.SHOW, 0); }
		public TerminalNode DATABASES() { return getToken(hello.DATABASES, 0); }
		public TerminalNode SCHEMAS() { return getToken(hello.SCHEMAS, 0); }
		public TerminalNode LIKE() { return getToken(hello.LIKE, 0); }
		public TerminalNode STRING() { return getToken(hello.STRING, 0); }
		public ShowDataBasesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showDataBases; }
	}

	public final ShowDataBasesContext showDataBases() throws RecognitionException {
		ShowDataBasesContext _localctx = new ShowDataBasesContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_showDataBases);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2);
			match(SHOW);
			setState(3);
			_la = _input.LA(1);
			if ( !(_la==DATABASES || _la==SCHEMAS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(6);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIKE) {
				{
				setState(4);
				match(LIKE);
				setState(5);
				match(STRING);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\7\13\4\2\t\2\3\2"+
		"\3\2\3\2\3\2\5\2\t\n\2\3\2\2\2\3\2\2\3\3\2\4\5\2\n\2\4\3\2\2\2\4\5\7\3"+
		"\2\2\5\b\t\2\2\2\6\7\7\6\2\2\7\t\7\7\2\2\b\6\3\2\2\2\b\t\3\2\2\2\t\3\3"+
		"\2\2\2\3\b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}