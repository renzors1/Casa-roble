import React from 'react';

export const Nosotros = () => {
  return (
    <div className="main-container">
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* Columna Izquierda: Texto */}
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{
            fontFamily: 'var(--font-title)',
            fontSize: '2.5rem',
            color: 'var(--text-dark)',
            marginBottom: '30px',
            textTransform: 'uppercase'
          }}>
            Nuestra Historia
          </h2>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            Casa Roble nació de una premisa simple: la comida debe sentirse como un abrazo.
            Todo comenzó alrededor de una vieja mesa de roble en la cocina de nuestra infancia,
            donde aprendimos que el ingrediente secreto no es una especia, sino el tiempo.
          </p>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            Somos un homenaje a esas recetas de siempre, las que se cocinan a fuego lento y se pasan de
            generación en generación. Pero no vivimos en el pasado; lo evolucionamos. En nuestra cocina,
            la tradición dialoga con la técnica contemporánea para crear platos que saben a memoria,
            pero se sienten nuevos.
          </p>

          <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            Aquí no solo servimos comida; servimos historia, respetando el ciclo de la tierra con productos
            de temporada y celebrando el placer de compartir. Bienvenidos a nuestra casa.
          </p>
        </div>

        {/* Columna Derecha: Grilla de Fotos */}
        <div style={{ flex: '1 1 400px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
          <img src="img/comida1.jpg" alt="Casa Roble 1" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
          <img src="img/comida2.jpg" alt="Casa Roble 2" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', alignSelf: 'end' }} />
          <img src="img/comida3.jpg" alt="Casa Roble 3" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
          <img src="img/comida4.jpg" alt="Casa Roble 4" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
        </div>

      </div>
    </div>
  );
};

export default Nosotros;