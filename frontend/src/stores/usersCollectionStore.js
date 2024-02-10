import { defineStore } from "pinia";
import config from "../../config.json";
import axios from "axios";

export const useUsersCollectionStore = defineStore("usersCollectionStore", {
    state: () => ({}),
    getters: {},
    actions: {
        async updateUserProfilePicture(formData) {
            const token = localStorage.getItem("token");
            const response = await axios.patch(
                `${config.BACKEND_URL}/user`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            return response;
        },
        async updateUserData(formData) {
            const token = localStorage.getItem("token");
            const response = await axios.patch(
                `${config.BACKEND_URL}/user`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            return response;
        },
    },
});
