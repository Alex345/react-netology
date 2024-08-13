import {useState} from "react";

function HeaderNav({activeItem, onHeaderClick}) {

  const [menuItem, setMenuItem] = useState([
    'Портфолио с фильтрами',
    'Расположение товаров',
    'Выпадающий список',
  ]);

  const handleItemClick = (index) => {
    onHeaderClick(index);
  }

  const menuItemOnClick = (index) => {
    handleItemClick(index);
  }

  console.log(activeItem);

  return (
    <>
      <header>
        <ul id="menu">
          {menuItem.map((item, index) => {
            return (<li key={index} className={(activeItem === index) ? 'active' : ''} onClick={() => menuItemOnClick(index)}>{item}</li>);
          })}
        </ul>
      </header>
    </>
  );
}
export default HeaderNav;
