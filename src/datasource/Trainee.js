import { RESTDataSource } from "apollo-datasource-rest";
import configurations from "../config/configurations";

class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configurations.serviceUrl}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set("Authorization", this.context.authorization);
  }

  async getMe() {
    const res = await this.get("/");
    return await res.data;
  }

  loginUser = async ({ email, password }) => {
    const res = await this.post("/generateToken", { email, password });
    return { token: res.data.accessToken };
  };
  createUser = async ({ name, email, password }) => {
    const res = await this.post("/", { name, email, password });
    console.log(`createuser is : ${JSON.stringify(res)}`);
    return res.date;
  };

  updateUser = async ({ name, email, password, role, originalId }) => {
    const res = await this.put("/", {
      name,
      email,
      password,
      role,
      originalId,
    });
    return res.data;
  };

  deleteUser = async ({ originalId }) => {
    const res = await this.delete(`/${originalId}`);
    return res.data;
  };
}

export default TraineeAPI;
