<script setup>
import { ref, computed } from 'vue'
import { profile, socialPosts } from '@/data/content'

const selectedPlatform = ref('all')

const platforms = [
  { key: 'all', label: 'all' },
  { key: 'x', label: 'X' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'youtube', label: 'YouTube' }
]

const filteredPosts = computed(() => {
  if (selectedPlatform.value === 'all') return socialPosts
  return socialPosts.filter((p) => p.platform === selectedPlatform.value)
})
</script>

<template>
  <section class="page-section">
    <header class="page-header">
      <h1 class="page-title">social</h1>
      <p class="page-subtitle">updates across X, Instagram, and YouTube</p>
    </header>

    <div class="social-profiles">
      <a class="profile-pill" :href="profile.links.x" target="_blank" rel="noopener">
        <span class="social-badge social-badge--x">X</span>
        <span>@{{ profile.handle }}</span>
        <span class="ext-arrow">&nearr;</span>
      </a>
      <a class="profile-pill" :href="profile.links.instagram" target="_blank" rel="noopener">
        <span class="social-badge social-badge--instagram">Instagram</span>
        <span>@{{ profile.handle }}</span>
        <span class="ext-arrow">&nearr;</span>
      </a>
      <a class="profile-pill" :href="profile.links.youtube" target="_blank" rel="noopener">
        <span class="social-badge social-badge--youtube">YouTube</span>
        <span>@{{ profile.handle }}</span>
        <span class="ext-arrow">&nearr;</span>
      </a>
      <a class="profile-pill" :href="profile.links.github" target="_blank" rel="noopener">
        <span class="social-badge">GitHub</span>
        <span>@{{ profile.handle }}</span>
        <span class="ext-arrow">&nearr;</span>
      </a>
    </div>

    <div class="filter-bar" role="tablist" aria-label="Filter social posts by platform">
      <button
        v-for="p in platforms"
        :key="p.key"
        type="button"
        :class="['filter-btn', { active: selectedPlatform === p.key }]"
        @click="selectedPlatform = p.key"
      >
        {{ p.label }}
      </button>
    </div>

    <div v-if="filteredPosts.length" class="social-feed">
      <a
        v-for="post in filteredPosts"
        :key="post.id"
        class="scroll-item social-item"
        :href="post.url"
        target="_blank"
        rel="noopener"
      >
        <div class="item-top">
          <span :class="['social-badge', `social-badge--${post.platform}`]">
            {{ post.label }}
          </span>
          <time>{{ post.date }}</time>
        </div>
        <p class="item-title">{{ post.title }}</p>
      </a>
    </div>
    <p v-else class="empty-state">no social posts yet.</p>
  </section>
</template>
