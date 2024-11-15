import { revalidatePath } from "next/cache";

export async function addRequest(data) {
  let add = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/request`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  add = await add.json();

  return add;
}

export async function getRequest(data) {
  let add = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/request`);

  add = add.json();

  return add;
}

export async function updateRequest(id, status) {
  let request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/request`, {
    method: "Put",
    body: JSON.stringify({ id, status }),
  });

  request = await request.json();
  revalidatePath("http://localhost:3000/admin/request");

  return request;
}
