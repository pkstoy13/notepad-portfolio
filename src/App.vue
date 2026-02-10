<script setup lang="ts">
//import LandingPageView from './views/LandingPageView.vue'
</script>

<template>
  <div class="notebook">
    <div class="page-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.notebook {
  --paper: #fbf7ef;
  --line: rgba(0, 0, 0, 0.8);
  --margin: rgba(200, 80, 80, 1);
  --header-gap: 72px;

  position: fixed;
  inset: 0;
  background: var(--paper);
  font-family: 'Patrick Hand', 'Inter', sans-serif;
}


.notebook::before {
  content: '';
  position: absolute;
  top: 0;
  left: 64px;
  width: 2px;
  height: 100%;
  background: var(--margin);
  z-index: 2;
}

.page-content {
  margin-left: 96px;
  padding: 48px;
  max-width: 1100px;
}

.notebook::after {
  content: '';
  position: absolute;
  top: var(--header-gap);
  left: 0;
  right: 0;
  bottom: 0;

  background: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 27px,
    var(--line) 28px
  );



  pointer-events: none;
  z-index: 1;
}
</style>
