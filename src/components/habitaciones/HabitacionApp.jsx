import React, { useEffect, useState } from 'react';
import { getHabitaciones, saveHabitacion, deleteHabitacion } from '../../services/habitacion.service';
import { HabitacionList } from './HabitacionList';
import { HabitacionNew } from './HabitacionNew';

export const HabitacionApp = () => {
    const [habitaciones, setHabitaciones] = useState([]);
    const [selectedHabitacion, setSelectedHabitacion] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const recuperarHabitaciones = async () => {
        const data = await getHabitaciones();
        setHabitaciones(data);
    };

    const guardarHabitacion = async (habitacion) => {
        await saveHabitacion(habitacion);
        setMensaje(`Habitación ${habitacion.idHabitacion ? 'actualizada' : 'guardada'} correctamente.`);
        setSelectedHabitacion(null);
        recuperarHabitaciones();
    };

    const eliminarHabitacion = async (id) => {
        await deleteHabitacion(id);
        setMensaje('Habitación eliminada correctamente.');
        recuperarHabitaciones();
    };

    useEffect(() => {
        recuperarHabitaciones();
    }, []);

    return (
        <div>
            <h1>Habitaciones</h1>
            {mensaje && <div>{mensaje}</div>}
            {selectedHabitacion ? (
                <HabitacionNew
                    selectedHabitacion={selectedHabitacion}
                    setSelectedHabitacion={setSelectedHabitacion}
                    onSave={guardarHabitacion}
                />
            ) : (
                <div>
                    <button onClick={() => setSelectedHabitacion({})}>Crear Habitación</button>
                    <HabitacionList
                        habitaciones={habitaciones}
                        setSelectedHabitacion={setSelectedHabitacion}
                        eliminarHabitacion={eliminarHabitacion}
                    />
                </div>
            )}
        </div>
    );
};
