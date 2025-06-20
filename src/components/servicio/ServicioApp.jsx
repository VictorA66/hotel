import { useEffect, useState } from 'react';
import { getServicios, saveServicio, deleteServicio } from '../../services/servicio.service';
import { ServicioList } from './ServicioList';
import { ServicioNew } from './ServicioNew';

export const ServicioApp = () => {
    const [servicios, setServicios] = useState([]);
    const [selectedServicio, setSelectedServicio] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const recuperarServicios = async () => {
        const data = await getServicios();
        setServicios(data);
    };

    const guardarServicio = async (servicio) => {
        await saveServicio(servicio);
        setMensaje(`Servicio ${servicio.idServicio ? 'actualizado' : 'guardado'} correctamente.`);
        setSelectedServicio(null);
        recuperarServicios();
    };

    const eliminarServicio = async (id) => {
        await deleteServicio(id);
        setMensaje('Servicio eliminado correctamente.');
        recuperarServicios();
    };

    useEffect(() => {
        recuperarServicios();
    }, []);

    return (
        <div>
            <h1>Servicios</h1>
            {mensaje && <div>{mensaje}</div>}
            {selectedServicio ? (
                <ServicioNew
                    selectedServicio={selectedServicio}
                    setSelectedServicio={setSelectedServicio}
                    guardarServicio={guardarServicio}
                />
            ) : (
                <div>
                    <button onClick={() => setSelectedServicio({})}>Nuevo Servicio</button>
                    <ServicioList
                        servicios={servicios}
                        setSelectedServicio={setSelectedServicio}
                        eliminarServicio={eliminarServicio}
                    />
                </div>
            )}
        </div>
    );
};
