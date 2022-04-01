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
    this.trainee.delete(id);
    this.trainee.set((id), { id, name, email });
    console.log(this.trainee.set((id), { id, name, email }));
    // const updatedTrainee = this.trainee.get(Number(id), { id, name, email });
    return this.trainee.set(id, { id, name, email });
  }

  deleteTraineeData = ({ id }) => this.trainee.delete(parseInt(id));

  getAllTraineeData() {
    return this.trainee.values();
  }
}

export default new userService();
