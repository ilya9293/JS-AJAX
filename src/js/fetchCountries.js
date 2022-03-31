export const fetchCountries = searchQuery =>
  fetch(`https://restcountries.com/v2/name/${searchQuery}`).then(response => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    Promise.reject('Error 404');
  });
