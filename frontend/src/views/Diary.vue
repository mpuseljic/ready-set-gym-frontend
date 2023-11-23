<template>
  <div class="main" :style="{ 'background-color': 'black', height: '200%' }">
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
    <div class="diary">
      <label for="diaryEntry" class="form-label">Diary Entry:</label>
      <textarea
        id="diaryEntry"
        v-model="diaryContent"
        class="form-control"
        rows="4"
        placeholder="Write your thoughts..."
      ></textarea>
      <div class="mb-3">
        <button @click="clearForm" class="btn btn-danger me-2">Clear</button>
        <button @click="saveEntry" class="btn btn-success">Save</button>
      </div>
    </div>
    <div class="weight-tracker">
      <h2 class="naslov" style="margin-top: 50px">Weight Tracking</h2>
      <div class="enter-weight">
        <label for="weightInput" class="form-label" style="margin-top: 20px"
          >Enter Weight (kg):</label
        >
        <input
          id="weightInput"
          type="number"
          v-model="currentWeight"
          class="form-control"
        />
        <button
          @click="recordWeight"
          class="btn btn-primary"
          style="width: auto"
        >
          Record Weight
        </button>
      </div>
    </div>
    <div>
      <canvas ref="weightChart" style="max-width: 100%"></canvas>
    </div>
  </div>
</template>
<script>
export default {
  name: "DiaryEntry",
  data() {
    return {
      value: "",
      diaryContent: "",
    };
  },
  methods: {
    clearForm() {
      this.value = "";
      this.diaryContent = "";
    },
    saveEntry() {
      console.log("Date: ", this.value);
      console.log("Diary Entry: ", this.diaryContent);

      this.clearForm();
    },
  },
};
</script>

<style>
.naslov {
  text-align: center;
}
.btn {
  border-radius: 10px;
  width: 100px;
}
.form-label {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: medium;
  color: aliceblue;
}

.form-control {
  background-color: bisque;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.align-items-center {
  margin: auto;
  padding: 20px;
  margin-top: 25px;
}

.diary {
  margin-left: 50px;
  margin-right: 50px;
}

.enter-weight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}

#weightInput {
  width: 50%;
  height: 70px;
  border-radius: 100px;
  border: solid 10px #d29433;
}
</style>
