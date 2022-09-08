import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';
import './styles/grid.scss';
import './styles/fonts.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

reportWebVitals();
