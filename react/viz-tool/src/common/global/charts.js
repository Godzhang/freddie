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
    _cid: 'DynamicLineChart',
    _name: '动态折线图',
    _type: 'dynamic'
  },
  {
    _cid: 'DynamicWatefallChart',
    _name: '动态瀑布图',
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
    _defination: '动态条形图实际上采用条形图，与柱状图相同，只是x轴和y轴交换了位置。',
    _application: '适用于表示一段时间内的变化趋势，比如各地人均GDP变化。',
    _suggestion: '建议不超过10组数据。',
    _usescenario: '比较、随时间变化'
  },
  DynamicColumnChart: {
    _chartname: '动态柱状图',
    _defination: '动态条形图实际上采用条形图，与柱状图相同，只是x轴和y轴交换了位置。',
    _application: '适用于表示一段时间内的变化趋势，比如各地人均GDP变化。',
    _suggestion: '建议不超过10组数据。',
    _usescenario: '比较、随时间变化'
  },
  DynamicLineChart: {
    _chartname: '动态折线图',
    _defination: '动态条形图实际上采用条形图，与柱状图相同，只是x轴和y轴交换了位置。',
    _application: '适用于表示一段时间内的变化趋势，比如各地人均GDP变化。',
    _suggestion: '建议不超过10组数据。',
    _usescenario: '比较、随时间变化'
  },
  DynamicWatefallChart: {
    _chartname: '动态瀑布图',
    _defination: '动态条形图实际上采用条形图，与柱状图相同，只是x轴和y轴交换了位置。',
    _application: '适用于表示一段时间内的变化趋势，比如各地人均GDP变化。',
    _suggestion: '建议不超过10组数据。',
    _usescenario: '比较、随时间变化'
  },
  DynamicBubbleChart: {
    _chartname: '动态气泡图',
    _defination: '动态条形图实际上采用条形图，与柱状图相同，只是x轴和y轴交换了位置。',
    _application: '适用于表示一段时间内的变化趋势，比如各地人均GDP变化。',
    _suggestion: '建议不超过10组数据。',
    _usescenario: '比较、随时间变化'
  },
  DynamicBubbleMap: {
    _chartname: '动态地图气泡图',
    _defination: '动态条形图实际上采用条形图，与柱状图相同，只是x轴和y轴交换了位置。',
    _application: '适用于表示一段时间内的变化趋势，比如各地人均GDP变化。',
    _suggestion: '建议不超过10组数据。',
    _usescenario: '比较、随时间变化'
  },
  /* 折线图 */
  BasicLineChart: {
    _chartname: '基础折线图',
    _defination: '折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化。',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议不超过5个数据维度，若为一维数据，数据长度不超过20。',
    _usescenario: '比较、分布'
  },
  ComboLineColumnChart: {
    _chartname: '折线柱状图',
    _defination: '折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化。',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议不超过5个数据维度，若为一维数据，数据长度不超过20。',
    _usescenario: '比较、分布'
  },
  /* 面积图 */
  BasicAreaChart: {
    _chartname: '基础面积图',
    _defination: '折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化。',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议不超过5个数据维度，若为一维数据，数据长度不超过20。',
    _usescenario: '比较、分布'
  },
  StackedAreaChart: {
    _chartname: '堆叠面积图',
    _defination: '折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化。',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议不超过5个数据维度，若为一维数据，数据长度不超过20。',
    _usescenario: '比较、分布'
  },
  /* 柱状图 */
  BasicColumnChart: {
    _chartname: '基础柱状图',
    _defination: '折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化。',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议不超过5个数据维度，若为一维数据，数据长度不超过20。',
    _usescenario: '比较、分布'
  },
  GroupedColumnChart: {
    _chartname: '分组柱状图',
    _defination: '折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化。',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议不超过5个数据维度，若为一维数据，数据长度不超过20。',
    _usescenario: '比较、分布'
  },
  StackedColumnChart: {
    _chartname: '堆叠柱状图',
    _defination: '折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化。',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议不超过5个数据维度，若为一维数据，数据长度不超过20。',
    _usescenario: '比较、分布'
  },
  /* 条形图 */
  BasicBarChart: {
    _chartname: '基础条形图',
    _defination: '折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化。',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议不超过5个数据维度，若为一维数据，数据长度不超过20。',
    _usescenario: '比较、分布'
  },
  GroupedBarChart: {
    _chartname: '分组条形图',
    _defination: '折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化。',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议不超过5个数据维度，若为一维数据，数据长度不超过20。',
    _usescenario: '比较、分布'
  },
  StackedBarChart: {
    _chartname: '堆叠条形图',
    _defination: '折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化。',
    _application: '适合对比不同分组内相同分类的大小，对比相同分组内不同分类的大小。',
    _suggestion: '建议不超过5个数据维度，若为一维数据，数据长度不超过20。',
    _usescenario: '比较、分布'
  },
  /* 饼状图 */
  BasicPieChart: {
    _chartname: '基础饼状图',
    _defination: '饼图通过将一个圆按照分类的占比划分成多个区块，每个扇形面积与它所代表的数量成正比。',
    _application: '适合展示分类的占比情况，不适合展示分类过多或者差别不明显的场景。',
    _suggestion: '建议两个数据项，数据长度不超过10。',
    _usescenario: '比较'
  },
  BasicDonutChart: {
    _chartname: '基础环形图',
    _defination: '饼图通过将一个圆按照分类的占比划分成多个区块，每个扇形面积与它所代表的数量成正比。',
    _application: '适合展示分类的占比情况，不适合展示分类过多或者差别不明显的场景。',
    _suggestion: '建议两个数据项，数据长度不超过10。',
    _usescenario: '比较'
  },
  BaicRoseChart: {
    _chartname: '基础玫瑰图',
    _defination: '定制饼状图的变形，每个扇形半径与它所代表的数量成正比。',
    _application: '适合展示分类的占比情况，不适合展示分类过多或者差别不明显的场景。',
    _suggestion: '建议两个数据项，数据长度不超过10。',
    _usescenario: '比较'
  },
  StackedRoseChart: {
    _chartname: '堆叠玫瑰图',
    _defination: '饼图通过将一个圆按照分类的占比划分成多个区块，每个扇形半径与它所代表的数量成正比。',
    _application: '适合展示分类的占比情况，不适合展示分类过多或者差别不明显的场景。',
    _suggestion: '建议两个数据项，数据长度不超过10。',
    _usescenario: '比较'
  },
  BaicJueChart: {
    _chartname: '基础玉珏图',
    _defination: '玉珏图是一种在极坐标系中显示的条形图。',
    _application: '玉珏图用于通过使用圆形来显示类别之间的比较。其意义和用法与条形图类似。',
    _suggestion: '建议分类数目不超过6个。',
    _usescenario: '比较'
  },
  // 其他
  /* 词云 */
  WordCloud: {
    _chartname: '词云图',
    _defination: '词云是文本数据的视觉表示，由词汇组成类似云的彩色图形，用于展示大量文本数据。',
    _application: '词云可用于描述关键字标签、可视化自由格式的文本或分析演讲。',
    _suggestion: '默认展示100条关键词，若使用图片轮廓，则覆盖词云形状。',
    _usescenario: '比较、分布'
  },
  /* 矩形树图 */
  TreeMap: {
    _chartname: '矩形树图',
    _defination: '散点图与中国地图结合，通过点的大小来展示各个地区数据量的大小，数据量排名靠前的省份通过动态效果突出显示。',
    _application: '散点图可用于展示全国各个省份的数据分布情况。',
    _suggestion: '适合展示全国各省份数据。',
    _usescenario: '分布、比较'
  },
  /* 象形柱图 */
  PictorialColumnChart: {
    _chartname: '象形柱图',
    _defination: '词云是文本数据的视觉表示，由词汇组成类似云的彩色图形，用于展示大量文本数据。',
    _application: '词云可用于描述关键字标签、可视化自由格式的文本或分析演讲。',
    _suggestion: '默认展示100条关键词，若使用图片轮廓，则覆盖词云形状。',
    _usescenario: '比较、分布'
  },
  /* 象形条形图 */
  PictorialBarChart: {
    _chartname: '象形条形图',
    _defination: '散点图与中国地图结合，通过点的大小来展示各个地区数据量的大小，数据量排名靠前的省份通过动态效果突出显示。',
    _application: '散点图可用于展示全国各个省份的数据分布情况。',
    _suggestion: '适合展示全国各省份数据。',
    _usescenario: '分布、比较'
  },
  /* 雷达图 */
  RadarChart: {
    _chartname: '雷达图',
    _defination: '散点图与中国地图结合，通过点的大小来展示各个地区数据量的大小，数据量排名靠前的省份通过动态效果突出显示。',
    _application: '散点图可用于展示全国各个省份的数据分布情况。',
    _suggestion: '适合展示全国各省份数据。',
    _usescenario: '分布、比较'
  }
}

