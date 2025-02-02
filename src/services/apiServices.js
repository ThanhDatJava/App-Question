import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  //submit data
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  //submit data
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};

const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};

const getUserWithPagiinate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (userEmail, userPassword) => {
  return axios.post("api/v1/login", {
    email: userEmail,
    password: userPassword,
  });
};

const postRegister = (userEmail, userPassword, userUserName) => {
  return axios.post("api/v1/register", {
    email: userEmail,
    password: userPassword,
    username: userUserName,
  });
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPagiinate,
  postLogin,
  postRegister,
};
