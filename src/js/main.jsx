import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Contador from './components/contador';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador/>
  </React.StrictMode>,
)
