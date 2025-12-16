import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CurrancyProvider } from './contexts/currancyContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CurrancyProvider>
    <App />

    </CurrancyProvider>
  </StrictMode>,
)
