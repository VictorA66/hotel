import React, { useState, useEffect } from 'react';
import { getPagos, savePago, deletePago } from '../../services/pago.service';
import { PagoList } from './PagoList';
import { PagoNew } from './PagoNew';

export const PagoApp = () => {
    const [pagos, setPagos] = useState([]);
    const [selectedPago, setSelectedPago] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const recuperarPagos = async () => {
        const data = await getPagos();
        setPagos(data);
    };

    const guardar = async (pago) => {
        await savePago(pago);
        setMensaje(`Pago ${pago.idPago ? 'actualizado' : 'registrado'} correctamente.`);
        setSelectedPago(null);
        recuperarPagos();
    };

    const eliminar = async (id) => {
        await deletePago(id);
        setMensaje('Pago eliminado correctamente.');
        recuperarPagos();
    };

    useEffect(() => {
        recuperarPagos();
    }, []);

    return (
        <div>
            <h1>Gestión de Pagos</h1>
            {mensaje && <div>{mensaje}</div>}
            {selectedPago ? (
                <PagoNew
                    selectedPago={selectedPago}
                    setSelectedPago={setSelectedPago}
                    guardarPago={guardar}
                />
            ) : (
                <div>
                    <button onClick={() => setSelectedPago({})}>Nuevo Pago</button>
                    <PagoList
                        pagos={pagos}
                        setSelectedPago={setSelectedPago}
                        eliminarPago={eliminar}
                    />
                </div>
            )}
        </div>
    );
};
