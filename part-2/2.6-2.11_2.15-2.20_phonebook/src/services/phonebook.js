import axios from 'axios';
// const API_BASE_URL = `https://young-plateau-97943.herokuapp.com`;
const create = async (newContactObj) => {
  try {
    const url = `/api/persons`;
    const response = await axios.post(url, newContactObj);
    return response.data;
  } catch (error) {
    console.log('[Error]::stack trace::', error);
  }
};
const getAll = () => {
  return axios
    .get(`/api/persons`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log('[Error]::stack trace::', error);
    });
};
const update = async (id, payload) => {
  const updatedPerson = await axios.put(`/persons/${id}`, payload);
  return updatedPerson.data;
};
const deletePerson = async (id) => {
  const deletedPerson = await axios.delete(`/api/persons/${id}`);
  return deletedPerson.status;
};

export const PhonebookServices = {
  getAll,
  create,
  update,
  deletePerson,
};
