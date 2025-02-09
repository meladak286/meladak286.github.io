<template>
  <nav>
    <span class="name capitalize"> melad al akabani </span>
    <ul class="nav-links">
      <li class="nav-link">
        <a href="#home" class="capitalize">home</a>
      </li>
      <li class="nav-link">
        <a href="#skills" class="capitalize">skills</a>
      </li>
      <li class="nav-link">
        <a href="#projects" class="capitalize">projects</a>
      </li>
      <li class="nav-link">
        <a href="#contact" class="capitalize">contact</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--border-color);
  padding: 5px 5%;
  width: 100%;
  color: var(--primary-font-color);
  box-sizing: border-box;
  height: 100px;
}

nav .name {
  font-size: 2rem;
  font-weight: bold;
  font-family: cursive;
}

nav .nav-links {
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  margin: 0;
}

nav .nav-links .nav-link {
  margin: 25px;
}

nav .nav-links .nav-link a {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-font-color);
  padding: 5px 0;
  transition: all 0.2s 0s;
}

nav .nav-links .nav-link:hover a {
  color: var(--highlight-color);
  border-bottom: solid 3px var(--highlight-color);
}

nav .nav-links .nav-link.active a {
  color: var(--highlight-color);
  font-size: 1.8rem;
}
</style>
