const ref = {
  input: document.querySelector('.field-country'),
  list: document.querySelector('.list-countries'),
};

import { debounce } from 'lodash';
import makeCountryMarkup from '../templating/list-countries.hbs';
import { fetchCountries } from './fetchCountries';

const handleCountry = () => {
  fetchCountries(ref.input.value)
    .then(data => {
       console.log(data);
      if (data.length > 10) {
        return (ref.list.textContent = 'Слишком много стран!');
      }
      ref.list.innerHTML = makeCountryMarkup(data);
    })
    .catch(err => (ref.list.textContent = 'Ошибка! Страна не найдена'));
};

ref.input.addEventListener('input', debounce(handleCountry, 500));
