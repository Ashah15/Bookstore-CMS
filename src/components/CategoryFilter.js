import React from 'react';
import PropTypes from 'prop-types';
import categoryOptions from '../containers/constants';

function CategoryFilter({ category, handleCategory }) {
  const newCategoryOptions = (['All']).concat(categoryOptions);
  const options = newCategoryOptions.map((index) => (
    <option
      value={index}
      key={index}
    >
      {index}
    </option>
  ));

  return (
    <nav>
      <h1>DISCOVERY-WORD BOOKSTORE</h1>
      <h3>BOOKS</h3>
      <div className="input-field">
        <label htmlFor="category">
          CATEGORY
          <select id="category" value={category} onChange={handleCategory}>
            {options}
          </select>
        </label>
      </div>
      <img alt="user-icon" className="oval" src="https://img.icons8.com/ios-glyphs/90/000000/change-user-male.png" />
    </nav>

  );
}

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  handleCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
