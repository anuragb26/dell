import React from 'react'
import { InputGroup, Input } from 'reactstrap'
import searchIcon from '../../assets/img/search-icon.png'
import './SearchBar.scss'

const SearchBar = ({ placeholder, searchVal, onChange, clearSearch }) => (
  <InputGroup className="restaurant-search-bar" data-test="component-searchBar">
    <Input
      className="search-input"
      placeholder={placeholder}
      value={searchVal}
      onChange={onChange}
    />
    <div className="search-img-container">
      <img src={searchIcon} height={23} width={23} alt="search-icon" />
    </div>
    <span
      className={`clear-search oi oi-circle-x ${!searchVal ? 'd-none' : ''}`}
      onClick={clearSearch}
    />
  </InputGroup>
)

export default SearchBar
