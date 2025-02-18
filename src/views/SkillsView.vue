<script setup>
import SkillSlider from "@/components/SkillSlider.vue";
import skills from "@/data/Skills.json";
</script>
<template>
  <div class="skills-section">
    <SkillSlider
      class="skill"
      v-for="skill in skills"
      :key="skill.name"
      :skill="skill.name"
      :experience="skill.experience"
    ></SkillSlider>
  </div>
</template>
<style scoped>
.skills-section {
  width: 70%;
  margin: 50px auto;
  box-shadow: 0 0 3px 0 var(--shadow-color);
  height: 500px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 50px 0;
  box-sizing: border-box;
}

.skills-section .skill {
  margin: auto;
}
</style>
