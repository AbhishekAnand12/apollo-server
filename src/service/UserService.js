import PubSub from "../modules/pubsub";
class userService {
  constructor() {
    this.id = 0;
    this.trainee = new Map();
  }
  
  createTraineeData({ name, email }) {
    this.id++;
    this.trainee.set(this.id, { id: this.id, name, email });
    PubSub.publish("TRAINEE_CREATED_WITH_SUBSCRIBE", {
      createTraineeData: { id: this.id, name, email },
    });
    const newTrainee = this.trainee.get(this.id);
    return newTrainee;
  }

  updateTraineeData({ id, name, email }) {
    this.trainee.delete(parseInt(id));
    this.trainee.set(parseInt(id), { id, name, email });
    PubSub.publish("TRAINEE_UPDATED_WITH_SUBSCRIBE", {
      updateTraineeData: { id: this.id, ...this.trainee }
    });
    const updatedTrainee = this.trainee.get(parseInt(id), { id, name, email });
    return updatedTrainee;
  }

  getAllTraineeData() {
    return this.trainee.values();
  }

  deleteTraineeData({ id }) {
    PubSub.publish("TRAINEE_DELETED_WITH_SUBSCRIBE", {
      deleteTraineeData: { id: id }
    });
    return this.trainee.delete(parseInt(id));
  }

}

export default new userService();
