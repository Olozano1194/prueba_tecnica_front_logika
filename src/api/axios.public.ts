import axios from "axios";


export const axiosPublic = axios.create({
    baseURL: 'https://dev.apinetbo.bekindnetwork.com/api',    
    headers: {
        'Content-Type': 'application/json',       
    },    
});
