import {useState} from "react";
import Dropdown from "./Dropdown.jsx";
import DropdownItem from "./DropdownItem.jsx";

function DropdownList() {

  const [menu, setMenu] = useState([
    {name: 'Profile Information', url:'#1'},
    {name: 'Change Password', url:'#2'},
    {name: 'Become PRO', url:'#3'},
    {name:'Help', url:'#4'},
    {name:'Log Out', url:'#5'},
  ]);

  const [menuState, setMenuState] = useState('close');
  const [activeMenuItem, setActiveMenuItem] = useState('Profile Information');

  const menuStateFn = (e) => {
    setMenuState((menuState) => e);
  }

  const activeMenuItemFn = (e) => {
    setActiveMenuItem( (activeMenuItem) => e);
  }

  return (
    <>
      <Dropdown btnState={menuState} onClick={menuStateFn} />
      <ul className={ 'dropdown_menu ' + menuState }>
        <DropdownItem items={menu} activeItem={activeMenuItem} onClick={activeMenuItemFn} />
      </ul>
    </>
  );
}
export default DropdownList;
