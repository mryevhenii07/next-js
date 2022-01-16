// export default function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
//   )
//     .then(response => {
//       return response.json();
//     })
//     .then(info => {
//       if (info.length >= 1) {
//         Notiflix.Notify.success('Sol lucet omnibus');

//         renderMarkupUl(info);
//         renderMarkupCountryInfo(info);
//       } else {
//         Notiflix.Notify.failure('Qui timide rogat docet negare');
//       }
//     })
//     .catch(error => {
//       // Notiflix.Notify.failure('Qui timide rogat docet negare');
//       console.log(`error =>`, error);
//     });
// }
// // export default { fetchCountries };
