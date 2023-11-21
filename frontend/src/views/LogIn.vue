<template>
  <div class="main">
    <div class="header" style="padding-left: 15px">
      <router-link to="/" class="btn btn-dark" style="width: 100px">
        <span class="material-symbols-outlined"> arrow_back_ios </span>
      </router-link>
    </div>
    <h2 style="color: white; text-align: center">Log in to your account</h2>
    <div class="input-login">
      <h3 style="color: white">E-mail</h3>
      <input type="email" class="form-control input-field" />
      <h3 style="color: white">Password</h3>
      <input type="password" class="form-control input-field" />
      <div class="submit">
        <button
          type="button"
          class="btn btn-success"
          :class="{ disabled: loading }"
          :style="btnstyleGreen"
          @click="login"
        >
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span v-else>Login</span>
        </button>
        <button type="button" class="btn btn-secondary" :style="btnstyleGray">
          Cancel
        </button>
      </div>
      <div>
        <span class="userError" v-if="userError">User not found!</span>
        <span class="userError" v-if="passError">Invalid password!</span>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
};
</script>
<style>
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
</style>
