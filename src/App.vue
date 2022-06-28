<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="container-wave img-fluid">
    <img
      src="/src/assets/wave.svg"
      class="wave animate__animated animate__slideInDown"
    />
  </div>
  <router-view></router-view>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,800;1,900&display=swap");

.wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
