function solution(absolutes, signs) {
    return absolutes
      .map((num, i) => num * signs.map(bool => bool ? 1 : -1)[i])
      .reduce((acc, cur) => acc + cur);
}