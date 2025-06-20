import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación simple de login
    if (correo === 'admin@hotel.com' && password === '1234') {
      localStorage.setItem('user', JSON.stringify({ correo }));
      navigate('/home');
    } else {
      setError('Correo o contraseña incorrectos.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4 text-center">Iniciar Sesión</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        <button
          type="button"
          className="btn btn-link w-100 mt-2"
          onClick={() => navigate('/register')}
        >
          ¿No tienes cuenta? Registrarse
        </button>
      </form>
    </div>
  );
};
