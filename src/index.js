import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { HashRouter } from 'react-router-dom';


// 样式重置文件
import "normalize.css";
import "@/assets/css/index.less"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 