import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { State } from './UsingState';
import Porps from './UsingProps'
import reportWebVitals from './reportWebVitals';
import Form from './Form';
import Class from './ClassComponent';
import Rendering from './ConditionRenderin';
import States from './Hooks/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
var k = 0;
root.render(
  <div>
    {
      k < 1 ?
        <div>
          <App />

          <br /><hr /><hr /><br />

          <State />

          <br /><hr /><hr /><br />

          <Porps name='LalSinghChaddha' userID="battalion 609" />

          <br /><hr /><hr /><br />

          <Form />

          <br /><br /><br />
          <br /><hr /> <br />

          <Rendering />
          <br /><br /><br /> <hr /> <br /><br />

          <Class />
        </div>
        : 
        <div>
          <States />
        </div>
    }
  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
