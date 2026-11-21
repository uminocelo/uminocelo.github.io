<script setup>
import { profile } from '@/data/content'

const year = new Date().getFullYear()
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="container header-inner">
        <RouterLink class="site-brand" to="/">@{{ profile.handle }}</RouterLink>
        <nav class="site-nav" aria-label="Main navigation">
          <ul>
            <li>
              <RouterLink to="/">home</RouterLink>
            </li>
            <li>
              <RouterLink to="/blog">blog</RouterLink>
            </li>
            <li>
              <RouterLink to="/social">social</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="site-main">
      <div class="container">
        <RouterView />
      </div>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <span class="footer-copy">&copy; {{ year }} {{ profile.name }}</span>
        <div class="footer-links">
          <a :href="profile.links.github" target="_blank" rel="noopener">github</a>
          <a :href="profile.links.x" target="_blank" rel="noopener">x</a>
          <a :href="profile.links.instagram" target="_blank" rel="noopener">instagram</a>
          <a :href="profile.links.youtube" target="_blank" rel="noopener">youtube</a>
        </div>
      </div>
    </footer>
  </div>
</template>
