function IconSwitch({icon, onSwitch}) {

  const editButton = (newIconState) => {
    onSwitch({
      newIconState
    })
  }

  const iconClick = (text) => {
    editButton(text);
  }

  return (
    <div className="product-views__icons">
      <span className="material-icons" onClick={() => iconClick(icon)}>{icon}</span>
    </div>
  );
}
export default IconSwitch;
