<template>
    <section class="relative w-full">
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div
                class="h-24 w-2/3 bg-gradient-to-br from-primary opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40">
            </div>
            <div
                class="h-20 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40">
            </div>
        </div>
        <AtomsContainer class-name="relative">
            <div aria-hidden="true" class="absolute inset-y-0 w-44 left-0 hidden dark:flex">
                <div
                    class="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20">
                </div>
            </div>
            <div
                class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left space-y-2">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold">
                            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            {{ t('heroBadge') }}
                        </span>
                        <h1 class="text-gray-900 pt-3 dark:text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                            {{ t('heroTitle1') }} <br>
                            <span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#8cd66a]">
                                {{ t('heroTitle2') }}
                            </span>
                        </h1>
                    </div>

                    <p class="text-gray-600 dark:text-gray-300 pt-6 text-center lg:text-left mx-auto max-w-xl text-base leading-relaxed">
                        {{ t('heroSubtitle') }}
                    </p>

                    <div class="flex items-center gap-4 pt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <AtomsLinkBtn href="/video/1" variant="primary" class="w-full sm:w-max flex justify-center shadow-lg shadow-primary/30">
                            <span class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                                {{ t('heroPlayBtn') }}
                            </span>
                        </AtomsLinkBtn>

                        <a href="#popular" class="w-full sm:w-auto">
                            <AtomsLinkBtn href="#popular" variant="costum" costum-span-class="px-6 md:px-7 hover:bg-primary/10"
                                costum-text-color="text-primary">
                                <div class="flex items-center gap-2 font-medium">
                                    <span>{{ t('heroExploreBtn') }}</span>
                                </div>
                            </AtomsLinkBtn>
                        </a>
                    </div>

                    <div class="pt-8 lg:pt-10 w-max mx-auto lg:mx-0">
                        <div class="flex items-center text-center flex-col sm:flex-row gap-4 sm:gap-0">
                            <div class="flex items-center">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" width="40" alt="avatar"
                                    class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" width="40" alt="avatar"
                                    class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover -ml-2.5">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" width="40" alt="avatar"
                                    class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover -ml-2.5">
                                <span
                                    class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-primary/20 flex items-center justify-center text-xs text-primary font-bold -ml-2.5">
                                    50k+
                                </span>
                            </div>
                            <div class="pl-3 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                                {{ t('heroAudience') }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Spotlight video card -->
                <div class="lg:h-full hidden md:flex items-center justify-center">
                    <NuxtLink to="/video/1" class="group relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-900 shadow-2xl border-4 border-box-border/80 hover:border-primary/50 transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80"
                            alt="Featured Video"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="relative w-20 h-20 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl shadow-primary/50 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 ml-1 fill-current" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                        </div>

                        <div class="absolute bottom-6 inset-x-6 flex items-end justify-between">
                            <div>
                                <span class="px-2.5 py-1 text-xs font-bold rounded-md bg-primary text-white">{{ t('heroSpotlightTag') }}</span>
                                <h3 class="text-white text-lg font-bold mt-2 line-clamp-1">
                                    {{ spotlightTitle }}
                                </h3>
                            </div>
                            <span class="text-xs text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full font-mono">
                                24:15
                            </span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </AtomsContainer>
    </section>
</template>

<script setup lang="ts">
const { t, currentLang } = useLanguage()
const { getVideoById } = useVideos()

const spotlightTitle = computed(() => getVideoById('1').title)
</script>