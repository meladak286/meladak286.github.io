<script setup>
import SkillSlider from "@/components/SkillSlider.vue";
import skills from "@/data/Skills.json";
</script>
<template>
  <div class="skills-section">
    <div class="skills">
      <SkillSlider
        class="skill"
        v-for="skill in skills"
        :key="skill.name"
        :skill="skill.name"
        :experience="skill.experience"
      ></SkillSlider>
    </div>
    <div class="languages">
      <h2 class="sub-title">Languages</h2>
      <div class="language">
        <span class="language-name capitalize">arabic</span>
        <span class="level capitalize">native</span>
      </div>
      <div class="language">
        <span class="language-name capitalize">english</span>
        <span class="level capitalize">very good</span>
      </div>
    </div>
    <div class="education">
      <h2 class="sub-title">Education</h2>
      <div class="degree">
        <span class="degree-source">
          syrian technological institute of computer
        </span>
        <span class="degree-info">
          diploma in computer science 2020 - 2022
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.skills-section {
  width: 70%;
  margin: 50px auto;
  box-shadow: 0 0 3px 0 var(--shadow-color);
  height: auto;
  min-height: 500px;
  border-radius: 25px;
  padding: 25px 15px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas: "skills skills" "languages education";
}

.skills-section .skills {
  grid-area: skills;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 25px 0;
}

.skills-section .skill {
  margin: auto;
}

.sub-title {
  font-size: 42px;
  text-transform: capitalize;
  color: var(--primary-font-color);
  margin: 50px 0 25px;
}

.languages {
  grid-area: languages;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

.languages .language {
  display: flex;
  width: 50%;
  justify-content: space-between;
  color: var(--primary-font-color);
  margin: 10px 0;
}

.languages .language span {
  width: 25%;
  text-align: center;
}

.education {
  grid-area: education;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--primary-font-color);
}

.education .degree {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.education .degree .degree-source {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.education .degree .degree-info {
  font-size: 20px;
}


@media screen and (max-width: 768px) {
  .skills-section {
    width: 90%;
    grid-template-columns: 1fr;
    grid-template-areas:
      "skills"
      "languages"
      "education";
  }

  .skills-section .skills {
    grid-template-columns: 1fr;
  }

  .sub-title {
    font-size: 32px;
    margin: 30px 0 15px;
  }

  .languages .language {
    width: 80%;
  }

  .education .degree .degree-source {
    font-size: 20px;
    text-align: center;
  }

  .education .degree .degree-info {
    font-size: 16px;
    text-align: center;
  }
}
</style>
