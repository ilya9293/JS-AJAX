const ref = {
  input: document.querySelector('.field-country'),
  list: document.querySelector('.list-countries'),
};

import { debounce } from 'lodash';
import makeCountryMarkup from '../templating/list-countries.hbs';
import { fetchCountries } from './fetchCountries';

const handleCountry = (e) => {
   console.log(e.currentTarget);
  fetchCountries(ref.input.value)
    .then(data => (ref.list.innerHTML = makeCountryMarkup(data)))
    .catch(error => console.log(error));
};

ref.input.addEventListener('input', debounce(handleCountry, 500));
