# Porsche Website

Веб-приложение в стиле официального сайта Porsche: лендинг, каталог моделей серий **911** и **718**, страница конфигурации автомобиля и корзина сохранённых конфигураций пользователя. Проект **не связан** с Porsche AG; название и визуальная концепция используются в учебных целях.

## Стек

| Часть | Технологии |
|--------|------------|
| **Клиент** | React 19, TypeScript, Vite 7, React Router 7, TanStack Query, SCSS Modules, Axios, React Hook Form |
| **Сервер** | Node.js, Express 5, TypeScript, Prisma 6, PostgreSQL |
| **Аутентификация** | JWT (access/refresh), bcrypt, httpOnly cookies |

## Структура репозитория

```
porsche-website/
├── client/     # SPA (Vite + React)
└── server/     # REST API + Prisma
```

## Требования

- **Node.js** (рекомендуется актуальная LTS)
- **PostgreSQL** (локально или облачный инстанс с `DATABASE_URL`)

## Переменные окружения (сервер)

В каталоге `server` создайте файл `.env` со значениями:

| Переменная | Назначение |
|------------|------------|
| `DATABASE_URL` | Строка подключения Prisma к PostgreSQL |
| `JWT_ACCESS_SECRET` | Секрет для access-токена |
| `JWT_REFRESH_SECRET` | Секрет для refresh-токена |
| `PORT` | Порт HTTP-сервера (по умолчанию **3000**) |

## Установка и запуск

### 1. База данных и Prisma

```bash
cd server
npm install
npx prisma db push
npm run build
npm run seed
```

Скрипт `seed` наполняет БД моделями и деталями (см. `server/src/config/seed.ts`).

### 2. Сервер (разработка)

```bash
cd server
npm run dev
```

Команда `dev` компилирует TypeScript в фоне (`tsc --watch`) и перезапускает `nodemon` на скомпилированном `dist/app.js`.

### 3. Клиент

```bash
cd client
npm install
npm run dev
```

По умолчанию Vite поднимает приложение на **http://localhost:5173**. Базовый URL API задаётся в `client/src/config/api-config.ts` (для локальной разработки — `http://localhost:3000`).

Запустите **сервер** и **клиент** в двух терминалах.

## Полезные команды

| Команда | Где | Назначение |
|---------|-----|------------|
| `npm run dev` | `client` | dev-сервер Vite |
| `npm run build` | `client` | production-сборка |
| `npm run lint` | `client` | ESLint |
| `npm run dev` | `server` | watch + nodemon |
| `npm run build` | `server` | `tsc` + `prisma generate` |
| `npm start` | `server` | запуск `node dist/app.js` |
| `npx prisma db push` | `server` | синхронизация схемы с БД |

## API (кратко)

Базовый префикс — корень сервера (порт из `PORT`).

| Префикс | Назначение |
|---------|------------|
| `/auth` | Регистрация, вход, обновление токенов, выход |
| `/car-models` | Список / фильтрация моделей |
| `/model-detail` | Детали модели и превью |
| `/user-config` | Сохранённые конфигурации пользователя |

CORS в `server/src/app.ts` разрешён для `http://localhost:5173` и задеплоенного фронта на Railway; при смене домена обновите `origin`.

## Маршруты клиента

| Путь | Описание |
|------|----------|
| `/` | Главная (лендинг) |
| `/models/:row` | Ряд моделей по серии |
| `/model-detail/:modelId` | Конфигуратор выбранной модели |
| `/user-config` | Список сохранённых конфигураций |

## Деплой

В коде уже указаны примеры URL для Railway (`porsche-website.up.railway.app`, `porsche-website-server.up.railway.app` в CORS и закомментированном `api-config`). Для продакшена переключите `baseApiUrl` в клиенте на URL вашего API и при необходимости расширьте список `origin` в CORS.

## Лицензия

В репозитории лицензия не указана явно; при публикации добавьте файл `LICENSE` по своему выбору.
