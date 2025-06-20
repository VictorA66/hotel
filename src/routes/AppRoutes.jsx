import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { StartPage } from '../pages/StartPage';

// Componentes por secciones (dentro del menú lateral)
import { UserApp } from '../components/users/UserApp';
import { HabitacionApp } from '../components/habitaciones/HabitacionApp';
import { TipoHabitacionApp } from '../components/tipo-habitacion/TipoHabitacionApp';
import { EstadoReservaApp } from '../components/estado-reserva/EstadoReservaApp';
import { ReservaApp } from '../components/reservas/ReservaApp';
import { PagoApp } from '../components/pagos/PagoApp';
import { ServicioApp } from '../components/servicio/ServicioApp';

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to="/" />;
};

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<StartPage />} />
    {/* Página de inicio de sesión */}
    <Route path="/login" element={<LoginPage />} />

    {/* Página de registro */}
    <Route path="/register" element={<RegisterPage />} />

    {/* Rutas protegidas dentro del Home */}
    <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>}>
      <Route path="usuarios" element={<UserApp />} />
      <Route path="habitaciones" element={<HabitacionApp />} />
      <Route path="tipo-habitacion" element={<TipoHabitacionApp />} />
      <Route path="estado-reserva" element={<EstadoReservaApp />} />
      <Route path="reserva" element={<ReservaApp />} />
      <Route path="pago" element={<PagoApp />} />
      <Route path="servicio" element={<ServicioApp />} />
    </Route>

    {/* Redirección para rutas no encontradas */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

