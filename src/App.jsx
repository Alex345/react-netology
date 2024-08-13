import {useState} from "react";
import './App.css';
import PortfolioClass from "./PortfolioClass.jsx";
import StoreClass from "./StoreClass.jsx";
import DropdownList from "./DropdownList.jsx";
import HeaderNav from "./HeaderNav.jsx";

function App() {

  const containerClass = ' active';

  const [activeEl, setActiveEl] = useState(0);

  const containerInfo = [
    {
      'clName': 'portfolio-filters',
      'titleName': 'Портфолио с фильтрами',
    },
    {
      'clName': 'product-views',
      'titleName': 'Расположение товаров',
    },
    {
      'clName': 'drop-list',
      'titleName': 'Выпадающий список',
    },
  ];

  const headerItemClickFn = (e) => {
    console.log(e);
    setActiveEl((activeEl) => e);
    console.log(activeEl);
  }

  return (
    <>
      <HeaderNav activeItem={activeEl} onHeaderClick={headerItemClickFn} />

      {containerInfo.map((item, index) => {
        return (
          <div key={index} className={ (activeEl === index) ? 'container ' + item.clName + containerClass  : 'container ' + item.clName}>
            <div className="block-title">{item.titleName}</div>

            {(0 === index) ?
              <div className="portfolio">
                <PortfolioClass />
              </div>
              : ''
            }

            {(1 === index) ?
              <StoreClass />
              : ''
            }

            {(2 === index) ?
              <DropdownList />
              : ''
            }
          </div>
        );
      })}
    </>

  );
}

export default App
