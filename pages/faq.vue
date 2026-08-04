<template>
  <div class="pt-44 md:pt-48 pb-20 min-h-screen bg-body text-gray-800 dark:text-gray-100">
    <AtomsContainer class-name="space-y-10 max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center space-y-4">
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
          {{ isZh ? '知识库与常见问题解答' : 'Knowledge Base & FAQ' }}
        </span>
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          {{ isZh ? '常见问题解答 (FAQ)' : 'Frequently Asked Questions' }}
        </h1>
        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto">
          {{ isZh ? '快速了解 VideoPlay 视频播放、HTML5 嵌入、清晰度切换及播放器异常处置方案。' : 'Find instant answers to video playback, HTML5 iframe embedding, HD streaming, and troubleshooting.' }}
        </p>
      </div>

      <!-- Controls Container: Search & Categories -->
      <div class="max-w-xl mx-auto w-full space-y-5">
        <!-- Search Input Box -->
        <div class="relative w-full">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="isZh ? '搜索常见问题或关键字...' : 'Search questions or keywords...'"
            class="w-full pl-12 pr-4 py-3.5 text-sm rounded-full bg-box-bg border border-box-border focus:outline-none focus:border-primary text-gray-900 dark:text-white shadow-sm"
          />
          <div class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Categories Filter Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300',
              activeCategory === cat.id
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'bg-box-bg border border-box-border text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
            ]"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>

      <!-- FAQ Items Accordion -->
      <div class="space-y-4 pt-2">
        <div
          v-for="(item, index) in filteredFaqs"
          :key="index"
          class="bg-box-bg rounded-2xl border border-box-border overflow-hidden transition-all duration-200 shadow-sm"
        >
          <button
            @click="toggleItem(index)"
            class="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <span class="font-semibold text-sm sm:text-base text-gray-900 dark:text-white leading-snug">
              {{ item.q }}
            </span>
            <span class="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-sm">
              {{ openIndex === index ? '-' : '+' }}
            </span>
          </button>
          <div
            v-show="openIndex === index"
            class="px-6 pb-6 pt-2 border-t border-box-border/50 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line"
          >
            {{ item.a }}
          </div>
        </div>

        <div v-if="filteredFaqs.length === 0" class="text-center py-12 text-gray-500 text-sm bg-box-bg rounded-2xl border border-box-border">
          {{ isZh ? '未找到与关键词相关的解答。' : 'No matching questions found.' }}
        </div>
      </div>

      <!-- Still Need Help Box -->
      <div class="bg-box-bg p-8 sm:p-10 rounded-2xl border border-box-border text-center space-y-4 mt-8 shadow-sm">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          {{ isZh ? '仍未解决您的问题？' : 'Still Need Help?' }}
        </h3>
        <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
          {{ isZh ? '我们的客户与技术团队可在线为您排查播放异常及配置指导。' : 'Contact our team directly for custom video player integration or technical issues.' }}
        </p>
        <div class="pt-2">
          <NuxtLink
            to="/support"
            class="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
          >
            {{ isZh ? '前往技术支持页面' : 'Contact Support' }}
          </NuxtLink>
        </div>
      </div>
    </AtomsContainer>
  </div>
</template>

<script setup lang="ts">
const { currentLang } = useLanguage()
const isZh = computed(() => currentLang.value === 'zh')

useHead({
  title: computed(() => isZh.value ? '常见问题解答 - VideoPlay Cinema' : 'FAQ - VideoPlay Cinema')
})

const searchQuery = ref('')
const activeCategory = ref('all')
const openIndex = ref<number | null>(0)

function toggleItem(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

const categories = computed(() => [
  { id: 'all', name: isZh.value ? '全部问题' : 'All' },
  { id: 'playback', name: isZh.value ? '视频播放' : 'Playback' },
  { id: 'embed', name: isZh.value ? 'HTML5 嵌入' : 'iFrame & Embed' },
  { id: 'quality', name: isZh.value ? '画质与速度' : 'Quality & Speed' }
])

const rawFaqs = computed(() => [
  {
    category: 'playback',
    q: isZh.value ? '为什么有些视频点开后会显示黑屏或空白？' : 'Why does a video show a black or blank screen?',
    a: isZh.value
      ? '出现黑屏或空白通常有以下可能：\n1. 视频资源地址 (embedUrl) 被留空或格式有误；\n2. 视频提供商设置了严格的 Referer 防盗链机制或服务器反爬拦截；\n3. 本地网络限制或浏览器防追踪插件屏蔽了第三方 iframe 加载。'
      : 'A black or blank screen is usually caused by:\n1. Empty or malformed video embed URL;\n2. Strict Referer check or hotlink protection on the source server;\n3. Browser ad-blockers or local network blocking cross-origin iFrames.'
  },
  {
    category: 'embed',
    q: isZh.value ? 'VideoPlay 采用什么方式渲染视频？' : 'How does VideoPlay render embedded videos?',
    a: isZh.value
      ? 'VideoPlay 使用标准化 HTML5 <iframe> 嵌入渲染引擎，支持响应式自适应布局。无论在 PC 桌面端还是 iOS / Android 移动设备，均能实现流畅且保真度极高的高清画质呈现。'
      : 'VideoPlay leverages standardized HTML5 <iframe> embedded rendering engine with responsive aspect-ratio layout. It delivers seamless 4K/1080P video playback across desktops, tablets, and mobile browsers.'
  },
  {
    category: 'quality',
    q: isZh.value ? '如何调整视频播放画质与分辨率？' : 'How can I switch video resolution and quality?',
    a: isZh.value
      ? '由于视频播放器内嵌自各专业视频提供方，画质选项（4K/1080P/720P）会在视频开始播放后自动匹配最适合您当前带宽的清晰度。您也可以在嵌入播放窗口右下角设置中手动选定分辨率。'
      : 'Because videos are rendered via embedded HTML5 players, the streaming quality automatically adapts based on your bandwidth. You can also manually adjust resolution settings (4K/1080P) in the player controls.'
  },
  {
    category: 'playback',
    q: isZh.value ? '单独在浏览器中打开网址能播，嵌入后却无法播放？' : 'Why does a link play in a new tab but fail inside iframe?',
    a: isZh.value
      ? '视频服务商通常配置了 X-Frame-Options 限制或跨域来源校验 (Referer)。单独打开时浏览器为顶层窗口访问，而嵌入时请求头携带了第三方 Referer。若视频源服务器限制了外部嵌入，就会阻止播放或重定向。'
      : 'Video hosting servers often check HTTP Referer headers or X-Frame-Options policies. Direct tab navigation sends top-level headers, while iframe embedding carries site Referer headers which might trigger server protection.'
  },
  {
    category: 'embed',
    q: isZh.value ? '如何在自己的博客或网站中嵌入 VideoPlay 视频？' : 'How can I embed VideoPlay videos into my own website?',
    a: isZh.value
      ? '只需复制视频详情页中的 Embed 链接，在您的 HTML 或 WordPress 中插入 <iframe src="EMBED_URL" allowfullscreen></iframe> 即可实现全功能内嵌播放。'
      : 'Simply copy the embed URL from the video detail page, and paste <iframe src="EMBED_URL" allowfullscreen></iframe> into your HTML or WordPress block.'
  }
])

const filteredFaqs = computed(() => {
  return rawFaqs.value.filter(item => {
    const matchesCategory = activeCategory.value === 'all' || item.category === activeCategory.value
    const query = searchQuery.value.toLowerCase().trim()
    const matchesSearch = !query || item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })
})
</script>
