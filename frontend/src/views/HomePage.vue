<template>
  <div
    class="main"
    :style="{
      'background-color': 'black',
    }"
  >
    <div class="header" style="padding-left: 15px"></div>
    <div class="header">
      <h1 style="color: #d29433">Let's crush it!</h1>
    </div>

    <!--search-->
    <div class="container mt-3">
      <input
        class="form-control"
        placeholder="Search anything..."
        style="background-color: #9a9494; color: black"
      />
    </div>

    <!--recommended workouts-->
    <div class="recommended-workout">
      <h1 style="color: white">RECOMMENDED WORKOUTS</h1>
    </div>
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/crossfit.jpg"
            class="d-block"
            style="height: 60vh; width: auto"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>CrossFit</h3>
            <p>
              Whether you’ve trained your whole life or are just starting your
              fitness journey, CrossFit offers a results-based, community-driven
              approach that helps you build fitness and improve your health—over
              your lifetime.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/lower-body.jpg"
            class="d-block"
            style="height: 60vh; width: auto"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Lower Body Attack</h3>
            <p>
              Use these timeless leg exercises to gain mass and strength on your
              lower body. A varied combination of reps and sets will help to
              keep your routine fresh.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/upper-body.jpg"
            class="d-block"
            style="height: 60vh; width: auto"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Upper Body Attack</h3>
            <p>
              Time to get the arms, shoulders and chest into it! You will need
              some dumbbells to get this one done.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
<style>
.header {
  padding-top: 5px;
  padding-left: 20px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-control {
  border-radius: 50px;
}

.recommended-workout {
  margin: 50px;
}
.carousel-inner {
  height: 60vh;
  display: grid;
  place-content: center;
}
.carousel-item {
  height: 60vh;
}
</style>
