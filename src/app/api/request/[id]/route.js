import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/requestModal";
import { UserModal } from "@/lib/models/userModal";

export async function GET(req , {params}) {
  await connectDB();
  try {
    const singleRequest = await RequestModal.find({_id : params.id}).populate("user");
    return Response.json({
      singleRequest,
      msg: "Single Request Fetched",
    });
  } catch (error) {
    console.error("Error in GET function:", error);
    return Response.json(
      {
        error: true,
        msg: "Error fetching requests",
      },
      { status: 500 }
    );
  }
}

