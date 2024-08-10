import { Children } from 'react';

function Toolbar({filters, selected, onSelectFilter}) {
  // console.log(onSelectFilter);
  const editFilter = (newFilter) => {
    onSelectFilter({
      ...filters,
      newFilter
    })
  }

  const handleFilter = (e) => {
    editFilter(e.target.outerText);
  }

  return (
    <ul className="filter">
      {Children.map(filters, child =>
        <li className={(child === selected) ? 'active' : '' } onClick={handleFilter}>{child}</li>
      )}
    </ul>
  );
}

export default Toolbar;
