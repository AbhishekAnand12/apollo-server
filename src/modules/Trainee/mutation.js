import userService from "../../service/UserService";
import pubsub from "../pubsub";

export default {
  createTraineeData: (_, { input: { name, email } }, { dataSources }) => {
    pubsub.publish("TRAINEE_CREATED_WITH_SUBSCRIBE", {
      createTraineeData: (_, { name, email }),
    });
    return dataSources.traineeApi.createUser({ name, email });
  },

  updateTraineeData: async (_, { input }, { dataSources }) => {
    const { OriginalId, name, email, password, role } = input;
    // console.log(`inside update trainee of trainee ${JSON.stringify(input)}`);
    pubsub.publish("TRAINEE_UPDATED_WITH_SUBSCRIBE", {
      updateTraineeData: (_, { name, email }),
    });
    const update = await dataSources.traineeApi.updateUser({
      OriginalId,
      name,
      email,
      password,
      role,
    });
    return update;
  },
  deleteTraineeData: async (_, { input }, { dataSources }) => {
    const { OriginalId } = input;
    const deleted = await dataSources.traineeApi.deleteUser(input);
    pubsub.publish("TRAINEE_DELETED_WITH_SUBSCRIBE", {
      deleteTraineeData: (_, { OriginalId }),
    });
    // console.log(`deleted is :: ${JSON.stringify(deleted)}`);
    return deleted;
  },

  loginTrainee: (_, { input }, { dataSources }) => {
    const login = dataSources.traineeApi.loginUser(input);
    // console.log(`login is :: ${JSON.stringify(login)}`);
    return login;
  },
};
