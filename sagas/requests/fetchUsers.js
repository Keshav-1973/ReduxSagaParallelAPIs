const url = 'https://jsonplaceholder.typicode.com/users';

const fetchGetUsers = () => {
  console.log('inside get users api');
  return fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
};

export default fetchGetUsers;

