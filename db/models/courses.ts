import { Schema, models, model } from "mongoose";

export interface ICourses {
  course_name: string;
}

const coursesSchema = new Schema<ICourses>(
  {
    course_name: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Courses = models.Courses || model("Courses", coursesSchema);

export default Courses;
