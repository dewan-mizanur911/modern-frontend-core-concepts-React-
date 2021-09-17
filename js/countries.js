const getCountries = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await res.json();
    displayCountries(data);
}
getCountries();

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesContainer = document.getElementById('countries');
    const countryHtml = countries.map(country => getTheContainer(country));
    countriesContainer.innerHTML = countryHtml.join(' ');
}

const getTheContainer = country => {
    const { name, capital, flag } = country;
    return `
        <div class="country">
        <p>Name : ${name}</p>
        <p> Captial : ${capital}</p>
        <img src="${flag}">
        </div>
    `;
}