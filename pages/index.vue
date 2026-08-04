<script setup lang="ts">
const { currentLang } = useLanguage()

useHead({
  title: computed(() => currentLang.value === 'en' ? 'VideoPlay - HD Online Video Streaming Cinema' : 'VideoPlay - 高清视频在线播放影院'),
  meta: [
    { name: 'description', content: computed(() => currentLang.value === 'en' ? 'VideoPlay HD online video streaming platform with movies, anime, tech & documentaries.' : 'VideoPlay 全高清视频流媒体观影平台，支持电影、动漫、科技与纪录片嵌入式流畅播放。') },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' }
  ],
})
</script>
<template>
    <div>
        <SectionsHomeHeroSection/>
        <SectionsHomeLatestPodcast/>
        <SectionsHomePopularPodcasts/>
        <SectionsAboutPodux/>
    </div>
</template>