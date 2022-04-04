import { RESTDataSource } from "apollo-datasource-rest";

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/api/user`;
  }
  getMe() {
    return this.get("/me");
  }
  loginUser(input) {
    return this.get("/generateToken", input);
  }
}
export default UserAPI;
