import { Schema, models, model } from "mongoose";

export interface IProjects {
  project_name: string;
  project_description: string;
  project_link: string;
  project_likes: number;
  project_skills: string[];
}

const projectSchema = new Schema<IProjects>(
  {
    project_name: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    project_description: {
      type: String,
      required: true,
      trim: true,
    },
    project_link: {
      type: String,
      required: true,
    },
    project_likes: {
      type: Number,
      required: true,
      default: 0,
    },
    project_skills: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = models.Project || model("Project", projectSchema);

export default Project;
