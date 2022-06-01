function solution(genres, plays) {
    const changeArrToObj = ( arr, keyName ) => {
      return Object.fromEntries(Object.entries({...arr})
      .map(([ key, val ]) => ([ key, {id: key, [keyName]: val} ]))
    )};
    const genreObj = changeArrToObj(genres, 'genre');
    const playObj = changeArrToObj(plays, 'play');
    
    let musicArr = [];
    for (const key in genreObj) {
      musicArr.push({...genreObj[key], ...playObj[key]});
    }
    
    let playsPerGenre = {};
    musicArr.forEach(({genre, play}) => {
      if (!Object.keys(playsPerGenre).includes(genre)) {
        playsPerGenre[genre] = play;
      } else {
        playsPerGenre[genre] += play;
      }
    });
    
    const sortedGenres = Object.entries(playsPerGenre).sort(([, a], [, b]) => b - a);
    let answer = [];
    sortedGenres.forEach((val, i) => {
      val[1] = musicArr.filter(music => music.genre === val[0]).sort((a, b) => b.play - a.play).slice(0, 2);
      answer.push(...val[1].map(x => +x.id))
    });
    return answer;
  }