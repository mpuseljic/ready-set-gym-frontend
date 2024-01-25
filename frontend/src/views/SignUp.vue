<template>
  <div class="main">
    <div class="header" :style="{ 'padding-left': '15px' }">
      <router-link to="/" class="btn-dark" style="width: 100px">
        <span class="btn-dark material-symbols-outlined"> arrow_back_ios </span>
      </router-link>
    </div>
    <h2 :style="{ color: 'white', 'text-align': 'center' }">
      Create your account
    </h2>

    <div class="input-signup">
      <h3 class="naziv">First name</h3>
      <input type="first-name" v-model="userName" class="input-field" />
      <h3 class="naziv">Last name</h3>
      <input type="last-name" v-model="surname" class="input-field" />
      <h3 class="naziv">E-mail</h3>
      <input type="email" v-model="email" class="input-field" />
      <h3 class="naziv">Password</h3>
      <input type="password" v-model="password" class="input-field" />

      <div class="submit">
        <router-link to="/home">
          <!--samo za prototip-->
          <button
            type="button"
            class="btn btn-success"
            :style="btnStyleGreen"
            @click="registerUser"
          >
            Create account
          </button>
        </router-link>
        <!--samo za prototip-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      btnStyleGreen: {
        borderRadius: "20px",
        width: "300px",
        marginTop: "10px",
        border: "none",
      },
    };
  },

  methods: {
    async registerUser() {
      try {
        const response = await axios.post("http://localhost:3000/users", {
          firstName: this.userName,
          lastName: this.surname,
          email: this.email,
          password: this.password,
        });
        console.log(response.data);

        this.$router.push("/home");
      } catch (error) {
        console.error(error.response.data);
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
