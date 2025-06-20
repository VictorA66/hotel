import { useEffect, useState } from 'react';
import { getReservas, saveReserva, deleteReserva } from '../../services/reserva.service';
import { ReservaList } from './ReservaList';
import { ReservaNew } from './ReservaNew';

export const ReservaApp = () => {
    const [reservas, setReservas] = useState([]);
    const [selectedReserva, setSelectedReserva] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const recuperarReservas = async () => {
        const data = await getReservas();
        setReservas(data);
    };

    const guardarReserva = async (reserva) => {
        await saveReserva(reserva);
        setMensaje(`Reserva ${reserva.idReserva ? 'actualizada' : 'creada'} correctamente.`);
        setSelectedReserva(null);
        recuperarReservas();
    };

    const eliminarReserva = async (id) => {
        await deleteReserva(id);
        setMensaje('Reserva eliminada correctamente.');
        recuperarReservas();
    };

    useEffect(() => {
        recuperarReservas();
    }, []);

    return (
        <div>
            <h1>Reservas</h1>
            {mensaje && <div>{mensaje}</div>}
            {selectedReserva ? (
                <ReservaNew
                    selectedReserva={selectedReserva}
                    setSelectedReserva={setSelectedReserva}
                    onSave={guardarReserva}
                />
            ) : (
                <div>
                    <button onClick={() => setSelectedReserva({})}>Crear Reserva</button>
                    <ReservaList reservas={reservas} setSelectedReserva={setSelectedReserva} eliminarReserva={eliminarReserva} />
                </div>
            )}
        </div>
    );
};
