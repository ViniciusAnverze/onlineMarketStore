import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

//const header = <h1>This is my first react App</h1>
//ReactDOM.render(header, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//document.getElementById('root').appendChild(App())