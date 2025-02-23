<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import projects from "@/data/Projects.json";
</script>
<template>
  <div class="projects-section">
    <ProjectCard
      class="project-card"
      v-for="(project, index) in projects"
      :key="index"
      :image="project.image"
      :name="project.name"
      :description="project.description"
      :link="project.link"
    ></ProjectCard>
  </div>
</template>
<style scoped>
.projects-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  width: 80%;
  margin: auto;
  padding: 50px 0;
}

.projects-section .project-card {
  transition: transform 0.1s 0s linear;
}

.projects-section .project-card:hover {
  transform: scale(1.1);
}
</style>
