<script setup>
import navbar from "../components/Nav.vue";
</script>

<template>
  <div class="home-section">
    <navbar />
    <div class="personal-info">
      <p>
        i am
        <span class="name">melad al akabani</span>, a creative software
        developer driven by a deep curiosity for software development and a
        constant desire to grow. I enjoy tackling complex challenges and finding
        effcient solutions.
      </p>
    </div>
    <div class="personal-image">
      <div class="image">
        <img src="../assets/Images/personal-image.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-section {
  width: 70%;
  margin: 50px auto;
  box-shadow: 0 0 3px 0 var(--shadow-color);
  height: 500px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "nav nav" "info image";
  box-sizing: border-box;
}

.home-section nav {
  grid-area: nav;
}

.personal-info {
  grid-area: info;
  font-size: 1.4rem;
  color: var(--primary-font-color);
  height: 100%;
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.personal-info .name {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--highlight-color);
  font-weight: bold;
}

.personal-image {
  grid-area: image;
  height: 100%;
  display: flex;
  align-items: center;
}

.personal-image .image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid 10px var(--highlight-color);
  border-color: transparent var(--highlight-color);
  padding: 25px;
  box-sizing: border-box;
  transition: transform 0.5s 0s linear;
}

.personal-image .image img {
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  transition: transform 0.5s 0s linear;
}

.personal-image .image:hover {
  transform: rotateZ(90deg);
}

.personal-image .image:hover img {
  transform: rotateZ(-90deg);
}
</style>
