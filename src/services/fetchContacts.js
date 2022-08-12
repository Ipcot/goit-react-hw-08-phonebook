import axios from 'axios';

axios.defaults.baseURL = 'https://62f3a929a84d8c968128ddb3.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get();
  console.log(data);
  return data;
}
