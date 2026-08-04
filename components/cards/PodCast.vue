<template>
    <div
        class="lg:p-1 relative h-auto flex flex-col lg:rounded-2xl lg:bg-box-bg lg:shadow-lg lg:shadow-box-shadow lg:border lg:border-box-border group hover:border-primary/40 transition-all">
        <NuxtLink :to="href" class="block relative h-max min-h-max overflow-hidden rounded-xl">
            <img :src="coverImage" :alt="title"
                class="w-full h-36 sm:h-40 lg:h-48 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"/>
            <span class="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs text-white bg-primary/90 backdrop-blur-sm font-semibold shadow">
                {{ duration }}
            </span>
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div class="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </NuxtLink>
        <div class="lg:px-2 pt-3 lg:pb-4 xl:px-4 h-full flex flex-col justify-between space-y-3">
            <div>
                <NuxtLink :to="href">
                    <h2 class="font-bold text-base md:text-lg line-clamp-2 text-gray-800 dark:text-white group-hover:text-primary transition-colors leading-snug">
                        {{ title }}
                    </h2>
                </NuxtLink>
                <p v-if="description" class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                    {{ description }}
                </p>
            </div>
            <div class="flex items-center justify-between pt-1">
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium">
                    {{ category || 'Video' }}
                </span>
                <NuxtLink :to="href"
                    class="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                    <span>{{ t('playNow') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const { t } = useLanguage()

const { title, href, duration, coverImage, category, createdAt, description } = defineProps<{
    title: string,
    href: string,
    duration: string,
    coverImage: string,
    category?: string,
    createdAt?: string,
    description?: string
}>()
</script>