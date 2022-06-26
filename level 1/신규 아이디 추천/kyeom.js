function solution(new_id) {
    // 1, 2단계
    const regExp = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g;
    const dot = '.';
    let answer = new_id.toLowerCase().replace(regExp, '');
    
    // 3단계
    answer = answer.split('').map((val, i) => {
      if (val === dot && answer[i + 1] === dot) return ''
      else return val;
    }).join('');
    
    // 4단계
    if (answer.startsWith(dot)) answer = answer.slice(1);
    if (answer.endsWith(dot)) answer = answer.slice(0, -1);
    
    // 5단계
    if (!answer) answer = 'a'.repeat(3);
    
    // 6, 7단계
    if (answer.length > 15) {
      answer = answer.slice(0, 15);
      if (answer.endsWith(dot)) answer = answer.slice(0, -1);
    } else if (answer.length < 3) {
      answer += answer[answer.length - 1].repeat(3 - answer.length);
    }
    
    return answer;
}