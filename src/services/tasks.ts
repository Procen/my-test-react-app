import { fetchWrapper } from "../utils/fetchWrapper";

export const getAll = async () => {
  const url = "https://mocki.io/v1/b0605e54-dc48-497c-aecd-82fd16f8a3bf";
  const resp = await fetchWrapper.get<Tasks.ListItem[]>(url);
  return resp;
};