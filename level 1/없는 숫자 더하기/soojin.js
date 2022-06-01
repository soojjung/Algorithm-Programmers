let answer = 0;

function solution(numbers) {
    for (i=0; i< 10; i++) {
        if (!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
}