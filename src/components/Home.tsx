import { Link } from "react-router-dom";
import ListHome from "./List/ListHome";



const Home = () => {
    return (
        <div className="space-y-6">
            {/* Header de bienvenida */}
            <div>
                <h1 className="text-2xl font-bold text-gray-300">Categorias</h1>                
            </div>
            <nav className="w-full flex gap-x-20 text-gray-500 font-semibold cursor-pointer">
                <ul>
                    <li>
                        <Link to='/'>Categorias</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/'>Tipos</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/'>Filtros</Link>
                    </li>
                </ul>
            </nav>
            {/* Lista */}
            <ListHome />            
        </div>
    )
};
export default Home;