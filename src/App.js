import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ReservaProvider } from './Context/ReservaContext'; // Importante

import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Servicios from './Components/Servicios';
import Reserva from './Components/Reserva';
import Login from './Components/Login';
import Administrador from './Components/Administrador';
import { Navegacion } from './Components/Navegacion';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-vh-100" style={{ display: 'flex', flexDirection: 'column' }}>
      <Navegacion />
      <div style={{ flex: 1, paddingTop: isHome ? '0px' : '100px' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Administrador />} />
        </Routes>
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <ReservaProvider>
      <Router>
        <Layout />
      </Router>
    </ReservaProvider>
  );
};

export default App;