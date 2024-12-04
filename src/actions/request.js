"use server";
import { revalidatePath } from "next/cache";

export async function addRequest(data) {
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
  console.log("process.env.NEXT_PUBLIC_BASE_URL in get requset =>" , process.env.NEXT_PUBLIC_BASE_URL);
  
  add = await add.json();
  return add.allUser;
}

export async function getSingleRequest(id) {
  let singleRequest = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/request/${id}`
  );

  singleRequest = await singleRequest.json();
  return singleRequest;
}

export async function updateRequest(id, status) {
  let request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/request`, {
    method: "PUT",
    body: JSON.stringify({ id, status }),
  });

  request = await request.json();
  revalidatePath("/admin/request");

  return request;
}
