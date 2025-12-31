import { axiosPrivate } from "./axios.private";




export const getAdminActions = async () => {
  const response = await axiosPrivate.get('/v1/actions/admin-list?pageNumber=1&pageSize=10');
  return response.data;
};


