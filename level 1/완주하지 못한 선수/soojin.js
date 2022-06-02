function solution(participant, completion) {
    const indexArray = []; 
    for (i=0; i<participant.length; i++) {
        if (completion.includes(participant[i])) {
          	const indexNoRepeat = participant.indexOf(participant[i]);
            indexArray.push(indexNoRepeat);	
          	for (j=0; j<indexArray.length; j++) {
              if (j !== indexArray[j]) {
                return participant[j];
              }
            }
        } 
        else {
            return participant[i];
        }
    }
}