import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'
import AppRouter from './AppRouter';

const container = document.getElementById('root');

const root = createRoot(container);

// 20230727 경로에 따라 실행되는 컴포넌트가 다르기 때문에 기존에 ReactDOM에 App컴포넌트를 넘겨주던 방식에서 
// 정보를 가지고 있는 AppRouter를 먼저 렌더링하는 방식으로 변경
// index.js -> AppRouter 컴포넌트 렌더링
root.render(
  <AppRouter tab="home" />
);

reportWebVitals();
