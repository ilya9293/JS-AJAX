const ref = {
  input: document.querySelector('.field-country'),
  list: document.querySelector('.list-countries'),
};

import { debounce } from 'lodash';
import makeCountryMarkup from '../templating/list-countries.hbs';
import { fetchCountries } from './fetchCountries';

import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '@pnotify/confirm';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

const handleCountry = () => {
  info({
    title: 'Button Clicked',
    text: 'You have clicked the button. You may now complete the process of reading the notice.',
    modules: new Map([
      [
        Confirm,
        {
          confirm: false,
        },
      ],
    ]),
  });
  //   fetchCountries(ref.input.value)
  //     .then(data => (ref.list.innerHTML = makeCountryMarkup(data)))
  //     .catch(err => (ref.list.textContent = 'Ошибка! Страна не найдена'));
};

ref.input.addEventListener('input', debounce(handleCountry, 500));
