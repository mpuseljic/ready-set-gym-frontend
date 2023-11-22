<template>
  <div class="main" style="background-color: black; margin: 0">
    <div class="header" style="padding-left: 15px"></div>
    <div class="gender">
      <button @click="maleChoose" class="btn" :class="{ 'btn-cyan': male }">
        <i class="mdi mdi-gender-male" style="font-size: 50px"></i>
      </button>
      <button @click="femaleChoose" class="btn" :class="{ 'btn-pink': female }">
        <i class="mdi mdi-gender-female" style="font-size: 50px"></i>
      </button>
    </div>
    <div class="bmi">
      <div class="input">
        <input
          class="form-control height"
          v-model="height"
          type="number"
          placeholder="Height (cm)"
        />
        <input
          class="form-control weight"
          v-model="weight"
          type="number"
          placeholder="Weight (kg)"
        />
      </div>

      <button class="btn btn-success" @click="calculateBMI">Calculate</button>

      <div v-if="bmi != null">
        <h2 class="result">Your BMI: {{ bmi }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculateBMI",
  data() {
    return {
      height: null,
      weight: null,
      bmi: null,
      male: false,
      female: false,
    };
  },
};
</script>

<style></style>
