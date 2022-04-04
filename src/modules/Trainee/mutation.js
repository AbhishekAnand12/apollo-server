import userService from "../../service/UserService";

export default {
  createTraineeData: (_, { input }) => userService.createTraineeData(input),

  updateTraineeData: (_, { input }) => userService.updateTraineeData(input),

  deleteTraineeData: (_, { input }) => userService.deleteTraineeData(input),
};
