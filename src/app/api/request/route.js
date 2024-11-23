import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/requestModal";
import { UserModal } from "@/lib/models/userModal";

export async function GET(req) {
  await connectDB();
  try {
    const query = {};
    const status = req.nextUrl.searchParams.get("status");
    if (status && status !== "all") {
      query.status = status;
    }
    // console.log("Query being executed:", query);

    const allUser = await RequestModal.find(query).populate("user");
    // console.log("allUser in backend get api" , allUser);

    return Response.json({
      allUser,
      msg: "All Request Fetched",
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

export async function POST(request) {
  await connectDB();
  try {
    const obj = await request.json();

    const userRequestedBefore = await RequestModal.findOne({
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
      let newRequest = new RequestModal({ ...obj });
      console.log("newRequest =>", newRequest);

      newRequest = await newRequest.save();
      return Response.json(
        {
          error: false,
          msg: "Doctor Request received Successfully",
          user: newRequest,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error in POST function:", error);
    return Response.json(
      {
        error: true,
        msg: "Check Console For Errors",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  await connectDB();
  try {
    const obj = await request.json();
    const { status, id } = obj;

    // role updae work remaining

    // const request = await RequestModal.findOne({ _id: id });
    // await UserModal.findOneAndUpdate({ _id: request.user }, { role: "doctor" });

    const update = await RequestModal.findOneAndUpdate(
      { _id: id },
      { status },
      { new: true }
    ).exec();

    return Response.json(
      {
        error: false,
        msg: "Request Updated Successfully",
        user: update,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in PUT function:", error);
    return Response.json(
      {
        error: true,
        msg: "Something Went Wrong!",
      },
      { status: 500 }
    );
  }
}
