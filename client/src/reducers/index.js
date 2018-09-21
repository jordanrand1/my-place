import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import flash from './flash';
import posts from './posts'

const rootReducer = combineReducers({
  user,
  flash,
  posts,
  users,
});

export default rootReducer;
