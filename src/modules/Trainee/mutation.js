import userService from "../../service/UserService";
import {
  TRAINEE_CREATED_WITH_SUBSCRIBE,
  TRAINEE_UPDATED_WITH_SUBSCRIBE,
  TRAINEE_DELETED_WITH_SUBSCRIBE,
} from "../../lib/constant";
import PubSub from "../pubsub";

export default {
  createTraineeData: (_, { input }) => {
    const result = userService.createTraineeData(input);
    PubSub.publish(TRAINEE_CREATED_WITH_SUBSCRIBE, {
      createTraineeData: result,
    });
    return result;
  },
  updateTraineeData: (_, { input }) => {
    const result = userService.updateTraineeData(input);
    PubSub.publish(TRAINEE_UPDATED_WITH_SUBSCRIBE, {
      updateTraineeData: result,
    });
    return result;
  },
  deleteTraineeData: (_, { input }) => {
    const result = userService.deleteTraineeData(input);
    PubSub.publish(TRAINEE_DELETED_WITH_SUBSCRIBE, {
      deleteTraineeData: result,
    });
    return result;
  },
};
