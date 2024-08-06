import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShopItemFunc from "./ShopItemFunc";
import ShopItemClass from "./ShopItemClass.jsx";
import Calendar from "./Calendar.jsx";

function App() {

  const item_func = {
    brand: 'Tiger of Sweden func',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 299,
    currency: '£'
  }
  const item_class = {
    brand: 'Tiger of Sweden class',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 499,
    currency: '£'
  }

  const now = new Date(2017, 2, 8);
  // const now = new Date(2022, 4, 22);

  return (
    <>
      <div className="container store-func active">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc item={item_func}/>
        </div>
      </div>

      <div className="container store-class">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemClass item={item_class}/>
        </div>
      </div>

      <div className="container calendar">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <Calendar date={now}/>
        </div>
      </div>
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
