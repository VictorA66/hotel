import React, { useState, useEffect } from 'react';
import { getTiposHabitacion, saveTipoHabitacion, deleteTipoHabitacion } from '../../services/tipohabitacion.service';
import { TipoHabitacionList } from './TipoHabitacionList';
import { TipoHabitacionNew } from './TipoHabitacionNew';

export const TipoHabitacionApp = () => {
    const [tiposHabitacion, setTiposHabitacion] = useState([]);
    const [selectedTipoHabitacion, setSelectedTipoHabitacion] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const recuperarTiposHabitacion = async () => {
        const data = await getTiposHabitacion();
        setTiposHabitacion(data);
    };

    const guardar = async (tipoHabitacion) => {
        await saveTipoHabitacion(tipoHabitacion);
        setMensaje(`Tipo de Habitación ${tipoHabitacion.idTipoHabitacion ? 'actualizado' : 'guardado'} correctamente.`);
        setSelectedTipoHabitacion(null);
        recuperarTiposHabitacion();
    };

    const eliminar = async (id) => {
        await deleteTipoHabitacion(id);
        setMensaje('Tipo de Habitación eliminado correctamente.');
        recuperarTiposHabitacion();
    };

    useEffect(() => {
        recuperarTiposHabitacion();
    }, []);

    return (
        <div>
            <h1>Gestión de Tipos de Habitación</h1>
            {mensaje && <div>{mensaje}</div>}
            {selectedTipoHabitacion ? (
                <TipoHabitacionNew
                    selectedTipoHabitacion={selectedTipoHabitacion}
                    setSelectedTipoHabitacion={setSelectedTipoHabitacion}
                    guardarTipoHabitacion={guardar}
                />
            ) : (
                <div>
                    <button onClick={() => setSelectedTipoHabitacion({})}>Nuevo Tipo de Habitación</button>
                    <TipoHabitacionList
                        tiposHabitacion={tiposHabitacion}
                        setSelectedTipoHabitacion={setSelectedTipoHabitacion}
                        eliminarTipoHabitacion={eliminar}
                    />
                </div>
            )}
        </div>
    );
};
