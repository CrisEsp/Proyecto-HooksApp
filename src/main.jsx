import React from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleForm } from './01-useState/02-useEffect/SimpleForm';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCoustomHook } from './01-useState/CounterWithCoustomHook';
//import { HooksApp } from './HooksApp';


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm/>
  </React.StrictMode>
)
