import mongoose, { Schema, models, model } from "mongoose";

export interface ITasks {
  task_name: string;
  task_description: string;
  task_status: boolean;
  task_progress: number;
  task_likes: number;
}

const taskSchema = new Schema<ITasks>(
  {
    task_name: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    task_description: {
      type: String,
      required: true,
      trim: true,
    },
    task_status: {
      type: Boolean,
      required: true,
      default: false,
    },
    task_progress: {
      type: Number,
      required: true,
      default: 0,
    },
    task_likes: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Task = models.Task || model("Task", taskSchema);

export default Task;
