import { axiosPrivate } from "./axios.private";

export const getAdminActions = async () => {
  const response = await axiosPrivate.get(
    "/v1/actions/admin-list?pageNumber=1&pageSize=10"
  );
  return response.data;
};

export const createAction = async (formData: FormData) => {
  const response = await axiosPrivate.post(
    "/v1/actions/admin-add",
    formData
  );
  return response.data;
};

