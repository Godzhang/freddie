最大矩形: 'code/stack/maximalRectangle.js'
堆
二分查找法 开闭区间的细节

leetcode 67 题 二进制求和，了解多种解法，~~等位运算符的用法
leetcode 147 只会一种接发，待继续研究...
leetcode 560 不会解
leetcode 445 addTwoNumbers-445 研究递归方法(暂时不会)

leetcode 第 4 题 ./code/array/findMedianSortedArrays
leetcode 第 5 题 ./code/string/longestPalindrome
leetcode 第 647 题 ./code/string/countSubstrings
leetcode 137 ./code/array/singleNumber.js 加强理解
leetcode 1268 ./code/array/suggestedProducts 有些情况不通过
leetcode 1030 ./code/sort/allCellsDistOrder 使用 bfs 思想解题
./code/dp/rob.js 此题未解
shellSort 希尔排序加强理解

### 推导时间复杂度原则

1. 如果运行时间是常数量级，用常数 1 表示

T(n) = 2 --> O(1)

2. 只保留时间函数中的最高阶项

T(n) = 0.5n^2 + 0.5n --> 0.5n^2

3. 如果最高阶项存在，则省去最高阶项前面的系数

T(n) = 3n --> O(n)
T(n) = 5logN --> O(logN)
T(n) = 0.5n^2 --> O(n^2)
