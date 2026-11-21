<script setup>
import { computed } from 'vue'
import { profile, posts, tilTopics, socialPosts } from '@/data/content'

const latestPosts = computed(() => posts.slice(0, 4))
</script>

<template>
  <div>
    <!-- Title + Description -->
    <section class="hero">
      <h1 class="hero-title">{{ profile.name }}</h1>
      <p class="hero-description">{{ profile.description }}</p>
    </section>

    <!-- Blog: 2x2 grid of 4 last blog posts (post post / post post) -->
    <section class="home-section blog-section" aria-labelledby="blog-heading">
      <div class="section-header">
        <h2 id="blog-heading">blog</h2>
        <RouterLink class="section-link" to="/blog">all posts &rarr;</RouterLink>
      </div>

      <div v-if="latestPosts.length" class="blog-grid">
        <RouterLink
          v-for="post in latestPosts"
          :key="post.slug"
          class="post-card"
          :to="`/blog/${post.slug}`"
        >
          <div class="post-card-meta">
            <time :datetime="post.date">{{ post.date }}</time>
            <span v-if="post.tags?.length" class="post-card-tag">#{{ post.tags[0] }}</span>
          </div>
          <h3 class="post-card-title">{{ post.title }}</h3>
          <p class="post-card-excerpt">{{ post.excerpt }}</p>
        </RouterLink>
      </div>
      <div v-else class="empty-state">
        no posts yet.
      </div>
    </section>

    <!-- TIL | Social side-by-side with internal scroll -->
    <section class="home-section split-section">
      <!-- TIL (Today I Learned) -->
      <div class="split-col til-section" aria-labelledby="til-heading">
        <div class="section-header">
          <h2 id="til-heading">TIL</h2>
          <span class="section-caption">today i learned</span>
        </div>

        <div class="scroll-list" role="region" aria-label="Today I Learned topics" tabindex="0">
          <template v-if="tilTopics.length">
            <RouterLink
              v-for="item in tilTopics"
              :key="item.slug"
              class="scroll-item til-item"
              :to="`/til/${item.slug}`"
            >
              <div class="item-top">
                <span class="til-topic">{{ item.topic }}</span>
                <time :datetime="item.date">{{ item.date }}</time>
              </div>
              <p class="item-title">{{ item.title }}</p>
            </RouterLink>
          </template>
          <p v-else class="empty-inline">no topics yet.</p>
        </div>
      </div>

      <!-- Social (X, Instagram, YouTube) -->
      <div class="split-col social-section" aria-labelledby="social-heading">
        <div class="section-header">
          <h2 id="social-heading">Social</h2>
          <RouterLink class="section-link" to="/social">X &middot; IG &middot; YT &rarr;</RouterLink>
        </div>

        <div class="scroll-list" role="region" aria-label="Social posts" tabindex="0">
          <template v-if="socialPosts.length">
            <a
              v-for="post in socialPosts"
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
          </template>
          <p v-else class="empty-inline">no social posts yet.</p>
        </div>
      </div>
    </section>
  </div>
</template>
