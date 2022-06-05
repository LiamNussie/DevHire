import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Favorites from './pages/favorites/favorites';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
