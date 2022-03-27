export const fetchCountries = searchQuery =>
  fetch(`https://restcountries.com/v2/name/${searchQuery}`).then(response => response.json());

fetchCountries('italy').then(data => console.log(data[0].name));
