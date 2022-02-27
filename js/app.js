const loadCountries = () => {
    fetch ('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then (data => displayCountries(data))
}
loadCountries();

const displayCountries =  countries => {
    // for (const country of countries){
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('countries')
        div.innerHTML = `
        <div class="border border-info rounded text-center p-3">
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button class="btn btn-success" onclick="loadCountryByName('${country.name.common}')">Details</button>
        </div>
        `;
        countriesDiv.appendChild(div)
    });
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then (res => res.json())
    .then (data => displayCountryDetails(data[0]));
}
const displayCountryDetails = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h5>${country.name.common}</h5>
    <h5>${country.population}</h5>
    <img width="200px" src="${country.flags.svg}">
    `;
}