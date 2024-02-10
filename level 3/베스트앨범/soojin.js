function solution(genres, plays) {
  const genreMap = new Map();
  // genreMap 구조 예시
  // genreMap = {
  //    classic : {total: 800, songs: [[2,500], [1,300]]}
  // }

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, [index, play]]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 2),
      });
    });

  return [...genreMap.values()]
    .sort((a, b) => b.total - a.total)
    .flatMap((item) => item.songs)
    .map((item) => item[0]);
}
