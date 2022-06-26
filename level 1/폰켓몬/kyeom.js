function solution(nums) {
    const set = new Set(nums);
    const half = nums.length / 2;
    return set.size <= half ? set.size : half;
}