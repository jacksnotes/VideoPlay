<template>
  <div class="pt-44 md:pt-48 pb-20 min-h-screen bg-body text-gray-800 dark:text-gray-100">
    <AtomsContainer class-name="max-w-4xl mx-auto space-y-10">
      <!-- Header -->
      <div class="text-center space-y-4 pb-6 border-b border-box-border">
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
          {{ isZh ? '法律合规与隐私保护' : 'Legal Compliance & Protection' }}
        </span>
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          {{ isZh ? '隐私政策 (Privacy Policy)' : 'Privacy Policy' }}
        </h1>
        <p class="text-xs sm:text-sm text-gray-500">
          {{ isZh ? '最后更新日期：2026 年 8 月 3 日' : 'Last Updated: August 3, 2026' }}
        </p>
      </div>

      <!-- Policy Content Cards -->
      <div class="space-y-6">
        <!-- Section 1 -->
        <div class="bg-box-bg p-6 sm:p-8 rounded-2xl border border-box-border shadow-sm space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-sm shrink-0">1</span>
            <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {{ isZh ? '导言与总体原则' : 'Introduction & General Principles' }}
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-11">
            {{ isZh
              ? '欢迎访问 VideoPlay Cinema（以下简称“本平台”或“我们”）。我们高度重视用户的个人隐私与数据安全。本隐私政策旨在向您说明在您使用本平台播放视频、浏览分类及提交反馈时，我们如何收集、使用、存储及保护您的相关数据。'
              : 'Welcome to VideoPlay Cinema ("we", "our", or "us"). We are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you access our streaming platform.'
            }}
          </p>
        </div>

        <!-- Section 2 -->
        <div class="bg-box-bg p-6 sm:p-8 rounded-2xl border border-box-border shadow-sm space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-sm shrink-0">2</span>
            <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {{ isZh ? '信息收集与使用' : 'Information Collection & Usage' }}
            </h2>
          </div>
          <div class="pl-11 space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              {{ isZh
                ? '当您使用本平台时，我们仅在以下场景收集最小维度的必要数据：'
                : 'When you use VideoPlay, we collect minimal necessary data under the following circumstances:'
              }}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div class="p-4 rounded-xl bg-body border border-box-border space-y-1">
                <h3 class="font-semibold text-gray-900 dark:text-white text-xs">
                  {{ isZh ? '偏好与语言' : 'Preferences & Locale' }}
                </h3>
                <p class="text-[11px] text-gray-500">
                  {{ isZh ? '本地存储您的语言（中/英）设置，提供一致的语言体验。' : 'Stores locale preference (EN/ZH) locally.' }}
                </p>
              </div>
              <div class="p-4 rounded-xl bg-body border border-box-border space-y-1">
                <h3 class="font-semibold text-gray-900 dark:text-white text-xs">
                  {{ isZh ? '网络日志' : 'Network Logs' }}
                </h3>
                <p class="text-[11px] text-gray-500">
                  {{ isZh ? '仅包含匿名 IP 与浏览器 User-Agent，用于 CDN 防护与故障调试。' : 'Anonymized IP and User-Agent for CDN debugging.' }}
                </p>
              </div>
              <div class="p-4 rounded-xl bg-body border border-box-border space-y-1">
                <h3 class="font-semibold text-gray-900 dark:text-white text-xs">
                  {{ isZh ? '支持工单' : 'Support Tickets' }}
                </h3>
                <p class="text-[11px] text-gray-500">
                  {{ isZh ? '收集您主动填写的姓名和邮箱，仅用于回复工单。' : 'Name and email for resolving support tickets.' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3 -->
        <div class="bg-box-bg p-6 sm:p-8 rounded-2xl border border-box-border shadow-sm space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-sm shrink-0">3</span>
            <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {{ isZh ? '第三方嵌入式播放器与防盗链说明' : 'Third-Party Embedded Players & iFrame Policies' }}
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-11">
            {{ isZh
              ? '本平台视频采用 HTML5 嵌入式播放器（iFrame）形式展现。当您在播放窗口中播放视频时，请求将直接发送至对应的第三方视频提供方服务器。第三方视频服务商可能会根据其自身的隐私政策收集必要的播放 Cookie 或校验 HTTP Referer 来源。我们建议您阅读对应第三方视频源的隐私声明。'
              : 'VideoPlay leverages standard HTML5 iFrame embedding to render videos. When streaming a video, requests are sent directly to third-party video host servers. Third-party hosts may process telemetry according to their own privacy policies.'
            }}
          </p>
        </div>

        <!-- Section 4 -->
        <div class="bg-box-bg p-6 sm:p-8 rounded-2xl border border-box-border shadow-sm space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-sm shrink-0">4</span>
            <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {{ isZh ? 'Cookie 及本地存储技术' : 'Cookie & Local Storage Technology' }}
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-11">
            {{ isZh
              ? '我们使用必要的 LocalStorage 和 Session Cookies 来维持核心功能（例如记录全屏模式偏好、视频点赞收藏状态及语言选择）。我们不会将此类本地存储数据出售或提供给任何广告跟踪机构。'
              : 'We use necessary LocalStorage and cookies to store basic site functionality (e.g. liked videos, saved bookmarks, language preferences). We never sell your personal data to third-party advertisers.'
            }}
          </p>
        </div>

        <!-- Section 5 -->
        <div class="bg-box-bg p-6 sm:p-8 rounded-2xl border border-box-border shadow-sm space-y-3">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-sm shrink-0">5</span>
            <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {{ isZh ? '数据安全与保护措施' : 'Data Security & Protection' }}
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-11">
            {{ isZh
              ? '我们采用全站 HTTPS 加密传输协议及分布式的云端防御措施，防止数据在传输过程中被未授权拦截、泄露或篡改。'
              : 'We apply industry-standard HTTPS encryption and cloud CDN firewalls to protect transmission integrity and prevent unauthorized access.'
            }}
          </p>
        </div>

        <!-- Section 6 -->
        <div class="bg-box-bg p-6 sm:p-8 rounded-2xl border border-box-border shadow-sm space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-sm shrink-0">6</span>
            <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {{ isZh ? '您的权利与联系方式' : 'Your Rights & Contact Us' }}
            </h2>
          </div>
          <div class="pl-11 space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              {{ isZh
                ? '您有权随时查阅、更正或要求删除您在客服工单中提交的个人数据。如果您对本隐私政策有任何疑问或需要法律与版权协作，请联系我们的隐私团队：'
                : 'You reserve the right to request access to or deletion of your support ticket data. If you have questions regarding this Privacy Policy, please contact our legal team:'
              }}
            </p>
            <div class="p-4 rounded-xl bg-body border border-box-border text-xs space-y-1.5 inline-block">
              <p><strong>Email:</strong> privacy@videoplay.cyou</p>
              <p><strong>Legal Office:</strong> VideoPlay Compliance Team</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Back Link -->
      <div class="text-center pt-4">
        <NuxtLink to="/" class="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold rounded-full bg-box-bg border border-box-border text-primary hover:border-primary transition-all">
          <span>&larr;</span>
          <span>{{ isZh ? '返回首页' : 'Return to Home' }}</span>
        </NuxtLink>
      </div>
    </AtomsContainer>
  </div>
</template>

<script setup lang="ts">
const { currentLang } = useLanguage()
const isZh = computed(() => currentLang.value === 'zh')

useHead({
  title: computed(() => isZh.value ? '隐私政策 - VideoPlay Cinema' : 'Privacy Policy - VideoPlay Cinema')
})
</script>
