import userService from "../../service/UserService";

export default {
  createTraineeData: (_, { input }, { dataSources }) =>
    dataSources.traineeApi.createUser(input),
  updateTraineeData: async (_, { input }, { dataSources }) => {
    const { OriginalId, name, email, password, role } = input;
    console.log(`inside update trainee of trainee ${JSON.stringify(input)}`);
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
    const deleted = await dataSources.traineeApi.deleteUser(input);
    console.log(`deleted is :: ${JSON.stringify(deleted)}`);
    return deleted;
  },

  loginTrainee: (_, { input }, { dataSources }) => {
    const login = dataSources.traineeApi.loginUser(input);
    console.log(`login is :: ${JSON.stringify(login)}`);
    return login;
  },
};
