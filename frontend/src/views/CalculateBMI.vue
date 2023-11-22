<template>
  <div class="main" style="background-color: black; margin: 0">
    <div class="header" style="padding-left: 15px">
      <router-link to="/" class="btn btn-dark" style="width: 50px">
        <span class="material-symbols-outlined"> arrow_back_ios </span>
      </router-link>
    </div>
    <div class="gender">
      <h1 class="naslov">BMI CALCULATOR</h1>
      <button
        @click="maleChoose"
        :class="{ 'btn-primary': male, 'btn-secondary': !male }"
        :style="maleBtnStyle"
        size="lg"
      >
        <i class="bi bi-gender-male" style="font-size: 2rem"></i>
      </button>
      <button
        @click="femaleChoose"
        :class="{ 'btn-primary': female, 'btn-secondary': !female }"
        :style="femaleBtnStyle"
        size="lg"
      >
        <i class="bi bi-gender-female" style="font-size: 2rem"></i>
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
        <input
          class="form-control age"
          v-model="age"
          type="number"
          placeholder="Age"
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
      age: null,
      bmi: null,
      male: false,
      female: false,

      maleBtnStyle: {
        height: "100px",
        width: "100px",
        margin: "10px 43px 10px 43px",
        borderRadius: "20px",
        backgroundColor: "#D29433",
      },
      femaleBtnStyle: {
        height: "100px",
        width: "100px",
        margin: "10px 43px 10px 43px",
        borderRadius: "20px",
        backgroundColor: "#D29433",
      },
    };
  },
  methods: {
    calculateBMI() {
      if (this.height && this.weight) {
        const heightInMeters = this.height / 100;
        this.bmi = (this.weight / (heightInMeters * heightInMeters)).toFixed(2);
      } else {
        this.bmi = null;
      }
    },
    maleChoose() {
      this.male = !this.male;
      this.female = false;
      this.maleBtnStyle.backgroundColor = this.male ? "cyan" : "#D29433";
      this.femaleBtnStyle.backgroundColor = "#D29433";
    },
    femaleChoose() {
      this.female = !this.female;
      this.male = false;
      this.femaleBtnStyle.backgroundColor = this.female ? "pink" : "#D29433";
      this.maleBtnStyle.backgroundColor = "#D29433";
    },
  },
};
</script>

<style>
.gender {
  text-align: center;
}

.bmi {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.result {
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.input {
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.height,
.weight,
.age {
  background-color: #d29433;
  max-width: 300px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  margin: 5px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: medium;
}

.btn {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 10px;
  margin: 20px;
}

.naslov {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: aliceblue;
}
</style>
