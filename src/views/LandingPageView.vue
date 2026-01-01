<script lang="ts">
import Education from '../assets/SVGs/education sticky note.svg'
import Experience from '../assets/SVGs/experience sticky note.svg'
import Projects from '../assets/SVGs/project sticky note.svg'
import Personal from '../assets/SVGs/personal-sticky-note.svg'
//import { defineComponent } from 'vue'
import LandingPageSideBar from '@/components/LandingPage/LandingPageSideBar.vue'
import LandingPageOverview from '@/components/LandingPage/LandingPageOverview.vue'

export default {
  components: {
    LandingPageSideBar,
    LandingPageOverview,
  },

  data() {
    return {
      sidebarItems: [
        {
          id: 'education',
          src: Education,
          alt: 'Education',
          route: '/education',
        },
        {
          id: 'experience',
          src: Experience,
          alt: 'Experience',
          route: '/experience',
        },
        {
          id: 'projects',
          src: Projects,
          alt: 'Projects',
          route: '/projects',
        },
        {
          id: 'personal',
          src: Personal,
          alt: 'Personal',
          route: '/personal',
        },
      ],
    }
  },
}
</script>

<template>
  <nav>
    <div>
      <LandingPageOverview />
      <!--<SideBar :items="sidebarItems" /> -->
    </div>
  </nav>
</template>

<style scoped></style>
