import * as mongoose from 'mongoose';

export const tasksSchema = new mongoose.Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
});
