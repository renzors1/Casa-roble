import React, { useState, useContext } from 'react';
import { ReservaContext } from '../Context/ReservaContext';

const Reserva = () => {
  const { agregarReserva, isMesaOcupada } = useContext(ReservaContext);

  const [datos, setDatos] = useState({
    nombre: '',
    fecha: '2026-03-06',
    hora: '13:00',
    estadia: '1',
    mesaId: null
  });

  const [mostrarModal, setMostrarModal] = useState(false);

  const horariosDisponibles = ["13:00", "13:30", "14:00", "14:30", "15:00", "20:00", "20:30", "21:00"];
  const tiemposEstadia = ["1", "1.5", "2", "2.5", "3"];


  const [mesas] = useState([
    { id: 1, nombre: 'Mesa 1', cap: 2, pos: { top: '35%', left: '8%' } },
    { id: 2, nombre: 'Mesa 2', cap: 4, pos: { top: '35%', left: '25%' } },
    { id: 3, nombre: 'Mesa 3', cap: 4, pos: { top: '35%', left: '42%' } },

    { id: 4, nombre: 'Mesa 4', cap: 6, pos: { top: '15%', left: '33%' } },
    { id: 5, nombre: 'Mesa 5', cap: 2, pos: { top: '15%', left: '50%' } },

    { id: 6, nombre: 'Mesa 6', cap: 2, pos: { top: '55%', left: '8%' } },
    { id: 7, nombre: 'Mesa 7', cap: 8, pos: { top: '55%', left: '25%' } },
    { id: 8, nombre: 'Mesa 8', cap: 4, pos: { top: '55%', left: '42%' } },

    { id: 9, nombre: 'Mesa 9', cap: 4, pos: { top: '75%', left: '8%' } },
    { id: 10, nombre: 'Mesa 10', cap: 4, pos: { top: '75%', left: '25%' } },
    { id: 11, nombre: 'Mesa 11', cap: 2, pos: { top: '75%', left: '42%' } },

    // Mesas en la Terraza (Estrictamente left >= 70%)
    { id: 12, nombre: 'Mesa 12', cap: 2, pos: { top: '10%', left: '72%' } },
    { id: 13, nombre: 'Mesa 13', cap: 4, pos: { top: '25%', left: '88%' } },
    { id: 14, nombre: 'Mesa 14', cap: 4, pos: { top: '40%', left: '72%' } },
    { id: 15, nombre: 'Mesa 15', cap: 6, pos: { top: '55%', left: '88%' } },
    { id: 16, nombre: 'Mesa 16', cap: 5, pos: { top: '70%', left: '72%' } },
  ]);

  const handleConfirmar = () => {
    if (!datos.nombre || !datos.mesaId) return;

    agregarReserva({
      usuario: datos.nombre,
      fecha: `${datos.fecha} a las ${datos.hora} hs`,
      fechaDate: datos.fecha,
      horaGuardada: datos.hora,
      mesaId: datos.mesaId,
      mesa: `Mesa ${datos.mesaId}`,
      estadia: datos.estadia,
      estado: 'RESERVADA'
    });
    setMostrarModal(true);

    setDatos({ ...datos, nombre: '', mesaId: null, estadia: '1' });
  };

  return (
    <div className="main-container">

      {mostrarModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ zIndex: 2000, backgroundColor: 'rgba(56, 37, 22, 0.8)', backdropFilter: 'blur(4px)' }}>
          <div style={{ backgroundColor: '#eaddcf', padding: '40px', borderRadius: '12px', textAlign: 'center', maxWidth: '400px', color: 'var(--text-dark)' }}>
            <h2 style={{ fontFamily: 'var(--font-title)', marginBottom: '15px' }}>¡Reserva Lista!</h2>
            <p style={{ marginBottom: '25px' }}>Nos vemos el {datos.fecha} a las {datos.hora}.<br />Tiempo estimado: {datos.estadia} horas.</p>
            <button className="btn-hero" onClick={() => setMostrarModal(false)} style={{ width: '100%' }}>CERRAR</button>
          </div>
        </div>
      )}

      <h2 className="page-title">NUEVA RESERVA</h2>

      <div style={{ backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

        {/* Formulario */}
        <div style={{ padding: '30px', borderBottom: '1px solid rgba(56, 37, 22, 0.2)' }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 200px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>TU NOMBRE</label>
              <input
                type="text"
                placeholder="Escribe tu nombre..."
                value={datos.nombre}
                onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(56, 37, 22, 0.3)', backgroundColor: 'transparent', color: 'var(--text-dark)' }}
              />
            </div>
            <div style={{ flex: '1 1 120px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>FECHA</label>
              <input
                type="date"
                value={datos.fecha}
                onChange={(e) => setDatos({ ...datos, fecha: e.target.value })}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(56, 37, 22, 0.3)', backgroundColor: 'transparent', color: 'var(--text-dark)' }}
              />
            </div>
            <div style={{ flex: '1 1 100px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>HORA</label>
              <select
                value={datos.hora}
                onChange={(e) => setDatos({ ...datos, hora: e.target.value })}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(56, 37, 22, 0.3)', backgroundColor: 'transparent', color: 'var(--text-dark)' }}
              >
                {horariosDisponibles.map(hora => (
                  <option key={hora} value={hora}>{hora}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: '1 1 120px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>TIEMPO (Horas)</label>
              <select
                value={datos.estadia}
                onChange={(e) => setDatos({ ...datos, estadia: e.target.value })}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(56, 37, 22, 0.3)', backgroundColor: 'transparent', color: 'var(--text-dark)' }}
              >
                {tiemposEstadia.map(tiempo => (
                  <option key={tiempo} value={tiempo}>{tiempo} hrs</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Mapa de Mesas y Resumen */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

          {/* Mapa de mesas + leyenda */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column' }}>

            {/* Leyenda */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', padding: '20px', borderBottom: '1px dashed rgba(56, 37, 22, 0.3)', backgroundColor: 'rgba(255,255,255,0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#a4c2a4', border: '1px solid var(--text-dark)' }}></div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Libre</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#c27967', border: '1px solid var(--text-dark)' }}></div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Ocupado</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#8bb3ea', border: '1px solid var(--text-dark)' }}></div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Seleccionado</span>
              </div>
            </div>

            <div style={{ position: 'relative', flex: 1, minHeight: '550px', backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(56, 37, 22, 0.4)', margin: '20px', borderRadius: '8px', overflow: 'hidden' }}>

              {/* Elementos fijos de la sala */}

              {/* Entrada Principal */}
              <div style={{ position: 'absolute', bottom: 0, left: '40%', width: '20%', height: '15px', backgroundColor: 'var(--text-dark)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: '#fff', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Entrada</span>
              </div>

              {/* Terraza (Zona delimitada) */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '35%', height: '100%', borderLeft: '2px dashed rgba(56, 37, 22, 0.5)', backgroundColor: 'rgba(164, 194, 164, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '10px' }}>
                <span style={{ color: 'var(--text-dark)', fontSize: '1rem', fontWeight: 600, opacity: 0.6, letterSpacing: '2px' }}>TERRAZA</span>
              </div>

              {/* Zona Cocina */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '25%', height: '30%', borderRight: '2px solid rgba(56, 37, 22, 0.4)', borderBottom: '2px solid rgba(56, 37, 22, 0.4)', backgroundColor: 'rgba(56, 37, 22, 0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-dark)', fontSize: '0.9rem', fontWeight: 600, opacity: 0.5 }}>COCINA</span>
              </div>

              {/* Ventanales (Línea decorativa a la izquierda) */}
              <div style={{ position: 'absolute', top: '35%', left: 0, width: '6px', height: '40%', backgroundColor: '#8bb3ea', opacity: 0.6 }}></div>
              <span style={{ position: 'absolute', top: '50%', left: '10px', fontSize: '0.7rem', color: '#8bb3ea', transform: 'rotate(-90deg)', transformOrigin: 'left center' }}>Ventana</span>

              {mesas.map((mesa) => {

                // Dinámicamente ver si choca el horario con alguna reserva existente
                const estaOcupada = isMesaOcupada(mesa.id, datos.fecha, datos.hora);

                let bgColor = '#a4c2a4'; // Libre (verde claro)
                let scale = 1;
                let colorText = 'var(--text-dark)';

                if (estaOcupada) {
                  bgColor = '#c27967'; // Ocupado (rojo)
                  colorText = '#fff';
                }

                if (datos.mesaId === mesa.id) {
                  bgColor = '#8bb3ea'; // Seleccionado (celeste perla)
                  scale = 1.15;
                  colorText = '#fff';
                }

                return (
                  <div
                    key={mesa.id}
                    onClick={() => {
                      if (!estaOcupada) {
                        setDatos({ ...datos, mesaId: mesa.id });
                      }
                    }}
                    className="mesa-item"
                    style={{
                      position: 'absolute',
                      top: mesa.pos.top,
                      left: mesa.pos.left,
                      width: '75px',
                      height: '75px',
                      borderRadius: '50%',
                      backgroundColor: bgColor,
                      color: colorText,
                      border: '2px solid var(--text-dark)',
                      transform: `scale(${scale})`,
                      boxShadow: datos.mesaId === mesa.id ? '0 8px 15px rgba(0,0,0,0.2)' : 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: estaOcupada ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      opacity: estaOcupada ? 0.8 : 1
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>{mesa.nombre}</span>
                    <span style={{ fontSize: '0.65rem', opacity: 0.9 }}>{mesa.cap} p.</span>
                  </div>
                )
              })}
            </div>
          </div>


          {/* Resumen */}
          <div style={{ flex: '1 1 300px', padding: '40px', borderLeft: '1px solid rgba(56, 37, 22, 0.2)', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-title)', marginBottom: '15px' }}>RESUMEN</h4>
              <p style={{ margin: '0 0 10px 0' }}><strong>Cliente:</strong> {datos.nombre || '...'}</p>
              <p style={{ margin: '0 0 10px 0' }}><strong>Mesa:</strong> {datos.mesaId ? `Mesa ${datos.mesaId}` : '---'}</p>
              <p style={{ margin: '0 0 10px 0' }}><strong>Cita:</strong> {datos.hora} hs</p>
              <p style={{ margin: '0 0 10px 0' }}><strong>Estadía:</strong> {datos.estadia} h.</p>
            </div>

            <button
              className="btn-hero"
              disabled={!datos.mesaId || !datos.nombre}
              onClick={handleConfirmar}
              style={{ padding: '15px', fontWeight: 600, opacity: (!datos.mesaId || !datos.nombre) ? 0.5 : 1 }}
            >
              CONFIRMAR RESERVA
            </button>
          </div>

        </div >
      </div >
    </div >
  );
};

export default Reserva;