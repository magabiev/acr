function fetchRequest(path, method, params) {
  const ip = "https://acr-server.vercel.app/";
  return fetch(ip + path, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then((res) => res.json());
}

export function post(path, params) {
  return fetchRequest(path, "post", params);
}

export function del(path, params) {
  return fetchRequest(path, "delete", params);
}

export function get(path, params) {
  return fetchRequest(path, "get", params);
}
