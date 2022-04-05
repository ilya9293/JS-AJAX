import makeRefs from '../data/refs';
import makeCountryMarkup from '../../templating/list-countries';
import makeOneCountryMarkup from '../../templating/one-country.hbs';
import { showAlert, showErrorMessage, ALERTS } from '../vendors/alert';
const ref = makeRefs();

const renderOneCountry = data => {
  ref.section.innerHTML = makeOneCountryMarkup(data);
};

const showTooMuchCountries = countriesQuantity => {
  //   ref.section.textContent = 'Слишком много стран!';
  ref.section.innerHTML = '';
  showAlert((ALERTS.MATCH_RESULTS, `${countriesQuantity.length} reults, too many countries`));
};

const renderListCountries = data => {
  ref.section.innerHTML = makeCountryMarkup(data);
};

const showError = err => {
  ref.section.textContent = 'Ошибка! Страна не найдена';
  //   showError(err)
  
};

export { ref, renderOneCountry, showTooMuchCountries, renderListCountries, showError };
