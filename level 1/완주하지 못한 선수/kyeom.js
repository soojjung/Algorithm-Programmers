function solution(participant, completion) {
    let answer = [];
  	participant.sort();
  	completion.sort();
  	answer = participant.filter((ele, i) => completion[i] !== ele);
    return answer[0];
}