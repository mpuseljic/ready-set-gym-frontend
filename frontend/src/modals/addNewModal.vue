<template>
    <transition name="modal-animation">
        <div v-show="activeModal" class="modal-outer">
            <span
                class="material-symbols-outlined exit-button-modal"
                @click="closeModal"
            >
                close
            </span>
            <div class="modal-inner">
                <h1 :style="{ color: '#d29433', 'text-align': 'center' }">
                    CREATE NEW WORKOUT PLAN
                </h1>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Dodaj sliku</label>
                    <input class="form-control" type="file" id="formFile" />
                </div>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Naziv plana"
                    v-model="workoutPlanName"
                />
                <div class="exercises">
                    <div class="exercises-list">
                        <div
                            class="form-check form-check-inline"
                            v-for="data in firstHalfExercises"
                            :key="data"
                        >
                            <input
                                class="form-check-input"
                                type="checkbox"
                                :value="data.id"
                                @click="handleSelect(data._id)"
                            />

                            <label
                                ><img
                                    :src="data.img_url"
                                    width="50"
                                    height="50"
                                />{{ data.title }}</label
                            >
                        </div>
                    </div>
                    <div class="exercises-list">
                        <div
                            class="form-check form-check-inline"
                            v-for="data in secondHalfExercises"
                            :key="data"
                        >
                            <input
                                class="form-check-input"
                                type="checkbox"
                                :value="data.id"
                                @click="handleSelect(data._id)"
                            />

                            <label
                                ><img
                                    :src="data.img_url"
                                    width="50"
                                    height="50"
                                />{{ data.title }}</label
                            >
                        </div>
                    </div>
                </div>
                <div class="buttons-add-new-workout">
                    <button
                        type="button"
                        class="btn btn-success"
                        @click="saveNewWorkoutPlan"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        class="btn btn-danger"
                        @click="closeModal"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import eventBus from "@/eventBus";
import axios from "axios";
export default {
    name: "addNewPlanModal",
    props: {
        activeModal: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            workoutPlanName: "",
            selectedImage: [],
            exercises: null,
            firstHalfExercises: [],
            secondHalfExercises: [],
            selectedExercises: [],
        };
    },
    async created() {
        await this.getExercises();
    },
    methods: {
        saveNewWorkoutPlan() {
            const newWorkoutPlan = {
                name: this.workoutPlanName,
                exercises: this.selectedExercises,
            };
            console.log(newWorkoutPlan);
            this.closeModal();
        },
        handleSelect(id) {
            if (!this.selectedExercises.includes(id)) {
                this.selectedExercises.push(id);
            } else {
                this.selectedExercises = this.selectedExercises.filter((x) => {
                    return x !== id;
                });
            }
        },
        async getExercises() {
            try {
                const response = await axios.get(
                    `http://localhost:3000/exercises`
                );
                this.exercises = response.data;
                for (let index = 0; index < this.exercises.length; index++) {
                    if (index < 10) {
                        this.firstHalfExercises.push(this.exercises[index]);
                    } else {
                        this.secondHalfExercises.push(this.exercises[index]);
                    }
                }
            } catch (error) {
                console.error(
                    "Error fetching recommended workout data:",
                    error
                );
            }
        },
        closeModal() {
            const closeModal = true;
            const clearForm = true;
            this.workoutPlanName = "";
            this.selectedImage = [];
            this.selectedExercises = [];
            const closeModalData = {
                closeModal: closeModal,
                clearForm: clearForm,
            };
            eventBus.emit("closeModal", closeModalData);
        },
    },
};
</script>

<style scoped>
@import "../stylesheet.css";
.buttons-add-new-workout {
    display: flex;
    justify-content: center;
    margin-top: 2vh;
}
.exercises {
    display: flex;
    margin-top: 2vh;
}
.exercises-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.modal-outer {
    position: fixed;
    top: 5%;
    left: 25%;
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1c1c1c;
    border: 2px solid white;
    z-index: 9999;
}

.modal-inner {
    position: relative;
    width: 90%;
    height: 85%;
    padding: 20px;
    overflow: auto;
    scrollbar-width: 0;
}

.modal-content {
    border: none;
    background-color: rgba(21, 21, 21, 0);
}

.exit-button-modal {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 27px;
    scale: 1.7;
    color: #fff;
    cursor: pointer;
    z-index: 9999;
}
.user-profile-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
