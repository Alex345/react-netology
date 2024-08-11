function ListView({items}) {
  return (
    <div className="list-view">
      {items.map( (child, index) => {
          return (
            <div className="list-view__item">
              <div className="list-view__item-img">
                <img src={child.img} alt=""/>
              </div>
              <div className="list-view__item-title">{child.name}</div>
              <div className="list-view__item-color">{child.color}</div>
              <div className="list-view__item-action-price">
                <span>$</span>
                {child.price}
              </div>
              <div className="list-view__item-action-btn">Add to cart</div>
            </div>
          )
        }
      )}
    </div>
  );
}
export default ListView;
