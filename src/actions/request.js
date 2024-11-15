export async function addRequest(data) {
  console.log("addbase url =>", process.env.NEXT_PUBLIC_BASE_URL);
  let add = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/request`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  add = add.json();
  console.log("add =>", add);

  return add;
}
