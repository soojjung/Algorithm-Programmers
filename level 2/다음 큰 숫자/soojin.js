function solution(n) {
  const getBin1Length = (num) => {
    return num
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
  };
  const bin1Length = getBin1Length(n);

  while (n++) {
    if (bin1Length === getBin1Length(n)) {
      return n;
    }
  }
}
