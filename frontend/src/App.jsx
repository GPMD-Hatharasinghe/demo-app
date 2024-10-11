import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentApplication from './components/studentApplication';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentApplication />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App

