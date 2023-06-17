import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/menu/Dashboard';
import Profile from './components/menu/Profile';
import { AgregarOrden } from './components/menu/AgregarOrden';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/generarOrden'  element={<AgregarOrden/>} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
