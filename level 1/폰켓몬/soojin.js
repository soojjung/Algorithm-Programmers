function solution(nums) {
  const halfLength = nums.length / 2;
  const setSize = new Set(nums).size;
  return Math.min(halfLength, setSize);
}

// 겸영님의 코드를 참고하였습니다--
// return 하는부분에서 set.size와 half 중에 더 작은 값을 리턴하는 의미로도 해석할수 있을거 같습니다 !
// 처음 문제풀이는 모든 경우의 수를 뽑아낸 후에 리턴할 값을 찾았는데, 그게아니라 처음부터 set을 만들고 이후의 작업을 하는게 훨씬 코드가 간결해지는거 같습니다!
