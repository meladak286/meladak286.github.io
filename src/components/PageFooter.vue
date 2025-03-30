<script setup></script>
<template>
  <footer class="footer">
    <h2 class="capitalize">contact info</h2>
    <ul class="social-links">
      <li>
        <a href="mailto:meladak286@gmail.com" class="social-link capitalize">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/melad-al-akabani-b3104022a/"
          class="social-link capitalize"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/meladak286" class="social-link capitalize">
          <i class="fa-brands fa-github"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>
<style scoped>
.footer {
  width: 100%;
  padding: 25px;
  background-color: var(--primary-color);
  color: var(--primary-font-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -2px 0 4px 0 var(--shadow-color);
}

.footer .social-links {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer .social-links li {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 30px;
}

.footer .social-links li a {
  color: var(--primary-font-color);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin: 0 25px;
  transition: transform 0.1s 0s;
}

.footer .social-links li a:hover {
  transform: scale(1.5);
}
</style>
