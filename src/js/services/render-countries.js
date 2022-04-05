import makeRefs from '../data/refs';
import makeCountryMarkup from '../../templating/list-countries';
import makeOneCountryMarkup from '../../templating/one-country.hbs';
import { showAlert, showErrorMessage, ALERTS } from '../vendors/alert';
const ref = makeRefs();

const renderOneCountry = data => {
  ref.section.innerHTML = makeOneCountryMarkup(data);
};

const showTooMuchCountries = data => {
  ref.section.textContent = 'Слишком много стран!';
};

const renderListCountries = data => {
  ref.section.innerHTML = makeCountryMarkup(data);
};

const showError = () => {
  ref.section.textContent = 'Ошибка! Страна не найдена';
};

export { ref, renderOneCountry, showTooMuchCountries, renderListCountries, showError };
