import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard(username) {
    return axios.get(API_URL + `user/${username}`, { headers: authHeader() });
  }

  create(item) {
    console.log(item);
    return axios.post("api/test/user", item, { headers: authHeader() });
  }

  delete(id) {
    console.log(id);
    return axios.delete(`api/test/user/${id}`, { headers: authHeader() });
  }

  update(data) {
    //console.log(id);
    console.log(data);
    return axios.put(`api/test/user`,data, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}
//getUserDetails(username) {
 // return axios.get(API_URL + `user/${username}`, { headers: authHeader() });
//}

export default new UserService();
