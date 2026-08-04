export interface Video {
  id: string
  title: { en: string; zh: string }
  description: { en: string; zh: string }
  embedUrl: string
  coverImage: string
  duration: string
  category: { en: string; zh: string }
  views: string
  likes: string
  createdAt: string
  author: {
    name: string
    avatar: string
    subscribers: { en: string; zh: string }
  }
}

export const useVideos = () => {
  const { currentLang } = useLanguage()

  const rawVideos: Video[] = [
    {
      id: '1',
      title: {
        en: '4K Ultra HD Showcase: Exploring Polar Frontiers & Uncharted Worlds',
        zh: '高燃4K精彩剪辑：探索极地秘境与未知世界'
      },
      description: {
        en: 'Captured in 4K resolution, journey through deep blue oceans and majestic snowy peaks. Experience breathtaking nature and visual wonder via embedded rendering.',
        zh: '本片采用全4K超高清摄像机拍摄，带你走进蔚蓝深海与雪山极境，感受震撼视觉奇观与大自然的无穷魅力。本视频采用专业嵌入式渲染。'
      },
      embedUrl: 'https://view.4meplayer.com/#ylrxs',
      coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
      duration: '01:00',
      category: { en: 'Movies', zh: '电影' },
      views: '158.4k',
      likes: '12.3k',
      createdAt: '2026-07-28',
      author: {
        name: 'Geek Cinema Studio',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        subscribers: { en: '452K', zh: '45.2万' }
      }
    },
    {
      id: '2',
      title: {
        en: 'Tech 2026: AI & The Ultimate Frontier of Intelligent Automation',
        zh: '2026 科技前沿：AI与智能未来的终极对话'
      },
      description: {
        en: 'An in-depth look into the convergence of deep neural networks and robotics, exploring the next decade of intelligent transformation.',
        zh: '深入剖析最新神经网络与机器人技术的深度融合，带你展望未来十年的科技变革与智能化生活体验。'
      },
      embedUrl: 'https://view.4meplayer.com/#9bxxz',
      coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      duration: '05:14',
      category: { en: 'Tech', zh: '科技' },
      views: '92.1k',
      likes: '8.7k',
      createdAt: '2026-07-29',
      author: {
        name: 'Future Tech Lab',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        subscribers: { en: '289K', zh: '28.9万' }
      }
    },
    {
      id: '3',
      title: {
        en: 'Epic Anime Battle Montage: Rise of the Heroes & Final Showdown',
        zh: '热血动漫名场面精选：勇者崛起与终极决战'
      },
      description: {
        en: 'A compilation of top-tier anime battle scenes paired with intense synthwave music. Relive legendary moments of passion and ambition!',
        zh: '收录近百部经典热血动漫的巅峰战斗对决片段，配上激昂混音背景音乐，重温青春与梦想的热血时刻！'
      },
      embedUrl: 'https://playmogo.com/e/ldypys5x33mp',
      coverImage: 'https://doimg.net/snaps/09hnn7q1iz98umgn.jpg',
      duration: '01:05',
      category: { en: 'Anime', zh: '动漫' },
      views: '230.8k',
      likes: '24.1k',
      createdAt: '2026-07-25',
      author: {
        name: 'Anime Rhapsody Club',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        subscribers: { en: '620K', zh: '62.0万' }
      }
    },
    {
      id: '4',
      title: {
        en: 'Cyberpunk Neon City Live Music & Visuals: Lofi Chill Waves',
        zh: '赛博朋克都市夜景 Live Music & Visuals 视觉盛宴'
      },
      description: {
        en: 'Immersive neon cyberpunk atmospheres mixed with relaxing Lofi Synthwave melodies, perfect for study, work and late night relaxation.',
        zh: '沉浸式霓虹赛博朋克光影，搭配放松解压的 Lofi Synthwave 音乐，适合学习、工作与放松时播放。'
      },
      embedUrl: 'https://playmogo.com/e/kr5eapi3fly1',
      coverImage: 'https://doimg.net/snaps/n7oxw0eyb700daug.jpg',
      duration: '01:05',
      category: { en: 'Music', zh: '音乐' },
      views: '84.5k',
      likes: '6.9k',
      createdAt: '2026-07-30',
      author: {
        name: 'CyberWave FM',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        subscribers: { en: '194K', zh: '19.4万' }
      }
    },
    {
      id: '5',
      title: {
        en: 'Full Panorama Nature Doc: Marvelous Creatures of the Rainforest',
        zh: '全景自然纪录片：神秘热带雨林中的奇妙生物'
      },
      description: {
        en: 'Follow wildlife film crews deep into the Amazon basin to capture rare species and breathtaking untouched wilderness.',
        zh: '跟随探险摄像团队深入亚马逊热带雨林，记录珍稀野生动物的真实生存状态与壮丽自然景色。'
      },
      embedUrl: 'https://bigshare.io/watch/107957',
      coverImage: 'https://bigshare.io/thumbnails/1minuteofNeymarbeingNeymar｜neymarneymarjraregamfootbal....mp4.jpg',
      duration: '01:00',
      category: { en: 'Documentary', zh: '纪录片' },
      views: '112.3k',
      likes: '14.5k',
      createdAt: '2026-07-20',
      author: {
        name: 'GeoExplorer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
        subscribers: { en: '518K', zh: '51.8万' }
      }
    },
    {
      id: '6',
      title: {
        en: 'Sci-Fi Blockbuster Trailer Breakdown: Interstellar Rescue',
        zh: '科幻巨制预告片赏析：星际穿梭与超时空救援'
      },
      description: {
        en: 'Exclusive preview breakdown of the upcoming sci-fi masterpiece, revealing high-dimensional visual effects behind the scenes.',
        zh: '年度期待科幻巨作全新预告，揭秘高维空间与黑洞穿梭的视觉特效制作内幕。'
      },
      embedUrl: 'https://vids.st/v/113453',
      coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      duration: '01:06',
      category: { en: 'Movies', zh: '电影' },
      views: '340.1k',
      likes: '31.2k',
      createdAt: '2026-07-31',
      author: {
        name: 'MovieCentral',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
        subscribers: { en: '893K', zh: '89.3万' }
      }
    },
    {
      id: '7',
      title: {
        en: 'Web Fullstack Masterclass: Building Modern High-Concurrency Systems',
        zh: 'Web全栈开发实战教程：从零打造现代高并发系统'
      },
      description: {
        en: 'Comprehensive workshop for developers covering high-performance frontend rendering, microservices architecture, and caching.',
        zh: '面向开发者的深度实战讲座，覆盖前端高性能渲染、后端微服务构架以及高性能缓存优化。'
      },
      embedUrl: 'https://goodstream.one/embed-t3j5ihtgsmav.html',
      coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      duration: '05:06',
      category: { en: 'Tech', zh: '科技' },
      views: '67.8k',
      likes: '8.1k',
      createdAt: '2026-07-18',
      author: {
        name: 'CodeMaster Pro',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        subscribers: { en: '335K', zh: '33.5万' }
      }
    },
    {
      id: '8',
      title: {
        en: 'Aesthetic Asian Animation Showcase: Mythical Legends',
        zh: '国漫崛起篇：唯美中国风动画短片大赏'
      },
      description: {
        en: 'Ink wash art meets modern 3D animation techniques, showcasing rich cultural artistic expressions and legendary tales.',
        zh: '水墨写意与现代三维动画的完美碰撞，展示华夏五千年悠久文化的别样艺术张力。'
      },
      embedUrl: 'https://show.vidplayer.live/#xfwtk',
      coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
      duration: '01:05',
      category: { en: 'Anime', zh: '动漫' },
      views: '198.0k',
      likes: '19.7k',
      createdAt: '2026-07-27',
      author: {
        name: 'HuaFeng Animation',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
        subscribers: { en: '410K', zh: '41.0万' }
      }
    }
  ]

  // Formatted helper for localized video data
  const getLocalizedVideo = (v: Video) => {
    const lang = currentLang.value
    return {
      ...v,
      title: v.title[lang] || v.title.en,
      description: v.description[lang] || v.description.en,
      category: v.category[lang] || v.category.en,
      author: {
        ...v.author,
        subscribers: v.author.subscribers[lang] || v.author.subscribers.en
      }
    }
  }

  const videos = computed(() => rawVideos.map(getLocalizedVideo))

  const getVideoById = (id: string) => {
    const found = rawVideos.find(v => v.id === id) || rawVideos[0]
    return getLocalizedVideo(found)
  }

  const getRelatedVideos = (currentId: string, limit: number = 4) => {
    return rawVideos.filter(v => v.id !== currentId).slice(0, limit).map(getLocalizedVideo)
  }

  return {
    rawVideos,
    videos,
    getVideoById,
    getRelatedVideos
  }
}
