import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  }
};

// retrieve coins when you log back in
// export const getCoins = (id) => {
//   return axios.get(`/api/users/${id}/coins`);
// }
// export const logCoins = (id, coins) => {
//   return axios.put(`/api/users/${id}/coins`, {
//     coins
//   })
// }
// SAME THING WITH HUSTLERS
// export const logHustles = hustles => {
//   return axios.post(`/api/users/${id}/hustles`, {
//     hustles
//   })
// }