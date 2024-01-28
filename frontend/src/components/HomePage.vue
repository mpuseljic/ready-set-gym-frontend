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

    <!--search-->
    <div class="container mt-3">
      <input
        class="form-control"
        placeholder="Search anything..."
        style="background-color: #9a9494; color: black"
      />
    </div>

    <!--recommended workouts-->
    <div class="recommended-workout">
      <h1 style="color: white">RECOMMENDED WORKOUTS</h1>
    </div>
    <!-- <div id="carouselExampleCaptions" class="carousel">
            <div class="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img
                        src="../assets/crossfit.jpg"
                        class="d-block"
                        style="height: 60vh; width: auto"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>CrossFit</h3>
                        <p>
                            Whether you’ve trained your whole life or are just
                            starting your fitness journey, CrossFit offers a
                            results-based, community-driven approach that helps
                            you build fitness and improve your health—over your
                            lifetime.
                        </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img
                        src="../assets/lower-body.jpg"
                        class="d-block"
                        style="height: 60vh; width: auto"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Lower Body Attack</h3>
                        <p>
                            Use these timeless leg exercises to gain mass and
                            strength on your lower body. A varied combination of
                            reps and sets will help to keep your routine fresh.
                        </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img
                        src="../assets/upper-body.jpg"
                        class="d-block"
                        style="height: 60vh; width: auto"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Upper Body Attack</h3>
                        <p>
                            Time to get the arms, shoulders and chest into it!
                            You will need some dumbbells to get this one done.
                        </p>
                    </div>
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> -->
    <v-container>
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
        <v-carousel-item cover @click="openModal('CROSSFIT')">
          <img class="carousel-image" src="../assets/crossfit.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h1>CROSSFIT</h1>
            <p>
              Whether you’ve trained your whole life or are just starting your
              fitness journey,<br />
              CrossFit offers a results-based, <br />community-driven approach
              that helps you build fitness <br />
              and improve your health—over your lifetime.
            </p>
          </div>
        </v-carousel-item>

        <v-carousel-item cover @click="openModal('LOWER-BODY')">
          <img class="carousel-image" src="../assets/lower-body.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h1>LOWER BODY ATTACK</h1>
            <p>
              Use these timeless leg exercises to gain mass and strength on your
              lower body. A varied combination of reps and sets will help to
              keep your routine fresh.
            </p>
          </div>
        </v-carousel-item>

        <v-carousel-item cover @click="openModal('UPPER-BODY')">
          <img class="carousel-image" src="../assets/upper-body.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h1>UPPER BODY ATTACK</h1>
            <p>
              Time to get the arms, shoulders and chest into it! <br />
              You will need some dumbbells to get this one done.
            </p>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <!--my workouts-->
    <div class="my-workout">
      <h1 style="color: white">MY WORKOUTS</h1>
    </div>
    <v-container>
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
        <v-carousel-item cover>
          <img class="carousel-image" src="../assets/my-workout-first.jpg" />
        </v-carousel-item>

        <v-carousel-item cover>
          <img class="carousel-image" src="../assets/my-workout-second.jpg" />
        </v-carousel-item>

        <v-carousel-item cover>
          <img class="carousel-image" src="../assets/my-workout-third.jpg" />
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <!-- <div id="carouselExampleCaptionsMyWorkouts" class="carousel">
            <div class="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptionsMyWorkouts"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptionsMyWorkouts"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptionsMyWorkouts"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img
                        src="../assets/my-workout-first.jpg"
                        class="d-block"
                        style="height: 60vh; width: auto"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>MY WORKOUT FIRST</h3>
                    </div>
                </div>
                <div class="carousel-item">
                    <img
                        src="../assets/my-workout-second.jpg"
                        class="d-block"
                        style="height: 60vh; width: auto"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>MY WORKOUT SECOND</h3>
                    </div>
                </div>
                <div class="carousel-item">
                    <img
                        src="../assets/my-workout-third.jpg"
                        class="d-block"
                        style="height: 60vh; width: auto"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>MY WORKOUT THIRD</h3>
                    </div>
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptionsMyWorkouts"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptionsMyWorkouts"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> -->
    <!--exercise list-->
    <div class="exercise-list">
      <h1 style="color: white">EXERCISE LIST</h1>
    </div>

    <!-- <nav-bar class="navbar" /> -->
    <exercise-modal-body :active-modal="activeModal" />
    <div class="modal-overlay" v-if="activeModal" @click="closeModal"></div>
  </div>
</template>
<script>
/* eslint-disable */
import eventBus from "@/eventBus";
import exerciseModalBody from "@/modals/exerciseModalBody.vue";
// import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomePage",
  data() {
    return {
      activeModal: false,
      clickedInsideModal: false,
    };
  },
  components: {
    // NavBar,
    exerciseModalBody,
  },
  created() {
    eventBus.on("closeModal", (closeModalData) => {
      if (closeModalData.closeModal) this.activeModal = false;
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
  },
  methods: {
    eventBusTest() {
      let id = 4;
      eventBus.emit("test", id);
    },
    toggleModal() {
      this.activeModal = !this.activeModal;
    },
    openModal(workoutName) {
      this.clickedInsideModal = false;
      this.activeModal = true;
      eventBus.emit("openModal", { workoutName });
    },
    closeModal() {
      if (!this.clickedInsideModal) {
        this.activeModal = false;
      }
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
}
.carousel-inner {
  height: 60vh;
  display: grid;
  place-content: center;
}
.carousel-item {
  height: 60vh;
}

.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
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
</style>
