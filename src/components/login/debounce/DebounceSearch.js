import React, { useCallback, useEffect } from "react";
import "./DebounceSearch.css";
export default function DebounceSearch() {
  const [search, setSearch] = React.useState([]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1500);
    };
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    fetch(`https://restcountries.com/v3.1/name/${value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearch(data);
      });
  };

  const optmisedVersion = useCallback(debounce(handleSearch), []);

  return (
    <div className="App">
      <input
        type="search"
        placeholder="search a country to test debounce"
        className="search"
        onChange={optmisedVersion}
      />
      {search?.length > 0 && (
        <div className="autocomplete">
          {search?.map((key, idx) => (
            <div className="autocomplete-items" key={idx}>
              <span>{key?.name?.common}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
