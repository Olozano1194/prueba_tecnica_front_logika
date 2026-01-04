import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
// form
import { useForm } from "react-hook-form";
//Mensajes
import { toast } from 'react-hot-toast';
// icons
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
// logo
import logo from "../../../public/logo.png";
import imgFondo from "../../../public/img-fondo.png";


type LoginFormValues = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const navigate = useNavigate();
    const {  register, handleSubmit, formState: {errors} } = useForm<LoginFormValues>();
    const auth = useContext(AuthContext);
    const [ showkPass, setShowPass ] = useState(false);

    if (!auth) return null;

    const { login, loading, error } = auth;


    const onSubmit = handleSubmit(async (data) => {
        try {
            await login({
            username: data.email,
            password: data.password,
            });

            toast.success('Login exitoso');
            navigate('/admin');
        } catch {
            toast.error('Error al iniciar sesión');
        }
    });

    const handlePass = () => {
        setShowPass(!showkPass);               
    };
    

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
        <section className="w-[90%] bg-white rounded-sm p-7 shadow-lg md:w-[50%] lg:w-[25%]">
            {/* Title section */}
            <section className="w-full flex justify-center">
                <img src={logo} alt="logo de la empresa" className="w-10 h-10 self-start mt-2 mr-2" />
                <div className="flex flex-col justify-center text-violet-950">
                    <h1 className="font-bold text-3xl leading-tight">vekind</h1>
                    <span className="text-lg -mt-2">network</span>
                </div>                
            </section>
            {/* Text Section */}
            <div className="w-full text-">
                <p className="w-full text-center  text-gray-950 font-medium">¡Empieza a conectar con tu comunidad ante buenas acciones!</p>
            </div>
            {/* form */}
            <form 
                onSubmit={onSubmit} 
                className="w-full flex flex-col justify-center items-center pt-6">
                {/* email */}
                <label htmlFor="email" className="w-full text-gray-950">
                    Correo Electrónico:
                    <span className="flex items-center border border-gray-400 mt-1.5 py-1 px-2 rounded-sm"><AiOutlineMail className="mr-2 text-sky-700" />
                        <input type="text" placeholder="Ingresa correo" className="w-80 text-gray-600 outline-none"
                        {...register('email',{
                            required: {
                                value: true,
                                message: 'Correo requerido'
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Correo invalido'
                                },
                        })}  
                        />
                    </span>
                </label>
                {
                    errors.email && <span className="text-red-600">{errors.email.message}</span>
                }
                {/* password */}
                <label htmlFor="password" className="w-full mt-2.5  text-gray-950">
                    Contraseña:
                    <span className="w-full flex items-center border border-gray-400 mt-1.5 py-1 px-2 rounded-sm">
                        <RiLockPasswordLine className="mr-2 text-sky-700" />
                        <input 
                            type={ showkPass ? 'text' : 'password'} 
                            placeholder="Ingresa tu contraseña" 
                            className="w-80 flex-1 text-gray-600 outline-none"
                            {...register('password',{
                            required: {
                                value: true,
                                message: 'Contraseña requerida'
                            },
                            minLength: {
                                value: 5,
                                message: 'La contraseña debe tener minimo 5 carácteres'
                            },
                            maxLength: {
                                value: 100,
                                message: 'La contraseña debe tener como máximo 100 carácteres'
                            },
                        })}  
                        />
                        <button type="button" onClick={handlePass} className="ml-2 cursor-pointer">
                            {showkPass ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff /> }
                        </button>
                    </span>
                </label>
                {
                    errors.password && <span className="text-red-600">{errors.password.message}</span>
                }
                {error && <span className="text-red-600 text-sm mt-6 text-center">{error}</span>}
                <div className="p-2 mt-3 flex flex-col gap-3">
                    <p className="text-center text-stone-700">
                        <Link to='/algo' className="border-b border-violet-950 text-violet-950 font-bold hover:text-violet-700 transition-colors">Recuperar contraseña</Link>
                    </p>                                       
                </div>
                {/* btn */}
                <button 
                    type="submit"                     
                    className="w-64 border-none cursor-pointer font-bold rounded-sm bg-gray-400 mt-15 p-2 text-lg text-gray-500 hover:scale-105 hover:bg-gray-500 hover:text-gray-400"
                >
                    {loading ? 'Ingresando...' : 'Ingresar'}
                </button>
            </form>
            
        </section>        
    </main>
    );
};
export default LoginPage; 