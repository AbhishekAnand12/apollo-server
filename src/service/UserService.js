class userService {
  constructor() {
    this.id = 0;
    this.trainee = new Map();
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

  deleteTraineeData = ({ id }) => this.trainee.delete(parseInt(id));

  getAllTraineeData() {
    return this.trainee.values();
  }
}

export default new userService();
