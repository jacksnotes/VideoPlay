<template>
    <section id="latest" class="pt-20 md:pt-24 relative">
        <AtomsContainer>
            <div class="flex justify-between items-center pb-6">
                <div>
                    <AtomsTitle :texte="t('latestTitle')" />
                </div>
                <div class="flex items-center min-w-max relative">
                    <AtomsLinkBtn href="/#popular" variant="primary">
                        {{ t('exploreAll') }}
                    </AtomsLinkBtn>
                </div>
            </div>
            <div class="relative">
                <div 
                    class="flex absolute top-1/2 -left-5 -translate-y-1/2 z-10 transition duration-300 ease-linear" 
                    :class="prevIsVisible?'visible opacity-100':'invisible opacity-0'" 
                >
                    <AtomsSwiperNavButton @click="scrollToLeft()">
                        <IconsPrevIco />
                    </AtomsSwiperNavButton>
                </div>
                <div  
                    class="flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 transition duration-300 ease-linear" 
                    :class="nextIsVisible?'visible opacity-100':'invisible opacity-0'">
                    <AtomsSwiperNavButton @click="scrollToRight()">
                        <IconsNextIco />
                    </AtomsSwiperNavButton>
                </div>

                <div data-slide-recent @scroll="initScroll()"
                    class="flex items-stretch gap-5 overflow-hidden overflow-x-auto invisible-scroll py-2">
                    <div
                        v-for="item in videos.slice(0, 5)"
                        :key="item.id"
                        class="w-11/12 min-w-[91.666667%] xs:w-80 xs:min-w-[20rem] md:w-1/3 md:min-w-[33.333333%] lg:w-1/4 lg:min-w-[25%]">
                        <CardsRecentPod
                            :title="item.title"
                            :duration="item.duration"
                            :href="'/video/' + item.id"
                            :cover-image="item.coverImage"
                        />
                    </div>
                </div>
            </div>
        </AtomsContainer>
    </section>
</template>

<script lang="ts" setup>
const { t } = useLanguage()
const { videos } = useVideos()

const nextIsVisible = useState('nextIsVisible', () => false)
const prevIsVisible = useState('prevIsVisible', () => false)

let element: HTMLDivElement | null = null

function initScroll(): void {
    if (typeof document === "undefined") return
    if (!element) {
        element = document.querySelector("[data-slide-recent]") as HTMLDivElement
    }
    if (!element) return
    
    prevIsVisible.value = element.scrollLeft > 5
    nextIsVisible.value = element.scrollLeft < element.scrollWidth - element.offsetWidth - 5
}

function scrollToLeft(): void {
    if (!element && typeof document !== "undefined") {
        element = document.querySelector("[data-slide-recent]") as HTMLDivElement
    }
    if (element) {
        element.scrollBy({ left: -320, behavior: 'smooth' })
    }
}

function scrollToRight(): void {
    if (!element && typeof document !== "undefined") {
        element = document.querySelector("[data-slide-recent]") as HTMLDivElement
    }
    if (element) {
        element.scrollBy({ left: 320, behavior: 'smooth' })
    }
}

onMounted(() => {
    if (typeof window !== "undefined") {
        nextIsVisible.value = true
        initScroll()
    }
})
</script>