import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//Table
import { createColumnHelper } from '@tanstack/react-table';
import type { ColumnDef } from "@tanstack/react-table";
//Componente principal para la listas
import Table from '../Table';
// API
import { getAdminActions } from '../../api/action.api';
// icons
import { CiSearch } from "react-icons/ci";


interface ActionItem {
    nombre: string;
    apellido?: string;
    estado?: string;
    email?: string;
    fechaCreacion?: string;
    descripcion?: string;    
}

const ListHome = () => {
    const [ data, setData ] = useState<ActionItem[]>([]);
    // const [filteredData, setFilteredData] = useState<number | null>(null);
    // const [search, setSearch] = useState('');    
    const [loading, setLoading] = useState(false);
    const [, setError] = useState<string | null>(null);

     
    useEffect(() => {
        const fetchActions = async () => {
            setLoading(true);
            try {
            const response = await getAdminActions();
            // console.log(response.data.data);
                        
            setData(response.data.data);
            } catch {
            setError('Error cargando acciones');
            } finally {
            setLoading(false);
            }
        };

        fetchActions();
    }, []);


    // Función en donde se buscan los datos
    // const handleSearch = useCallback(async(user: string) => {
    //     setLoading(true);
    //     try {
    //         const response = await axiosPrivate(user);
    //         setData(response);
    //     } catch (error) {
    //         console.error('Error al buscar el miembro:', error);
            
    //     }finally {
    //         setLoading(false);
    //     }       
    // }, []);

    //Manejamos el evento de búsqueda
    // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const searchValue = e.target.value.toLowerCase();
    //     setSearch(searchValue);

    //     if (filteredData) clearTimeout(filteredData);

    //     setFilteredData(setTimeout(() => {
    //         handleSearch(searchValue)
    //     }, 500));
    // }     
  

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor((_, index) => index + 1, {
            id: 'index',
            header: 'N°',
            cell: (info) => {
                // Solo mostrar el número si no es la fila de total
                return info.row.index + 1;
            },
        }),
        columnHelper.accessor('name', {
            id: 'nombre',
            header: 'Nombre de la categoria',
        }),
        columnHelper.accessor('status', {
            id: 'estado',
            header: 'Estado',
        }),
        columnHelper.accessor('description', {
            id: 'descripcion',
            header: 'Descripción',
        }),
        columnHelper.accessor('createdAt', {
            id: 'fechaCreacion',
            header: 'Fecha de creación',
        }),               
        
    ] as ColumnDef<ActionItem>[];

    return (
        <main className="cards bg-primary w-full flex flex-col justify-center  gap-y-4 p-4 rounded-xl">            
            {/* Busqueda */}
            <section className="w-full flex justify-between gap-x-4 p-4">
                <label className="w-full border border-gray-300 flex items-center gap-2 rounded-md outline-slate-400 p-2 md:w-1/2">
                    <CiSearch className='text-violet-700 font-bold' />
                    <input 
                        type="text"
                        className='w-full outline-none'
                        placeholder="Buscar"                        
                        // value={search}
                        // onChange={handleSearchChange}
                    />
                </label>

                <div className=''>
                    <Link to='/categoria' className='text-sm text-white bg-violet-950 p-3 rounded-lg cursor-pointer  lg:text-lg'>Crear tipo de categoria</Link>
                </div>                
            </section>
            {
                loading ? (
                    <div className="text-center py-4">Cargando...</div>

                ): (
                    <Table 
                        data={data} 
                        columns={columns}                          
                    />
                )
            }               
        </main>
    );
}
export default ListHome;