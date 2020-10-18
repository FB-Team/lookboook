/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
require('./lookbook/src/App')
import React from 'react';
import ReactDOM from 'react-dom';
// import './lookbook/src/index.css';
// import './lookbook/src/common.css';
import App from './lookbook/src/App';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// TODO: Добавление возможности удаления книг \ билиотек +
// TODO: Устранить проблему дубликатов в БД +
// TODO: Доработать парсер  fb2 
// TODO: Стилизация названий книг
// TODO: Стилизация панели загрузки файлов
// TODO: Стилизация окна читалки
// TODO: Пагинация
// TODO: Закладки
// TODO: Стилизация компонента Preloader
// TODO: Реализация Библиотек
// TODO: Логинизация и реализация пользовательских аккаунтов
// TODO: Переделать загрузку по URL (Попробовать сделать через get запрос)
// TODO: Доработать API (возрашенные значения, обработка ошибок)
// TODO: Доработка серверного API (Проверки на корректность данных, предотвращение атак, улучшение общей архитектуры)
// TODO: Оптимизационные работы
// TODO: По возможности, добавить парсеры на другие форматы
// TODO: Ограничение по размеру файла
// TODO: Ограничение по кол-ву книг на пользователя

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');
