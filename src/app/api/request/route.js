// import connectDB from "@/lib/connectDB";
// import { RequestModal } from "@/lib/models/requestModal";

// export async function GET(req) {
//   await connectDB();
//   // console.log("req =>" , req);
//   const query = {}
//   const status = req.nextUrl.searchParams.get("status");
//   if (status && status !== "all") {
//     query.status = status
//   }

//   let allUser = await RequestModal.find({
//     status : status
//   }).populate("user");
//   return Response.json({
//     allUser,
//     msg: "All Request Fetched",
//   });
// }

// export async function POST(request) {
//   await connectDB();
//   try {
//     let obj = await request.json();
//     let userRequestedBefore = await RequestModal.findOne({
//       user: obj.user,
//     });
//     if (userRequestedBefore) {
//       return Response.json(
//         {
//           error: true,
//           msg: "You Have Already Applied For Doctor",
//         },
//         { status: 401 }
//       );
//     } else {
//       let newRequest = await new RequestModal({ ...obj });
//       newRequest = await newRequest.save();
//       return Response.json(
//         {
//           error: false,
//           msg: "Doctor Resquest received Successfully",
//           user: newRequest,
//         },
//         { status: 201 }
//       );
//     }
//   } catch (error) {
//     console.log(error);
//     return Response.json(
//       {
//         error: true,
//         msg: "Check Console For Errors",
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(request) {
//   await connectDB();
//   try {
//     let obj = await request.json();
//     let { status, id } = obj;
//     const update = RequestModal.findOneAndUpdate(
//       {
//         _id: id,
//       },
//       {
//         status: status,
//       }
//     ).exec();
//     return Response.json(
//       {
//         error: false,
//         msg: "Request Update Successfully",
//         user: update,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.log(error);
//     return Response.json(
//       {
//         error: true,
//         msg: "Something Went Wrong!",
//       },
//       { status: 500 }
//     );
//   }
// }

import connectDB from "@/lib/connectDB";
import { RequestModal } from "@/lib/models/requestModal";

export async function GET(req) {
  await connectDB();
  try {
    const query = {};
    const status = req.nextUrl.searchParams.get("status");
    if (status && status !== "all") {
      query.status = status;
    }
    console.log("Query being executed:", query);

    const allUser = await RequestModal.find(query).populate("user");
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
    console.log("POST data:", obj);

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

    console.log("PUT data:", obj);

    const update = await RequestModal.findOneAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );

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
