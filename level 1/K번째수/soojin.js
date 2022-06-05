function solution(array, commands) {
    const answer = [];
    commands.map(command => {
        // 배열을 알맞게 잘라줍니다.
        const slicedArray = array.slice(command[0]-1, command[1]);
        // 잘라준 배열을 정렬해 줍니다.
        const sortedArray = slicedArray.sort();
        // 정렬된 배열의 필요한 값을 answer에 넣어줍니다.
        answer.push(sortedArray[command[2]-1])
    })
    return answer;
}