import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    password: '',
    confirmarPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.password || !form.confirmarPassword) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (form.password.length < 5) {
      setError('La contraseña debe tener al menos 5 caracteres.');
      return;
    }

    if (form.password !== form.confirmarPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Aquí iría la lógica de guardar en backend
    alert('¡Registro exitoso!');
    navigate('/login');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4 text-center">Registro de Usuario</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Correo</label>
          <input type="email" name="correo" className="form-control" value={form.correo} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input type="password" name="password" className="form-control" value={form.password} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Confirmar Contraseña</label>
          <input type="password" name="confirmarPassword" className="form-control" value={form.confirmarPassword} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Registrarse</button>
        <button type="button" className="btn btn-link w-100 mt-2" onClick={() => navigate('/login')}>¿Ya tienes cuenta? Iniciar sesión</button>
      </form>
    </div>
  );
};
