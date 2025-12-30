import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://dev.apinetbo.bekindnetwork.com/api',    
    headers: {
        'Content-Type': 'application/json',       
    },    
});


/*
1) siempre lo he realizado en el app.tsx, pero dame la mejor opción
2) cual componente como? no entiendo la pregunta, si es que uno pueda ingresar a cualquier componente, no podría ser así, solo si esta autenticado podría entrar al dashboard, entre otro, solo si no esta autenticado se podría entrar al login
3) Vas a consumir endpoints en dos subdominios distintos (es intencional).
Maneja CORS/headers y token como corresponda.
*/