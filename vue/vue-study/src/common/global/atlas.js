import { vw } from "./global";

export const redAtlas = [
  [
    require("../../assets/atlas/red/1/1.png"),
    require("../../assets/atlas/red/1/2.png"),
    require("../../assets/atlas/red/1/3.png")
  ],
  [
    require("../../assets/atlas/red/2/1.png"),
    require("../../assets/atlas/red/2/2.png"),
    require("../../assets/atlas/red/2/3.png"),
    require("../../assets/atlas/red/2/4.png")
  ],
  [
    require("../../assets/atlas/red/3/1.png"),
    require("../../assets/atlas/red/3/2.png"),
    require("../../assets/atlas/red/3/3.png")
  ],
  [
    require("../../assets/atlas/red/4/1.png"),
    require("../../assets/atlas/red/4/2.png"),
    require("../../assets/atlas/red/4/3.png")
  ],
  [
    require("../../assets/atlas/red/5/1.png"),
    require("../../assets/atlas/red/5/2.png"),
    require("../../assets/atlas/red/5/3.png"),
    require("../../assets/atlas/red/5/4.png"),
    require("../../assets/atlas/red/5/5.png")
  ],
  [
    require("../../assets/atlas/red/6/1.png"),
    require("../../assets/atlas/red/6/2.png"),
    require("../../assets/atlas/red/6/3.png"),
    require("../../assets/atlas/red/6/4.png")
  ]
];
export const greenAtlas = [
  [
    require("../../assets/atlas/green/1/1.png"),
    require("../../assets/atlas/green/1/2.png"),
    require("../../assets/atlas/green/1/3.png"),
    require("../../assets/atlas/green/1/4.png"),
    require("../../assets/atlas/green/1/5.png"),
    require("../../assets/atlas/green/1/6.png")
  ],
  [
    require("../../assets/atlas/green/2/1.png"),
    require("../../assets/atlas/green/2/2.png"),
    require("../../assets/atlas/green/2/3.png"),
    require("../../assets/atlas/green/2/4.png"),
    require("../../assets/atlas/green/2/5.png"),
    require("../../assets/atlas/green/2/6.png")
  ],
  [
    require("../../assets/atlas/green/3/1.png"),
    require("../../assets/atlas/green/3/2.png"),
    require("../../assets/atlas/green/3/3.png"),
    require("../../assets/atlas/green/3/4.png"),
    require("../../assets/atlas/green/3/5.png")
  ]
];
export const blueAtlas = [
  [
    require("../../assets/atlas/blue/1/1.png"),
    require("../../assets/atlas/blue/1/2.png"),
    require("../../assets/atlas/blue/1/3.png"),
    require("../../assets/atlas/blue/1/4.png"),
    require("../../assets/atlas/blue/1/5.png")
  ],
  [
    require("../../assets/atlas/blue/2/1.png"),
    require("../../assets/atlas/blue/2/2.png"),
    require("../../assets/atlas/blue/2/3.png"),
    require("../../assets/atlas/blue/2/4.png"),
    require("../../assets/atlas/blue/2/5.png")
  ],
  [
    require("../../assets/atlas/blue/3/1.png"),
    require("../../assets/atlas/blue/3/2.png"),
    require("../../assets/atlas/blue/3/3.png")
  ],
  [
    require("../../assets/atlas/blue/4/1.png"),
    require("../../assets/atlas/blue/4/2.png"),
    require("../../assets/atlas/blue/4/3.png")
  ],
  [
    require("../../assets/atlas/blue/5/1.png"),
    require("../../assets/atlas/blue/5/2.png"),
    require("../../assets/atlas/blue/5/3.png"),
    require("../../assets/atlas/blue/5/4.png")
  ]
];
export const whiteAtlas = [
  [
    require("../../assets/atlas/white/1/1.png"),
    require("../../assets/atlas/white/1/2.png"),
    require("../../assets/atlas/white/1/3.png"),
    require("../../assets/atlas/white/1/4.png"),
    require("../../assets/atlas/white/1/5.png")
  ],
  [
    require("../../assets/atlas/white/2/1.png"),
    require("../../assets/atlas/white/2/2.png"),
    require("../../assets/atlas/white/2/3.png")
  ],
  [
    require("../../assets/atlas/white/3/1.png"),
    require("../../assets/atlas/white/3/2.png"),
    require("../../assets/atlas/white/3/3.png"),
    require("../../assets/atlas/white/3/4.png")
  ],
  [
    require("../../assets/atlas/white/4/1.png"),
    require("../../assets/atlas/white/4/2.png"),
    require("../../assets/atlas/white/4/3.png"),
    require("../../assets/atlas/white/4/4.png"),
    require("../../assets/atlas/white/4/5.png")
  ],
  [
    require("../../assets/atlas/white/5/1.png"),
    require("../../assets/atlas/white/5/2.png")
  ]
];
export const yellowAtlas = [
  [
    require("../../assets/atlas/yellow/1/1.png"),
    require("../../assets/atlas/yellow/1/2.png"),
    require("../../assets/atlas/yellow/1/3.png"),
    require("../../assets/atlas/yellow/1/4.png"),
    require("../../assets/atlas/yellow/1/5.png"),
    require("../../assets/atlas/yellow/1/6.png")
  ]
];

