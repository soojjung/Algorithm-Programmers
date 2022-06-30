function solution(priorities, location) {
    let indexed = [...priorities].map((val, i) => [val, i]);
    
    const sort = order => {
      let list = order.map(val => val[0]);
      if (list.every((val, i) => val === priorities.sort((a, b) => b - a)[i])) return order;
      
      let printed = [];
      let delayed = [];
      let left = [...list];
      list.forEach((val, i) => {
        left.splice(0, 1);
        if (left.some(x => x > list[i])) {
          delayed.push(...order.splice(0, 1));
        } else {
          printed.push(...order.splice(0, 1));
        }
      });
      return sort([...printed, ...delayed]);
    }
    
    return sort(indexed).findIndex(ele => ele[1] === location) + 1;
}