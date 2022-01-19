import React, {Component} from 'react';
import {useEffect} from 'react';
import {getUsers, getPosts} from './actions';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';

const SagaApp = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts(), getUsers());
  }, []);

  return (
    <View>
      <Text>Saga API Call</Text>
      {loading && <Text>Loading...</Text>}
      {error && !loading && <Text>{error}</Text>}
      {users && users.map((user, i) => <Text key={i}>{user.name}</Text>)}
      {posts && posts.map((post, i) => <Text key={i}>{post.title}</Text>)}
    </View>
  );
};

export default SagaApp;
