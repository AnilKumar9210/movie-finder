import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/movie-finder'>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
)