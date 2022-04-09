export default {
  getAllTraineeData: (_, __, { dataSources }) => dataSources.traineeApi.getMe(),
};
