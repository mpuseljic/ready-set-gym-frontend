import { defineStore } from "pinia";
import config from "../../config.json";
import axios from "axios";

export const useWorkoutPlansCollectionStore = defineStore(
    "workoutPlansCollectionStore",
    {
        state: () => ({}),
        getters: {},
        actions: {
            async saveNewUserWorkoutPlan(formData) {
                const token = localStorage.getItem("token");
                const response = await axios.post(
                    `${config.BACKEND_URL}/workout-plan`,
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
    }
);
