import userService from "../../service/UserService";
import {
  TRAINEE_CREATED_WITH_SUBSCRIBE,
  TRAINEE_UPDATED_WITH_SUBSCRIBE,
  TRAINEE_DELETED_WITH_SUBSCRIBE,
} from "../../lib/constant";
import PubSub from "../pubsub";

export default {
  createTraineeData: (_, { input }, { dataSources }) => {
    PubSub.publish(TRAINEE_CREATED_WITH_SUBSCRIBE, {
      createTraineeData: userService.createTraineeData(input),
    });
    return userService.createTraineeData(input);
  },

  updateTraineeData: (_, { input }, { dataSources }) => {
    PubSub.publish(TRAINEE_UPDATED_WITH_SUBSCRIBE, {
      updateTraineeData: userService.updateTraineeData(input),
    });
    return userService.updateTraineeData(input);
  },

  deleteTraineeData: (_, { input }, { dataSources }) => {
    PubSub.publish(TRAINEE_DELETED_WITH_SUBSCRIBE, {
      deleteTraineeData: userService.deleteTraineeData(input),
    });
    return userService.deleteTraineeData(input);
  },

  loginTrainee: (_, { input }, { dataSources }) =>
    dataSources.TraineeAPI.loginUser(input),
};
