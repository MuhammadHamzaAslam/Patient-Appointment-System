import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/requestModal";

export async function GET() {
  await connectDB();
  let allUser = await RequestModal.find();
  return Response.json({
    allUser,
    msg: "All Request Fetched",
  });
}

export async function POST(request) {
  await connectDB();
  try {
    let obj = await request.json();
    let newRequest = await new RequestModal({ ...obj });
    newRequest = await newRequest.save();
    return Response.json(
      {
        error: false,
        msg: "Doctor Resquest received Successfully",
        user: newRequest,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
