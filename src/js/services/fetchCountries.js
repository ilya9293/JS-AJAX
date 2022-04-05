export const fetchCountries = searchQuery => {
  const API_URL = 'https://restcountries.com/v2/name/';
  return fetch(`${API_URL}${searchQuery}`).then(response => {
   //   console.log(response);
    if (response.ok) {
      return response.json();
    }
    return Promise.reject('Not Found');
    //  throw new Error("Not Found");
  });
};
