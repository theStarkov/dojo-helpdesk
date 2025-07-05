import UserRegister from "@/models/User";
import connectDB from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
const uuidv4 = require("uuid").v4;

connectDB();

export async function POST(req) {
  const _id = uuidv4();
  const { inputs } = await req.json();
  const refinedData = { ...inputs, _id };
  let { fullName } = refinedData;
  const checkUser = await UserRegister.findOne({ fullName });
  if (checkUser) {
    return NextResponse.json(
      { message: "You have already registered" },
      { status: 200 }
    );
  } else {
    const finalUser = new UserRegister({ ...refinedData });
    await finalUser.save();
    console.log("User saved successfully", finalUser);
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  }
}
