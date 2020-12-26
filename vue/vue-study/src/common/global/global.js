const menuInfos = [
  {
    title: "通告通知",
    iconName: "notice"
  },
  {
    title: "值班简报",
    iconName: "calendar"
  },
  {
    title: "工作简报",
    iconName: "brief"
  },
  {
    title: "前进报",
    iconName: "newspaper"
  },
  {
    title: "新华党建",
    iconName: "build"
  },
  {
    title: "经营工作",
    iconName: "business"
  },
  {
    title: "营销动态",
    iconName: "market"
  },
  {
    title: "规划工作",
    iconName: "plan"
  },
  {
    title: "运维工作",
    iconName: "operation"
  },
  {
    title: "人事管理",
    iconName: "manage"
  },
  {
    title: "新华风采",
    iconName: "elegant"
  },
  {
    title: "我的邮件",
    iconName: "email"
  },
  {
    title: "技术服务",
    iconName: "service"
  },
  {
    title: "综合办公",
    iconName: "office"
  },
  {
    title: "新华简讯",
    iconName: "sms"
  }
];

export const menus = menuInfos.map(info => ({
  icon: require(`../../assets/icons/${info.iconName}.png`),
  title: info.title
}));
