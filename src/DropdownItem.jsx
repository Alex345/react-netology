function DropdownItem({items, activeItem, onClick}) {

  const handlerClick = (newActiveItem) => {
    onClick(newActiveItem)
  }

  const itemClick = (text) => {
    handlerClick(text);
  }

  return (
    <>
      {items.map((item, index) => {
        return(
          <li key={index}>
            <a className={ (item.name === activeItem) ? 'active' : '' } href={item.url} onClick={() => itemClick(item.name)}>{item.name}</a>
          </li>
        );
      })}
    </>
  );
}
export default DropdownItem;
