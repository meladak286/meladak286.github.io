<script setup></script>
<template>
  <div class="skill">
    <span v-text="skill"></span>
    <div class="slider">
      <span class="value" :style="{ '--exp': experience }"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: String,
    experience: Number,
  },
};
</script>
<style scoped>
.skill {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
}

.skill span {
  font-size: 18px;
  height: fit-content;
  font-weight: bold;
  color: var(--primary-font-color);
}

.skill .slider {
  width: 150px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--background-color);
  border: solid 1px var(--background-color);
  display: flex;
  align-items: center;
}

.skill .slider .value {
  display: inline-block;
  height: 10px;
  width: calc(var(--exp) * 1%);
  border-radius: 5px;
  background-color: var(--highlight-color);
}
</style>
