<script setup>
import homeView from "./views/HomeView.vue";
import SkillsView from "./views/SkillsView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import PageFooter from "./components/PageFooter.vue";
</script>

<template>
  <div>
    <homeView />
    <h1 class="section-title">Skills</h1>
    <SkillsView />
    <h1 class="section-title">Projects</h1>
    <ProjectsView />
    <PageFooter />
  </div>
</template>

<style>
.section-title {
  color: var(--highlight-color);
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 0px 2px 2px var(--shadow-color);
  -webkit-text-stroke: 1px var(--border-color);
}
</style>
