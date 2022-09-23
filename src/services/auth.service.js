import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(fullname,username, email, password,mobile,address) {
    return axios.post(API_URL + "signup", {
      fullname,
      username,
      email,
      password,
      mobile,
      address
    });
  }

  //create(item) {
    //console.log(item);
   // return axios.post("/api/test/user", item, );
  //  }
   

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
