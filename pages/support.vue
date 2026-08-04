<template>
  <div class="pt-44 md:pt-48 pb-20 min-h-screen bg-body text-gray-800 dark:text-gray-100">
    <AtomsContainer class-name="space-y-12">
      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
          {{ isZh ? '24/7 全天候客户服务与技术支持' : '24/7 Customer Service & Technical Support' }}
        </span>
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          {{ isZh ? '技术服务与客服支持' : 'Help & Customer Support' }}
        </h1>
        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ isZh ? '遇到视频无法播放、播放器加载缓慢或有合作需求？我们的专业支持团队随时为您解答。' : 'Have trouble with video playback, player loading, or business partnership? Our support team is here to help.' }}
        </p>
      </div>

      <!-- Quick Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(card, index) in supportCards"
          :key="index"
          class="bg-box-bg p-6 rounded-2xl border border-box-border shadow-sm space-y-3 hover:border-primary/50 transition-all duration-300 group"
        >
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else-if="index === 1" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else-if="index === 2" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="font-bold text-lg text-gray-900 dark:text-white">{{ card.title }}</h3>
          <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{{ card.desc }}</p>
          <NuxtLink :to="card.link" class="inline-flex items-center text-xs font-semibold text-primary hover:underline gap-1 pt-2">
            <span>{{ card.actionText }}</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Main Support Form & Info Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        <!-- Contact Form (2 Cols) -->
        <div class="lg:col-span-2 bg-box-bg p-6 sm:p-8 rounded-2xl border border-box-border shadow-sm space-y-6">
          <div class="space-y-1">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ isZh ? '提交您的疑问或工单' : 'Submit a Support Ticket' }}
            </h2>
            <p class="text-xs text-gray-500">
              {{ isZh ? '填写以下信息，我们通常会在 2 小时内给您答复。' : 'Fill out the form below and we will respond within 2 hours.' }}
            </p>
          </div>

          <div v-if="submitted" class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{{ isZh ? '提交成功！我们的客服团队已收到您的信息，将尽快与您联系。' : 'Ticket submitted successfully! Our support team will get back to you shortly.' }}</span>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {{ isZh ? '您的姓名' : 'Your Name' }}
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  :placeholder="isZh ? '例如：张先生' : 'e.g. John Doe'"
                  class="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-body border border-box-border focus:outline-none focus:border-primary text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {{ isZh ? '电子邮箱' : 'Email Address' }}
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  :placeholder="isZh ? 'name@example.com' : 'name@example.com'"
                  class="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-body border border-box-border focus:outline-none focus:border-primary text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {{ isZh ? '问题类型' : 'Issue Category' }}
              </label>
              <select
                v-model="form.category"
                class="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-body border border-box-border focus:outline-none focus:border-primary text-gray-900 dark:text-white"
              >
                <option value="playback">{{ isZh ? '视频播放与清晰度问题' : 'Video Playback & Resolution' }}</option>
                <option value="iframe">{{ isZh ? '嵌入式 Player / 防盗链集成' : 'Embedded Player & iFrame Integration' }}</option>
                <option value="copyright">{{ isZh ? '版权举报与法律合规' : 'Copyright & DMCA Notice' }}</option>
                <option value="business">{{ isZh ? '商务合作与广告注入' : 'Business Cooperation & Ads' }}</option>
                <option value="other">{{ isZh ? '其他意见反馈' : 'Other Inquiries' }}</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {{ isZh ? '详细描述' : 'Detailed Description' }}
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                :placeholder="isZh ? '请详细描述您遇到的问题或需求，包含发生错误的页面 URL 及终端类型更好...' : 'Describe the issue or feedback in detail...'"
                class="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-body border border-box-border focus:outline-none focus:border-primary text-gray-900 dark:text-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="px-6 py-3 text-xs sm:text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
            >
              {{ isZh ? '提交支持工单' : 'Submit Ticket' }}
            </button>
          </form>
        </div>

        <!-- Contact Direct Info (1 Col) -->
        <div class="space-y-6">
          <div class="bg-box-bg p-6 rounded-2xl border border-box-border shadow-sm space-y-4">
            <h3 class="font-bold text-base text-gray-900 dark:text-white">
              {{ isZh ? '直连客服方式' : 'Direct Contact Channels' }}
            </h3>
            <ul class="space-y-3 text-xs text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <span class="font-semibold text-primary">Email:</span>
                <span>support@videoplay.cyou</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="font-semibold text-primary">Live Chat:</span>
                <span>{{ isZh ? '工作日 09:00 - 22:00 在线客服响应' : 'Mon-Fri 09:00 - 22:00 UTC' }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="font-semibold text-primary">Location:</span>
                <span>Global Distributed Cloud CDN Nodes</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-6 rounded-2xl border border-primary/20 space-y-3">
            <h4 class="font-bold text-sm text-gray-900 dark:text-white">
              {{ isZh ? '需要快速解答？' : 'Need Quick Answers?' }}
            </h4>
            <p class="text-xs text-gray-600 dark:text-gray-300">
              {{ isZh ? '大部分视频播放异常、防盗链阻断与黑屏问题均可在常见问题中找到解决方案。' : 'Most common video player loading issues can be solved instantly in our FAQ section.' }}
            </p>
            <NuxtLink to="/faq" class="inline-block px-4 py-2 text-xs font-semibold rounded-full bg-primary text-white hover:bg-primary/90 transition-all">
              {{ isZh ? '前往 FAQ 常见问题' : 'Go to FAQ' }}
            </NuxtLink>
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
  title: computed(() => isZh.value ? '服务与技术支持 - VideoPlay Cinema' : 'Support & Assistance - VideoPlay Cinema')
})

const form = reactive({
  name: '',
  email: '',
  category: 'playback',
  message: ''
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}

const supportCards = computed(() => [
  {
    title: isZh.value ? '播放技术支持' : 'Playback Support',
    desc: isZh.value ? '解决视频黑屏、加载缓慢及 iFrame 嵌入兼容性问题。' : 'Troubleshoot black screen, slow buffering, and HTML5 embed issues.',
    actionText: isZh.value ? '提交问题' : 'Get Help',
    link: '#',
    icon: 'h-icon-play'
  },
  {
    title: isZh.value ? '常见问题 FAQ' : 'Help FAQ',
    desc: isZh.value ? '快速查阅播放规范、分辨率设置及防盗链防护机制。' : 'Explore player setup guides, resolution specs, and CDN rules.',
    actionText: isZh.value ? '查看解答' : 'View Answers',
    link: '/faq',
    icon: 'h-icon-faq'
  },
  {
    title: isZh.value ? '版权与法律' : 'Copyright & Legal',
    desc: isZh.value ? '提交 DMCA 删除通知、侵权申诉及法律合规要求。' : 'Submit DMCA notices, copyright claims, and legal queries.',
    actionText: isZh.value ? '申诉通道' : 'Legal Contact',
    link: '/privacy',
    icon: 'h-icon-legal'
  },
  {
    title: isZh.value ? '商务与 API 接入' : 'Business & API',
    desc: isZh.value ? '洽谈嵌入式视频播放引擎授权及广告合作。' : 'Inquire about video engine licensing and strategic partnerships.',
    actionText: isZh.value ? '商务洽谈' : 'Contact Business',
    link: '#',
    icon: 'h-icon-biz'
  }
])
</script>
