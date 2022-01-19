import {call, put, all, takeLeading} from 'redux-saga/effects';
import fetchGetUsersTwo from '../requests/fetchPosts';
import fetchGetUsers from '../requests/fetchUsers';

function* handleGetUsers() {
  try {
    const {users, posts} = yield all({
      users: call(fetchGetUsers),
      posts: call(fetchGetUsersTwo),
    });

    yield all([
      put({type: 'GET_USERS_SUCCESS', users: users}),
      put({type: 'GET_POSTS_SUCCESS', posts: posts}),
    ]);
  } catch (err) {
    yield put({type: 'GET_USERS_FAILED', message: err.message});
  }
}

function* watcherUserSaga() {
  yield takeLeading('GET_USERS_REQUESTED', handleGetUsers);
  yield takeLeading('GET_POSTS_REQUESTED', handleGetUsers);
}

export default watcherUserSaga;
