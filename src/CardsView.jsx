function CardsView({cards}) {
  return (
    <div className="cards_view">
      {cards.map( (child, index) => {
        return (
          <div className="card_view__item">
            <div className="card_view__item-title">{child.name}</div>
            <div className="card_view__item-color">{child.color}</div>
            <div className="card_view__item-action">
              <div className="card_view__item-action-price">
                <span>$</span>
                {child.price}
              </div>
              <div className="card_view__item-action-btn">Add to cart</div>
            </div>
            <div className="card_view__item-img">
              <img src={child.img} alt=""/>
            </div>
          </div>
        )
        }
      )}
    </div>
  );
}
export default CardsView;
