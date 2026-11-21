<script setup>
import { posts, tilTopics } from '@/data/content'
</script>

<template>
  <section class="page-section">
    <header class="page-header">
      <h1 class="page-title">blog</h1>
      <p class="page-subtitle">writings &amp; notes</p>
    </header>

    <div v-if="posts.length" class="archive-list">
      <RouterLink
        v-for="post in posts"
        :key="post.slug"
        class="archive-row"
        :to="`/blog/${post.slug}`"
      >
        <span class="archive-title">{{ post.title }}</span>
        <span class="archive-dots"></span>
        <time class="archive-date" :datetime="post.date">{{ post.date }}</time>
      </RouterLink>
    </div>
    <p v-else class="empty-state">no posts yet.</p>

    <div v-if="tilTopics.length" class="archive-subsection">
      <h2 class="archive-subheading">TIL (Today I Learned)</h2>
      <div class="archive-list">
        <RouterLink
          v-for="item in tilTopics"
          :key="item.slug"
          class="archive-row"
          :to="`/til/${item.slug}`"
        >
          <span class="archive-title">
            <span class="til-topic">{{ item.topic }}</span>
            {{ item.title }}
          </span>
          <span class="archive-dots"></span>
          <time class="archive-date" :datetime="item.date">{{ item.date }}</time>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
