<template>
    <section class="pt-20 md:pt-24">
        <AtomsContainer>
            <div class="grid md:grid-cols-2 gap-10 xl:gap-14 relative">
                <div class="flex md:h-full">
                    <div
                        class="w-full md:h-full rounded-3xl bg-white dark:bg-body shadow-lg shadow-box-shadow border border-box-border overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="VideoPlay Experience" width="500"
                            class="w-full h-full object-cover rounded-2xl">
                    </div>
                </div>
                <div class="md:py-2 lg:py-4 relative">
                    <div class="absolute right-0 top-0 h-full w-full flex justify-end">
                        <span class="flex opacity-20">
                            <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                            <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
                        </span>
                    </div>
                    <div class="relative">
                        <AtomsTitle :texte="t('aboutTitle')" />
                        <p class="text-gray-600 dark:text-gray-300 pt-6 leading-relaxed text-sm sm:text-base">
                            {{ t('aboutText') }}
                        </p>
                        <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
                            <div
                                class="text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3">
                                <h3 class="text-primary font-bold text-xl sm:text-2xl lg:text-3xl">100%</h3>
                                <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">{{ t('aboutStat1') }}</p>
                            </div>
                            <div
                                class="text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3">
                                <h3 class="text-primary font-bold text-xl sm:text-2xl lg:text-3xl">0s</h3>
                                <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">{{ t('aboutStat2') }}</p>
                            </div>
                            <div
                                class="text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3">
                                <h3 class="text-primary font-bold text-xl sm:text-2xl lg:text-3xl">4K</h3>
                                <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">{{ t('aboutStat3') }}</p>
                            </div>
                        </div>
                        <div class="pt-8 flex">
                            <AtomsLinkBtn href="/video/1" variant="primary">
                                {{ t('aboutExperience') }}
                            </AtomsLinkBtn>
                        </div>
                    </div>
                </div>
            </div>
        </AtomsContainer>
    </section>
</template>

<script setup lang="ts">
const { t } = useLanguage()
</script>