<template>
    <section id="popular" class="pt-16 pb-12 relative">
        <div aria-hidden="true" class="absolute inset-y-0 w-44 left-0 hidden dark:flex">
            <div
                class="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20">
            </div>
        </div>
        <div class="absolute top-14 inset-x-0 h-64 flex items-start">
            <div
                class="h-24 w-2/3 bg-gradient-to-br from-primary opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40">
            </div>
            <div
                class="h-20 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40">
            </div>
        </div>
        <AtomsContainer class-name="relative">
            <!-- Header & Filter -->
            <div class="flex flex-col md:flex-row md:items-center justify-between pb-8 gap-4 relative">
                <div>
                    <AtomsTitle :texte="t('popularTitle')" />
                    <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {{ t('popularSubtitle') }}
                    </p>
                </div>
                
                <!-- Category Filters -->
                <div class="flex flex-wrap items-center gap-2">
                    <button
                        v-for="cat in categoryList"
                        :key="cat.key"
                        @click="activeCategoryKey = cat.key"
                        :class="[
                            'px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300',
                            activeCategoryKey === cat.key
                                ? 'bg-primary text-white shadow-md shadow-primary/30 scale-105'
                                : 'bg-box-bg border border-box-border text-gray-600 dark:text-gray-300 hover:border-primary/40'
                        ]"
                    >
                        {{ cat.label }}
                    </button>
                </div>
            </div>

            <!-- Video Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <CardsPodCast
                    v-for="item in filteredVideos"
                    :key="item.id"
                    :title="item.title"
                    :href="'/video/' + item.id"
                    :duration="item.duration"
                    :cover-image="item.coverImage"
                    :category="item.category"
                    :created-at="item.createdAt"
                    :description="item.description"
                />
            </div>
        </AtomsContainer>
    </section>
</template>

<script setup lang="ts">
const { t } = useLanguage()
const { rawVideos, videos } = useVideos()

const activeCategoryKey = ref('ALL')

const categoryList = computed(() => [
    { key: 'ALL', label: t('catAll') },
    { key: 'Movies', label: t('catMovie') },
    { key: 'Tech', label: t('catTech') },
    { key: 'Anime', label: t('catAnime') },
    { key: 'Music', label: t('catMusic') },
    { key: 'Documentary', label: t('catDoc') }
])

const filteredVideos = computed(() => {
    if (activeCategoryKey.value === 'ALL') return videos.value
    return videos.value.filter((v, idx) => rawVideos[idx].category.en === activeCategoryKey.value)
})
</script>