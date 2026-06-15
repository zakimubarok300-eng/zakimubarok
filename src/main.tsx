import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

creatRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
