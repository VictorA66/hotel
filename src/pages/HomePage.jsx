import { Link, Outlet, useNavigate } from 'react-router-dom';
//import './HomePage.css'; // Podés crear estilos simples aquí si querés

export const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="d-flex">
      <div className="bg-light border-end p-3" style={{ minWidth: '220px', height: '100vh' }}>
        <h4>Sistema Hotel</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="usuarios">Usuarios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="habitaciones">Habitaciones</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="tipo-habitacion">Tipo Habitación</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="estado-reserva">Estado Reserva</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="reserva">Reserva</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="pago">Pago</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="servicio">Servicio</Link>
          </li>
          <li className="nav-item mt-3">
            <button onClick={handleLogout} className="btn btn-danger btn-sm w-100">Cerrar sesión</button>
          </li>
        </ul>
      </div>

      <div className="p-4" style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};
