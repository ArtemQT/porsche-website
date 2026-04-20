<div align="center">

<img src="./client/public/logo/porsche-logo.svg" alt="Porsche" width="110" />

<h1>Porsche Web&nbsp;·&nbsp;Car Configurator</h1>

<p>
  <i>Full-stack pet-проект</i> — клон официального сайта Porsche<br/>
  с кастомным <b>конфигуратором автомобилей</b>, JWT-аутентификацией<br/>
  и личным кабинетом с сохранением сборок.
</p>

<p>
  <a href="https://porsche-website.up.railway.app/"><img src="https://img.shields.io/badge/▶_Live_Demo-porsche--website.up.railway.app-000?style=for-the-badge&labelColor=000" alt="Live Demo" /></a>
</p>

<p>
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TanStack_Query-5-FF4154?style=flat-square&logo=reactquery&logoColor=white" />
  <img src="https://img.shields.io/badge/SCSS-Modules-CC6699?style=flat-square&logo=sass&logoColor=white" />
</p>
<p>
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-6-2D3748?style=flat-square&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-14+-4169E1?style=flat-square&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Access_+_Refresh-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Railway-Deployed-0B0D0E?style=flat-square&logo=railway&logoColor=white" />
</p>

<sub>
  <a href="#о-проекте">О проекте</a> ·
  <a href="#стек">Стек</a> ·
  <a href="#архитектура">Архитектура</a> ·
  <a href="#ключевые-инженерные-решения">Ключевые решения</a> ·
  <a href="#rest-api">API</a> ·
  <a href="#локальный-запуск">Запуск</a>
</sub>

</div>

<br/>

---

## О проекте

<table>
<tr>
<td>

Проект вдохновлён сайтом **porsche.com** и воспроизводит его ключевые разделы, расширяя их полноценным **конфигуратором автомобиля** с сохранением сборок в личном кабинете.

Это не лендинг — это **production-ready SPA с собственным REST API**, сделанная как витрина навыков: от архитектуры фронтенда до безопасного JWT-флоу с refresh-tokens в httpOnly cookie и дедупликации пользовательских конфигураций через хеш.

</td>
</tr>
</table>

### Что умеет приложение

|     | Раздел               | Описание                                                                                   |
| :-: | :------------------- | :----------------------------------------------------------------------------------------- |
|  1  | **Главная**          | Видео-баннер, ряды моделей 911 / 718, динамический фон при скролле                         |
|  2  | **Умный поиск**      | Выпадающее меню со skeleton-лоадерами, подсказками «New In» и живым поиском                |
|  3  | **Каталог моделей**  | Фильтрация по сериям, карточки с ключевыми ТТХ                                             |
|  4  | **Конфигуратор**     | 5 шагов (экстерьер → диски → интерьер → пакет → выхлоп) с онлайн-пересчётом цены           |
|  5  | **Auth**             | Регистрация / логин / выход, валидация форм, тосты, auto-refresh access-токена             |
|  6  | **Личный кабинет**   | Сохранённые сборки с удалением; дубли блокируются на уровне БД через unique-хеш            |

<br/>

---

## Стек

<table>
<tr>
<td valign="top" width="50%">

### Frontend &nbsp;·&nbsp; `/client`

| Категория   | Технологии                                       |
| :---------- | :----------------------------------------------- |
| Runtime     | React 19 · TypeScript (strict)                   |
| Bundler     | Vite 7 · path-алиасы                             |
| Styling     | SCSS Modules                                     |
| Server state| TanStack Query v5 + DevTools                     |
| Routing     | React Router v7 · `createBrowserRouter`          |
| Forms       | React Hook Form (валидация на `onBlur`)          |
| HTTP        | Axios + interceptors + auto-refresh              |
| UI          | Swiper.js · Sonner · react-hot-toast · react-svg |
| Tooling     | ESLint 9 (flat) · `typescript-eslint`            |

</td>
<td valign="top" width="50%">

### Backend &nbsp;·&nbsp; `/server`

| Категория | Технологии                                   |
| :-------- | :------------------------------------------- |
| Runtime   | Node.js · Express 5 (ESM) · TypeScript       |
| ORM / DB  | Prisma 6 · PostgreSQL                        |
| Auth      | JWT (access 30m + refresh 30d) · bcrypt (12) |
| Security  | httpOnly + secure cookies · CORS whitelist   |
| Patterns  | Controller → Service · DTO · Error Middleware|
| Utils     | `json-stable-stringify` + `crypto` (MD5)     |
| Deploy    | Railway (client и server — отдельно)         |

</td>
</tr>
</table>

<br/>

---

## Архитектура

```
porsche-website/
├── client/          SPA  ·  React + Vite
└── server/          API  ·  Express + Prisma
```

<table>
<tr>
<td valign="top" width="50%">

**Frontend — Feature-based (близко к FSD)**

