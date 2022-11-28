import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import "./css/index.module.css"
import Practice from './Practice';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode basename={process.env.PUBLIC_URL}element={< App />}>
        <App />
    </React.StrictMode>
);
