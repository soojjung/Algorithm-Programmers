// 테스트 2 시간초과로 실패, 나머지는 통과
function solution(board, moves) {
  let columnBoard = [];
  let basket = [];
  let answer = 0;
  
  for (let i = 0; i < board.length; i++) {
    let column = [];
    board.map(row => {
      if (row[i] !== 0) column.push(row[i])
    });
    columnBoard.push(column);
  }
  
  moves.forEach(move => {
    if (columnBoard[move - 1].length) {
      basket.push(columnBoard[move - 1].shift());
    }
  });
  
  for (let i = 0; i < basket.length; i++) {
    if (basket[i] === basket[i + 1]) {
        basket.splice(i, 2);
        answer += 2;
        i -= 2;
    }
  }
  return answer;
}