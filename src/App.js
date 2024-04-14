import Home from './pages/home';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Dashboard />}></Route>
      </Routes>
  );
}

export default App;
