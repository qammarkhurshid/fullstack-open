import axios from 'axios';
const create = async (newContactObj) => {
  try {
    const url = `http://localhost:3001/persons`;
    const response = await axios.post(url, newContactObj);
    return response.data;
  } catch (error) {
    console.log('[Error]::stack trace::', error);
  }
};
const getAll = () => {
  return axios
    .get(`http://localhost:3001/persons`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log('[Error]::stack trace::', error);
    });
};
const update = async (id, payload) => {
  const updatedPerson = await axios.put(`http://localhost:3001/persons/${id}`, payload);
  return updatedPerson.data;
};
const deletePerson = async (id) => {
  const deletedPerson = await axios.delete(`http://localhost:3001/persons/${id}`);
  return deletedPerson.status;
};

export const PhonebookServices = {
  getAll,
  create,
  update,
  deletePerson,
};
