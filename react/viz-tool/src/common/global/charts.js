export const ChartsType = [
  // 动态图
  {
    _cid: 'DynamicBarChart',
    _name: '动态条形图',
    _type: 'dynamic'
  },
  {
    _cid: 'DynamicColumnChart',
    _name: '动态柱状图',
    _type: 'dynamic'
  },
  {
    _cid: 'DynamicWatefallChart',
    _name: '动态瀑布图',
    _type: 'dynamic'
  },
  {
    _cid: 'DynamicLineChart',
    _name: '动态折线图',
    _type: 'dynamic'
  },
  {
    _cid: 'DynamicLineRankChart',
    _name: '动态折线排名图',
    _type: 'dynamic'
  },
  {
    _cid: 'DynamicBubbleChart',
    _name: '动态气泡图',
    _type: 'dynamic'
  },
   {
    _cid: 'DynamicBubbleMap',
    _name: '动态地图气泡图',
    _type: 'dynamic'
  },
  // 折线图
  {
    _cid: 'BasicLineChart',
    _name: '基础折线图',
    _type: 'line'
  },
  {
    _cid: 'ComboLineColumnChart',
    _name: '折线柱状图',
    _type: 'line'
  },
  // 面积图
  {
    _cid: 'BasicAreaChart',
    _name: '基础面积图',
    _type: 'area'
  },
  {
    _cid: 'StackedAreaChart',
    _name: '堆叠面积图',
    _type: 'area'
  },
  // 柱状图
  {
    _cid: 'BasicColumnChart',
    _name: '基础柱状图',
    _type: 'column'
  },
  {
    _cid: 'GroupedColumnChart',
    _name: '分组柱状图',
    _type: 'column'
  },
  {
    _cid: 'StackedColumnChart',
    _name: '堆叠柱状图',
    _type: 'column'
  },
  // 条形图
  {
    _cid: 'BasicBarChart',
    _name: '基础条形图',
    _type: 'bar'
  },
  {
    _cid: 'GroupedBarChart',
    _name: '分组条形图',
    _type: 'bar'
  },
  {
    _cid: 'StackedBarChart',
    _name: '堆叠条形图',
    _type: 'bar'
  },
  // 饼图
  {
    _cid: 'BasicPieChart',
    _name: '基础饼状图',
    _type: 'pie'
  },
  {
    _cid: 'BasicDonutChart',
    _name: '基础环形图',
    _type: 'pie'
  },
  {
    _cid: 'BaicRoseChart',
    _name: '基础玫瑰图',
    _type: 'pie'
  },
    {
    _cid: 'StackedRoseChart',
    _name: '堆叠玫瑰图',
    _type: 'pie'
  },
  {
    _cid: 'BaicJueChart',
    _name: '基础玉珏图',
    _type: 'pie'
  },
  // 其他
  {
    _cid: 'WordCloud',
    _name: '词云图',
    _type: 'other'
  },
  {
    _cid: 'TreeMap',
    _name: '矩形树图',
    _type: 'other'
  },
  {
    _cid: 'PictorialColumnChart',
    _name: '象形柱图',
    _type: 'other'
  },
  {
    _cid: 'PictorialBarChart',
    _name: '象形条形图',
    _type: 'other'
  },
  {
    _cid: 'RadarChart',
    _name: '雷达图',
    _type: 'other'
  }
]

