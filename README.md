📌 Обзор проекта
Этот проект – фронтенд-приложение на React с TypeScript. Он включает авторизацию пользователей, управление профилем и отображение списка объектов через API.

🔹 Основные функции
✅ Регистрация и вход пользователей
✅ Отображение профиля пользователя
✅ Страница списка объектов
✅ Пагинация и взаимодействие с API
✅ Навигация через React Router
✅ Валидация форм

🛠️ Используемые технологии
React 19 + TypeScript → Основной фреймворк
Vite → Инструмент сборки
React Router v7 → Маршрутизация
Axios → Запросы к API
React Hook Form + Yup → Валидация форм
Tailwind CSS → Стилизация
Lucide React & React Icons → Иконки
ESLint + TypeScript ESLint → Проверка качества кода
📂 Структура проекта
bash
Copy
Edit
/src
 ├── components/    # UI-компоненты
 ├── pages/         # Страницы приложения (Главная, Вход, Регистрация, Профиль, Объявления)
 ├── hooks/         # Кастомные хуки
 ├── api/           # Запросы к API
 ├── utils/         # Утилиты
 ├── App.tsx        # Главный компонент
 ├── main.tsx       # Точка входа React
🚀 Как запустить проект
🔹 1. Установка зависимостей
sh
Copy
Edit
npm install
🔹 2. Запуск сервера разработки
sh
Copy
Edit
npm run dev
Открыть http://localhost:5173 в браузере.

🔹 3. Сборка проекта
sh
Copy
Edit
npm run build
🔹 4. Предпросмотр продакшен-версии
sh
Copy
Edit
npm run preview
🔗 API Эндпоинты
Функция	Метод	Эндпоинт
Регистрация	POST	/auth/users
Вход	POST	/auth/users/tokens
Получение профиля	GET	/auth/users/me
Получение списка объявлений	GET	/applications/listing
📌 Скрипты package.json
npm run dev → Запуск сервера разработки
npm run build → Сборка проекта
npm run lint → Проверка кода
npm run preview → Просмотр продакшен-версии
