const url = 'https://jsonplaceholder.typicode.com/users';

const fetchGetUsers = () => {
    var post;
    return (
        fetch(url, {
            method: 'GET',
          })
            .then(response => response.json())
            .catch(error => {
              throw error;
            }).then(function (data){
                post = data;
                return fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);
            }













    );

};