export const ChartsDetail = {
  /* 动态图 */
  DynamicBarChart: {
    _chartname: '动态条形图',
    _application: '适用于表示一段时间内的变化趋势，比如各地人均GDP变化。',
    _suggestion: '建议***',
    _usescenario: '随时间变化'
  },
  DynamicColumnChart: {
    _chartname: '动态柱状图',
    _application: '柱状图提供了分类数据的可视化表示。分类数据是将数据分组成离散的组，例如月份、年龄组、鞋码和动物。这些类别通常是定性的。图表上的条形图可以按任何顺序排列。',
    _suggestion: '建议***',
    _usescenario: '随时间变化'
  },
  DynamicWatefallChart: {
    _chartname: '动态瀑布图',
    _application: '适用于想表达两个数据点之间数量的演变过程时，例如期中与期末每月成交件数的消长变化。',
    _suggestion: '建议***',
    _usescenario: '随时间变化'
  },
  DynamicLineChart: {
    _chartname: '动态折线图',
    _application: '当水平轴的数据类型为无序的分类或者垂直轴的数据类型为连续时间时，不适合使用折线图。同样，当折线的条数过多时不建议将多条线绘制在一张图上。',
    _suggestion: '建议***',
    _usescenario: '随时间变化'
  },
  DynamicLineRankChart: {
    _chartname: '动态折线排名图',
    _application: '使用动态的折线来表现排名情况，比如选举人投票变化排行等。',
    _suggestion: '建议***',
    _usescenario: '比较、随时间变化'
  },
  DynamicBubbleChart: {
    _chartname: '动态气泡图',
    _application: '适用于表示随时间变化的趋势，比如全球各国家地区男女性预期寿命变化趋势。',
    _suggestion: '建议***',
    _usescenario: '比较、随时间变化'
  },
  DynamicBubbleMap: {
    _chartname: '动态地图气泡图',
    _application: '适用于展示可视化地图中比例和位置的一个简单的方式。比如全国各地区新冠肺炎确诊病例随时间变化的趋势。',
    _suggestion: '建议***',
    _usescenario: '相关性、随时间变化'
  },
  /* 折线图 */
  BasicLineChart: {
    _chartname: '基础折线图',
    _application: '当水平轴的数据类型为无序的分类或者垂直轴的数据类型为连续时间时，不适合使用折线图。同样，当折线的条数过多时不建议将多条线绘制在一张图上。',
    _suggestion: '建议***',
    _usescenario: '分布、随时间变化'
  },
  ComboLineColumnChart: {
    _chartname: '折线柱状图',
    _application: '折线柱状图同时显示两个坐标轴，主要应用于不同数据字段的数据对比。',
    _suggestion: '建议***',
    _usescenario: '比较'
  },
  /* 面积图 */
  BasicAreaChart: {
    _chartname: '基础面积图',
    _application: '面积图通常用来显示总体趋势，而不是具体的数值。',
    _suggestion: '建议***',
    _usescenario: '分布、随时间变化'
  },
  StackedAreaChart: {
    _chartname: '堆叠面积图',
    _application: '适合于比较多个变量随时间间隔变化。',
    _suggestion: '建议***',
    _usescenario: '分布'
  },
  /* 柱状图 */
  BasicColumnChart: {
    _chartname: '基础柱状图',
    _application: '柱状图提供了分类数据的可视化表示。分类数据是将数据分组成离散的组，例如月份、年龄组、鞋码和动物。这些类别通常是定性的。图表上的条形图可以按任何顺序排列。',
    _suggestion: '建议***',
    _usescenario: '比较、分布'
  },
  GroupedColumnChart: {
    _chartname: '分组柱状图',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议***',
    _usescenario: '比较'
  },
  StackedColumnChart: {
    _chartname: '堆叠柱状图',
    _application: '堆叠柱状图是多个数据集相互叠加，以显示较大的类别如何划分为较小的类别及其与总数量的关系。',
    _suggestion: '建议***',
    _usescenario: '比较、部分与整体'
  },
  /* 条形图 */
  BasicBarChart: {
    _chartname: '基础条形图',
    _application: '适合的场景：跟柱状图相比，对比分类过多的情况下，可以使用条形图。',
    _suggestion: '建议***',
    _usescenario: '分布'
  },
  GroupedBarChart: {
    _chartname: '分组条形图',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。分类过多的情况下，可以使用条形图。',
    _suggestion: '建议***',
    _usescenario: '比较'
  },
  StackedBarChart: {
    _chartname: '堆叠条形图',
    _application: '纵向柱状图建议展示的数据条数较少，当分类过多时，我们可以使用横向的堆叠条形图。',
    _suggestion: '建议***',
    _usescenario: '比较、部分与整体'
  },
  /* 饼状图 */
  BasicPieChart: {
    _chartname: '基础饼状图',
    _application: '适合展示分类的占比情况，不适合展示分类过多（超过9条数据）或者差别不明显的场景。',
    _suggestion: '建议***',
    _usescenario: '比较'
  },
  BasicDonutChart: {
    _chartname: '基础环形图',
    _application: '适合展示分类的占比情况，不适合展示分类过多（超过9条数据）或者差别不明显的场景。',
    _suggestion: '建议***',
    _usescenario: '比较'
  },
  BaicRoseChart: {
    _chartname: '基础玫瑰图',
    _application: '适合用于绘制循环现象比如星期、月份(例如，按月计算的死亡人数)。',
    _suggestion: '建议***',
    _usescenario: '比较、随时间变化'
  },
  StackedRoseChart: {
    _chartname: '堆叠玫瑰图',
    _application: '适合用于绘制循环现象比如星期、月份(例如，按月计算的死亡人数)。',
    _suggestion: '建议***',
    _usescenario: '比较、部分与整体'
  },
  BaicJueChart: {
    _chartname: '基础玉珏图',
    _application: '玉珏图用于通过使用圆形来显示类别之间的比较。其意义和用法与条形图类似。',
    _suggestion: '建议***',
    _usescenario: '比较、相关性'
  },
  // 其他
  /* 词云 */
  WordCloud: {
    _chartname: '词云图',
    _application: '词云可用于描述关键字标签、可视化自由格式的文本或分析演讲。',
    _suggestion: '默认展示100条关键词',
    _usescenario: '比较、分布'
  },
  /* 矩形树图 */
  TreeMap: {
    _chartname: '矩形树图',
    _application: '适合展示带权的树形数据。',
    _suggestion: '建议6条以上数据',
    _usescenario: '比较、关联'
  },
  /* 象形柱图 */
  PictorialColumnChart: {
    _chartname: '象形柱图',
    _application: '特殊的柱状图。用图标、符号等代替或附加于常用图形元素(条形、直线、点)的数据的视觉表示。象形文字使用相同图标、图片或符号的相对大小或重复来表示比较。',
    _suggestion: '建议***',
    _usescenario: '比较、相关性'
  },
  /* 象形条形图 */
  PictorialBarChart: {
    _chartname: '象形条形图',
    _application: '特殊的条形图。用图标、符号等代替或附加于常用图形元素(条形、直线、点)的数据的视觉表示。象形文字使用相同图标、图片或符号的相对大小或重复来表示比较。',
    _suggestion: '建议***',
    _usescenario: '比较、随时间变化'
  },
  /* 雷达图 */
  RadarChart: {
    _chartname: '雷达图',
    _application: '雷达图适合的数据：一个分类字段，一个连续字段。',
    _suggestion: '建议不超过30条数据为宜',
    _usescenario: '分布、比较'
  }
}

