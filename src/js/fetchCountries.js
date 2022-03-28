export const fetchCountries = searchQuery =>
  fetch(`https://restcountries.com/v2/name/${searchQuery}`).then(response => response.json());
