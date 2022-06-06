function solution1(numbers) {
    let answer = 0;
    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
  }
  
  function solution2(numbers) {
    return 45 - numbers.reduce((a, b) => a + b);
  }
  
  solution1([1,2,3,4,6,7,8,0]); // 14
  solution2([1,2,3,4,6,7,8,0]); // 14