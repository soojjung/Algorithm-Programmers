function solution(answers) {
    const student1 = [];
    const student2 = [];
    const student3 = [];

    for (let i=1; i<=answers.length; i++) {
    i % 5 ? student1.push(i%5) : student1.push(5);
    i % 2 ? student2.push(2) : i % 8 === 2 ? student2.push(1) : i % 8 === 4 ? student2.push(3) : i % 8 === 6 ? student2.push(4) : student2.push(5);
    i % 10 < 3 ? student3.push(3) : i % 10 < 5 ? student3.push(1) : i % 10 < 7 ? student3.push(2) : i % 10 < 9 ? student3.push(4) : student3.push(5)
  }

    function addAnswers(student) {
    for (i = 0; i< answers.length; i++) {
      if (student[i] === answers[i]) {
        student.push(answers[i])
      }
    }
  }

    addAnswers(student1);
    addAnswers(student2);
    addAnswers(student3);

  const countArray = [student1.length - 5, student2.length -5, student3.length -5]
  
    let answer = [1];
    for (i=1; i<countArray.length; i++) {
    if(countArray[i] > countArray[i-1]) {
      answer = [i+1];
    }
    else if (countArray[i] === countArray[0]) {
      answer.push(i+1)
    }
  }
return answer;
}
