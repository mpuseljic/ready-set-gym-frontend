<template>
    <div class="heading">
        <img class="heading-img" src="@/assets/logorsg.jpg" alt="" />
    </div>
    <div
        class="main"
        :style="{
            'background-color': 'black',
            height: '200%',
        }"
    >
        <div class="header" style="padding-left: 15px"></div>

        <div class="header">
            <h1 style="color: #d29433">Let's crush it!</h1>
        </div>

        <div class="container mt-3">
            <input
                class="form-control"
                placeholder="Search exercises"
                style="background-color: #9a9494; color: black"
                v-model="searchText"
            />
        </div>
        <div class="recommended-workout" v-if="searchText === ''">
            <h1 style="color: white">RECOMMENDED WORKOUTS</h1>
        </div>
        <v-container v-if="searchText === ''">
            <v-carousel hide-delimiters>
                <template v-slot:prev="{ props }">
                    <v-btn @click="props.onClick" icon>
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                </template>
                <template v-slot:next="{ props }">
                    <v-btn class="custom-next-btn" @click="props.onClick" icon>
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </template>
                <v-carousel-item cover @click="openModal('crossFit')">
                    <img class="carousel-image" src="../assets/crossfit.jpg" />
                    <div class="carousel-caption d-none d-md-block">
                        <h1>CROSSFIT</h1>
                        <p>
                            Whether you’ve trained your whole life or are just
                            starting your fitness journey,<br />
                            CrossFit offers a results-based,
                            <br />community-driven approach that helps you build
                            fitness <br />
                            and improve your health—over your lifetime.
                        </p>
                    </div>
                </v-carousel-item>

                <v-carousel-item cover @click="openModal('lowerBody')">
                    <img
                        class="carousel-image"
                        src="../assets/lower-body.jpg"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h1>LOWER BODY ATTACK</h1>
                        <p>
                            Use these timeless leg exercises to gain mass and
                            strength on your lower body. A varied combination of
                            reps and sets will help to keep your routine fresh.
                        </p>
                    </div>
                </v-carousel-item>

                <v-carousel-item cover @click="openModal('upperBody')">
                    <img
                        class="carousel-image"
                        src="../assets/upper-body.jpg"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h1>UPPER BODY ATTACK</h1>
                        <p>
                            Time to get the arms, shoulders and chest into it!
                            <br />
                            You will need some dumbbells to get this one done.
                        </p>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-container>
        <div class="my-workout" v-if="searchText === ''">
            <span style="color: white; font-size: 2.5rem; font-weight: 500"
                >MY WORKOUTS</span
            >
            &nbsp;&nbsp;&nbsp;
            <span
                class="material-symbols-outlined"
                style="scale: 1.6"
                type="button"
                @click="openModal(), openModalEvent('add-new-workout-plan')"
            >
                add_box
            </span>
        </div>
        <v-container v-if="searchText === '' && userWorkouts.length !== 0">
            <v-carousel hide-delimiters>
                <template v-slot:prev="{ props }">
                    <v-btn @click="props.onClick" icon>
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                </template>
                <template v-slot:next="{ props }">
                    <v-btn class="custom-next-btn" @click="props.onClick" icon>
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </template>
                <v-carousel-item
                    cover
                    v-for="plan in userWorkouts"
                    :key="plan"
                    @click="openWorkoutModal(plan._id)"
                >
                    <img class="carousel-image" :src="plan.titleImagePath" />
                    <div class="carousel-caption d-none d-md-block">
                        <h1>{{ plan.planName }}</h1>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-container>
        <div class="exercise-list">
            <h1 style="color: white">EXERCISE LIST</h1>
            <div
                class="exercise-card"
                v-for="exercise in filterExercises()"
                :key="exercise._id"
            >
                <img
                    :src="exercise.img_url"
                    alt="Exercise Image"
                    class="exercise-image"
                />
                <div class="exercise-content">
                    <h2>{{ exercise.title }}</h2>
                </div>
            </div>
        </div>

        <!-- <exercise-modal-body :active-modal="activeModal" />
        <workoutPlanModal :active-modal="activeWorkoutPlanModal" /> -->
        <mainModal :active-modal="activeModal" />
        <!-- <div class="modal-overlay" v-if="activeModal" @click="closeModal"></div> -->
    </div>
</template>
<script>
/* eslint-disable */
import eventBus from "@/eventBus";
// import exerciseModalBody from "@/modals/exerciseModalBody.vue";
// import workoutPlanModal from "@/modals/workoutPlanModal.vue";
import mainModal from "@/views/modalBody.vue";

