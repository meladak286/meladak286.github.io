<script setup></script>
<template>
  <div class="project-card">
    <img class="project-image" :src="image" alt="" />
    <h3 class="project-name">{{ name }}</h3>
    <p class="project-description">{{ description }}</p>
    <span class="more">
      <a :href="link" class="capitalize">View More</a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    description: String,
    link: String,
  },
};
</script>
<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 300px;
  background-color: var(--primary-color);
  box-shadow: 1px 1px 2px 0 var(--shadow-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  box-sizing: border-box;
}

.project-card .project-image {
  height: 50%;
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.project-card .project-name {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: var(--highlight-color);
  padding: 0 25px;
  overflow: hidden;
}

.project-card .project-description {
  font-size: 12px;
  color: var(--primary-font-color);
  margin: 0 25px;
  overflow: hidden;
  width: calc(100% - 50px);
  box-sizing: border-box;
}

.project-card .more {
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 0;
}

.project-card .more a {
  text-decoration: none;
  color: var(--primary-font-color);
}
</style>
