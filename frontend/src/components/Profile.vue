<template>
  <div class="heading">
    <img class="heading-img" src="@/assets/logorsg.jpg" alt="" />
    <button class="logout-button" style="background-color: black; border: none">
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

    <div class="user-profile-img" @click="editProfile">
      <span
        class="material-symbols-outlined profile-pic"
        :style="{ backgroundImage: 'url(' + profilePicture + ')' }"
      >
      </span>
      <h2 style="margin-top: 20px">{{ userFullName }}</h2>
    </div>
    <div class="my-workout">
      <h3 style="color: white">Choose what you want</h3>
    </div>
    <div id="carouselExampleCaptionsProfile" class="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptionsProfile"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptionsProfile"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptionsProfile"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptionsProfile"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/profile-one.jpg"
            class="d-block"
            style="height: 60vh; width: auto"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>RECOMMENDED WORKOUTS</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/profile-second.jpg"
            class="d-block"
            style="height: 60vh; width: auto"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>MY WORKOUTS</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/food.avif"
            class="d-block"
            style="height: 60vh; width: auto"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>FOOD</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/bmi.jpg"
            class="d-block"
            style="height: 60vh; width: auto"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>CALCULATE BMI</h3>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptionsProfile"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptionsProfile"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="my-diaries">
      <h2 class="my-diaries-text">Read my diaries</h2>
    </div>

    <div class="card-container">
      <div class="card">
        <div class="card-heading">
          <h5 class="class-heading-text">TEST</h5>
          <span class="material-symbols-outlined delete"> delete </span>
        </div>
        <div class="card-content">
          <p class="card-text">Hello Mirna</p>
        </div>
      </div>
    </div>
    <nav-bar class="navbar" />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: "ProfileUser",
  components: {
    NavBar,
  },
  data() {
    return {
      profilePicture: require("../assets/profile.jpg"),
      userFullName: "",
    };
  },
  created() {
    this.getUserProfile();
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
      } catch (error) {
        console.error(error.response.data);
      }
    },

    async logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
    editProfile() {
      this.$router.push({ name: "EditProfile" });
    },
  },
};
</script>
<style>
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
