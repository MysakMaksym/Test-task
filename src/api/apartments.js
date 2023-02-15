export async function fetchApartments() {
  const response = await fetch("/apartments", {
    method: "GET",
  });
  if (response.status === 200) {
    return response.json();
  } else {
    return { error: "Unable to fetch apartments." };
  }
}

export async function fetchNewApartment(apartment) {
  const response = await fetch("/apartments", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apartment),
  });
  if (response.status === 200) {
    console.log(response);
    return response.json();
  } else {
    return { error: "Unable to fetch apartment." };
  }
}

export async function fetchDeleteApartment(apartmentId) {
  const response = await fetch("/apartments/" + apartmentId, {
    method: "DELETE",
  });
  if (response.status === 200) {
    return response.body;
  } else {
    return { error: "Unable to fetch apartments." };
  }
}
