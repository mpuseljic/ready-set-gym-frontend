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
                <recipes-component />
            </div>
            <div :class="{ 'carousel-item': true, active: activeSlide === 3 }">
                <diary />
            </div>
            <div :class="{ 'carousel-item': true, active: activeSlide === 4 }">
                <profile />
            </div>
        </div>
    </div>

    <div
        v-if="showToast"
        class="toast-container position-fixed bottom-0 start-50 translate-middle-x"
    >
        <div
            id="toast"
            class="custom-toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div class="toast-body">{{ successMessage }}</div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import HomePage from "@/components/HomePage.vue";
import Profile from "@/components/Profile.vue";
import Diary from "@/components/Diary.vue";
import calculateBmiComponent from "@/components/CalculateBMI.vue";
import recipesComponent from "@/components/recipesComponent.vue";
import eventBus from "@/eventBus";

export default {
    name: "generalView",
    data() {
        return {
            successMessage: "",
            activeSlide: 0,
            carouselItems: [
                { name: "home" },
                { name: "insert_chart" },
                { name: "restaurant" },
                { name: "description" },
                { name: "person" },
            ],
            showToast: false,
        };
    },
    components: {
        HomePage,
        Profile,
        Diary,
        calculateBmiComponent,
        recipesComponent,
    },
    created() {
        eventBus.on("success", (data) => {
            console.log("event main", data);
            this.successMessage = data;
            this.showToastSuccess();
            this.showToast = true;
            setTimeout(() => {
                this.showToast = false;
            }, 3000);
        });
    },
    methods: {
        showToastSuccess() {
            const toastSuccess = document.getElementById("toastSuccess");
            if (toastSuccess) {
                const toastBootstrap = new bootstrap.Toast(toastSuccess, {
                    autohide: true,
                    delay: 5000,
                });

                toastBootstrap.show();
            }
        },
        changeSlide(index) {
            this.activeSlide = index;
        },
    },
};
</script>
<style>
.custom-toast {
    background-color: orange;
    color: black;
    width: 450px;
    text-align: center;
    margin-bottom: 6vh;
    height: 70px;
}
.toast-body {
    font-size: 1.2rem;
}
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
