function solution(numbers) {
    let answer = numbers
        .sort((prev, next) => (`${next}` + `${prev}`) - (`${prev}` + `${next}`))
        .join('');
    return +answer === 0 ? '0' : answer;
}