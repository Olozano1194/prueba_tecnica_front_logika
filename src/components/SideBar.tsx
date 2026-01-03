import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// icons
import { 
  RiMenu3Line, 
  RiCloseLine, 
  RiLogoutCircleLine,
  RiHome8Line,   
} from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa6";
import { FaUsers, FaStore } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { MdOutlineCategory } from "react-icons/md";
// logo
import logo from "../../public/logo.png";
import imgFondo from "../../public/img-fondo.png";


export interface SubMenuState {
  menu1: boolean;
  menu2: boolean;
  menu3: boolean;
  menu4: boolean;
  menu5: boolean;
}


const SideBar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [, setLoggedOut] = useState(false); 
 

  // Esta función nos sirve para cerrar la sesión
  const handleLogOut = () => {
    localStorage.removeItem("auth_token");
    setLoggedOut(true);    
    navigate("/");
  };

  return (
    <>
      <section
        className={`bg-white overflow-y-scroll shadow-lg fixed xl:static w-[60%] md:w-[40%] lg:w-[35%] xl:w-auto h-full top-0 flex flex-col justify-between z-50 ${
          toggleMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          {/* title */}
          <div className="w-full flex justify-center items-center"
            style={{ 
              backgroundImage: `url(${imgFondo})`, 
              backgroundRepeat: `no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: 'center' 
            }}
          >
          <section className="w-full h-36 flex justify-center">
              <img src={logo} alt="logo de la empresa" className="w-12 h-24 self-start mt-2 mr-2" />
              <div className="flex flex-col justify-center text-violet-950">
                  <h1 className="font-bold text-3xl leading-tight">vekind</h1>
                  <span className="text-lg -mt-2">network</span>
              </div>                
          </section>
          </div>
          {/* Menu */}
          <nav className="mt-6">
            {/* Home */}
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-teal-100 text-gray-600 font-semibold transition-colors"
                >
                  <RiHome8Line className="text-gray-600" /> Home
                </Link>
              </li>
            </ul>
            {/* Impacto social */}
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-teal-100 text-gray-600 font-semibold transition-colors"
                >
                  <FiTrendingUp className="text-gray-600" />Impacto Social
                </Link>
              </li>
            </ul>
            {/* Comunidad */}
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-teal-100 text-gray-600 font-semibold transition-colors"
                >
                  <FaUsers className="text-gray-600" /> Comunidad
                </Link>
              </li>
            </ul>
            {/* Sponsors */}
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-teal-100 text-gray-600 font-semibold transition-colors"
                >
                  <FaDollarSign className="text-gray-600" /> Sponsor
                </Link>
              </li>
            </ul>
            {/* Marketplace */}
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-teal-100 text-gray-600 font-semibold transition-colors"
                >
                  <FaStore className="text-gray-600" /> Marketplace
                </Link>
              </li>
            </ul>
            {/* Bakanes */}
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-teal-100 text-gray-600 font-semibold transition-colors"
                >
                  <HiOutlineBadgeCheck className="text-gray-600" /> Bakanes
                </Link>
              </li>
            </ul>
            {/* Contenidos */}
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-teal-100 text-gray-600 font-semibold transition-colors"
                >
                  <HiOutlineDocumentDuplicate className="text-gray-600" />Contenidos
                </Link>
              </li>
            </ul>
            {/* Categoria de acción */}
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-teal-100 text-gray-600 font-semibold transition-colors"
                >
                  <MdOutlineCategory className="text-gray-600" />Categorias de acción
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Log out */}
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <button
                onClick={handleLogOut}
                className="w-48 flex items-center cursor-pointer gap-3 py-2 px-4 rounded-lg hover:bg-teal-100 text-gray-600 font-semibold transition-colors"
              >
                <RiLogoutCircleLine className="text-gray-600" />
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </nav>
      </section>
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="xl:hidden fixed bottom-4 right-4 cursor-pointer bg-gray-300 text-black font-bold p-3 rounded-full z-50"
      >
        {toggleMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};
export default SideBar;
