import PubSub from "../modules/pubsub";
class userService {
  constructor() {
    this.trainee = new Map();
    this.id = 0;
  }

  createTraineeData({ name, email }) {
    this.trainee.set(this.id, { id: this.id, name, email });
    const newTrainee = this.trainee.get(this.id);
    this.id++;
    return newTrainee;
  }

  updateTraineeData({ id, name, email }) {
    this.trainee.delete(parseInt(id));
    this.trainee.set(parseInt(id), { id, name, email });
    const updatedTrainee = this.trainee.get(parseInt(id), { id, name, email });
    return updatedTrainee;
  }

  getAllTraineeData() {
    return this.trainee.values();
  }

  deleteTraineeData({ id }) {
    return this.trainee.delete(parseInt(id));
  }
}

export default new userService();
