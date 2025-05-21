import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import Taskcontext from './context/Taskcontext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
    <Taskcontext>
      <App />
    </Taskcontext>
    </AuthContext>
  </StrictMode>,
)
