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
        <div class="header" style="padding-left: 15px">
            <router-link to="/" class="btn-dark" style="width: 100px">
                <span class="btn-dark material-symbols-outlined">
                    arrow_back_ios
                </span>
            </router-link>
        </div>
        <div class="naslov">
            <h1 :style="{ color: '#D29433' }">My progress</h1>
        </div>
        <div class="row align-items-center">
            <div class="col-md-auto" style="width: 500px">
                <label
                    for="datePicker"
                    class="form-label"
                    style="margin-left: 10%; margin-right: 10%"
                    >Select a Date:</label
                >
                <input
                    id="datePicker"
                    type="date"
                    v-model="value"
                    class="form-control"
                    style="
                        max-width: 200px;
                        margin-left: 10%;
                        margin-right: 10%;
                    "
                />
            </div>
        </div>
        <div class="diary" style="margin-left: 10%; margin-right: 10%">
            <label
                for="diaryEntry"
                class="form-label"
                style="margin-left: 10%; margin-right: 10%"
                >Diary Entry:</label
            >
            <textarea
                id="diaryEntry"
                v-model="diaryContent"
                class="form-control"
                rows="4"
                placeholder="Write your thoughts..."
                style="
                    display: block;
                    box-sizing: border-box;
                    height: 100px;
                    width: 1000px;
                    margin-left: 10%;
                    margin-right: 10%;
                "
            ></textarea>
            <div class="mb-3" style="margin-left: 10%; margin-right: 10%">
                <button @click="clearForm" class="btn btn-danger me-2">
                    Clear
                </button>
                <button @click="saveEntry" class="btn btn-success">Save</button>
            </div>
        </div>
        <div class="weight-tracker">
            <h2 class="naslov" style="margin-top: 50px">Weight Tracking</h2>
            <div class="enter-weight">
                <label
                    for="weightInput"
                    class="form-label"
                    style="margin-top: 20px"
                    >Enter Weight (kg):</label
                >
                <input
                    id="weightInput"
                    type="number"
                    v-model="currentWeight"
                    class="form-control"
                />
                <button
                    @click="recordWeight"
                    class="btn btn-primary"
                    style="width: auto"
                >
                    Record Weight
                </button>
            </div>
        </div>
        <div class="weight-progress">
            <h2 class="naslov" style="margin-top: 70px">Weight Progress</h2>
            <div>
                <canvas
                    id="myChart"
                    width="4000"
                    height="700"
                    style="
                        display: block;
                        box-sizing: border-box;
                        height: 700px;
                        width: 1000px;
                        margin-left: 10%;
                        margin-right: 10%;
                    "
                ></canvas>
            </div>
        </div>
        <!-- <nav-bar class="navbar" /> -->
    </div>
</template>
<script>
/* eslint-disable */
import Chart from "chart.js/auto";
// import NavBar from "./NavBar.vue";

export default {
    name: "DiaryEntry",
    components: {
        // NavBar,
    },
    data() {
        return {
            value: "",
            diaryContent: "",
            currentWeight: "",
        };
    },
    methods: {
        clearForm() {
            this.value = "";
            this.diaryContent = "";
        },
        saveEntry() {
            console.log("Date: ", this.value);
            console.log("Diary Entry: ", this.diaryContent);

            this.clearForm();
        },

        recordWeight() {
            console.log("Save weight: " + this.currentWeight);
        },
    },
    mounted() {
        const ctx = document.getElementById("myChart");

        const monthLabels = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
        ];

        new Chart(ctx, {
            type: "line",
            data: {
                labels: monthLabels,
                datasets: [
                    {
                        label: "Weight Progress",
                        data: [70, 65, 50, 75, 72, 63],
                        borderWidth: 5,
                        backgroundColor: "black",
                        borderColor: "#d29433",
                        tension: 0.2,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    },
};
</script>

<style>
@import "../stylesheet.css";
.main {
    padding-bottom: 100px;
}
.naslov {
    text-align: center;
}
.btn {
    border-radius: 10px;
    width: 100px;
}
.form-label {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: medium;
    color: aliceblue;
}

.form-control {
    background-color: #f8f8ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
}

.align-items-center {
    margin: auto;
    padding: 20px;
    margin-top: 25px;
}

.diary {
    margin-left: 50px;
    margin-right: 50px;
}

.enter-weight {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
}

#weightInput {
    width: 50%;
    height: 70px;
    border-radius: 100px;
    border: solid 10px #d29433;
}

#myChart {
    color: black;
    background-color: bisque;

    z-index: 1;
}

.navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
}
</style>
