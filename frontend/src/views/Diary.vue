<template>
  <div class="main" :style="{ 'background-color': 'black' }">
    <div class="header" style="padding-left: 15px">
      <router-link to="/" class="btn btn-dark" style="width: 100px">
        <span class="material-symbols-outlined"> arrow_back_ios </span>
      </router-link>
    </div>
    <div class="naslov">
      <h1 :style="{ color: '#D29433' }">My progress</h1>
    </div>
    <div class="row align-items-center">
      <div class="col-md-auto" style="width: 500px">
        <label for="datePicker" class="form-label">Select a Date:</label>
        <input
          id="datePicker"
          type="date"
          v-model="value"
          class="form-control"
          style="max-width: 200px"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DiaryEntry",
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
.naslov {
  text-align: center;
}

.form-label {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: medium;
  color: aliceblue;
}

.form-control {
  background-color: bisque;
}

.align-items-center {
  margin: auto;
  padding: 20px;
  margin-top: 25px;
}
</style>
