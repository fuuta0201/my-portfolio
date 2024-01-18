export const info = {
  //baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "佐藤楓太",
  jobDescription: "フロントエンドエンジニア",
  about: `高専に在学し、来年度からは専攻科に進学します。研究では生体信号と機械学習を用いたデータ解析を行い、Nuxt.js、Astro.js、WordPress、MicroCMSなどを
    用いたフロントエンドエンジニアとしても仕事をしています。本ページではAstro.jsのThemeを用いてポートフォリオを作成しました。
  `,

  experience: [
    {
      name: "アルバイトとしてのフロントエンド開発",
      startDate: "2023年2月",
      endDate: "現在",
      description: [
        "- Docker,pug,scssを用いたWordPressテーマ開発",
        "- Vue.js,Nuxt3を用いたSSGサイト開発",
        "- Astro.jsを用いた静的サイト開発"
      ],
    },

    {
      name: "個人的開発事例",
      startDate: "2023年10月",
      endDate: "現在",
      description: [
        "- 自営業で自動車整備を営む友人のホームページをNuxt3,MicroCMSで制作。開発プロジェクトに記載しています。",
      ],
    },
  ],

  education: [
    {
      name: "高専電子制御工学科",
      startDate: "2019年4月",
      endDate: "現在",
      description: [
        "- アプリ開発や組み込み、制御工学や電気電子など幅広い分野を学習しました。",
      ],
    },
    {
      name: "高専専攻科",
      startDate: "2024年4月",
      endDate: "2026年3月卒業予定",
      description: [
        "- データサイエンスに関する研究を行う予定です。",
      ],
    },
  ],

  projects: [
    {
      title: "FREESTYLE 栁屋商会",
      isFeatured: true,
      thumbnail: "/assets/images/mv.jpg",
      url: "http://freestyle-yanagiya.jp",
      description: "自動車屋のホームページを作成しました。使用技術はNuxt3とMicroCMSです。",
      tech: [
        "Nuxt3",
        "MicroCMS",
        "Netlify",
      ],
    },
  ],
};
