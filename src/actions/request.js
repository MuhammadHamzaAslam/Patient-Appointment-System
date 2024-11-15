export async function addRequest(data) {
  let add = await fetch(`http://localhost:3000/api/request`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  add = add.json();
  return add;
}
