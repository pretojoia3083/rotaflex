import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NovaRota from './pages/NovaRota';
import LeituraCTE from './pages/LeituraCTE';
import Mapa from './pages/Mapa';
import Financeiro from './pages/Financeiro';
import AppMotorista from './pages/AppMotorista';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/nova-rota" element={<NovaRota />} />
      <Route path="/leitura-cte" element={<LeituraCTE />} />
      <Route path="/mapa" element={<Mapa />} />
      <Route path="/financeiro" element={<Financeiro />} />
      <Route path="/motorista" element={<AppMotorista />} />
    </Routes>
  );
}

export default App;