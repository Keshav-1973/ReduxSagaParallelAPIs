const initialState = {
  posts: [],
  users: [],
  loading: false,
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS_REQUESTED':
      return {...state, loading: true};
    case 'GET_USERS_SUCCESS':
      return {...state, loading: false, users: action.users};
    case 'GET_USERS_FAILED':
      return {...state, loading: false, error: action.message};
    case 'GET_POSTS_REQUESTED':
      return {...state, loading: true};
    case 'GET_POSTS_SUCCESS':
      return {...state, loading: false, posts: action.posts};
    case 'GET_POSTS_FAILED':
      return {...state, loading: false, error: action.message};
    default:
      return state;
  }
};

export default users;
