import './css/styles.css';
import Notiflix from 'notiflix';
// import API from './fetchCountries';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
let searchId = '';
//
//
const refs = {
  inputEl: document.querySelector('#search-box'),
  ulEl: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
refs.inputEl.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));
//
function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
  )
    .then(response => {
      return response.json();
    })
    .then(info => {
      if (info.length >= 1) {
        Notiflix.Notify.success('Sol lucet omnibus');
        renderMarkupUl(info);
        renderMarkupCountryInfo(info);
      } else {
        Notiflix.Notify.failure('Qui timide rogat docet negare');
      }
    })
    .catch(error => {
      console.log(`error =>`, error);
    });
}
//
// fetchCountries(searchId);
function onSearchInput(e) {
  fetchCountries(searchId);
  searchId = e.target.value.trim();
  fetchCountries(searchId);
}
//
function renderMarkupUl(dataList) {
  const markupUl = dataList
    .map(item => {
      console.log(item.name.official);
      return `<li><img src="${item.flags.svg}" width="75"> ${item.name.official}</li>`;
    })
    .join('');
  refs.ulEl.innerHTML = markupUl;
}
//

function renderMarkupCountryInfo(country) {
  const markupCountry = country
    .map(item => {
      let language = Object.values(item.languages);
      return `<ul>
    <li><span>Capital</span> : ${item.capital}</li>
    <li><span>Population</span>: ${item.population}</li>
    <li><span>Languages</span>: ${language}</li>
    </ul>`;
    })
    .join('');
  refs.countryInfo.innerHTML = markupCountry;
}
