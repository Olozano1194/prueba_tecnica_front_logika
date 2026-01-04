import { axiosPrivate } from "./axios.private";
import type { CreateActionData } from "../types/auth.types";

export const getAdminActions = async () => {
  const response = await axiosPrivate.get(
    "/v1/actions/admin-list?pageNumber=1&pageSize=10"
  );
  return response.data;
};

export const createAction = async (actionData: CreateActionData, iconFile?: File) => {
  const formData = new FormData();
  formData.append('name', actionData.name);
  formData.append('description', actionData.description);
  formData.append('color', actionData.color);
  formData.append('status', '1');

  if (iconFile) {
    formData.append('icon', iconFile);
  }

  const response = await axiosPrivate.post(
    "/v1/actions/admin-add",
    formData
  );
  return response.data;
};
