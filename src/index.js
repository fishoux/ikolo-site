import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export { default as Navigation } from "./components/Navigation";
export { default as Footer } from "./components/Footer";
export { default as Home } from "./components/Home";
export { default as About } from "./components/Scan";
export { default as QRcodes } from "./components/QRcodes";

// get parameters from URL
// import { withRouter } from 'react-router-dom';
// import queryString from 'query-string';
    
// class ActivateAccount extends React.Component{
//     test(){
//         let params = queryString.parse(this.props.location.search)
//         console.log('Params: ',params);
//     }
// }

// export default withRouter(ActivateAccount);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
