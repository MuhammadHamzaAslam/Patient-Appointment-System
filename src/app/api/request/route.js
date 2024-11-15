import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/requestModal";

export async function GET() {
  await connectDB();
  let allUser = await RequestModal.find().populate("user");
  return Response.json({
    allUser,
    msg: "All Request Fetched",
  });
}

export async function POST(request) {
  await connectDB();
  try {
    let obj = await request.json();
    let userRequestedBefore = await RequestModal.findOne({
      user: obj.user,
    });
    if (userRequestedBefore) {
      return Response.json(
        {
          error: true,
          msg: "You Have Already Applied For Doctor",
        },
        { status: 401 }
      );
    } else {
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
    }
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        error: true,
        msg: "Check Console For Errors",
      },
      { status: 500 }
    );
  }
}
