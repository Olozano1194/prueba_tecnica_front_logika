import NavHome from "./navHome/NavHome";

const Home = () => {
    return (
        <div className="space-y-6">
            {/* Header de bienvenida */}
            <div>
                <h1 className="text-2xl font-bold text-gray-300 md:text-4xl md:mb-9">Categorias</h1>                
            </div>
            {/* Navegación */}
            <NavHome />            
        </div>
    )
};
export default Home;