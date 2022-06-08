function solution(lottos, win_nums) {
    let result = [];
    let winOrZeros = [];
    let correctCount = 0;
    
    lottos.map(lotto => {
        if (win_nums.includes(lotto) || lotto === 0) {
            winOrZeros.push(lotto);
        }
    })
    
    winOrZeros.map(num => {
        if(num >0) {
            correctCount += 1;
        }
    })
    // zeroCount = winOrZeros.length - correctCount
    
    correctCount > 0 ? result.push(7-winOrZeros.length, 7-correctCount) : result.push(1,6)
    
    return result;
}