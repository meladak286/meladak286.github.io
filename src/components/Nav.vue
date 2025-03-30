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
    <span class="menu-toggle"
      ><font-awesome-icon icon="fa-solid fa-bars"
    /></span>
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
  font-size: 25px;
  font-weight: bold;
  font-family: cursive;
}

nav .nav-links {
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav .nav-links .nav-link {
  margin: 1vw;
}

nav .nav-links .nav-link a {
  text-decoration: none;
  font-size: 20px;
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
  font-size: 25px;
}

nav .menu-toggle {
  font-size: 24px;
  color: white;
}
</style>
