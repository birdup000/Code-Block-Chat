import React from 'react';
import clipboardCopy from 'clipboard-copy';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeBlock.css';

// Don't forget to register the language
SyntaxHighlighter.registerLanguage('python', python);

const CodeBlock = ({ language, value }) => {
  const handleCopyClick = () => {
    clipboardCopy(value);
  };

  return (
    <div className="code-block">
      <button onClick={handleCopyClick}>Copy</button>
      <div className="code-container">
        {language && <div className="code-title">{language}</div>}
        <SyntaxHighlighter language={language} style={solarizedlight}>
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;