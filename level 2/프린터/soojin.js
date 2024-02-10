function solution(priorities, location) {
  const array = new Array();

  for (let i = 0; i < priorities.length; i += 1) {
    array.push([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a); // 내림차순

  let count = 0; // 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지

  const currentValue = array[0];
  console.log(currentValue);
  if (currentValue[0] < priorities[count]) {
    array.push(array.shift());
  } else {
    const firstValue = array.shift();
    count += 1;
    if (location === firstValue[1]) {
      return count;
    }
  }
}
