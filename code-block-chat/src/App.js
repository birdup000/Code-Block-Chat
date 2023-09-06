import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import CodeBlock from './CodeBlock';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Block Chat</h1>
      </header>
      <div className="chat-input">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
      </div>
      <div className="chat-output">
        <ReactMarkdown
          remarkPlugins={[gfm]}
          components={{
            code({node, className, children}) {
              // We slice because 'className' provided in 'props' is prefixed with 'language-' caused by the remark-gfm plugin.
              const language = className ? className.slice(9) : "";
              return <CodeBlock language={language} value={String(children)}/>
            },
          }}
        >
          {input}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default App;