import { Schema, models, model } from "mongoose";

export interface IWork {
  job_name: string;
  company_name: string;
  job_location: string;
  job_description: string;
  job_start_date: string;
  job_end_date: string;
  job_skills: string[];
  job_number: number;
}

const workSchema = new Schema<IWork>(
  {
    job_name: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    job_description: {
      type: String,
      required: true,
      trim: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    job_location: {
      type: String,
      required: true,
    },
    job_skills: {
      type: [String],
      required: true,
    },
    job_start_date: {
      type: String,
      required: true,
    },
    job_end_date: {
      type: String,
      required: true,
    },
    job_number: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Work = models.Work || model("Work", workSchema);

export default Work;
