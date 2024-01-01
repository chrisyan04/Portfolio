import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/db/config";
import Task, { type ITasks } from "@/db/models/tasks";

let submission: Omit<ITasks, "code"> = {
  task_name: "",
  task_description: "",
  task_status: false,
  task_progress: 0,
  task_likes: 0,
};

export async function POST(request: NextRequest) {
  try {
    connectDB();

    submission = await request.json();

    await new Task({ ...submission }).save();

    return NextResponse.json(
      {
        message: `${submission.task_name} created successfully!`,
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
