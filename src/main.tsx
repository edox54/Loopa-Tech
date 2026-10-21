import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ThemeProvider } from './ThemeContext';
import './index.css';
import './i18n';

const app = (
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);

const root = document.getElementById('root')!;
// Prerendered pages already contain the HTML: attach to it instead of re-rendering.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