export const atlas = {
  red: redAtlas,
  green: greenAtlas,
  blue: blueAtlas,
  white: whiteAtlas,
  yellow: yellowAtlas
};

export const flattenAtlas = (atlas => {
  let result = {};
  for (let key in atlas) {
    result[key] = atlas[key].reduce((res, curr) => [...res, ...curr], []);
  }
  return result;
})(atlas);

export const redAtlasCover = redAtlas.map(item => item[item.length - 1]);
export const greenAtlasCover = greenAtlas.map(item => item[item.length - 1]);
export const blueAtlasCover = blueAtlas.map(item => item[item.length - 1]);
export const whiteAtlasCover = whiteAtlas.map(item => item[item.length - 1]);
export const yellowAtlasCover = yellowAtlas.map(item => item[item.length - 1]);

export const altasCover = {
  red: redAtlasCover,
  green: greenAtlasCover,
  blue: blueAtlasCover,
  white: whiteAtlasCover,
  yellow: yellowAtlasCover
};

export const atlasTextPos = {
  red: {
    title: {
      top: 7 * vw,
      left: 50 * vw
    },
    color: {
      top: 89 * vw,
      left: 3.5 * vw,
      value: "红"
    }
  },
  green: {
    title: {
      top: 86 * vw,
      left: 31.5 * vw
    },
    color: {
      top: 2.5 * vw,
      left: 5 * vw,
      value: "绿"
    }
  },
  blue: {
    title: {
      top: 88 * vw,
      left: 32 * vw
    },
    color: {
      top: 8 * vw,
      left: 11 * vw,
      value: "蓝"
    }
  },
  white: {
    title: {
      top: 6.5 * vw,
      left: 51 * vw
    },
    color: {
      top: 89 * vw,
      left: 3.5 * vw,
      value: "白"
    }
  },
  yellow: {
    title: {
      top: 6 * vw,
      left: 20 * vw
    },
    color: {
      top: 88 * vw,
      left: 29 * vw,
      value: "黄"
    }
  }
};

export const altasTitle = {
  red: [
    "CBA重启",
    "法网",
    "利物浦英超夺冠",
    "女篮晋级奥运会",
    "乒乓球总决赛",
    "太极申遗成功"
  ],
  green: ["联赛重启", "全民健身", "体育课堂"],
  blue: ["澳网", "全民健身", "苏宁中超夺冠", "体育课", "游泳全国锦标赛破纪录"],
  white: ["冬奥场馆", "花滑大奖赛", "青冬奥会", "三亿人上冰雪", "疫情"],
  yellow: ["科比离世"]
};

export const altasInfos = (altasTitle => {
  const reuslt = [];
  for (let key in altasTitle) {
    reuslt[key] = altasTitle[key].map(item => {
      let fontSize = 40;
      if (item.length > 5 && item.length <= 8) {
        fontSize = 28;
      } else if (item.length > 8) {
        fontSize = 25;
      }
      return {
        value: item,
        fontSize
      };
    });
  }
  return reuslt;
})(altasTitle);
