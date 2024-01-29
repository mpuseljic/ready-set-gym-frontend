<template>
  <div id="generalCarousel" class="carousel slide">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <span
          v-for="(item, index) in carouselItems"
          :key="index"
          @click="changeSlide(index)"
          :class="{
            'navbar-icons material-symbols-outlined': true,
            active: activeSlide === index,
          }"
          data-bs-target="#generalCarousel"
          :data-bs-slide-to="index"
          aria-current="true"
        >
          {{ item.name }}
        </span>
      </div>
    </nav>

    <div class="carousel-inner">
      <div :class="{ 'carousel-item': true, active: activeSlide === 0 }">
        <home-page />
      </div>
      <div :class="{ 'carousel-item': true, active: activeSlide === 1 }">
        <calculate-bmi-component />
      </div>
      <div :class="{ 'carousel-item': true, active: activeSlide === 2 }">
        <diary />
      </div>
      <div :class="{ 'carousel-item': true, active: activeSlide === 3 }">
        <profile />
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import HomePage from "@/components/HomePage.vue";
import Profile from "@/components/Profile.vue";
import Diary from "@/components/Diary.vue";
import calculateBmiComponent from "@/components/CalculateBMI.vue";

export default {
  name: "generalView",
  data() {
    return {
      activeSlide: 0,
      carouselItems: [
        { name: "home" },
        { name: "insert_chart" },
        { name: "description" },
        { name: "person" },
      ],
    };
  },
  components: {
    HomePage,
    Profile,
    Diary,
    calculateBmiComponent,
  },
  methods: {
    changeSlide(index) {
      this.activeSlide = index;
    },
  },
};
</script>
<style>
.navbar {
  height: 5.5vh;
}
.navbar-icons {
  scale: 1.3;
  cursor: pointer;
}
.active {
  color: orange;
}
.carousel-inner {
  width: 100vw;
  height: 100vh;
  min-height: calc(100vh - 5.5vh);
}
.carousel-item {
  width: 100vw;
  height: 100vh;
  height: calc(100vh - 5.5vh);
  overflow-y: auto;
  background-color: #000;
}
</style>
