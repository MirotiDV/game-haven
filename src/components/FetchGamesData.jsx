export function FetchGamesData() {
    return ( 
    fetch("./games.json")
      .then((response) => {
        return response.json()
      })
      .then((games) => {
        console.log(games);
      })
    )}