import './App.css';
import PortfolioClass from "./PortfolioClass.jsx";
import StoreClass from "./StoreClass.jsx";

function App() {

  return (
    <>
      <div className="container portfolio-filters active">
        <div className="portfolio">
          <PortfolioClass />
        </div>
      </div>

      <div className="container product-views">
        <StoreClass />
      </div>

      <div className="container drop-list"></div>
    </>

  );
}

export default App

let root_block = '';

// Обработка переключения меню
window.addEventListener('load', () => {
  const header_menu = document.getElementById('menu');
  if (header_menu) {
    const menu_item = header_menu.querySelectorAll('li');

    menu_item.forEach((item, index) => {
      item.addEventListener('click', () => {

        header_menu.querySelector('li.active').classList.remove('active');
        item.classList.add('active');

        if ('object' === typeof (root_block) && root_block.length > 0) {
          document.querySelector('.container.active').classList.remove('active');
          root_block[index].classList.add('active');
        }
      })
    });
  }

  const waitReactData = setInterval(() => {
    root_block = document.querySelectorAll('.container');
    if (root_block.length > 0) {
      clearInterval(waitReactData);
    }
  }, 200);
})
