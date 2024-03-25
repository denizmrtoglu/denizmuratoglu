function get<T>(endpoint: string): Promise<{ data: T }> {
  return fetch(process.env.NEXT_PUBLIC_API_URL + 'api/' + endpoint).then(
    response => {
      return response.json() as Promise<{ data: T }>;
    }
  );
}

const api = { get };
export default api;
