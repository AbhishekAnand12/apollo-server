import Pubsub from "../pubsub";

export default {
  createTraineeData: {
    subscribe: () => Pubsub.asyncIterator("TRAINEE_CREATED_WITH_SUBSCRIBE"),
  },

  updateTraineeData: {
    subscribe: () => {
      return Pubsub.asyncIterator("TRAINEE_UPDATED_WITH_SUBSCRIBE");
    },
  },
  
  deleteTraineeData: {
    subscribe: () => Pubsub.asyncIterator("TRAINEE_DELETED_WITH_SUBSCRIBE"),
  },
};
