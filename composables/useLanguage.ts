export type Language = 'en' | 'zh'

const translations: Record<string, { en: string; zh: string }> = {
  // Navigation
  navHome: { en: 'Home', zh: '首页' },
  navLatest: { en: 'Latest', zh: '最新上线' },
  navPopular: { en: 'Popular', zh: '热门推荐' },
  navCinema: { en: 'Watch Cinema', zh: '高清影院' },
  playNow: { en: 'Play Now', zh: '立即播放' },

  // Hero Section
  heroBadge: { en: 'LATEST • 4K ULTRA HD', zh: '最新上架 • 4K 超清视界' },
  heroTitle1: { en: 'Stream & Watch Premium', zh: '探索与在线观赏' },
  heroTitle2: { en: 'Video Cinema', zh: '视频影院' },
  heroSubtitle: {
    en: 'Explore trending movies, anime, tech insights and nature documentaries with seamless embedded streaming.',
    zh: '汇聚热门影片、高燃动漫、科技前沿与自然纪录片。无需复杂等待，即点即播！'
  },
  heroPlayBtn: { en: 'Start Watching Now', zh: '立即播放首推视频' },
  heroExploreBtn: { en: 'Explore Popular List', zh: '探索热门榜单' },
  heroAudience: { en: '50,000+ viewers streaming online', zh: '50,000+ 观众在线同时观影' },
  heroSpotlightTag: { en: 'TODAY SPOTLIGHT', zh: '今日焦点大片' },

  // Sections
  latestTitle: { en: 'Latest Uploads', zh: '最新上线视频' },
  exploreAll: { en: 'Explore Categories', zh: '查看全部分类' },
  popularTitle: { en: 'Popular Recommendations', zh: '热门视频推荐' },
  popularSubtitle: {
    en: 'Click any video card to open the dedicated player',
    zh: '点击任意视频即可跳转至专享嵌入式播放界面'
  },

  // Categories
  catAll: { en: 'All', zh: '全部' },
  catMovie: { en: 'Movies', zh: '电影' },
  catTech: { en: 'Tech', zh: '科技' },
  catAnime: { en: 'Anime', zh: '动漫' },
  catMusic: { en: 'Music', zh: '音乐' },
  catDoc: { en: 'Documentary', zh: '纪录片' },

  // About Section
  aboutTitle: {
    en: 'Dedicated to Fast, Ultra HD & Immersive Cinema Experience',
    zh: '致力于打造极速、清晰、全屏沉浸的在线视频影院'
  },
  aboutText: {
    en: 'VideoPlay utilizes lightweight modern architecture with seamless HTML5 embedded player integration (cross-platform iframe support). Zero ads, responsive, and instant 4K playback.',
    zh: 'VideoPlay 采用现代化轻量级架构，无缝集成先进的 HTML5 嵌入式播放引擎。全平台响应自适应，无论在桌面端还是移动端，均能享受秒级加载的超清视听盛宴。'
  },
  aboutStat1: { en: 'HD Embed', zh: '高清嵌入' },
  aboutStat2: { en: 'Instant Play', zh: '即点即播' },
  aboutStat3: { en: '4K Fullscreen', zh: '全屏支持' },
  aboutExperience: { en: 'Try Player Now', zh: '立即体验播放器' },

  // Video Detail Page
  backToHome: { en: 'Back to Home', zh: '返回首页' },
  videoCinema: { en: 'Video Cinema', zh: '视频影院' },
  duration: { en: 'Duration', zh: '时长' },
  views: { en: 'Views', zh: '播放量' },
  subscribers: { en: 'Subscribers', zh: '订阅者' },
  subscribe: { en: '+ Subscribe', zh: '+ 订阅' },
  subscribed: { en: 'Subscribed', zh: '已订阅' },
  like: { en: 'Like', zh: '点赞' },
  save: { en: 'Save', zh: '收藏' },
  saved: { en: 'Saved', zh: '已收藏' },
  share: { en: 'Share', zh: '分享' },
  copiedLink: { en: 'Copied Link!', zh: '已复制链接' },
  videoDesc: { en: 'Video Description', zh: '视频简介' },
  publishDate: { en: 'Publish Date', zh: '发布日期' },
  embedFormat: {
    en: 'Source Format: Embedded HTML5 iFrame Player',
    zh: '来源格式：嵌入式 HTML5 iFrame 播放器'
  },
  discussion: { en: 'Comments & Discussion', zh: '讨论区' },
  commentsCount: { en: 'comments', zh: '条评论' },
  commentPlaceholder: { en: 'Write a friendly comment...', zh: '发一条友善的评论吧...' },
  postComment: { en: 'Post Comment', zh: '发表评论' },
  recommendations: { en: 'Recommended Videos', zh: '推荐视频' },
  autoPlayNext: { en: 'Auto Play Next', zh: '自动播放下一首' },

  // Footer
  footerTagline: {
    en: 'Premium online video streaming platform with HD playback, category exploration, and instant player.',
    zh: '打造极致高品质在线视频观赏平台，提供高清流媒体播放、分类探索与极速播放体验。'
  },
  footerQuickLinks: { en: 'Quick Links', zh: '快速导航' },
  footerCategories: { en: 'Categories', zh: '视频分类' },
  footerSupport: { en: 'Support', zh: '服务与支持' },
  footerAboutUs: { en: 'About Us', zh: '关于我们' },
  footerCopyright: { en: 'All Rights Reserved.', zh: '版权所有.' },
  footerProtocol: { en: 'HTML5 iFrame Protocol Supported', zh: '支持 HTML5 iFrame 嵌入协议' },
  footerHdSupport: { en: '4K / 1080P Ultra HD', zh: '4K / 1080P 超清支持' },
  privacyPolicy: { en: 'Privacy Policy', zh: '隐私政策' },
  navFaq: { en: 'FAQ', zh: '常见问题' },
  navSupport: { en: 'Support', zh: '服务支持' },
  navAbout: { en: 'About Us', zh: '关于我们' }
}

export const useLanguage = () => {
  const currentLang = useState<Language>('app_language', () => 'en')

  const toggleLang = () => {
    currentLang.value = currentLang.value === 'en' ? 'zh' : 'en'
  }

  const setLang = (lang: Language) => {
    currentLang.value = lang
  }

  const t = (key: string): string => {
    const item = translations[key]
    if (!item) return key
    return item[currentLang.value] || item.en
  }

  return {
    currentLang,
    toggleLang,
    setLang,
    t
  }
}