```
client/src/
├── app/         — entry, RouterProvider, providers
├── pages/       — страницы-контейнеры
├── modules/     — независимые бизнес-фичи
│   ├── auth/
│   ├── model-config/
│   ├── header/
│   ├── search-menu/
│   ├── video-banner/
│   ├── render-models/
│   ├── render-user-config/
│   └── …
├── shared/      — api, components, hooks, types
├── config/      — router, query-client, api-config
├── styles/      — глобальные SCSS + helpers
└── assets/
```

Каждый модуль самодостаточен и экспортируется только через публичный `index.ts` — границы фич чёткие, рефакторинг дешёвый.

</td>
<td valign="top" width="50%">

**Backend — слоистая архитектура**

```
server/src/
├── routes/         — маршруты Express
├── controllers/    — HTTP-логика (req → res)
├── services/       — бизнес-логика
├── dto/            — UserDto для клиента
├── middlewares/    — authMiddleware, errorMiddleware
├── exceptions/     — ApiError (фабрика ошибок)
├── helpers/        — generate-config-hash, validate-body
├── config/         — Prisma client, seed
└── prisma/         — schema.prisma
```

Контроллеры тонкие: парсят запрос, делегируют в сервис, вызывают `next(err)`. Всю обработку ошибок делает `errorMiddleware` через `instanceof ApiError`.

</td>
</tr>
</table>

<details>
<summary><b>Модель данных &nbsp;·&nbsp; Prisma</b></summary>

<br/>

```
┌──────┐   1 ─ 1   ┌───────┐
│ User │ ─────────▶│ Token │
└──────┘           └───────┘
   │ 1
   │
   ▼ *
┌────────────┐   * ─ 1   ┌───────────┐   1 ─ 1   ┌─────────────┐
│ UserConfig │ ─────────▶│ CarModels │ ─────────▶│ ModelDetail │
└────────────┘           └───────────┘           └─────────────┘
                               │
                               └─▶ enum ModelSeries { SERIES_911 | SERIES_718 }
```

- `UserConfig.configHash` — `@unique`, гарантирует отсутствие дублей сборок.
- `Token.userId` — `@unique`, у пользователя ровно один refresh-токен в БД.
- JSON-поля (`exterior`, `wheels`, `interior`, `carPackage`, `exhaust`) хранят произвольные объекты конфигурации.

</details>

<br/>

---

## Ключевые инженерные решения

<details open>
<summary><b>1.&nbsp; Безопасный JWT-флоу с auto-refresh</b></summary>

<br/>

| Токен    | Жизнь   | Где хранится              | Защита                          |
| :------- | :------ | :------------------------ | :------------------------------ |
| access   | 30 мин  | `localStorage`            | Короткая жизнь                  |
| refresh  | 30 дней | httpOnly + secure cookie  | Недоступен из JS (защита от XSS)|

Если запрос падает с **401**, axios-interceptor прозрачно:
1. идёт на `/auth/refresh` с refresh-cookie;
2. получает новый access-токен и **перезапрашивает** оригинальный запрос;
3. при провале — принудительный `logout` и редирект.

> Файлы: `client/src/shared/api/user-config-api.ts`, `server/src/services/auth-service.ts`

</details>

<details>
<summary><b>2.&nbsp; Дедупликация сборок через детерминированный хеш</b></summary>

<br/>

Пользователь может «нажать сохранить» десятки раз — хранить мусор в БД нельзя.

Из набора опций формирую **стабильную** JSON-строку через `json-stable-stringify` (не зависит от порядка ключей) и хеширую MD5. Хеш идёт в колонку `configHash @unique` — **БД сама не даст** вставить дубль.

```ts
// server/src/helpers/generate-config-hash.ts
const sortedHashString = stringify(hashData);
return createHash('md5').update(sortedHashString).digest('hex');
```

</details>

<details>
<summary><b>3.&nbsp; Синхронизация localStorage внутри одной вкладки</b></summary>

<br/>

Нативное событие `storage` срабатывает **только между вкладками**. Для обновления UI **в той же вкладке** (например, сразу после логина) я диспатчу кастомное событие `localStorageChange` и слушаю его в хуке — `AuthContext` моментально реагирует на любое изменение токена.

```ts
// client/src/shared/hooks/useLocalStorageListener.ts
window.addEventListener('localStorageChange', handleStorageChange);
```

</details>

<details>
<summary><b>4.&nbsp; TanStack Query как единая точка правды</b></summary>

<br/>

- `queryOptions()`-паттерн для переиспользования ключей и настроек кеша.
- Точечная инвалидация после мутаций (`addUserConfig` → invalidate `user-config-list`).
- `setQueryData` сразу после логина — UI не ждёт лишнего запроса за профилем.
- `retry`, `staleTime`, `refetchOnWindowFocus` настроены осознанно на уровне каждого query.

</details>

<details>
<summary><b>5.&nbsp; Типизированная обработка ошибок на бэкенде</b></summary>

<br/>

Фабрика `ApiError` (`.badRequest`, `.unauthorized`, `.conflict`, …) + единый middleware:

