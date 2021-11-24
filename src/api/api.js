const Api = {
  apiUrl: "https://projetotodolistbackend.herokuapp.com",
  getAll: () => fetch(Api.apiUrl),
  getById: (id) => fetch(`${Api.apiUrl}/${id}`),
  fetchPost: (dados) => {
    return fetch(`${Api.apiUrl}/add`, {
      method: "POST",
      body: JSON.stringify(dados),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  },
  fetchdelete: async (id) => {
    return fetch(`${Api.apiUrl}/delete/${id}`, {
      method: "DELETE",
    });
  },
  fetchedit: async (dados, id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: "PUT",
      body: JSON.stringify(dados),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  },
};
export default Api;
