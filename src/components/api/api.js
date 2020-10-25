function fetchRequest(path, method, params) {
  const ip = "http://localhost:3005/";
  return fetch(ip + path, {
    method,
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
