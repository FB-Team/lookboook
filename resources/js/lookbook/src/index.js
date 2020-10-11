import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
serviceWorker.unregister();
