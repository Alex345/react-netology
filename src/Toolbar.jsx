import { Children } from 'react';

function Toolbar({filters, selected, onSelectFilter}) {

  // Передаем данные в родительский компонент
  const editFilter = (newFilter) => {
    onSelectFilter({
      ...filters,
      newFilter
    })
  }

  // Обработчик клика, просто передаем текущий элемент на котором кликнули
  const handleFilter = (e) => {
    editFilter(e.target.outerText);
  }

  // Вывод элементов фильтра
  return (
    <ul className="portfolio__filter">
      {Children.map(filters, child =>
        <li className={(child === selected) ? 'btn btn-outline active' : 'btn btn-outline' } onClick={handleFilter}>{child}</li>
      )}
    </ul>
  );
}

export default Toolbar;
