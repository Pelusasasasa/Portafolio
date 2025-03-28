import { StrictMode } from 'react';
import React from 'react'
import { createRoot } from 'react-dom/client'
import { PortFolio } from './PortFolio.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortFolio />
  </StrictMode>,
)
