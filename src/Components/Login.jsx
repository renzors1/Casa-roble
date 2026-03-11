import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin123@gmail.com' && password === 'admin123') {
      setError('');
      navigate('/admin');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="main-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>

      <div style={{ backgroundColor: 'rgba(255,255,255,0.4)', padding: '50px', borderRadius: '12px', width: '100%', maxWidth: '450px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-title)', marginBottom: '30px', color: 'var(--text-dark)', textTransform: 'uppercase' }}>Iniciar Sesión</h2>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px', display: 'block', color: 'var(--text-dark)' }}>Correo Electrónico</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ej: admin123@gmail.com"
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid rgba(56, 37, 22, 0.3)', backgroundColor: 'transparent', color: 'var(--text-dark)' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px', display: 'block', color: 'var(--text-dark)' }}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid rgba(56, 37, 22, 0.3)', backgroundColor: 'transparent', color: 'var(--text-dark)' }}
            />
          </div>

          {error && <p style={{ color: 'red', fontSize: '0.85rem', textAlign: 'center', margin: 0, fontWeight: 'bold' }}>{error}</p>}

          <div style={{ marginTop: '20px' }}>
            <button type="submit" className="btn-hero" style={{ display: 'block', width: '100%', textAlign: 'center', border: 'none', cursor: 'pointer' }}>
              Acceder al Panel
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Login;