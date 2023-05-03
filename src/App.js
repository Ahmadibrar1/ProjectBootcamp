import React, { Component } from 'react';
// import { Form } from 'react-router-dom';
// import logo from './logo.svg';
// import './style.css';
import Layout from './components/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
<div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         
        </Route> 
      </Routes>
    </BrowserRouter>
   
    {/* <Layout/> */}
    
    
    </div>
    );
  }
}
export default App;