import axios from 'axios';
const GET_USERS = 'GET_USERS'

export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then( res => dispatch({ type: GET_USERS, users: res.data }) )
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
    return action.users;
    default:
    return state;
  }
};

