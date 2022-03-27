const ref = {
  input: document.querySelector('.field-country'),
};

const handleCountry = e => {
   console.log(ref.input.value);
};

handleCountry();

ref.input.addEventListener('input', handleCountry);
