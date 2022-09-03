import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login setUser={setUser} />}/>
          <Route exact path="/signup" element={<Signup setUser={setUser} />}/>
          {
            user &&
            <Route exact path="/" element={<Dashboard user={user}/>}/>
          }
          <Route exact path="" element={<p>404 not found!</p>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
