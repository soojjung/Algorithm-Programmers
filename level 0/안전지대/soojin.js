function solution(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (board[i + x]?.[j + y] === 0) {
              // 1은 그대로 냅둔다
              board[i + x][j + y] = 2;
            }
          }
        }
      }
    }
  }

  const flatBoard = board.flatMap((item) => item);
  return flatBoard.filter((item) => item === 0).length;
}
