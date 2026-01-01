import LandingPageView from '@/views/LandingPageView.vue'
import EducationPageView from '@/views/EducationPageView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ExperiencePageView from '@/views/ExperiencePageView.vue'
import PersonalPageView from '@/views/PersonalPageView.vue'
import ProjectsPageView from '@/views/ProjectsPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'landing-page', component: LandingPageView },
    { path: '/education', name: 'education-page', component: EducationPageView },
    { path: '/experience', name: 'experience-page', component: ExperiencePageView },
    { path: '/projects', name: 'projects-page', component: ProjectsPageView },
    { path: '/personal', name: 'personal-page', component: PersonalPageView },
  ],
})

export default router
