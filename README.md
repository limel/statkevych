![Banner](./banner.png)

# Gulp Starter Kit &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

Базовая Gulp-сборка для вёрстки.

- Собирает и оптимизирует `html`, `sass`, `js`, изображения и шрифты
- Использует `gulp-file-include` для работы с html-chunks
- Включает файлы настроек различных линтеров
- Все ошибки логируются в консоль
- Добавляет вендорные префиксы
- Совмещает и оптимизирует медиазапросы
- Есть режим разработки и сборки в продакшн
- Автоматический деплой на GitHub Pages

## Developing

### Prerequisites

Для корректной работы SASS-компилятора и других инструментов, необходимо один
раз глобально поставить дополнительные пакеты, выполнив в терминале следующие
команды. Пользователям MacOS ничего делать не нужно.

Пользователям **Windows**.

```shell
npm install --global windows-build-tools
```

Установить все зависимости.

```shell
npm install

затем набираем в терминале

npm i webp-converter@2.2.3 --save-exact
```

И запустить режим разработки.

<!-- ```shell -->

npm run dev

<!-- ``` -->

Во вкладке браузера перейти по адресу
http://localhost:3000](http://localhost:3000).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

## Configuration

- Все файлы стилей должны лежать в папке `src/scss` и импортироваться в
  `src/scss/style.scss`
- Изображения добавляйте в папку `src/img/`

Пример изображения в HTML, после того как файл `picture.png` был добавлен в
папку `src/img`.

```html
<img src="@img/picture.png" />
```

Пример изображения в CSS, после того как файл `picture.png` был добавлен в папку
`src/img`.

```css
.my-class {
  background-image: url("../img/picture.png");
}
```
