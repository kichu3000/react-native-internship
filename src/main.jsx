import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './multiplication'
import AuthPage from './loginPage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AuthPage/>
  </StrictMode>,
)
