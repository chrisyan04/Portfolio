import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/db/config";
import Work, { type IWork } from "@/db/models/work";

let submission: Omit<IWork, "code"> = {
    job_name: '',
    company_name: '',
    job_location: '',
    job_description: '',
    job_start_date: '',
    job_end_date: '',
    job_skills: [],
    job_number: 0,
};

export async function POST(request: NextRequest) {
  try {
    connectDB();

    submission = await request.json();

    await new Work({ ...submission }).save();

    return NextResponse.json(
      {
        message: `${submission.job_name} at ${submission.company_name} created successfully!`,
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
