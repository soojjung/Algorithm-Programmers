function solution(lottos, win_nums) {
    const min = lottos.filter(x => win_nums.includes(x)).length;
    const max = min + lottos.filter(x => x === 0).length;
    return [max < 2 ? 6 : 7 - max, min < 2 ? 6 : 7 - min];
}