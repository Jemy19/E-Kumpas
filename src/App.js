import Home from './pages/home';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
  );
}

export default App;
