import { setLocation, setActiveTab, renderData } from '../../main';
import { setActiveNav } from '../Navigation';

const SearchBar = document.createElement("form");
const SearchInput = document.createElement("input");
const SearchBtn = document.createElement("button");

SearchInput.placeholder = "Enter location";
SearchInput.required = true;

SearchBtn.textContent = "Search";

SearchBar.appendChild(SearchInput);
SearchBar.appendChild(SearchBtn);

SearchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  setLocation(SearchInput.value);

  renderData();
  setActiveNav("current");

})
export { SearchBar };

