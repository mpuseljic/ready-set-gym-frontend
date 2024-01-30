<template>
  <transition name="modal-animation">
    <div v-show="activeModal" class="modal-outer" @click="closeModalOutside">
      <span
        class="material-symbols-outlined exit-button-modal"
        @click="closeModal"
      >
        close
      </span>
      <div class="modal-inner">
        <h1 :style="{ color: '#d29433', 'text-align': 'center' }">
          RECOMMENDED WORKOUTS
        </h1>
        <div class="recommended-workouts">
          <div class="workout">
            <img
              :src="currentWorkout.imageUrl"
              alt="Workout Image"
              class="workout-image"
              @click="openModal(currentWorkout.type)"
            />
            <h3>{{ currentWorkout.title }}</h3>
            <p>{{ currentWorkout.description }}</p>
          </div>
        </div>
        <div class="navigation-buttons">
          <button @click="previousWorkout">Previous</button>
          <button @click="nextWorkout">Next</button>
        </div>
      </div>
      <exercise-modal-body
        :active-modal="activeModal2"
        :workoutData="activeWorkoutData"
      />
      <div class="modal-overlay" v-if="activeModal2" @click="closeModal2"></div>
    </div>
  </transition>
</template>

<script>
import exerciseModalBody from "@/modals/exerciseModalBody.vue";
import axios from "axios";
export default {
  name: "RecommendedWorkoutsModal",
  props: {
    activeModal: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    exerciseModalBody,
  },
  data() {
    return {
      recommendedWorkouts: [
        {
          type: "crossFit",
          title: "Crossfit",
          description:
            "Whether you’ve trained your whole life or are just starting your fitness journey, CrossFit offers a results-based, community-driven approach that helps you build fitness and improve your health—over your lifetime.",
          imageUrl: require("@/assets/crossfit.jpg"),
        },
        {
          type: "lowerBody",
          title: "Lower Body Attack",
          description:
            "Use these timeless leg exercises to gain mass and strength on your lower body. A varied combination of reps and sets will help to keep your routine fresh.",
          imageUrl: require("@/assets/lower-body.jpg"),
        },
        {
          type: "upperBody",
          title: "Upper Body Attack",
          description:
            "Time to get the arms, shoulders and chest into it! You will need some dumbbells to get this one done.",
          imageUrl: require("@/assets/upper-body.jpg"),
        },
      ],
      currentWorkoutIndex: 0,
      activeModal2: false,
      clickedInsideModal: false,
      activeWorkoutData: null,
    };
  },
  computed: {
    currentWorkout() {
      return this.recommendedWorkouts[this.currentWorkoutIndex];
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
      this.activeModal2 = false;
    },
    closeRecommendedModal() {
      this.$emit("closeModal");
    },
    closeExerciseModal() {
      this.activeModal2 = false;
    },

    nextWorkout() {
      this.currentWorkoutIndex =
        (this.currentWorkoutIndex + 1) % this.recommendedWorkouts.length;
      this.activeModal2 = false;
    },
    previousWorkout() {
      this.currentWorkoutIndex =
        (this.currentWorkoutIndex - 1 + this.recommendedWorkouts.length) %
        this.recommendedWorkouts.length;
      this.activeModal2 = false;
    },
    closeModalOutside(event) {
      if (event.target.classList.contains("modal-outer")) {
        this.closeModal();
      }
    },
    async openModal(workoutType) {
      this.clickedInsideModal = false;
      this.activeModal2 = true;

      try {
        const response = await axios.get(
          `http://localhost:3000/recommendedworkouts/${workoutType}`
        );
        this.activeWorkoutData = response.data;
      } catch (error) {
        console.error("Error fetching recommended workout data:", error);
      }
    },

    closeModal2() {
      this.activeModal2 = false;
    },
  },
};
</script>

<style scoped>
.modal-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-inner h1 {
  margin-bottom: 30px;
}

.recommended-workouts {
  display: flex;
  justify-content: center;
  align-items: center;
}

.workout img {
  width: auto;
  height: 50vh;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.navigation-buttons button {
  padding: 10px 20px;
  background-color: #d29433;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.workout h3 {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
