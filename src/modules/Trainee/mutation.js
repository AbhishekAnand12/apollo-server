import userService from "../../service/UserService";
import {TRAINEE_CREATED_WITH_SUBSCRIBE,
TRAINEE_UPDATED_WITH_SUBSCRIBE,
TRAINEE_DELETED_WITH_SUBSCRIBE} from '../../lib/constant';
import PubSub from "../pubsub";


export default {
  createTraineeData: (_, { input }) => {
    PubSub.publish(TRAINEE_CREATED_WITH_SUBSCRIBE, {
      createTraineeData: userService.createTraineeData(input),
    });
    return userService.createTraineeData(input);
  },
  updateTraineeData: (_, { input }) => {
    PubSub.publish(TRAINEE_UPDATED_WITH_SUBSCRIBE, {
      updateTraineeData: userService.updateTraineeData(input),
    });
    return userService.updateTraineeData(input);
  },
  deleteTraineeData: (_, { input }) => {
    PubSub.publish(TRAINEE_DELETED_WITH_SUBSCRIBE, {
      deleteTraineeData: userService.deleteTraineeData(input),
    });
    return userService.deleteTraineeData(input);
  },

  // updateTraineeData: (_, { input }) => userService.updateTraineeData(input),

  // deleteTraineeData: (_, { input }) => userService.deleteTraineeData(input),
};
