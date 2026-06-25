# TEKNINEN DOKUMENTAATIO

## Luksia-verkkosivuston uudelleensuunnittelu (Frontend-projekti)

---

# 1. PROJEKTIN YLEISKUVAUS

## Projektin tarkoitus

Данный проект представляет собой учебный редизайн официального сайта Luksia, выполненный в рамках курса _Projektissa toimiminen_. Цель проекта заключалась в создании современной, адаптивной и удобной пользовательской версии сайта с использованием исключительно фронтенд-технологий без серверной части.

Проект включает три основные страницы:

1. **Etusivu** (Главная страница)
2. **Koulutushaku** (Поиск и просмотр образовательных программ)
3. **Uudelle opiskelijalle** (Информация для новых студентов)

Основной акцент был сделан на:

- улучшении пользовательского опыта (UX);
- современном визуальном оформлении;
- адаптивности интерфейса;
- доступности (Accessibility / WCAG);
- использовании семантической HTML-разметки;
- реализации интерактивных элементов на JavaScript.

## Käytetyt teknologiat

Проект разработан с использованием следующих технологий:

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts (Roboto)

Дополнительные библиотеки и фреймворки (Bootstrap, React, Vue и др.) не использовались.

---

# 2. TIEDOSTORAKENNE

## Projektin kansiorakenne

```text
Luksia-redesign/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── ammatit.css
│   ├── opiskelijalle.css
│   └── hero-img.png
│
├── javascript/
│   ├── main.js
│   └── koulutushaku.js
│
├── images/
│   ├── luksia-logo.png
│   ├── luksia-favicon.png
│   ├── magnifying glass.png
│   └── muut kuvat...
│
└── sivut/
    ├── ammatit.html
    ├── opiskelijalle.html
    └── favicon.ico
```

## Tiedostojen tarkoitus

### HTML

#### index.html

Главная страница сайта. Содержит основную информацию о Luksia, навигацию, информационные блоки и ссылки на другие страницы проекта.

#### ammatit.html

Страница поиска образовательных программ. Содержит интерактивную систему фильтрации учебных направлений.

#### opiskelijalle.html

Страница для новых студентов. Содержит полезную информацию, ссылки и рекомендации для начала обучения.

---

### CSS

#### style.css

Главный файл стилей проекта.

Содержит:

- CSS-переменные;
- глобальные стили;
- стили навигации;
- стили карточек;
- стили footer;
- анимации;
- адаптивные настройки.

#### ammatit.css

Специализированные стили страницы поиска программ обучения.

Содержит:

- сетку карточек программ;
- стили фильтров;
- адаптивную сетку курсов.

#### opiskelijalle.css

Дополнительные стили страницы новых студентов.

---

### JavaScript

#### main.js

Общий функционал сайта:

- мобильное меню;
- обработка прокрутки страницы;
- плавный скролл;
- dropdown-меню;
- анимация появления блоков;
- focus trap для доступности;
- оптимизация загрузки ссылок.

#### koulutushaku.js

Отдельный модуль фильтрации программ обучения.

Содержит:

- массив данных курсов;
- генерацию карточек;
- генерацию фильтров;
- обработку нажатий;
- динамическое обновление интерфейса.

---

# 3. HTML-RAKENNE JA SEMANTIIKKA

## HTML5-semanttiset elementit

Во всех страницах проекта используются современные семантические теги HTML5.

### Header

```html
<header></header>
```

Используется для верхней панели сайта.

Содержит:

- логотип;
- основную навигацию;
- поиск;
- мобильное меню.

---

### Nav

```html
<nav></nav>
```

Используется для меню навигации.

Применяется совместно с:

```html
aria-label="Päänavigointi"
```

что улучшает доступность для экранных дикторов.

---

### Main

```html
<main></main>
```

Содержит основное содержимое страницы.

Это помогает поисковым системам и технологиям чтения экрана понимать структуру документа.

---

### Section

```html
<section></section>
```

Используется для логического разделения контента.

Например:

- блок поиска программ;
- информационные секции;
- приветственные блоки.

---

### Footer

```html
<footer></footer>
```

Содержит контактную информацию и ссылки.

---

## Hakukoneoptimointi (SEO)

Использование семантических тегов помогает:

- улучшить индексацию страниц;
- повысить качество SEO;
- сделать структуру документа понятной поисковым системам.

---

# 4. CSS-ARKKITEHTUURI JA RESPONSIVISUUS

## CSS-arkkitehtuuri

Проект использует централизованную систему CSS-переменных.

### CSS Variables

В файле `style.css` определены:

```css
:root {
  --color-primary;
  --color-white;
  --font-size-base;
  --spacing-md;
}
```

Преимущества:

- единый дизайн;
- простота изменения темы;
- повторное использование значений.

---

## Flexbox

Основной способ построения интерфейса.

Примеры:

```css
display: flex;
justify-content: space-between;
align-items: center;
```

Используется для:

- навигации;
- карточек;
- footer;
- мобильного меню.

---

## CSS Grid

Для страницы Koulutushaku применяется Grid Layout.

```css
.courses-grid {
  display: grid;
}
```

Количество колонок изменяется в зависимости от ширины экрана.

---

# Responsiivisuus

## Desktop

Более 1024 px

```css
grid-template-columns: repeat(4, 1fr);
```

Отображаются 4 карточки в ряд.

---

## Tablet

До 1024 px

```css
grid-template-columns: repeat(3, 1fr);
```

Отображаются 3 карточки.

---

## Mobile

До 768 px

```css
grid-template-columns: repeat(2, 1fr);
```

Отображаются 2 карточки.

---

## Small Mobile

До 480 px

```css
grid-template-columns: 1fr;
```

Карточки располагаются в один столбец.

---

