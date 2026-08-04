<template>
    <footer class="pt-20 bg-gray-100 dark:bg-body border-t border-gray-200 dark:border-gray-100/20">
        <AtomsContainer class-name="pb-10">
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 gap-y-10">
                <div class="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
                    <NuxtLink to="/" class="flex items-center gap-2">
                        <span class="flex">
                            <span class="w-3 h-6 rounded-l-full flex bg-primary"></span>
                            <span class="w-3 h-6 rounded-r-full flex bg-[#f88fc2] mt-2"></span>
                        </span>
                        <span class="text-xl font-bold text-gray-800 dark:text-white">Video<span class="text-primary">Play</span></span>
                    </NuxtLink>

                    <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {{ t('footerTagline') }}
                    </p>
                </div>

                <BlocksFooterNavBlock :title="t('footerQuickLinks')" :links="quickLinks" />
                <BlocksFooterNavBlock :title="t('footerCategories')" :links="categoryLinks" />
                <BlocksFooterNavBlock :title="t('footerSupport')" :links="supportLinks" />
                <BlocksFooterNavBlock :title="t('footerAboutUs')" :links="aboutLinks" />
            </div>
        </AtomsContainer>
        <div class="py-4 bg-gray-200 dark:bg-[rgb(10,16,29)]">
            <AtomsContainer>
                <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                    <div>
                        &copy; {{ new Date().getFullYear() }} VideoPlay Cinema. {{ t('footerCopyright') }}
                    </div>

                    <div class="flex items-center gap-x-4">
                        <span>{{ t('footerProtocol') }}</span>
                        <span>•</span>
                        <span>{{ t('footerHdSupport') }}</span>
                    </div>
                </div>
            </AtomsContainer>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const { t } = useLanguage()

const quickLinks = computed(() => [
    { href: "/", text: t('navHome') },
    { href: "/#popular", text: t('navPopular') },
    { href: "/#latest", text: t('navLatest') },
    { href: "/video/1", text: t('navCinema') }
])
const categoryLinks = computed(() => [
    { href: "/#popular", text: t('catMovie') },
    { href: "/#popular", text: t('catAnime') },
    { href: "/#popular", text: t('catTech') },
    { href: "/#popular", text: t('catDoc') }
])

const supportLinks = computed(() => [
    { href: "/support", text: t('footerSupport') },
    { href: "/faq", text: t('navFaq') }
])

const aboutLinks = computed(() => [
    { href: "/about", text: t('footerAboutUs') },
    { href: "/privacy", text: t('privacyPolicy') }
])
</script>