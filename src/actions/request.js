export async function addRequest(data) {
  let add = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/request`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  add = add.json();

  return add;
}

export async function getRequest(data) {
  let add = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/request`);

  add = add.json();

  return add;
}
