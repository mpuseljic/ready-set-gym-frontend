<template>
  <transition name="modal-animation">
    <div v-show="activeModal" class="modal-outer">
      <span
        class="material-symbols-outlined exit-button-modal"
        @click="closeModal()"
      >
        close
      </span>
      <div class="modal-inner">
        <h1 :style="{ color: '#d29433', 'text-align': 'center' }">
          BMI CALCULATOR
        </h1>
        <div class="input">
          <input
            style="background-color: #d29433"
            class="form-control height"
            v-model="height"
            type="number"
            placeholder="Height (cm)"
          />
          <input
            style="background-color: #d29433"
            class="form-control weight"
            v-model="weight"
            type="number"
            placeholder="Weight (kg)"
          />
          <input
            style="background-color: #d29433"
            class="form-control age"
            v-model="age"
            type="number"
            placeholder="Age"
          />
        </div>

        <button class="btn btn-success" @click="calculateBMI">Calculate</button>

        <div v-if="bmi != null">
          <h2 class="result">Your BMI: {{ bmi }}</h2>
          <p class="message">{{ bmiMessage }}</p>
        </div>
      </div>
    </div>
  </transition>

  <div>
    <div class="heading">
      <img class="heading-img" src="@/assets/logorsg.jpg" alt="" />
    </div>
    <div class="main" style="background-color: black; margin: 0">
      <div class="header" style="padding-left: 15px">
        <router-link to="/" class="btn-dark" style="width: 50px">
          <span class="btn-dark material-symbols-outlined">
            arrow_back_ios
          </span>
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
            style="background-color: #d29433"
            class="form-control height"
            v-model="height"
            type="number"
            placeholder="Height (cm)"
          />
          <input
            style="background-color: #d29433"
            class="form-control weight"
            v-model="weight"
            type="number"
            placeholder="Weight (kg)"
          />
          <input
            style="background-color: #d29433"
            class="form-control age"
            v-model="age"
            type="number"
            placeholder="Age"
          />
        </div>

        <button class="btn btn-success" @click="calculateBMI">Calculate</button>

        <div v-if="bmi != null">
          <h2 class="result">Your BMI: {{ bmi }}</h2>
          <p class="message">{{ bmiMessage }}</p>
        </div>
      </div>
    </div>
    <!-- <nav-bar class="navbar" /> -->
  </div>
</template>

<script>
export default {
  name: "BMICalculatorModal",
  props: {
    activeModal: {
      type: Boolean,
      required: true,
    },
  },
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
    closeModal() {
      this.$emit("closeModal");
    },
  },
  computed: {
    bmiMessage() {
      if (this.bmi === null) {
        return "";
      } else if (this.bmi < 18.5) {
        return "You are undernourished. Consult your doctor to increase body weight.";
      } else if (this.bmi > 24.9) {
        return "You have excess body weight. Consult a doctor to reduce it.";
      } else {
        return "You have a normal body weight. Eat healthily and engage in physical activity to maintain it.";
      }
    },
  },
};
</script>

<style scoped>
@import "../stylesheet.css";
.modal-outer {
  position: fixed;
  top: 5%;
  left: 25%;
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;
  border: 2px solid white;
  z-index: 9999;
}

.modal-inner {
  position: relative;
  width: 90%;
  padding: 20px;
}

.exit-button-modal {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 27px;
  scale: 1.7;
  color: #fff;
  cursor: pointer;
}
</style>
