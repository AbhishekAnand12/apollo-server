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
}

export default TraineeAPI;
