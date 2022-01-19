const url = 'https://jsonplaceholder.typicode.com/posts';

const fetchGetUsersTwo = () => {
  console.log('inside get posts api');
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response =>
    response.json(),
  );
};

export default fetchGetUsersTwo;
