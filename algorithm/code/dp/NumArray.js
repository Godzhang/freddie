// dp 一维数组
// class NumArray {
//   constructor(nums) {
//     let len = nums.length;
//     this.sums = Array(len + 1).fill(0);

//     for (let i = 0; i < len; i++) {
//       this.sums[i + 1] = this.sums[i] + nums[i];
//     }
//   }

//   sumRange(i, j) {
//     return this.sums[j + 1] - this.sums[i];
//   }
// }

// export default NumArray;

// dp 二维数组
class NumArray {
  constructor(nums) {
    let len = nums.length;
    const dp = Array(len);
    for (let i = 0; i < len; i++) {
      dp[i] = Array(len);
    }
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (i === j) {
          dp[i][j] = nums[i];
        } else {
          dp[i][j] = dp[i][j - 1] + nums[j];
        }
      }
    }
    this.dp = dp;
  }

  sumRange(i, j) {
    return this.dp[i][j];
  }
}

export default NumArray;
