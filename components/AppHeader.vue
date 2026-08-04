<script lang="ts" setup>
const { currentLang, toggleLang, t } = useLanguage()
const navIsOpen = useState('navIsOpen', () => false)

function toggleNav(event: MouseEvent): void {
    event.preventDefault()
    navIsOpen.value = !navIsOpen.value
}

const navLinks = computed(() => [
    {
        text: t('navHome'),
        href: "/"
    },
    {
        text: t('navLatest'),
        href: "/#latest"
    },
    {
        text: t('navPopular'),
        href: "/#popular"
    },
    {
        text: t('navCinema'),
        href: "/video/1"
    }
])
</script>

<template>
    <header class="absolute inset-x-0 top-0 py-3 z-50">
        <AtomsContainer class-name="relative">
            <nav class="flex items-center justify-between w-full relative">
                <!-- App logo -->
                <div class="inline-flex relative bg-inherit">
                    <NuxtLink to="/" class="flex items-center gap-2">
                        <span class="flex">
                            <span class="w-3 h-6 rounded-l-full flex bg-primary"></span>
                            <span class="w-3 h-6 rounded-r-full flex bg-[#f88fc2] mt-2"></span>
                        </span>
                        <span class="text-xl font-bold text-gray-800 dark:text-white tracking-wide">
                            Video<span class="text-primary">Play</span>
                        </span>
                    </NuxtLink>
                </div>

                <!-- Nav items -->
                <div 
                    class="absolute top-full px-5 sm:px-8 md:px-12 lg:px-0 
                    lg:pt-0 lg:top-0 invisible opacity-40 lg:opacity-100 bg-body rounded-xl border border-box-border shadow-lg shadow-box-shadow 
                    lg:border-none lg:shadow-none lg:rounded-none
                    lg:bg-transparent w-full lg:w-max py-6 lg:py-0 lg:visible lg:relative flex 
                    transition-all duration-300 ease-linear origin-top translate-y-6 lg:translate-y-0"
                    :class="navIsOpen?'!visible !opacity-100 !translate-y-0':''">
                    <ul class="text-gray-700 dark:text-gray-100 w-full flex lg:items-center gap-y-4 lg:gap-x-8 flex-col lg:flex-row font-medium">
                        <AtomsNavLink v-for="navItem in navLinks" :key="navItem.text" :href="navItem.href" :text="navItem.text" />
                    </ul>
                </div>

                <!-- Right controls: Language Switcher, Theme Switcher, Play Button -->
                <div class="flex items-center bg-inherit gap-2 lg:gap-3 min-w-max">
                    <!-- Bilingual Language Switcher Button -->
                    <button
                        @click="toggleLang"
                        class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 border border-box-border transition-all"
                        title="Toggle Language / 切换语言"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                        <span>{{ currentLang === 'en' ? 'EN' : '中文' }}</span>
                    </button>

                    <ElementsThemeSwitcher />

                    <div class="hidden lg:flex lg:items-center gap-4">
                        <AtomsLinkBtn href="/video/1" variant="primary">
                            {{ t('playNow') }}
                        </AtomsLinkBtn>
                    </div>

                    <!-- Mobile drop down -->
                    <div class="flex lg:hidden items-center">
                        <ElementsDropDown>
                            <template #trigger>
                                <button
                                    class="outline-none bg-transparent p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>
                                <ul class="flex flex-col p-1">
                                    <li
                                        @click="toggleLang"
                                        class="flex select-none cursor-pointer items-center justify-between px-3 py-2 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-200 text-xs font-semibold">
                                        <span>语言 / Language</span>
                                        <span class="text-primary font-bold">{{ currentLang === 'en' ? 'English' : '中文' }}</span>
                                    </li>
                                    <li
                                        class="flex select-none cursor-pointer items-center gap-3 px-3 py-2 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-200 text-xs">
                                        <NuxtLink to="/video/1">
                                            {{ t('playNow') }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </template>
                        </ElementsDropDown>
                    </div>

                    <div class="flex lg:hidden border-l border-box-border pl-2">
                        <button @click="toggleNav" class="outline-none w-7 h-auto flex flex-col relative">
                            <span
                                class="w-6 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
                                :class="navIsOpen ? 'translate-y-1.5 rotate-[40deg] scale-x-100 ' : ' scale-x-50 origin-left'"></span>
                            <span
                                class="w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
                                :class="navIsOpen ? 'scale-x-0 opacity-0' : ''"></span>
                            <span
                                class="w-6 mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
                                :class="navIsOpen ? '-translate-y-1.5 -rotate-[40deg] scale-x-100 ' : ' scale-x-75 origin-left'"></span>
                        </button>
                    </div>
                </div>
            </nav>
        </AtomsContainer>
    </header>
</template>