import axios from "axios";
export default {
    name: "HomePage",
    data() {
        return {
            activeNewPlanModal: false,
            activeModal: false,
            clickedInsideModal: false,
            exerciseList: [],
            searchText: "",
            activeWorkoutData: null,
            imageUrl: null,
            addNewPlanModal: false,
            userWorkouts: [],
            activeWorkoutPlanModal: false,
            activeWorkoutPlan: [],
        };
    },
    components: {
        // exerciseModalBody,
        // workoutPlanModal,
        mainModal,
    },
    async created() {
        console.log(this.userWorkouts);
        eventBus.on("closeModal", (closeModalData) => {
            if (closeModalData.closeModal) {
                this.activeModal = false;
                this.activeNewPlanModal = false;
            }
        });
        eventBus.on("openModal", (modalData) => {
            if (
                modalData.workoutName === "CROSSFIT" ||
                modalData.workoutName === "LOWER-BODY" ||
                modalData.workoutName === "UPPER-BODY"
            ) {
                this.activeModal = true;
            }
        });
        eventBus.on("newUserWorkoutPlan", async () => {
            await this.fetchUserWorkouts();
        });
        this.fetchExerciseList();
        await this.fetchUserWorkouts();
    },
    methods: {
        eventBusTest() {
            let id = 4;
            eventBus.emit("test", id);
        },
        openModalEvent(modalType) {
            const data = {
                modalType: modalType,
            };
            eventBus.emit("openModal", data);
        },
        toggleModal() {
            this.activeModal = !this.activeModal;
        },
        async fetchUserWorkouts() {
            const email = localStorage.getItem("userEmail");
            try {
                const response = await axios.get(
                    `http://localhost:3000/workout-plan/${email}`
                );
                this.userWorkouts = response.data;
                console.log(this.userWorkouts);
            } catch (error) {
                console.error("Error fetching user workout data:", error);
            }
        },
        async openModal(workoutType) {
            this.clickedInsideModal = false;
            this.activeModal = true;

            try {
                const response = await axios.get(
                    `http://localhost:3000/recommendedworkouts/${workoutType}`
                );
                this.activeWorkoutData = response.data;
            } catch (error) {
                console.error(
                    "Error fetching recommended workout data:",
                    error
                );
            }
        },
        openWorkoutModal(workoutId) {
            this.activeWorkoutPlan = this.userWorkouts.filter((x) => {
                return x._id === workoutId;
            });
            eventBus.emit("workoutPlanData", this.activeWorkoutPlan[0]);
            this.activeWorkoutPlanModal = true;
        },
        closeModal() {
            if (!this.clickedInsideModal) {
                if (this.activeModal) {
                    this.activeModal = false;
                } else if (this.activeNewPlanModal) {
                    this.activeNewPlanModal = false;
                } else {
                    this.activeWorkoutPlanModal = false;
                }
            }
        },

        async fetchExerciseList() {
            try {
                const response = await axios.get(
                    "http://localhost:3000/exercises"
                );
                this.exerciseList = response.data;
            } catch (error) {
                console.error("Error fetching exercise list:", error);
            }
        },

        filterExercises() {
            return this.exerciseList.filter((exercise) => {
                return exercise.title
                    .toLowerCase()
                    .includes(this.searchText.toLocaleLowerCase());
            });
        },
    },
};
</script>
<style scoped>
.mdi-chevron-right,
.mdi-chevron-left {
    color: black;
}
.carousel-image {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
    opacity: 0.7;
}
.heading {
    margin: 0;
    padding: 1vw 5vw 0 2vw;
    height: 7vh;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.heading-img {
    height: 100%;
    width: auto;
    object-fit: contain;
    overflow: hidden;
}

.header {
    padding-top: 5px;
    padding-left: 20px;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-control {
    border-radius: 50px;
}

.recommended-workout,
.my-workout,
.exercise-list {
    margin: 50px;
    margin-top: 70px;
}
.carousel-inner {
    height: 60vh;
    display: grid;
    place-content: center;
}
.carousel-item {
    height: 60vh;
}

.carousel-caption {
    color: #d29433;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.exercise-card {
    width: 80%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    margin-top: 30px;
}

.exercise-content {
    flex: 1;
}

.exercise-content h2 {
    margin: 0;
    text-align: center;
}

.exercise-image {
    max-width: 200px;
    height: auto;
    margin-right: 50px;
}
</style>
