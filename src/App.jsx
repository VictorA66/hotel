import { useState } from 'react';
import { UserApp } from './components/users/UserApp';
import { HabitacionApp } from './components/habitaciones/HabitacionApp';
import { ReservaApp } from './components/reservas/ReservaApp';
import { PagoApp } from './components/pagos/PagoApp';
import { EstadoReservaApp } from './components/estado-reserva/EstadoReservaApp';
import { TipoHabitacionApp } from './components/tipo-habitacion/TipoHabitacionApp';
import { ServicioApp } from './components/servicio/ServicioApp';

function App() {
  return (
    <div>
      <h1>Sistema de Gestión Hotelera</h1>
      <UserApp />
      <HabitacionApp />
      <TipoHabitacionApp />
      <EstadoReservaApp />
      <ReservaApp />
      <PagoApp />
      <ServicioApp />
    </div>
  );
}

export default App;

