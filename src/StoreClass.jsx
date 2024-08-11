import {Component} from "react";
import IconSwitch from "./IconSwitch.jsx";
import CardsView from "./CardsView.jsx";
import ListView from "./ListView.jsx";

export default class StoreClass extends Component {

  state = {
    icon: 'view_list',
    products: [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }],
    cards_arr: [],
    items_arr: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      icon: this.state.icon,
      products: this.state.products,
      cards_arr: this.state.products,
      items_arr: [],
    }
  }

  handleChangeProductView = (e) => {
    const newIconState = e.newIconState;
    if('view_list' === newIconState) {
      this.setState({icon: 'view_module' });
      this.setState({cards_arr: [] });
      this.setState({items_arr: this.state.products });
    } else {
      this.setState({icon: 'view_list'});
      this.setState({cards_arr: this.state.products });
      this.setState({items_arr: [] });
    }
  }

  render() {
    return (
      <>
        <IconSwitch icon={this.state.icon} onSwitch={this.handleChangeProductView}/>
        <CardsView cards={this.state.cards_arr} />
        <ListView items={this.state.items_arr} />
      </>
    );
  }
}

