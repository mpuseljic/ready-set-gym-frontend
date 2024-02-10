import { defineStore } from "pinia";

export const useRecipesAPIStore = defineStore("recipesAPIStore", {
    state: () => ({}),
    getters: {},
    actions: {
        async fetchRecipeData() {
            const res = await fetch(
                "https://www.themealdb.com/api/json/v1/1/random.php"
            ).then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            });
            return res.meals;
        },
    },
});
