<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar',
  props: {
    items: {
      type: Array as () => {
        id: string
        src: string
        alt: string
        route: string
      }[],
      required: true,
    },
  },
})
</script>

<template>
  <nav>
    <img
      v-for="item in items"
      :key="item.id"
      :src="item.src"
      :alt="item.alt"
      @click="$router.push(item.route)"
    />
  </nav>
</template>

<style scoped>
img {
  margin: 2px;
  margin-left: 4px;
  margin-right: 4px;
  transition:
    transform 0.2s ease,
    filter 0.2s ease;
}

img:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

nav {
  position: fixed;
  height: 100vh;
  width: 20%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-brown);
  overflow-y: auto;

  scrollbar-width: none;
}

.scroll {
  overflow: hidden;
}
</style>
