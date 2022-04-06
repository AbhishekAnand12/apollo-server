export default {
  getAllTraineeData: (_, __, { dataSources }) => dataSources.TraineeAPI.getMe(),
};
