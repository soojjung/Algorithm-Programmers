function solution(s) {
  const array = s.split(" ");

  return array
    .map(
      (item) => item.charAt(0).toUpperCase() + item.substring(1).toLowerCase()
    )
    .join(" ");
}
