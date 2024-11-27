export async function addAppointment(data) {
  let add = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/appointment`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  add = add.json();

  return add;
}

export async function getAppointment(role, id) {
  let url;
  if (role === "user") {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointment?user=${id}`;
  } else {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointment?request=${id}`;
  }
  let appointments = await fetch(url, {
    cache: "no-cache",
  });
  appointments = await appointments?.json();
  return appointments;
}
