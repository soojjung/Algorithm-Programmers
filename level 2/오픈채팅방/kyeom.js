function solution(record) {
    let answer = [];
    const command = ['Enter', 'Leave', 'Change'];
    const message = ['님이 들어왔습니다.', '님이 나갔습니다.'];
    const user = {};
    const recordArr = record.map(val => val.split(' '));
    
    recordArr.forEach(rec => {
      if (rec[2]) user[rec[1]] = rec[2];
    });
    recordArr.forEach(rec => {
      if (rec[0] !== command[2]) {
        answer.push(user[rec[1]] + message[command.indexOf(rec[0])]);
      }
    });
    return answer;
}