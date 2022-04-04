// const ref = {
//   input: document.querySelector('.field-country'),
//   section: document.querySelector('.countries'),
// };

import { debounce } from 'lodash';
import makeCountryMarkup from '../templating/list-countries.hbs';
import makeOneCountryMarkup from '../templating/one-country.hbs';
import { fetchCountries } from './services/fetchCountries';
import makeRefs from './data/refs';

const ref = makeRefs();

const handleCountry = () => {
  fetchCountries(ref.input.value)
    .then(data => {
      if (data.length === 1) {
        return (ref.section.innerHTML = makeOneCountryMarkup(data));
      }
      if (data.length > 10) {
        return (ref.section.textContent = 'Слишком много стран!');
      }

      ref.section.innerHTML = makeCountryMarkup(data);
    })
    .catch(err => {
      if (!ref.input.value) {
        return (ref.section.innerHTML = '');
      }
      ref.section.textContent = 'Ошибка! Страна не найдена';
    });
};

ref.input.addEventListener('input', debounce(handleCountry, 500));
