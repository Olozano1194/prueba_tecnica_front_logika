

const Login = () => {

    return (
    <main className="w-full min-h-screen bg-gray-600 flex flex-col justify-center items-center">
        <section className="w-[90%] bg-white rounded-sm p-3">
            {/* Title section */}
            <section className="w-full flex justify-center items-center">
                <img src="" alt="" />
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-3xl text-black ">vekind</h1>
                    <span className="text-lg ">network</span>
                </div>                
            </section>
            {/* Text Section */}
            <div className="w-full text-">
                <p className="w-full flex justify-center items-center text-sm">¡Empieza a conectar con tu comunidad ante buenas acciones!</p>
            </div>
            {/* form */}
            <form action="" className="w-full flex flex-col justify-center items-center">
                <label htmlFor="">Correo Electrónico</label><input type="text" placeholder="Ingresa correo" />
                <label htmlFor="">Contraseña</label><input type="password" placeholder="Ingresa tu contraseña" />
                <p>Recuperar contraseña</p>
                {/* btn */}
                <button>Ingresar</button>
            </form>
        </section>        
    </main>
    );
};
export default Login; 