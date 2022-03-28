const ref = {
  input: document.querySelector('.field-country'),
  list: document.querySelector('.list-countries'),
};

import { debounce } from 'lodash';
import makeCountryMarkup from '../templating/list-countries.hbs';
import { fetchCountries } from './fetchCountries';
// fetchCountries('italy').then(data => );

const handleCountry = () => {
  //   console.log(ref.input.value);
  //   ref.list.insertAdjacentHTML(
  //     'afterbegin',
  //     fetchCountries(ref.input.value).then(data => makeCountryMarkup(data)),
  //   );
  fetchCountries(ref.input.value).then(data => console.log(makeCountryMarkup(data)));
};

ref.input.addEventListener('input', debounce(handleCountry, 500));
