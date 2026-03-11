import React, { useContext } from 'react';
import { ReservaContext } from '../Context/ReservaContext';

const Administrador = () => {
  const { reservas, eliminarReserva } = useContext(ReservaContext);

  const handleCancelar = (id, nombre) => {
    if (window.confirm(`¿Estás seguro de que deseas cancelar la reserva de ${nombre}?`)) {
      eliminarReserva(id);
    }
  };

  return (
    <div className="main-container">
      <h2 className="page-title">ADMINISTRACIÓN DE RESERVAS</h2>

      <div style={{ backgroundColor: 'rgba(255,255,255,0.4)', padding: '30px', borderRadius: '12px' }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USUARIO</th>
              <th>FECHA Y HORA</th>
              <th>ESTADÍA</th>
              <th>MESA</th>
              <th>DISPONIBILIDAD</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {reservas.length > 0 ? (
              reservas.map((res) => (
                <tr key={res.id}>
                  <td style={{ fontWeight: 600 }}>{res.id}</td>
                  <td>{res.usuario}</td>
                  <td>{res.fecha}</td>
                  <td>{res.estadia ? `${res.estadia} hrs` : '-'}</td>
                  <td>{res.mesa}</td>
                  <td>
                    <span className="status-badge badge-reservada">{res.estado}</span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleCancelar(res.id, res.usuario)}
                      style={{ background: 'transparent', border: '1px solid #7c3f3f', color: '#7c3f3f', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 }}
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: 'rgba(56, 37, 22, 0.6)' }}>
                  No hay reservas activas en este momento.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Administrador;