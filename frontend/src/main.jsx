import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { PortFolio } from './PortFolio.jsx'

import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './reducer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <PortFolio />
        </BrowserRouter>
      </Provider>
  </StrictMode>,
)
