"use server"
import { revalidatePath } from "next/cache";

export async function addRequest(data) {
  console.log("data in backend action =>", data);
  const startTime = new Date(`1970-01-01T${data.appointmentStartTime}:00`);
  const endTime = new Date(`1970-01-01T${data.appointmentEndTime}:00`);

  if (startTime >= endTime) {
    return { error: true, msg: "Start time must be earlier than end time" };
  }

  let add = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/request`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  add = add.json();

  return add;
}

export async function getRequest(status) {
  let add = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/request?status=${
      status ? status : ""
    }`
  );  

  
  
  add = await add.json();
  // console.log("add in action " , add);
  return add.allUser;
}

export async function updateRequest(id, status) {
  let request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/request`, {
    method: "Put",
    body: JSON.stringify({ id, status }),
  });

  request = await request.json();
  revalidatePath("admin/request");

  return request;
}
