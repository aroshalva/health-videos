const iconPathBase = "/tabIcons";

export const allData = {
  intermittentFasting: {
    index: 0,
    name: "Intermittent Fasting",
    path: "/intermittent-fasting",
    iconPath: `${iconPathBase}/intermittent-fasting.png`,
    videos: {
      quick: ["dW_99QcCTzE", "VIhhrYjVhOk", "DnRQJzK6yvI"],
      long: [
        "DnRQJzK6yvI",
        "DnRQJzK6yvI",
        "DnRQJzK6yvI",
        "DnRQJzK6yvI",
        "DnRQJzK6yvI",
        "DnRQJzK6yvI",
        "DnRQJzK6yvI",
      ],
    },
  },
  ketogenicDiet: {
    index: 1,
    name: "Ketogenic Diet",
    path: "/ketogenic-diet",
    iconPath: `${iconPathBase}/ketogenic-diet.png`,
    videos: {
      quick: ["xwKmVjSXTDk"],
      long: ["yhulQ0XuAPM"],
    },
  },
  breadIsPoison: {
    index: 2,
    name: "Bread is Poison",
    path: "/bread-is-poison",
    iconPath: `${iconPathBase}/bread-is-poison.png`,
    videos: {
      quick: [],
      long: [],
    },
  },
  sugarIsPoison: {
    index: 3,
    name: "Sugar is Poison",
    path: "/sugar-is-poison",
    iconPath: `${iconPathBase}/sugar-is-poison.png`,
    videos: {
      quick: [],
      long: [],
    },
  },
  oilsThatArePoison: {
    index: 4,
    name: "Oils that are Poison",
    path: "/oils-that-are-poison",
    iconPath: `${iconPathBase}/oils-that-are-poison.png`,
    videos: {
      quick: [],
      long: [],
    },
  },
  acne: {
    index: 5,
    name: "Acne",
    path: "/acne",
    iconPath: `${iconPathBase}/acne.png`,
    videos: {
      quick: [],
      long: [],
    },
  },
  goodYoutubeChannels: {
    index: 6,
    name: "Good Youtube Channels",
    path: "/good-youtube-channels",
    iconPath: `${iconPathBase}/good-youtube-channels.png`,
    sectionsOfInfluencers: [
      {
        name: "Ketogenic Diet",
        list: [
          {
            name: "Dr. Eric Berg DC",
            url: "https://www.youtube.com/channel/UC3w193M5tYPJqF0Hi-7U-2g",
            imageUrl:
              "https://yt3.ggpht.com/ytc/AKedOLTPNKQaNreGaliJXlCYYkJVcnCZHsymUl2HUALo5A=s176-c-k-c0x00ffffff-no-rj",
            description: "Doctor, ketogenic diet proponent.",
          },
          {
            name: "KenDBerryMD",
            url: "https://www.youtube.com/c/KenDBerryMD",
            imageUrl:
              "https://yt3.ggpht.com/ytc/AKedOLS9DlOP6Mbe_YfUWbvrqvfddFJPllH9rodDv6jNiA=s176-c-k-c0x00ffffff-no-rj",
            description: "",
          },
          {
            name: "Jason Fung",
            url: "https://www.youtube.com/user/drjasonfung",
            imageUrl:
              "https://yt3.ggpht.com/ytc/AKedOLTAUWkQNpgplYGZogFR56ec1YG18PIWHLCAJxIMaw=s176-c-k-c0x00ffffff-no-rj",
            description: "",
          },
          {
            name: "Thomas DeLauer",
            url: "https://www.youtube.com/user/TheTdelauer",
            imageUrl:
              "https://yt3.ggpht.com/ytc/AKedOLRrBGmwMzSTTNN3bE9c12EU736glRETD7A5Ygwt=s176-c-k-c0x00ffffff-no-rj",
            description: "",
          },
          {
            name: "Keto Kamp",
            url: "https://www.youtube.com/c/KetoKamp",
            imageUrl:
              "https://yt3.ggpht.com/ytc/AKedOLQ76dg2kyEGvMI_9iI53k5BJzZSj455UTkTz1yfmw=s176-c-k-c0x00ffffff-no-rj",
            description: "",
          },
        ],
      },
      {
        name: "Various",
        list: [
          {
            name: "Dr. Rhonda Patrick",
            url: "https://www.youtube.com/c/FoundMyFitness/videos",
            imageUrl:
              "https://i.ytimg.com/vi/Ys86ZgjQQYg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByEUunPX_JFGJcKrWx4zFL32ldvQ",
            description: "",
          },
        ],
      },
    ],
  },
  guruPeople: {
    index: 7,
    name: "Guru People",
    path: "/guru-people",
    iconPath: `${iconPathBase}/guru-people.png`,
    sectionsOfInfluencers: [],
  },
};

export type VideosType = typeof allData.intermittentFasting.videos;

export type SectionsOfInfluencers =
  typeof allData.goodYoutubeChannels.sectionsOfInfluencers;

export type InfluencersType =
  typeof allData.goodYoutubeChannels.sectionsOfInfluencers[0]["list"];
