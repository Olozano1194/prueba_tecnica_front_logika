import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Table
import { createColumnHelper } from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
//Componente principal para la listas
import Table from "../Table";
// Component
import SearchForm from "../formBusqueda/SearchForm";
// API
import { getAdminActions } from "../../api/action.api";
// icons
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

interface ActionItem {
  nombre: string;
  apellido?: string;
  estado?: string;
  email?: string;
  fechaCreacion?: string;
  descripcion?: string;
}

const ListHome = () => {
  const [data, setData] = useState<ActionItem[]>([]);  
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
        setError("Error cargando acciones");
      } finally {
        setLoading(false);
      }
    };

    fetchActions();
  }, []);
  

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor((_, index) => index + 1, {
      id: "index",
      header: "N°",
      cell: (info) => {
        // Solo mostrar el número si no es la fila de total
        return info.row.index + 1;
      },
    }),
    columnHelper.accessor("name", {
      id: "nombre",
      header: "Nombre de la categoria",
    }),
    columnHelper.accessor("status", {
      id: "estado",
      header: "Estado",
    }),
    columnHelper.accessor("description", {
      id: "descripcion",
      header: "Descripción",
    }),
    columnHelper.accessor("createdAt", {
      id: "fechaCreacion",
      header: "Fecha de creación",
    }),
    columnHelper.accessor("actions", {
      header: "Acciones",
      cell: () => (
        <div className="flex justify-center items-center gap-x-4">
          <Link
            to={"/admin"}
            className="text-green-900 text-xl font-bold p-2 rounded-md hover:scale-115"
          >
            <CiEdit />
          </Link>
          <button className="text-red-500 cursor-pointer font-bold text-xl p-2 rounded-md hover:scale-115">
            <RiDeleteBin5Line />
          </button>
        </div>
      ),
      enableSorting: false,
    }),
  ] as ColumnDef<ActionItem>[];

  return (
    <main className="cards bg-primary w-full flex flex-col justify-center  gap-y-4 pt-4 rounded-xl">
      {/* Busqueda */}
      <SearchForm />
      {loading ? (
        <div className="text-center py-4">Cargando...</div>
      ) : (
        <Table data={data} columns={columns} />
      )}
    </main>
  );
};
export default ListHome;
