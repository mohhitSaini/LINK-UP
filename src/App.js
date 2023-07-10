import {BrowserRouter as Router ,Routes,Route }from 'react-router-dom'

import AdvocatePage from './pages/AdvocatePage'
import HomePage from './pages/HomePage'

import AdvocateForm from './components/AdvocateForm';

import './App.css';

function App() {
  return (
    <Router>

      <Routes>
        <Route element={<AdvocateForm/>} path="/addAdvocate"/>
        <Route element={<HomePage/>} path=""/>
        <Route element={<AdvocatePage/>} path="/advocate/:username"/>
      </Routes>


    </Router>
  );
}

export default App;
