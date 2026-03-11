import React, { createContext, useState } from 'react';

export const ReservaContext = createContext();

export const ReservaProvider = ({ children }) => {
  const [reservas, setReservas] = useState([]);

  const agregarReserva = (nuevaReserva) => {
    const idUnico = Math.floor(Math.random() * 9000) + 1000;
    setReservas([...reservas, { ...nuevaReserva, id: idUnico }]);
  };

  const eliminarReserva = (id) => {
    setReservas(reservas.filter((res) => res.id !== id));
  };

  // Función para calcular si hay un choque de horarios
  const isMesaOcupada = (mesaId, fechaSeleccionada, horaSeleccionada) => {
    // Convierte "HH:MM" a minutos totales para comparar rangos
    const convertirAMinutos = (horaStr) => {
      const [h, m] = horaStr.split(':').map(Number);
      return h * 60 + m;
    };

    const minInicioNuevo = convertirAMinutos(horaSeleccionada);
    // Asumimos que la nueva reserva bloquea al menos por el tiempo que esté intentando reservar, pero como no pasamos estadia elegimos 2hs.
    // La verificacion real chequea los que _ya_ estan guardados.

    return reservas.some((res) => {
      if (res.mesaId !== mesaId || res.fechaDate !== fechaSeleccionada) {
        return false; // Diferente mesa o diferente día = No hay choque
      }

      const minInicioReserva = convertirAMinutos(res.horaGuardada);
      const minFinReserva = minInicioReserva + (parseFloat(res.estadia) * 60);

      // Si la hora que selecciono el usuario cae DENTRO del rango de otra reserva activa
      // Ojo: Esto es una simplificacion. Bloquea si la hora exacta de entrada choca.
      if (minInicioNuevo >= minInicioReserva && minInicioNuevo < minFinReserva) {
        return true;
      }
      return false;
    });
  };

  return (
    <ReservaContext.Provider value={{ reservas, agregarReserva, eliminarReserva, isMesaOcupada }}>
      {children}
    </ReservaContext.Provider>
  );
};