<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand">Home</router-link>
      <router-link to="/bmi" class="navbar-brand">BMI</router-link>
      <router-link to="/diary" class="navbar-brand">Diary</router-link>
      <router-link to="/profile" class="navbar-brand">Profile</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  background-color: #d29433;
}
</style>
