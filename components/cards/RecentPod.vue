<template>
    <div class="w-full relative rounded-2xl overflow-hidden group shadow-lg">
        <NuxtLink :to="href" class="block w-full h-full relative">
            <img :src="coverImage" :alt="title" class="w-full aspect-[16/10] sm:aspect-square object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-primary/90 backdrop-blur-md shadow-md">
                {{ duration }}
            </span>
            
            <div class="absolute py-3 px-4 bottom-0 inset-x-0 flex flex-col justify-end space-y-2">
                <h2 class="text-white font-bold text-sm sm:text-base line-clamp-2 drop-shadow-md group-hover:text-primary transition-colors">
                    {{ title }}
                </h2>
                <div class="pt-1">
                    <span class="inline-flex items-center text-white rounded-full py-1 px-3 gap-2 text-xs font-medium bg-primary/80 group-hover:bg-primary shadow-md backdrop-blur-sm transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="currentColor" class="w-3 h-3">
                            <path fill-rule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clip-rule="evenodd" />
                        </svg>
                        {{ t('playNow') }}
                    </span>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
const { t } = useLanguage()

const { title, href, duration, coverImage } = defineProps<{
    title: string,
    href: string,
    duration: string,
    coverImage: string
}>()
</script>