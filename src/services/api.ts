function get<T>(endpoint: string): Promise<{ data: T }> {
  return fetch(window.location.origin + '/api/' + endpoint).then(response => {
    return response.json() as Promise<{ data: T }>;
  });
}

const api = { get };
export default api;
