<script setup>
import { computed } from 'vue'
import { posts, tilTopics } from '@/data/content'

const props = defineProps({
  slug: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'post'
  }
})

const entry = computed(() => {
  const source = props.type === 'til' ? tilTopics : posts
  return source.find((item) => item.slug === props.slug)
})
</script>

<template>
  <article v-if="entry" class="post-article">
    <header class="post-header">
      <RouterLink class="back-link" to="/">&larr; back</RouterLink>
      <div class="post-meta">
        <time :datetime="entry.date">{{ entry.date }}</time>
        <template v-if="type === 'til'">
          <span>/</span>
          <span class="post-badge">TIL &middot; {{ entry.topic }}</span>
        </template>
        <template v-else-if="entry.tags?.length">
          <span>/</span>
          <span v-for="tag in entry.tags" :key="tag">#{{ tag }}</span>
        </template>
      </div>
      <h1 class="post-title">{{ entry.title }}</h1>
    </header>

    <div class="post-body">
      <p v-for="(paragraph, idx) in entry.content" :key="idx">
        {{ paragraph }}
      </p>
    </div>
  </article>

  <section v-else class="page-section">
    <RouterLink class="back-link" to="/">&larr; back home</RouterLink>
    <h1 class="page-title">Not found</h1>
  </section>
</template>
