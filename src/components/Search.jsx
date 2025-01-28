import { useState } from "react";


export default function Search({ setFilter }) {
  const [filterParam, setFilterParam] = useState("All");

    // Actualizamos el estado del filtro en el componente principal
    const handleFilterChange = (e) => {
        const selectedCategory = e.target.value;
        setFilterParam(selectedCategory);
        setFilter(selectedCategory); // Llamamos a la función que nos pasa App
      };

  
  return (
    <div className="custom-select-wrapper">
      <select
        onChange={handleFilterChange}
        value={filterParam}
        className="custom-select"
        aria-label="Filter Products By Category"
      >
        <option value="All">Filter By Category</option>
        <option value="Laptop">Laptop</option>
        <option value="Desktop">Desktop</option>
        <option value="Smartphones">Smartphones</option>
        <option value="Videogames">Videogames</option>
        <option value="Photography">Photography</option>
      </select>
      <span className="focus"></span>
    </div>
  );
}
