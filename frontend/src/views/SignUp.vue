<template>
  <div class="main">
    <div class="header" :style="{ 'padding-left': '15px' }">
      <router-link to="/" class="btn btn-dark" style="width: 50px">
        <span class="material-symbols-outlined"> arrow_back_ios </span>
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
        <button type="button" class="btn btn-primary" :style="btnStyle">
          Create account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      btnStyle: {
        borderRadius: "20px",
        width: "300px",
        marginTop: "10px",
        backgroundColor: "green",
        border: "none",
      },
    };
  },
};
</script>

<style>
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

.btn-dark {
  background-color: #d29433;
}
</style>
