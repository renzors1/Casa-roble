import React from 'react';
import { Link } from 'react-router-dom';

export const Servicios = () => {
  return (
    <div className="main-container">
      <h2 className="page-title">MENÚ</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', marginTop: '40px' }}>

        {/* Columna 1: ENTRADAS */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', marginBottom: '25px', textTransform: 'uppercase' }}>Entradas</h3>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.05rem', fontWeight: 600 }}>Burrata de Puglia</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', opacity: 0.8 }}>
              Queso burrata cremoso servido sobre una cama de rúcula, tomates cherry confitados y reducción de balsámico.
            </p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.05rem', fontWeight: 600 }}>Fritto Misto</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', opacity: 0.8 }}>
              Calamares y langostinos suavemente enharinados y fritos, servidos con alioli de limón asado.
            </p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.05rem', fontWeight: 600 }}>Carpaccio de Remolacha</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', opacity: 0.8 }}>
              Láminas finas de remolacha asada, nueces tostadas, queso de cabra desmenuzado y vinagreta de miel.
            </p>
          </div>
        </div>

        {/* Columna 2: PRINCIPALES */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', marginBottom: '25px', textTransform: 'uppercase' }}>Platos Principales</h3>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.05rem', fontWeight: 600 }}>Carrillera de Ternera</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', opacity: 0.8 }}>
              Carne cocinada a baja temperatura durante 12 horas con polenta cremosa.
            </p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.05rem', fontWeight: 600 }}>Risotto de Setas Silvestres</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', opacity: 0.8 }}>
              Arroz arborio cremoso cocinado con variedad de hongos de temporada.
            </p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.05rem', fontWeight: 600 }}>Pesca del Día a la Plancha</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', opacity: 0.8 }}>
              Filete fresco sobre un puré rústico de coliflor y espárragos trigueros.
            </p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.05rem', fontWeight: 600 }}>Pollo de Campo Asado</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', opacity: 0.8 }}>
              Cuarto de pollo marinado en cítricos y romero con patatas panaderas.
            </p>
          </div>
        </div>

        {/* Columna 3: POSTRES & BEBIDAS */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', marginBottom: '25px', textTransform: 'uppercase' }}>Postres</h3>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.05rem', fontWeight: 600 }}>Tarta de Queso "Casa Roble"</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', opacity: 0.8 }}>
              Nuestra versión horneada, muy cremosa por dentro.
            </p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.05rem', fontWeight: 600 }}>Texturas de Chocolate</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', opacity: 0.8 }}>
              Brownie húmedo, mousse ligera y tierra de cacao.
            </p>
          </div>

          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', marginTop: '40px', marginBottom: '25px', textTransform: 'uppercase' }}>Bebidas</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.9rem', lineHeight: '1.8' }}>
            <li>Limonada de Hierbabuena y Jengibre</li>
            <li>Vino de la Casa (Tinto / Blanco)</li>
            <li>Agua Infusionada (Pepino y Menta)</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Link to="/reserva" className="btn-hero">Reservar una Mesa</Link>
      </div>
    </div>
  );
};

export default Servicios;