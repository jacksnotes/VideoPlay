<template>
  <div class="pt-44 md:pt-48 pb-20 min-h-screen bg-body text-gray-800 dark:text-gray-100 space-y-16">
    <AtomsContainer class-name="space-y-16">
      <!-- Hero Header -->
      <div class="text-center max-w-3xl mx-auto space-y-6 pt-4">
        <span class="px-4 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
          {{ isZh ? '关于 VideoPlay Cinema 平台' : 'About VideoPlay Cinema Platform' }}
        </span>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          {{ isZh ? '打造极速、高清与沉浸式的全球在线视频影院' : 'Building Fast, HD & Immersive Global Video Streaming' }}
        </h1>
        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ isZh ? 'VideoPlay 致力于为全球观众提供高品质视频在线观赏体验。通过现代化轻量级 HTML5 嵌入式播放架构，免去繁琐等待，随时随地开启超清视听之旅。' : 'VideoPlay delivers seamless online streaming powered by lightweight HTML5 embedded architecture. Instant 4K playback across devices anytime, anywhere.' }}
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="bg-box-bg p-6 rounded-2xl border border-box-border text-center space-y-2 shadow-sm"
        >
          <div class="text-2xl sm:text-4xl font-extrabold text-primary">{{ stat.number }}</div>
          <div class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Feature Grid -->
      <div class="space-y-8">
        <div class="text-center max-w-xl mx-auto space-y-2">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {{ isZh ? '为什么选择 VideoPlay？' : 'Why Choose VideoPlay?' }}
          </h2>
          <p class="text-xs sm:text-sm text-gray-500">
            {{ isZh ? '领先的技术架构与极佳的用户观影体验' : 'Cutting-edge tech architecture & exceptional user experience' }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feat, index) in features"
            :key="index"
            class="bg-box-bg p-8 rounded-2xl border border-box-border shadow-sm space-y-4 hover:border-primary/50 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
              {{ index + 1 }}
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ feat.title }}</h3>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Architecture & Vision -->
      <div class="bg-box-bg p-8 sm:p-12 rounded-3xl border border-box-border shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="space-y-4">
          <span class="text-xs font-semibold text-primary uppercase tracking-wider">
            {{ isZh ? '核心架构理念' : 'Core Architecture' }}
          </span>
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {{ isZh ? '标准 HTML5 iFrame 嵌入与跨端兼容' : 'Standardized HTML5 iFrame & Cross-Platform' }}
          </h3>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ isZh ? '我们采用先进的前端流媒体解耦架构，通过标准化的 HTML5 iFrame 协议无缝对接各大优质视频源，保证无缝全屏放映、低延迟缓冲与全设备自适应布局。' : 'We adopt a modern decoupled video rendering architecture, seamlessly integrating high-quality stream providers via standardized HTML5 iFrame protocols for responsive full-screen playback.' }}
          </p>
          <div class="pt-2">
            <NuxtLink to="/" class="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
              <span>{{ isZh ? '探索影院视频大片' : 'Explore Cinema Now' }}</span>
              <span>&rarr;</span>
            </NuxtLink>
          </div>
        </div>

        <div class="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-box-border bg-gray-900 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
            alt="VideoPlay Cinema Showcase"
            class="w-full h-full object-cover opacity-80"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
            <div class="text-white space-y-1">
              <p class="font-bold text-sm">VideoPlay Ultra Cinema</p>
              <p class="text-xs text-gray-300">4K / 1080P Embedded Streaming</p>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </div>
</template>

<script setup lang="ts">
const { currentLang } = useLanguage()
const isZh = computed(() => currentLang.value === 'zh')

useHead({
  title: computed(() => isZh.value ? '关于我们 - VideoPlay Cinema' : 'About Us - VideoPlay Cinema')
})

const stats = computed(() => [
  { number: '50,000+', label: isZh.value ? '每日在线观影人次' : 'Daily Streaming Viewers' },
  { number: '10,000+', label: isZh.value ? '高清精彩视频资源' : 'Curated HD Videos' },
  { number: '99.9%', label: isZh.value ? '播放引擎可用率' : 'Player Engine Uptime' },
  { number: '150+', label: isZh.value ? '服务涵盖国家与地区' : 'Global Region Coverage' }
])

const features = computed(() => [
  {
    title: isZh.value ? '即点即播 零延迟' : 'Instant Playback',
    desc: isZh.value ? '优化加载链路与响应速度，秒级呈现超清大片画面。' : 'Optimized loading pipelines deliver instant 4K video rendering without waiting.'
  },
  {
    title: isZh.value ? '4K / 1080P 全高清' : '4K Ultra HD',
    desc: isZh.value ? '支持画质自适应与全屏沉浸视听体验。' : 'Adaptive bitrate streaming with immersive crystal-clear visuals.'
  },
  {
    title: isZh.value ? '双语多端自适应' : 'Bilingual & Multi-device',
    desc: isZh.value ? '完美兼容手机、平板与 PC 桌面端，支持中英一键切换。' : 'Full cross-platform compatibility with seamless English & Chinese i18n support.'
  }
])
</script>
