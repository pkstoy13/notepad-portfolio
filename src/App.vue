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

  position: fixed;
  inset: 0;
  background:
    /* horizontal ruled lines */
    repeating-linear-gradient(to bottom, transparent, transparent 27px, var(--line) 28px),
    /* paper color */ var(--paper);

  font-family: 'Patrick Hand', 'Inter', sans-serif;

  background-blend-mode: multiply;
  box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.03);
}

.notebook::before {
  content: '';
  position: absolute;
  top: 0;
  left: 64px;
  width: 2px;
  height: 100%;
  background: var(--margin);
}

.page-content {
  margin-left: 96px;
  padding: 48px;
  max-width: 1100px;
}

.notebook::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    transparent 15%,
    transparent 85%,
    rgba(0, 0, 0, 0.2)
  );
}
</style>
