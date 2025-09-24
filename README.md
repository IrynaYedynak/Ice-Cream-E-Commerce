# Магазин морозива 

Мій пет-проект — інтернет-магазин морозива, зроблений на React з Vite.  
Проект включає кілька сторінок, динамічну роботу з товарами та локальний сервер через `db.json`.

##  Технології

- React + Vite  
- HTML, CSS, JavaScript  
- Локальний сервер через JSON Server (`db.json`)  
- Адаптивний дизайн для мобільних та десктопних пристроїв


## Функціонал та сторінки

- **Головна сторінка** — презентація магазину та акцій  
- **Сторінка магазину** — каталог товарів  
- **Сторінка окремого товару** — детальна інформація про продукт  
- **FAQ** — відповіді на часті питання  
- **Про нас** — інформація про магазин  
- **Кошик** — перегляд і редагування обраних товарів  
- **Чекаут** — оформлення замовлення  
- Сортування та фільтрація товарів  
- Додавання товарів у кошик  
- Дані про товари з локального JSON-сервера

##  Локальний запуск

1. Клонувати репозиторій:
```bash
git clone https://github.com/IrynaYedynak/Ice-Cream-E-Commerce.git

2. Встановити залежності 

cd vite-project
npm install

3. Відкрити два термінали:

**Термінал 1: Запустити фронтенд через Vite:

npm run dev


**Сайт буде доступний на http://localhost:5173 (або інший порт, який виведе Vite).

**Термінал 2: Запустити локальний сервер для даних:

json-server --watch db.json --port 3001


**Сервер для карток товарів буде доступний на http://localhost:3001.

**React фронтенд підключається до цього сервера для сортування, фільтрації та роботи з кошиком.


## Демо
Проект працює локально, онлайн-демо наразі не доступне.

## Мета проекту

**Показати вміння створювати повноцінний інтернет-магазин на React + Vite

**Практикувати роботу з динамічними даними через локальний сервер

**Відпрацювати фільтри, сортування, кошик і чекаут

**Демонструвати навички роботи з багатосторінковим SPA
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
