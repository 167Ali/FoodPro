// store/modules/profile.js
const state = {
    firstName: 'Muhammad',
    lastName: 'Ali',
    mobile: '+922233896511',
    email: 'muhammadali908@gmail.com',
    isEmailVerified: true,
    currentPassword: '',
    newPassword: ''
  };
  
  const mutations = {
    UPDATE_PROFILE(state, payload) {
      state.firstName = payload.firstName || state.firstName;
      state.lastName = payload.lastName || state.lastName;
      state.mobile = payload.mobile || state.mobile;
      state.email = payload.email || state.email;
      // Handle other fields as needed
    },
    UPDATE_EMAIL(state, email) {
      state.email = email;
    },
    UPDATE_PASSWORD(state, passwords) {
      state.currentPassword = passwords.currentPassword;
      state.newPassword = passwords.newPassword;
    }
  };
  
  const actions = {
    saveProfile({ commit }, profile) {
      commit('UPDATE_PROFILE', profile);
      // You can add API calls here to save the profile
    },
    saveEmail({ commit }, email) {
      commit('UPDATE_EMAIL', email);
      // You can add API calls here to save the email
    },
    savePassword({ commit }, passwords) {
      commit('UPDATE_PASSWORD', passwords);
      // You can add API calls here to save the password
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };
  