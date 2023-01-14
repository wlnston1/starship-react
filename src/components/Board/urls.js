const urls = [
"https://swapi.dev/api/starships/2/",
"https://swapi.dev/api/starships/3/",
"https://swapi.dev/api/starships/5/",
"https://swapi.dev/api/starships/9/",
"https://swapi.dev/api/starships/10/",
"https://swapi.dev/api/starships/11/",
"https://swapi.dev/api/starships/12/",
"https://swapi.dev/api/starships/13/",
"https://swapi.dev/api/starships/15/",
"https://swapi.dev/api/starships/17/",
];

export const fetchStarWars = async () => {
  try {
    const res = await Promise.all(
      urls.map(url => fetch(url, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then(res => res.json()))
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log("Error", error);
  }
};


