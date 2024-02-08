import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("loginStore", {
  state: () => ({}),
  getters: {},
  actions: {
    async fetchUserData(email, password) {
      const response = await axios.post("http://localhost:3000/auth", {
        email: email,
        password: password,
      });

      const token = response.data.token;

      localStorage.setItem("token", token);
      return response;
    },
  },
});
