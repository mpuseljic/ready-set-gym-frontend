<template>
    <div class="heading">
        <img class="heading-img" src="@/assets/logorsg.jpg" alt="" />
        <button
            class="logout-button"
            style="background-color: black; border: none"
        >
            <span class="material-symbols-outlined logout" @click="logout">
                power_settings_new
            </span>
        </button>
    </div>
    <div
        class="main"
        :style="{
            'background-color': 'black',
            height: '200%',
        }"
    >
        <div class="my-profile">
            <h1 style="color: white">My Profile</h1>
        </div>

        <div class="user-profile-img">
            <span
                class="material-symbols-outlined profile-pic"
                :style="{ backgroundImage: 'url(' + userImage + ')' }"
                @click="openModalImage"
            >
            </span>
            <h2 style="margin-top: 20px" @click="openModal">
                {{ userFullName }}
            </h2>
        </div>
        <EditProfileModal
            :activeModal="modalOpenEditUser"
            @closeModal="closeModal"
        />
        <EditProfilePictureModal
            :active-modal="modalOpenEditPicture"
            @closeModal="closeModal"
        />
        <div class="my-workout">
            <h3 style="color: white">Choose what you want</h3>
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
                <v-carousel-item cover @click="openRecommendedModal">
                    <img
                        class="carousel-image"
                        src="../assets/profile-one.jpg"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>RECOMMENDED WORKOUTS</h3>
                    </div>
                </v-carousel-item>

                <v-carousel-item cover>
                    <img
                        class="carousel-image"
                        src="../assets/profile-second.jpg"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>MY WORKOUTS</h3>
                    </div>
                </v-carousel-item>

                <v-carousel-item cover>
                    <img class="carousel-image" src="../assets/food.avif" />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>FOOD</h3>
                    </div>
                </v-carousel-item>
                <v-carousel-item cover @click="openBMIcalculatorModal">
                    <img class="carousel-image" src="../assets/bmi.jpg" />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>CALCULATE BMI</h3>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-container>

        <div class="my-diaries">
            <h2 class="my-diaries-text">Read my diaries</h2>
        </div>
        <div
            v-for="(diary, index) in diaries"
            :key="index"
            class="card-container"
        >
            <div class="card">
                <div class="card-heading">
                    <h5 class="class-heading-text">{{ diary.date }}</h5>
                    <button @click="deleteDiaryEntry(index)">Delete</button>
                </div>
                <div class="card-content">
                    <p class="card-text">{{ diary.content }}</p>
                </div>
            </div>
        </div>
        <RecommendedModal
            :activeModal="recommendedModalOpen"
            @closeModal="closeRecommendedModal"
        />

        <BMICalculatorModal
            :activeModal="BMICalculatorModalOpen"
            @closeModal="closeBMIcalculatorModal"
        />
    </div>
</template>
<script>
/* eslint-disable */

import axios from "axios";
import EditProfileModal from "@/modals/editProfileModal.vue";
import EditProfilePictureModal from "@/modals/editProfilePictureModal.vue";
import RecommendedModal from "@/modals/recommendedModal.vue";
import BMICalculatorModal from "@/modals/BMICalculateModal.vue";
import eventBus from "@/eventBus";

export default {
    name: "ProfileUser",
    components: {
        EditProfileModal,
        RecommendedModal,
        BMICalculatorModal,
        EditProfilePictureModal,
    },
    data() {
        return {
            userFullName: "",
            modalOpenEditUser: false,
            modalOpenEditPicture: false,
            recommendedModalOpen: false,
            diaries: [],
            BMICalculatorModalOpen: false,
            userImage: "",
        };
    },
    created() {
        this.getUserProfile();
        this.getUserDiary();
        this.fetchNewUserData();
    },
    methods: {
        async getUserProfile() {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    "http://localhost:3000/users/profile",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                this.userFullName = `${response.data.firstName} ${response.data.lastName}`;
                this.userImage = response.data.imagePath;
            } catch (error) {
                console.error(error.response.data);
            }
        },

        async logout() {
            localStorage.removeItem("token");
            this.$router.push({ name: "login" });
        },
        fetchNewUserData() {
            eventBus.on("newUserData", async () => {
                console.log("new data event");
                await this.getUserProfile();
            });
        },
        editProfile() {
            this.$router.push({ name: "EditProfile" });
        },
        openModal() {
            this.modalOpenEditUser = true;
        },
        openModalImage() {
            this.modalOpenEditPicture = true;
        },
        closeModal() {
            if (this.modalOpenEditUser) {
                this.modalOpenEditUser = false;
            } else {
                this.modalOpenEditPicture = false;
            }
        },
        openRecommendedModal() {
            this.recommendedModalOpen = true;
        },
        closeRecommendedModal() {
            this.recommendedModalOpen = false;
        },
        openBMIcalculatorModal() {
            this.BMICalculatorModalOpen = true;
        },
        closeBMIcalculatorModal() {
            this.BMICalculatorModalOpen = false;
        },
        async getUserDiary() {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    "http://localhost:3000/users/profile-diary",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                this.diaries = response.data;
            } catch (error) {
                console.error(error.response.data);
            }
        },
        async deleteDiaryEntry(index) {
            try {
                const token = localStorage.getItem("token");
                const diaryId = this.diaries[index]._id;
                await axios.delete(
                    `http://localhost:3000/diary/record/${diaryId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                this.diaries.splice(index, 1);
            } catch (error) {
                console.error(error.response.data);
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
}
.logout-button {
    border-radius: 100%;
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
.logout {
    color: red;
    scale: 1.5;
}
.container-fluid {
    height: calc(100vh - 7vh - 6vh);
    width: 100vw;
    background-color: black;
    margin: 0;
    padding: 0;
}
.page-name,
.my-diaries,
.my-profile {
    width: 100%;
    padding-left: 2.25vw;
    padding-top: 1vw;
}
.page-heading {
    color: white;
    /* font-weight: bold; */
}
.profile-pic {
    font-size: 200px;
}
.user-profile-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.my-diaries-text {
    color: #d29433;
}
.card-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card {
    width: 25vw;
    height: 15vh;
    background-color: white;
    padding: 1vw 2vw 1vw 2vw;
}
.card-heading {
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.delete {
    color: red;
}
.class-heading-text {
    display: inline;
}
.card-text {
    font-size: 0.8rem;
    color: black;
}
.card-content {
    width: 100%;
    margin-top: 1vw;
}
.navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
}

.profile-pic {
    display: inline-block;
    width: 200px; /* Adjust the size as needed */
    height: 200px; /* Adjust the size as needed */
    background-size: cover;
    background-position: center;
    border-radius: 50%; /* Create a circular profile picture */
}
</style>
