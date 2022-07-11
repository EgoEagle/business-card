import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from './components/Info.js';



function Page()
{
  return(
    <div>
      <Info />
    </div>


  )

}

ReactDOM.render(<Page/>,document.getElementById("root"));


reportWebVitals();