# 5. JAVASCRIPT-TOIMINNALLISUUS

## Yleinen rakenne

JavaScript разделён на два отдельных файла:

### main.js

Общий функционал сайта.

### koulutushaku.js

Функциональность поиска образовательных программ.

---

## Mobiilivalikko (Burger Menu)

### Открытие меню

Функция:

```javascript
toggleMobileMenu();
```

Выполняет:

```javascript
classList.toggle("active");
```

для:

- кнопки меню;
- навигационного блока.

Также изменяется:

```javascript
aria - expanded;
```

для поддержки доступности.

---

### Закрытие меню

Функция:

```javascript
closeMobileMenu();
```

Сбрасывает:

- active-классы;
- блокировку прокрутки страницы.

---

## Dropdown-valikko

При клике вне меню выполняется проверка:

```javascript
document.addEventListener("click");
```

Если пользователь нажал вне области меню:

```javascript
aria-hidden="true"
```

и список скрывается.

---

## Scroll-toiminnallisuus

Используется плавная прокрутка:

```javascript
window.scrollTo({
  behavior: "smooth",
});
```

Для внутренних якорных ссылок.

---

## Scroll-animaatiot

Используется современный API:

```javascript
IntersectionObserver;
```

Когда элемент появляется в зоне видимости:

```javascript
entry.target.classList.add("visible");
```

Запускается CSS-анимация.

---

## Focus Trap

Для мобильного меню реализована функция:

```javascript
trapFocus();
```

Она предотвращает выход фокуса клавиатуры за пределы открытого меню.

Это важное требование WCAG.

---

# Koulutushaku-sivun logiikka

## Tietorakenne

Все программы обучения хранятся в массиве:

```javascript
const coursesData = [];
```

Каждый объект содержит:

```javascript
{
  (id, title, categories, imageUrl, link, alt);
}
```

---

## Фильтры

Категории задаются массивом:

```javascript
const filterCategories = [];
```

Кнопки создаются автоматически через JavaScript.

---

## renderFilterButtons()

Функция:

```javascript
renderFilterButtons();
```

Создаёт кнопки фильтра динамически.

Для каждой кнопки добавляются:

```javascript
click;
keydown;
```

события.

---

## renderCourseCards()

Функция отображения карточек.

Использует:

```javascript
Array.filter();
```

для поиска совпадений по категориям.

Если выбран фильтр:

```javascript
"Tekniikan alat";
```

отображаются только соответствующие программы.

---

## handleFilterClick()

При выборе категории:

1. обновляется activeFilter;
2. меняются активные классы кнопок;
3. заново создаётся список карточек.

---

## Производительность

Карточки создаются только по необходимости.

Используется динамическая генерация DOM через:

```javascript
document.createElement();
```

что уменьшает объём HTML-кода.

---

# 6. SAAVUTETTAVUUS

Проект учитывает основные требования WCAG 2.1.

---

## Alt-tekstit

Все изображения имеют атрибут:

```html
alt=""
```

Например:

```html
alt="Luksia Logo"
```

---

## ARIA-attribuutit

Используются:

```html
aria-label aria-expanded aria-hidden aria-pressed
```

Примеры:

```html
aria-label="Hakukenttä"
```

```html
aria-expanded="false"
```

---

## Näppäimistökäyttö

Кнопки фильтра поддерживают:

```javascript
Enter;
Space;
```

через обработчик:

```javascript
keydown;
```

---

## Focus-tilat

Для интерактивных элементов используются:

```css
:focus;
```

Например:

```css
outline: 3px solid var(--color-primary);
```

что делает навигацию клавиатурой удобной и заметной.

---

## Touch Targets

Минимальный размер кликабельных элементов:

```css
--touch-target-min: 44px;
```

Соответствует рекомендациям WCAG.

---

# 7. YLLÄPITO JA JATKOKEHITYS

## Projektin käynnistäminen

Для запуска проекта локально необходимо:

1. Скачать проект.
2. Открыть папку проекта в Visual Studio Code.
3. Запустить расширение Live Server.

После запуска открыть:

```text
index.html
```

---

## Uuden koulutuksen lisääminen

Для добавления новой программы необходимо открыть:

```text
javascript/koulutushaku.js
```

и добавить объект в массив:

```javascript
coursesData;
```

Пример:

```javascript
{
    id: 13,
    title: "Uusi koulutus",
    categories: ["Tekniikan alat"],
    imageUrl: "...",
    link: "...",
    alt: "..."
}
```

После сохранения программа автоматически появится в интерфейсе.

---

## Uuden kategorian lisääminen

В массив:

```javascript
filterCategories;
```

необходимо добавить новый объект:

```javascript
{
    id: "Uusi kategoria",
    label: "Uusi kategoria"
}
```

Кнопка фильтра создастся автоматически.

---

## Uuden sivun lisääminen

1. Создать новый HTML-файл в папке:

```text
sivut/
```

2. Подключить:

```html
<link rel="stylesheet">
<script defer>
```

3. Добавить ссылку в навигацию.

---

## Mahdolliset jatkokehitysideat

Проект можно развивать следующим образом:

- подключить реальный API Luksia;
- реализовать полноценный поиск по ключевым словам;
- добавить избранные программы обучения;
- внедрить сохранение фильтров через LocalStorage;
- создать тёмную тему интерфейса;
- реализовать многоязычность (suomi / svenska / english).

---

## Yhteenveto

Проект демонстрирует уверенное владение современными технологиями фронтенд-разработки: HTML5, CSS3 и JavaScript. В коде используются семантическая разметка, адаптивный дизайн, динамическое создание интерфейса, а также элементы доступности согласно рекомендациям WCAG. Архитектура проекта остаётся простой для сопровождения и дальнейшего расширения.
