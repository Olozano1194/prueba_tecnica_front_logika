import { useNavigate } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
// API
import { createAction } from "../../api/action.api";
//Mensajes
import { toast } from "react-hot-toast";
import imgFondo from "../../../public/img-fondo.png";

type CategoryFormValues = {
  name: string;
  description: string;
  color: string;
  status: string;
  icon: FileList;
};

const Categoria = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormValues>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("color", data.color);
      formData.append("status", "1");

      if (data.icon && data.icon[0]) {
        formData.append("icon", data.icon[0]);
      }

      console.log([...formData.entries()]);

      await createAction(formData);

      toast.success("Categoría creada correctamente");
      Navigate("/admin");
    } catch {
      toast.error("Error al crear categoría");
    }
  });

  return (
    <main
      className="w-full min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${imgFondo})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={onSubmit}
        className="w-[92%] flex flex-col justify-center items-center bg-white p-4 rounded-sm shadow-lg md:w-[60%] md:p-8 lg:w-[30%]"
      >
        <h2 className="w-full text-2xl text-violet-950 font-bold">
          Crear categoria
        </h2>
        {/* Category */}
        <label
          htmlFor="name"
          className="w-full flex flex-col text-gray-950 mt-4"
        >
          Nombre de la categoría*
          <input
            type="text"
            className="w-80 border border-gray-400 mt-2 text-gray-600 p-2 outline-none rounded-sm md:w-full"
            placeholder="Escribe el nombre de la buena acción"
            {...register("name", {
              required: {
                value: true,
                message: "Categoria requerido",
              },
              minLength: {
                value: 3,
                message: "Minimo 3 caracteres",
              },
            })}
          />
        </label>
        {errors.name && (
          <span className="text-red-600">{errors.name.message}</span>
        )}
        {/* Description */}
        <label className="w-full text-gray-950 mt-4">
          Descripción de la buena acción*
          <textarea
            className="w-80 h-24 border border-gray-400 mt-2 text-gray-600 p-2 outline-none resize-none rounded-sm md:w-full "
            placeholder="Agregar descripción"
            {...register("description", {
              required: {
                value: true,
                message: "Descripción requerida",
              },
              minLength: {
                value: 10,
                message: "Minimo 10 caracteres",
              },
            })}
          ></textarea>
        </label>
        {errors.description && (
          <span className="text-red-600">{errors.description.message}</span>
        )}
        {/* icon */}
        {/* <input
          type="file"
          accept="image/*"
          {...register("icon", { required: true })}
        /> */}

        {/* Color */}
        <label className="w-full flex flex-col text-gray-950 mt-4">
          Color*
          <input
            type="text"
            className="w-80 border border-gray-400 mt-2 text-gray-600 p-2 outline-none rounded-sm md:w-full "
            placeholder="Registra color código HEX"
            {...register("color", {
              required: {
                value: true,
                message: "Color requerido",
              },
            })}
          />
        </label>
        {errors.color && (
          <span className="text-red-600">{errors.color.message}</span>
        )}
        {/* Status */}
        <span className="w-full mt-4 flex gap-2">
          <input
            type="radio"
            className="bg-green-200"
            value="ACTIVE"
            {...register("status", { required: true })}
          />
          Activar
        </span>

        <div className="w-full flex justify-center gap-5 mt-20 mb-5">
          <button
            type="button"
            className="w-full bg-white font-semibold p-2 rounded-sm cursor-pointer shadow-sm hover:text-gray-700 hover:border-2 hover:border-violet-950"
          >
            Cancelar{" "}
          </button>

          <button
            type="submit"
            className="w-full bg-gray-400 font-semibold p-2 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-gray-300"
          >
            {" "}
            crear
          </button>
        </div>
      </form>
    </main>
  );
};
export default Categoria;
