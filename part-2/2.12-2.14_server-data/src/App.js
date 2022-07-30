import axios from 'axios';
import { useEffect, useState } from 'react';
import { CountryInfo } from './components/CountryInfo';
import { CountryList } from './components/CountryList';

function App() {
  const [country, setCountry] = useState('');
  const [countriesData, setCountriesData] = useState([]);

  const countryEffect = () => {
    axios.get(`https://restcountries.com/v3.1/all`).then(({ data }) => {
      console.log(data);
      setCountriesData(data);
    });
  };

  useEffect(countryEffect, []);

  const handleNameChange = (event) => {
    setCountry(event.target.value);
  };

  const filteredCountries = countriesData.filter((ctd) =>
    ctd.name.common.toLowerCase().includes(country.toLowerCase())
  );

  const showSingleCompany = (countryToShow) => () => {
    setCountry(countryToShow);
  };

  return (
    <div>
      <input value={country} onChange={handleNameChange} />
      <div>
        {filteredCountries.length === 1 ? (
          <CountryInfo country={filteredCountries[0]} />
        ) : filteredCountries.length <= 10 ? (
          <CountryList countries={filteredCountries} onClick={showSingleCompany} />
        ) : (
          <div>Too many matches, specify another filter</div>
        )}
      </div>
    </div>
  );
}

export default App;
