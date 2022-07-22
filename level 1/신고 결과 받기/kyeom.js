function solution(id_list, report, k) {
  report = Array.from(new Set(report));
  const reported = Object.fromEntries(id_list.map((ele) => [ele, []]));
  report
    .map((ele) => ele.split(' '))
    .forEach((ele) => {
      reported[ele[1]].push(ele[0]);
    });
  const banned = Object.entries(reported).filter((ele) => ele[1].length >= k);
  const reporter = banned.map((ele) => ele[1]).flat();
  const answer = new Array(id_list.length).fill(0);
  reporter.forEach((ele) => {
    answer[id_list.indexOf(ele)]++;
  });
  return answer;
}
