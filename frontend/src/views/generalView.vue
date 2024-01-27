<template>
    <div id="generalCarousel" class="carousel slide">
        <div class="carousel-indicators">
            <button
                type="button"
                data-bs-target="#generalCarousel"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
            ></button>

            <button
                type="button"
                data-bs-target="#generalCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
            ></button>

            <button
                type="button"
                data-bs-target="#generalCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
            ></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <home-page />
            </div>
            <div class="carousel-item">
                <profile />
            </div>
            <div class="carousel-item">
                <diary />
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
    data: () => ({}),
    components: {
        HomePage,
        Profile,
        Diary,
    },
};
</script>
<style>
.carousel-inner {
    width: 100vw;
    height: 100vh;
}
.carousel-item {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    background-color: gray;
}
</style>
