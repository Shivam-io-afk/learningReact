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
import Effect from './Hooks/Effect';
import ArryHandling from './Hooks/HandlingArrayList';
import Lifting  from './Hooks/StateUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
var k = 1;
root.render(
  <>
    {
      k < 1 ?
        <div>
          <App />
          <State />
          <Porps name='LalSinghChaddha' userID="battalion 609" />
          <Form />
          <Rendering />
          <Class />
        </div>
        :
        k < 2 ?
          <div>
            <States />
            <Effect />
            <ArryHandling/>
            <Lifting/>
          </div>
          :
          null

    }
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
