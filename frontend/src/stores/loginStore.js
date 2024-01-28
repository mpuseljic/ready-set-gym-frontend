import { defineStore } from "pinia";
import axios from "axios";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
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
