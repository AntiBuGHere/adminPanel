import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
