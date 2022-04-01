import userService from "../../service/UserService";

export default {
  createTraineeData: (_, { input }) => userService.createTraineeData(input),
    // console.log("=================", input);

  updateTraineeData: (_, { input }) =>
    // console.log("Inside update", input);
userService.updateTraineeData(input),

  deleteTraineeData: (_, { input }) =>
    userService.deleteTraineeData(input),
};
