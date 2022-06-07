function solution(numbers) {
    let result = [];
    let string = "";
    for(let i = 0; i < numbers.length; i++){
      for(let j = 0; j < numbers.length; j++){
        for(let k = 0; k < numbers.length; k++){
          if(i === j || j === k || k === i) 
            continue;
          string = string + numbers[i]+ numbers[j]+ numbers[k];
          result.push(string)
          string = "";
        }
      }
    }
    const maxNumber = Math.max(...result);
    return maxNumber.toString()
}

// 첫번째 경우만 풀었습니다...