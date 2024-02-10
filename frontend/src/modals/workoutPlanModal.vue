<template>
    <transition name="modal-animation">
        <div v-show="activeModal" class="modal-outer">
            <span
                class="material-symbols-outlined exit-button-modal"
                @click="closeModal()"
                >close</span
            >
            <div class="modal-inner">
                <div class="modal-content" v-if="workout">
                    <div class="image-container">
                        <img
                            :src="workout.titleImagePath"
                            alt="Workout Image"
                            style="
                                width: 100%;
                                max-height: 400px;
                                object-fit: cover;
                            "
                        />
                    </div>
                    <h1 style="color: #d29433">{{ workout.planName }}</h1>
                    <div v-if="workout.exercisesArray">
                        <div
                            v-for="(exercise, index) in workout.exercisesArray"
                            :key="index"
                            class="exercise-container"
                        >
                            <img :src="exercise.img_url" alt="Exercise Image" />
                            <h2>{{ exercise.title }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import eventBus from "@/eventBus";

export default {
    name: "workoutPlanModal",
    data() {
        return { workout: null };
    },
    props: {
        activeModal: {
            type: Boolean,
            required: true,
        },
        workoutData: {
            type: Object,
            default: null,
        },
    },
    components: {},
    created() {
        eventBus.on("workoutPlanData", (data) => {
            this.workout = data;
            console.log(this.workout);
        });
    },
    methods: {
        closeModal() {
            const closeModal = true;
            const clearForm = true;

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
    overflow-y: auto;
}

.modal-inner {
    position: relative;
    width: 90%;
    padding: 50px;
    max-height: 100%;
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
}
.modal-content {
    display: flex;
    align-items: center;
    max-height: 100%;
}

.modal-content h1 {
    text-align: center;
    margin-bottom: 20px;
}

.modal-content img {
    max-width: 100%;
    height: auto;
    margin-right: 20px;
    margin-bottom: 20px;
}
.exercise-container {
    align-items: center;
    margin-bottom: 20px;
    display: flex;
}

.exercise-container img {
    max-width: 200px;
    height: auto;
    margin-right: 20px;
}

.exercise-container h2 {
    text-align: center;
    margin: 0;
}
</style>
