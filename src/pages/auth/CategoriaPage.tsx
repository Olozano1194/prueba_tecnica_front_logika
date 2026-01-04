import { useNavigate } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
// API
import { createAction } from "../../api/action.api";
//Mensajes
import { toast } from "react-hot-toast";
import imgFondo from "../../../public/img-fondo.png";
import { useState } from "react";

type CategoryFormValues = {
  name: string;
  description: string;
  color: string;
};

const Categoria = () => {
  const Navigate = useNavigate();
  const Max = 250;
  const [loading, setLoading] = useState(false);
  const [iconFile, setIconFile] = useState<File | null>(null);
  // const [, setPreviewIcon] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CategoryFormValues>();

  const descriptionValue = watch("description") || "";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIconFile(file);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);

      if (!iconFile) {
        toast.error("Debes seleccionar un ícono");
        return;
      }

      // console.log("Enviando datos:", {
      //   name: data.name,
      //   description: data.description,
      //   color: data.color,
      //   iconFile: iconFile.name,
      // });

      await createAction(data, iconFile);

      // console.log("Respuesta exitosa:", response);
      toast.success("Categoría creada correctamente");
      Navigate("/admin");
    } catch {
      toast.error("Error al crear categoría");
    } finally {
      setLoading(false);
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
              maxLength: {
                value: Max,
                message: `Máximo ${Max} caracteres`,
              },
            })}
          ></textarea>
        </label>
        <span
          className={`w-full mt-0.5 text-sm text-right ${
            descriptionValue.length >= Max ? "text-red-600" : "text-gray-500"
          }`}
        >
          {descriptionValue.length} / {Max}
        </span>
        {errors.description && (
          <span className="text-red-600">{errors.description.message}</span>
        )}
        {/* icon */}
        <div className="w-full">
          <label className="block text-sm font-medium mb-2">
            Ícono (Archivo SVG/PNG) *
          </label>
          <input
            type="file"
            accept=".svg,.png,.jpg,.jpeg"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-400 rounded-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {!iconFile && (
            <span className="text-gray-500 text-sm">
              Selecciona un archivo de imagen
            </span>
          )}          
        </div>

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
              minLength: {
                value: 3,
                message: "Minimo 3 caracteres",
              },
              maxLength: {
                value: 7,
                message: "Máximo 7 caracteres",
              },
              pattern: {
                value: /^#([A-Fa-f0-9]{3}){1,2}$/,
                message: "Formato de color HEX invalido",
              },
            })}
          />
        </label>
        {errors.color && (
          <span className="text-red-600">{errors.color.message}</span>
        )}
        {/* Status */}
        {/* <span className="w-full mt-4 flex gap-2">
          <input
            type="radio"
            className="bg-green-200"
            value="ACTIVE"
            {...register("status", { required: true })}
          />
          Activar
        </span> */}

        <div className="w-full flex justify-center gap-5 mt-20 mb-5">
          <button
            type="button"
            onClick={() => Navigate(-1)}
            className="w-full bg-white border-2 border-transparent font-semibold p-2 rounded-sm cursor-pointer shadow-sm hover:text-gray-700 hover:border-violet-950 md:text-lg"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="w-full bg-gray-400 font-semibold p-2 rounded-sm cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-gray-300 md:text-lg md:font-bold"
          >
            {loading ? "Creando..." : "Crear"}
          </button>
        </div>
      </form>
    </main>
  );
};
export default Categoria;
