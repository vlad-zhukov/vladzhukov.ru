import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => <>
    <h1>Hi, my name is Vlad Zhukov</h1>
    <p>I am a frontend developer from Moscow, Russia.</p>
    <p><a href="https://github.com/vlad-zhukov">github</a></p>
</>;

ReactDOM.render(<App />, document.getElementById('root'));
