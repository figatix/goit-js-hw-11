
export function createCountryInfo(arrOfOneCountry) {
  const country = arrOfOneCountry[0];
  const langs = Object.values(country.languages).join(', ')

  return `
  <img class="country-item__thumb-flag" src="${country.flags.svg}" alt="Flag of ${country.name.official}">
      <span class="country-item__name" style = "font-size: large;">${country.name.official}</span>
      <ul class="country-info__list">
        <li class="country-info__item">Capital: ${country.capital}</li>
        <li class="country-info__item">Population: ${country.population}</li>
        <li class="country-info__item">Languages: ${langs}</li>
      </ul>
  `;
}