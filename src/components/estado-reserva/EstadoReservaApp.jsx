import React, { useState, useEffect } from 'react';
import { getEstadoReserva, saveEstadoReserva, deleteEstadoReserva } from '../../services/estadoreserva.service';
import { EstadoReservaList } from './EstadoReservaList';
import { EstadoReservaNew } from './EstadoReservaNew';

export const EstadoReservaApp = () => {
    const [estadosReserva, setEstadosReserva] = useState([]);
    const [selectedEstadoReserva, setSelectedEstadoReserva] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const recuperarEstadosReserva = async () => {
        const data = await getEstadoReserva();
        setEstadosReserva(data);
    };

    const guardar = async (estadoReserva) => {
        await saveEstadoReserva(estadoReserva);
        setMensaje(`Estado de reserva ${estadoReserva.idEstadoReserva ? 'actualizado' : 'guardado'} correctamente.`);
        setSelectedEstadoReserva(null);
        recuperarEstadosReserva();
    };

    const eliminar = async (id) => {
        await deleteEstadoReserva(id);
        setMensaje('Estado de reserva eliminado correctamente.');
        recuperarEstadosReserva();
    };

    useEffect(() => {
        recuperarEstadosReserva();
    }, []);

    return (
        <div>
            <h1>Gestión de Estados de Reserva</h1>
            {mensaje && <div>{mensaje}</div>}
            {selectedEstadoReserva ? (
                <EstadoReservaNew
                    selectedEstadoReserva={selectedEstadoReserva}
                    setSelectedEstadoReserva={setSelectedEstadoReserva}
                    guardarEstadoReserva={guardar}
                />
            ) : (
                <div>
                    <button onClick={() => setSelectedEstadoReserva({})}>Nuevo Estado de Reserva</button>
                    <EstadoReservaList
                        estadosReserva={estadosReserva}
                        setSelectedEstadoReserva={setSelectedEstadoReserva}
                        eliminarEstadoReserva={eliminar}
                    />
                </div>
            )}
        </div>
    );
};
