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
  if (role == "user") {
    url = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointment?user=${id}`
    );
  } else {
    url = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointment?doctor=${id}`
    );
  }
  let appointment = fetch(url , {
    cache : "no-cache"
  })
  appointment = await appointment.json()
  return appointment
}
