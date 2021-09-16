import api from "config/api";
import axiosConfig from "lib/axiosConfig";

export const fetchTodoApi = (prop) => axiosConfig.get(api.todo, prop);

export const postTodoApi = ({ ...prop }) => axiosConfig.post(api.todo, prop);

export const patchTodoApi = ({ id, ...prop }) => axiosConfig.patch(api.todo + '/' + id, prop);

export const deleteTodoApi = ({ id }) => axiosConfig.delete(api.todo + '/' + id);