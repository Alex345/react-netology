function DropdownItem({items, activeItem, onClick}) {

  const handlerClick = (newActiveItem) => {
    onClick(newActiveItem)
  }

  const itemClick = (e) => {
    const newActiveItem = e.target.outerText;
    handlerClick(newActiveItem);
  }

  return (
    <>
      {items.map((item, index) => {
        return(
          <li>
            <a className={ (item.name === activeItem) ? 'active' : '' } href={item.url} onClick={itemClick}>{item.name}</a>
          </li>
        );
      })}
    </>
  );
}
export default DropdownItem;
