import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nivel from './components/Nivel'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Nivel nivel = {"iniciante"}/> <br/>
   <Nivel nivel = {"intermediario"}/> <br/>
   <Nivel nivel = {"avançado"}/> <br/>
  </StrictMode>,
)
