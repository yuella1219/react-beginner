import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Practice from './Practice';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}element={< App />}>
        <div>왜 안 떠 으애앵</div>
        <App />
    </BrowserRouter>
);