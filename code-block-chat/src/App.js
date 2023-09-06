import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import CodeBlock from './CodeBlock';
import './App.css';

const Message = ({ message, vote, setVote }) => {
    return (
        <div>
            <ReactMarkdown
                remarkPlugins={[gfm]}
                components={{
                    code({node, className, children}) {
                        const language = className ? className.slice(9) : "";
                        return <CodeBlock language={language} value={String(children)}/>
                    },
                }}
            >
                {message}
            </ReactMarkdown>
            <button onClick={() => setVote(vote === 1 ? 0 : 1)}>
                {vote === 1 ? "👍" : "👍🏻"}
            </button>
            <button onClick={() => setVote(vote === -1 ? 0 : -1)}>
                {vote === -1 ? "👎" : "👎🏻"}
            </button>
        </div>
    );
};

const App = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        setMessages([...messages, {text: input, vote: 0}]);
        setInput('');
    };

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
                <button onClick={handleSend}>Send</button>
            </div>
            <div className="chat-output">
                {messages.map((message, index) => (
                    <Message 
                        key={index}
                        message={message.text}
                        vote={message.vote}
                        setVote={(vote) => {
                            let newMessages = [...messages];
                            newMessages[index].vote = vote;
                            setMessages(newMessages);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