```ts
if (err instanceof ApiError) {
  return res.status(err.status).json({ message: err.message });
}
```

Контроллеры только делают `next(err)` — никакого `res.status(…).json(…)` вручную.

</details>

<details>
<summary><b>6.&nbsp; TypeScript в strict-режиме + синхронизированные алиасы</b></summary>

<br/>

- `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`.
- Path-алиасы синхронизированы между Vite и TS:
  `@modules/*` · `@shared/*` · `@config/*` · `@assets/*` · `@components/*` · `@hooks/*` · `@helpers/*`.

</details>

<details>
<summary><b>7.&nbsp; Оптимизации</b></summary>

<br/>

- Картинки моделей — в формате **AVIF** (в 2–3 раза легче JPEG).
- Vite-билд с tree-shaking, SCSS Modules исключают конфликты CSS.
- Swiper с ленивой инициализацией слайдов в конфигураторе.

</details>

<br/>

---

## REST API

<sub>Base URL (prod): <code>https://porsche-website-server.up.railway.app</code></sub>

| Метод    | Endpoint                     | Auth     | Описание                                            |
| :------- | :--------------------------- | :------- | :-------------------------------------------------- |
| `POST`   | `/auth/registration`         | —        | Регистрация, возвращает access + ставит refresh     |
| `POST`   | `/auth/login`                | —        | Логин                                               |
| `POST`   | `/auth/logout`               | —        | Удаляет refresh-токен из БД и cookie                |
| `GET`    | `/auth/refresh`              | cookie   | Выдаёт новую пару токенов                           |
| `GET`    | `/car-models`                | —        | Список моделей (опц. фильтр по серии)               |
| `GET`    | `/model-detail/:id`          | —        | Детали модели + цена + превью                       |
| `GET`    | `/user-config`               | Bearer   | Сохранённые сборки текущего пользователя            |
| `POST`   | `/user-config`               | Bearer   | Сохранить сборку (проверка на дубль по хешу)        |
| `DELETE` | `/user-config/:configHash`   | Bearer   | Удалить сборку                                      |

<br/>

---

## Локальный запуск

<details>
<summary><b>Требования</b></summary>

<br/>

- Node.js ≥ 20
- PostgreSQL ≥ 14
- npm ≥ 10

</details>

<details>
<summary><b>1. Клонирование</b></summary>

<br/>

```bash
git clone <repo-url>
cd porsche-website
```

</details>

<details open>
<summary><b>2. Backend</b></summary>

<br/>

```bash
cd server
npm install
```

Создать `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/porsche"
JWT_ACCESS_SECRET="your-access-secret"
JWT_REFRESH_SECRET="your-refresh-secret"
PORT=3000
```

Применить схему, засеять данные, поднять dev-сервер:

```bash
npx prisma db push
npm run seed
npm run dev
```

</details>

<details open>
<summary><b>3. Frontend</b></summary>

<br/>

В `client/src/config/api-config.ts` временно переключиться на локальный API:

```ts
export const baseApiUrl: string = 'http://localhost:3000'
```

```bash
cd client
npm install
npm run dev
```

Приложение: `http://localhost:5173`

</details>

### Скрипты

<table>
<tr>
<td valign="top" width="50%">

**Client**

```bash
npm run dev        # Vite dev-сервер с HMR
npm run build      # tsc -b && vite build
npm run preview    # превью прод-билда
npm run lint       # ESLint
```

</td>
<td valign="top" width="50%">

**Server**

```bash
npm run dev        # tsc --watch + nodemon
npm run build      # tsc + prisma generate
npm run start      # продакшен
npm run db:push    # применить schema.prisma
npm run seed       # засеять модели 911 и 718
```

</td>
</tr>
</table>

<br/>

---

## Что я хотел показать этим проектом

> **Архитектурное мышление** — не монолитный `App.tsx`, а модульная структура с чёткими границами.
>
> **Понимание безопасности** — корректный JWT-флоу, хеширование паролей, защита от дублей на уровне БД.
>
> **Уверенное владение TypeScript** — strict-режим, типизированные API-ответы, DTO, дискриминированные типы.
>
> **Работу с реальным состоянием** — TanStack Query, контексты, кросс-компонентная синхронизация `localStorage`.
>
> **Внимание к деталям** — скелетоны, тосты, микро-интеракции, подбор форматов изображений, scroll-to-top.
>
> **Самостоятельный деплой** — Railway с разделением клиент/сервер, корректный CORS, env-переменные.

<br/>

---

<div align="center">

### Лицензия

<sub>
Проект создан исключительно в <b>учебных и демонстрационных</b> целях.<br/>
Все торговые марки, логотипы, изображения автомобилей и видео принадлежат <b>Dr. Ing. h.c. F. Porsche AG</b>.
</sub>

<br/><br/>

<a href="https://porsche-website.up.railway.app/">
  <img src="https://img.shields.io/badge/▶_Открыть_демо-000000?style=for-the-badge&labelColor=000" alt="Demo" />
</a>

</div>
