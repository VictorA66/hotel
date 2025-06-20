import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const StartPage = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Bienvenido al Sistema de Gestión Hotelera</h2>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/login" className="btn btn-primary">Iniciar Sesión</Link>
        <Link to="/register" className="btn btn-secondary">Registrarse</Link>
      </div>
    </div>
  );
};
