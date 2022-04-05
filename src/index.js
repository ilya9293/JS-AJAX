import './sass/main.scss';
import { debounce } from 'lodash';
import { fetchCountries } from './js/services/fetchCountries';
import {
  ref,
  renderOneCountry,
  showTooMuchCountries,
  renderListCountries,
  showError,
} from './js/services/render-countries';

const handleCountry = () => {
  const inputValue = ref.input.value;

  fetchCountries(inputValue)
    .then(data => {
      if (data.length === 1) {
        return renderOneCountry(data);
      }
      if (data.length > 10) {
        return showTooMuchCountries(data);
      }
      renderListCountries(data);
    })
    .catch(err => {
      if (!inputValue) {
        return (ref.section.innerHTML = '');
      }
      showError();
    });
};

ref.input.addEventListener('input', debounce(handleCountry, 500));
