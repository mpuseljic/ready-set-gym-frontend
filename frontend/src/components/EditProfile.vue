<template>
  <div class="main">
    <div class="header" :style="{ 'padding-left': '15px' }">
      <router-link to="/home" class="btn-dark" style="width: 100px">
        <span class="btn-dark material-symbols-outlined"> arrow_back_ios </span>
      </router-link>
    </div>
    <h2 :style="{ color: 'white', 'text-align': 'center' }">Edit Profile</h2>

    <div class="input-signup">
      <h3 class="naziv">First Name</h3>
      <input type="text" v-model="firstName" class="input-field" required />
      <h3 class="naziv">Last Name</h3>
      <input type="text" v-model="lastName" class="input-field" required />

      <h3 class="naziv">Old Password</h3>
      <input
        type="password"
        v-model="oldPassword"
        class="input-field"
        required
      />
      <h3 class="naziv">New Password</h3>
      <input
        type="password"
        v-model="newPassword"
        class="input-field"
        required
      />

      <div class="submit">
        <button
          type="button"
          class="btn btn-success"
          :style="btnStyleGreen"
          @click="changePassword"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ChangePassword",
  data() {
    return {
      firstName: "",
      lastName: "",
      oldPassword: "",
      newPassword: "",
      btnStyleGreen: {
        borderRadius: "20px",
        width: "300px",
        marginTop: "10px",
        border: "none",
      },
    };
  },
  methods: {
    async changePassword() {
      try {
        const token = localStorage.getItem("token");
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          old_password: this.oldPassword,
          new_password: this.newPassword,
        };
        await axios.patch(`http://localhost:3000/user`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        this.$router.push({ name: "profile" });
      } catch (error) {
        console.error(error.response);
      }
    },
  },
};
</script>

<style>
@import "../stylesheet.css";
.main {
  background-color: black;
  height: 100vh;
}

.naziv {
  color: white;
}

.input-signup {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.input-field {
  background-color: #d29433;
  width: 300px;
  min-width: 100px;
  padding: 8px 16px 8px 16px;
  border-radius: 20px;
  text-align: center;
  margin: 10px;
}

.submit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
</style>
