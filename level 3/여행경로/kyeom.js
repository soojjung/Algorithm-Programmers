// 테스트케이스 2~4만 통과... 1은 통과 못 함 ㅠㅠ
function solution(tickets) {
    let sortedTickets = [...tickets];
    let routes = [...sortedTickets.splice(
      sortedTickets.sort().findIndex(ticket => ticket[0] === 'ICN'), 1
    )];
    for (let i = 0; i < tickets.length; i++) {
      const nextIdx = sortedTickets.findIndex(ticket => ticket[0] === routes[routes.length - 1][1]);
      console.log(nextIdx)
      if (nextIdx !== -1) {
        routes.push(...sortedTickets.splice(nextIdx, 1));
      } else {
        const disorder = sortedTickets.splice(0, 1);
        routes.splice(routes.findIndex(route => route[1] === disorder[0]), 0, ...disorder)
      }
    }
    return [routes[0][0], ...routes.map(ele => ele[1])];
}