function solution(s) {
  let times = 0;
  let count = 0;

  while (s !== "1") {
    const replacedS = s.replaceAll("0", "");
    count = count + s.length - replacedS.length;
    times = times + 1;
    s = Number(replacedS.length).toString(2);
  }
  return [times, count];
}
