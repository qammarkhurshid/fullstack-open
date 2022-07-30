export const CountryList = ({ countries, onClick }) => {
  return countries.map((cd, i) => {
    return (
      <div key={cd.cca3}>
        {i}. {cd.name.common} <button onClick={onClick(cd.name.common)}>show</button>
      </div>
    );
  });
};
