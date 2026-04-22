import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Login from './views/Login'
import Inicio from './views/Inicio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <Inicio />
  </StrictMode>,
)
