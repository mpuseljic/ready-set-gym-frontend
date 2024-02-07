<template>
  <div class="main">
    <div class="header" style="padding-left: 15px">
      <router-link to="/" class="btn-dark" style="width: 100px">
        <span class="btn-dark material-symbols-outlined"> arrow_back_ios </span>
      </router-link>
    </div>
    <h2 style="color: white; text-align: center">Log in to your account</h2>
    <div class="input-login">
      <h3 style="color: white">E-mail</h3>
      <input
        type="email"
        v-model="email"
        class="form-control input-field"
        style="background-color: #d29433"
      />
      <h3 style="color: white">Password</h3>
      <input
        type="password"
        v-model="password"
        class="form-control input-field"
        style="background-color: #d29433"
      />
      <div class="submit">
        <button
          type="button"
          class="btn btn-success"
          :style="btnstyleGreen"
          @click="loginUser"
        >
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span v-else>Login</span>
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          :style="btnstyleGray"
          @click="cancelLogin"
        >
          Cancel
        </button>
      </div>
      <div v-if="loginError" class="alert alert-danger" role="alert">
        {{ loginError }}
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { useLoginStore } from "@/stores/loginStore";

export default {
  name: "LogIn",
  data() {
    return {
      btnstyleGreen: {
        borderRadius: "20px",
        width: "300px",
      },
      btnstyleGray: {
        borderRadius: "20px",
        width: "300px",
        marginTop: "10px",
      },
      email: "",
      password: "",
      loading: false,
      loginError: null,
    };
  },
  setup() {
    const loginStore = useLoginStore();
    return { loginStore };
  },
  methods: {
    async loginUser() {
      try {
        this.loading = true;

        console.log("Login Data:", {
          email: this.email,
          password: this.password,
        });
        const res = await this.loginStore.fetchUserData(
          this.email,
          this.password
        );
        console.log(res);
        // const response = await axios.post(
        //     "http://localhost:3000/auth",
        //     {
        //         email: this.email,
        //         password: this.password,
        //     }
        // );

        // const token = response.data.token;

        // localStorage.setItem("token", token);

        this.$router.push("/home");
      } catch (error) {
        console.error("Login failed: ", error.response.data.error);
        this.loginError = "Incorrect email or password. Please try again.";
      } finally {
        this.loading = false;
      }
    },
    cancelLogin() {
      (this.email = ""), (this.password = ""), (this.loginError = null);
    },
  },
};
</script>
<style scoped>
@import "../stylesheet.css";

.input-login {
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

/* .btn-dark {
	background-color: black;
	border: none;
	margin: 20px 0 0 0 !important;
	padding: 0 !important;
}
.btn-dark:hover {
	background-color: black;
} */
.header {
  margin: 0;
}
</style>
