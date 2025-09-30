import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/Performance.css'

import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// Принудительно убираем серый фон при загрузке
document.documentElement.style.background = '#ffffff !important';
document.body.style.background = '#ffffff !important';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </HelmetProvider>,
)
