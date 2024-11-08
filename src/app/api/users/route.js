import connectDB from "../../../lib/connectDB";
import { UserModal } from "@/lib/models/userModal";

export async function GET() {
  await connectDB();
  let allUsers = await UserModal.find();
  return Response.json({
    user: allUsers,
    msg: "User Fetched",
  });
}

export async function POST(request) {
  await connectDB();
  try {
    let obj = await request.json();
    let newUser = await new UserModal({ ...obj });
    newUser = await newUser.save();
    return Response.json(
      {
        error: false,
        msg: "User Registered Successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
