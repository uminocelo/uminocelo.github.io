import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import PostView from '@/views/PostView.vue'
import SocialView from '@/views/SocialView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:slug',
      name: 'post',
      component: PostView,
      props: (route) => ({ slug: route.params.slug, type: 'post' })
    },
    {
      path: '/til/:slug',
      name: 'til',
      component: PostView,
      props: (route) => ({ slug: route.params.slug, type: 'til' })
    },
    {
      path: '/social',
      name: 'social',
      component: SocialView
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
