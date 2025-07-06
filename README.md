# Домашнє завдання — Фінальний проєкт

# «Генератор резюме з JSON‑опису»

## 🧠 Опис завдання

У цьому фінальному домашньому завданні реалізовано генератор резюме, який демонструє застосування **5 патернів проєктування**:

- **Facade**
- **Template Method**
- **Factory Method**
- **Composite**
- **Decorator**

Сторінка-резюме автоматично будується з єдиного джерела даних — файлу `resume.json`, який розміщено в директорії `public/` для коректної роботи у продакшен-збірці. Проєкти, що мають прапорець `"isRecent": true`, підсвічуються червоним. Усі стилі містяться у `styles.css`, сторонні бібліотеки не використовуються.

## 🧩 Реалізовані патерни

| Патерн           | Реалізація |
|------------------|------------|
| **Facade**       | `ResumePage.ts` — єдина точка запуску, яка інкапсулює ініціалізацію, завантаження JSON і побудову сторінки. |
| **Template Method** | `AbstractImporter.ts` — задає алгоритм імпорту: валідація → мапінг → рендер. `ResumeImporter.ts` реалізує конкретні кроки. |
| **Factory Method** | `BlockFactory.ts` — створює відповідний блок резюме (`HeaderBlock`, `SkillsBlock` тощо) залежно від типу. |
| **Composite**    | `ExperienceBlock.ts` — контейнер, який містить вкладені `ProjectBlock`. Проєкти рендеряться в циклі. |
| **Decorator**    | `HighlightDecorator.ts` — додає клас `.highlight` для проєктів з `isRecent: true`, не змінюючи `ProjectBlock`. |

## 🗂️ Структура проєкту

```
/
├── index.html                  # Статичний шаблон
├── public/
│   └── resume.json             # Джерело даних
├── vite.config.js              # Конфігурація Vite
├── tsconfig.json               # Конфігурація TypeScript
├── dist/                       # Продакшен-збірка (ігнорується в git)
├── src/
│   ├── styles.css              # CSS-стилі, включно з .highlight
│   ├── main.ts                 # Точка входу
│   ├── facade/
│   │   └── ResumePage.ts       # Facade
│   ├── importer/
│   │   ├── AbstractImporter.ts # Template Method
│   │   └── ResumeImporter.ts   # Реалізація шаблону
│   ├── blocks/                 # Компоненти резюме
│   │   ├── BlockFactory.ts     # Factory Method
│   │   ├── HeaderBlock.ts
│   │   ├── SummaryBlock.ts
│   │   ├── ExperienceBlock.ts  # Composite
│   │   ├── ProjectBlock.ts
│   │   ├── EducationBlock.ts
│   │   └── SkillsBlock.ts
│   ├── decorators/
│   │   └── HighlightDecorator.ts # Decorator
│   └── models/
│       └── ResumeModel.ts      # Типи моделі
```

## 🚀 Запуск проєкту

1. Встановити залежності:
   ```bash
   npm install
   ```

2. Запуск у режимі розробки:
   ```bash
   npm run dev
   ```

3. Збірка для продакшену:
   ```bash
   npm run build
   ```

4. Перегляд зібраного проєкту:
   ```bash
   npm run preview
   ```

## 💡 Технології

- **TypeScript** — статична типізація
- **Vite** — швидка збірка та дев-сервер
- **CSS** — стилі інтерфейсу
- **JSON** — структура даних
- **Патерни проектування** — модульна архітектура

---

🎯 Проєкт демонструє застосування патернів проектування для побудови масштабованого UI-рішення з єдиного джерела даних.
