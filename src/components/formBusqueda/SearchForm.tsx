import { Link } from "react-router-dom";
// icons
import { CiSearch } from "react-icons/ci";

const SearchForm = () => {
  // const [filteredData, setFilteredData] = useState<number | null>(null);
  // const [search, setSearch] = useState('');

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

  return (
    <form className="w-full flex justify-between gap-x-2">
      <label className="w-full border border-gray-300 flex items-center gap-2 rounded-md outline-slate-400 p-2 md:w-1/2">
        <CiSearch className="text-violet-700 font-bold" />
        <input
          type="text"
          className="w-full outline-none"
          placeholder="Buscar"
          // value={search}
          // onChange={handleSearchChange}
        />
      </label>

      <div className="">
        <Link
          to="/categoria"
          className="flex text-center text-sm text-white bg-violet-950 p-1 rounded-lg cursor-pointer md:py-2 md:px-4 md:hover:scale-105 lg:text-lg"
        >
          Crear tipo de categoria
        </Link>
      </div>
    </form>
  );
};
export default SearchForm;
