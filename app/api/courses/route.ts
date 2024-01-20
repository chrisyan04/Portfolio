import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/db/config";
import Courses, { type ICourses } from "@/db/models/courses";

let submission: Omit<ICourses, "code"> = {
  course_name: "",
};

export async function POST(request: NextRequest) {
  try {
    connectDB();

    submission = await request.json();

    await new Courses({ ...submission }).save();

    return NextResponse.json(
      {
        message: `${submission.course_name} created successfully!`,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { type: "UnauthorizedError", error: "Invalid request" },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    connectDB();

    const courses = await Courses.find({});

    return NextResponse.json(courses, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}