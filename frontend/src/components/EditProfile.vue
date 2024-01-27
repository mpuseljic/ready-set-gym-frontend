<template>
  <div class="main">
    <div class="header" :style="{ 'padding-left': '15px' }">
      <router-link to="/profile" class="btn-dark" style="width: 100px">
        <span class="btn-dark material-symbols-outlined"> arrow_back_ios </span>
      </router-link>
    </div>
    <h2 :style="{ color: 'white', 'text-align': 'center' }">Edit Profile</h2>

    <div class="input-signup">
      <h3 class="naziv">First name</h3>
      <input
        type="text"
        v-model="editedUser.firstName"
        class="input-field"
        required
      />
      <h3 class="naziv">Last name</h3>
      <input
        type="text"
        v-model="editedUser.lastName"
        class="input-field"
        required
      />
      <h3 class="naziv">New Password</h3>
      <input
        type="password"
        v-model="editedUser.password"
        class="input-field"
      />

      <!-- Dodaj novi input za odabir slike -->
      <h3 class="naziv">Profile Picture</h3>
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        class="input-field"
      />

      <div class="submit">
        <button
          type="button"
          class="btn btn-success"
          :style="btnStyleGreen"
          @click="saveChanges"
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
  name: "EditProfile",
  data() {
    return {
      editedUser: {
        firstName: "",
        lastName: "",
        password: "",
        profilePicture: null, // Dodaj novi property za sliku profila
      },
      btnStyleGreen: {
        borderRadius: "20px",
        width: "300px",
        marginTop: "10px",
        border: "none",
      },
    };
  },
  methods: {
    async saveChanges() {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        // Kreiraj FormData objekt za slanje podataka
        const formData = new FormData();
        formData.append("firstName", this.editedUser.firstName);
        formData.append("lastName", this.editedUser.lastName);
        formData.append("password", this.editedUser.password);
        formData.append("profilePicture", this.editedUser.profilePicture); // Dodaj sliku profila

        await axios.patch(
          `http://localhost:3000/users/profile/${userId}`,
          formData, // Pošalji FormData objekt umjesto plain objecta
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data", // Postavi content type na multipart/form-data
            },
          }
        );
        this.$router.push({ name: "profile" });
      } catch (error) {
        console.error(error.response.data);
      }
    },
    onFileChange(event) {
      // Postavi odabranu sliku u editedUser objekt
      this.editedUser.profilePicture = event.target.files[0];
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
