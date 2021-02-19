import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    // You can specify the data you want to send with a parameter for the action
    // Axios will take this in as a second param
    registerUser({ commit }, user) {
      return axios.post('/api/register', user)
        .then((result) => commit('setUser', result.data));
    },
    signIn({ commit }, userLogin) {
      return axios.post('/api/sign-in', userLogin)
        .then((result) => commit('setUser', result.data));
    },
  },
};
