function solution(array, commands) {
    let arr = [];
    let answer = [];
    
    commands.map(command => {
      arr.push(array.slice(command[0] - 1, command[1]));
    });
    
    arr.map((val, i) => {
      answer.push(val.sort((a, b) => a - b)[commands[i][2] - 1]);
    });
    return answer;
}