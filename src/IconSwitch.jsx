function IconSwitch({icon, onSwitch}) {

  const editButton = (newIconState) => {
    onSwitch({
      newIconState
    })
  }

  const iconClick = (e) => {
    editButton(e.target.outerText);
  }

  return (
    <div className="product-views__icons">
      <span className="material-icons" onClick={iconClick}>{icon}</span>
    </div>
  );
}
export default IconSwitch;
