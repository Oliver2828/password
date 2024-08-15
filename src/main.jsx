import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mycss.css'
import Password from './Password'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Password/>
  </StrictMode>,
)
