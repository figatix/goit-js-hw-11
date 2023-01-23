
export function createCountryList(arrOfCountries) {
  const countryItemArr = arrOfCountries.map(el => {
    return `
      <li class = "country-item">
        <img class="country-item__thumb-flag" src="${el.flags.svg}" alt="Flag of ${el.name.official}">
        <span class="country-item__name">${el.name.official}</span>
      </li>
      `
  }).join('')

  return countryItemArr
}