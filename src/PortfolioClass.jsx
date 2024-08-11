import {Component} from "react";
import Toolbar from "./Toolbar.jsx";
import ProjectList from "./ProjectList.jsx";

export default class PortfolioClass extends Component {

  // Начальная инициализация данных
  state = {
    filterVal: "All",
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    project_list: [],
  };

  // Начальные данные галереи
  project_list_default = [{
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers"
    }];

  // Инициализация данных
  constructor(props) {
    super(props);

    this.state = {
      filterVal: this.state.filterVal,
      filters: this.state.filters,
      project_list: this.project_list_default,
    };
  }

  // Событие фильтрации при клике по меню
  handleFilter = (e) => {
    const newFilter = e.newFilter;

    // Обновляем фильтры
    this.setState( {filterVal: newFilter});

    // Обновляем галерею картинок с учетом текущего фильтра
    this.filterGallery(newFilter);
  }

  // Функционал обновления галереи
  filterGallery = (activeFilter) => {
    let new_project_list = this.project_list_default;

    if("All" !== activeFilter) {
      new_project_list = this.project_list_default.filter(arrItem => arrItem.category === activeFilter);
    }

    this.setState({project_list: new_project_list});
  }

  // Перерисовка контента компонентов
  render() {

    return (
      <>
        <Toolbar filters={this.state.filters} selected={this.state.filterVal} onSelectFilter={this.handleFilter} />
        <ProjectList projects={this.state.project_list} />
      </>
    );
  }
}
