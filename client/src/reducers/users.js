import axios from 'axios';
const GET_USERS = 'GET_USERS'
const SHOW_USER = 'SHOW_USER'

export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then( res => dispatch({ type: GET_USERS, users: res.data }) )
  }
}

export const showUser = (id) => {
  return (dispatch) => {
    axios.get(`/api/users/${id}`)
      .then( res => dispatch({ type: SHOW_USER, show_user: res.data }) )
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case SHOW_USER:
      return action.show_user
    default:
      return state;
  }
};

