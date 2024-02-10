import { defineStore } from "pinia";
import axios from "axios";
import config from "../../config.json";

export const useLoginStore = defineStore("loginStore", {
    state: () => ({}),
    getters: {},
    actions: {
        async fetchUserData(email, password) {
            const response = await axios.post(`${config.BACKEND_URL}/auth`, {
                email: email,
                password: password,
            });

            const token = response.data.token;

            localStorage.setItem("token", token);
            return response;
        },
    },
});
