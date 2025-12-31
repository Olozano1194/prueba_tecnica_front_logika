import imgFondo from "../../../public/img-fondo.png";
import { MdFileUpload } from "react-icons/md";

const Categoria = ()=> {
    return (
        <main 
            className="w-full min-h-screen flex flex-col justify-center items-center"
            style={{ 
            backgroundImage: `url(${imgFondo})`, 
            backgroundRepeat: `no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center' 
        }}
        >
            <form action="" className="w-[92%] flex flex-col justify-center items-center bg-white p-4 rounded-sm shadow-lg md:w-[60%] md:p-8">
                <h2 className="w-full text-2xl text-violet-950 font-bold">Crear categoria</h2>
                {/* Category */}
                <label className="w-full flex flex-col text-gray-950 mt-4">
                    Nombre de la categoría*
                    <input type="text" className="w-80 border border-gray-400 mt-2 text-gray-600 p-2 outline-none rounded-sm md:w-full" placeholder="Escribe el nombre de la buena acción" />
                </label>
                {/* Description */}
                <label className="w-full text-gray-950 mt-4">
                    Descripción de la buena acción*
                    <textarea className="w-80 h-24 border border-gray-400 mt-2 text-gray-600 p-2 outline-none resize-none rounded-sm md:w-full " placeholder="Agregar descripción"></textarea>
                </label>
                {/* Logo */}
                <label className="w-full text-gray-950 mt-6">
                    Logo*
                    <span className="w-80 flex justify-center items-center border border-gray-400 mt-2 p-2 md:w-full ">
                        <input type="file" className="w-full text-gray-600 outline-none rounded-sm" />
                        <MdFileUpload className="text-gray-500" />
                    </span>                    
                </label>
                {/* Color */}
                <label className="w-full flex flex-col text-gray-950 mt-4">
                    Color*
                    <input type="text" className="w-80 border border-gray-400 mt-2 text-gray-600 p-2 outline-none rounded-sm md:w-full " placeholder="Registra color código HEX" />
                </label>
                {/* Status */}
                <span className="w-full mt-4 flex gap-2"><input type="radio" className="bg-green-200"/>Activar</span>

                <div className="w-full flex justify-center gap-5 mt-20 mb-5">
                    <button className="w-full bg-white font-semibold p-2 rounded-sm cursor-pointer shadow-sm hover:text-gray-700 hover:border-2 hover:border-violet-950">Cancelar </button>

                    <button className="w-full bg-gray-400 font-semibold p-2 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-gray-300"> crear</button>
                </div>     



            </form>
        </main>
    );
};
export default Categoria;