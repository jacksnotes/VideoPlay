<template>
  <div class="pt-44 md:pt-48 pb-16 min-h-screen bg-body text-gray-800 dark:text-gray-100">
    <AtomsContainer>
      <!-- Breadcrumb & Back -->
      <div class="mb-6 flex items-center justify-between">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {{ t('backToHome') }}
        </NuxtLink>

        <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
          <span>{{ t('videoCinema') }}</span>
          <span>/</span>
          <span class="text-primary font-semibold">{{ video.category }}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Player & Details (2 columns) -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Video Frame -->
          <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-box-border group">
            <div class="relative w-full" style="aspect-ratio: 16/9;">
              <iframe
                :src="video.embedUrl"
                allowfullscreen
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
                style="width:100%;aspect-ratio:16/9;border:0"
                class="w-full h-full rounded-2xl border-0"
              ></iframe>
            </div>
          </div>

          <!-- Video Details -->
          <div class="bg-box-bg p-6 rounded-2xl border border-box-border shadow-sm space-y-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                {{ video.category }}
              </span>
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                {{ t('duration') }}: {{ video.duration }}
              </span>
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                {{ t('views') }}: {{ video.views }}
              </span>
            </div>

            <h1 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
              {{ video.title }}
            </h1>

            <!-- Author & Actions -->
            <div class="pt-4 border-t border-box-border flex flex-wrap items-center justify-between gap-4">
              <!-- Author Profile -->
              <div class="flex items-center gap-3">
                <img
                  :src="video.author.avatar"
                  :alt="video.author.name"
                  class="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white text-base">
                    {{ video.author.name }}
                  </h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ video.author.subscribers }} {{ t('subscribers') }}
                  </p>
                </div>
                <button
                  @click="isSubscribed = !isSubscribed"
                  :class="[
                    'ml-2 px-4 py-2 text-xs font-medium rounded-full transition-all duration-300',
                    isSubscribed
                      ? 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
                      : 'bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20'
                  ]"
                >
                  {{ isSubscribed ? t('subscribed') : t('subscribe') }}
                </button>
              </div>

              <!-- Action buttons -->
              <div class="flex items-center gap-2">
                <button
                  @click="toggleLike"
                  :class="[
                    'flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border transition-all',
                    isLiked
                      ? 'bg-red-500/10 border-red-500/30 text-red-500'
                      : 'bg-gray-100 dark:bg-gray-800 border-box-border text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  ]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" :fill="isLiked ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{{ currentLikes }}</span>
                </button>

                <button
                  @click="isSaved = !isSaved"
                  :class="[
                    'flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border transition-all',
                    isSaved
                      ? 'bg-primary/10 border-primary/30 text-primary'
                      : 'bg-gray-100 dark:bg-gray-800 border-box-border text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  ]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" :fill="isSaved ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span>{{ isSaved ? t('saved') : t('save') }}</span>
                </button>

                <button
                  @click="copyShareLink"
                  class="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 border border-box-border text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>{{ copied ? t('copiedLink') : t('share') }}</span>
                </button>
              </div>
            </div>

            <!-- Description -->
            <div class="pt-4 border-t border-box-border">
              <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">{{ t('videoDesc') }}</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {{ video.description }}
              </p>
              <div class="mt-3 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span>{{ t('publishDate') }}: {{ video.createdAt }}</span>
                <span>{{ t('embedFormat') }}</span>
              </div>
            </div>
          </div>

          <!-- Discussion -->
          <div class="bg-box-bg p-6 rounded-2xl border border-box-border shadow-sm space-y-6">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span>{{ t('discussion') }}</span>
              <span class="text-xs font-normal px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">
                {{ comments.length }} {{ t('commentsCount') }}
              </span>
            </h3>

            <!-- Input box -->
            <div class="flex gap-3">
              <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                User
              </div>
              <div class="flex-1 space-y-2">
                <textarea
                  v-model="newCommentText"
                  rows="2"
                  :placeholder="t('commentPlaceholder')"
                  class="w-full p-3 text-sm rounded-xl bg-body border border-box-border focus:outline-none focus:border-primary text-gray-900 dark:text-white resize-none"
                ></textarea>
                <div class="flex justify-end">
                  <button
                    @click="addComment"
                    :disabled="!newCommentText.trim()"
                    class="px-4 py-2 text-xs font-medium rounded-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {{ t('postComment') }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Comment List -->
            <div class="space-y-4 pt-2">
              <div
                v-for="comment in comments"
                :key="comment.id"
                class="flex gap-3 pt-4 border-t border-box-border first:border-0 first:pt-0"
              >
                <img
                  :src="comment.avatar"
                  :alt="comment.user"
                  class="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div class="flex-1 space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-semibold text-gray-900 dark:text-white">{{ comment.user }}</span>
                    <span class="text-xs text-gray-400">{{ comment.time }}</span>
                  </div>
                  <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{{ comment.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Recommendations (1 column) -->
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-2 border-b border-box-border">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ t('recommendations') }}</h3>
            <span class="text-xs text-gray-500 font-mono">{{ t('autoPlayNext') }}</span>
          </div>

          <div class="space-y-4">
            <NuxtLink
              v-for="item in relatedVideos"
              :key="item.id"
              :to="'/video/' + item.id"
              class="group flex gap-3 p-2 rounded-xl hover:bg-box-bg border border-transparent hover:border-box-border transition-all"
            >
              <div class="relative w-32 sm:w-36 aspect-video rounded-lg overflow-hidden shrink-0 bg-gray-900">
                <img
                  :src="item.coverImage"
                  :alt="item.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span class="absolute bottom-1 right-1 px-1.5 py-0.5 text-[10px] font-semibold text-white bg-black/70 backdrop-blur-sm rounded">
                  {{ item.duration }}
                </span>
              </div>
              <div class="flex flex-col justify-between py-0.5 flex-1 min-w-0">
                <h4 class="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-2 group-hover:text-primary transition-colors">
                  {{ item.title }}
                </h4>
                <div class="text-[11px] text-gray-500 dark:text-gray-400 space-y-0.5">
                  <p>{{ item.author.name }}</p>
                  <div class="flex items-center gap-2">
                    <span>{{ item.views }} {{ t('views') }}</span>
                    <span>•</span>
                    <span>{{ item.category }}</span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const videoId = computed(() => (route.params.id as string) || '1')

const { t, currentLang } = useLanguage()
const { getVideoById, getRelatedVideos } = useVideos()

const video = computed(() => getVideoById(videoId.value))
const relatedVideos = computed(() => getRelatedVideos(videoId.value, 6))

useHead({
  title: computed(() => `${video.value.title} - VideoPlay`),
  meta: [
    { name: 'description', content: computed(() => video.value.description) }
  ]
})

const isSubscribed = ref(false)
const isLiked = ref(false)
const isSaved = ref(false)
const copied = ref(false)
const currentLikes = ref(video.value.likes)

function toggleLike() {
  isLiked.value = !isLiked.value
}

function copyShareLink() {
  if (process.client) {
    navigator.clipboard.writeText(window.location.href)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}

const newCommentText = ref('')
const comments = computed(() => {
  if (currentLang.value === 'en') {
    return [
      {
        id: 1,
        user: 'GeekWatcher007',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        time: '10 mins ago',
        text: 'The picture quality is amazing! The embedded iframe playback experience is super smooth.'
      },
      {
        id: 2,
        user: 'CyberCoder',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
        time: '2 hours ago',
        text: 'Audio and video synchronization is great. Truly immersive cinema feel!'
      }
    ]
  } else {
    return [
      {
        id: 1,
        user: '极客影迷007',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        time: '10 分钟前',
        text: '画质真的非常清晰！嵌入式播放体验太流畅了，期待更新下一集。'
      },
      {
        id: 2,
        user: 'CyberCoder',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
        time: '2 小时前',
        text: '音效和画面融合得很棒，很有沉浸感！'
      }
    ]
  }
})

function addComment() {
  if (!newCommentText.value.trim()) return
  // Demo interactive add comment
  newCommentText.value = ''
}
</script>
